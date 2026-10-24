<script setup lang="ts">
import { computed, onUnmounted, ref, watch } from 'vue'
import { cn } from '@/lib/utils'

interface IconMorphProps {
  /** 当前形变状态：active (激活态) / inactive (常态) */
  modelValue?: boolean
  /** 图标形变模式：menu-close / play-pause / plus-minus / chevron-x */
  mode?: 'menu-close' | 'play-pause' | 'plus-minus'
  /** 图标尺寸，默认 24 */
  size?: number
  /** 线条宽度，默认 2 */
  strokeWidth?: number
  class?: string
}

const props = withDefaults(defineProps<IconMorphProps>(), {
  modelValue: false,
  mode: 'menu-close',
  size: 24,
  strokeWidth: 2,
})

const emit = defineEmits<{
  (e: 'update:modelValue', val: boolean): void
  (e: 'click'): void
}>()

function toggle() {
  emit('update:modelValue', !props.modelValue)
  emit('click')
}

// ================= Menu ↔ Close =================
// 三条线都画在 y=12，常态通过 translateY 上下分开；
// 这样旋转中心 (origin-center，即 viewBox 中心 12,12) 恰好落在每条线自身中点，叉号始终居中。
// 叉号态缩放到 0.943（18 → 12√2），使两条对角线与 lucide X 图标一致（6,6 → 18,18）。
const menuLineTransform = (offsetY: number, angle: number) =>
  props.modelValue
    ? `translateY(0px) rotate(${angle}deg) scaleX(0.943)`
    : `translateY(${offsetY}px) rotate(0deg) scaleX(1)`

// ================= Play ↔ Pause =================
// 三角形拆成上下两条斜边，逐帧插值端点：激活时两条斜边向右收拢，合拢为暂停的右竖线
// （用 JS 插值而非 CSS 的 d 属性过渡，Safari 不支持 d 过渡）
type Segment = [number, number, number, number]
const PLAY = { top: [6, 4, 20, 12] as Segment, bottom: [6, 20, 20, 12] as Segment }
const PAUSE = { top: [18, 4, 18, 12] as Segment, bottom: [18, 20, 18, 12] as Segment }

const morphProgress = ref(props.modelValue ? 1 : 0)
let rafId = 0

// 与 cubic-bezier(0.16, 1, 0.3, 1) 等价的 easeOutExpo 缓动
function easeOutExpo(t: number) {
  return t >= 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

watch(
  () => props.modelValue,
  (active) => {
    cancelAnimationFrame(rafId)
    const from = morphProgress.value
    const to = active ? 1 : 0
    const startedAt = performance.now()
    const duration = 300
    const tick = (now: number) => {
      const t = Math.min((now - startedAt) / duration, 1)
      morphProgress.value = from + (to - from) * easeOutExpo(t)
      if (t < 1) rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
  }
)

onUnmounted(() => cancelAnimationFrame(rafId))

const lerpSegment = (a: Segment, b: Segment, p: number) => a.map((v, i) => v + (b[i] - v) * p) as Segment

const playLines = computed(() => ({
  top: lerpSegment(PLAY.top, PAUSE.top, morphProgress.value),
  bottom: lerpSegment(PLAY.bottom, PAUSE.bottom, morphProgress.value),
}))
</script>

<template>
  <button
    type="button"
    @click="toggle"
    :class="
      cn(
        'relative inline-flex items-center justify-center rounded-xl p-2 text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white cursor-pointer select-none',
        props.class
      )
    "
    :style="{ width: `${props.size + 16}px`, height: `${props.size + 16}px` }"
  >
    <!-- 1. Menu ↔ Close 汉堡到叉号形态 -->
    <svg
      v-if="props.mode === 'menu-close'"
      :width="props.size"
      :height="props.size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      :stroke-width="props.strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="overflow-visible"
    >
      <!-- 上横线：下沉至中心并旋转，变成叉号的一捺 -->
      <line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        class="transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center [transform-box:view-box]"
        :style="{ transform: menuLineTransform(-6, 45) }"
      />
      <!-- 中横线：缩放至 0 透明淡出 -->
      <line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        class="transition-all duration-200 ease-out origin-center"
        :style="{
          opacity: props.modelValue ? '0' : '1',
          transform: props.modelValue ? 'scaleX(0)' : 'scaleX(1)',
        }"
      />
      <!-- 下横线：上升至中心并旋转，变成叉号的一撇 -->
      <line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        class="transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center [transform-box:view-box]"
        :style="{ transform: menuLineTransform(6, -45) }"
      />
    </svg>

    <!-- 2. Play ↔ Pause 播放到暂停形态 -->
    <svg
      v-else-if="props.mode === 'play-pause'"
      :width="props.size"
      :height="props.size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      :stroke-width="props.strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="overflow-visible"
    >
      <!-- 左竖线：播放三角形左边 / 暂停左竖线，保持不动 -->
      <line x1="6" y1="4" x2="6" y2="20" />
      <!-- 上斜边：合拢为暂停右竖线上半段 -->
      <line :x1="playLines.top[0]" :y1="playLines.top[1]" :x2="playLines.top[2]" :y2="playLines.top[3]" />
      <!-- 下斜边：合拢为暂停右竖线下半段 -->
      <line :x1="playLines.bottom[0]" :y1="playLines.bottom[1]" :x2="playLines.bottom[2]" :y2="playLines.bottom[3]" />
    </svg>

    <!-- 3. Plus ↔ Minus 加号到减号形态 -->
    <svg
      v-else-if="props.mode === 'plus-minus'"
      :width="props.size"
      :height="props.size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      :stroke-width="props.strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <!-- 水平横线保持不变 -->
      <line x1="5" y1="12" x2="19" y2="12" />
      <!-- 垂直坚线旋转平滑收拢消失 -->
      <line
        x1="12"
        y1="5"
        x2="12"
        y2="19"
        class="transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center"
        :style="{
          transform: props.modelValue ? 'rotate(90deg) scale(0)' : 'rotate(0deg) scale(1)',
          opacity: props.modelValue ? '0' : '1',
        }"
      />
    </svg>
  </button>
</template>
