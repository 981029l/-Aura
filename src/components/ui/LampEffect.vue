<script setup lang="ts">
import { cn } from '@/lib/utils'

interface LampProps {
  /** 聚光灯发光主色，默认青蓝 #06b6d4 */
  glowColor?: string
  class?: string
}

const props = withDefaults(defineProps<LampProps>(), {
  glowColor: '#06b6d4',
})
</script>

<template>
  <div
    :class="
      cn(
        'relative flex min-h-[500px] flex-col items-center justify-center overflow-hidden bg-zinc-950 w-full rounded-2xl z-0',
        props.class
      )
    "
  >
    <!-- 天顶聚光灯发射核心容器 -->
    <div class="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
      <!-- 左侧发散光锥 -->
      <div
        style="
          background-image: conic-gradient(
            var(--conic-position),
            var(--tw-gradient-stops)
          );
        "
        class="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
      >
        <div class="absolute w-[100%] left-0 bg-zinc-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        <div class="absolute w-40 h-[100%] left-0 bg-zinc-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
      </div>

      <!-- 右侧发散光锥 -->
      <div
        style="
          background-image: conic-gradient(
            var(--conic-position),
            var(--tw-gradient-stops)
          );
        "
        class="absolute inset-auto left-1/2 h-56 w-[30rem] from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
      >
        <div class="absolute w-40 h-[100%] right-0 bg-zinc-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
        <div class="absolute w-[100%] right-0 bg-zinc-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
      </div>

      <!-- 顶峰高光雾气与漫反射氛围 -->
      <div class="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-zinc-950 blur-2xl" />
      <div class="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
      <div class="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl" />
      <div class="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl" />

      <!-- 核心聚光灯激光发射横线 -->
      <div class="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />

      <!-- 底部暗影遮挡蒙版 -->
      <div class="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-zinc-950" />
    </div>

    <!-- 聚光灯聚焦的主体内容插槽 -->
    <div class="relative z-50 -translate-y-32 flex flex-col items-center px-5 text-center">
      <slot />
    </div>
  </div>
</template>
