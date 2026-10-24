<script setup lang="ts">
import { ref } from 'vue'
import { ShieldAlert, Zap, Radio, Terminal } from 'lucide-vue-next'

interface Props {
  cardTitle?: string
  clearanceLevel?: string
}

withDefaults(defineProps<Props>(), {
  cardTitle: 'CYBER SECURITY PROTOCOL',
  clearanceLevel: 'LEVEL 5 // BLACK-OPS',
})

const isSurging = ref(false)

const triggerGlitch = () => {
  isSurging.value = true
  setTimeout(() => {
    isSurging.value = false
  }, 600)
}
</script>

<template>
  <div class="relative w-full max-w-md mx-auto p-2 font-mono select-none">
    <!-- Card Outer Box -->
    <div
      @mouseenter="triggerGlitch"
      class="relative rounded-3xl p-7 sm:p-8 overflow-hidden transition-all duration-300 border border-slate-200 dark:border-rose-900/40 bg-white dark:bg-slate-950 shadow-2xl group cursor-pointer"
      :class="{ 'animate-glitch-shake': isSurging }"
    >
      <!-- Scanline CRT lines -->
      <div class="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px]"></div>

      <!-- Holographic Cyan/Rose Radial Ambient Glow -->
      <div class="absolute -top-16 -right-16 w-48 h-48 bg-rose-500/10 dark:bg-rose-500/20 rounded-full blur-2xl pointer-events-none"></div>
      <div class="absolute -bottom-16 -left-16 w-48 h-48 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-2xl pointer-events-none"></div>

      <!-- Top Header -->
      <div class="relative z-10 flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
        <div class="flex items-center gap-2">
          <ShieldAlert class="w-4 h-4 text-rose-500" />
          <span class="text-xs font-bold tracking-wider text-slate-800 dark:text-rose-400 uppercase">
            {{ clearanceLevel }}
          </span>
        </div>

        <div class="flex items-center gap-1.5 text-[10px] text-slate-400 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-800">
          <Radio class="w-3 h-3 text-emerald-500 animate-pulse" />
          <span>ENCRYPTED</span>
        </div>
      </div>

      <!-- Center Glitch Typography & Hologram Display -->
      <div class="relative z-10 my-6 py-6 px-4 rounded-2xl bg-slate-50 dark:bg-black/60 border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center text-center">
        <div class="p-3 rounded-2xl bg-rose-500/10 text-rose-500 mb-3 group-hover:scale-110 transition-transform">
          <Terminal class="w-6 h-6" />
        </div>

        <!-- Glitch Double Layer Title -->
        <h3 class="text-base sm:text-lg font-black tracking-wider text-slate-900 dark:text-white uppercase relative">
          <span :class="{ 'opacity-0': isSurging }">{{ cardTitle }}</span>
          <span v-if="isSurging" class="absolute inset-0 text-rose-500 translate-x-1 -translate-y-0.5 opacity-80 pointer-events-none">{{ cardTitle }}</span>
          <span v-if="isSurging" class="absolute inset-0 text-cyan-400 -translate-x-1 translate-y-0.5 opacity-80 pointer-events-none">{{ cardTitle }}</span>
        </h3>

        <p class="text-xs text-slate-400 mt-2 font-sans">
          Tamper-evident electromagnetic frequency lock.
        </p>
      </div>

      <!-- Footer -->
      <div class="relative z-10 flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
        <span>HASH: 0xDEAD_BEEF</span>
        <button
          @click.stop="triggerGlitch"
          class="flex items-center gap-1 text-rose-500 hover:text-rose-400 font-bold"
        >
          <Zap class="w-3 h-3" />
          <span>Trigger Surge</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes glitchShake {
  0% { transform: translate(0); }
  25% { transform: translate(-3px, 2px); }
  50% { transform: translate(3px, -2px); }
  75% { transform: translate(-2px, -1px); }
  100% { transform: translate(0); }
}

.animate-glitch-shake {
  animation: glitchShake 0.15s linear infinite;
}
</style>
