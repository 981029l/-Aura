<script setup lang="ts">
import { ref, computed } from 'vue'
import { Cpu, Sliders, Scissors, RefreshCw } from 'lucide-vue-next'

interface Props {
  layerName?: string
  dimensions?: string
}

const props = withDefaults(defineProps<Props>(), {
  layerName: 'ATTENTION.W_QUERY.WEIGHT',
  dimensions: '8x8 MATRIX (64 TENSORS)',
})

const quantization = ref<'fp16' | 'int8' | 'int4'>('int8')
const sparsityCutoff = ref(0.25)
const isPruning = ref(false)

// Generate 8x8 weight grid
const weights = ref<number[][]>([])

const initWeights = () => {
  const grid: number[][] = []
  for (let r = 0; r < 8; r++) {
    const row: number[] = []
    for (let c = 0; c < 8; c++) {
      // Normal distribution around 0
      const w = (Math.random() * 2 - 1)
      row.push(Number(w.toFixed(2)))
    }
    grid.push(row)
  }
  weights.value = grid
}

initWeights()

const activeWeightsCount = computed(() => {
  let count = 0
  weights.value.forEach(row => {
    row.forEach(w => {
      if (Math.abs(w) >= sparsityCutoff.value) count++
    })
  })
  return count
})

const sparsityPercent = computed(() => {
  return Math.round(((64 - activeWeightsCount.value) / 64) * 100)
})

const triggerPrune = () => {
  isPruning.value = true
  setTimeout(() => {
    isPruning.value = false
  }, 400)
}
</script>

<template>
  <div class="relative w-full max-w-xl mx-auto rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-300 border border-slate-200 dark:border-indigo-900/40 bg-white dark:bg-slate-950 shadow-2xl font-mono text-slate-800 dark:text-slate-100 select-none">
    <!-- Top Header -->
    <div class="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 text-xs">
      <div class="flex items-center gap-2.5">
        <div class="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/40">
          <Cpu class="w-4 h-4" />
        </div>
        <div>
          <h3 class="font-bold tracking-wider uppercase text-slate-800 dark:text-indigo-300">
            {{ props.layerName }}
          </h3>
          <span class="text-[10px] text-slate-400">
            {{ props.dimensions }} • QUANT: {{ quantization.toUpperCase() }}
          </span>
        </div>
      </div>

      <div class="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 text-xs">
        <button
          v-for="q in (['fp16', 'int8', 'int4'] as const)"
          :key="q"
          @click="quantization = q"
          class="px-2 py-0.5 rounded-lg uppercase text-[10px] font-bold transition-all"
          :class="quantization === q ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'"
        >
          {{ q }}
        </button>
      </div>
    </div>

    <!-- 8x8 Quantized Weights Heatmap Grid -->
    <div class="my-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center">
      <div class="grid grid-cols-8 gap-1.5 p-2 bg-slate-200/60 dark:bg-black/60 rounded-xl">
        <template v-for="(row, rIdx) in weights" :key="'r-'+rIdx">
          <div
            v-for="(w, cIdx) in row"
            :key="'c-'+cIdx"
            class="w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center text-[8px] font-bold transition-all duration-300 cursor-pointer"
            :class="[
              Math.abs(w) < sparsityCutoff
                ? 'opacity-20 bg-slate-300 dark:bg-slate-800 text-slate-400'
                : w > 0
                ? 'bg-indigo-600 text-white shadow-[0_0_8px_rgba(99,102,241,0.5)]'
                : 'bg-rose-500 text-white shadow-[0_0_8px_rgba(244,63,94,0.5)]'
            ]"
            :style="{
              opacity: Math.abs(w) < sparsityCutoff ? 0.2 : Math.max(0.4, Math.abs(w)),
              transform: isPruning && Math.abs(w) < sparsityCutoff ? 'scale(0.8)' : 'scale(1)',
            }"
            :title="`Weight [${rIdx},${cIdx}]: ${w}`"
          >
            {{ w > 0 ? `+` : `-` }}
          </div>
        </template>
      </div>

      <!-- Legend -->
      <div class="mt-4 flex items-center justify-between w-full px-2 text-[10px] text-slate-400">
        <div class="flex items-center gap-1.5">
          <span class="w-2.5 h-2.5 rounded bg-rose-500"></span>
          <span>Negative Weight</span>
        </div>
        <div class="flex items-center gap-1.5">
          <span class="w-2.5 h-2.5 rounded bg-slate-400 opacity-30"></span>
          <span>Pruned / Zero</span>
        </div>
        <div class="flex items-center gap-1.5">
          <span class="w-2.5 h-2.5 rounded bg-indigo-600"></span>
          <span>Positive Weight</span>
        </div>
      </div>
    </div>

    <!-- Sparsity Slider & Prune Action -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-xs">
      <div class="flex items-center gap-3">
        <Sliders class="w-4 h-4 text-slate-400" />
        <span class="text-slate-500">Cutoff: {{ sparsityCutoff.toFixed(2) }}</span>
        <input
          type="range"
          min="0"
          max="0.8"
          step="0.05"
          v-model.number="sparsityCutoff"
          class="w-28 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg accent-indigo-600 cursor-pointer"
        />
      </div>

      <div class="flex items-center gap-3">
        <span class="font-bold text-indigo-600 dark:text-indigo-400">
          SPARSITY: {{ sparsityPercent }}%
        </span>

        <button
          @click="initWeights"
          class="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          title="Regenerate"
        >
          <RefreshCw class="w-3.5 h-3.5 text-slate-400" />
        </button>

        <button
          @click="triggerPrune"
          class="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-all shadow-md shadow-indigo-600/20 active:scale-95"
        >
          <Scissors class="w-3.5 h-3.5" />
          <span>Prune</span>
        </button>
      </div>
    </div>
  </div>
</template>
