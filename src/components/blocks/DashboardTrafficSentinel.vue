<script setup lang="ts">
import { ShieldAlert, Activity } from 'lucide-vue-next'
import CyberpunkGridCard from '@/components/ui/CyberpunkGridCard.vue'
import RadialGauge from '@/components/ui/RadialGauge.vue'
</script>

<template>
  <div class="relative w-full overflow-hidden bg-black text-white py-16 sm:py-24 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/30 bg-rose-950/40 text-rose-400 text-xs font-mono mb-4">
          <ShieldAlert class="w-3.5 h-3.5" />
          <span>DDOS INGRESS MITIGATION SENTINEL</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
          流量防御与 DDoS 哨兵
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-400 to-amber-400">
            赛博朋克极客雷达监控
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-400">
          全时段监控骨干网入向突发异常流量包。具备 Tbps 级黑洞清洗与源 IP 行为信誉指纹封禁。
        </p>
      </div>

      <!-- 组合展示区：赛博朋克防御卡片 + 流量负载仪表盘 -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto text-left">
        <div class="lg:col-span-7 w-full">
          <CyberpunkGridCard
            unitId="SENTINEL-NODE-ALPHA"
            pilotCode="BGP-MITIGATE-2026"
            class="shadow-2xl"
          />
        </div>

        <div class="lg:col-span-5 p-6 sm:p-8 rounded-3xl border border-zinc-800 bg-zinc-900/60 shadow-xl flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>INGRESS SCRUBBING LOAD</span>
              <span class="text-emerald-400 font-bold flex items-center gap-1">
                <Activity class="w-3.5 h-3.5" />
                ONLINE
              </span>
            </div>
            <h3 class="text-lg font-bold text-white mt-2">边缘清洗管道吞吐</h3>
            <p class="text-xs text-zinc-500 mt-1">当前清洗集群承载 42.8 Gbps 恶意泛洪攻击</p>

            <div class="my-6 flex justify-center">
              <RadialGauge :value="48" :size="150" :strokeWidth="12" label="负载率" />
            </div>

            <div class="space-y-2 pt-4 border-t border-zinc-800 text-xs text-zinc-400 font-mono">
              <div class="flex justify-between">
                <span>正常合法流量:</span>
                <span class="text-white font-bold">99.82%</span>
              </div>
              <div class="flex justify-between">
                <span>阻断恶意封包:</span>
                <span class="text-rose-400 font-bold">14,820,910 pkts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
