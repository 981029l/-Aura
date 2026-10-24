<script setup lang="ts">
import { Sparkles } from 'lucide-vue-next'
import PromptPlayground from '@/components/ui/PromptPlayground.vue'
import PromptDiffViewer from '@/components/ui/PromptDiffViewer.vue'
</script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-4">
          <Sparkles class="w-3.5 h-3.5" />
          <span>提示词调试 · 版本对比</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          提示词工作室
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500">
            调试与版本对比
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          调节 Temperature 和 Top-P 测试效果，并逐行对比提示词不同版本之间的改动。
        </p>
      </div>

      <!-- 组合展示区：演练场 + 版本差异比对 -->
      <div class="space-y-8 max-w-5xl mx-auto text-left">
        <div class="w-full">
          <PromptPlayground
            title="提示词调试台"
            class="shadow-xl"
          />
        </div>
        <div class="w-full">
          <PromptDiffViewer
            title="提示词版本对比"
            class="shadow-xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>
