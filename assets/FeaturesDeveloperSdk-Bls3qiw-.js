const n=`<script setup lang="ts">
import { Terminal, CheckCircle2 } from 'lucide-vue-next'
import CodeWindow from '@/components/ui/CodeWindow.vue'
import CopySnippet from '@/components/ui/CopySnippet.vue'

const sdkAdvantages = [
  '零外部配置依赖，完全原生 Vue 3.5 + Tailwind CSS SFC 单文件组件',
  '全面支持 Vite 6、Nuxt 3、Astro 与微前端动态挂载',
  '内置 TypeScript 声明与完备的 JSDoc 参数提示',
]
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-white py-16 sm:py-24 dark:bg-zinc-950 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- 左侧：SDK 快速起步说明 -->
        <div class="lg:col-span-5 flex flex-col items-start text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-mono mb-6">
            <Terminal class="w-3.5 h-3.5" />
            <span>NPM REGISTRY · VUE 3.5+</span>
          </div>

          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
            极简开发者 SDK
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500">
              三行代码即刻运行
            </span>
          </h2>

          <p class="mt-6 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg">
            告别传统组件库庞大的安装包体积与繁杂插件注册流程。直接通过 Aura CLI 命令，将纯净的原生单文件组件复制进项目，按需即用。
          </p>

          <!-- 快速安装命令：集成 CopySnippet 原子组件 -->
          <div class="mt-6 w-full max-w-md">
            <CopySnippet
              code="pnpm add @aura-ui/core"
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
            title="App.vue · 即插即用"
            initialTab="BorderBeam.vue"
            class="shadow-2xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
