<script setup lang="ts">
import { useId, ref } from 'vue'
import { cn } from '@/lib/utils'

interface DotPatternProps {
  width?: number
  height?: number
  x?: number
  y?: number
  cx?: number
  cy?: number
  cr?: number
  glow?: boolean
  class?: string
}

const props = withDefaults(defineProps<DotPatternProps>(), {
  width: 20,
  height: 20,
  x: 0,
  y: 0,
  cx: 1,
  cy: 1,
  cr: 1,
  glow: false,
})

const id = useId()
const mouseX = ref(-9999)
const mouseY = ref(-9999)

function handleMouseMove(e: MouseEvent) {
  if (!props.glow) return
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  mouseX.value = e.clientX - rect.left
  mouseY.value = e.clientY - rect.top
}

function handleMouseLeave() {
  mouseX.value = -9999
  mouseY.value = -9999
}
</script>

<template>
  <div
    :class="
      cn(
        'absolute inset-0 h-full w-full overflow-hidden',
        props.glow ? 'pointer-events-auto' : 'pointer-events-none',
        props.class
      )
    "
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <svg
      aria-hidden="true"
      class="pointer-events-none h-full w-full fill-neutral-400/60 dark:fill-neutral-600/60 transition-colors"
    >
      <defs>
        <pattern
          :id="id"
          :width="props.width"
          :height="props.height"
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          :x="props.x"
          :y="props.y"
        >
          <circle
            :cx="props.cx"
            :cy="props.cy"
            :r="props.cr"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" :fill="`url(#${id})`" />
    </svg>

    <!-- 可选的鼠标光晕聚光灯图层 -->
    <div
      v-if="props.glow"
      class="absolute inset-0 transition-opacity duration-300"
      :style="{
        background: `radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
      }"
    />
  </div>
</template>
