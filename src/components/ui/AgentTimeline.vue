<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import {
  Clock,
  Coins,
  Cpu,
  Play,
  Pause,
  RotateCcw,
  Bot,
} from 'lucide-vue-next'

export interface TimelineSpan {
  id: string
  label: string
  type: 'thinking' | 'tool' | 'handoff'
  startSec: number
  durationSec: number
  details: string
}

export interface AgentLane {
  id: string
  name: string
  role: string
  spans: TimelineSpan[]
}

export interface AgentTimelineProps {
  totalDuration?: number
  totalTokens?: number
  totalCost?: number
  class?: string
}

const props = withDefaults(defineProps<AgentTimelineProps>(), {
  totalDuration: 12,
  totalTokens: 48250,
  totalCost: 0.042,
})

const isPlaying = ref(true)
const currentSec = ref(0)
const selectedSpan = ref<TimelineSpan | null>(null)

let rafId: number | null = null
let lastTime: number = performance.now()

const lanes: AgentLane[] = [
  {
    id: 'orchestrator',
    name: 'Main Orchestrator',
    role: '规划任务并分派给其他智能体',
    spans: [
      { id: 'o1', label: '分析需求', type: 'thinking', startSec: 0, durationSec: 2.2, details: '理解用户需求，拆成 3 个步骤' },
      { id: 'o2', label: '分派调研任务', type: 'handoff', startSec: 2.2, durationSec: 0.8, details: '把查阅现有代码的任务交给 Research 智能体' },
      { id: 'o3', label: '汇总并检查结果', type: 'thinking', startSec: 8.5, durationSec: 3.5, details: '检查生成的代码，确认满足需求' },
    ],
  },
  {
    id: 'researcher',
    name: 'Research Subagent',
    role: '查阅现有代码',
    spans: [
      { id: 'r1', label: '搜索代码', type: 'tool', startSec: 3.0, durationSec: 2.5, details: '查找相关组件和它们的 Props 定义' },
      { id: 'r2', label: '返回调研结果', type: 'handoff', startSec: 5.5, durationSec: 0.7, details: '把找到的文件和依赖关系交回给 Orchestrator' },
    ],
  },
  {
    id: 'coder',
    name: 'Coder Subagent',
    role: '编写代码',
    spans: [
      { id: 'c1', label: '生成组件代码', type: 'tool', startSec: 4.8, durationSec: 3.2, details: '编写新的 Vue 组件及其样式' },
      { id: 'c2', label: '类型检查与构建', type: 'tool', startSec: 8.0, durationSec: 2.8, details: '执行 vue-tsc 类型检查与 vite build，确认组件可正常编译' },
    ],
  },
]

selectedSpan.value = lanes[0].spans[0]

function tick(now: number) {
  if (isPlaying.value) {
    const dt = (now - lastTime) / 1000
    currentSec.value += dt * 1.5
    if (currentSec.value > props.totalDuration) {
      currentSec.value = 0
    }
  }
  lastTime = now
  rafId = requestAnimationFrame(tick)
}

onMounted(() => {
  lastTime = performance.now()
  rafId = requestAnimationFrame(tick)
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
})

function reset() {
  currentSec.value = 0
}

function selectSpan(span: TimelineSpan) {
  selectedSpan.value = span
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
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-100 pb-3 dark:border-zinc-800/80">
      <div class="flex items-center gap-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
        <Bot class="h-4 w-4 text-blue-500" />
        <span>调用时序与并发回放</span>
      </div>

      <!-- 运行时统计指标与回放按钮 -->
      <div class="flex flex-wrap items-center gap-3">
        <div class="flex items-center gap-2 rounded-lg border border-zinc-200/80 bg-zinc-50/70 px-3 py-1.5 font-mono text-[11px] dark:border-zinc-800 dark:bg-zinc-900/60">
          <span class="flex items-center gap-1 text-zinc-500">
            <Clock class="h-3 w-3" />
            <span>{{ currentSec.toFixed(1) }}s / {{ props.totalDuration }}s</span>
          </span>
          <span class="text-zinc-300 dark:text-zinc-700">|</span>
          <span class="flex items-center gap-1 text-zinc-500">
            <Cpu class="h-3 w-3" />
            <span>{{ (props.totalTokens / 1000).toFixed(1) }}k Tokens</span>
          </span>
          <span class="text-zinc-300 dark:text-zinc-700">|</span>
          <span class="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
            <Coins class="h-3 w-3" />
            <span>${{ props.totalCost.toFixed(3) }}</span>
          </span>
        </div>

        <div class="flex items-center gap-1">
          <button
            type="button"
            @click="isPlaying = !isPlaying"
            class="flex h-7 w-7 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer active:scale-95"
            :title="isPlaying ? '暂停' : '播放'"
          >
            <Pause v-if="isPlaying" class="h-3.5 w-3.5 text-amber-500" />
            <Play v-else class="h-3.5 w-3.5 text-emerald-500" />
          </button>
          <button
            type="button"
            @click="reset"
            class="flex h-7 w-7 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer active:scale-95"
            title="重置"
          >
            <RotateCcw class="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>

    <!-- 甘特图舞台与泳道 -->
    <div class="relative overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-4 dark:border-zinc-800/80 dark:bg-zinc-900/30">
      <!-- 顶部时间刻度尺 -->
      <div class="ml-44 relative h-6 border-b border-zinc-200/60 dark:border-zinc-800/60 font-mono text-[10px] text-zinc-400">
        <div
          v-for="sec in 13"
          :key="sec"
          class="absolute -translate-x-1/2 flex flex-col items-center"
          :style="{ left: `${((sec - 1) / props.totalDuration) * 100}%` }"
        >
          <span>{{ sec - 1 }}s</span>
          <span class="h-1.5 w-px bg-zinc-300 dark:bg-zinc-700" />
        </div>
      </div>

      <!-- 垂直播放头指示线 -->
      <div
        class="pointer-events-none absolute bottom-0 top-10 w-0.5 bg-blue-500 z-30 transition-all duration-75"
        :style="{ left: `calc(11rem + ${Math.min(100, (currentSec / props.totalDuration) * 100)}% * 0.74)` }"
      >
        <div class="absolute -top-1.5 -translate-x-1/2 h-3 w-3 rounded-full bg-blue-500 shadow-md shadow-blue-500/50" />
      </div>

      <!-- 泳道列表 -->
      <div class="mt-3 space-y-4">
        <div
          v-for="lane in lanes"
          :key="lane.id"
          class="flex items-center gap-4"
        >
          <!-- 泳道标签 (左侧 40) -->
          <div class="w-40 shrink-0">
            <h4 class="text-xs font-bold text-zinc-900 dark:text-white truncate">
              {{ lane.name }}
            </h4>
            <p class="text-[10px] text-zinc-400 truncate">{{ lane.role }}</p>
          </div>

          <!-- 时间轴跨度条容器 -->
          <div class="relative h-10 flex-1 rounded-lg border border-zinc-200/60 bg-white/70 dark:border-zinc-800/60 dark:bg-zinc-950/70 overflow-hidden">
            <div
              v-for="span in lane.spans"
              :key="span.id"
              @click="selectSpan(span)"
              :class="[
                'absolute top-1 bottom-1 rounded-md px-2 flex items-center text-[10px] font-mono font-bold transition-all cursor-pointer shadow-sm truncate',
                span.type === 'thinking'
                  ? 'border border-blue-500/30 bg-blue-500/20 text-blue-700 dark:text-blue-300'
                  : span.type === 'tool'
                    ? 'border border-emerald-500/30 bg-emerald-500/20 text-emerald-700 dark:text-emerald-300'
                    : 'border border-dashed border-amber-500/40 bg-amber-500/15 text-amber-700 dark:text-amber-300',
                selectedSpan?.id === span.id && 'ring-2 ring-blue-500 shadow-sm',
              ]"
              :style="{
                left: `${(span.startSec / props.totalDuration) * 100}%`,
                width: `${(span.durationSec / props.totalDuration) * 100}%`,
              }"
              :title="span.label"
            >
              <span class="truncate">{{ span.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部选中事件的详细分析面板 -->
    <div
      v-if="selectedSpan"
      class="rounded-xl border border-zinc-200/80 bg-zinc-50/70 p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-900/50 space-y-1.5"
    >
      <div class="flex items-center justify-between font-mono text-[11px]">
        <div class="flex items-center gap-2">
          <span
            :class="[
              'px-2 py-0.5 rounded-full font-bold uppercase text-[10px]',
              selectedSpan.type === 'thinking'
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
                : selectedSpan.type === 'tool'
                  ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'
                  : 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
            ]"
          >
            {{ selectedSpan.type }}
          </span>
          <span class="font-bold text-zinc-900 dark:text-white">{{ selectedSpan.label }}</span>
        </div>

        <span class="text-zinc-500">
          起点: {{ selectedSpan.startSec }}s · 持续: {{ selectedSpan.durationSec }}s
        </span>
      </div>

      <p class="text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
        {{ selectedSpan.details }}
      </p>
    </div>
  </div>
</template>
