const n=`<script setup lang="ts">
import { GitFork } from 'lucide-vue-next'
import ReasoningTree from '@/components/ui/ReasoningTree.vue'
import ThoughtAccordion from '@/components/ui/ThoughtAccordion.vue'
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 text-xs font-semibold mb-4">
          <GitFork class="w-3.5 h-3.5" />
          <span>思维树 · 多路径推理</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          思维树推理
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
            Tree of Thoughts
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          智能体同时尝试多种思路，按评分排除较差的路径，并保留完整的思考过程供查看。
        </p>
      </div>

      <!-- 组合展示区：左侧思维树，右侧手风琴折叠展开思考链 -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto text-left">
        <div class="lg:col-span-7 w-full">
          <ReasoningTree
            query="怎样把旧版管理后台迁移到 Vue 3？"
            class="shadow-xl"
          />
        </div>
        <div class="lg:col-span-5 w-full">
          <ThoughtAccordion
            duration="思考用时 8.2 秒"
            status="complete"
            :defaultOpen="true"
            thoughtText="> 1. 盘点现状：列出所有页面和用到的第三方库，确认哪些需要替换。
> 2. 分批迁移：按模块逐个迁移，先从最简单的设置页开始。
> 3. 补充类型：迁移时开启 TypeScript 严格模式，逐步补全类型定义。
> 4. 验证结果：每迁移一个模块就运行类型检查和测试，确认功能正常后再继续。"
            class="shadow-xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
