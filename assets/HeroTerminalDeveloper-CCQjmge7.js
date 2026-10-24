const e=`<script setup lang="ts">
import { ArrowRight, Terminal, CheckCircle2 } from 'lucide-vue-next'
import CopySnippet from '@/components/ui/CopySnippet.vue'
import TypewriterTerminal, { type TerminalLine } from '@/components/ui/TypewriterTerminal.vue'

const devFeatures = [
  '零运行时依赖，原生 Web 动画与 Tailwind 原生渲染',
  '严格 TypeScript 类型推导，100% SFC 单文件组件架构',
  '自动树摇 (Tree-shaking)，打包体积微乎其微',
]

const terminalScript: TerminalLine[] = [
  { type: 'input', prefix: '$ ', text: 'npx aura-ui add hero-dashboard-preview' },
  { type: 'info', text: '⠋ Resolving dependencies and checking AST...' },
  { type: 'output', text: '✔ Created src/components/blocks/HeroDashboardPreview.vue' },
  { type: 'input', prefix: '$ ', text: 'pnpm run dev' },
  { type: 'output', text: '  VITE v6.4.5 ready in 180 ms' },
  { type: 'output', text: '  ➜  Local:   http://localhost:3000/' },
  { type: 'success', text: '✔ Component compiled without runtime warnings.' },
]
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-950 text-white py-16 sm:py-24 lg:py-32 transition-colors">
    <!-- 背景极客网格 -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- 左侧：开发者文案与快速安装 -->
        <div class="lg:col-span-6 flex flex-col items-start text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-400 text-xs font-mono font-medium backdrop-blur-md mb-6">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>CLI v2.4 现已发布</span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
            代码即一切。<br />
            专为极客打造的
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              极速 UI 工作流
            </span>
          </h1>

          <p class="mt-6 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl">
            告别传统臃肿打包黑盒。直接复制整洁、现代的纯 Vue 3.5 单文件组件代码到你的项目目录，完全拥有 100% 的掌控权。
          </p>

          <!-- 一键 CLI 安装复制框：集成 CopySnippet 原子组件 -->
          <div class="mt-8 w-full max-w-md">
            <CopySnippet
              code="npx aura-ui init my-awesome-app"
              prefix="$"
              class="w-full justify-between !bg-zinc-900/90 !border-zinc-800 text-emerald-400"
            />
          </div>

          <!-- 核心特性打勾列表 -->
          <ul class="mt-8 space-y-3">
            <li v-for="feat in devFeatures" :key="feat" class="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
              <CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{{ feat }}</span>
            </li>
          </ul>

          <!-- 行动按钮 -->
          <div class="mt-8 flex items-center gap-4">
            <a
              href="#docs"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
            >
              <Terminal class="w-4 h-4" />
              <span>阅读 CLI 文档</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </a>
            <span class="text-xs font-mono text-zinc-500">支持 pnpm / npm / yarn / bun</span>
          </div>
        </div>

        <!-- 右侧：真实交互打字机终端：集成 TypewriterTerminal 原子组件 -->
        <div class="lg:col-span-6 w-full">
          <div class="relative rounded-2xl border border-zinc-800 bg-zinc-900/60 p-2 shadow-2xl backdrop-blur-xl">
            <!-- 极客发光光晕 -->
            <div class="absolute -top-10 -right-10 w-48 h-48 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none"></div>

            <TypewriterTerminal
              title="bash · Aura CLI Installer"
              :lines="terminalScript"
              :typingSpeed="25"
              class="w-full border-0 !bg-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`;export{e as default};
