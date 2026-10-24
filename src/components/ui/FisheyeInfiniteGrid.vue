<template>
  <div
    ref="rootRef"
    class="relative w-full h-[520px] overflow-hidden bg-[#09090b] cursor-grab active:cursor-grabbing select-none rounded-2xl border border-white/10 shadow-2xl"
    :class="className"
    @pointerdown="handlePointerDown"
    @pointermove="handlePointerMove"
    @pointerup="handlePointerUp"
    @pointercancel="handlePointerUp"
    @wheel.prevent="handleWheel"
  >
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full block" />
    
    <div class="pointer-events-none absolute bottom-4 right-4 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-3.5 py-1.5 text-xs text-white/90 backdrop-blur-md shadow-lg">
      <span class="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
      <span class="font-medium tracking-wide">Drag or Scroll to Explore</span>
    </div>
  </div>
</template>

<script lang="ts">
export interface FisheyeItem {
  title: string
  meta: string
  color: string
}

export const DEFAULT_ITEMS: FisheyeItem[] = [
  { title: '极光流体', meta: '01 / FLUID SHADER', color: '#38bdf8' },
  { title: '空间网格', meta: '02 / PERSPECTIVE GRID', color: '#818cf8' },
  { title: '触觉反馈', meta: '03 / TACTILE ACTION', color: '#f43f5e' },
  { title: '粒子力场', meta: '04 / VECTOR REPEL', color: '#fb923c' },
  { title: '全息防伪', meta: '05 / HOLOGRAM BADGE', color: '#f59e0b' },
  { title: '拟物机械', meta: '06 / FLIP DISPLAY', color: '#10b981' },
  { title: '动态排版', meta: '07 / KINETIC TYPE', color: '#06b6d4' },
  { title: '深度视差', meta: '08 / 3D PARALLAX', color: '#a855f7' },
  { title: '智能协同', meta: '09 / AGENT WORKFLOW', color: '#ec4899' },
]
</script>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  items?: FisheyeItem[]
  tileWidth?: number
  tileHeight?: number
  lensStrength?: number
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  items: () => DEFAULT_ITEMS,
  tileWidth: 260,
  tileHeight: 300,
  lensStrength: 0.4,
  className: '',
})

const rootRef = ref<HTMLDivElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)

let gl: WebGLRenderingContext | WebGL2RenderingContext | null = null
let frameId = 0
let resizeObserver: ResizeObserver | null = null

// Initial drift offset so it is dynamic immediately
const pos = ref({ x: 120, y: 80 })
const vel = ref({ x: 0.4, y: 0.25 })
let isDragging = false
let lastDrag = { x: 0, y: 0 }

function handlePointerDown(e: PointerEvent) {
  isDragging = true
  lastDrag = { x: e.clientX, y: e.clientY }
  vel.value = { x: 0, y: 0 }
}

function handlePointerMove(e: PointerEvent) {
  if (!isDragging) return
  const dx = e.clientX - lastDrag.x
  const dy = e.clientY - lastDrag.y
  pos.value.x += dx
  pos.value.y += dy
  vel.value = { x: dx, y: dy }
  lastDrag = { x: e.clientX, y: e.clientY }
}

function handlePointerUp() {
  isDragging = false
}

function handleWheel(e: WheelEvent) {
  pos.value.x -= e.deltaX * 0.7
  pos.value.y -= e.deltaY * 0.7
  vel.value.x = -e.deltaX * 0.2
  vel.value.y = -e.deltaY * 0.2
}

const VERTEX_SHADER = `
  attribute vec2 a_position;
  varying vec2 v_uv;
  void main() {
    v_uv = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`

const FRAGMENT_SHADER = `
  precision highp float;
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;
  uniform vec2 u_atlas_size;
  uniform vec2 u_offset;
  uniform float u_curvature;
  varying vec2 v_uv;

  void main() {
    vec2 res = max(u_resolution, vec2(100.0, 100.0));
    vec2 atlas = max(u_atlas_size, vec2(100.0, 100.0));
    float aspect = max(res.x / max(res.y, 1.0), 0.1);

    vec2 centered = v_uv * 2.0 - 1.0;
    vec2 lens = vec2(centered.x * aspect, centered.y);
    float radius = dot(lens, lens) / (aspect * aspect + 1.0);
    float curve = u_curvature * (0.35 * radius + 0.15 * radius * radius);
    vec2 warped = lens / (1.0 + curve);
    vec2 warped_uv = vec2(warped.x / aspect, warped.y) * 0.5 + 0.5;

    vec2 world = vec2(
      warped_uv.x * res.x - u_offset.x,
      (1.0 - warped_uv.y) * res.y - u_offset.y
    );

    vec2 atlas_uv = fract(world / atlas);
    atlas_uv = clamp(atlas_uv, vec2(0.001), vec2(0.999));

    vec4 color = texture2D(u_texture, vec2(atlas_uv.x, 1.0 - atlas_uv.y));
    float edgeShade = clamp(radius * u_curvature * 0.2, 0.0, 0.4);
    color.rgb *= (1.0 - edgeShade);
    gl_FragColor = vec4(color.rgb, 1.0);
  }
`

function drawCardRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  if (typeof ctx.roundRect === 'function') {
    ctx.beginPath()
    ctx.roundRect(x, y, w, h, r)
  } else {
    ctx.beginPath()
    ctx.rect(x, y, w, h)
  }
}

// Build a crisp 1024x1024 power-of-two atlas texture
function buildAtlas(): HTMLCanvasElement {
  const atlas = document.createElement('canvas')
  atlas.width = 1024
  atlas.height = 1024
  const ctx = atlas.getContext('2d')
  if (!ctx) return atlas

  // Background grid surface
  ctx.fillStyle = '#0c0d12'
  ctx.fillRect(0, 0, 1024, 1024)

  const items = (props.items && props.items.length) ? props.items : DEFAULT_ITEMS
  const cols = 3
  const rows = 3
  const tw = 1024 / cols // ~341.3px
  const th = 1024 / rows // ~341.3px

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const idx = (r * cols + c) % items.length
      const item = items[idx]!
      const x = c * tw
      const y = r * th
      const pad = 12
      const cardW = tw - pad * 2
      const cardH = th - pad * 2

      // Card container
      ctx.fillStyle = '#14161f'
      drawCardRect(ctx, x + pad, y + pad, cardW, cardH, 20)
      ctx.fill()

      // Gradient art banner inside card
      const grad = ctx.createLinearGradient(x + pad, y + pad, x + pad + cardW, y + pad + cardH * 0.6)
      grad.addColorStop(0, `${item.color}55`)
      grad.addColorStop(0.5, `${item.color}22`)
      grad.addColorStop(1, '#0c0d12')
      ctx.fillStyle = grad
      drawCardRect(ctx, x + pad + 8, y + pad + 8, cardW - 16, cardH * 0.6, 14)
      ctx.fill()

      // Card glowing symbol circle
      ctx.fillStyle = `${item.color}44`
      ctx.beginPath()
      ctx.arc(x + tw / 2, y + pad + cardH * 0.3, 38, 0, Math.PI * 2)
      ctx.fill()
      ctx.strokeStyle = item.color
      ctx.lineWidth = 2
      ctx.stroke()

      // Inner glowing core
      ctx.fillStyle = '#ffffff'
      ctx.beginPath()
      ctx.arc(x + tw / 2, y + pad + cardH * 0.3, 10, 0, Math.PI * 2)
      ctx.fill()

      // Card Titles & Metadata
      ctx.fillStyle = '#f8fafc'
      ctx.font = 'bold 20px system-ui, sans-serif'
      ctx.fillText(item.title, x + pad + 18, y + cardH - 32)

      ctx.fillStyle = item.color
      ctx.font = 'bold 13px ui-monospace, monospace'
      ctx.fillText(item.meta, x + pad + 18, y + cardH - 12)

      // Card edge border
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)'
      ctx.lineWidth = 1.5
      drawCardRect(ctx, x + pad, y + pad, cardW, cardH, 20)
      ctx.stroke()
    }
  }

  return atlas
}

function initFisheye() {
  const canvas = canvasRef.value
  if (!canvas) return

  // Try WebGL2 first, then standard WebGL
  gl = (canvas.getContext('webgl2') ||
    canvas.getContext('webgl') ||
    canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null

  if (!gl) {
    console.warn('WebGL not supported, falling back to 2D canvas')
    init2DFallback()
    return
  }

  const vs = gl.createShader(gl.VERTEX_SHADER)!
  gl.shaderSource(vs, VERTEX_SHADER)
  gl.compileShader(vs)

  const fs = gl.createShader(gl.FRAGMENT_SHADER)!
  gl.shaderSource(fs, FRAGMENT_SHADER)
  gl.compileShader(fs)

  const prog = gl.createProgram()!
  gl.attachShader(prog, vs)
  gl.attachShader(prog, fs)
  gl.linkProgram(prog)
  gl.useProgram(prog)

  const buf = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buf)
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
    gl.STATIC_DRAW
  )

  const posLoc = gl.getAttribLocation(prog, 'a_position')
  gl.enableVertexAttribArray(posLoc)
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)

  // Setup Texture
  const atlasCanvas = buildAtlas()
  const texture = gl.createTexture()
  gl.activeTexture(gl.TEXTURE0)
  gl.bindTexture(gl.TEXTURE_2D, texture)
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, atlasCanvas)

  // Safe parameters for full hardware compatibility
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)

  const uRes = gl.getUniformLocation(prog, 'u_resolution')
  const uAtlas = gl.getUniformLocation(prog, 'u_atlas_size')
  const uOffset = gl.getUniformLocation(prog, 'u_offset')
  const uCurve = gl.getUniformLocation(prog, 'u_curvature')
  const uTexture = gl.getUniformLocation(prog, 'u_texture')

  const resize = () => {
    if (!canvas || !gl) return
    const rect = canvas.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const w = Math.floor(Math.max(rect.width, 300) * dpr)
    const h = Math.floor(Math.max(rect.height, 300) * dpr)
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w
      canvas.height = h
    }
  }

  resize()
  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(canvas)

  const render = () => {
    if (!gl || !canvas) return

    // Physics dampening
    if (!isDragging) {
      pos.value.x += vel.value.x
      pos.value.y += vel.value.y
      vel.value.x *= 0.96
      vel.value.y *= 0.96

      // Tiny ambient drift if stopped
      if (Math.abs(vel.value.x) < 0.05 && Math.abs(vel.value.y) < 0.05) {
        pos.value.x += 0.25
        pos.value.y += 0.15
      }
    }

    gl.viewport(0, 0, canvas.width, canvas.height)
    gl.useProgram(prog)

    gl.activeTexture(gl.TEXTURE0)
    gl.bindTexture(gl.TEXTURE_2D, texture)
    if (uTexture) gl.uniform1i(uTexture, 0)

    if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height)
    if (uAtlas) gl.uniform2f(uAtlas, atlasCanvas.width, atlasCanvas.height)
    if (uOffset) gl.uniform2f(uOffset, pos.value.x, pos.value.y)
    if (uCurve) gl.uniform1f(uCurve, props.lensStrength)

    gl.drawArrays(gl.TRIANGLES, 0, 6)
    frameId = requestAnimationFrame(render)
  }

  frameId = requestAnimationFrame(render)
}

function init2DFallback() {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const atlasCanvas = buildAtlas()

  const render2D = () => {
    if (!ctx || !canvas) return

    if (!isDragging) {
      pos.value.x += vel.value.x
      pos.value.y += vel.value.y
      vel.value.x *= 0.96
      vel.value.y *= 0.96
    }

    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width
    canvas.height = rect.height

    const ptrn = ctx.createPattern(atlasCanvas, 'repeat')
    if (ptrn) {
      ctx.save()
      ctx.translate(pos.value.x % 1024, pos.value.y % 1024)
      ctx.fillStyle = ptrn
      ctx.fillRect(-1024, -1024, canvas.width + 2048, canvas.height + 2048)
      ctx.restore()
    }

    frameId = requestAnimationFrame(render2D)
  }

  frameId = requestAnimationFrame(render2D)
}

onMounted(() => {
  initFisheye()
})

onUnmounted(() => {
  cancelAnimationFrame(frameId)
  if (resizeObserver) resizeObserver.disconnect()
})
</script>
