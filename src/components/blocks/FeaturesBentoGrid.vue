<script setup lang="ts">
import { Sparkles, Cpu, ShieldCheck, Zap, Globe, Gauge } from 'lucide-vue-next'
import BentoGrid from '@/components/ui/BentoGrid.vue'
import BentoCard from '@/components/ui/BentoCard.vue'
import BorderBeam from '@/components/ui/BorderBeam.vue'

const featureMetrics = [
  { label: '推测解码命中率', val: '86.4%' },
  { label: '端到端首字延迟', val: '14.2 ms' },
  { label: '内存峰值降低', val: '-42%' },
]
</script>

<template>
  <div class="relative w-full overflow-hidden bg-white py-16 sm:py-24 dark:bg-zinc-950 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部介绍 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-4">
          <Sparkles class="w-3.5 h-3.5" />
          <span>核心能力矩阵 · 便当盒架构</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          专为高吞吐业务打造的
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-400">
            全景特性阵列
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          基于模块化理念，我们将核心底层能力凝练为高信息密度的自适应便当盒，让每一位访问者一目了然。
        </p>
      </div>

      <!-- Bento 网格主体：集成 BentoGrid, BentoCard, BorderBeam -->
      <BentoGrid class="grid-cols-1 md:grid-cols-3 gap-6">
        <!-- 核心大卡 1 (占 2 列) -->
        <div class="md:col-span-2 relative rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/60 p-6 sm:p-8 backdrop-blur-md overflow-hidden flex flex-col justify-between">
          <BorderBeam :size="240" :duration="8" colorFrom="#6366f1" colorTo="#38bdf8" />
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 flex items-center justify-center">
                <Cpu class="w-5 h-5" />
              </div>
              <span class="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">ENGINE V4</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">推测推理并发管线</h3>
            <p class="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
              支持主备双模型异构前瞻验证，针对海量高频问答与结构化数据抽取，提供前所未有的毫秒级并发吞吐能力。
            </p>
          </div>

          <!-- 指标栏 -->
          <div class="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-zinc-200 dark:border-zinc-800">
            <div v-for="m in featureMetrics" :key="m.label">
              <div class="text-lg sm:text-xl font-black font-mono text-zinc-900 dark:text-white">{{ m.val }}</div>
              <div class="text-[11px] text-zinc-500">{{ m.label }}</div>
            </div>
          </div>
        </div>

        <!-- 卡片 2 (占 1 列) -->
        <BentoCard
          name="零信任内存沙盒"
          description="每个推理实例在独立的轻量微虚拟机飞地中运行，物理级隔离跨租户数据。"
          cta="查看安全架构"
          class="min-h-[280px]"
        >
          <template #header>
            <div class="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 flex items-center justify-center mb-4">
              <ShieldCheck class="w-5 h-5" />
            </div>
          </template>
        </BentoCard>

        <!-- 卡片 3 (占 1 列) -->
        <BentoCard
          name="分布式任意播路由"
          description="全球 300+ 边缘 PoP 节点自动嗅探最短往返时延路径，自动容灾秒级自愈。"
          cta="探索全球节点"
          class="min-h-[280px]"
        >
          <template #header>
            <div class="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500 flex items-center justify-center mb-4">
              <Globe class="w-5 h-5" />
            </div>
          </template>
        </BentoCard>

        <!-- 卡片 4 (占 1 列) -->
        <BentoCard
          name="极低资源消耗"
          description="原生单文件组件纯粹性，无多余外部运行期打包负担，Tree-shaking 彻底。"
          cta="查看基准测试"
          class="min-h-[280px]"
        >
          <template #header>
            <div class="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center mb-4">
              <Gauge class="w-5 h-5" />
            </div>
          </template>
        </BentoCard>

        <!-- 卡片 5 (占 1 列) -->
        <BentoCard
          name="100% 声明式动画"
          description="全栈 CSS 变量驱动与原生 requestAnimationFrame 驱动，拒绝繁重重绘。"
          cta="阅读技术方案"
          class="min-h-[280px]"
        >
          <template #header>
            <div class="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center mb-4">
              <Zap class="w-5 h-5" />
            </div>
          </template>
        </BentoCard>
      </BentoGrid>
    </div>
  </div>
</template>
