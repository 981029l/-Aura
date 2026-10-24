<template>
  <div
    ref="containerRef"
    class="flex items-center justify-center p-8 select-none"
    :class="className"
    :style="{ gap: `${gap}px` }"
    @mousemove="handleContainerMouseMove"
  >
    <div
      v-for="index in eyeCount"
      :key="index"
      :ref="(el) => setEyeRef(el as HTMLElement, index - 1)"
      class="relative overflow-hidden cursor-pointer"
      :style="{
        width: `${eyeSize}px`,
        height: `${eyeSize}px`,
        borderRadius: variant === 'minimal' ? '28%' : '50%',
        backgroundColor: scleraColor,
        boxShadow:
          variant === 'cyber'
            ? '0 0 20px rgba(6, 182, 212, 0.4), inset 0 2px 8px rgba(0,0,0,0.8)'
            : 'inset 0 2px 6px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.15)',
        border: variant === 'cyber' ? '2px solid #06b6d4' : '1px solid rgba(255,255,255,0.1)',
      }"
      @click="triggerWink(index - 1)"
    >
      <!-- Eyelids (for blinking) -->
      <div
        class="absolute inset-x-0 top-0 z-30 bg-[#121212] transition-all duration-100 ease-out origin-top pointer-events-none"
        :style="{
          height: blinkingStates[index - 1] ? '100%' : '0%',
        }"
      />

      <!-- Iris & Pupil Container with Smooth Physics -->
      <div
        class="absolute rounded-full transition-transform duration-75 ease-out flex items-center justify-center pointer-events-none"
        :style="{
          width: `${irisSize}px`,
          height: `${irisSize}px`,
          left: `calc(50% - ${irisSize / 2}px)`,
          top: `calc(50% - ${irisSize / 2}px)`,
          transform: `translate3d(${eyeOffsets[index - 1]?.x || 0}px, ${eyeOffsets[index - 1]?.y || 0}px, 0)`,
          background:
            variant === 'cyber'
              ? `radial-gradient(circle, ${irisColorSecondary} 0%, ${irisColor} 70%, #000 100%)`
              : `radial-gradient(circle, ${irisColorSecondary} 10%, ${irisColor} 80%, #050505 100%)`,
          boxShadow: variant === 'cyber' ? '0 0 15px rgba(6,182,212,0.8)' : '0 2px 10px rgba(0,0,0,0.5)',
        }"
      >
        <!-- Iris Pattern detail -->
        <div
          v-if="showIrisDetail"
          class="absolute inset-0 rounded-full opacity-40 mix-blend-overlay"
          style="background: repeating-conic-gradient(from 0deg, transparent 0deg 10deg, rgba(255,255,255,0.2) 10deg 20deg);"
        />

        <!-- Pupil -->
        <div
          class="rounded-full transition-all duration-200 ease-out"
          :style="{
            width: `${pupilSize * (reactivePupil ? pupilScales[index - 1] || 1 : 1)}px`,
            height: `${pupilSize * (reactivePupil ? pupilScales[index - 1] || 1 : 1)}px`,
            backgroundColor: pupilColor,
            boxShadow: variant === 'cyber' ? '0 0 10px #22d3ee' : 'inset 0 1px 3px rgba(0,0,0,0.9)',
          }"
        />

        <!-- Glint / Reflection -->
        <div
          v-if="showReflection"
          class="absolute rounded-full pointer-events-none bg-white opacity-80"
          :style="{
            width: `${irisSize * 0.22}px`,
            height: `${irisSize * 0.22}px`,
            top: `${irisSize * 0.18}px`,
            left: `${irisSize * 0.24}px`,
            filter: 'blur(0.5px)',
          }"
        />
        <div
          v-if="showReflection"
          class="absolute rounded-full pointer-events-none bg-white opacity-50"
          :style="{
            width: `${irisSize * 0.1}px`,
            height: `${irisSize * 0.1}px`,
            bottom: `${irisSize * 0.22}px`,
            right: `${irisSize * 0.26}px`,
          }"
        />
      </div>

      <!-- Cyber HUD ring -->
      <div
        v-if="variant === 'cyber'"
        class="absolute inset-1 rounded-full border border-cyan-400/20 pointer-events-none animate-spin"
        style="animation-duration: 20s;"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface Props {
  className?: string
  eyeSize?: number
  gap?: number
  irisColor?: string
  irisColorSecondary?: string
  pupilColor?: string
  scleraColor?: string
  pupilRange?: number
  showReflection?: boolean
  showIrisDetail?: boolean
  blinkInterval?: number
  eyeCount?: number
  variant?: 'realistic' | 'cartoon' | 'minimal' | 'cyber'
  reactivePupil?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  className: '',
  eyeSize: 90,
  gap: 24,
  irisColor: '#0284c7',
  irisColorSecondary: '#38bdf8',
  pupilColor: '#0a0a0a',
  scleraColor: '#fafafa',
  pupilRange: 0.85,
  showReflection: true,
  showIrisDetail: true,
  blinkInterval: 4000,
  eyeCount: 2,
  variant: 'realistic',
  reactivePupil: true,
})

const containerRef = ref<HTMLElement | null>(null)
const eyeElements = ref<HTMLElement[]>([])
const eyeOffsets = ref<{ x: number; y: number }[]>([])
const blinkingStates = ref<boolean[]>([])
const pupilScales = ref<number[]>([])

const irisSize = computed(() => props.eyeSize * 0.46)
const pupilSize = computed(() => irisSize.value * 0.48)
const maxOffset = computed(() => ((props.eyeSize / 2) - (irisSize.value / 2)) * props.pupilRange)

function setEyeRef(el: HTMLElement | null, idx: number) {
  if (el) eyeElements.value[idx] = el
}

let mouseX = 0
let mouseY = 0
let rafId = 0
const blinkTimers: ReturnType<typeof setInterval>[] = []

function handleMouseMove(e: MouseEvent) {
  mouseX = e.clientX
  mouseY = e.clientY
}

function handleContainerMouseMove(e: MouseEvent) {
  mouseX = e.clientX
  mouseY = e.clientY
}

function updatePhysics() {
  eyeElements.value.forEach((el, idx) => {
    if (!el) return
    const rect = el.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const dx = mouseX - centerX
    const dy = mouseY - centerY
    const dist = Math.sqrt(dx * dx + dy * dy)
    const angle = Math.atan2(dy, dx)

    const limitedDist = Math.min(dist * 0.12, maxOffset.value)
    const targetX = Math.cos(angle) * limitedDist
    const targetY = Math.sin(angle) * limitedDist

    const cur = eyeOffsets.value[idx] || { x: 0, y: 0 }
    // Smooth lerp
    const lerpX = cur.x + (targetX - cur.x) * 0.2
    const lerpY = cur.y + (targetY - cur.y) * 0.2
    eyeOffsets.value[idx] = { x: lerpX, y: lerpY }

    // Pupil dilation based on distance
    if (props.reactivePupil) {
      const scale = Math.max(0.75, Math.min(1.35, 1 + (dist - 200) / 800))
      pupilScales.value[idx] = scale
    }
  })

  rafId = requestAnimationFrame(updatePhysics)
}

function triggerWink(idx: number) {
  blinkingStates.value[idx] = true
  setTimeout(() => {
    blinkingStates.value[idx] = false
  }, 160)
}

onMounted(() => {
  // Init arrays
  for (let i = 0; i < props.eyeCount; i++) {
    eyeOffsets.value[i] = { x: 0, y: 0 }
    blinkingStates.value[i] = false
    pupilScales.value[i] = 1

    if (props.blinkInterval > 0) {
      const interval = setInterval(() => {
        if (Math.random() > 0.15) {
          triggerWink(i)
        }
      }, props.blinkInterval + (i * 300) + Math.random() * 1200)
      blinkTimers.push(interval)
    }
  }

  // Set initial mouse coords to viewport center
  mouseX = window.innerWidth / 2
  mouseY = window.innerHeight / 2

  window.addEventListener('mousemove', handleMouseMove)
  rafId = requestAnimationFrame(updatePhysics)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  cancelAnimationFrame(rafId)
  blinkTimers.forEach(clearInterval)
})
</script>
