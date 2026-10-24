<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight, Sparkles, Orbit, MoveHorizontal } from 'lucide-vue-next'

export interface CarouselCard {
  id: string
  title: string
  badge: string
  desc: string
  color: string
}

export interface CircularCarouselProps {
  radius?: number
  class?: string
}

const props = withDefaults(defineProps<CircularCarouselProps>(), {
  radius: 240,
})

const cards = ref<CarouselCard[]>([
  { id: '1', title: '图片编辑', badge: 'PHOTO', desc: '滤镜、裁剪和调色', color: 'from-sky-500 to-blue-600' },
  { id: '2', title: '数据报表', badge: 'REPORT', desc: '每周关键指标汇总', color: 'from-purple-500 to-indigo-600' },
  { id: '3', title: 'AI 写作', badge: 'WRITE', desc: '生成摘要和营销文案', color: 'from-pink-500 to-rose-600' },
  { id: '4', title: '团队协作', badge: 'TEAM', desc: '共享文档与评论', color: 'from-amber-500 to-orange-600' },
  { id: '5', title: '自动化', badge: 'FLOW', desc: '按条件自动执行任务', color: 'from-emerald-500 to-teal-600' },
])

const activeIndex = ref(0)
const currentAngle = ref(0)
const isDragging = ref(false)
const hasDragged = ref(false)

let startX = 0
let startAngle = 0
let lastX = 0
let lastTime = 0
let velocity = 0
let wheelTimeout: ReturnType<typeof setTimeout> | null = null

const stepAngle = 360 / cards.value.length

function syncActiveIndex() {
  const normalized = ((-currentAngle.value % 360) + 360) % 360
  activeIndex.value = Math.round(normalized / stepAngle) % cards.value.length
}

function next() {
  currentAngle.value -= stepAngle
  syncActiveIndex()
}

function prev() {
  currentAngle.value += stepAngle
  syncActiveIndex()
}

function selectCard(idx: number) {
  if (hasDragged.value) return
  let diff = idx - activeIndex.value
  if (diff > cards.value.length / 2) diff -= cards.value.length
  if (diff < -cards.value.length / 2) diff += cards.value.length
  currentAngle.value -= diff * stepAngle
  activeIndex.value = idx
}

function handlePointerDown(e: PointerEvent) {
  isDragging.value = true
  hasDragged.value = false
  startX = e.clientX
  startAngle = currentAngle.value
  lastX = e.clientX
  lastTime = performance.now()
  velocity = 0

  const target = e.currentTarget as HTMLElement | null
  if (target && target.setPointerCapture) {
    try {
      target.setPointerCapture(e.pointerId)
    } catch {}
  }
}

function handlePointerMove(e: PointerEvent) {
  if (!isDragging.value) return
  const dx = e.clientX - startX
  if (Math.abs(dx) > 5) {
    hasDragged.value = true
  }

  // 灵敏度换算：屏幕拖拽像素转为 3D 旋转角度
  const sensitivity = 0.38
  currentAngle.value = startAngle + dx * sensitivity

  const now = performance.now()
  const dt = now - lastTime
  if (dt > 16) {
    velocity = (e.clientX - lastX) / dt
    lastX = e.clientX
    lastTime = now
  }

  syncActiveIndex()
}

function handlePointerUp(e: PointerEvent) {
  if (!isDragging.value) return
  isDragging.value = false

  const target = e.currentTarget as HTMLElement | null
  if (target && target.releasePointerCapture) {
    try {
      target.releasePointerCapture(e.pointerId)
    } catch {}
  }

  // 根据释放时的旋转角或滑动手势动量，吸附到最近卡片
  let targetAngle = currentAngle.value
  if (Math.abs(velocity) > 0.45) {
    targetAngle += velocity * 45
  }

  const snappedOffset = Math.round(-targetAngle / stepAngle)
  currentAngle.value = -snappedOffset * stepAngle
  activeIndex.value = ((snappedOffset % cards.value.length) + cards.value.length) % cards.value.length

  // 重置防抖标记
  setTimeout(() => {
    hasDragged.value = false
  }, 60)
}

function handleWheel(e: WheelEvent) {
  if (wheelTimeout) return
  const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY
  if (Math.abs(delta) < 12) return

  if (delta > 0) {
    next()
  } else {
    prev()
  }

  wheelTimeout = setTimeout(() => {
    wheelTimeout = null
  }, 220)
}
</script>

<template>
  <div
    :class="cn('w-full max-w-2xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6 focus:outline-none', props.class)"
    tabindex="0"
    @keydown.left="prev"
    @keydown.right="next"
  >
    <!-- 头部看板 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-2.5">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
          <Orbit class="h-5 w-5" />
        </div>
        <div>
          <h4 class="font-bold text-sm text-zinc-900 dark:text-white">
            3D 环形轮播
          </h4>
          <p class="text-xs text-zinc-400 font-mono">
            拖动、滚动鼠标滚轮或按方向键切换卡片
          </p>
        </div>
      </div>

      <div class="flex items-center gap-1.5">
        <button
          type="button"
          @click="prev"
          class="p-2 rounded-lg border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
          title="向左旋转"
        >
          <ChevronLeft class="h-4 w-4" />
        </button>
        <button
          type="button"
          @click="next"
          class="p-2 rounded-lg border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
          title="向右旋转"
        >
          <ChevronRight class="h-4 w-4" />
        </button>
      </div>
    </div>

    <!-- 3D 轮播环舞台 (支持手势拖拽、鼠标指针与滚轮) -->
    <div
      class="relative h-64 w-full overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-950/95 dark:border-zinc-800/80 flex items-center justify-center perspective-[800px] touch-pan-y cursor-grab active:cursor-grabbing group"
      @pointerdown="handlePointerDown"
      @pointermove="handlePointerMove"
      @pointerup="handlePointerUp"
      @pointercancel="handlePointerUp"
      @wheel.prevent="handleWheel"
    >
      <!-- 环形旋转容器 -->
      <div
        class="relative w-44 h-40 transform-style-3d flex items-center justify-center pointer-events-none"
        :class="isDragging ? 'transition-none' : 'transition-transform duration-500 ease-out'"
        :style="{
          transform: `rotateY(${currentAngle}deg)`,
        }"
      >
        <div
          v-for="(card, i) in cards"
          :key="card.id"
          @click="selectCard(i)"
          :class="[
            'card-cylinder absolute inset-0 rounded-2xl p-4 flex flex-col justify-between text-white shadow-xl transition-all duration-300 cursor-pointer pointer-events-auto',
            'bg-gradient-to-br',
            card.color,
            activeIndex === i
              ? 'ring-2 ring-white/80 shadow-[0_0_35px_rgba(255,255,255,0.25)] scale-105 opacity-100 z-30'
              : 'opacity-65 hover:opacity-90 scale-95 z-10',
          ]"
          :style="{
            transform: `rotateY(${i * (360 / cards.length)}deg) translateZ(${props.radius}px)`,
          }"
        >
          <div class="flex items-center justify-between">
            <span class="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-white/20 backdrop-blur-md">
              {{ card.badge }}
            </span>
            <Sparkles class="h-3.5 w-3.5 opacity-80" />
          </div>

          <div>
            <h5 class="text-base font-black tracking-tight">
              {{ card.title }}
            </h5>
            <p class="text-[10px] text-white/85 font-mono mt-0.5 leading-snug">
              {{ card.desc }}
            </p>
          </div>
        </div>
      </div>

      <!-- 拖拽操作提示胶囊 -->
      <div
        class="absolute bottom-2.5 px-3 py-1 rounded-full bg-zinc-900/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-400 pointer-events-none flex items-center gap-1.5 transition-opacity duration-300"
        :class="isDragging ? 'opacity-20' : 'opacity-80 group-hover:opacity-100'"
      >
        <MoveHorizontal class="w-3 h-3 text-sky-400" />
        <span>{{ isDragging ? '松开后对齐到最近的卡片' : '左右拖动旋转 · 也可以用滚轮或方向键' }}</span>
      </div>
    </div>

    <!-- 底部轮播指示点 -->
    <div class="flex items-center justify-center gap-1.5 pt-1">
      <button
        type="button"
        v-for="(_, i) in cards"
        :key="i"
        @click="selectCard(i)"
        :class="[
          'h-1.5 rounded-full transition-all duration-300 cursor-pointer',
          activeIndex === i
            ? 'w-6 bg-blue-600 dark:bg-blue-400'
            : 'w-1.5 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400',
        ]"
      />
    </div>
  </div>
</template>

<style scoped>
.transform-style-3d {
  transform-style: preserve-3d;
}

.card-cylinder {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
</style>
