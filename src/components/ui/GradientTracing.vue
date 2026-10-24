<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'
import { Cpu, Zap, Activity, Radio } from 'lucide-vue-next'

export interface GradientTracingProps {
  title?: string
  subtitle?: string
  status?: string
  frequency?: string
  class?: string
}

const props = withDefaults(defineProps<GradientTracingProps>(), {
  title: '数据同步服务',
  subtitle: '多个数据中心之间实时同步',
  status: '运行中',
  frequency: '同步成功率 99.9%',
})

type TraceMode = 'parallel' | 'harmonic' | 'overdrive'

const isHovered = ref(false)
const activeMode = ref<TraceMode>('parallel')

const modeOptions: { id: TraceMode; label: string; freq: string; latency: string }[] = [
  { id: 'parallel', label: '标准', freq: '1x', latency: '120 ms' },
  { id: 'harmonic', label: '快速', freq: '1.5x', latency: '80 ms' },
  { id: 'overdrive', label: '极速', freq: '2x', latency: '50 ms' },
]

const currentModeInfo = computed(
  () => modeOptions.find((m) => m.id === activeMode.value) ?? modeOptions[0]
)

// 计算动画周期：悬停或超频模式自动物理加速
const baseDuration = computed(() => {
  let d = activeMode.value === 'overdrive' ? 1.8 : activeMode.value === 'harmonic' ? 3.2 : 2.8
  if (isHovered.value) d *= 0.45
  return d
})

// 4 条对称 45° 折角 PCB 神经突触导轨 (坐标系 380 x 136，中心芯片位于 190, 68)
const circuitPaths = [
  {
    id: 'lane-1',
    d: 'M 18 24 L 86 24 L 116 52 L 158 52',
    outD: 'M 222 52 L 264 52 L 294 24 L 362 24',
    grad: 'url(#gt-beam-cyan)',
    delay: 0,
    pinLeft: [18, 24],
    pinRight: [362, 24],
    jointLeft: [86, 24],
    jointRight: [294, 24],
  },
  {
    id: 'lane-2',
    d: 'M 18 52 L 64 52 L 84 62 L 158 62',
    outD: 'M 222 62 L 296 62 L 316 52 L 362 52',
    grad: 'url(#gt-beam-indigo)',
    delay: 0.35,
    pinLeft: [18, 52],
    pinRight: [362, 52],
    jointLeft: [64, 52],
    jointRight: [316, 52],
  },
  {
    id: 'lane-3',
    d: 'M 18 84 L 64 84 L 84 74 L 158 74',
    outD: 'M 222 74 L 296 74 L 316 84 L 362 84',
    grad: 'url(#gt-beam-pink)',
    delay: 0.7,
    pinLeft: [18, 84],
    pinRight: [362, 84],
    jointLeft: [64, 84],
    jointRight: [316, 84],
  },
  {
    id: 'lane-4',
    d: 'M 18 112 L 86 112 L 116 84 L 158 84',
    outD: 'M 222 84 L 264 84 L 294 112 L 362 112',
    grad: 'url(#gt-beam-emerald)',
    delay: 1.05,
    pinLeft: [18, 112],
    pinRight: [362, 112],
    jointLeft: [86, 112],
    jointRight: [294, 112],
  },
]
</script>

<template>
  <div
    :class="
      cn(
        'relative w-full max-w-lg overflow-hidden rounded-3xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none',
        isHovered && 'border-cyan-500/40 dark:border-cyan-500/40',
        props.class
      )
    "
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="relative z-10 flex flex-col gap-4">
      <!-- 1. 顶部引擎头部（纯粹清晰，无任何背景杂线穿模） -->
      <div class="flex items-start justify-between gap-3">
        <div class="flex items-center gap-3">
          <div
            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20"
          >
            <Cpu class="h-5 w-5" />
          </div>
          <div>
            <h4 class="font-bold text-base text-zinc-900 dark:text-white flex items-center gap-2">
              <span>{{ props.title }}</span>
              <span class="relative flex h-2 w-2">
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"
                />
                <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
            </h4>
            <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              {{ props.subtitle }}
            </p>
          </div>
        </div>

        <span
          class="shrink-0 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20"
        >
          {{ currentModeInfo.label }} · {{ currentModeInfo.freq }}
        </span>
      </div>

      <!-- 2. 独立神经突触电路寻迹拓扑视窗（外层流光严丝合缝贴合视窗边缘） -->
      <div
        class="relative rounded-2xl border border-zinc-200/80 dark:border-zinc-800/90 bg-zinc-950 overflow-hidden"
      >
        <!-- 点阵工程网格底纹 -->
        <div
          class="absolute inset-0 opacity-25 pointer-events-none"
          style="
            background-image: radial-gradient(rgba(148, 163, 184, 0.45) 1px, transparent 1px);
            background-size: 14px 14px;
          "
        />

        <!-- 响应式 SVG 电路板 (380 x 136 精确坐标系) -->
        <svg
          viewBox="0 0 380 136"
          class="relative z-10 w-full h-[142px] block pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gt-beam-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#06b6d4" stop-opacity="0" />
              <stop offset="55%" stop-color="#38bdf8" stop-opacity="1" />
              <stop offset="85%" stop-color="#e0f2fe" stop-opacity="1" />
              <stop offset="100%" stop-color="#38bdf8" stop-opacity="0" />
            </linearGradient>

            <linearGradient id="gt-beam-indigo" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#6366f1" stop-opacity="0" />
              <stop offset="55%" stop-color="#818cf8" stop-opacity="1" />
              <stop offset="85%" stop-color="#e0e7ff" stop-opacity="1" />
              <stop offset="100%" stop-color="#818cf8" stop-opacity="0" />
            </linearGradient>

            <linearGradient id="gt-beam-pink" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#e11d48" stop-opacity="0" />
              <stop offset="55%" stop-color="#fb7185" stop-opacity="1" />
              <stop offset="85%" stop-color="#ffe4e6" stop-opacity="1" />
              <stop offset="100%" stop-color="#fb7185" stop-opacity="0" />
            </linearGradient>

            <linearGradient id="gt-beam-emerald" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#059669" stop-opacity="0" />
              <stop offset="55%" stop-color="#34d399" stop-opacity="1" />
              <stop offset="85%" stop-color="#d1fae5" stop-opacity="1" />
              <stop offset="100%" stop-color="#34d399" stop-opacity="0" />
            </linearGradient>

            <filter id="gt-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <!-- 外围贴合视窗边缘的环路流光轨（坐标与 380x136 视窗严格对齐，绝不错位） -->
          <rect
            x="4"
            y="4"
            width="372"
            height="128"
            rx="12"
            fill="none"
            stroke="rgba(51, 65, 85, 0.45)"
            stroke-width="1"
          />
          <rect
            x="4"
            y="4"
            width="372"
            height="128"
            rx="12"
            fill="none"
            stroke="url(#gt-beam-cyan)"
            stroke-width="1.8"
            pathLength="1000"
            stroke-dasharray="140 860"
            filter="url(#gt-glow)"
            class="animate-perimeter-trace"
            :style="{ animationDuration: `${baseDuration * 1.6}s` }"
          />

          <!-- 4 条主电路静态暗色底座与动态脉冲流束 -->
          <g v-for="(lane, idx) in circuitPaths" :key="lane.id">
            <!-- 左侧输入静态底轨 -->
            <path
              :d="lane.d"
              fill="none"
              stroke="rgba(71, 85, 105, 0.55)"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <!-- 右侧输出静态底轨 -->
            <path
              :d="lane.outD"
              fill="none"
              stroke="rgba(71, 85, 105, 0.55)"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <!-- 左侧输入动态脉冲光束 -->
            <path
              :d="lane.d"
              fill="none"
              :stroke="lane.grad"
              stroke-width="2.4"
              stroke-linecap="round"
              stroke-linejoin="round"
              pathLength="100"
              stroke-dasharray="32 100"
              filter="url(#gt-glow)"
              class="animate-lane-in"
              :style="{
                animationDuration: `${baseDuration}s`,
                animationDelay:
                  activeMode === 'harmonic' ? `${idx * 0.42}s` : `${lane.delay * 0.25}s`,
              }"
            />

            <!-- 右侧输出动态脉冲光束 -->
            <path
              :d="lane.outD"
              fill="none"
              :stroke="lane.grad"
              stroke-width="2.4"
              stroke-linecap="round"
              stroke-linejoin="round"
              pathLength="100"
              stroke-dasharray="32 100"
              filter="url(#gt-glow)"
              class="animate-lane-out"
              :style="{
                animationDuration: `${baseDuration}s`,
                animationDelay:
                  activeMode === 'harmonic'
                    ? `${idx * 0.42 + baseDuration * 0.35}s`
                    : `${lane.delay * 0.25 + baseDuration * 0.35}s`,
              }"
            />

            <!-- 左右端点金属焊盘引脚与折角节点 -->
            <circle
              :cx="lane.pinLeft[0]"
              :cy="lane.pinLeft[1]"
              r="3"
              fill="#0f172a"
              stroke="#38bdf8"
              stroke-width="1.4"
            />
            <circle
              :cx="lane.pinRight[0]"
              :cy="lane.pinRight[1]"
              r="3"
              fill="#0f172a"
              stroke="#818cf8"
              stroke-width="1.4"
            />
            <circle
              :cx="lane.jointLeft[0]"
              :cy="lane.jointLeft[1]"
              r="1.6"
              fill="#64748b"
            />
            <circle
              :cx="lane.jointRight[0]"
              :cy="lane.jointRight[1]"
              r="1.6"
              fill="#64748b"
            />
          </g>

          <!-- 中央神经计算核心芯片 -->
          <g transform="translate(156, 36)">
            <!-- 芯片外发光底座 -->
            <rect
              x="-4"
              y="-4"
              width="76"
              height="72"
              rx="14"
              fill="rgba(56, 189, 248, 0.08)"
              stroke="rgba(56, 189, 248, 0.28)"
              stroke-width="1"
            />
            <!-- 芯片封装体 -->
            <rect
              x="0"
              y="0"
              width="68"
              height="64"
              rx="11"
              fill="#090d16"
              stroke="#38bdf8"
              stroke-width="1.5"
            />
            <!-- 芯片内部晶圆核心框 -->
            <rect
              x="10"
              y="10"
              width="48"
              height="44"
              rx="6"
              fill="rgba(14, 116, 144, 0.18)"
              stroke="rgba(56, 189, 248, 0.45)"
              stroke-width="1"
            />
            <text
              x="34"
              y="29"
              text-anchor="middle"
              fill="#f8fafc"
              font-family="monospace"
              font-size="9.5"
              font-weight="700"
              letter-spacing="0.5"
            >
              NPU·X9
            </text>
            <text
              x="34"
              y="43"
              text-anchor="middle"
              fill="#38bdf8"
              font-family="monospace"
              font-size="7.5"
            >
              {{ isHovered ? '2.5x BOOST' : 'SYNAPSE' }}
            </text>
          </g>
        </svg>
      </div>

      <!-- 3. 中部脉冲参数与模式切换栏 -->
      <div
        class="p-3 rounded-2xl border border-zinc-200/80 bg-zinc-50/80 dark:border-zinc-800/80 dark:bg-zinc-900/60 flex flex-wrap items-center justify-between gap-2"
      >
        <div class="flex items-center gap-2">
          <Zap
            class="h-4 w-4 transition-transform duration-300"
            :class="isHovered ? 'text-cyan-500 scale-110' : 'text-amber-500'"
          />
          <span class="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
            数据流动速度
          </span>
          <span class="text-[11px] font-mono text-zinc-400">
            · 延迟 {{ currentModeInfo.latency }}
          </span>
        </div>

        <!-- 3 档脉冲模式切换胶囊 -->
        <div
          class="inline-flex items-center rounded-xl bg-zinc-200/70 dark:bg-zinc-800/90 p-0.5 text-[11px]"
        >
          <button
            v-for="m in modeOptions"
            :key="m.id"
            type="button"
            @click="activeMode = m.id"
            class="px-2 py-0.5 rounded-lg font-medium transition-all cursor-pointer"
            :class="
              activeMode === m.id
                ? 'bg-white dark:bg-zinc-950 text-cyan-600 dark:text-cyan-400 shadow-sm font-semibold'
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            "
          >
            {{ m.label }}
          </button>
        </div>
      </div>

      <!-- 4. 底部引脚状态与实时吞吐率 -->
      <div
        class="flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-400 border-t border-zinc-100 pt-2.5 dark:border-zinc-800/70"
      >
        <div class="flex items-center gap-1.5">
          <Activity class="h-3.5 w-3.5 text-emerald-500" />
          <span>{{ props.frequency }}</span>
        </div>
        <div class="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 font-medium">
          <Radio class="h-3.5 w-3.5" />
          <span>{{ isHovered ? '悬停中，流动速度 ×2.5' : '悬停卡片可加快流动' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes lanePulseIn {
  0% {
    stroke-dashoffset: 132;
  }
  100% {
    stroke-dashoffset: -100;
  }
}

@keyframes lanePulseOut {
  0% {
    stroke-dashoffset: 132;
  }
  100% {
    stroke-dashoffset: -100;
  }
}

@keyframes perimeterTrace {
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

.animate-lane-in {
  animation: lanePulseIn linear infinite;
}

.animate-lane-out {
  animation: lanePulseOut linear infinite;
}

.animate-perimeter-trace {
  animation: perimeterTrace linear infinite;
}
</style>
