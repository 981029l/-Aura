const n=`<script setup lang="ts">
import { TrendingUp, ArrowUpRight, BarChart2 } from 'lucide-vue-next'
import StatCard from '@/components/ui/StatCard.vue'

const caseStudies = [
  {
    company: 'FinOps Cloud Core',
    metric: '48.2%',
    metricLabel: '前端加载速度提升',
    desc: '全面迁移到 Aura UI 动效单文件架构后，首屏交互耗时降低了近半，客户续费率显著改善。',
  },
  {
    company: 'Neural Workspace',
    metric: '3.4x',
    metricLabel: '用户停留时长跃升',
    desc: '得益于直观的智能体推理可视化组件，用户的任务执行留存时长增加了 340%。',
  },
  {
    company: 'Global Retail Hub',
    metric: '99.99%',
    metricLabel: '线上高并发可用性',
    desc: '在黑五大促千万级流量并发下，零掉帧无卡顿支撑全天销售高峰。',
  },
]
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-4">
          <TrendingUp class="w-3.5 h-3.5" />
          <span>量化业务回报 · 真实增长指标</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          用确凿的业务增长
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
            印证卓越工程价值
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          优秀的动效不仅仅关乎美感，更是驱动高转化与业务增长的核心生产力。
        </p>
      </div>

      <!-- 四项核心指标大卡网格：集成 StatCard 原子组件 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
        <StatCard
          title="平均首屏交互耗时降低"
          :value="64"
          suffix="%"
          :change="64"
          changePeriod="相比旧架构"
          color="#3b82f6"
          :trendData="[12, 18, 28, 42, 64]"
        />
        <StatCard
          title="注册流程点击转化率"
          :value="8.4"
          suffix="%"
          :decimals="1"
          :change="145"
          changePeriod="环比翻倍"
          color="#10b981"
          :trendData="[3.2, 4.1, 5.8, 7.2, 8.4]"
        />
        <StatCard
          title="前端重构人月节省"
          :value="4.5"
          suffix=" 个月"
          :decimals="1"
          :change="70"
          changePeriod="提前交付"
          color="#8b5cf6"
          :trendData="[1, 2, 3, 4, 4.5]"
        />
        <StatCard
          title="生产零缺陷发布天数"
          :value="365"
          suffix=" 天"
          :change="100"
          changePeriod="全年稳定"
          color="#f59e0b"
          :trendData="[100, 180, 240, 300, 365]"
        />
      </div>

      <!-- 三个客户案例深度横排 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
        <div
          v-for="cs in caseStudies"
          :key="cs.company"
          class="p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between text-xs font-mono font-bold text-zinc-400 mb-2">
              <span>{{ cs.company }}</span>
              <BarChart2 class="w-4 h-4 text-emerald-500" />
            </div>
            <div class="text-3xl font-black font-mono text-emerald-500 mt-2">
              {{ cs.metric }}
            </div>
            <div class="text-xs font-bold text-zinc-900 dark:text-white mt-1">
              {{ cs.metricLabel }}
            </div>
            <p class="mt-3 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {{ cs.desc }}
            </p>
          </div>
          <div class="mt-6 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
            <span>阅读完整案例研究</span>
            <ArrowUpRight class="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
