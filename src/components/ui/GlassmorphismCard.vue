<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { Layers, Sparkles, ShieldCheck, ArrowUpRight, TrendingUp } from 'lucide-vue-next'

export interface GlassmorphismCardProps {
  title?: string
  subtitle?: string
  class?: string
}

const props = withDefaults(defineProps<GlassmorphismCardProps>(), {
  title: '叠层玻璃卡片',
  subtitle: '多层背景模糊叠加出玻璃质感',
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
  <div :class="cn('w-full max-w-xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6', props.class)">
    <!-- 头部看板 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-2.5">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
          <Layers class="h-5 w-5" />
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

      <div class="flex items-center gap-1.5 text-xs font-mono text-cyan-500">
        <Sparkles class="h-3.5 w-3.5" />
        <span>backdrop-blur-2xl</span>
      </div>
    </div>

    <!-- 毛玻璃互动舞台 (带有彩色背景光球与前景磨砂卡片) -->
    <div
      class="relative h-80 rounded-2xl bg-zinc-950 overflow-hidden flex items-center justify-center p-6 border border-zinc-800 shadow-inner"
      @mousemove="handleMouseMove"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <!-- 背景彩色流体光斑 (用于产生毛玻璃穿透漫射色彩) -->
      <div class="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 opacity-60 blur-3xl pointer-events-none animate-pulse" />
      <div class="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 opacity-60 blur-3xl pointer-events-none" />
      <div class="absolute top-1/2 left-1/3 w-36 h-36 rounded-full bg-emerald-500 opacity-40 blur-2xl pointer-events-none" />

      <!-- 前景核心叠层磨砂玻璃卡片 -->
      <div class="relative z-10 w-full max-w-sm rounded-3xl border border-white/20 bg-white/10 dark:bg-zinc-900/20 backdrop-blur-2xl p-6 shadow-2xl space-y-4 hover:scale-[1.02] transition-transform duration-300">
        <!-- 玻璃反射高光顶边 -->
        <div class="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

        <!-- 顶部状态行 -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span class="text-xs font-mono font-bold text-white tracking-wide">AURA GLASS OS</span>
          </div>

          <span class="px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-mono font-bold text-cyan-300 backdrop-blur-md">
            TRANSLUCENT
          </span>
        </div>

        <!-- 核心指标大数字 -->
        <div class="space-y-1">
          <span class="text-xs font-mono text-zinc-300">实时数据</span>
          <div class="flex items-baseline gap-2">
            <span class="text-3xl font-black font-mono text-white tracking-tight">14,280</span>
            <span class="text-xs font-mono text-emerald-400 flex items-center gap-0.5">
              <TrendingUp class="h-3 w-3" />
              <span>+34.2%</span>
            </span>
          </div>
        </div>

        <!-- 玻璃内嵌小卡片 -->
        <div class="p-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-between text-xs font-mono text-zinc-200">
          <div class="flex items-center gap-2">
            <ShieldCheck class="h-4 w-4 text-emerald-400" />
            <span>背景模糊</span>
          </div>
          <ArrowUpRight class="h-4 w-4 text-zinc-400" />
        </div>
      </div>
    </div>
  </div>
</template>
