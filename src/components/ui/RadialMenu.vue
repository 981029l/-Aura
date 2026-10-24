<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { Compass, Plus, X, Zap, Share2, Bookmark, Sparkles, Shield, Check } from 'lucide-vue-next'

export interface RadialMenuItem {
  id: string
  label: string
  color: string
}

export interface RadialMenuProps {
  title?: string
  subtitle?: string
  class?: string
}

const props = withDefaults(defineProps<RadialMenuProps>(), {
  title: '',
  subtitle: '',
})

const isOpen = ref(true)
const activeItem = ref<RadialMenuItem | null>(null)
const selectedFeedback = ref<string | null>(null)

const menuItems = ref<RadialMenuItem[]>([
  { id: 'zap', label: '快速操作', color: 'bg-amber-500 hover:bg-amber-400' },
  { id: 'share', label: '分享', color: 'bg-blue-500 hover:bg-blue-400' },
  { id: 'bookmark', label: '收藏', color: 'bg-emerald-500 hover:bg-emerald-400' },
  { id: 'sparkles', label: 'AI 改写', color: 'bg-purple-500 hover:bg-purple-400' },
  { id: 'shield', label: '安全检查', color: 'bg-rose-500 hover:bg-rose-400' },
])

const RADIUS = 88 // 展开半径像素

function getItemStyle(index: number, total: number) {
  // 环形均分角度 (-90deg 为正上方)
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2
  const x = isOpen.value ? Math.round(Math.cos(angle) * RADIUS) : 0
  const y = isOpen.value ? Math.round(Math.sin(angle) * RADIUS) : 0

  return {
    transform: `translate(${x}px, ${y}px) scale(${isOpen.value ? 1 : 0})`,
    transitionDelay: `${isOpen.value ? index * 40 : 0}ms`,
  }
}

function handleSelect(item: RadialMenuItem) {
  selectedFeedback.value = `已选择：${item.label}`
  setTimeout(() => {
    selectedFeedback.value = null
  }, 1800)
}
</script>

<template>
  <div :class="cn('w-full max-w-xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6', props.class)">
    <!-- 头部指标栏 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800/80">
      <div class="flex items-center gap-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
        <Compass class="h-4 w-4 text-purple-500" />
        <span>{{ props.title || '环形菜单' }}</span>
        <span v-if="props.subtitle" class="text-xs text-zinc-400 font-mono">
          · {{ props.subtitle }}
        </span>
      </div>

      <div class="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
        <span>{{ isOpen ? '已展开' : '已折叠' }}</span>
      </div>
    </div>

    <!-- 轮盘互动舞台 (居中放置极坐标发射原点) -->
    <div class="relative h-64 rounded-2xl border border-zinc-200/80 bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-950 flex items-center justify-center overflow-hidden shadow-inner">
      <!-- 极坐标同心圆底衬 -->
      <div class="absolute w-44 h-44 rounded-full border border-zinc-300/40 dark:border-zinc-800/60 pointer-events-none" />
      <div class="absolute w-24 h-24 rounded-full border border-zinc-300/30 dark:border-zinc-800/40 pointer-events-none" />

      <!-- 放射状 5 个功能菜单子按钮 -->
      <div
        v-for="(item, index) in menuItems"
        :key="item.id"
        @click="handleSelect(item)"
        @mouseenter="activeItem = item"
        @mouseleave="activeItem = null"
        :style="getItemStyle(index, menuItems.length)"
        :class="[
          'absolute z-20 w-11 h-11 rounded-2xl flex items-center justify-center text-white shadow-lg transition-all duration-300 ease-out cursor-pointer active:scale-95',
          item.color
        ]"
      >
        <Zap v-if="item.id === 'zap'" class="h-5 w-5" />
        <Share2 v-else-if="item.id === 'share'" class="h-5 w-5" />
        <Bookmark v-else-if="item.id === 'bookmark'" class="h-5 w-5" />
        <Sparkles v-else-if="item.id === 'sparkles'" class="h-5 w-5" />
        <Shield v-else class="h-5 w-5" />
      </div>

      <!-- 中心发射主按钮 -->
      <button
        type="button"
        @click="isOpen = !isOpen"
        :class="[
          'relative z-30 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl transition-transform duration-300 active:scale-90 cursor-pointer',
          isOpen ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rotate-90' : 'bg-purple-600 hover:bg-purple-500'
        ]"
      >
        <X v-if="isOpen" class="h-6 w-6" />
        <Plus v-else class="h-6 w-6" />
      </button>

      <!-- 悬停指示信息提示 -->
      <div class="absolute bottom-3 inset-x-0 flex items-center justify-center pointer-events-none">
        <div v-if="activeItem" class="bg-zinc-900/90 dark:bg-zinc-100/90 text-white dark:text-zinc-900 px-3 py-1 rounded-full text-xs font-mono font-bold shadow-md animate-in fade-in zoom-in-95">
          {{ activeItem.label }}
        </div>
        <div v-else-if="selectedFeedback" class="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-mono font-bold shadow-md flex items-center gap-1.5 animate-in fade-in zoom-in-95">
          <Check class="h-3.5 w-3.5" />
          <span>{{ selectedFeedback }}</span>
        </div>
        <div v-else class="text-[11px] font-mono text-zinc-400">
          点击中心按钮展开或收起 · 悬停子按钮查看名称
        </div>
      </div>
    </div>
  </div>
</template>
