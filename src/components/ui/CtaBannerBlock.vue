<script setup lang="ts">
import { cn } from '@/lib/utils'
import HoldToConfirm from './HoldToConfirm.vue'
import SparklesCore from './SparklesCore.vue'
import BorderBeam from './BorderBeam.vue'
import { Rocket, ArrowRight } from 'lucide-vue-next'

interface CtaBannerBlockProps {
  title?: string
  description?: string
  class?: string
}

const props = withDefaults(defineProps<CtaBannerBlockProps>(), {
  title: '给你的产品加上合适的动效',
  description: '挑选需要的组件，复制源码到项目中即可使用，不需要额外的构建配置。',
})

function handleConfirmed() {
  console.log('Confirmed CTA!')
}
</script>

<template>
  <div :class="cn('w-full py-16 select-none', props.class)">
    <div class="mx-auto max-w-5xl px-4 sm:px-6">
      <div class="relative overflow-hidden rounded-3xl border border-zinc-200/90 bg-gradient-to-b from-zinc-900 to-black p-8 sm:p-16 text-center shadow-2xl dark:border-zinc-800">
        <!-- 跑马渐变流光发丝边框 -->
        <BorderBeam :size="300" :duration="7" :border-width="1.5" color-from="#38bdf8" color-to="#818cf8" />

        <!-- 内部微星芒漂浮粒子 -->
        <SparklesCore
          :particle-density="70"
          particle-color="#38bdf8"
          :min-size="0.6"
          :max-size="1.6"
          :speed="0.8"
          class="absolute inset-0 pointer-events-none opacity-40"
        />

        <!-- 顶部天灯破晓光锥 -->
        <div class="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-52 w-full max-w-lg rounded-full bg-cyan-500/20 blur-3xl" />

        <div class="relative z-10 max-w-2xl mx-auto space-y-6">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/10 text-cyan-300 border border-white/10 backdrop-blur-md">
            <Rocket class="h-3.5 w-3.5" />
            <span>START BUILDING TODAY</span>
          </div>

          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            {{ props.title }}
          </h2>

          <p class="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
            {{ props.description }}
          </p>

          <!-- 交互操作按钮群 -->
          <div class="pt-4 flex flex-wrap items-center justify-center gap-4">
            <HoldToConfirm
              text="长按开始部署"
              completed-text="✓ 已开始部署"
              :duration="1200"
              @confirm="handleConfirmed"
            />

            <a
              href="#/docs"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold backdrop-blur-md transition-all active:scale-95"
            >
              <span>查看文档</span>
              <ArrowRight class="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
