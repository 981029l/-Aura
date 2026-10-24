<script setup lang="ts">
import { Sparkles } from 'lucide-vue-next'
import ComparisonMatrix, { type PlanTier, type FeatureItem } from '@/components/ui/ComparisonMatrix.vue'

const plans: PlanTier[] = [
  { id: 'free', name: 'Starter 开源版', price: '$0', period: '永久免费', ctaText: '免费起步' },
  { id: 'pro', name: 'Pro 专业版', price: '$49', period: '每席位 / 月', popular: true, ctaText: '14天免费试用' },
  { id: 'ent', name: 'Enterprise 旗舰版', price: '$299', period: '专属定制', ctaText: '联系专属架构师' },
]

const features: FeatureItem[] = [
  {
    name: '182 款原子动效组件库',
    category: '核心组件',
    values: { free: true, pro: true, ent: true },
  },
  {
    name: '109 款场景业务 Blocks 组合矩阵',
    category: '核心组件',
    values: { free: false, pro: true, ent: true },
  },
  {
    name: '100% 纯 Vue 3.5 SFC 单文件组件',
    category: '核心组件',
    values: { free: true, pro: true, ent: true },
  },
  {
    name: '每月推测解码并发额度',
    category: '云端算力',
    values: { free: '50K', pro: '2M', ent: '无限量' },
  },
  {
    name: '硬件隔离飞地 (Enclave)',
    category: '安全合规',
    values: { free: false, pro: false, ent: true },
  },
  {
    name: '99.999% 金融级 SLA 赔付承诺',
    category: '服务保障',
    values: { free: false, pro: '99.9%', ent: '99.999%' },
  },
  {
    name: '工单技术响应时效',
    category: '服务保障',
    values: { free: '社区异步', pro: '4 小时内', ent: '15 分钟加急' },
  },
]
</script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-4">
          <Sparkles class="w-3.5 h-3.5" />
          <span>全量特性对齐 · 深度选型清单</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          特性明细全景对照
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400">
            拒绝含糊承诺
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          全量功能逐一打勾对比。清晰透明，帮助产研负责人为团队做出最严谨的架构决策。
        </p>
      </div>

      <!-- 对比表格主体：集成 ComparisonMatrix 原子组件 -->
      <div class="max-w-5xl mx-auto">
        <ComparisonMatrix
          :plans="plans"
          :features="features"
          class="shadow-xl"
        />
      </div>
    </div>
  </div>
</template>
