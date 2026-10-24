<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface ShimmerButtonProps {
  /** 流光颜色，默认高亮白/冰蓝 */
  shimmerColor?: string
  /** 流光厚度大小 */
  shimmerSize?: string
  /** 旋转一圈时间 */
  shimmerDuration?: string
  /** 按钮圆角 */
  borderRadius?: string
  class?: string
}

const props = withDefaults(defineProps<ShimmerButtonProps>(), {
  shimmerColor: '#38bdf8',
  shimmerSize: '0.12em',
  shimmerDuration: '2.5s',
  borderRadius: '9999px',
})

const styleObj = computed(() => {
  return {
    '--shimmer-color': props.shimmerColor,
    '--shimmer-size': props.shimmerSize,
    '--speed': props.shimmerDuration,
    '--radius': props.borderRadius,
  } as Record<string, string>
})
</script>

<template>
  <button
    :style="styleObj"
    :class="
      cn(
        'group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 font-medium text-white transition-all duration-300 active:scale-95',
        'border border-white/10 [border-radius:var(--radius)]',
        'bg-zinc-900/90 shadow-md hover:shadow-lg hover:shadow-sky-500/20 dark:bg-black/90',
        props.class
      )
    "
  >
    <!-- 360° 旋转锥形流光层 -->
    <div
      class="shimmer-spin-container pointer-events-none absolute -inset-[100%] [aspect-ratio:1] [border-radius:inherit]"
    >
      <div
        class="shimmer-spin-gradient h-full w-full animate-shimmer-spin"
      />
    </div>

    <!-- 内部纯净衬底，隔绝大部分流光，仅在边缘露出极细的高光光圈 -->
    <div
      class="absolute [inset:var(--shimmer-size)] [border-radius:inherit] bg-zinc-950/95 transition-colors duration-300 group-hover:bg-zinc-900/95"
    />

    <!-- 按钮文案与图标内容 -->
    <span
      class="relative z-10 flex items-center gap-2 text-sm font-semibold tracking-wide text-zinc-100 transition-colors group-hover:text-white"
    >
      <slot />
    </span>
  </button>
</template>

<style scoped>
.shimmer-spin-container {
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
}

.shimmer-spin-gradient {
  background: conic-gradient(
    from 0deg,
    transparent 0 340deg,
    var(--shimmer-color) 360deg
  );
}

.animate-shimmer-spin {
  animation: shimmer-spin-anim var(--speed) linear infinite;
}

@keyframes shimmer-spin-anim {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
