<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  strength?: number
  distance?: number
  class?: string
}

const props = withDefaults(defineProps<MagneticButtonProps>(), {
  strength: 0.38,
  distance: 90,
})

const buttonRef = ref<HTMLButtonElement | null>(null)
const position = ref({ x: 0, y: 0 })
const textPosition = ref({ x: 0, y: 0 })
const isHovered = ref(false)

function handleMouseMove(e: MouseEvent) {
  const btn = buttonRef.value
  if (!btn) return

  const rect = btn.getBoundingClientRect()
  const btnCenterX = rect.left + rect.width / 2
  const btnCenterY = rect.top + rect.height / 2

  const dist = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY)

  if (dist < props.distance) {
    isHovered.value = true
    const offsetX = (e.clientX - btnCenterX) * props.strength
    const offsetY = (e.clientY - btnCenterY) * props.strength

    position.value = { x: offsetX, y: offsetY }
    // 内层文字具有更强的磁吸拉伸纵深感
    textPosition.value = { x: offsetX * 0.45, y: offsetY * 0.45 }
  } else {
    reset()
  }
}

function reset() {
  isHovered.value = false
  position.value = { x: 0, y: 0 }
  textPosition.value = { x: 0, y: 0 }
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<template>
  <button
    ref="buttonRef"
    type="button"
    :class="
      cn(
        'relative inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold transition-transform select-none cursor-pointer',
        'bg-zinc-900 text-white shadow-md hover:shadow-xl dark:bg-white dark:text-zinc-900',
        'border border-zinc-700/50 dark:border-zinc-300/50',
        props.class
      )
    "
    :style="{
      transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      transitionDuration: isHovered ? '0.12s' : '0.45s',
      transitionTimingFunction: isHovered ? 'linear' : 'cubic-bezier(0.16, 1, 0.3, 1)',
    }"
  >
    <span
      class="inline-flex items-center gap-2 transition-transform"
      :style="{
        transform: `translate3d(${textPosition.x}px, ${textPosition.y}px, 0)`,
        transitionDuration: isHovered ? '0.12s' : '0.45s',
        transitionTimingFunction: isHovered ? 'linear' : 'cubic-bezier(0.16, 1, 0.3, 1)',
      }"
    >
      <slot>
        <span>了解更多</span>
        <span class="text-xs">↗</span>
      </slot>
    </span>
  </button>
</template>
