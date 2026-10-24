<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { ArrowRight, Sparkles, Wand2 } from 'lucide-vue-next'

export interface GradientButtonProps {
  label?: string
  sublabel?: string
  variant?: 'aurora' | 'sunset' | 'cyber'
  class?: string
}

const props = withDefaults(defineProps<GradientButtonProps>(), {
  label: '升级到专业版',
  sublabel: '解锁全部高级功能，可随时取消',
  variant: 'aurora',
})

const isHovered = ref(false)
const clicked = ref(false)

function handleClick() {
  clicked.value = true
  setTimeout(() => {
    clicked.value = false
  }, 1000)
}
</script>

<template>
  <div :class="cn('relative flex flex-col items-center justify-center p-8 font-sans select-none space-y-4', props.class)">
    <!-- 极光流体行动按钮本体 -->
    <button
      type="button"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
      @click="handleClick"
      :class="[
        'group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-sm text-white shadow-xl transition-all duration-300 active:scale-95 cursor-pointer overflow-hidden',
        isHovered ? 'scale-[1.03] shadow-2xl shadow-blue-500/25' : 'shadow-blue-500/15',
      ]"
    >
      <!-- 1. 外部弥散环境光晕 -->
      <div
        :class="[
          'absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-500 to-rose-500 opacity-70 blur-xl transition-opacity duration-300 -z-10',
          isHovered ? 'opacity-100' : 'opacity-60',
        ]"
      />

      <!-- 2. 内部多色动态旋转流光背景 -->
      <div class="absolute inset-0 bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 animate-gradient-flow" />

      <!-- 3. 前景微光星芒与文字 -->
      <div class="relative z-10 flex items-center gap-2">
        <Sparkles class="h-4 w-4 text-amber-300 animate-pulse" />
        <span class="tracking-wide">{{ props.label }}</span>
        <ArrowRight class="h-4 w-4 group-hover:translate-x-1.5 transition-transform duration-200" />
      </div>

      <!-- 4. 点击涟漪波纹 -->
      <div
        v-if="clicked"
        class="absolute inset-0 bg-white/30 rounded-2xl animate-ping pointer-events-none"
      />
    </button>

    <div class="flex items-center gap-2 text-xs font-mono text-zinc-400">
      <Wand2 class="h-3.5 w-3.5 text-blue-500" />
      <span>{{ props.sublabel }}</span>
    </div>
  </div>
</template>

<style scoped>
@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient-flow {
  background-size: 200% 200%;
  animation: gradientFlow 4s ease infinite;
}
</style>
