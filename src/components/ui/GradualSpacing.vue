<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { cn } from '@/lib/utils'

interface GradualSpacingProps {
  text: string
  duration?: number
  delayMultiple?: number
  class?: string
}

const props = withDefaults(defineProps<GradualSpacingProps>(), {
  text: 'AURA MOTION SYSTEM',
  duration: 0.5,
  delayMultiple: 0.04,
})

const isAnimated = ref(false)

function trigger() {
  isAnimated.value = false
  setTimeout(() => {
    isAnimated.value = true
  }, 50)
}

onMounted(() => {
  trigger()
})

watch(() => props.text, trigger)

defineExpose({
  replay: trigger,
})
</script>

<template>
  <div class="flex justify-center space-x-1 select-none">
    <span
      v-for="(char, i) in props.text.split('')"
      :key="i"
      class="inline-block transition-all"
      :style="{
        transitionDuration: `${props.duration}s`,
        transitionDelay: `${i * props.delayMultiple}s`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: isAnimated ? 1 : 0,
        filter: isAnimated ? 'blur(0px)' : 'blur(10px)',
        transform: isAnimated ? 'translate3d(0, 0, 0)' : 'translate3d(-20px, 0, 0)',
        letterSpacing: isAnimated ? 'normal' : '-0.5em',
      }"
      :class="
        cn(
          'font-extrabold tracking-tight text-zinc-900 dark:text-white',
          props.class
        )
      "
    >
      {{ char === ' ' ? '&nbsp;' : char }}
    </span>
  </div>
</template>
