<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { Layout, Terminal, Code2, Sparkles, Folder, Settings, Music, Compass } from 'lucide-vue-next'

export interface DockItem {
  id: string
  label: string
  color: string
}

export interface MacDockNavigationProps {
  title?: string
  subtitle?: string
  class?: string
}

const props = withDefaults(defineProps<MacDockNavigationProps>(), {
  title: 'Mac 风格底栏',
  subtitle: '鼠标经过时附近的图标放大，并显示名称',
})

const dockItems = ref<DockItem[]>([
  { id: 'finder', label: '访达', color: 'from-blue-400 to-indigo-600' },
  { id: 'terminal', label: '终端', color: 'from-zinc-700 to-black' },
  { id: 'code', label: 'VS Code', color: 'from-sky-500 to-blue-600' },
  { id: 'ai', label: 'AI 助手', color: 'from-purple-500 to-pink-600' },
  { id: 'music', label: '音乐', color: 'from-rose-500 to-orange-500' },
  { id: 'settings', label: '系统设置', color: 'from-zinc-500 to-zinc-700' },
])

const activeApp = ref('code')
const mouseX = ref<number | null>(null)
const dockRef = ref<HTMLElement | null>(null)
const hoveredLabel = ref<string | null>(null)

function handleMouseMove(e: MouseEvent) {
  if (!dockRef.value) return
  const rect = dockRef.value.getBoundingClientRect()
  mouseX.value = e.clientX - rect.left
}

function handleMouseLeave() {
  mouseX.value = null
  hoveredLabel.value = null
}

// 高斯正态分布鱼眼放大比例计算
function getIconScale(index: number) {
  if (mouseX.value === null) return 1.0

  // 每个图标中心点大致位置 (padding + index * (iconWidth + gap))
  const iconCenter = 32 + index * (48 + 12) + 24
  const dist = Math.abs(mouseX.value - iconCenter)
  const maxDist = 90 // 影响半径

  if (dist > maxDist) return 1.0
  const factor = Math.cos((dist / maxDist) * (Math.PI / 2))
  return Number((1.0 + factor * 0.55).toFixed(2)) // 1.0x ~ 1.55x
}

function selectApp(item: DockItem) {
  activeApp.value = item.id
}
</script>

<template>
  <div :class="cn('w-full max-w-xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6', props.class)">
    <!-- 头部看板 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-2.5">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
          <Layout class="h-5 w-5" />
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

      <div class="flex items-center gap-1.5 text-xs font-mono text-blue-500">
        <Sparkles class="h-3.5 w-3.5" />
        <span>悬停放大</span>
      </div>
    </div>

    <!-- 拟态 Dock 悬浮舞台 -->
    <div class="relative h-44 rounded-2xl border border-zinc-200/80 bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-950 flex flex-col items-center justify-end pb-4 overflow-hidden shadow-inner">
      <!-- 极光背景微光 -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.1)_0%,transparent_70%)] pointer-events-none" />

      <!-- 悬停 App 提示标签 -->
      <div class="h-6 flex items-center justify-center mb-2 pointer-events-none">
        <span
          v-if="hoveredLabel"
          class="px-2.5 py-0.5 rounded-lg bg-zinc-900/90 dark:bg-zinc-100/90 text-white dark:text-zinc-900 text-xs font-mono font-bold shadow-md animate-in fade-in zoom-in-95 duration-150"
        >
          {{ hoveredLabel }}
        </span>
      </div>

      <!-- Dock 托盘核心容器 -->
      <div
        ref="dockRef"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
        class="relative flex items-end gap-3 px-4 py-2.5 rounded-2xl border border-white/40 dark:border-zinc-700/60 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl shadow-xl transition-all"
      >
        <button
          v-for="(item, idx) in dockItems"
          :key="item.id"
          type="button"
          @click="selectApp(item)"
          @mouseenter="hoveredLabel = item.label"
          :class="[
            'relative group flex flex-col items-center justify-center origin-bottom transition-transform duration-100 ease-out cursor-pointer'
          ]"
          :style="{
            transform: `scale(${getIconScale(idx)})`,
          }"
        >
          <!-- 图标本体 -->
          <div
            :class="[
              'w-12 h-12 rounded-2xl bg-gradient-to-tr flex items-center justify-center text-white shadow-md border border-white/30 transition-transform active:scale-95',
              item.color
            ]"
          >
            <Folder v-if="item.id === 'finder'" class="h-6 w-6" />
            <Terminal v-else-if="item.id === 'terminal'" class="h-6 w-6" />
            <Code2 v-else-if="item.id === 'code'" class="h-6 w-6" />
            <Compass v-else-if="item.id === 'ai'" class="h-6 w-6" />
            <Music v-else-if="item.id === 'music'" class="h-6 w-6" />
            <Settings v-else class="h-6 w-6" />
          </div>

          <!-- 激活状态微小圆点 -->
          <span
            :class="[
              'w-1 h-1 rounded-full mt-1.5 transition-all',
              activeApp === item.id ? 'bg-zinc-800 dark:bg-white scale-125' : 'opacity-0'
            ]"
          />
        </button>
      </div>
    </div>
  </div>
</template>
