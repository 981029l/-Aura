<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import { ChevronRight, Check, RotateCcw, ShieldCheck, Sparkles } from 'lucide-vue-next'

interface Props {
  actionLabel?: string
  successLabel?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  actionLabel: '向右滑动确认付款',
  successLabel: '付款成功',
})

const emit = defineEmits<{
  (e: 'confirm'): void
  (e: 'reset'): void
}>()

const trackRef = ref<HTMLElement | null>(null)
const thumbRef = ref<HTMLElement | null>(null)

const dragX = ref(0)
const isDragging = ref(false)
const isConfirmed = ref(false)
const maxDragDistance = ref(280)

let startPointerX = 0
let startDragOffset = 0

// 实时计算滑动完成百分比 (0 ~ 1)
const progress = computed(() => {
  if (maxDragDistance.value <= 0) return 0
  return Math.min(1, Math.max(0, dragX.value / maxDragDistance.value))
})

const updateTrackBounds = () => {
  if (!trackRef.value) return
  const trackWidth = trackRef.value.clientWidth
  // 左右各 4px padding，滑块宽度 50px
  maxDragDistance.value = Math.max(80, trackWidth - 58)
}

const onPointerDown = (e: PointerEvent) => {
  if (isConfirmed.value) return
  isDragging.value = true
  startPointerX = e.clientX
  startDragOffset = dragX.value
  ;(e.currentTarget as HTMLElement)?.setPointerCapture(e.pointerId)
}

const onPointerMove = (e: PointerEvent) => {
  if (!isDragging.value) return
  const deltaX = e.clientX - startPointerX
  const targetX = startDragOffset + deltaX

  if (targetX < 0) {
    // 向左反向拖拽微弱弹性阻尼
    dragX.value = targetX * 0.18
  } else if (targetX > maxDragDistance.value) {
    // 超过最右侧时外力弹性溢出阻尼
    const overflow = targetX - maxDragDistance.value
    dragX.value = maxDragDistance.value + overflow * 0.2
  } else {
    // 正常跟随手指绝对跟手 1:1 位移
    dragX.value = targetX
  }
}

const onPointerUp = (e: PointerEvent) => {
  if (!isDragging.value) return
  isDragging.value = false
  try {
    ;(e.currentTarget as HTMLElement)?.releasePointerCapture(e.pointerId)
  } catch {
    // ignore
  }

  // 达到 88% 阈值视为触发吸附确认
  if (dragX.value >= maxDragDistance.value * 0.88) {
    confirmAction()
  } else {
    // 未达阈值，物理弹簧丝滑回弹到起始点
    dragX.value = 0
  }
}

const confirmAction = () => {
  isConfirmed.value = true
  dragX.value = maxDragDistance.value
  emit('confirm')
}

const reset = () => {
  isConfirmed.value = false
  dragX.value = 0
  emit('reset')
}

onMounted(() => {
  updateTrackBounds()
  window.addEventListener('resize', updateTrackBounds)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateTrackBounds)
})
</script>

<template>
  <div
    :class="
      cn(
        'relative w-full max-w-md mx-auto rounded-3xl p-6 overflow-hidden transition-all duration-300 border border-slate-200/90 dark:border-slate-800/80 bg-white dark:bg-slate-900 shadow-xl font-sans select-none space-y-5',
        props.class
      )
    "
  >
    <!-- 顶部状态指示栏 -->
    <div
      class="flex items-center justify-between pb-3.5 border-b border-slate-100 dark:border-slate-800 text-xs"
    >
      <div class="flex items-center gap-2">
        <div
          class="flex h-7 w-7 items-center justify-center rounded-lg"
          :class="
            isConfirmed
              ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
              : 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400'
          "
        >
          <ShieldCheck v-if="isConfirmed" class="w-4 h-4" />
          <Sparkles v-else class="w-4 h-4" />
        </div>
        <div>
          <span
            class="font-mono font-bold tracking-wider uppercase text-slate-800 dark:text-slate-200"
          >
            滑动确认
          </span>
        </div>
      </div>

      <!-- 成功状态下的重置按钮 -->
      <button
        v-if="isConfirmed"
        type="button"
        @click="reset"
        class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors cursor-pointer border border-transparent hover:border-emerald-500/20"
      >
        <RotateCcw class="w-3.5 h-3.5" />
        <span>重新滑动</span>
      </button>
      <span
        v-else
        class="text-[11px] font-mono text-slate-400 dark:text-slate-500"
      >
        滑到最右侧完成确认
      </span>
    </div>

    <!-- 核心滑动轨道 -->
    <div class="py-1">
      <div
        ref="trackRef"
        class="relative h-14 rounded-2xl p-1 flex items-center transition-colors duration-300 overflow-hidden"
        :class="
          isConfirmed
            ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20'
            : 'bg-slate-100 dark:bg-slate-950 border border-slate-200/90 dark:border-slate-800 text-slate-500 dark:text-slate-400'
        "
      >
        <!-- 1. 动态跟手绿色填充图层 (仅在向右拖拽时生长，初始未滑动时宽度为0，绝不提前透绿) -->
        <div
          v-if="!isConfirmed && dragX > 2"
          class="absolute left-0 top-0 bottom-0 bg-emerald-500/15 dark:bg-emerald-500/20 border-r border-emerald-500/30 pointer-events-none transition-all rounded-l-2xl"
          :class="{ 'transition-[width] duration-300 ease-out': !isDragging }"
          :style="{
            width: `${Math.max(0, dragX + 24)}px`,
          }"
        />

        <!-- 2. 滑动未完成时的居中文案 (随着滑块接近而柔和淡出与微移，避免遮挡) -->
        <div
          v-if="!isConfirmed"
          class="absolute inset-0 flex items-center justify-center text-xs font-semibold tracking-wider pointer-events-none transition-all duration-150"
          :style="{
            opacity: Math.max(0, 1 - progress * 1.6),
            transform: `translateX(${progress * 18}px)`,
          }"
        >
          <span class="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
            <span>{{ props.actionLabel }}</span>
            <span class="inline-block animate-pulse">»»</span>
          </span>
        </div>

        <!-- 3. 滑动成功完成后的优雅展示状态 (√ 与文字同行并列居中，彻底消除相互遮挡) -->
        <div
          v-else
          class="w-full flex items-center justify-center gap-2 text-sm font-bold text-white animate-confirm-pop"
        >
          <div
            class="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm"
          >
            <Check class="w-4 h-4 stroke-[3]" />
          </div>
          <span class="tracking-wide">{{ props.successLabel }}</span>
        </div>

        <!-- 4. 真正 1:1 跟手的物理滑块手柄 -->
        <div
          v-if="!isConfirmed"
          ref="thumbRef"
          @pointerdown="onPointerDown"
          @pointermove="onPointerMove"
          @pointerup="onPointerUp"
          @pointercancel="onPointerUp"
          class="absolute left-1 w-12 h-12 rounded-xl bg-white dark:bg-slate-800 shadow-md flex items-center justify-center cursor-grab active:cursor-grabbing touch-none border border-slate-200/90 dark:border-slate-700 z-10 select-none group"
          :class="{
            'transition-transform duration-300 cubic-bezier(0.18, 0.89, 0.32, 1.28)':
              !isDragging,
            'scale-105 shadow-xl shadow-emerald-500/15 border-emerald-500/40':
              isDragging,
          }"
          :style="{
            transform: `translateX(${dragX}px)`,
          }"
        >
          <ChevronRight
            class="w-5 h-5 transition-transform duration-200"
            :class="
              progress > 0.6
                ? 'text-emerald-500 translate-x-0.5'
                : 'text-slate-600 dark:text-slate-300'
            "
          />
        </div>
      </div>
    </div>

    <!-- 底部微交互反馈栏 -->
    <div
      class="flex items-center justify-between text-[11px] font-mono text-slate-400 dark:text-slate-500 pt-1 border-t border-slate-100 dark:border-slate-800"
    >
      <span>超过阈值后自动滑到底</span>
      <span
        class="font-semibold transition-colors"
        :class="isConfirmed ? 'text-emerald-500' : 'text-slate-400 dark:text-slate-500'"
      >
        {{ isConfirmed ? '已确认' : `进度: ${Math.round(progress * 100)}%` }}
      </span>
    </div>
  </div>
</template>

<style scoped>
@keyframes confirmPop {
  0% {
    opacity: 0;
    transform: scale(0.92);
  }
  60% {
    opacity: 1;
    transform: scale(1.03);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-confirm-pop {
  animation: confirmPop 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
