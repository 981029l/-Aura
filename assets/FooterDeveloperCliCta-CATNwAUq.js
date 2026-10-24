const n=`<script setup lang="ts">
import { ref, computed } from 'vue'
import { Terminal, Sparkles, ArrowRight, Check, Code } from 'lucide-vue-next'
import CopySnippet from '@/components/ui/CopySnippet.vue'

const activePm = ref<'pnpm' | 'npm' | 'bun'>('pnpm')

const cliCommands = {
  pnpm: 'pnpm create aura-ui@latest my-app',
  npm: 'npm create aura-ui@latest my-app',
  bun: 'bun create aura-ui@latest my-app',
}

const currentCommand = computed(() => cliCommands[activePm.value])
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-950 py-16 sm:py-24 text-white">
    <!-- 背景流光网格微粒 -->
    <div class="absolute inset-0 bg-[radial-gradient(#312e81_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"></div>

    <div class="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
      <!-- 头部说明 -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-6">
        <Terminal class="w-3.5 h-3.5" />
        <span>一行命令 · 零配置即刻生成脚手架</span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
        准备好开始构建下一代应用了吗？
      </h2>

      <p class="mt-4 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
        在您的终端中执行以下命令，秒级获得开箱即用的 Vue 3.5 + Tailwind CSS + Aura 全量组件环境。
      </p>

      <!-- 包管理器切换 Pills -->
      <div class="mt-8 flex items-center justify-center gap-2">
        <button
          v-for="pm in (['pnpm', 'npm', 'bun'] as const)"
          :key="pm"
          @click="activePm = pm"
          :class="[
            'px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all',
            activePm === pm
              ? 'bg-zinc-800 text-white border border-zinc-700 shadow-sm'
              : 'text-zinc-500 hover:text-zinc-300'
          ]"
        >
          {{ pm }}
        </button>
      </div>

      <!-- 居中命令行组件 (复用 CopySnippet 原子组件) -->
      <div class="mt-4 max-w-lg mx-auto">
        <CopySnippet
          :code="currentCommand"
          class="w-full justify-between py-3.5 px-5 bg-zinc-900/90 border-zinc-800 text-sm shadow-2xl rounded-2xl"
        />
      </div>

      <!-- 快速起步终端日志反馈卡片 -->
      <div class="mt-10 max-w-lg mx-auto rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-left font-mono text-[11px] text-zinc-400 shadow-inner space-y-1.5">
        <div class="flex items-center gap-1.5 pb-2 border-b border-zinc-800/80 text-zinc-500">
          <div class="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
          <div class="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
          <div class="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
          <span class="ml-2 text-[10px]">bash · terminal preview</span>
        </div>
        <div class="text-emerald-400 flex items-center gap-2 pt-1">
          <Check class="w-3.5 h-3.5" />
          <span>Resolved 109 Blocks & 182 Components metadata</span>
        </div>
        <div class="text-zinc-300">
          <span>✔ Scaffolding project in ./my-app...</span>
        </div>
        <div class="text-sky-400 flex items-center gap-1.5">
          <Code class="w-3.5 h-3.5" />
          <span>Ready in 420ms! Run: cd my-app && pnpm dev</span>
        </div>
      </div>

      <!-- 底部辅助 -->
      <div class="mt-8 flex items-center justify-center gap-4 text-xs">
        <a href="#quickstart" class="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-semibold">
          <Sparkles class="w-3.5 h-3.5" />
          <span>查看完整 CLI 指南手册</span>
          <ArrowRight class="w-3 h-3" />
        </a>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
