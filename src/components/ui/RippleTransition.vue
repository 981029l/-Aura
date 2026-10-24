<template>
  <div
    ref="containerRef"
    class="relative w-full h-[400px] sm:h-[500px] overflow-hidden rounded-3xl select-none group cursor-pointer border border-white/10 shadow-2xl bg-neutral-950"
    :class="className"
    @pointerup="handleClick"
  >
    <!-- WebGL Ripple Shockwave Transition Canvas -->
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full block" />

    <!-- Overlay Floating Navigation & Caption -->
    <div class="pointer-events-none absolute inset-0 flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-t from-black/80 via-transparent to-black/30">
      <!-- Top Badges & Controls -->
      <div class="flex items-center justify-between pointer-events-auto">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-cyan-300">
          <span class="w-1.5 h-1.5 rounded-full bg-cyan-400" :class="isTransitioning ? 'animate-ping' : ''" />
          <span>RIPPLE SLIDE TRANSITION</span>
        </div>

        <div class="flex items-center gap-2">
          <button
            type="button"
            class="px-3 py-1 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/10 text-xs font-mono text-neutral-300 hover:text-white transition-colors cursor-pointer"
            @click.stop="triggerTransition"
          >
            点击切换图片 ({{ currentIndex + 1 }}/{{ images.length }})
          </button>
        </div>
      </div>

      <!-- Bottom Hint & Pagination Dots -->
      <div class="flex items-center justify-between pointer-events-auto">
        <div class="flex items-center gap-2">
          <span
            v-for="(_, idx) in images"
            :key="idx"
            class="h-1.5 rounded-full transition-all duration-300 cursor-pointer"
            :class="idx === currentIndex ? 'w-6 bg-cyan-400' : 'w-1.5 bg-white/40 hover:bg-white/70'"
            @click.stop="switchToIndex(idx)"
          />
        </div>

        <span class="text-[11px] font-mono text-neutral-400 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/5">
          点击图片任意位置，以水波效果切换到下一张
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export const DEFAULT_TRANSITION_IMAGES = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=85&w=1800',
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=85&w=1800',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=85&w=1800',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=85&w=1800',
]
</script>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  images?: string[]
  duration?: number
  className?: string
  autoPlay?: boolean
  autoPlayInterval?: number
}

const props = withDefaults(defineProps<Props>(), {
  images: () => DEFAULT_TRANSITION_IMAGES,
  duration: 1.2,
  className: '',
  autoPlay: false,
  autoPlayInterval: 4000,
})

const containerRef = ref<HTMLDivElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)

const currentIndex = ref(0)
const isTransitioning = ref(false)

let gl: WebGLRenderingContext | null = null
let loadedTextures: WebGLTexture[] = []
let imageAspects: number[] = []
let program: WebGLProgram | null = null
let animStartTime = 0
let animFrameId = 0
let autoPlayTimer: any = null
let resizeObserver: ResizeObserver | null = null

let clickOrigin = [0.5, 0.5]
let fromIdx = 0
let toIdx = 1

const vsSource = `
attribute vec2 position;
varying vec2 uv;
void main() {
  uv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const fsSource = `
precision highp float;
varying vec2 uv;
uniform sampler2D fromImage;
uniform sampler2D toImage;
uniform vec2 origin;
uniform float phase;
uniform vec2 resolution;
uniform float isTransitioning;
uniform float fromAspect;
uniform float toAspect;

// True object-cover UV transformation: ensures complete coverage without distortion or edge-clamping blur
vec2 getCoverUv(vec2 rawUv, float canvasAspect, float imgAspect) {
  vec2 s = vec2(1.0);
  if (canvasAspect > imgAspect) {
    s = vec2(1.0, imgAspect / canvasAspect);
  } else {
    s = vec2(canvasAspect / imgAspect, 1.0);
  }
  return clamp((rawUv - 0.5) * s + 0.5, 0.0, 1.0);
}

void main() {
  float aspect = resolution.x / max(resolution.y, 1.0);

  // When not transitioning (idle state): render the current image purely and cleanly with 0 distortion
  if (isTransitioning < 0.5) {
    vec2 cleanCoverUv = getCoverUv(uv, aspect, toAspect);
    gl_FragColor = texture2D(toImage, cleanCoverUv);
    return;
  }

  // Calculate distance from click origin in corrected aspect space
  vec2 p = uv - origin;
  p.x *= aspect;
  float dist = length(p);

  // Calculate the exact maximum distance to any of the 4 screen corners
  float maxCornerDist = length(vec2(max(origin.x, 1.0 - origin.x) * aspect, max(origin.y, 1.0 - origin.y)));
  float maxWaveRadius = maxCornerDist + 0.25;

  // Wavefront expands smoothly from 0 to past the furthest corner
  float waveFront = phase * maxWaveRadius;
  
  // Shockwave Gaussian ring profile
  float ring = exp(-pow((dist - waveFront) * 7.5, 2.0));
  
  // Wave displacement fading out towards the end of the transition
  float waveIntensity = (1.0 - phase) * (1.0 - smoothstep(maxWaveRadius - 0.35, maxWaveRadius, waveFront));
  float wave = sin((dist - waveFront) * 32.0) * ring * waveIntensity * 0.08;

  vec2 dir = dist > 0.0001 ? normalize(p) : vec2(0.0);
  dir.x /= aspect;
  vec2 distortedUv = uv + dir * wave;
  vec2 coverUvFrom = getCoverUv(distortedUv, aspect, fromAspect);
  vec2 coverUvTo = getCoverUv(distortedUv, aspect, toAspect);

  vec4 colFrom = texture2D(fromImage, coverUvFrom);
  vec4 colTo = texture2D(toImage, coverUvTo);

  // Smooth circular step revealing toImage
  float reveal = smoothstep(waveFront - 0.08, waveFront + 0.04, dist);
  vec4 color = mix(colTo, colFrom, reveal);
  
  // Prismatic wave crest gleam (fades out as phase approaches 1.0)
  color += ring * 0.22 * waveIntensity;

  gl_FragColor = color;
}
`

function handleClick(e: PointerEvent) {
  if (isTransitioning.value || !containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  clickOrigin = [
    (e.clientX - rect.left) / rect.width,
    1.0 - (e.clientY - rect.top) / rect.height,
  ]
  triggerTransition()
}

function switchToIndex(target: number) {
  if (isTransitioning.value || target === currentIndex.value) return
  clickOrigin = [0.5, 0.5]
  fromIdx = currentIndex.value
  toIdx = target
  startShockwave()
}

function triggerTransition() {
  if (isTransitioning.value) return
  fromIdx = currentIndex.value
  toIdx = (currentIndex.value + 1) % props.images.length
  startShockwave()
}

function startShockwave() {
  if (!gl || loadedTextures.length < 2) return
  if (animFrameId) cancelAnimationFrame(animFrameId)

  isTransitioning.value = true
  animStartTime = performance.now()

  const anim = (now: number) => {
    const elapsed = (now - animStartTime) / (props.duration * 1000)
    const phase = Math.min(1.0, elapsed)

    drawFrame(phase, true)

    if (phase < 1.0) {
      animFrameId = requestAnimationFrame(anim)
    } else {
      // 100% Transition Complete: seamless commit
      currentIndex.value = toIdx
      fromIdx = toIdx
      isTransitioning.value = false
      drawFrame(1.0, false)
    }
  }

  animFrameId = requestAnimationFrame(anim)
}

function drawFrame(phase: number, activeTransition: boolean = false) {
  if (!gl || !program || loadedTextures.length === 0) return

  gl.useProgram(program)

  const activeIdx = activeTransition ? fromIdx : currentIndex.value
  const targetIdx = activeTransition ? toIdx : currentIndex.value

  // Bind fromImage
  gl.activeTexture(gl.TEXTURE0)
  gl.bindTexture(gl.TEXTURE_2D, loadedTextures[activeIdx]!)
  const uFrom = gl.getUniformLocation(program, 'fromImage')
  gl.uniform1i(uFrom, 0)

  // Bind toImage
  gl.activeTexture(gl.TEXTURE1)
  gl.bindTexture(gl.TEXTURE_2D, loadedTextures[targetIdx]!)
  const uTo = gl.getUniformLocation(program, 'toImage')
  gl.uniform1i(uTo, 1)

  const uPhase = gl.getUniformLocation(program, 'phase')
  gl.uniform1f(uPhase, phase)

  const uIsTransitioning = gl.getUniformLocation(program, 'isTransitioning')
  gl.uniform1f(uIsTransitioning, activeTransition ? 1.0 : 0.0)

  const uOrigin = gl.getUniformLocation(program, 'origin')
  gl.uniform2f(uOrigin, clickOrigin[0]!, clickOrigin[1]!)

  const uFromAspect = gl.getUniformLocation(program, 'fromAspect')
  gl.uniform1f(uFromAspect, imageAspects[activeIdx] || (16 / 9))

  const uToAspect = gl.getUniformLocation(program, 'toAspect')
  gl.uniform1f(uToAspect, imageAspects[targetIdx] || (16 / 9))

  const uRes = gl.getUniformLocation(program, 'resolution')
  const canvas = canvasRef.value
  if (canvas) {
    gl.uniform2f(uRes, canvas.width, canvas.height)
  }

  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
}

function initWebGL() {
  const canvas = canvasRef.value
  const container = containerRef.value
  if (!canvas || !container) return

  gl = canvas.getContext('webgl')
  if (!gl) return

  const vs = gl.createShader(gl.VERTEX_SHADER)!
  gl.shaderSource(vs, vsSource)
  gl.compileShader(vs)

  const fs = gl.createShader(gl.FRAGMENT_SHADER)!
  gl.shaderSource(fs, fsSource)
  gl.compileShader(fs)

  program = gl.createProgram()!
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

  const pos = gl.getAttribLocation(program, 'position')
  gl.enableVertexAttribArray(pos)
  gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0)

  const uRes = gl.getUniformLocation(program, 'resolution')

  const resize = () => {
    if (!canvas || !container || !gl) return
    const rect = container.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.floor(rect.width * dpr)
    canvas.height = Math.floor(rect.height * dpr)
    gl.viewport(0, 0, canvas.width, canvas.height)
    gl.uniform2f(uRes, canvas.width, canvas.height)
    drawFrame(0, isTransitioning.value)
  }

  resize()
  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(container)

  // Load all image textures
  loadedTextures = []
  imageAspects = []
  let loadedCount = 0

  props.images.forEach((url, i) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = url
    img.onload = () => {
      if (!gl) return
      imageAspects[i] = (img.naturalWidth || 16) / Math.max(img.naturalHeight || 9, 1)
      const tex = gl.createTexture()!
      gl.bindTexture(gl.TEXTURE_2D, tex)
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img)

      loadedTextures[i] = tex
      loadedCount++
      if (loadedCount === props.images.length) {
        drawFrame(0)
      }
    }
  })

  if (props.autoPlay) {
    autoPlayTimer = setInterval(() => {
      triggerTransition()
    }, props.autoPlayInterval)
  }
}

onMounted(() => {
  initWebGL()
})

onUnmounted(() => {
  cancelAnimationFrame(animFrameId)
  if (autoPlayTimer) clearInterval(autoPlayTimer)
  if (resizeObserver) resizeObserver.disconnect()
})
</script>
