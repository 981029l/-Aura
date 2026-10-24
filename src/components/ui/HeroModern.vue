<script setup lang="ts">
import { cn } from '@/lib/utils'
import WordRotate from './WordRotate.vue'
import CopySnippet from './CopySnippet.vue'
import Marquee from './Marquee.vue'
import { ArrowRight, Sparkles } from 'lucide-vue-next'

interface HeroModernProps {
  badgeText?: string
  titlePrefix?: string
  rotateWords?: string[]
  titleSuffix?: string
  description?: string
  copyCommand?: string
  class?: string
}

const props = withDefaults(defineProps<HeroModernProps>(), {
  badgeText: 'Aura UI 1.0 已发布',
  titlePrefix: '为 Vue 3 项目准备的',
  rotateWords: () => ['流畅', '好看', '易用', '可定制'],
  titleSuffix: '动效组件',
  description: '适合 AI 产品官网和 SaaS 营销页。每个组件都是独立的 .vue 文件，复制到项目中即可使用。',
  copyCommand: "import { cn } from '@/lib/utils'",
})

const partners = ['Northwind', 'Acme', 'Globex', 'Initech', 'Umbrella', 'Hooli', 'Stark', 'Wayne']
</script>

<template>
  <div :class="cn('relative w-full overflow-hidden py-16 sm:py-24 select-none', props.class)">
    <!-- 顶部环境光锥背景 -->
    <div class="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-full max-w-5xl rounded-full bg-gradient-to-tr from-blue-600/15 via-purple-600/20 to-emerald-500/15 blur-3xl" />

    <div class="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center flex flex-col items-center">
      <!-- 顶部公告药丸 -->
      <div class="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 backdrop-blur-md mb-6 hover:border-blue-500/40 transition-colors cursor-pointer">
        <Sparkles class="h-3.5 w-3.5" />
        <span>{{ props.badgeText }}</span>
        <span class="text-xs">→</span>
      </div>

      <!-- 核心大标题与 3D 轮播词 -->
      <h1 class="text-4xl sm:text-6xl font-black tracking-tight text-zinc-900 dark:text-white max-w-3xl leading-[1.15]">
        <span>{{ props.titlePrefix }}</span>
        <br class="hidden sm:inline" />
        <WordRotate :words="props.rotateWords" class="mx-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400" />
        <span>{{ props.titleSuffix }}</span>
      </h1>

      <!-- 辅助阐述文案 -->
      <p class="mt-6 max-w-2xl text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
        {{ props.description }}
      </p>

      <!-- 双行动按钮组 -->
      <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          class="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-zinc-900/10 hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition-all cursor-pointer"
        >
          <span>浏览组件</span>
          <ArrowRight class="h-4 w-4" />
        </button>

        <CopySnippet :code="props.copyCommand" />
      </div>

      <!-- 合作伙伴跑马灯徽标墙 -->
      <div class="mt-16 w-full max-w-4xl border-t border-zinc-200/80 pt-8 dark:border-zinc-800/80">
        <p class="text-xs font-mono font-semibold tracking-wider text-zinc-400 uppercase mb-5">
          客户 Logo（示例）
        </p>

        <Marquee :pause-on-hover="true" :speed="35" class="py-2">
          <div
            v-for="partner in partners"
            :key="partner"
            class="mx-6 flex items-center gap-2 text-sm font-black tracking-wider text-zinc-400 hover:text-zinc-900 dark:text-zinc-600 dark:hover:text-zinc-200 transition-colors cursor-default"
          >
            <span>✦</span>
            <span>{{ partner }}</span>
          </div>
        </Marquee>
      </div>
    </div>
  </div>
</template>
