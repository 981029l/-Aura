<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'

interface ElasticSliderProps {
  modelValue?: number
  min?: number
  max?: number
  step?: number
  class?: string
}

const props = withDefaults(defineProps<ElasticSliderProps>(), {
  modelValue: 50,
  min: 0,
  max: 100,
  step: 1,
})

const emit = defineEmits<{
  (e: 'update:modelValue', val: number): void
}>()

const trackRef = ref<HTMLDivElement | null>(null)
const internalValue = ref(props.modelValue)
const isDragging = ref(false)
const rubberScaleX = ref(1)

const percentage = computed(() => {
  const range = props.max - props.min
  return Math.max(0, Math.min(100, ((internalValue.value - props.min) / range) * 100))
})

function updateFromEvent(e: MouseEvent) {
  const track = trackRef.value
  if (!track) return

  const rect = track.getBoundingClientRect()
  const rawX = e.clientX - rect.left
  const ratio = rawX / rect.width

  // 边界弹性拉伸检测
  if (ratio < 0) {
    rubberScaleX.value = 1 + Math.min(0.25, Math.abs(ratio) * 0.4)
  } else if (ratio > 1) {
    rubberScaleX.value = 1 + Math.min(0.25, (ratio - 1) * 0.4)
  } else {
    rubberScaleX.value = 1
  }

  const clampedRatio = Math.max(0, Math.min(1, ratio))
  const range = props.max - props.min
  let val = props.min + clampedRatio * range
  val = Math.round(val / props.step) * props.step
  internalValue.value = val
  emit('update:modelValue', val)
}

function handleMouseDown(e: MouseEvent) {
  isDragging.value = true
  updateFromEvent(e)
}

function handleMouseMove(e: MouseEvent) {
  if (isDragging.value) {
    updateFromEvent(e)
  }
}

function handleMouseUp() {
  if (isDragging.value) {
    isDragging.value = false
    rubberScaleX.value = 1
  }
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseup', handleMouseUp)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseup', handleMouseUp)
})
</script>

<template>
  <div :class="cn('relative w-full max-w-sm select-none py-4', props.class)">
    <!-- 轨道主体 -->
    <div
      ref="trackRef"
      class="relative h-2 w-full rounded-full bg-zinc-200 dark:bg-zinc-800 cursor-pointer transition-transform"
      :style="{
        transform: `scaleX(${rubberScaleX})`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }"
      @mousedown="handleMouseDown"
    >
      <!-- 已填充高亮激活条 -->
      <div
        class="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500"
        :style="{ width: `${percentage}%` }"
      />

      <!-- 滑块指示器与弹性胶囊浮层 -->
      <div
        class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none"
        :style="{ left: `${percentage}%` }"
      >
        <!-- 弹簧光标球 -->
        <div
          class="h-5 w-5 rounded-full border-2 border-white bg-blue-600 shadow-md transition-transform dark:border-zinc-900"
          :class="isDragging ? 'scale-125' : 'hover:scale-110'"
        />

        <!-- 悬停/拖拽动态气泡 -->
        <div
          class="absolute -top-8 px-2 py-0.5 rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-[10px] font-mono font-bold shadow-md transition-all pointer-events-none"
          :class="isDragging ? 'opacity-100 -translate-y-1 scale-100' : 'opacity-0 scale-90'"
        >
          {{ internalValue }}
        </div>
      </div>
    </div>
  </div>
</template>
