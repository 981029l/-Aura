const t=`<script setup lang="ts">
import { Radio } from 'lucide-vue-next'
import DataStreamProbe from '@/components/ui/DataStreamProbe.vue'
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-black text-white py-16 sm:py-24 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <!-- 头部说明 -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-400 text-xs font-mono mb-4">
        <Radio class="w-3.5 h-3.5 animate-pulse" />
        <span>BINARY TCP/WSS PACKET SNIFFER</span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-3xl">
        二进制流式网络嗅探站
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
          十六进制与 ASCII 实时解包
        </span>
      </h2>

      <p class="mt-4 text-sm sm:text-base text-zinc-400 max-w-xl">
        针对高频推理输出、注意力权重同步与心跳握手，提供实时分包过滤与十六进制字节流抓包分析。
      </p>

      <!-- 核心抓包组件：集成 DataStreamProbe 原子组件 -->
      <div class="mt-12 w-full max-w-4xl text-left">
        <DataStreamProbe
          streamSource="wss://inference.aura-stream.internal/v2/tokens"
          :bufferLimit="256"
          class="shadow-2xl"
        />
      </div>
    </div>
  </div>
</template>
`;export{t as default};
