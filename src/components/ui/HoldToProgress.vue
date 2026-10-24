<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { Flame, Sparkles, Check, RotateCcw, AlertTriangle } from 'lucide-vue-next'

export interface HoldToProgressProps {
  title?: string
  subtitle?: string
  actionLabel?: string
  class?: string
}

const props = withDefaults(defineProps<HoldToProgressProps>(), {
  title: '长按充能按钮',
  subtitle: '按住直到进度填满才会执行，中途松手即取消',
  actionLabel: '长按 2 秒删除备份',
})

const progress = ref(0)
const isHolding = ref(false)
const isCompleted = ref(false)
let holdTimer: number | null = null

function startHold() {
  if (isCompleted.value) return
  isHolding.value = true

  holdTimer = window.setInterval(() => {
    if (progress.value < 100) {
      progress.value += 2
    } else {
      completeAction()
    }
  }, 25)
}

function stopHold() {
  if (isCompleted.value) return
  isHolding.value = false
  if (holdTimer) {
    clearInterval(holdTimer)
    holdTimer = null
  }
  // 未完成前松手立即回弹泄压
  progress.value = 0
}

function completeAction() {
  if (holdTimer) {
    clearInterval(holdTimer)
    holdTimer = null
  }
  isHolding.value = false
  isCompleted.value = true
  progress.value = 100
}

function resetAction() {
  isCompleted.value = false
  progress.value = 0
}
</script>

<template>
  <div :class="cn('w-full max-w-xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6', props.class)">
    <!-- 头部看板 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-2.5">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400">
          <Flame class="h-5 w-5" />
        </div>
        <div>
          <h4 class="font-bold text-sm text-zinc-900 dark:text-white">
            {{ props.title }}
          </h4>
          <p class="text-xs text-zinc-400 font-mono">
            {{ props.subtitle }}
          </p>
        </div>
      </div>

      <div class="flex items-center gap-1.5 text-xs font-mono text-rose-500">
        <Sparkles class="h-3.5 w-3.5" />
        <span>防误触</span>
      </div>
    </div>

    <!-- 蓄力互动舞台 -->
    <div class="flex flex-col items-center justify-center py-6 space-y-5">
      <!-- 蓄力按钮核心主体 -->
      <button
        type="button"
        @mousedown="startHold"
        @mouseup="stopHold"
        @mouseleave="stopHold"
        @touchstart.prevent="startHold"
        @touchend.prevent="stopHold"
        :class="[
          'relative w-full max-w-md h-16 rounded-2xl overflow-hidden border font-mono font-bold text-sm transition-all duration-200 cursor-pointer select-none active:scale-[0.98] shadow-lg flex items-center justify-center',
          isCompleted
            ? 'bg-emerald-600 border-emerald-500 text-white'
            : isHolding
            ? 'bg-zinc-900 dark:bg-zinc-900 border-rose-500 text-white ring-4 ring-rose-500/20'
            : 'bg-zinc-900 dark:bg-zinc-900 hover:bg-zinc-800 border-zinc-700 text-white'
        ]"
      >
        <!-- 动态液态充能填充层 -->
        <div
          v-if="!isCompleted"
          class="absolute inset-y-0 left-0 bg-gradient-to-r from-rose-600 via-orange-500 to-amber-500 transition-all duration-75 ease-out opacity-80"
          :style="{ width: `${progress}%` }"
        />

        <!-- 前景文字与图标 -->
        <div class="relative z-10 flex items-center gap-2">
          <Check v-if="isCompleted" class="h-5 w-5 text-white" />
          <AlertTriangle v-else-if="isHolding" class="h-4 w-4 text-amber-300 animate-bounce" />
          <Flame v-else class="h-4 w-4 text-rose-400" />

          <span>
            {{ isCompleted ? '已删除' : isHolding ? `松手取消 · ${progress}%` : props.actionLabel }}
          </span>
        </div>
      </button>

      <!-- 重置操作 -->
      <button
        v-if="isCompleted"
        type="button"
        @click="resetAction"
        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
      >
        <RotateCcw class="h-3.5 w-3.5" />
        <span>重置</span>
      </button>

      <p class="text-xs font-mono text-zinc-400 text-center">
        按住直到 100% 才会执行，中途松手进度会回退
      </p>
    </div>
  </div>
</template>
