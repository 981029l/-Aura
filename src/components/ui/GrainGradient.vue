<template>
  <div
    ref="containerRef"
    class="relative w-full h-full min-h-[350px] overflow-hidden rounded-2xl bg-neutral-950 select-none"
    :class="className"
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
  colorLight?: string
  colorMid?: string
  colorDark?: string
  angle?: number
  position?: number
  curve?: number
  softness?: number
  scale?: number
  grain?: number
  grainSize?: number
  speed?: number
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  colorLight: '#e0e7ff',
  colorMid: '#6366f1',
  colorDark: '#0f172a',
  angle: 45,
  position: 0,
  curve: 0.2,
  softness: 0.35,
  scale: 1,
  grain: 0.35,
  grainSize: 1.5,
  speed: 1,
  className: '',
})

const containerRef = ref<HTMLDivElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)

let gl: WebGLRenderingContext | null = null
let frameId = 0
let resizeObserver: ResizeObserver | null = null

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '')
  return [
    (parseInt(clean.slice(0, 2), 16) || 0) / 255,
    (parseInt(clean.slice(2, 4), 16) || 0) / 255,
    (parseInt(clean.slice(4, 6), 16) || 0) / 255,
  ]
}

const vertex = `attribute vec2 a_position;
void main() { gl_Position = vec4(a_position, 0., 1.); }`

const fragment = `precision highp float;
uniform vec2 u_resolution;
uniform float u_ratio, u_angle, u_position, u_curve, u_softness, u_scale;
uniform float u_grain, u_grainSize, u_seed, u_time;
uniform vec3 u_light, u_mid, u_dark;

float hash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * .1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  uv.y = 1. - uv.y;
  vec2 p = uv - .5;
  float aspect = u_resolution.x / u_resolution.y;
  p.x *= aspect;
  float c = cos(u_angle), s = sin(u_angle);
  p = mat2(c, -s, s, c) * p;
  p.x /= aspect;
  p = p / u_scale + .5;

  float breath = sin(u_time * .52);
  float undertow = sin(u_time * .31);
  float bend = u_curve + sin(u_time * .52 - .7) * .12;
  float edge = .32 + bend * pow(1. - p.y, 2.) + u_position + breath * .115 + undertow * .035;
  float distanceToEdge = p.x - edge + sin(p.y * 4. + u_time * .38) * .035;
  float diffusion = u_softness * (1. + breath * .28);
  float shadow = smoothstep(-diffusion, diffusion * .45, distanceToEdge);

  vec2 lightCenter = vec2(.04 + breath * .13, .04 + undertow * .16);
  vec2 lightUV = (p - lightCenter) * vec2(1.9, 1.7);
  float mint = exp(-dot(lightUV, lightUV));
  vec3 light = mix(u_light, u_mid, mint * (.66 + breath * .1));
  vec3 color = mix(light, u_mid * (.68 + breath * .035), smoothstep(-diffusion * 1.8, .02, distanceToEdge));
  color = mix(color, u_dark, shadow);

  vec2 grainUV = floor(gl_FragCoord.xy / (u_ratio * u_grainSize));
  float noise = hash(grainUV + 14.5) - .5;
  color += noise * u_grain * mix(.48, .32, shadow);

  gl_FragColor = vec4(clamp(color, 0., 1.), 1.);
}`

function initGrainShader() {
  const canvas = canvasRef.value
  if (!canvas) return

  gl = canvas.getContext('webgl', { alpha: false, depth: false })
  if (!gl) return

  const vs = gl.createShader(gl.VERTEX_SHADER)!
  gl.shaderSource(vs, vertex)
  gl.compileShader(vs)

  const fs = gl.createShader(gl.FRAGMENT_SHADER)!
  gl.shaderSource(fs, fragment)
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

  const pos = gl.getAttribLocation(prog, 'a_position')
  gl.enableVertexAttribArray(pos)
  gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0)

  const uRes = gl.getUniformLocation(prog, 'u_resolution')
  const uRatio = gl.getUniformLocation(prog, 'u_ratio')
  const uAngle = gl.getUniformLocation(prog, 'u_angle')
  const uPos = gl.getUniformLocation(prog, 'u_position')
  const uCurve = gl.getUniformLocation(prog, 'u_curve')
  const uSoft = gl.getUniformLocation(prog, 'u_softness')
  const uScale = gl.getUniformLocation(prog, 'u_scale')
  const uGrain = gl.getUniformLocation(prog, 'u_grain')
  const uGrainSize = gl.getUniformLocation(prog, 'u_grainSize')
  const uTime = gl.getUniformLocation(prog, 'u_time')
  const uLight = gl.getUniformLocation(prog, 'u_light')
  const uMid = gl.getUniformLocation(prog, 'u_mid')
  const uDark = gl.getUniformLocation(prog, 'u_dark')

  const resize = () => {
    if (!canvas || !gl) return
    const rect = canvas.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.floor(rect.width * dpr)
    canvas.height = Math.floor(rect.height * dpr)
    gl.viewport(0, 0, canvas.width, canvas.height)
    gl.uniform2f(uRes, canvas.width, canvas.height)
    gl.uniform1f(uRatio, dpr)
  }

  resize()
  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(canvas)

  const startTime = performance.now()

  const render = (now: number) => {
    if (!gl) return
    const elapsed = (now - startTime) * 0.001 * props.speed
    gl.uniform1f(uTime, elapsed)
    gl.uniform1f(uAngle, (props.angle * Math.PI) / 180)
    gl.uniform1f(uPos, props.position)
    gl.uniform1f(uCurve, props.curve)
    gl.uniform1f(uSoft, props.softness)
    gl.uniform1f(uScale, props.scale)
    gl.uniform1f(uGrain, props.grain)
    gl.uniform1f(uGrainSize, props.grainSize)

    const l = hexToRgb(props.colorLight)
    const m = hexToRgb(props.colorMid)
    const d = hexToRgb(props.colorDark)

    gl.uniform3f(uLight, l[0], l[1], l[2])
    gl.uniform3f(uMid, m[0], m[1], m[2])
    gl.uniform3f(uDark, d[0], d[1], d[2])

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    frameId = requestAnimationFrame(render)
  }

  frameId = requestAnimationFrame(render)
}

onMounted(() => {
  initGrainShader()
})

onUnmounted(() => {
  cancelAnimationFrame(frameId)
  if (resizeObserver) resizeObserver.disconnect()
})
</script>
