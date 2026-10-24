<script setup lang="ts">
import { cn } from '@/lib/utils'
import BorderBeam from './BorderBeam.vue'
import { Zap, Shield, Cpu, Globe } from 'lucide-vue-next'

interface FeatureBentoBlockProps {
  title?: string
  subtitle?: string
  class?: string
}

const props = withDefaults(defineProps<FeatureBentoBlockProps>(), {
  title: '为什么选择 Aura UI',
  subtitle: '复制即用、类型完整，并且同时支持浅色和深色模式',
})
</script>

<template>
  <div :class="cn('w-full py-12 select-none', props.class)">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <!-- 区块头部文案 -->
      <div class="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          FEATURE HIGHLIGHTS
        </span>
        <h2 class="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
          {{ props.title }}
        </h2>
        <p class="text-sm text-zinc-500 leading-relaxed font-normal">
          {{ props.subtitle }}
        </p>
      </div>

      <!-- Bento 网格容器 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- 卡片 1: 跨 2 列大卡 (带流光发光边框 BorderBeam) -->
        <div class="md:col-span-2 relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/90 p-8 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/90">
          <BorderBeam :size="250" :duration="8" :border-width="1.5" color-from="#3b82f6" color-to="#10b981" />
          
          <div class="relative z-10 flex flex-col justify-between h-full space-y-6">
            <div class="space-y-2 max-w-md">
              <div class="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Zap class="h-5 w-5" />
              </div>
              <h3 class="text-xl font-bold text-zinc-900 dark:text-white">
                复制单个文件即可使用
              </h3>
              <p class="text-xs text-zinc-500 leading-relaxed">
                动画关键帧写在组件的 &lt;style scoped&gt; 中，大多数组件不需要修改 tailwind.config.js，源码复制后可以随意修改。
              </p>
            </div>

            <!-- 内部交互图解代码窗 -->
            <div class="rounded-xl border border-zinc-200/80 bg-zinc-50 p-4 font-mono text-[11px] text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
              <div class="flex items-center gap-1.5 mb-2">
                <span class="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                <span class="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                <span class="ml-2 text-[10px] text-zinc-400">components/ui/BorderBeam.vue</span>
              </div>
              <code>&lt;BorderBeam :duration="8" :border-width="1.5" /&gt;</code>
            </div>
          </div>
        </div>

        <!-- 卡片 2: 1 列卡片 (硬件加速) -->
        <div class="relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/90 p-8 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/90">
          <div class="space-y-3">
            <div class="h-10 w-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
              <Cpu class="h-5 w-5" />
            </div>
            <h3 class="text-lg font-bold text-zinc-900 dark:text-white">
              注重性能
            </h3>
            <p class="text-xs text-zinc-500 leading-relaxed">
              动画主要使用 transform 和 opacity，Canvas 类组件在卸载时会停止绘制。
            </p>
          </div>
        </div>

        <!-- 卡片 3: 1 列卡片 -->
        <div class="relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/90 p-8 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/90">
          <div class="space-y-3">
            <div class="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Shield class="h-5 w-5" />
            </div>
            <h3 class="text-lg font-bold text-zinc-900 dark:text-white">
              TypeScript 类型
            </h3>
            <p class="text-xs text-zinc-500 leading-relaxed">
              Props 和事件都有类型定义，编辑器中可以自动补全。
            </p>
          </div>
        </div>

        <!-- 卡片 4: 跨 2 列卡片 (双模自适应) -->
        <div class="md:col-span-2 relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/90 p-8 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/90">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div class="space-y-2 max-w-sm">
              <div class="h-10 w-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Globe class="h-5 w-5" />
              </div>
              <h3 class="text-lg font-bold text-zinc-900 dark:text-white">
                浅色和深色模式
              </h3>
              <p class="text-xs text-zinc-500 leading-relaxed">
                每个组件都配置了浅色和深色两套配色，页面切换 dark 模式时自动跟随。
              </p>
            </div>

            <div class="flex items-center gap-3">
              <div class="px-4 py-2.5 rounded-xl border border-zinc-200 bg-white shadow-sm text-xs font-semibold text-zinc-800">
                ☀️ 浅色
              </div>
              <div class="px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-950 shadow-sm text-xs font-semibold text-zinc-200">
                🌙 深色
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
