const e=`<script setup lang="ts">
import { Wand2 } from 'lucide-vue-next'
import ImageGenerationProgress from '@/components/ui/ImageGenerationProgress.vue'
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <!-- 头部说明 -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 text-xs font-semibold mb-4">
        <Wand2 class="w-3.5 h-3.5" />
        <span>扩散模型推理 · 潜空间逐步去噪</span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white max-w-3xl">
        AI 图像扩散工作室
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600">
          高维高斯噪声逆向重构
        </span>
      </h2>

      <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
        模拟 30 步 Euler / DPM++ 采样器逐步从高斯噪波中重构 8K 极客赛博夜景的完整过程。
      </p>

      <!-- 核心画布组件：集成 ImageGenerationProgress 原子组件 -->
      <div class="mt-12 w-full max-w-3xl text-left">
        <ImageGenerationProgress
          prompt="Cinematic cyberpunk neo-tokyo street at dusk, holographic neon reflections, octane render 8k"
          :totalSteps="30"
          sampler="DPM++ 2M Karras"
          :cfgScale="7.5"
          class="shadow-2xl"
        />
      </div>
    </div>
  </div>
</template>
`;export{e as default};
