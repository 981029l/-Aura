<script setup lang="ts">
import { Share2 } from 'lucide-vue-next'
import MixtureOfExperts from '@/components/ui/MixtureOfExperts.vue'
</script>

<template>
  <div class="relative w-full overflow-hidden bg-black text-white py-16 sm:py-24 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <!-- 头部说明 -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-indigo-400 text-xs font-mono mb-4">
        <Share2 class="w-3.5 h-3.5" />
        <span>SPARSE GATING TOP-K ROUTING MONITOR</span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-3xl">
        MoE 路由监控
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
          每个 Token 只激活部分专家
        </span>
      </h2>

      <p class="mt-4 text-sm sm:text-base text-zinc-400 max-w-xl">
        针对代码、数学、图像和通用语言等不同内容，路由器为每个 Token 选出权重最高的 2 个专家来处理。
      </p>

      <!-- 核心组件：集成 MixtureOfExperts 原子组件 -->
      <div class="mt-12 w-full max-w-4xl text-left">
        <MixtureOfExperts
          title="混合专家路由"
          class="shadow-2xl"
        />
      </div>
    </div>
  </div>
</template>
