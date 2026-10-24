<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { ArrowDown, RefreshCw, CheckCircle2, Sparkles, Smartphone } from 'lucide-vue-next'

export interface ElasticPullToRefreshProps {
  title?: string
  subtitle?: string
  class?: string
}

const props = withDefaults(defineProps<ElasticPullToRefreshProps>(), {
  title: '',
  subtitle: '',
})

const pullDistance = ref(0)
const isDragging = ref(false)
const isRefreshing = ref(false)
const isSuccess = ref(false)
let startY = 0

const THRESHOLD = 70
// 指示器（圆形图标 + 文字）的高度：空闲时整体藏在舞台顶部之外，下拉时从顶部滑出
const INDICATOR_HEIGHT = 64
// 刷新过程中指示器停留的位置，保证圆形图标与文字完整露出
const REFRESH_HOLD = 72

function handleMouseDown(e: MouseEvent) {
  if (isRefreshing.value) return
  isDragging.value = true
  startY = e.clientY
  isSuccess.value = false
}

function handleMouseMove(e: MouseEvent) {
  if (!isDragging.value || isRefreshing.value) return
  const delta = e.clientY - startY
  if (delta > 0) {
    // 非线性对数橡皮筋阻尼计算
    pullDistance.value = Math.min(110, Math.pow(delta, 0.85) * 1.8)
  }
}

function handleMouseUp() {
  if (!isDragging.value) return
  isDragging.value = false

  if (pullDistance.value >= THRESHOLD) {
    // 触发刷新
    isRefreshing.value = true
    pullDistance.value = REFRESH_HOLD

    setTimeout(() => {
      isRefreshing.value = false
      isSuccess.value = true
      setTimeout(() => {
        pullDistance.value = 0
        setTimeout(() => {
          isSuccess.value = false
        }, 400)
      }, 600)
    }, 1200)
  } else {
    // 回弹重置
    pullDistance.value = 0
  }
}
</script>

<template>
  <div :class="cn('w-full max-w-xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6', props.class)">
    <!-- 头部看板 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-2.5">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
          <Smartphone class="h-5 w-5" />
        </div>
        <div>
          <span class="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
            {{ props.title || '下拉刷新' }}
          </span>
          <span v-if="props.subtitle" class="text-xs text-zinc-400 font-mono">
            · {{ props.subtitle }}
          </span>
        </div>
      </div>

      <div class="flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400">
        <Sparkles class="h-3.5 w-3.5" />
        <span>阻力系数 0.85</span>
      </div>
    </div>

    <!-- 下拉互动舞台容器 -->
    <div
      class="relative rounded-2xl border border-zinc-200/80 bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-950 overflow-hidden shadow-inner flex flex-col items-center cursor-grab active:cursor-grabbing"
      @mousedown="handleMouseDown"
      @mousemove="handleMouseMove"
      @mouseup="handleMouseUp"
      @mouseleave="handleMouseUp"
    >
      <!-- 下拉阻尼指示器：空闲时藏在顶部之外，下拉时滑出，刷新完成后收回 -->
      <div
        :class="[
          'absolute top-0 z-20 flex flex-col items-center justify-center transition-[transform,opacity] ease-out pointer-events-none',
          isDragging ? 'duration-75' : 'duration-300',
          pullDistance === 0 && !isRefreshing && !isSuccess ? 'opacity-0' : 'opacity-100',
        ]"
        :style="{
          transform: `translateY(${pullDistance - INDICATOR_HEIGHT}px)`,
        }"
      >
        <div
          :class="[
            'w-10 h-10 rounded-full flex items-center justify-center shadow-lg border transition-all duration-200 backdrop-blur-md',
            isSuccess
              ? 'bg-emerald-500 text-white border-emerald-400'
              : pullDistance >= THRESHOLD
              ? 'bg-emerald-600 text-white border-emerald-500 scale-110'
              : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-200 border-zinc-200 dark:border-zinc-700'
          ]"
        >
          <CheckCircle2 v-if="isSuccess" class="h-5 w-5 animate-in zoom-in-75" />
          <RefreshCw v-else-if="isRefreshing" class="h-5 w-5 animate-spin" />
          <ArrowDown
            v-else
            :class="[
              'h-5 w-5 transition-transform duration-200',
              pullDistance >= THRESHOLD ? 'rotate-180' : 'rotate-0'
            ]"
          />
        </div>

        <span class="text-[10px] font-mono mt-1 text-zinc-400 font-bold">
          {{ isSuccess ? '已更新' : isRefreshing ? '正在刷新...' : pullDistance >= THRESHOLD ? '松手刷新' : '继续下拉' }}
        </span>
      </div>

      <!-- 正文卡片列表：四边留白一致；跟随下拉同步下移，为顶部指示器让出空间，避免遮挡第一张卡片 -->
      <div
        :class="[
          'w-full p-6 space-y-3 transition-transform ease-out',
          isDragging ? 'duration-75' : 'duration-300',
        ]"
        :style="{
          transform: `translateY(${pullDistance}px)`,
        }"
      >
        <div
          v-for="i in 3"
          :key="i"
          class="flex items-center justify-between p-3.5 rounded-xl border border-zinc-200/70 bg-white/90 dark:border-zinc-800/70 dark:bg-zinc-900/90 shadow-sm"
        >
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs font-mono">
              0{{ i }}
            </div>
            <div>
              <h5 class="text-xs font-bold text-zinc-800 dark:text-zinc-200">新消息 #00{{ i }}</h5>
              <p class="text-[10px] font-mono text-zinc-400">STATUS: ACTIVE · PULL TO RESYNC</p>
            </div>
          </div>
          <span class="w-2 h-2 rounded-full bg-emerald-500" />
        </div>
      </div>
    </div>

    <!-- 底部操作提示 -->
    <div class="flex items-center justify-between text-xs font-mono text-zinc-400">
      <span class="flex items-center gap-1">
        <ArrowDown class="h-3.5 w-3.5" />
        在列表上按住向下拉动即可刷新
      </span>
      <span class="text-emerald-600 dark:text-emerald-400 font-bold">松手后自动回弹</span>
    </div>
  </div>
</template>
