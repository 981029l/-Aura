<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { Move, ZoomIn, ZoomOut, RotateCcw, Cpu, Sparkles, Database, Layers } from 'lucide-vue-next'

export interface CanvasNode {
  id: string
  title: string
  category: string
  x: number
  y: number
  color: string
}

export interface InfiniteCanvasProps {
  title?: string
  subtitle?: string
  class?: string
}

const props = withDefaults(defineProps<InfiniteCanvasProps>(), {
  title: '无限画布',
  subtitle: '拖动平移，滚轮缩放，右下角小地图显示当前视野',
})

const pan = ref({ x: 0, y: 0 })
const zoom = ref(1.0)
const isDragging = ref(false)
const dragStart = ref({ x: 0, y: 0 })

const nodes = ref<CanvasNode[]>([
  { id: 'node-1', title: 'Gateway Ingress', category: 'Anycast LB', x: 40, y: 30, color: 'from-blue-500 to-indigo-600' },
  { id: 'node-2', title: 'Neural Router', category: 'MoE Dispatcher', x: 260, y: 70, color: 'from-purple-500 to-fuchsia-600' },
  { id: 'node-3', title: 'Vector Store', category: 'HNSW Graph', x: 120, y: 180, color: 'from-emerald-500 to-teal-600' },
  { id: 'node-4', title: 'LLM Cluster', category: '8x H100 GPU', x: 340, y: 220, color: 'from-amber-500 to-rose-600' },
])

function startDrag(e: MouseEvent) {
  isDragging.value = true
  dragStart.value = {
    x: e.clientX - pan.value.x,
    y: e.clientY - pan.value.y,
  }
}

function onDrag(e: MouseEvent) {
  if (!isDragging.value) return
  pan.value = {
    x: e.clientX - dragStart.value.x,
    y: e.clientY - dragStart.value.y,
  }
}

function stopDrag() {
  isDragging.value = false
}

function zoomIn() {
  zoom.value = Math.min(2.0, Number((zoom.value + 0.15).toFixed(2)))
}

function zoomOut() {
  zoom.value = Math.max(0.4, Number((zoom.value - 0.15).toFixed(2)))
}

function resetView() {
  pan.value = { x: 0, y: 0 }
  zoom.value = 1.0
}
</script>

<template>
  <div :class="cn('w-full max-w-2xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6', props.class)">
    <!-- 头部看板 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-2.5">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
          <Move class="h-5 w-5" />
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

      <!-- 缩放比例微调把手 -->
      <div class="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 text-xs font-mono">
        <button
          type="button"
          @click="zoomOut"
          class="p-1 rounded-lg hover:bg-white dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors cursor-pointer"
          title="缩小"
        >
          <ZoomOut class="h-3.5 w-3.5" />
        </button>
        <span class="w-12 text-center font-bold text-zinc-800 dark:text-zinc-200">{{ Math.round(zoom * 100) }}%</span>
        <button
          type="button"
          @click="zoomIn"
          class="p-1 rounded-lg hover:bg-white dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors cursor-pointer"
          title="放大"
        >
          <ZoomIn class="h-3.5 w-3.5" />
        </button>
        <div class="w-px h-3.5 bg-zinc-300 dark:bg-zinc-700 mx-0.5" />
        <button
          type="button"
          @click="resetView"
          class="p-1 rounded-lg hover:bg-white dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors cursor-pointer"
          title="回到初始位置"
        >
          <RotateCcw class="h-3.5 w-3.5" />
        </button>
      </div>
    </div>

    <!-- 无限漫游画布舞台 -->
    <div
      class="relative h-80 rounded-2xl border border-zinc-200/80 bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-950 overflow-hidden cursor-grab active:cursor-grabbing shadow-inner"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="stopDrag"
      @mouseleave="stopDrag"
    >
      <!-- 动态点阵网格背景 (跟随平移与缩放无缝平移) -->
      <div
        class="absolute inset-0 pointer-events-none opacity-60"
        :style="{
          backgroundImage: 'radial-gradient(circle at center, rgba(161, 161, 170, 0.4) 1px, transparent 1px)',
          backgroundSize: `${24 * zoom}px ${24 * zoom}px`,
          backgroundPosition: `${pan.x}px ${pan.y}px`,
        }"
      />

      <!-- 可漫游图元层 -->
      <div
        class="absolute inset-0 origin-top-left transition-transform duration-75 ease-out"
        :style="{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
        }"
      >
        <!-- 节点卡片列表 -->
        <div
          v-for="node in nodes"
          :key="node.id"
          class="absolute rounded-xl border border-white/20 dark:border-zinc-700/80 bg-white/90 dark:bg-zinc-900/90 p-3 shadow-lg backdrop-blur-md w-44 hover:scale-105 transition-transform cursor-pointer"
          :style="{ left: `${node.x}px`, top: `${node.y}px` }"
        >
          <div class="flex items-center gap-2 mb-1.5">
            <div :class="['w-6 h-6 rounded-lg bg-gradient-to-tr flex items-center justify-center text-white shadow-sm', node.color]">
              <Cpu v-if="node.id === 'node-1'" class="h-3 w-3" />
              <Sparkles v-else-if="node.id === 'node-2'" class="h-3 w-3" />
              <Database v-else-if="node.id === 'node-3'" class="h-3 w-3" />
              <Layers v-else class="h-3 w-3" />
            </div>
            <div>
              <h5 class="text-xs font-bold text-zinc-900 dark:text-white leading-none">{{ node.title }}</h5>
              <span class="text-[9px] font-mono text-zinc-400">{{ node.category }}</span>
            </div>
          </div>
          <div class="flex items-center justify-between text-[9px] font-mono text-zinc-500 pt-1 border-t border-zinc-100 dark:border-zinc-800">
            <span>STATUS: SYNCED</span>
            <span class="text-emerald-500 font-bold">100%</span>
          </div>
        </div>
      </div>

      <!-- 右下角小地图雷达 HUD (Minimap) -->
      <div class="absolute bottom-3 right-3 w-28 h-20 rounded-xl border border-zinc-300/80 dark:border-zinc-700/80 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md p-1.5 pointer-events-none shadow-md">
        <div class="relative w-full h-full rounded-lg bg-zinc-100 dark:bg-zinc-950 overflow-hidden">
          <div
            v-for="node in nodes"
            :key="node.id"
            class="absolute w-2 h-1.5 rounded-sm bg-indigo-500 opacity-80"
            :style="{ left: `${node.x * 0.18}px`, top: `${node.y * 0.18}px` }"
          />
          <!-- 视口框 -->
          <div
            class="absolute border border-blue-500 bg-blue-500/20 rounded-sm transition-all duration-75"
            :style="{
              left: `${Math.max(0, -pan.x * 0.08)}px`,
              top: `${Math.max(0, -pan.y * 0.08)}px`,
              width: `${50 / zoom}px`,
              height: `${35 / zoom}px`,
            }"
          />
        </div>
      </div>

      <!-- 拖拽操作指引提示 -->
      <div class="absolute top-3 left-3 text-[10px] font-mono text-zinc-400 bg-white/70 dark:bg-zinc-900/70 px-2.5 py-1 rounded-md border border-zinc-200/50 dark:border-zinc-800/50 pointer-events-none">
        按住鼠标拖动画布 · 用滚轮或右上角按钮缩放
      </div>
    </div>
  </div>
</template>
