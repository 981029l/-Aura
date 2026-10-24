<script setup lang="ts">
import { ref } from 'vue'
import { HelpCircle, Sparkles, ArrowRight, ArrowLeft, Check, Search, LayoutGrid, Monitor } from 'lucide-vue-next'
import FloatingPopover from '@/components/ui/FloatingPopover.vue'

const currentStep = ref(1)

const tourSteps = [
  {
    step: 1,
    title: '全局智能命令面板 (⌘K)',
    desc: '按快捷键快速搜索全量 109 款业务 Blocks 与 182 款动效组件，支持毫秒级拼音与关键词检索。',
    target: 'search-bar'
  },
  {
    step: 2,
    title: '八大业务套件随心切换',
    desc: '涵盖 Hero、特性、定价、评价、AI 控制台、SaaS 大盘、认证入职与企业页脚全场景。',
    target: 'suite-tabs'
  },
  {
    step: 3,
    title: '多端自适应视口仿真',
    desc: '点击顶部 100% 桌面、768px 平板与 375px 移动端，实时验证真机断点自适应表现。',
    target: 'viewport-controls'
  }
]

function nextTour() {
  if (currentStep.value < 3) {
    currentStep.value++
  } else {
    currentStep.value = 1
  }
}

function prevTour() {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}
</script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-5xl px-4 sm:px-6">
      <!-- 头部说明 -->
      <div class="text-center max-w-2xl mx-auto mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink-500/20 bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 text-xs font-semibold mb-4">
          <HelpCircle class="w-3.5 h-3.5" />
          <span>交互式聚光引导漫游 · 悬浮气泡导览</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
          新功能全景聚光漫游指南
        </h2>
        <p class="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          基于高亮聚光挖孔与自适应悬浮气泡，引导首次进入系统的用户快速掌握核心交互枢纽。
        </p>
      </div>

      <!-- 模拟受引导的系统工作区舞台 -->
      <div class="relative rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xl p-6 sm:p-8 overflow-hidden">
        <!-- 模拟顶部导航栏 -->
        <div class="flex items-center justify-between pb-6 border-b border-zinc-100 dark:border-zinc-800">
          <!-- 聚光目标 1：搜索框 -->
          <div
            :class="[
              'relative flex items-center gap-2 px-4 py-2 rounded-xl border text-xs transition-all duration-300',
              currentStep === 1
                ? 'border-pink-500 bg-pink-50 dark:bg-pink-950/40 ring-4 ring-pink-500/20 z-20 shadow-lg'
                : 'border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-400'
            ]"
          >
            <Search class="w-3.5 h-3.5 text-zinc-400" />
            <span class="text-zinc-600 dark:text-zinc-300 font-mono">快速搜寻 109 款 Blocks...</span>
            <span class="ml-4 px-1.5 py-0.5 rounded text-[10px] bg-zinc-200 dark:bg-zinc-700 text-zinc-500 font-mono">⌘K</span>
          </div>

          <!-- 聚光目标 3：视口切换器 -->
          <div
            :class="[
              'relative flex items-center gap-1.5 p-1 rounded-xl border transition-all duration-300',
              currentStep === 3
                ? 'border-pink-500 bg-pink-50 dark:bg-pink-950/40 ring-4 ring-pink-500/20 z-20 shadow-lg'
                : 'border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800'
            ]"
          >
            <button class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-sm flex items-center gap-1">
              <Monitor class="w-3.5 h-3.5" />
              <span>Desktop</span>
            </button>
            <button class="px-2.5 py-1 rounded-lg text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-white">Tablet</button>
            <button class="px-2.5 py-1 rounded-lg text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-white">Mobile</button>
          </div>
        </div>

        <!-- 模拟中部套件标签栏 (聚光目标 2) -->
        <div class="py-6 border-b border-zinc-100 dark:border-zinc-800">
          <div
            :class="[
              'relative inline-flex items-center gap-2 p-1.5 rounded-2xl border transition-all duration-300 flex-wrap',
              currentStep === 2
                ? 'border-pink-500 bg-pink-50 dark:bg-pink-950/40 ring-4 ring-pink-500/20 z-20 shadow-lg'
                : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/60'
            ]"
          >
            <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-pink-500 text-white text-xs font-bold">
              <LayoutGrid class="w-3.5 h-3.5" />
              <span>Marketing Hero (15)</span>
            </div>
            <div class="px-3 py-1.5 rounded-xl text-xs font-medium text-zinc-600 dark:text-zinc-400">Features (18)</div>
            <div class="px-3 py-1.5 rounded-xl text-xs font-medium text-zinc-600 dark:text-zinc-400">Pricing (12)</div>
            <div class="px-3 py-1.5 rounded-xl text-xs font-medium text-zinc-600 dark:text-zinc-400">AI Consoles (16)</div>
            <div class="px-3 py-1.5 rounded-xl text-xs font-medium text-zinc-600 dark:text-zinc-400">Auth (10)</div>
          </div>
        </div>

        <!-- 模拟内容区卡片展示 -->
        <div class="py-10 grid grid-cols-1 sm:grid-cols-3 gap-4 opacity-50 blur-[1px]">
          <div class="h-32 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"></div>
          <div class="h-32 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"></div>
          <div class="h-32 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"></div>
        </div>

        <!-- 悬浮漫游指引气泡卡片 (浮于舞台中心偏下或指定位置) -->
        <div class="relative z-30 max-w-md mx-auto -mt-20 p-6 rounded-2xl border-2 border-pink-500/40 bg-white/95 dark:bg-zinc-950/95 shadow-2xl backdrop-blur-xl text-left">
          <div class="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-zinc-800">
            <span class="inline-flex items-center gap-1.5 text-xs font-bold text-pink-600 dark:text-pink-400 uppercase tracking-wider">
              <Sparkles class="w-3.5 h-3.5" />
              <span>新手指引 {{ currentStep }} / 3</span>
            </span>
            <span class="text-[11px] text-zinc-400 font-mono">Aura Tour Guide</span>
          </div>

          <div class="mt-4 space-y-2">
            <h4 class="text-base font-bold text-zinc-900 dark:text-white">
              {{ tourSteps[currentStep - 1]?.title }}
            </h4>
            <p class="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {{ tourSteps[currentStep - 1]?.desc }}
            </p>
          </div>

          <!-- 导航控制按钮 -->
          <div class="mt-6 flex items-center justify-between pt-2">
            <button
              v-if="currentStep > 1"
              @click="prevTour"
              class="inline-flex items-center gap-1 text-xs font-semibold text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
            >
              <ArrowLeft class="w-3.5 h-3.5" />
              <span>上一步</span>
            </button>
            <div v-else></div>

            <div class="flex items-center gap-2">
              <button
                @click="nextTour"
                class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-pink-600 hover:bg-pink-500 shadow-md shadow-pink-600/20 transition-all active:scale-95"
              >
                <span>{{ currentStep === 3 ? '重新漫游' : '下一步' }}</span>
                <Check v-if="currentStep === 3" class="w-3.5 h-3.5" />
                <ArrowRight v-else class="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        <!-- 悬浮弹窗组件 (复用 FloatingPopover 原子组件展示独立扩展面板) -->
        <div class="mt-6 flex justify-end">
          <FloatingPopover placement="top" width="w-64">
            <template #trigger>
              <button class="inline-flex items-center gap-1.5 text-xs text-pink-600 dark:text-pink-400 font-medium hover:underline">
                <HelpCircle class="w-3.5 h-3.5" />
                <span>点此查看浮动漫游帮助 (Popover)</span>
              </button>
            </template>
            <div class="p-3 text-xs text-zinc-600 dark:text-zinc-300">
              <p class="font-bold text-zinc-900 dark:text-white mb-1">快捷键提示</p>
              <p>可在任意页面通过按 <span class="font-mono text-pink-500 font-bold">Esc</span> 随时退出新手指引漫游流程。</p>
            </div>
          </FloatingPopover>
        </div>
      </div>
    </div>
  </div>
</template>
