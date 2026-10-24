<script setup lang="ts">
import { Coins } from 'lucide-vue-next'
import RadialGauge from '@/components/ui/RadialGauge.vue'
import ComparisonMatrix, { type PlanTier, type FeatureItem } from '@/components/ui/ComparisonMatrix.vue'

const costPlans: PlanTier[] = [
  { id: 'ondemand', name: '全额按需计费', price: '$4,280', period: '月成本', ctaText: '当前基线' },
  { id: 'spot', name: '抢占式 Spot 混合池', price: '$2,140', period: '立省 50%', popular: true, ctaText: '已激活' },
  { id: 'reserved', name: '3 年预留实例保障', price: '$1,590', period: '立省 63%', ctaText: '一键采购' },
]

const costFeatures: FeatureItem[] = [
  { name: '闲置实例夜间自动休眠', category: '自动化调度', values: { ondemand: false, spot: true, reserved: true } },
  { name: '跨地域流量回源走内网专线', category: '自动化调度', values: { ondemand: false, spot: true, reserved: true } },
  { name: 'GPU 显存碎片动态合并', category: '算力优化', values: { ondemand: false, spot: '85%', reserved: '98%' } },
  { name: '异常资费突增秒级电话告警', category: '成本哨兵', values: { ondemand: true, spot: true, reserved: true } },
]
</script>

<template>
  <div class="relative w-full overflow-hidden bg-white py-16 sm:py-24 dark:bg-zinc-950 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-4">
          <Coins class="w-3.5 h-3.5" />
          <span>FinOps 云成本智能治理 · 资费下探</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          云端 FinOps 成本优化
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500">
            算力闲置率削减 68%
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          全时段探测 AWS、GCP 与 Azure 闲置算力，结合 Spot 抢占式调度与预留保障，实现云上资产精细化控费。
        </p>
      </div>

      <!-- 组合展示区：左侧成本节约仪表盘，右侧计费对比矩阵 -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto text-left">
        <!-- 左侧：节约健康度仪表盘 -->
        <div class="lg:col-span-5 p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 shadow-xl flex flex-col justify-between">
          <div>
            <span class="text-xs font-mono font-bold text-emerald-500 uppercase tracking-wider">
              FINOPS EFFICIENCY SCORE
            </span>
            <h3 class="text-xl font-bold text-zinc-900 dark:text-white mt-1">云资源开销健康度</h3>
            <p class="text-xs text-zinc-500 mt-2">基于综合超分比、冷数据归档与无损降配算法演算</p>

            <div class="my-8 flex justify-center">
              <RadialGauge :value="88" :size="160" :strokeWidth="14" label="健康分" />
            </div>

            <div class="space-y-3 pt-4 border-t border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400">
              <div class="flex items-center justify-between">
                <span>月度总节约开销:</span>
                <span class="font-bold font-mono text-emerald-500">$2,140 / 月</span>
              </div>
              <div class="flex items-center justify-between">
                <span>无主孤儿磁盘清理:</span>
                <span class="font-bold font-mono text-zinc-900 dark:text-white">42 块</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧：对比表格：集成 ComparisonMatrix 原子组件 -->
        <div class="lg:col-span-7 w-full">
          <ComparisonMatrix
            :plans="costPlans"
            :features="costFeatures"
            class="shadow-xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>
