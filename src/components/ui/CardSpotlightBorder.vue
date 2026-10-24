<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { Flame, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-vue-next'

export interface CardSpotlightBorderProps {
  title?: string
  subtitle?: string
  class?: string
}

const props = withDefaults(defineProps<CardSpotlightBorderProps>(), {
  title: '',
  subtitle: '',
})

const mouseX = ref(0)
const mouseY = ref(0)
const isHovered = ref(false)
const cardRef = ref<HTMLElement | null>(null)

function handleMouseMove(e: MouseEvent) {
  if (!cardRef.value) return
  const rect = cardRef.value.getBoundingClientRect()
  mouseX.value = e.clientX - rect.left
  mouseY.value = e.clientY - rect.top
}
</script>

<template>
  <div :class="cn('w-full max-w-xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6', props.class)">
    <!-- 头部看板 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-2.5">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400">
          <Flame class="h-5 w-5" />
        </div>
        <div>
          <span class="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
            {{ props.title || '聚光边框' }}
          </span>
          <span v-if="props.subtitle" class="text-xs text-zinc-400 font-mono">
            · {{ props.subtitle }}
          </span>
        </div>
      </div>

      <div class="flex items-center gap-1.5 text-xs font-mono text-orange-500">
        <Sparkles class="h-3.5 w-3.5" />
        <span>悬停效果</span>
      </div>
    </div>

    <!-- 聚光边框卡片展示区 (双层边框高光定位) -->
    <div class="flex justify-center py-2">
      <div
        ref="cardRef"
        @mousemove="handleMouseMove"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
        class="group relative w-full max-w-md rounded-3xl p-px overflow-hidden transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:scale-[1.01]"
      >
        <!-- 1. 外部跟随光标的聚光边框发光层 -->
        <div
          class="absolute inset-0 pointer-events-none transition-opacity duration-300 -z-10"
          :style="{
            background: isHovered
              ? `radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(249, 115, 22, 0.8), rgba(236, 72, 153, 0.4), transparent 70%)`
              : 'rgba(228, 228, 231, 0.6)',
          }"
        />

        <!-- 2. 卡片内部实体核心容器 -->
        <div class="relative w-full h-full rounded-[23px] bg-white dark:bg-zinc-950 p-6 space-y-5 overflow-hidden">
          <!-- 3. 卡片内衬微光漫射聚光 -->
          <div
            v-if="isHovered"
            class="absolute inset-0 pointer-events-none transition-opacity duration-300"
            :style="{
              background: `radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(249, 115, 22, 0.08), transparent 70%)`,
            }"
          />

          <!-- 顶部状态栏 -->
          <div class="flex items-center justify-between">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-mono font-bold border border-orange-500/20">
              <Zap class="h-3.5 w-3.5" />
              <span>DYNAMIC SPOTLIGHT</span>
            </span>
            <span class="text-xs font-mono text-zinc-400">FPS: 120</span>
          </div>

          <!-- 卡片主要标题与描述 -->
          <div class="space-y-2">
            <h4 class="text-lg font-black text-zinc-900 dark:text-white tracking-tight">
              团队协作套件
            </h4>
            <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-sans">
              文档、任务和讨论放在同一个地方，团队成员可以实时看到彼此的修改。
            </p>
          </div>

          <!-- 底部特性与行动按钮 -->
          <div class="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
            <div class="flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400">
              <ShieldCheck class="h-4 w-4" />
              <span>支持 50 人以内团队</span>
            </div>

            <button
              type="button"
              class="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-bold shadow-sm hover:opacity-90 transition-opacity cursor-pointer"
            >
              <span>查看详情</span>
              <ArrowRight class="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
