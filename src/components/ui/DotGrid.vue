<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'

export interface DotGridProps {
  dotSize?: number
  gap?: number
  bulgeRadius?: number
  class?: string
}

const props = withDefaults(defineProps<DotGridProps>(), {
  dotSize: 2.5,
  gap: 22,
  bulgeRadius: 130,
})

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animationFrameId: number | null = null

const mouse = {
  x: -1000,
  y: -1000,
  targetX: -1000,
  targetY: -1000,
  isHovered: false,
}

interface Ripple {
  x: number
  y: number
  radius: number
  maxRadius: number
  intensity: number
}

const ripples: Ripple[] = []

function handleMouseMove(e: MouseEvent) {
  if (!canvasRef.value) return
  const rect = canvasRef.value.getBoundingClientRect()
  mouse.targetX = e.clientX - rect.left
  mouse.targetY = e.clientY - rect.top
  mouse.isHovered = true
}

function handleMouseLeave() {
  mouse.isHovered = false
  mouse.targetX = -1000
  mouse.targetY = -1000
}

function handleClick(e: MouseEvent) {
  if (!canvasRef.value) return
  const rect = canvasRef.value.getBoundingClientRect()
  const clickX = e.clientX - rect.left
  const clickY = e.clientY - rect.top

  ripples.push({
    x: clickX,
    y: clickY,
    radius: 0,
    maxRadius: Math.max(rect.width, rect.height) * 0.8,
    intensity: 1.0,
  })
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const resize = () => {
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * window.devicePixelRatio
    canvas.height = rect.height * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
  }

  resize()
  window.addEventListener('resize', resize)

  const render = () => {
    if (!canvas || !ctx) return
    const width = canvas.width / window.devicePixelRatio
    const height = canvas.height / window.devicePixelRatio

    ctx.clearRect(0, 0, width, height)

    mouse.x += (mouse.targetX - mouse.x) * 0.18
    mouse.y += (mouse.targetY - mouse.y) * 0.18

    // 更新波纹
    for (let i = ripples.length - 1; i >= 0; i--) {
      const rip = ripples[i]
      rip.radius += 6
      rip.intensity *= 0.95
      if (rip.radius > rip.maxRadius || rip.intensity < 0.01) {
        ripples.splice(i, 1)
      }
    }

    const isDark = document.documentElement.classList.contains('dark')
    const baseColor = isDark ? '#3f3f46' : '#d4d4d8'
    const highlightColor = isDark ? '#38bdf8' : '#0284c7'

    const cols = Math.floor(width / props.gap)
    const rows = Math.floor(height / props.gap)
    const offsetX = (width - cols * props.gap) / 2
    const offsetY = (height - rows * props.gap) / 2

    for (let c = 0; c <= cols; c++) {
      for (let r = 0; r <= rows; r++) {
        let x = offsetX + c * props.gap
        let y = offsetY + r * props.gap
        let currentSize = props.dotSize
        let currentColor = baseColor

        // 光标凸透镜膨胀效果
        const dx = x - mouse.x
        const dy = y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < props.bulgeRadius && mouse.isHovered) {
          const factor = (1 - dist / props.bulgeRadius)
          const push = factor * 14
          x += (dx / (dist || 1)) * push
          y += (dy / (dist || 1)) * push
          currentSize += factor * 3.5
          currentColor = highlightColor
        }

        // 点击波纹扰动
        for (const rip of ripples) {
          const rDx = x - rip.x
          const rDy = y - rip.y
          const rDist = Math.sqrt(rDx * rDx + rDy * rDy)
          const diff = Math.abs(rDist - rip.radius)
          if (diff < 35) {
            const waveFactor = (1 - diff / 35) * rip.intensity
            currentSize += waveFactor * 4
            currentColor = highlightColor
          }
        }

        ctx.beginPath()
        ctx.arc(x, y, Math.max(1, currentSize), 0, Math.PI * 2)
        ctx.fillStyle = currentColor
        ctx.fill()
      }
    }

    animationFrameId = requestAnimationFrame(render)
  }

  animationFrameId = requestAnimationFrame(render)

  onUnmounted(() => {
    window.removeEventListener('resize', resize)
    if (animationFrameId) cancelAnimationFrame(animationFrameId)
  })
})
</script>

<template>
  <div
    :class="
      cn(
        'relative w-full h-[320px] rounded-2xl border border-zinc-200/90 bg-white/90 overflow-hidden shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/90 select-none cursor-crosshair',
        props.class
      )
    "
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
  >
    <canvas ref="canvasRef" class="absolute inset-0 h-full w-full" />

    <div class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
      <span class="rounded-full bg-cyan-500/10 px-3 py-1 font-mono text-xs font-semibold text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 backdrop-blur-md mb-2">
        OPTICAL LENS DOT GRID
      </span>
      <h3 class="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
        凸透镜点阵
      </h3>
      <p class="mt-1 text-xs text-zinc-500 font-mono">
        鼠标经过的区域会鼓起，点击会产生扩散的波纹
      </p>
    </div>
  </div>
</template>
