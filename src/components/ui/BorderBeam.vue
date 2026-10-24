<script setup lang="ts">
import { computed, useId } from 'vue'
import { cn } from '@/lib/utils'

interface BorderBeamProps {
  /** 光束描边线宽，单位 px，默认 2 */
  borderWidth?: number
  /** 光束长度尺寸（百分比 1~100 或像素大小），默认 20 */
  size?: number
  /** 旋转一圈耗时，单位秒，默认 6 */
  duration?: number
  /** 渐变起始颜色，默认 #38bdf8 */
  colorFrom?: string
  /** 渐变结束颜色，默认 #a855f7 */
  colorTo?: string
  /** 延迟开始秒数，默认 0 */
  delay?: number
  /** 是否反向旋转，默认 false */
  reverse?: boolean
  /** 容器圆角大小，单位 px 或 string，默认 16 */
  borderRadius?: number | string
  /** 是否启用外发光霓虹光晕，默认 true */
  glow?: boolean
  class?: string
}

const props = withDefaults(defineProps<BorderBeamProps>(), {
  borderWidth: 2,
  size: 20,
  duration: 6,
  colorFrom: '#38bdf8',
  colorTo: '#a855f7',
  delay: 0,
  reverse: false,
  borderRadius: 16,
  glow: true,
})

const id = useId()

const radius = computed(() => {
  if (typeof props.borderRadius === 'number') {
    return props.borderRadius
  }
  const parsed = parseFloat(props.borderRadius)
  return isNaN(parsed) ? 16 : parsed
})

// 光束长度：若传入 > 50 则视为像素尺寸，转换为合理百分比；默认 15~25%
const dashLength = computed(() => {
  if (props.size > 50) {
    // 兼容原先传 180px 的情况，按周长 ~1100px 折算约为 18%
    return 18
  }
  return Math.min(Math.max(props.size, 5), 80)
})

const dashArray = computed(() => {
  return `${dashLength.value} ${100 - dashLength.value}`
})

const animStyle = computed(() => ({
  animationDuration: `${props.duration}s`,
  animationDelay: `-${props.delay}s`,
  animationDirection: props.reverse ? 'reverse' : 'normal',
}))
</script>

<template>
  <div
    :class="
      cn(
        'pointer-events-none absolute inset-0 rounded-[inherit] overflow-visible',
        props.class
      )
    "
  >
    <svg
      class="h-full w-full overflow-visible"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          :id="`border-beam-grad-${id}`"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" :stop-color="props.colorFrom" />
          <stop offset="100%" :stop-color="props.colorTo" />
        </linearGradient>
      </defs>

      <!-- 霓虹外泛光柔性图层（增强暗夜流光氛围感） -->
      <rect
        v-if="props.glow"
        pathLength="100"
        x="1"
        y="1"
        width="calc(100% - 2px)"
        height="calc(100% - 2px)"
        :rx="radius"
        :ry="radius"
        fill="none"
        :stroke="`url(#border-beam-grad-${id})`"
        :stroke-width="props.borderWidth * 2"
        :stroke-dasharray="dashArray"
        stroke-linecap="round"
        opacity="0.45"
        class="border-beam-svg-motion blur-[3px]"
        :style="animStyle"
      />

      <!-- 核心纯正矢量描边（100% 贴合圆角弧线，零卡顿零畸变） -->
      <rect
        pathLength="100"
        x="1"
        y="1"
        width="calc(100% - 2px)"
        height="calc(100% - 2px)"
        :rx="radius"
        :ry="radius"
        fill="none"
        :stroke="`url(#border-beam-grad-${id})`"
        :stroke-width="props.borderWidth"
        :stroke-dasharray="dashArray"
        stroke-linecap="round"
        class="border-beam-svg-motion"
        :style="animStyle"
      />
    </svg>
  </div>
</template>

<style scoped>
.border-beam-svg-motion {
  animation: border-beam-stroke linear infinite;
  will-change: stroke-dashoffset;
}

@keyframes border-beam-stroke {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -100;
  }
}
</style>
