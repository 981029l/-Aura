<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { Eye, Sparkles, Layers } from 'lucide-vue-next'

export interface ParallaxItem {
  id: string
  title: string
  category: string
  color: string
}

export interface ParallaxScrollProps {
  title?: string
  class?: string
}

const props = withDefaults(defineProps<ParallaxScrollProps>(), {
  title: '视差滚动画廊',
})

// 3 列视差项
const col1 = ref<ParallaxItem[]>([
  { id: '1', title: '海岸线', category: 'Landscape', color: 'from-blue-600 to-indigo-700' },
  { id: '2', title: '城市夜景', category: 'City', color: 'from-purple-600 to-pink-700' },
  { id: '3', title: '雪山', category: 'Mountain', color: 'from-cyan-500 to-blue-600' },
])

const col2 = ref<ParallaxItem[]>([
  { id: '4', title: '森林', category: 'Nature', color: 'from-emerald-500 to-teal-700' },
  { id: '5', title: '沙漠', category: 'Desert', color: 'from-amber-500 to-orange-700' },
  { id: '6', title: '日落', category: 'Sky', color: 'from-rose-500 to-red-700' },
])

const col3 = ref<ParallaxItem[]>([
  { id: '7', title: '湖泊', category: 'Lake', color: 'from-indigo-600 to-sky-600' },
  { id: '8', title: '极光', category: 'Night', color: 'from-violet-600 to-purple-800' },
  { id: '9', title: '草原', category: 'Grassland', color: 'from-sky-600 to-emerald-600' },
])

const scrollOffset = ref(0)

function handleScroll(e: Event) {
  const target = e.target as HTMLElement
  scrollOffset.value = target.scrollTop
}
</script>

<template>
  <div :class="cn('w-full max-w-2xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-4', props.class)">
    <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-2.5">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
          <Layers class="h-5 w-5" />
        </div>
        <div>
          <h4 class="font-bold text-sm text-zinc-900 dark:text-white">
            {{ props.title }}
          </h4>
          <p class="text-xs text-zinc-400 font-mono">
            三列以不同速度滚动 · 在下方区域内滚动查看效果
          </p>
        </div>
      </div>
      <span class="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
        PARALLAX 3-COL
      </span>
    </div>

    <!-- 视差可滚动窗口容器 -->
    <div
      class="h-72 w-full overflow-y-auto rounded-2xl border border-zinc-200/80 bg-zinc-950/95 p-3 dark:border-zinc-800/80 grid grid-cols-3 gap-3"
      @scroll="handleScroll"
    >
      <!-- 第 1 列 (速度 1.0x) -->
      <div
        class="space-y-3 transition-transform duration-75"
        :style="{ transform: `translateY(${-scrollOffset * 0.15}px)` }"
      >
        <div
          v-for="item in col1"
          :key="item.id"
          :class="[
            'h-28 rounded-xl p-3 flex flex-col justify-between text-white shadow-md bg-gradient-to-br transition-all hover:scale-[1.02] cursor-pointer',
            item.color,
          ]"
        >
          <span class="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-white/20 backdrop-blur-md w-fit">
            {{ item.category }}
          </span>
          <h5 class="text-xs font-bold leading-tight line-clamp-1">
            {{ item.title }}
          </h5>
        </div>
      </div>

      <!-- 第 2 列 (速度 1.4x 差速加快) -->
      <div
        class="space-y-3 transition-transform duration-75 pt-4"
        :style="{ transform: `translateY(${scrollOffset * 0.18}px)` }"
      >
        <div
          v-for="item in col2"
          :key="item.id"
          :class="[
            'h-28 rounded-xl p-3 flex flex-col justify-between text-white shadow-md bg-gradient-to-br transition-all hover:scale-[1.02] cursor-pointer',
            item.color,
          ]"
        >
          <span class="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-white/20 backdrop-blur-md w-fit">
            {{ item.category }}
          </span>
          <h5 class="text-xs font-bold leading-tight line-clamp-1">
            {{ item.title }}
          </h5>
        </div>
      </div>

      <!-- 第 3 列 (速度 0.8x 差速放缓) -->
      <div
        class="space-y-3 transition-transform duration-75"
        :style="{ transform: `translateY(${-scrollOffset * 0.08}px)` }"
      >
        <div
          v-for="item in col3"
          :key="item.id"
          :class="[
            'h-28 rounded-xl p-3 flex flex-col justify-between text-white shadow-md bg-gradient-to-br transition-all hover:scale-[1.02] cursor-pointer',
            item.color,
          ]"
        >
          <span class="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-white/20 backdrop-blur-md w-fit">
            {{ item.category }}
          </span>
          <h5 class="text-xs font-bold leading-tight line-clamp-1">
            {{ item.title }}
          </h5>
        </div>
      </div>
    </div>

    <!-- 底部状态提示 -->
    <div class="flex items-center justify-between text-[11px] font-mono text-zinc-400 pt-1">
      <div class="flex items-center gap-1.5 text-indigo-500">
        <Sparkles class="h-3.5 w-3.5" />
        <span>各列速度：1.0x · 1.4x · 0.8x</span>
      </div>
      <div class="flex items-center gap-1">
        <Eye class="h-3.5 w-3.5" />
        <span>使用鼠标滚轮滚动</span>
      </div>
    </div>
  </div>
</template>
