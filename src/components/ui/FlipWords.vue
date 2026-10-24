<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'

interface FlipWordsProps {
  words: string[]
  duration?: number
  class?: string
}

const props = withDefaults(defineProps<FlipWordsProps>(), {
  words: () => ['更流畅', '更好看', '更好用', '更有趣'],
  duration: 3000,
})

const currentIndex = ref(0)
const isVisible = ref(true)
let timer: ReturnType<typeof setInterval> | null = null

function cycleWords() {
  isVisible.value = false
  setTimeout(() => {
    currentIndex.value = (currentIndex.value + 1) % props.words.length
    isVisible.value = true
  }, 450)
}

onMounted(() => {
  timer = setInterval(cycleWords, props.duration)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <span class="inline-block relative overflow-hidden py-1">
    <span
      v-for="(letter, i) in props.words[currentIndex].split('')"
      :key="`${currentIndex}-${i}`"
      class="inline-block transition-all"
      :style="{
        transitionDuration: '0.4s',
        transitionDelay: `${i * 0.04}s`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.9)',
        filter: isVisible ? 'blur(0px)' : 'blur(4px)',
      }"
      :class="
        cn(
          'font-extrabold text-neutral-900 dark:text-neutral-100',
          props.class
        )
      "
    >
      {{ letter }}
    </span>
  </span>
</template>
