<template>
  <div
    ref="containerRef"
    class="relative w-full py-8 overflow-hidden select-none bg-neutral-950 flex flex-col gap-4"
    :class="className"
    @wheel="handleWheel"
  >
    <!-- Row 1: Forward -->
    <div class="overflow-hidden whitespace-nowrap flex flex-nowrap w-full">
      <div
        class="flex whitespace-nowrap will-change-transform text-3xl sm:text-5xl font-black tracking-tight text-white/90"
        :style="{ transform: `translate3d(${x1}px, 0, 0)` }"
      >
        <span
          v-for="i in 8"
          :key="`r1-${i}`"
          class="inline-block mr-12 text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 via-cyan-400 to-indigo-400"
        >
          {{ text }}
        </span>
      </div>
    </div>

    <!-- Row 2: Reverse -->
    <div class="overflow-hidden whitespace-nowrap flex flex-nowrap w-full">
      <div
        class="flex whitespace-nowrap will-change-transform text-3xl sm:text-5xl font-black tracking-tight text-neutral-400"
        :style="{ transform: `translate3d(${x2}px, 0, 0)` }"
      >
        <span
          v-for="i in 8"
          :key="`r2-${i}`"
          class="inline-block mr-12 text-neutral-500 hover:text-neutral-200 transition-colors"
        >
          {{ text }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  text?: string
  defaultVelocity?: number
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  text: 'VELOCITY SCROLL INTERACTION',
  defaultVelocity: 2,
  className: '',
})

const containerRef = ref<HTMLDivElement | null>(null)
const x1 = ref(0)
const x2 = ref(-500)
const scrollVelocity = ref(0)

let rafId = 0
let lastScrollY = 0

function handleWheel(e: WheelEvent) {
  scrollVelocity.value += e.deltaY * 0.1
}

function handleWindowScroll() {
  const currentY = window.scrollY
  const dy = currentY - lastScrollY
  scrollVelocity.value += dy * 0.15
  lastScrollY = currentY
}

function animate() {
  const v1 = props.defaultVelocity + scrollVelocity.value
  const v2 = -props.defaultVelocity - scrollVelocity.value

  x1.value -= v1
  x2.value -= v2

  // Wrap infinite loop around 1200px
  if (x1.value <= -1200) x1.value += 1200
  if (x1.value > 0) x1.value -= 1200

  if (x2.value <= -1200) x2.value += 1200
  if (x2.value > 0) x2.value -= 1200

  // Damp velocity
  scrollVelocity.value *= 0.92

  rafId = requestAnimationFrame(animate)
}

onMounted(() => {
  lastScrollY = window.scrollY
  window.addEventListener('scroll', handleWindowScroll, { passive: true })
  rafId = requestAnimationFrame(animate)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleWindowScroll)
  cancelAnimationFrame(rafId)
})
</script>
