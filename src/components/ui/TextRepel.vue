<template>
  <div
    ref="containerRef"
    class="relative w-full min-h-[320px] sm:min-h-[380px] rounded-3xl p-6 sm:p-10 flex flex-col items-center justify-between select-none overflow-hidden border transition-colors duration-300"
    :class="[
      isDark
        ? 'bg-neutral-950/90 border-white/10 text-white'
        : 'bg-slate-50 border-slate-200/90 text-slate-900 shadow-lg',
      className
    ]"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    @touchmove="handleTouchMove"
    @touchend="handleMouseLeave"
  >
    <!-- Background Magnetic Field Force Grid -->
    <div class="pointer-events-none absolute inset-0 opacity-25">
      <div
        class="w-full h-full"
        :class="isDark
          ? 'bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]'
          : 'bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px]'"
      />
    </div>

    <!-- Mouse Magnetic Field Halo Glow -->
    <div
      class="pointer-events-none absolute rounded-full blur-2xl transition-opacity duration-200"
      :class="[
        isHovered ? 'opacity-40' : 'opacity-0',
        currentMode === 'repel'
          ? (isDark ? 'bg-cyan-500' : 'bg-sky-400')
          : (isDark ? 'bg-fuchsia-500' : 'bg-purple-500')
      ]"
      :style="{
        width: `${effectiveRadius * 2}px`,
        height: `${effectiveRadius * 2}px`,
        left: `${mouseX - effectiveRadius}px`,
        top: `${mouseY - effectiveRadius}px`,
        transform: 'translate3d(0, 0, 0)',
      }"
    />

    <!-- Top Badge & Header Indicator -->
    <div class="relative z-10 w-full flex items-center justify-between text-xs font-mono">
      <div
        class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-md transition-colors"
        :class="isDark
          ? 'bg-white/5 border-white/10 text-cyan-400'
          : 'bg-white/80 border-slate-200 text-sky-700 shadow-sm'"
      >
        <span
          class="w-1.5 h-1.5 rounded-full animate-ping"
          :class="currentMode === 'repel' ? 'bg-cyan-400' : 'bg-fuchsia-400'"
        />
        <span>{{ currentMode === 'repel' ? 'MAGNETIC REPEL FIELD' : 'MAGNETIC ATTRACT FIELD' }}</span>
      </div>

      <div
        class="text-[11px] font-mono transition-colors"
        :class="isDark ? 'text-neutral-500' : 'text-slate-400'"
      >
        <span>影响范围：</span>
        <span class="font-bold text-cyan-500">{{ effectiveRadius }}px</span>
      </div>
    </div>

    <!-- Center Magnetic Repel Typography Arena -->
    <div class="relative z-10 my-auto py-8 px-4 flex flex-wrap items-center justify-center max-w-4xl cursor-crosshair">
      <div class="inline-flex flex-wrap items-center justify-center gap-x-1 sm:gap-x-2 gap-y-3">
        <span
          v-for="(char, i) in characters"
          :key="i"
          :ref="(el) => setLetterRef(el as HTMLElement, i)"
          class="inline-block transition-transform duration-75 will-change-transform select-none"
          :class="[
            effectiveLetterClass,
            char === ' ' ? 'w-4 sm:w-6' : '',
          ]"
          :style="{
            transform: `translate3d(${letterDisplacements[i]?.x || 0}px, ${letterDisplacements[i]?.y || 0}px, 0) rotate(${letterDisplacements[i]?.rotate || 0}deg)`,
            textShadow: isDark
              ? '0 10px 30px rgba(0,0,0,0.6), 0 0 20px rgba(56,189,248,0.2)'
              : '0 4px 14px rgba(0,0,0,0.12)',
            color: getDynamicLetterColor(i),
          }"
        >
          {{ char === ' ' ? '&nbsp;' : char }}
        </span>
      </div>
    </div>

    <!-- Bottom Preset & Mode Controls Bar -->
    <div
      class="relative z-10 w-full flex flex-wrap items-center justify-between gap-3 pt-3 border-t text-xs font-mono transition-colors"
      :class="isDark ? 'border-white/10 text-neutral-400' : 'border-slate-200 text-slate-500'"
    >
      <!-- Preset Word Switcher -->
      <div class="flex items-center gap-1.5 flex-wrap">
        <span class="text-[11px] opacity-60">示例：</span>
        <button
          v-for="word in presetWords"
          :key="word"
          type="button"
          class="px-2.5 py-1 rounded-lg border text-xs font-medium transition-all cursor-pointer"
          :class="currentText === word
            ? (isDark ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300 font-bold' : 'bg-sky-100 border-sky-400 text-sky-800 font-bold')
            : (isDark ? 'bg-white/5 border-white/5 hover:bg-white/10 text-neutral-300' : 'bg-white border-slate-200 hover:bg-slate-100 text-slate-700')"
          @click="selectPreset(word)"
        >
          {{ word }}
        </button>
      </div>

      <!-- Mode & Radius Toggles -->
      <div class="flex items-center gap-2">
        <!-- Mode Switch: Repel vs Attract -->
        <div class="flex items-center p-0.5 rounded-xl border" :class="isDark ? 'bg-black/40 border-white/10' : 'bg-white border-slate-200'">
          <button
            type="button"
            class="px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer"
            :class="currentMode === 'repel'
              ? (isDark ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'bg-sky-500 text-white font-bold')
              : 'text-neutral-400 hover:text-neutral-200'"
            @click="currentMode = 'repel'"
          >
            推开
          </button>
          <button
            type="button"
            class="px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer"
            :class="currentMode === 'attract'
              ? (isDark ? 'bg-fuchsia-500/20 text-fuchsia-300 font-bold' : 'bg-purple-600 text-white font-bold')
              : 'text-neutral-400 hover:text-neutral-200'"
            @click="currentMode = 'attract'"
          >
            吸引
          </button>
        </div>

        <!-- Radius Presets -->
        <div class="hidden sm:flex items-center gap-1 border-l pl-2" :class="isDark ? 'border-white/10' : 'border-slate-200'">
          <button
            v-for="r in [90, 130, 180]"
            :key="r"
            type="button"
            class="px-2 py-1 rounded-lg text-[11px] font-mono transition-colors cursor-pointer"
            :class="effectiveRadius === r
              ? (isDark ? 'bg-white/15 text-cyan-300 font-bold' : 'bg-slate-200 text-slate-900 font-bold')
              : 'opacity-60 hover:opacity-100'"
            @click="effectiveRadius = r"
          >
            {{ r }}px
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

interface Props {
  text?: string
  className?: string
  letterClassName?: string
  radius?: number
  strength?: number
  mode?: 'repel' | 'attract'
  damping?: number
}

const props = withDefaults(defineProps<Props>(), {
  text: 'HOVER OVER ME',
  className: '',
  letterClassName: '',
  radius: 130,
  strength: 48,
  mode: 'repel',
  damping: 0.15,
})

const containerRef = ref<HTMLElement | null>(null)
const currentText = ref(props.text || 'HOVER OVER ME')
const currentMode = ref<'repel' | 'attract'>(props.mode || 'repel')
const effectiveRadius = ref(props.radius || 130)

const isDark = ref(true)
let themeObserver: MutationObserver | null = null

const presetWords = ['HOVER OVER ME', 'MAGNETIC FORCE', 'AURA REPEL', 'AURA MOTION LABS']

const characters = computed(() => (currentText.value || 'REPEL').split(''))
const letterRefs = ref<HTMLElement[]>([])
const letterOrigins = ref<{ x: number; y: number }[]>([])
const letterDisplacements = ref<{ x: number; y: number; rotate: number; vx: number; vy: number }[]>([])

// Adaptive High-Contrast Typography:
// Light Mode: text-slate-900 (DEEP SOLID BLACK)
// Dark Mode: text-white (BRILLIANT CRISP WHITE)
const effectiveLetterClass = computed(() => {
  if (props.letterClassName) {
    return props.letterClassName
  }
  return 'text-4xl sm:text-6xl md:text-7xl font-black tracking-tight transition-colors duration-150'
})

function checkTheme() {
  if (typeof document === 'undefined') return
  isDark.value = document.documentElement.classList.contains('dark') ||
    document.body.classList.contains('dark')
}

function setLetterRef(el: HTMLElement | null, idx: number) {
  if (el) letterRefs.value[idx] = el
}

let mouseX = -9999
let mouseY = -9999
const isHovered = ref(false)
let rafId = 0

function handleMouseMove(e: MouseEvent) {
  if (!containerRef.value) return
  isHovered.value = true
  const rect = containerRef.value.getBoundingClientRect()
  mouseX = e.clientX - rect.left
  mouseY = e.clientY - rect.top
}

function handleTouchMove(e: TouchEvent) {
  if (!containerRef.value || e.touches.length === 0) return
  isHovered.value = true
  const touch = e.touches[0]!
  const rect = containerRef.value.getBoundingClientRect()
  mouseX = touch.clientX - rect.left
  mouseY = touch.clientY - rect.top
}

function handleMouseLeave() {
  mouseX = -9999
  mouseY = -9999
  isHovered.value = false
}

function selectPreset(w: string) {
  currentText.value = w
  nextTick(() => {
    captureOrigins()
  })
}

function captureOrigins() {
  if (!containerRef.value) return
  const cr = containerRef.value.getBoundingClientRect()
  letterOrigins.value = letterRefs.value.map((el) => {
    if (!el) return { x: 0, y: 0 }
    const lr = el.getBoundingClientRect()
    return {
      x: lr.left - cr.left + lr.width / 2,
      y: lr.top - cr.top + lr.height / 2,
    }
  })
}

function getDynamicLetterColor(i: number) {
  const disp = letterDisplacements.value[i]
  const distDisplaced = disp ? Math.hypot(disp.x, disp.y) : 0

  if (distDisplaced > 8) {
    // When repelled/attracted, give interactive magnetic ionization accent
    if (currentMode.value === 'repel') {
      return isDark.value ? '#38bdf8' : '#0284c7'
    } else {
      return isDark.value ? '#e879f9' : '#9333ea'
    }
  }

  // Base resting color: Deep Black in light mode, White in dark mode
  return isDark.value ? '#ffffff' : '#0f172a'
}

function updatePhysics() {
  const isRepel = currentMode.value === 'repel'
  const sign = isRepel ? 1 : -1

  letterOrigins.value.forEach((origin, i) => {
    const cur = letterDisplacements.value[i] || { x: 0, y: 0, rotate: 0, vx: 0, vy: 0 }

    const dx = origin.x - mouseX
    const dy = origin.y - mouseY
    const dist = Math.hypot(dx, dy)

    let targetX = 0
    let targetY = 0

    if (dist < effectiveRadius.value && dist > 0) {
      const force = Math.pow(1 - dist / effectiveRadius.value, 1.8) * props.strength
      targetX = sign * (dx / dist) * force
      targetY = sign * (dy / dist) * force
    }

    // Spring interpolation with physics damping
    const k = 0.14
    const damp = 0.76
    cur.vx = (cur.vx + (targetX - cur.x) * k) * damp
    cur.vy = (cur.vy + (targetY - cur.y) * k) * damp
    cur.x += cur.vx
    cur.y += cur.vy
    cur.rotate = cur.x * 0.28

    letterDisplacements.value[i] = cur
  })

  rafId = requestAnimationFrame(updatePhysics)
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

  letterDisplacements.value = characters.value.map(() => ({ x: 0, y: 0, rotate: 0, vx: 0, vy: 0 }))
  setTimeout(captureOrigins, 80)
  window.addEventListener('resize', captureOrigins)
  rafId = requestAnimationFrame(updatePhysics)
})

onUnmounted(() => {
  if (themeObserver) themeObserver.disconnect()
  window.removeEventListener('resize', captureOrigins)
  cancelAnimationFrame(rafId)
})
</script>
