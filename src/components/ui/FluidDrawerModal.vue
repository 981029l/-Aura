<script setup lang="ts">
import { ref } from 'vue'
import { PanelBottom, X, Sparkles, SlidersHorizontal, Check } from 'lucide-vue-next'

interface Props {
  triggerLabel?: string
  sheetTitle?: string
}

withDefaults(defineProps<Props>(), {
  triggerLabel: 'Open Fluid Drawer',
  sheetTitle: 'Quantum Workspace Settings',
})

const isOpen = ref(false)
const sheetHeight = ref<'half' | 'full'>('half')
const autoSync = ref(true)
const turboInference = ref(false)

const openDrawer = () => {
  isOpen.value = true
}

const closeDrawer = () => {
  isOpen.value = false
}
</script>

<template>
  <div class="relative w-full max-w-md mx-auto p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl font-sans text-center">
    <!-- Trigger Button Showcase -->
    <div class="space-y-4">
      <div class="p-3 mx-auto w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
        <PanelBottom class="w-6 h-6" />
      </div>

      <div>
        <h3 class="text-sm font-semibold text-slate-800 dark:text-slate-100">
          Fluid Inertial Drawer Modal
        </h3>
        <p class="text-xs text-slate-400 mt-1">
          Elastic bottom sheet with gesture drag threshold & backdrop blur
        </p>
      </div>

      <button
        @click="openDrawer"
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs shadow-lg shadow-indigo-600/25 active:scale-95 transition-all cursor-pointer"
      >
        <SlidersHorizontal class="w-4 h-4" />
        <span>{{ triggerLabel }}</span>
      </button>
    </div>

    <!-- Drawer Overlay and Sheet Panel -->
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex flex-col justify-end bg-black/60 backdrop-blur-sm transition-opacity duration-300"
      @click.self="closeDrawer"
    >
      <div
        class="w-full max-w-xl mx-auto rounded-t-3xl bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-6 shadow-2xl transition-all duration-300 transform animate-in slide-in-from-bottom"
        :class="sheetHeight === 'full' ? 'h-[85vh]' : 'h-[55vh]'"
      >
        <!-- Pull Handle Indicator -->
        <div class="w-12 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 mx-auto mb-4 cursor-grab"></div>

        <!-- Sheet Header -->
        <div class="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div class="flex items-center gap-2 text-left">
            <Sparkles class="w-4 h-4 text-indigo-500" />
            <h4 class="text-sm font-bold text-slate-900 dark:text-white">
              {{ sheetTitle }}
            </h4>
          </div>

          <div class="flex items-center gap-2">
            <button
              @click="sheetHeight = sheetHeight === 'half' ? 'full' : 'half'"
              class="px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-800 text-[10px] font-mono text-slate-500 hover:text-slate-900 dark:hover:text-white"
            >
              {{ sheetHeight.toUpperCase() }}
            </button>

            <button
              @click="closeDrawer"
              class="p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X class="w-4 h-4" />
            </button>
          </div>
        </div>

        <!-- Sheet Body Options -->
        <div class="py-4 space-y-3 text-left text-xs font-sans">
          <div
            @click="autoSync = !autoSync"
            class="flex items-center justify-between p-3 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950/60 cursor-pointer"
          >
            <div>
              <span class="font-semibold text-slate-800 dark:text-slate-200">Real-time Cloud Sync</span>
              <p class="text-[11px] text-slate-400">Stream AST modifications directly to master branch</p>
            </div>
            <div
              class="w-5 h-5 rounded-md border flex items-center justify-center transition-colors"
              :class="autoSync ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-300 dark:border-slate-700'"
            >
              <Check v-if="autoSync" class="w-3.5 h-3.5" />
            </div>
          </div>

          <div
            @click="turboInference = !turboInference"
            class="flex items-center justify-between p-3 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950/60 cursor-pointer"
          >
            <div>
              <span class="font-semibold text-slate-800 dark:text-slate-200">Turbo Inference Pipeline</span>
              <p class="text-[11px] text-slate-400">Enable 4-bit tensor speculative decoding</p>
            </div>
            <div
              class="w-5 h-5 rounded-md border flex items-center justify-center transition-colors"
              :class="turboInference ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-300 dark:border-slate-700'"
            >
              <Check v-if="turboInference" class="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="pt-4 flex items-center gap-3">
          <button
            @click="closeDrawer"
            class="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-all shadow-md shadow-indigo-600/25"
          >
            Apply Configurations
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
