<script setup lang="ts">
import { Swords } from 'lucide-vue-next'
import ModelBenchmarkMatrix from '@/components/ui/ModelBenchmarkMatrix.vue'
import RadarChart from '@/components/ui/RadarChart.vue'
</script>

<template>
  <div class="relative w-full overflow-hidden bg-black text-white py-16 sm:py-24 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-950/40 text-amber-400 text-xs font-mono mb-4">
          <Swords class="w-3.5 h-3.5" />
          <span>LLM BLIND ARENA BENCHMARKS</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
          模型对比
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400">
            能力雷达与评测得分
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-400">
          通过能力雷达图和评测得分对比不同模型，帮你选出适合业务的模型（示例数据）。
        </p>
      </div>

      <!-- 组合展示区：左侧雷达，右侧天梯榜 -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
        <div class="lg:col-span-5 w-full">
          <RadarChart
            title="模型能力对比"
            modelAName="Aura Reasoning v4"
            modelBName="Industry Standard 70B"
            class="shadow-2xl"
          />
        </div>
        <div class="lg:col-span-7 w-full">
          <ModelBenchmarkMatrix
            title="评测得分排行"
            class="shadow-2xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>
