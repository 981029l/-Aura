<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from 'vue'
import { cn } from '@/lib/utils'
import {
  Home,
  Boxes,
  Sparkles,
  Bot,
  Settings,
} from 'lucide-vue-next'

export interface GlowMenuItem {
  id: string
  label: string
  icon: any
  badge?: string
}

export interface GlowMenuProps {
  items?: GlowMenuItem[]
  initialActiveId?: string
  class?: string
}

const props = withDefaults(defineProps<GlowMenuProps>(), {
  initialActiveId: 'suites',
  items: () => [
    { id: 'home', label: '首页', icon: Home },
    { id: 'suites', label: '组件', icon: Boxes, badge: '230' },
    { id: 'gallery', label: '示例', icon: Sparkles },
    { id: 'agents', label: '智能体', icon: Bot, badge: 'AI' },
    { id: 'settings', label: '偏好设置', icon: Settings },
  ],
})

const activeId = ref(props.initialActiveId)
const hoveredId = ref<string | null>(null)

// 导航外框与各子项 DOM 节点引用
const navRef = ref<HTMLElement | null>(null)
const itemRefs = ref<Record<string, HTMLElement | null>>({})

// 流体平滑滑动指示器的坐标与宽度
const indicatorStyle = ref<{ left: string; width: string; opacity: number }>({
  left: '0px',
  width: '0px',
  opacity: 0,
})

function updateIndicator() {
  const activeEl = itemRefs.value[activeId.value]
  const containerEl = navRef.value
  if (!activeEl || !containerEl) return

  const activeRect = activeEl.getBoundingClientRect()
  const containerRect = containerEl.getBoundingClientRect()

  const left = activeRect.left - containerRect.left
  const width = activeRect.width

  indicatorStyle.value = {
    left: `${left}px`,
    width: `${width}px`,
    opacity: 1,
  }
}

function selectItem(id: string) {
  activeId.value = id
  nextTick(() => {
    updateIndicator()
  })
}

function setItemRef(el: any, id: string) {
  if (el) {
    itemRefs.value[id] = el
  }
}

watch(activeId, () => {
  nextTick(() => {
    updateIndicator()
  })
})

onMounted(() => {
  nextTick(() => {
    updateIndicator()
    // 稍加延时再次校准，防止 WebFont 异步加载微量尺寸偏差
    setTimeout(updateIndicator, 60)
  })
})
</script>

<template>
  <div :class="cn('w-full max-w-2xl flex flex-col items-center justify-center p-6 font-sans select-none', props.class)">
    <!-- 苹果风拟态流体微光胶囊导航主浮层 -->
    <nav
      ref="navRef"
      class="relative inline-flex items-center p-1.5 rounded-full border border-zinc-200/90 bg-white/90 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
    >
      <!-- 物理弹簧平滑滑动的流体胶囊底衬 (Spring 曲线无缝穿梭) -->
      <div
        class="absolute top-1.5 bottom-1.5 rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
        :style="{
          left: indicatorStyle.left,
          width: indicatorStyle.width,
          opacity: indicatorStyle.opacity,
        }"
      >
        <!-- 苹果风柔和环境微光漫反射辉光 (轻盈透气，告别厚重艳俗光斑) -->
        <div class="absolute -inset-1 rounded-full bg-blue-500/20 dark:bg-blue-400/25 blur-md pointer-events-none" />

        <!-- 激活胶囊主体：克制通透的质感底色与内发光高光 -->
        <div class="relative h-full w-full rounded-full bg-blue-600 dark:bg-blue-500 shadow-[0_2px_10px_rgba(37,99,235,0.25),inset_0_1px_0_rgba(255,255,255,0.25)]" />
      </div>

      <!-- 选项按钮集合 (严格单行禁止折行，尺寸舒适舒展) -->
      <button
        type="button"
        v-for="item in props.items"
        :key="item.id"
        :ref="(el) => setItemRef(el, item.id)"
        @click="selectItem(item.id)"
        @mouseenter="hoveredId = item.id"
        @mouseleave="hoveredId = null"
        :class="[
          'relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-200 cursor-pointer',
          activeId === item.id
            ? 'text-white font-semibold'
            : hoveredId === item.id
              ? 'text-zinc-900 bg-zinc-100/80 dark:text-zinc-100 dark:bg-zinc-800/60'
              : 'text-zinc-600 dark:text-zinc-400',
        ]"
      >
        <!-- 图标 -->
        <component
          :is="item.icon"
          :class="[
            'h-4 w-4 shrink-0 transition-transform duration-200',
            activeId === item.id ? 'scale-105' : 'group-hover:scale-105',
          ]"
        />

        <!-- 文字标签 (单行文本，坚决杜绝折行) -->
        <span class="whitespace-nowrap tracking-wide">{{ item.label }}</span>

        <!-- 徽标 -->
        <span
          v-if="item.badge"
          :class="[
            'px-1.5 py-px rounded-full text-[9px] font-mono font-bold leading-tight shrink-0',
            activeId === item.id
              ? 'bg-white/25 text-white'
              : 'bg-zinc-200/80 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400',
          ]"
        >
          {{ item.badge }}
        </span>
      </button>
    </nav>

    <!-- 底部状态反馈说明 -->
    <div class="mt-4 flex items-center gap-2 text-xs font-mono text-zinc-400">
      <span>当前页面：</span>
      <span class="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-900 text-blue-600 dark:text-blue-400 font-bold font-mono">
        #/{{ activeId }}
      </span>
    </div>
  </div>
</template>
