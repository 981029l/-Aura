<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { TrendingUp, TrendingDown, DollarSign, Activity } from 'lucide-vue-next'

export interface TickerItem {
  symbol: string
  price: string
  change: string
  isUp: boolean
}

export interface TextTickerProps {
  speed?: 'normal' | 'fast' | 'slow'
  class?: string
}

const props = withDefaults(defineProps<TextTickerProps>(), {
  speed: 'normal',
})

const tickers = ref<TickerItem[]>([
  { symbol: 'AURA / USD', price: '$88.42', change: '+18.6%', isUp: true },
  { symbol: 'GPU-H100 / HR', price: '$2.85', change: '-4.2%', isUp: false },
  { symbol: 'LLM-TOKEN / 1M', price: '$0.15', change: '+2.1%', isUp: true },
  { symbol: 'ANYCAST-LB', price: '99.99%', change: '+0.01%', isUp: true },
  { symbol: 'TPS-INDEX', price: '14,200', change: '+34.8%', isUp: true },
  { symbol: 'LATENCY-RTT', price: '1.2ms', change: '-12.0%', isUp: true },
])

const speedDurations = {
  slow: '35s',
  normal: '22s',
  fast: '12s',
}
</script>

<template>
  <div :class="cn('w-full max-w-2xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-4', props.class)">
    <!-- 头部指标栏 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800/80">
      <div class="flex items-center gap-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
        <Activity class="h-4 w-4 text-emerald-500" />
        <span>实时行情</span>
      </div>

      <div class="flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400">
        <DollarSign class="h-3.5 w-3.5" />
        <span>实时更新</span>
      </div>
    </div>

    <!-- 滚动跑马槽舞台 (左右双向渐变羽化) -->
    <div class="relative overflow-hidden py-3 group">
      <!-- 左右边缘渐变消隐遮罩 -->
      <div class="absolute left-0 inset-y-0 w-12 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none" />
      <div class="absolute right-0 inset-y-0 w-12 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none" />

      <!-- 双轨内容 -->
      <div
        class="flex gap-4 w-max animate-ticker group-hover:paused"
        :style="{ animationDuration: speedDurations[props.speed] }"
      >
        <!-- 轨道 1 + 轨道 2 (拼接实现无缝首尾相接) -->
        <template v-for="loop in 2" :key="loop">
          <div
            v-for="(item, idx) in tickers"
            :key="`${loop}-${idx}`"
            class="inline-flex items-center gap-3 px-4 py-2 rounded-xl border border-zinc-200/80 bg-zinc-50/70 dark:border-zinc-800/80 dark:bg-zinc-900/40 text-xs font-mono shadow-sm hover:scale-105 transition-transform cursor-pointer"
          >
            <span class="font-bold text-zinc-900 dark:text-white">{{ item.symbol }}</span>
            <span class="text-zinc-500 dark:text-zinc-400">{{ item.price }}</span>
            <span
              :class="[
                'flex items-center gap-0.5 px-1.5 py-0.5 rounded-md font-bold text-[10px]',
                item.isUp
                  ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                  : 'bg-rose-500/15 text-rose-600 dark:text-rose-400',
              ]"
            >
              <TrendingUp v-if="item.isUp" class="h-3 w-3" />
              <TrendingDown v-else class="h-3 w-3" />
              {{ item.change }}
            </span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes ticker {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-ticker {
  animation: ticker 22s linear infinite;
}

.group-hover\:paused:hover {
  animation-play-state: paused;
}
</style>
