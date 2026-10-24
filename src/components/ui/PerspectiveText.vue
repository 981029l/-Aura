<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { Type, Sparkles, RefreshCw } from 'lucide-vue-next'

export interface PerspectiveTextProps {
  title?: string
  subtitle?: string
  line1?: string
  line2?: string
  class?: string
}

const props = withDefaults(defineProps<PerspectiveTextProps>(), {
  title: '透视文字',
  subtitle: '两行文字以立体角度排列，随鼠标轻微倾斜',
  line1: 'HYPERDIMENSIONAL',
  line2: 'ARCHITECTURE',
})

const rotateX = ref(-12)
const rotateY = ref(18)
const isHovered = ref(false)

function handleMouseMove(e: MouseEvent) {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  const x = e.clientX - rect.left - rect.width / 2
  const y = e.clientY - rect.top - rect.height / 2

  rotateY.value = Number(((x / (rect.width / 2)) * 28).toFixed(1))
  rotateX.value = Number((-((y / (rect.height / 2)) * 22)).toFixed(1))
}

function handleMouseLeave() {
  isHovered.value = false
  rotateX.value = -12
  rotateY.value = 18
}

function resetAngles() {
  rotateX.value = -12
  rotateY.value = 18
}
</script>

<template>
  <div :class="cn('w-full max-w-xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6', props.class)">
    <!-- 头部看板 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-2.5">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400">
          <Type class="h-5 w-5" />
        </div>
        <div>
          <h4 class="font-bold text-sm text-zinc-900 dark:text-white">
            {{ props.title }}
          </h4>
          <p class="text-xs text-zinc-400 font-mono">
            {{ props.subtitle }}
          </p>
        </div>
      </div>

      <button
        type="button"
        @click="resetAngles"
        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-xs font-mono font-semibold text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
      >
        <RefreshCw class="h-3.5 w-3.5" />
        <span>重置</span>
      </button>
    </div>

    <!-- 3D 透视视差舞台 -->
    <div
      class="perspective-[800px] relative h-64 rounded-2xl border border-zinc-200/80 bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-950 flex flex-col items-center justify-center overflow-hidden cursor-crosshair shadow-inner"
      @mousemove="handleMouseMove"
      @mouseenter="isHovered = true"
      @mouseleave="handleMouseLeave"
    >
      <!-- 极坐标虚线网格背景 -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.08)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      <!-- 3D 旋转变换文字卡群 -->
      <div
        class="relative transition-transform duration-100 ease-out flex flex-col items-center gap-2"
        :style="{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
        }"
      >
        <!-- 顶部折面文字 -->
        <div class="px-6 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-indigo-600 text-white font-mono font-black text-xl sm:text-2xl tracking-widest shadow-2xl border border-white/20 transform translate-z-10">
          {{ props.line1 }}
        </div>

        <!-- 底部折面反向倾斜文字 -->
        <div class="px-6 py-2 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-mono font-black text-xl sm:text-2xl tracking-widest shadow-2xl border border-zinc-700/50 transform -translate-z-6 opacity-90">
          {{ props.line2 }}
        </div>
      </div>

      <!-- 底部实时视差角度读数 -->
      <div class="absolute bottom-3 inset-x-6 flex items-center justify-between text-[10px] font-mono text-zinc-400 pointer-events-none">
        <span>ROTATE_X: {{ rotateX }}°</span>
        <span class="flex items-center gap-1 text-rose-500">
          <Sparkles class="h-3 w-3" />
          <span>移动鼠标改变视角</span>
        </span>
        <span>ROTATE_Y: {{ rotateY }}°</span>
      </div>
    </div>
  </div>
</template>
