<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import {
  RotateCw,
  Cpu,
  Search,
  CheckCircle2,
  Play,
  Pause,
  Bot,
  Terminal,
} from 'lucide-vue-next'

export interface AgentLoopProps {
  title?: string
  cycleCount?: number
  class?: string
}

const props = withDefaults(defineProps<AgentLoopProps>(), {
  title: '',
  cycleCount: 12,
})

const isPlaying = ref(true)
const currentStepIndex = ref(0)
const localCycle = ref(props.cycleCount)

const stations = [
  { id: 'context', name: '1. 观察', desc: '读取需求、代码和当前环境', icon: Search, color: '#06b6d4' },
  { id: 'plan', name: '2. 推理', desc: '拆分任务并决定下一步做什么', icon: Cpu, color: '#8b5cf6' },
  { id: 'action', name: '3. 执行', desc: '调用工具，修改文件或数据', icon: Terminal, color: '#3b82f6' },
  { id: 'verify', name: '4. 验证', desc: '运行测试，检查结果是否正确', icon: CheckCircle2, color: '#10b981' },
]

let intervalId: any = null

onMounted(() => {
  intervalId = setInterval(() => {
    if (isPlaying.value) {
      currentStepIndex.value = (currentStepIndex.value + 1) % stations.length
      if (currentStepIndex.value === 0) {
        localCycle.value += 1
      }
    }
  }, 1400)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
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
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 pb-5 dark:border-zinc-800/80">
      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <RotateCw :class="['h-4 w-4 text-cyan-500', isPlaying && 'animate-spin-slow']" />
          <span class="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
            {{ props.title || '智能体循环' }}
          </span>
        </div>
        <p class="text-xs text-zinc-500 font-mono">
          Observe -> Reason -> Act -> Verify 循环 · 已完成 {{ localCycle }} 轮
        </p>
      </div>

      <button
        type="button"
        @click="isPlaying = !isPlaying"
        class="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors cursor-pointer active:scale-95"
      >
        <Pause v-if="isPlaying" class="h-3.5 w-3.5 text-amber-500" />
        <Play v-else class="h-3.5 w-3.5 text-emerald-500" />
        <span>{{ isPlaying ? '暂停循环' : '继续循环' }}</span>
      </button>
    </div>

    <!-- 循环拓扑舞台 -->
    <div class="relative overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-950 p-6 min-h-[360px] flex items-center justify-center">
      <!-- 环形轨道 SVG -->
      <svg class="absolute inset-0 h-full w-full pointer-events-none">
        <circle
          cx="50%"
          cy="50%"
          r="130"
          fill="none"
          stroke="#38bdf8"
          stroke-width="2"
          stroke-dasharray="6 6"
          stroke-opacity="0.3"
          :class="isPlaying && 'animate-spin-orbit'"
        />
      </svg>

      <!-- 中心大脑核心 -->
      <div class="relative z-10 flex flex-col items-center justify-center">
        <div class="relative flex h-24 w-24 flex-col items-center justify-center rounded-full border border-cyan-500/60 bg-cyan-500/15 p-2 shadow-2xl shadow-cyan-500/30 backdrop-blur-xl animate-pulse">
          <Bot class="h-8 w-8 text-cyan-400 mb-0.5" />
          <span class="font-mono text-[10px] font-black text-white">REASONING</span>
          <span class="text-[8px] font-mono text-cyan-300">CORE</span>
        </div>
      </div>

      <!-- 4 大环形工作站 -->
      <!-- 顶部: Observe -->
      <div
        :class="[
          'absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-xl border px-3 py-2 transition-all duration-300 backdrop-blur-md',
          currentStepIndex === 0
            ? 'border-cyan-400 bg-cyan-500/20 shadow-lg shadow-cyan-500/20 scale-105 ring-2 ring-cyan-400/40'
            : 'border-zinc-800 bg-zinc-900/80 opacity-60',
        ]"
      >
        <Search class="h-4 w-4 text-cyan-400 shrink-0" />
        <div class="text-left">
          <h4 class="text-xs font-bold text-white leading-tight">1. Observe 观察</h4>
          <p class="text-[9px] text-zinc-400 font-mono">读取需求与环境</p>
        </div>
      </div>

      <!-- 右侧: Reason -->
      <div
        :class="[
          'absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2 rounded-xl border px-3 py-2 transition-all duration-300 backdrop-blur-md',
          currentStepIndex === 1
            ? 'border-violet-400 bg-violet-500/20 shadow-lg shadow-violet-500/20 scale-105 ring-2 ring-violet-400/40'
            : 'border-zinc-800 bg-zinc-900/80 opacity-60',
        ]"
      >
        <Cpu class="h-4 w-4 text-violet-400 shrink-0" />
        <div class="text-left">
          <h4 class="text-xs font-bold text-white leading-tight">2. Reason 推理</h4>
          <p class="text-[9px] text-zinc-400 font-mono">拆分任务</p>
        </div>
      </div>

      <!-- 底部: Act -->
      <div
        :class="[
          'absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-xl border px-3 py-2 transition-all duration-300 backdrop-blur-md',
          currentStepIndex === 2
            ? 'border-blue-400 bg-blue-500/20 shadow-lg shadow-blue-500/20 scale-105 ring-2 ring-blue-400/40'
            : 'border-zinc-800 bg-zinc-900/80 opacity-60',
        ]"
      >
        <Terminal class="h-4 w-4 text-blue-400 shrink-0" />
        <div class="text-left">
          <h4 class="text-xs font-bold text-white leading-tight">3. Act 执行</h4>
          <p class="text-[9px] text-zinc-400 font-mono">调用工具</p>
        </div>
      </div>

      <!-- 左侧: Verify -->
      <div
        :class="[
          'absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-2 rounded-xl border px-3 py-2 transition-all duration-300 backdrop-blur-md',
          currentStepIndex === 3
            ? 'border-emerald-400 bg-emerald-500/20 shadow-lg shadow-emerald-500/20 scale-105 ring-2 ring-emerald-400/40'
            : 'border-zinc-800 bg-zinc-900/80 opacity-60',
        ]"
      >
        <CheckCircle2 class="h-4 w-4 text-emerald-400 shrink-0" />
        <div class="text-left">
          <h4 class="text-xs font-bold text-white leading-tight">4. Verify 验证</h4>
          <p class="text-[9px] text-zinc-400 font-mono">检查结果</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes spin-orbit {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-orbit {
  transform-origin: center;
  animation: spin-orbit 16s linear infinite;
}

@keyframes spin-slow {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}
</style>
