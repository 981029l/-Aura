<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'
import { Trophy } from 'lucide-vue-next'

export interface RadarDimension {
  name: string
  key: string
  modelA: number // 0 ~ 100
  modelB: number // 0 ~ 100
}

export interface RadarChartProps {
  title?: string
  modelAName?: string
  modelBName?: string
  class?: string
}

const props = withDefaults(defineProps<RadarChartProps>(), {
  title: '',
  modelAName: 'Aura Reasoning v3.5',
  modelBName: 'Model-B',
})

const dimensions = ref<RadarDimension[]>([
  { name: '推理', key: 'reasoning', modelA: 96, modelB: 78 },
  { name: '代码', key: 'coding', modelA: 94, modelB: 82 },
  { name: '数学', key: 'math', modelA: 92, modelB: 75 },
  { name: '视觉', key: 'vision', modelA: 88, modelB: 80 },
  { name: '长上下文', key: 'context', modelA: 98, modelB: 70 },
  { name: '指令遵循', key: 'alignment', modelA: 95, modelB: 85 },
])

const activeDimension = ref<string | null>(null)
const showModelB = ref(true)

// SVG 几何计算 (中心点 150, 150, 最大半径 100)
const cx = 160
const cy = 150
const radius = 100
const totalPoints = dimensions.value.length

function getCoordinates(index: number, value: number) {
  const angle = (Math.PI * 2 / totalPoints) * index - Math.PI / 2
  const r = (value / 100) * radius
  return {
    x: cx + r * Math.cos(angle),
    y: cy + r * Math.sin(angle),
  }
}

// 计算多边形 points 字符串
const polygonPointsA = computed(() => {
  return dimensions.value
    .map((d, i) => {
      const { x, y } = getCoordinates(i, d.modelA)
      return `${x},${y}`
    })
    .join(' ')
})

const polygonPointsB = computed(() => {
  return dimensions.value
    .map((d, i) => {
      const { x, y } = getCoordinates(i, d.modelB)
      return `${x},${y}`
    })
    .join(' ')
})

// 蜘蛛网多层背景环
const gridLevels = [0.25, 0.5, 0.75, 1.0]

function getGridRingPoints(level: number) {
  return dimensions.value
    .map((_, i) => {
      const angle = (Math.PI * 2 / totalPoints) * i - Math.PI / 2
      const r = level * radius
      return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`
    })
    .join(' ')
}
</script>

<template>
  <div :class="cn('w-full max-w-xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6', props.class)">
    <!-- 头部看板 -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-2.5">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
          <Trophy class="h-5 w-5" />
        </div>
        <div>
          <span class="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
            {{ props.title || '模型能力对比' }}
          </span>
          <p class="text-xs text-zinc-400 font-mono">
            六项能力对比（示例数据）
          </p>
        </div>
      </div>

      <!-- 模型图例与开关 -->
      <div class="flex items-center gap-2">
        <div class="flex items-center gap-1.5 text-xs font-mono font-medium text-sky-600 dark:text-sky-400">
          <span class="h-2 w-2 rounded-full bg-sky-500 ring-2 ring-sky-500/30" />
          <span>{{ props.modelAName.split(' ')[0] }}</span>
        </div>

        <button
          type="button"
          @click="showModelB = !showModelB"
          :class="[
            'flex items-center gap-1.5 px-2 py-0.5 rounded-lg border text-xs font-mono transition-colors cursor-pointer',
            showModelB
              ? 'border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
              : 'border-zinc-200 text-zinc-400 dark:border-zinc-800',
          ]"
        >
          <span class="h-2 w-2 rounded-full bg-indigo-500" />
          <span>基准对比</span>
        </button>
      </div>
    </div>

    <!-- 雷达图 SVG 绘制视窗 -->
    <div class="relative flex items-center justify-center py-2">
      <svg class="w-full max-w-sm h-72 overflow-visible" viewBox="0 0 320 300">
        <defs>
          <linearGradient id="radar-glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.6" />
            <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.2" />
          </linearGradient>
          <linearGradient id="radar-baseline-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#818cf8" stop-opacity="0.35" />
            <stop offset="100%" stop-color="#c084fc" stop-opacity="0.1" />
          </linearGradient>
        </defs>

        <!-- 1. 背景多层正六边形蜘蛛网网格 -->
        <polygon
          v-for="(lvl, idx) in gridLevels"
          :key="idx"
          :points="getGridRingPoints(lvl)"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          stroke-dasharray="2 2"
          class="text-zinc-200 dark:text-zinc-800"
        />

        <!-- 2. 辐射轴线 -->
        <line
          v-for="(_, i) in dimensions"
          :key="i"
          :x1="cx"
          :y1="cy"
          :x2="getCoordinates(i, 100).x"
          :y2="getCoordinates(i, 100).y"
          stroke="currentColor"
          stroke-width="1"
          class="text-zinc-200 dark:text-zinc-800"
        />

        <!-- 3. 基准模型多边形 -->
        <polygon
          v-if="showModelB"
          :points="polygonPointsB"
          fill="url(#radar-baseline-grad)"
          stroke="#818cf8"
          stroke-width="1.5"
          stroke-dasharray="3 2"
          class="transition-all duration-500 ease-out"
        />

        <!-- 4. 核心模型多边形 -->
        <polygon
          :points="polygonPointsA"
          fill="url(#radar-glow-grad)"
          stroke="#0284c7"
          stroke-width="2.5"
          class="transition-all duration-500 ease-out"
        />

        <!-- 5. 核心模型各顶点光斑与文字标签 -->
        <g v-for="(dim, i) in dimensions" :key="i">
          <!-- 顶点：以自身中心放大（transform-box: fill-box），放大由激活状态驱动，不再随 :hover 抖动 -->
          <circle
            :cx="getCoordinates(i, dim.modelA).x"
            :cy="getCoordinates(i, dim.modelA).y"
            r="4"
            fill="#38bdf8"
            stroke="#ffffff"
            stroke-width="1.5"
            :class="[
              'pointer-events-none origin-center [transform-box:fill-box] transition-transform duration-200 ease-out',
              activeDimension === dim.key ? 'scale-150' : 'scale-100',
            ]"
          />

          <!-- 顶点悬停热区：固定大小的透明圆，盖住顶点及其放大后的范围，避免边缘反复进出 -->
          <circle
            :cx="getCoordinates(i, dim.modelA).x"
            :cy="getCoordinates(i, dim.modelA).y"
            r="10"
            fill="transparent"
            class="cursor-pointer"
            @mouseenter="activeDimension = dim.key"
            @mouseleave="activeDimension = null"
          />

          <!-- 外围文本标签 -->
          <text
            :x="getCoordinates(i, 122).x"
            :y="getCoordinates(i, 122).y"
            text-anchor="middle"
            dominant-baseline="central"
            :class="[
              'text-[10px] font-mono font-bold select-none cursor-pointer transition-colors',
              activeDimension === dim.key
                ? 'fill-sky-500 font-black'
                : 'fill-zinc-600 dark:fill-zinc-400',
            ]"
            @mouseenter="activeDimension = dim.key"
            @mouseleave="activeDimension = null"
          >
            {{ dim.name.split(' ')[0] }}
          </text>
        </g>
      </svg>
    </div>

    <!-- 底部数值快照指标胶囊群 -->
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs font-mono">
      <div
        v-for="dim in dimensions"
        :key="dim.key"
        :class="[
          'p-2.5 rounded-xl border transition-colors',
          activeDimension === dim.key
            ? 'border-sky-500/40 bg-sky-500/10 dark:border-sky-500/40'
            : 'border-zinc-200/70 bg-zinc-50/50 dark:border-zinc-800/60 dark:bg-zinc-900/30',
        ]"
      >
        <div class="flex items-center justify-between text-[11px] text-zinc-400">
          <span>{{ dim.name.split(' ')[0] }}</span>
          <span class="font-bold text-sky-600 dark:text-sky-400">{{ dim.modelA }}%</span>
        </div>
        <div class="mt-1 h-1 w-full rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
          <div
            class="h-full rounded-full bg-sky-500 transition-all duration-500"
            :style="{ width: `${dim.modelA}%` }"
          />
        </div>
      </div>
    </div>
  </div>
</template>
