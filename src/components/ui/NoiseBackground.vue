<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { Sparkles, Sliders, Waves, Play, Pause } from 'lucide-vue-next'

export interface NoiseBackgroundProps {
  noiseOpacity?: number
  blurIntensity?: string
  animated?: boolean
  class?: string
}

const props = withDefaults(defineProps<NoiseBackgroundProps>(), {
  noiseOpacity: 0.15,
  blurIntensity: 'blur-3xl',
  animated: true,
})

const isPlaying = ref(props.animated)
</script>

<template>
  <div :class="cn('relative w-full min-h-[380px] overflow-hidden rounded-3xl border border-zinc-200/90 bg-zinc-950 p-8 font-sans select-none flex flex-col justify-between', props.class)">
    <!-- 1. 多层彩色动态极光光斑 -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- 光斑 1: 霓虹青蓝 -->
      <div
        :class="[
          'absolute -top-20 -left-20 h-80 w-80 rounded-full bg-cyan-500/25 filter blur-3xl opacity-70',
          isPlaying && 'animate-drift-1',
        ]"
      />
      <!-- 光斑 2: 科技电紫 -->
      <div
        :class="[
          'absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-purple-600/30 filter blur-3xl opacity-75',
          isPlaying && 'animate-drift-2',
        ]"
      />
      <!-- 光斑 3: 荧光青绿/靛蓝 -->
      <div
        :class="[
          'absolute top-1/3 left-1/3 h-64 w-64 rounded-full bg-blue-500/20 filter blur-3xl opacity-60',
          isPlaying && 'animate-drift-3',
        ]"
      />
    </div>

    <!-- 2. SVG 分形噪点纹理遮罩 -->
    <svg class="absolute inset-0 h-full w-full pointer-events-none mix-blend-overlay" :style="{ opacity: props.noiseOpacity }">
      <filter id="procedural-grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.75"
          numOctaves="3"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#procedural-grain)" />
    </svg>

    <!-- 3. 前景内容区域 -->
    <div class="relative z-10 flex items-start justify-between">
      <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-mono">
        <Sparkles class="h-3.5 w-3.5 text-cyan-400" />
        <span>Procedural Noise & Aurora</span>
      </div>

      <button
        type="button"
        @click="isPlaying = !isPlaying"
        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 text-white text-xs font-mono transition-colors cursor-pointer"
      >
        <Pause v-if="isPlaying" class="h-3.5 w-3.5 text-amber-400" />
        <Play v-else class="h-3.5 w-3.5 text-emerald-400" />
        <span>{{ isPlaying ? '暂停' : '播放' }}</span>
      </button>
    </div>

    <!-- 中央核心悬浮标语 -->
    <div class="relative z-10 max-w-md my-auto py-6">
      <div class="flex items-center gap-2 text-cyan-400 font-mono text-xs mb-2">
        <Waves class="h-4 w-4" />
        <span>CINEMATIC AMBIENT ENGINE</span>
      </div>
      <h3 class="text-3xl font-black tracking-tight text-white leading-tight">
        噪点光斑背景
      </h3>
      <p class="mt-2 text-xs text-zinc-300 leading-relaxed font-normal">
        SVG 生成的噪点纹理叠加缓慢移动的彩色光斑，可用作官网首屏或产品图的背景，不需要加载图片。
      </p>
    </div>

    <!-- 底部参数状态栏 -->
    <div class="relative z-10 flex items-center justify-between text-[11px] font-mono text-zinc-400 border-t border-white/10 pt-4">
      <div class="flex items-center gap-3">
        <span>噪点不透明度：{{ (props.noiseOpacity * 100).toFixed(0) }}%</span>
        <span>·</span>
        <span>高斯模糊：{{ props.blurIntensity }}</span>
      </div>
      <div class="flex items-center gap-1.5 text-cyan-300">
        <Sliders class="h-3.5 w-3.5" />
        <span>无需图片资源</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes drift1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(40px, 30px) scale(1.15); }
}
@keyframes drift2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-30px, -40px) scale(1.1); }
}
@keyframes drift3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(25px, -25px) scale(1.2); }
}
.animate-drift-1 {
  animation: drift1 10s ease-in-out infinite;
}
.animate-drift-2 {
  animation: drift2 12s ease-in-out infinite;
}
.animate-drift-3 {
  animation: drift3 8s ease-in-out infinite;
}
</style>
