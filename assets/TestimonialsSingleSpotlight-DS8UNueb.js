const t=`<script setup lang="ts">
import { Quote } from 'lucide-vue-next'
import SpotlightCard from '@/components/ui/SpotlightCard.vue'
import ShinyText from '@/components/ui/ShinyText.vue'
import AnimatedCounter from '@/components/ui/AnimatedCounter.vue'
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-white py-20 sm:py-28 dark:bg-zinc-950 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <SpotlightCard
          spotlightColor="rgba(59, 130, 246, 0.18)"
          :spotlightRadius="400"
          class="p-8 sm:p-14 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/90 shadow-2xl text-left relative overflow-hidden"
        >
          <!-- 装饰引言大双引号 -->
          <div class="absolute right-8 top-6 text-zinc-200 dark:text-zinc-800 pointer-events-none select-none">
            <Quote class="w-24 h-24 stroke-[1] opacity-60" />
          </div>

          <div class="relative z-10">
            <!-- 客户品牌标识 -->
            <div class="flex items-center gap-2 mb-8">
              <span class="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span class="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase">
                Featured Customer Story · Vercel Enterprise
              </span>
            </div>

            <!-- 核心名言 -->
            <blockquote class="text-2xl sm:text-4xl font-black text-zinc-900 dark:text-white leading-[1.2] tracking-tight">
              “Aura UI 为我们团队提供了近乎完美的
              <ShinyText text="单文件动效基石" variant="white" class="px-1" />。
              它不仅让产品外观跃升了一个维度，更将我们的前端重构提速了 4 倍。”
            </blockquote>

            <!-- 客户信息与数据飞跃指标 -->
            <div class="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
              <div class="sm:col-span-6 flex items-center gap-4">
                <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-black text-base flex items-center justify-center shadow-lg">
                  MW
                </div>
                <div>
                  <div class="text-base font-bold text-zinc-900 dark:text-white">Maximiliano Weber</div>
                  <div class="text-xs text-zinc-500">Chief Product Officer @ Vercel Ecosystem</div>
                </div>
              </div>

              <!-- 两项亮眼数据翻牌 -->
              <div class="sm:col-span-6 grid grid-cols-2 gap-4 text-center sm:text-right">
                <div>
                  <div class="text-3xl font-black font-mono text-blue-600 dark:text-blue-400 flex items-center justify-center sm:justify-end">
                    +<AnimatedCounter :value="340" :duration="1800" />%
                  </div>
                  <div class="text-[11px] text-zinc-500 font-mono mt-0.5">交互转化增长率</div>
                </div>
                <div>
                  <div class="text-3xl font-black font-mono text-emerald-500 flex items-center justify-center sm:justify-end">
                    -<AnimatedCounter :value="68" :duration="1800" />%
                  </div>
                  <div class="text-[11px] text-zinc-500 font-mono mt-0.5">代码交付工期压缩</div>
                </div>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  </div>
</template>
`;export{t as default};
