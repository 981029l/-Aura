<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { X, ArrowUpRight, Sparkles, Layers, ShieldCheck, Heart } from 'lucide-vue-next'

export interface MorphingDialogProps {
  title?: string
  subtitle?: string
  tag?: string
  description?: string
  class?: string
}

const props = withDefaults(defineProps<MorphingDialogProps>(), {
  title: 'Aura Motion Engine 3.5',
  subtitle: 'Vue 3 动效组件库',
  tag: 'PRO FEATURE',
  description:
    '把常见的交互动效做成独立的 .vue 组件，例如拖拽、弹性回弹和粒子背景。复制到项目中即可使用，也可以按需修改源码。',
})

const isOpen = ref(false)
const isLiked = ref(false)

function open() {
  isOpen.value = true
}

function close() {
  isOpen.value = false
}
</script>

<template>
  <div :class="cn('relative flex flex-col items-center justify-center p-6 font-sans select-none', props.class)">
    <!-- 1. 未展开状态：触发卡片 -->
    <div
      @click="open"
      class="group relative w-full max-w-sm rounded-3xl border border-zinc-200/90 bg-white/95 p-5 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 dark:border-zinc-800/90 dark:bg-zinc-950/95 cursor-pointer"
    >
      <!-- 卡片顶部封面预览区 -->
      <div class="relative h-44 w-full overflow-hidden rounded-2xl bg-gradient-to-tr from-sky-500 via-indigo-600 to-purple-600 p-4 flex flex-col justify-between text-white">
        <div class="flex items-center justify-between">
          <span class="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest bg-white/20 backdrop-blur-md">
            {{ props.tag }}
          </span>
          <div class="h-8 w-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
            <ArrowUpRight class="h-4 w-4" />
          </div>
        </div>

        <div>
          <div class="flex items-center gap-1.5 text-xs text-white/80 font-mono mb-1">
            <Sparkles class="h-3.5 w-3.5 text-amber-300" />
            <span>SFC Zero-Config</span>
          </div>
          <h4 class="text-lg font-black tracking-tight leading-snug">
            {{ props.title }}
          </h4>
        </div>
      </div>

      <!-- 卡片底部简述与行动提示 -->
      <div class="mt-4 flex items-center justify-between">
        <div>
          <p class="text-xs font-semibold text-zinc-900 dark:text-white">
            {{ props.subtitle }}
          </p>
          <span class="text-[11px] text-zinc-400 font-mono">点击卡片展开详情</span>
        </div>

        <button
          type="button"
          class="px-3 py-1.5 rounded-xl bg-zinc-900 text-white text-xs font-semibold hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition-colors"
        >
          展开详情
        </button>
      </div>
    </div>

    <!-- 2. 全屏/居中弹出展开模态框 -->
    <Teleport to="body">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      >
        <!-- 背景高斯虚化遮罩 (淡入) -->
        <div
          @click="close"
          class="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
        />

        <!-- 展开形变详情卡片主容器 (对标 iOS 风格物理平滑展开) -->
        <div
          class="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-zinc-200/90 bg-white/95 shadow-2xl backdrop-blur-2xl dark:border-zinc-800/90 dark:bg-zinc-950/95 animate-scale-up"
        >
          <!-- 展开后的大横幅 -->
          <div class="relative h-56 w-full bg-gradient-to-tr from-sky-500 via-indigo-600 to-purple-600 p-6 flex flex-col justify-between text-white">
            <div class="flex items-center justify-between">
              <span class="px-3 py-1 rounded-full text-xs font-bold tracking-widest bg-white/20 backdrop-blur-md">
                {{ props.tag }}
              </span>

              <!-- 关闭按钮 -->
              <button
                type="button"
                @click="close"
                class="h-9 w-9 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-md flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X class="h-5 w-5" />
              </button>
            </div>

            <div>
              <div class="flex items-center gap-1.5 text-xs text-white/80 font-mono mb-1">
                <Sparkles class="h-4 w-4 text-amber-300" />
                <span>Next-Gen Vue 3 Motion System</span>
              </div>
              <h3 class="text-2xl font-black tracking-tight">
                {{ props.title }}
              </h3>
            </div>
          </div>

          <!-- 展开内容正文区 -->
          <div class="p-6 space-y-5 max-h-[60vh] overflow-y-auto">
            <p class="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
              {{ props.description }}
            </p>

            <div class="grid grid-cols-2 gap-3 pt-1">
              <div class="p-3 rounded-2xl border border-zinc-200/80 bg-zinc-50/60 dark:border-zinc-800/80 dark:bg-zinc-900/40">
                <div class="flex items-center gap-2 text-sky-600 dark:text-sky-400 mb-1">
                  <Layers class="h-4 w-4" />
                  <span class="text-xs font-bold font-mono">单文件组件</span>
                </div>
                <p class="text-[11px] text-zinc-400">样式和动画关键帧都写在组件文件里。</p>
              </div>

              <div class="p-3 rounded-2xl border border-zinc-200/80 bg-zinc-50/60 dark:border-zinc-800/80 dark:bg-zinc-900/40">
                <div class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-1">
                  <ShieldCheck class="h-4 w-4" />
                  <span class="text-xs font-bold font-mono">TypeScript</span>
                </div>
                <p class="text-[11px] text-zinc-400">Props 和事件都有类型定义。</p>
              </div>
            </div>

            <!-- 底部操作栏 -->
            <div class="pt-3 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800/80">
              <button
                type="button"
                @click="isLiked = !isLiked"
                :class="[
                  'inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer',
                  isLiked
                    ? 'bg-rose-500/10 text-rose-500'
                    : 'text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 dark:text-zinc-400',
                ]"
              >
                <Heart :class="['h-4 w-4', isLiked && 'fill-rose-500']" />
                <span>{{ isLiked ? '已收藏' : '喜欢' }}</span>
              </button>

              <button
                type="button"
                @click="close"
                class="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-500/20 active:scale-95 transition-all cursor-pointer"
              >
                知道了
              </button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes scaleUp {
  from { opacity: 0; transform: scale(0.92) translateY(12px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.animate-scale-up {
  animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
