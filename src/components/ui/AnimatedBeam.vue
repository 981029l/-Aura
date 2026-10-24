<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, useId, type Ref } from 'vue'
import { cn } from '@/lib/utils'

type ElementTarget = HTMLElement | Ref<HTMLElement | null> | null | undefined

interface AnimatedBeamProps {
  /** 容器 Ref 或 HTMLElement */
  containerRef?: ElementTarget
  /** 起点元素 Ref 或 HTMLElement */
  fromRef?: ElementTarget
  /** 终点元素 Ref 或 HTMLElement */
  toRef?: ElementTarget
  /** 路径弯曲度，0 为直线，正负值决定向上或向下拱起 */
  curvature?: number
  /** 是否反向流动 */
  reverse?: boolean
  /** 底轨路径颜色 */
  pathColor?: string
  /** 路径线宽，默认 2px */
  pathWidth?: number
  /** 底轨透明度，默认 0.2 */
  pathOpacity?: number
  /** 能量光球起始颜色 */
  gradientStartColor?: string
  /** 能量光球结束颜色 */
  gradientStopColor?: string
  /** 能量球流动周期（秒），默认 3 */
  duration?: number
  /** 延迟启动秒数 */
  delay?: number
  /** 起点 X 轴微调偏移 */
  startXOffset?: number
  /** 起点 Y 轴微调偏移 */
  startYOffset?: number
  /** 终点 X 轴微调偏移 */
  endXOffset?: number
  /** 终点 Y 轴微调偏移 */
  endYOffset?: number
  class?: string
}

const props = withDefaults(defineProps<AnimatedBeamProps>(), {
  curvature: 0,
  reverse: false,
  pathColor: '#94a3b8',
  pathWidth: 2,
  pathOpacity: 0.2,
  gradientStartColor: '#38bdf8',
  gradientStopColor: '#6366f1',
  duration: 3,
  delay: 0,
  startXOffset: 0,
  startYOffset: 0,
  endXOffset: 0,
  endYOffset: 0,
})

const id = useId()
const pathD = ref<string>('')
const svgDimensions = ref<{ width: number; height: number }>({ width: 0, height: 0 })

function resolveEl(target: ElementTarget): HTMLElement | null {
  if (!target) return null
  if ('value' in target) return target.value
  if (target instanceof HTMLElement) return target
  return null
}

function updatePath() {
  const container = resolveEl(props.containerRef)
  const fromEl = resolveEl(props.fromRef)
  const toEl = resolveEl(props.toRef)

  if (!container || !fromEl || !toEl) return

  const containerRect = container.getBoundingClientRect()
  const fromRect = fromEl.getBoundingClientRect()
  const toRect = toEl.getBoundingClientRect()

  svgDimensions.value = {
    width: containerRect.width,
    height: containerRect.height,
  }

  const startX = fromRect.left - containerRect.left + fromRect.width / 2 + props.startXOffset
  const startY = fromRect.top - containerRect.top + fromRect.height / 2 + props.startYOffset
  const endX = toRect.left - containerRect.left + toRect.width / 2 + props.endXOffset
  const endY = toRect.top - containerRect.top + toRect.height / 2 + props.endYOffset

  const midX = (startX + endX) / 2
  const midY = (startY + endY) / 2
  const controlX = midX
  const controlY = midY - props.curvature

  if (props.curvature === 0) {
    pathD.value = `M ${startX},${startY} L ${endX},${endY}`
  } else {
    pathD.value = `M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`
  }
}

let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  updatePath()
  window.addEventListener('resize', updatePath)

  const container = resolveEl(props.containerRef)
  if (container) {
    resizeObserver = new ResizeObserver(() => updatePath())
    resizeObserver.observe(container)
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', updatePath)
  if (resizeObserver) resizeObserver.disconnect()
})

watch(
  [
    () => resolveEl(props.containerRef),
    () => resolveEl(props.fromRef),
    () => resolveEl(props.toRef),
    () => props.curvature,
  ],
  () => {
    updatePath()
  }
)
</script>

<template>
  <svg
    :width="svgDimensions.width"
    :height="svgDimensions.height"
    :viewBox="`0 0 ${svgDimensions.width} ${svgDimensions.height}`"
    :class="
      cn(
        'pointer-events-none absolute inset-0 h-full w-full select-none overflow-visible',
        props.class
      )
    "
  >
    <!-- 底层固定虚线/实线轨道 -->
    <path
      :d="pathD"
      fill="none"
      :stroke="props.pathColor"
      :stroke-width="props.pathWidth"
      :stroke-opacity="props.pathOpacity"
      stroke-linecap="round"
    />

    <!-- 上层高光能量流动光束 -->
    <path
      :d="pathD"
      fill="none"
      :stroke="`url(#beam-gradient-${id})`"
      :stroke-width="props.pathWidth"
      stroke-linecap="round"
    />

    <defs>
      <linearGradient
        :id="`beam-gradient-${id}`"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" :stop-color="props.gradientStartColor" stop-opacity="0" />
        <stop offset="50%" :stop-color="props.gradientStartColor" stop-opacity="1" />
        <stop offset="100%" :stop-color="props.gradientStopColor" stop-opacity="0" />

        <animate
          attributeName="x1"
          :from="props.reverse ? '100%' : '-50%'"
          :to="props.reverse ? '-50%' : '100%'"
          :dur="`${props.duration}s`"
          :begin="`${props.delay}s`"
          repeatCount="indefinite"
        />
        <animate
          attributeName="x2"
          :from="props.reverse ? '150%' : '0%'"
          :to="props.reverse ? '0%' : '150%'"
          :dur="`${props.duration}s`"
          :begin="`${props.delay}s`"
          repeatCount="indefinite"
        />
      </linearGradient>
    </defs>
  </svg>
</template>
