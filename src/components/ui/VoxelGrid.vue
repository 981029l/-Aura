<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import { Box, Sparkles, Play, Pause, RefreshCw } from 'lucide-vue-next'

export interface VoxelGridProps {
  title?: string
  subtitle?: string
  class?: string
}

const props = withDefaults(defineProps<VoxelGridProps>(), {
  title: '',
  subtitle: '',
})

const isWaveActive = ref(true)
const mousePos = ref({ row: 3, col: 3 })
const GRID_SIZE = 7

const heights = ref<number[][]>([])

// 初始化 7x7 高度场
function initGrid() {
  const grid: number[][] = []
  for (let r = 0; r < GRID_SIZE; r++) {
    const row: number[] = []
    for (let c = 0; c < GRID_SIZE; c++) {
      row.push(6 + Math.sin((r + c) * 0.8) * 8)
    }
    grid.push(row)
  }
  heights.value = grid
}

let timerId: number | null = null

function updateWave() {
  if (isWaveActive.value) {
    const t = Date.now() / 400
    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        const distToMouse = Math.hypot(r - mousePos.value.row, c - mousePos.value.col)
        const wave = Math.sin(t - distToMouse * 0.9) * 12 + 16
        heights.value[r][c] = Math.max(4, Math.min(36, wave))
      }
    }
  }
}

onMounted(() => {
  initGrid()
  timerId = window.setInterval(updateWave, 40)
})

onUnmounted(() => {
  if (timerId) clearInterval(timerId)
})

function getVoxelColor(h: number) {
  if (h > 24) return 'bg-rose-500 shadow-rose-500/30'
  if (h > 18) return 'bg-amber-500 shadow-amber-500/30'
  if (h > 12) return 'bg-emerald-500 shadow-emerald-500/30'
  return 'bg-cyan-500 shadow-cyan-500/30'
}
</script>

<template>
  <div :class="cn('w-full max-w-xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6', props.class)">
    <!-- 头部看板 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-2.5">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
          <Box class="h-5 w-5" />
        </div>
        <div>
          <span class="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
            {{ props.title || '体素网格' }}
          </span>
          <span v-if="props.subtitle" class="text-xs text-zinc-400 font-mono">
            · {{ props.subtitle }}
          </span>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <button
          type="button"
          @click="isWaveActive = !isWaveActive"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
        >
          <Pause v-if="isWaveActive" class="h-3.5 w-3.5 text-amber-500" />
          <Play v-else class="h-3.5 w-3.5 text-emerald-500" />
          <span>{{ isWaveActive ? '暂停' : '开始波动' }}</span>
        </button>
      </div>
    </div>

    <!-- 等轴测体素舞台 -->
    <div class="relative h-72 rounded-2xl border border-zinc-800 bg-zinc-950 flex items-center justify-center overflow-hidden shadow-inner">
      <!-- 极光背景漫射 -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)] pointer-events-none" />

      <!-- 2.5D 等轴测网格变换容器 (rotateX(60deg) rotateZ(-45deg)) -->
      <div class="transform -rotate-x-45 scale-90 transition-transform duration-300">
        <div class="grid grid-cols-7 gap-1.5">
          <template v-for="(row, rIdx) in heights" :key="rIdx">
            <div
              v-for="(h, cIdx) in row"
              :key="`${rIdx}-${cIdx}`"
              @mouseenter="mousePos = { row: rIdx, col: cIdx }"
              :class="[
                'w-6 h-6 rounded-md transition-all duration-75 cursor-pointer shadow-md',
                getVoxelColor(h)
              ]"
              :style="{
                transform: `translateZ(${h}px)`,
                height: '24px',
                width: '24px',
              }"
            />
          </template>
        </div>
      </div>

      <!-- 底部操作提示 -->
      <div class="absolute bottom-3 inset-x-6 flex items-center justify-between text-[10px] font-mono text-zinc-400 pointer-events-none">
        <span>GRID: 7×7 VOXELS</span>
        <span class="flex items-center gap-1 text-emerald-400">
          <Sparkles class="h-3 w-3" />
          <span>移动鼠标，方块会起伏</span>
        </span>
        <span class="flex items-center gap-1">
          <RefreshCw class="h-3 w-3" />
          <span>每 40ms 更新</span>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.-rotate-x-45 {
  transform: rotateX(55deg) rotateZ(-35deg);
}
</style>
