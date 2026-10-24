<script setup lang="ts">
import { Sparkles, Heart } from 'lucide-vue-next'
import FoldCard from '@/components/ui/FoldCard.vue'
</script>

<template>
  <div class="relative w-full overflow-hidden bg-white py-16 sm:py-24 dark:bg-zinc-950 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 text-xs font-semibold mb-4">
          <Sparkles class="w-3.5 h-3.5" />
          <span>创始人公开信 · 匠心致敬</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          来自创始团队的
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
            一封手写信笺
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          点击折叠信笺即可翻开这份关于纯粹单文件组件与克制动效哲学的初衷宣告。
        </p>
      </div>

      <!-- 3D 纸质折页信笺：集成 FoldCard 原子组件 -->
      <div class="max-w-xl mx-auto">
        <FoldCard
          title="Aura UI 创始宣言 (Founder Letter)"
          subtitle="写给所有热爱优雅前端与极致体验的开发者"
          class="shadow-2xl"
        />

        <!-- 信笺落款 -->
        <div class="mt-8 flex items-center justify-center gap-2 text-xs text-zinc-500 font-mono">
          <Heart class="w-4 h-4 text-rose-500 fill-rose-500" />
          <span>Crafted with devotion for the Vue & Tailwind Ecosystem · 2026</span>
        </div>
      </div>
    </div>
  </div>
</template>
