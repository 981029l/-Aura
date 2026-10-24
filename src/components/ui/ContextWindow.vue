<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'
import {
  Layers,
  RotateCw,
  Plus,
  FileText,
} from 'lucide-vue-next'

export interface ContextWindowProps {
  totalTokens?: number
  systemTokens?: number
  toolsTokens?: number
  filesTokens?: number
  messagesTokens?: number
  compactionThreshold?: number // 0.8 => 80%
  class?: string
}

const props = withDefaults(defineProps<ContextWindowProps>(), {
  totalTokens: 128000,
  systemTokens: 8200,
  toolsTokens: 12400,
  filesTokens: 32600,
  messagesTokens: 38500,
  compactionThreshold: 0.8,
})

const curSystem = ref(props.systemTokens)
const curTools = ref(props.toolsTokens)
const curFiles = ref(props.filesTokens)
const curMessages = ref(props.messagesTokens)

const TOTAL_CELLS = 200

const usedTokens = computed(() => {
  return curSystem.value + curTools.value + curFiles.value + curMessages.value
})

const usedPercent = computed(() => {
  return Math.min(100, Math.round((usedTokens.value / props.totalTokens) * 100))
})

const tokensPerCell = computed(() => {
  return props.totalTokens / TOTAL_CELLS // 640
})

const hoveredCell = ref<{ index: number; type: string; tokens: number } | null>(null)

// 计算各个区间的单元格分配
const cellTypes = computed(() => {
  const cells: { type: string; label: string; color: string }[] = []
  const systemCells = Math.round(curSystem.value / tokensPerCell.value)
  const toolsCells = Math.round(curTools.value / tokensPerCell.value)
  const filesCells = Math.round(curFiles.value / tokensPerCell.value)
  const messagesCells = Math.round(curMessages.value / tokensPerCell.value)

  for (let i = 0; i < TOTAL_CELLS; i++) {
    if (i < systemCells) {
      cells.push({ type: 'system', label: 'System Prompt', color: 'bg-blue-500' })
    } else if (i < systemCells + toolsCells) {
      cells.push({ type: 'tools', label: 'Tool Definitions', color: 'bg-purple-500' })
    } else if (i < systemCells + toolsCells + filesCells) {
      cells.push({ type: 'files', label: 'Files & Context', color: 'bg-emerald-500' })
    } else if (i < systemCells + toolsCells + filesCells + messagesCells) {
      cells.push({ type: 'messages', label: 'Messages History', color: 'bg-amber-500' })
    } else {
      cells.push({ type: 'free', label: 'Available Budget', color: 'bg-zinc-200/80 dark:bg-zinc-800/80' })
    }
  }
  return cells
})

const compactionIndex = computed(() => {
  return Math.round(TOTAL_CELLS * props.compactionThreshold)
})

function addMessage() {
  curMessages.value += 4000
}

function attachFile() {
  curFiles.value += 12000
}

function compactContext() {
  curMessages.value = Math.max(8000, Math.round(curMessages.value * 0.4))
  curFiles.value = Math.max(10000, Math.round(curFiles.value * 0.6))
}

function formatK(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k'
  }
  return String(num)
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
    <!-- 顶部状态栏 -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-100 pb-3 dark:border-zinc-800/80">
      <div class="flex items-center gap-2">
        <Layers class="h-4 w-4 text-blue-500" />
        <span class="text-xs font-mono font-bold text-zinc-800 dark:text-zinc-200">
          {{ usedTokens.toLocaleString() }} / {{ props.totalTokens.toLocaleString() }} Tokens
        </span>
        <span class="text-xs font-mono text-zinc-400">
          ({{ usedPercent }}%)
        </span>
      </div>

      <!-- 操作按钮组 -->
      <div class="flex items-center gap-2">
        <button
          type="button"
          @click="addMessage"
          class="inline-flex items-center gap-1 rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[11px] font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer active:scale-95"
        >
          <Plus class="h-3 w-3" />
          <span>+ 消息</span>
        </button>

        <button
          type="button"
          @click="attachFile"
          class="inline-flex items-center gap-1 rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[11px] font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer active:scale-95"
        >
          <FileText class="h-3 w-3" />
          <span>+ 知识库</span>
        </button>

        <button
          type="button"
          @click="compactContext"
          class="inline-flex items-center gap-1 rounded-lg bg-blue-600 hover:bg-blue-500 px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm cursor-pointer active:scale-95"
        >
          <RotateCw class="h-3 w-3" />
          <span>压缩上下文</span>
        </button>
      </div>
    </div>

    <!-- 200 单元格网格视图 -->
    <div class="relative">
      <div class="grid grid-cols-20 gap-1 sm:gap-1.5 p-3 rounded-xl border border-zinc-200/80 bg-zinc-50/50 dark:border-zinc-800/80 dark:bg-zinc-900/40">
        <div
          v-for="(cell, i) in cellTypes"
          :key="i"
          @mouseenter="hoveredCell = { index: i, type: cell.label, tokens: Math.round((i + 1) * tokensPerCell) }"
          @mouseleave="hoveredCell = null"
          :class="[
            'h-4 sm:h-5 rounded-sm transition-all duration-300 cursor-pointer relative',
            cell.color,
            i === compactionIndex - 1 && 'ring-2 ring-rose-500/80',
          ]"
        >
          <!-- 80% 警戒标记点 -->
          <span
            v-if="i === compactionIndex - 1"
            class="absolute -top-1 -right-1 flex h-2 w-2 rounded-full bg-rose-500"
            title="超过 80% 时自动压缩"
          />
        </div>
      </div>

      <!-- 80% 压缩阈值提示条 -->
      <div class="mt-2 flex items-center justify-between text-[11px] font-mono text-zinc-400">
        <div class="flex items-center gap-1.5">
          <span class="h-2 w-2 rounded-full bg-rose-500" />
          <span>超过 80%（102.4k Tokens）时触发压缩</span>
        </div>
        <div v-if="hoveredCell" class="text-zinc-700 dark:text-zinc-200 font-bold">
          Cell #{{ hoveredCell.index + 1 }}: {{ hoveredCell.type }} (累计: ~{{ formatK(hoveredCell.tokens) }})
        </div>
      </div>
    </div>

    <!-- 图例分类标签 -->
    <div class="flex flex-wrap items-center gap-4 pt-1 text-xs font-mono">
      <div class="flex items-center gap-1.5">
        <span class="h-2.5 w-2.5 rounded-full bg-blue-500" />
        <span class="text-zinc-600 dark:text-zinc-400">System ({{ formatK(curSystem) }})</span>
      </div>

      <div class="flex items-center gap-1.5">
        <span class="h-2.5 w-2.5 rounded-full bg-purple-500" />
        <span class="text-zinc-600 dark:text-zinc-400">Tools ({{ formatK(curTools) }})</span>
      </div>

      <div class="flex items-center gap-1.5">
        <span class="h-2.5 w-2.5 rounded-full bg-emerald-500" />
        <span class="text-zinc-600 dark:text-zinc-400">Files / RAG ({{ formatK(curFiles) }})</span>
      </div>

      <div class="flex items-center gap-1.5">
        <span class="h-2.5 w-2.5 rounded-full bg-amber-500" />
        <span class="text-zinc-600 dark:text-zinc-400">Messages ({{ formatK(curMessages) }})</span>
      </div>

      <div class="flex items-center gap-1.5 ml-auto">
        <span class="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        <span class="text-zinc-400">Free ({{ formatK(Math.max(0, props.totalTokens - usedTokens)) }})</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-cols-20 {
  grid-template-columns: repeat(20, minmax(0, 1fr));
}
</style>
