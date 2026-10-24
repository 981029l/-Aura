<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { Terminal, RefreshCw, Radio, Sparkles } from 'lucide-vue-next'

interface Props {
  initialText?: string
  intensity?: 'subtle' | 'cyber' | 'extreme'
}

const props = withDefaults(defineProps<Props>(), {
  initialText: 'NEURAL SYSTEM OVERRIDE',
  intensity: 'cyber',
})

const phrases = [
  'NEURAL SYSTEM OVERRIDE',
  'PROTOCOL BREACH DETECTED',
  'QUANTUM ENTANGLEMENT 99.8%',
  'AURA CORE ARCHITECTURE',
  'DECRYPTION IN PROGRESS...',
]

const currentPhraseIndex = ref(0)
const displayText = ref('')
const isGlitching = ref(false)
const currentIntensity = ref(props.intensity)
const showScanlines = ref(true)

const charset = '!<>-_\\/[]{}—=+*^?#________ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

let animationFrame: number | null = null
let scrambleTimer: ReturnType<typeof setTimeout> | null = null

const scrambleTo = (targetText: string) => {
  if (animationFrame) cancelAnimationFrame(animationFrame)
  isGlitching.value = true

  const length = targetText.length
  let queue: Array<{ from: string; to: string; start: number; end: number; char?: string }> = []

  for (let i = 0; i < length; i++) {
    const from = displayText.value[i] || ''
    const to = targetText[i] || ''
    const start = Math.floor(Math.random() * 20)
    const end = start + Math.floor(Math.random() * 25) + 10
    queue.push({ from, to, start, end })
  }

  let frame = 0
  const update = () => {
    let output = ''
    let complete = 0

    for (let i = 0; i < queue.length; i++) {
      const item = queue[i]
      if (frame >= item.end) {
        complete++
        output += item.to
      } else if (frame >= item.start) {
        if (!item.char || Math.random() < 0.28) {
          item.char = charset[Math.floor(Math.random() * charset.length)]
        }
        output += item.char
      } else {
        output += item.from
      }
    }

    displayText.value = output

    if (complete === queue.length) {
      isGlitching.value = false
    } else {
      frame++
      animationFrame = requestAnimationFrame(update)
    }
  }

  update()
}

const triggerNext = () => {
  currentPhraseIndex.value = (currentPhraseIndex.value + 1) % phrases.length
  scrambleTo(phrases[currentPhraseIndex.value])
}

const triggerSurge = () => {
  isGlitching.value = true
  scrambleTo(displayText.value)
}

const glitchClass = computed(() => {
  if (!isGlitching.value && currentIntensity.value === 'subtle') return ''
  if (currentIntensity.value === 'extreme') return 'glitch-extreme'
  if (currentIntensity.value === 'cyber') return 'glitch-cyber'
  return 'glitch-subtle'
})

onMounted(() => {
  displayText.value = props.initialText
  scrambleTo(props.initialText)
})

onUnmounted(() => {
  if (animationFrame) cancelAnimationFrame(animationFrame)
  if (scrambleTimer) clearTimeout(scrambleTimer)
})
</script>

<template>
  <div class="relative w-full max-w-2xl mx-auto rounded-3xl p-6 sm:p-10 overflow-hidden transition-all duration-300 border border-slate-200 dark:border-rose-900/30 bg-slate-50 dark:bg-slate-950 shadow-2xl">
    <!-- CRT Scanline Overlay -->
    <div
      v-if="showScanlines"
      class="absolute inset-0 pointer-events-none z-20 opacity-25 dark:opacity-40 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.35)_50%)] bg-[length:100%_4px]"
    ></div>

    <!-- Ambient Glow Backdrop -->
    <div class="absolute -top-24 -left-24 w-64 h-64 bg-rose-500/10 dark:bg-rose-500/20 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>

    <!-- Header bar -->
    <div class="relative z-10 flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
      <div class="flex items-center gap-2">
        <Terminal class="w-4 h-4 text-rose-500" />
        <span class="text-xs font-mono font-bold tracking-wider text-slate-700 dark:text-rose-400 uppercase">
          SIGNAL DECODER // TTY-04
        </span>
      </div>

      <div class="flex items-center gap-2">
        <button
          @click="showScanlines = !showScanlines"
          class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono border transition-all"
          :class="showScanlines
            ? 'border-rose-500/60 bg-rose-500/10 text-rose-600 dark:text-rose-400 font-semibold'
            : 'border-slate-300 dark:border-slate-800 text-slate-500'"
        >
          <Radio class="w-3 h-3" />
          <span>CRT: {{ showScanlines ? 'ON' : 'OFF' }}</span>
        </button>
      </div>
    </div>

    <!-- Main Glitch Display Window -->
    <div class="relative z-10 my-8 py-10 px-4 flex flex-col items-center justify-center text-center rounded-2xl bg-white/70 dark:bg-black/60 border border-slate-200 dark:border-slate-800/80 shadow-inner overflow-hidden min-h-[160px]">
      
      <!-- Chromatic Aberration Container -->
      <div class="relative inline-block select-none" :class="glitchClass">
        <!-- Main Layer -->
        <h2 class="text-2xl sm:text-4xl md:text-5xl font-black font-mono tracking-tight text-slate-900 dark:text-slate-100 uppercase transition-all">
          {{ displayText }}
        </h2>

        <!-- Red / Cyan Channel Splits (for Glitch Effect) -->
        <h2
          v-if="isGlitching"
          aria-hidden="true"
          class="absolute inset-0 text-2xl sm:text-4xl md:text-5xl font-black font-mono tracking-tight text-rose-500 opacity-80 pointer-events-none glitch-layer-r"
        >
          {{ displayText }}
        </h2>
        <h2
          v-if="isGlitching"
          aria-hidden="true"
          class="absolute inset-0 text-2xl sm:text-4xl md:text-5xl font-black font-mono tracking-tight text-cyan-400 opacity-80 pointer-events-none glitch-layer-c"
        >
          {{ displayText }}
        </h2>
      </div>

      <div class="mt-4 flex items-center gap-2">
        <span class="inline-block w-2 h-2 rounded-full" :class="isGlitching ? 'bg-rose-500 animate-ping' : 'bg-emerald-500'"></span>
        <span class="text-[11px] font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase">
          {{ isGlitching ? 'DECODING BITSTREAM...' : 'STABLE CARRIER LOCK' }}
        </span>
      </div>
    </div>

    <!-- Interactive Control Toolbar -->
    <div class="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
      <div class="flex items-center gap-2">
        <span class="text-xs font-mono text-slate-500 dark:text-slate-400">INTENSITY:</span>
        <div class="inline-flex rounded-xl bg-slate-200/80 dark:bg-slate-900 p-1 border border-slate-300 dark:border-slate-800 text-xs font-mono">
          <button
            v-for="lvl in (['subtle', 'cyber', 'extreme'] as const)"
            :key="lvl"
            @click="currentIntensity = lvl"
            class="px-2.5 py-1 rounded-lg capitalize transition-all"
            :class="currentIntensity === lvl
              ? 'bg-rose-500 text-white font-bold shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-rose-500'"
          >
            {{ lvl }}
          </button>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <button
          @click="triggerSurge"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:border-rose-500 hover:text-rose-500 transition-colors shadow-sm"
        >
          <Sparkles class="w-3.5 h-3.5 text-rose-500" />
          <span>Surge</span>
        </button>

        <button
          @click="triggerNext"
          class="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold bg-rose-500 text-white hover:bg-rose-600 transition-all shadow-md shadow-rose-500/25 active:scale-95"
        >
          <RefreshCw class="w-3.5 h-3.5" :class="{ 'animate-spin': isGlitching }" />
          <span>Next Text</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes glitchR {
  0% { transform: translate(0); clip-path: inset(0 0 0 0); }
  20% { transform: translate(-3px, 2px); clip-path: inset(15% 0 35% 0); }
  40% { transform: translate(-2px, -2px); clip-path: inset(40% 0 10% 0); }
  60% { transform: translate(3px, 1px); clip-path: inset(70% 0 5% 0); }
  80% { transform: translate(1px, -1px); clip-path: inset(5% 0 65% 0); }
  100% { transform: translate(0); clip-path: inset(0 0 0 0); }
}

@keyframes glitchC {
  0% { transform: translate(0); clip-path: inset(0 0 0 0); }
  20% { transform: translate(3px, -2px); clip-path: inset(30% 0 20% 0); }
  40% { transform: translate(2px, 2px); clip-path: inset(10% 0 50% 0); }
  60% { transform: translate(-3px, -1px); clip-path: inset(60% 0 15% 0); }
  80% { transform: translate(-1px, 1px); clip-path: inset(25% 0 30% 0); }
  100% { transform: translate(0); clip-path: inset(0 0 0 0); }
}

.glitch-layer-r {
  animation: glitchR 0.35s steps(2, end) infinite;
}

.glitch-layer-c {
  animation: glitchC 0.35s steps(2, end) infinite reverse;
}

.glitch-extreme {
  filter: contrast(140%) brightness(110%);
}
</style>
