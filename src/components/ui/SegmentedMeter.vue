<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import { Gauge, Zap, Flame, ShieldAlert, Cpu } from 'lucide-vue-next'

export interface SegmentedMeterProps {
  title?: string
  subtitle?: string
  totalSegments?: number
  class?: string
}

const props = withDefaults(defineProps<SegmentedMeterProps>(), {
  title: '',
  subtitle: '',
  totalSegments: 24,
})

const value = ref(68) // 0 ~ 100
const isStressTesting = ref(false)
const peakValue = ref(84)

let stressTimer: number | null = null

const activeSegmentCount = computed(() => {
  return Math.round((value.value / 100) * props.totalSegments)
})

function getSegmentColor(idx: number) {
  const ratio = idx / props.totalSegments
  if (ratio < 0.6) {
    // 正常区间 (绿/翡翠)
    return {
      active: 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]',
      inactive: 'bg-zinc-200/80 dark:bg-zinc-800/80',
    }
  } else if (ratio < 0.85) {
    // 预警区间 (橙黄)
    return {
      active: 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.7)]',
      inactive: 'bg-zinc-200/80 dark:bg-zinc-800/80',
    }
  } else {
    // 超限极限 (绯红)
    return {
      active: 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]',
      inactive: 'bg-zinc-200/80 dark:bg-zinc-800/80',
    }
  }
}

function setSegmentValue(index: number) {
  const percent = Math.round(((index + 1) / props.totalSegments) * 100)
  value.value = percent
  if (percent > peakValue.value) {
    peakValue.value = percent
  }
}

function toggleStressTest() {
  isStressTesting.value = !isStressTesting.value
  if (isStressTesting.value) {
    stressTimer = window.setInterval(() => {
      // 模拟服务器压力脉冲
      const noise = Math.sin(Date.now() / 300) * 25 + 65
      value.value = Math.min(100, Math.max(10, Math.round(noise + (Math.random() - 0.5) * 15)))
      if (value.value > peakValue.value) {
        peakValue.value = value.value
      }
    }, 150)
  } else {
    if (stressTimer) {
      clearInterval(stressTimer)
      stressTimer = null
    }
  }
}

onUnmounted(() => {
  if (stressTimer) clearInterval(stressTimer)
})

onMounted(() => {
  // 初始预热微调
})
</script>

<template>
  <div :class="cn('w-full max-w-xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6', props.class)">
    <!-- 头部指标栏 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-2.5">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
          <Gauge class="h-5 w-5" />
        </div>
        <div>
          <span class="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
            {{ props.title || '刻度计' }}
          </span>
          <span v-if="props.subtitle" class="text-xs text-zinc-400 font-mono">
            · {{ props.subtitle }}
          </span>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <span
          :class="[
            'px-2.5 py-1 rounded-full text-xs font-mono font-semibold transition-colors',
            value > 85
              ? 'bg-rose-500/15 text-rose-600 dark:text-rose-400'
              : value > 60
              ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400'
              : 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
          ]"
        >
          {{ value > 85 ? '负载过高' : value > 60 ? '负载较高' : '正常' }}
        </span>
      </div>
    </div>

    <!-- 硬件风格多段 LED 刻度槽 -->
    <div class="rounded-xl border border-zinc-200/80 bg-zinc-50/80 p-5 dark:border-zinc-800/80 dark:bg-zinc-900/40 space-y-4">
      <div class="flex items-center justify-between text-xs font-mono">
        <span class="text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
          <Cpu class="h-3.5 w-3.5 text-zinc-600 dark:text-zinc-300" />
          <span>系统负载</span>
        </span>
        <span class="text-xl font-bold font-mono tracking-tight text-zinc-900 dark:text-white">
          {{ value }}<span class="text-xs text-zinc-400">%</span>
        </span>
      </div>

      <!-- 24 分立式刻度条 (支持点击任意段进行快速拖动设定) -->
      <div class="flex items-center gap-1.5 h-10 px-1 py-1 rounded-lg bg-zinc-200/50 dark:bg-zinc-950/70">
        <div
          v-for="(_, idx) in props.totalSegments"
          :key="idx"
          @click="setSegmentValue(idx)"
          :class="[
            'flex-1 h-full rounded-sm transition-all duration-150 cursor-pointer hover:opacity-100',
            idx < activeSegmentCount
              ? getSegmentColor(idx).active
              : getSegmentColor(idx).inactive
          ]"
        />
      </div>

      <!-- 刻度分段标尺 -->
      <div class="flex justify-between text-[10px] font-mono text-zinc-400 px-1">
        <span>0% SAFE</span>
        <span>60% MODERATE</span>
        <span>85% CRITICAL</span>
        <span>100% MAX</span>
      </div>
    </div>

    <!-- 实时指标卡片三列 -->
    <div class="grid grid-cols-3 gap-3 text-xs font-mono">
      <div class="rounded-xl border border-zinc-200/60 bg-white p-3 dark:border-zinc-800/60 dark:bg-zinc-900/60">
        <div class="flex items-center gap-1 text-zinc-400 mb-1">
          <Zap class="h-3 w-3 text-amber-500" />
          <span>当前功耗</span>
        </div>
        <div class="font-bold text-sm text-zinc-900 dark:text-white">
          {{ Math.round(value * 4.8) }} W
        </div>
      </div>

      <div class="rounded-xl border border-zinc-200/60 bg-white p-3 dark:border-zinc-800/60 dark:bg-zinc-900/60">
        <div class="flex items-center gap-1 text-zinc-400 mb-1">
          <Flame class="h-3 w-3 text-rose-500" />
          <span>峰值</span>
        </div>
        <div class="font-bold text-sm text-zinc-900 dark:text-white">
          {{ peakValue }} %
        </div>
      </div>

      <div class="rounded-xl border border-zinc-200/60 bg-white p-3 dark:border-zinc-800/60 dark:bg-zinc-900/60">
        <div class="flex items-center gap-1 text-zinc-400 mb-1">
          <ShieldAlert class="h-3 w-3 text-indigo-500" />
          <span>散热余量</span>
        </div>
        <div class="font-bold text-sm text-zinc-900 dark:text-white">
          {{ (100 - value * 0.45).toFixed(1) }} %
        </div>
      </div>
    </div>

    <!-- 底部控制面板 -->
    <div class="flex flex-wrap items-center justify-between gap-4">
      <button
        type="button"
        @click="toggleStressTest"
        :class="[
          'inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold shadow-sm transition-all cursor-pointer',
          isStressTesting
            ? 'bg-rose-500 text-white hover:bg-rose-600'
            : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-200'
        ]"
      >
        <Flame class="h-3.5 w-3.5" />
        <span>{{ isStressTesting ? '停止压力测试' : '模拟压力测试' }}</span>
      </button>

      <!-- 手动滑块微调 -->
      <div class="flex items-center gap-2.5 text-xs font-mono text-zinc-500">
        <span>手动设置：</span>
        <input
          v-model.number="value"
          type="range"
          min="0"
          max="100"
          class="w-24 h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
        />
        <span class="w-8 text-right font-bold text-zinc-700 dark:text-zinc-300">{{ value }}%</span>
      </div>
    </div>
  </div>
</template>
