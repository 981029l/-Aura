<script setup lang="ts">
import { ref, computed } from 'vue'
import { Volume2, Sun, Cpu, Plus, Minus, Check } from 'lucide-vue-next'

interface Props {
  initialValue?: number
  min?: number
  max?: number
  step?: number
}

const props = withDefaults(defineProps<Props>(), {
  initialValue: 65,
  min: 0,
  max: 100,
  step: 1,
})

const value = ref(props.initialValue)
const isDragging = ref(false)
const isHapticSnap = ref(false)
const mode = ref<'volume' | 'brightness' | 'temperature'>('temperature')

const milestones = [0, 25, 50, 75, 100]

const percentage = computed(() => {
  return ((value.value - props.min) / (props.max - props.min)) * 100
})

const modeConfig = computed(() => {
  switch (mode.value) {
    case 'volume':
      return {
        name: 'Master Output Volume',
        icon: Volume2,
        unit: '%',
        color: 'from-emerald-500 to-teal-500',
        textColor: 'text-emerald-500',
        badgeBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
      }
    case 'brightness':
      return {
        name: 'OLED Display Luminance',
        icon: Sun,
        unit: ' nits',
        color: 'from-amber-500 to-orange-500',
        textColor: 'text-amber-500',
        badgeBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
      }
    case 'temperature':
    default:
      return {
        name: 'Neural Model Sampling Temperature',
        icon: Cpu,
        unit: '°',
        color: 'from-violet-500 to-indigo-500',
        textColor: 'text-violet-500',
        badgeBg: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20',
      }
  }
})

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  const newVal = Number(target.value)
  value.value = newVal

  // Check if near any milestone
  const snap = milestones.find((m) => Math.abs(m - newVal) <= 2)
  if (snap !== undefined) {
    isHapticSnap.value = true
    setTimeout(() => {
      isHapticSnap.value = false
    }, 200)
  }
}

const adjust = (delta: number) => {
  value.value = Math.min(props.max, Math.max(props.min, value.value + delta))
}

const setMilestone = (m: number) => {
  value.value = m
  isHapticSnap.value = true
  setTimeout(() => {
    isHapticSnap.value = false
  }, 250)
}
</script>

<template>
  <div class="relative w-full max-w-xl mx-auto rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-300 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
    <!-- Header with Mode Selector -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-100 dark:border-slate-800">
      <div class="flex items-center gap-2.5">
        <component :is="modeConfig.icon" class="w-5 h-5" :class="modeConfig.textColor" />
        <div>
          <h3 class="text-sm font-semibold text-slate-800 dark:text-slate-100">
            {{ modeConfig.name }}
          </h3>
          <span class="text-xs text-slate-400">Tactile Snap Slider with Kinetic Tooltip</span>
        </div>
      </div>

      <div class="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-medium">
        <button
          v-for="m in (['temperature', 'brightness', 'volume'] as const)"
          :key="m"
          @click="mode = m"
          class="px-2.5 py-1 rounded-lg capitalize transition-all"
          :class="mode === m
            ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-semibold shadow-sm'
            : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'"
        >
          {{ m }}
        </button>
      </div>
    </div>

    <!-- Main Tactile Slider Zone -->
    <div class="relative pt-16 pb-8 px-2">
      <!-- Floating Kinetic Tooltip -->
      <div
        class="absolute top-2 -translate-x-1/2 flex flex-col items-center pointer-events-none transition-all ease-out"
        :class="isDragging ? 'scale-110 -translate-y-1' : 'scale-100'"
        :style="{ left: `${percentage}%` }"
      >
        <div
          class="px-3 py-1.5 rounded-2xl text-xs font-mono font-bold text-white shadow-xl transition-all flex items-center gap-1.5"
          :class="[
            `bg-gradient-to-r ${modeConfig.color}`,
            isHapticSnap ? 'scale-125 ring-4 ring-white/50 animate-bounce' : ''
          ]"
        >
          <span>{{ value }}{{ modeConfig.unit }}</span>
          <Check v-if="milestones.includes(value)" class="w-3 h-3 text-white" />
        </div>
        <!-- Tooltip triangle pointer -->
        <div
          class="w-2.5 h-2.5 -mt-1 rotate-45"
          :class="`bg-gradient-to-r ${modeConfig.color}`"
        ></div>
      </div>

      <!-- Custom Range Slider Track -->
      <div class="relative flex items-center">
        <!-- Background Track -->
        <div class="absolute inset-x-0 h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
          <!-- Active Gradient Fill -->
          <div
            class="h-full rounded-full transition-all ease-out duration-75 bg-gradient-to-r"
            :class="modeConfig.color"
            :style="{ width: `${percentage}%` }"
          ></div>
        </div>

        <!-- HTML Native Range Input (Transparent Overlay) -->
        <input
          type="range"
          :min="props.min"
          :max="props.max"
          :step="props.step"
          v-model.number="value"
          @input="handleInput"
          @mousedown="isDragging = true"
          @mouseup="isDragging = false"
          @touchstart="isDragging = true"
          @touchend="isDragging = false"
          class="relative w-full h-8 opacity-0 cursor-grab active:cursor-grabbing z-20"
        />

        <!-- Custom Visible Thumb Handle -->
        <div
          class="absolute -translate-x-1/2 w-6 h-6 rounded-full bg-white dark:bg-slate-100 shadow-lg border-2 pointer-events-none transition-all duration-75 flex items-center justify-center z-10"
          :class="[
            isDragging ? 'scale-125 ring-4 ring-indigo-500/30' : 'scale-100',
            isHapticSnap ? 'border-amber-400' : 'border-slate-300 dark:border-slate-600'
          ]"
          :style="{ left: `${percentage}%` }"
        >
          <div class="w-2 h-2 rounded-full" :class="`bg-gradient-to-r ${modeConfig.color}`"></div>
        </div>
      </div>

      <!-- Milestone Ticks -->
      <div class="relative flex justify-between mt-4 px-1 text-[11px] font-mono text-slate-400">
        <button
          v-for="m in milestones"
          :key="m"
          @click="setMilestone(m)"
          class="flex flex-col items-center group transition-colors"
          :class="value === m ? 'text-indigo-600 dark:text-indigo-400 font-bold' : 'hover:text-slate-600 dark:hover:text-slate-200'"
        >
          <span class="w-1 h-2 rounded-full mb-1 transition-colors" :class="value >= m ? 'bg-indigo-500' : 'bg-slate-300 dark:bg-slate-700'"></span>
          <span>{{ m }}%</span>
        </button>
      </div>
    </div>

    <!-- Stepper Controls & Current Metrics Bar -->
    <div class="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
      <div class="flex items-center gap-1.5">
        <button
          @click="adjust(-1)"
          class="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all"
        >
          <Minus class="w-3.5 h-3.5" />
        </button>
        <button
          @click="adjust(1)"
          class="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all"
        >
          <Plus class="w-3.5 h-3.5" />
        </button>
      </div>

      <div class="flex items-center gap-2">
        <span class="text-slate-400 font-mono">HAPTIC SNAP:</span>
        <span
          class="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold transition-all"
          :class="isHapticSnap ? 'bg-amber-500 text-white animate-pulse' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'"
        >
          {{ isHapticSnap ? 'SNAP ACTIVE' : 'IDLE' }}
        </span>
      </div>

      <div class="px-3 py-1 rounded-xl font-mono font-semibold" :class="modeConfig.badgeBg">
        {{ value }} / 100
      </div>
    </div>
  </div>
</template>
