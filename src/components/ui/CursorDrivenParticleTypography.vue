<template>
  <div
    ref="containerRef"
    class="relative w-full h-full min-h-[300px] flex items-center justify-center overflow-hidden rounded-2xl bg-neutral-950 select-none"
    :class="className"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <canvas ref="canvasRef" class="block w-full h-full pointer-events-none" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

interface Props {
  text?: string
  fontSize?: number
  fontFamily?: string
  particleSize?: number
  particleDensity?: number
  dispersionStrength?: number
  returnSpeed?: number
  color?: string
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  text: 'AURA UI',
  fontSize: 100,
  fontFamily: 'system-ui, sans-serif',
  particleSize: 1.6,
  particleDensity: 5,
  dispersionStrength: 18,
  returnSpeed: 0.08,
  color: '#38bdf8',
  className: '',
})

interface Particle {
  x: number
  y: number
  originX: number
  originY: number
  vx: number
  vy: number
}

const containerRef = ref<HTMLDivElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)

let particles: Particle[] = []
let mouseX = -1000
let mouseY = -1000
let animationFrameId = 0
let resizeObserver: ResizeObserver | null = null

function handleMouseMove(e: MouseEvent) {
  if (!canvasRef.value) return
  const rect = canvasRef.value.getBoundingClientRect()
  mouseX = e.clientX - rect.left
  mouseY = e.clientY - rect.top
}

function handleMouseLeave() {
  mouseX = -1000
  mouseY = -1000
}

function initParticles() {
  const canvas = canvasRef.value
  const container = containerRef.value
  if (!canvas || !container) return
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  if (!ctx) return

  const rect = container.getBoundingClientRect()
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  canvas.width = Math.floor(rect.width * dpr)
  canvas.height = Math.floor(rect.height * dpr)
  canvas.style.width = `${rect.width}px`
  canvas.style.height = `${rect.height}px`

  ctx.scale(dpr, dpr)
  ctx.clearRect(0, 0, rect.width, rect.height)

  const effectiveFontSize = Math.min(props.fontSize, rect.width * 0.14)
  ctx.font = `bold ${effectiveFontSize}px ${props.fontFamily}`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = '#ffffff'
  ctx.fillText(props.text, rect.width / 2, rect.height / 2)

  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  particles = []

  const step = Math.max(1, Math.floor(props.particleDensity * dpr))
  for (let y = 0; y < imgData.height; y += step) {
    for (let x = 0; x < imgData.width; x += step) {
      const idx = (y * imgData.width + x) * 4
      const alpha = imgData.data[idx + 3] || 0
      if (alpha > 128) {
        const posX = x / dpr
        const posY = y / dpr
        particles.push({
          x: posX + (Math.random() - 0.5) * 8,
          y: posY + (Math.random() - 0.5) * 8,
          originX: posX,
          originY: posY,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
        })
      }
    }
  }
}

function animate() {
  const canvas = canvasRef.value
  const container = containerRef.value
  if (!canvas || !container) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  ctx.save()
  ctx.scale(dpr, dpr)
  ctx.clearRect(0, 0, container.clientWidth, container.clientHeight)

  const radius = 110
  ctx.fillStyle = props.color

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]!
    const dx = mouseX - p.x
    const dy = mouseY - p.y
    const dist = Math.hypot(dx, dy)

    if (dist < radius && mouseX > -500) {
      const force = (radius - dist) / radius
      p.vx -= (dx / dist) * force * props.dispersionStrength
      p.vy -= (dy / dist) * force * props.dispersionStrength
    }

    // Spring back
    p.vx += (p.originX - p.x) * props.returnSpeed
    p.vy += (p.originY - p.y) * props.returnSpeed
    p.vx *= 0.84
    p.vy *= 0.84

    p.x += p.vx
    p.y += p.vy

    ctx.beginPath()
    ctx.arc(p.x, p.y, props.particleSize, 0, Math.PI * 2)
    ctx.fill()
  }

  ctx.restore()
  animationFrameId = requestAnimationFrame(animate)
}

watch(() => [props.text, props.fontSize, props.color], initParticles)

onMounted(() => {
  initParticles()
  if (containerRef.value) {
    resizeObserver = new ResizeObserver(initParticles)
    resizeObserver.observe(containerRef.value)
  }
  animationFrameId = requestAnimationFrame(animate)
})

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId)
  if (resizeObserver) resizeObserver.disconnect()
})
</script>
