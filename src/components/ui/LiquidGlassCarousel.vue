<template>
  <div
    ref="containerRef"
    class="relative w-full h-[520px] overflow-hidden rounded-2xl bg-[#08080a] select-none flex flex-col justify-between p-6 group focus:outline-none"
    :class="className"
    tabindex="0"
    @pointerenter="isHovered = true"
    @pointerleave="handlePointerLeave"
    @pointerdown="handlePointerDown"
    @pointermove="handlePointerMove"
    @pointerup="handlePointerUp"
    @pointercancel="handlePointerUp"
    @wheel.prevent="handleWheel"
    @keydown.left="prevSlide"
    @keydown.right="nextSlide"
    @keydown.space.prevent="toggleAutoPlay"
  >
    <!-- Background Radial Glow -->
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.08),transparent_70%)]"
    />

    <!-- Top Header Navigation -->
    <div class="relative z-20 flex items-center justify-between">
      <div class="flex items-center gap-2.5">
        <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#38bdf8]" />
        <div>
          <span class="text-xs uppercase tracking-widest text-neutral-300 font-mono font-semibold">
            Liquid Glass Carousel
          </span>
          <span class="hidden sm:inline-block ml-2 text-[10px] font-mono text-cyan-400/80 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
            {{ isAutoPlaying ? '自动播放中' : '已暂停' }}
          </span>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <!-- Auto Play / Pause Toggle -->
        <button
          type="button"
          class="p-2.5 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/15 transition-all cursor-pointer backdrop-blur-md"
          @click.stop="toggleAutoPlay"
          :title="isAutoPlaying ? '暂停自动播放 (空格)' : '自动播放 (空格)'"
        >
          <component :is="isAutoPlaying ? Pause : Play" class="w-4 h-4 text-cyan-400" />
        </button>

        <button
          type="button"
          class="p-2.5 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/15 transition-all cursor-pointer backdrop-blur-md"
          @click.stop="prevSlide"
          title="上一张 (←)"
        >
          <ChevronLeft class="w-4 h-4" />
        </button>

        <button
          type="button"
          class="p-2.5 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/15 transition-all cursor-pointer backdrop-blur-md"
          @click.stop="nextSlide"
          title="下一张 (→)"
        >
          <ChevronRight class="w-4 h-4" />
        </button>
      </div>
    </div>

    <!-- Center Stage with Liquid Glass Overlay -->
    <div class="relative w-full flex-1 flex items-center justify-center overflow-hidden">
      <!-- Carousel Track (Mathematically centered) -->
      <div
        class="flex items-center will-change-transform"
        :class="isDragging ? 'transition-none cursor-grabbing' : 'transition-transform duration-500 ease-out cursor-grab'"
        :style="{
          gap: `${cardGap}px`,
          transform: `translateX(calc(50% - ${activeIndex * stepWidth + cardWidth / 2 - dragOffset}px))`,
        }"
      >
        <div
          v-for="(item, i) in items"
          :key="i"
          class="relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 border border-white/10 flex-shrink-0"
          :style="{
            width: `${cardWidth}px`,
            height: `${cardHeight}px`,
          }"
          :class="[
            i === activeIndex
              ? 'scale-105 shadow-[0_0_50px_rgba(56,189,248,0.35)] border-cyan-400/60 z-10'
              : 'scale-95 opacity-50 hover:opacity-80 z-0',
          ]"
          @click="onCardClick(i)"
        >
          <img
            :src="item.src"
            :alt="item.title"
            class="w-full h-full object-cover transition-transform duration-700 ease-out"
            :class="i === activeIndex ? 'scale-105' : ''"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent flex flex-col justify-end p-5">
            <span class="text-xs font-mono font-bold text-cyan-400 drop-shadow-sm">0{{ i + 1 }}</span>
            <h4 class="text-lg font-bold text-white tracking-tight drop-shadow-md">{{ item.title }}</h4>
            <p v-if="item.desc" class="text-[10px] text-zinc-400 font-mono mt-0.5 truncate">{{ item.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Liquid Glass Lens Ring in Absolute Center (Pixel-perfect concentric alignment) -->
      <div
        class="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl border-2 border-cyan-400/40 backdrop-blur-[3px] shadow-[inset_0_0_25px_rgba(56,189,248,0.25),0_0_45px_rgba(0,157,255,0.32)] z-20"
        :style="{
          width: `${cardWidth * 1.05 + 16}px`,
          height: `${cardHeight * 1.05 + 16}px`,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(56,189,248,0.05) 100%)',
        }"
      >
        <!-- Glare Highlights (Top & Bottom neon sheen) -->
        <div class="absolute -top-[1.5px] left-[20%] right-[20%] h-[3px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_12px_#38bdf8]" />
        <div class="absolute -bottom-[1.5px] left-[20%] right-[20%] h-[3px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_12px_#38bdf8]" />

        <!-- Center Lens Reflection Diagonal Sheen -->
        <div
          class="absolute inset-0 rounded-3xl pointer-events-none opacity-40 bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.12)_45%,transparent_60%)]"
        />
      </div>
    </div>

    <!-- Bottom Indicator & Auto-Play Progress Track -->
    <div class="relative z-20 flex items-center justify-center gap-2">
      <button
        v-for="(_, i) in items"
        :key="i"
        class="relative h-1.5 rounded-full overflow-hidden transition-all duration-300 cursor-pointer"
        :class="i === activeIndex ? 'w-10 bg-cyan-950' : 'w-2 bg-white/20 hover:bg-white/40'"
        @click="selectSlide(i)"
      >
        <!-- Animated progress bar for active slide when auto-playing -->
        <div
          v-if="i === activeIndex"
          class="h-full bg-cyan-400 rounded-full transition-all"
          :style="{
            width: isAutoPlaying && !isHovered ? '100%' : '100%',
            transitionDuration: isAutoPlaying && !isHovered ? `${interval}ms` : '0ms',
            transitionTimingFunction: 'linear',
          }"
        />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export interface LiquidGlassItem {
  title: string
  desc?: string
  src: string
}

export const DEFAULT_ITEMS: LiquidGlassItem[] = [
  { title: 'Project Horizon', desc: '摄影作品 01', src: 'https://images.unsplash.com/photo-1514906689926-25ba6dcb584b?w=600&q=80' },
  { title: 'Cybernetics Study', desc: '摄影作品 02', src: 'https://images.unsplash.com/photo-1527630941-4a229fd674ab?w=600&q=80' },
  { title: 'Obsidian Monolith', desc: '摄影作品 03', src: 'https://images.unsplash.com/photo-1568557412756-7d219873dd11?w=600&q=80' },
  { title: 'Prismatic Veil', desc: '摄影作品 04', src: 'https://images.unsplash.com/photo-1581892805885-73bdd91beff0?w=600&q=80' },
  { title: 'Liquid Chrome', desc: '摄影作品 05', src: 'https://images.unsplash.com/photo-1603786420263-ad59136a7409?w=600&q=80' },
  { title: 'Aura Spectrum', desc: '摄影作品 06', src: 'https://images.unsplash.com/photo-1610846202780-b4d9837371ea?w=600&q=80' },
]
</script>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-vue-next'

interface Props {
  items?: LiquidGlassItem[]
  autoPlay?: boolean
  interval?: number
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  items: () => DEFAULT_ITEMS,
  autoPlay: true,
  interval: 3200,
  className: '',
})

const activeIndex = ref(0)
const containerRef = ref<HTMLDivElement | null>(null)
const isHovered = ref(false)
const isAutoPlaying = ref(props.autoPlay)

// Precise geometry constants
const cardWidth = 260
const cardHeight = 340
const cardGap = 24
const stepWidth = cardWidth + cardGap // 284px

let timer: ReturnType<typeof setInterval> | null = null

function startAutoPlay() {
  stopAutoPlay()
  if (!isAutoPlaying.value) return

  timer = setInterval(() => {
    if (!isHovered.value && isAutoPlaying.value && !isDragging) {
      nextSlide()
    }
  }, props.interval)
}

function stopAutoPlay() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

function toggleAutoPlay() {
  isAutoPlaying.value = !isAutoPlaying.value
  if (isAutoPlaying.value) {
    startAutoPlay()
  } else {
    stopAutoPlay()
  }
}

function handlePointerLeave() {
  isHovered.value = false
}

function nextSlide() {
  activeIndex.value = (activeIndex.value + 1) % props.items.length
}

function prevSlide() {
  activeIndex.value = (activeIndex.value - 1 + props.items.length) % props.items.length
}

function selectSlide(idx: number) {
  activeIndex.value = idx
}

// Drag & Swipe gesture handling
let isDragging = false
let startX = 0
const dragOffset = ref(0)
let hasDragged = false

function handlePointerDown(e: PointerEvent) {
  isDragging = true
  hasDragged = false
  startX = e.clientX
  dragOffset.value = 0

  const target = e.currentTarget as HTMLElement | null
  if (target?.setPointerCapture) {
    try {
      target.setPointerCapture(e.pointerId)
    } catch {}
  }
}

function handlePointerMove(e: PointerEvent) {
  if (!isDragging) return
  const dx = e.clientX - startX
  if (Math.abs(dx) > 6) {
    hasDragged = true
  }
  dragOffset.value = dx * 0.75
}

function handlePointerUp(e: PointerEvent) {
  if (!isDragging) return
  isDragging = false

  const target = e.currentTarget as HTMLElement | null
  if (target?.releasePointerCapture) {
    try {
      target.releasePointerCapture(e.pointerId)
    } catch {}
  }

  const threshold = 50
  if (dragOffset.value < -threshold) {
    nextSlide()
  } else if (dragOffset.value > threshold) {
    prevSlide()
  }

  dragOffset.value = 0
  setTimeout(() => {
    hasDragged = false
  }, 60)
}

function onCardClick(idx: number) {
  if (hasDragged) return
  selectSlide(idx)
}

function handleWheel(e: WheelEvent) {
  const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY
  if (Math.abs(delta) < 15) return

  if (delta > 0) {
    nextSlide()
  } else {
    prevSlide()
  }
}

onMounted(() => {
  if (props.autoPlay) {
    startAutoPlay()
  }
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>
