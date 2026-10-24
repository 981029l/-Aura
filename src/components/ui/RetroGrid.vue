<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface RetroGridProps {
  /** 网格倾角，默认 65 度 */
  angle?: number
  /** 网格单元格大小，单位 px */
  cellSize?: number
  /** 不透明度 0 ~ 1 */
  opacity?: number
  /** 亮色模式线条颜色 */
  lightLineColor?: string
  /** 暗色模式线条颜色 */
  darkLineColor?: string
  /** 是否开启渐变淡出遮罩 */
  mask?: boolean
  /** 自定义遮罩 class */
  maskClass?: string
  class?: string
}

const props = withDefaults(defineProps<RetroGridProps>(), {
  angle: 65,
  cellSize: 60,
  opacity: 0.5,
  lightLineColor: '#94a3b8',
  darkLineColor: '#38bdf8',
  mask: true,
})

const styleObj = computed(() => {
  return {
    '--grid-angle': `${props.angle}deg`,
    '--cell-size': `${props.cellSize}px`,
    '--opacity': props.opacity.toString(),
    '--light-line': props.lightLineColor,
    '--dark-line': props.darkLineColor,
  } as Record<string, string>
})
</script>

<template>
  <div
    :style="styleObj"
    :class="
      cn(
        'pointer-events-none absolute h-full w-full overflow-hidden opacity-[var(--opacity)] [perspective:200px]',
        props.class
      )
    "
  >
    <!-- 3D 倾斜网格层（注入地平线消隐遮罩，彻底根除远端空间混叠摩尔纹与高频乱跳） -->
    <div
      :class="
        cn(
          'absolute inset-0 [transform:rotateX(var(--grid-angle))]',
          props.mask && 'retro-grid-horizon-mask'
        )
      "
    >
      <div
        class="retro-grid-plane animate-retro-grid [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]"
      />
    </div>
  </div>
</template>

<style scoped>
/* 地平线防混叠渐变消隐遮罩（Distance Fog）：消除远端奈奎斯特极限处的像素跳变 */
.retro-grid-horizon-mask {
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.3) 18%,
    rgba(0, 0, 0, 1) 38%,
    rgba(0, 0, 0, 1) 85%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.3) 18%,
    rgba(0, 0, 0, 1) 38%,
    rgba(0, 0, 0, 1) 85%,
    transparent 100%
  );
}

/* 亮色模式线条：带 0.5px 次像素羽化抗锯齿（Anti-Aliased Subpixel Falloff） */
.retro-grid-plane {
  --grid-line: var(--light-line);
  background-image: linear-gradient(
      to right,
      var(--grid-line) 1px,
      transparent 1.5px
    ),
    linear-gradient(to bottom, var(--grid-line) 1px, transparent 1.5px);
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}

:global(.dark .retro-grid-plane) {
  --grid-line: var(--dark-line);
}

/* 纯 CSS 硬件加速无限位移循环 */
.animate-retro-grid {
  animation: retro-grid-anim 15s linear infinite;
}

@keyframes retro-grid-anim {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(var(--cell-size));
  }
}
</style>
