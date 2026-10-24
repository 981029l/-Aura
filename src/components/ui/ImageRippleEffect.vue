<template>
  <div
    ref="containerRef"
    class="relative w-full h-[420px] sm:h-[520px] overflow-hidden rounded-3xl select-none group cursor-pointer border border-white/10 shadow-2xl bg-neutral-950"
    :class="className"
    @pointermove="handlePointerMove"
    @pointerleave="handlePointerLeave"
  >
    <!-- WebGL Liquid Refraction Canvas -->
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full block" />

    <!-- Overlay Glassmorphism Card Info -->
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent flex flex-col justify-between p-6 sm:p-8">
      <!-- Top Pill -->
      <div class="flex items-center justify-between">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-cyan-300">
          <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>WEBGL LIQUID DISPLACEMENT</span>
        </div>

        <span class="text-[11px] font-mono text-neutral-400 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/5">
          鼠标划过图片产生水波
        </span>
      </div>

      <!-- Bottom Headline -->
      <div class="max-w-md">
        <span class="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-1 block">
          OPTICAL DISPERSION
        </span>
        <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
          {{ title }}
        </h3>
        <p class="text-xs sm:text-sm text-neutral-300 mt-2 line-clamp-2">
          {{ description }}
        </p>
      </div>
    </div>

    <slot />
  </div>
</template>

<script lang="ts">
export const DEFAULT_RIPPLE_IMAGE = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85'
</script>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  image?: string
  title?: string
  description?: string
  distortionStrength?: number
  waveSize?: number
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  image: DEFAULT_RIPPLE_IMAGE,
  title: '水波效果',
  description: '鼠标划过图片时，经过的位置会产生水波纹。',
  distortionStrength: 0.08,
  waveSize: 64,
  className: '',
})

const containerRef = ref<HTMLDivElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)

interface Wave {
  x: number
  y: number
  radius: number
  maxRadius: number
  opacity: number
}

let waves: Wave[] = []
let gl: WebGLRenderingContext | null = null
let offscreenCanvas: HTMLCanvasElement | null = null
let offscreenCtx: CanvasRenderingContext2D | null = null
let displacementTexture: WebGLTexture | null = null
let imageTexture: WebGLTexture | null = null
let program: WebGLProgram | null = null
let frameId = 0
let resizeObserver: ResizeObserver | null = null

let lastMouseX = -9999
let lastMouseY = -9999

function handlePointerMove(e: PointerEvent) {
  if (!containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  const dist = Math.hypot(x - lastMouseX, y - lastMouseY)
  if (dist > 12) {
    waves.push({
      x,
      y,
      radius: 10,
      maxRadius: props.waveSize * 1.8,
      opacity: 1.0,
    })
    lastMouseX = x
    lastMouseY = y

    if (waves.length > 40) {
      waves.shift()
    }
  }
}

function handlePointerLeave() {
  lastMouseX = -9999
  lastMouseY = -9999
}

const vertexShaderSource = `
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const fragmentShaderSource = `
precision highp float;
uniform sampler2D uImage;
uniform sampler2D uDisplacement;
uniform float uStrength;
varying vec2 vUv;

void main() {
  vec2 uv = vec2(vUv.x, 1.0 - vUv.y);
  vec4 disp = texture2D(uDisplacement, uv);
  float theta = disp.r * 6.2831853;
  vec2 dir = vec2(sin(theta), cos(theta));
  vec2 distortedUv = uv + dir * disp.r * uStrength;

  // Chromatic dispersion for liquid realism
  vec4 rCol = texture2D(uImage, distortedUv + dir * 0.004);
  vec4 gCol = texture2D(uImage, distortedUv);
  vec4 bCol = texture2D(uImage, distortedUv - dir * 0.004);

  vec4 finalColor = vec4(rCol.r, gCol.g, bCol.b, 1.0);
  finalColor += disp.r * 0.12; // Specular wave crest highlight
  gl_FragColor = finalColor;
}
`

function initWebGL() {
  const canvas = canvasRef.value
  const container = containerRef.value
  if (!canvas || !container) return

  gl = canvas.getContext('webgl')
  if (!gl) return

  offscreenCanvas = document.createElement('canvas')
  offscreenCtx = offscreenCanvas.getContext('2d')

  const vs = gl.createShader(gl.VERTEX_SHADER)!
  gl.shaderSource(vs, vertexShaderSource)
  gl.compileShader(vs)

  const fs = gl.createShader(gl.FRAGMENT_SHADER)!
  gl.shaderSource(fs, fragmentShaderSource)
  gl.compileShader(fs)

  program = gl.createProgram()!
  gl.attachShader(program, vs)
  gl.attachShader(program, fs)
  gl.linkProgram(program)
  gl.useProgram(program)

  const buffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
    gl.STATIC_DRAW
  )

  const pos = gl.getAttribLocation(program, 'position')
  gl.enableVertexAttribArray(pos)
  gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0)

  // Load Main Image Texture
  const img = new Image()
  img.crossOrigin = 'anonymous'
  img.src = props.image
  img.onload = () => {
    if (!gl) return
    imageTexture = gl.createTexture()
    gl.activeTexture(gl.TEXTURE0)
    gl.bindTexture(gl.TEXTURE_2D, imageTexture)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img)

    const uImage = gl.getUniformLocation(program!, 'uImage')
    gl.uniform1i(uImage, 0)
  }

  // Displacement Texture
  displacementTexture = gl.createTexture()
  gl.activeTexture(gl.TEXTURE1)
  gl.bindTexture(gl.TEXTURE_2D, displacementTexture)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)

  const uDisplacement = gl.getUniformLocation(program, 'uDisplacement')
  gl.uniform1i(uDisplacement, 1)

  const uStrength = gl.getUniformLocation(program, 'uStrength')
  gl.uniform1f(uStrength, props.distortionStrength)

  const resize = () => {
    if (!canvas || !container || !gl) return
    const rect = container.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.floor(rect.width * dpr)
    canvas.height = Math.floor(rect.height * dpr)
    gl.viewport(0, 0, canvas.width, canvas.height)

    if (offscreenCanvas) {
      offscreenCanvas.width = Math.max(1, Math.floor(rect.width * 0.5))
      offscreenCanvas.height = Math.max(1, Math.floor(rect.height * 0.5))
    }
  }

  resize()
  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(container)

  // Render Loop
  const render = () => {
    if (!gl || !offscreenCanvas || !offscreenCtx) return

    // 1. Draw ripples on offscreen canvas
    const oW = offscreenCanvas.width
    const oH = offscreenCanvas.height
    const scaleX = oW / (container.clientWidth || 1)
    const scaleY = oH / (container.clientHeight || 1)

    offscreenCtx.fillStyle = '#000000'
    offscreenCtx.fillRect(0, 0, oW, oH)

    for (let i = waves.length - 1; i >= 0; i--) {
      const w = waves[i]!
      w.radius += 2.5
      w.opacity *= 0.96

      if (w.opacity <= 0.02 || w.radius >= w.maxRadius) {
        waves.splice(i, 1)
        continue
      }

      const grad = offscreenCtx.createRadialGradient(
        w.x * scaleX,
        w.y * scaleY,
        0,
        w.x * scaleX,
        w.y * scaleY,
        w.radius * scaleX
      )
      grad.addColorStop(0, `rgba(255, 255, 255, ${w.opacity})`)
      grad.addColorStop(0.6, `rgba(180, 180, 180, ${w.opacity * 0.6})`)
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)')

      offscreenCtx.fillStyle = grad
      offscreenCtx.beginPath()
      offscreenCtx.arc(w.x * scaleX, w.y * scaleY, w.radius * scaleX, 0, Math.PI * 2)
      offscreenCtx.fill()
    }

    // 2. Upload offscreen canvas to WebGL texture
    gl.activeTexture(gl.TEXTURE1)
    gl.bindTexture(gl.TEXTURE_2D, displacementTexture)
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      offscreenCanvas
    )

    // 3. Draw WebGL Quad
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    frameId = requestAnimationFrame(render)
  }

  frameId = requestAnimationFrame(render)
}

onMounted(() => {
  initWebGL()
})

onUnmounted(() => {
  cancelAnimationFrame(frameId)
  if (resizeObserver) resizeObserver.disconnect()
})
</script>
