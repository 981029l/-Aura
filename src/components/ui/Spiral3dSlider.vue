<template>
  <div
    ref="containerRef"
    class="relative w-full h-[520px] overflow-hidden rounded-2xl bg-[#09090b] cursor-grab active:cursor-grabbing select-none"
    :class="className"
    @pointerdown="handlePointerDown"
    @pointermove="handlePointerMove"
    @pointerup="handlePointerUp"
    @pointercancel="handlePointerUp"
    @wheel.prevent="handleWheel"
  >
    <!-- Background Ambient Glow -->
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15),transparent_65%)]"
    />

    <!-- 3D Helix Scene -->
    <div
      class="absolute inset-0 flex items-center justify-center pointer-events-none"
      style="perspective: 1200px;"
    >
      <div
        class="relative w-0 h-0 transition-transform duration-75 ease-out"
        :style="{
          transformStyle: 'preserve-3d',
          transform: `translateZ(${cameraZ}px) rotateX(${cameraPitch}deg) rotateY(${rotation}deg)`,
        }"
      >
        <div
          v-for="(item, index) in items"
          :key="index"
          class="absolute will-change-transform pointer-events-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10 group transition-all duration-300"
          :style="getCardStyle(index)"
        >
          <img
            :src="item.src"
            :alt="item.alt"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end"
          >
            <span class="text-xs font-semibold text-cyan-400 font-mono">0{{ index + 1 }}</span>
            <span class="text-sm font-bold text-white truncate">{{ item.alt }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Interactive Hint -->
    <div class="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-4 py-1.5 text-xs text-white/80 backdrop-blur-md">
      <span class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
      <span>Drag or scroll to rotate 3D Helix</span>
    </div>
  </div>
</template>

<script lang="ts">
export interface SpiralSlide {
  src: string
  alt: string
}

export const DEFAULT_SLIDES: SpiralSlide[] = [
  {
    src: 'https://images.unsplash.com/photo-1514906689926-25ba6dcb584b?w=600&q=80&auto=format&fit=crop',
    alt: 'Silver Veil Portrait',
  },
  {
    src: 'https://images.unsplash.com/photo-1527630941-4a229fd674ab?w=600&q=80&auto=format&fit=crop',
    alt: 'Quiet Frame Studio',
  },
  {
    src: 'https://images.unsplash.com/photo-1568557412756-7d219873dd11?w=600&q=80&auto=format&fit=crop',
    alt: 'Ember Transit Light',
  },
  {
    src: 'https://images.unsplash.com/photo-1581892805885-73bdd91beff0?w=600&q=80&auto=format&fit=crop',
    alt: 'Monochrome Gesture',
  },
  {
    src: 'https://images.unsplash.com/photo-1603786420263-ad59136a7409?w=600&q=80&auto=format&fit=crop',
    alt: 'Amber Horizon',
  },
  {
    src: 'https://images.unsplash.com/photo-1610846202780-b4d9837371ea?w=600&q=80&auto=format&fit=crop',
    alt: 'Moss Garden Walk',
  },
  {
    src: 'https://images.unsplash.com/photo-1612592046138-1514dc06a1cd?w=600&q=80&auto=format&fit=crop',
    alt: 'Cyan Motion Wave',
  },
  {
    src: 'https://images.unsplash.com/photo-1617281822114-9541b921a880?w=600&q=80&auto=format&fit=crop',
    alt: 'Phantom Stage Chorus',
  },
]
</script>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  items?: SpiralSlide[]
  radius?: number
  verticalGap?: number
  cardWidth?: number
  cardHeight?: number
  autoRotate?: boolean
  autoSpeed?: number
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  items: () => DEFAULT_SLIDES,
  radius: 360,
  verticalGap: 45,
  cardWidth: 170,
  cardHeight: 230,
  autoRotate: true,
  autoSpeed: 0.12,
  className: '',
})

const containerRef = ref<HTMLDivElement | null>(null)
const rotation = ref(0)
const scrollY = ref(0)
const cameraZ = ref(-120)
const cameraPitch = ref(-12)

let isDragging = false
let lastPointerX = 0
let lastPointerY = 0
let velocityX = 0
let velocityY = 0
let rafId = 0

function handlePointerDown(e: PointerEvent) {
  isDragging = true
  lastPointerX = e.clientX
  lastPointerY = e.clientY
  velocityX = 0
  velocityY = 0
}

function handlePointerMove(e: PointerEvent) {
  if (!isDragging) return
  const dx = e.clientX - lastPointerX
  const dy = e.clientY - lastPointerY
  rotation.value += dx * 0.4
  scrollY.value -= dy * 0.8
  velocityX = dx * 0.4
  velocityY = dy * 0.8
  lastPointerX = e.clientX
  lastPointerY = e.clientY
}

function handlePointerUp() {
  isDragging = false
}

function handleWheel(e: WheelEvent) {
  rotation.value += e.deltaX * 0.25
  scrollY.value += e.deltaY * 0.5
}

function getCardStyle(index: number) {
  const count = props.items.length
  // Step angle per card along helix
  const angleStep = 42
  const cardAngle = index * angleStep
  const rad = (cardAngle * Math.PI) / 180

  const x = Math.sin(rad) * props.radius
  const z = Math.cos(rad) * props.radius
  const y = (index - count / 2) * props.verticalGap + scrollY.value * 0.15

  return {
    width: `${props.cardWidth}px`,
    height: `${props.cardHeight}px`,
    left: `calc(50% - ${props.cardWidth / 2}px)`,
    top: `calc(50% - ${props.cardHeight / 2}px)`,
    transformStyle: 'preserve-3d' as const,
    transform: `translate3d(${x}px, ${y}px, ${z}px) rotateY(${cardAngle + 180}deg)`,
  }
}

function animate() {
  if (!isDragging) {
    if (props.autoRotate) {
      rotation.value += props.autoSpeed
    }
    rotation.value += velocityX
    scrollY.value -= velocityY
    velocityX *= 0.92
    velocityY *= 0.92
  }

  rafId = requestAnimationFrame(animate)
}

onMounted(() => {
  rafId = requestAnimationFrame(animate)
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
})
</script>
