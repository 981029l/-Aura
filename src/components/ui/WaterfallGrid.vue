<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'
import { LayoutGrid, Eye, Heart, X, Sparkles, Compass } from 'lucide-vue-next'

export interface WaterfallItem {
  id: string
  title: string
  category: '3d' | 'generative' | 'ui'
  aspectRatio: 'aspect-square' | 'aspect-[3/4]' | 'aspect-[4/5]' | 'aspect-[16/10]'
  gradient: string
  likes: number
  views: number
  badge: string
}

export interface WaterfallGridProps {
  title?: string
  subtitle?: string
  class?: string
}

const props = withDefaults(defineProps<WaterfallGridProps>(), {
  title: '瀑布流画廊',
  subtitle: '按标签筛选作品，点击图片查看大图',
})

const activeFilter = ref<'all' | '3d' | 'generative' | 'ui'>('all')
const selectedItem = ref<WaterfallItem | null>(null)

const items = ref<WaterfallItem[]>([
  {
    id: 'wf-1',
    title: '引力场',
    category: '3d',
    aspectRatio: 'aspect-[3/4]',
    gradient: 'from-blue-600 via-indigo-700 to-purple-900',
    likes: 1240,
    views: 8900,
    badge: 'Blender 4.2'
  },
  {
    id: 'wf-2',
    title: '流体极光',
    category: 'generative',
    aspectRatio: 'aspect-[4/5]',
    gradient: 'from-emerald-500 via-teal-600 to-cyan-900',
    likes: 954,
    views: 6420,
    badge: 'Shader Canvas'
  },
  {
    id: 'wf-3',
    title: '终端界面',
    category: 'ui',
    aspectRatio: 'aspect-square',
    gradient: 'from-violet-600 via-fuchsia-700 to-rose-900',
    likes: 2150,
    views: 14200,
    badge: 'Aura Design'
  },
  {
    id: 'wf-4',
    title: '干涉条纹',
    category: 'generative',
    aspectRatio: 'aspect-[16/10]',
    gradient: 'from-amber-500 via-orange-600 to-rose-800',
    likes: 830,
    views: 5120,
    badge: 'WebGPU 120fps'
  },
  {
    id: 'wf-5',
    title: '全景棱镜',
    category: '3d',
    aspectRatio: 'aspect-[4/5]',
    gradient: 'from-indigo-600 via-sky-600 to-teal-800',
    likes: 1680,
    views: 9800,
    badge: 'Raymarching'
  },
  {
    id: 'wf-6',
    title: '玻璃质感界面',
    category: 'ui',
    aspectRatio: 'aspect-[3/4]',
    gradient: 'from-rose-500 via-pink-600 to-purple-900',
    likes: 1420,
    views: 11200,
    badge: 'Glassmorphism'
  }
])

const filteredItems = computed(() => {
  if (activeFilter.value === 'all') return items.value
  return items.value.filter(item => item.category === activeFilter.value)
})

const filterOptions = [
  { key: 'all', label: '全部' },
  { key: '3d', label: '3D' },
  { key: 'generative', label: '生成艺术' },
  { key: 'ui', label: '界面设计' },
] as const

function openLightbox(item: WaterfallItem) {
  selectedItem.value = item
}

function closeLightbox() {
  selectedItem.value = null
}
</script>

<template>
  <div :class="cn('w-full max-w-3xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6', props.class)">
    <!-- 头部与标签筛选栏 -->
    <div class="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-2.5">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
          <LayoutGrid class="h-5 w-5" />
        </div>
        <div>
          <span class="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
            {{ props.title || '瀑布流网格' }}
          </span>
          <span v-if="props.subtitle" class="text-xs text-zinc-400 font-mono">
            · {{ props.subtitle }}
          </span>
        </div>
      </div>

      <!-- 筛选 Tabs -->
      <div class="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-xs font-mono">
        <button
          v-for="tab in filterOptions"
          :key="tab.key"
          type="button"
          @click="activeFilter = tab.key"
          :class="[
            'px-3 py-1.5 rounded-lg transition-all cursor-pointer font-semibold',
            activeFilter === tab.key
              ? 'bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-white'
              : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'
          ]"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>

    <!-- 瀑布流 CSS Columns 布局 -->
    <div class="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
      <div
        v-for="item in filteredItems"
        :key="item.id"
        @click="openLightbox(item)"
        class="break-inside-avoid group relative rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
      >
        <!-- 渐变媒体渲染块 -->
        <div :class="['w-full bg-gradient-to-br flex items-center justify-center relative p-6', item.aspectRatio, item.gradient]">
          <!-- 拟态光照网格背景 -->
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />

          <!-- 徽标 -->
          <div class="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-md text-[10px] font-mono font-bold text-white/90 border border-white/20">
            {{ item.badge }}
          </div>

          <!-- 中心浮标图标 -->
          <div class="relative z-10 flex flex-col items-center gap-1.5 text-white/90 group-hover:scale-110 transition-transform duration-300">
            <Sparkles class="h-8 w-8 drop-shadow-md text-white/80" />
          </div>

          <!-- 悬停渐变消隐暗角遮罩 -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
            <h5 class="text-xs font-bold leading-tight mb-2">
              {{ item.title }}
            </h5>
            <div class="flex items-center justify-between text-[11px] font-mono text-zinc-300">
              <div class="flex items-center gap-1">
                <Heart class="h-3 w-3 text-rose-400" />
                <span>{{ item.likes }}</span>
              </div>
              <div class="flex items-center gap-1">
                <Eye class="h-3 w-3 text-sky-400" />
                <span>{{ item.views }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 模态灯箱缩放预览视窗 -->
    <div
      v-if="selectedItem"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md transition-all"
      @click.self="closeLightbox"
    >
      <div class="relative w-full max-w-lg rounded-2xl border border-zinc-700 bg-zinc-900 p-6 shadow-2xl text-white space-y-4 animate-in fade-in zoom-in-95 duration-200">
        <div class="flex items-center justify-between border-b border-zinc-800 pb-3">
          <div class="flex items-center gap-2">
            <Compass class="h-4 w-4 text-purple-400" />
            <h4 class="text-sm font-bold">{{ selectedItem.title }}</h4>
          </div>
          <button
            type="button"
            @click="closeLightbox"
            class="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <X class="h-4 w-4" />
          </button>
        </div>

        <div :class="['w-full h-64 rounded-xl bg-gradient-to-br flex items-center justify-center relative shadow-inner', selectedItem.gradient]">
          <Sparkles class="h-16 w-16 text-white/70 animate-pulse" />
          <div class="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-xs font-mono border border-white/20">
            {{ selectedItem.badge }} · 大图预览
          </div>
        </div>

        <div class="flex items-center justify-between text-xs font-mono text-zinc-400 pt-2">
          <span>ID: {{ selectedItem.id }}</span>
          <div class="flex items-center gap-4">
            <span>❤️ {{ selectedItem.likes }} 赞同</span>
            <span>👁️ {{ selectedItem.views }} 浏览</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
