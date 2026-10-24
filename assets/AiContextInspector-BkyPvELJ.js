const n=`<script setup lang="ts">
import { Cpu } from 'lucide-vue-next'
import ContextWindow from '@/components/ui/ContextWindow.vue'
import PromptCache from '@/components/ui/PromptCache.vue'
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-white py-16 sm:py-24 dark:bg-zinc-950 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
          <Cpu class="w-3.5 h-3.5" />
          <span>上下文窗口 · 128K</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          上下文窗口分析
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Token 占用与缓存
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          查看系统提示词、工具定义、检索到的文档和对话记录各占用了多少上下文，以及缓存节省了多少费用。
        </p>
      </div>

      <!-- 组合展示区：上下文分布 + 缓存加速 -->
      <div class="space-y-8 max-w-5xl mx-auto text-left">
        <div class="w-full">
          <ContextWindow
            :totalTokens="128000"
            :systemTokens="9200"
            :toolsTokens="14500"
            :filesTokens="42000"
            :messagesTokens="36400"
            class="shadow-xl"
          />
        </div>
        <div class="w-full">
          <PromptCache
            title="缓存节省的费用"
            :cachedTokens="68000"
            :uncachedTokens="1800"
            class="shadow-xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
