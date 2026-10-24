<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'
import {
  LayoutGrid,
  List,
  Columns,
  StretchHorizontal,
} from 'lucide-vue-next'

export interface FloatingButtonItem {
  id: string
  label: string
  icon?: any
}

export interface FloatingButtonGroupProps {
  modelValue?: string
  items?: FloatingButtonItem[]
  class?: string
}

const props = withDefaults(defineProps<FloatingButtonGroupProps>(), {
  modelValue: 'grid',
  items: () => [
    { id: 'grid', label: '网格', icon: LayoutGrid },
    { id: 'list', label: '列表', icon: List },
    { id: 'columns', label: '分栏', icon: Columns },
    { id: 'stream', label: '紧凑', icon: StretchHorizontal },
  ],
})

const emit = defineEmits<{
  (e: 'update:modelValue', id: string): void
  (e: 'change', item: FloatingButtonItem): void
}>()

const activeId = ref(props.modelValue)
const hoveredIndex = ref<number | null>(null)
const itemRefs = ref<(HTMLButtonElement | null)[]>([])

const activeIndex = computed(() => {
  return props.items.findIndex((item) => item.id === activeId.value)
})

function selectItem(item: FloatingButtonItem) {
  activeId.value = item.id
  emit('update:modelValue', item.id)
  emit('change', item)
}
</script>

<template>
  <div
    :class="
      cn(
        'relative inline-flex items-center gap-1 rounded-2xl border border-zinc-200/90 bg-white/90 p-1.5 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/90 select-none',
        props.class
      )
    "
    @mouseleave="hoveredIndex = null"
  >
    <!-- 悬停流体动态滑块背景 -->
    <div
      v-if="hoveredIndex !== null && itemRefs[hoveredIndex]"
      class="absolute top-1.5 bottom-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 transition-all duration-200 pointer-events-none"
      :style="{
        left: `${itemRefs[hoveredIndex]?.offsetLeft}px`,
        width: `${itemRefs[hoveredIndex]?.offsetWidth}px`,
      }"
    />

    <!-- 激活态固化底衬 -->
    <div
      v-if="activeIndex !== -1 && itemRefs[activeIndex]"
      class="absolute top-1.5 bottom-1.5 rounded-xl bg-white shadow-sm border border-zinc-200/60 dark:border-zinc-700/60 dark:bg-zinc-800 transition-all duration-300 pointer-events-none ease-[cubic-bezier(0.16,1,0.3,1)]"
      :style="{
        left: `${itemRefs[activeIndex]?.offsetLeft}px`,
        width: `${itemRefs[activeIndex]?.offsetWidth}px`,
      }"
    />

    <!-- 按钮项 -->
    <button
      v-for="(item, idx) in props.items"
      :key="item.id"
      :ref="(el) => (itemRefs[idx] = el as HTMLButtonElement)"
      type="button"
      @mouseenter="hoveredIndex = idx"
      @click="selectItem(item)"
      :class="[
        'relative z-10 flex h-9 items-center gap-2 rounded-xl px-3.5 text-xs font-semibold transition-colors duration-150 cursor-pointer active:scale-95',
        activeId === item.id
          ? 'text-zinc-900 dark:text-white font-bold'
          : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200',
      ]"
    >
      <component :is="item.icon" v-if="item.icon" class="h-4 w-4 shrink-0" />
      <span>{{ item.label }}</span>
    </button>
  </div>
</template>
