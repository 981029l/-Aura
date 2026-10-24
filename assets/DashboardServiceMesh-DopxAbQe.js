const n=`<script setup lang="ts">
import { Network } from 'lucide-vue-next'
import MultiRegionFailover from '@/components/ui/MultiRegionFailover.vue'
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-black text-white py-16 sm:py-24 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-indigo-400 text-xs font-mono mb-4">
          <Network class="w-3.5 h-3.5" />
          <span>ENVOY SERVICE MESH & FAILOVER</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
          服务网格微拓扑
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
            双活容灾与流量染色调度
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-400">
          基于 Envoy 与 eBPF 内核旁路跟踪。实时展示跨地域服务热备切换与权重流控。
        </p>
      </div>

      <!-- 核心多地域容灾热备组件：集成 MultiRegionFailover 原子组件 -->
      <div class="max-w-4xl mx-auto rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8 shadow-2xl backdrop-blur-xl text-left">
        <MultiRegionFailover
          title="微服务拓扑流量调度演练"
          class="!border-0 !bg-transparent"
        />
      </div>
    </div>
  </div>
</template>
`;export{n as default};
