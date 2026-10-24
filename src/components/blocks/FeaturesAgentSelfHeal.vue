<script setup lang="ts">
import { Bot } from 'lucide-vue-next'
import AgentLoop from '@/components/ui/AgentLoop.vue'
import AgentPlan from '@/components/ui/AgentPlan.vue'
</script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 text-xs font-semibold mb-4">
          <Bot class="w-3.5 h-3.5" />
          <span>自主思考与行动 · 感知-行动-验证闭环</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          智能体闭环自愈
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600">
            自主决策与推演规划
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          当执行产生边界错误或类型警告时，智能体自主启动回溯重构，在沙盒中回归验证直到达成最终目标。
        </p>
      </div>

      <!-- 组合展示区：左侧感知行动闭环，右侧执行规划 DAG -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div class="lg:col-span-5 w-full">
          <AgentLoop
            title="感知-决策-行动-自愈闭环 (Agent Loop)"
            :cycleCount="18"
            class="shadow-xl"
          />
        </div>
        <div class="lg:col-span-7 w-full">
          <AgentPlan
            title="自适应任务规划推演 (Agent Plan)"
            goal="全量 109 款场景业务 Blocks 组合矩阵装配与自动化类型验证"
            class="shadow-xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>
