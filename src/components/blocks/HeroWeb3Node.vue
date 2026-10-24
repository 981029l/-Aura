<script setup lang="ts">
import { ArrowRight, Share2, Shield, Cpu, Activity } from 'lucide-vue-next'
import KnowledgeGraph from '@/components/ui/KnowledgeGraph.vue'
</script>

<template>
  <div class="relative w-full overflow-hidden bg-black text-white py-10 sm:py-20 lg:py-28 flex flex-col justify-center">
    <!-- 背景流光与拓扑微光 -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute left-1/4 top-1/3 w-[500px] h-[500px] bg-purple-600/15 blur-[140px] rounded-full"></div>
      <div class="absolute right-10 bottom-10 w-[450px] h-[450px] bg-blue-600/10 blur-[120px] rounded-full"></div>
    </div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- 左侧：去中心化网络文案 -->
        <div class="lg:col-span-5 flex flex-col items-start text-left z-10">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/40 text-purple-300 text-xs font-mono font-medium backdrop-blur-md mb-6">
            <Share2 class="w-3.5 h-3.5 text-purple-400" />
            <span>P2P DECENTRALIZED GRAPH MESH</span>
          </div>

          <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-white leading-[1.12]">
            去中心化拓扑
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-400">
              知识图谱与动态节点
            </span>
          </h1>

          <p class="mt-6 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-lg">
            基于分布式对等网络与拓扑连线物理模拟。消除单点故障，每一个节点自主同步权重与高维嵌入，构成永不宕机的自愈网络。
          </p>

          <!-- 3 个技术参数小卡片 -->
          <div class="mt-8 space-y-3 w-full max-w-md">
            <div class="p-3 rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md flex items-center justify-between text-xs">
              <span class="flex items-center gap-2 text-zinc-300">
                <Cpu class="w-4 h-4 text-purple-400" />
                共识验证时延
              </span>
              <span class="font-mono font-bold text-white">&lt; 450ms</span>
            </div>
            <div class="p-3 rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md flex items-center justify-between text-xs">
              <span class="flex items-center gap-2 text-zinc-300">
                <Activity class="w-4 h-4 text-emerald-400" />
                全局活跃对等节点
              </span>
              <span class="font-mono font-bold text-emerald-400">68,420 Peers</span>
            </div>
          </div>

          <!-- 行动按钮 -->
          <div class="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 w-full">
            <button class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-purple-600/25 active:scale-95">
              <span>运行轻量验证节点</span>
              <ArrowRight class="w-4 h-4" />
            </button>
            <button class="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 text-xs sm:text-sm transition-all">
              <Shield class="w-4 h-4 text-zinc-400" />
              <span>智能合约审计</span>
            </button>
          </div>
        </div>

        <!-- 右侧：真实交互知识图谱拓扑：集成 KnowledgeGraph 原子组件 -->
        <div class="lg:col-span-7 w-full">
          <div class="relative rounded-3xl border border-zinc-800 bg-zinc-900/60 p-2 sm:p-4 shadow-2xl backdrop-blur-xl">
            <KnowledgeGraph
              title="去中心化对等网络 · 实时数据流拓扑"
              class="!border-0 !bg-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
