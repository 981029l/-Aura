<template>
  <div
    ref="containerRef"
    class="relative w-full h-full min-h-[350px] flex items-center justify-center select-none overflow-hidden rounded-2xl bg-[#09090b]"
    :class="className"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
  >
    <canvas ref="canvasRef" class="block max-w-full max-h-full cursor-pointer" />
  </div>
</template>

<script lang="ts">


export const DEFAULT_LOGO_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><circle cx="150" cy="150" r="120" fill="%23ffffff"/><polygon points="150,50 180,130 260,130 195,180 220,260 150,210 80,260 105,180 40,130 120,130" fill="%23000000"/><circle cx="150" cy="150" r="35" fill="%23ffffff"/></svg>`
</script>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

interface Props {
  src?: string
  gridSize?: number
  scale?: number
  dotScale?: number
  threshold?: number
  contrast?: number
  blur?: number
  dotColor?: string
  bgColor?: string
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  src: DEFAULT_LOGO_SVG,
  gridSize: 120,
  scale: 1,
  dotScale: 1.1,
  threshold: 140,
  contrast: 20,
  blur: 1,
  dotColor: '#38bdf8',
  bgColor: '#09090b',
  className: '',
})

interface Dot {
  origX: number
  origY: number
  x: number
  y: number
  vx: number
  vy: number
}

const containerRef = ref<HTMLDivElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)

let dots: Dot[] = []
let mouseX = -9999
let mouseY = -9999
let isHovered = false
let rafId = 0

function handleMouseMove(e: MouseEvent) {
  if (!canvasRef.value) return
  const rect = canvasRef.value.getBoundingClientRect()
  mouseX = e.clientX - rect.left
  mouseY = e.clientY - rect.top
  isHovered = true
}

function handleMouseLeave() {
  mouseX = -9999
  mouseY = -9999
  isHovered = false
}

function handleClick(e: MouseEvent) {
  if (!canvasRef.value) return
  const rect = canvasRef.value.getBoundingClientRect()
  const clickX = e.clientX - rect.left
  const clickY = e.clientY - rect.top

  dots.forEach((dot) => {
    const dx = dot.x - clickX
    const dy = dot.y - clickY
    const dist = Math.hypot(dx, dy)
    if (dist < 180 && dist > 0) {
      const force = (1 - dist / 180) * 35
      dot.vx += (dx / dist) * force
      dot.vy += (dy / dist) * force
    }
  })
}

function processImage() {
  cancelAnimationFrame(rafId)
  dots = []

  const img = new Image()
  img.crossOrigin = 'anonymous'
  img.src = props.src

  img.onload = () => {
    const canvas = canvasRef.value
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dim = props.gridSize
    const aspect = (img.naturalWidth || 1) / (img.naturalHeight || 1)
    const outW = aspect >= 1 ? dim : Math.round(dim * aspect)
    const outH = aspect >= 1 ? Math.round(dim / aspect) : dim

    // Sample down onto offscreen canvas
    const offCanvas = document.createElement('canvas')
    offCanvas.width = outW
    offCanvas.height = outH
    const offCtx = offCanvas.getContext('2d')
    if (!offCtx) return

    offCtx.drawImage(img, 0, 0, outW, outH)
    const imgData = offCtx.getImageData(0, 0, outW, outH)
    const pixels = imgData.data

    const cellSpacing = 3 * props.scale
    const displayW = outW * cellSpacing
    const displayH = outH * cellSpacing

    const dpr = window.devicePixelRatio || 1
    canvas.width = displayW * dpr
    canvas.height = displayH * dpr
    canvas.style.width = `${displayW}px`
    canvas.style.height = `${displayH}px`
    ctx.scale(dpr, dpr)

    // Floyd-Steinberg Dither calculation
    const gray = new Float32Array(outW * outH)
    for (let i = 0; i < outW * outH; i++) {
      const p = i * 4
      const alpha = pixels[p + 3]! / 255
      const lum = (0.299 * pixels[p]! + 0.587 * pixels[p + 1]! + 0.114 * pixels[p + 2]!) * alpha
      gray[i] = lum
    }

    for (let y = 0; y < outH; y++) {
      for (let x = 0; x < outW; x++) {
        const idx = y * outW + x
        const oldVal = gray[idx]!
        const newVal = oldVal > props.threshold ? 255 : 0
        const err = oldVal - newVal

        if (newVal > 0) {
          const posX = x * cellSpacing + cellSpacing / 2
          const posY = y * cellSpacing + cellSpacing / 2
          dots.push({
            origX: posX,
            origY: posY,
            x: posX,
            y: posY,
            vx: 0,
            vy: 0,
          })
        }

        // Spread error
        if (x + 1 < outW) gray[idx + 1]! += (err * 7) / 16
        if (y + 1 < outH) {
          if (x > 0) gray[idx + outW - 1]! += (err * 3) / 16
          gray[idx + outW]! += (err * 5) / 16
          if (x + 1 < outW) gray[idx + outW + 1]! += err / 16
        }
      }
    }

    animate(ctx, displayW, displayH)
  }
}

function animate(ctx: CanvasRenderingContext2D, width: number, height: number) {
  ctx.clearRect(0, 0, width, height)

  const radius = 90
  const dotR = 1.2 * props.dotScale

  ctx.fillStyle = props.dotColor

  for (let i = 0; i < dots.length; i++) {
    const dot = dots[i]!
    if (isHovered) {
      const dx = dot.x - mouseX
      const dy = dot.y - mouseY
      const dist = Math.hypot(dx, dy)
      if (dist < radius && dist > 0) {
        const force = (1 - dist / radius) * 12
        dot.vx += (dx / dist) * force
        dot.vy += (dy / dist) * force
      }
    }

    // Spring return to orig
    const k = 0.1
    const damp = 0.82
    dot.vx = (dot.vx + (dot.origX - dot.x) * k) * damp
    dot.vy = (dot.vy + (dot.origY - dot.y) * k) * damp
    dot.x += dot.vx
    dot.y += dot.vy

    ctx.beginPath()
    ctx.arc(dot.x, dot.y, dotR, 0, Math.PI * 2)
    ctx.fill()
  }

  rafId = requestAnimationFrame(() => animate(ctx, width, height))
}

watch(() => [props.src, props.gridSize, props.scale, props.dotColor, props.threshold], processImage)

onMounted(() => {
  processImage()
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
})
</script>
