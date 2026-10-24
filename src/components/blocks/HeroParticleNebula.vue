<script setup lang="ts">
import { ArrowRight, Sparkles, Network, Database, Cpu } from 'lucide-vue-next'
import InteractiveParticles from '@/components/ui/InteractiveParticles.vue'

const techBadges = [
  { icon: Cpu, label: '张量加速计算', value: '128 PFLOPS' },
  { icon: Network, label: '拓扑神经链路', value: '1.2 Tbps' },
  { icon: Database, label: '分布式向量聚类', value: '100M+ QPS' },
]
</script>

<template>
  <div class="relative w-full overflow-hidden bg-black text-white py-12 sm:py-24 lg:py-36 flex flex-col justify-center">
    <!-- 交互式粒子星空画布：集成 InteractiveParticles 原子组件 -->
    <div class="absolute inset-0 z-0">
      <InteractiveParticles
        :quantity="65"
        :speed="0.8"
        :mouseRadius="140"
        color="#60a5fa"
        :connectLines="true"
        class="w-full h-full opacity-70"
      />
    </div>

    <!-- 径向深空暗角遮罩 -->
    <div class="absolute inset-0 bg-radial-vignette pointer-events-none z-[1]"></div>

    <div class="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <!-- 极简微徽标 -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-950/50 text-blue-400 text-xs font-mono font-medium backdrop-blur-md mb-8 shadow-sm shadow-blue-500/20">
        <Sparkles class="w-3.5 h-3.5 animate-spin text-blue-400" />
        <span>量子级高维粒子超空间</span>
      </div>

      <!-- 巨型现代标题 -->
      <h1 class="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight text-white leading-[1.12] max-w-3xl">
        在粒子星云中重塑
        <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
          高维认知矩阵
        </span>
      </h1>

      <p class="mt-6 text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
        鼠标在屏幕滑动即可感受引力拓扑畸变与微粒聚合。将抽象的海量高维嵌入向量转化为具象生动的动态力学体验。
      </p>

      <!-- 行动胶囊 -->
      <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
        <button class="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-blue-600/30 active:scale-95">
          <span>进入星云沙盒</span>
          <ArrowRight class="w-4 h-4" />
        </button>
        <button class="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-300 font-semibold text-xs sm:text-sm backdrop-blur-md transition-all active:scale-95">
          <span>阅读动力学算法白皮书</span>
        </button>
      </div>

      <!-- 底部高维参数展示网格 -->
      <div class="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
        <div
          v-for="badge in techBadges"
          :key="badge.label"
          class="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-md flex items-center gap-3 text-left"
        >
          <div class="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
            <component :is="badge.icon" class="w-4 h-4" />
          </div>
          <div>
            <div class="text-[11px] text-zinc-400">{{ badge.label }}</div>
            <div class="text-sm font-bold font-mono text-white">{{ badge.value }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-radial-vignette {
  background: radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.8) 100%);
}
</style>
