const t=`<script setup lang="ts">
import { Activity } from 'lucide-vue-next'
import SynapticSignalGraph from '@/components/ui/SynapticSignalGraph.vue'
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-black text-white py-16 sm:py-24 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <!-- 头部说明 -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-950/40 text-sky-400 text-xs font-mono mb-4">
        <Activity class="w-3.5 h-3.5" />
        <span>BIOMIMETIC SYNAPTIC PULSE MESH</span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-3xl">
        神经信号模拟
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400">
          神经元之间的信号传递
        </span>
      </h2>

      <p class="mt-4 text-sm sm:text-base text-zinc-400 max-w-xl">
        模拟神经元接收信号、达到阈值后放电，并把信号传给下一个神经元的过程。
      </p>

      <!-- 核心仿生突触图谱：集成 SynapticSignalGraph 原子组件 -->
      <div class="mt-12 w-full max-w-3xl text-left">
        <SynapticSignalGraph class="shadow-2xl" />
      </div>
    </div>
  </div>
</template>
`;export{t as default};
