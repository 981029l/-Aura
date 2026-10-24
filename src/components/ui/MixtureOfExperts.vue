<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import {
  Share2,
  Cpu,
  ArrowRight,
  Play,
  Pause,
  Code,
  Calculator,
  Eye,
  BookOpen,
} from 'lucide-vue-next'

export interface ExpertItem {
  id: string
  name: string
  domain: string
  color: string
}

export interface MixtureOfExpertsProps {
  title?: string
  class?: string
}

const props = withDefaults(defineProps<MixtureOfExpertsProps>(), {
  title: '混合专家路由',
})

const tokens = ['const', 'computeAttention', 'matrixDot', 'tensor', 'optimize', 'yield']
const currentTokenIndex = ref(0)
const isAutoStreaming = ref(true)

const experts: ExpertItem[] = [
  { id: 'e1', name: 'Expert #1: Code', domain: '代码', color: '#06b6d4' },
  { id: 'e2', name: 'Expert #2: Math', domain: '数学', color: '#8b5cf6' },
  { id: 'e3', name: 'Expert #3: Vision', domain: '图像理解', color: '#10b981' },
  { id: 'e4', name: 'Expert #4: Language', domain: '语言与推理', color: '#f59e0b' },
]

// 模拟路由器针对不同 Token 的权重分配（选取 Top-2）
const tokenRouterWeights: Record<string, { top: string[]; weights: Record<string, number> }> = {
  const: { top: ['e1', 'e4'], weights: { e1: 0.72, e4: 0.28, e2: 0.0, e3: 0.0 } },
  computeAttention: { top: ['e1', 'e2'], weights: { e1: 0.58, e2: 0.42, e3: 0.0, e4: 0.0 } },
  matrixDot: { top: ['e2', 'e1'], weights: { e2: 0.81, e1: 0.19, e3: 0.0, e4: 0.0 } },
  tensor: { top: ['e2', 'e3'], weights: { e2: 0.64, e3: 0.36, e1: 0.0, e4: 0.0 } },
  optimize: { top: ['e1', 'e2'], weights: { e1: 0.51, e2: 0.49, e3: 0.0, e4: 0.0 } },
  yield: { top: ['e1', 'e4'], weights: { e1: 0.69, e4: 0.31, e2: 0.0, e3: 0.0 } },
}

let intervalId: any = null

onMounted(() => {
  intervalId = setInterval(() => {
    if (isAutoStreaming.value) {
      currentTokenIndex.value = (currentTokenIndex.value + 1) % tokens.length
    }
  }, 1600)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})

const currentToken = () => tokens[currentTokenIndex.value]
const currentRouting = () => tokenRouterWeights[currentToken()] || tokenRouterWeights.const

function nextToken() {
  currentTokenIndex.value = (currentTokenIndex.value + 1) % tokens.length
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
    <!-- 头部看板 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-5 dark:border-zinc-800/80">
      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <Share2 class="h-4 w-4 text-violet-500" />
          <h3 class="text-sm font-bold text-zinc-900 dark:text-white">
            {{ props.title }}
          </h3>
        </div>
        <p class="text-xs text-zinc-500 font-mono">
          路由器为每个 Token 计算各专家的权重，交给权重最高的 2 个专家处理
        </p>
      </div>

      <div class="flex items-center gap-2">
        <button
          type="button"
          @click="isAutoStreaming = !isAutoStreaming"
          class="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors cursor-pointer active:scale-95"
        >
          <Pause v-if="isAutoStreaming" class="h-3.5 w-3.5 text-amber-500" />
          <Play v-else class="h-3.5 w-3.5 text-emerald-500" />
          <span>{{ isAutoStreaming ? '暂停流动' : '自动流动' }}</span>
        </button>

        <button
          type="button"
          @click="nextToken"
          class="inline-flex items-center gap-1 rounded-lg bg-violet-600 hover:bg-violet-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-all active:scale-95 cursor-pointer"
        >
          <span>下一个 Token</span>
          <ArrowRight class="h-3.5 w-3.5" />
        </button>
      </div>
    </div>

    <!-- 拓扑分发舞台 -->
    <div class="relative overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-950 p-6 min-h-[320px] flex items-center justify-between">
      <!-- 背景网格 -->
      <div
        class="absolute inset-0 opacity-15 pointer-events-none"
        style="
          background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px);
          background-size: 20px 20px;
        "
      />

      <!-- 阶段 1: 当前输入 Token 脉冲锚点 (左侧) -->
      <div class="relative z-10 flex flex-col items-center gap-2 w-36">
        <span class="text-[10px] font-mono uppercase tracking-wider text-zinc-400">INPUT TOKEN</span>
        <div class="relative flex h-14 w-full items-center justify-center rounded-2xl border border-cyan-500/50 bg-cyan-500/10 px-3 py-2 text-center shadow-lg shadow-cyan-500/10 backdrop-blur-md">
          <span class="font-mono text-sm font-black text-cyan-300 truncate">
            "{{ currentToken() }}"
          </span>
        </div>
      </div>

      <!-- 阶段 2: 门控路由器 -->
      <div class="relative z-10 flex flex-col items-center gap-2">
        <span class="text-[10px] font-mono uppercase tracking-wider text-zinc-400">GATING ROUTER</span>
        <div class="relative flex h-24 w-24 flex-col items-center justify-center rounded-full border border-violet-500/60 bg-violet-500/15 p-2 shadow-xl shadow-violet-500/20 backdrop-blur-xl">
          <Cpu class="h-6 w-6 text-violet-400 animate-pulse mb-0.5" />
          <span class="font-mono text-[10px] font-bold text-violet-200">Softmax</span>
          <span class="text-[8px] font-mono text-violet-300">Top-2 Select</span>
        </div>
      </div>

      <!-- 阶段 3: 4 大混合专家列阵 -->
      <div class="relative z-10 flex flex-col gap-2.5 w-64">
        <span class="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1">
          SPARSE EXPERT LAYERS
        </span>

        <div
          v-for="e in experts"
          :key="e.id"
          :class="[
            'flex items-center justify-between rounded-xl border p-2.5 transition-all duration-300 backdrop-blur-md',
            currentRouting().top.includes(e.id)
              ? 'border-white/40 bg-zinc-900 shadow-md scale-[1.02] ring-1 ring-white/20'
              : 'border-zinc-800/80 bg-zinc-950/60 opacity-40',
          ]"
        >
          <div class="flex items-center gap-2.5 truncate">
            <div
              class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg"
              :style="{ backgroundColor: `${e.color}25`, color: e.color }"
            >
              <Code v-if="e.id === 'e1'" class="h-3.5 w-3.5" />
              <Calculator v-else-if="e.id === 'e2'" class="h-3.5 w-3.5" />
              <Eye v-else-if="e.id === 'e3'" class="h-3.5 w-3.5" />
              <BookOpen v-else class="h-3.5 w-3.5" />
            </div>

            <div class="truncate">
              <h5 class="text-[11px] font-bold text-white truncate">{{ e.name }}</h5>
              <p class="text-[9px] text-zinc-400 font-mono truncate">{{ e.domain }}</p>
            </div>
          </div>

          <!-- 激活权重徽标 -->
          <div v-if="currentRouting().top.includes(e.id)" class="ml-2 shrink-0">
            <span
              class="rounded-md px-1.5 py-0.5 font-mono text-[10px] font-black"
              :style="{ backgroundColor: `${e.color}30`, color: e.color }"
            >
              {{ ((currentRouting().weights[e.id] || 0) * 100).toFixed(0) }}%
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
