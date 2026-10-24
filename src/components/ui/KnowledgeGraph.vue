<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'
import { Share2, Network, Sparkles, Filter, ChevronRight } from 'lucide-vue-next'

export interface GraphNode {
  id: string
  label: string
  category: 'core' | 'memory' | 'tool' | 'concept'
  x: number
  y: number
  radius: number
  color: string
  summary: string
  weight: number
}

export interface GraphEdge {
  from: string
  to: string
  label: string
  weight: number
}

export interface KnowledgeGraphProps {
  title?: string
  class?: string
}

const props = withDefaults(defineProps<KnowledgeGraphProps>(), {
  title: '知识图谱',
})

const nodes = ref<GraphNode[]>([
  { id: '1', label: '智能体记忆', category: 'core', x: 260, y: 170, radius: 24, color: '#0ea5e9', summary: '保存用户偏好和历史任务，在新对话中提供上下文。', weight: 1.0 },
  { id: '2', label: '推测解码引擎', category: 'memory', x: 120, y: 90, radius: 18, color: '#8b5cf6', summary: '用小模型先猜、大模型验证的方式加快文字生成速度。', weight: 0.88 },
  { id: '3', label: '向量检索', category: 'memory', x: 400, y: 80, radius: 19, color: '#8b5cf6', summary: '按语义相似度找出最相关的几篇文档，作为回答的参考资料。', weight: 0.92 },
  { id: '4', label: '工具调用', category: 'tool', x: 110, y: 240, radius: 17, color: '#10b981', summary: '在隔离环境中读写文件、运行命令和执行代码。', weight: 0.85 },
  { id: '5', label: '错误重试', category: 'concept', x: 410, y: 250, radius: 18, color: '#f59e0b', summary: '执行失败时分析原因，调整方法后重新尝试。', weight: 0.95 },
  { id: '6', label: '上下文压缩', category: 'concept', x: 260, y: 310, radius: 16, color: '#ec4899', summary: '对话过长时，把较早的内容总结成摘要以节省空间。', weight: 0.79 },
])

const edges = ref<GraphEdge[]>([
  { from: '1', to: '2', label: '加速生成', weight: 0.88 },
  { from: '1', to: '3', label: '记忆检索', weight: 0.92 },
  { from: '1', to: '4', label: '调用工具', weight: 0.85 },
  { from: '1', to: '5', label: '记录经验', weight: 0.95 },
  { from: '1', to: '6', label: '总结旧对话', weight: 0.79 },
  { from: '2', to: '3', label: '缓存命中', weight: 0.65 },
  { from: '4', to: '5', label: '错误捕获', weight: 0.82 },
])

const selectedNodeId = ref<string>('1')

const selectedNode = computed(() => {
  return nodes.value.find((n) => n.id === selectedNodeId.value) || nodes.value[0]
})

// 与当前选中节点相连的所有邻居节点与边
const connectedEdges = computed(() => {
  return edges.value.filter(
    (e) => e.from === selectedNodeId.value || e.to === selectedNodeId.value
  )
})

const connectedNodeIds = computed(() => {
  const set = new Set<string>([selectedNodeId.value])
  connectedEdges.value.forEach((e) => {
    set.add(e.from)
    set.add(e.to)
  })
  return set
})

function selectNode(id: string) {
  selectedNodeId.value = id
}

function getNode(id: string) {
  return nodes.value.find((n) => n.id === id)
}
</script>

<template>
  <div :class="cn('w-full max-w-4xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6', props.class)">
    <!-- 顶部状态栏 -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 pb-5 dark:border-zinc-800/80">
      <div class="flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
          <Network class="h-5 w-5" />
        </div>
        <div>
          <h3 class="font-bold text-sm text-zinc-900 dark:text-white flex items-center gap-2">
            <span>{{ props.title }}</span>
            <span class="px-2 py-0.5 rounded-full text-[10px] font-mono bg-purple-500/10 text-purple-600 dark:text-purple-400 font-semibold">
              {{ nodes.length }} 个节点 / {{ edges.length }} 条关系
            </span>
          </h3>
          <p class="text-xs text-zinc-400 font-mono mt-0.5">
            点击节点高亮相关的节点，并在右侧查看详情
          </p>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <button
          type="button"
          @click="selectNode('1')"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 bg-zinc-50 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
        >
          <Filter class="h-3.5 w-3.5" />
          <span>回到中心节点</span>
        </button>
      </div>
    </div>

    <!-- 知识图谱 SVG 拓扑画布与实体面板 -->
    <!-- 右侧面板固定 264px 宽，左侧图谱自适应剩余宽度，避免容器较窄时面板文字被挤压 -->
    <div class="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_16.5rem] gap-6 items-start">
      <!-- 左侧：SVG 交互式图谱 -->
      <div class="relative h-[360px] rounded-2xl border border-zinc-200/80 bg-zinc-950/90 dark:border-zinc-800/80 p-2 overflow-hidden flex items-center justify-center">
        <!-- 背景微妙科技网格：pointer-events-none 让点击穿透到下方 SVG 节点 -->
        <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08),transparent_70%)]" />

        <svg class="h-full w-full" viewBox="0 0 520 360">
          <defs>
            <!-- 能量流动渐变 -->
            <linearGradient id="edge-pulse" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.9" />
              <stop offset="100%" stop-color="#818cf8" stop-opacity="0.3" />
            </linearGradient>
            <!-- 节点发光光晕滤镜 -->
            <filter id="node-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <!-- 1. 拓扑连线 -->
          <g class="edges">
            <template v-for="(edge, idx) in edges" :key="idx">
              <!-- 基础连线 -->
              <line
                :x1="getNode(edge.from)?.x"
                :y1="getNode(edge.from)?.y"
                :x2="getNode(edge.to)?.x"
                :y2="getNode(edge.to)?.y"
                :stroke="
                  connectedNodeIds.has(edge.from) && connectedNodeIds.has(edge.to)
                    ? '#38bdf8'
                    : '#334155'
                "
                :stroke-width="
                  connectedNodeIds.has(edge.from) && connectedNodeIds.has(edge.to)
                    ? 2
                    : 1
                "
                :stroke-opacity="
                  connectedNodeIds.has(edge.from) && connectedNodeIds.has(edge.to)
                    ? 0.8
                    : 0.25
                "
                :stroke-dasharray="
                  connectedNodeIds.has(edge.from) && connectedNodeIds.has(edge.to)
                    ? '4 2'
                    : 'none'
                "
              />

              <!-- 连线上的流动能量粒子 (仅在相关高亮时渲染) -->
              <circle
                v-if="connectedNodeIds.has(edge.from) && connectedNodeIds.has(edge.to)"
                r="2.5"
                fill="#38bdf8"
                class="animate-pulse"
              >
                <animateMotion
                  :path="`M ${getNode(edge.from)?.x} ${getNode(edge.from)?.y} L ${getNode(edge.to)?.x} ${getNode(edge.to)?.y}`"
                  :dur="`${2.5 / edge.weight}s`"
                  repeatCount="indefinite"
                />
              </circle>
            </template>
          </g>

          <!-- 2. 拓扑节点 -->
          <g class="nodes">
            <g
              v-for="node in nodes"
              :key="node.id"
              :transform="`translate(${node.x}, ${node.y})`"
              @click="selectNode(node.id)"
              class="cursor-pointer transition-transform duration-200"
              :opacity="connectedNodeIds.has(node.id) ? 1 : 0.35"
            >
              <!-- 选中态外层光圈 -->
              <circle
                v-if="selectedNodeId === node.id"
                :r="node.radius + 8"
                fill="none"
                :stroke="node.color"
                stroke-width="2"
                stroke-opacity="0.5"
                stroke-dasharray="4 3"
                class="animate-spin-slow origin-center [transform-box:fill-box]"
              />

              <!-- 节点实体圆 -->
              <circle
                :r="node.radius"
                :fill="node.color"
                :fill-opacity="selectedNodeId === node.id ? 0.9 : 0.35"
                :stroke="node.color"
                stroke-width="2"
                filter="url(#node-glow)"
              />

              <!-- 节点文字标签 -->
              <text
                dy="4"
                text-anchor="middle"
                class="text-[10px] font-mono font-bold fill-white pointer-events-none select-none"
              >
                {{ node.id }}
              </text>

              <!-- 悬浮标题标签 -->
              <text
                :y="node.radius + 14"
                text-anchor="middle"
                class="text-[9px] font-sans fill-zinc-300 pointer-events-none select-none font-medium"
              >
                {{ node.label.split(' ')[0] }}
              </text>
            </g>
          </g>
        </svg>

        <!-- 提示徽标 -->
        <div class="absolute bottom-3 left-4 text-[10px] text-zinc-400 font-mono flex items-center gap-1.5">
          <Sparkles class="h-3 w-3 text-amber-400" />
          <span>点击任意节点查看详情</span>
        </div>
      </div>

      <!-- 右侧：选中实体档案信息详情 -->
      <div class="rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-5 dark:border-zinc-800/80 dark:bg-zinc-900/50 space-y-4">
        <div class="flex items-center justify-between border-b border-zinc-200/80 pb-3 dark:border-zinc-800/80">
          <div class="flex items-center gap-2">
            <span
              class="h-3 w-3 rounded-full"
              :style="{ backgroundColor: selectedNode.color }"
            />
            <span class="text-xs font-bold text-zinc-900 dark:text-white">
              节点详情
            </span>
          </div>
          <span class="shrink-0 whitespace-nowrap text-[10px] font-mono text-zinc-400">
            ID: #0{{ selectedNode.id }}
          </span>
        </div>

        <div>
          <h4 class="text-sm font-bold text-zinc-900 dark:text-white">
            {{ selectedNode.label }}
          </h4>
          <p class="text-xs text-zinc-600 dark:text-zinc-300 mt-2 leading-relaxed">
            {{ selectedNode.summary }}
          </p>
        </div>

        <!-- 权重度量 -->
        <div class="space-y-1.5 pt-1">
          <div class="flex justify-between text-xs font-mono">
            <span class="text-zinc-400">重要程度</span>
            <span class="font-bold text-sky-600 dark:text-sky-400">{{ (selectedNode.weight * 100).toFixed(0) }}%</span>
          </div>
          <div class="h-1.5 w-full rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
            <div
              class="h-full rounded-full transition-all duration-500"
              :style="{
                width: `${selectedNode.weight * 100}%`,
                backgroundColor: selectedNode.color,
              }"
            />
          </div>
        </div>

        <!-- 相邻关联实体 -->
        <div class="space-y-2 pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60">
          <span class="block text-[11px] font-semibold text-zinc-400">相关节点 ({{ connectedEdges.length }})</span>
          <div class="space-y-1.5 max-h-36 overflow-y-auto pr-1">
            <div
              v-for="(edge, i) in connectedEdges"
              :key="i"
              @click="selectNode(edge.from === selectedNode.id ? edge.to : edge.from)"
              class="flex items-center justify-between gap-2 p-2 rounded-xl border border-zinc-200/60 bg-white/60 hover:bg-white dark:border-zinc-800/60 dark:bg-zinc-900/60 dark:hover:bg-zinc-800 transition-colors cursor-pointer text-xs"
            >
              <!-- 实体名称占满剩余宽度，过长时省略；右侧关系标签不换行、不收缩 -->
              <div class="flex min-w-0 flex-1 items-center gap-1.5">
                <Share2 class="h-3 w-3 shrink-0 text-sky-500" />
                <span class="truncate font-medium text-zinc-800 dark:text-zinc-200">
                  {{ getNode(edge.from === selectedNode.id ? edge.to : edge.from)?.label }}
                </span>
              </div>
              <div class="flex shrink-0 items-center gap-1 whitespace-nowrap text-[10px] font-mono text-zinc-400">
                <span>{{ edge.label }}</span>
                <ChevronRight class="h-3 w-3 text-zinc-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes spin-slow {
  to {
    transform: rotate(360deg);
  }
}
.animate-spin-slow {
  animation: spin-slow 16s linear infinite;
}
</style>
