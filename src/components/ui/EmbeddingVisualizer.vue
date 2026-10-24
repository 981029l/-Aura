<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'
import { Network, Sparkles, Search, Layers, RefreshCw } from 'lucide-vue-next'

export interface VectorPoint {
  id: string
  label: string
  category: 'code' | 'science' | 'ai' | 'philosophy'
  x: number // 0 ~ 100
  y: number // 0 ~ 100
}

export interface EmbeddingVisualizerProps {
  title?: string
  subtitle?: string
  class?: string
}

const props = withDefaults(defineProps<EmbeddingVisualizerProps>(), {
  title: '',
  subtitle: '',
})

const currentAlgorithm = ref<'tsne' | 'umap' | 'pca'>('tsne')
const searchQuery = ref('')
const hoveredPoint = ref<VectorPoint | null>(null)

const categoryColors = {
  code: { bg: 'bg-cyan-500', text: 'text-cyan-400', stroke: '#06b6d4', name: '编程' },
  science: { bg: 'bg-purple-500', text: 'text-purple-400', stroke: '#a855f7', name: '数学' },
  ai: { bg: 'bg-emerald-500', text: 'text-emerald-400', stroke: '#10b981', name: '人工智能' },
  philosophy: { bg: 'bg-amber-500', text: 'text-amber-400', stroke: '#f59e0b', name: '哲学' },
}

const points = ref<VectorPoint[]>([
  { id: 'p1', label: 'AST Node Tree', category: 'code', x: 22, y: 30 },
  { id: 'p2', label: 'Bytecode JIT', category: 'code', x: 28, y: 24 },
  { id: 'p3', label: 'WASM Runtime', category: 'code', x: 18, y: 38 },

  { id: 'p4', label: 'Eigenvalue Decomposition', category: 'science', x: 74, y: 26 },
  { id: 'p5', label: 'Fourier Transform', category: 'science', x: 82, y: 34 },
  { id: 'p6', label: 'Gaussian Curvature', category: 'science', x: 68, y: 38 },

  { id: 'p7', label: 'Flash Attention v3', category: 'ai', x: 34, y: 72 },
  { id: 'p8', label: 'MoE Dynamic Gating', category: 'ai', x: 26, y: 80 },
  { id: 'p9', label: 'RoPE Positional Bias', category: 'ai', x: 42, y: 78 },

  { id: 'p10', label: 'Epistemic Truth', category: 'philosophy', x: 78, y: 76 },
  { id: 'p11', label: 'Ontological Framing', category: 'philosophy', x: 86, y: 82 },
  { id: 'p12', label: 'Semantic Entailment', category: 'philosophy', x: 72, y: 88 },
])

const nearestNeighbors = computed(() => {
  if (!hoveredPoint.value) return []
  const cur = hoveredPoint.value
  return points.value
    .filter(p => p.id !== cur.id)
    .map(p => {
      const dist = Math.hypot(p.x - cur.x, p.y - cur.y)
      const similarity = Math.max(0.4, Number((1 - dist / 120).toFixed(3)))
      return { point: p, dist, similarity }
    })
    .sort((a, b) => a.dist - b.dist)
    .slice(0, 3)
})

function cycleAlgorithm() {
  if (currentAlgorithm.value === 'tsne') currentAlgorithm.value = 'umap'
  else if (currentAlgorithm.value === 'umap') currentAlgorithm.value = 'pca'
  else currentAlgorithm.value = 'tsne'

  // 微调散点位置模拟降维坐标平移
  points.value = points.value.map(p => ({
    ...p,
    x: Math.min(92, Math.max(8, p.x + (Math.random() - 0.5) * 8)),
    y: Math.min(92, Math.max(8, p.y + (Math.random() - 0.5) * 8)),
  }))
}
</script>

<template>
  <div :class="cn('w-full max-w-2xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6', props.class)">
    <!-- 头部指标栏 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-2.5">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
          <Network class="h-5 w-5" />
        </div>
        <div>
          <span class="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
            {{ props.title || '嵌入向量分布' }}
          </span>
          <span v-if="props.subtitle" class="text-xs text-zinc-400 font-mono">
            · {{ props.subtitle }}
          </span>
        </div>
      </div>

      <button
        type="button"
        @click="cycleAlgorithm"
        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-xs font-mono font-semibold text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
      >
        <RefreshCw class="h-3.5 w-3.5" />
        <span class="uppercase">算法: {{ currentAlgorithm }}</span>
      </button>
    </div>

    <!-- 向量散点投影舞台 -->
    <div class="relative h-80 rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden shadow-inner p-4">
      <!-- 极坐标网格底衬 -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div class="absolute left-1/2 inset-y-0 w-px bg-zinc-800/60 pointer-events-none" />
      <div class="absolute top-1/2 inset-x-0 h-px bg-zinc-800/60 pointer-events-none" />

      <!-- SVG 连线层 (最近邻余弦激光连线) -->
      <svg class="absolute inset-0 w-full h-full pointer-events-none">
        <template v-if="hoveredPoint">
          <line
            v-for="neighbor in nearestNeighbors"
            :key="neighbor.point.id"
            :x1="`${hoveredPoint.x}%`"
            :y1="`${hoveredPoint.y}%`"
            :x2="`${neighbor.point.x}%`"
            :y2="`${neighbor.point.y}%`"
            stroke="#a855f7"
            stroke-width="1.5"
            stroke-dasharray="4 2"
            opacity="0.8"
          />
        </template>
      </svg>

      <!-- 向量散点 -->
      <div
        v-for="p in points"
        :key="p.id"
        @mouseenter="hoveredPoint = p"
        @mouseleave="hoveredPoint = null"
        :class="[
          'absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 px-2 py-1 rounded-lg border transition-all duration-200 cursor-pointer backdrop-blur-md',
          hoveredPoint?.id === p.id
            ? 'scale-125 z-30 border-white bg-zinc-800 shadow-xl'
            : 'border-zinc-700/80 bg-zinc-900/80 shadow-md hover:scale-110'
        ]"
        :style="{ left: `${p.x}%`, top: `${p.y}%` }"
      >
        <span :class="['w-2 h-2 rounded-full', categoryColors[p.category].bg]" />
        <span class="text-[10px] font-mono font-bold text-white whitespace-nowrap">{{ p.label }}</span>
      </div>

      <!-- 悬停最近邻指标信息浮层 -->
      <div
        v-if="hoveredPoint"
        class="absolute bottom-3 left-3 bg-zinc-900/90 border border-zinc-700/80 rounded-xl p-3 text-[10px] font-mono text-zinc-300 pointer-events-none shadow-xl space-y-1 backdrop-blur-md"
      >
        <div class="flex items-center gap-1.5 text-purple-400 font-bold">
          <Sparkles class="h-3 w-3" />
          <span>当前文档：{{ hoveredPoint.label }}</span>
        </div>
        <div v-for="n in nearestNeighbors" :key="n.point.id" class="flex justify-between gap-4 text-zinc-400">
          <span>{{ n.point.label }}</span>
          <span class="text-emerald-400 font-bold">CosSim: {{ n.similarity }}</span>
        </div>
      </div>
    </div>

    <!-- 底部类目图例与搜索 -->
    <div class="flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
      <div class="flex flex-wrap items-center gap-3">
        <div v-for="(val, key) in categoryColors" :key="key" class="flex items-center gap-1.5">
          <span :class="['w-2.5 h-2.5 rounded-full', val.bg]" />
          <span class="text-zinc-500">{{ val.name }}</span>
        </div>
      </div>

      <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500">
        <Search class="h-3.5 w-3.5" />
        <input
          v-model="searchQuery"
          type="text"
          placeholder="输入关键词查找相近的文档..."
          class="bg-transparent border-none text-xs focus:outline-none w-36 text-zinc-800 dark:text-zinc-200 placeholder-zinc-400"
        />
        <Layers class="h-3 w-3 text-purple-500" />
      </div>
    </div>
  </div>
</template>
