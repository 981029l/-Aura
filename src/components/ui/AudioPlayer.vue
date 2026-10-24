<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import { Play, Pause, RotateCcw, RotateCw, Volume2, VolumeX, Radio } from 'lucide-vue-next'

export interface AudioPlayerProps {
  title?: string
  artist?: string
  durationSec?: number
  class?: string
}

const props = withDefaults(defineProps<AudioPlayerProps>(), {
  title: '第 42 期 · 设计师如何做动效',
  artist: '设计漫谈',
  durationSec: 184, // 3分04秒
})

const isPlaying = ref(false)
const currentSec = ref(48)
const isMuted = ref(false)
const barCount = 36

// 预置频谱波形静态基准分布 (0.2 ~ 0.95)
const waveBars = [
  0.3, 0.5, 0.8, 0.4, 0.6, 0.9, 0.7, 0.3, 0.5, 0.85,
  0.65, 0.4, 0.7, 0.95, 0.8, 0.5, 0.6, 0.75, 0.9, 0.45,
  0.35, 0.6, 0.8, 0.55, 0.7, 0.9, 0.85, 0.4, 0.65, 0.75,
  0.5, 0.8, 0.6, 0.4, 0.3, 0.5,
]

let timer: any = null

function togglePlay() {
  isPlaying.value = !isPlaying.value
}

function seekToBar(index: number) {
  const percent = index / (barCount - 1)
  currentSec.value = Math.floor(percent * props.durationSec)
}

function skip(delta: number) {
  currentSec.value = Math.max(0, Math.min(props.durationSec, currentSec.value + delta))
}

function formatTime(sec: number) {
  const m = Math.floor(sec / 60)
  const s = Math.floor(sec % 60)
  return `${m}:${s < 10 ? '0' : ''}${s}`
}

const progressPercent = computed(() => {
  return (currentSec.value / props.durationSec) * 100
})

const activeBarIndex = computed(() => {
  return Math.floor((progressPercent.value / 100) * barCount)
})

onMounted(() => {
  timer = setInterval(() => {
    if (isPlaying.value) {
      if (currentSec.value < props.durationSec) {
        currentSec.value += 1
      } else {
        currentSec.value = 0
        isPlaying.value = false
      }
    }
  }, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div :class="cn('w-full max-w-xl rounded-3xl border border-zinc-200/90 bg-white/95 p-6 sm:p-7 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6', props.class)">
    <!-- 头部播客信息 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-3">
        <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/15">
          <Radio class="h-5 w-5" />
        </div>
        <div>
          <h4 class="font-bold text-sm text-zinc-900 dark:text-white line-clamp-1">
            {{ props.title }}
          </h4>
          <p class="text-xs text-zinc-400 font-mono mt-0.5">
            {{ props.artist }}
          </p>
        </div>
      </div>

      <span
        :class="[
          'px-2.5 py-1 rounded-full text-[10px] font-mono font-bold flex items-center gap-1.5 transition-colors',
          isPlaying
            ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 animate-pulse'
            : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400',
        ]"
      >
        <span class="h-1.5 w-1.5 rounded-full bg-current" />
        <span>{{ isPlaying ? 'PLAYING' : 'PAUSED' }}</span>
      </span>
    </div>

    <!-- 交互式拟态动态声波柱阵列 -->
    <div class="space-y-2.5">
      <div class="relative flex items-end justify-between gap-1 h-20 px-2 py-2 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/60 overflow-hidden">
        <div
          v-for="(bar, idx) in waveBars"
          :key="idx"
          @click="seekToBar(idx)"
          class="flex-1 flex flex-col justify-end h-full cursor-pointer group py-1"
          :title="`跳转至 ${formatTime(Math.floor((idx / (barCount - 1)) * props.durationSec))}`"
        >
          <div
            :class="[
              'w-full rounded-full origin-bottom transition-colors duration-200',
              idx <= activeBarIndex
                ? 'bg-blue-600 dark:bg-blue-500 shadow-sm'
                : 'bg-zinc-300/80 hover:bg-zinc-400 dark:bg-zinc-700/80 dark:hover:bg-zinc-600',
              isPlaying ? 'animate-wave-bounce' : 'transition-transform duration-[350ms] ease-out',
            ]"
            :style="{
              height: `${Math.max(16, bar * 100)}%`,
              animationDelay: `${(idx * 0.068) % 1.2}s`,
              animationDuration: `${0.65 + ((idx * 13) % 7) * 0.12}s`,
              transform: isPlaying ? undefined : 'scaleY(1)',
            }"
          />
        </div>
      </div>

      <!-- 时间指示器 -->
      <div class="flex items-center justify-between text-xs font-mono text-zinc-400 px-1">
        <span class="font-bold text-zinc-700 dark:text-zinc-300">{{ formatTime(currentSec) }}</span>
        <span>{{ formatTime(props.durationSec) }}</span>
      </div>
    </div>

    <!-- 底部播放控制器栏 -->
    <div class="flex items-center justify-between pt-1">
      <!-- 快速静音 -->
      <button
        type="button"
        @click="isMuted = !isMuted"
        class="p-2 rounded-xl text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 dark:hover:text-zinc-200 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
        :title="isMuted ? '取消静音' : '静音'"
      >
        <VolumeX v-if="isMuted" class="h-4 w-4 text-rose-500" />
        <Volume2 v-else class="h-4 w-4" />
      </button>

      <!-- 核心播放/暂停与快进快退按键群 -->
      <div class="flex items-center gap-3">
        <button
          type="button"
          @click="skip(-15)"
          class="p-2.5 rounded-xl text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
          title="快退 15 秒"
        >
          <RotateCcw class="h-4 w-4" />
        </button>

        <button
          type="button"
          @click="togglePlay"
          class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-500 active:scale-95 transition-all cursor-pointer"
          :title="isPlaying ? '暂停' : '播放'"
        >
          <Pause v-if="isPlaying" class="h-5 w-5" />
          <Play v-else class="h-5 w-5 ml-0.5" />
        </button>

        <button
          type="button"
          @click="skip(15)"
          class="p-2.5 rounded-xl text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
          title="快进 15 秒"
        >
          <RotateCw class="h-4 w-4" />
        </button>
      </div>

      <div class="w-8" />
    </div>
  </div>
</template>

<style scoped>
@keyframes audioWaveDance {
  0% {
    transform: scaleY(0.35);
  }
  28% {
    transform: scaleY(1.35);
  }
  55% {
    transform: scaleY(0.55);
  }
  78% {
    transform: scaleY(1.18);
  }
  100% {
    transform: scaleY(0.42);
  }
}

.animate-wave-bounce {
  animation: audioWaveDance ease-in-out infinite alternate;
}
</style>
