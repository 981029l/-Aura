<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'
import { Droplets, Sparkles, RefreshCw, Sliders } from 'lucide-vue-next'

export interface LiquidBlobProps {
  title?: string
  subtitle?: string
  class?: string
}

const props = withDefaults(defineProps<LiquidBlobProps>(), {
  title: '流体气泡',
  subtitle: '多个气泡相互融合，鼠标附近的气泡会被拉动',
})

const currentTheme = ref<'neon' | 'sunset' | 'cyber'>('neon')
const viscosity = ref(18) // 模糊半径控制粘滞度
const mousePos = ref({ x: 180, y: 140 })
const isHovering = ref(false)

const themes = {
  neon: {
    name: '青紫',
    blob1: 'bg-emerald-400',
    blob2: 'bg-teal-500',
    blob3: 'bg-cyan-400',
    blob4: 'bg-indigo-500',
    cursor: 'bg-emerald-300',
  },
  sunset: {
    name: '橙红',
    blob1: 'bg-rose-500',
    blob2: 'bg-orange-400',
    blob3: 'bg-amber-400',
    blob4: 'bg-purple-600',
    cursor: 'bg-rose-400',
  },
  cyber: {
    name: '蓝绿',
    blob1: 'bg-sky-500',
    blob2: 'bg-blue-600',
    blob3: 'bg-indigo-500',
    blob4: 'bg-fuchsia-500',
    cursor: 'bg-sky-400',
  },
}

const activeTheme = computed(() => themes[currentTheme.value])

function handleMouseMove(e: MouseEvent) {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  mousePos.value = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  }
}

function cycleTheme() {
  if (currentTheme.value === 'neon') currentTheme.value = 'sunset'
  else if (currentTheme.value === 'sunset') currentTheme.value = 'cyber'
  else currentTheme.value = 'neon'
}
</script>

<template>
  <div :class="cn('w-full max-w-xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6', props.class)">
    <!-- SVG Gooey 粘滞滤镜定义 -->
    <svg class="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
      <defs>
        <filter id="aura-gooey-filter">
          <feGaussianBlur in="SourceGraphic" :stdDeviation="viscosity" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9"
            result="gooey"
          />
          <feBlend in="SourceGraphic" in2="gooey" />
        </filter>
      </defs>
    </svg>

    <!-- 头部看板 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-2.5">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400">
          <Droplets class="h-5 w-5" />
        </div>
        <div>
          <h4 class="font-bold text-sm text-zinc-900 dark:text-white">
            {{ props.title }}
          </h4>
          <p class="text-xs text-zinc-400 font-mono">
            {{ props.subtitle }}
          </p>
        </div>
      </div>

      <button
        type="button"
        @click="cycleTheme"
        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-xs font-mono font-semibold text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
      >
        <RefreshCw class="h-3.5 w-3.5" />
        <span>{{ activeTheme.name.split(' ')[0] }}</span>
      </button>
    </div>

    <!-- 流体互动舞台 -->
    <div
      class="relative h-64 w-full rounded-2xl bg-zinc-950 overflow-hidden cursor-crosshair border border-zinc-800 shadow-inner"
      @mousemove="handleMouseMove"
      @mouseenter="isHovering = true"
      @mouseleave="isHovering = false"
    >
      <!-- 背景网格微光 -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      <!-- 应用 Gooey Filter 的气泡容器 -->
      <div class="relative w-full h-full [filter:url(#aura-gooey-filter)]">
        <!-- 气泡 1 (大球中心浮动) -->
        <div
          :class="[
            'absolute w-28 h-28 rounded-full opacity-90 transition-colors duration-500 animate-blob-1',
            activeTheme.blob1
          ]"
          style="top: 25%; left: 30%;"
        />

        <!-- 气泡 2 (右上绕转球) -->
        <div
          :class="[
            'absolute w-24 h-24 rounded-full opacity-90 transition-colors duration-500 animate-blob-2',
            activeTheme.blob2
          ]"
          style="top: 20%; right: 28%;"
        />

        <!-- 气泡 3 (底部横摆球) -->
        <div
          :class="[
            'absolute w-32 h-32 rounded-full opacity-90 transition-colors duration-500 animate-blob-3',
            activeTheme.blob3
          ]"
          style="bottom: 15%; left: 42%;"
        />

        <!-- 气泡 4 (侧翼微形变小球) -->
        <div
          :class="[
            'absolute w-20 h-20 rounded-full opacity-90 transition-colors duration-500 animate-blob-4',
            activeTheme.blob4
          ]"
          style="bottom: 25%; right: 35%;"
        />

        <!-- 鼠标引力流体球 (光标靠近时与周围气泡有机粘滞拉丝) -->
        <div
          v-if="isHovering"
          :class="[
            'absolute w-20 h-20 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-75',
            activeTheme.cursor
          ]"
          :style="{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
          }"
        />
      </div>

      <!-- 舞台中央指引提示 -->
      <div
        v-if="!isHovering"
        class="absolute inset-0 flex items-center justify-center pointer-events-none text-zinc-400/80 text-xs font-mono gap-1.5"
      >
        <Sparkles class="h-4 w-4 text-teal-400 animate-pulse" />
        <span>移动鼠标靠近气泡</span>
      </div>
    </div>

    <!-- 底部参数微调条 -->
    <div class="flex items-center justify-between text-xs font-mono text-zinc-500">
      <div class="flex items-center gap-2">
        <Sliders class="h-3.5 w-3.5 text-teal-500" />
        <span>融合程度：</span>
        <input
          v-model.number="viscosity"
          type="range"
          min="10"
          max="30"
          class="w-24 h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
        />
        <span class="font-bold text-zinc-700 dark:text-zinc-300">{{ viscosity }}px</span>
      </div>

      <div class="text-zinc-400 text-[11px]">
        <span>SVG 滤镜实现</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes blob1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -20px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}

@keyframes blob2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-35px, 25px) scale(0.95); }
  66% { transform: translate(25px, -15px) scale(1.08); }
}

@keyframes blob3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-25px, -25px) scale(1.05); }
  66% { transform: translate(30px, 15px) scale(0.92); }
}

@keyframes blob4 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-20px, -30px) scale(1.12); }
}

.animate-blob-1 { animation: blob1 7s infinite ease-in-out; }
.animate-blob-2 { animation: blob2 8s infinite ease-in-out; }
.animate-blob-3 { animation: blob3 9s infinite ease-in-out; }
.animate-blob-4 { animation: blob4 6s infinite ease-in-out; }
</style>
