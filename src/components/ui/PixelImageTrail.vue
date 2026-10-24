<template>
  <div
    ref="containerRef"
    :class="
      cn(
        'relative isolate w-full min-h-[420px] h-[420px] overflow-hidden rounded-2xl bg-zinc-950 touch-pan-y select-none group',
        className
      )
    "
    @pointerenter="onPointerEnter"
    @pointermove="onPointerMove"
    @pointerleave="onPointerLeave"
  >
    <!-- Faint base backdrop so the stage never looks like an empty black void -->
    <img
      ref="imageRef"
      :src="src"
      :alt="alt"
      draggable="false"
      class="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-[0.14] saturate-[.75] transition-opacity duration-500 group-hover:opacity-[0.08]"
      @load="handleImageLoaded"
    />

    <!-- Pixel Trail Canvas -->
    <canvas
      ref="canvasRef"
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 w-full h-full block"
    />

    <!-- Subtle Grid Overlay -->
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.07]"
      :style="{
        backgroundSize: `${Math.max(12, pixelSize)}px ${Math.max(12, pixelSize)}px`,
        backgroundImage:
          'linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)',
      }"
    />

    <!-- Optional Slot Content / Interactive Prompt -->
    <div class="relative z-10 pointer-events-none w-full h-full flex flex-col justify-between p-6">
      <slot>
        <div class="flex items-center justify-between text-xs font-mono text-white/60">
          <span class="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
            PIXEL FRAGMENT TRAIL · {{ Math.max(12, pixelSize) }}PX GRID
          </span>
          <span class="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white/80">
            {{ isHovering ? '✦ 正在绘制' : '✦ 在画布上移动鼠标' }}
          </span>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { cn } from '@/lib/utils'

export interface PixelImageTrailProps {
  /** Image revealed by the pixel trail. */
  src?: string
  /** Accessible description for the image. */
  alt?: string
  /** Width and height of each square in pixels. */
  pixelSize?: number
  /** Maximum distance for an occasional satellite pixel. */
  radius?: number
  /** Time in milliseconds before a square completely fades. */
  fadeDuration?: number
  /** Maximum number of squares kept in the trail. */
  maxPixels?: number
  /** Number of image fragments visible before the first interaction. */
  initialPixels?: number
  className?: string
}

const props = withDefaults(defineProps<PixelImageTrailProps>(), {
  src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1800&q=85',
  alt: 'A green mountain lake beneath a cloudy sky',
  pixelSize: 36,
  radius: 58,
  fadeDuration: 900,
  maxPixels: 84,
  initialPixels: 28,
  className: '',
})

interface TrailPixel {
  column: number
  row: number
  touchedAt: number
  ambient: boolean
}

const containerRef = ref<HTMLDivElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
const imageRef = ref<HTMLImageElement | null>(null)
const isHovering = ref(false)

let width = 0
let height = 0
let frame = 0
let pointerInside = false
let lastColumn: number | null = null
let lastRow: number | null = null
const pixels = new Map<string, TrailPixel>()
const hoveredKeys = new Set<string>()
let resizeObserver: ResizeObserver | null = null
let fallbackCanvas: HTMLCanvasElement | null = null

function getFallbackCanvas(): HTMLCanvasElement {
  if (fallbackCanvas) return fallbackCanvas
  const c = document.createElement('canvas')
  c.width = 800
  c.height = 500
  const ctx = c.getContext('2d')
  if (ctx) {
    const grad = ctx.createLinearGradient(0, 0, 800, 500)
    grad.addColorStop(0, '#0ea5e9')
    grad.addColorStop(0.35, '#6366f1')
    grad.addColorStop(0.7, '#ec4899')
    grad.addColorStop(1, '#f59e0b')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, 800, 500)

    // Mountain / horizon silhouettes for rich visual fragments
    ctx.fillStyle = 'rgba(255,255,255,0.22)'
    ctx.beginPath()
    ctx.arc(580, 150, 90, 0, Math.PI * 2)
    ctx.fill()

    ctx.fillStyle = 'rgba(15,23,42,0.45)'
    ctx.beginPath()
    ctx.moveTo(0, 500)
    ctx.lineTo(0, 320)
    ctx.lineTo(220, 180)
    ctx.lineTo(440, 340)
    ctx.lineTo(620, 210)
    ctx.lineTo(800, 310)
    ctx.lineTo(800, 500)
    ctx.closePath()
    ctx.fill()
  }
  fallbackCanvas = c
  return c
}

function seedPixels() {
  const size = Math.max(12, props.pixelSize)
  const columns = Math.max(1, Math.ceil(width / size))
  const rows = Math.max(1, Math.ceil(height / size))
  const count = Math.min(props.initialPixels, columns * rows)

  for (let index = 0; index < count; index += 1) {
    const column = Math.floor(Math.random() * columns)
    const row = Math.floor(Math.random() * rows)
    pixels.set(`${column}:${row}`, {
      column,
      row,
      touchedAt: performance.now(),
      ambient: true,
    })
  }
}

function drawPixel(
  context: CanvasRenderingContext2D,
  pixel: TrailPixel,
  opacity: number
) {
  const size = Math.max(12, props.pixelSize)
  const x = pixel.column * size
  const y = pixel.row * size

  const image = imageRef.value
  const hasLoadedImage =
    image && image.complete && image.naturalWidth > 0 && image.naturalHeight > 0

  const source: HTMLImageElement | HTMLCanvasElement = hasLoadedImage
    ? image
    : getFallbackCanvas()
  const srcW = hasLoadedImage ? image.naturalWidth : 800
  const srcH = hasLoadedImage ? image.naturalHeight : 500

  const coverScale = Math.max(width / srcW, height / srcH)
  const renderedWidth = srcW * coverScale
  const renderedHeight = srcH * coverScale
  const offsetX = (width - renderedWidth) / 2
  const offsetY = (height - renderedHeight) / 2

  context.globalAlpha = opacity
  context.drawImage(
    source,
    (x - offsetX) / coverScale,
    (y - offsetY) / coverScale,
    size / coverScale,
    size / coverScale,
    x,
    y,
    size - 1,
    size - 1
  )
}

function draw(now: number) {
  frame = 0
  const canvas = canvasRef.value
  if (!canvas) return
  const context = canvas.getContext('2d')
  if (!context) return

  context.clearRect(0, 0, width, height)

  for (const [key, pixel] of pixels) {
    if (pointerInside && hoveredKeys.has(key)) {
      pixel.touchedAt = now
    }

    const age = now - pixel.touchedAt
    const opacity = pixel.ambient
      ? pointerInside && hoveredKeys.has(key)
        ? 1
        : 0.65
      : Math.max(0, 1 - age / Math.max(120, props.fadeDuration))

    if (opacity <= 0) {
      pixels.delete(key)
      continue
    }

    drawPixel(context, pixel, opacity * opacity * (3 - 2 * opacity))
  }

  context.globalAlpha = 1
  if ([...pixels.values()].some((pixel) => !pixel.ambient)) {
    frame = requestAnimationFrame(draw)
  }
}

function requestDraw() {
  if (!frame) frame = requestAnimationFrame(draw)
}

function trimTrail() {
  const limit = Math.max(1, props.maxPixels)
  const trailPixels = [...pixels.entries()].filter(([, pixel]) => !pixel.ambient)
  if (trailPixels.length <= limit) return

  const oldest = trailPixels.sort((a, b) => a[1].touchedAt - b[1].touchedAt)
  const excess = trailPixels.length - limit
  for (let index = 0; index < excess; index += 1) {
    const entry = oldest[index]
    if (entry) pixels.delete(entry[0])
  }
}

function setTrailPixel(
  key: string,
  column: number,
  row: number,
  touchedAt: number
) {
  if (pixels.get(key)?.ambient) return
  pixels.set(key, { column, row, touchedAt, ambient: false })
}

function paintAt(clientX: number, clientY: number) {
  const container = containerRef.value
  if (!container) return
  const size = Math.max(12, props.pixelSize)
  const rect = container.getBoundingClientRect()
  const x = clientX - rect.left
  const y = clientY - rect.top
  const centerColumn = Math.floor(x / size)
  const centerRow = Math.floor(y / size)

  const now = performance.now()
  hoveredKeys.clear()
  const fromColumn = lastColumn ?? centerColumn
  const fromRow = lastRow ?? centerRow
  const columnDistance = centerColumn - fromColumn
  const rowDistance = centerRow - fromRow
  const steps = Math.max(1, Math.abs(columnDistance), Math.abs(rowDistance))

  for (let step = 0; step <= steps; step += 1) {
    const progress = step / steps
    const column = Math.round(fromColumn + columnDistance * progress)
    const row = Math.round(fromRow + rowDistance * progress)
    const key = `${column}:${row}`
    setTrailPixel(key, column, row, now)
  }

  const xDirection = x % size > size / 2 ? 1 : -1
  const yDirection = y % size > size / 2 ? 1 : -1
  const activeCluster: Array<[number, number]> = [
    [centerColumn, centerRow],
    [centerColumn + xDirection, centerRow],
    [centerColumn, centerRow + yDirection],
    [centerColumn + xDirection, centerRow + yDirection],
  ]

  for (const [column, row] of activeCluster) {
    if (
      column < 0 ||
      row < 0 ||
      column * size >= width ||
      row * size >= height
    ) {
      continue
    }

    const key = `${column}:${row}`
    hoveredKeys.add(key)
    setTrailPixel(key, column, row, now)
  }

  const moved = lastColumn !== centerColumn || lastRow !== centerRow
  if (moved && Math.random() < 0.34) {
    const spread = Math.max(1, Math.floor(props.radius / size))
    const distance = 1 + Math.floor(Math.random() * spread)
    const horizontalMotion = Math.abs(columnDistance) >= Math.abs(rowDistance)
    const column =
      centerColumn +
      (horizontalMotion ? 0 : Math.random() < 0.5 ? -distance : distance)
    const row =
      centerRow +
      (horizontalMotion ? (Math.random() < 0.5 ? -distance : distance) : 0)

    if (
      column >= 0 &&
      row >= 0 &&
      column * size < width &&
      row * size < height
    ) {
      setTrailPixel(
        `${column}:${row}`,
        column,
        row,
        now - props.fadeDuration * 0.18
      )
    }
  }

  lastColumn = centerColumn
  lastRow = centerRow

  trimTrail()
  requestDraw()
}

function onPointerEnter(e: PointerEvent) {
  pointerInside = true
  isHovering.value = true
  paintAt(e.clientX, e.clientY)
}

function onPointerMove(e: PointerEvent) {
  pointerInside = true
  isHovering.value = true
  paintAt(e.clientX, e.clientY)
}

function onPointerLeave() {
  pointerInside = false
  isHovering.value = false
  hoveredKeys.clear()
  lastColumn = null
  lastRow = null
  requestDraw()
}

function handleImageLoaded() {
  requestDraw()
}

function resize() {
  cancelAnimationFrame(frame)
  const container = containerRef.value
  const canvas = canvasRef.value
  if (!container || !canvas) return
  const context = canvas.getContext('2d')
  if (!context) return

  const rect = container.getBoundingClientRect()
  const dpr = Math.min(window.devicePixelRatio || 1, 2)

  width = rect.width
  height = rect.height
  if (width <= 0 || height <= 0) return

  canvas.width = Math.round(width * dpr)
  canvas.height = Math.round(height * dpr)
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`
  context.setTransform(dpr, 0, 0, dpr, 0, 0)
  pixels.clear()
  seedPixels()
  context.clearRect(0, 0, width, height)
  frame = requestAnimationFrame(draw)
}

watch(
  () => [props.pixelSize, props.initialPixels, props.src],
  () => {
    resize()
  }
)

onMounted(() => {
  resize()
  if (containerRef.value) {
    resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(containerRef.value)
  }
})

onUnmounted(() => {
  cancelAnimationFrame(frame)
  if (resizeObserver) resizeObserver.disconnect()
})
</script>
