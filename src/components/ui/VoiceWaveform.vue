<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { cn } from '@/lib/utils'
import { Mic, MicOff, Volume2, Sparkles, Activity, RefreshCw } from 'lucide-vue-next'

export interface VoiceWaveformProps {
  title?: string
  subtitle?: string
  barCount?: number
  class?: string
}

const props = withDefaults(defineProps<VoiceWaveformProps>(), {
  title: '语音波形',
  subtitle: '柱条随声音跳动，可切换聆听、思考和回复状态',
  barCount: 32,
})

const isRecording = ref(true)
const sensitivity = ref(75)
const currentMode = ref<'streaming' | 'listening' | 'processing'>('streaming')
const decibels = ref(-18.4)
const sampleRate = '48 kHz / 24-bit'

// 频段采样柱的高度数组
const barHeights = ref<number[]>([])

for (let i = 0; i < props.barCount; i++) {
  barHeights.value.push(20 + Math.random() * 40)
}

let animationId: number | null = null

function updateWaveform() {
  if (isRecording.value) {
    const time = Date.now() / 150
    const factor = sensitivity.value / 100

    barHeights.value = barHeights.value.map((_, idx) => {
      // 复合正弦波叠加高频噪声模拟真实人声共振
      const wave1 = Math.sin(time + idx * 0.35)
      const wave2 = Math.cos(time * 0.7 - idx * 0.2)
      const noise = (Math.random() - 0.5) * 0.3
      const normalized = Math.max(0.1, (Math.abs(wave1 * 0.6 + wave2 * 0.4) + noise) * factor)
      return Math.min(100, Math.max(8, normalized * 100))
    })

    // 动态分贝模拟
    const avg = barHeights.value.reduce((a, b) => a + b, 0) / barHeights.value.length
    decibels.value = Number((-45 + (avg / 100) * 35).toFixed(1))
  } else {
    // 静音/停止状态降落至低电平
    barHeights.value = barHeights.value.map(h => Math.max(6, h * 0.88))
    decibels.value = -60.0
  }

  animationId = requestAnimationFrame(updateWaveform)
}

onMounted(() => {
  animationId = requestAnimationFrame(updateWaveform)
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
})

function toggleRecording() {
  isRecording.value = !isRecording.value
}

function cycleMode() {
  if (currentMode.value === 'streaming') currentMode.value = 'listening'
  else if (currentMode.value === 'listening') currentMode.value = 'processing'
  else currentMode.value = 'streaming'
}

const statusBadge = computed(() => {
  if (!isRecording.value) {
    return { text: '已暂停', color: 'bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400' }
  }
  switch (currentMode.value) {
    case 'streaming':
      return { text: '回复中', color: 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400' }
    case 'listening':
      return { text: '聆听中', color: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400' }
    case 'processing':
      return { text: '思考中', color: 'bg-amber-500/15 text-amber-600 dark:text-amber-400' }
  }
})
</script>

<template>
  <div :class="cn('w-full max-w-xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6', props.class)">
    <!-- 头部指标与状态栏 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-2.5">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
          <Activity class="h-5 w-5" />
        </div>
        <div>
          <span class="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
            {{ props.title || '实时语音波形' }}
          </span>
          <span v-if="props.subtitle" class="text-xs text-zinc-400 font-mono">
            · {{ props.subtitle }}
          </span>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <span :class="['px-2.5 py-1 rounded-full text-xs font-mono font-semibold transition-colors', statusBadge.color]">
          {{ statusBadge.text }}
        </span>
      </div>
    </div>

    <!-- 动态频段波形视窗 -->
    <div class="relative rounded-xl border border-zinc-200/70 bg-gradient-to-b from-zinc-50/80 to-zinc-100/50 p-6 dark:border-zinc-800/70 dark:from-zinc-900/60 dark:to-zinc-950/80 overflow-hidden shadow-inner">
      <!-- 背景光晕弥散 -->
      <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-indigo-500/10 to-fuchsia-500/5 pointer-events-none" />

      <!-- 频段跳动柱状图 -->
      <div class="relative z-10 flex items-center justify-between gap-1 h-32 px-2">
        <div
          v-for="(height, idx) in barHeights"
          :key="idx"
          class="flex-1 flex flex-col items-center justify-center h-full"
        >
          <!-- 上半波与下半波对称拉伸 -->
          <div
            class="w-full rounded-full transition-all duration-75"
            :style="{
              height: `${height}%`,
              background: isRecording
                ? `linear-gradient(to top, rgba(99, 102, 241, 0.9), rgba(168, 85, 247, 0.9), rgba(236, 72, 153, 0.8))`
                : 'rgba(161, 161, 170, 0.4)',
              boxShadow: isRecording ? '0 0 8px rgba(129, 140, 248, 0.35)' : 'none'
            }"
          />
        </div>
      </div>

      <!-- 实时底部指标信息 -->
      <div class="relative z-10 flex items-center justify-between mt-4 pt-3 border-t border-zinc-200/50 dark:border-zinc-800/60 text-xs font-mono text-zinc-500 dark:text-zinc-400">
        <div class="flex items-center gap-1.5">
          <Volume2 class="h-3.5 w-3.5 text-indigo-500" />
          <span>音量：<strong class="text-zinc-800 dark:text-zinc-200">{{ decibels }} dB</strong></span>
        </div>
        <div class="flex items-center gap-1.5">
          <Sparkles class="h-3.5 w-3.5 text-amber-500" />
          <span>采样率：<strong>{{ sampleRate }}</strong></span>
        </div>
      </div>
    </div>

    <!-- 交互控制面板 -->
    <div class="flex flex-wrap items-center justify-between gap-4">
      <div class="flex items-center gap-2">
        <button
          type="button"
          @click="toggleRecording"
          :class="[
            'inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold shadow-sm transition-all cursor-pointer',
            isRecording
              ? 'bg-rose-500 text-white hover:bg-rose-600 shadow-rose-500/20'
              : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-500/20'
          ]"
        >
          <Mic v-if="isRecording" class="h-4 w-4 animate-pulse" />
          <MicOff v-else class="h-4 w-4" />
          <span>{{ isRecording ? '关闭麦克风' : '打开麦克风' }}</span>
        </button>

        <button
          type="button"
          @click="cycleMode"
          class="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
        >
          <RefreshCw class="h-3.5 w-3.5" />
          <span>切换状态</span>
        </button>
      </div>

      <!-- 灵敏度滑块 -->
      <div class="flex items-center gap-2.5 text-xs font-mono text-zinc-500">
        <span>灵敏度:</span>
        <input
          v-model.number="sensitivity"
          type="range"
          min="20"
          max="120"
          class="w-24 h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
        />
        <span class="w-8 text-right font-bold text-zinc-700 dark:text-zinc-300">{{ sensitivity }}%</span>
      </div>
    </div>
  </div>
</template>
