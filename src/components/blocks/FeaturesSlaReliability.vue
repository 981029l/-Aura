<script setup lang="ts">
import { ShieldCheck, CheckCircle2 } from 'lucide-vue-next'
import MultiRegionFailover from '@/components/ui/MultiRegionFailover.vue'
import RadialGauge from '@/components/ui/RadialGauge.vue'

const slaItems = [
  '99.999% 生产集群可用性保障（每月停机容忍 < 26 秒）',
  '超时 100 倍按分钟补偿代币与专属企业 SLA 保单',
  '全球 3 独立云厂商跨云热备双活架构',
  '每季度全量混沌工程故障注入红蓝对抗演练',
]
</script>

<template>
  <div class="relative w-full overflow-hidden bg-white py-16 sm:py-24 dark:bg-zinc-950 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- 左侧：SLA 可靠性说明与径向仪表盘 -->
        <div class="lg:col-span-5 flex flex-col items-start text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-6">
            <ShieldCheck class="w-3.5 h-3.5" />
            <span>金融级 5 个 9 可用性承诺</span>
          </div>

          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
            99.999% 可用性
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500">
              不可动摇的生产基石
            </span>
          </h2>

          <p class="mt-6 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg">
            核心基础设施部署于跨云高隔离区。任意单云或单数据中心断电事故发生时，毫秒级无损热切流量至备用链路。
          </p>

          <!-- 径向仪表盘模拟：集成 RadialGauge 原子组件 -->
          <div class="mt-6 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 flex items-center gap-4 w-full max-w-md">
            <RadialGauge :value="99.9" :size="120" :strokeWidth="10" label="SLA" />
            <div class="text-left">
              <div class="text-xs font-bold text-zinc-900 dark:text-white">连续无事故运行天数</div>
              <div class="text-2xl font-black font-mono text-emerald-500 mt-0.5">842 天</div>
              <p class="text-[10px] text-zinc-400 mt-1">上一次自动故障转移耗时 120ms</p>
            </div>
          </div>

          <!-- 保障清单 -->
          <div class="mt-8 space-y-2.5">
            <div
              v-for="sla in slaItems"
              :key="sla"
              class="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300"
            >
              <CheckCircle2 class="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{{ sla }}</span>
            </div>
          </div>
        </div>

        <!-- 右侧：多地域容灾调度可视化：集成 MultiRegionFailover 原子组件 -->
        <div class="lg:col-span-7 w-full">
          <div class="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 p-4 sm:p-6 shadow-2xl backdrop-blur-xl">
            <MultiRegionFailover
              title="多地域自动容灾流量调度演练"
              class="!border-0 !bg-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
