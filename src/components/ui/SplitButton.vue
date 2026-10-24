<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import { Check, ChevronDown, Rocket } from 'lucide-vue-next'

export interface SplitMenuItem {
  id: string | number
  label: string
  icon?: any
  description?: string
  onClick?: () => void
}

interface SplitButtonProps {
  label?: string
  icon?: any
  items?: SplitMenuItem[]
  /** 当前主按钮对应的菜单项 id，null 表示默认操作（label）；支持 v-model */
  modelValue?: string | number | null
  variant?: 'primary' | 'secondary' | 'dark'
  class?: string
}

const props = withDefaults(defineProps<SplitButtonProps>(), {
  label: '立即发布',
  icon: Rocket,
  variant: 'primary',
  items: () => [
    { id: 'preview', label: '发布到预览环境', description: '生成一个可以分享的预览链接' },
    { id: 'draft', label: '保存为草稿快照', description: '只有团队成员可见' },
    { id: 'schedule', label: '定时发布', description: '到设定的时间自动发布' },
  ],
})

const emit = defineEmits<{
  (e: 'update:modelValue', id: string | number | null): void
  /** 点击主按钮：执行当前操作，item 为 null 表示默认操作 */
  (e: 'primaryClick', item: SplitMenuItem | null): void
  /** 在下拉中切换了主按钮对应的操作 */
  (e: 'select', item: SplitMenuItem | null): void
}>()

const isOpen = ref(false)
const containerRef = ref<HTMLDivElement | null>(null)

// 当前选中项：未绑定 v-model 时由组件内部维护
const selectedId = ref<string | number | null>(props.modelValue ?? null)

watch(
  () => props.modelValue,
  (val) => {
    if (val !== undefined) selectedId.value = val
  }
)

// 下拉第一项为默认操作（label + icon），选中其它项后可随时切回
const DEFAULT_ID = Symbol('default')
const menuItems = computed(() => [
  { key: DEFAULT_ID, id: null, label: props.label, description: '默认操作', item: null as SplitMenuItem | null },
  ...props.items.map((item) => ({ key: item.id, id: item.id, label: item.label, description: item.description, item })),
])

const activeItem = computed(() => props.items.find((item) => item.id === selectedId.value) ?? null)
const activeLabel = computed(() => activeItem.value?.label ?? props.label)
const activeIcon = computed(() => activeItem.value?.icon ?? props.icon)

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

function handlePrimary() {
  emit('primaryClick', activeItem.value)
  activeItem.value?.onClick?.()
}

function handleSelect(id: string | number | null, item: SplitMenuItem | null) {
  isOpen.value = false
  selectedId.value = id
  emit('update:modelValue', id)
  emit('select', item)
}

function handleClickOutside(e: MouseEvent) {
  if (containerRef.value && !containerRef.value.contains(e.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div ref="containerRef" :class="cn('relative inline-flex items-center select-none', props.class)">
    <!-- 组合按钮表面 -->
    <div
      :class="[
        'flex h-10 items-stretch overflow-hidden rounded-xl border shadow-sm transition-all duration-200',
        props.variant === 'primary' && 'border-blue-600 bg-blue-600 text-white hover:bg-blue-500',
        props.variant === 'secondary' && 'border-zinc-200/80 bg-white/90 text-zinc-800 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-200 dark:hover:bg-zinc-800',
      ]"
    >
      <!-- 左侧：主要行动按钮 -->
      <button
        type="button"
        @click="handlePrimary"
        class="flex items-center gap-2 px-4 text-xs sm:text-sm font-semibold transition-transform active:scale-95 cursor-pointer"
      >
        <component :is="activeIcon" class="h-4 w-4" />
        <span>{{ activeLabel }}</span>
      </button>

      <!-- 中间：发丝微光分割线 -->
      <div
        :class="[
          'w-px self-stretch',
          props.variant === 'primary' ? 'bg-blue-400/50' : 'bg-zinc-200 dark:bg-zinc-800',
        ]"
      />

      <!-- 右侧：下拉伴随展开操作按钮 -->
      <button
        type="button"
        @click.stop="toggleDropdown"
        class="flex items-center justify-center px-2.5 transition-colors hover:bg-black/10 active:scale-95 cursor-pointer dark:hover:bg-white/10"
        title="切换操作"
        aria-haspopup="menu"
        :aria-expanded="isOpen"
      >
        <ChevronDown
          :class="[
            'h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]',
            isOpen && 'rotate-180',
          ]"
        />
      </button>
    </div>

    <!-- 展开的悬浮菜单卡片 -->
    <transition name="split-menu">
      <div
        v-if="isOpen"
        role="menu"
        class="aura-popover popover-shadow absolute top-full left-0 mt-2 w-64 rounded-xl border border-zinc-200/80 bg-white/95 p-1.5 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 space-y-1"
      >
        <button
          v-for="entry in menuItems"
          :key="entry.key"
          type="button"
          role="menuitemradio"
          :aria-checked="entry.id === selectedId"
          @click="handleSelect(entry.id, entry.item)"
          class="flex w-full items-start gap-2 rounded-lg px-3 py-2 text-left transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
        >
          <!-- 勾选标记：始终占位，保证各项文字左对齐 -->
          <Check
            :class="[
              'mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600 dark:text-blue-400 transition-opacity',
              entry.id === selectedId ? 'opacity-100' : 'opacity-0',
            ]"
          />
          <span class="flex flex-col">
            <span class="text-xs font-semibold text-zinc-900 dark:text-zinc-100">{{ entry.label }}</span>
            <span v-if="entry.description" class="text-[10px] text-zinc-400 mt-0.5">{{ entry.description }}</span>
          </span>
        </button>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.popover-shadow {
  box-shadow: var(--shadow-popover, 0 0 0 1px rgba(0, 0, 0, 0.05), 0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 12px 24px -4px rgba(0, 0, 0, 0.08), 0 24px 38px -8px rgba(0, 0, 0, 0.04));
}
:global(.dark) .popover-shadow {
  box-shadow: var(--shadow-popover, 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 8px -2px rgba(0, 0, 0, 0.5), 0 12px 24px -4px rgba(0, 0, 0, 0.6), 0 24px 48px -8px rgba(0, 0, 0, 0.8));
}

button:focus {
  outline: none !important;
}

.split-menu-enter-active {
  transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: top left;
}
.split-menu-leave-active {
  transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1),
              transform 0.15s cubic-bezier(0.4, 0, 1, 1);
  transform-origin: top left;
}
.split-menu-enter-from,
.split-menu-leave-to {
  opacity: 0;
  transform: scale(0.96) translateY(-4px);
}
</style>
