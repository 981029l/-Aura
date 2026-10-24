<template>
  <div
    ref="containerRef"
    class="relative grid place-items-center select-none"
    :class="className"
    :style="{
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gridTemplateRows: `repeat(${rows}, 1fr)`,
      width: containerSize,
      height: containerSize,
    }"
  >
    <div
      v-for="(_, i) in totalSpans"
      :key="i"
      :ref="(el) => setLineRef(el as HTMLElement, i)"
      class="flex items-center justify-center transition-transform duration-75 ease-out"
      :style="{
        transform: `rotate(${rotations[i] || baseAngle}deg)`,
      }"
    >
      <div
        class="rounded-full pointer-events-none transition-colors"
        :style="{
          backgroundColor: lineColor,
          width: lineWidth,
          height: lineHeight,
          boxShadow: `0 0 10px ${lineColor}40`,
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface Props {
  rows?: number
  columns?: number
  containerSize?: string
  lineColor?: string
  lineWidth?: string
  lineHeight?: string
  baseAngle?: number
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  rows: 9,
  columns: 9,
  containerSize: '360px',
  lineColor: '#6366f1',
  lineWidth: '3px',
  lineHeight: '28px',
  baseAngle: 0,
  className: '',
})

const containerRef = ref<HTMLDivElement | null>(null)
const totalSpans = computed(() => Array.from({ length: props.rows * props.columns }, (_, i) => i))
const lineRefs = ref<HTMLElement[]>([])
const rotations = ref<number[]>([])

function setLineRef(el: HTMLElement | null, idx: number) {
  if (el) lineRefs.value[idx] = el
}

let mouseX = -1000
let mouseY = -1000
let rafId = 0

function handleMouseMove(e: MouseEvent) {
  mouseX = e.clientX
  mouseY = e.clientY
}

function updateRotations() {
  if (containerRef.value && mouseX > -500) {
    lineRefs.value.forEach((line, idx) => {
      if (!line) return
      const rect = line.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const dx = mouseX - centerX
      const dy = mouseY - centerY
      const angle = (Math.atan2(dy, dx) * 180) / Math.PI

      rotations.value[idx] = angle + props.baseAngle
    })
  }
  rafId = requestAnimationFrame(updateRotations)
}

onMounted(() => {
  rotations.value = Array(props.rows * props.columns).fill(props.baseAngle)
  window.addEventListener('mousemove', handleMouseMove)
  rafId = requestAnimationFrame(updateRotations)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  cancelAnimationFrame(rafId)
})
</script>
