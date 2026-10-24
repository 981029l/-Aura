<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Droplet, RefreshCw, Sparkles } from 'lucide-vue-next'

interface Props {
  words?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  words: () => ['FLUID', 'MOTION', 'ORGANIC', 'AURA UI'],
})

const currentWordIndex = ref(0)
const isMorphing = ref(false)
let timer: ReturnType<typeof setInterval> | null = null

const nextWord = () => {
  isMorphing.value = true
  setTimeout(() => {
    currentWordIndex.value = (currentWordIndex.value + 1) % props.words.length
    setTimeout(() => {
      isMorphing.value = false
    }, 200)
  }, 400)
}

onMounted(() => {
  timer = setInterval(nextWord, 3200)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div class="relative w-full max-w-2xl mx-auto rounded-3xl p-6 sm:p-10 overflow-hidden transition-all duration-300 border border-slate-200 dark:border-indigo-900/40 bg-white dark:bg-slate-950 shadow-2xl font-sans text-center select-none">
    <!-- SVG Gooey Filter Definition (Zero external dependency) -->
    <svg class="hidden">
      <defs>
        <filter id="liquidGooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>

    <!-- Header -->
    <div class="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 text-xs">
      <div class="flex items-center gap-2">
        <Droplet class="w-4 h-4 text-indigo-500 fill-indigo-500/20" />
        <span class="font-mono font-bold tracking-wider text-slate-700 dark:text-slate-300 uppercase">
          LIQUID GOOEY TEXT MORPH
        </span>
      </div>

      <button
        @click="nextWord"
        class="flex items-center gap-1.5 px-3 py-1 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 text-[11px] font-semibold hover:border-indigo-500 transition-colors"
      >
        <RefreshCw class="w-3 h-3" :class="{ 'animate-spin': isMorphing }" />
        <span>Morph Now</span>
      </button>
    </div>

    <!-- Main Liquid Text Stage -->
    <div
      class="my-10 py-14 px-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 flex items-center justify-center min-h-[160px]"
      style="filter: url(#liquidGooey);"
    >
      <h2
        class="text-4xl sm:text-6xl md:text-7xl font-black font-mono tracking-tight text-indigo-600 dark:text-indigo-400 transition-all duration-500"
        :class="{ 'scale-90 blur-md opacity-40': isMorphing, 'scale-100 blur-0 opacity-100': !isMorphing }"
      >
        {{ props.words[currentWordIndex] }}
      </h2>
    </div>

    <!-- Footer -->
    <div class="flex items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
      <div class="flex items-center gap-1.5">
        <Sparkles class="w-3.5 h-3.5 text-indigo-500" />
        <span>SVG GOOEY FE-COLOR-MATRIX BLUR</span>
      </div>
      <span class="text-indigo-600 dark:text-indigo-400 font-semibold">
        WORD {{ currentWordIndex + 1 }} OF {{ props.words.length }}
      </span>
    </div>
  </div>
</template>
