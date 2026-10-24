<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  ArrowRight,
  Sparkles,
  Layers,
  Zap,
  Copy,
  Check,
  ShieldCheck,
  Repeat,
  Mic,
  User,
  Database,
  Activity,
  ExternalLink,
  LayoutGrid,
  Cpu,
  Code2,
  Rocket,
  CreditCard,
  MessageSquareQuote,
  Bot,
  LayoutDashboard,
  PanelBottom,
  Search,
} from 'lucide-vue-next'
import { COMPONENTS_DATA, getLastVisitedDocId } from '@/data/components'
import { BLOCK_SUITES, BLOCKS_DATA, getLastVisitedBlockId } from '@/data/blocks'
import BorderBeam from '@/components/ui/BorderBeam.vue'
import ShimmerButton from '@/components/ui/ShimmerButton.vue'
import ShinyText from '@/components/ui/ShinyText.vue'
import RetroGrid from '@/components/ui/RetroGrid.vue'
import BentoGrid from '@/components/ui/BentoGrid.vue'
import BentoCard from '@/components/ui/BentoCard.vue'
import Marquee from '@/components/ui/Marquee.vue'
import DotPattern from '@/components/ui/DotPattern.vue'
import InteractiveParticles from '@/components/ui/InteractiveParticles.vue'
import Meteors from '@/components/ui/Meteors.vue'
import Ripple from '@/components/ui/Ripple.vue'
import NumberTicker from '@/components/ui/NumberTicker.vue'
import AnimatedBeam from '@/components/ui/AnimatedBeam.vue'
import LampEffect from '@/components/ui/LampEffect.vue'
import FlickeringGrid from '@/components/ui/FlickeringGrid.vue'

const homeBeamContainer = ref<HTMLDivElement | null>(null)
const homeBeamUser = ref<HTMLDivElement | null>(null)
const homeBeamAi = ref<HTMLDivElement | null>(null)
const homeBeamDb = ref<HTMLDivElement | null>(null)

// 场景区块展台联动状态
const activeSuiteId = ref<string>(BLOCK_SUITES[0].id)
const activeSuite = computed(() => BLOCK_SUITES.find((s) => s.id === activeSuiteId.value) || BLOCK_SUITES[0])
const activeSuiteBlocks = computed(() => BLOCKS_DATA.filter((b) => b.suiteId === activeSuiteId.value).slice(0, 4))

const suiteIconMap: Record<string, any> = {
  'marketing-hero': Rocket,
  'marketing-features': Layers,
  'marketing-pricing': CreditCard,
  'marketing-testimonials': MessageSquareQuote,
  'ai-consoles': Bot,
  'saas-dashboards': LayoutDashboard,
  'auth-onboarding': ShieldCheck,
  'footers-cta': PanelBottom,
}

const techLogos = [
  'Vue 3.5+',
  'TypeScript',
  'Tailwind CSS',
  'Composition API',
  'Vite 6',
  'HTML5 Canvas',
  'VueUse',
  'SVG',
]

const heroCardCopied = ref(false)
function copyInstallGuide() {
  navigator.clipboard.writeText('npm i @vueuse/core clsx tailwind-merge')
  heroCardCopied.value = true
  setTimeout(() => {
    heroCardCopied.value = false
  }, 2000)
}

function openSearchModal() {
  window.dispatchEvent(new CustomEvent('open-search-modal'))
}
</script>

<template>
  <div class="relative overflow-hidden">
    <!-- ================= 1. HERO 科技大秀场 ================= -->
    <section class="relative min-h-[85vh] flex flex-col items-center justify-center px-4 pt-16 pb-20 text-center overflow-hidden">
      <!-- 3D 复古科技网格作为 Hero 纵深背景 -->
      <RetroGrid :angle="65" :opacity="0.45" />

      <!-- 顶部徽章 Badge -->
      <div class="relative z-10 mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-white/80 px-4 py-1.5 text-xs font-semibold text-zinc-800 shadow-sm backdrop-blur-md dark:border-zinc-800/90 dark:bg-zinc-900/80 dark:text-zinc-200">
        <Sparkles class="h-3.5 w-3.5 text-blue-500" />
        <ShinyText text="面向 Vue 3 的动效组件库与场景区块" />
        <span class="rounded-full bg-blue-500/10 px-1.5 py-0.5 text-[10px] font-mono font-semibold text-blue-600 dark:text-blue-400">
          v1.2 工业级
        </span>
      </div>

      <!-- 核心大标题 (融合 Supahero 风格 3D Mascot 萌系图腾与现代大字号排版) -->
      <h1 class="relative z-10 max-w-4xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.18] sm:leading-tight [text-wrap:balance]">
        <span class="inline-flex items-center text-zinc-950 dark:text-white">
          <img
            src="/logo.png"
            alt="Aura Mascot"
            class="inline-block h-[1.12em] w-[1.12em] rounded-2xl shadow-xl shadow-blue-500/20 align-middle -mt-1 sm:-mt-2 mr-2.5 sm:mr-3.5 border border-zinc-200/90 dark:border-zinc-800 shrink-0 transition-transform duration-300 hover:scale-105"
          />
          为 Vue 3 精心打造的
        </span>
        <span class="block mt-1 sm:mt-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-300 dark:to-purple-300 font-extrabold tracking-tight">
          交互动效与场景区块
        </span>
      </h1>

      <!-- 痛点与定位描述 -->
      <p class="relative z-10 mx-auto mt-6 max-w-2xl text-base text-zinc-600 sm:text-lg dark:text-zinc-400 leading-relaxed">
        专为 <strong>AI 原生产品、SaaS 官网与企业级大盘</strong> 定制的高帧率 Web 交互基础设施。<br class="hidden sm:inline" />
        <span class="font-medium text-zinc-900 dark:text-zinc-200">232 款动效组件 + 109 款场景区块</span>，单文件独立自包含，复制即跑。
      </p>

      <!-- 核心行动按钮 (CTA) -->
      <div class="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4">
        <router-link :to="'/docs/' + getLastVisitedDocId()">
          <ShimmerButton shimmer-color="#60a5fa" class="h-12 px-8 text-base">
            <span>浏览组件库</span>
            <ArrowRight class="h-4 w-4" />
          </ShimmerButton>
        </router-link>

        <button
          type="button"
          class="inline-flex h-12 items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-6 text-sm font-semibold text-zinc-900 shadow-sm backdrop-blur-md transition-all hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:bg-zinc-800"
          @click="copyInstallGuide"
        >
          <Check v-if="heroCardCopied" class="h-4 w-4 text-emerald-500" />
          <Copy v-else class="h-4 w-4 text-zinc-400" />
          <span>{{ heroCardCopied ? '已复制安装命令' : '复制依赖安装命令' }}</span>
        </button>
      </div>

      <!-- Supahero 风格全局快速搜索探索胶囊栏 -->
      <div class="relative z-10 mt-5 w-full max-w-md mx-auto">
        <button
          type="button"
          @click="openSearchModal"
          class="group flex w-full items-center justify-between rounded-2xl border border-zinc-200/90 bg-white/70 px-4 py-2.5 text-xs sm:text-sm text-zinc-500 shadow-sm backdrop-blur-md transition-all duration-200 hover:border-blue-500/50 hover:bg-white hover:text-zinc-900 hover:shadow-md dark:border-zinc-800/90 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:border-blue-500/50 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
        >
          <div class="flex items-center gap-2.5 truncate">
            <Search class="h-4 w-4 text-zinc-400 group-hover:text-blue-500 transition-colors shrink-0" />
            <span class="truncate">搜索 232+ 组件与 109+ 场景区块...</span>
          </div>
          <div class="flex items-center gap-1 shrink-0">
            <kbd class="hidden sm:inline-flex h-5 items-center rounded border border-zinc-200 bg-zinc-100 px-1.5 font-mono text-[10px] text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
              Ctrl K
            </kbd>
          </div>
        </button>
      </div>

      <!-- 4 大核心特征标签胶囊 -->
      <div class="relative z-10 mt-5 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
        <span class="inline-flex items-center gap-1.5 rounded-full border border-zinc-200/80 bg-white/60 px-3 py-1 shadow-2xs backdrop-blur-xs dark:border-zinc-800 dark:bg-zinc-900/60">
          <span class="h-1.5 w-1.5 rounded-full bg-blue-500" />
          232+ 动效组件
        </span>
        <span class="inline-flex items-center gap-1.5 rounded-full border border-zinc-200/80 bg-white/60 px-3 py-1 shadow-2xs backdrop-blur-xs dark:border-zinc-800 dark:bg-zinc-900/60">
          <span class="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          109+ 场景区块
        </span>
        <span class="inline-flex items-center gap-1.5 rounded-full border border-zinc-200/80 bg-white/60 px-3 py-1 shadow-2xs backdrop-blur-xs dark:border-zinc-800 dark:bg-zinc-900/60">
          <span class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          100% Vue 3.5 & TS
        </span>
        <span class="inline-flex items-center gap-1.5 rounded-full border border-zinc-200/80 bg-white/60 px-3 py-1 shadow-2xs backdrop-blur-xs dark:border-zinc-800 dark:bg-zinc-900/60">
          <span class="h-1.5 w-1.5 rounded-full bg-purple-500" />
          单文件复制即用
        </span>
      </div>

      <!-- Hero 区域核心动态卡片（升级为标准 macOS 代码终端视窗，使 BorderBeam 成为天然的环绕流光高光） -->
      <div class="relative z-10 mt-10 w-full max-w-2xl text-left">
        <div class="relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/80 p-5 shadow-2xl backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/80">
          <BorderBeam :size="90" :duration="6" color-from="#38bdf8" color-to="#a855f7" :border-width="2" :border-radius="16" />
          
          <!-- Terminal 标题栏 -->
          <div class="mb-4 flex items-center justify-between border-b border-zinc-200/60 pb-3 dark:border-zinc-800/60">
            <div class="flex items-center gap-2">
              <span class="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
              <span class="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
              <span class="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
              <span class="ml-2 font-mono text-xs text-zinc-400">
                <span class="hidden sm:inline">components/</span>BorderBeam.vue
              </span>
            </div>
            <div class="flex items-center gap-1.5 text-xs font-mono text-blue-600 dark:text-blue-400">
              <span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>复制即用</span>
            </div>
          </div>

          <!-- Terminal 交互代码展示 -->
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
            <div class="space-y-1 text-zinc-600 dark:text-zinc-300">
              <p><span class="text-purple-500">&lt;template&gt;</span></p>
              <p class="pl-4">
                <span class="text-blue-500">&lt;div</span> <span class="text-amber-500">class=</span><span class="text-emerald-500">"relative rounded-2xl"</span><span class="text-blue-500">&gt;</span>
              </p>
              <p class="pl-8">
                <span class="text-blue-500">&lt;BorderBeam</span> <span class="text-amber-500">:duration=</span><span class="text-emerald-500">"5"</span> <span class="text-amber-500">:border-width=</span><span class="text-emerald-500">"2"</span> <span class="text-blue-500">/&gt;</span>
              </p>
              <p class="pl-4"><span class="text-blue-500">&lt;/div&gt;</span></p>
              <p><span class="text-purple-500">&lt;/template&gt;</span></p>
            </div>
            <router-link
              :to="'/docs/' + getLastVisitedDocId()"
              class="w-full sm:w-auto text-center shrink-0 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
            >
              查看全部 {{ COMPONENTS_DATA.length }} 个组件 &rarr;
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= 2. 无缝跑马灯技术流 ================= -->
    <section class="border-y border-zinc-200/80 bg-zinc-50/50 py-6 dark:border-zinc-800/80 dark:bg-zinc-950/40">
      <div class="mx-auto max-w-7xl px-4 text-center">
        <p class="mb-4 text-xs font-semibold tracking-wider text-zinc-400 uppercase">
          基于以下技术构建
        </p>
        <Marquee :duration="25" :pause-on-hover="true">
          <div
            v-for="item in techLogos"
            :key="item"
            class="flex items-center gap-2 rounded-xl border border-zinc-200/80 bg-white px-5 py-2 text-xs font-bold text-zinc-700 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900 dark:text-zinc-300"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>{{ item }}</span>
          </div>
        </Marquee>
      </div>
    </section>

    <!-- ================= 3. BENTO GRID 特色展厅 ================= -->
    <section id="features" class="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50">
          全场景覆盖 · {{ COMPONENTS_DATA.length }}+ 个高品质动效组件
        </h2>
        <p class="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base">
          下面是部分常用组件的实时预览。所有组件都支持浅色和深色两种模式，点击卡片可查看用法和源码。
        </p>
      </div>

      <BentoGrid>
        <!-- 1. 流光边框卡片 -->
        <BentoCard
          name="Border Beam"
          description="沿圆角边框循环流动的渐变光效，适合突出正在运行的任务或推荐方案"
          cta="查看文档"
          href="/docs/border-beam"
        >
          <template #icon><Sparkles class="h-5 w-5 text-sky-500" /></template>
          <template #background>
            <div class="relative h-full w-full flex items-center justify-center p-4 bg-gradient-to-b from-sky-50/40 to-transparent dark:from-zinc-900/60 dark:to-transparent">
              <div class="relative flex h-32 w-56 flex-col justify-between rounded-xl border border-zinc-200/90 bg-white/95 p-3.5 shadow-md backdrop-blur-md dark:border-zinc-800/90 dark:bg-zinc-900/95">
                <BorderBeam :size="65" :duration="3.5" color-from="#06b6d4" color-to="#6366f1" :border-width="2" :border-radius="12" />
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="relative flex h-2 w-2">
                      <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span class="text-xs font-bold text-zinc-800 dark:text-zinc-200">构建任务</span>
                  </div>
                  <span class="rounded bg-sky-500/10 px-1.5 py-0.5 text-[10px] font-mono font-semibold text-sky-600 dark:text-sky-400">运行中</span>
                </div>
                <div class="space-y-1.5">
                  <div class="h-2 w-4/5 rounded-full bg-zinc-200 dark:bg-zinc-700" />
                  <div class="h-2 w-3/5 rounded-full bg-gradient-to-r from-sky-500/40 to-indigo-500/40" />
                </div>
              </div>
            </div>
          </template>
        </BentoCard>

        <!-- 2. 磁吸粒子背景 -->
        <BentoCard
          name="Interactive Particles"
          description="Canvas 绘制的粒子背景，鼠标靠近时粒子被推开，相邻粒子之间自动连线"
          cta="查看文档"
          href="/docs/interactive-particles"
        >
          <template #icon><Zap class="h-5 w-5 text-amber-500" /></template>
          <template #background>
            <div class="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-b from-sky-50/50 to-blue-50/20 border border-blue-100/50 dark:from-zinc-900 dark:to-zinc-950 dark:border-zinc-800">
              <InteractiveParticles
                :quantity="38"
                :speed="0.75"
                :mouse-radius="85"
                :connect-lines="true"
                class="absolute inset-0 h-full w-full"
              />
              <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div class="flex items-center gap-1.5 rounded-full border border-blue-200/60 bg-white/80 px-3 py-1 text-xs font-mono font-medium text-blue-600 shadow-sm backdrop-blur-md dark:border-blue-900/60 dark:bg-zinc-900/80 dark:text-blue-400">
                  <span class="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                  <span>移动鼠标试试</span>
                </div>
              </div>
            </div>
          </template>
        </BentoCard>

        <!-- 3. 复古 3D 网格 -->
        <BentoCard
          name="Retro Grid"
          description="向远处延伸的透视网格背景，浅色和深色模式下分别使用不同的线条颜色"
          cta="查看文档"
          href="/docs/retro-grid"
        >
          <template #icon><Layers class="h-5 w-5 text-indigo-500" /></template>
          <template #background>
            <div class="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-b from-indigo-50/30 to-white dark:from-zinc-950 dark:to-zinc-900">
              <RetroGrid :angle="65" :opacity="0.85" :cell-size="34" light-line-color="#6366f1" dark-line-color="#38bdf8" />
              <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span class="rounded-full border border-indigo-200/80 bg-white/90 px-3.5 py-1 text-xs font-bold text-indigo-600 shadow-sm backdrop-blur-md dark:border-indigo-900/80 dark:bg-zinc-900/90 dark:text-indigo-400">
                  透视网格背景
                </span>
              </div>
            </div>
          </template>
        </BentoCard>

        <!-- 4. 微光按钮 -->
        <BentoCard
          name="Shimmer Button"
          description="边框上有一道光沿按钮外圈旋转，适合用作页面上最主要的行动按钮"
          cta="查看文档"
          href="/docs/shimmer-button"
        >
          <template #icon><Sparkles class="h-5 w-5 text-pink-500" /></template>
          <template #background>
            <div class="relative h-full w-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-pink-50/30 to-transparent dark:from-zinc-900/50 dark:to-transparent">
              <ShimmerButton shimmer-color="#ec4899" shimmer-duration="2.4s" class="shadow-lg">
                <Sparkles class="h-4 w-4 text-pink-400" />
                <span>开始免费试用</span>
              </ShimmerButton>
              <span class="mt-3 text-[11px] font-mono text-zinc-400">适合主要行动按钮</span>
            </div>
          </template>
        </BentoCard>

        <!-- 5. 金属扫光文字 -->
        <BentoCard
          name="Shiny Text"
          description="一道高光从左到右循环扫过文字，适合首屏标题或新功能提示"
          cta="查看文档"
          href="/docs/shiny-text"
        >
          <template #icon><Sparkles class="h-5 w-5 text-amber-500" /></template>
          <template #background>
            <div class="relative h-full w-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-zinc-100 via-white to-zinc-100/70 border border-zinc-200/80 rounded-xl overflow-hidden dark:bg-zinc-900 dark:border-zinc-800">
              <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20" />
              <ShinyText text="新版本已发布" class="relative z-10 text-xl font-black tracking-tight" :duration="2.2" />
              <p class="relative z-10 mt-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">高光循环扫过文字</p>
            </div>
          </template>
        </BentoCard>

        <!-- 6. 科技波点底纹 -->
        <BentoCard
          name="Dot Pattern"
          description="SVG 绘制的点阵背景，可开启光晕，鼠标附近的点会被点亮"
          cta="查看文档"
          href="/docs/dot-pattern"
        >
          <template #icon><ShieldCheck class="h-5 w-5 text-emerald-500" /></template>
          <template #background>
            <div class="relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50">
              <DotPattern :width="16" :height="16" :cr="1.2" :glow="true" />
              <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span class="rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-600 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  移动鼠标查看光晕
                </span>
              </div>
            </div>
          </template>
        </BentoCard>

        <!-- 7. 无缝跑马灯 -->
        <BentoCard
          name="Marquee"
          description="无缝循环滚动的内容条，可设置速度、反向滚动和悬停暂停"
          class="md:col-span-2"
          cta="查看文档"
          href="/docs/marquee"
        >
          <template #icon><Repeat class="h-5 w-5 text-blue-500" /></template>
          <template #background>
            <div class="relative h-full w-full flex flex-col justify-center overflow-hidden rounded-xl p-3 bg-zinc-50/60 dark:bg-zinc-900/40">
              <Marquee :duration="16" :pause-on-hover="true">
                <div
                  v-for="tag in ['GPT-4o', 'Claude 3.5', 'DeepSeek-V3', 'Llama 3.3', 'Gemini 1.5']"
                  :key="tag"
                  class="mx-1.5 flex items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-white px-3 py-1.5 text-xs font-bold text-zinc-800 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
                >
                  <span class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>{{ tag }}</span>
                </div>
              </Marquee>
              <Marquee :duration="20" :reverse="true" :pause-on-hover="true" class="mt-2.5">
                <div
                  v-for="tag in ['Vue 3.5', 'TypeScript', 'Tailwind CSS', 'Vite', 'Canvas 2D']"
                  :key="tag"
                  class="mx-1.5 flex items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-white px-3 py-1.5 text-xs font-bold text-zinc-800 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
                >
                  <span class="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span>{{ tag }}</span>
                </div>
              </Marquee>
            </div>
          </template>
        </BentoCard>

        <!-- 8. 便当格卡片系统 -->
        <BentoCard
          name="Bento Grid"
          description="大小不一的卡片网格布局，鼠标移到卡片上时会出现跟随光标的高光"
          cta="查看文档"
          href="/docs/bento-grid"
        >
          <template #icon><Layers class="h-5 w-5 text-purple-500" /></template>
          <template #background>
            <div class="relative h-full w-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent">
              <div class="grid grid-cols-2 gap-2 w-full max-w-[200px]">
                <div class="h-12 rounded-lg border border-purple-300/40 bg-purple-500/10 dark:border-purple-500/30 dark:bg-purple-500/20 flex items-center justify-center text-[10px] font-mono text-purple-600 dark:text-purple-300">
                  Col 1
                </div>
                <div class="h-12 rounded-lg border border-blue-300/40 bg-blue-500/10 dark:border-blue-500/30 dark:bg-blue-500/20 flex items-center justify-center text-[10px] font-mono text-blue-600 dark:text-blue-300">
                  Col 2
                </div>
                <div class="col-span-2 h-10 rounded-lg border border-indigo-300/40 bg-indigo-500/10 dark:border-indigo-500/30 dark:bg-indigo-500/20 flex items-center justify-center text-[10px] font-mono text-indigo-600 dark:text-indigo-300">
                  跨两列卡片
                </div>
              </div>
            </div>
          </template>
        </BentoCard>

        <!-- 9. 赛博流星雨卡片 -->
        <BentoCard
          name="Meteors"
          description="带渐变尾迹的流星随机斜向划过，适合深色卡片或首屏背景"
          cta="查看文档"
          href="/docs/meteors"
        >
          <template #icon><Sparkles class="h-5 w-5 text-sky-400" /></template>
          <template #background>
            <div class="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-indigo-950 via-slate-900 to-sky-950 border border-indigo-900/40 p-4 shadow-inner dark:from-slate-950 dark:to-zinc-950 dark:border-zinc-800">
              <Meteors :number="18" />
              <div class="flex h-full flex-col justify-end">
                <span class="text-xs font-mono text-sky-300 dark:text-sky-400 font-semibold flex items-center gap-1.5">
                  <span class="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
                  <span>流星夜空视窗</span>
                </span>
              </div>
            </div>
          </template>
        </BentoCard>

        <!-- 10. 同心声波涟漪卡片 -->
        <BentoCard
          name="Ripple"
          description="从中心向外扩散的多层同心圆，适合语音输入、正在聆听或头像强调"
          cta="查看文档"
          href="/docs/ripple"
        >
          <template #icon><Mic class="h-5 w-5 text-blue-500" /></template>
          <template #background>
            <div class="relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900/60 flex items-center justify-center">
              <Ripple :main-circle-size="110" :num-circles="6" />
              <div class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/40">
                <Mic class="h-6 w-6" />
              </div>
            </div>
          </template>
        </BentoCard>

        <!-- 11. 平滑数字跳动卡片 -->
        <BentoCard
          name="Number Ticker"
          description="数字从 0 平滑滚动到目标值，进入可视区域时自动开始，适合展示关键指标"
          cta="查看文档"
          href="/docs/number-ticker"
        >
          <template #icon><Activity class="h-5 w-5 text-emerald-500" /></template>
          <template #background>
            <div class="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent flex flex-col items-center justify-center p-4">
              <div class="text-4xl font-black text-emerald-600 dark:text-emerald-400">
                <NumberTicker :value="99.99" :decimal-places="2" />%
              </div>
              <p class="mt-2 text-xs font-mono text-zinc-500">本月服务可用率</p>
            </div>
          </template>
        </BentoCard>

        <!-- 12. 多节点能量流动光束 (宽版卡片) -->
        <BentoCard
          name="Animated Beam"
          description="在两个元素之间画出连线，光点沿线流动，适合展示数据流向或系统调用关系"
          class="md:col-span-2"
          cta="查看文档"
          href="/docs/animated-beam"
        >
          <template #icon><Zap class="h-5 w-5 text-indigo-500" /></template>
          <template #background>
            <div
              ref="homeBeamContainer"
              class="relative h-full w-full overflow-hidden rounded-xl bg-zinc-50/80 dark:bg-zinc-900/50 flex items-center justify-between px-8"
            >
              <div ref="homeBeamUser" class="z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-blue-600 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-blue-400">
                <User class="h-5 w-5" />
              </div>
              <div ref="homeBeamAi" class="z-10 flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/40">
                <Sparkles class="h-6 w-6" />
              </div>
              <div ref="homeBeamDb" class="z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-indigo-600 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-indigo-400">
                <Database class="h-5 w-5" />
              </div>

              <AnimatedBeam :container-ref="homeBeamContainer" :from-ref="homeBeamUser" :to-ref="homeBeamAi" :duration="2.2" />
              <AnimatedBeam :container-ref="homeBeamContainer" :from-ref="homeBeamAi" :to-ref="homeBeamDb" :duration="2.2" :delay="0.5" />
            </div>
          </template>
        </BentoCard>

        <!-- 13. 呼吸噪波微光网格 -->
        <BentoCard
          name="Flickering Grid"
          description="Canvas 绘制的方格网格，每个方格随机明暗闪烁，适合做科技感背景"
          cta="查看文档"
          href="/docs/flickering-grid"
        >
          <template #icon><Layers class="h-5 w-5 text-sky-500" /></template>
          <template #background>
            <div class="relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-950 p-4">
              <FlickeringGrid :square-size="4" :grid-gap="5" :flicker-chance="0.4" :max-opacity="0.35" class="absolute inset-0" />
              <div class="relative z-10 flex h-full items-center justify-center">
                <span class="rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-mono text-sky-500 dark:text-sky-400 font-bold">
                  随机闪烁网格
                </span>
              </div>
            </div>
          </template>
        </BentoCard>
      </BentoGrid>
    </section>

    <!-- ================= 4. 全栈场景区块 109 款工业级实景展台 ================= -->
    <section id="scene-blocks" class="scroll-mt-28 pt-24 sm:pt-28 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div class="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
        <div class="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/50 px-3.5 py-1 text-xs font-semibold text-indigo-600 dark:border-indigo-900/60 dark:bg-indigo-950/40 dark:text-indigo-400">
          <LayoutGrid class="h-3.5 w-3.5" />
          <span>企业级场景区块生态</span>
        </div>
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 leading-snug sm:leading-tight pt-1">
          全栈场景区块
          <span class="text-zinc-400 dark:text-zinc-500 font-normal mx-1 text-xl sm:text-2xl">·</span>
          <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-300">
            109 款工业级生产就绪模块
          </span>
        </h2>
        <p class="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          不仅提供精细动效原子，更提供开箱即用的成套业务场景。涵盖 AI Agent 工作台、SaaS 数据大盘、高转化定价矩阵与入职引导流。
        </p>
      </div>

      <!-- 8 大业务场景交互切换 Tabs（移动端 2 列工整网格，桌面端流式居中胶囊，0 滚动条，0 截断） -->
      <div class="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 max-w-5xl mx-auto">
        <button
          v-for="suite in BLOCK_SUITES"
          :key="suite.id"
          type="button"
          @click="activeSuiteId = suite.id"
          class="group relative inline-flex items-center justify-between sm:justify-center gap-1.5 sm:gap-2 px-2.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-semibold transition-all duration-200 cursor-pointer select-none"
          :class="
            activeSuiteId === suite.id
              ? 'bg-zinc-950 text-white shadow-md shadow-zinc-950/15 dark:bg-white dark:text-zinc-950 scale-[1.01]'
              : 'border border-zinc-200/90 bg-white/80 text-zinc-600 hover:border-zinc-300 hover:bg-zinc-100/90 hover:text-zinc-950 dark:border-zinc-800/90 dark:bg-zinc-900/70 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-white'
          "
        >
          <div class="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <component
              :is="suiteIconMap[suite.id] || LayoutGrid"
              class="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:scale-110"
              :class="activeSuiteId === suite.id ? 'text-blue-400 dark:text-blue-600' : 'text-zinc-400 group-hover:text-zinc-700 dark:text-zinc-500 dark:group-hover:text-zinc-300'"
            />
            <span class="tracking-tight truncate">{{ suite.name }}</span>
          </div>
          <span
            class="px-1.5 py-0.5 rounded-full text-[10px] font-mono leading-none shrink-0"
            :class="
              activeSuiteId === suite.id
                ? 'bg-white/20 text-white dark:bg-black/15 dark:text-black font-bold'
                : 'bg-zinc-100 text-zinc-500 group-hover:bg-zinc-200/70 dark:bg-zinc-800 dark:text-zinc-400'
            "
          >
            {{ suite.count }}
          </span>
        </button>
      </div>

      <!-- 当前场景套件全景简介卡 -->
      <div class="mt-8 p-5 sm:p-6 rounded-2xl border border-zinc-200/90 bg-gradient-to-r from-zinc-50 via-white to-zinc-50 dark:border-zinc-800/90 dark:from-zinc-950 dark:via-zinc-900/50 dark:to-zinc-950 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div class="flex items-start sm:items-center gap-3.5">
          <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50">
            <component :is="suiteIconMap[activeSuite.id] || LayoutGrid" class="h-5 w-5" />
          </div>
          <div class="space-y-1">
            <div class="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2">
              <span class="text-sm font-bold text-zinc-900 dark:text-zinc-100">{{ activeSuite.name }}</span>
              <span class="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-wide">/ {{ activeSuite.englishName }}</span>
            </div>
            <p class="text-xs text-zinc-500 dark:text-zinc-400 max-w-3xl leading-relaxed">
              {{ activeSuite.description }}
            </p>
          </div>
        </div>
        <router-link
          :to="'/blocks/' + activeSuiteBlocks[0]?.id"
          class="shrink-0 inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-500 dark:text-blue-400 transition-colors"
        >
          <span>进入此套件中心 (共 {{ activeSuite.count }} 款)</span>
          <ArrowRight class="w-3.5 h-3.5" />
        </router-link>
      </div>

      <!-- 精选 4 款场景区块陈列矩阵（升级为 Supahero 风格 16:10 黄金宽屏实景仿真视窗画廊） -->
      <div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-7">
        <div
          v-for="block in activeSuiteBlocks"
          :key="block.id"
          class="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl dark:border-zinc-800/90 dark:bg-zinc-900/80 dark:hover:border-blue-500/50 dark:hover:shadow-blue-500/10"
        >
          <!-- 1. 黄金 16:10 仿真视窗展台 (Supahero Signature Live Mockup Viewport) -->
          <div class="relative w-full aspect-[16/10] overflow-hidden bg-zinc-950 flex flex-col border-b border-zinc-200/80 dark:border-zinc-800/80 select-none">
            <!-- macOS 顶栏 Chrome -->
            <div class="relative z-20 flex h-7 items-center justify-between px-3 border-b border-zinc-800/80 bg-zinc-900/90 backdrop-blur-xs">
              <div class="flex items-center gap-1.5">
                <span class="h-2 w-2 rounded-full bg-rose-500/80 inline-block" />
                <span class="h-2 w-2 rounded-full bg-amber-500/80 inline-block" />
                <span class="h-2 w-2 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div class="flex items-center gap-1 px-2 py-0.5 rounded-md bg-zinc-800/80 text-[10px] font-mono text-zinc-400 max-w-[200px] truncate">
                <span class="text-zinc-500">aura://</span>
                <span class="text-zinc-300 font-semibold truncate">{{ block.id }}</span>
              </div>
              <div class="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span class="hidden sm:inline">Vue 3.5</span>
              </div>
            </div>

            <!-- 视窗拟真动态场景主体 (悬停平滑 scale-[1.03]) -->
            <div class="relative flex-1 w-full overflow-hidden flex items-center justify-center p-4 sm:p-6 transition-transform duration-500 ease-out group-hover:scale-[1.03]">
              <!-- 1. 首屏英雄 (marketing-hero: 针对 4 款代表性 block 赋予专属视窗灵魂) -->
              <div v-if="block.suiteId === 'marketing-hero'" class="relative w-full h-full flex items-center justify-center">
                <!-- 1.1 倾斜视差仪表盘 (hero-dashboard-preview) -->
                <div v-if="block.id === 'hero-dashboard-preview'" class="relative w-full h-full flex items-center justify-center p-2">
                  <div class="relative w-full max-w-[270px] rounded-xl border border-indigo-500/40 bg-zinc-900/90 p-3 shadow-2xl shadow-indigo-500/20 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                    <div class="flex items-center justify-between pb-2 border-b border-zinc-800">
                      <div class="flex items-center gap-1.5">
                        <span class="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                        <span class="text-[9px] font-mono text-zinc-300 font-bold">Analytics 3.0</span>
                      </div>
                      <span class="text-[8px] font-mono text-emerald-400 bg-emerald-500/10 px-1 rounded font-bold">+34.2%</span>
                    </div>
                    <div class="grid grid-cols-2 gap-1.5 mt-2">
                      <div class="rounded bg-zinc-800/80 p-1.5 text-[8px] text-zinc-400">MRR: <span class="text-white font-bold">$42.8k</span></div>
                      <div class="rounded bg-zinc-800/80 p-1.5 text-[8px] text-zinc-400">Churn: <span class="text-white font-bold">0.8%</span></div>
                    </div>
                    <div class="mt-2 h-1.5 w-full rounded-full bg-zinc-800 overflow-hidden">
                      <div class="h-full w-3/4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
                    </div>
                  </div>
                </div>

                <!-- 1.2 开发者 macOS 终端 (hero-terminal-developer) -->
                <div v-else-if="block.id === 'hero-terminal-developer'" class="relative w-full h-full flex items-center justify-center p-2">
                  <div class="relative w-full max-w-[280px] rounded-xl border border-zinc-700/80 bg-zinc-950 p-3 font-mono text-[9px] text-zinc-300 shadow-xl">
                    <div class="flex items-center gap-1.5 pb-2 mb-2 border-b border-zinc-800 text-zinc-500">
                      <span class="h-1.5 w-1.5 rounded-full bg-rose-500/80" />
                      <span class="h-1.5 w-1.5 rounded-full bg-amber-500/80" />
                      <span class="h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
                      <span class="text-[8px] text-zinc-400 ml-1">bash - 80x24</span>
                    </div>
                    <div class="text-emerald-400 font-bold">$ npx @auraui/cli init</div>
                    <div class="text-zinc-500 mt-1">✔ Resolving high-fps Vue 3 templates...</div>
                    <div class="text-zinc-400 mt-1 flex items-center gap-1">
                      <span>✔ Ready in 12ms</span>
                      <span class="h-2.5 w-1 bg-blue-400 animate-pulse" />
                    </div>
                  </div>
                </div>

                <!-- 1.3 极光流光渐变 (hero-aurora-gradient) -->
                <div v-else-if="block.id === 'hero-aurora-gradient'" class="relative w-full h-full flex flex-col items-center justify-center text-center p-3 overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-r from-teal-500/30 via-purple-600/30 to-rose-500/30 blur-2xl animate-pulse" />
                  <div class="relative z-10 text-[10px] font-mono text-teal-300 font-semibold mb-1">Aurora Fluid Mesh</div>
                  <div class="relative z-10 text-base sm:text-lg font-black text-white tracking-tight bg-gradient-to-r from-teal-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                    极光流光破晓
                  </div>
                  <div class="relative z-10 mt-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[9px] text-white font-medium">
                    CSS Gradient / High FPS
                  </div>
                </div>

                <!-- 1.4 AI 工作台默认 (hero-ai-studio 及其他) -->
                <div v-else class="relative w-full h-full flex flex-col items-center justify-center text-center">
                  <div class="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-indigo-500/10 to-purple-600/20 blur-xl pointer-events-none" />
                  <div class="relative z-10 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-[9px] font-mono text-blue-400 mb-2">
                    <Sparkles class="w-2.5 h-2.5" />
                    <span>AI Native Hero</span>
                  </div>
                  <div class="relative z-10 text-sm sm:text-base font-black text-white tracking-tight leading-snug">
                    Agent Studio
                  </div>
                  <div class="relative z-10 mt-1 text-[10px] text-zinc-400 max-w-[220px] truncate">
                    High-converting responsive hero sections
                  </div>
                  <!-- 模拟微缩输入交互框 -->
                  <div class="relative z-10 mt-3 w-full max-w-[240px] px-2.5 py-1.5 rounded-lg border border-zinc-700/80 bg-zinc-900/90 shadow-lg flex items-center justify-between text-[10px] text-zinc-400">
                    <span class="truncate">Ask AI to generate layout...</span>
                    <span class="px-1.5 py-0.5 rounded bg-blue-600 text-white font-mono text-[9px]">Run</span>
                  </div>
                </div>
              </div>

              <!-- 2. 产品特性矩阵 (marketing-features) -->
              <div v-else-if="block.suiteId === 'marketing-features'" class="relative w-full h-full grid grid-cols-2 gap-2">
                <div class="rounded-xl border border-zinc-800 bg-zinc-900/80 p-2.5 flex flex-col justify-between">
                  <div class="flex items-center gap-1.5">
                    <Layers class="w-3.5 h-3.5 text-indigo-400" />
                    <span class="text-[10px] font-bold text-zinc-200">Bento Grid</span>
                  </div>
                  <div class="space-y-1">
                    <div class="h-1.5 w-3/4 rounded-full bg-zinc-700" />
                    <div class="h-1.5 w-1/2 rounded-full bg-indigo-500/50" />
                  </div>
                </div>
                <div class="rounded-xl border border-zinc-800 bg-zinc-900/80 p-2.5 flex flex-col justify-between">
                  <div class="flex items-center justify-between">
                    <Zap class="w-3.5 h-3.5 text-amber-400" />
                    <span class="text-[9px] font-mono text-emerald-400">60 FPS</span>
                  </div>
                  <div class="h-6 w-full rounded bg-zinc-800/60 flex items-center justify-center text-[9px] font-mono text-zinc-400">
                    GPU Driven
                  </div>
                </div>
                <div class="col-span-2 rounded-xl border border-zinc-800 bg-zinc-900/80 px-3 py-2 flex items-center justify-between">
                  <span class="text-[10px] font-medium text-zinc-300">Feature Matrix & Tabs</span>
                  <span class="text-[9px] font-mono text-blue-400">&rarr;</span>
                </div>
              </div>

              <!-- 3. 定价订阅矩阵 (marketing-pricing) -->
              <div v-else-if="block.suiteId === 'marketing-pricing'" class="relative w-full h-full grid grid-cols-3 gap-1.5 items-center">
                <div class="h-full rounded-xl border border-zinc-800 bg-zinc-900/60 p-2 flex flex-col justify-between text-center">
                  <span class="text-[9px] font-mono text-zinc-400">Free</span>
                  <span class="text-xs font-black text-white">$0</span>
                  <span class="text-[8px] text-zinc-500">Starter</span>
                </div>
                <div class="h-[105%] rounded-xl border border-blue-500/60 bg-gradient-to-b from-blue-900/30 to-zinc-900 p-2 flex flex-col justify-between text-center shadow-lg shadow-blue-500/10">
                  <span class="text-[9px] font-bold text-blue-400">Pro</span>
                  <span class="text-sm font-black text-white">$29</span>
                  <span class="rounded bg-blue-600 px-1 py-0.5 text-[8px] text-white font-bold">POPULAR</span>
                </div>
                <div class="h-full rounded-xl border border-zinc-800 bg-zinc-900/60 p-2 flex flex-col justify-between text-center">
                  <span class="text-[9px] font-mono text-zinc-400">Team</span>
                  <span class="text-xs font-black text-white">$99</span>
                  <span class="text-[8px] text-zinc-500">Enterprise</span>
                </div>
              </div>

              <!-- 4. 客户评价与背书 (marketing-testimonials) -->
              <div v-else-if="block.suiteId === 'marketing-testimonials'" class="relative w-full h-full flex flex-col justify-center space-y-2">
                <div class="rounded-xl border border-zinc-800 bg-zinc-900/80 p-2.5 flex items-center gap-2.5">
                  <div class="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 shrink-0" />
                  <div class="flex-1 min-w-0">
                    <div class="text-[9px] text-amber-400 font-bold">★★★★★</div>
                    <div class="text-[10px] text-zinc-300 truncate font-medium">“Vue 动效天花板，交互体验无与伦比！”</div>
                  </div>
                </div>
                <div class="rounded-xl border border-zinc-800 bg-zinc-900/80 p-2.5 flex items-center gap-2.5 opacity-75">
                  <div class="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-500 shrink-0" />
                  <div class="flex-1 min-w-0">
                    <div class="text-[9px] text-amber-400 font-bold">★★★★★</div>
                    <div class="text-[10px] text-zinc-300 truncate font-medium">“单文件复制即跑，完全免去复杂配置。”</div>
                  </div>
                </div>
              </div>

              <!-- 5. AI 控制台与智能体 (ai-consoles) -->
              <div v-else-if="block.suiteId === 'ai-consoles'" class="relative w-full h-full flex flex-col justify-between p-1">
                <div class="flex items-center justify-between border-b border-zinc-800/80 pb-1.5">
                  <div class="flex items-center gap-1.5">
                    <Bot class="w-3.5 h-3.5 text-sky-400" />
                    <span class="text-[10px] font-mono font-bold text-zinc-200">Agent Speculative CoT</span>
                  </div>
                  <span class="text-[9px] font-mono text-sky-400 animate-pulse">Thinking...</span>
                </div>
                <div class="space-y-1.5 my-auto">
                  <div class="flex items-start gap-1.5">
                    <span class="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1 shrink-0" />
                    <span class="text-[9px] font-mono text-zinc-400 leading-tight">Step 1: Parsing user intent into toolchain...</span>
                  </div>
                  <div class="flex items-start gap-1.5">
                    <span class="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-1 shrink-0" />
                    <span class="text-[9px] font-mono text-zinc-300 leading-tight">Step 2: Dual-model speculation verification [PASS]</span>
                  </div>
                </div>
                <div class="rounded-lg bg-zinc-900 border border-zinc-800 px-2 py-1 text-[9px] font-mono text-zinc-500 flex items-center justify-between">
                  <span>Stream tokens: 184 t/s</span>
                  <span class="text-emerald-400 font-bold">Active</span>
                </div>
              </div>

              <!-- 6. SaaS 仪表盘与管理后台 (saas-dashboards) -->
              <div v-else-if="block.suiteId === 'saas-dashboards'" class="relative w-full h-full flex flex-col justify-between">
                <div class="grid grid-cols-3 gap-1.5">
                  <div class="rounded-lg bg-zinc-900 border border-zinc-800 p-1.5">
                    <div class="text-[8px] text-zinc-500">MRR</div>
                    <div class="text-[11px] font-black text-white">$128.4k</div>
                  </div>
                  <div class="rounded-lg bg-zinc-900 border border-zinc-800 p-1.5">
                    <div class="text-[8px] text-zinc-500">UPTIME</div>
                    <div class="text-[11px] font-black text-emerald-400">99.99%</div>
                  </div>
                  <div class="rounded-lg bg-zinc-900 border border-zinc-800 p-1.5">
                    <div class="text-[8px] text-zinc-500">P99 LATENCY</div>
                    <div class="text-[11px] font-black text-purple-400">42ms</div>
                  </div>
                </div>
                <!-- 模拟折线波形 -->
                <div class="relative h-12 w-full flex items-end">
                  <svg class="w-full h-full overflow-visible" viewBox="0 0 200 60" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.4" />
                        <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,45 Q30,15 60,35 T120,20 T170,40 T200,10 L200,60 L0,60 Z" fill="url(#chartGrad)" />
                    <path d="M0,45 Q30,15 60,35 T120,20 T170,40 T200,10" fill="none" stroke="#3b82f6" stroke-width="2" />
                  </svg>
                </div>
              </div>

              <!-- 7. 入职与认证流程 (auth-onboarding) -->
              <div v-else-if="block.suiteId === 'auth-onboarding'" class="relative w-full h-full flex items-center justify-center">
                <div class="w-full max-w-[220px] rounded-xl border border-zinc-800 bg-zinc-900/95 p-3 shadow-xl">
                  <div class="text-[10px] font-bold text-white text-center mb-2">安全双因素认证</div>
                  <div class="flex justify-center gap-1.5 mb-2.5">
                    <div class="w-6 h-7 rounded border border-zinc-700 bg-zinc-800/80 flex items-center justify-center font-mono text-xs font-bold text-white">4</div>
                    <div class="w-6 h-7 rounded border border-zinc-700 bg-zinc-800/80 flex items-center justify-center font-mono text-xs font-bold text-white">8</div>
                    <div class="w-6 h-7 rounded border border-blue-500 bg-blue-500/20 flex items-center justify-center font-mono text-xs font-bold text-blue-400 animate-pulse">9</div>
                    <div class="w-6 h-7 rounded border border-zinc-700 bg-zinc-800/80 flex items-center justify-center font-mono text-xs text-zinc-500">•</div>
                  </div>
                  <div class="w-full py-1 rounded bg-blue-600 text-[9px] font-bold text-white text-center">
                    验证并进入空间
                  </div>
                </div>
              </div>

              <!-- 8. 页脚与 CTA (footers-cta) -->
              <div v-else class="relative w-full h-full flex flex-col justify-between p-1">
                <div class="rounded-xl bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-purple-900/40 border border-blue-500/30 p-2.5 text-center">
                  <div class="text-[11px] font-bold text-white">准备好开启高帧率动效了吗？</div>
                  <div class="mt-1 inline-flex items-center gap-1 text-[9px] font-mono text-blue-400">
                    <span>npx create-aura-app@latest</span>
                  </div>
                </div>
                <div class="grid grid-cols-3 gap-2 text-[8px] font-mono text-zinc-500 pt-2 border-t border-zinc-800/60">
                  <div>Components</div>
                  <div>Documentation</div>
                  <div>Open Source</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 2. 信息与双操作通道 (Supahero Signature Action Card) -->
          <div class="p-5 sm:p-6 flex flex-col justify-between flex-1">
            <div>
              <div class="flex items-center justify-between gap-2 mb-2.5">
                <span class="font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                  <span class="h-2 w-2 rounded-full bg-blue-500" />
                  {{ block.name }}
                </span>
                <div class="flex flex-wrap gap-1.5">
                  <span
                    v-for="tag in block.tags.slice(0, 3)"
                    :key="tag"
                    class="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[10px] font-mono text-zinc-600 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>

              <h3 class="text-base font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {{ block.title }}
              </h3>

              <p class="mt-2 text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                {{ block.description }}
              </p>
            </div>

            <!-- 底部双行动通道 -->
            <div class="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between gap-3 text-xs">
              <router-link
                :to="'/blocks/' + block.id"
                class="inline-flex items-center gap-1 font-semibold text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white transition-colors"
              >
                <span>查看源码与架构</span>
                <ArrowRight class="w-3.5 h-3.5" />
              </router-link>

              <router-link
                :to="'/preview/' + block.id"
                target="_blank"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-700 font-semibold dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 transition-colors shadow-sm"
                title="新标签页全屏独立实景体验"
              >
                <span>实景全屏预览</span>
                <ExternalLink class="w-3.5 h-3.5 text-zinc-400 group-hover:text-blue-500" />
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- 场景区块全量行动大横幅 -->
      <div class="mt-12 text-center">
        <router-link
          :to="'/blocks/' + getLastVisitedBlockId()"
          class="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-black font-bold text-sm shadow-xl transition-transform hover:scale-105 active:scale-95"
        >
          <LayoutGrid class="w-4 h-4" />
          <span>浏览全部 109 款场景区块军火库 &rarr;</span>
        </router-link>
      </div>
    </section>

    <!-- ================= 5. 旗舰极光天顶聚光灯展示 ================= -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div class="relative overflow-hidden rounded-3xl p-1 bg-gradient-to-b from-blue-500/20 via-indigo-500/10 to-transparent border border-blue-500/20 shadow-2xl shadow-blue-500/5 dark:border-zinc-800/80">
        <LampEffect class="min-h-[460px] rounded-[22px]">
          <h2 class="text-center text-3xl sm:text-6xl font-black tracking-tight text-white dark:text-zinc-50 [text-wrap:balance]">
            从一个组件开始
          </h2>
          <p class="mt-4 max-w-lg text-sm text-zinc-300 dark:text-zinc-400">
            挑一个需要的组件，复制源码到项目里。除了 Vue 和 Tailwind CSS，只依赖几个轻量工具库。
          </p>
          <div class="mt-8 flex items-center justify-center gap-4">
            <router-link to="/docs/lamp-effect">
              <ShimmerButton shimmer-color="#38bdf8" class="h-11 px-6 text-sm">
                <span>查看 Lamp Effect</span>
                <ArrowRight class="h-4 w-4" />
              </ShimmerButton>
            </router-link>
          </div>
        </LampEffect>
      </div>
    </section>

    <!-- ================= 6. 现代工程的四大架构基石 ================= -->
    <section class="border-t border-zinc-200/80 bg-zinc-50/50 py-24 dark:border-zinc-800/80 dark:bg-zinc-950/40">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p class="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
            Architectural Pillars
          </p>
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-950 dark:text-zinc-50">
            现代全栈工程的四大架构基石
          </h2>
          <p class="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
            拒绝黑盒运行时与繁杂外部锁定。专为工程团队研发自主权打造的极简哲学。
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- 1. 单文件自包含 -->
          <div class="rounded-2xl border border-zinc-200/90 bg-white p-6 dark:border-zinc-800/90 dark:bg-zinc-900/60 shadow-sm flex flex-col justify-between">
            <div>
              <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/80 dark:text-blue-400">
                <Code2 class="h-5 w-5" />
              </div>
              <div class="text-[10px] font-mono text-zinc-400 font-semibold mb-1">01 / ZERO CONFIG</div>
              <h3 class="text-base font-bold text-zinc-900 dark:text-zinc-100">
                单文件源码自包含
              </h3>
              <p class="mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                无需魔改 tailwind.config.js。所有 CSS 关键帧与动画驱动完全自包含于单个 .vue 文件，复制即可无损运行。
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 text-[11px] font-mono text-blue-600 dark:text-blue-400 flex items-center gap-1">
              <Check class="w-3.5 h-3.5 text-emerald-500" />
              <span>源码所有权完全归属于你</span>
            </div>
          </div>

          <!-- 2. 严格类型与 Vue 3.5 宏 -->
          <div class="rounded-2xl border border-zinc-200/90 bg-white p-6 dark:border-zinc-800/90 dark:bg-zinc-900/60 shadow-sm flex flex-col justify-between">
            <div>
              <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-950/80 dark:text-indigo-400">
                <Cpu class="h-5 w-5" />
              </div>
              <div class="text-[10px] font-mono text-zinc-400 font-semibold mb-1">02 / TYPE SAFE</div>
              <h3 class="text-base font-bold text-zinc-900 dark:text-zinc-100">
                100% 严格类型系统
              </h3>
              <p class="mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                基于 TypeScript 与 Vue 3.5 宏定义。每个 Props、Emits、Slots 均配备严谨的接口推断，拒绝任何 any 糊弄。
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 text-[11px] font-mono text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
              <Check class="w-3.5 h-3.5 text-emerald-500" />
              <span>IDE 智能联想零障碍</span>
            </div>
          </div>

          <!-- 3. 视口懒挂载与 60fps -->
          <div class="rounded-2xl border border-zinc-200/90 bg-white p-6 dark:border-zinc-800/90 dark:bg-zinc-900/60 shadow-sm flex flex-col justify-between">
            <div>
              <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/80 dark:text-emerald-400">
                <Zap class="h-5 w-5" />
              </div>
              <div class="text-[10px] font-mono text-zinc-400 font-semibold mb-1">03 / PERFORMANCE</div>
              <h3 class="text-base font-bold text-zinc-900 dark:text-zinc-100">
                60fps 视口懒休眠
              </h3>
              <p class="mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                密集 Canvas 与粒子内置 IntersectionObserver 视口感知，移出视野瞬间休眠释放 GPU，保障复杂中后台丝滑不掉帧。
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <Check class="w-3.5 h-3.5 text-emerald-500" />
              <span>无障碍减弱动画已适配</span>
            </div>
          </div>

          <!-- 4. 双核生态与场景拼装 -->
          <div class="rounded-2xl border border-zinc-200/90 bg-white p-6 dark:border-zinc-800/90 dark:bg-zinc-900/60 shadow-sm flex flex-col justify-between">
            <div>
              <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-950/80 dark:text-purple-400">
                <Layers class="h-5 w-5" />
              </div>
              <div class="text-[10px] font-mono text-zinc-400 font-semibold mb-1">04 / ECOSYSTEM</div>
              <h3 class="text-base font-bold text-zinc-900 dark:text-zinc-100">
                原子与全栈区块双核
              </h3>
              <p class="mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                232 款动效组件结合 109 款业务场景区块。小到按键微交互，大到完整的 AI 控制台或营销主页，快速组合成型。
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 text-[11px] font-mono text-purple-600 dark:text-purple-400 flex items-center gap-1">
              <Check class="w-3.5 h-3.5 text-emerald-500" />
              <span>全生命周期覆盖就绪</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
