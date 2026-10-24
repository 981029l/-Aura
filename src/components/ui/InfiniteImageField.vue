<template>
  <div
    ref="containerRef"
    class="relative w-full h-[480px] overflow-hidden rounded-2xl bg-[#09090b] select-none"
    :class="className"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <canvas ref="canvasRef" class="block w-full h-full" />
    <div class="pointer-events-none absolute bottom-4 left-4 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs text-white/70 backdrop-blur-md">
      <span class="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      <span>Move cursor to drift infinite field</span>
    </div>
  </div>
</template>

<script lang="ts">


export const DEFAULT_IMAGES = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=560&fit=crop&q=80',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=560&fit=crop&q=80',
  'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=560&fit=crop&q=80',
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=560&fit=crop&q=80',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=560&fit=crop&q=80',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=560&fit=crop&q=80',
  'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=400&h=560&fit=crop&q=80',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=560&fit=crop&q=80',
]
</script>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  images?: string[]
  imageWidth?: number
  imageHeight?: number
  gap?: number
  maxSpeed?: number
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  images: () => DEFAULT_IMAGES,
  imageWidth: 200,
  imageHeight: 280,
  gap: 24,
  maxSpeed: 4,
  className: '',
})

const containerRef = ref<HTMLDivElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)

let loadedImages: HTMLImageElement[] = []
let camX = 0
let camY = 0
let velX = 0
let velY = 0
let mouseX = 0.5
let mouseY = 0.5
let isInside = false
let rafId = 0
let resizeObserver: ResizeObserver | null = null

function handleMouseMove(e: MouseEvent) {
  if (!containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  mouseX = (e.clientX - rect.left) / rect.width
  mouseY = (e.clientY - rect.top) / rect.height
  isInside = true
}

function handleMouseLeave() {
  isInside = false
}

function preload() {
  loadedImages = props.images.map((src) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = src
    return img
  })
}

function resize() {
  const canvas = canvasRef.value
  const container = containerRef.value
  if (!canvas || !container) return

  const rect = container.getBoundingClientRect()
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  canvas.width = Math.floor(rect.width * dpr)
  canvas.height = Math.floor(rect.height * dpr)
  canvas.style.width = `${rect.width}px`
  canvas.style.height = `${rect.height}px`
}

function draw() {
  const canvas = canvasRef.value
  const container = containerRef.value
  if (!canvas || !container) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const w = container.clientWidth
  const h = container.clientHeight

  ctx.save()
  ctx.scale(dpr, dpr)
  ctx.clearRect(0, 0, w, h)

  // Target drift velocity
  const targetVx = isInside ? (mouseX - 0.5) * props.maxSpeed * 2 : 0.6
  const targetVy = isInside ? (mouseY - 0.5) * props.maxSpeed * 2 : 0.4

  velX += (targetVx - velX) * 0.08
  velY += (targetVy - velY) * 0.08
  camX += velX
  camY += velY

  const cellW = props.imageWidth + props.gap
  const cellH = props.imageHeight + props.gap

  const colStart = Math.floor((camX - w) / cellW) - 1
  const colEnd = Math.ceil((camX + w * 2) / cellW) + 1
  const rowStart = Math.floor((camY - h) / cellH) - 1
  const rowEnd = Math.ceil((camY + h * 2) / cellH) + 1

  const len = loadedImages.length || 1

  for (let r = rowStart; r <= rowEnd; r++) {
    for (let c = colStart; c <= colEnd; c++) {
      const screenX = c * cellW - camX
      const screenY = r * cellH - camY

      // Deterministic pseudo-random index
      const key = Math.abs((c * 73856093) ^ (r * 19349663)) % len
      const img = loadedImages[key]

      ctx.fillStyle = '#18181b'
      ctx.beginPath()
      ctx.roundRect(screenX, screenY, props.imageWidth, props.imageHeight, 14)
      ctx.fill()

      if (img && img.complete && img.naturalWidth) {
        ctx.save()
        ctx.beginPath()
        ctx.roundRect(screenX, screenY, props.imageWidth, props.imageHeight, 14)
        ctx.clip()
        ctx.drawImage(img, screenX, screenY, props.imageWidth, props.imageHeight)
        ctx.restore()
      }

      ctx.strokeStyle = 'rgba(255,255,255,0.08)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.roundRect(screenX, screenY, props.imageWidth, props.imageHeight, 14)
      ctx.stroke()
    }
  }

  ctx.restore()
  rafId = requestAnimationFrame(draw)
}

onMounted(() => {
  preload()
  resize()
  if (containerRef.value) {
    resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(containerRef.value)
  }
  rafId = requestAnimationFrame(draw)
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
  if (resizeObserver) resizeObserver.disconnect()
})
</script>
