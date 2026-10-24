<script setup lang="ts">
import { Radio } from 'lucide-vue-next'
import DataStreamProbe from '@/components/ui/DataStreamProbe.vue'
import DataFlow from '@/components/ui/DataFlow.vue'
</script>

<template>
  <div class="relative w-full overflow-hidden bg-black text-white py-16 sm:py-24 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-400 text-xs font-mono mb-4">
          <Radio class="w-3.5 h-3.5 animate-pulse" />
          <span>WSS HIGH-FREQUENCY STREAMING PIPELINE</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
          流式吞吐引擎
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
            亚毫秒级无损数据流
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-400">
          基于原生 WebSocket 与二进制 ArrayBuffer 编解码。实时捕捉多源数据流脉冲，并提供深度 Hex 抓包探针。
        </p>
      </div>

      <!-- 组合展示区：左侧实时管道拓扑，右侧二进制探针 -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div class="lg:col-span-6 w-full">
          <DataFlow
            title="分布式事件流管道 (Data Flow Pipeline)"
            :throughput="48200"
            class="shadow-2xl"
          />
        </div>
        <div class="lg:col-span-6 w-full">
          <DataStreamProbe
            streamSource="wss://telemetry.aura-ui.internal/v2/stream"
            class="shadow-2xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>
