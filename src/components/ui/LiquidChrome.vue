<template>
  <div
    ref="containerRef"
    class="relative w-full h-full min-h-[300px] overflow-hidden rounded-2xl select-none"
    :class="className"
    @mousemove="handleMouseMove"
  >
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full block" />
    <div class="relative z-10 w-full h-full pointer-events-none">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  className?: string
  baseColor?: [number, number, number]
  speed?: number
  amplitude?: number
  interactive?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  className: '',
  baseColor: () => [0.15, 0.15, 0.18],
  speed: 1.0,
  amplitude: 0.6,
  interactive: true,
})

const containerRef = ref<HTMLDivElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)

let gl: WebGLRenderingContext | null = null
let animationFrameId = 0
let resizeObserver: ResizeObserver | null = null

const mouse = ref<[number, number]>([0.5, 0.5])

function handleMouseMove(e: MouseEvent) {
  if (!props.interactive || !containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  mouse.value = [
    (e.clientX - rect.left) / rect.width,
    1.0 - (e.clientY - rect.top) / rect.height,
  ]
}

const vertexShaderSource = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`

const fragmentShaderSource = `
  precision highp float;

  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_mouse;
  uniform vec3 u_baseColor;
  uniform float u_amplitude;

  const mat2 m = mat2( 0.80,  0.60, -0.60,  0.80 );

  float hash( vec2 p ) {
      float h = dot(p,vec2(127.1,311.7));
      return fract(sin(h)*43758.5453123);
  }

  float noise( in vec2 p ) {
      vec2 i = floor( p );
      vec2 f = fract( p );
      vec2 u = f*f*(3.0-2.0*f);
      return mix( mix( hash( i + vec2(0.0,0.0) ), 
                       hash( i + vec2(1.0,0.0) ), u.x),
                  mix( hash( i + vec2(0.0,1.0) ), 
                       hash( i + vec2(1.0,1.0) ), u.x), u.y);
  }

  float fbm( vec2 p ) {
      float f = 0.0;
      f += 0.5000*noise( p ); p = m*p*2.02;
      f += 0.2500*noise( p ); p = m*p*2.03;
      f += 0.1250*noise( p ); p = m*p*2.01;
      f += 0.0625*noise( p );
      return f/0.9375;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 p = -1.0 + 2.0 * uv;
    if (u_resolution.y > 0.0) {
        p.x *= u_resolution.x / u_resolution.y;
    }

    vec2 mouse = (u_mouse - 0.5) * 2.0;
    if (u_resolution.y > 0.0) {
        mouse.x *= u_resolution.x / u_resolution.y;
    }
    
    vec2 diff = p - mouse;
    float dist = length(diff);
    vec2 distortion = vec2(0.0);
    if (dist > 0.0) {
        distortion = (diff / dist) * exp(-dist * 3.0) * 0.1;
    }
    p += distortion;

    float time = u_time * 0.5;

    vec2 q = vec2(0.0);
    q.x = fbm(p + vec2(0.0, 0.0) + time * 0.1);
    q.y = fbm(p + vec2(5.2, 1.3) + time * 0.15);

    vec2 r = vec2(0.0);
    r.x = fbm(p + 4.0 * q + vec2(1.7, 9.2) + time * 0.2);
    r.y = fbm(p + 4.0 * q + vec2(8.3, 2.8) + time * 0.25);

    float f = fbm(p + r * 4.0 * u_amplitude);

    vec3 col = u_baseColor;
    float highlight = smoothstep(0.4, 0.6, f);
    float highlight2 = smoothstep(0.6, 0.8, f);
    float dark = smoothstep(0.1, 0.3, f);
    
    col = mix(col, vec3(0.0), 1.0 - dark);
    col = mix(col, vec3(0.85, 0.88, 0.95), highlight);
    col = mix(col, vec3(1.0, 1.0, 1.0), highlight2);
    
    float v = 16.0 * uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y);
    col *= 0.5 + 0.5 * pow(max(0.0, v), 0.2);

    gl_FragColor = vec4(col, 1.0);
  }
`

function initWebGL() {
  const canvas = canvasRef.value
  if (!canvas) return

  gl = canvas.getContext('webgl')
  if (!gl) return

  const createShader = (type: number, src: string) => {
    if (!gl) return null
    const s = gl.createShader(type)!
    gl.shaderSource(s, src)
    gl.compileShader(s)
    return s
  }

  const vs = createShader(gl.VERTEX_SHADER, vertexShaderSource)
  const fs = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource)
  if (!vs || !fs) return

  const prog = gl.createProgram()!
  gl.attachShader(prog, vs)
  gl.attachShader(prog, fs)
  gl.linkProgram(prog)
  gl.useProgram(prog)

  const posBuf = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, posBuf)
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
    gl.STATIC_DRAW
  )

  const posLoc = gl.getAttribLocation(prog, 'position')
  gl.enableVertexAttribArray(posLoc)
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)

  const resLoc = gl.getUniformLocation(prog, 'u_resolution')
  const timeLoc = gl.getUniformLocation(prog, 'u_time')
  const mouseLoc = gl.getUniformLocation(prog, 'u_mouse')
  const colorLoc = gl.getUniformLocation(prog, 'u_baseColor')
  const ampLoc = gl.getUniformLocation(prog, 'u_amplitude')

  const resize = () => {
    if (!canvas || !gl) return
    const rect = canvas.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.floor(rect.width * dpr)
    canvas.height = Math.floor(rect.height * dpr)
    gl.viewport(0, 0, canvas.width, canvas.height)
    gl.uniform2f(resLoc, canvas.width, canvas.height)
  }

  resize()
  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(canvas)

  const startTime = performance.now()

  const render = (now: number) => {
    if (!gl) return
    const elapsed = (now - startTime) * 0.001 * props.speed
    gl.uniform1f(timeLoc, elapsed)
    gl.uniform2f(mouseLoc, mouse.value[0], mouse.value[1])
    gl.uniform3f(colorLoc, props.baseColor[0], props.baseColor[1], props.baseColor[2])
    gl.uniform1f(ampLoc, props.amplitude)

    gl.drawArrays(gl.TRIANGLES, 0, 6)
    animationFrameId = requestAnimationFrame(render)
  }

  animationFrameId = requestAnimationFrame(render)
}

onMounted(() => {
  initWebGL()
})

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId)
  if (resizeObserver) resizeObserver.disconnect()
})
</script>
