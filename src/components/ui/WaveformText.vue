<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import { Waves, Sparkles, Sliders, Play, Pause } from 'lucide-vue-next'

export interface WaveformTextProps {
  title?: string
  subtitle?: string
  text?: string
  class?: string
}

const props = withDefaults(defineProps<WaveformTextProps>(), {
  title: '',
  subtitle: '',
  text: 'AURA·UI·KINETIC·TYPOGRAPHY·EXPANSION',
})

const isPlaying = ref(true)
const amplitude = ref(16) // 振幅像素
const frequency = ref(0.28) // 频率
const speed = ref(4) // 速度倍率

const characters = computedChars()

function computedChars() {
  return props.text.split('').map((char, index) => ({
    char,
    offsetY: 0,
    index,
  }))
}

const charList = ref(characters)
let animationFrameId: number | null = null

function animate() {
  if (isPlaying.value) {
    const time = Date.now() / (1000 / speed.value)
    charList.value = charList.value.map(c => {
      // 正弦谐波方程
      const y = Math.sin(time + c.index * frequency.value) * amplitude.value
      return {
        ...c,
        offsetY: Number(y.toFixed(2)),
      }
    })
  }

  animationFrameId = requestAnimationFrame(animate)
}

function handleCharHover(index: number) {
  // 鼠标触碰时对邻近字符施加脉冲扰动
  charList.value = charList.value.map(c => {
    const dist = Math.abs(c.index - index)
    if (dist <= 3) {
      const impulse = (4 - dist) * 12
      return { ...c, offsetY: c.offsetY - impulse }
    }
    return c
  })
}

onMounted(() => {
  animationFrameId = requestAnimationFrame(animate)
})

onUnmounted(() => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
})
</script>

<template>
  <div :class="cn('w-full max-w-xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6', props.class)">
    <!-- 头部看板 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-2.5">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
          <Waves class="h-5 w-5" />
        </div>
        <div>
          <span class="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
            {{ props.title || '波形文字' }}
          </span>
          <span v-if="props.subtitle" class="text-xs text-zinc-400 font-mono">
            · {{ props.subtitle }}
          </span>
        </div>
      </div>

      <div class="flex items-center gap-1.5 text-xs font-mono text-sky-600 dark:text-sky-400">
        <Sparkles class="h-3.5 w-3.5" />
        <span>正弦波动画</span>
      </div>
    </div>

    <!-- 正弦波动态文字舞台 -->
    <div class="relative h-44 rounded-2xl border border-zinc-200/80 bg-gradient-to-b from-sky-500/5 to-transparent dark:border-zinc-800/80 dark:bg-zinc-950 flex items-center justify-center overflow-hidden px-4">
      <!-- 极坐标网格背景 -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      <!-- 逐字正弦振荡 -->
      <div class="relative z-10 flex items-center justify-center flex-wrap gap-x-1 sm:gap-x-1.5 cursor-pointer">
        <span
          v-for="c in charList"
          :key="c.index"
          @mouseenter="handleCharHover(c.index)"
          :class="[
            'inline-block font-mono text-base sm:text-lg font-black transition-transform duration-75',
            c.char === '·'
              ? 'text-sky-400 opacity-60'
              : 'text-zinc-900 dark:text-white hover:text-sky-500 dark:hover:text-sky-400 hover:scale-125'
          ]"
          :style="{
            transform: `translateY(${c.offsetY}px)`,
          }"
        >
          {{ c.char }}
        </span>
      </div>
    </div>

    <!-- 底部控制面板与物理滑块 -->
    <div class="space-y-3 pt-1">
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono text-zinc-500">
        <!-- 振幅调节 -->
        <div class="space-y-1">
          <div class="flex justify-between">
            <span class="flex items-center gap-1"><Sliders class="h-3 w-3" /> 振幅</span>
            <span class="font-bold text-zinc-800 dark:text-zinc-200">{{ amplitude }}px</span>
          </div>
          <input
            v-model.number="amplitude"
            type="range"
            min="4"
            max="32"
            class="w-full h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-sky-500"
          />
        </div>

        <!-- 频率调节 -->
        <div class="space-y-1">
          <div class="flex justify-between">
            <span>频率</span>
            <span class="font-bold text-zinc-800 dark:text-zinc-200">{{ frequency }}</span>
          </div>
          <input
            v-model.number="frequency"
            type="range"
            min="0.1"
            max="0.8"
            step="0.02"
            class="w-full h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-sky-500"
          />
        </div>

        <!-- 播放控制 -->
        <div class="flex items-end justify-end">
          <button
            type="button"
            @click="isPlaying = !isPlaying"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
          >
            <Pause v-if="isPlaying" class="h-3.5 w-3.5" />
            <Play v-else class="h-3.5 w-3.5" />
            <span>{{ isPlaying ? '暂停' : '继续' }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
