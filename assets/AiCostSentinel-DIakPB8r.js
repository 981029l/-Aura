const n=`<script setup lang="ts">
import { Coins } from 'lucide-vue-next'
import StatCard from '@/components/ui/StatCard.vue'
import PromptCache from '@/components/ui/PromptCache.vue'
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-4">
          <Coins class="w-3.5 h-3.5" />
          <span>实时 Token 资费哨兵 · 智能预算熔断</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          AI 成本监控哨兵
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
            算力开销与前缀缓存
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          全时段监控各团队、项目与模型的实时 Token 消耗速率。超支秒级自动预警并熔断限流。
        </p>
      </div>

      <!-- 核心指标卡与缓存计算 -->
      <div class="space-y-8 max-w-5xl mx-auto text-left">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <StatCard
            title="今日累计消耗 Token"
            :value="14.8"
            suffix="M"
            :decimals="1"
            :change="-18.2"
            changePeriod="缓存优化后"
            color="#10b981"
            :trendData="[22, 19, 18, 16, 14.8]"
          />
          <StatCard
            title="前缀缓存总节省金额"
            :value="2480"
            prefix="$"
            :change="42.5"
            changePeriod="较上周增长"
            color="#3b82f6"
            :trendData="[1200, 1500, 1850, 2100, 2480]"
          />
          <StatCard
            title="平均单会话推演成本"
            :value="0.0042"
            prefix="$"
            :decimals="4"
            :change="-35.0"
            changePeriod="模型蒸馏收益"
            color="#8b5cf6"
            :trendData="[0.008, 0.007, 0.006, 0.005, 0.0042]"
          />
        </div>

        <PromptCache
          title="前缀缓存 (Prompt Cache) 命中率与账单折算"
          :cachedTokens="82000"
          :uncachedTokens="1600"
          class="shadow-xl"
        />
      </div>
    </div>
  </div>
</template>
`;export{n as default};
