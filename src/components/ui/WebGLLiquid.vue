<template>
  <div
    ref="containerRef"
    class="relative w-full h-full min-h-[350px] overflow-hidden rounded-2xl bg-[#04050b] text-white select-none cursor-crosshair group"
    :class="className"
    @pointermove="handlePointerMove"
    @pointerleave="handlePointerLeave"
    @pointerdown="handlePointerDown"
  >
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full block pointer-events-none" />
    <div class="relative z-10 w-full h-full flex flex-col justify-center p-8 md:p-12 pointer-events-none">
      <div v-if="subtitle" class="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-400">
        {{ subtitle }}
      </div>
      <h2 v-if="title" class="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
        {{ title }}
      </h2>
      <p v-if="description" class="text-sm md:text-base text-neutral-300 max-w-xl leading-relaxed">
        {{ description }}
      </p>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  title?: string
  subtitle?: string
  description?: string
  colorDeep?: string
  colorMid?: string
  colorHighlight?: string
  speed?: number
  flowStrength?: number
  grain?: number
  contrast?: number
  opacity?: number
  interactive?: boolean
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  subtitle: '',
  description: '',
  colorDeep: '#04050b',
  colorMid: '#134d93',
  colorHighlight: '#8cecff',
  speed: 1,
  flowStrength: 1,
  grain: 0.05,
  contrast: 1.1,
  opacity: 0.95,
  interactive: true,
  className: '',
})

const containerRef = ref<HTMLDivElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)

let gl: WebGLRenderingContext | null = null
let frameId = 0
let resizeObserver: ResizeObserver | null = null

const mouse = ref<[number, number]>([0.5, 0.5])
const targetMouse = ref<[number, number]>([0.5, 0.5])
const mouseActive = ref(0)
const targetMouseActive = ref(0)

function handlePointerMove(e: PointerEvent) {
  if (!props.interactive || !containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  targetMouse.value = [
    (e.clientX - rect.left) / Math.max(rect.width, 1),
    1.0 - (e.clientY - rect.top) / Math.max(rect.height, 1),
  ]
  targetMouseActive.value = 1
}

function handlePointerDown(e: PointerEvent) {
  handlePointerMove(e)
}

function handlePointerLeave() {
  targetMouseActive.value = 0
}

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '')
  return [
    (parseInt(clean.slice(0, 2), 16) || 0) / 255,
    (parseInt(clean.slice(2, 4), 16) || 0) / 255,
    (parseInt(clean.slice(4, 6), 16) || 0) / 255,
  ]
}

const VERTEX_SHADER = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const FRAGMENT_SHADER = `
precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_mouseActive;
uniform vec3 u_colorDeep;
uniform vec3 u_colorMid;
uniform vec3 u_colorHighlight;
uniform float u_speed;
uniform float u_flowStrength;
uniform float u_grain;
uniform float u_contrast;
uniform float u_opacity;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 rot = mat2(0.86, 0.51, -0.51, 0.86);
  for (int i = 0; i < 6; i++) {
    v += a * noise(p);
    p = rot * p * 2.0;
    a *= 0.5;
  }
  return v;
}

vec3 applyContrast(vec3 c, float contrast) {
  return clamp((c - 0.5) * contrast + 0.5, 0.0, 1.0);
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  float t = u_time * (0.14 * u_speed);
  vec2 aspect = vec2(u_res.x / max(u_res.y, 1.0), 1.0);
  vec2 p = (uv - 0.5) * aspect;

  // 鼠标交互流体物理波纹
  vec2 mouseP = (u_mouse - 0.5) * aspect;
  float dMouse = length(p - mouseP);
  float ripple = sin(dMouse * 24.0 - u_time * 5.0) * exp(-dMouse * 3.8) * 0.09 * u_flowStrength * u_mouseActive;
  vec2 mouseDistort = normalize(p - mouseP + vec2(1e-4)) * ripple;
  p += mouseDistort;

  vec2 flowP = vec2(p.x * 1.1, p.y - t * 0.35);
  float n1 = fbm(flowP * 2.8 + vec2(0.0, t * 0.2));
  float n2 = fbm((flowP + n1 * 0.45) * 4.0 - vec2(0.0, t * 0.35));
  float n3 = fbm((flowP + n2 * 0.4) * 6.5 + vec2(t * 0.15, 0.0));

  float structure = n3 * 1.15 + (n2 - 0.5) * 0.5;
  structure += (n1 - 0.5) * 0.3 * u_flowStrength;
  structure += exp(-dMouse * 3.6) * 0.45 * u_flowStrength * u_mouseActive;

  float lowBand = smoothstep(0.18, 0.6, structure);
  float highBand = smoothstep(0.62, 1.08, structure);
  vec3 col = mix(u_colorDeep, u_colorMid, lowBand);
  col = mix(col, u_colorHighlight, highBand);

  float glow = smoothstep(0.52, 0.95, structure) * (0.35 + 0.5 * u_flowStrength);
  col += glow * u_colorHighlight * 0.35;

  float verticalMask = smoothstep(1.05, 0.05, uv.y);
  verticalMask = pow(verticalMask, 1.1);

  float vignette = smoothstep(1.28, 0.36, length(uv - 0.5));
  col *= mix(0.9, 1.05, vignette);
  col = applyContrast(col, u_contrast);

  float dither = (hash(gl_FragCoord.xy + t * 10.0) - 0.5) * u_grain;
  col += dither;

  float alpha = verticalMask * smoothstep(0.08, 0.95, structure) * u_opacity;

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), clamp(alpha, 0.0, 1.0));
}
`

function initShader() {
  const canvas = canvasRef.value
  if (!canvas) return

  gl = canvas.getContext('webgl', { alpha: true })
  if (!gl) return

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
    new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
    gl.STATIC_DRAW
  )

  const pos = gl.getAttribLocation(prog, 'position')
  gl.enableVertexAttribArray(pos)
  gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0)

  const uRes = gl.getUniformLocation(prog, 'u_res')
  const uTime = gl.getUniformLocation(prog, 'u_time')
  const uMouse = gl.getUniformLocation(prog, 'u_mouse')
  const uMouseActive = gl.getUniformLocation(prog, 'u_mouseActive')
  const uSpeed = gl.getUniformLocation(prog, 'u_speed')
  const uStrength = gl.getUniformLocation(prog, 'u_flowStrength')
  const uGrain = gl.getUniformLocation(prog, 'u_grain')
  const uContrast = gl.getUniformLocation(prog, 'u_contrast')
  const uOpacity = gl.getUniformLocation(prog, 'u_opacity')
  const uDeep = gl.getUniformLocation(prog, 'u_colorDeep')
  const uMid = gl.getUniformLocation(prog, 'u_colorMid')
  const uHigh = gl.getUniformLocation(prog, 'u_colorHighlight')

  const resize = () => {
    if (!canvas || !gl) return
    const rect = canvas.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.floor(rect.width * dpr)
    canvas.height = Math.floor(rect.height * dpr)
    gl.viewport(0, 0, canvas.width, canvas.height)
    gl.uniform2f(uRes, canvas.width, canvas.height)
  }

  resize()
  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(canvas)

  const startTime = performance.now()

  const render = (now: number) => {
    if (!gl) return

    mouse.value[0] += (targetMouse.value[0] - mouse.value[0]) * 0.08
    mouse.value[1] += (targetMouse.value[1] - mouse.value[1]) * 0.08
    mouseActive.value += (targetMouseActive.value - mouseActive.value) * 0.06

    const elapsed = (now - startTime) * 0.001
    gl.uniform1f(uTime, elapsed)
    gl.uniform2f(uMouse, mouse.value[0], mouse.value[1])
    gl.uniform1f(uMouseActive, mouseActive.value)
    gl.uniform1f(uSpeed, props.speed)
    gl.uniform1f(uStrength, props.flowStrength)
    gl.uniform1f(uGrain, props.grain)
    gl.uniform1f(uContrast, props.contrast)
    gl.uniform1f(uOpacity, props.opacity)

    const d = hexToRgb(props.colorDeep)
    const m = hexToRgb(props.colorMid)
    const h = hexToRgb(props.colorHighlight)
    gl.uniform3f(uDeep, d[0], d[1], d[2])
    gl.uniform3f(uMid, m[0], m[1], m[2])
    gl.uniform3f(uHigh, h[0], h[1], h[2])

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    frameId = requestAnimationFrame(render)
  }

  frameId = requestAnimationFrame(render)
}

onMounted(() => {
  initShader()
})

onUnmounted(() => {
  cancelAnimationFrame(frameId)
  if (resizeObserver) resizeObserver.disconnect()
})
</script>
