const t=`<script setup lang="ts">
import { LayoutDashboard } from 'lucide-vue-next'
import StatCard from '@/components/ui/StatCard.vue'

const kpiStats = [
  { title: '月经常性收入 (MRR)', val: 248500, prefix: '$', change: 18.4, period: '环比上月', color: '#10b981', trend: [180, 195, 210, 230, 248.5] },
  { title: '年度经常性收入 (ARR)', val: 2.98, prefix: '$', suffix: 'M', decimals: 2, change: 24.2, period: '年化增长', color: '#3b82f6', trend: [1.8, 2.1, 2.4, 2.7, 2.98] },
  { title: '企业付费租户数', val: 1420, change: 12.8, period: '新增 162 家', color: '#8b5cf6', trend: [1050, 1150, 1280, 1340, 1420] },
  { title: '净收入留存率 (NDR)', val: 134.5, suffix: '%', decimals: 1, change: 4.5, period: '优于基线', color: '#f59e0b', trend: [120, 125, 128, 131, 134.5] },
]
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
          <LayoutDashboard class="w-3.5 h-3.5" />
          <span>高管数据驾驶舱 · 核心财务与业务指标</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          高管全局 KPI 仪表盘
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
            ARR 与留存率全景大盘
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          基于高动态折线趋势图与数字翻牌器。为 C-Level 决策层提供实时业务健康全景。
        </p>
      </div>

      <!-- 四大核心指标网格：集成 StatCard 原子组件 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10 text-left">
        <StatCard
          v-for="kpi in kpiStats"
          :key="kpi.title"
          :title="kpi.title"
          :value="kpi.val"
          :prefix="kpi.prefix"
          :suffix="kpi.suffix"
          :decimals="kpi.decimals || 0"
          :change="kpi.change"
          :changePeriod="kpi.period"
          :color="kpi.color"
          :trendData="kpi.trend"
          class="shadow-md"
        />
      </div>

      <!-- 底部营收趋势图与客户分布模拟 -->
      <div class="max-w-6xl mx-auto rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 sm:p-8 shadow-xl text-left">
        <div class="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800">
          <div>
            <h3 class="text-base font-bold text-zinc-900 dark:text-white">近 12 个月经常性收入 (MRR) 攀升趋势</h3>
            <p class="text-xs text-zinc-500">单位：千美元 ($k)，复合月增长率 CAGR: 4.8%</p>
          </div>
          <span class="text-xs font-mono text-emerald-500 font-bold">+28.4% YoY</span>
        </div>

        <!-- 柱状营收模拟 -->
        <div class="mt-8 flex items-end gap-3 h-48 pt-4">
          <div
            v-for="(h, idx) in [110, 125, 140, 155, 170, 185, 200, 215, 225, 235, 240, 248]"
            :key="idx"
            class="flex-1 flex flex-col items-center gap-2"
          >
            <div
              class="w-full bg-gradient-to-t from-blue-600 to-indigo-500 rounded-t-lg hover:from-blue-500 hover:to-indigo-400 transition-all cursor-pointer"
              :style="{ height: \`\${(h / 260) * 100}%\` }"
              :title="\`Month \${idx + 1}: $\${h}k\`"
            ></div>
            <span class="text-[10px] text-zinc-400 font-mono">{{ idx + 1 }}月</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`;export{t as default};
