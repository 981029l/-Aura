<template>
  <button
    type="button"
    class="relative inline-flex items-center justify-center cursor-pointer select-none px-6 py-3 rounded-xl border border-white/10 bg-neutral-900 text-neutral-100 font-bold text-xl sm:text-2xl tracking-wide shadow-lg hover:border-cyan-400/40 transition-colors"
    :class="className"
    style="perspective: 600px;"
    @click="toggleSwap"
    @mouseenter="triggerHover(true)"
    @mouseleave="triggerHover(false)"
  >
    <!-- First Word Characters -->
    <span class="inline-flex">
      <span
        v-for="(char, i) in chars1"
        :key="`w1-${i}`"
        class="inline-block transition-all ease-in-out will-change-transform"
        :style="{
          transform: isSwapped ? 'rotateX(85deg) translateY(-8px)' : 'rotateX(0deg) translateY(0)',
          opacity: isSwapped ? 0 : 1,
          transitionDuration: `${duration}ms`,
          transitionDelay: `${i * stagger}ms`,
          transformOrigin: 'center top',
        }"
      >
        {{ char === ' ' ? '&nbsp;' : char }}
      </span>
    </span>

    <!-- Second Word Characters (Reveals from below) -->
    <span class="absolute inline-flex" :class="toClassName">
      <span
        v-for="(char, i) in chars2"
        :key="`w2-${i}`"
        class="inline-block transition-all ease-in-out will-change-transform text-cyan-400"
        :style="{
          transform: isSwapped ? 'rotateX(0deg) translateY(0)' : 'rotateX(-85deg) translateY(8px)',
          opacity: isSwapped ? 1 : 0,
          transitionDuration: `${duration}ms`,
          transitionDelay: `${i * stagger}ms`,
          transformOrigin: 'center bottom',
        }"
      >
        {{ char === ' ' ? '&nbsp;' : char }}
      </span>
    </span>
  </button>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  word1?: string
  word2?: string
  duration?: number
  stagger?: number
  className?: string
  toClassName?: string
}

const props = withDefaults(defineProps<Props>(), {
  word1: 'AURA DESIGN',
  word2: 'MOTION ENGINE',
  duration: 350,
  stagger: 35,
  className: '',
  toClassName: '',
})

const isSwapped = ref(false)

const chars1 = computed(() => props.word1.split(''))
const chars2 = computed(() => props.word2.split(''))

function toggleSwap() {
  isSwapped.value = !isSwapped.value
}

function triggerHover(hovered: boolean) {
  isSwapped.value = hovered
}
</script>
