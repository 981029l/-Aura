<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'

interface WordRotateProps {
  words: string[]
  duration?: number // 毫秒间隔
  class?: string
}

const props = withDefaults(defineProps<WordRotateProps>(), {
  words: () => ['更流畅', '更好看', '更好用', '更有趣'],
  duration: 2500,
})

const currentIndex = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

function nextWord() {
  currentIndex.value = (currentIndex.value + 1) % props.words.length
}

onMounted(() => {
  timer = setInterval(nextWord, props.duration)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div class="inline-block overflow-hidden py-1 align-baseline">
    <transition name="word-flip" mode="out-in">
      <span
        :key="currentIndex"
        :class="
          cn(
            'inline-block font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400',
            props.class
          )
        "
      >
        {{ props.words[currentIndex] }}
      </span>
    </transition>
  </div>
</template>

<style scoped>
.word-flip-enter-active,
.word-flip-leave-active {
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.18s ease;
}

.word-flip-enter-from {
  opacity: 0;
  transform: translateY(40%);
}

.word-flip-leave-to {
  opacity: 0;
  transform: translateY(-40%);
}
</style>
