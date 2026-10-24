<script setup lang="ts">
import { cn } from '@/lib/utils'

interface PerspectiveGridProps {
  gridColor?: string
  horizonColor?: string
  speed?: number // 秒数周期
  class?: string
}

const props = withDefaults(defineProps<PerspectiveGridProps>(), {
  speed: 16,
})
</script>

<template>
  <div :class="cn('relative h-96 w-full overflow-hidden bg-zinc-950 flex flex-col items-center justify-center', props.class)">
    <!-- 顶部地平线光晕 -->
    <div
      class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-36 w-full max-w-4xl rounded-full bg-gradient-to-r from-blue-600/20 via-purple-500/30 to-emerald-500/20 blur-3xl pointer-events-none"
    />

    <!-- 地平线细微发光线 -->
    <div class="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.8)] z-10" />

    <!-- 3D 透视地平网格容器 -->
    <div class="perspective-stage absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="grid-plane absolute inset-0"
        :style="{ animationDuration: `${props.speed}s` }"
      />
    </div>

    <!-- 纵深渐变蒙版，遮蔽靠近顶部的部分 -->
    <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-zinc-950 pointer-events-none z-10" />

    <!-- 内容插槽 -->
    <div class="relative z-20 text-center px-4">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.perspective-stage {
  perspective: 450px;
  transform-style: preserve-3d;
}

.grid-plane {
  width: 200%;
  height: 200%;
  left: -50%;
  top: 0%;
  background-image: 
    linear-gradient(to right, rgba(56, 189, 248, 0.22) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(56, 189, 248, 0.22) 1px, transparent 1px);
  background-size: 50px 50px;
  transform: rotateX(72deg) translateZ(0);
  transform-origin: center top;
  animation: move-grid linear infinite;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0.9) 60%, rgba(0, 0, 0, 0) 100%);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0.9) 60%, rgba(0, 0, 0, 0) 100%);
}

@keyframes move-grid {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 500px;
  }
}
</style>
