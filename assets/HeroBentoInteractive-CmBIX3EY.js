const e=`<script setup lang="ts">
import { ArrowRight, Sparkles, Layers, Cpu, ShieldCheck, Zap } from 'lucide-vue-next'
import BentoGrid from '@/components/ui/BentoGrid.vue'
import BentoCard from '@/components/ui/BentoCard.vue'
import BorderBeam from '@/components/ui/BorderBeam.vue'
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 lg:py-28 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <!-- 顶部药丸 -->
      <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-indigo-500/20 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-6">
        <Sparkles class="w-3.5 h-3.5" />
        <span>便当盒 Bento 架构 · 精准组织多维信息</span>
      </div>

      <!-- 主标题 -->
      <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 dark:text-white max-w-3xl leading-[1.12]">
        以极简便当盒矩阵
        <span class="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400">
          收纳复杂系统的全部力量
        </span>
      </h1>

      <p class="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
        将纷繁复杂的微服务遥测、安全防御网关与分布式计算阵列，优雅地解构并嵌入到自适应的多维便当盒卡片网格之中。
      </p>

      <!-- 双行动按钮 -->
      <div class="mt-8 flex items-center justify-center gap-4">
        <button class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-indigo-600/25 active:scale-95">
          <span>免费体验 Bento 布局</span>
          <ArrowRight class="w-4 h-4" />
        </button>
        <button class="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-semibold text-xs sm:text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all">
          <span>查看设计指南</span>
        </button>
      </div>

      <!-- 便当盒网格区域：集成 BentoGrid 与 BentoCard 原子组件 -->
      <div class="mt-14 w-full max-w-6xl text-left">
        <BentoGrid class="grid-cols-1 md:grid-cols-3 gap-5">
          <!-- 核心大卡片 1 (占 2 列) -->
          <div class="md:col-span-2 relative rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 p-6 sm:p-8 shadow-sm overflow-hidden flex flex-col justify-between">
            <BorderBeam :size="200" :duration="7" colorFrom="#6366f1" colorTo="#38bdf8" />
            <div class="flex items-center justify-between">
              <div class="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 flex items-center justify-center">
                <Cpu class="w-5 h-5" />
              </div>
              <span class="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                ACTIVE
              </span>
            </div>
            <div class="my-6">
              <h3 class="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">高并发推测解码引擎</h3>
              <p class="mt-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-lg">
                基于小模型前瞻预测与主模型验证并行架构，吞吐速率提升 340%，同时降低 65% 计算开销。
              </p>
            </div>
            <!-- 模拟柱状流 -->
            <div class="flex items-end gap-2 h-20 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <div v-for="h in [25, 45, 60, 30, 80, 95, 70, 85, 100, 75, 90, 80]" :key="h" class="flex-1 bg-indigo-500/40 rounded-t-sm" :style="{ height: \`\${h}%\` }"></div>
            </div>
          </div>

          <!-- 紧凑卡片 2 (占 1 列) -->
          <BentoCard
            name="零信任密钥守护"
            description="基于 HSM 物理硬件飞地加密，全链路动态令牌免泄露防护。"
            cta="了解防御矩阵"
            class="min-h-[260px]"
          >
            <template #header>
              <div class="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 flex items-center justify-center mb-4">
                <ShieldCheck class="w-5 h-5" />
              </div>
            </template>
          </BentoCard>

          <!-- 紧凑卡片 3 (占 1 列) -->
          <BentoCard
            name="毫秒级边缘路由"
            description="自动探测跨国网络抖动，秒级自愈与无损数据包重传调度。"
            cta="查看全球延迟"
            class="min-h-[260px]"
          >
            <template #header>
              <div class="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center mb-4">
                <Zap class="w-5 h-5" />
              </div>
            </template>
          </BentoCard>

          <!-- 宽卡片 4 (占 2 列) -->
          <div class="md:col-span-2 relative rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 p-6 sm:p-8 shadow-sm overflow-hidden flex flex-col justify-between">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500 flex items-center justify-center">
                <Layers class="w-5 h-5" />
              </div>
              <div>
                <h3 class="text-lg font-bold text-zinc-900 dark:text-white">统一场景业务矩阵</h3>
                <p class="text-xs text-zinc-500">109 款场景区块已覆盖全周期企业 SaaS 与 AI 平台需求</p>
              </div>
            </div>
            <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-center">
              <div class="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50">
                <div class="text-lg font-bold text-zinc-900 dark:text-white">15 款</div>
                <div class="text-[11px] text-zinc-500">首屏营销 Hero</div>
              </div>
              <div class="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50">
                <div class="text-lg font-bold text-zinc-900 dark:text-white">18 款</div>
                <div class="text-[11px] text-zinc-500">核心特性矩阵</div>
              </div>
              <div class="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50">
                <div class="text-lg font-bold text-zinc-900 dark:text-white">16 款</div>
                <div class="text-[11px] text-zinc-500">AI 智能工作台</div>
              </div>
              <div class="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50">
                <div class="text-lg font-bold text-zinc-900 dark:text-white">16 款</div>
                <div class="text-[11px] text-zinc-500">SaaS 仪表盘</div>
              </div>
            </div>
          </div>
        </BentoGrid>
      </div>
    </div>
  </div>
</template>
`;export{e as default};
