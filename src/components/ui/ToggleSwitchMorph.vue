<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { ToggleRight, Sparkles, Moon, Sun, Shield, Zap } from 'lucide-vue-next'

export interface ToggleSwitchMorphProps {
  title?: string
  subtitle?: string
  class?: string
}

const props = withDefaults(defineProps<ToggleSwitchMorphProps>(), {
  title: '',
  subtitle: '',
})

const switch1 = ref(true)
const switch2 = ref(false)
const switch3 = ref(true)
</script>

<template>
  <div :class="cn('w-full max-w-xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6', props.class)">
    <!-- 头部指标栏 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800/80">
      <div class="flex items-center gap-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
        <ToggleRight class="h-4 w-4 text-emerald-500" />
        <span>{{ props.title || '形变开关' }}</span>
        <span v-if="props.subtitle" class="text-xs text-zinc-400 font-mono">
          · {{ props.subtitle }}
        </span>
      </div>

      <div class="flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400">
        <Sparkles class="h-3.5 w-3.5" />
        <span>拉伸回弹</span>
      </div>
    </div>

    <!-- 三组形态各异的拟态流体开关 -->
    <div class="space-y-4">
      <!-- 开关 1: 日夜微光形态转换 (Sun / Moon) -->
      <div class="flex items-center justify-between p-4 rounded-xl border border-zinc-200/80 bg-zinc-50/70 dark:border-zinc-800/80 dark:bg-zinc-900/40">
        <div class="flex items-center gap-3">
          <div class="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <Sun v-if="!switch1" class="h-4 w-4" />
            <Moon v-else class="h-4 w-4 text-indigo-400" />
          </div>
          <div>
            <h5 class="text-xs font-bold text-zinc-900 dark:text-white">深色模式</h5>
            <p class="text-[11px] font-mono text-zinc-400">切换时滑块拉伸并带光晕</p>
          </div>
        </div>

        <!-- 拟态水滴开关本体 -->
        <button
          type="button"
          @click="switch1 = !switch1"
          :class="[
            'relative inline-flex h-8 w-16 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none',
            switch1 ? 'bg-indigo-600' : 'bg-zinc-300 dark:bg-zinc-700'
          ]"
        >
          <span
            :class="[
              'pointer-events-none inline-block h-7 w-7 transform rounded-full bg-white shadow-lg transition-all duration-300 ease-out flex items-center justify-center text-xs',
              switch1 ? 'translate-x-8 scale-105' : 'translate-x-0 scale-95'
            ]"
          >
            <Moon v-if="switch1" class="h-3.5 w-3.5 text-indigo-600" />
            <Sun v-else class="h-3.5 w-3.5 text-amber-500" />
          </span>
        </button>
      </div>

      <!-- 开关 2: 神经推理算力超频 -->
      <div class="flex items-center justify-between p-4 rounded-xl border border-zinc-200/80 bg-zinc-50/70 dark:border-zinc-800/80 dark:bg-zinc-900/40">
        <div class="flex items-center gap-3">
          <div class="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <Zap class="h-4 w-4" />
          </div>
          <div>
            <h5 class="text-xs font-bold text-zinc-900 dark:text-white">自动保存</h5>
            <p class="text-[11px] font-mono text-zinc-400">每 30 秒自动保存草稿</p>
          </div>
        </div>

        <button
          type="button"
          @click="switch2 = !switch2"
          :class="[
            'relative inline-flex h-8 w-16 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none',
            switch2 ? 'bg-emerald-600' : 'bg-zinc-300 dark:bg-zinc-700'
          ]"
        >
          <span
            :class="[
              'pointer-events-none inline-block h-7 w-7 transform rounded-full bg-white shadow-lg transition-all duration-300 ease-out flex items-center justify-center text-xs',
              switch2 ? 'translate-x-8 scale-105' : 'translate-x-0 scale-95'
            ]"
          >
            <Zap v-if="switch2" class="h-3.5 w-3.5 text-emerald-600" />
            <span v-else class="w-1.5 h-1.5 rounded-full bg-zinc-400" />
          </span>
        </button>
      </div>

      <!-- 开关 3: 硬件安全熔断保护 -->
      <div class="flex items-center justify-between p-4 rounded-xl border border-zinc-200/80 bg-zinc-50/70 dark:border-zinc-800/80 dark:bg-zinc-900/40">
        <div class="flex items-center gap-3">
          <div class="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
            <Shield class="h-4 w-4" />
          </div>
          <div>
            <h5 class="text-xs font-bold text-zinc-900 dark:text-white">登录保护</h5>
            <p class="text-[11px] font-mono text-zinc-400">在新设备登录时需要验证</p>
          </div>
        </div>

        <button
          type="button"
          @click="switch3 = !switch3"
          :class="[
            'relative inline-flex h-8 w-16 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none',
            switch3 ? 'bg-purple-600' : 'bg-zinc-300 dark:bg-zinc-700'
          ]"
        >
          <span
            :class="[
              'pointer-events-none inline-block h-7 w-7 transform rounded-full bg-white shadow-lg transition-all duration-300 ease-out flex items-center justify-center text-xs',
              switch3 ? 'translate-x-8 scale-105' : 'translate-x-0 scale-95'
            ]"
          >
            <Shield v-if="switch3" class="h-3.5 w-3.5 text-purple-600" />
            <span v-else class="w-1.5 h-1.5 rounded-full bg-zinc-400" />
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
