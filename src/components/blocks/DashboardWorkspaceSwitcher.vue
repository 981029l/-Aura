<script setup lang="ts">
import { ref } from 'vue'
import { Building2, Command } from 'lucide-vue-next'
import CommandDialog from '@/components/ui/CommandDialog.vue'
import TreeBreadcrumb from '@/components/ui/TreeBreadcrumb.vue'

const isCommandOpen = ref(false)
</script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <!-- 头部说明 -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
        <Building2 class="w-3.5 h-3.5" />
        <span>多租户工作区 · 快捷直达面板</span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white max-w-3xl">
        跨企业工作空间切换
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
          树状面包屑与 ⌘K 命令菜单
        </span>
      </h2>

      <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
        通过树状目录面包屑穿梭多租户层级，按下 ⌘K / 点击按钮呼出全键盘全局搜索。
      </p>

      <!-- 唤起命令面板按钮 -->
      <div class="mt-8 flex justify-center">
        <button
          @click="isCommandOpen = true"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-semibold text-xs shadow-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all active:scale-95"
        >
          <Command class="w-4 h-4 text-blue-500" />
          <span>打开 ⌘K 快速命令面板</span>
          <kbd class="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-[10px] font-mono">⌘K</kbd>
        </button>
      </div>

      <!-- 树状面包屑导航展示：集成 TreeBreadcrumb 原子组件 -->
      <div class="mt-10 w-full max-w-3xl text-left">
        <TreeBreadcrumb
          :initialPath="[
            { id: '1', label: 'Cloud-Enterprise-Org' },
            { id: '2', label: 'production-workspaces', siblings: ['production-workspaces', 'staging-clusters', 'dev-sandboxes'] },
            { id: '3', label: 'us-east-1-primary', siblings: ['us-east-1-primary', 'eu-central-1-backup'] },
            { id: '4', label: 'agent-runtime-v4' },
          ]"
          class="shadow-xl"
        />
      </div>

      <!-- ⌘K 命令面板模态弹窗：集成 CommandDialog 原子组件 -->
      <CommandDialog v-model="isCommandOpen" />
    </div>
  </div>
</template>
