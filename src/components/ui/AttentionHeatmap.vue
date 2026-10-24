<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'
import { Eye, Sparkles, Layers, Sliders } from 'lucide-vue-next'

export interface AttentionHeatmapProps {
  title?: string
  subtitle?: string
  class?: string
}

const props = withDefaults(defineProps<AttentionHeatmapProps>(), {
  title: '',
  subtitle: '',
})

const tokens = ['The', 'neural', 'agent', 'solved', 'the', 'puzzle']
const activeHead = ref(1)
const hoveredCell = ref<{ row: number; col: number; val: number } | null>(null)

// 4 组不同头部的注意力权重分布矩阵
const headMatrices: Record<number, number[][]> = {
  1: [
    [0.62, 0.18, 0.10, 0.04, 0.03, 0.03],
    [0.15, 0.58, 0.19, 0.05, 0.02, 0.01],
    [0.08, 0.22, 0.54, 0.12, 0.02, 0.02],
    [0.02, 0.04, 0.38, 0.42, 0.08, 0.06],
    [0.01, 0.02, 0.05, 0.11, 0.52, 0.29],
    [0.02, 0.01, 0.14, 0.48, 0.12, 0.23],
  ],
  2: [
    [0.85, 0.05, 0.03, 0.03, 0.02, 0.02],
    [0.04, 0.81, 0.07, 0.04, 0.02, 0.02],
    [0.02, 0.06, 0.79, 0.08, 0.03, 0.02],
    [0.01, 0.03, 0.12, 0.76, 0.05, 0.03],
    [0.02, 0.02, 0.04, 0.06, 0.82, 0.04],
    [0.01, 0.02, 0.05, 0.22, 0.08, 0.62],
  ],
  3: [
    [0.16, 0.16, 0.17, 0.17, 0.17, 0.17],
    [0.05, 0.25, 0.45, 0.15, 0.05, 0.05],
    [0.12, 0.18, 0.22, 0.35, 0.08, 0.05],
    [0.28, 0.12, 0.15, 0.25, 0.10, 0.10],
    [0.05, 0.05, 0.10, 0.20, 0.30, 0.30],
    [0.35, 0.10, 0.15, 0.20, 0.10, 0.10],
  ],
  4: [
    [0.45, 0.35, 0.10, 0.05, 0.03, 0.02],
    [0.10, 0.42, 0.38, 0.06, 0.02, 0.02],
    [0.02, 0.08, 0.46, 0.39, 0.03, 0.02],
    [0.01, 0.02, 0.09, 0.52, 0.31, 0.05],
    [0.01, 0.01, 0.03, 0.12, 0.48, 0.35],
    [0.02, 0.02, 0.05, 0.15, 0.26, 0.50],
  ],
}

const currentMatrix = computed(() => headMatrices[activeHead.value])

const headLabels = [
  { id: 1, name: 'Head #1: 关注相邻词' },
  { id: 2, name: 'Head #2: 关注自身' },
  { id: 3, name: 'Head #3: 指代关系' },
  { id: 4, name: 'Head #4: 动词和宾语' },
]

function getCellColor(val: number) {
  // 从淡紫到极光靛蓝深色
  const opacity = Math.max(0.08, val)
  return {
    backgroundColor: `rgba(99, 102, 241, ${opacity})`,
    color: val > 0.4 ? '#ffffff' : 'inherit',
  }
}
</script>

<template>
  <div :class="cn('w-full max-w-2xl rounded-2xl border border-zinc-200/90 bg-white/95 p-5 sm:p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-4', props.class)">
    <!-- 头部指标栏 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-2.5">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
          <Eye class="h-5 w-5" />
        </div>
        <div>
          <span class="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
            {{ props.title || '注意力热力图' }}
          </span>
          <span v-if="props.subtitle" class="text-xs text-zinc-400 font-mono">
            · {{ props.subtitle }}
          </span>
        </div>
      </div>

      <div class="flex items-center gap-1.5 text-xs font-mono text-indigo-600 dark:text-indigo-400">
        <Sparkles class="h-3.5 w-3.5" />
        <span>已归一化</span>
      </div>
    </div>

    <!-- 多头选择器 Tabs -->
    <div class="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-xs font-mono">
      <button
        v-for="h in headLabels"
        :key="h.id"
        type="button"
        @click="activeHead = h.id"
        :class="[
          'px-2.5 py-1.5 rounded-lg transition-all cursor-pointer font-semibold',
          activeHead === h.id
            ? 'bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-white'
            : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'
        ]"
      >
        {{ h.name.split(':')[0] }}
      </button>
    </div>

    <!-- 热力图矩阵舞台 -->
    <div class="relative rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-5 dark:border-zinc-800/80 dark:bg-zinc-900/40 space-y-3">
      <!-- 顶部 Key Tokens 标签行 -->
      <div class="flex items-center pl-16 pr-2">
        <div
          v-for="(t, colIdx) in tokens"
          :key="colIdx"
          :class="[
            'flex-1 text-center text-[10px] font-mono font-bold transition-colors truncate px-0.5',
            hoveredCell?.col === colIdx ? 'text-indigo-600 dark:text-indigo-400 scale-105' : 'text-zinc-400'
          ]"
        >
          {{ t }}
        </div>
      </div>

      <!-- 矩阵主体 (每行附带 Query Token) -->
      <div class="space-y-1.5">
        <div
          v-for="(rowTokens, rowIdx) in currentMatrix"
          :key="rowIdx"
          class="flex items-center gap-2"
        >
          <!-- 行首 Query Token -->
          <div
            :class="[
              'w-14 text-right text-[10px] font-mono font-bold transition-colors truncate',
              hoveredCell?.row === rowIdx ? 'text-indigo-600 dark:text-indigo-400 scale-105' : 'text-zinc-400'
            ]"
          >
            {{ tokens[rowIdx] }}
          </div>

          <!-- 6 个格子 -->
          <div class="flex-1 grid grid-cols-6 gap-1.5">
            <div
              v-for="(val, colIdx) in rowTokens"
              :key="colIdx"
              @mouseenter="hoveredCell = { row: rowIdx, col: colIdx, val }"
              @mouseleave="hoveredCell = null"
              :class="[
                'h-9 rounded-lg flex items-center justify-center text-[10px] font-mono font-bold transition-all duration-150 cursor-pointer border border-white/20 dark:border-zinc-700/40',
                hoveredCell?.row === rowIdx || hoveredCell?.col === colIdx
                  ? 'ring-2 ring-indigo-500 scale-105 z-10'
                  : 'hover:scale-[1.02]'
              ]"
              :style="getCellColor(val)"
            >
              {{ val.toFixed(2) }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部探针指示器 -->
    <div class="flex items-center justify-between text-xs font-mono text-zinc-500 pt-1">
      <div v-if="hoveredCell" class="flex items-center gap-2">
        <Sliders class="h-3.5 w-3.5 text-indigo-500" />
        <span>
          Query: <strong class="text-zinc-900 dark:text-white">[{{ tokens[hoveredCell.row] }}]</strong>
          × Key: <strong class="text-zinc-900 dark:text-white">[{{ tokens[hoveredCell.col] }}]</strong>
          = 权重 <strong class="text-indigo-600 dark:text-indigo-400">{{ hoveredCell.val.toFixed(3) }}</strong>
        </span>
      </div>
      <div v-else class="flex items-center gap-1.5 text-zinc-400 text-[11px]">
        <Layers class="h-3 w-3" />
        <span>把鼠标移到格子上查看两个 Token 之间的注意力权重</span>
      </div>

      <span class="text-[10px] text-zinc-400">Dim: 6×6 Tokens</span>
    </div>
  </div>
</template>
