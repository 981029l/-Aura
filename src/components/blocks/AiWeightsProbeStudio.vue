<script setup lang="ts">
import { Cpu } from 'lucide-vue-next'
import NeuralWeightsMatrix from '@/components/ui/NeuralWeightsMatrix.vue'
</script>

<template>
  <div class="relative w-full overflow-hidden bg-black text-white py-16 sm:py-24 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <!-- 头部说明 -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/40 text-purple-400 text-xs font-mono mb-4">
        <Cpu class="w-3.5 h-3.5" />
        <span>TENSOR WEIGHTS PRUNING & QUANTIZATION</span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-3xl">
        模型权重分析
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
          剪枝与量化
        </span>
      </h2>

      <p class="mt-4 text-sm sm:text-base text-zinc-400 max-w-xl">
        调整剪枝阈值和量化精度（FP16 / INT8 / INT4），查看权重稀疏度和显存占用的变化。
      </p>

      <!-- 核心矩阵组件：集成 NeuralWeightsMatrix 原子组件 -->
      <div class="mt-12 w-full max-w-2xl text-left">
        <NeuralWeightsMatrix
          layerName="TRANSFORMER.LAYER_32.ATTN_V"
          dimensions="8x8 TENSOR SUBGRID"
          class="shadow-2xl"
        />
      </div>
    </div>
  </div>
</template>
