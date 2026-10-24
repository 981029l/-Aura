<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { Sparkles, Zap, Flame, Shield, Compass, Check } from 'lucide-vue-next'

export interface BadgeItem {
  id: string
  label: string
  icon: any
  color: string
}

export interface MagneticBadgeProps {
  title?: string
  class?: string
}

const props = withDefaults(defineProps<MagneticBadgeProps>(), {
  title: '磁吸标签',
})

const badges = ref<BadgeItem[]>([
  { id: '1', label: 'Vue 3.5+ SFC', icon: Sparkles, color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20' },
  { id: '2', label: '单文件组件', icon: Zap, color: 'text-sky-500 bg-sky-500/10 border-sky-500/20' },
  { id: '3', label: '流畅动画', icon: Flame, color: 'text-rose-500 bg-rose-500/10 border-rose-500/20' },
  { id: '4', label: 'TypeScript', icon: Shield, color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20' },
  { id: '5', label: '弹性动画', icon: Compass, color: 'text-amber-500 bg-amber-500/10 border-amber-500/20' },
])

const activeId = ref<string | null>(null)
const badgeOffsets = ref<Record<string, { x: number; y: number }>>({})

function handleMouseMove(e: MouseEvent, id: string) {
  const target = e.currentTarget as HTMLElement
  if (!target) return
  const rect = target.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  const dx = e.clientX - centerX
  const dy = e.clientY - centerY

  // 非线性弹性磁吸偏移
  badgeOffsets.value[id] = {
    x: dx * 0.35,
    y: dy * 0.35,
  }
}

function handleMouseLeave(id: string) {
  badgeOffsets.value[id] = { x: 0, y: 0 }
}

function toggleBadge(id: string) {
  activeId.value = activeId.value === id ? null : id
}
</script>

<template>
  <div :class="cn('w-full max-w-xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-5', props.class)">
    <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div>
        <h4 class="font-bold text-sm text-zinc-900 dark:text-white">
          {{ props.title }}
        </h4>
        <p class="text-xs text-zinc-400 font-mono mt-0.5">
          鼠标靠近时标签被吸向光标，里面的文字反向轻微偏移
        </p>
      </div>
      <span class="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
        MAGNETIC TACTILE
      </span>
    </div>

    <!-- 磁吸标签网格群 -->
    <div class="flex flex-wrap items-center justify-center gap-3.5 py-4 min-h-[140px]">
      <div
        v-for="badge in badges"
        :key="badge.id"
        @mousemove="handleMouseMove($event, badge.id)"
        @mouseleave="handleMouseLeave(badge.id)"
        @click="toggleBadge(badge.id)"
        class="transition-transform duration-100 ease-out cursor-pointer"
        :style="{
          transform: `translate(${badgeOffsets[badge.id]?.x || 0}px, ${badgeOffsets[badge.id]?.y || 0}px)`,
        }"
      >
        <div
          :class="[
            'inline-flex items-center gap-2 px-4 py-2 rounded-2xl border text-xs font-semibold shadow-sm transition-all duration-200 active:scale-95',
            badge.color,
            activeId === badge.id
              ? 'ring-2 ring-current shadow-md scale-105'
              : 'hover:shadow-sm',
          ]"
        >
          <!-- 内层图标反向视差偏移 -->
          <div
            class="transition-transform duration-100 ease-out"
            :style="{
              transform: `translate(${-(badgeOffsets[badge.id]?.x || 0) * 0.4}px, ${-(badgeOffsets[badge.id]?.y || 0) * 0.4}px)`,
            }"
          >
            <component :is="badge.icon" class="h-4 w-4" />
          </div>

          <!-- 文字标签 -->
          <span>{{ badge.label }}</span>

          <Check v-if="activeId === badge.id" class="h-3.5 w-3.5 ml-0.5" />
        </div>
      </div>
    </div>

    <!-- 底部状态说明 -->
    <div class="flex items-center justify-between text-[11px] font-mono text-zinc-400 border-t border-zinc-100 pt-3 dark:border-zinc-800/60">
      <span>感应范围：45px</span>
      <span class="text-emerald-600 dark:text-emerald-400">
        {{ activeId ? `当前：#${activeId}` : '把鼠标移到标签附近' }}
      </span>
    </div>
  </div>
</template>
