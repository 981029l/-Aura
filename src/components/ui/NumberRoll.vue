<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'
import { Plus, Minus, RotateCw, TrendingUp } from 'lucide-vue-next'

export interface NumberRollProps {
  value?: number
  prefix?: string
  suffix?: string
  digitHeight?: number
  class?: string
}

const props = withDefaults(defineProps<NumberRollProps>(), {
  value: 86420,
  prefix: '¥',
  suffix: '',
  digitHeight: 52,
})

const currentValue = ref(props.value)

// 拆分为字符数组（包含数字、逗号、小数点）
const formattedChars = computed(() => {
  return currentValue.value.toLocaleString().split('')
})

function add(delta: number) {
  currentValue.value = Math.max(0, currentValue.value + delta)
}

function randomize() {
  currentValue.value = Math.floor(10000 + Math.random() * 90000)
}
</script>

<template>
  <div :class="cn('w-full max-w-lg rounded-3xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6', props.class)">
    <!-- 头部看板 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
        <TrendingUp class="h-4 w-4 text-emerald-500" />
        <span>数字滚轮</span>
      </div>

      <button
        type="button"
        @click="randomize"
        class="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-zinc-200 bg-zinc-50 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
      >
        <RotateCw class="h-3.5 w-3.5" />
        <span>随机生成</span>
      </button>
    </div>

    <!-- 滚轮数字主视窗 -->
    <div class="relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-6 dark:border-zinc-800/80 dark:bg-zinc-950/60 flex items-center justify-center">
      <!-- 机械仪表上下遮罩径向阴影 (打造圆柱滚轮深度感) -->
      <div class="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-zinc-50 dark:from-zinc-950 to-transparent pointer-events-none z-10 opacity-90" />
      <div class="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-zinc-50 dark:from-zinc-950 to-transparent pointer-events-none z-10 opacity-90" />

      <!-- 数字与字符滚轮槽列 -->
      <div class="flex items-center text-4xl sm:text-5xl font-black font-mono tracking-tight text-zinc-900 dark:text-white">
        <!-- 前缀符号 -->
        <span v-if="props.prefix" class="mr-1 text-2xl sm:text-3xl font-bold text-zinc-400 dark:text-zinc-500 flex items-center shrink-0" :style="{ height: `${props.digitHeight}px` }">
          {{ props.prefix }}
        </span>

        <!-- 各位滚轮单元 -->
        <div
          v-for="(char, idx) in formattedChars"
          :key="idx"
          class="relative overflow-hidden flex flex-col justify-start items-center shrink-0"
          :style="{ height: `${props.digitHeight}px` }"
        >
          <!-- 若为数字，呈现 0~9 垂直滑动列 -->
          <template v-if="/^[0-9]$/.test(char)">
            <div
              class="flex flex-col transition-transform duration-700 ease-out shrink-0"
              :style="{
                transform: `translateY(-${Number(char) * props.digitHeight}px)`,
              }"
            >
              <span
                v-for="digit in 10"
                :key="digit - 1"
                class="flex items-center justify-center w-7 sm:w-9 font-black shrink-0"
                :style="{ height: `${props.digitHeight}px`, lineHeight: `${props.digitHeight}px` }"
              >
                {{ digit - 1 }}
              </span>
            </div>
          </template>

          <!-- 若为逗号或小数点，直接静态呈现 -->
          <template v-else>
            <span
              class="w-3 sm:w-4 flex items-center justify-center text-zinc-400 dark:text-zinc-500 shrink-0"
              :style="{ height: `${props.digitHeight}px`, lineHeight: `${props.digitHeight}px` }"
            >
              {{ char }}
            </span>
          </template>
        </div>

        <!-- 后缀符号 -->
        <span v-if="props.suffix" class="ml-1 text-xl font-bold text-zinc-400 flex items-center shrink-0" :style="{ height: `${props.digitHeight}px` }">
          {{ props.suffix }}
        </span>
      </div>
    </div>

    <!-- 底部数值增减与步进微调按钮群 -->
    <div class="flex items-center justify-center gap-2 pt-1">
      <button
        type="button"
        @click="add(-1000)"
        class="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-zinc-200 hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900 text-xs font-mono font-semibold text-zinc-600 dark:text-zinc-300 transition-colors cursor-pointer"
      >
        <Minus class="h-3.5 w-3.5" />
        <span>1,000</span>
      </button>

      <button
        type="button"
        @click="add(-100)"
        class="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-zinc-200 hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900 text-xs font-mono font-semibold text-zinc-600 dark:text-zinc-300 transition-colors cursor-pointer"
      >
        <Minus class="h-3.5 w-3.5" />
        <span>100</span>
      </button>

      <button
        type="button"
        @click="add(100)"
        class="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-zinc-200 hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900 text-xs font-mono font-semibold text-zinc-600 dark:text-zinc-300 transition-colors cursor-pointer"
      >
        <Plus class="h-3.5 w-3.5" />
        <span>100</span>
      </button>

      <button
        type="button"
        @click="add(1000)"
        class="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-mono font-semibold text-white transition-colors cursor-pointer shadow-sm shadow-blue-500/20"
      >
        <Plus class="h-3.5 w-3.5" />
        <span>1,000</span>
      </button>
    </div>
  </div>
</template>
