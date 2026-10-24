<template>
  <div
    ref="containerRef"
    class="relative w-full h-full min-h-[320px] overflow-hidden rounded-2xl bg-[#09090b] select-none"
    :class="className"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <canvas ref="canvasRef" class="block w-full h-full pointer-events-none" />
    <div class="relative z-10 w-full h-full">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  gap?: number
  speed?: number
  colors?: string[]
  noFocus?: boolean
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  gap: 8,
  speed: 0.025,
  colors: () => ['#e879f9', '#a78bfa', '#38bdf8', '#22d3ee'],
  noFocus: false,
  className: '',
})

interface Pixel {
  x: number
  y: number
  size: number
  intensity: number
  targetIntensity: number
  colorPhase: number
}

const containerRef = ref<HTMLDivElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)

let pixels: Pixel[][] = []
let mouseX = -1000
let mouseY = -1000
let animationId = 0
let resizeObserver: ResizeObserver | null = null

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1]!, 16),
        g: parseInt(result[2]!, 16),
        b: parseInt(result[3]!, 16),
      }
    : { r: 255, g: 255, b: 255 }
}

function lerpColor(c1: string, c2: string, t: number) {
  const r1 = hexToRgb(c1)
  const r2 = hexToRgb(c2)
  const r = Math.round(r1.r + (r2.r - r1.r) * t)
  const g = Math.round(r1.g + (r2.g - r1.g) * t)
  const b = Math.round(r1.b + (r2.b - r1.b) * t)
  return `rgb(${r}, ${g}, ${b})`
}

function getColor(intensity: number, phase: number) {
  if (props.colors.length <= 1) return props.colors[0] || '#38bdf8'
  const t = (phase + intensity) % 1
  const idx = Math.floor(t * (props.colors.length - 1))
  const nextIdx = Math.min(idx + 1, props.colors.length - 1)
  const localT = (t * (props.colors.length - 1)) % 1
  return lerpColor(props.colors[idx]!, props.colors[nextIdx]!, localT)
}

function handleMouseMove(e: MouseEvent) {
  if (props.noFocus || !containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  mouseX = e.clientX - rect.left
  mouseY = e.clientY - rect.top
}

function handleMouseLeave() {
  mouseX = -1000
  mouseY = -1000
}

function initGrid() {
  const canvas = canvasRef.value
  const container = containerRef.value
  if (!canvas || !container) return

  const rect = container.getBoundingClientRect()
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  canvas.width = Math.floor(rect.width * dpr)
  canvas.height = Math.floor(rect.height * dpr)
  canvas.style.width = `${rect.width}px`
  canvas.style.height = `${rect.height}px`

  const cols = Math.ceil(rect.width / props.gap)
  const rows = Math.ceil(rect.height / props.gap)
  const pixelSize = Math.max(2, props.gap * 0.75)

  pixels = []
  for (let y = 0; y < rows; y++) {
    const row: Pixel[] = []
    for (let x = 0; x < cols; x++) {
      row.push({
        x: x * props.gap,
        y: y * props.gap,
        size: pixelSize,
        intensity: 0.05,
        targetIntensity: 0.05,
        colorPhase: (x + y) * 0.03,
      })
    }
    pixels.push(row)
  }
}

function animate() {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  ctx.save()
  ctx.scale(dpr, dpr)
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  const radius = 90
  const radiusSq = radius * radius

  for (let r = 0; r < pixels.length; r++) {
    const row = pixels[r]!
    for (let c = 0; c < row.length; c++) {
      const p = row[c]!
      const dx = mouseX - p.x
      const dy = mouseY - p.y
      const distSq = dx * dx + dy * dy

      if (distSq < radiusSq) {
        const factor = 1 - Math.sqrt(distSq) / radius
        p.targetIntensity = Math.max(p.targetIntensity, factor)
      }

      // Smooth decay
      p.intensity += (p.targetIntensity - p.intensity) * 0.25
      p.targetIntensity = Math.max(0.04, p.targetIntensity - props.speed)

      const color = getColor(p.intensity, p.colorPhase)
      ctx.fillStyle = color
      ctx.globalAlpha = Math.max(0.06, p.intensity)

      ctx.beginPath()
      ctx.roundRect(p.x, p.y, p.size, p.size, 2)
      ctx.fill()
    }
  }

  ctx.restore()
  animationId = requestAnimationFrame(animate)
}

onMounted(() => {
  initGrid()
  if (containerRef.value) {
    resizeObserver = new ResizeObserver(initGrid)
    resizeObserver.observe(containerRef.value)
  }
  animationId = requestAnimationFrame(animate)
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  if (resizeObserver) resizeObserver.disconnect()
})
</script>
