<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { cn } from '@/lib/utils'
import { PenTool, Eraser, RotateCcw, Trash2, Download, Check } from 'lucide-vue-next'

export interface InteractiveCanvasProps {
  title?: string
  subtitle?: string
  width?: number
  height?: number
  class?: string
}

const props = withDefaults(defineProps<InteractiveCanvasProps>(), {
  title: '手写画板',
  subtitle: '可以手绘或签名，支持调节粗细、换颜色、撤销和导出图片',
  width: 540,
  height: 260,
})

const canvasRef = ref<HTMLCanvasElement | null>(null)
const isDrawing = ref(false)
const selectedColor = ref('#6366f1')
const lineWidth = ref(4)
const isEraser = ref(false)
const copied = ref(false)

const colors = [
  { name: '靛蓝', value: '#6366f1' },
  { name: '绿色', value: '#10b981' },
  { name: '红色', value: '#f43f5e' },
  { name: '橙色', value: '#f59e0b' },
  { name: '黑色', value: '#18181b' },
]

// 撤销历史队列
const history = ref<ImageData[]>([])

let lastX = 0
let lastY = 0

function saveHistory() {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  if (history.value.length > 15) {
    history.value.shift()
  }
  history.value.push(ctx.getImageData(0, 0, canvas.width, canvas.height))
}

function startDrawing(e: MouseEvent | TouchEvent) {
  const canvas = canvasRef.value
  if (!canvas) return
  const rect = canvas.getBoundingClientRect()
  const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
  const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY

  saveHistory()
  isDrawing.value = true
  lastX = clientX - rect.left
  lastY = clientY - rect.top
}

function draw(e: MouseEvent | TouchEvent) {
  if (!isDrawing.value) return
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const rect = canvas.getBoundingClientRect()
  const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
  const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY
  const currentX = clientX - rect.left
  const currentY = clientY - rect.top

  ctx.lineWidth = lineWidth.value
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'

  if (isEraser.value) {
    ctx.globalCompositeOperation = 'destination-out'
  } else {
    ctx.globalCompositeOperation = 'source-over'
    ctx.strokeStyle = selectedColor.value
  }

  // 二次贝塞尔曲线平滑绘制中点
  ctx.beginPath()
  ctx.moveTo(lastX, lastY)
  const midX = (lastX + currentX) / 2
  const midY = (lastY + currentY) / 2
  ctx.quadraticCurveTo(lastX, lastY, midX, midY)
  ctx.stroke()

  lastX = currentX
  lastY = currentY
}

function stopDrawing() {
  isDrawing.value = false
}

function undo() {
  const canvas = canvasRef.value
  if (!canvas || history.value.length === 0) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  const previous = history.value.pop()
  if (previous) {
    ctx.putImageData(previous, 0, 0)
  }
}

function clearCanvas() {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  saveHistory()
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function exportImage() {
  const canvas = canvasRef.value
  if (!canvas) return
  const dataUrl = canvas.toDataURL('image/png')
  const a = document.createElement('a')
  a.href = dataUrl
  a.download = `aura-sketch-${Date.now()}.png`
  a.click()

  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 1500)
}

onMounted(() => {
  const canvas = canvasRef.value
  if (canvas) {
    canvas.width = canvas.parentElement?.clientWidth || props.width
    canvas.height = props.height
  }
})
</script>

<template>
  <div :class="cn('w-full max-w-xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-5', props.class)">
    <!-- 头部指标栏 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-2.5">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
          <PenTool class="h-5 w-5" />
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

      <div class="flex items-center gap-1.5">
        <button
          type="button"
          @click="exportImage"
          class="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-900 text-xs font-semibold shadow-sm transition-colors cursor-pointer"
        >
          <Check v-if="copied" class="h-3.5 w-3.5 text-emerald-400" />
          <Download v-else class="h-3.5 w-3.5" />
          <span>{{ copied ? '已生成' : '导出 PNG' }}</span>
        </button>
      </div>
    </div>

    <!-- 画布工作区 -->
    <div class="relative rounded-xl border border-zinc-200/90 bg-zinc-50 dark:border-zinc-800/90 dark:bg-zinc-900/60 overflow-hidden shadow-inner">
      <!-- 背景网格纸纹 -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.06)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      <canvas
        ref="canvasRef"
        class="w-full block cursor-crosshair touch-none relative z-10"
        @mousedown="startDrawing"
        @mousemove="draw"
        @mouseup="stopDrawing"
        @mouseleave="stopDrawing"
        @touchstart="startDrawing"
        @touchmove="draw"
        @touchend="stopDrawing"
      />

      <!-- 右下角水印 -->
      <div class="absolute bottom-2 right-3 z-20 text-[10px] font-mono text-zinc-400 pointer-events-none select-none">
        AURA SKETCHPAD
      </div>
    </div>

    <!-- 工具与调色栏 -->
    <div class="flex flex-wrap items-center justify-between gap-4">
      <!-- 调色盘 -->
      <div class="flex items-center gap-2">
        <button
          v-for="col in colors"
          :key="col.value"
          type="button"
          @click="selectedColor = col.value; isEraser = false"
          :class="[
            'w-6 h-6 rounded-full transition-transform cursor-pointer border border-white/50 shadow-sm',
            selectedColor === col.value && !isEraser ? 'scale-125 ring-2 ring-indigo-500 ring-offset-2 dark:ring-offset-zinc-900' : 'hover:scale-110'
          ]"\n          :style="{ backgroundColor: col.value }"
          :title="col.name"
        />

        <div class="h-4 w-px bg-zinc-200 dark:bg-zinc-800 mx-1" />

        <!-- 橡皮擦 -->
        <button
          type="button"
          @click="isEraser = !isEraser"
          :class="[
            'p-1.5 rounded-lg border text-xs transition-colors cursor-pointer',
            isEraser
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300'
          ]"
          title="橡皮擦"
        >
          <Eraser class="h-3.5 w-3.5" />
        </button>
      </div>

      <!-- 粗细与撤销 -->
      <div class="flex items-center gap-2">
        <div class="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-xs font-mono">
          <button
            v-for="w in [2, 4, 8]"
            :key="w"
            type="button"
            @click="lineWidth = w"
            :class="[
              'px-2 py-0.5 rounded-md cursor-pointer transition-colors',
              lineWidth === w ? 'bg-white shadow-sm font-bold text-zinc-900 dark:bg-zinc-800 dark:text-white' : 'text-zinc-400 hover:text-zinc-700'
            ]"
          >
            {{ w }}px
          </button>
        </div>

        <button
          type="button"
          @click="undo"
          class="p-2 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors cursor-pointer"
          title="撤销"
        >
          <RotateCcw class="h-3.5 w-3.5" />
        </button>

        <button
          type="button"
          @click="clearCanvas"
          class="p-2 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-rose-950 dark:hover:text-rose-400 text-zinc-600 dark:text-zinc-400 transition-colors cursor-pointer"
          title="清空画布"
        >
          <Trash2 class="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  </div>
</template>
