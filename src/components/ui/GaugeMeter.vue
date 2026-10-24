<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'
import { Gauge, Zap, AlertTriangle, ShieldCheck } from 'lucide-vue-next'

export interface GaugeMeterProps {
  value?: number
  min?: number
  max?: number
  unit?: string
  label?: string
  class?: string
}

const props = withDefaults(defineProps<GaugeMeterProps>(), {
  value: 60,
  min: 0,
  max: 100,
  unit: '%',
  label: 'GPU 功耗',
})

const currentValue = ref(props.value)

// 220° 苹果风大圆环度量弧参数 (中心 140, 135，半径 96)
// 弧度范围：从 160° 到 380° (即 20°)，总跨度 220°
const cx = 140
const cy = 135
const radius = 96
const totalArcLength = 2 * Math.PI * radius * (220 / 360) // ≈ 368.6

// 计算进度百分比 (0 ~ 1)
const progress = computed(() => {
  const ratio = (currentValue.value - props.min) / (props.max - props.min)
  return Math.max(0, Math.min(1, ratio))
})

// 进度弧描边偏移量
const strokeDashoffset = computed(() => {
  return totalArcLength - totalArcLength * progress.value
})

// 弧形端点极简光珠指示器坐标 (随数值平滑巡航)
const tipCoord = computed(() => {
  const angleDeg = 160 + progress.value * 220
  const angleRad = (angleDeg * Math.PI) / 180
  return {
    x: cx + radius * Math.cos(angleRad),
    y: cy + radius * Math.sin(angleRad),
  }
})

// 状态等级与色彩
const statusTone = computed(() => {
  if (currentValue.value >= 85) return 'danger'
  if (currentValue.value >= 70) return 'warning'
  return 'optimal'
})

function setPreset(val: number) {
  currentValue.value = val
}
</script>

<template>
  <div :class="cn('w-full max-w-lg rounded-3xl border border-zinc-200/90 bg-white/95 p-6 sm:p-7 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6', props.class)">
    <!-- 头部看板 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/15">
          <Gauge class="h-5 w-5" />
        </div>
        <div>
          <h4 class="font-bold text-sm text-zinc-900 dark:text-white">
            {{ props.label }}
          </h4>
          <p class="text-xs text-zinc-400 font-mono mt-0.5">
            220° 弧形进度 · 末端圆点指示当前值
          </p>
        </div>
      </div>

      <span
        :class="[
          'px-2.5 py-1 rounded-full text-[10px] font-mono font-bold flex items-center gap-1 transition-colors',
          statusTone === 'danger'
            ? 'bg-rose-500/15 text-rose-600 dark:text-rose-400'
            : statusTone === 'warning'
              ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400'
              : 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400',
        ]"
      >
        <AlertTriangle v-if="statusTone === 'danger'" class="h-3 w-3" />
        <ShieldCheck v-else class="h-3 w-3" />
        <span>{{ statusTone === 'danger' ? 'OVERLOAD' : statusTone === 'warning' ? 'ELEVATED' : 'OPTIMAL' }}</span>
      </span>
    </div>

    <!-- 苹果风精炼数据环主视窗 -->
    <div class="relative flex flex-col items-center justify-center py-2">
      <!-- 220° 几何 SVG 环形舞台 -->
      <svg class="w-72 h-48 overflow-visible" viewBox="0 0 280 185">
        <defs>
          <!-- 苹果风高精度流体色彩渐变 (Cyan -> Blue -> Violet -> Amber -> Rose) -->
          <linearGradient id="apple-gauge-gradient" x1="0%" y1="100%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#06b6d4" />
            <stop offset="35%" stop-color="#3b82f6" />
            <stop offset="70%" stop-color="#f59e0b" />
            <stop offset="100%" stop-color="#f43f5e" />
          </linearGradient>

          <!-- 环境微光弥散滤镜 -->
          <filter id="gauge-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <!-- 1. 背景底轨 (细腻磨砂浅灰) -->
        <path
          d="M 49.79 167.83 A 96 96 0 1 1 230.21 167.83"
          fill="none"
          stroke="currentColor"
          stroke-width="12"
          stroke-linecap="round"
          class="text-zinc-100 dark:text-zinc-800/80"
        />

        <!-- 2. 刻度端点微标尺点阵 (0%、50%、100%) -->
        <circle cx="49.79" cy="167.83" r="2" class="fill-zinc-300 dark:fill-zinc-600" />
        <circle cx="140" cy="39" r="2" class="fill-zinc-300 dark:fill-zinc-600" />
        <circle cx="230.21" cy="167.83" r="2" class="fill-zinc-300 dark:fill-zinc-600" />

        <!-- 3. 彩色流体高亮进度弧 (平滑过渡与圆润包角) -->
        <path
          d="M 49.79 167.83 A 96 96 0 1 1 230.21 167.83"
          fill="none"
          stroke="url(#apple-gauge-gradient)"
          stroke-width="12"
          stroke-linecap="round"
          :stroke-dasharray="totalArcLength"
          :stroke-dashoffset="strokeDashoffset"
          class="transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />

        <!-- 4. 极简端点光珠指示器 (取代丑陋红铁丝与大黑圈) -->
        <g class="transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <!-- 光珠环境漫反射微光 -->
          <circle
            :cx="tipCoord.x"
            :cy="tipCoord.y"
            r="10"
            fill="currentColor"
            class="text-blue-500/20 dark:text-blue-400/30"
          />
          <!-- 光珠外白环与内核心 -->
          <circle
            :cx="tipCoord.x"
            :cy="tipCoord.y"
            r="7"
            fill="#ffffff"
            class="stroke-zinc-900/10 dark:stroke-white/20"
            stroke-width="1.5"
          />
          <circle
            :cx="tipCoord.x"
            :cy="tipCoord.y"
            r="3.5"
            :fill="statusTone === 'danger' ? '#f43f5e' : statusTone === 'warning' ? '#f59e0b' : '#3b82f6'"
          />
        </g>
      </svg>

      <!-- 居中独立大号现代排版数字 (彻底杜绝任何碰撞与重叠) -->
      <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pt-4">
        <div class="flex items-baseline font-mono tracking-tight">
          <span class="text-5xl font-black text-zinc-900 dark:text-white transition-all duration-300">
            {{ currentValue }}
          </span>
          <span class="text-2xl font-bold text-zinc-400 dark:text-zinc-500 ml-1">
            {{ props.unit }}
          </span>
        </div>
        <span class="text-[11px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mt-1">
          当前功耗
        </span>
      </div>

      <!-- 刻度两端数值基准说明 -->
      <div class="w-full max-w-[260px] flex items-center justify-between text-[11px] font-mono text-zinc-400 dark:text-zinc-500 -mt-2 px-3">
        <span>{{ props.min }}{{ props.unit }}</span>
        <span>50{{ props.unit }}</span>
        <span>{{ props.max }}{{ props.unit }}</span>
      </div>
    </div>

    <!-- 底部预设快捷分段切换胶囊 -->
    <div class="p-1.5 rounded-2xl bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200/60 dark:border-zinc-800/60 flex items-center gap-1.5">
      <button
        type="button"
        v-for="preset in [
          { label: 'Eco (25%)', val: 25 },
          { label: 'Normal (60%)', val: 60 },
          { label: 'Sport (85%)', val: 85 },
          { label: 'Boost (98%)', val: 98 },
        ]"
        :key="preset.val"
        @click="setPreset(preset.val)"
        :class="[
          'flex-1 py-2 rounded-xl text-xs font-mono font-medium transition-all text-center cursor-pointer',
          currentValue === preset.val
            ? 'bg-white text-zinc-900 shadow-sm dark:bg-zinc-700 dark:text-white font-bold'
            : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100',
        ]"
      >
        <Zap v-if="preset.val === 98" class="inline h-3 w-3 mr-0.5 text-rose-500" />
        {{ preset.label }}
      </button>
    </div>
  </div>
</template>
