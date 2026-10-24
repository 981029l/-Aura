<template>
  <div
    class="relative w-full max-w-4xl mx-auto rounded-3xl bg-neutral-950 p-6 sm:p-8 select-none overflow-hidden border border-white/10 shadow-2xl"
    :class="className"
  >
    <!-- Background Ambient Lighting -->
    <div class="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl" />
    <div class="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl" />

    <div class="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[420px]">
      <!-- Left: Featured Card Stage -->
      <div class="relative w-full aspect-[4/3] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-900 group">
        <!-- Background Image with Fade Transition -->
        <transition name="carousel-fade" mode="out-in">
          <div
            :key="activeItem.image"
            class="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
            :style="{ backgroundImage: `url(${activeItem.image})` }"
          />
        </transition>

        <!-- Gradient Vignette & Card Content -->
        <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
          <div class="inline-flex items-center gap-2 mb-2">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span class="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
              Archival Entry 0{{ selectedIndex + 1 }}
            </span>
          </div>

          <h3 class="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug drop-shadow-md">
            {{ activeItem.label }}
          </h3>

          <div class="mt-4 flex items-center justify-between text-xs text-neutral-400 font-mono border-t border-white/10 pt-3">
            <span>ITEM 0{{ selectedIndex + 1 }} OF 0{{ items.length }}</span>
            <span class="text-cyan-400/80">3D CYLINDRICAL DRUM</span>
          </div>
        </div>
      </div>

      <!-- Right: 3D Cylindrical Rotary Wheel -->
      <div
        ref="wheelContainerRef"
        class="relative h-[360px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing select-none"
        style="perspective: 1000px;"
        @wheel.prevent="handleWheel"
        @pointerdown="handlePointerDown"
        @pointermove="handlePointerMove"
        @pointerup="handlePointerUp"
        @pointercancel="handlePointerUp"
      >
        <!-- Center Target Indicator Beam (Locked at Vertical Center) -->
        <div class="absolute inset-x-2 top-1/2 -translate-y-1/2 h-12 bg-cyan-500/10 border border-cyan-400/40 pointer-events-none rounded-xl shadow-[0_0_20px_rgba(56,189,248,0.15)] flex items-center justify-between px-3 z-10 backdrop-blur-sm">
          <div class="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
          <div class="text-[10px] font-mono text-cyan-400/70 tracking-widest uppercase">ACTIVE</div>
        </div>

        <!-- 3D Wheel Items Drum -->
        <div
          class="relative w-full h-12 flex items-center justify-center will-change-transform"
          style="transform-style: preserve-3d;"
        >
          <div
            v-for="(item, i) in items"
            :key="i"
            class="absolute inset-x-2 h-12 flex items-center gap-3 px-4 rounded-xl cursor-pointer transition-all duration-300 ease-out select-none"
            :class="[
              i === selectedIndex
                ? 'text-cyan-300 font-bold'
                : 'text-neutral-400 hover:text-neutral-200',
            ]"
            :style="getItemStyle(i)"
            @click="selectItem(i)"
          >
            <span
              class="w-2 h-2 rounded-full transition-all duration-300 shrink-0"
              :class="i === selectedIndex ? 'bg-cyan-400 shadow-[0_0_8px_#38bdf8] scale-125' : 'bg-neutral-600'"
            />
            <span class="text-sm sm:text-base font-medium truncate flex-1 tracking-wide">
              {{ item.label }}
            </span>
            <span
              v-if="i === selectedIndex"
              class="text-xs font-mono text-cyan-400/80 mr-1"
            >
              0{{ i + 1 }}
            </span>
          </div>
        </div>

        <!-- Top & Bottom Gradient Vignettes (Soft Depth Shadows) -->
        <div class="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-neutral-950 via-neutral-950/80 to-transparent z-20" />
        <div class="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent z-20" />

        <!-- Wheel Navigation Floating Steppers -->
        <div class="absolute right-2 top-3 z-30 flex flex-col gap-1">
          <button
            type="button"
            class="p-1.5 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-white/10 disabled:opacity-20 transition-all cursor-pointer"
            :disabled="selectedIndex === 0"
            title="上一项"
            @click.stop="prevItem"
          >
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
          <button
            type="button"
            class="p-1.5 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-white/10 disabled:opacity-20 transition-all cursor-pointer"
            :disabled="selectedIndex === items.length - 1"
            title="下一项"
            @click.stop="nextItem"
          >
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export interface WheelItem {
  label: string
  image: string
}

export const DEFAULT_ITEMS: WheelItem[] = [
  { label: '现代住宅 01', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=85' },
  { label: '现代住宅 02', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&q=85' },
  { label: '现代住宅 03', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=85' },
  { label: '现代住宅 04', image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1000&q=85' },
  { label: '现代住宅 05', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&q=85' },
  { label: '现代住宅 06', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1000&q=85' },
  { label: '现代住宅 07', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1000&q=85' },
  { label: '现代住宅 08', image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1000&q=85' },
]
</script>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  items?: WheelItem[]
  modelValue?: number
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  items: () => DEFAULT_ITEMS,
  modelValue: 0,
  className: '',
})

const emit = defineEmits<{
  (e: 'update:modelValue', index: number): void
  (e: 'change', item: WheelItem, index: number): void
}>()

const wheelContainerRef = ref<HTMLDivElement | null>(null)
const selectedIndex = ref(props.modelValue ?? 0)

const activeItem = computed(() => {
  return props.items[selectedIndex.value] || props.items[0]!
})

function selectItem(index: number) {
  if (index < 0 || index >= props.items.length) return
  selectedIndex.value = index
  emit('update:modelValue', index)
  emit('change', props.items[index]!, index)
}

function prevItem() {
  if (selectedIndex.value > 0) {
    selectItem(selectedIndex.value - 1)
  }
}

function nextItem() {
  if (selectedIndex.value < props.items.length - 1) {
    selectItem(selectedIndex.value + 1)
  }
}

// 3D Cylindrical drum transform calculation
const ITEM_HEIGHT = 48
const CYLINDER_ANGLE = 22 // Degree curve per item

function getItemStyle(i: number) {
  const diff = i - selectedIndex.value
  const absDiff = Math.abs(diff)

  // Vertical position along cylinder curve
  const translateY = diff * ITEM_HEIGHT
  const rotateX = -diff * CYLINDER_ANGLE
  const translateZ = -absDiff * 22
  const scale = Math.max(0.65, 1 - absDiff * 0.08)
  const opacity = Math.max(0, 1 - absDiff * 0.28)

  return {
    transform: `translate3d(0, ${translateY}px, ${translateZ}px) rotateX(${rotateX}deg) scale(${scale})`,
    opacity: absDiff > 3 ? 0 : opacity,
    pointerEvents: absDiff > 3 ? ('none' as const) : ('auto' as const),
    zIndex: 50 - absDiff,
    backfaceVisibility: 'hidden' as const,
  }
}

// Mouse Wheel Navigation with Threshold Acc
let wheelAccumulator = 0
let wheelCooldown = false

function handleWheel(e: WheelEvent) {
  wheelAccumulator += e.deltaY
  if (wheelCooldown) return

  if (Math.abs(wheelAccumulator) >= 30) {
    if (wheelAccumulator > 0) {
      nextItem()
    } else {
      prevItem()
    }
    wheelAccumulator = 0
    wheelCooldown = true
    setTimeout(() => {
      wheelCooldown = false
    }, 180)
  }
}

// Touch / Pointer Drag Gestures
let isDragging = false
let dragStartY = 0

function handlePointerDown(e: PointerEvent) {
  isDragging = true
  dragStartY = e.clientY
  const target = e.currentTarget as HTMLElement | null
  if (target) {
    target.setPointerCapture(e.pointerId)
  }
}

function handlePointerMove(e: PointerEvent) {
  if (!isDragging) return
  const dy = dragStartY - e.clientY
  if (Math.abs(dy) > 40) {
    if (dy > 0) {
      nextItem()
    } else {
      prevItem()
    }
    dragStartY = e.clientY
  }
}

function handlePointerUp() {
  isDragging = false
}
</script>

<style scoped>
.carousel-fade-enter-active,
.carousel-fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.carousel-fade-enter-from {
  opacity: 0;
  transform: scale(0.96);
}

.carousel-fade-leave-to {
  opacity: 0;
  transform: scale(1.04);
}
</style>
