const t=`<script setup lang="ts">
import { Share2 } from 'lucide-vue-next'
import MixtureOfExperts from '@/components/ui/MixtureOfExperts.vue'
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-black text-white py-16 sm:py-24 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <!-- 头部说明 -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-indigo-400 text-xs font-mono mb-4">
        <Share2 class="w-3.5 h-3.5" />
        <span>SPARSE GATING TOP-K ROUTING MONITOR</span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-3xl">
        MoE 专家门控路由监控
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
          Token 级动态稀疏激活
        </span>
      </h2>

      <p class="mt-4 text-sm sm:text-base text-zinc-400 max-w-xl">
        针对代码 AST、数学微积分、多模态视觉与通用语义，门控网络实时挑选 Top-2 专家子网进行定向激活。
      </p>

      <!-- 核心组件：集成 MixtureOfExperts 原子组件 -->
      <div class="mt-12 w-full max-w-4xl text-left">
        <MixtureOfExperts
          title="MoE 稀疏门控路由实时监控 (Mixture of Experts)"
          class="shadow-2xl"
        />
      </div>
    </div>
  </div>
</template>
`;export{t as default};
