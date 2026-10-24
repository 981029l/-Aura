<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { Terminal, Sparkles, RefreshCw } from 'lucide-vue-next'

export interface GlitchTextProps {
  text?: string
  subtext?: string
  speed?: 'normal' | 'fast' | 'slow'
  class?: string
}

const props = withDefaults(defineProps<GlitchTextProps>(), {
  text: 'CYBER_SYSTEM_V3',
  subtext: '红蓝色分离的故障效果',
  speed: 'normal',
})

const isManualGlitching = ref(false)

function triggerBurst() {
  isManualGlitching.value = true
  setTimeout(() => {
    isManualGlitching.value = false
  }, 1200)
}
</script>

<template>
  <div :class="cn('w-full max-w-lg rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6', props.class)">
    <!-- 头部说明 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-2.5">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
          <Terminal class="h-5 w-5" />
        </div>
        <div>
          <h4 class="font-bold text-sm text-zinc-900 dark:text-white">
            故障风文字
          </h4>
          <p class="text-xs text-zinc-400 font-mono">
            {{ props.subtext }}
          </p>
        </div>
      </div>

      <button
        type="button"
        @click="triggerBurst"
        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-xs font-mono font-semibold text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
      >
        <RefreshCw :class="['h-3.5 w-3.5', isManualGlitching && 'animate-spin']" />
        <span>抖动中</span>
      </button>
    </div>

    <!-- 故障文字呈现主区域 -->
    <div
      class="relative h-44 w-full overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-950 p-6 flex flex-col items-center justify-center group cursor-pointer"
      @click="triggerBurst"
    >
      <!-- 背景科技扫描线 -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px] pointer-events-none opacity-40 z-10" />

      <!-- 核心色散文字 -->
      <div
        :class="[
          'glitch-text relative font-mono text-3xl sm:text-4xl font-black uppercase tracking-widest text-white transition-transform',
          isManualGlitching ? 'glitch-burst' : 'group-hover:scale-105',
        ]"
        :data-text="props.text"
      >
        {{ props.text }}
      </div>

      <!-- 底部矩阵编码徽标 -->
      <div class="absolute bottom-3 flex items-center gap-2 text-[10px] font-mono text-cyan-400/80 z-20">
        <Sparkles class="h-3 w-3 text-cyan-400" />
        <span>HEX: 0x7F402 · CHROMA SPLIT ENABLED</span>
      </div>
    </div>

    <!-- 底部状态说明栏 -->
    <div class="flex items-center justify-between text-xs font-mono text-zinc-400 pt-1">
      <span>颜色：青色 / 洋红</span>
      <span class="text-zinc-600 dark:text-zinc-400">悬停或点击时抖动更明显</span>
    </div>
  </div>
</template>

<style scoped>
.glitch-text {
  position: relative;
  display: inline-block;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

/* 青色通道错位 */
.glitch-text::before {
  left: 2px;
  text-shadow: -2px 0 #06b6d4;
  animation: glitch-anim-1 2.5s infinite linear alternate-reverse;
}

/* 洋红通道错位 */
.glitch-text::after {
  left: -2px;
  text-shadow: 2px 0 #f43f5e;
  animation: glitch-anim-2 3s infinite linear alternate-reverse;
}

/* 高频手动扰动态 */
.glitch-burst::before {
  animation: glitch-anim-1 0.4s infinite linear alternate-reverse !important;
}
.glitch-burst::after {
  animation: glitch-anim-2 0.3s infinite linear alternate-reverse !important;
}

@keyframes glitch-anim-1 {
  0% { clip-path: inset(20% 0 60% 0); transform: translate(-3px, -1px); }
  20% { clip-path: inset(60% 0 10% 0); transform: translate(3px, 1px); }
  40% { clip-path: inset(10% 0 70% 0); transform: translate(-2px, 2px); }
  60% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -2px); }
  80% { clip-path: inset(30% 0 40% 0); transform: translate(-1px, 1px); }
  100% { clip-path: inset(50% 0 30% 0); transform: translate(1px, -1px); }
}

@keyframes glitch-anim-2 {
  0% { clip-path: inset(15% 0 65% 0); transform: translate(3px, 1px); }
  20% { clip-path: inset(75% 0 15% 0); transform: translate(-3px, -1px); }
  40% { clip-path: inset(25% 0 55% 0); transform: translate(2px, -2px); }
  60% { clip-path: inset(45% 0 35% 0); transform: translate(-2px, 2px); }
  80% { clip-path: inset(5% 0 85% 0); transform: translate(1px, -1px); }
  100% { clip-path: inset(65% 0 25% 0); transform: translate(-1px, 1px); }
}
</style>
