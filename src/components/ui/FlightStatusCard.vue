<template>
  <div
    class="relative w-full max-w-[490px] rounded-[28px] p-6 overflow-hidden select-none"
    :class="className"
    :style="{
      background: 'linear-gradient(145deg, #18181b 0%, #0f0f12 50%, #09090b 100%)',
      boxShadow: '0 25px 60px -15px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.8)',
      border: '1px solid rgba(255,255,255,0.08)',
    }"
  >
    <!-- Halftone background decorative grid -->
    <div
      class="absolute inset-0 opacity-15 pointer-events-none"
      style="background-image: radial-gradient(#60a5fa 1px, transparent 1px); background-size: 16px 16px;"
    />

    <div class="relative z-10 flex flex-col gap-5">
      <!-- Header Route Row -->
      <div class="flex items-center justify-between">
        <!-- Departure -->
        <div class="flex flex-col items-start gap-1">
          <div class="flex gap-1.5 items-center">
            <div
              v-for="(char, cIdx) in departureCode.toUpperCase().split('')"
              :key="cIdx"
              class="grid grid-cols-5 gap-[2px] p-1 bg-black/40 rounded-sm border border-white/5"
            >
              <div
                v-for="(bit, bIdx) in getDotMatrix(char)"
                :key="bIdx"
                class="w-[4px] h-[4px] rounded-[1px] transition-colors duration-300"
                :class="bit ? 'bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.8)]' : 'bg-neutral-800/40'"
              />
            </div>
          </div>
          <span class="text-xs font-medium text-neutral-400 uppercase tracking-wider">{{ departureCity }}</span>
          <span class="text-[11px] font-mono text-neutral-500">{{ departureTime }}</span>
        </div>

        <!-- Middle Plane Icon & Route Path -->
        <div class="flex flex-col items-center gap-1 px-3">
          <div class="flex items-center gap-2 text-neutral-500">
            <span class="w-8 h-[1px] bg-gradient-to-r from-transparent via-neutral-600 to-amber-400" />
            <svg class="w-5 h-5 text-amber-400 transform rotate-90" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
            </svg>
            <span class="w-8 h-[1px] bg-gradient-to-l from-transparent via-neutral-600 to-amber-400" />
          </div>
          <span class="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
            {{ statusText }}
          </span>
        </div>

        <!-- Arrival -->
        <div class="flex flex-col items-end gap-1">
          <div class="flex gap-1.5 items-center">
            <div
              v-for="(char, cIdx) in arrivalCode.toUpperCase().split('')"
              :key="cIdx"
              class="grid grid-cols-5 gap-[2px] p-1 bg-black/40 rounded-sm border border-white/5"
            >
              <div
                v-for="(bit, bIdx) in getDotMatrix(char)"
                :key="bIdx"
                class="w-[4px] h-[4px] rounded-[1px] transition-colors duration-300"
                :class="bit ? 'bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.8)]' : 'bg-neutral-800/40'"
              />
            </div>
          </div>
          <span class="text-xs font-medium text-neutral-400 uppercase tracking-wider">{{ arrivalCity }}</span>
          <span class="text-[11px] font-mono text-neutral-500">{{ arrivalTime }}</span>
        </div>
      </div>

      <!-- Divider -->
      <div class="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <!-- Flight Progress Bar -->
      <div class="flex flex-col gap-2">
        <div class="flex items-center justify-between text-xs font-mono">
          <span class="text-neutral-400 flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            {{ eta }}
          </span>
          <span class="text-neutral-300 font-semibold">{{ remainingTime }}</span>
        </div>

        <div class="relative w-full h-2 bg-neutral-900 rounded-full overflow-hidden p-[1px] border border-white/5">
          <div
            class="h-full rounded-full bg-gradient-to-r from-amber-500 via-emerald-400 to-cyan-400 shadow-[0_0_12px_rgba(52,211,153,0.5)] transition-all duration-700 ease-out"
            :style="{ width: `${progress}%` }"
          />
        </div>
      </div>

      <!-- Footer Detail Info -->
      <div class="grid grid-cols-3 gap-2 p-3 rounded-xl bg-black/30 border border-white/5">
        <div class="flex flex-col">
          <span class="text-[10px] text-neutral-500 uppercase tracking-wider">Flight</span>
          <span class="text-xs font-mono font-medium text-neutral-200">{{ flightNumber }}</span>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-[10px] text-neutral-500 uppercase tracking-wider">Next Event</span>
          <span class="text-xs font-mono font-medium text-amber-300">{{ nextEvent }}</span>
        </div>
        <div class="flex flex-col items-end">
          <span class="text-[10px] text-neutral-500 uppercase tracking-wider">Time Zone</span>
          <span class="text-xs font-mono font-medium text-neutral-200">{{ timezone }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  departureCode?: string
  arrivalCode?: string
  departureCity?: string
  arrivalCity?: string
  departureTime?: string
  arrivalTime?: string
  eta?: string
  timezone?: string
  nextEvent?: string
  progress?: number
  remainingTime?: string
  flightNumber?: string
  statusText?: string
  className?: string
}

withDefaults(defineProps<Props>(), {
  departureCode: 'HND',
  arrivalCode: 'SFO',
  departureCity: 'Tokyo',
  arrivalCity: 'San Francisco',
  departureTime: '17:40',
  arrivalTime: '11:15',
  eta: 'ETA 11:15 AM',
  timezone: 'PST (-16H)',
  nextEvent: 'DINNER IN 1H',
  progress: 58,
  remainingTime: '-4H 25M',
  flightNumber: 'NH 008',
  statusText: 'IN FLIGHT',
  className: '',
})

// 5x7 matrix patterns
const MATRIX_LETTERS: Record<string, number[]> = {
  A: [
    0, 1, 1, 1, 0,
    1, 0, 0, 0, 1,
    1, 0, 0, 0, 1,
    1, 1, 1, 1, 1,
    1, 0, 0, 0, 1,
    1, 0, 0, 0, 1,
    1, 0, 0, 0, 1,
  ],
  B: [
    1, 1, 1, 1, 0,
    1, 0, 0, 0, 1,
    1, 0, 0, 0, 1,
    1, 1, 1, 1, 0,
    1, 0, 0, 0, 1,
    1, 0, 0, 0, 1,
    1, 1, 1, 1, 0,
  ],
  C: [
    0, 1, 1, 1, 0,
    1, 0, 0, 0, 1,
    1, 0, 0, 0, 0,
    1, 0, 0, 0, 0,
    1, 0, 0, 0, 0,
    1, 0, 0, 0, 1,
    0, 1, 1, 1, 0,
  ],
  D: [
    1, 1, 1, 1, 0,
    1, 0, 0, 0, 1,
    1, 0, 0, 0, 1,
    1, 0, 0, 0, 1,
    1, 0, 0, 0, 1,
    1, 0, 0, 0, 1,
    1, 1, 1, 1, 0,
  ],
  E: [
    1, 1, 1, 1, 1,
    1, 0, 0, 0, 0,
    1, 0, 0, 0, 0,
    1, 1, 1, 1, 0,
    1, 0, 0, 0, 0,
    1, 0, 0, 0, 0,
    1, 1, 1, 1, 1,
  ],
  F: [
    1, 1, 1, 1, 1,
    1, 0, 0, 0, 0,
    1, 0, 0, 0, 0,
    1, 1, 1, 1, 0,
    1, 0, 0, 0, 0,
    1, 0, 0, 0, 0,
    1, 0, 0, 0, 0,
  ],
  H: [
    1, 0, 0, 0, 1,
    1, 0, 0, 0, 1,
    1, 0, 0, 0, 1,
    1, 1, 1, 1, 1,
    1, 0, 0, 0, 1,
    1, 0, 0, 0, 1,
    1, 0, 0, 0, 1,
  ],
  N: [
    1, 0, 0, 0, 1,
    1, 1, 0, 0, 1,
    1, 0, 1, 0, 1,
    1, 0, 0, 1, 1,
    1, 0, 0, 0, 1,
    1, 0, 0, 0, 1,
    1, 0, 0, 0, 1,
  ],
  O: [
    0, 1, 1, 1, 0,
    1, 0, 0, 0, 1,
    1, 0, 0, 0, 1,
    1, 0, 0, 0, 1,
    1, 0, 0, 0, 1,
    1, 0, 0, 0, 1,
    0, 1, 1, 1, 0,
  ],
  S: [
    0, 1, 1, 1, 1,
    1, 0, 0, 0, 0,
    1, 0, 0, 0, 0,
    0, 1, 1, 1, 0,
    0, 0, 0, 0, 1,
    0, 0, 0, 0, 1,
    1, 1, 1, 1, 0,
  ],
  Y: [
    1, 0, 0, 0, 1,
    0, 1, 0, 1, 0,
    0, 0, 1, 0, 0,
    0, 0, 1, 0, 0,
    0, 0, 1, 0, 0,
    0, 0, 1, 0, 0,
    0, 0, 1, 0, 0,
  ],
  Z: [
    1, 1, 1, 1, 1,
    0, 0, 0, 1, 0,
    0, 0, 1, 0, 0,
    0, 1, 0, 0, 0,
    1, 0, 0, 0, 0,
    1, 0, 0, 0, 0,
    1, 1, 1, 1, 1,
  ],
}

function getDotMatrix(char: string): number[] {
  const upper = char.toUpperCase()
  if (MATRIX_LETTERS[upper]) {
    return MATRIX_LETTERS[upper]
  }
  // Generic fallback pattern for other characters
  return [
    0, 1, 1, 1, 0,
    1, 0, 0, 0, 1,
    1, 0, 0, 0, 1,
    1, 0, 0, 0, 1,
    1, 0, 0, 0, 1,
    1, 0, 0, 0, 1,
    0, 1, 1, 1, 0,
  ]
}
</script>
