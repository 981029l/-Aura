<script setup lang="ts">
import { ref } from 'vue'
import { Type, Sparkles, RefreshCw } from 'lucide-vue-next'

interface Props {
  text?: string
}

withDefaults(defineProps<Props>(), {
  text: 'KINETIC VARIABLE',
})

const hoveredIndex = ref<number | null>(null)
const mode = ref<'weight' | 'stretch' | 'wave'>('weight')

const phrases = ['KINETIC VARIABLE', 'AURA ARCHITECTURE', 'ZERO CONFIG PRIMITIVES', 'QUANTUM DESIGN']
const phraseIndex = ref(0)

const nextPhrase = () => {
  phraseIndex.value = (phraseIndex.value + 1) % phrases.length
}

const getLetterStyle = (idx: number) => {
  if (hoveredIndex.value === null) return {}

  const dist = Math.abs(hoveredIndex.value - idx)
  if (dist === 0) {
    return {
      fontWeight: '900',
      transform: mode.value === 'stretch' ? 'scaleY(1.3) scaleX(1.15)' : 'scale(1.25)',
      color: '#6366f1',
    }
  } else if (dist === 1) {
    return {
      fontWeight: '700',
      transform: mode.value === 'stretch' ? 'scaleY(1.15)' : 'scale(1.12)',
      color: '#818cf8',
    }
  } else if (dist === 2) {
    return {
      fontWeight: '600',
      transform: 'scale(1.05)',
      color: '#a5b4fc',
    }
  }
  return {
    fontWeight: '300',
    transform: 'scale(0.95)',
    opacity: '0.6',
  }
}
</script>

<template>
  <div class="relative w-full max-w-2xl mx-auto rounded-3xl p-6 sm:p-10 overflow-hidden transition-all duration-300 border border-slate-200 dark:border-indigo-900/40 bg-white dark:bg-slate-950 shadow-2xl font-mono text-center select-none">
    <!-- Header -->
    <div class="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 text-xs">
      <div class="flex items-center gap-2">
        <Type class="w-4 h-4 text-indigo-500" />
        <span class="font-bold tracking-wider text-slate-700 dark:text-slate-300 uppercase">
          KINETIC VARIABLE TYPOGRAPHY
        </span>
      </div>

      <div class="flex items-center gap-2">
        <div class="inline-flex rounded-xl bg-slate-100 dark:bg-slate-900 p-0.5 border border-slate-200 dark:border-slate-800">
          <button
            v-for="m in (['weight', 'stretch', 'wave'] as const)"
            :key="m"
            @click="mode = m"
            class="px-2.5 py-1 rounded-lg uppercase text-[10px] font-bold transition-all"
            :class="mode === m ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'"
          >
            {{ m }}
          </button>
        </div>

        <button
          @click="nextPhrase"
          class="p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-indigo-600 transition-colors"
        >
          <RefreshCw class="w-3.5 h-3.5" />
        </button>
      </div>
    </div>

    <!-- Main Kinetic Letters Interactive Arena -->
    <div class="my-10 py-12 px-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 flex items-center justify-center min-h-[140px]">
      <div class="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
        <span
          v-for="(letter, idx) in phrases[phraseIndex].split('')"
          :key="idx"
          @mouseenter="hoveredIndex = idx"
          @mouseleave="hoveredIndex = null"
          class="inline-block text-2xl sm:text-4xl md:text-5xl transition-all duration-200 cursor-pointer text-slate-900 dark:text-white"
          :style="getLetterStyle(idx)"
        >
          {{ letter === ' ' ? '&nbsp;' : letter }}
        </span>
      </div>
    </div>

    <!-- Footer Insights -->
    <div class="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
      <div class="flex items-center gap-1.5">
        <Sparkles class="w-3.5 h-3.5 text-indigo-500" />
        <span>HOVER LETTERS FOR PHYSICS INTERPOLATION</span>
      </div>
      <span class="font-semibold text-indigo-600 dark:text-indigo-400">
        {{ hoveredIndex !== null ? `GLYPH: #${hoveredIndex + 1}` : 'IDLE EQUILIBRIUM' }}
      </span>
    </div>
  </div>
</template>
