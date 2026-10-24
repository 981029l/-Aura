<template>
  <div
    ref="containerRef"
    class="relative w-full h-full min-h-[350px] overflow-hidden rounded-2xl bg-[#07051a] select-none"
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
import { ref, onMounted, onUnmounted, computed } from 'vue'

const AURORA_FLOW_PRESETS: Record<string, string[]> = {
  ocean: ['#020817', '#062a55', '#0b62b4', '#39bfe6', '#d9f6ff'],
  aurora: ['#07051a', '#25105e', '#4d43c7', '#20a7a0', '#c3f5eb'],
  sky: ['#071425', '#16456e', '#4d9acb', '#9edbf0', '#eefaff'],
  sunset: ['#1d0812', '#6d1e3e', '#d95b48', '#f2a35b', '#ffe2a6'],
  midnight: ['#010206', '#080d1c', '#17264d', '#304d7f', '#a8c6ef'],
  nebula: ['#090512', '#32104a', '#813b8f', '#315fa8', '#e2b7ff'],
  emerald: ['#03120e', '#073c2c', '#0e7358', '#53c89f', '#d9fff0'],
}

interface Props {
  preset?: keyof typeof AURORA_FLOW_PRESETS | string
  speed?: number
  intensity?: number
  contrast?: number
  brightness?: number
  vignette?: number
  grainOpacity?: number
  flowScale?: number
  flowStrength?: number
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  preset: 'aurora',
  speed: 1,
  intensity: 1,
  contrast: 1.05,
  brightness: 1,
  vignette: 0.8,
  grainOpacity: 0.2,
  flowScale: 1,
  flowStrength: 1,
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

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '')
  return [
    parseInt(clean.slice(0, 2), 16) / 255 || 0.1,
    parseInt(clean.slice(2, 4), 16) / 255 || 0.1,
    parseInt(clean.slice(4, 6), 16) / 255 || 0.1,
  ]
}

const activePalette = computed(() => {
  const p = AURORA_FLOW_PRESETS[props.preset]
  return p || AURORA_FLOW_PRESETS.aurora!
})

const VERTEX_SHADER = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const FRAGMENT_SHADER = `
precision highp float;
uniform vec2 u_res;
uniform vec2 u_pointer;
uniform float u_time;
uniform float u_speed;
uniform float u_intensity;
uniform float u_contrast;
uniform float u_brightness;
uniform float u_vignette;
uniform float u_grainOpacity;
uniform float u_flowScale;
uniform float u_flowStrength;
uniform vec3 u_color0;
uniform vec3 u_color1;
uniform vec3 u_color2;
uniform vec3 u_color3;
uniform vec3 u_color4;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float valueNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

mat2 rotate2d(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat2(c, -s, s, c);
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.52;
  mat2 turn = mat2(0.84, 0.54, -0.54, 0.84);
  for (int i = 0; i < 5; i++) {
    value += amplitude * valueNoise(p);
    p = turn * p * 2.03 + 0.17;
    amplitude *= 0.5;
  }
  return value;
}

vec3 grade(vec3 color, float contrast, float brightness) {
  color = (color - 0.5) * contrast + 0.5;
  color *= brightness;
  return color;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  float aspect = u_res.x / max(u_res.y, 1.0);
  vec2 p = (uv - 0.5) * vec2(aspect, 1.0);
  float t = u_time * 0.14 * u_speed;

  vec2 pointer = (u_pointer - 0.5) * vec2(aspect, 1.0);
  p += (pointer - p) * 0.035 * smoothstep(0.55, 0.0, length(p - pointer));

  vec2 silk = p * max(0.2, u_flowScale);
  float warpA = fbm(silk * 0.8 + vec2(t * 0.4, -t * 0.28));
  float warpB = fbm(rotate2d(0.62) * silk * 1.1 + vec2(-t * 0.32, t * 0.22));

  silk += vec2(warpA, warpB) * 0.3 * u_flowStrength;
  float fieldA = fbm(silk * 0.74 + t * 0.5);
  float fieldB = fbm(silk * 0.91 - t * 0.4);

  float veilA = smoothstep(0.25, 0.78, fieldA + (warpB - 0.5) * 0.3);
  float veilB = smoothstep(0.32, 0.84, fieldB + (warpA - 0.5) * 0.25);

  vec3 col = mix(u_color0, u_color1, clamp(0.2 + veilA * 0.65, 0.0, 1.0));
  col = mix(col, u_color2, veilB * 0.6 * u_intensity);
  col = mix(col, u_color3, veilA * 0.45 * u_intensity);
  col += u_color4 * pow(max(0.0, veilB), 2.0) * 0.2 * u_intensity;

  float vig = 1.0 - smoothstep(0.2, 1.1, length((uv - 0.5) * vec2(1.0, 0.85))) * 0.5 * u_vignette;
  col *= vig;

  float grain = (hash(gl_FragCoord.xy + floor(u_time * 12.0) * 17.0) - 0.5) * u_grainOpacity * 0.14;
  col += grain;
  col = grade(col, u_contrast, u_brightness);

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
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
  const uPointer = gl.getUniformLocation(prog, 'u_pointer')
  const uTime = gl.getUniformLocation(prog, 'u_time')
  const uSpeed = gl.getUniformLocation(prog, 'u_speed')
  const uInt = gl.getUniformLocation(prog, 'u_intensity')
  const uContrast = gl.getUniformLocation(prog, 'u_contrast')
  const uBright = gl.getUniformLocation(prog, 'u_brightness')
  const uVignette = gl.getUniformLocation(prog, 'u_vignette')
  const uGrain = gl.getUniformLocation(prog, 'u_grainOpacity')
  const uScale = gl.getUniformLocation(prog, 'u_flowScale')
  const uStrength = gl.getUniformLocation(prog, 'u_flowStrength')

  const uColor0 = gl.getUniformLocation(prog, 'u_color0')
  const uColor1 = gl.getUniformLocation(prog, 'u_color1')
  const uColor2 = gl.getUniformLocation(prog, 'u_color2')
  const uColor3 = gl.getUniformLocation(prog, 'u_color3')
  const uColor4 = gl.getUniformLocation(prog, 'u_color4')

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
    gl.uniform2f(uPointer, mouse.value[0], mouse.value[1])
    gl.uniform1f(uSpeed, props.speed)
    gl.uniform1f(uInt, props.intensity)
    gl.uniform1f(uContrast, props.contrast)
    gl.uniform1f(uBright, props.brightness)
    gl.uniform1f(uVignette, props.vignette)
    gl.uniform1f(uGrain, props.grainOpacity)
    gl.uniform1f(uScale, props.flowScale)
    gl.uniform1f(uStrength, props.flowStrength)

    const colors = activePalette.value
    const c0 = hexToRgb(colors[0] || '#07051a')
    const c1 = hexToRgb(colors[1] || '#25105e')
    const c2 = hexToRgb(colors[2] || '#4d43c7')
    const c3 = hexToRgb(colors[3] || '#20a7a0')
    const c4 = hexToRgb(colors[4] || '#c3f5eb')

    gl.uniform3f(uColor0, c0[0], c0[1], c0[2])
    gl.uniform3f(uColor1, c1[0], c1[1], c1[2])
    gl.uniform3f(uColor2, c2[0], c2[1], c2[2])
    gl.uniform3f(uColor3, c3[0], c3[1], c3[2])
    gl.uniform3f(uColor4, c4[0], c4[1], c4[2])

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
