<template>
  <div
    class="relative w-full min-h-[320px] sm:min-h-[380px] rounded-3xl p-6 sm:p-10 flex flex-col items-center justify-between select-none overflow-hidden border transition-colors duration-300"
    :class="[
      isDark
        ? 'bg-neutral-950/90 border-white/10 text-white'
        : 'bg-slate-50 border-slate-200/90 text-slate-900 shadow-lg',
      className
    ]"
    @click="handleContainerClick"
  >
    <!-- Background Atmospheric Grid & Light Accents -->
    <div class="pointer-events-none absolute inset-0 opacity-25">
      <div
        class="w-full h-full"
        :class="isDark
          ? 'bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]'
          : 'bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px]'"
      />
    </div>

    <!-- Top Badge & Hint -->
    <div class="relative z-10 w-full flex items-center justify-between text-xs font-mono">
      <div
        class="inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-md transition-colors"
        :class="isDark
          ? 'bg-white/5 border-white/10 text-cyan-400'
          : 'bg-white/80 border-slate-200 text-sky-700 shadow-sm'"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        <span>3D KINETIC CASCADE</span>
      </div>

      <span
        class="hidden sm:inline-block text-[11px] transition-colors"
        :class="isDark ? 'text-neutral-500' : 'text-slate-400'"
      >
        点击文字重新播放
      </span>
    </div>

    <!-- Center Cascade Stage -->
    <div
      class="relative z-10 my-auto py-8 px-4 flex flex-wrap items-center justify-center cursor-pointer group"
      style="perspective: 1200px;"
      :title="'点击重新播放'"
      @mouseenter="handleMouseEnter"
    >
      <div
        class="inline-flex flex-wrap items-center justify-center gap-x-1 sm:gap-x-2 gap-y-2"
        style="transform-style: preserve-3d;"
      >
        <span
          v-for="(char, i) in characters"
          :key="`${char}-${i}-${animationKey}`"
          class="relative inline-flex items-center justify-center overflow-visible will-change-transform char-cascade-item"
          :style="{
            animationDelay: `${i * effectiveStagger}ms`,
            animationDuration: '650ms',
          }"
        >
          <!-- Primary Character Card -->
          <span
            class="inline-block transition-transform duration-200 group-hover:scale-110"
            :class="[
              letterClass,
              char === ' ' ? 'w-3 sm:w-5' : '',
            ]"
            :style="{
              textShadow: isDark
                ? '0 10px 25px rgba(0,0,0,0.5), 0 0 15px rgba(56,189,248,0.2)'
                : '0 8px 18px rgba(0,0,0,0.08), 0 0 10px rgba(2,132,199,0.15)',
            }"
          >
            {{ char === ' ' ? '&nbsp;' : char }}
          </span>

          <!-- Drop Reflection / Shadow Underneath -->
          <span
            v-if="char !== ' '"
            class="pointer-events-none absolute -bottom-2 inset-x-0 h-1 rounded-full blur-sm transition-opacity duration-500 opacity-30"
            :class="isDark ? 'bg-cyan-400' : 'bg-sky-500'"
          />
        </span>
      </div>
    </div>

    <!-- Bottom Interactive Control & Preset Bar -->
    <div
      class="relative z-10 w-full flex flex-wrap items-center justify-between gap-3 pt-3 border-t text-xs font-mono transition-colors"
      :class="isDark ? 'border-white/10 text-neutral-400' : 'border-slate-200 text-slate-500'"
      @click.stop
    >
      <!-- Quick Presets -->
      <div class="flex items-center gap-1.5 flex-wrap">
        <span class="text-[11px] opacity-60">示例:</span>
        <button
          v-for="p in presets"
          :key="p"
          type="button"
          class="px-2.5 py-1 rounded-lg border text-xs font-medium transition-all cursor-pointer"
          :class="currentText === p
            ? (isDark ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300 font-bold' : 'bg-sky-100 border-sky-400 text-sky-800 font-bold')
            : (isDark ? 'bg-white/5 border-white/5 hover:bg-white/10 text-neutral-300' : 'bg-white border-slate-200 hover:bg-slate-100 text-slate-700')"
          @click="selectPreset(p)"
        >
          {{ p }}
        </button>
      </div>

      <!-- Action Steppers -->
      <div class="flex items-center gap-2">
        <button
          type="button"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-semibold transition-all cursor-pointer shadow-sm active:scale-95"
          :class="isDark
            ? 'bg-cyan-500/15 hover:bg-cyan-500/25 border-cyan-400/30 text-cyan-300'
            : 'bg-sky-500 hover:bg-sky-600 border-sky-600 text-white shadow-sky-500/25'"
          title="重新播放"
          @click="trigger"
        >
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="23 4 23 10 17 10" />
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
          </svg>
          <span>⟳ 重新播放</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface Props {
  text?: string
  className?: string
  letterClassName?: string
  staggerDuration?: number
  triggerOnClick?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  text: 'CASCADE EFFECT',
  className: '',
  letterClassName: '',
  staggerDuration: 45,
  triggerOnClick: false,
})

const emit = defineEmits<{
  (e: 'complete'): void
}>()

const currentText = ref(props.text || 'CASCADE EFFECT')
const animationKey = ref(0)
const isDark = ref(true)
let themeObserver: MutationObserver | null = null

const presets = ['CASCADE EFFECT', 'KINETIC 3D', 'AURA INTERFACE', 'AURA MOTION LABS']

const effectiveStagger = computed(() => {
  return props.staggerDuration > 0 ? props.staggerDuration : 45
})

const characters = computed(() => {
  return (currentText.value || 'CASCADE').split('')
})

const letterClass = computed(() => {
  if (props.letterClassName) {
    return props.letterClassName
  }
  return 'text-3xl sm:text-5xl md:text-6xl font-black tracking-tight transition-colors duration-200'
})

function checkTheme() {
  if (typeof document === 'undefined') return
  isDark.value = document.documentElement.classList.contains('dark') ||
    document.body.classList.contains('dark')
}

function trigger() {
  animationKey.value++
  const totalDuration = characters.value.length * effectiveStagger.value + 650
  setTimeout(() => {
    emit('complete')
  }, totalDuration)
}

function handleMouseEnter() {
  if (!props.triggerOnClick) {
    trigger()
  }
}

function handleContainerClick() {
  trigger()
}

function selectPreset(p: string) {
  currentText.value = p
  trigger()
}

onMounted(() => {
  checkTheme()
  if (typeof document !== 'undefined') {
    themeObserver = new MutationObserver(() => {
      checkTheme()
    })
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
  }

  // Auto cascade on mount for an immediate delightful impression
  setTimeout(() => {
    trigger()
  }, 150)
})

onUnmounted(() => {
  if (themeObserver) themeObserver.disconnect()
})
</script>

<style scoped>
@keyframes letterWaterfallDrop {
  0% {
    opacity: 0;
    transform: translate3d(0, -55px, 60px) rotateX(-80deg) scale(0.65);
    filter: blur(8px);
  }
  60% {
    opacity: 1;
    filter: blur(0);
    transform: translate3d(0, 8px, -15px) rotateX(12deg) scale(1.06);
  }
  80% {
    transform: translate3d(0, -3px, 5px) rotateX(-5deg) scale(0.98);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translate3d(0, 0, 0) rotateX(0deg) scale(1);
  }
}

.char-cascade-item {
  opacity: 0;
  animation-name: letterWaterfallDrop;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
  transform-style: preserve-3d;
}
</style>
