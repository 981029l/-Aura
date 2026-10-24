<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Compass, Gauge, Rocket, Crosshair } from 'lucide-vue-next'

interface Props {
  ringsCount?: number
  defaultSpeed?: 'cruise' | 'warp' | 'hyperspace'
}

const props = withDefaults(defineProps<Props>(), {
  ringsCount: 8,
  defaultSpeed: 'warp',
})

const speed = ref<'cruise' | 'warp' | 'hyperspace'>(props.defaultSpeed)
const shape = ref<'octagon' | 'hexagon' | 'square'>('octagon')
const mouseX = ref(0)
const mouseY = ref(0)
const containerRef = ref<HTMLElement | null>(null)
const lightYears = ref(1420.5)

let interval: ReturnType<typeof setInterval> | null = null

const handleMouseMove = (e: MouseEvent) => {
  if (!containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width - 0.5
  const y = (e.clientY - rect.top) / rect.height - 0.5
  mouseX.value = x * 25
  mouseY.value = -y * 25
}

const handleMouseLeave = () => {
  mouseX.value = 0
  mouseY.value = 0
}

const speedMultiplier = computed(() => {
  if (speed.value === 'cruise') return 0.5
  if (speed.value === 'hyperspace') return 3.5
  return 1.5
})

const speedVelocity = computed(() => {
  if (speed.value === 'cruise') return '0.42c'
  if (speed.value === 'hyperspace') return '9.88c'
  return '2.15c'
})

onMounted(() => {
  interval = setInterval(() => {
    lightYears.value += 0.3 * speedMultiplier.value
  }, 100)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<template>
  <div class="relative w-full max-w-2xl mx-auto rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-300 border border-slate-200 dark:border-indigo-900/40 bg-slate-900 shadow-2xl text-slate-100">
    <!-- Starfield Background -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1e1b4b_0%,#030712_100%)]"></div>

    <!-- HUD Top Bar -->
    <div class="relative z-20 flex items-center justify-between pb-3 border-b border-indigo-500/20 text-xs font-mono">
      <div class="flex items-center gap-2">
        <Rocket class="w-4 h-4 text-indigo-400" />
        <span class="font-bold tracking-wider text-indigo-300">WARP CORE: ENGAGED</span>
      </div>

      <div class="flex items-center gap-4 text-[11px] text-slate-400">
        <div class="flex items-center gap-1">
          <Gauge class="w-3.5 h-3.5 text-cyan-400" />
          <span>VELOCITY: {{ speedVelocity }}</span>
        </div>
        <div class="flex items-center gap-1">
          <Compass class="w-3.5 h-3.5 text-purple-400" />
          <span>DIST: {{ lightYears.toFixed(1) }} LY</span>
        </div>
      </div>
    </div>

    <!-- 3D Perspective Tunnel Viewport -->
    <div
      ref="containerRef"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
      class="relative z-10 my-4 h-[320px] rounded-2xl overflow-hidden flex items-center justify-center cursor-crosshair border border-indigo-500/30 bg-black/60 backdrop-blur-sm"
      style="perspective: 600px;"
    >
      <!-- Center Vanishing Point Glow -->
      <div class="absolute w-12 h-12 rounded-full bg-cyan-400/30 blur-md pointer-events-none animate-pulse"></div>
      <Crosshair class="absolute w-5 h-5 text-cyan-400/60 pointer-events-none z-30" />

      <!-- Concentric Tunnel Rings in 3D Space -->
      <div
        class="w-full h-full flex items-center justify-center transition-transform duration-300 ease-out"
        :style="{
          transform: `rotateY(${mouseX}deg) rotateX(${mouseY}deg)`,
          transformStyle: 'preserve-3d',
        }"
      >
        <div
          v-for="i in props.ringsCount"
          :key="i"
          class="absolute border transition-all duration-300 pointer-events-none ring-pulse"
          :class="[
            shape === 'octagon' ? 'rounded-3xl' : shape === 'hexagon' ? 'rounded-2xl rotate-45' : 'rounded-lg',
            i % 2 === 0 ? 'border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.15)]' : 'border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.15)]'
          ]"
          :style="{
            animationDuration: `${3 / speedMultiplier}s`,
            animationDelay: `${(i - 1) * (3 / speedMultiplier / props.ringsCount)}s`,
          }"
        ></div>

        <!-- Radiating Perspective Rails (Tunnel Guide Lines) -->
        <svg class="absolute inset-0 w-full h-full stroke-indigo-500/20" xmlns="http://www.w3.org/2000/svg">
          <line x1="50%" y1="50%" x2="0%" y2="0%" stroke-width="1.5" stroke-dasharray="3, 3" />
          <line x1="50%" y1="50%" x2="100%" y2="0%" stroke-width="1.5" stroke-dasharray="3, 3" />
          <line x1="50%" y1="50%" x2="0%" y2="100%" stroke-width="1.5" stroke-dasharray="3, 3" />
          <line x1="50%" y1="50%" x2="100%" y2="100%" stroke-width="1.5" stroke-dasharray="3, 3" />
        </svg>
      </div>

      <!-- Live Coordinates overlay -->
      <div class="absolute bottom-3 left-3 text-[10px] font-mono text-cyan-400/80 bg-black/50 px-2 py-1 rounded border border-cyan-500/30">
        VECTOR: [{{ mouseX.toFixed(1) }}°, {{ mouseY.toFixed(1) }}°]
      </div>
    </div>

    <!-- Controls Bottom Bar -->
    <div class="relative z-20 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-indigo-500/20 text-xs font-mono">
      <div class="flex items-center gap-2">
        <span class="text-slate-400">WARP SPEED:</span>
        <div class="inline-flex rounded-xl bg-slate-800/80 p-1 border border-indigo-500/30">
          <button
            v-for="s in (['cruise', 'warp', 'hyperspace'] as const)"
            :key="s"
            @click="speed = s"
            class="px-2.5 py-1 rounded-lg uppercase text-[11px] transition-all"
            :class="speed === s ? 'bg-indigo-600 text-white font-bold shadow-md' : 'text-slate-400 hover:text-white'"
          >
            {{ s }}
          </button>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <span class="text-slate-400">SHAPE:</span>
        <div class="inline-flex rounded-xl bg-slate-800/80 p-1 border border-indigo-500/30">
          <button
            v-for="sh in (['octagon', 'hexagon', 'square'] as const)"
            :key="sh"
            @click="shape = sh"
            class="px-2.5 py-1 rounded-lg capitalize text-[11px] transition-all"
            :class="shape === sh ? 'bg-cyan-600 text-white font-bold shadow-md' : 'text-slate-400 hover:text-white'"
          >
            {{ sh }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes tunnelWarp {
  0% {
    width: 20px;
    height: 20px;
    opacity: 0;
    transform: translateZ(-200px);
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 0.9;
  }
  100% {
    width: 420px;
    height: 420px;
    opacity: 0;
    transform: translateZ(400px);
  }
}

.ring-pulse {
  animation-name: tunnelWarp;
  animation-timing-function: cubic-bezier(0.1, 0.8, 0.2, 1);
  animation-iteration-count: infinite;
}
</style>
