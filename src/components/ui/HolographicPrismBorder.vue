<script setup lang="ts">
import { ref } from 'vue'
import { Sparkles, ArrowUpRight, Compass, Shield } from 'lucide-vue-next'

interface Props {
  title?: string
  subtitle?: string
}

withDefaults(defineProps<Props>(), {
  title: 'PRISMATIC OPTICAL CORE',
  subtitle: 'Conic dispersion refraction border primitive',
})

const isHovered = ref(false)
const mousePos = ref({ x: 50, y: 50 })

const handleMouseMove = (e: MouseEvent) => {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  mousePos.value = {
    x: ((e.clientX - rect.left) / rect.width) * 100,
    y: ((e.clientY - rect.top) / rect.height) * 100,
  }
}
</script>

<template>
  <div class="relative w-full max-w-md mx-auto p-2 font-sans select-none">
    <!-- Prismatic Rotating Border Wrapper -->
    <div
      @mousemove="handleMouseMove"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
      class="relative p-[2px] rounded-3xl overflow-hidden group shadow-2xl transition-all duration-500"
    >
      <!-- Conic Prismatic Rainbow Gradient Background Layer -->
      <div
        class="absolute -inset-2 rounded-3xl bg-[conic-gradient(from_0deg_at_50%_50%,#f43f5e_0deg,#ec4899_60deg,#8b5cf6_120deg,#06b6d4_180deg,#10b981_240deg,#f59e0b_300deg,#f43f5e_360deg)] animate-prism-rotate opacity-75 group-hover:opacity-100 transition-opacity duration-500"
      ></div>

      <!-- Inner Card Body Surface -->
      <div class="relative rounded-[22px] p-6 sm:p-7 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border border-white/40 dark:border-slate-800/60 overflow-hidden">
        <!-- Glare Flare Overlay -->
        <div
          class="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-300"
          :style="{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.8) 0%, transparent 60%)`,
          }"
        ></div>

        <!-- Top Header -->
        <div class="relative z-10 flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800/80">
          <div class="flex items-center gap-2">
            <div class="p-2 rounded-xl bg-gradient-to-tr from-rose-500/10 to-indigo-500/10 text-rose-500 dark:text-rose-400">
              <Sparkles class="w-4 h-4" />
            </div>
            <span class="text-xs font-mono font-bold tracking-wider text-slate-800 dark:text-slate-100 uppercase">
              {{ title }}
            </span>
          </div>

          <button class="p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-400 group-hover:text-rose-500 transition-colors">
            <ArrowUpRight class="w-4 h-4" />
          </button>
        </div>

        <!-- Main Body -->
        <div class="relative z-10 my-6 space-y-3">
          <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
            {{ subtitle }}
          </p>

          <div class="grid grid-cols-2 gap-3 pt-2">
            <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-left">
              <Compass class="w-4 h-4 text-cyan-500 mb-1" />
              <span class="text-[10px] font-mono text-slate-400 block">DISPERSION</span>
              <span class="text-xs font-bold font-mono text-slate-800 dark:text-slate-200">360° CONTINUOUS</span>
            </div>
            <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-left">
              <Shield class="w-4 h-4 text-emerald-500 mb-1" />
              <span class="text-[10px] font-mono text-slate-400 block">INTEGRITY</span>
              <span class="text-xs font-bold font-mono text-slate-800 dark:text-slate-200">HARDWARE ACCEL</span>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800/80">
          <span>SPECTRUM: 380 - 750 nm</span>
          <span class="text-rose-500 font-semibold">ZERO-CONFIG SFC</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes prismRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-prism-rotate {
  animation: prismRotate 6s linear infinite;
}
</style>
