const n=`<script setup lang="ts">
import { Bot } from 'lucide-vue-next'
import AgentPlan from '@/components/ui/AgentPlan.vue'
import AgentTimeline from '@/components/ui/AgentTimeline.vue'
import ToolCall from '@/components/ui/ToolCall.vue'
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-black text-white py-16 sm:py-24 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-950/40 text-sky-400 text-xs font-mono mb-4">
          <Bot class="w-3.5 h-3.5" />
          <span>AUTONOMOUS AGENT ORCHESTRATOR · V4</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
          多智能体协同工作台
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400">
            执行过程一览
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-400">
          包含任务拆分、时间线和工具调用审批。
        </p>
      </div>

      <!-- 工作台主布局 -->
      <div class="space-y-8 max-w-6xl mx-auto text-left">
        <!-- 上层：时间轴甘特图：集成 AgentTimeline 原子组件 -->
        <div class="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-4 sm:p-6 shadow-2xl backdrop-blur-md">
          <AgentTimeline
            :totalDuration="14"
            :totalTokens="62400"
            :totalCost="0.054"
            class="!border-0 !bg-transparent"
          />
        </div>

        <!-- 下层双分屏：左侧任务规划，右侧工具执行审批 -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div class="lg:col-span-6 w-full">
            <AgentPlan
              title="执行计划"
              goal="分析各地域服务的性能问题，并把流量切换到备用节点"
              class="shadow-xl"
            />
          </div>
          <div class="lg:col-span-6 w-full">
            <ToolCall
              toolName="execute_failover_drain"
              command="POST https://api.cloud.internal/v2/regions/us-east-1/drain?grace_period=30s"
              status="approval_required"
              :durationMs="320"
              class="shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
