<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'

interface TextRevealCardProps {
  text: string
  revealText: string
  class?: string
}

const props = withDefaults(defineProps<TextRevealCardProps>(), {
  text: '把鼠标移到这里',
  revealText: 'Aura UI · Vue 3 动效组件库',
})

const cardRef = ref<HTMLDivElement | null>(null)
const mousePos = ref({ x: 0, y: 0 })
const isHovered = ref(false)

function handleMouseMove(e: MouseEvent) {
  const card = cardRef.value
  if (!card) return
  const rect = card.getBoundingClientRect()
  mousePos.value = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  }
}

function handleMouseEnter() {
  isHovered.value = true
}

function handleMouseLeave() {
  isHovered.value = false
}
</script>

<template>
  <div
    ref="cardRef"
    :class="
      cn(
        'relative w-full max-w-lg overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/95 p-8 shadow-lg backdrop-blur-xl select-none dark:border-zinc-800/90 dark:bg-zinc-950/95 cursor-crosshair transition-colors',
        props.class
      )
    "
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- 背景微暗光与提示 -->
    <div class="space-y-4">
      <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
        <span>✦</span>
        <span>鼠标划过显示文字</span>
      </div>

      <div class="relative py-4 min-h-[72px] flex items-center">
        <!-- 表层文字 (光标探照灯区域内被遮罩挖空，不叠印) -->
        <p
          class="text-xl sm:text-2xl font-bold text-zinc-400 dark:text-zinc-600 transition-opacity"
          :style="
            isHovered
              ? {
                  maskImage: `radial-gradient(circle 90px at ${mousePos.x}px ${mousePos.y}px, transparent 100%, black 100%)`,
                  WebkitMaskImage: `radial-gradient(circle 90px at ${mousePos.x}px ${mousePos.y}px, transparent 100%, black 100%)`,
                }
              : undefined
          "
        >
          {{ props.text }}
        </p>

        <!-- 底层显影文字 (仅在光标探照灯圆形区域内透光显现) -->
        <p
          class="absolute inset-0 flex items-center text-xl sm:text-2xl font-black bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 transition-opacity duration-150 pointer-events-none"
          :style="{
            opacity: isHovered ? 1 : 0,
            clipPath: `circle(90px at ${mousePos.x}px ${mousePos.y}px)`,
            WebkitClipPath: `circle(90px at ${mousePos.x}px ${mousePos.y}px)`,
          }"
        >
          {{ props.revealText }}
        </p>
      </div>

      <p class="text-[11px] font-mono text-zinc-400">
        鼠标划过的位置会露出下面的文字，类似刮刮卡
      </p>
    </div>
  </div>
</template>
