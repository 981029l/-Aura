<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import {
  Zap,
  Check,
  X,
  RotateCw,
  Gauge,
} from 'lucide-vue-next'

export interface SpeculativeBurst {
  id: number
  prefix: string
  draftTokens: { token: string; accepted: boolean }[]
  targetCorrection: string
}

export interface SpeculativeDecodingProps {
  title?: string
  class?: string
}

const props = withDefaults(defineProps<SpeculativeDecodingProps>(), {
  title: '',
})

const bursts: SpeculativeBurst[] = [
  {
    id: 1,
    prefix: '明天北京的天气',
    draftTokens: [
      { token: '以', accepted: true },
      { token: '晴为主', accepted: true },
      { token: '，最高', accepted: true },
      { token: '气温 30', accepted: false },
    ],
    targetCorrection: '气温 26',
  },
  {
    id: 2,
    prefix: '°C，傍晚',
    draftTokens: [
      { token: '可能', accepted: true },
      { token: '有小雨', accepted: true },
      { token: '，出门', accepted: true },
      { token: '记得带伞', accepted: true },
    ],
    targetCorrection: '',
  },
]

const activeBurstIndex = ref(0)
const isVerifying = ref(false)

const currentBurst = () => bursts[activeBurstIndex.value]

function triggerNextBurst() {
  isVerifying.value = true
  setTimeout(() => {
    isVerifying.value = false
    activeBurstIndex.value = (activeBurstIndex.value + 1) % bursts.length
  }, 400)
}
</script>

<template>
  <div
    :class="
      cn(
        'w-full max-w-4xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6',
        props.class
      )
    "
  >
    <!-- 头部指标与控制器 -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 pb-5 dark:border-zinc-800/80">
      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <Zap class="h-4 w-4 text-amber-500" />
          <span class="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
            {{ props.title || '推测解码' }}
          </span>
        </div>
      </div>

      <!-- 加速比统计指标 -->
      <div class="flex items-center gap-3">
        <div class="flex items-center gap-2 rounded-lg border border-zinc-200/80 bg-zinc-50/70 px-3 py-1.5 font-mono text-[11px] dark:border-zinc-800 dark:bg-zinc-900/60">
          <span class="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-black">
            <Gauge class="h-3.5 w-3.5" />
            <span>约 2.6 倍速</span>
          </span>
          <span class="text-zinc-300 dark:text-zinc-700">|</span>
          <span class="text-zinc-500">
            接受率: <strong class="text-zinc-800 dark:text-zinc-200">78.5%</strong>
          </span>
        </div>

        <button
          type="button"
          @click="triggerNextBurst"
          class="inline-flex items-center gap-1 rounded-lg bg-amber-600 hover:bg-amber-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-all active:scale-95 cursor-pointer"
        >
          <RotateCw :class="['h-3.5 w-3.5', isVerifying && 'animate-spin']" />
          <span>下一批</span>
        </button>
      </div>
    </div>

    <!-- 双模型推测与验证对比视窗 -->
    <div class="space-y-4">
      <!-- 阶段 1: 小模型草稿推测 -->
      <div class="rounded-xl border border-blue-500/30 bg-blue-500/5 p-4 dark:border-blue-500/20 space-y-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-blue-500 animate-ping" />
            <span class="font-mono text-xs font-bold text-blue-700 dark:text-blue-300">
              草稿模型
            </span>
          </div>
          <span class="font-mono text-[10px] text-blue-600/80 dark:text-blue-400/80">
            每批耗时 12ms
          </span>
        </div>

        <div class="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
          <span class="text-zinc-500">{{ currentBurst().prefix }}</span>
          <div
            v-for="(dt, idx) in currentBurst().draftTokens"
            :key="idx"
            class="flex items-center gap-1 rounded-lg border border-blue-400/30 bg-white/80 px-2 py-1 shadow-sm dark:bg-zinc-900"
          >
            <span class="font-bold text-blue-600 dark:text-blue-300">{{ dt.token }}</span>
            <span class="text-[9px] text-zinc-400 font-mono">T+{{ idx + 1 }}</span>
          </div>
        </div>
      </div>

      <!-- 阶段 2: 大模型并行验证与接受/拒绝判定 -->
      <div class="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4 dark:border-emerald-500/20 space-y-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-emerald-500" />
            <span class="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-300">
              目标模型
            </span>
          </div>
          <span class="font-mono text-[10px] text-emerald-600/80 dark:text-emerald-400/80">
            一次验证耗时 22ms
          </span>
        </div>

        <!-- 判定结果胶囊 -->
        <div class="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
          <div
            v-for="(dt, idx) in currentBurst().draftTokens"
            :key="idx"
            :class="[
              'flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-bold transition-all shadow-sm',
              dt.accepted
                ? 'border-emerald-500/50 bg-emerald-500/15 text-emerald-800 dark:text-emerald-200'
                : 'border-rose-500/50 bg-rose-500/15 text-rose-800 dark:text-rose-200 line-through',
            ]"
          >
            <Check v-if="dt.accepted" class="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
            <X v-else class="h-3.5 w-3.5 text-rose-600 dark:text-rose-400" />
            <span>{{ dt.token }}</span>
          </div>

          <!-- 发生拒绝时的主模型修正替换 -->
          <div
            v-if="currentBurst().targetCorrection"
            class="flex items-center gap-1.5 rounded-lg border border-purple-500/50 bg-purple-500/15 px-2.5 py-1 text-xs font-bold text-purple-800 dark:text-purple-200 shadow-sm"
          >
            <span>→ 改为：{{ currentBurst().targetCorrection }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
