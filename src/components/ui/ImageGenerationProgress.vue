<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import { Wand2, RotateCw, Play, Pause, Layers, Sliders, Check } from 'lucide-vue-next'

export interface ImageGenProps {
  prompt?: string
  totalSteps?: number
  sampler?: string
  cfgScale?: number
  class?: string
}

const props = withDefaults(defineProps<ImageGenProps>(), {
  prompt: 'Cinematic cyberpunk neo-tokyo street at dusk, holographic neon reflections, octane render 8k',
  totalSteps: 30,
  sampler: 'DPM++ 2M Karras',
  cfgScale: 7.5,
})

const currentStep = ref(18)
const isGenerating = ref(true)
let timer: any = null

function toggleGenerate() {
  isGenerating.value = !isGenerating.value
}

function restartGenerate() {
  currentStep.value = 0
  isGenerating.value = true
}

onMounted(() => {
  timer = setInterval(() => {
    if (isGenerating.value) {
      if (currentStep.value < props.totalSteps) {
        currentStep.value += 1
      } else {
        // 完成后稍作停顿并重启模拟循环
        setTimeout(() => {
          if (isGenerating.value) currentStep.value = 0
        }, 2500)
      }
    }
  }, 220)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div :class="cn('w-full max-w-2xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-5', props.class)">
    <!-- 顶栏状态与提示词 -->
    <div class="flex items-start justify-between gap-4 border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <div class="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <Wand2 class="h-4 w-4" />
          </div>
          <h3 class="font-bold text-sm text-zinc-900 dark:text-white">
            图片生成中
          </h3>
          <span
            :class="[
              'px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase',
              currentStep === props.totalSteps
                ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                : 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 animate-pulse',
            ]"
          >
            {{ currentStep === props.totalSteps ? '已完成' : `生成中 · 第 ${currentStep}/${props.totalSteps} 步` }}
          </span>
        </div>
        <p class="text-xs text-zinc-500 font-mono line-clamp-1 italic">
          "{{ props.prompt }}"
        </p>
      </div>

      <div class="flex items-center gap-1.5 shrink-0">
        <button
          type="button"
          @click="toggleGenerate"
          class="p-2 rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
          :title="isGenerating ? '暂停生成' : '继续生成'"
        >
          <Pause v-if="isGenerating" class="h-4 w-4 text-amber-500" />
          <Play v-else class="h-4 w-4 text-emerald-500" />
        </button>

        <button
          type="button"
          @click="restartGenerate"
          class="p-2 rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
          title="重新生成"
        >
          <RotateCw class="h-4 w-4" />
        </button>
      </div>
    </div>

    <!-- 去噪渲染画面舞台 -->
    <div class="relative h-64 w-full overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-950 dark:border-zinc-800/80 flex items-center justify-center">
      <!-- 1. 底层合成画面 (渐变与模拟城市霓虹) -->
      <div
        class="absolute inset-0 bg-cover bg-center transition-all duration-300"
        :style="{
          backgroundImage: `radial-gradient(circle at 40% 40%, #06b6d4 0%, #3b82f6 30%, #8b5cf6 60%, #09090b 95%)`,
          filter: `blur(${Math.max(0, (props.totalSteps - currentStep) * 0.9)}px) contrast(${1 + (currentStep / props.totalSteps) * 0.4})`,
          opacity: Math.max(0.2, currentStep / props.totalSteps),
        }"
      />

      <!-- 2. 中层拟态 SVG 分形高斯白噪点遮罩 (随着步数递增逐渐消隐) -->
      <svg
        class="absolute inset-0 h-full w-full pointer-events-none mix-blend-overlay transition-opacity duration-300"
        :style="{
          opacity: Math.max(0.05, 1 - currentStep / props.totalSteps),
        }"
      >
        <filter id="denoise-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#denoise-noise)" />
      </svg>

      <!-- 3. 画面中央悬浮 HUD 去噪参数 -->
      <div class="relative z-10 flex flex-col items-center justify-center p-4 rounded-xl bg-zinc-950/60 backdrop-blur-md border border-white/10 text-white shadow-2xl">
        <div class="flex items-center gap-2 mb-1">
          <Layers class="h-4 w-4 text-sky-400" />
          <span class="text-xs font-mono font-bold tracking-widest">LATENT DENOISING</span>
        </div>
        <div class="text-3xl font-black font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400">
          {{ ((currentStep / props.totalSteps) * 100).toFixed(0) }}%
        </div>
        <div class="text-[10px] font-mono text-zinc-400 mt-1">
          Step {{ currentStep }} of {{ props.totalSteps }} · Latent 64x64x4
        </div>
      </div>

      <!-- 4. 底部动态发光流光跑马线 (当渲染中时闪耀) -->
      <div
        v-if="currentStep < props.totalSteps"
        class="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 transition-all duration-200"
        :style="{ width: `${(currentStep / props.totalSteps) * 100}%` }"
      />
    </div>

    <!-- 底部参数配置快照与指标标签 -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs font-mono">
      <div class="p-2.5 rounded-xl border border-zinc-200/70 bg-zinc-50/60 dark:border-zinc-800/60 dark:bg-zinc-900/40">
        <span class="block text-[10px] text-zinc-400">采样器</span>
        <span class="font-bold text-zinc-800 dark:text-zinc-200 truncate block mt-0.5">{{ props.sampler }}</span>
      </div>

      <div class="p-2.5 rounded-xl border border-zinc-200/70 bg-zinc-50/60 dark:border-zinc-800/60 dark:bg-zinc-900/40">
        <span class="block text-[10px] text-zinc-400">提示词强度</span>
        <span class="font-bold text-zinc-800 dark:text-zinc-200 block mt-0.5">{{ props.cfgScale }}</span>
      </div>

      <div class="p-2.5 rounded-xl border border-zinc-200/70 bg-zinc-50/60 dark:border-zinc-800/60 dark:bg-zinc-900/40">
        <span class="block text-[10px] text-zinc-400">随机种子</span>
        <span class="font-bold text-zinc-800 dark:text-zinc-200 block mt-0.5">88482026</span>
      </div>

      <div class="p-2.5 rounded-xl border border-zinc-200/70 bg-zinc-50/60 dark:border-zinc-800/60 dark:bg-zinc-900/40 flex items-center justify-between">
        <div>
          <span class="block text-[10px] text-zinc-400">输出分辨率</span>
          <span class="font-bold text-zinc-800 dark:text-zinc-200 block mt-0.5">1024 × 1024</span>
        </div>
        <Check v-if="currentStep === props.totalSteps" class="h-4 w-4 text-emerald-500" />
        <Sliders v-else class="h-4 w-4 text-zinc-400 animate-spin-slow" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes spin-slow {
  to {
    transform: rotate(360deg);
  }
}
.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}
</style>
