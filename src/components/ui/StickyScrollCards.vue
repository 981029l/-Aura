<template>
  <div
    ref="containerRef"
    class="relative w-full max-w-2xl mx-auto py-6 px-4 select-none cursor-grab active:cursor-grabbing"
    :class="className"
    @wheel="handleWheel"
    @pointerdown="handlePointerDown"
    @pointermove="handlePointerMove"
    @pointerup="handlePointerUp"
    @pointercancel="handlePointerUp"
  >
    <!-- Top Header & Navigation -->
    <div class="flex items-center justify-between mb-4 px-2">
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span class="text-xs uppercase tracking-widest text-neutral-400 font-mono font-semibold">{{ hint }}</span>
      </div>

      <!-- Pagination & Action controls -->
      <div class="flex items-center gap-3">
        <span class="text-xs font-mono text-cyan-400 font-bold">
          0{{ activeIndex + 1 }} <span class="text-neutral-500 font-normal">/ 0{{ displayCards.length }}</span>
        </span>

        <div class="flex gap-1.5">
          <button
            class="p-1.5 rounded-full border border-neutral-800 bg-neutral-900/90 text-neutral-300 hover:text-white hover:bg-neutral-800 disabled:opacity-30 transition-all cursor-pointer"
            :disabled="activeIndex === 0"
            @click.stop="prevCard"
          >
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button
            class="p-1.5 rounded-full border border-neutral-800 bg-neutral-900/90 text-neutral-300 hover:text-white hover:bg-neutral-800 disabled:opacity-30 transition-all cursor-pointer"
            :disabled="activeIndex === displayCards.length - 1"
            @click.stop="nextCard"
          >
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Stack Stage -->
    <div
      class="relative w-full h-[430px] flex items-center justify-center overflow-hidden rounded-2xl bg-black/40 border border-white/5 p-4"
      style="perspective: 1000px;"
    >
      <div
        v-for="(card, i) in displayCards"
        :key="i"
        class="absolute w-[290px] sm:w-[350px] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl transition-all duration-500 ease-out will-change-transform cursor-pointer"
        :style="getCardStyle(i)"
        @click.stop="handleCardClick(i)"
      >
        <!-- Card Media Canvas / Image -->
        <div class="aspect-[4/3] w-full overflow-hidden bg-black/60 relative">
          <img :src="card.src" :alt="card.title" class="w-full h-full object-cover select-none pointer-events-none" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80" />
          
          <div class="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/80">
            0{{ i + 1 }}
          </div>
        </div>

        <!-- Card Footer Info -->
        <div class="p-4 flex items-center justify-between bg-neutral-900 border-t border-white/5">
          <div>
            <h4 class="text-sm font-semibold text-white tracking-tight">{{ card.title }}</h4>
            <span class="text-[11px] text-neutral-400 font-mono">点击或向上滑动切换下一张</span>
          </div>

          <div class="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-white/60 group-hover:text-white border border-white/10">
            <span class="text-xs">↗</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Indicator & Gesture Guide -->
    <div class="mt-4 flex items-center justify-between text-xs text-neutral-500 font-mono px-2">
      <!-- Pagination Dots -->
      <div class="flex items-center gap-1.5">
        <button
          v-for="(_, i) in displayCards"
          :key="i"
          class="h-1.5 rounded-full transition-all duration-300 cursor-pointer"
          :class="activeIndex === i ? 'w-6 bg-cyan-400' : 'w-1.5 bg-neutral-700 hover:bg-neutral-500'"
          @click.stop="activeIndex = i"
        />
      </div>

      <div class="flex items-center gap-1.5 text-[11px] text-neutral-400">
        <svg class="w-3.5 h-3.5 animate-bounce text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
        <span>支持页面滚动、鼠标滚轮和拖动</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export interface StickyCard {
  title: string
  src: string
}

export const DEFAULT_CARDS: StickyCard[] = [
  { title: '视差效果', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80' },
  { title: '流体渐变', src: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80' },
  { title: '交互反馈', src: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80' },
  { title: '全息点阵', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80' },
  { title: '网络连线', src: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80' },
]

const TILT_PATTERN = [-2.5, 2.0, -1.5, 2.8, -2.0]
</script>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface Props {
  cards?: StickyCard[]
  hint?: string
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  cards: () => DEFAULT_CARDS,
  hint: 'STACKED POLAROID ARCHIVE',
  className: '',
})

const containerRef = ref<HTMLDivElement | null>(null)
const activeIndex = ref(0)

const displayCards = computed(() => {
  return props.cards && props.cards.length > 0 ? props.cards : DEFAULT_CARDS
})

function prevCard() {
  if (activeIndex.value > 0) activeIndex.value--
}

function nextCard() {
  if (activeIndex.value < displayCards.value.length - 1) activeIndex.value++
}

function handleCardClick(i: number) {
  if (i === activeIndex.value) {
    // Click top card: Advance to next card (loops back if at end)
    activeIndex.value = (activeIndex.value + 1) % displayCards.value.length
  } else {
    // Click background card: Jump directly to it
    activeIndex.value = i
  }
}

// 1. Mouse Wheel Scrubbing inside container
let isInteractiveOverriding = false
let overrideTimer: any = null
let wheelAccumulator = 0

function handleWheel(e: WheelEvent) {
  isInteractiveOverriding = true
  clearTimeout(overrideTimer)

  wheelAccumulator += e.deltaY

  if (Math.abs(wheelAccumulator) > 40) {
    if (wheelAccumulator > 0 && activeIndex.value < displayCards.value.length - 1) {
      activeIndex.value++
    } else if (wheelAccumulator < 0 && activeIndex.value > 0) {
      activeIndex.value--
    }
    wheelAccumulator = 0
  }

  overrideTimer = setTimeout(() => {
    isInteractiveOverriding = false
  }, 1800)
}

// 2. Gesture Swipe / Drag Scrubbing
let isDragging = false
let dragStartY = 0

function handlePointerDown(e: PointerEvent) {
  isDragging = true
  isInteractiveOverriding = true
  clearTimeout(overrideTimer)
  dragStartY = e.clientY
}

function handlePointerMove(e: PointerEvent) {
  if (!isDragging) return
  const dy = dragStartY - e.clientY
  if (Math.abs(dy) > 50) {
    if (dy > 0 && activeIndex.value < displayCards.value.length - 1) {
      activeIndex.value++
      dragStartY = e.clientY
    } else if (dy < 0 && activeIndex.value > 0) {
      activeIndex.value--
      dragStartY = e.clientY
    }
  }
}

function handlePointerUp() {
  isDragging = false
  overrideTimer = setTimeout(() => {
    isInteractiveOverriding = false
  }, 1800)
}

// 3. Real Page Scroll Driven Linkage
function handlePageScroll() {
  if (isInteractiveOverriding || !containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  const vh = window.innerHeight || 800

  const start = vh * 0.8
  const end = vh * 0.2
  const p = Math.max(0, Math.min(1, (start - rect.top) / (start - end)))
  const total = displayCards.value.length
  const target = Math.min(total - 1, Math.floor(p * total))
  activeIndex.value = target
}

function getCardStyle(i: number) {
  const diff = i - activeIndex.value
  const tilt = TILT_PATTERN[i % TILT_PATTERN.length]!

  if (diff < 0) {
    // Already past (flies up and disappears)
    return {
      transform: `translate3d(0, -125%, 0) rotate(${tilt * 2.5}deg) scale(0.9)`,
      opacity: '0',
      pointerEvents: 'none' as const,
      zIndex: i,
    }
  } else if (diff === 0) {
    // Current active card on top
    return {
      transform: `translate3d(0, 0, 0) rotate(${tilt}deg) scale(1)`,
      opacity: '1',
      zIndex: displayCards.value.length + 10,
    }
  } else {
    // Cards resting below in the stack
    const offset = diff * 12
    const scale = Math.max(0.85, 1 - diff * 0.04)
    return {
      transform: `translate3d(0, ${offset}px, 0) rotate(${tilt}deg) scale(${scale})`,
      opacity: diff > 3 ? '0' : '1',
      zIndex: displayCards.value.length - diff,
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handlePageScroll, { passive: true })
  handlePageScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handlePageScroll)
  clearTimeout(overrideTimer)
})
</script>
