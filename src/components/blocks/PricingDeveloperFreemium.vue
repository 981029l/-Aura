<script setup lang="ts">
import { Github, CheckCircle2, ArrowRight } from 'lucide-vue-next'
import CodeWindow from '@/components/ui/CodeWindow.vue'

const freemiumBullets = [
  'MIT 开源协议，个人与商业项目完全自由免费使用',
  '包含全部 182 款底层原子动效组件，零构建器侵入',
  '全量源码直接暴露，可按需随意定制与魔改',
  '企业版提供 109 款开箱即用的高阶商业场景 Blocks 与专属技术支持',
]
</script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- 左侧：开源免费说明 -->
        <div class="lg:col-span-5 flex flex-col items-start text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 text-xs font-semibold mb-6">
            <Github class="w-3.5 h-3.5" />
            <span>100% 免费开源核心 · MIT 许可</span>
          </div>

          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
            永远开源免费
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              赋予开发者最大自由
            </span>
          </h2>

          <p class="mt-6 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg">
            我们坚信高品质的基础动效应该像空气一样随手可得。核心 182 款原子动效代码库全面在 GitHub 开放，零订阅门槛。
          </p>

          <!-- 权益列表 -->
          <div class="mt-8 space-y-3">
            <div
              v-for="b in freemiumBullets"
              :key="b"
              class="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300"
            >
              <CheckCircle2 class="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
              <span>{{ b }}</span>
            </div>
          </div>

          <!-- 双行动按钮 -->
          <div class="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/981029l/-Aura"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-black font-semibold text-xs sm:text-sm transition-all shadow-md active:scale-95"
            >
              <Github class="w-4 h-4" />
              <span>在 GitHub 给个 Star</span>
            </a>
            <button class="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-semibold text-xs sm:text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all">
              <span>查看企业版授权</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <!-- 右侧：真实开源组件代码视窗：集成 CodeWindow 原子组件 -->
        <div class="lg:col-span-7 w-full">
          <CodeWindow
            title="MIT License · Clean Vue 3.5 SFC"
            initialTab="BorderBeam.vue"
            class="shadow-2xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>
