const n=`<script setup lang="ts">
import { ArrowRight, ShieldCheck, Building2, CheckCircle2 } from 'lucide-vue-next'
import MultiRegionFailover from '@/components/ui/MultiRegionFailover.vue'
import StatCard from '@/components/ui/StatCard.vue'

const enterpriseCompliance = [
  'SOC-2 Type II 认证',
  'ISO/IEC 27001:2022',
  'GDPR & HIPAA 医疗金融合规',
  '99.999% 金融级 SLA 赔付承诺',
]
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-950 text-white py-16 sm:py-24 lg:py-32 transition-colors">
    <!-- 企业级深蓝渐变流光 -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute left-1/2 -top-20 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full"></div>
    </div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- 左侧：企业级定位与合规认证 -->
        <div class="lg:col-span-5 flex flex-col items-start text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-950/40 text-blue-400 text-xs font-semibold backdrop-blur-md mb-6">
            <ShieldCheck class="w-3.5 h-3.5 text-blue-400" />
            <span>财富 500 强专属混合云基础设施</span>
          </div>

          <h1 class="text-4xl sm:text-5xl font-black tracking-tight text-white leading-[1.12]">
            企业级多云混合
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
              容灾与高可用大盘
            </span>
          </h1>

          <p class="mt-6 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-lg">
            专为金融、跨国制造与关键行业打造。多云跨地域双活、毫秒级探测与全自动无缝故障转移，确保持续业务永续运营。
          </p>

          <!-- 合规列表 -->
          <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            <div
              v-for="item in enterpriseCompliance"
              :key="item"
              class="flex items-center gap-2 text-xs text-zinc-300"
            >
              <CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{{ item }}</span>
            </div>
          </div>

          <!-- 双行动按钮 -->
          <div class="mt-8 flex items-center gap-4">
            <button class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-blue-600/25 active:scale-95">
              <span>联系企业专属顾问</span>
              <ArrowRight class="w-4 h-4" />
            </button>
            <button class="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 text-xs sm:text-sm transition-all">
              <Building2 class="w-4 h-4 text-zinc-400" />
              <span>查看安全白皮书</span>
            </button>
          </div>
        </div>

        <!-- 右侧：多地域容灾调度可视化：集成 MultiRegionFailover 与 StatCard 原子组件 -->
        <div class="lg:col-span-7 flex flex-col gap-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StatCard
              title="全局服务可用性 (SLA)"
              :value="99.999"
              suffix="%"
              :decimals="3"
              :change="0.001"
              changePeriod="本月无故障"
              :trendData="[99.99, 99.995, 99.998, 99.999, 99.999]"
              class="!border-zinc-800 !bg-zinc-900/60"
            />
            <StatCard
              title="容灾热备自动倒换耗时"
              :value="180"
              suffix="ms"
              :change="-24.5"
              changePeriod="优于标准 5 倍"
              color="#10b981"
              :trendData="[240, 220, 210, 195, 180]"
              class="!border-zinc-800 !bg-zinc-900/60"
            />
          </div>

          <div class="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-2 sm:p-4 shadow-2xl backdrop-blur-xl">
            <MultiRegionFailover
              title="跨地域高可用容灾与无损流量热切换"
              class="!border-0 !bg-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
