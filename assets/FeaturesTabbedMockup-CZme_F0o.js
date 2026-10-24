const e=`<script setup lang="ts">
import { ref } from 'vue'
import { Sparkles, Code, Terminal, Cpu } from 'lucide-vue-next'
import FluidTabs, { type FluidTabItem } from '@/components/ui/FluidTabs.vue'
import CodeWindow from '@/components/ui/CodeWindow.vue'

const tabs: FluidTabItem[] = [
  { id: 'inference', label: '模型推测引擎', icon: Cpu },
  { id: 'script', label: '智能体脚本编写', icon: Code },
  { id: 'cli', label: '命令行快速集成', icon: Terminal },
]

const activeTab = ref('inference')
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <!-- 头部说明 -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
        <Sparkles class="w-3.5 h-3.5" />
        <span>多模态工作流演示 · 标签页联动视窗</span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white max-w-3xl">
        无缝切换三重视角
        <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
          全周期掌控开发体验
        </span>
      </h2>

      <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
        点击下方流体标签页，即可实时观察底层代码、推理管线与自动化任务的完整执行镜像。
      </p>

      <!-- 动态流体切换胶囊：集成 FluidTabs 原子组件 -->
      <div class="mt-8">
        <FluidTabs v-model="activeTab" :tabs="tabs" />
      </div>

      <!-- 核心视窗：集成 CodeWindow 原子组件 -->
      <div class="mt-10 w-full max-w-4xl text-left">
        <CodeWindow
          title="Aura Interactive IDE · Mockup"
          initialTab="BorderBeam.vue"
          class="shadow-2xl"
        />
      </div>
    </div>
  </div>
</template>
`;export{e as default};
