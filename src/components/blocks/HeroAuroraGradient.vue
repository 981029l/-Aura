<script setup lang="ts">
import { ArrowRight, Sparkles, Compass, Shield, Cloud } from 'lucide-vue-next'
import ShinyText from '@/components/ui/ShinyText.vue'
import Meteors from '@/components/ui/Meteors.vue'
import GlassCard from '@/components/ui/GlassCard.vue'

const featureHighlights = [
  { icon: Compass, title: '空间直觉推演', desc: '以连续流体向量空间拟合高维用户意图' },
  { icon: Shield, title: '零信任加密', desc: '端到端硬件飞地隔离，保护私有企业知识' },
  { icon: Cloud, title: '全球毫秒分发', desc: '300+ 边缘 PoP 节点自动最优路径调度' },
]
</script>

<template>
  <div class="relative w-full overflow-hidden bg-black text-white py-12 sm:py-24 lg:py-32 flex flex-col justify-center">
    <!-- 极光破晓动态渐变层 -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-[30%] left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-r from-emerald-500/30 via-teal-500/30 to-indigo-600/30 blur-[130px] rounded-full animate-pulse opacity-70"></div>
      <div class="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full"></div>
    </div>

    <!-- 背景流星群：集成 Meteors 原子组件 -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <Meteors :number="24" :angle="215" :minDuration="3" :maxDuration="7" />
    </div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
      <!-- 顶部晶莹微胶囊 -->
      <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-teal-500/30 bg-teal-950/40 text-teal-300 text-xs font-medium backdrop-blur-md mb-8">
        <Sparkles class="w-3.5 h-3.5 text-teal-400" />
        <span>极光渲染架构 3.0 · 破晓而生</span>
      </div>

      <!-- 渐变高光大标题：集成 ShinyText 原子组件 -->
      <h1 class="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight text-white max-w-4xl leading-[1.15]">
        让灵感在
        <ShinyText text="极光流体破晓" variant="white" class="px-2" />
        中自由流淌
      </h1>

      <p class="mt-6 text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
        突破传统二维界面的冷漠感。基于原生 WebGL 与 CSS 流体混合算法，为现代数字产品赋予呼吸般的自然生命力与光学质感。
      </p>

      <!-- 双行动按钮 -->
      <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
        <button class="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-300 hover:to-emerald-400 text-zinc-950 font-bold text-sm transition-all shadow-lg shadow-teal-500/25 active:scale-95">
          <span>开始探索流光世界</span>
          <ArrowRight class="w-4 h-4" />
        </button>
        <button class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-zinc-700/80 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-200 font-semibold text-sm backdrop-blur-md transition-all active:scale-95">
          <span>查看设计指南与色卡</span>
        </button>
      </div>

      <!-- 玻璃拟态特性卡片网格：集成 GlassCard 原子组件 -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        <GlassCard
          v-for="feat in featureHighlights"
          :key="feat.title"
          class="p-6 text-left border-teal-500/20 bg-zinc-900/40 backdrop-blur-xl hover:border-teal-400/40 transition-colors"
        >
          <div class="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-4">
            <component :is="feat.icon" class="w-5 h-5" />
          </div>
          <h3 class="text-base font-bold text-white tracking-tight">{{ feat.title }}</h3>
          <p class="mt-2 text-xs text-zinc-400 leading-relaxed">{{ feat.desc }}</p>
        </GlassCard>
      </div>
    </div>
  </div>
</template>
