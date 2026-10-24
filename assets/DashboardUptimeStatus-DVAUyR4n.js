const e=`<script setup lang="ts">
import { ref } from 'vue'
import { Activity } from 'lucide-vue-next'
import SegmentedControl, { type SegmentedOption } from '@/components/ui/SegmentedControl.vue'
import ProgressSteps, { type StepItem } from '@/components/ui/ProgressSteps.vue'

const currentPeriod = ref<'24h' | '7d' | '30d' | '90d'>('90d')

const periodOptions: SegmentedOption[] = [
  { id: '24h', label: '最近 24 小时' },
  { id: '7d', label: '7 天' },
  { id: '30d', label: '30 天' },
  { id: '90d', label: '90 天历史' },
]

const incidentSteps: StepItem[] = [
  { id: 1, title: '探测发现 (Investigating)', description: 'APM 报警探测到美东可用区 RTT 抖动' },
  { id: 2, title: '根因识别 (Identified)', description: '定位为上游跨洋海缆光纤发生偶发丢包' },
  { id: 3, title: '流量旁路 (Monitoring)', description: '已将 Anycast 流量热切至备用伦敦链路' },
  { id: 4, title: '故障解决 (Resolved)', description: '全网指标已恢复 100% 正常，事故结案' },
]

const services = [
  { name: 'Core API Gateway', uptime: '100%', status: 'Operational' },
  { name: 'Vector Embedding Search', uptime: '99.99%', status: 'Operational' },
  { name: 'WebSocket Realtime Engine', uptime: '100%', status: 'Operational' },
  { name: 'Dashboard Web App', uptime: '100%', status: 'Operational' },
]
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-4">
          <Activity class="w-3.5 h-3.5" />
          <span>公开服务状态页 · 全系统健康观测</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          服务可用性与故障透明大盘
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
            全系统 100% 正常运行
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          全透明公开每一个核心 API、向量检索与实时通信引擎的在线率与历史事故处置记录。
        </p>
      </div>

      <!-- 周期切换胶囊：集成 SegmentedControl 原子组件 -->
      <div class="flex justify-center mb-10">
        <SegmentedControl
          v-model="currentPeriod"
          :options="periodOptions"
          size="md"
        />
      </div>

      <!-- 服务在线状态条列表 -->
      <div class="max-w-4xl mx-auto rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 shadow-xl text-left space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800">
          <span class="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
            核心微服务可用性状态
          </span>
          <span class="flex items-center gap-1.5 text-xs font-bold text-emerald-500 font-mono">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            ALL SYSTEMS OPERATIONAL
          </span>
        </div>

        <div class="space-y-4">
          <div
            v-for="srv in services"
            :key="srv.name"
            class="flex items-center justify-between text-xs"
          >
            <span class="font-bold text-zinc-800 dark:text-zinc-200">{{ srv.name }}</span>
            <div class="flex items-center gap-4">
              <!-- 90 天可用性点阵模拟条 -->
              <div class="hidden sm:flex items-center gap-0.5">
                <div v-for="i in 30" :key="i" class="w-1.5 h-6 rounded-sm bg-emerald-500/80 hover:scale-125 transition-transform" :title="\`Day \${i}: 100%\`"></div>
              </div>
              <span class="font-mono font-bold text-emerald-500">{{ srv.uptime }}</span>
            </div>
          </div>
        </div>

        <!-- 历史事件处置进度追踪：集成 ProgressSteps 原子组件 -->
        <div class="pt-6 border-t border-zinc-100 dark:border-zinc-800">
          <div class="text-xs font-bold text-zinc-400 mb-6">最近一次偶发事件处置闭环归档:</div>
          <ProgressSteps
            :steps="incidentSteps"
            :currentStep="4"
            :clickable="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>
`;export{e as default};
