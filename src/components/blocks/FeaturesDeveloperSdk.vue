<script setup lang="ts">
import { Terminal, CheckCircle2 } from 'lucide-vue-next'
import CodeWindow from '@/components/ui/CodeWindow.vue'
import CopySnippet from '@/components/ui/CopySnippet.vue'

const sdkAdvantages = [
  '基于 Vue 3 + Tailwind CSS 的单文件组件，复制即可使用',
  '可以在 Vite、Nuxt 等 Vue 3 项目中使用',
  'Props 和事件都有 TypeScript 类型定义',
]
</script>

<template>
  <div class="relative w-full overflow-hidden bg-white py-16 sm:py-24 dark:bg-zinc-950 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- 左侧：SDK 快速起步说明 -->
        <div class="lg:col-span-5 flex flex-col items-start text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-mono mb-6">
            <Terminal class="w-3.5 h-3.5" />
            <span>COPY &amp; PASTE · VUE 3</span>
          </div>

          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
            复制源码即可使用
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500">
              只需安装三个依赖
            </span>
          </h2>

          <p class="mt-6 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg">
            组件不通过 npm 包分发。先安装下面这三个依赖，再把需要的组件源码复制到项目的 src/components/ui 目录即可使用。
          </p>

          <!-- 快速安装命令：集成 CopySnippet 原子组件 -->
          <div class="mt-6 w-full max-w-md">
            <CopySnippet
              code="pnpm add @vueuse/core clsx tailwind-merge"
              prefix="$"
              class="w-full justify-between"
            />
          </div>

          <!-- 优势清单 -->
          <div class="mt-8 space-y-3">
            <div
              v-for="adv in sdkAdvantages"
              :key="adv"
              class="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300"
            >
              <CheckCircle2 class="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{{ adv }}</span>
            </div>
          </div>
        </div>

        <!-- 右侧：真实代码预览窗口：集成 CodeWindow 原子组件 -->
        <div class="lg:col-span-7 w-full">
          <CodeWindow
            title="示例代码"
            initialTab="BorderBeam.vue"
            class="shadow-2xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>
