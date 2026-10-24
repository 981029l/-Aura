<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'
import { Trophy, Sparkles, ArrowUpDown, Cpu, DollarSign } from 'lucide-vue-next'

export interface ModelBenchmarkItem {
  id: string
  name: string
  provider: string
  mmlu: number // 0 ~ 100
  coding: number // 0 ~ 100
  math: number // 0 ~ 100
  ifeval: number // 0 ~ 100
  price: string
  badge?: string
}

export interface ModelBenchmarkMatrixProps {
  title?: string
  subtitle?: string
  class?: string
}

const props = withDefaults(defineProps<ModelBenchmarkMatrixProps>(), {
  title: '模型评测对比',
  subtitle: '对比几个模型在代码、数学等测试中的得分（示例数据）',
})

const sortMetric = ref<'mmlu' | 'coding' | 'math' | 'ifeval'>('coding')

const models = ref<ModelBenchmarkItem[]>([
  {
    id: 'aura-omni',
    name: 'Model A (70B)',
    provider: '示例厂商 A',
    mmlu: 88.6,
    coding: 93.4,
    math: 82.5,
    ifeval: 89.2,
    price: '$0.35 / 1M',
    badge: 'STATE OF THE ART',
  },
  {
    id: 'gpt-4o',
    name: 'Model B',
    provider: '示例厂商 B',
    mmlu: 88.7,
    coding: 90.2,
    math: 76.6,
    ifeval: 87.5,
    price: '$2.50 / 1M',
  },
  {
    id: 'claude-35',
    name: 'Model C',
    provider: '示例厂商 C',
    mmlu: 88.3,
    coding: 92.0,
    math: 78.3,
    ifeval: 88.0,
    price: '$3.00 / 1M',
  },
  {
    id: 'gemini-15',
    name: 'Model D',
    provider: '示例厂商 D',
    mmlu: 85.9,
    coding: 84.1,
    math: 67.7,
    ifeval: 84.0,
    price: '$1.25 / 1M',
  },
  {
    id: 'llama-31',
    name: 'Model E (405B)',
    provider: '示例厂商 E',
    mmlu: 88.6,
    coding: 89.0,
    math: 73.8,
    ifeval: 88.6,
    price: '开源 / 自行部署',
  },
])

const sortedModels = computed(() => {
  return [...models.value].sort((a, b) => b[sortMetric.value] - a[sortMetric.value])
})

const metricLabels = [
  { key: 'coding', name: 'HumanEval (代码编程)' },
  { key: 'math', name: 'MATH (复杂数学)' },
  { key: 'mmlu', name: 'MMLU (通用知识)' },
  { key: 'ifeval', name: 'IFEval (指令遵循)' },
] as const
</script>

<template>
  <div :class="cn('w-full max-w-2xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6', props.class)">
    <!-- 头部看板 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-2.5">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
          <Trophy class="h-5 w-5" />
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

      <div class="flex items-center gap-1.5 text-xs font-mono text-amber-500">
        <Sparkles class="h-3.5 w-3.5" />
        <span>评测得分</span>
      </div>
    </div>

    <!-- 排序指标切换 Tabs -->
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div class="flex items-center gap-1 text-xs font-mono text-zinc-400">
        <ArrowUpDown class="h-3.5 w-3.5" />
        <span>排序依据：</span>
      </div>

      <div class="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-xs font-mono">
        <button
          v-for="m in metricLabels"
          :key="m.key"
          type="button"
          @click="sortMetric = m.key"
          :class="[
            'px-2.5 py-1 rounded-lg transition-all cursor-pointer font-semibold',
            sortMetric === m.key
              ? 'bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-white'
              : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'
          ]"
        >
          {{ m.name.split(' ')[0] }}
        </button>
      </div>
    </div>

    <!-- 模型榜单卡片列表 -->
    <div class="space-y-3">
      <div
        v-for="(m, idx) in sortedModels"
        :key="m.id"
        :class="[
          'relative p-4 rounded-xl border transition-all duration-200 backdrop-blur-md space-y-3',
          idx === 0
            ? 'border-amber-500/40 bg-amber-500/5 shadow-md ring-1 ring-amber-500/20'
            : 'border-zinc-200/80 bg-zinc-50/70 dark:border-zinc-800/80 dark:bg-zinc-900/40'
        ]"
      >
        <!-- 第一行: 模型名称与排名 -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <!-- 排名角标 -->
            <div
              :class="[
                'w-6 h-6 rounded-lg flex items-center justify-center font-mono font-bold text-xs',
                idx === 0
                  ? 'bg-amber-500 text-white shadow-sm'
                  : 'bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300'
              ]"
            >
              #{{ idx + 1 }}
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h5 class="text-xs font-bold text-zinc-900 dark:text-white">{{ m.name }}</h5>
                <span v-if="m.badge" class="px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white text-[9px] font-mono font-black tracking-wider shadow-sm">
                  {{ m.badge }}
                </span>
              </div>
              <p class="text-[10px] font-mono text-zinc-400">{{ m.provider }}</p>
            </div>
          </div>

          <div class="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
            <DollarSign class="h-3.5 w-3.5 text-emerald-500" />
            <span>{{ m.price }}</span>
          </div>
        </div>

        <!-- 第二行: 跑分进度条对比 -->
        <div class="space-y-1.5 pt-1">
          <div class="flex justify-between text-xs font-mono">
            <span class="text-zinc-400 flex items-center gap-1">
              <Cpu class="h-3 w-3" />
              <span>当前指标得分 ({{ sortMetric.toUpperCase() }})</span>
            </span>
            <span class="font-bold text-zinc-900 dark:text-white text-sm">
              {{ m[sortMetric] }}%
            </span>
          </div>

          <div class="w-full h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
            <div
              class="h-full rounded-full transition-all duration-500 ease-out"
              :class="idx === 0 ? 'bg-gradient-to-r from-amber-500 to-rose-500' : 'bg-indigo-600 dark:bg-indigo-500'"
              :style="{ width: `${m[sortMetric]}%` }"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
