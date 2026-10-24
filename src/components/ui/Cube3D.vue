<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import {
  Rotate3d,
  Cpu,
  Database,
  Globe,
  Layers,
  Zap,
  Activity,
  Play,
  Pause,
} from 'lucide-vue-next'

export interface Cube3DProps {
  size?: number
  autoRotate?: boolean
  class?: string
}

const props = withDefaults(defineProps<Cube3DProps>(), {
  size: 200,
  autoRotate: true,
})

const rotX = ref(-22)
const rotY = ref(35)
const isAuto = ref(props.autoRotate)
const isDragging = ref(false)

let startX = 0
let startY = 0
let initialRotX = 0
let initialRotY = 0
let animFrame: number | null = null

function handlePointerDown(e: PointerEvent) {
  isDragging.value = true
  startX = e.clientX
  startY = e.clientY
  initialRotX = rotX.value
  initialRotY = rotY.value
  ;(e.target as HTMLElement)?.setPointerCapture(e.pointerId)
}

function handlePointerMove(e: PointerEvent) {
  if (!isDragging.value) return
  const dx = e.clientX - startX
  const dy = e.clientY - startY
  rotY.value = initialRotY + dx * 0.5
  rotX.value = Math.max(-85, Math.min(85, initialRotX - dy * 0.5))
}

function handlePointerUp(e: PointerEvent) {
  if (!isDragging.value) return
  isDragging.value = false
  try {
    ;(e.target as HTMLElement)?.releasePointerCapture(e.pointerId)
  } catch {
    // ignore
  }
}

function rotateToFace(face: 'front' | 'right' | 'back' | 'left' | 'top' | 'bottom') {
  isAuto.value = false
  switch (face) {
    case 'front':
      rotX.value = 0
      rotY.value = 0
      break
    case 'right':
      rotX.value = 0
      rotY.value = -90
      break
    case 'back':
      rotX.value = 0
      rotY.value = 180
      break
    case 'left':
      rotX.value = 0
      rotY.value = 90
      break
    case 'top':
      rotX.value = -90
      rotY.value = 0
      break
    case 'bottom':
      rotX.value = 90
      rotY.value = 0
      break
  }
}

function loop() {
  if (isAuto.value && !isDragging.value) {
    rotY.value = (rotY.value + 0.35) % 360
  }
  animFrame = requestAnimationFrame(loop)
}

onMounted(() => {
  animFrame = requestAnimationFrame(loop)
})

onUnmounted(() => {
  if (animFrame !== null) cancelAnimationFrame(animFrame)
})

const half = props.size / 2
</script>

<template>
  <div :class="cn('w-full max-w-2xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6', props.class)">
    <!-- 头部看板 -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
        <Rotate3d class="h-4 w-4 text-indigo-500" />
        <span>3D 旋转立方体</span>
      </div>

      <div class="flex items-center gap-1.5">
        <button
          type="button"
          @click="isAuto = !isAuto"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 bg-zinc-50 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
        >
          <Pause v-if="isAuto" class="h-3.5 w-3.5 text-amber-500" />
          <Play v-else class="h-3.5 w-3.5 text-emerald-500" />
          <span>{{ isAuto ? '暂停自转' : '开启自转' }}</span>
        </button>
      </div>
    </div>

    <!-- 3D 舞台区域 -->
    <div
      class="relative h-80 w-full overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-950/95 dark:border-zinc-800/80 flex items-center justify-center perspective-[1000px] cursor-grab active:cursor-grabbing touch-none"
      @pointerdown="handlePointerDown"
      @pointermove="handlePointerMove"
      @pointerup="handlePointerUp"
      @pointercancel="handlePointerUp"
    >
      <!-- 背景空间科技粒子光晕 -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_65%)] pointer-events-none" />

      <!-- 3D 魔方容器 -->
      <div
        class="cube relative transform-style-3d transition-transform duration-75"
        :style="{
          width: `${props.size}px`,
          height: `${props.size}px`,
          transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
        }"
      >
        <!-- 1. Front 面: 算力调度 -->
        <div
          class="face absolute inset-0 rounded-2xl border border-sky-400/50 bg-sky-950/80 backdrop-blur-md p-4 flex flex-col justify-between text-white shadow-xl shadow-sky-500/10"
          :style="{ transform: `rotateY(0deg) translateZ(${half}px)` }"
        >
          <div class="flex items-center justify-between text-sky-400 text-xs font-mono">
            <span class="flex items-center gap-1"><Cpu class="h-3.5 w-3.5" /> COMPUTE</span>
            <span class="text-[10px]">#01</span>
          </div>
          <div class="text-center my-auto">
            <div class="text-2xl font-black font-mono tracking-tight text-sky-300">98.4</div>
            <div class="text-[10px] text-sky-400/80 font-mono">TFLOPS · Peak FP16</div>
          </div>
          <div class="text-[9px] text-zinc-400 font-mono text-right">FRONT FACE</div>
        </div>

        <!-- 2. Back 面: 拓扑节点 -->
        <div
          class="face absolute inset-0 rounded-2xl border border-purple-400/50 bg-purple-950/80 backdrop-blur-md p-4 flex flex-col justify-between text-white shadow-xl shadow-purple-500/10"
          :style="{ transform: `rotateY(180deg) translateZ(${half}px)` }"
        >
          <div class="flex items-center justify-between text-purple-400 text-xs font-mono">
            <span class="flex items-center gap-1"><Globe class="h-3.5 w-3.5" /> CLUSTER</span>
            <span class="text-[10px]">#02</span>
          </div>
          <div class="text-center my-auto">
            <div class="text-2xl font-black font-mono tracking-tight text-purple-300">1,024</div>
            <div class="text-[10px] text-purple-400/80 font-mono">Nodes Active · 99.9%</div>
          </div>
          <div class="text-[9px] text-zinc-400 font-mono text-right">BACK FACE</div>
        </div>

        <!-- 3. Right 面: 显存吞吐 -->
        <div
          class="face absolute inset-0 rounded-2xl border border-indigo-400/50 bg-indigo-950/80 backdrop-blur-md p-4 flex flex-col justify-between text-white shadow-xl shadow-indigo-500/10"
          :style="{ transform: `rotateY(90deg) translateZ(${half}px)` }"
        >
          <div class="flex items-center justify-between text-indigo-400 text-xs font-mono">
            <span class="flex items-center gap-1"><Database class="h-3.5 w-3.5" /> MEMORY</span>
            <span class="text-[10px]">#03</span>
          </div>
          <div class="text-center my-auto">
            <div class="text-2xl font-black font-mono tracking-tight text-indigo-300">3.2</div>
            <div class="text-[10px] text-indigo-400/80 font-mono">TB/s · HBM3e Bus</div>
          </div>
          <div class="text-[9px] text-zinc-400 font-mono text-right">RIGHT FACE</div>
        </div>

        <!-- 4. Left 面: 上下文池 -->
        <div
          class="face absolute inset-0 rounded-2xl border border-emerald-400/50 bg-emerald-950/80 backdrop-blur-md p-4 flex flex-col justify-between text-white shadow-xl shadow-emerald-500/10"
          :style="{ transform: `rotateY(-90deg) translateZ(${half}px)` }"
        >
          <div class="flex items-center justify-between text-emerald-400 text-xs font-mono">
            <span class="flex items-center gap-1"><Layers class="h-3.5 w-3.5" /> CONTEXT</span>
            <span class="text-[10px]">#04</span>
          </div>
          <div class="text-center my-auto">
            <div class="text-2xl font-black font-mono tracking-tight text-emerald-300">2,000K</div>
            <div class="text-[10px] text-emerald-400/80 font-mono">Tokens Window</div>
          </div>
          <div class="text-[9px] text-zinc-400 font-mono text-right">LEFT FACE</div>
        </div>

        <!-- 5. Top 面: 网络延迟 -->
        <div
          class="face absolute inset-0 rounded-2xl border border-amber-400/50 bg-amber-950/80 backdrop-blur-md p-4 flex flex-col justify-between text-white shadow-xl shadow-amber-500/10"
          :style="{ transform: `rotateX(90deg) translateZ(${half}px)` }"
        >
          <div class="flex items-center justify-between text-amber-400 text-xs font-mono">
            <span class="flex items-center gap-1"><Zap class="h-3.5 w-3.5" /> LATENCY</span>
            <span class="text-[10px]">#05</span>
          </div>
          <div class="text-center my-auto">
            <div class="text-2xl font-black font-mono tracking-tight text-amber-300">1.2ms</div>
            <div class="text-[10px] text-amber-400/80 font-mono">RTT Interconnect</div>
          </div>
          <div class="text-[9px] text-zinc-400 font-mono text-right">TOP FACE</div>
        </div>

        <!-- 6. Bottom 面: 散热能效 -->
        <div
          class="face absolute inset-0 rounded-2xl border border-rose-400/50 bg-rose-950/80 backdrop-blur-md p-4 flex flex-col justify-between text-white shadow-xl shadow-rose-500/10"
          :style="{ transform: `rotateX(-90deg) translateZ(${half}px)` }"
        >
          <div class="flex items-center justify-between text-rose-400 text-xs font-mono">
            <span class="flex items-center gap-1"><Activity class="h-3.5 w-3.5" /> THERMAL</span>
            <span class="text-[10px]">#06</span>
          </div>
          <div class="text-center my-auto">
            <div class="text-2xl font-black font-mono tracking-tight text-rose-300">42°C</div>
            <div class="text-[10px] text-rose-400/80 font-mono">Liquid Cooling OK</div>
          </div>
          <div class="text-[9px] text-zinc-400 font-mono text-right">BOTTOM FACE</div>
        </div>
      </div>
    </div>

    <!-- 底部快捷回正面定位按钮群 -->
    <div class="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs">
      <span class="text-xs text-zinc-400 font-mono">视角切换：</span>
      <div class="flex flex-wrap items-center gap-1.5">
        <button
          type="button"
          v-for="face in (['front', 'right', 'back', 'left', 'top', 'bottom'] as const)"
          :key="face"
          @click="rotateToFace(face)"
          class="px-2.5 py-1 rounded-lg border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-[11px] font-mono capitalize text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
        >
          {{ face }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.transform-style-3d {
  transform-style: preserve-3d;
}
.face {
  backface-visibility: visible;
}
</style>
