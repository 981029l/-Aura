<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import {
  Pin,
  Archive,
  Trash2,
  ChevronRight,
  Mail,
} from 'lucide-vue-next'

export interface SwipeActionsProps {
  title?: string
  sender?: string
  snippet?: string
  time?: string
  class?: string
}

const props = withDefaults(defineProps<SwipeActionsProps>(), {
  title: 'Aura UI 组件版本更新公告',
  sender: 'Design Motion Team',
  snippet: '新版组件文档与示例代码已同步更新，欢迎体验并提出反馈...',
  time: '10:42 AM',
})

const emit = defineEmits<{
  (e: 'pin'): void
  (e: 'archive'): void
  (e: 'delete'): void
}>()

const offsetX = ref(0)
const isDragging = ref(false)
let startX = 0
let downX = 0
// 本次按下后是否发生了拖动：拖动松手后浏览器仍会补发 click，需要据此忽略，否则刚展开就被收起
let hasDragged = false
// 与底层三个按钮总宽度一致（w-14 + w-16 + w-16 = 184px），展开时按钮完整露出
const MAX_SWIPE = -184
const DRAG_THRESHOLD = 5

function handlePointerDown(e: PointerEvent) {
  isDragging.value = true
  hasDragged = false
  downX = e.clientX
  startX = e.clientX - offsetX.value
  ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
}

function handlePointerMove(e: PointerEvent) {
  if (!isDragging.value) return
  if (Math.abs(e.clientX - downX) > DRAG_THRESHOLD) hasDragged = true
  const currentX = e.clientX - startX
  // 限制左滑最大距离并添加右侧弹性阻尼
  if (currentX < 0) {
    offsetX.value = Math.max(MAX_SWIPE - 20, currentX)
  } else {
    offsetX.value = Math.min(20, currentX * 0.2)
  }
}

function handlePointerUp() {
  if (!isDragging.value) return
  isDragging.value = false
  // 阈值吸附判断
  if (offsetX.value < MAX_SWIPE / 2) {
    offsetX.value = MAX_SWIPE
  } else {
    offsetX.value = 0
  }
}

function resetSwipe() {
  offsetX.value = 0
}

// 单纯点击已展开的卡片时收起；拖动结束后补发的 click 直接忽略
function handleCardClick() {
  if (hasDragged) {
    hasDragged = false
    return
  }
  if (offsetX.value !== 0) resetSwipe()
}

function handlePin() {
  emit('pin')
  resetSwipe()
}

function handleArchive() {
  emit('archive')
  resetSwipe()
}

function handleDelete() {
  emit('delete')
  resetSwipe()
}
</script>

<template>
  <div
    :class="
      cn(
        'relative w-full max-w-xl overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/95 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none',
        props.class
      )
    "
  >
    <!-- 底层隐藏操作按钮组 -->
    <div class="absolute inset-y-0 right-0 flex items-stretch">
      <button
        type="button"
        @click="handlePin"
        class="flex w-14 items-center justify-center bg-amber-500 text-white hover:bg-amber-600 transition-colors cursor-pointer"
        title="置顶"
      >
        <Pin class="h-4 w-4" />
      </button>

      <button
        type="button"
        @click="handleArchive"
        class="flex w-16 items-center justify-center bg-blue-600 text-white hover:bg-blue-700 transition-colors cursor-pointer"
        title="归档"
      >
        <Archive class="h-4 w-4" />
      </button>

      <button
        type="button"
        @click="handleDelete"
        class="flex w-16 items-center justify-center bg-rose-600 text-white hover:bg-rose-700 transition-colors cursor-pointer"
        title="删除"
      >
        <Trash2 class="h-4 w-4" />
      </button>
    </div>

    <!-- 表层滑动内容卡片 -->
    <div
      @pointerdown="handlePointerDown"
      @pointermove="handlePointerMove"
      @pointerup="handlePointerUp"
      @pointercancel="handlePointerUp"
      @click="handleCardClick"
      :class="[
        'relative z-10 flex items-center justify-between p-4 bg-white dark:bg-zinc-900 cursor-grab active:cursor-grabbing transition-transform',
        !isDragging && 'duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
      ]"
      :style="{ transform: `translateX(${offsetX}px)` }"
    >
      <div class="flex items-center gap-3 overflow-hidden">
        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
          <Mail class="h-5 w-5" />
        </div>

        <div class="truncate">
          <div class="flex items-center gap-2">
            <h4 class="text-xs font-bold text-zinc-900 dark:text-white truncate">
              {{ props.title }}
            </h4>
            <span class="rounded bg-zinc-100 dark:bg-zinc-800 px-1.5 py-px font-mono text-[9px] text-zinc-400">
              {{ props.time }}
            </span>
          </div>
          <p class="text-[11px] text-zinc-500 truncate mt-0.5">
            <span class="font-semibold text-zinc-700 dark:text-zinc-300">{{ props.sender }}:</span>
            {{ props.snippet }}
          </p>
        </div>
      </div>

      <div class="flex items-center gap-1 text-zinc-400 text-xs shrink-0 ml-3 font-mono">
        <span class="text-[10px]">向左滑</span>
        <ChevronRight class="h-4 w-4" />
      </div>
    </div>
  </div>
</template>
