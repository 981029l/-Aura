<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Terminal, RefreshCw, Zap } from 'lucide-vue-next'

interface Props {
  phrases?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  phrases: () => [
    'SYSTEM BREACH DETECTED',
    'AURA MATRIX INITIALIZED',
    'SYNAPSE STREAM CONNECTED',
    'QUANTUM CORE ONLINE',
  ],
})

const currentPhraseIndex = ref(0)
const isRaining = ref(false)
const displayedChars = ref<Array<{ char: string; state: 'rain' | 'locked'; opacity: number }>>([])

const charset = '0123456789ABCDEFｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ'
let timer: ReturnType<typeof setInterval> | null = null

const startRainEffect = () => {
  if (timer) clearInterval(timer)
  isRaining.value = true

  const target = props.phrases[currentPhraseIndex.value]
  displayedChars.value = target.split('').map(() => ({
    char: charset[Math.floor(Math.random() * charset.length)],
    state: 'rain',
    opacity: 0.4,
  }))

  let step = 0
  timer = setInterval(() => {
    step++
    let allLocked = true

    displayedChars.value = displayedChars.value.map((item, idx) => {
      if (item.state === 'locked') return item

      if (step > idx * 2 + 5) {
        return {
          char: target[idx],
          state: 'locked',
          opacity: 1,
        }
      } else {
        allLocked = false
        return {
          char: charset[Math.floor(Math.random() * charset.length)],
          state: 'rain',
          opacity: Math.random() > 0.5 ? 0.9 : 0.4,
        }
      }
    })

    if (allLocked) {
      if (timer) clearInterval(timer)
      isRaining.value = false
    }
  }, 50)
}

const nextPhrase = () => {
  currentPhraseIndex.value = (currentPhraseIndex.value + 1) % props.phrases.length
  startRainEffect()
}

onMounted(() => {
  startRainEffect()
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div class="relative w-full max-w-2xl mx-auto rounded-3xl p-6 sm:p-10 overflow-hidden transition-all duration-300 border border-slate-200 dark:border-emerald-900/40 bg-slate-50 dark:bg-slate-950 shadow-2xl font-mono">
    <!-- Ambient Green Phosphor Backdrop -->
    <div class="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-40 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>

    <!-- Header -->
    <div class="relative z-10 flex items-center justify-between pb-4 border-b border-slate-200 dark:border-emerald-900/30">
      <div class="flex items-center gap-2">
        <Terminal class="w-4 h-4 text-emerald-500" />
        <span class="text-xs font-bold tracking-wider text-slate-700 dark:text-emerald-400 uppercase">
          MATRIX RAINDROP COALESCENCE
        </span>
      </div>

      <div class="flex items-center gap-2">
        <button
          @click="startRainEffect"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs border border-slate-300 dark:border-emerald-800/60 bg-white dark:bg-slate-900 text-slate-700 dark:text-emerald-300 hover:border-emerald-500 transition-colors"
        >
          <RefreshCw class="w-3.5 h-3.5" :class="{ 'animate-spin': isRaining }" />
          <span>Re-Drop</span>
        </button>

        <button
          @click="nextPhrase"
          class="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-500 transition-all shadow-md shadow-emerald-600/20"
        >
          <Zap class="w-3.5 h-3.5" />
          <span>Next Text</span>
        </button>
      </div>
    </div>

    <!-- Main Rain Text Coalescence Viewport -->
    <div class="relative z-10 my-8 py-10 px-4 rounded-2xl bg-white/60 dark:bg-black/60 border border-slate-200 dark:border-emerald-900/30 shadow-inner flex flex-col items-center justify-center min-h-[160px]">
      <div class="flex flex-wrap justify-center gap-x-1 sm:gap-x-1.5 gap-y-2 text-2xl sm:text-3xl md:text-4xl font-black tracking-wider">
        <span
          v-for="(item, idx) in displayedChars"
          :key="idx"
          class="transition-all duration-100"
          :class="[
            item.state === 'locked'
              ? 'text-slate-900 dark:text-emerald-400 font-extrabold text-shadow-glow'
              : 'text-emerald-600/60 dark:text-emerald-500/70 font-light translate-y-1'
          ]"
          :style="{ opacity: item.opacity }"
        >
          {{ item.char === ' ' ? '&nbsp;' : item.char }}
        </span>
      </div>

      <div class="mt-6 flex items-center gap-2 text-xs font-mono">
        <span class="w-2 h-2 rounded-full" :class="isRaining ? 'bg-amber-400 animate-ping' : 'bg-emerald-500'"></span>
        <span class="text-slate-500 dark:text-emerald-500/80">
          {{ isRaining ? 'DIGITAL RAINDROPS CONDENSING...' : 'TEXT STATE MATRIX LOCKED' }}
        </span>
      </div>
    </div>

    <!-- Bottom Status -->
    <div class="relative z-10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-200 dark:border-slate-800">
      <span>CHARSET: KATAKANA + LATIN-HEX</span>
      <span class="text-emerald-600 dark:text-emerald-400 font-semibold">PHRASE {{ currentPhraseIndex + 1 }} OF {{ props.phrases.length }}</span>
    </div>
  </div>
</template>

<style scoped>
.text-shadow-glow {
  text-shadow: 0 0 12px rgba(16, 185, 129, 0.4);
}
</style>
