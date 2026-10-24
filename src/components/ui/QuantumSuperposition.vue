<script setup lang="ts">
import { ref, computed } from 'vue'
import { Cpu, RefreshCw, Zap } from 'lucide-vue-next'

interface Props {
  qubitLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  qubitLabel: 'QUBIT q[0]',
})

const theta = ref(45) // polar angle (degrees)
const phi = ref(30)   // azimuthal angle (degrees)
const isMeasuring = ref(false)

const prob0 = computed(() => {
  const rad = (theta.value * Math.PI) / 180
  return Math.round(Math.pow(Math.cos(rad / 2), 2) * 100)
})

const prob1 = computed(() => 100 - prob0.value)

// Quantum Gates
const applyHadamard = () => {
  theta.value = 90
  phi.value = 0
}

const applyPauliX = () => {
  theta.value = 180 - theta.value
  phi.value = (phi.value + 180) % 360
}

const resetGround = () => {
  theta.value = 0
  phi.value = 0
}

const measureCollapse = () => {
  isMeasuring.value = true
  setTimeout(() => {
    const collapseTo0 = Math.random() * 100 < prob0.value
    theta.value = collapseTo0 ? 0 : 180
    phi.value = 0
    isMeasuring.value = false
  }, 350)
}
</script>

<template>
  <div class="relative w-full max-w-xl mx-auto rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-300 border border-slate-200 dark:border-indigo-900/40 bg-white dark:bg-slate-950 shadow-2xl font-mono text-slate-800 dark:text-slate-100 select-none">
    <!-- Header -->
    <div class="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 text-xs">
      <div class="flex items-center gap-2">
        <Cpu class="w-4 h-4 text-indigo-500" />
        <span class="font-bold tracking-wider uppercase text-slate-800 dark:text-indigo-300">
          BLOCH SPHERE // {{ props.qubitLabel }}
        </span>
      </div>

      <div class="flex items-center gap-3 text-[11px] text-slate-400">
        <span>θ: {{ theta }}°</span>
        <span>φ: {{ phi }}°</span>
      </div>
    </div>

    <!-- 3D Bloch Sphere Container -->
    <div class="relative my-6 h-64 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex items-center justify-center overflow-hidden">
      <!-- Outer Sphere Ring -->
      <div class="relative w-48 h-48 rounded-full border-2 border-indigo-500/30 dark:border-indigo-500/40 flex items-center justify-center shadow-inner">
        <!-- Equator Ellipse -->
        <div class="absolute w-48 h-20 rounded-full border border-dashed border-indigo-400/40 pointer-events-none"></div>

        <!-- Meridian Ellipse -->
        <div class="absolute h-48 w-20 rounded-full border border-dashed border-indigo-400/40 pointer-events-none"></div>

        <!-- Z-Axis Poles -->
        <span class="absolute -top-3 font-bold text-xs text-indigo-600 dark:text-indigo-400">|0⟩</span>
        <span class="absolute -bottom-3 font-bold text-xs text-rose-500">|1⟩</span>

        <!-- Center Origin Point -->
        <div class="w-2 h-2 rounded-full bg-slate-400"></div>

        <!-- State Vector Pointer Needle -->
        <div
          class="absolute w-24 h-0.5 bg-gradient-to-r from-transparent to-indigo-500 origin-left transition-transform duration-300"
          :style="{
            left: '50%',
            transform: `rotate(${-90 + theta}deg)`,
            boxShadow: '0 0 10px rgba(99,102,241,0.6)',
          }"
        >
          <!-- Vector Arrow Head Point -->
          <div class="absolute right-0 -top-1 w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-md"></div>
        </div>
      </div>

      <!-- Live Probability Overlay -->
      <div class="absolute bottom-3 left-4 text-xs space-y-1">
        <div class="flex items-center gap-2">
          <span class="w-12 text-slate-400">P(|0⟩):</span>
          <span class="font-bold text-indigo-600 dark:text-indigo-400">{{ prob0 }}%</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-12 text-slate-400">P(|1⟩):</span>
          <span class="font-bold text-rose-500">{{ prob1 }}%</span>
        </div>
      </div>
    </div>

    <!-- Quantum Gates Buttons Toolbar -->
    <div class="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-200 dark:border-slate-800 text-xs">
      <div class="flex items-center gap-1.5">
        <button
          @click="applyHadamard"
          class="px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 hover:border-indigo-500 transition-colors font-bold"
        >
          H (Hadamard)
        </button>
        <button
          @click="applyPauliX"
          class="px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 hover:border-indigo-500 transition-colors font-bold"
        >
          X (NOT)
        </button>
        <button
          @click="resetGround"
          class="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <RefreshCw class="w-3.5 h-3.5 text-slate-400" />
        </button>
      </div>

      <button
        @click="measureCollapse"
        class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-all shadow-md shadow-indigo-600/20 active:scale-95"
      >
        <Zap class="w-3.5 h-3.5" :class="{ 'animate-spin': isMeasuring }" />
        <span>Measure Collapse</span>
      </button>
    </div>
  </div>
</template>
