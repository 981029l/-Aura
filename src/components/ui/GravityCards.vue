<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'

export interface GravityItem {
  id: string | number
  label: string
  icon?: string
  color?: string
}

interface GravityCardsProps {
  items?: GravityItem[]
  gravity?: number
  restitution?: number
  class?: string
}

const props = withDefaults(defineProps<GravityCardsProps>(), {
  gravity: 0.45,
  restitution: 0.55,
  items: () => [
    { id: '1', label: 'Vue 3.5+', icon: '⚡', color: '#10b981' },
    { id: '2', label: 'Tailwind CSS', icon: '🎨', color: '#06b6d4' },
    { id: '3', label: 'TypeScript', icon: '🔷', color: '#3b82f6' },
    { id: '4', label: 'Vite 6', icon: '🚀', color: '#8b5cf6' },
    { id: '5', label: 'Web Audio API', icon: '🔊', color: '#f59e0b' },
    { id: '6', label: 'Canvas 2D / 3D', icon: '🌌', color: '#ec4899' },
    { id: '7', label: 'Vue Router', icon: '📦', color: '#14b8a6' },
    { id: '8', label: 'Pinia', icon: '🍍', color: '#f43f5e' },
  ],
})

const containerRef = ref<HTMLDivElement | null>(null)
let animId: number | null = null

interface BodyState {
  id: string | number
  label: string
  icon?: string
  color?: string
  x: number
  y: number
  vx: number
  vy: number
  width: number
  height: number
  angle: number
  vAngle: number
}

const bodies = ref<BodyState[]>([])
let draggedBody: BodyState | null = null
let dragOffsetX = 0
let dragOffsetY = 0
let lastDragX = 0
let lastDragY = 0

function initPhysics() {
  const container = containerRef.value
  if (!container) return
  const w = container.clientWidth || 600

  bodies.value = props.items.map((item, idx) => {
    const cardWidth = 140
    const cardHeight = 44
    const startX = 30 + ((idx * 110) % (w - cardWidth - 40))
    const startY = -40 - idx * 55

    return {
      id: item.id,
      label: item.label,
      icon: item.icon,
      color: item.color,
      x: startX,
      y: startY,
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 2,
      width: cardWidth,
      height: cardHeight,
      angle: (Math.random() - 0.5) * 20,
      vAngle: (Math.random() - 0.5) * 1.5,
    }
  })
}

function updatePhysics() {
  const container = containerRef.value
  if (!container) return
  const boundW = container.clientWidth
  const boundH = container.clientHeight

  for (let i = 0; i < bodies.value.length; i++) {
    const b = bodies.value[i]

    if (draggedBody && draggedBody.id === b.id) {
      continue
    }

    // 1. 重力加速
    b.vy += props.gravity
    b.x += b.vx
    b.y += b.vy
    b.angle += b.vAngle

    // 旋转阻尼
    b.vAngle *= 0.96

    // 2. 地面碰撞反弹
    if (b.y + b.height >= boundH) {
      b.y = boundH - b.height
      b.vy = -b.vy * props.restitution
      b.vx *= 0.94 // 地面摩擦力
      b.vAngle = (b.vx * 0.4) // 摩擦引起角动量
      if (Math.abs(b.vy) < 0.6) b.vy = 0
    }

    // 3. 左右墙体反弹
    if (b.x <= 0) {
      b.x = 0
      b.vx = -b.vx * props.restitution
    } else if (b.x + b.width >= boundW) {
      b.x = boundW - b.width
      b.vx = -b.vx * props.restitution
    }

    // 4. 物体间简易 AABB 弹性分离排斥
    for (let j = i + 1; j < bodies.value.length; j++) {
      const other = bodies.value[j]
      const overlapX = (b.x + b.width / 2) - (other.x + other.width / 2)
      const overlapY = (b.y + b.height / 2) - (other.y + other.height / 2)
      const minDistX = (b.width + other.width) / 2
      const minDistY = (b.height + other.height) / 2

      if (Math.abs(overlapX) < minDistX && Math.abs(overlapY) < minDistY) {
        const dx = minDistX - Math.abs(overlapX)
        const dy = minDistY - Math.abs(overlapY)

        if (dx < dy) {
          const sign = overlapX > 0 ? 1 : -1
          b.x += (dx / 2) * sign
          other.x -= (dx / 2) * sign
          const tempVx = b.vx
          b.vx = other.vx * props.restitution
          other.vx = tempVx * props.restitution
        } else {
          const sign = overlapY > 0 ? 1 : -1
          b.y += (dy / 2) * sign
          other.y -= (dy / 2) * sign
          const tempVy = b.vy
          b.vy = other.vy * props.restitution
          other.vy = tempVy * props.restitution
        }
      }
    }
  }

  animId = requestAnimationFrame(updatePhysics)
}

function handleMouseDown(e: MouseEvent, body: BodyState) {
  draggedBody = body
  const container = containerRef.value
  if (!container) return
  const rect = container.getBoundingClientRect()
  const mouseX = e.clientX - rect.left
  const mouseY = e.clientY - rect.top

  dragOffsetX = mouseX - body.x
  dragOffsetY = mouseY - body.y
  lastDragX = mouseX
  lastDragY = mouseY
}

function handleMouseMove(e: MouseEvent) {
  if (!draggedBody || !containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  const mouseX = e.clientX - rect.left
  const mouseY = e.clientY - rect.top

  draggedBody.vx = (mouseX - lastDragX) * 0.8
  draggedBody.vy = (mouseY - lastDragY) * 0.8
  draggedBody.x = mouseX - dragOffsetX
  draggedBody.y = mouseY - dragOffsetY

  lastDragX = mouseX
  lastDragY = mouseY
}

function handleMouseUp() {
  draggedBody = null
}

function resetDrop() {
  initPhysics()
}

onMounted(() => {
  initPhysics()
  animId = requestAnimationFrame(updatePhysics)
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseup', handleMouseUp)
})

onUnmounted(() => {
  if (animId) cancelAnimationFrame(animId)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseup', handleMouseUp)
})
</script>

<template>
  <div
    ref="containerRef"
    :class="
      cn(
        'relative h-80 w-full overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-4 backdrop-blur-sm select-none dark:border-zinc-800/80 dark:bg-zinc-950/70',
        props.class
      )
    "
  >
    <!-- 重置控制药丸 -->
    <button
      type="button"
      @click="resetDrop"
      class="absolute top-3 right-3 z-30 inline-flex items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-white/80 px-2.5 py-1 text-[11px] font-medium text-zinc-600 shadow-sm backdrop-blur-md hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-all cursor-pointer active:scale-95"
    >
      <span>↻</span>
      <span>重置</span>
    </button>

    <!-- 提示引导文案 -->
    <div class="pointer-events-none absolute inset-0 flex items-center justify-center">
      <span class="text-xs font-mono text-zinc-400/60 dark:text-zinc-600/60">
        用鼠标抓起卡片扔出去，卡片会下落并相互碰撞
      </span>
    </div>

    <!-- 掉落刚体卡片元素 -->
    <div
      v-for="b in bodies"
      :key="b.id"
      :style="{
        transform: `translate3d(${b.x}px, ${b.y}px, 0) rotate(${b.angle}deg)`,
        width: `${b.width}px`,
        height: `${b.height}px`,
      }"
      @mousedown.stop="handleMouseDown($event, b)"
      class="absolute top-0 left-0 z-20 flex items-center gap-2 rounded-xl border border-zinc-200/90 bg-white/95 px-3 py-2 shadow-md backdrop-blur-xl transition-shadow cursor-grab active:cursor-grabbing active:shadow-xl dark:border-zinc-800/90 dark:bg-zinc-900/95"
    >
      <span v-if="b.icon" class="text-base shrink-0">{{ b.icon }}</span>
      <span class="truncate text-xs font-semibold text-zinc-800 dark:text-zinc-200">
        {{ b.label }}
      </span>
      <div
        v-if="b.color"
        class="ml-auto h-2 w-2 rounded-full shrink-0"
        :style="{ backgroundColor: b.color }"
      />
    </div>
  </div>
</template>
