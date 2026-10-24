<template>
  <div
    ref="containerRef"
    class="relative w-full overflow-hidden rounded-2xl bg-black select-none min-h-[480px] flex flex-col justify-between border border-white/10 shadow-2xl cursor-grab active:cursor-grabbing"
    :class="className"
    @wheel="handleWheel"
    @pointerdown="handlePointerDown"
    @pointermove="handlePointerMove"
    @pointerup="handlePointerUp"
    @pointercancel="handlePointerUp"
  >
    <!-- Stage Area -->
    <div class="relative w-full h-[400px] overflow-hidden flex items-center justify-center">
      <!-- Top Left Image -->
      <div
        class="absolute will-change-transform rounded-xl overflow-hidden shadow-2xl transition-all duration-300 border border-white/10 z-10"
        :style="tlStyle"
      >
        <img :src="images.topLeft" alt="Top Left" class="h-full w-full object-cover" />
      </div>

      <!-- Bottom Right Image -->
      <div
        class="absolute will-change-transform rounded-xl overflow-hidden shadow-2xl transition-all duration-300 border border-white/10 z-20"
        :style="brStyle"
      >
        <img :src="images.bottomRight" alt="Bottom Right" class="h-full w-full object-cover" />
      </div>

      <!-- Bottom Left Image -->
      <div
        class="absolute will-change-transform rounded-xl overflow-hidden shadow-2xl transition-all duration-300 border border-white/10 z-30"
        :style="blStyle"
      >
        <img :src="images.bottomLeft" alt="Bottom Left" class="h-full w-full object-cover" />
      </div>

      <!-- Hero Image (Top Right) -->
      <div
        class="absolute will-change-transform rounded-xl overflow-hidden shadow-2xl transition-all duration-300 border border-white/20 z-40"
        :style="heroStyle"
      >
        <img :src="images.topRight" alt="Top Right Hero" class="h-full w-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
          <div>
            <span class="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">滚动动画</span>
            <h4 class="text-xl md:text-2xl font-bold text-white">向下滚动查看</h4>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Dynamic Scroll Status Indicator (No fake slider bar!) -->
    <div class="pointer-events-none absolute bottom-4 right-4 z-50 flex items-center gap-2.5 rounded-full border border-white/10 bg-black/70 px-4 py-1.5 text-xs text-white/90 backdrop-blur-md shadow-lg">
      <span
        class="inline-block w-2 h-2 rounded-full transition-colors duration-300"
        :class="progress > 0.7 ? 'bg-emerald-400' : progress > 0.3 ? 'bg-cyan-400' : 'bg-indigo-400 animate-pulse'"
      />
      <span class="font-medium tracking-wide font-mono text-[11px]">{{ phaseName }}</span>
      <span class="text-[10px] text-white/50 font-mono">({{ Math.round(progress * 100) }}%)</span>
    </div>
  </div>
</template>

<script lang="ts">
export interface ChoreographyImages {
  topLeft: string
  topRight: string
  bottomLeft: string
  bottomRight: string
}

export const DEFAULT_IMAGES: ChoreographyImages = {
  topLeft: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80',
  topRight: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=85',
  bottomLeft: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600&q=80',
  bottomRight: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80',
}
</script>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface Props {
  images?: ChoreographyImages
  className?: string
}

withDefaults(defineProps<Props>(), {
  images: () => DEFAULT_IMAGES,
  className: '',
})

const containerRef = ref<HTMLDivElement | null>(null)
const progress = ref(0.25)

const phaseName = computed(() => {
  if (progress.value < 0.3) return '阶段 1 · 图片沿对角线展开'
  if (progress.value < 0.7) return '阶段 2 · 向中间聚拢'
  return '阶段 3 · 放大铺满'
})

// Interpolate helpers
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * Math.max(0, Math.min(1, t))
}

const tlStyle = computed(() => {
  const p = progress.value
  let x = -130
  let y = -80
  let opacity = 1

  if (p <= 0.3) {
    const t = p / 0.3
    y = lerp(-80, 80, t)
  } else if (p <= 0.65) {
    const t = (p - 0.3) / 0.35
    x = lerp(-130, 0, t)
    y = lerp(80, 0, t)
  } else {
    x = 0
    y = 0
    opacity = Math.max(0, 1 - (p - 0.65) / 0.25)
  }

  return {
    width: '180px',
    height: '120px',
    transform: `translate3d(${x}px, ${y}px, 0)`,
    opacity: `${opacity}`,
  }
})

const brStyle = computed(() => {
  const p = progress.value
  let x = 130
  let y = 80
  let opacity = 1

  if (p <= 0.3) {
    const t = p / 0.3
    y = lerp(80, -80, t)
  } else if (p <= 0.65) {
    const t = (p - 0.3) / 0.35
    x = lerp(130, 0, t)
    y = lerp(-80, 0, t)
  } else {
    x = 0
    y = 0
    opacity = Math.max(0, 1 - (p - 0.65) / 0.25)
  }

  return {
    width: '180px',
    height: '120px',
    transform: `translate3d(${x}px, ${y}px, 0)`,
    opacity: `${opacity}`,
  }
})

const blStyle = computed(() => {
  const p = progress.value
  let x = -130
  let y = 80
  let opacity = 1

  if (p <= 0.3) {
    const t = p / 0.3
    x = lerp(-130, 130, t)
  } else if (p <= 0.65) {
    const t = (p - 0.3) / 0.35
    x = lerp(130, 0, t)
    y = lerp(80, 0, t)
  } else {
    x = 0
    y = 0
    opacity = Math.max(0, 1 - (p - 0.65) / 0.25)
  }

  return {
    width: '180px',
    height: '120px',
    transform: `translate3d(${x}px, ${y}px, 0)`,
    opacity: `${opacity}`,
  }
})

const heroStyle = computed(() => {
  const p = progress.value
  let w = 240
  let h = 160
  let x = 110
  let y = -70

  if (p <= 0.3) {
    // Initial floating
    const t = p / 0.3
    x = lerp(110, 80, t)
    y = lerp(-70, -40, t)
  } else if (p <= 0.65) {
    // Settle to center
    const t = (p - 0.3) / 0.35
    x = lerp(80, 0, t)
    y = lerp(-40, 0, t)
  } else {
    // Hero expand
    const t = (p - 0.65) / 0.35
    w = lerp(240, 420, t)
    h = lerp(160, 280, t)
    x = 0
    y = 0
  }

  return {
    width: `${w}px`,
    height: `${h}px`,
    transform: `translate3d(${x}px, ${y}px, 0)`,
  }
})

// 1. Real Page Scroll Listener
let isInteractiveOverriding = false
let overrideTimer: any = null

function updateScrollProgress() {
  if (isInteractiveOverriding || !containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  const vh = window.innerHeight || 800

  const start = vh * 0.85
  const end = vh * 0.25
  const p = (start - rect.top) / (start - end)
  progress.value = Math.max(0, Math.min(1, p))
}

// 2. Mouse Wheel Scrubbing inside container
function handleWheel(e: WheelEvent) {
  isInteractiveOverriding = true
  clearTimeout(overrideTimer)
  
  const delta = e.deltaY * 0.0015
  progress.value = Math.max(0, Math.min(1, progress.value + delta))

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
  dragStartProgress = progress.value
}

function handlePointerMove(e: PointerEvent) {
  if (!isDragging) return
  const dy = dragStartY - e.clientY
  const delta = dy * 0.003
  progress.value = Math.max(0, Math.min(1, dragStartProgress + delta))
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
