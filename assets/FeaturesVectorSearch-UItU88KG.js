const n=`<script setup lang="ts">
import { Sparkles } from 'lucide-vue-next'
import VectorSearch from '@/components/ui/VectorSearch.vue'
import EmbeddingVisualizer from '@/components/ui/EmbeddingVisualizer.vue'
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-white py-16 sm:py-24 dark:bg-zinc-950 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 text-xs font-semibold mb-4">
          <Sparkles class="w-3.5 h-3.5" />
          <span>高维空间几何 · 向量嵌入语义检索</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          高维空间余弦相似度
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500">
            Top-K 语义近邻投影
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          基于 t-SNE、UMAP 降维拓扑聚类算法。在数万维知识密集向量空间中，快速呈现跨领域概念的余弦距离与聚类簇。
        </p>
      </div>

      <!-- 双核心向量视窗 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div class="w-full">
          <VectorSearch
            title="向量空间检索 (Vector Search)"
            class="shadow-xl"
          />
        </div>
        <div class="w-full">
          <EmbeddingVisualizer
            title="高维嵌入降维投影 (Embedding Visualizer)"
            class="shadow-xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
