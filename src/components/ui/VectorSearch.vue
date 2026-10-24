<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'
import {
  Search,
  Crosshair,
} from 'lucide-vue-next'

export interface VectorDoc {
  id: string
  title: string
  category: string
  x: number // 百分比坐标 0 - 100
  y: number // 百分比坐标 0 - 100
  score: number // 余弦相似度 0 - 1
  color: string
}

export interface VectorSearchProps {
  title?: string
  placeholder?: string
  class?: string
}

const props = withDefaults(defineProps<VectorSearchProps>(), {
  title: '',
  placeholder: '输入问题，例如 "如何让动画更流畅"',
})

const queryText = ref('如何让动画更流畅')
const isSearching = ref(false)

const documents = ref<VectorDoc[]>([
  { id: '1', title: '用 transform 和 opacity 做动画', category: 'Architecture', x: 42, y: 38, score: 0.95, color: '#3b82f6' },
  { id: '2', title: 'Canvas 粒子动画的性能优化', category: 'Architecture', x: 50, y: 32, score: 0.91, color: '#3b82f6' },
  { id: '3', title: 'Vue 3 响应式更新的时机', category: 'Architecture', x: 35, y: 46, score: 0.86, color: '#3b82f6' },
  { id: '4', title: '用 pgvector 存储向量', category: 'Database', x: 75, y: 65, score: 0.62, color: '#10b981' },
  { id: '5', title: 'Raft 共识算法入门', category: 'Database', x: 82, y: 72, score: 0.48, color: '#10b981' },
  { id: '6', title: 'HNSW 索引原理', category: 'Database', x: 70, y: 78, score: 0.54, color: '#10b981' },
  { id: '7', title: 'OAuth2 登录流程', category: 'Security', x: 20, y: 75, score: 0.35, color: '#8b5cf6' },
  { id: '8', title: '圆角与阴影的设计规范', category: 'Design', x: 60, y: 20, score: 0.73, color: '#f59e0b' },
])

// 查询点在嵌入平面的映射坐标
const queryPoint = ref({ x: 45, y: 36 })

const topKResults = computed(() => {
  return [...documents.value]
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
})

function handleSearch() {
  isSearching.value = true
  setTimeout(() => {
    isSearching.value = false
  }, 600)
}
</script>

<template>
  <div
    :class="
      cn(
        'w-full max-w-3xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6',
        props.class
      )
    "
  >
    <!-- 头部搜索输入框与标题 -->
    <div class="space-y-4 border-b border-zinc-100 pb-5 dark:border-zinc-800/80">
      <div class="flex items-center gap-2">
        <Crosshair class="h-4 w-4 text-blue-500" />
        <span class="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
          {{ props.title || '向量检索' }}
        </span>
      </div>

      <!-- 搜索输入框 -->
      <div class="relative flex items-center">
        <Search class="absolute left-3.5 h-4 w-4 text-zinc-400" />
        <input
          v-model="queryText"
          type="text"
          :placeholder="props.placeholder"
          @keydown.enter="handleSearch"
          class="w-full rounded-xl border border-zinc-200 bg-zinc-50/70 py-2.5 pl-10 pr-24 text-xs font-medium text-zinc-800 placeholder-zinc-400 transition-all focus:border-zinc-300 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-200 dark:focus:border-zinc-700 dark:focus:bg-zinc-900"
        />
        <button
          type="button"
          @click="handleSearch"
          class="absolute right-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors cursor-pointer"
        >
          嵌入检索
        </button>
      </div>
    </div>

    <!-- 2.5D 向量平面与拓扑连线 -->
    <div class="relative overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-900 p-6 min-h-[300px] flex items-center justify-center">
      <!-- 倾斜网格背景 -->
      <div
        class="absolute inset-0 opacity-20 pointer-events-none"
        style="
          background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px);
          background-size: 24px 24px;
        "
      />

      <!-- SVG 拓扑连线层 -->
      <svg class="absolute inset-0 h-full w-full pointer-events-none">
        <!-- 从查询点到 Top-3 的聚光连线 -->
        <g v-for="doc in topKResults" :key="doc.id">
          <line
            :x1="`${queryPoint.x}%`"
            :y1="`${queryPoint.y}%`"
            :x2="`${doc.x}%`"
            :y2="`${doc.y}%`"
            stroke="#38bdf8"
            stroke-width="1.5"
            stroke-dasharray="4 2"
            class="animate-pulse"
          />
        </g>
      </svg>

      <!-- 嵌入平面文档点云 -->
      <div class="relative h-64 w-full">
        <!-- 查询点 -->
        <div
          class="absolute -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
          :style="{ left: `${queryPoint.x}%`, top: `${queryPoint.y}%` }"
        >
          <div class="relative flex h-5 w-5 items-center justify-center">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span class="relative inline-flex h-3 w-3 rounded-full bg-cyan-400 shadow-md shadow-cyan-400/50" />
          </div>
          <span class="mt-1 rounded-md bg-black/80 px-1.5 py-0.5 text-[9px] font-mono font-bold text-cyan-300 border border-cyan-400/30 backdrop-blur-md">
            Query Point
          </span>
        </div>

        <!-- 各文档向量节点 -->
        <div
          v-for="doc in documents"
          :key="doc.id"
          class="group absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform duration-200 hover:scale-125 z-10"
          :style="{ left: `${doc.x}%`, top: `${doc.y}%` }"
        >
          <!-- 节点圆点 -->
          <div
            class="h-3 w-3 rounded-full border border-white/40 shadow-sm"
            :style="{ backgroundColor: doc.color }"
          />

          <!-- 悬停气泡或高分提示 -->
          <div
            v-if="topKResults.some((k) => k.id === doc.id)"
            class="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-950/90 px-2 py-0.5 text-[10px] font-mono text-white shadow-lg border border-zinc-700/80 pointer-events-none"
          >
            <span>cos: {{ doc.score }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部 Top-K 检索排名卡片 -->
    <div class="space-y-2">
      <div class="flex items-center justify-between text-xs font-mono font-bold text-zinc-500 dark:text-zinc-400">
        <span>TOP-3 SEMANTIC MATCHES</span>
        <span>COSINE SIMILARITY</span>
      </div>

      <div class="space-y-1.5">
        <div
          v-for="(res, idx) in topKResults"
          :key="res.id"
          class="flex items-center justify-between rounded-xl border border-zinc-200/80 bg-zinc-50/70 p-3 text-xs dark:border-zinc-800/80 dark:bg-zinc-900/50 transition-colors hover:border-blue-500/40"
        >
          <div class="flex items-center gap-2.5 overflow-hidden">
            <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-blue-500/10 font-mono text-[11px] font-bold text-blue-600 dark:text-blue-400">
              #{{ idx + 1 }}
            </span>
            <span class="truncate font-medium text-zinc-800 dark:text-zinc-200">
              {{ res.title }}
            </span>
          </div>

          <div class="flex items-center gap-2 shrink-0 ml-3">
            <span class="rounded-md bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              {{ (res.score * 100).toFixed(1) }}%
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
