<script setup lang="ts">
import { ArrowRight, Sparkles, Layers, Zap, Copy, Check, ShieldCheck, Repeat, Mic, User, Database, Activity } from 'lucide-vue-next'
import { COMPONENTS_DATA, getLastVisitedDocId } from '@/data/components'
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
import { ref } from 'vue'

const homeBeamContainer = ref<HTMLDivElement | null>(null)
const homeBeamUser = ref<HTMLDivElement | null>(null)
const homeBeamAi = ref<HTMLDivElement | null>(null)
const homeBeamDb = ref<HTMLDivElement | null>(null)


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
</script>

<template>
  <div class="relative overflow-hidden">
    <!-- ================= 1. HERO 科技大秀场 ================= -->
    <section class="relative min-h-[85vh] flex flex-col items-center justify-center px-4 pt-16 pb-24 text-center overflow-hidden">
      <!-- 3D 复古科技网格作为 Hero 纵深背景 -->
      <RetroGrid :angle="65" :opacity="0.45" />

      <!-- 顶部徽章 Badge -->
      <div class="relative z-10 mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-zinc-800 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-200">
        <Sparkles class="h-3.5 w-3.5 text-blue-500" />
        <ShinyText text="面向 Vue 3 的动效组件库" />
        <span class="rounded-full bg-blue-500/10 px-1.5 py-0.5 text-[10px] text-blue-600 dark:text-blue-400">
          v1.0
        </span>
      </div>

      <!-- 核心大标题 -->
      <h1 class="relative z-10 max-w-4xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.18] sm:leading-tight [text-wrap:balance]">
        <span class="inline-block">为 Vue 3 精心打造的</span>
        <span class="block mt-1 sm:mt-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent dark:from-sky-400 dark:via-blue-500 dark:to-indigo-400">
          动效组件库
        </span>
      </h1>

      <!-- 痛点与定位描述 -->
      <p class="relative z-10 mx-auto mt-6 max-w-2xl text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
        适合 <strong>AI 产品官网、SaaS 营销页和个人主页</strong>的动效组件。<br class="hidden sm:inline" />
        每个组件是一个独立的 .vue 文件，复制到项目中即可使用和修改。
      </p>

      <!-- 核心行动按钮 (CTA) -->
      <div class="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4">
        <router-link :to="'/docs/' + getLastVisitedDocId()">
          <ShimmerButton shimmer-color="#60a5fa" class="h-12 px-8 text-base">
            <span>浏览组件</span>
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

      <!-- Hero 区域核心动态卡片（升级为标准 macOS 代码终端视窗，使 BorderBeam 成为天然的环绕流光高光） -->
      <div class="relative z-10 mt-12 w-full max-w-2xl text-left">
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

    <!-- ================= 4. 旗舰极光天顶聚光灯展示 ================= -->
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

    <!-- ================= 4. 为什么选择 AURA UI ================= -->
    <section class="border-t border-zinc-200/80 bg-zinc-50/50 py-20 dark:border-zinc-800/80 dark:bg-zinc-950/40">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-sm">
            <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/80 dark:text-blue-400">
              <Copy class="h-5 w-5" />
            </div>
            <h3 class="text-lg font-bold text-zinc-900 dark:text-zinc-100">
              复制源码使用
            </h3>
            <p class="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              组件不通过 npm 包分发。把源码复制到项目的 src/components/ui 目录，之后可以随意修改。
            </p>
          </div>

          <div class="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-sm">
            <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/80 dark:text-emerald-400">
              <Zap class="h-5 w-5" />
            </div>
            <h3 class="text-lg font-bold text-zinc-900 dark:text-zinc-100">
              单文件自包含
            </h3>
            <p class="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              大部分组件的动画关键帧写在组件文件内部，不需要额外修改 tailwind.config.js。
            </p>
          </div>

          <div class="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-sm">
            <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-950/80 dark:text-purple-400">
              <Sparkles class="h-5 w-5" />
            </div>
            <h3 class="text-lg font-bold text-zinc-900 dark:text-zinc-100">
              支持浅色和深色模式
            </h3>
            <p class="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              每个组件都分别配置了浅色和深色两套配色，页面切换 dark 模式时自动跟随。
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
