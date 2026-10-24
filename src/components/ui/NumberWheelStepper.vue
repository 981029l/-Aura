<script setup lang="ts">
import { ref } from 'vue'
import { ChevronUp, ChevronDown, RotateCcw, Sliders } from 'lucide-vue-next'

interface Props {
  initialValue?: number
  min?: number
  max?: number
  step?: number
  unit?: string
}

const props = withDefaults(defineProps<Props>(), {
  initialValue: 42,
  min: 0,
  max: 999,
  step: 1,
  unit: 'pts',
})

const value = ref(props.initialValue)
const isSpinning = ref(false)
const wheelDirection = ref<'up' | 'down' | null>(null)

let holdTimer: ReturnType<typeof setTimeout> | null = null
let intervalTimer: ReturnType<typeof setInterval> | null = null

const increment = () => {
  if (value.value + props.step <= props.max) {
    value.value += props.step
    triggerWheelAnim('up')
  }
}

const decrement = () => {
  if (value.value - props.step >= props.min) {
    value.value -= props.step
    triggerWheelAnim('down')
  }
}

const triggerWheelAnim = (dir: 'up' | 'down') => {
  wheelDirection.value = dir
  isSpinning.value = true
  setTimeout(() => {
    isSpinning.value = false
    wheelDirection.value = null
  }, 150)
}

const startContinuous = (action: () => void) => {
  action()
  holdTimer = setTimeout(() => {
    intervalTimer = setInterval(() => {
      action()
    }, 80)
  }, 300)
}

const stopContinuous = () => {
  if (holdTimer) clearTimeout(holdTimer)
  if (intervalTimer) clearInterval(intervalTimer)
}

const reset = () => {
  value.value = props.initialValue
}
</script>

<template>
  <div class="relative w-full max-w-sm mx-auto rounded-3xl p-6 overflow-hidden transition-all duration-300 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl font-sans select-none">
    <!-- Header -->
    <div class="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 text-xs">
      <div class="flex items-center gap-2">
        <Sliders class="w-4 h-4 text-emerald-500" />
        <span class="font-mono font-semibold tracking-wider text-slate-700 dark:text-slate-300 uppercase">
          WHEEL STEPPER
        </span>
      </div>

      <button
        @click="reset"
        class="flex items-center gap-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
      >
        <RotateCcw class="w-3.5 h-3.5" />
        <span>Reset</span>
      </button>
    </div>

    <!-- Mechanical Drum Wheel Viewport -->
    <div class="my-6 flex items-center justify-center gap-4">
      <!-- Decrement Button -->
      <button
        @mousedown="startContinuous(decrement)"
        @mouseup="stopContinuous"
        @mouseleave="stopContinuous"
        @touchstart.prevent="startContinuous(decrement)"
        @touchend.prevent="stopContinuous"
        class="w-12 h-12 rounded-2xl flex items-center justify-center border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-emerald-500 hover:text-emerald-500 active:scale-95 transition-all shadow-sm cursor-pointer"
      >
        <ChevronDown class="w-5 h-5" />
      </button>

      <!-- Drum Wheel Display Window -->
      <div class="relative w-36 h-28 rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-inner overflow-hidden flex flex-col items-center justify-center">
        <!-- Top Shadow Vignette (3D cylinder illusion) -->
        <div class="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-slate-200 dark:from-black to-transparent pointer-events-none z-10 opacity-70"></div>

        <!-- Upper Phantom Ghost Number -->
        <div class="text-xs font-mono font-bold text-slate-300 dark:text-slate-700 opacity-40 -translate-y-1">
          {{ value + props.step }}
        </div>

        <!-- Current Value -->
        <div
          class="my-1 text-3xl font-mono font-black text-slate-900 dark:text-slate-100 transition-transform duration-100 flex items-center gap-1"
          :class="{
            '-translate-y-1 scale-105': wheelDirection === 'up',
            'translate-y-1 scale-105': wheelDirection === 'down',
          }"
        >
          <span>{{ value }}</span>
          <span class="text-xs font-normal text-slate-400">{{ props.unit }}</span>
        </div>

        <!-- Lower Phantom Ghost Number -->
        <div class="text-xs font-mono font-bold text-slate-300 dark:text-slate-700 opacity-40 translate-y-1">
          {{ value - props.step >= props.min ? value - props.step : '' }}
        </div>

        <!-- Bottom Shadow Vignette (3D cylinder illusion) -->
        <div class="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-slate-200 dark:from-black to-transparent pointer-events-none z-10 opacity-70"></div>
      </div>

      <!-- Increment Button -->
      <button
        @mousedown="startContinuous(increment)"
        @mouseup="stopContinuous"
        @mouseleave="stopContinuous"
        @touchstart.prevent="startContinuous(increment)"
        @touchend.prevent="stopContinuous"
        class="w-12 h-12 rounded-2xl flex items-center justify-center border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-emerald-500 hover:text-emerald-500 active:scale-95 transition-all shadow-sm cursor-pointer"
      >
        <ChevronUp class="w-5 h-5" />
      </button>
    </div>

    <!-- Footer Range Specs -->
    <div class="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800">
      <span>MIN: {{ props.min }}</span>
      <span class="text-emerald-500 font-semibold">STEP: ±{{ props.step }}</span>
      <span>MAX: {{ props.max }}</span>
    </div>
  </div>
</template>
