const n=`<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import AnimatedCounter from '@/components/ui/AnimatedCounter.vue'
import TextTicker from '@/components/ui/TextTicker.vue'
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-white text-zinc-950 py-20 sm:py-28 lg:py-36 dark:bg-black dark:text-white transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 瑞士风格顶端分类与年份 -->
      <div class="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4 text-xs font-mono uppercase tracking-widest text-zinc-400">
        <span>ARCHITECTURAL SPECIFICATION · V3.5</span>
        <span>BERLIN / TOKYO / SF · 2026</span>
      </div>

      <!-- 巨型无衬线排版标题 -->
      <div class="mt-12 text-left">
        <h1 class="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.95]">
          RADICAL<br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 via-zinc-800 to-black dark:from-zinc-500 dark:via-zinc-200 dark:to-white">
            SIMPLICITY
          </span><br />
          INTERFACE.
        </h1>
      </div>

      <!-- 描述文案与大字号指标横排 -->
      <div class="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-zinc-200 dark:border-zinc-800 pt-8">
        <div class="lg:col-span-5 text-left">
          <p class="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
            摒弃多余的视觉噪点与浮夸装饰。我们坚持以最严格的排版网格、高对比度动态字重与原生 CSS 变换，为企业级复杂系统提供极致的克制美感与毫秒响应速度。
          </p>

          <div class="mt-8 flex items-center gap-6">
            <a
              href="#explore"
              class="group inline-flex items-center gap-1.5 text-sm font-bold border-b-2 border-zinc-950 dark:border-white pb-0.5 hover:opacity-70 transition-opacity"
            >
              <span>EXPLORE DESIGN TOKENS</span>
              <ArrowUpRight class="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#manifesto"
              class="text-sm font-mono text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              READ THE MANIFESTO
            </a>
          </div>
        </div>

        <!-- 动态数字计数器网格：集成 AnimatedCounter 原子组件 -->
        <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div class="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-left">
            <div class="text-3xl sm:text-4xl font-black font-mono tracking-tight text-zinc-900 dark:text-white">
              <AnimatedCounter :value="109" :duration="1800" />
            </div>
            <div class="mt-2 text-xs font-mono uppercase text-zinc-500">Composed Blocks</div>
          </div>

          <div class="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-left">
            <div class="text-3xl sm:text-4xl font-black font-mono tracking-tight text-zinc-900 dark:text-white">
              <AnimatedCounter :value="182" :duration="2000" />
            </div>
            <div class="mt-2 text-xs font-mono uppercase text-zinc-500">Atomic Motion UI</div>
          </div>

          <div class="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-left col-span-2 sm:col-span-1">
            <div class="text-3xl sm:text-4xl font-black font-mono tracking-tight text-emerald-500">
              0.00ms
            </div>
            <div class="mt-2 text-xs font-mono uppercase text-zinc-500">Runtime Runtime Overhead</div>
          </div>
        </div>
      </div>

      <!-- 动态行情滚动条：集成 TextTicker 原子组件 -->
      <div class="mt-12 w-full flex justify-center">
        <TextTicker class="w-full !max-w-full shadow-none !border-zinc-200 dark:!border-zinc-800" />
      </div>
    </div>
  </div>
</template>
`;export{n as default};
