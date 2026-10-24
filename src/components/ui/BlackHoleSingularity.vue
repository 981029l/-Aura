<script setup lang="ts">
import { ref, computed } from 'vue'
import { Orbit, Compass, Eye, Sparkles } from 'lucide-vue-next'

interface Props {
  massSolar?: number
  accretionTemp?: string
}

const props = withDefaults(defineProps<Props>(), {
  massSolar: 4.1e6, // Sag A* mass
  accretionTemp: '1.2e7 K',
})

const mouseX = ref(0)
const mouseY = ref(0)
const spinRate = ref<'sub-critical' | 'extremal' | 'dormant'>('extremal')
const showJets = ref(true)
const containerRef = ref<HTMLElement | null>(null)

const handleMouseMove = (e: MouseEvent) => {
  if (!containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  mouseX.value = ((e.clientX - rect.left) / rect.width - 0.5) * 35
  mouseY.value = -((e.clientY - rect.top) / rect.height - 0.5) * 35
}

const handleMouseLeave = () => {
  mouseX.value = 0
  mouseY.value = 0
}

const spinSpeedClass = computed(() => {
  if (spinRate.value === 'dormant') return 'spin-slow'
  if (spinRate.value === 'extremal') return 'spin-fast'
  return 'spin-normal'
})
</script>

<template>
  <div class="relative w-full max-w-2xl mx-auto rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-300 border border-slate-200 dark:border-amber-900/40 bg-slate-950 shadow-2xl font-mono text-slate-100 select-none">
    <!-- Deep Space Void Backdrop -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#180e29_0%,#030206_100%)]"></div>

    <!-- Header HUD -->
    <div class="relative z-20 flex items-center justify-between pb-3 border-b border-amber-500/20 text-xs">
      <div class="flex items-center gap-2">
        <Orbit class="w-4 h-4 text-amber-400" />
        <span class="font-bold tracking-wider text-amber-300 uppercase">
          SINGULARITY ACCRETION DISK // KERR-METRIC
        </span>
      </div>

      <div class="flex items-center gap-4 text-[11px] text-slate-400">
        <div class="flex items-center gap-1">
          <Eye class="w-3.5 h-3.5 text-cyan-400" />
          <span>M: {{ props.massSolar.toExponential(1) }} M☉</span>
        </div>
        <div class="flex items-center gap-1">
          <Sparkles class="w-3.5 h-3.5 text-amber-400" />
          <span>TEMP: {{ props.accretionTemp }}</span>
        </div>
      </div>
    </div>

    <!-- 3D Accretion Disk Viewport -->
    <div
      ref="containerRef"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
      class="relative z-10 my-4 h-[320px] rounded-2xl overflow-hidden flex items-center justify-center cursor-crosshair border border-amber-500/20 bg-black/80"
      style="perspective: 800px;"
    >
      <!-- Relativistic Polar Jets -->
      <div
        v-if="showJets"
        class="absolute w-1.5 h-full bg-gradient-to-t from-transparent via-cyan-400 to-transparent blur-[2px] opacity-75 animate-pulse pointer-events-none"
        :style="{ transform: `rotate(${mouseX * 0.5}deg)` }"
      ></div>

      <!-- Black Hole Event Horizon (Central Void) -->
      <div class="relative z-20 w-28 h-28 rounded-full bg-black shadow-[0_0_50px_rgba(245,158,11,0.6)] flex items-center justify-center border border-amber-500/40 pointer-events-none">
        <!-- Photon Sphere Ring -->
        <div class="w-24 h-24 rounded-full border border-amber-300/80 shadow-[inset_0_0_20px_rgba(245,158,11,0.8)] animate-pulse"></div>
      </div>

      <!-- Swirling Accretion Disk Ring 1 (Inner Hot Ring) -->
      <div
        class="absolute w-64 h-64 rounded-full border-4 border-amber-400/60 blur-[1px] pointer-events-none transition-transform duration-300"
        :class="spinSpeedClass"
        :style="{
          transform: `rotateX(${65 + mouseY}deg) rotateY(${mouseX}deg)`,
          boxShadow: '0 0 60px rgba(245, 158, 11, 0.5)',
        }"
      ></div>

      <!-- Swirling Accretion Disk Ring 2 (Outer Doppler Blue/Red Shift Ring) -->
      <div
        class="absolute w-96 h-96 rounded-full border-2 border-orange-500/40 pointer-events-none transition-transform duration-300"
        :class="spinSpeedClass"
        :style="{
          transform: `rotateX(${68 + mouseY * 0.8}deg) rotateY(${mouseX * 0.8}deg)`,
          boxShadow: '0 0 90px rgba(239, 68, 68, 0.3)',
        }"
      ></div>

      <!-- HUD Coordinates Overlay -->
      <div class="absolute bottom-3 left-3 text-[10px] text-amber-400/80 bg-black/60 px-2 py-1 rounded border border-amber-500/30">
        SCHWARZSCHILD rₛ: 1.2×10⁷ km
      </div>
    </div>

    <!-- Controls Toolbar -->
    <div class="relative z-20 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-amber-500/20 text-xs">
      <div class="flex items-center gap-2">
        <span class="text-slate-400">SPIN PARAMETER:</span>
        <div class="inline-flex rounded-xl bg-slate-900 p-1 border border-amber-500/30">
          <button
            v-for="s in (['dormant', 'sub-critical', 'extremal'] as const)"
            :key="s"
            @click="spinRate = s"
            class="px-2.5 py-1 rounded-lg uppercase text-[11px] transition-all"
            :class="spinRate === s ? 'bg-amber-600 text-white font-bold shadow-md' : 'text-slate-400 hover:text-white'"
          >
            {{ s }}
          </button>
        </div>
      </div>

      <button
        @click="showJets = !showJets"
        class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-amber-500/30 bg-slate-900 text-amber-300 hover:border-amber-400 transition-colors"
      >
        <Compass class="w-3.5 h-3.5" />
        <span>POLAR JETS: {{ showJets ? 'ON' : 'OFF' }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
@keyframes spinClockwise {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.spin-slow {
  animation: spinClockwise 16s linear infinite;
}
.spin-normal {
  animation: spinClockwise 8s linear infinite;
}
.spin-fast {
  animation: spinClockwise 3.5s linear infinite;
}
</style>
