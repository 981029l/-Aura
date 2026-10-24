<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-vue-next'

export interface CardHoverGlowProps {
  title?: string
  subtitle?: string
  price?: string
  glowColor?: string
  class?: string
}

const props = withDefaults(defineProps<CardHoverGlowProps>(), {
  title: '企业专线',
  subtitle: '加密传输 · 多线路接入',
  price: '¥3,999 / 月',
  glowColor: 'rgba(56, 189, 248, 0.45)',
})

const cardRef = ref<HTMLDivElement | null>(null)
const mouseX = ref(0)
const mouseY = ref(0)

function handleMouseMove(e: MouseEvent) {
  if (!cardRef.value) return
  const rect = cardRef.value.getBoundingClientRect()
  mouseX.value = e.clientX - rect.left
  mouseY.value = e.clientY - rect.top
}
</script>

<template>
  <div :class="cn('relative flex items-center justify-center p-8 font-sans select-none', props.class)">
    <!-- 卡片外层承载器 (利用相对定位支撑背部环境辉光) -->
    <div
      ref="cardRef"
      @mousemove="handleMouseMove"
      class="group relative w-full max-w-sm rounded-3xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm transition-all duration-300 dark:border-zinc-800/90 dark:bg-zinc-950/95"
    >
      <!-- 1. 卡片背部环境光辉光投影 -->
      <div
        class="absolute -inset-2 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-2xl -z-10 pointer-events-none"
        :style="{
          background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, ${props.glowColor}, transparent 70%)`,
        }"
      />

      <!-- 2. 卡片表面聚光灯追踪层 -->
      <div
        class="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
        :style="{
          background: `radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(56, 189, 248, 0.08), transparent 75%)`,
        }"
      />

      <!-- 头部徽标与定价 -->
      <div class="relative z-10 flex items-start justify-between">
        <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 group-hover:scale-110 transition-transform duration-300">
          <ShieldCheck class="h-6 w-6" />
        </div>

        <span class="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
          ENTERPRISE
        </span>
      </div>

      <div class="relative z-10 mt-5 space-y-1">
        <h4 class="text-lg font-bold text-zinc-900 dark:text-white">
          {{ props.title }}
        </h4>
        <p class="text-xs text-zinc-400 font-mono">
          {{ props.subtitle }}
        </p>
      </div>

      <!-- 定价与特性列表 -->
      <div class="relative z-10 mt-4 border-t border-zinc-100 pt-4 dark:border-zinc-800/80 space-y-3">
        <div class="text-2xl font-black font-mono text-zinc-900 dark:text-white tracking-tight">
          {{ props.price }}
        </div>

        <div class="space-y-2 text-xs text-zinc-600 dark:text-zinc-300">
          <div class="flex items-center gap-2">
            <CheckCircle2 class="h-4 w-4 text-emerald-500 shrink-0" />
            <span>99.95% 可用性保障</span>
          </div>
          <div class="flex items-center gap-2">
            <CheckCircle2 class="h-4 w-4 text-emerald-500 shrink-0" />
            <span>全国 24 个接入节点</span>
          </div>
          <div class="flex items-center gap-2">
            <Sparkles class="h-4 w-4 text-sky-500 shrink-0" />
            <span>线路故障时自动切换</span>
          </div>
        </div>
      </div>

      <!-- 底部行动按钮 -->
      <button
        type="button"
        class="relative z-10 mt-6 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-900 text-white text-xs font-semibold hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition-colors shadow-sm cursor-pointer group-hover:shadow-md"
      >
        <span>申请开通</span>
        <ArrowRight class="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
</template>
