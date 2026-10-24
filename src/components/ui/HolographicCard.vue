<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { Crown, Sparkles, Gem, ShieldCheck } from 'lucide-vue-next'

export interface HolographicCardProps {
  title?: string
  subtitle?: string
  tier?: string
  class?: string
}

const props = withDefaults(defineProps<HolographicCardProps>(), {
  title: '全息卡片',
  subtitle: '随鼠标倾斜，表面显示彩虹色反光',
  tier: 'MYTHIC FOUNDER #0042',
})

const cardRef = ref<HTMLElement | null>(null)
const rotateX = ref(0)
const rotateY = ref(0)
const glareX = ref(50)
const glareY = ref(50)
const isHovered = ref(false)

function handleMouseMove(e: MouseEvent) {
  if (!cardRef.value) return
  const rect = cardRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2

  // 倾角计算 (-15deg ~ 15deg)
  rotateX.value = -((y - centerY) / centerY) * 14
  rotateY.value = ((x - centerX) / centerX) * 14

  // 光斑百分比位置 (0% ~ 100%)
  glareX.value = Math.round((x / rect.width) * 100)
  glareY.value = Math.round((y / rect.height) * 100)
}

function handleMouseEnter() {
  isHovered.value = true
}

function handleMouseLeave() {
  isHovered.value = false
  rotateX.value = 0
  rotateY.value = 0
  glareX.value = 50
  glareY.value = 50
}
</script>

<template>
  <div :class="cn('w-full max-w-md rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6', props.class)">
    <!-- 头部指标栏 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-2.5">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
          <Gem class="h-5 w-5" />
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

      <div class="flex items-center gap-1.5 text-xs font-mono text-amber-500">
        <Sparkles class="h-3.5 w-3.5" />
        <span>全息反光</span>
      </div>
    </div>

    <!-- 3D 舞台容器 -->
    <div class="perspective-[1000px] flex items-center justify-center py-2">
      <div
        ref="cardRef"
        @mousemove="handleMouseMove"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        class="relative w-full max-w-xs h-96 rounded-3xl overflow-hidden cursor-pointer shadow-2xl transition-transform duration-150 ease-out border border-white/20 dark:border-zinc-700/50"
        :style="{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
        }"
      >
        <!-- 基础底色层 (深色拟态底衬) -->
        <div class="absolute inset-0 bg-gradient-to-br from-zinc-900 via-indigo-950 to-zinc-950 p-6 flex flex-col justify-between text-white" />

        <!-- 全息彩虹干涉渐变折射层 -->
        <div
          class="absolute inset-0 opacity-40 mix-blend-color-dodge transition-opacity duration-300 pointer-events-none"
          :style="{
            background: `linear-gradient(${glareX * 3.6}deg, #ff0000 0%, #ff7f00 14%, #ffff00 28%, #00ff00 42%, #0000ff 57%, #4b0082 71%, #8b00ff 85%, #ff0000 100%)`,
            backgroundPosition: `${glareX}% ${glareY}%`,
          }"
        />

        <!-- 动态高斯漫射镜面高光 -->
        <div
          class="absolute inset-0 pointer-events-none transition-opacity duration-200"
          :style="{
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0) 60%)`,
            mixBlendMode: 'overlay',
          }"
        />

        <!-- 细密全息网格光栅纹理 -->
        <div
          class="absolute inset-0 opacity-20 pointer-events-none"
          style="background-image: repeating-linear-gradient(0deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 4px);"
        />

        <!-- 卡片前景内容 -->
        <div class="relative z-10 flex flex-col justify-between h-full p-6 pointer-events-none">
          <!-- 顶部卡片级别 -->
          <div class="flex items-center justify-between">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-mono font-bold tracking-widest text-amber-300 border border-amber-300/30">
              <Crown class="h-3.5 w-3.5" />
              <span>{{ props.tier }}</span>
            </span>

            <Sparkles class="h-4 w-4 text-white/80 animate-spin-slow" />
          </div>

          <!-- 中心全息徽章 -->
          <div class="flex flex-col items-center justify-center gap-3 my-auto">
            <div class="w-20 h-20 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg border border-white/30 transform group-hover:scale-105 transition-transform">
              <Gem class="h-10 w-10 text-white drop-shadow-md" />
            </div>
            <div class="text-center space-y-0.5">
              <h5 class="text-lg font-black tracking-tight text-white drop-shadow-sm">AURA PRO ARCHITECT</h5>
              <p class="text-[10px] font-mono text-zinc-300">100% SFC VUE 3.5+ ZERO EXTERNAL</p>
            </div>
          </div>

          <!-- 底部防伪编码与验真徽标 -->
          <div class="flex items-center justify-between border-t border-white/10 pt-3 text-[10px] font-mono text-zinc-400">
            <div class="flex items-center gap-1 text-emerald-400">
              <ShieldCheck class="h-3.5 w-3.5" />
              <span>CRYPTOGRAPHICALLY VERIFIED</span>
            </div>
            <span>60 FPS</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes spinSlow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.animate-spin-slow {
  animation: spinSlow 12s linear infinite;
}
</style>
