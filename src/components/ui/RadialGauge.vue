<script setup lang="ts">
import { computed, onUnmounted, ref, useId, watch } from 'vue'
import { cn } from '@/lib/utils'

interface RadialGaugeProps {
  value: number
  size?: number
  strokeWidth?: number
  label?: string
  unit?: string
  min?: number
  max?: number
  step?: number
  thresholds?: boolean
  draggable?: boolean
  class?: string
}

const props = withDefaults(defineProps<RadialGaugeProps>(), {
  size: 180,
  strokeWidth: 12,
  label: '',
  unit: '%',
  min: 0,
  max: 100,
  step: 1,
  thresholds: true,
  draggable: false,
})

const emit = defineEmits<{
  (e: 'update:value', val: number): void
  (e: 'change', val: number): void
}>()

const uniqueId = useId()
const gradientId = computed(() => `gauge-grad-${uniqueId}`)

const center = computed(() => props.size / 2)
const radius = computed(() => center.value - props.strokeWidth - 6)

// 240度环形弧线（以 12 点钟为 0°，从左下 -120° 顺时针到右下 120°，即底部开口 120°）
const startAngle = -120
const endAngle = 120
const totalAngle = endAngle - startAngle // 240 度

// 将极坐标角度转换为笛卡尔坐标
function polarToCartesian(cx: number, cy: number, r: number, angleInDegrees: number) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0
  return {
    x: cx + r * Math.cos(angleInRadians),
    y: cy + r * Math.sin(angleInRadians),
  }
}

// 生成 SVG Arc 路径指令（从起点顺时针绘制到终点，与进度增长方向一致）
function describeArc(cx: number, cy: number, r: number, startA: number, endA: number) {
  const start = polarToCartesian(cx, cy, r, startA)
  const end = polarToCartesian(cx, cy, r, endA)
  const largeArcFlag = endA - startA <= 180 ? '0' : '1'
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`
}

const bgArcPath = computed(() => describeArc(center.value, center.value, radius.value, startAngle, endAngle))

// 弧长计算
const arcLength = computed(() => {
  return (totalAngle / 360) * 2 * Math.PI * radius.value
})

const percentage = computed(() => {
  const range = props.max - props.min
  if (range <= 0) return 0
  const clamped = Math.min(Math.max(props.value, props.min), props.max)
  return (clamped - props.min) / range
})

const isDragging = ref(false)

// 弧线与末端圆点共用同一个缓动中的进度值，保证动画过程中圆点始终贴合弧线末端；拖拽时直接跟手不做缓动
const animatedPercentage = ref(percentage.value)
let rafId = 0

// 与 cubic-bezier(0.16, 1, 0.3, 1) 等价的 easeOutExpo 缓动
function easeOutExpo(t: number) {
  return t >= 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

watch(percentage, (to) => {
  cancelAnimationFrame(rafId)
  if (isDragging.value) {
    animatedPercentage.value = to
    return
  }
  const from = animatedPercentage.value
  const startedAt = performance.now()
  const duration = 700
  const tick = (now: number) => {
    const t = Math.min((now - startedAt) / duration, 1)
    animatedPercentage.value = from + (to - from) * easeOutExpo(t)
    if (t < 1) rafId = requestAnimationFrame(tick)
  }
  rafId = requestAnimationFrame(tick)
})

onUnmounted(() => cancelAnimationFrame(rafId))

const strokeDashoffset = computed(() => {
  return arcLength.value - animatedPercentage.value * arcLength.value
})

// 根据百分比动态匹配警示色阶
const colorScheme = computed(() => {
  if (!props.thresholds) return { stroke: '#3b82f6', text: 'text-blue-500' }
  const pct = percentage.value * 100
  if (pct >= 90) return { stroke: '#f43f5e', text: 'text-rose-500' }
  if (pct >= 75) return { stroke: '#f59e0b', text: 'text-amber-500' }
  return { stroke: '#10b981', text: 'text-emerald-500' }
})

// 针尖/流光触点坐标
const tipPoint = computed(() => {
  const currentAngle = startAngle + animatedPercentage.value * totalAngle
  return polarToCartesian(center.value, center.value, radius.value, currentAngle)
})

// ================= 拖拽与键盘交互（draggable 开启时生效） =================
const svgRef = ref<SVGSVGElement | null>(null)
let lastValue = props.value

// 按 step 吸附并限制在 [min, max] 区间内
function normalizeValue(val: number) {
  const stepped = props.min + Math.round((val - props.min) / props.step) * props.step
  const bounded = Math.min(Math.max(stepped, props.min), props.max)
  // 处理浮点精度
  return Math.round(bounded * 1e6) / 1e6
}

function commitValue(val: number) {
  const next = normalizeValue(val)
  lastValue = next
  if (next !== props.value) emit('update:value', next)
}

// 计算指针相对圆心的距离与角度（以 12 点钟为 0°、顺时针为正，范围 -180° ~ 180°）
function getPointerPolar(e: PointerEvent) {
  const rect = svgRef.value!.getBoundingClientRect()
  const scale = rect.width / props.size || 1
  const dx = (e.clientX - rect.left) / scale - center.value
  const dy = (e.clientY - rect.top) / scale - center.value
  return {
    distance: Math.hypot(dx, dy),
    angle: (Math.atan2(dx, -dy) * 180) / Math.PI,
  }
}

// 角度换算为数值；落入底部开口时吸附到一端
function angleToValue(angle: number) {
  let pct: number
  if (angle < startAngle || angle > endAngle) {
    // 拖拽中越过开口时停留在当前所在的一端，避免数值在最小与最大之间来回跳变
    pct = isDragging.value ? (percentage.value >= 0.5 ? 1 : 0) : angle < 0 ? 0 : 1
  } else {
    pct = (angle - startAngle) / totalAngle
  }
  return props.min + pct * (props.max - props.min)
}

function handlePointerDown(e: PointerEvent) {
  if (!props.draggable || !svgRef.value) return
  const { distance, angle } = getPointerPolar(e)
  // 只响应落在弧形轨道附近的按下，点击中心读数区域不改变数值
  if (Math.abs(distance - radius.value) > props.strokeWidth / 2 + 10) return
  const nextValue = angleToValue(angle)
  isDragging.value = true
  ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  commitValue(nextValue)
}

function handlePointerMove(e: PointerEvent) {
  if (!isDragging.value) return
  commitValue(angleToValue(getPointerPolar(e).angle))
}

function handlePointerUp() {
  if (!isDragging.value) return
  isDragging.value = false
  emit('change', lastValue)
}

function handleKeydown(e: KeyboardEvent) {
  if (!props.draggable) return
  const bigStep = (props.max - props.min) / 10
  let next: number
  switch (e.key) {
    case 'ArrowRight':
    case 'ArrowUp':
      next = props.value + props.step
      break
    case 'ArrowLeft':
    case 'ArrowDown':
      next = props.value - props.step
      break
    case 'PageUp':
      next = props.value + bigStep
      break
    case 'PageDown':
      next = props.value - bigStep
      break
    case 'Home':
      next = props.min
      break
    case 'End':
      next = props.max
      break
    default:
      return
  }
  e.preventDefault()
  commitValue(next)
  emit('change', lastValue)
}

// 开启拖拽时作为 slider 暴露给辅助技术
const sliderAttrs = computed(() =>
  props.draggable
    ? {
        role: 'slider',
        tabindex: 0,
        'aria-label': props.label || undefined,
        'aria-valuemin': props.min,
        'aria-valuemax': props.max,
        'aria-valuenow': props.value,
        'aria-valuetext': `${Math.round(props.value)}${props.unit}`,
      }
    : {}
)
</script>

<template>
  <div :class="cn('relative inline-flex flex-col items-center select-none', props.class)">
    <div
      v-bind="sliderAttrs"
      :class="['group relative outline-none', props.draggable && 'touch-none', isDragging && 'cursor-grabbing']"
      :style="{ width: `${props.size}px`, height: `${props.size * 0.85}px` }"
      @pointerdown="handlePointerDown"
      @pointermove="handlePointerMove"
      @pointerup="handlePointerUp"
      @pointercancel="handlePointerUp"
      @keydown="handleKeydown"
    >
      <svg ref="svgRef" :width="props.size" :height="props.size" class="overflow-visible">
        <defs>
          <linearGradient :id="gradientId" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#3b82f6" />
            <stop offset="50%" stop-color="#8b5cf6" />
            <stop offset="100%" :stop-color="colorScheme.stroke" />
          </linearGradient>
        </defs>

        <!-- 底层背景固定轨道 (240度) -->
        <path
          :d="bgArcPath"
          fill="none"
          stroke="currentColor"
          :stroke-width="props.strokeWidth"
          stroke-linecap="round"
          class="text-zinc-200/80 dark:text-zinc-800"
        />

        <!-- 激活进度动态高亮弧线 -->
        <path
          :d="bgArcPath"
          fill="none"
          :stroke="`url(#${gradientId})`"
          :stroke-width="props.strokeWidth"
          stroke-linecap="round"
          :stroke-dasharray="arcLength"
          :stroke-dashoffset="strokeDashoffset"
        />

        <!-- 拖拽手柄光晕（悬停、拖拽或键盘聚焦时浮现） -->
        <circle
          v-if="props.draggable"
          :cx="tipPoint.x"
          :cy="tipPoint.y"
          :r="props.strokeWidth / 2 + 5"
          :fill="colorScheme.stroke"
          :class="[
            'transition-opacity duration-200 group-hover:opacity-25 group-focus-visible:opacity-25',
            isDragging ? 'opacity-25' : 'opacity-0',
          ]"
        />

        <!-- 弧线末端高亮圆点 -->
        <circle
          v-if="props.draggable || animatedPercentage > 0.02"
          :cx="tipPoint.x"
          :cy="tipPoint.y"
          :r="props.strokeWidth / 2 - 1"
          fill="white"
        />

        <!-- 拖拽热区：沿轨道的加宽透明描边，便于抓取 -->
        <path
          v-if="props.draggable"
          :d="bgArcPath"
          fill="none"
          stroke="transparent"
          :stroke-width="props.strokeWidth + 20"
          stroke-linecap="round"
          :class="isDragging ? 'cursor-grabbing' : 'cursor-grab'"
        />
      </svg>

      <!-- 中心数值与标签容器 -->
      <div
        class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center pt-3 text-center"
      >
        <span class="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase">
          {{ props.label }}
        </span>
        <div class="flex items-baseline mt-0.5">
          <span class="font-mono text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            {{ Math.round(props.value) }}
          </span>
          <span class="ml-0.5 text-xs font-mono text-zinc-400 font-bold">
            {{ props.unit }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
