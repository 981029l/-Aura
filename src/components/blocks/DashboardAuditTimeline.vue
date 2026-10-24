<script setup lang="ts">
import { Clock } from 'lucide-vue-next'
import AgentTimeline from '@/components/ui/AgentTimeline.vue'
import PromptDiffViewer from '@/components/ui/PromptDiffViewer.vue'
</script>

<template>
  <div class="relative w-full overflow-hidden bg-black text-white py-16 sm:py-24 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-950/40 text-teal-400 text-xs font-mono mb-4">
          <Clock class="w-3.5 h-3.5" />
          <span>CRYPTOGRAPHIC AUDIT LOGS & DIFF</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
          审计溯源时序大盘
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
            执行时间轴与变更 Diff
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-400">
          全时段捕捉智能体决策、工具写操作与策略变更。支持高精度时钟对齐与逐行 Diff 溯源。
        </p>
      </div>

      <!-- 组合展示区：时间轴甘特图 + 变更 Diff -->
      <div class="space-y-8 max-w-5xl mx-auto text-left">
        <div class="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-4 sm:p-6 shadow-2xl backdrop-blur-md">
          <AgentTimeline
            :totalDuration="16"
            :totalTokens="78400"
            :totalCost="0.068"
            class="!border-0 !bg-transparent"
          />
        </div>

        <div class="w-full">
          <PromptDiffViewer
            title="策略规则变更不可篡改审计 (Audit Diff)"
            class="shadow-2xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>
