<script setup lang="ts">
import { ref, computed } from 'vue'
import { Shield, Crosshair, Zap, Radio, AlertOctagon, Power } from 'lucide-vue-next'

interface Props {
  unitId?: string
  pilotCode?: string
}

const props = withDefaults(defineProps<Props>(), {
  unitId: 'MK-IX APEX CHASSIS',
  pilotCode: 'NEO-TOKYO-07',
})

const mode = ref<'defense' | 'assault' | 'stealth'>('assault')
const isOnline = ref(true)
const shieldLevel = ref(84)

const modeConfig = computed(() => {
  switch (mode.value) {
    case 'defense':
      return {
        label: 'DEFENSIVE POLARIZATION',
        color: 'text-cyan-400',
        borderColor: 'border-cyan-500',
        glowBg: 'bg-cyan-500/10',
        status: 'SHIELD REINFORCED',
      }
    case 'stealth':
      return {
        label: 'OPTICAL CLOAKING ACTIVE',
        color: 'text-purple-400',
        borderColor: 'border-purple-500',
        glowBg: 'bg-purple-500/10',
        status: 'RADAR ABSORBING',
      }
    case 'assault':
    default:
      return {
        label: 'MAX OVERDRIVE OUTPUT',
        color: 'text-amber-400',
        borderColor: 'border-amber-500',
        glowBg: 'bg-amber-500/10',
        status: 'WEAPONS ARMED',
      }
  }
})
</script>

<template>
  <div class="relative w-full max-w-lg mx-auto p-6 sm:p-8 transition-all duration-300 font-mono text-slate-100 select-none">
    <!-- Cyber Chamfered Outer Container (Polygon Clip-path) -->
    <div
      class="relative p-6 sm:p-7 rounded-none bg-slate-950/95 border-2 transition-all duration-500 shadow-2xl backdrop-blur-xl group"
      :class="[
        modeConfig.borderColor,
        isOnline ? 'shadow-[0_0_30px_rgba(245,158,11,0.15)]' : 'border-slate-800 opacity-60'
      ]"
      style="clip-path: polygon(0 20px, 20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px));"
    >
      <!-- Neon Grid Background -->
      <div class="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:12px_12px]"></div>

      <!-- Top Notch Corner Markers -->
      <div class="absolute top-1 left-6 flex items-center gap-1 text-[9px] text-amber-500/70">
        <span>// SEC_SYS</span>
        <div class="w-1.5 h-1.5 bg-amber-400 animate-ping"></div>
      </div>
      <div class="absolute top-1 right-6 text-[9px] text-amber-500/70">
        {{ props.pilotCode }}
      </div>

      <!-- Main Header -->
      <div class="flex items-center justify-between pb-4 border-b border-amber-500/30">
        <div class="flex items-center gap-3">
          <div class="p-2.5 bg-amber-500/10 border border-amber-500/40 rounded">
            <Crosshair class="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h3 class="text-sm font-bold tracking-wider text-amber-300">
              {{ props.unitId }}
            </h3>
            <p class="text-[10px] text-slate-400">
              PROTOCOL STATUS: <span :class="modeConfig.color">{{ modeConfig.status }}</span>
            </p>
          </div>
        </div>

        <button
          @click="isOnline = !isOnline"
          class="p-2 border border-slate-700 hover:border-amber-400 rounded transition-colors text-slate-400 hover:text-amber-400"
        >
          <Power class="w-4 h-4" :class="{ 'text-amber-400 animate-pulse': isOnline }" />
        </button>
      </div>

      <!-- Center HUD Metrics -->
      <div class="my-5 p-4 bg-slate-900/90 border border-slate-800 rounded space-y-4">
        <!-- Shield Integrity Bar -->
        <div>
          <div class="flex items-center justify-between text-xs mb-1.5">
            <span class="flex items-center gap-1.5 text-slate-400">
              <Shield class="w-3.5 h-3.5 text-cyan-400" />
              <span>DEFENSE MATRIX</span>
            </span>
            <span class="text-cyan-400 font-bold">{{ shieldLevel }}%</span>
          </div>
          <div class="h-2 w-full bg-slate-800 rounded-none overflow-hidden flex">
            <div
              class="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
              :style="{ width: `${shieldLevel}%` }"
            ></div>
          </div>
        </div>

        <!-- System Parameters Grid -->
        <div class="grid grid-cols-2 gap-2 text-[11px] pt-1 border-t border-slate-800/80">
          <div class="p-2 bg-slate-950/60 border border-slate-800">
            <span class="text-slate-500 block text-[9px]">REACTOR CORE</span>
            <span class="text-amber-400 font-bold flex items-center gap-1 mt-0.5">
              <Zap class="w-3 h-3" /> 14.8 GW
            </span>
          </div>
          <div class="p-2 bg-slate-950/60 border border-slate-800">
            <span class="text-slate-500 block text-[9px]">SIGNAL CARRIER</span>
            <span class="text-purple-400 font-bold flex items-center gap-1 mt-0.5">
              <Radio class="w-3 h-3" /> 890.4 MHz
            </span>
          </div>
        </div>
      </div>

      <!-- Mode Selector Tabs -->
      <div class="flex items-center justify-between gap-2 pt-2">
        <button
          v-for="m in (['defense', 'assault', 'stealth'] as const)"
          :key="m"
          @click="mode = m"
          class="flex-1 py-1.5 text-[10px] uppercase font-bold tracking-wider border transition-all text-center"
          :class="mode === m
            ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.3)]'
            : 'border-slate-800 text-slate-500 hover:border-slate-700 hover:text-slate-300'"
        >
          {{ m }}
        </button>
      </div>

      <!-- Bottom Hazard Strip -->
      <div class="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500">
        <div class="flex items-center gap-1">
          <AlertOctagon class="w-3 h-3 text-amber-500" />
          <span>CYBERNETIC HAZARD CLASS IV</span>
        </div>
        <span>CRC: 0x9F41</span>
      </div>
    </div>
  </div>
</template>
