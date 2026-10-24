<template>
  <div
    ref="containerRef"
    class="relative w-full max-w-4xl mx-auto py-8 px-6 rounded-2xl bg-neutral-950 border border-white/10 select-none overflow-hidden"
    :class="className"
  >
    <!-- Shelf Header -->
    <div class="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
      <div>
        <p class="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">{{ brand }}</p>
        <h3 class="text-base md:text-lg font-bold text-white">往期期刊</h3>
      </div>
      <div v-if="hoveredBook" class="text-right transition-all">
        <span class="text-xs font-mono text-cyan-400">{{ hoveredBook.date }}</span>
        <p class="text-sm font-semibold text-neutral-100">第 0{{ (hoveredIndex ?? 0) + 1 }} 卷 · {{ hoveredBook.title }}</p>
      </div>
      <div v-else class="text-right text-xs text-neutral-500 font-mono">
        把鼠标移到书脊上查看
      </div>
    </div>

    <!-- 3D Bookshelf Viewport -->
    <div
      class="relative w-full h-[280px] flex items-end justify-center overflow-x-auto overflow-y-hidden pb-4 px-8 scrollbar-thin scrollbar-thumb-neutral-800"
      style="perspective: 1000px;"
    >
      <div class="flex items-end gap-1.5 sm:gap-2.5">
        <div
          v-for="(book, i) in items"
          :key="book.id"
          class="relative w-8 sm:w-10 rounded-t-md cursor-pointer transition-all duration-300 ease-out will-change-transform shadow-lg flex flex-col justify-between py-3 px-1 border border-white/10"
          :class="[
            hoveredIndex === i
              ? '-translate-y-8 scale-110 shadow-[0_15px_30px_rgba(0,0,0,0.9)] z-20 brightness-110 ring-1 ring-white/30'
              : 'translate-y-0 opacity-85 hover:opacity-100 z-10',
          ]"
          :style="{
            height: `${getBookHeight(i)}px`,
            backgroundColor: book.color || BOOK_COLORS[i % BOOK_COLORS.length],
          }"
          @mouseenter="hoveredIndex = i"
          @mouseleave="hoveredIndex = null"
          @click="selectBook(book, i)"
        >
          <!-- Foil / Spine embossing -->
          <div class="w-full h-1 bg-amber-400/40 rounded-full shrink-0 shadow-sm" />

          <!-- Volume Tag at Top -->
          <span class="text-[9px] font-mono font-bold text-amber-300/80 tracking-tighter text-center shrink-0 mt-0.5">
            0{{ i + 1 }}
          </span>

          <!-- Spine Title (Upright top-to-bottom reading, no 180deg flip) -->
          <span
            class="text-[10px] sm:text-[11px] font-semibold text-white/95 truncate tracking-wide text-center select-none my-1"
            style="writing-mode: vertical-rl; text-orientation: mixed; max-height: 140px;"
          >
            {{ book.title }}
          </span>

          <!-- Bottom Issue Number Tag -->
          <span class="text-[9px] font-mono text-white/50 text-center shrink-0">
            #{{ i + 1 }}
          </span>
        </div>
      </div>
    </div>

    <!-- Wooden Shelf Board Underneath -->
    <div
      class="w-full h-4 rounded-b-lg shadow-xl"
      style="background: linear-gradient(180deg, #27272a 0%, #18181b 100%); border-top: 2px solid rgba(255,255,255,0.1);"
    />
  </div>
</template>

<script lang="ts">
export interface NewsletterBook {
  id: string
  title: string
  date: string
  color?: string
}

export const DEFAULT_BOOKS: NewsletterBook[] = [
  { id: '1', title: '动画基础', date: '2026 第一季度' },
  { id: '2', title: 'WebGL 与着色器', date: '2026 第二季度' },
  { id: '3', title: '交互细节', date: '2026 第三季度' },
  { id: '4', title: 'AI 产品设计', date: '2026 第四季度' },
  { id: '5', title: '设计系统', date: '2025 第四季度' },
  { id: '6', title: '排版', date: '2025 第三季度' },
  { id: '7', title: '渲染性能', date: '2025 第二季度' },
  { id: '8', title: '无障碍设计', date: '2025 第一季度' },
]
</script>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  items?: NewsletterBook[]
  brand?: string
  className?: string
}

const BOOK_COLORS = [
  '#1e1b4b',
  '#065f46',
  '#831843',
  '#1e3a8a',
  '#701a75',
  '#164e63',
  '#78350f',
  '#312e81',
]

const props = withDefaults(defineProps<Props>(), {
  items: () => DEFAULT_BOOKS,
  brand: 'AURA DESIGN ARCHIVE',
  className: '',
})

const emit = defineEmits<{
  (e: 'select', book: NewsletterBook, index: number): void
}>()

const hoveredIndex = ref<number | null>(null)

const hoveredBook = computed(() => {
  if (hoveredIndex.value === null) return null
  return props.items[hoveredIndex.value] || null
})

// Natural staggered book heights for realistic bookshelf rhythm
const HEIGHT_VARIANTS = [220, 240, 230, 250, 215, 245, 235, 255]

function getBookHeight(i: number): number {
  return HEIGHT_VARIANTS[i % HEIGHT_VARIANTS.length] ?? 230
}

function selectBook(book: NewsletterBook, index: number) {
  emit('select', book, index)
}
</script>
