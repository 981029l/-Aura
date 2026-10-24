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
          <span>树状思维链 · 多分支回溯搜索</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          思维树推演工作台
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
            Tree of Thoughts 分支剪枝
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          智能体自主生成多路线推演方案，根据评估打分动态剪枝无效路径，并保留完整的可折叠思维链条。
        </p>
      </div>

      <!-- 组合展示区：左侧思维树，右侧手风琴折叠展开思考链 -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto text-left">
        <div class="lg:col-span-7 w-full">
          <ReasoningTree
            query="如何实现 109 款场景 Blocks 零配置、零错误全量组合交付？"
            class="shadow-xl"
          />
        </div>
        <div class="lg:col-span-5 w-full">
          <ThoughtAccordion
            duration="深度思考用时 8.2 秒"
            status="complete"
            :defaultOpen="true"
            thoughtText="> 1. 解构设计规范：先探索已有 182 款原子基础动效，禁止重复造轮子。
> 2. 梳理业务场景：将 109 款区块划分为 8 大核心场景套件。
> 3. 严格类型约束：采用 TypeScript 严格模式，避免任何未声明变量与无用导入。
> 4. 自动化回归测试：每构建一个区块批次立即执行 vue-tsc 与 Playwright 端到端截图验证。"
            class="shadow-xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
