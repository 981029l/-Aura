<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { Sparkles, ChevronDown, ChevronUp, Layers, CheckCircle } from 'lucide-vue-next'

export interface FoldCardProps {
  title?: string
  subtitle?: string
  class?: string
}

const props = withDefaults(defineProps<FoldCardProps>(), {
  title: '折叠卡片',
  subtitle: '像三折页一样折叠和展开',
})

const isFolded = ref(false)

function toggleFold() {
  isFolded.value = !isFolded.value
}
</script>

<template>
  <div :class="cn('w-full max-w-md rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-5', props.class)">
    <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-2.5">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
          <Layers class="h-5 w-5" />
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

      <button
        type="button"
        @click="toggleFold"
        class="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-xs font-mono font-semibold text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
      >
        <ChevronUp v-if="!isFolded" class="h-3.5 w-3.5" />
        <ChevronDown v-else class="h-3.5 w-3.5" />
        <span>{{ isFolded ? '展开' : '折叠' }}</span>
      </button>
    </div>

    <!-- 3D 折叠舞台 -->
    <div
      class="perspective-[900px] flex flex-col items-center justify-center py-2 cursor-pointer"
      @click="toggleFold"
    >
      <div class="w-full space-y-1">
        <!-- 顶部折页 -->
        <div
          :class="[
            'origin-bottom rounded-t-2xl border border-zinc-200 bg-gradient-to-br from-indigo-500 to-purple-600 p-4 text-white shadow-md transition-all duration-500',
            isFolded ? 'rotate-x-45 scale-95 opacity-80' : 'rotate-x-0 scale-100 opacity-100',
          ]"
        >
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono font-bold tracking-widest bg-white/20 px-2 py-0.5 rounded-full">
              SECTION 01
            </span>
            <Sparkles class="h-4 w-4" />
          </div>
          <h5 class="text-base font-bold mt-2">产品介绍</h5>
        </div>

        <!-- 中部折页 -->
        <div
          :class="[
            'origin-top border border-zinc-200/90 bg-white dark:border-zinc-800/90 dark:bg-zinc-900 p-4 transition-all duration-500',
            isFolded ? '-rotate-x-30 scale-95 shadow-inner' : 'rotate-x-0 scale-100 shadow-sm',
          ]"
        >
          <div class="text-xs text-zinc-600 dark:text-zinc-300 space-y-1.5 font-normal">
            <div class="flex items-center gap-2">
              <CheckCircle class="h-3.5 w-3.5 text-emerald-500 shrink-0" />
              <span>使用 CSS 3D 旋转实现折叠</span>
            </div>
            <div class="flex items-center gap-2">
              <CheckCircle class="h-3.5 w-3.5 text-emerald-500 shrink-0" />
              <span>折痕处带阴影</span>
            </div>
          </div>
        </div>

        <!-- 底部折页 -->
        <div
          :class="[
            'origin-top rounded-b-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 p-4 transition-all duration-500 flex items-center justify-between',
            isFolded ? 'rotate-x-45 scale-95 opacity-80' : 'rotate-x-0 scale-100 opacity-100',
          ]"
        >
          <span class="text-xs font-mono text-zinc-400">STATUS: FOLD_STABLE</span>
          <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400">点击卡片切换状态</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rotate-x-45 {
  transform: rotateX(42deg);
}
.rotate-x-0 {
  transform: rotateX(0deg);
}
.-rotate-x-30 {
  transform: rotateX(-35deg);
}
</style>
