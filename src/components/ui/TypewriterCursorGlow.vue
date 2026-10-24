<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Terminal, RefreshCw, Sparkles, Volume2 } from 'lucide-vue-next'

interface Props {
  phrases?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  phrases: () => [
    'Building the future of reactive UI architectures.',
    '60 FPS zero-latency physics-based motion primitives.',
    'Native Vue 3.5+ single-file component purity.',
    'Seamless Clean Light & Deep Dark mode adaptation.',
  ],
})

const currentPhraseIndex = ref(0)
const currentText = ref('')
const isDeleting = ref(false)
const typingSpeed = ref<'normal' | 'fast'>('normal')

let timeoutId: ReturnType<typeof setTimeout> | null = null

const tick = () => {
  const fullText = props.phrases[currentPhraseIndex.value]

  if (isDeleting.value) {
    currentText.value = fullText.substring(0, currentText.value.length - 1)
  } else {
    currentText.value = fullText.substring(0, currentText.value.length + 1)
  }

  let delta = typingSpeed.value === 'fast' ? 45 : 85

  if (isDeleting.value) {
    delta /= 2
  }

  if (!isDeleting.value && currentText.value === fullText) {
    delta = 1800 // pause at end
    isDeleting.value = true
  } else if (isDeleting.value && currentText.value === '') {
    isDeleting.value = false
    currentPhraseIndex.value = (currentPhraseIndex.value + 1) % props.phrases.length
    delta = 500
  }

  timeoutId = setTimeout(tick, delta)
}

const skipToNext = () => {
  if (timeoutId) clearTimeout(timeoutId)
  isDeleting.value = false
  currentPhraseIndex.value = (currentPhraseIndex.value + 1) % props.phrases.length
  currentText.value = ''
  tick()
}

onMounted(() => {
  tick()
})

onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId)
})
</script>

<template>
  <div class="relative w-full max-w-2xl mx-auto rounded-3xl p-6 sm:p-10 overflow-hidden transition-all duration-300 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-2xl font-mono">
    <!-- Header -->
    <div class="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 text-xs">
      <div class="flex items-center gap-2">
        <Terminal class="w-4 h-4 text-indigo-500" />
        <span class="font-bold tracking-wider text-slate-700 dark:text-slate-300 uppercase">
          TYPEWRITER // KINETIC CURSOR
        </span>
      </div>

      <div class="flex items-center gap-2">
        <button
          @click="typingSpeed = typingSpeed === 'normal' ? 'fast' : 'normal'"
          class="px-2.5 py-1 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 text-[11px] font-semibold"
        >
          SPEED: {{ typingSpeed.toUpperCase() }}
        </button>

        <button
          @click="skipToNext"
          class="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-semibold shadow-md shadow-indigo-600/20 active:scale-95 transition-all"
        >
          <RefreshCw class="w-3 h-3" />
          <span>Skip</span>
        </button>
      </div>
    </div>

    <!-- Main Typewriter Display Area -->
    <div class="my-8 py-10 px-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 min-h-[140px] flex items-center">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white leading-relaxed">
        <span>{{ currentText }}</span>
        <!-- Glowing Vertical Bar Cursor -->
        <span class="inline-block w-1 h-7 ml-1 bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)] rounded-full animate-cursor-blink align-middle"></span>
      </h2>
    </div>

    <!-- Live Telemetry Status Bar -->
    <div class="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
      <div class="flex items-center gap-2">
        <Volume2 class="w-3.5 h-3.5 text-indigo-500" />
        <span>HAPTIC AUDIO SYNC: ACTIVE</span>
      </div>
      <div class="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold">
        <Sparkles class="w-3.5 h-3.5" />
        <span>{{ currentPhraseIndex + 1 }} / {{ props.phrases.length }} PHRASES</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes cursorBlink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.animate-cursor-blink {
  animation: cursorBlink 0.85s step-start infinite;
}
</style>
