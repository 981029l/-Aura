<template>
  <div
    ref="containerRef"
    class="relative w-full min-h-[460px] overflow-hidden rounded-3xl flex flex-col justify-center p-8 md:p-14 select-none transition-colors duration-500 border"
    :class="[
      isDark
        ? 'bg-neutral-950 border-white/10 text-white'
        : 'bg-slate-50/90 border-slate-200/80 text-slate-900 shadow-xl',
      className
    ]"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <!-- WebGL Canvas Backdrop (Dynamic Prismatic Dither Shader) -->
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full block pointer-events-none" />

    <!-- Ambient Subtle Glow Orbs -->
    <div
      class="pointer-events-none absolute -top-12 -right-12 w-80 h-80 rounded-full blur-3xl transition-opacity duration-500"
      :class="isDark ? 'bg-cyan-500/20 opacity-80' : 'bg-cyan-400/25 opacity-60'"
    />
    <div
      class="pointer-events-none absolute -bottom-12 -left-12 w-80 h-80 rounded-full blur-3xl transition-opacity duration-500"
      :class="isDark ? 'bg-fuchsia-500/20 opacity-80' : 'bg-pink-400/25 opacity-60'"
    />

    <!-- Hero Content -->
    <div class="relative z-10 max-w-2xl">
      <!-- Badge Indicator -->
      <div
        class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono font-medium mb-6 backdrop-blur-md transition-colors duration-300"
        :class="isDark
          ? 'border-white/10 bg-white/5 text-cyan-400'
          : 'border-cyan-500/30 bg-white/80 text-cyan-700 shadow-sm'"
      >
        <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>Dithered Prismatic Dispersion</span>
      </div>

      <!-- Main Headline -->
      <h1 class="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 drop-shadow-sm">
        <span :class="isDark ? 'text-white' : 'text-slate-900'">{{ title }}</span>
        <span
          class="block bg-gradient-to-r bg-clip-text text-transparent font-extrabold"
          :class="isDark
            ? 'from-cyan-400 via-pink-400 to-indigo-400'
            : 'from-cyan-600 via-fuchsia-600 to-indigo-600'"
        >
          {{ subtitle }}
        </span>
      </h1>

      <!-- Description -->
      <p
        class="text-sm md:text-base max-w-lg leading-relaxed mb-6 font-normal transition-colors duration-300"
        :class="isDark ? 'text-neutral-300' : 'text-slate-600'"
      >
        {{ description }}
      </p>

      <slot />

      <!-- Interactive Status Pill -->
      <div class="mt-4 flex items-center gap-3 text-xs font-mono">
        <span
          class="px-2.5 py-1 rounded-lg border backdrop-blur-md transition-colors"
          :class="isDark
            ? 'border-white/10 bg-black/40 text-neutral-400'
            : 'border-slate-200 bg-white/70 text-slate-500 shadow-sm'"
        >
          ✦ 4×4 Bayer Dither Matrix &amp; Prism Split
        </span>
        <span :class="isDark ? 'text-neutral-500' : 'text-slate-400'">
          {{ isDark ? '深色背景' : '浅色背景' }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  title?: string
  subtitle?: string
  description?: string
  speed?: number
  ditherScale?: number
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Next-Gen Aesthetics',
  subtitle: 'Prismatic Dithering',
  description: 'An interactive Bayer-matrix dither shader featuring chromatic dispersion, holographic iridescence, and reactive ripple dynamics.',
  speed: 1,
  ditherScale: 3.0,
  className: '',
})

const containerRef = ref<HTMLDivElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
const isDark = ref(true)

let gl: WebGLRenderingContext | null = null
let frameId = 0
let resizeObserver: ResizeObserver | null = null
let themeObserver: MutationObserver | null = null

const mouse = ref<[number, number]>([0.5, 0.5])
const targetMouse = ref<[number, number]>([0.5, 0.5])

function checkTheme() {
  if (typeof document === 'undefined') return
  const htmlHasDark = document.documentElement.classList.contains('dark')
  const bodyHasDark = document.body.classList.contains('dark')
  const containerHasDark = Boolean(containerRef.value?.closest('.dark'))
  isDark.value = htmlHasDark || bodyHasDark || containerHasDark
}

function handleMouseMove(e: MouseEvent) {
  if (!containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  targetMouse.value = [
    (e.clientX - rect.left) / rect.width,
    1.0 - (e.clientY - rect.top) / rect.height,
  ]
}

function handleMouseLeave() {
  targetMouse.value = [0.5, 0.5]
}

const vertexShader = `
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}
`

// 100% GLSL ES 1.0 Safe Bayer Matrix & Chromatic Dispersion Shader
const fragmentShader = `
precision highp float;
uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;
uniform float uIsDark;
uniform float uDitherScale;
varying vec2 vUv;

// Safe 4x4 Bayer Dither Matrix without dynamic array indexing (WebGL 1.0 compatible)
float bayer4(vec2 p) {
  vec2 b = mod(floor(p), 4.0);
  float x = b.x;
  float y = b.y;
  if (y < 1.0) {
    if (x < 1.0) return 0.0 / 16.0;
    if (x < 2.0) return 8.0 / 16.0;
    if (x < 3.0) return 2.0 / 16.0;
    return 10.0 / 16.0;
  }
  if (y < 2.0) {
    if (x < 1.0) return 12.0 / 16.0;
    if (x < 2.0) return 4.0 / 16.0;
    if (x < 3.0) return 14.0 / 16.0;
    return 6.0 / 16.0;
  }
  if (y < 3.0) {
    if (x < 1.0) return 3.0 / 16.0;
    if (x < 2.0) return 11.0 / 16.0;
    if (x < 3.0) return 1.0 / 16.0;
    return 9.0 / 16.0;
  }
  if (x < 1.0) return 15.0 / 16.0;
  if (x < 2.0) return 7.0 / 16.0;
  if (x < 3.0) return 13.0 / 16.0;
  return 5.0 / 16.0;
}

// Wave pattern for chromatic spectrum
float sampleWave(vec2 p, float t) {
  float w1 = sin(p.x * 3.8 + t * 0.75) * 0.5 + 0.5;
  float w2 = cos(p.y * 3.2 - t * 0.6) * 0.5 + 0.5;
  float w3 = sin((p.x + p.y) * 2.8 + t * 1.1) * 0.5 + 0.5;
  return (w1 * 0.4 + w2 * 0.4 + w3 * 0.2);
}

void main() {
  vec2 uv = vUv;
  float t = uTime * 0.5;

  // Mouse fluid ripple distortion
  vec2 delta = uv - uMouse;
  float dist = length(delta);
  float ripple = sin(dist * 22.0 - t * 3.5) * exp(-dist * 3.8) * 0.045;
  vec2 warpedUv = uv + normalize(delta + 0.001) * ripple;

  // Prismatic Chromatic Dispersion (RGB Channel Separation)
  vec2 prismOffset = vec2(0.016, 0.010);
  float rVal = sampleWave(warpedUv + prismOffset, t);
  float gVal = sampleWave(warpedUv, t);
  float bVal = sampleWave(warpedUv - prismOffset, t);

  vec3 col;
  if (uIsDark > 0.5) {
    // DARK MODE PALETTE: Deep Obsidian, Iridescent Cyan, Neon Fuchsia
    vec3 baseCol = vec3(0.02, 0.03, 0.07);
    vec3 cyanCol = vec3(0.02, 0.72, 0.95);
    vec3 pinkCol = vec3(0.92, 0.22, 0.65);

    vec3 waveCol = mix(cyanCol, pinkCol, bVal);
    col = mix(baseCol, waveCol, smoothstep(0.15, 0.85, (rVal + gVal) * 0.5));

    // Mouse focal glow
    float glow = exp(-dist * 5.5) * 0.45;
    col += vec3(0.3, 0.8, 1.0) * glow;
  } else {
    // LIGHT MODE PALETTE: Luminous Pearl, Soft Sky Cyan, Holographic Rose Lavender
    vec3 baseCol = vec3(0.96, 0.97, 0.99);
    vec3 cyanCol = vec3(0.25, 0.75, 0.95);
    vec3 pinkCol = vec3(0.95, 0.42, 0.75);

    vec3 waveCol = mix(cyanCol, pinkCol, bVal);
    col = mix(baseCol, waveCol, smoothstep(0.15, 0.85, (rVal + gVal) * 0.45) * 0.65);

    // Mouse focal glow in light mode
    float glow = exp(-dist * 5.0) * 0.25;
    col = mix(col, vec3(0.2, 0.8, 0.95), glow);
  }

  // True Bayer Matrix Ordered Dithering
  // Scale coordinate so dither dots form tactile, visible retro-tech matrix blocks
  vec2 ditherCoord = gl_FragCoord.xy / max(1.0, uDitherScale);
  float ditherNoise = (bayer4(ditherCoord) - 0.5);

  // Quantization steps: crisper color bands with dither crosshatching
  float steps = uIsDark > 0.5 ? 14.0 : 18.0;
  col += ditherNoise * (1.1 / steps);
  col = floor(col * steps + 0.5) / steps;

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`

function initShader() {
  const canvas = canvasRef.value
  if (!canvas) return

  gl = canvas.getContext('webgl') || (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null)
  if (!gl) return

  const vs = gl.createShader(gl.VERTEX_SHADER)!
  gl.shaderSource(vs, vertexShader)
  gl.compileShader(vs)

  const fs = gl.createShader(gl.FRAGMENT_SHADER)!
  gl.shaderSource(fs, fragmentShader)
  gl.compileShader(fs)

  if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
    console.error('Fragment shader compile error:', gl.getShaderInfoLog(fs))
    return
  }

  const prog = gl.createProgram()!
  gl.attachShader(prog, vs)
  gl.attachShader(prog, fs)
  gl.linkProgram(prog)

  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    console.error('Program link error:', gl.getProgramInfoLog(prog))
    return
  }

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

  const uTime = gl.getUniformLocation(prog, 'uTime')
  const uRes = gl.getUniformLocation(prog, 'uResolution')
  const uMouse = gl.getUniformLocation(prog, 'uMouse')
  const uIsDark = gl.getUniformLocation(prog, 'uIsDark')
  const uDitherScale = gl.getUniformLocation(prog, 'uDitherScale')

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

    mouse.value[0] += (targetMouse.value[0] - mouse.value[0]) * 0.1
    mouse.value[1] += (targetMouse.value[1] - mouse.value[1]) * 0.1

    const elapsed = (now - startTime) * 0.001 * props.speed
    gl.uniform1f(uTime, elapsed)
    gl.uniform2f(uMouse, mouse.value[0], mouse.value[1])
    gl.uniform1f(uIsDark, isDark.value ? 1.0 : 0.0)
    gl.uniform1f(uDitherScale, props.ditherScale)

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    frameId = requestAnimationFrame(render)
  }

  frameId = requestAnimationFrame(render)
}

onMounted(() => {
  checkTheme()
  initShader()

  if (typeof document !== 'undefined') {
    themeObserver = new MutationObserver(() => {
      checkTheme()
    })
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
  }
})

onUnmounted(() => {
  cancelAnimationFrame(frameId)
  if (resizeObserver) resizeObserver.disconnect()
  if (themeObserver) themeObserver.disconnect()
})
</script>
