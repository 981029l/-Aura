<template>
  <div
    ref="containerRef"
    class="relative w-full max-w-4xl mx-auto py-8 px-4 overflow-hidden rounded-2xl bg-neutral-950 select-none flex flex-col justify-between border border-white/10 shadow-2xl cursor-grab active:cursor-grabbing"
    :class="className"
    @wheel="handleWheel"
    @pointerdown="handlePointerDown"
    @pointermove="handlePointerMove"
    @pointerup="handlePointerUp"
    @pointercancel="handlePointerUp"
  >
    <!-- Card Split Stage -->
    <div
      class="relative w-full h-[460px] flex items-center justify-center"
      style="perspective: 1200px;"
    >
      <div
        class="flex h-[360px] w-full max-w-3xl relative"
        :style="{
          transform: `scale(${cardScale}) translate3d(0, 0, 0)`,
          transformStyle: 'preserve-3d',
        }"
      >
        <div
          v-for="(card, i) in resolvedCards"
          :key="i"
          class="relative h-full flex-1 transition-all duration-300 ease-out will-change-transform"
          :style="getCardWrapperStyle(i)"
        >
          <!-- Front Face (Part of sliced panoramic image) -->
          <div
            class="absolute inset-0 overflow-hidden bg-neutral-900 border border-white/10"
            :style="{
              borderRadius: getBorderRadius(i),
              backfaceVisibility: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
            }"
          >
            <div
              class="absolute inset-0 bg-cover bg-center"
              :style="{
                backgroundImage: `url('${imageSrc}')`,
                backgroundSize: '300% 100%',
                backgroundPosition: `${i * 50}% 50%`,
              }"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
              <span class="text-xs font-mono font-semibold text-neutral-300">Phase 0{{ i + 1 }}</span>
            </div>
          </div>

          <!-- Back Face (Revealed Card on 180deg flip) -->
          <div
            class="absolute inset-0 overflow-hidden p-6 flex flex-col justify-between border border-white/10"
            :style="{
              backgroundColor: card.bgColor,
              color: card.textColor,
              borderRadius: '16px',
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              boxShadow: '0 25px 50px rgba(0,0,0,0.7)',
            }"
          >
            <div class="flex items-center justify-between">
              <span class="text-xs font-mono font-semibold tracking-wider uppercase opacity-80">
                Feature 0{{ i + 1 }}
              </span>
              <span class="w-2.5 h-2.5 rounded-full bg-current opacity-60" />
            </div>

            <div>
              <h4 class="text-lg md:text-xl font-bold tracking-tight mb-2">
                {{ card.title }}
              </h4>
              <p class="text-xs md:text-sm leading-relaxed opacity-85">
                {{ card.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Dynamic Scroll Status Indicator (No fake slider bar!) -->
    <div class="pointer-events-none absolute bottom-4 right-4 z-30 flex items-center gap-2.5 rounded-full border border-white/10 bg-black/70 px-4 py-1.5 text-xs text-white/90 backdrop-blur-md shadow-lg">
      <span
        class="inline-block w-2 h-2 rounded-full transition-colors duration-300"
        :class="splitProgress > 0.8 ? 'bg-emerald-400' : splitProgress > 0.3 ? 'bg-cyan-400' : 'bg-indigo-400 animate-pulse'"
      />
      <span class="font-medium tracking-wide font-mono text-[11px]">{{ statusLabel }}</span>
      <span class="text-[10px] text-white/50 font-mono">({{ Math.round(splitProgress * 100) }}%)</span>
    </div>
  </div>
</template>

<script lang="ts">
export interface SplitCardItem {
  title: string
  description: string
  bgColor: string
  textColor: string
}

export const DEFAULT_CARDS: SplitCardItem[] = [
  {
    title: '完整画面',
    description: '滚动开始前显示一整张图片。',
    bgColor: '#1e1b4b',
    textColor: '#c7d2fe',
  },
  {
    title: '向两侧分开',
    description: '随着滚动，图片从中间向两侧分开。',
    bgColor: '#164e63',
    textColor: '#cffafe',
  },
  {
    title: '露出数据卡片',
    description: '图片完全分开后，露出下面的数据卡片。',
    bgColor: '#831843',
    textColor: '#fce7f3',
  },
]
</script>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface Props {
  imageSrc?: string
  cards?: SplitCardItem[]
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  imageSrc: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=85&auto=format&fit=crop',
  cards: () => DEFAULT_CARDS,
  className: '',
})

const containerRef = ref<HTMLDivElement | null>(null)
const splitProgress = ref(0.2) // Initial gentle peek

const resolvedCards = computed(() => {
  return props.cards.length >= 3 ? props.cards.slice(0, 3) : DEFAULT_CARDS
})

const statusLabel = computed(() => {
  if (splitProgress.value < 0.25) return '完整图片'
  if (splitProgress.value < 0.6) return '正在分开'
  return '已露出数据卡片'
})

const cardScale = computed(() => {
  return 1 - splitProgress.value * 0.08
})

function getBorderRadius(i: number) {
  const p = splitProgress.value
  if (p < 0.15) {
    if (i === 0) return '16px 0 0 16px'
    if (i === 1) return '0 0 0 0'
    return '0 16px 16px 0'
  }
  return '16px'
}

function getCardWrapperStyle(i: number) {
  const p = splitProgress.value

  // Separation: 0 to 0.5
  let x = 0
  if (i === 0) {
    x = p * -75
  } else if (i === 2) {
    x = p * 75
  }

  // 180deg flip: 0.3 to 0.85
  const flipFactor = Math.max(0, Math.min(1, (p - 0.3) / 0.55))
  const rotateY = flipFactor * 180

  let rotateZ = 0
  if (i === 0) rotateZ = flipFactor * 5
  if (i === 2) rotateZ = flipFactor * -5

  return {
    transform: `translate3d(${x}px, 0, 0) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
    transformStyle: 'preserve-3d' as const,
    zIndex: i === 1 ? 10 : 20,
  }
}

// 1. Real Page Scroll Listener
let isInteractiveOverriding = false
let overrideTimer: any = null

function updateScrollProgress() {
  if (isInteractiveOverriding || !containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  const vh = window.innerHeight || 800

  // Animation triggers as the card scrolls through the screen
  const start = vh * 0.85
  const end = vh * 0.25
  const p = (start - rect.top) / (start - end)
  splitProgress.value = Math.max(0, Math.min(1, p))
}

// 2. Mouse Wheel Scrubbing inside container
function handleWheel(e: WheelEvent) {
  isInteractiveOverriding = true
  clearTimeout(overrideTimer)
  
  // Smooth scrub
  const delta = e.deltaY * 0.0015
  splitProgress.value = Math.max(0, Math.min(1, splitProgress.value + delta))

  overrideTimer = setTimeout(() => {
    isInteractiveOverriding = false
  }, 1500)
}

// 3. Pointer Drag Scrubbing
let isDragging = false
let dragStartY = 0
let dragStartProgress = 0

function handlePointerDown(e: PointerEvent) {
  isDragging = true
  isInteractiveOverriding = true
  clearTimeout(overrideTimer)
  dragStartY = e.clientY
  dragStartProgress = splitProgress.value
}

function handlePointerMove(e: PointerEvent) {
  if (!isDragging) return
  const dy = dragStartY - e.clientY
  const delta = dy * 0.003
  splitProgress.value = Math.max(0, Math.min(1, dragStartProgress + delta))
}

function handlePointerUp() {
  if (!isDragging) return
  isDragging = false
  overrideTimer = setTimeout(() => {
    isInteractiveOverriding = false
  }, 1500)
}

onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress, { passive: true })
  updateScrollProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
  clearTimeout(overrideTimer)
})
</script>
