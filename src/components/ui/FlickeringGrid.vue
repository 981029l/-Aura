<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { cn } from '@/lib/utils'

interface FlickeringGridProps {
  /** 网格方块尺寸，默认 4 */
  squareSize?: number
  /** 方块间距，默认 4 */
  gridGap?: number
  /** 单个方块每帧随机呼吸闪烁概率 (0 ~ 1)，默认 0.3 */
  flickerChance?: number
  /** 方块颜色（如 #64748b），默认明暗自适应 */
  color?: string
  /** 最大不透明度 (0 ~ 1)，默认 0.3 */
  maxOpacity?: number
  class?: string
}

const props = withDefaults(defineProps<FlickeringGridProps>(), {
  squareSize: 4,
  gridGap: 4,
  flickerChance: 0.3,
  maxOpacity: 0.3,
})

const containerRef = ref<HTMLDivElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
let animationFrameId: number | null = null
let isVisible = true
let observer: IntersectionObserver | null = null
let squares: Float32Array = new Float32Array(0)
let cols = 0
let rows = 0

function initGrid(width: number, height: number) {
  cols = Math.floor(width / (props.squareSize + props.gridGap))
  rows = Math.floor(height / (props.squareSize + props.gridGap))
  squares = new Float32Array(cols * rows)

  for (let i = 0; i < squares.length; i++) {
    squares[i] = Math.random() * props.maxOpacity
  }
}

function resizeCanvas() {
  const container = containerRef.value
  const canvas = canvasRef.value
  if (!container || !canvas) return

  const dpr = window.devicePixelRatio || 1
  const rect = container.getBoundingClientRect()
  canvas.width = rect.width * dpr
  canvas.height = rect.height * dpr

  const ctx = canvas.getContext('2d')
  if (ctx) {
    ctx.scale(dpr, dpr)
  }

  initGrid(rect.width, rect.height)
}

function render() {
  const canvas = canvasRef.value
  const container = containerRef.value
  if (!canvas || !container) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const rect = container.getBoundingClientRect()
  ctx.clearRect(0, 0, rect.width, rect.height)

  const isDark = document.documentElement.classList.contains('dark')
  const defaultRgb = isDark ? '148, 163, 184' : '100, 116, 139'
  const rgb = props.color || defaultRgb

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const idx = r * cols + c

      // 概率呼吸变化
      if (Math.random() < props.flickerChance) {
        squares[idx] = Math.random() * props.maxOpacity
      }

      const opacity = squares[idx]
      ctx.fillStyle = rgb.startsWith('#')
        ? rgb
        : `rgba(${rgb}, ${opacity})`

      const x = c * (props.squareSize + props.gridGap)
      const y = r * (props.squareSize + props.gridGap)
      ctx.fillRect(x, y, props.squareSize, props.squareSize)
    }
  }

  if (isVisible) {
    animationFrameId = requestAnimationFrame(render)
  }
}

onMounted(() => {
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)

  if (containerRef.value && typeof IntersectionObserver !== 'undefined') {
    observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        if (!isVisible) {
          isVisible = true
          render()
        }
      } else {
        isVisible = false
        if (animationFrameId !== null) {
          cancelAnimationFrame(animationFrameId)
          animationFrameId = null
        }
      }
    }, { threshold: 0.05 })
    observer.observe(containerRef.value)
  }

  render()
})

onUnmounted(() => {
  window.removeEventListener('resize', resizeCanvas)
  if (observer) {
    observer.disconnect()
    observer = null
  }
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
    animationFrameId = null
  }
})

watch([() => props.squareSize, () => props.gridGap], () => {
  resizeCanvas()
})
</script>

<template>
  <div
    ref="containerRef"
    :class="cn('pointer-events-none relative h-full w-full overflow-hidden', props.class)"
  >
    <canvas
      ref="canvasRef"
      class="absolute inset-0 h-full w-full"
    />
  </div>
</template>
