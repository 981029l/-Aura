<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'

interface VortexProps {
  particleCount?: number
  rangeY?: number
  baseSpeed?: number
  baseRadius?: number
  rangeRadius?: number
  backgroundColor?: string
  particleColors?: string[]
  class?: string
  containerClass?: string
}

const props = withDefaults(defineProps<VortexProps>(), {
  particleCount: 280,
  rangeY: 100,
  baseSpeed: 0.15,
  baseRadius: 1,
  rangeRadius: 2,
  backgroundColor: 'transparent',
  particleColors: () => ['#38bdf8', '#818cf8', '#c084fc', '#e879f9', '#22d3ee'],
})

const containerRef = ref<HTMLDivElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
let animId: number | null = null

interface Particle {
  x: number
  y: number
  radius: number
  angle: number
  distance: number
  speed: number
  color: string
  opacity: number
}

const particles: Particle[] = []
let mouseX = 0
let mouseY = 0
let targetMouseX = 0
let targetMouseY = 0

function initParticles(w: number, h: number) {
  particles.length = 0
  const maxDist = Math.hypot(w / 2, h / 2) * 1.1

  for (let i = 0; i < props.particleCount; i++) {
    const angle = Math.random() * Math.PI * 2
    const distance = Math.random() * maxDist
    const speed = (props.baseSpeed + Math.random() * 0.4) * (0.8 + 80 / (distance + 60))
    const color = props.particleColors[Math.floor(Math.random() * props.particleColors.length)]

    particles.push({
      x: 0,
      y: 0,
      radius: props.baseRadius + Math.random() * props.rangeRadius,
      angle,
      distance,
      speed,
      color,
      opacity: 0.1 + Math.random() * 0.8,
    })
  }
}

function render() {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const dpr = window.devicePixelRatio || 1
  const w = canvas.width / dpr
  const h = canvas.height / dpr

  // 鼠标引力中心平滑插值
  mouseX += (targetMouseX - mouseX) * 0.05
  mouseY += (targetMouseY - mouseY) * 0.05
  const cx = w / 2 + (mouseX - w / 2) * 0.25
  const cy = h / 2 + (mouseY - h / 2) * 0.25

  // 拖尾半透明清除
  ctx.fillStyle = 'rgba(0, 0, 0, 0.12)'
  ctx.fillRect(0, 0, w, h)

  const maxDist = Math.hypot(w / 2, h / 2) * 1.1

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]

    // 经典开普勒轨道角速度衰减：越靠近中心角速度越快
    p.angle += (p.speed * 0.02)
    // 渐进向心引力收缩
    p.distance -= p.speed * 0.8

    // 触碰引力奇点中心后从外层重新喷发
    if (p.distance <= 10) {
      p.distance = maxDist * (0.8 + Math.random() * 0.2)
      p.angle = Math.random() * Math.PI * 2
    }

    const px = cx + Math.cos(p.angle) * p.distance
    const py = cy + Math.sin(p.angle) * p.distance

    // 绘制流光粒子
    ctx.save()
    ctx.beginPath()
    ctx.arc(px, py, p.radius, 0, Math.PI * 2)
    ctx.fillStyle = p.color
    ctx.globalAlpha = p.opacity * Math.min(1, p.distance / 120)
    ctx.shadowBlur = p.radius * 3
    ctx.shadowColor = p.color
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
  const w = rect.width || 600
  const h = rect.height || 400

  canvas.width = w * dpr
  canvas.height = h * dpr

  const ctx = canvas.getContext('2d')
  if (ctx) ctx.scale(dpr, dpr)

  targetMouseX = w / 2
  targetMouseY = h / 2
  mouseX = targetMouseX
  mouseY = targetMouseY

  initParticles(w, h)
}

function handleMouseMove(e: MouseEvent) {
  const container = containerRef.value
  if (!container) return
  const rect = container.getBoundingClientRect()
  targetMouseX = e.clientX - rect.left
  targetMouseY = e.clientY - rect.top
}

function handleMouseLeave() {
  const container = containerRef.value
  if (!container) return
  const rect = container.getBoundingClientRect()
  targetMouseX = rect.width / 2
  targetMouseY = rect.height / 2
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
    :class="cn('relative h-full w-full overflow-hidden bg-black', props.containerClass)"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <canvas ref="canvasRef" class="absolute inset-0 h-full w-full pointer-events-none" />
    <div :class="cn('relative z-10', props.class)">
      <slot />
    </div>
  </div>
</template>
