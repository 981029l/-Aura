<template>
  <span
    class="inline-flex flex-wrap items-center select-none cursor-pointer"
    :class="className"
    @click="replay"
  >
    <span
      v-for="(seg, i) in segments"
      :key="`${i}-${animationKey}`"
      class="inline-block overflow-hidden"
      :class="seg.isSpace ? 'w-2 sm:w-3' : 'mr-1'"
    >
      <span
        v-if="!seg.isSpace"
        class="inline-block will-change-transform font-bold transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        :class="[
          segmentClassName,
          isRevealed ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-full opacity-0 blur-sm',
        ]"
        :style="{
          transitionDelay: `${i * stagger}ms`,
        }"
      >
        {{ seg.text }}
      </span>
    </span>
  </span>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

interface Props {
  text?: string
  splitBy?: 'words' | 'characters'
  stagger?: number
  className?: string
  segmentClassName?: string
}

const props = withDefaults(defineProps<Props>(), {
  text: 'Kinetic Typography with Mask Clipping',
  splitBy: 'words',
  stagger: 45,
  className: 'text-2xl sm:text-4xl font-extrabold text-white',
  segmentClassName: '',
})

const isRevealed = ref(false)
const animationKey = ref(0)

const segments = computed(() => {
  if (props.splitBy === 'characters') {
    return props.text.split('').map((char) => ({
      text: char,
      isSpace: char === ' ',
    }))
  }
  return props.text.split(' ').map((word) => ({
    text: word,
    isSpace: false,
  }))
})

function replay() {
  isRevealed.value = false
  animationKey.value++
  setTimeout(() => {
    isRevealed.value = true
  }, 50)
}

onMounted(() => {
  setTimeout(() => {
    isRevealed.value = true
  }, 100)
})
</script>
