<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'

interface FluidCursorProps {
  colors?: string[]
  particleCount?: number
  trailLength?: number
  class?: string
}

const props = withDefaults(defineProps<FluidCursorProps>(), {
  colors: () => ['#3b82f6', '#60a5fa', '#93c5fd', '#38bdf8', '#818cf8'],
  particleCount: 2,
  trailLength: 20,
})

const containerRef = ref<HTMLDivElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
let animId: number | null = null

interface FluidPoint {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  alpha: number
  maxLife: number
  life: number
}

const points: FluidPoint[] = []
let lastX = 0
let lastY = 0

function handleMouseMove(e: MouseEvent) {
  const container = containerRef.value
  if (!container) return
  const rect = container.getBoundingClientRect()
  const mouseX = e.clientX - rect.left
  const mouseY = e.clientY - rect.top

  const dx = mouseX - lastX
  const dy = mouseY - lastY
  const speed = Math.hypot(dx, dy)

  // 移动越快，生成的微粒动量与半径越丰富
  for (let i = 0; i < props.particleCount; i++) {
    const angle = Math.random() * Math.PI * 2
    const spread = Math.random() * (speed * 0.2 + 2)
    const color = props.colors[Math.floor(Math.random() * props.colors.length)]

    points.push({
      x: mouseX + Math.cos(angle) * spread,
      y: mouseY + Math.sin(angle) * spread,
      vx: (Math.random() - 0.5) * 1.5 - dx * 0.05,
      vy: (Math.random() - 0.5) * 1.5 - dy * 0.05,
      size: 4 + Math.random() * 8 + Math.min(speed * 0.25, 12),
      color,
      alpha: 0.65,
      maxLife: 35 + Math.random() * 20,
      life: 0,
    })
  }

  lastX = mouseX
  lastY = mouseY
}

function render() {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const dpr = window.devicePixelRatio || 1
  const w = canvas.width / dpr
  const h = canvas.height / dpr

  ctx.clearRect(0, 0, w, h)

  for (let i = points.length - 1; i >= 0; i--) {
    const p = points[i]
    p.life++
    p.x += p.vx
    p.y += p.vy
    p.vx *= 0.96
    p.vy *= 0.96

    const progress = p.life / p.maxLife
    const currentAlpha = p.alpha * (1 - progress)
    const currentSize = p.size * (1 + progress * 0.6)

    if (progress >= 1) {
      points.splice(i, 1)
      continue
    }

    ctx.save()
    ctx.globalAlpha = currentAlpha
    ctx.fillStyle = p.color
    ctx.shadowBlur = currentSize * 2
    ctx.shadowColor = p.color
    ctx.beginPath()
    ctx.arc(p.x, p.y, Math.max(0.5, currentSize), 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }

  animId = requestAnimationFrame(render)
}

function resize() {
  const container = containerRef.value
  const canvas = canvasRef.value
  if (!container || !canvas) return

  const dpr = window.devicePixelRatio || 1
  const rect = container.getBoundingClientRect()
  const w = rect.width || 400
  const h = rect.height || 300

  canvas.width = w * dpr
  canvas.height = h * dpr

  const ctx = canvas.getContext('2d')
  if (ctx) ctx.scale(dpr, dpr)
}

onMounted(() => {
  resize()
  window.addEventListener('resize', resize)
  animId = requestAnimationFrame(render)
})

onUnmounted(() => {
  if (animId) cancelAnimationFrame(animId)
  window.removeEventListener('resize', resize)
})
</script>

<template>
  <div
    ref="containerRef"
    :class="cn('relative h-full w-full overflow-hidden select-none', props.class)"
    @mousemove="handleMouseMove"
  >
    <canvas ref="canvasRef" class="pointer-events-none absolute inset-0 z-20 h-full w-full" />
    <slot />
  </div>
</template>
