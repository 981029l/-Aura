<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { cn } from '@/lib/utils'
import { Terminal, Play, Pause, RefreshCw, Zap } from 'lucide-vue-next'

export interface MatrixRainProps {
  title?: string
  subtitle?: string
  fontSize?: number
  class?: string
}

const props = withDefaults(defineProps<MatrixRainProps>(), {
  title: '代码雨',
  subtitle: 'Canvas 绘制的字符雨，鼠标附近的字符会变亮',
  fontSize: 14,
})

const canvasRef = ref<HTMLCanvasElement | null>(null)
const isRunning = ref(true)
const theme = ref<'matrix' | 'cyan' | 'amber' | 'violet'>('matrix')
const speed = ref(35) // ms per frame tick

const themeColors = {
  matrix: {
    head: '#ffffff',
    lead: '#a7f3d0',
    trail: '#10b981',
    dim: '#064e3b',
    name: '绿色',
  },
  cyan: {
    head: '#ffffff',
    lead: '#bae6fd',
    trail: '#0ea5e9',
    dim: '#0c4a6e',
    name: '青色',
  },
  amber: {
    head: '#ffffff',
    lead: '#fde68a',
    trail: '#f59e0b',
    dim: '#78350f',
    name: '琥珀色',
  },
  violet: {
    head: '#ffffff',
    lead: '#f5d0fe',
    trail: '#c026d3',
    dim: '#701a75',
    name: '紫色',
  },
}

// 常用日文片假名与二进制/代数符号
const glyphs = 'ｦｱｳｴｵｶｷｹｹｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ1234567890ABCDEF$#@%&*+-='

let timerId: number | null = null
let drops: number[] = []
let mouse = { x: -1000, y: -1000 }

function initRain() {
  const canvas = canvasRef.value
  if (!canvas) return
  const columns = Math.floor(canvas.width / props.fontSize)
  drops = []
  for (let i = 0; i < columns; i++) {
    // 随机初始垂直偏移量，避免整排同时落下
    drops[i] = Math.floor(Math.random() * -50)
  }
}

function draw() {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  //  полупрозрачный фон для эффекта затухания следа (Tail Decay)
  ctx.fillStyle = 'rgba(0, 0, 0, 0.08)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  const currentTheme = themeColors[theme.value]
  ctx.font = `${props.fontSize}px monospace`

  for (let i = 0; i < drops.length; i++) {
    const char = glyphs[Math.floor(Math.random() * glyphs.length)]
    const x = i * props.fontSize
    const y = drops[i] * props.fontSize

    // 鼠标扰动检测：靠近光标的字符产生排斥位移或强光爆发
    const dist = Math.hypot(x - mouse.x, y - mouse.y)
    const isNearby = dist < 70

    if (isNearby) {
      ctx.fillStyle = '#ffffff'
      ctx.shadowColor = currentTheme.trail
      ctx.shadowBlur = 12
    } else {
      ctx.shadowBlur = 0
      // 头部字符高亮，尾随字符自然渐暗
      const isLead = Math.random() > 0.85
      ctx.fillStyle = isLead ? currentTheme.head : currentTheme.trail
    }

    ctx.fillText(char, x, y)

    // 重置或向下步进
    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0
    } else {
      drops[i]++
    }
  }
}

function startLoop() {
  stopLoop()
  timerId = window.setInterval(() => {
    if (isRunning.value) {
      draw()
    }
  }, speed.value)
}

function stopLoop() {
  if (timerId !== null) {
    clearInterval(timerId)
    timerId = null
  }
}

function handleMouseMove(e: MouseEvent) {
  const canvas = canvasRef.value
  if (!canvas) return
  const rect = canvas.getBoundingClientRect()
  mouse.x = e.clientX - rect.left
  mouse.y = e.clientY - rect.top
}

function handleMouseLeave() {
  mouse.x = -1000
  mouse.y = -1000
}

function toggleRunning() {
  isRunning.value = !isRunning.value
}

function cycleTheme() {
  const keys: (keyof typeof themeColors)[] = ['matrix', 'cyan', 'amber', 'violet']
  const idx = keys.indexOf(theme.value)
  theme.value = keys[(idx + 1) % keys.length]
}

function resetCanvas() {
  initRain()
  const canvas = canvasRef.value
  if (canvas) {
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
  }
}

watch(speed, () => {
  startLoop()
})

onMounted(() => {
  const canvas = canvasRef.value
  if (canvas) {
    canvas.width = canvas.parentElement?.clientWidth || 560
    canvas.height = 280
    initRain()
    startLoop()
  }
})

onUnmounted(() => {
  stopLoop()
})
</script>

<template>
  <div :class="cn('w-full max-w-xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-5', props.class)">
    <!-- 头部指标栏 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-2.5">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
          <Terminal class="h-5 w-5" />
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

      <div class="flex items-center gap-2">
        <button
          type="button"
          @click="cycleTheme"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-xs font-mono font-semibold text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
        >
          <Zap class="h-3.5 w-3.5 text-amber-500" />
          <span>{{ themeColors[theme].name.split(' ')[0] }}</span>
        </button>
      </div>
    </div>

    <!-- Canvas 代码雨视窗 -->
    <div class="relative rounded-xl border border-zinc-900 overflow-hidden bg-black shadow-2xl">
      <canvas
        ref="canvasRef"
        class="w-full block cursor-crosshair"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
      />

      <!-- 顶部终端拟态小把手 -->
      <div class="absolute top-3 left-4 flex items-center gap-2 pointer-events-none">
        <div class="flex gap-1.5">
          <div class="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
          <div class="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
          <div class="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        </div>
        <span class="text-[10px] font-mono text-zinc-500">matrix://quantum-core.stream</span>
      </div>

      <!-- 右下角悬停扰动提示 -->
      <div class="absolute bottom-2 right-3 text-[10px] font-mono text-zinc-600 pointer-events-none">
        HOVER TO DISRUPT MATRIX
      </div>
    </div>

    <!-- 底部控制面板 -->
    <div class="flex flex-wrap items-center justify-between gap-4">
      <div class="flex items-center gap-2">
        <button
          type="button"
          @click="toggleRunning"
          :class="[
            'inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold shadow-sm transition-all cursor-pointer',
            isRunning
              ? 'bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900'
              : 'bg-emerald-600 text-white hover:bg-emerald-700'
          ]"
        >
          <Pause v-if="isRunning" class="h-3.5 w-3.5" />
          <Play v-else class="h-3.5 w-3.5" />
          <span>{{ isRunning ? '暂停' : '继续' }}</span>
        </button>

        <button
          type="button"
          @click="resetCanvas"
          class="inline-flex items-center gap-1 px-3 py-2 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
        >
          <RefreshCw class="h-3.5 w-3.5" />
          <span>重新开始</span>
        </button>
      </div>

      <!-- 速度调节滑块 -->
      <div class="flex items-center gap-2 text-xs font-mono text-zinc-500">
        <span>刷新间隔:</span>
        <input
          v-model.number="speed"
          type="range"
          min="15"
          max="80"
          class="w-20 h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
        />
        <span class="w-10 text-right font-bold text-zinc-700 dark:text-zinc-300">{{ speed }}ms</span>
      </div>
    </div>
  </div>
</template>
