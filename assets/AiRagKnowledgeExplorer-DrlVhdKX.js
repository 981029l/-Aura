const t=`<script setup lang="ts">
import { Database } from 'lucide-vue-next'
import KnowledgeGraph from '@/components/ui/KnowledgeGraph.vue'
import VectorSearch from '@/components/ui/VectorSearch.vue'
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
          <Database class="w-3.5 h-3.5" />
          <span>RAG 检索 · 知识图谱</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          知识库检索
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
            向量检索与关系图
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          左侧按语义相似度找出相关文档，右侧用关系图展示文档中的概念及其关联。
        </p>
      </div>

      <!-- 组合展示区：左侧向量检索，右侧知识拓扑图 -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto text-left">
        <div class="lg:col-span-6 w-full">
          <VectorSearch
            title="向量检索"
            class="shadow-xl"
          />
        </div>
        <div class="lg:col-span-6 w-full">
          <KnowledgeGraph
            title="知识图谱"
            class="shadow-xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>
`;export{t as default};
