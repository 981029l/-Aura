const n=`<script setup lang="ts">
import { ArrowRight, Sparkles, TrendingUp, Activity, Users, ShieldCheck, Play } from 'lucide-vue-next'
import BorderBeam from '@/components/ui/BorderBeam.vue'
import TiltCard from '@/components/ui/TiltCard.vue'

const kpiStats = [
  { label: '月经常性收入 (MRR)', value: '$148,290', change: '+24.6%', icon: TrendingUp, positive: true },
  { label: '集群端到端延迟', value: '18.4 ms', change: '-32%', icon: Activity, positive: true },
  { label: '活跃智能体实例', value: '1,420,891', change: '+18.2%', icon: Users, positive: true },
  { label: '高可用容灾 SLA', value: '99.999%', change: 'Normal', icon: ShieldCheck, positive: true },
]
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-white py-16 sm:py-24 lg:py-28 dark:bg-zinc-950 transition-colors">
    <!-- 背景流光光锥 -->
    <div class="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-blue-500/10 via-indigo-500/5 to-transparent blur-3xl pointer-events-none"></div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <!-- 顶部药丸标签 -->
      <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/80 text-zinc-800 dark:text-zinc-200 text-xs font-medium backdrop-blur-md shadow-sm">
        <Sparkles class="w-3.5 h-3.5 text-blue-500" />
        <span>Aura Cloud SaaS 仪表盘 4.0 现已就绪</span>
      </div>

      <!-- 主标题 -->
      <h1 class="mt-6 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 dark:text-white max-w-4xl leading-[1.15]">
        统一观测、推演与管理
        <span class="block bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
          下一代企业智能体基础设施
        </span>
      </h1>

      <!-- 副文案 -->
      <p class="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
        全栈可观测控制台。开箱即用的实时调用拓扑追踪、云端 Token 成本哨兵预警、细粒度数据审计以及智能自愈弹性伸缩。
      </p>

      <!-- 行动按钮 -->
      <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-black font-semibold text-sm transition-all shadow-md active:scale-95">
          <span>开始 14 天免费试用</span>
          <ArrowRight class="w-4 h-4" />
        </button>
        <button class="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-semibold text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all active:scale-95">
          <Play class="w-4 h-4 text-blue-500 fill-blue-500" />
          <span>观看 2 分钟交互演示</span>
        </button>
      </div>

      <!-- 3D 透视倾斜大盘：集成 TiltCard 与 BorderBeam 原子组件 -->
      <div class="mt-14 w-full max-w-5xl [perspective:1200px]">
        <TiltCard :maxTilt="8" :glare="true" class="w-full">
          <div class="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-900/90 text-left p-4 sm:p-6 shadow-2xl backdrop-blur-xl overflow-hidden text-zinc-100">
            <!-- 边框流光动效 -->
            <BorderBeam :size="240" :duration="8" colorFrom="#3b82f6" colorTo="#8b5cf6" />

            <!-- 顶部仿 macOS 窗口红黄绿三色圆点与标签 -->
            <div class="flex items-center justify-between pb-4 border-b border-zinc-800/80">
              <div class="flex items-center gap-2">
                <div class="flex gap-1.5">
                  <div class="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div class="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div class="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <span class="text-xs font-mono text-zinc-400 pl-2">aura-cloud-console.internal</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  LIVE PRODUCTION
                </span>
              </div>
            </div>

            <!-- 四格核心 KPI 指标网格 -->
            <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div
                v-for="stat in kpiStats"
                :key="stat.label"
                class="p-4 rounded-xl bg-zinc-800/40 border border-zinc-700/40 flex flex-col justify-between"
              >
                <div class="flex items-center justify-between text-zinc-400 text-xs">
                  <span>{{ stat.label }}</span>
                  <component :is="stat.icon" class="w-4 h-4 text-blue-400" />
                </div>
                <div class="mt-3">
                  <div class="text-xl sm:text-2xl font-black font-mono tracking-tight text-white">{{ stat.value }}</div>
                  <span class="text-[11px] font-semibold text-emerald-400 flex items-center gap-0.5 mt-0.5">
                    {{ stat.change }}
                  </span>
                </div>
              </div>
            </div>

            <!-- 图表与实时拓扑模拟 -->
            <div class="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-4">
              <!-- 左侧：实时流量脉冲柱状图 -->
              <div class="lg:col-span-2 p-4 rounded-xl bg-zinc-800/40 border border-zinc-700/40">
                <div class="flex items-center justify-between text-xs font-medium text-zinc-300 mb-3">
                  <span>全球 API 请求吞吐量 (RPS)</span>
                  <span class="font-mono text-blue-400">平均 48,200 req/s</span>
                </div>
                <!-- 柱状图模拟 -->
                <div class="flex items-end gap-1.5 h-32 pt-4">
                  <div
                    v-for="(h, idx) in [40, 55, 35, 70, 85, 60, 75, 90, 65, 80, 95, 70, 85, 100, 75, 90, 85, 95]"
                    :key="idx"
                    class="flex-1 bg-gradient-to-t from-blue-600 to-indigo-400 rounded-t-sm hover:from-blue-500 hover:to-indigo-300 transition-all"
                    :style="{ height: \`\${h}%\` }"
                    :title="\`Slot \${idx}: \${h}%\`"
                  ></div>
                </div>
              </div>

              <!-- 右侧：健康状态节点监控 -->
              <div class="p-4 rounded-xl bg-zinc-800/40 border border-zinc-700/40 flex flex-col justify-between">
                <div class="text-xs font-medium text-zinc-300">多区域热备状态</div>
                <div class="space-y-2 mt-2">
                  <div v-for="region in ['us-east-1 (弗吉尼亚)', 'eu-central-1 (法兰克福)', 'ap-southeast-1 (新加坡)']" :key="region" class="flex items-center justify-between text-[11px]">
                    <span class="text-zinc-400">{{ region }}</span>
                    <span class="text-emerald-400 font-mono font-medium">100% HEALTHY</span>
                  </div>
                </div>
                <div class="mt-4 pt-3 border-t border-zinc-700/40 flex items-center justify-between text-xs text-zinc-400">
                  <span>自动故障转移</span>
                  <span class="text-blue-400 font-semibold font-mono">&lt; 200ms</span>
                </div>
              </div>
            </div>
          </div>
        </TiltCard>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
