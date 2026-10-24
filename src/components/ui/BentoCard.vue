<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'

interface BentoCardProps {
  name: string
  description: string
  class?: string
  href?: string
  cta?: string
  /** 鼠标聚光灯大小，单位 px */
  spotlightRadius?: number
}

const props = withDefaults(defineProps<BentoCardProps>(), {
  spotlightRadius: 300,
})

const mouseX = ref(0)
const mouseY = ref(0)
const isHovered = ref(false)

function handleMouseMove(e: MouseEvent) {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  mouseX.value = e.clientX - rect.left
  mouseY.value = e.clientY - rect.top
}
</script>

<template>
  <div
    :class="
      cn(
        'group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300',
        'border border-zinc-200 bg-white/70 shadow-sm backdrop-blur-md hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950/70 dark:hover:shadow-2xl dark:hover:shadow-blue-500/10',
        props.class
      )
    "
    @mousemove="handleMouseMove"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- 鼠标动态跟随的聚光灯图层（Spotlight） -->
    <div
      class="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      :style="{
        background: `radial-gradient(${props.spotlightRadius}px circle at ${mouseX}px ${mouseY}px, var(--spotlight-color), transparent 80%)`,
      }"
    />

    <!-- 卡片背景装饰插槽（如插画、动态模拟图表等） -->
    <div class="relative z-0 h-44 w-full overflow-hidden rounded-xl transition-transform duration-500 ease-out group-hover:scale-[1.02]">
      <slot name="background" />
    </div>

    <!-- 卡片主体内容 -->
    <div class="relative z-10 flex flex-col gap-2 pt-4">
      <div class="flex items-center gap-2.5">
        <slot name="icon" />
        <h3 class="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {{ props.name }}
        </h3>
      </div>
      <p class="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
        {{ props.description }}
      </p>

      <!-- 底部 CTA 链接 -->
      <div v-if="props.cta || $slots.cta" class="mt-3 flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400">
        <slot name="cta">
          <router-link
            v-if="props.href"
            :to="props.href"
            class="inline-flex items-center gap-1 transition-transform group-hover:translate-x-1 after:absolute after:inset-0 after:rounded-2xl"
            :title="`查看 ${props.name} 组件文档`"
          >
            {{ props.cta }}
            <span aria-hidden="true">&rarr;</span>
          </router-link>
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 针对明暗双模自动切换聚光灯色调 */
.group {
  --spotlight-color: rgba(59, 130, 246, 0.08);
}
:global(.dark .group) {
  --spotlight-color: rgba(59, 130, 246, 0.15);
}
</style>
