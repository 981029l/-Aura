<template>
  <div
    ref="containerRef"
    class="relative w-full min-h-[440px] overflow-hidden rounded-2xl bg-neutral-950 flex flex-col justify-center p-8 md:p-14 select-none"
    :class="className"
  >
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full block pointer-events-none" />

    <!-- Ambient Floating Geometric Polygons -->
    <div
      class="pointer-events-none absolute -top-12 -right-12 w-64 h-64 rounded-full border border-cyan-400/20 bg-cyan-500/10 backdrop-blur-xl animate-pulse"
      style="animation-duration: 6s;"
    />
    <div
      class="pointer-events-none absolute -bottom-16 -left-16 w-80 h-80 rounded-full border border-indigo-400/20 bg-indigo-500/10 backdrop-blur-xl animate-pulse"
      style="animation-duration: 8s;"
    />

    <!-- Hero Content -->
    <div class="relative z-10 max-w-2xl">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono text-cyan-300 mb-6">
        <span class="w-1.5 h-1.5 rounded-full bg-cyan-400" />
        <span>Geometric Precision Architecture</span>
      </div>

      <h1 class="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-4">
        {{ title1 }}
        <span class="block bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
          {{ title2 }}
        </span>
      </h1>

      <p class="text-sm md:text-base text-neutral-300 max-w-lg leading-relaxed mb-6">
        {{ description }}
      </p>

      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  title1?: string
  title2?: string
  description?: string
  color1?: string
  color2?: string
  speed?: number
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  title1: 'Architectural Depth',
  title2: '& Spatial Elegance',
  description: 'A dynamic geometric backdrop powered by high-order simplex noise and ordered Bayer dithering.',
  color1: '#0f172a',
  color2: '#0284c7',
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

const vertexShader = `
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const fragmentShader = `
precision highp float;
uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uColor1;
uniform vec3 uColor2;
varying vec2 vUv;

vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m;
  m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = vUv;
  float noise = snoise(uv * 1.5 + vec2(uTime * 0.05, uTime * 0.03)) * 0.25;
  float diagonal = (uv.x + uv.y) * 0.5;
  float gradient = diagonal * 1.2 + noise;

  vec3 deepBlue = uColor1;
  vec3 paleBlue = uColor2;
  vec3 softBlue = mix(deepBlue, paleBlue, 0.4);
  vec3 lightBlue = mix(deepBlue, paleBlue, 0.75);

  vec3 color;
  if (gradient < 0.35) {
    color = deepBlue;
  } else if (gradient < 0.6) {
    color = softBlue;
  } else if (gradient < 0.85) {
    color = lightBlue;
  } else {
    color = paleBlue;
  }

  float vignette = smoothstep(1.3, 0.4, length(uv - 0.5));
  color *= mix(0.85, 1.05, vignette);

  gl_FragColor = vec4(color, 1.0);
}
`

function initShader() {
  const canvas = canvasRef.value
  if (!canvas) return

  gl = canvas.getContext('webgl')
  if (!gl) return

  const vs = gl.createShader(gl.VERTEX_SHADER)!
  gl.shaderSource(vs, vertexShader)
  gl.compileShader(vs)

  const fs = gl.createShader(gl.FRAGMENT_SHADER)!
  gl.shaderSource(fs, fragmentShader)
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

  const uTime = gl.getUniformLocation(prog, 'uTime')
  const uRes = gl.getUniformLocation(prog, 'uResolution')
  const uC1 = gl.getUniformLocation(prog, 'uColor1')
  const uC2 = gl.getUniformLocation(prog, 'uColor2')

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
    const elapsed = (now - startTime) * 0.001 * props.speed
    gl.uniform1f(uTime, elapsed)

    const c1 = hexToRgb(props.color1)
    const c2 = hexToRgb(props.color2)
    gl.uniform3f(uC1, c1[0], c1[1], c1[2])
    gl.uniform3f(uC2, c2[0], c2[1], c2[2])

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
