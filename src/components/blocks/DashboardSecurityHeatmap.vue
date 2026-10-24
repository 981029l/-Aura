<script setup lang="ts">
import { ShieldCheck } from 'lucide-vue-next'
import AttentionHeatmap from '@/components/ui/AttentionHeatmap.vue'
</script>

<template>
  <div class="relative w-full overflow-hidden bg-white py-16 sm:py-24 dark:bg-zinc-950 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <!-- 头部说明 -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/20 bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 text-xs font-semibold mb-4">
        <ShieldCheck class="w-3.5 h-3.5" />
        <span>多维关联热力图 · 依赖漏洞扫描</span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white max-w-3xl">
        安全威胁热力图矩阵
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-indigo-500">
          全链路风险交叉透视
        </span>
      </h2>

      <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
        基于交叉十字标尺与 Softmax 权重探针。直观呈现微服务依赖链的脆弱度与风险扩散路径。
      </p>

      <!-- 核心热力图组件：集成 AttentionHeatmap 原子组件 -->
      <div class="mt-12 w-full max-w-2xl text-left">
        <AttentionHeatmap
          title="微服务依赖攻击面关联热力图"
          subtitle="十字标尺悬停探针 · 风险系数自适应映射"
          class="shadow-2xl"
        />
      </div>
    </div>
  </div>
</template>
