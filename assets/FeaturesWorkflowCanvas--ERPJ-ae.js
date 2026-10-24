const n=`<script setup lang="ts">
import { Sparkles } from 'lucide-vue-next'
import InfiniteCanvas from '@/components/ui/InfiniteCanvas.vue'
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-14">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-4">
          <Sparkles class="w-3.5 h-3.5" />
          <span>Figma 级自由漫游 · 无限平移缩放节点画布</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          可视化工作流
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            无限平移缩放画布
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          支持鼠标拖拽平移、双指滚轮缩放与网格背景对齐。轻松编排从网关接入、语义路由到多模型并行执行的完整链路。
        </p>
      </div>

      <!-- 核心画布组件：集成 InfiniteCanvas 原子组件 -->
      <div class="w-full max-w-5xl mx-auto rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-2 sm:p-4 shadow-2xl backdrop-blur-md overflow-hidden">
        <InfiniteCanvas
          title="智能体执行拓扑工作流画布 (Infinite Canvas)"
          subtitle="按住鼠标拖拽平移视口，点击右上角放大缩小与复位"
          class="!border-0 !bg-transparent min-h-[460px]"
        />
      </div>
    </div>
  </div>
</template>
`;export{n as default};
