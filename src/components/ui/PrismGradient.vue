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
  speed?: number
  colors?: string[]
  distortion?: number
  swirl?: number
  softness?: number
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  speed: 1,
  colors: () => ['#050505', '#66b3ff', '#ffffff'],
  distortion: 0.1,
  swirl: 0.5,
  softness: 0.5,
  className: '',
})

const containerRef = ref<HTMLDivElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)

let gl: WebGL2RenderingContext | null = null
let frameId = 0
let resizeObserver: ResizeObserver | null = null

function hexToRgba(hex: string): [number, number, number, number] {
  const clean = hex.replace('#', '')
  return [
    (parseInt(clean.slice(0, 2), 16) || 0) / 255,
    (parseInt(clean.slice(2, 4), 16) || 0) / 255,
    (parseInt(clean.slice(4, 6), 16) || 0) / 255,
    1.0,
  ]
}

const VERTEX_SHADER = `#version 300 es
in vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`

const FRAGMENT_SHADER = `#version 300 es
precision highp float;

uniform float u_time;
uniform float u_pixelRatio;
uniform vec2 u_resolution;
uniform float u_scale;
uniform float u_rotation;
uniform vec4 u_color1;
uniform vec4 u_color2;
uniform vec4 u_color3;
uniform float u_proportion;
uniform float u_softness;
uniform float u_shapeScale;
uniform float u_distortion;
uniform float u_swirl;
uniform float u_swirlIterations;

out vec4 fragColor;

#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846

vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

vec4 blendColors(vec4 c1, vec4 c2, vec4 c3, float mixer, float edgesWidth, float edgeBlur) {
  vec3 color1 = c1.rgb * c1.a;
  vec3 color2 = c2.rgb * c2.a;
  vec3 color3 = c3.rgb * c3.a;
  float r1 = smoothstep(0.0 + 0.35 * edgesWidth, 0.7 - 0.35 * edgesWidth + 0.5 * edgeBlur, mixer);
  float r2 = smoothstep(0.3 + 0.35 * edgesWidth, 1.0 - 0.35 * edgesWidth + edgeBlur, mixer);
  vec3 blendedColor2 = mix(color1, color2, r1);
  float blendedOpacity2 = mix(c1.a, c2.a, r1);
  vec3 color = mix(blendedColor2, color3, r2);
  float opacity = mix(blendedOpacity2, c3.a, r2);
  return vec4(color, opacity);
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  float time = 0.5 * u_time;
  float noiseScale = 0.0005 + 0.006 * u_scale;

  uv -= 0.5;
  uv *= noiseScale * u_resolution;
  uv = rotate(uv, u_rotation * 0.5 * PI);
  uv /= u_pixelRatio;
  uv += 0.5;

  float n1 = noise(uv + time);
  float n2 = noise(uv * 2.0 - time);
  float angle = n1 * TWO_PI;
  uv.x += 4.0 * u_distortion * n2 * cos(angle);
  uv.y += 4.0 * u_distortion * n2 * sin(angle);

  float iterations = ceil(clamp(u_swirlIterations, 1.0, 30.0));
  for (float i = 1.0; i <= iterations; i++) {
    uv.x += clamp(u_swirl, 0.0, 2.0) / i * cos(time + i * 1.5 * uv.y);
    uv.y += clamp(u_swirl, 0.0, 2.0) / i * cos(time + i * uv.x);
  }

  float proportion = clamp(u_proportion, 0.0, 1.0);
  vec2 checksUv = uv * (0.5 + 3.5 * u_shapeScale);
  float shape = 0.5 + 0.5 * sin(checksUv.x) * cos(checksUv.y);
  float mixer = shape + 0.48 * sign(proportion - 0.5) * pow(abs(proportion - 0.5), 0.5);
  vec4 colorMix = blendColors(
    u_color1,
    u_color2,
    u_color3,
    mixer,
    1.0 - clamp(u_softness, 0.0, 1.0),
    0.01 + 0.01 * u_scale
  );
  fragColor = colorMix;
}
`

function initPrismShader() {
  const canvas = canvasRef.value
  if (!canvas) return

  gl = canvas.getContext('webgl2')
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

  const pos = gl.getAttribLocation(prog, 'a_position')
  gl.enableVertexAttribArray(pos)
  gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0)

  const uTime = gl.getUniformLocation(prog, 'u_time')
  const uPixel = gl.getUniformLocation(prog, 'u_pixelRatio')
  const uRes = gl.getUniformLocation(prog, 'u_resolution')
  const uScale = gl.getUniformLocation(prog, 'u_scale')
  const uRot = gl.getUniformLocation(prog, 'u_rotation')
  const uC1 = gl.getUniformLocation(prog, 'u_color1')
  const uC2 = gl.getUniformLocation(prog, 'u_color2')
  const uC3 = gl.getUniformLocation(prog, 'u_color3')
  const uProp = gl.getUniformLocation(prog, 'u_proportion')
  const uSoft = gl.getUniformLocation(prog, 'u_softness')
  const uShape = gl.getUniformLocation(prog, 'u_shapeScale')
  const uDist = gl.getUniformLocation(prog, 'u_distortion')
  const uSwirl = gl.getUniformLocation(prog, 'u_swirl')
  const uSwirlIter = gl.getUniformLocation(prog, 'u_swirlIterations')

  const resize = () => {
    if (!canvas || !gl) return
    const rect = canvas.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.floor(rect.width * dpr)
    canvas.height = Math.floor(rect.height * dpr)
    gl.viewport(0, 0, canvas.width, canvas.height)
    gl.uniform2f(uRes, canvas.width, canvas.height)
    gl.uniform1f(uPixel, dpr)
  }

  resize()
  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(canvas)

  const startTime = performance.now()

  const render = (now: number) => {
    if (!gl) return
    const elapsed = (now - startTime) * 0.001 * props.speed * 0.3
    gl.uniform1f(uTime, elapsed)
    gl.uniform1f(uScale, 0.01)
    gl.uniform1f(uRot, -0.55)
    gl.uniform1f(uProp, 1.0)
    gl.uniform1f(uSoft, props.softness)
    gl.uniform1f(uShape, 0.45)
    gl.uniform1f(uDist, props.distortion)
    gl.uniform1f(uSwirl, props.swirl)
    gl.uniform1f(uSwirlIter, 12.0)

    const c1 = hexToRgba(props.colors[0] || '#050505')
    const c2 = hexToRgba(props.colors[1] || '#66b3ff')
    const c3 = hexToRgba(props.colors[2] || '#ffffff')

    gl.uniform4f(uC1, c1[0], c1[1], c1[2], c1[3])
    gl.uniform4f(uC2, c2[0], c2[1], c2[2], c2[3])
    gl.uniform4f(uC3, c3[0], c3[1], c3[2], c3[3])

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    frameId = requestAnimationFrame(render)
  }

  frameId = requestAnimationFrame(render)
}

onMounted(() => {
  initPrismShader()
})

onUnmounted(() => {
  cancelAnimationFrame(frameId)
  if (resizeObserver) resizeObserver.disconnect()
})
</script>
