<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import {
  Activity,
  Database,
  Cpu,
  Server,
  Bell,
  BarChart3,
  Play,
  Pause,
} from 'lucide-vue-next'

export interface DataFlowProps {
  title?: string
  throughput?: number
  class?: string
}

const props = withDefaults(defineProps<DataFlowProps>(), {
  title: '数据管道',
  throughput: 24850,
})

const isPlaying = ref(true)
const liveThroughput = ref(props.throughput)

let timer: any = null

onMounted(() => {
  timer = setInterval(() => {
    if (isPlaying.value) {
      // 随机微波动 TPS
      const delta = Math.floor((Math.random() - 0.5) * 800)
      liveThroughput.value = Math.max(10000, liveThroughput.value + delta)
    }
  }, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

const sources = [
  { id: 'app', label: 'App Clients', sub: 'REST / gRPC', color: '#06b6d4' },
  { id: 'db', label: 'Postgres CDC', sub: 'WAL Streams', color: '#10b981' },
  { id: 'events', label: 'Kafka Topics', sub: 'Event Bus', color: '#8b5cf6' },
]

const destinations = [
  { id: 'warehouse', label: 'ClickHouse', sub: 'Cold Storage', color: '#3b82f6' },
  { id: 'dashboard', label: 'Realtime Dash', sub: 'WebSocket Sync', color: '#f59e0b' },
  { id: 'alerts', label: 'Anomaly Alert', sub: '1/3 Sampled', color: '#f43f5e' },
]
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
    <!-- 头部看板 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-5 dark:border-zinc-800/80">
      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <Activity class="h-4 w-4 text-blue-500" />
          <h3 class="text-sm font-bold text-zinc-900 dark:text-white">
            {{ props.title }}
          </h3>
        </div>
        <p class="text-xs text-zinc-500 font-mono">
          当前吞吐：{{ liveThroughput.toLocaleString() }} 条/秒 · 平均延迟约 1.4ms
        </p>
      </div>

      <button
        type="button"
        @click="isPlaying = !isPlaying"
        class="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors cursor-pointer active:scale-95"
      >
        <Pause v-if="isPlaying" class="h-3.5 w-3.5 text-amber-500" />
        <Play v-else class="h-3.5 w-3.5 text-emerald-500" />
        <span>{{ isPlaying ? '暂停流动' : '恢复流动' }}</span>
      </button>
    </div>

    <!-- 数据流向拓扑舞台 -->
    <div class="relative overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-950 p-6 min-h-[340px] flex items-center justify-between">
      <!-- 背景网格 -->
      <div
        class="absolute inset-0 opacity-15 pointer-events-none"
        style="
          background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px);
          background-size: 20px 20px;
        "
      />

      <!-- SVG 曲线流动管道与动态流动粒子 -->
      <svg class="absolute inset-0 h-full w-full pointer-events-none">
        <defs>
          <linearGradient id="streamGradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.3" />
            <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.8" />
          </linearGradient>
          <linearGradient id="streamGradRight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.8" />
            <stop offset="100%" stop-color="#10b981" stop-opacity="0.3" />
          </linearGradient>
        </defs>

        <!-- 左侧输入流曲线 -->
        <path
          d="M 120 70 C 260 70, 260 170, 400 170"
          fill="none"
          stroke="url(#streamGradLeft)"
          stroke-width="2"
          stroke-dasharray="6 4"
          :class="isPlaying && 'animate-dash-forward'"
        />
        <path
          d="M 120 170 C 260 170, 260 170, 400 170"
          fill="none"
          stroke="url(#streamGradLeft)"
          stroke-width="2"
          stroke-dasharray="6 4"
          :class="isPlaying && 'animate-dash-forward'"
        />
        <path
          d="M 120 270 C 260 270, 260 170, 400 170"
          fill="none"
          stroke="url(#streamGradLeft)"
          stroke-width="2"
          stroke-dasharray="6 4"
          :class="isPlaying && 'animate-dash-forward'"
        />

        <!-- 右侧输出流曲线 -->
        <path
          d="M 400 170 C 540 170, 540 70, 680 70"
          fill="none"
          stroke="url(#streamGradRight)"
          stroke-width="2"
          stroke-dasharray="6 4"
          :class="isPlaying && 'animate-dash-forward'"
        />
        <path
          d="M 400 170 C 540 170, 540 170, 680 170"
          fill="none"
          stroke="url(#streamGradRight)"
          stroke-width="2"
          stroke-dasharray="6 4"
          :class="isPlaying && 'animate-dash-forward'"
        />
        <path
          d="M 400 170 C 540 170, 540 270, 680 270"
          fill="none"
          stroke="url(#streamGradRight)"
          stroke-width="2"
          stroke-dasharray="6 4"
          :class="isPlaying && 'animate-dash-forward'"
        />
      </svg>

      <!-- 左侧源节点群 -->
      <div class="relative z-10 flex flex-col justify-around h-72 w-40 space-y-4">
        <div
          v-for="s in sources"
          :key="s.id"
          class="flex items-center gap-2.5 rounded-xl border border-zinc-800 bg-zinc-900/90 p-3 shadow-sm backdrop-blur-md"
        >
          <div
            class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
            :style="{ backgroundColor: `${s.color}20`, color: s.color }"
          >
            <Server class="h-3.5 w-3.5" />
          </div>
          <div class="truncate">
            <h4 class="text-xs font-bold text-white truncate">{{ s.label }}</h4>
            <p class="text-[10px] text-zinc-400 font-mono">{{ s.sub }}</p>
          </div>
        </div>
      </div>

      <!-- 中央流式处理引擎核心 -->
      <div class="relative z-10 flex flex-col items-center justify-center">
        <!-- 旋转光环 -->
        <div
          :class="[
            'relative flex h-28 w-28 items-center justify-center rounded-3xl border border-blue-500/50 bg-blue-500/10 backdrop-blur-xl shadow-xl shadow-blue-500/20',
            isPlaying && 'animate-pulse',
          ]"
        >
          <div class="absolute inset-0 rounded-3xl border border-dashed border-blue-400/40 animate-spin-slow" />
          
          <div class="flex flex-col items-center text-center p-2">
            <Cpu class="h-6 w-6 text-blue-400 mb-1" />
            <span class="font-mono text-xs font-black text-white">
              {{ (liveThroughput / 1000).toFixed(1) }}k
            </span>
            <span class="text-[9px] font-mono text-blue-300">TPS CORE</span>
          </div>
        </div>
      </div>

      <!-- 右侧目标汇节点群 -->
      <div class="relative z-10 flex flex-col justify-around h-72 w-40 space-y-4">
        <div
          v-for="d in destinations"
          :key="d.id"
          class="flex items-center gap-2.5 rounded-xl border border-zinc-800 bg-zinc-900/90 p-3 shadow-sm backdrop-blur-md"
        >
          <div
            class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
            :style="{ backgroundColor: `${d.color}20`, color: d.color }"
          >
            <Database v-if="d.id === 'warehouse'" class="h-3.5 w-3.5" />
            <BarChart3 v-else-if="d.id === 'dashboard'" class="h-3.5 w-3.5" />
            <Bell v-else class="h-3.5 w-3.5" />
          </div>
          <div class="truncate">
            <h4 class="text-xs font-bold text-white truncate">{{ d.label }}</h4>
            <p class="text-[10px] text-zinc-400 font-mono">{{ d.sub }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes dash-forward {
  to {
    stroke-dashoffset: -20;
  }
}

.animate-dash-forward {
  animation: dash-forward 0.6s linear infinite;
}

@keyframes spin-slow {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 12s linear infinite;
}
</style>
