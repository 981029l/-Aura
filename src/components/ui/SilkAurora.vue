<template>
  <div
    ref="containerRef"
    class="relative w-full h-full min-h-[350px] overflow-hidden rounded-2xl bg-[#050507] text-white select-none"
    :class="className"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full block pointer-events-none" />

    <!-- Ambient glows -->
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(255,255,255,0.14),transparent_24%),radial-gradient(circle_at_18%_74%,rgba(110,214,201,0.12),transparent_30%)]"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.4),rgba(0,0,0,0.1)_42%,rgba(0,0,0,0.4))]"
    />

    <!-- Content overlay -->
    <div class="relative z-10 w-full h-full flex flex-col justify-center p-8 md:p-12">
      <div v-if="subtitle" class="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-teal-300/80">
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
  baseColor?: string
  midColor?: string
  sheenColor?: string
  accentColor?: string
  speed?: number
  intensity?: number
  grain?: number
  vignette?: number
  mouseInfluence?: number
  interactive?: boolean
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  subtitle: '',
  description: '',
  baseColor: '#050507',
  midColor: '#14151d',
  sheenColor: '#f4dfb8',
  accentColor: '#6ed6c9',
  speed: 1,
  intensity: 1,
  grain: 0.85,
  vignette: 1,
  mouseInfluence: 1,
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

function handleMouseMove(e: MouseEvent) {
  if (!props.interactive || !containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  targetMouse.value = [
    (e.clientX - rect.left) / rect.width,
    1.0 - (e.clientY - rect.top) / rect.height,
  ]
}

function handleMouseLeave() {
  targetMouse.value = [0.5, 0.5]
}

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '')
  return [
    parseInt(clean.slice(0, 2), 16) / 255 || 0.1,
    parseInt(clean.slice(2, 4), 16) / 255 || 0.1,
    parseInt(clean.slice(4, 6), 16) / 255 || 0.1,
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
uniform vec2 u_mouse;
uniform float u_time;
uniform float u_speed;
uniform float u_intensity;
uniform float u_grain;
uniform float u_vignette;
uniform float u_mouseInfluence;
uniform vec3 u_base;
uniform vec3 u_mid;
uniform vec3 u_sheen;
uniform vec3 u_accent;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(41.93, 289.17))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float value = 0.0;
  float amp = 0.5;
  mat2 rot = mat2(0.82, 0.57, -0.57, 0.82);
  for (int i = 0; i < 5; i++) {
    value += amp * noise(p);
    p = rot * p * 2.03;
    amp *= 0.5;
  }
  return value;
}

float ribbon(vec2 p, float offset, float width, float softness) {
  float y = p.y + sin(p.x * 1.8 + offset) * 0.18;
  y += sin(p.x * 4.2 - offset * 0.7) * 0.045;
  return smoothstep(width + softness, width, abs(y));
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  float aspect = u_res.x / max(u_res.y, 1.0);
  vec2 p = (uv - 0.5) * vec2(aspect, 1.0);

  vec2 mouse = (u_mouse - 0.5) * vec2(aspect, 1.0);
  float t = u_time * 0.12 * u_speed;
  float pointerFalloff = smoothstep(0.72, 0.0, length(p - mouse));
  p += (mouse - p) * pointerFalloff * 0.05 * u_mouseInfluence;

  vec2 silk = p;
  silk.x += fbm(p * 1.6 + vec2(t * 0.8, -t * 0.35)) * 0.16;
  silk.y += fbm(p * 2.2 + vec2(-t * 0.25, t * 0.7)) * 0.10;

  float veilA = ribbon(silk + vec2(-0.18, 0.08), t * 2.1, 0.055, 0.22);
  float veilB = ribbon(silk * vec2(0.86, 1.18) + vec2(0.2, -0.14), -t * 2.8 + 1.7, 0.038, 0.18);
  float veilC = ribbon(silk * vec2(1.18, 0.9) + vec2(-0.08, 0.24), t * 1.4 - 2.1, 0.03, 0.16);

  float atmosphere = fbm(p * 1.35 + vec2(t * 0.22, -t * 0.1));
  float pearlescent = pow(max(0.0, sin((p.x - p.y) * 7.5 + atmosphere * 4.0 - t * 2.5)), 5.0);
  float glint = pow(max(0.0, noise(gl_FragCoord.xy * 0.065 + t * 18.0) - 0.72), 5.0);

  vec3 col = u_base;
  col = mix(col, u_mid, smoothstep(-0.45, 0.75, p.y + atmosphere * 0.75));
  col += u_accent * veilA * 0.72 * u_intensity;
  col += u_sheen * veilB * 0.64 * u_intensity;
  col += mix(u_sheen, u_accent, 0.35) * veilC * 0.42 * u_intensity;
  col += u_sheen * pearlescent * 0.075 * u_intensity;
  col += vec3(1.0, 0.93, 0.82) * glint * 0.22 * u_intensity;
  col += u_sheen * pointerFalloff * 0.08 * u_mouseInfluence;

  float vig = 1.0 - length(uv - 0.5) * 1.1 * u_vignette;
  col *= smoothstep(0.0, 1.0, vig);

  float grain = (hash(gl_FragCoord.xy + t * 90.0) - 0.5) * 0.08 * u_grain;
  col += grain;

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`

function initSilkShader() {
  const canvas = canvasRef.value
  if (!canvas) return

  gl = canvas.getContext('webgl')
  if (!gl) return

  const vs = gl.createShader(gl.VERTEX_SHADER)!
  gl.shaderSource(vs, VERTEX_SHADER)
  gl.compileShader(vs)

  const fs = gl.createShader(gl.FRAGMENT_SHADER)!
  gl.shaderSource(fs, FRAGMENT_SHADER)
  gl.compileShader(fs)

  const program = gl.createProgram()!
  gl.attachShader(program, vs)
  gl.attachShader(program, fs)
  gl.linkProgram(program)
  gl.useProgram(program)

  const buf = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buf)
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
    gl.STATIC_DRAW
  )

  const posLoc = gl.getAttribLocation(program, 'position')
  gl.enableVertexAttribArray(posLoc)
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)

  const uRes = gl.getUniformLocation(program, 'u_res')
  const uMouse = gl.getUniformLocation(program, 'u_mouse')
  const uTime = gl.getUniformLocation(program, 'u_time')
  const uSpeed = gl.getUniformLocation(program, 'u_speed')
  const uIntensity = gl.getUniformLocation(program, 'u_intensity')
  const uGrain = gl.getUniformLocation(program, 'u_grain')
  const uVignette = gl.getUniformLocation(program, 'u_vignette')
  const uMouseInf = gl.getUniformLocation(program, 'u_mouseInfluence')
  const uBase = gl.getUniformLocation(program, 'u_base')
  const uMid = gl.getUniformLocation(program, 'u_mid')
  const uSheen = gl.getUniformLocation(program, 'u_sheen')
  const uAccent = gl.getUniformLocation(program, 'u_accent')

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

    const elapsed = (now - startTime) * 0.001
    gl.uniform1f(uTime, elapsed)
    gl.uniform1f(uSpeed, props.speed)
    gl.uniform1f(uIntensity, props.intensity)
    gl.uniform1f(uGrain, props.grain)
    gl.uniform1f(uVignette, props.vignette)
    gl.uniform1f(uMouseInf, props.mouseInfluence)
    gl.uniform2f(uMouse, mouse.value[0], mouse.value[1])

    const b = hexToRgb(props.baseColor)
    const m = hexToRgb(props.midColor)
    const s = hexToRgb(props.sheenColor)
    const a = hexToRgb(props.accentColor)

    gl.uniform3f(uBase, b[0], b[1], b[2])
    gl.uniform3f(uMid, m[0], m[1], m[2])
    gl.uniform3f(uSheen, s[0], s[1], s[2])
    gl.uniform3f(uAccent, a[0], a[1], a[2])

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    frameId = requestAnimationFrame(render)
  }

  frameId = requestAnimationFrame(render)
}

onMounted(() => {
  initSilkShader()
})

onUnmounted(() => {
  cancelAnimationFrame(frameId)
  if (resizeObserver) resizeObserver.disconnect()
})
</script>
