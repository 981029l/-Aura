<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import { Sparkles, Dna, Triangle, Circle, Grid } from 'lucide-vue-next'

export interface ParticleMorphProps {
  particleCount?: number
  class?: string
}

const props = withDefaults(defineProps<ParticleMorphProps>(), {
  particleCount: 200,
})

type ShapeType = 'circle' | 'triangle' | 'helix' | 'grid'

const currentShape = ref<ShapeType>('circle')
const canvasRef = ref<HTMLCanvasElement | null>(null)

interface Particle {
  x: number
  y: number
  originX: number
  originY: number
  targetX: number
  targetY: number
  vx: number
  vy: number
  radius: number
  color: string
}

let particles: Particle[] = []
let animFrame: number | null = null
let mouseX = -1000
let mouseY = -1000

function generateShapeTargets(shape: ShapeType, width: number, height: number) {
  const cx = width / 2
  const cy = height / 2
  const targets: { x: number; y: number }[] = []

  if (shape === 'circle') {
    const r = Math.min(width, height) * 0.32
    for (let i = 0; i < props.particleCount; i++) {
      const angle = (i / props.particleCount) * Math.PI * 2
      targets.push({
        x: cx + Math.cos(angle) * r,
        y: cy + Math.sin(angle) * r,
      })
    }
  } else if (shape === 'triangle') {
    const size = Math.min(width, height) * 0.65
    const p1 = { x: cx, y: cy - size / 1.7 }
    const p2 = { x: cx - size / 2, y: cy + size / 3 }
    const p3 = { x: cx + size / 2, y: cy + size / 3 }
    const perSide = Math.floor(props.particleCount / 3)

    for (let i = 0; i < perSide; i++) {
      const t = i / perSide
      targets.push({ x: p1.x + (p2.x - p1.x) * t, y: p1.y + (p2.y - p1.y) * t })
    }
    for (let i = 0; i < perSide; i++) {
      const t = i / perSide
      targets.push({ x: p2.x + (p3.x - p2.x) * t, y: p2.y + (p3.y - p2.y) * t })
    }
    while (targets.length < props.particleCount) {
      const t = (targets.length - 2 * perSide) / perSide
      targets.push({ x: p3.x + (p1.x - p3.x) * t, y: p3.y + (p1.y - p3.y) * t })
    }
  } else if (shape === 'helix') {
    for (let i = 0; i < props.particleCount; i++) {
      const t = (i / props.particleCount) * 4 * Math.PI
      const x = cx + Math.sin(t) * 90
      const y = cy + (i / props.particleCount - 0.5) * height * 0.7
      targets.push({ x, y })
    }
  } else if (shape === 'grid') {
    const cols = Math.floor(Math.sqrt(props.particleCount))
    const rows = Math.ceil(props.particleCount / cols)
    const gap = 16
    const startX = cx - ((cols - 1) * gap) / 2
    const startY = cy - ((rows - 1) * gap) / 2

    for (let i = 0; i < props.particleCount; i++) {
      const c = i % cols
      const r = Math.floor(i / cols)
      targets.push({ x: startX + c * gap, y: startY + r * gap })
    }
  }

  return targets
}

function setShape(shape: ShapeType) {
  currentShape.value = shape
  const canvas = canvasRef.value
  if (!canvas) return
  const rect = canvas.getBoundingClientRect()
  const targets = generateShapeTargets(shape, rect.width, rect.height)
  for (let i = 0; i < particles.length; i++) {
    if (targets[i]) {
      particles[i].targetX = targets[i].x
      particles[i].targetY = targets[i].y
    }
  }
}

function initParticles(width: number, height: number) {
  particles = []
  const targets = generateShapeTargets(currentShape.value, width, height)
  for (let i = 0; i < props.particleCount; i++) {
    const t = targets[i] || { x: width / 2, y: height / 2 }
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      originX: t.x,
      originY: t.y,
      targetX: t.x,
      targetY: t.y,
      vx: 0,
      vy: 0,
      radius: 1.5 + Math.random() * 1.5,
      color: i % 2 === 0 ? '#38bdf8' : '#818cf8',
    })
  }
}

function render() {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const rect = canvas.getBoundingClientRect()
  ctx.clearRect(0, 0, rect.width, rect.height)

  for (let p of particles) {
    // 缓动飞向目标点
    const dx = p.targetX - p.x
    const dy = p.targetY - p.y
    p.vx = (p.vx + dx * 0.04) * 0.85
    p.vy = (p.vy + dy * 0.04) * 0.85

    // 鼠标排斥场
    const distMouseX = p.x - mouseX
    const distMouseY = p.y - mouseY
    const distMouse = Math.sqrt(distMouseX * distMouseX + distMouseY * distMouseY)
    if (distMouse < 60) {
      const force = (60 - distMouse) / 60
      p.vx += (distMouseX / distMouse) * force * 5
      p.vy += (distMouseY / distMouse) * force * 5
    }

    p.x += p.vx
    p.y += p.vy

    // 绘制微粒
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
    ctx.fillStyle = p.color
    ctx.shadowColor = p.color
    ctx.shadowBlur = 6
    ctx.fill()
    ctx.shadowBlur = 0
  }

  animFrame = requestAnimationFrame(render)
}

function handleMouseMove(e: MouseEvent) {
  const canvas = canvasRef.value
  if (!canvas) return
  const rect = canvas.getBoundingClientRect()
  mouseX = e.clientX - rect.left
  mouseY = e.clientY - rect.top
}

function handleMouseLeave() {
  mouseX = -1000
  mouseY = -1000
}

function handleResize() {
  const canvas = canvasRef.value
  if (!canvas) return
  const rect = canvas.getBoundingClientRect()
  canvas.width = rect.width * window.devicePixelRatio
  canvas.height = rect.height * window.devicePixelRatio
  const ctx = canvas.getContext('2d')
  if (ctx) {
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
  }
  initParticles(rect.width, rect.height)
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
  animFrame = requestAnimationFrame(render)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (animFrame !== null) cancelAnimationFrame(animFrame)
})
</script>

<template>
  <div :class="cn('w-full max-w-2xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-5', props.class)">
    <!-- 头部看板 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
        <Sparkles class="h-4 w-4 text-indigo-500" />
        <span>粒子形状变换</span>
      </div>

      <!-- 形态切换器 -->
      <div class="flex items-center gap-1 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900">
        <button
          type="button"
          @click="setShape('circle')"
          :class="[
            'p-1.5 rounded-lg transition-colors cursor-pointer',
            currentShape === 'circle'
              ? 'bg-white shadow-sm text-blue-600 dark:bg-zinc-800 dark:text-blue-400'
              : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400',
          ]"
          title="圆环"
        >
          <Circle class="h-4 w-4" />
        </button>

        <button
          type="button"
          @click="setShape('triangle')"
          :class="[
            'p-1.5 rounded-lg transition-colors cursor-pointer',
            currentShape === 'triangle'
              ? 'bg-white shadow-sm text-blue-600 dark:bg-zinc-800 dark:text-blue-400'
              : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400',
          ]"
          title="金字塔"
        >
          <Triangle class="h-4 w-4" />
        </button>

        <button
          type="button"
          @click="setShape('helix')"
          :class="[
            'p-1.5 rounded-lg transition-colors cursor-pointer',
            currentShape === 'helix'
              ? 'bg-white shadow-sm text-blue-600 dark:bg-zinc-800 dark:text-blue-400'
              : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400',
          ]"
          title="双螺旋"
        >
          <Dna class="h-4 w-4" />
        </button>

        <button
          type="button"
          @click="setShape('grid')"
          :class="[
            'p-1.5 rounded-lg transition-colors cursor-pointer',
            currentShape === 'grid'
              ? 'bg-white shadow-sm text-blue-600 dark:bg-zinc-800 dark:text-blue-400'
              : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400',
          ]"
          title="网格"
        >
          <Grid class="h-4 w-4" />
        </button>
      </div>
    </div>

    <!-- Canvas 舞台 -->
    <div
      class="relative h-64 w-full overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-950 dark:border-zinc-800/80 cursor-crosshair"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    >
      <canvas
        ref="canvasRef"
        class="h-full w-full block"
      />
    </div>

    <!-- 底部状态指示 -->
    <div class="flex items-center justify-between text-[11px] font-mono text-zinc-400 pt-1">
      <span>当前形状：<strong class="text-blue-500 uppercase">{{ currentShape }}</strong></span>
      <span>移动鼠标，附近的粒子会被推开</span>
    </div>
  </div>
</template>
