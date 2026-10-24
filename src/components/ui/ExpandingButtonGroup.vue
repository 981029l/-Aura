<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import {
  Sparkles,
  Share2,
  Bookmark,
  Heart,
  Copy,
  Check,
} from 'lucide-vue-next'

export interface ActionItem {
  id: string
  label: string
  icon: any
}

export interface ExpandingButtonGroupProps {
  items?: ActionItem[]
  class?: string
}

const props = withDefaults(defineProps<ExpandingButtonGroupProps>(), {
  items: () => [
    { id: 'star', label: '标星', icon: Sparkles },
    { id: 'share', label: '分享', icon: Share2 },
    { id: 'bookmark', label: '收藏', icon: Bookmark },
    { id: 'like', label: '点赞', icon: Heart },
    { id: 'copy', label: '复制链接', icon: Copy },
  ],
})

const hoveredId = ref<string | null>(null)
const activeId = ref<string | null>(null)
const confirmedId = ref<string | null>(null)

const emit = defineEmits<{
  (e: 'select', item: ActionItem): void
}>()

function handleClick(item: ActionItem) {
  activeId.value = item.id
  confirmedId.value = item.id
  emit('select', item)

  setTimeout(() => {
    confirmedId.value = null
  }, 1400)
}
</script>

<template>
  <div
    :class="
      cn(
        'inline-flex items-center gap-1.5 rounded-2xl border border-zinc-200/90 bg-white/90 p-1.5 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/90 select-none transition-all',
        props.class
      )
    "
    @mouseleave="hoveredId = null"
  >
    <button
      v-for="item in props.items"
      :key="item.id"
      type="button"
      @mouseenter="hoveredId = item.id"
      @click="handleClick(item)"
      :class="[
        'group relative flex h-10 items-center justify-center rounded-xl px-3 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer active:scale-95 overflow-hidden',
        hoveredId === item.id
          ? 'bg-zinc-100 text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-white'
          : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200',
        confirmedId === item.id && 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
      ]"
    >
      <div class="flex items-center gap-2">
        <component
          :is="confirmedId === item.id ? Check : item.icon"
          class="h-4 w-4 shrink-0 transition-transform duration-200"
          :class="confirmedId === item.id ? 'text-emerald-500 scale-110' : 'group-hover:scale-110'"
        />

        <!-- 悬停平滑展开文字标签 -->
        <span
          :class="[
            'whitespace-nowrap text-xs font-semibold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
            hoveredId === item.id ? 'max-w-[100px] opacity-100 ml-1' : 'max-w-0 opacity-0 -ml-2',
          ]"
        >
          {{ confirmedId === item.id ? '已完成' : item.label }}
        </span>
      </div>
    </button>
  </div>
</template>
