<script setup lang="ts">
import { Sparkles } from 'lucide-vue-next'
import ModelBenchmarkMatrix from '@/components/ui/ModelBenchmarkMatrix.vue'
import RadarChart from '@/components/ui/RadarChart.vue'
</script>

<template>
  <div class="relative w-full overflow-hidden bg-white py-16 sm:py-24 dark:bg-zinc-950 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
          <Sparkles class="w-3.5 h-3.5" />
          <span>硬核客观评测 · 胜率天梯矩阵</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          多维基准评测
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            全行业公开横向对比
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          基于 MMLU、HumanEval 代码生成、MATH 数学推理与复杂多轮指令遵循，呈现经第三方双盲验证的真实胜率与推理性价比。
        </p>
      </div>

      <!-- 组合展示区：左侧雷达图，右侧跑分天梯 -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div class="lg:col-span-5 w-full">
          <RadarChart
            title="多维认知评测六边形能力雷达"
            class="shadow-xl"
          />
        </div>
        <div class="lg:col-span-7 w-full">
          <ModelBenchmarkMatrix
            title="行业前沿模型胜率天梯榜"
            class="shadow-xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>
