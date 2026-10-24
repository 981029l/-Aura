<template>
  <div
    ref="containerRef"
    class="relative w-full h-full min-h-[350px] overflow-hidden rounded-2xl bg-[#0d0d14] text-white select-none"
    :class="className"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full block pointer-events-none" />
    <div class="relative z-10 w-full h-full">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  speed?: number
  turbulence?: number
  mouseInfluence?: number
  grain?: number
  sparkle?: number
  vignette?: number
  opacity?: number
  interactive?: boolean
  darkColorA?: string
  darkColorB?: string
  darkColorC?: string
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  speed: 1,
  turbulence: 1,
  mouseInfluence: 1,
  grain: 1,
  sparkle: 1,
  vignette: 1,
  opacity: 1,
  interactive: true,
  darkColorA: '#0d0d14',
  darkColorB: '#1f2540',
  darkColorC: '#4a6191',
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
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_speed;
uniform float u_turbulence;
uniform float u_mouseInfluence;
uniform float u_grain;
uniform float u_sparkle;
uniform float u_vignette;
uniform float u_opacity;
uniform vec3 u_darkA;
uniform vec3 u_darkB;
uniform vec3 u_darkC;

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float fbm(vec2 p, float turbulence) {
  float total = 0.0;
  float amp = 0.5;
  float freq = 1.0;
  mat2 rot = mat2(cos(0.45), sin(0.45), -sin(0.45), cos(0.45));
  for (int i = 0; i < 5; i++) {
    total += snoise(p * freq) * amp;
    p = rot * p;
    freq *= mix(1.85, 2.35, clamp(turbulence, 0.0, 2.0) * 0.5);
    amp *= 0.5;
  }
  return total;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  float aspect = u_res.x / max(u_res.y, 1.0);
  vec2 p = (uv - 0.5) * vec2(aspect, 1.0);
  float t = u_time * (0.15 * u_speed);

  vec2 mouse = (u_mouse - 0.5) * vec2(aspect, 1.0);
  float dMouse = length(p - mouse);
  p += (mouse - p) * 0.02 * u_mouseInfluence * smoothstep(0.45, 0.0, dMouse);

  vec2 flow = vec2(
    fbm(p + vec2(t * 0.2, t * 0.1), u_turbulence),
    fbm(p + vec2(-t * 0.1, t * 0.3), u_turbulence)
  );

  float n = fbm(p * 2.0 + flow * 1.45, u_turbulence);
  float ridges = 1.0 - abs(snoise(p * 4.0 + n) * 2.0);
  ridges = pow(ridges, 3.0);

  vec3 col = mix(u_darkA, u_darkB, smoothstep(-0.5, 0.5, n));
  col = mix(col, u_darkC, smoothstep(0.25, 1.0, n * 0.52 + ridges * 0.48));

  float sparkle = pow(max(0.0, snoise(gl_FragCoord.xy * 0.2 + t * 2.0)), 18.0) * 0.5 * u_sparkle;
  col += vec3(0.8, 0.9, 1.0) * sparkle;

  float vigDark = 1.0 - smoothstep(0.5, 1.55, length(p));
  col *= vigDark;

  float grain = (fract(sin(dot(gl_FragCoord.xy + t * 50.0, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) * (0.06 * u_grain);
  col += grain;

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), u_opacity);
}
`

function initShader() {
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
  const uSpeed = gl.getUniformLocation(prog, 'u_speed')
  const uTurb = gl.getUniformLocation(prog, 'u_turbulence')
  const uMouseInf = gl.getUniformLocation(prog, 'u_mouseInfluence')
  const uGrain = gl.getUniformLocation(prog, 'u_grain')
  const uSparkle = gl.getUniformLocation(prog, 'u_sparkle')
  const uVignette = gl.getUniformLocation(prog, 'u_vignette')
  const uOpac = gl.getUniformLocation(prog, 'u_opacity')
  const uDarkA = gl.getUniformLocation(prog, 'u_darkA')
  const uDarkB = gl.getUniformLocation(prog, 'u_darkB')
  const uDarkC = gl.getUniformLocation(prog, 'u_darkC')

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
    gl.uniform2f(uMouse, mouse.value[0], mouse.value[1])
    gl.uniform1f(uSpeed, props.speed)
    gl.uniform1f(uTurb, props.turbulence)
    gl.uniform1f(uMouseInf, props.mouseInfluence)
    gl.uniform1f(uGrain, props.grain)
    gl.uniform1f(uSparkle, props.sparkle)
    gl.uniform1f(uVignette, props.vignette)
    gl.uniform1f(uOpac, props.opacity)

    const da = hexToRgb(props.darkColorA)
    const db = hexToRgb(props.darkColorB)
    const dc = hexToRgb(props.darkColorC)
    gl.uniform3f(uDarkA, da[0], da[1], da[2])
    gl.uniform3f(uDarkB, db[0], db[1], db[2])
    gl.uniform3f(uDarkC, dc[0], dc[1], dc[2])

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
