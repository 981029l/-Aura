<script setup lang="ts">
import { ref } from 'vue'
import {
  FileText,
  Download,
  Copy,
  Check,
  ExternalLink,
  Bot,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Code2,
} from 'lucide-vue-next'
import { BLOCK_SUITES } from '@/data/blocks'
import ShimmerButton from '@/components/ui/ShimmerButton.vue'
import BorderBeam from '@/components/ui/BorderBeam.vue'

// 通用 DESIGN.md 复制与反馈状态
const copiedGeneral = ref(false)
const copiedPrompt = ref(false)
const copiedSuiteId = ref<string | null>(null)

// 选中的 Suite 预览弹窗
const selectedSuite = ref<any | null>(null)
const previewModalOpen = ref(false)
const modalContent = ref('')
const copiedModalContent = ref(false)

const universalPrompt = `You are a senior Vue 3.5 and Tailwind CSS engineer following Aura UI DESIGN.md guidelines (https://auraui.lvky.cn).
Task: Build an interface component for [Describe your feature here].

Strict Rules:
1. Pure Vue 3 Single File Component (<script setup lang="ts">) with standard TypeScript.
2. Rely ONLY on Tailwind CSS, @vueuse/core, clsx, tailwind-merge, and lucide-vue-next. Do not use uninstalled npm libraries.
3. Dark mode by default (bg-zinc-950 canvas, bg-zinc-900 surfaces, border-zinc-800/80).
4. Implement tactile interactions: active:scale-95, hover lifts, and smooth spring transitions.
5. Provide accessible semantic elements and minimum 44px touch targets.`

async function copyUniversalDesignMd() {
  try {
    const res = await fetch('/DESIGN.md')
    const text = await res.text()
    await navigator.clipboard.writeText(text)
    copiedGeneral.value = true
    setTimeout(() => {
      copiedGeneral.value = false
    }, 2000)
  } catch (e) {
    console.error('Failed to copy DESIGN.md', e)
  }
}

async function copyUniversalPrompt() {
  await navigator.clipboard.writeText(universalPrompt)
  copiedPrompt.value = true
  setTimeout(() => {
    copiedPrompt.value = false
  }, 2000)
}

async function copySuitePrompt(suite: any) {
  const prompt = `@${suite.id}.DESIGN.md
You are a senior Vue 3 engineer building a component in the "${suite.name} (${suite.englishName})" style from Aura UI (https://auraui.lvky.cn/blocks).
Design guidelines:
${suite.description}

Requirements:
1. Pure Vue 3.5 SFC (<script setup lang="ts">) using Tailwind CSS.
2. Self-contained with reactive mock states and typed props.
3. Support both light mode and dark mode seamlessly.`

  await navigator.clipboard.writeText(prompt)
  copiedSuiteId.value = suite.id
  setTimeout(() => {
    copiedSuiteId.value = null
  }, 2000)
}

async function openSuitePreview(suite: any) {
  selectedSuite.value = suite
  try {
    const res = await fetch(`/designs/${suite.id}.DESIGN.md`)
    if (res.ok) {
      modalContent.value = await res.text()
    } else {
      modalContent.value = `# ${suite.name} DESIGN.md\n\n${suite.description}`
    }
  } catch {
    modalContent.value = `# ${suite.name} DESIGN.md\n\n${suite.description}`
  }
  previewModalOpen.value = true
}

async function copyModalMarkdown() {
  await navigator.clipboard.writeText(modalContent.value)
  copiedModalContent.value = true
  setTimeout(() => {
    copiedModalContent.value = false
  }, 2000)
}
</script>

<template>
  <div class="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 transition-colors">
    <!-- Hero 区域 -->
    <section class="relative overflow-hidden pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <!-- 顶部 Badge -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-mono font-semibold mb-6">
        <Bot class="w-3.5 h-3.5" />
        <span>AI-NATIVE DESIGN RULES · FOR CURSOR & CLAUDE CODE</span>
      </div>

      <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] max-w-4xl mx-auto">
        别让 AI 再生成平庸前端。<br />
        <span class="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-300 dark:to-purple-300">
          把 DESIGN.md 喂给 Cursor
        </span>
      </h1>

      <p class="mt-5 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
        如同 <strong>getdesign.md</strong> 与 <strong>stylekit.top</strong>，我们将 109 款实战场景提炼为专供 AI 编程助手读取的结构化规约（DESIGN.md）与提示词语料。<br class="hidden sm:inline" />
        扔进项目根目录，让 AI 拥有全网最顶级的 Vue 3 动效审美。
      </p>

      <!-- 核心行动按钮 -->
      <div class="mt-8 flex flex-wrap items-center justify-center gap-3.5">
        <a href="/DESIGN.md" download="AURA.DESIGN.md">
          <ShimmerButton shimmer-color="#60a5fa" class="h-11 px-6 text-sm font-bold shadow-lg shadow-blue-500/20">
            <Download class="h-4 w-4" />
            <span>下载全站 AURA.DESIGN.md</span>
          </ShimmerButton>
        </a>

        <button
          type="button"
          @click="copyUniversalDesignMd"
          class="inline-flex h-11 items-center gap-2 rounded-xl border border-zinc-200 bg-white/90 px-4 text-sm font-semibold text-zinc-800 shadow-sm backdrop-blur-md transition-all hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 cursor-pointer"
        >
          <Check v-if="copiedGeneral" class="h-4 w-4 text-emerald-500" />
          <Copy v-else class="h-4 w-4 text-zinc-400" />
          <span>{{ copiedGeneral ? '已复制 DESIGN.md 规约' : '复制规约全文' }}</span>
        </button>

        <button
          type="button"
          @click="copyUniversalPrompt"
          class="inline-flex h-11 items-center gap-2 rounded-xl border border-purple-200/90 bg-purple-50/80 px-4 text-sm font-semibold text-purple-700 shadow-sm backdrop-blur-md transition-all hover:bg-purple-100 dark:border-purple-800 dark:bg-purple-950/60 dark:text-purple-300 dark:hover:bg-purple-900/60 cursor-pointer"
        >
          <Check v-if="copiedPrompt" class="h-4 w-4 text-emerald-500" />
          <Bot v-else class="h-4 w-4 text-purple-500" />
          <span>{{ copiedPrompt ? '已复制 Cursor 专属 Prompt' : '复制 Cursor 专属 Prompt' }}</span>
        </button>

        <a
          href="/llms.txt"
          target="_blank"
          class="inline-flex h-11 items-center gap-1.5 rounded-xl border border-zinc-200/90 bg-zinc-100/80 px-4 text-sm font-mono text-zinc-600 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:text-white transition-colors"
          title="查看官方标准 llms.txt 端点"
        >
          <span>/llms.txt</span>
          <ExternalLink class="h-3.5 w-3.5" />
        </a>
      </div>
    </section>

    <!-- 3 步使用流程 -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="rounded-3xl border border-zinc-200/90 bg-white dark:border-zinc-800/90 dark:bg-zinc-950 p-6 sm:p-10 shadow-sm relative overflow-hidden">
        <BorderBeam :duration="8" :border-width="2" class="opacity-60" />

        <div class="text-center max-w-xl mx-auto mb-10">
          <h2 class="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
            如何让你的 Cursor / Claude Code 接入？
          </h2>
          <p class="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2">
            只需 3 步，彻底告别千篇一律的塑料 AI 界面，生成 100% 具备生产级质感的 Vue 3 前端。
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-5 rounded-2xl border border-zinc-100 bg-zinc-50/80 dark:border-zinc-800/80 dark:bg-zinc-900/60 flex flex-col justify-between">
            <div>
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-mono font-bold text-xs mb-3">
                01
              </span>
              <h3 class="font-bold text-sm text-zinc-900 dark:text-white">下载或引用规范</h3>
              <p class="mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                将 <code>AURA.DESIGN.md</code> 保存至项目根目录，或者在 <code>.cursorrules</code> 中直接引入。
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60 font-mono text-[11px] text-zinc-400">
              $ cp AURA.DESIGN.md ./DESIGN.md
            </div>
          </div>

          <div class="p-5 rounded-2xl border border-zinc-100 bg-zinc-50/80 dark:border-zinc-800/80 dark:bg-zinc-900/60 flex flex-col justify-between">
            <div>
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white font-mono font-bold text-xs mb-3">
                02
              </span>
              <h3 class="font-bold text-sm text-zinc-900 dark:text-white">在对话中 @DESIGN.md</h3>
              <p class="mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                在 Cursor、Windsurf 或 Claude 中输入提示词，@ 引用该设计规约文件。
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60 font-mono text-[11px] text-blue-500">
              @DESIGN.md 帮我写个 SaaS 大盘
            </div>
          </div>

          <div class="p-5 rounded-2xl border border-zinc-100 bg-zinc-50/80 dark:border-zinc-800/80 dark:bg-zinc-900/60 flex flex-col justify-between">
            <div>
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600 text-white font-mono font-bold text-xs mb-3">
                03
              </span>
              <h3 class="font-bold text-sm text-zinc-900 dark:text-white">秒级生成顶级动效</h3>
              <p class="mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                AI 将严格按照暗黑高光、16:10 视窗、微弹簧动效与单文件 SFC 规约输出代码，0 报错。
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60 font-mono text-[11px] text-emerald-500 flex items-center gap-1">
              <CheckCircle2 class="w-3.5 h-3.5" />
              <span>100% Native Vue 3 SFC</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 8 大业务场景规约陈列目录 (StyleKit 风格矩阵) -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <h2 class="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">
            8 大场景专属 DESIGN.md 规约库
          </h2>
          <p class="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1.5">
            针对不同产品形态定制专属提示词、配色约束与动效节奏，支持一键复制与下载。
          </p>
        </div>
        <router-link
          to="/blocks"
          class="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-500 dark:text-blue-400"
        >
          <span>查看对应 109 款 Blocks 真实实现</span>
          <ArrowRight class="w-3.5 h-3.5" />
        </router-link>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="suite in BLOCK_SUITES"
          :key="suite.id"
          class="group rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl dark:border-zinc-800/90 dark:bg-zinc-900/90 flex flex-col justify-between"
        >
          <div>
            <!-- 套件顶栏 -->
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md font-mono text-[10px] font-bold" :class="suite.badgeColor">
                {{ suite.id }}.DESIGN.md
              </span>
              <span class="text-[10px] font-mono text-zinc-400">
                {{ suite.count }} Blocks
              </span>
            </div>

            <h3 class="text-base font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {{ suite.name }}
            </h3>
            <p class="text-[11px] font-mono text-zinc-400 mt-0.5 uppercase tracking-wider">
              {{ suite.englishName }}
            </p>

            <p class="mt-3 text-xs text-zinc-500 dark:text-zinc-400 line-clamp-3 leading-relaxed">
              {{ suite.description }}
            </p>
          </div>

          <!-- 卡片底部行动条 -->
          <div class="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-col gap-2">
            <button
              type="button"
              @click="copySuitePrompt(suite)"
              class="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 font-bold text-xs transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <Check v-if="copiedSuiteId === suite.id" class="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-600" />
              <Sparkles v-else class="w-3.5 h-3.5 text-blue-400 dark:text-blue-600" />
              <span>{{ copiedSuiteId === suite.id ? '已复制专属 Prompt' : '复制 Cursor 提示词' }}</span>
            </button>

            <div class="flex items-center justify-between gap-2 text-xs">
              <button
                type="button"
                @click="openSuitePreview(suite)"
                class="inline-flex items-center gap-1 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white font-medium cursor-pointer"
              >
                <Code2 class="w-3.5 h-3.5" />
                <span>预览规约</span>
              </button>

              <a
                :href="`/designs/${suite.id}.DESIGN.md`"
                :download="`${suite.id}.DESIGN.md`"
                class="inline-flex items-center gap-1 text-blue-600 hover:text-blue-500 dark:text-blue-400 font-medium"
              >
                <Download class="w-3 h-3" />
                <span>下载 .md</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DESIGN.md 预览弹窗 -->
    <div
      v-if="previewModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      @click.self="previewModalOpen = false"
    >
      <div class="relative w-full max-w-3xl max-h-[85vh] flex flex-col rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden text-left">
        <!-- 弹窗顶栏 -->
        <div class="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950">
          <div class="flex items-center gap-2">
            <FileText class="w-4 h-4 text-blue-400" />
            <span class="font-mono text-xs font-bold text-zinc-200">
              {{ selectedSuite?.id }}.DESIGN.md
            </span>
          </div>
          <div class="flex items-center gap-2">
            <button
              type="button"
              @click="copyModalMarkdown"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all"
            >
              <Check v-if="copiedModalContent" class="w-3.5 h-3.5" />
              <Copy v-else class="w-3.5 h-3.5" />
              <span>{{ copiedModalContent ? '已复制' : '复制全文' }}</span>
            </button>
            <button
              type="button"
              @click="previewModalOpen = false"
              class="text-zinc-400 hover:text-white px-2 py-1 text-sm font-bold"
            >
              ✕
            </button>
          </div>
        </div>

        <!-- 规约文本展示区 -->
        <div class="p-6 overflow-y-auto font-mono text-xs text-zinc-300 leading-relaxed bg-zinc-950/50">
          <pre class="whitespace-pre-wrap">{{ modalContent }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>
