<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { cn } from '@/lib/utils'
import { Mic, MicOff, Volume2, Sparkles, Activity } from 'lucide-vue-next'

export interface AudioVisualizerProps {
  mode?: 'bars' | 'wave' | 'orb'
  state?: 'listening' | 'speaking' | 'thinking' | 'idle'
  barCount?: number
  class?: string
}

const props = withDefaults(defineProps<AudioVisualizerProps>(), {
  mode: 'wave',
  state: 'speaking',
  barCount: 32,
})

const canvasRef = ref<HTMLCanvasElement | null>(null)
const currentMode = ref<'bars' | 'wave' | 'orb'>(props.mode)
const currentState = ref<'listening' | 'speaking' | 'thinking' | 'idle'>(props.state)
const isMuted = ref(false)

let animationFrameId: number | null = null
let time = 0

// 模拟实时音频频域数据
const frequencies = new Array(props.barCount).fill(0)

function render() {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const dpr = window.devicePixelRatio || 1
  const width = canvas.width / dpr
  const height = canvas.height / dpr

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.clearRect(0, 0, width, height)

  time += 0.04
  const isDark = document.documentElement.classList.contains('dark')

  // 根据当前状态计算振幅因子
  let amp = 0.8
  if (isMuted.value || currentState.value === 'idle') {
    amp = 0.05
  } else if (currentState.value === 'thinking') {
    amp = 0.35 + Math.sin(time * 2) * 0.15
  } else if (currentState.value === 'listening') {
    amp = 0.6 + Math.sin(time * 4) * 0.25
  }

  // 1. 柱状频谱模式
  if (currentMode.value === 'bars') {
    const barWidth = (width / props.barCount) * 0.65
    const gap = (width - barWidth * props.barCount) / (props.barCount - 1)

    for (let i = 0; i < props.barCount; i++) {
      const targetHeight =
        (Math.sin(time * 3 + i * 0.3) * 0.4 +
          Math.cos(time * 1.8 + i * 0.5) * 0.3 +
          0.5) *
        height *
        0.75 *
        amp

      frequencies[i] += (targetHeight - frequencies[i]) * 0.2
      const h = Math.max(4, frequencies[i])
      const x = i * (barWidth + gap)
      const y = (height - h) / 2

      const grad = ctx.createLinearGradient(0, y, 0, y + h)
      if (isDark) {
        grad.addColorStop(0, '#38bdf8')
        grad.addColorStop(0.5, '#818cf8')
        grad.addColorStop(1, '#c084fc')
      } else {
        grad.addColorStop(0, '#0284c7')
        grad.addColorStop(0.5, '#4f46e5')
        grad.addColorStop(1, '#9333ea')
      }

      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.roundRect(x, y, barWidth, h, [barWidth / 2])
      ctx.fill()
    }
  }
  // 2. 多重流体正弦声波叠加模式
  else if (currentMode.value === 'wave') {
    const waveCount = 3
    const waveColors = isDark
      ? ['rgba(56, 189, 248, 0.7)', 'rgba(129, 140, 248, 0.6)', 'rgba(192, 132, 252, 0.5)']
      : ['rgba(2, 132, 199, 0.7)', 'rgba(79, 70, 229, 0.6)', 'rgba(147, 51, 234, 0.5)']

    for (let w = 0; w < waveCount; w++) {
      ctx.beginPath()
      const speed = 1.8 + w * 0.6
      const freq = 0.015 + w * 0.005
      const waveAmp = (height * 0.28 * amp) / (w + 1)
      const phase = time * speed + w * 1.5

      for (let x = 0; x <= width; x += 4) {
        const envelope = Math.sin((x / width) * Math.PI) // 两端平滑收敛为 0
        const y = height / 2 + Math.sin(x * freq + phase) * waveAmp * envelope
        if (x === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }

      ctx.strokeStyle = waveColors[w]
      ctx.lineWidth = 3 - w * 0.5
      ctx.stroke()
    }
  }
  // 3. 语音共鸣球 Orb 模式 (类似 Siri / Gemini Live)
  else if (currentMode.value === 'orb') {
    const centerX = width / 2
    const centerY = height / 2
    const baseRadius = Math.min(width, height) * 0.28

    const points = 60
    ctx.beginPath()

    for (let i = 0; i <= points; i++) {
      const angle = (i / points) * Math.PI * 2
      const noise =
        Math.sin(angle * 4 + time * 3) * 12 * amp +
        Math.cos(angle * 6 - time * 2) * 8 * amp
      const r = baseRadius + noise
      const x = centerX + Math.cos(angle) * r
      const y = centerY + Math.sin(angle) * r

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }
    ctx.closePath()

    // 内部拟态径向发光流体
    const orbGrad = ctx.createRadialGradient(
      centerX - 10,
      centerY - 10,
      5,
      centerX,
      centerY,
      baseRadius * 1.5
    )
    if (isDark) {
      orbGrad.addColorStop(0, 'rgba(56, 189, 248, 0.9)')
      orbGrad.addColorStop(0.5, 'rgba(129, 140, 248, 0.7)')
      orbGrad.addColorStop(0.8, 'rgba(192, 132, 252, 0.4)')
      orbGrad.addColorStop(1, 'rgba(15, 23, 42, 0)')
    } else {
      orbGrad.addColorStop(0, 'rgba(14, 165, 233, 0.85)')
      orbGrad.addColorStop(0.5, 'rgba(99, 102, 241, 0.65)')
      orbGrad.addColorStop(0.8, 'rgba(168, 85, 247, 0.35)')
      orbGrad.addColorStop(1, 'rgba(255, 255, 255, 0)')
    }

    ctx.fillStyle = orbGrad
    ctx.fill()
    ctx.strokeStyle = isDark ? 'rgba(125, 211, 252, 0.8)' : 'rgba(79, 70, 229, 0.8)'
    ctx.lineWidth = 2
    ctx.stroke()
  }

  animationFrameId = requestAnimationFrame(render)
}

function handleResize() {
  const canvas = canvasRef.value
  if (!canvas) return
  const rect = canvas.getBoundingClientRect()
  const dpr = window.devicePixelRatio || 1
  canvas.width = Math.floor(rect.width * dpr)
  canvas.height = Math.floor(rect.height * dpr)
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
  render()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId)
  }
})

watch(() => props.state, (s) => {
  currentState.value = s
})
</script>

<template>
  <div :class="cn('w-full max-w-2xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-5', props.class)">
    <!-- 头部状态栏与控制面板 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
        <Activity class="h-4 w-4 text-sky-500" />
        <span>音频可视化</span>
      </div>

      <div class="flex items-center gap-1.5">
        <button
          type="button"
          @click="isMuted = !isMuted"
          :class="[
            'p-2 rounded-xl border transition-colors cursor-pointer',
            isMuted
              ? 'border-rose-500/30 bg-rose-500/10 text-rose-500'
              : 'border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800',
          ]"
          :title="isMuted ? '解除静音' : '静音'"
        >
          <MicOff v-if="isMuted" class="h-4 w-4" />
          <Mic v-else class="h-4 w-4" />
        </button>
      </div>
    </div>

    <!-- 视觉画布呈现舞台 -->
    <div class="relative h-48 sm:h-52 w-full overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-900/5 dark:border-zinc-800/80 dark:bg-zinc-900/40 flex items-center justify-center">
      <canvas
        ref="canvasRef"
        class="h-full w-full block"
      />

      <!-- 底部实时波形指示点 -->
      <div class="absolute bottom-2.5 right-3 flex items-center gap-1.5 text-[10px] font-mono text-zinc-400">
        <Volume2 class="h-3 w-3 text-sky-500" />
        <span>48kHz · 24-bit PCM</span>
      </div>
    </div>

    <!-- 底部模式与状态切换工具栏 -->
    <div class="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs">
      <!-- 渲染模式选择 -->
      <div class="flex items-center gap-1 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900/80">
        <button
          type="button"
          @click="currentMode = 'wave'"
          :class="[
            'px-3 py-1 rounded-lg font-medium transition-all cursor-pointer',
            currentMode === 'wave'
              ? 'bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-white'
              : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400',
          ]"
        >
          波形
        </button>
        <button
          type="button"
          @click="currentMode = 'bars'"
          :class="[
            'px-3 py-1 rounded-lg font-medium transition-all cursor-pointer',
            currentMode === 'bars'
              ? 'bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-white'
              : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400',
          ]"
        >
          柱状
        </button>
        <button
          type="button"
          @click="currentMode = 'orb'"
          :class="[
            'px-3 py-1 rounded-lg font-medium transition-all cursor-pointer',
            currentMode === 'orb'
              ? 'bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-white'
              : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400',
          ]"
        >
          光球
        </button>
      </div>

      <!-- 状态模拟切换 -->
      <div class="flex items-center gap-1">
        <button
          type="button"
          v-for="st in (['speaking', 'listening', 'thinking', 'idle'] as const)"
          :key="st"
          @click="currentState = st"
          :class="[
            'px-2.5 py-1 rounded-lg border text-[11px] font-mono capitalize transition-all cursor-pointer',
            currentState === st
              ? 'border-sky-500/40 bg-sky-500/10 font-bold text-sky-600 dark:text-sky-400 shadow-sm'
              : 'border-transparent text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-200',
          ]"
        >
          <Sparkles v-if="currentState === st && st === 'thinking'" class="inline h-3 w-3 mr-0.5" />
          {{ st }}
        </button>
      </div>
    </div>
  </div>
</template>
