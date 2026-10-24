<template>
  <div
    ref="containerRef"
    class="relative w-full h-full min-h-[400px] overflow-hidden rounded-2xl bg-neutral-950 select-none cursor-pointer"
    :class="className"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <!-- Spawning trailing images -->
    <div
      v-for="trail in activeTrails"
      :key="trail.id"
      class="absolute pointer-events-none rounded-2xl overflow-hidden shadow-2xl border border-white/20 will-change-transform transition-opacity duration-700 ease-out"
      :style="{
        width: `${imageWidth}px`,
        height: `${imageHeight}px`,
        left: `${trail.x - imageWidth / 2}px`,
        top: `${trail.y - imageHeight / 2}px`,
        transform: `rotate(${trail.rotation}deg) scale(${trail.scale})`,
        opacity: trail.opacity,
        zIndex: trail.zIndex,
      }"
    >
      <img :src="trail.src" alt="Trail image" class="w-full h-full object-cover" />
    </div>

    <!-- Center Prompt -->
    <div class="relative z-10 w-full h-full flex flex-col items-center justify-center p-8 pointer-events-none text-center">
      <span class="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold mb-2">Kinetic Cursor Trail</span>
      <h3 class="text-2xl sm:text-4xl font-extrabold text-white">Move Your Cursor Across</h3>
      <p class="text-xs sm:text-sm text-neutral-400 mt-2">Images materialize along your motion path and fade smoothly</p>
    </div>
  </div>
</template>

<script lang="ts">


export const DEFAULT_IMAGES = [
  'https://images.unsplash.com/photo-1514906689926-25ba6dcb584b?w=400&q=80',
  'https://images.unsplash.com/photo-1527630941-4a229fd674ab?w=400&q=80',
  'https://images.unsplash.com/photo-1568557412756-7d219873dd11?w=400&q=80',
  'https://images.unsplash.com/photo-1581892805885-73bdd91beff0?w=400&q=80',
  'https://images.unsplash.com/photo-1603786420263-ad59136a7409?w=400&q=80',
  'https://images.unsplash.com/photo-1610846202780-b4d9837371ea?w=400&q=80',
]

interface TrailItem {
  id: number
  x: number
  y: number
  src: string
  rotation: number
  scale: number
  opacity: number
  zIndex: number
}
</script>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  images?: string[]
  imageWidth?: number
  imageHeight?: number
  threshold?: number
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  images: () => DEFAULT_IMAGES,
  imageWidth: 170,
  imageHeight: 220,
  threshold: 70,
  className: '',
})

const containerRef = ref<HTMLDivElement | null>(null)
const activeTrails = ref<TrailItem[]>([])

let lastX = -9999
let lastY = -9999
let idCounter = 0
let imgIdx = 0
let zIndexCounter = 1

function handleMouseMove(e: MouseEvent) {
  if (!containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  const dist = Math.hypot(x - lastX, y - lastY)
  if (dist > props.threshold) {
    lastX = x
    lastY = y

    const src = props.images[imgIdx % props.images.length]!
    imgIdx++
    zIndexCounter++

    const item: TrailItem = {
      id: ++idCounter,
      x,
      y,
      src,
      rotation: (Math.random() - 0.5) * 24,
      scale: 1,
      opacity: 1,
      zIndex: zIndexCounter,
    }

    activeTrails.value.push(item)

    // Fade out and cleanup
    setTimeout(() => {
      item.opacity = 0
      item.scale = 0.8
    }, 600)

    setTimeout(() => {
      activeTrails.value = activeTrails.value.filter((t) => t.id !== item.id)
    }, 1300)
  }
}

function handleMouseLeave() {
  lastX = -9999
  lastY = -9999
}
</script>
