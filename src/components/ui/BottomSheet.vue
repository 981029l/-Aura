<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'
import {
  X,
  ChevronUp,
  ChevronDown,
  Check,
  Share2,
  Sparkles,
  Sliders,
  RotateCcw,
} from 'lucide-vue-next'

export interface BottomSheetProps {
  modelValue?: boolean
  title?: string
  description?: string
  initialSnap?: 'peek' | 'half' | 'full'
  class?: string
}

const props = withDefaults(defineProps<BottomSheetProps>(), {
  modelValue: true,
  title: '筛选条件',
  description: '拖动顶部把手可以调整面板高度',
  initialSnap: 'half',
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  change: [snap: 'peek' | 'half' | 'full']
}>()

const isOpen = computed({
  get: () => props.modelValue,
  set: (val: boolean) => emit('update:modelValue', val),
})

export type SnapLevel = 'peek' | 'half' | 'full'
const currentSnap = ref<SnapLevel>(props.initialSnap)

// 容器总高 500px，各档位对应的高度类
const snapHeights: Record<SnapLevel, string> = {
  peek: 'h-28',
  half: 'h-[300px]',
  full: 'h-[465px]',
}

// 物理参数开关（真实实时生效）
const highPerformance = ref(true)    // 物理弹性阻尼开关：true 为 0.25 弹性阻尼，false 为 0 刚性死边界
const notificationEnabled = ref(true) // 高灵敏吸附开关：true 为 35px 极灵敏换挡，false 为 95px 迟钝换挡
const physicsTip = ref('')
let tipTimer: ReturnType<typeof setTimeout> | null = null

function showTip(text: string) {
  physicsTip.value = text
  if (tipTimer) clearTimeout(tipTimer)
  tipTimer = setTimeout(() => {
    physicsTip.value = ''
  }, 2200)
}

function togglePhysicsEngine() {
  highPerformance.value = !highPerformance.value
  showTip(highPerformance.value ? '已开启：拖到边界时有回弹' : '已关闭：拖到边界时直接停住')
}

function toggleSensitivity() {
  notificationEnabled.value = !notificationEnabled.value
  showTip(notificationEnabled.value ? '已开启：拖动 35px 即切换档位' : '已关闭：需要拖动 95px 才切换档位')
}

// 拖拽逻辑与物理状态
const isDragging = ref(false)
const dragDeltaY = ref(0)
let startY = 0
let initialSnapBeforeDrag: SnapLevel = 'half'

function handlePointerDown(e: PointerEvent) {
  isDragging.value = true
  startY = e.clientY
  dragDeltaY.value = 0
  initialSnapBeforeDrag = currentSnap.value
  ;(e.currentTarget as HTMLElement)?.setPointerCapture(e.pointerId)
}

function handlePointerMove(e: PointerEvent) {
  if (!isDragging.value) return
  const rawDelta = e.clientY - startY

  if (rawDelta > 0) {
    // 向下拉：如果已经在 peek 档位
    if (initialSnapBeforeDrag === 'peek') {
      // 开启高频物理引擎施加 0.35 橡皮筋阻尼；关闭则刚性限制为 0，拉不动
      dragDeltaY.value = highPerformance.value ? rawDelta * 0.35 : 0
    } else {
      dragDeltaY.value = rawDelta
    }
  } else {
    // 向上拉：如果已经在 full 档位
    if (initialSnapBeforeDrag === 'full') {
      // 开启高频物理引擎施加 0.25 橡皮筋阻尼；关闭则刚性限制为 0，拉不动
      dragDeltaY.value = highPerformance.value ? rawDelta * 0.25 : 0
    } else {
      dragDeltaY.value = rawDelta
    }
  }
}

function handlePointerUp(e: PointerEvent) {
  if (!isDragging.value) return
  isDragging.value = false
  try {
    ;(e.currentTarget as HTMLElement)?.releasePointerCapture(e.pointerId)
  } catch {
    // ignore
  }

  const delta = dragDeltaY.value
  dragDeltaY.value = 0

  // 灵敏度开关直接联动吸附判定阈值
  const threshold = notificationEnabled.value ? 35 : 95
  const closeThreshold = notificationEnabled.value ? 80 : 140

  if (delta > threshold) {
    // 向下拉动换挡
    if (initialSnapBeforeDrag === 'full') {
      setSnap('half')
    } else if (initialSnapBeforeDrag === 'half') {
      setSnap('peek')
    } else if (initialSnapBeforeDrag === 'peek') {
      if (delta > closeThreshold) {
        close()
      }
    }
  } else if (delta < -threshold) {
    // 向上拉动换挡
    if (initialSnapBeforeDrag === 'peek') {
      setSnap('half')
    } else if (initialSnapBeforeDrag === 'half') {
      setSnap('full')
    }
  }
}

function setSnap(snap: SnapLevel) {
  currentSnap.value = snap
  if (!isOpen.value) {
    isOpen.value = true
  }
  if (highPerformance.value) {
    try {
      if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
        navigator.vibrate(10)
      }
    } catch {
      // ignore
    }
  }
  emit('change', snap)
}

function toggleExpand() {
  if (!isOpen.value) {
    reopen()
    return
  }
  if (currentSnap.value === 'peek') {
    setSnap('half')
  } else if (currentSnap.value === 'half') {
    setSnap('full')
  } else {
    setSnap('half')
  }
}

function close() {
  isOpen.value = false
}

function reopen() {
  isOpen.value = true
  if (currentSnap.value === 'peek') {
    currentSnap.value = 'half'
  }
}

const configSaved = ref(false)

function handleSave() {
  configSaved.value = true
  setTimeout(() => {
    configSaved.value = false
    close()
  }, 450)
}
</script>

<template>
  <div
    :class="
      cn(
        'relative w-full max-w-sm sm:max-w-md h-[500px] mx-auto overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-sans select-none flex flex-col justify-between shadow-none',
        props.class
      )
    "
  >
    <!-- 顶部状态栏与档位快捷控制器 (永远可用，方便直观切换验证) -->
    <div class="relative z-30 px-3.5 py-2.5 flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/80">
      <div class="flex items-center gap-1.5">
        <span class="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
        <span class="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
          状态:
          <strong class="text-zinc-900 dark:text-white">{{ isOpen ? currentSnap.toUpperCase() : 'CLOSED' }}</strong>
        </span>
      </div>

      <!-- 快速档位切换胶囊 -->
      <div class="flex items-center gap-1 p-0.5 rounded-lg bg-zinc-200/70 dark:bg-zinc-800/80 text-[10px] font-medium">
        <button
          type="button"
          @click="setSnap('peek')"
          :class="[
            'px-2 py-0.5 rounded-md transition-all cursor-pointer',
            isOpen && currentSnap === 'peek'
              ? 'bg-white text-zinc-900 dark:bg-zinc-700 dark:text-white font-bold'
              : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400',
          ]"
        >
          Peek
        </button>
        <button
          type="button"
          @click="setSnap('half')"
          :class="[
            'px-2 py-0.5 rounded-md transition-all cursor-pointer',
            isOpen && currentSnap === 'half'
              ? 'bg-white text-zinc-900 dark:bg-zinc-700 dark:text-white font-bold'
              : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400',
          ]"
        >
          Half
        </button>
        <button
          type="button"
          @click="setSnap('full')"
          :class="[
            'px-2 py-0.5 rounded-md transition-all cursor-pointer',
            isOpen && currentSnap === 'full'
              ? 'bg-white text-zinc-900 dark:bg-zinc-700 dark:text-white font-bold'
              : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400',
          ]"
        >
          Full
        </button>
      </div>
    </div>

    <!-- 背景模拟宿主内容区 (无遮罩、纯净透光呈现) -->
    <div class="flex-1 p-6 flex flex-col items-center justify-center text-center overflow-hidden">
      <div class="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3">
        <Sparkles class="h-6 w-6" />
      </div>
      <h4 class="font-bold text-sm sm:text-base text-zinc-900 dark:text-white">
        底部弹出面板
      </h4>
      <p class="text-xs text-zinc-500 max-w-xs mt-1.5 leading-relaxed">
        按住顶部把手上下拖动，松手后面板会停在最近的档位。可以在面板里调整拖动手感。
      </p>

      <div class="mt-4 flex items-center gap-2">
        <button
          type="button"
          @click="reopen"
          class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 active:scale-95 transition-all cursor-pointer"
        >
          <ChevronUp class="h-4 w-4" />
          <span>{{ isOpen ? '回到半屏' : '打开面板' }}</span>
        </button>
        <button
          v-if="isOpen"
          type="button"
          @click="close"
          class="inline-flex items-center gap-1 px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
        >
          <RotateCcw class="h-3.5 w-3.5" />
          <span>收起</span>
        </button>
      </div>
    </div>

    <!-- 底部抽屉主面板 (100% 纯白与纯线条，彻底去除阴影与遮罩) -->
    <div
      v-if="isOpen"
      :class="[
        'absolute bottom-0 left-0 right-0 z-20 flex flex-col rounded-t-3xl border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-none',
        snapHeights[currentSnap],
        isDragging
          ? 'transition-none select-none'
          : highPerformance
            ? 'transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]'
            : 'transition-all duration-150 ease-linear',
      ]"
      :style="{
        transform: isDragging ? `translateY(${dragDeltaY}px)` : undefined,
      }"
    >
      <!-- 顶部拖拽手柄区域 (支持全向阻尼手势与实时提示) -->
      <div
        class="w-full pt-3 pb-2 flex flex-col items-center cursor-grab active:cursor-grabbing touch-none select-none"
        @pointerdown="handlePointerDown"
        @pointermove="handlePointerMove"
        @pointerup="handlePointerUp"
        @pointercancel="handlePointerUp"
      >
        <!-- 物理胶囊指示把手 -->
        <div class="h-1.5 w-12 rounded-full bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-700 dark:hover:bg-zinc-600 transition-colors" />
        <!-- 实时手感切换微提示 -->
        <div v-if="physicsTip" class="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 mt-1 animate-pulse">
          {{ physicsTip }}
        </div>
      </div>

      <!-- 面板头部标题栏 -->
      <div class="px-5 py-2 flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800/60 shrink-0">
        <div class="min-w-0 pr-2">
          <h4 class="font-bold text-sm text-zinc-900 dark:text-white truncate">
            {{ props.title }}
          </h4>
          <p class="text-[11px] text-zinc-400 mt-0.5 truncate">
            {{ props.description }}
          </p>
        </div>

        <div class="flex items-center gap-1 shrink-0">
          <!-- 动态档位展开/收折切换按钮 -->
          <button
            type="button"
            @click="toggleExpand"
            class="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 dark:hover:text-zinc-200 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            :title="currentSnap === 'full' ? '缩小为半屏' : '展开为全屏'"
          >
            <ChevronDown v-if="currentSnap === 'full'" class="h-4 w-4" />
            <ChevronUp v-else class="h-4 w-4" />
          </button>

          <!-- 关闭按钮 -->
          <button
            type="button"
            @click="close"
            class="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 dark:hover:text-zinc-200 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            title="关闭抽屉"
          >
            <X class="h-4 w-4" />
          </button>
        </div>
      </div>

      <!-- 面板主体内容区域 -->
      <div class="flex-1 overflow-y-auto px-5 py-3 space-y-3.5">
        <!-- 内部档位切换器 Pill Tabs -->
        <div class="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 text-xs">
          <button
            type="button"
            @click="setSnap('peek')"
            :class="[
              'flex-1 py-1 rounded-lg font-medium transition-all text-center cursor-pointer text-[11px]',
              currentSnap === 'peek'
                ? 'bg-white text-zinc-900 dark:bg-zinc-700 dark:text-white font-bold'
                : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400',
            ]"
          >
            Peek (露头)
          </button>
          <button
            type="button"
            @click="setSnap('half')"
            :class="[
              'flex-1 py-1 rounded-lg font-medium transition-all text-center cursor-pointer text-[11px]',
              currentSnap === 'half'
                ? 'bg-white text-zinc-900 dark:bg-zinc-700 dark:text-white font-bold'
                : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400',
            ]"
          >
            Half (半屏)
          </button>
          <button
            type="button"
            @click="setSnap('full')"
            :class="[
              'flex-1 py-1 rounded-lg font-medium transition-all text-center cursor-pointer text-[11px]',
              currentSnap === 'full'
                ? 'bg-white text-zinc-900 dark:bg-zinc-700 dark:text-white font-bold'
                : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400',
            ]"
          >
            Full (全屏)
          </button>
        </div>

        <!-- 真实生效的物理参数配置卡片 -->
        <div class="space-y-2.5">
          <!-- 开关项 1：高频触觉物理引擎（真实控制弹性阻尼与回弹手感） -->
          <div class="flex items-center justify-between p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-800/40">
            <div class="flex items-center gap-2.5">
              <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <Sliders class="h-4 w-4" />
              </div>
              <div>
                <span class="block text-xs font-semibold text-zinc-900 dark:text-white">边界回弹</span>
                <span class="block text-[10px] font-mono transition-colors" :class="highPerformance ? 'text-blue-600 dark:text-blue-400' : 'text-zinc-400'">
                  {{ highPerformance ? '拖到边界时有回弹效果' : '拖到边界时直接停住' }}
                </span>
              </div>
            </div>
            <button
              type="button"
              @click="togglePhysicsEngine"
              :class="[
                'relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out',
                highPerformance ? 'bg-blue-600' : 'bg-zinc-300 dark:bg-zinc-700',
              ]"
            >
              <span
                :class="[
                  'pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white ring-0 transition duration-200 ease-in-out mt-0.5 ml-0.5',
                  highPerformance ? 'translate-x-4' : 'translate-x-0',
                ]"
              />
            </button>
          </div>

          <!-- 开关项 2：高灵敏吸附换挡（真实控制吸附阈值 35px vs 95px） -->
          <div class="flex items-center justify-between p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-800/40">
            <div class="flex items-center gap-2.5">
              <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Share2 class="h-4 w-4" />
              </div>
              <div>
                <span class="block text-xs font-semibold text-zinc-900 dark:text-white">灵敏切换档位</span>
                <span class="block text-[10px] font-mono transition-colors" :class="notificationEnabled ? 'text-emerald-600 dark:text-emerald-400' : 'text-zinc-400'">
                  {{ notificationEnabled ? '轻轻拖动即可切换档位' : '需要拖动较长距离才切换' }}
                </span>
              </div>
            </div>
            <button
              type="button"
              @click="toggleSensitivity"
              :class="[
                'relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out',
                notificationEnabled ? 'bg-emerald-600' : 'bg-zinc-300 dark:bg-zinc-700',
              ]"
            >
              <span
                :class="[
                  'pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white ring-0 transition duration-200 ease-in-out mt-0.5 ml-0.5',
                  notificationEnabled ? 'translate-x-4' : 'translate-x-0',
                ]"
              />
            </button>
          </div>
        </div>

        <!-- 底部操作按钮 -->
        <div class="pt-1 flex items-center gap-2">
          <button
            type="button"
            @click="handleSave"
            class="flex-1 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer"
          >
            <Check class="h-3.5 w-3.5" />
            <span>{{ configSaved ? '已保存' : '保存' }}</span>
          </button>
          <button
            type="button"
            @click="close"
            class="px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-medium text-xs transition-colors cursor-pointer"
          >
            取消
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
