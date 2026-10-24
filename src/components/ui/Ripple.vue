<script setup lang="ts">
import { cn } from '@/lib/utils'

interface RippleProps {
  /** 中心最内层圆环直径，默认 210 */
  mainCircleSize?: number
  /** 中心圆环不透明度 (0 ~ 1)，默认 0.24 */
  mainCircleOpacity?: number
  /** 涟漪环层数，默认 8 */
  numCircles?: number
  class?: string
}

const props = withDefaults(defineProps<RippleProps>(), {
  mainCircleSize: 210,
  mainCircleOpacity: 0.24,
  numCircles: 8,
})
</script>

<template>
  <div
    :class="
      cn(
        'pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]',
        props.class
      )
    "
  >
    <div
      v-for="i in props.numCircles"
      :key="i"
      :style="{
        width: `${props.mainCircleSize + (i - 1) * 70}px`,
        height: `${props.mainCircleSize + (i - 1) * 70}px`,
        opacity: Math.max(0.04, props.mainCircleOpacity - (i - 1) * 0.025),
        animationDelay: `${(i - 1) * 0.06}s`,
        borderStyle: i === props.numCircles ? 'dashed' : 'solid',
        borderWidth: '1px',
      }"
      class="animate-ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-blue-500/40 bg-blue-500/5 shadow-[0_0_16px_rgba(59,130,246,0.1)] dark:border-sky-400/30 dark:bg-sky-400/5"
    />
  </div>
</template>

<style scoped>
.animate-ripple {
  animation: ripple-pulse 3.6s ease-in-out infinite;
  will-change: transform;
}

@keyframes ripple-pulse {
  0%,
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(0.9);
  }
}
</style>
