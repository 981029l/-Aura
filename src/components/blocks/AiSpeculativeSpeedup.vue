<script setup lang="ts">
import { Zap } from 'lucide-vue-next'
import SpeculativeDecoding from '@/components/ui/SpeculativeDecoding.vue'
</script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <!-- 头部说明 -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 text-xs font-semibold mb-4">
        <Zap class="w-3.5 h-3.5" />
        <span>推测解码 · 双模型协作</span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white max-w-3xl">
        推测解码加速
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500">
          小模型猜测，大模型验证
        </span>
      </h2>

      <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
        小模型（Draft Model）先快速猜出 5 个候选 Token，大模型（Target Model）一次性验证哪些可以采用。
      </p>

      <!-- 核心推测解码组件：集成 SpeculativeDecoding 原子组件 -->
      <div class="mt-12 w-full max-w-4xl text-left">
        <SpeculativeDecoding
          title="推测解码"
          class="shadow-2xl"
        />
      </div>
    </div>
  </div>
</template>
