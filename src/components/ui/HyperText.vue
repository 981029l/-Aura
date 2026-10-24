<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { cn } from '@/lib/utils'

interface HyperTextProps {
  text: string
  duration?: number
  class?: string
  triggerOnHover?: boolean
}

const props = withDefaults(defineProps<HyperTextProps>(), {
  text: 'AURA_DECRYPT_V1',
  duration: 800,
  triggerOnHover: true,
})

const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'
const displayText = ref(props.text)
let animTimer: ReturnType<typeof setInterval> | null = null

function scramble() {
  if (animTimer) clearInterval(animTimer)

  const original = props.text
  let iteration = 0
  const maxIterations = original.length

  const stepTime = Math.max(25, props.duration / (maxIterations * 2))

  animTimer = setInterval(() => {
    displayText.value = original
      .split('')
      .map((char, index) => {
        if (char === ' ') return ' '
        if (index < iteration) {
          return original[index]
        }
        return alphabets[Math.floor(Math.random() * alphabets.length)]
      })
      .join('')

    if (iteration >= maxIterations) {
      if (animTimer) clearInterval(animTimer)
      displayText.value = original
    }

    iteration += 1 / 2
  }, stepTime)
}

function handleMouseEnter() {
  if (props.triggerOnHover) {
    scramble()
  }
}

onMounted(() => {
  scramble()
})

watch(() => props.text, () => {
  scramble()
})

defineExpose({
  trigger: scramble,
})
</script>

<template>
  <span
    :class="
      cn(
        'inline-block font-mono font-bold tracking-wider select-none cursor-pointer transition-colors',
        'text-zinc-900 dark:text-zinc-100 hover:text-emerald-500 dark:hover:text-emerald-400',
        props.class
      )
    "
    @mouseenter="handleMouseEnter"
  >
    {{ displayText }}
  </span>
</template>
