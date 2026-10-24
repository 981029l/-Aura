<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface MeteorsProps {
  /** 流星数量，默认 20 */
  number?: number
  /** 流星划过倾角，默认 215 度 */
  angle?: number
  /** 最小延迟秒数 */
  minDelay?: number
  /** 最大延迟秒数 */
  maxDelay?: number
  /** 最小划过时间（秒） */
  minDuration?: number
  /** 最大划过时间（秒） */
  maxDuration?: number
  class?: string
}

const props = withDefaults(defineProps<MeteorsProps>(), {
  number: 20,
  angle: 215,
  minDelay: 0.2,
  maxDelay: 1.2,
  minDuration: 2,
  maxDuration: 8,
})

// 生成稳定的流星随机属性，避免每次渲染抖动
const meteorStyles = computed(() => {
  return Array.from({ length: props.number }).map(() => {
    const top = Math.floor(Math.random() * 100)
    const left = Math.floor(Math.random() * 100)
    const delay = (
      Math.random() * (props.maxDelay - props.minDelay) +
      props.minDelay
    ).toFixed(2)
    const duration = (
      Math.random() * (props.maxDuration - props.minDuration) +
      props.minDuration
    ).toFixed(2)

    return {
      top: `${top}%`,
      left: `${left}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
    }
  })
})
</script>

<template>
  <div :class="cn('pointer-events-none absolute inset-0 overflow-hidden', props.class)">
    <span
      v-for="(style, index) in meteorStyles"
      :key="index"
      :style="{
        ...style,
        '--angle': `${props.angle}deg`,
      }"
      class="animate-meteor absolute h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[var(--angle)] dark:bg-sky-400 before:absolute before:top-1/2 before:-translate-y-1/2 before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-slate-500 before:to-transparent dark:before:from-sky-400"
    />
  </div>
</template>

<style scoped>
.animate-meteor {
  animation: meteor-anim var(--duration, 5s) linear infinite;
  will-change: transform, opacity;
}

@keyframes meteor-anim {
  0% {
    transform: rotate(var(--angle, 215deg)) translateX(0);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: rotate(var(--angle, 215deg)) translateX(-500px);
    opacity: 0;
  }
}
</style>
