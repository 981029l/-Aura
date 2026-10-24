<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { cn } from '@/lib/utils'

interface SparklesCoreProps {
  id?: string
  background?: string
  minSize?: number
  maxSize?: number
  particleDensity?: number
  particleColor?: string
  speed?: number
  class?: string
}

const props = withDefaults(defineProps<SparklesCoreProps>(), {
  id: 'tsparticles',
  background: 'transparent',
  minSize: 0.6,
  maxSize: 1.8,
  particleDensity: 120,
  particleColor: '#FFFFFF',
  speed: 0.8,
})

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animId: number | null = null

interface SparkleParticle {
  x: number
  y: number
  size: number
  opacity: number
  targetOpacity: number
  speedX: number
  speedY: number
  color: string
}

const particles: SparkleParticle[] = []

function initParticles(w: number, h: number) {
  particles.length = 0
  const count = Math.floor((w * h) / (10000 / props.particleDensity))

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      size: props.minSize + Math.random() * (props.maxSize - props.minSize),
      opacity: Math.random(),
      targetOpacity: Math.random(),
      speedX: (Math.random() - 0.5) * 0.3 * props.speed,
      speedY: -(0.2 + Math.random() * 0.5) * props.speed, // 缓缓上升
      color: props.particleColor,
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

  ctx.clearRect(0, 0, w, h)

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]

    // 明暗呼吸插值
    p.opacity += (p.targetOpacity - p.opacity) * 0.03
    if (Math.abs(p.targetOpacity - p.opacity) < 0.05) {
      p.targetOpacity = Math.random()
    }

    // 位置位移
    p.x += p.speedX
    p.y += p.speedY

    // 边界循环再生
    if (p.y < 0) {
      p.y = h
      p.x = Math.random() * w
    }
    if (p.x < 0) p.x = w
    if (p.x > w) p.x = 0

    // 绘制闪烁星芒
    ctx.save()
    ctx.globalAlpha = p.opacity
    ctx.fillStyle = p.color
    ctx.shadowBlur = p.size * 2
    ctx.shadowColor = p.color
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }

  animId = requestAnimationFrame(render)
}

function resize() {
  const canvas = canvasRef.value
  if (!canvas) return
  const parent = canvas.parentElement
  if (!parent) return

  const dpr = window.devicePixelRatio || 1
  const w = parent.clientWidth || 300
  const h = parent.clientHeight || 200

  canvas.width = w * dpr
  canvas.height = h * dpr

  const ctx = canvas.getContext('2d')
  if (ctx) ctx.scale(dpr, dpr)

  initParticles(w, h)
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

watch(() => [props.particleDensity, props.particleColor, props.speed], () => {
  resize()
})
</script>

<template>
  <div :class="cn('relative h-full w-full overflow-hidden', props.class)" :style="{ background: props.background }">
    <canvas ref="canvasRef" class="pointer-events-none absolute inset-0 h-full w-full" />
    <slot />
  </div>
</template>
