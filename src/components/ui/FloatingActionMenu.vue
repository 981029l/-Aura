<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import { Plus } from 'lucide-vue-next'

export interface FABAction {
  id: string | number
  label: string
  icon: any
  color?: string
  onClick?: () => void
}

interface FloatingActionMenuProps {
  actions: FABAction[]
  /** 展开布局：radial 沿四分之一圆弧环形展开；linear 沿 direction 方向直线排列 */
  layout?: 'radial' | 'linear'
  /** radial 模式下主按钮所在的角落，子按钮朝内侧沿弧线展开（如 bottom-right：从正左方绕到正上方） */
  corner?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
  /** linear 模式下的排列方向 */
  direction?: 'up' | 'down' | 'left' | 'right'
  /** radial 模式下子按钮中心到主按钮中心的距离 */
  radius?: number
  class?: string
}

const props = withDefaults(defineProps<FloatingActionMenuProps>(), {
  layout: 'radial',
  corner: 'bottom-right',
  direction: 'up',
  radius: 100,
})

const emit = defineEmits<{
  (e: 'select', action: FABAction): void
  (e: 'toggle', isOpen: boolean): void
}>()

const isOpen = ref(false)
const containerRef = ref<HTMLDivElement | null>(null)

function toggle() {
  isOpen.value = !isOpen.value
  emit('toggle', isOpen.value)
}

function handleActionClick(action: FABAction) {
  emit('select', action)
  if (action.onClick) action.onClick()
  isOpen.value = false
  emit('toggle', false)
}

function handleClickOutside(e: MouseEvent) {
  if (containerRef.value && !containerRef.value.contains(e.target as Node)) {
    if (isOpen.value) {
      isOpen.value = false
      emit('toggle', false)
    }
  }
}

// 各角落对应的四分之一圆弧 [起始角, 结束角]（数学坐标系：0° 指向右侧，逆时针为正）
// 第一个子按钮在起始角，最后一个在结束角，均朝容器内侧展开
const CORNER_ARC = {
  'bottom-right': [180, 90], // 正左 → 正上
  'bottom-left': [0, 90], // 正右 → 正上
  'top-right': [180, 270], // 正左 → 正下
  'top-left': [0, 270], // 正右 → 正下
} as const

// 子按钮沿四分之一圆弧均匀分布，返回相对主按钮中心的屏幕坐标偏移
const radialPositions = computed(() => {
  const n = props.actions.length
  const [from, to] = CORNER_ARC[props.corner]
  return props.actions.map((_, idx) => {
    const deg = n > 1 ? from + ((to - from) * idx) / (n - 1) : (from + to) / 2
    const rad = (deg * Math.PI) / 180
    return {
      x: Math.round(props.radius * Math.cos(rad) * 100) / 100,
      y: Math.round(-props.radius * Math.sin(rad) * 100) / 100,
    }
  })
})

// 名称标签放在朝向容器内侧的一边，避免贴边被裁切
const labelOnLeft = computed(() => props.corner.endsWith('right'))

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div ref="containerRef" :class="cn('relative inline-flex flex-col items-center select-none', props.class)">
    <!-- radial：子按钮从主按钮中心沿四分之一圆弧依次弹出，收起时反向依次收回 -->
    <template v-if="props.layout === 'radial'">
      <div
        v-for="(action, idx) in props.actions"
        :key="action.id"
        :class="[
          'group absolute left-1/2 top-1/2 z-40 transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        ]"
        :style="{
          transform: isOpen
            ? `translate(-50%, -50%) translate(${radialPositions[idx].x}px, ${radialPositions[idx].y}px) scale(1)`
            : 'translate(-50%, -50%) translate(0px, 0px) scale(0.4)',
          transitionDelay: `${(isOpen ? idx : props.actions.length - 1 - idx) * 45}ms`,
        }"
      >
        <button
          type="button"
          :tabindex="isOpen ? 0 : -1"
          :aria-hidden="!isOpen"
          @click.stop="handleActionClick(action)"
          :class="[
            'flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg ring-4 ring-white/70 transition-transform hover:scale-110 active:scale-95 cursor-pointer dark:ring-zinc-950/70',
            action.color || 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/25',
          ]"
          :title="action.label"
        >
          <component :is="action.icon" class="h-4 w-4" />
        </button>

        <!-- 悬停浮现的毛玻璃名称标签：显示在按钮朝内侧的一边（右侧角落时在左边） -->
        <span
          :class="[
            'pointer-events-none absolute top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg border border-zinc-200/80 bg-white/95 px-2 py-0.5 text-[11px] font-semibold text-zinc-700 opacity-0 shadow-md backdrop-blur-md transition-opacity duration-150 group-hover:opacity-100 dark:border-zinc-800/80 dark:bg-zinc-900/95 dark:text-zinc-200',
            labelOnLeft ? 'right-full mr-2' : 'left-full ml-2',
          ]"
        >
          {{ action.label }}
        </span>
      </div>
    </template>

    <!-- linear：展开的子操作按钮组 -->
    <transition v-else name="fab-items">
      <div
        v-if="isOpen"
        :class="[
          'absolute z-40 flex gap-3 pointer-events-auto',
          props.direction === 'up' && 'bottom-full mb-3 flex-col-reverse items-center',
          props.direction === 'down' && 'top-full mt-3 flex-col items-center',
          props.direction === 'left' && 'right-full mr-3 flex-row-reverse items-center',
          props.direction === 'right' && 'left-full ml-3 flex-row items-center',
        ]"
      >
        <div
          v-for="(action, idx) in props.actions"
          :key="action.id"
          class="flex items-center gap-2 group cursor-pointer"
          :style="{
            transitionDelay: `${idx * 40}ms`,
          }"
        >
          <!-- 悬浮文字气泡标签 (如果是在垂直方向) -->
          <div
            v-if="props.direction === 'up' || props.direction === 'down'"
            class="whitespace-nowrap rounded-lg border border-zinc-200/80 bg-white/95 px-2.5 py-1 text-xs font-semibold text-zinc-700 shadow-md backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/95 dark:text-zinc-200 transition-transform group-hover:scale-105"
          >
            {{ action.label }}
          </div>

          <!-- 子操作圆形按键 -->
          <button
            type="button"
            @click.stop="handleActionClick(action)"
            :class="[
              'flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer',
              action.color || 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/25',
            ]"
            :title="action.label"
          >
            <component :is="action.icon" class="h-4 w-4" />
          </button>
        </div>
      </div>
    </transition>

    <!-- 中心主触发圆形 FAB 按钮 -->
    <button
      type="button"
      @click.stop="toggle"
      :class="[
        'relative z-50 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-500/30 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-blue-500 hover:scale-105 active:scale-90 cursor-pointer outline-none focus:outline-none ring-0',
        isOpen && '!bg-zinc-900 dark:!bg-zinc-700 shadow-zinc-900/40',
      ]"
      title="操作菜单"
      :aria-expanded="isOpen"
    >
      <Plus
        :class="[
          'h-5 w-5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
          isOpen && 'rotate-[135deg]',
        ]"
      />
    </button>
  </div>
</template>

<style scoped>
.fab-items-enter-active,
.fab-items-leave-active {
  transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.fab-items-enter-from,
.fab-items-leave-to {
  opacity: 0;
  transform: scale(0.85);
}
</style>
