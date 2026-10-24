<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'

export interface GravityWellProps {
  cols?: number
  rows?: number
  strength?: number
  class?: string
}

const props = withDefaults(defineProps<GravityWellProps>(), {
  cols: 20,
  rows: 12,
  strength: 35,
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

interface Shockwave {
  x: number
  y: number
  radius: number
  maxRadius: number
  alpha: number
}

const shockwaves: Shockwave[] = []

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

  shockwaves.push({
    x: clickX,
    y: clickY,
    radius: 0,
    maxRadius: Math.max(rect.width, rect.height) * 0.7,
    alpha: 1.0,
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

    // 缓动追随光标
    mouse.x += (mouse.targetX - mouse.x) * 0.15
    mouse.y += (mouse.targetY - mouse.y) * 0.15

    // 更新冲击波
    for (let i = shockwaves.length - 1; i >= 0; i--) {
      const sw = shockwaves[i]
      sw.radius += 5.5
      sw.alpha *= 0.94
      if (sw.radius > sw.maxRadius || sw.alpha < 0.01) {
        shockwaves.splice(i, 1)
      }
    }

    const cellWidth = width / props.cols
    const cellHeight = height / props.rows

    // 检测是否深色模式
    const isDark = document.documentElement.classList.contains('dark')
    const baseColor = isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.12)'
    const accentColor = isDark ? '#38bdf8' : '#0284c7'

    // 绘制变形网格线
    for (let r = 0; r <= props.rows; r++) {
      ctx.beginPath()
      for (let c = 0; c <= props.cols; c++) {
        let x = c * cellWidth
        let y = r * cellHeight

        // 引力弯曲偏移
        const dx = mouse.x - x
        const dy = mouse.y - y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const radius = 180

        if (dist < radius && mouse.isHovered) {
          const factor = (1 - dist / radius) * (props.strength / dist) * 15
          x += dx * factor
          y += dy * factor
        }

        // 冲击波扰动
        for (const sw of shockwaves) {
          const swDx = x - sw.x
          const swDy = y - sw.y
          const swDist = Math.sqrt(swDx * swDx + swDy * swDy)
          const diff = Math.abs(swDist - sw.radius)
          if (diff < 30) {
            const waveFactor = (1 - diff / 30) * 18 * sw.alpha
            x += (swDx / swDist) * waveFactor
            y += (swDy / swDist) * waveFactor
          }
        }

        if (c === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.strokeStyle = baseColor
      ctx.lineWidth = 1
      ctx.stroke()
    }

    for (let c = 0; c <= props.cols; c++) {
      ctx.beginPath()
      for (let r = 0; r <= props.rows; r++) {
        let x = c * cellWidth
        let y = r * cellHeight

        const dx = mouse.x - x
        const dy = mouse.y - y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const radius = 180

        if (dist < radius && mouse.isHovered) {
          const factor = (1 - dist / radius) * (props.strength / dist) * 15
          x += dx * factor
          y += dy * factor
        }

        for (const sw of shockwaves) {
          const swDx = x - sw.x
          const swDy = y - sw.y
          const swDist = Math.sqrt(swDx * swDx + swDy * swDy)
          const diff = Math.abs(swDist - sw.radius)
          if (diff < 30) {
            const waveFactor = (1 - diff / 30) * 18 * sw.alpha
            x += (swDx / swDist) * waveFactor
            y += (swDy / swDist) * waveFactor
          }
        }

        if (r === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.strokeStyle = baseColor
      ctx.lineWidth = 1
      ctx.stroke()
    }

    // 绘制冲击波外圈
    for (const sw of shockwaves) {
      ctx.beginPath()
      ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2)
      ctx.strokeStyle = accentColor
      ctx.lineWidth = 2 * sw.alpha
      ctx.stroke()
    }

    // 光标核心微光斑
    if (mouse.isHovered) {
      const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 120)
      grad.addColorStop(0, isDark ? 'rgba(56, 189, 248, 0.25)' : 'rgba(2, 132, 199, 0.15)')
      grad.addColorStop(1, 'transparent')
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(mouse.x, mouse.y, 120, 0, Math.PI * 2)
      ctx.fill()
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

    <!-- 覆盖层中心提示文案 -->
    <div class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
      <span class="rounded-full bg-blue-500/10 px-3 py-1 font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 border border-blue-500/20 backdrop-blur-md mb-2">
        SPACETIME GRAVITY WELL
      </span>
      <h3 class="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
        引力网格
      </h3>
      <p class="mt-1 text-xs text-zinc-500 font-mono">
        移动鼠标，附近的网格会向光标弯曲；点击产生扩散的波动
      </p>
    </div>
  </div>
</template>
