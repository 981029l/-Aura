<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from 'vue'
import { cn } from '@/lib/utils'
import { Layers, Sparkles, Inbox, Zap, Star, ShieldCheck, Cpu } from 'lucide-vue-next'

export interface TabItem {
  id: string
  label: string
  badge?: number | string
}

export interface MagneticTabsProps {
  title?: string
  subtitle?: string
  class?: string
}

const props = withDefaults(defineProps<MagneticTabsProps>(), {
  title: '磁吸标签页',
  subtitle: '鼠标划过时高亮背景跟随，点击切换内容',
})

const tabs = ref<TabItem[]>([
  { id: 'overview', label: '概览', badge: 'NEW' },
  { id: 'agents', label: '成员', badge: 14 },
  { id: 'workflows', label: '工作流' },
  { id: 'security', label: '安全', badge: 99 },
  { id: 'analytics', label: '用量' },
])

const activeTab = ref('overview')
const hoverTab = ref<string | null>(null)

// 磁吸滑轨与子项 DOM 引用
const trackRef = ref<HTMLElement | null>(null)
const tabRefs = ref<Record<string, HTMLElement | null>>({})

// 激活物理药丸的动态位置与磁吸形变
const pillStyle = ref({
  left: '0px',
  width: '0px',
  transform: 'none',
  opacity: 0,
})

// 悬停磁性预判幽灵胶囊位置
const hoverPillStyle = ref({
  left: '0px',
  width: '0px',
  opacity: 0,
})

function updatePillPosition() {
  const container = trackRef.value
  const target = tabRefs.value[activeTab.value]
  if (!container || !target) return

  const containerRect = container.getBoundingClientRect()
  const targetRect = target.getBoundingClientRect()

  const left = targetRect.left - containerRect.left
  const width = targetRect.width

  pillStyle.value = {
    left: `${left}px`,
    width: `${width}px`,
    transform: 'none',
    opacity: 1,
  }
}

function handleTabHover(id: string) {
  hoverTab.value = id
  const container = trackRef.value
  const target = tabRefs.value[id]
  if (!container || !target) return

  if (id === activeTab.value) {
    hoverPillStyle.value.opacity = 0
    pillStyle.value.transform = 'none'
    return
  }

  const containerRect = container.getBoundingClientRect()
  const targetRect = target.getBoundingClientRect()

  const left = targetRect.left - containerRect.left
  const width = targetRect.width

  hoverPillStyle.value = {
    left: `${left}px`,
    width: `${width}px`,
    opacity: 1,
  }

  // 磁吸预判牵引：当前激活药丸向悬停目标产生微幅拉伸与偏移动态
  const activeTarget = tabRefs.value[activeTab.value]
  if (activeTarget) {
    const activeRect = activeTarget.getBoundingClientRect()
    const diff = targetRect.left - activeRect.left
    const pullOffset = Math.sign(diff) * Math.min(5, Math.abs(diff) * 0.04)
    pillStyle.value.transform = `translateX(${pullOffset}px) scaleX(1.02)`
  }
}

function handleTabLeave() {
  hoverTab.value = null
  hoverPillStyle.value.opacity = 0
  pillStyle.value.transform = 'none'
}

function selectTab(id: string) {
  activeTab.value = id
  hoverPillStyle.value.opacity = 0
  nextTick(() => {
    updatePillPosition()
  })
}

function setTabRef(el: any, id: string) {
  if (el) {
    tabRefs.value[id] = el
  }
}

watch(activeTab, () => {
  nextTick(() => {
    updatePillPosition()
  })
})

onMounted(() => {
  nextTick(() => {
    updatePillPosition()
    // 延时再次校准，防止 WebFont 异步渲染产生微量像素偏差
    setTimeout(updatePillPosition, 60)
  })
})
</script>

<template>
  <div :class="cn('w-full max-w-2xl rounded-3xl border border-zinc-200/90 bg-white/95 p-6 sm:p-7 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6', props.class)">
    <!-- 头部看板 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/15">
          <Layers class="h-5 w-5" />
        </div>
        <div>
          <h4 class="font-bold text-sm text-zinc-900 dark:text-white">
            {{ props.title }}
          </h4>
          <p class="text-xs text-zinc-400 font-mono mt-0.5">
            {{ props.subtitle }}
          </p>
        </div>
      </div>

      <div class="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
        <Sparkles class="h-3.5 w-3.5 text-indigo-500" />
        <span>滑动高亮</span>
      </div>
    </div>

    <!-- 磁吸选项卡滑轨舞台 (绝对定位物理滑块 + 严格单行排版) -->
    <div
      ref="trackRef"
      @mouseleave="handleTabLeave"
      class="relative flex items-center p-1.5 rounded-2xl bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200/60 dark:border-zinc-800/60"
    >
      <!-- 1. 悬停磁性预判幽灵胶囊 -->
      <div
        class="absolute top-1.5 bottom-1.5 rounded-xl bg-white/50 dark:bg-zinc-800/50 transition-all duration-200 ease-out pointer-events-none"
        :style="{
          left: hoverPillStyle.left,
          width: hoverPillStyle.width,
          opacity: hoverPillStyle.opacity,
        }"
      />

      <!-- 2. 激活态物理吸附药丸 -->
      <div
        class="absolute top-1.5 bottom-1.5 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200/90 dark:border-zinc-700/80 shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.4)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
        :style="{
          left: pillStyle.left,
          width: pillStyle.width,
          transform: pillStyle.transform,
          opacity: pillStyle.opacity,
        }"
      />

      <!-- 3. 选项卡交互按钮集 (全量单行防折行) -->
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :ref="(el) => setTabRef(el, tab.id)"
        type="button"
        @click="selectTab(tab.id)"
        @mouseenter="handleTabHover(tab.id)"
        :class="[
          'relative z-10 flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-200 cursor-pointer',
          activeTab === tab.id
            ? 'text-zinc-900 dark:text-white font-bold'
            : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200',
        ]"
      >
        <!-- 标签文本 (严格禁止折行) -->
        <span class="whitespace-nowrap tracking-tight">{{ tab.label }}</span>

        <!-- 状态徽标 (紧凑设计，随行贴合) -->
        <span
          v-if="tab.badge"
          :class="[
            'px-1.5 py-0.5 rounded-md text-[10px] font-mono font-bold leading-none shrink-0 transition-colors',
            activeTab === tab.id
              ? 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400'
              : 'bg-zinc-200/90 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400',
          ]"
        >
          {{ tab.badge }}
        </span>
      </button>
    </div>

    <!-- 选中面板内容联动预览 -->
    <div class="rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-5 dark:border-zinc-800/80 dark:bg-zinc-900/40 min-h-[105px] flex items-center justify-between transition-all duration-300">
      <div class="flex items-center gap-3.5">
        <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200/60 dark:border-zinc-700/60 text-indigo-600 dark:text-indigo-400 shadow-sm">
          <Inbox v-if="activeTab === 'overview'" class="h-5 w-5" />
          <Zap v-else-if="activeTab === 'agents'" class="h-5 w-5" />
          <Star v-else-if="activeTab === 'workflows'" class="h-5 w-5" />
          <ShieldCheck v-else-if="activeTab === 'security'" class="h-5 w-5" />
          <Cpu v-else class="h-5 w-5" />
        </div>
        <div>
          <h5 class="text-sm font-bold text-zinc-900 dark:text-white">
            当前处于「{{ tabs.find((t) => t.id === activeTab)?.label }}」
          </h5>
          <p class="text-xs font-mono text-zinc-400 mt-0.5">
            标签 ID：{{ activeTab }}
          </p>
        </div>
      </div>

      <span class="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 dark:bg-indigo-950/60 px-2.5 py-1 rounded-lg border border-indigo-500/20">
        ACTIVE
      </span>
    </div>
  </div>
</template>
