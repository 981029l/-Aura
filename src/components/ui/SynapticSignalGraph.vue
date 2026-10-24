<script setup lang="ts">
import { ref } from 'vue'
import { Activity, Zap, Play, Pause } from 'lucide-vue-next'

interface NeuronNode {
  id: number
  x: number
  y: number
  label: string
  charge: number // 0 to 100
}

interface SynapseEdge {
  from: number
  to: number
}

const nodes = ref<NeuronNode[]>([
  { id: 1, x: 60, y: 120, label: 'DENDRITE-A', charge: 85 },
  { id: 2, x: 160, y: 60, label: 'SOMA-CORE', charge: 92 },
  { id: 3, x: 160, y: 180, label: 'INTER-NEURON', charge: 40 },
  { id: 4, x: 280, y: 120, label: 'AXON-HILLOCK', charge: 95 },
  { id: 5, x: 380, y: 70, label: 'TERMINAL-1', charge: 70 },
  { id: 6, x: 380, y: 170, label: 'TERMINAL-2', charge: 60 },
])

const edges: SynapseEdge[] = [
  { from: 1, to: 2 },
  { from: 1, to: 3 },
  { from: 2, to: 4 },
  { from: 3, to: 4 },
  { from: 4, to: 5 },
  { from: 4, to: 6 },
]

const isFiring = ref(true)
const neurotransmitterRate = ref(120) // Hz
const selectedNodeId = ref<number | null>(null)

const selectNode = (id: number) => {
  selectedNodeId.value = selectedNodeId.value === id ? null : id
  const target = nodes.value.find(n => n.id === id)
  if (target) {
    target.charge = Math.min(100, target.charge + 20)
  }
}

const stimulate = () => {
  nodes.value.forEach(n => {
    n.charge = Math.min(100, Math.round(n.charge + (Math.random() * 30 - 10)))
  })
}
</script>

<template>
  <div class="relative w-full max-w-2xl mx-auto rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-300 border border-slate-200 dark:border-sky-900/40 bg-white dark:bg-slate-950 shadow-2xl font-mono text-slate-800 dark:text-slate-100 select-none">
    <!-- Header -->
    <div class="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 text-xs">
      <div class="flex items-center gap-2">
        <Activity class="w-4 h-4 text-sky-500 animate-pulse" />
        <span class="font-bold tracking-wider uppercase text-slate-800 dark:text-sky-300">
          BIOLOGICAL SYNAPSE PULSE TOPOLOGY
        </span>
      </div>

      <div class="flex items-center gap-2">
        <button
          @click="isFiring = !isFiring"
          class="flex items-center gap-1.5 px-3 py-1 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 text-[11px] font-semibold"
        >
          <Pause v-if="isFiring" class="w-3 h-3 text-amber-500" />
          <Play v-else class="w-3 h-3 text-sky-500" />
          <span>{{ isFiring ? 'Spike Firing' : 'Resting State' }}</span>
        </button>

        <button
          @click="stimulate"
          class="flex items-center gap-1 px-3 py-1 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-[11px] font-semibold shadow-md shadow-sky-600/20 active:scale-95 transition-all"
        >
          <Zap class="w-3 h-3" />
          <span>Stimulate</span>
        </button>
      </div>
    </div>

    <!-- Synapse Network SVG Canvas Arena -->
    <div class="relative my-6 h-64 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 overflow-hidden flex items-center justify-center">
      <svg class="w-full h-full" viewBox="0 0 460 240">
        <defs>
          <linearGradient id="synapseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#0284c7" stop-opacity="0.8" />
            <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.2" />
          </linearGradient>
        </defs>

        <!-- Axon Connection Fibers -->
        <g stroke="#38bdf8" stroke-width="2" stroke-opacity="0.3" fill="none">
          <line
            v-for="(e, idx) in edges"
            :key="idx"
            :x1="nodes.find(n => n.id === e.from)?.x"
            :y1="nodes.find(n => n.id === e.from)?.y"
            :x2="nodes.find(n => n.id === e.to)?.x"
            :y2="nodes.find(n => n.id === e.to)?.y"
          />
        </g>

        <!-- Animated Action Potential Pulses -->
        <g v-if="isFiring" stroke="#38bdf8" stroke-width="2.5" fill="none" stroke-dasharray="6, 12" stroke-linecap="round">
          <line
            v-for="(e, idx) in edges"
            :key="'p-'+idx"
            :x1="nodes.find(n => n.id === e.from)?.x"
            :y1="nodes.find(n => n.id === e.from)?.y"
            :x2="nodes.find(n => n.id === e.to)?.x"
            :y2="nodes.find(n => n.id === e.to)?.y"
            class="animate-pulse-flow"
          />
        </g>

        <!-- Soma & Synaptic Knob Nodes -->
        <g
          v-for="node in nodes"
          :key="node.id"
          class="group cursor-pointer select-none"
          @click="selectNode(node.id)"
        >
          <!-- Invisible Fixed Hit Target: Eliminates edge-hover flickering completely -->
          <circle
            :cx="node.x"
            :cy="node.y"
            r="26"
            class="fill-transparent cursor-pointer"
          />

          <!-- Ambient Glow Ring (pointer-events: none & centered transform-box) -->
          <circle
            :cx="node.x"
            :cy="node.y"
            r="16"
            class="pointer-events-none fill-sky-500/10 dark:fill-sky-400/20 stroke-sky-400/40 transition-all duration-300 group-hover:scale-125 group-hover:stroke-sky-400 group-hover:fill-sky-400/30"
            :class="{ 'stroke-sky-400 fill-sky-400/40 scale-125': selectedNodeId === node.id }"
            :style="{
              transformBox: 'fill-box',
              transformOrigin: 'center',
            }"
          />

          <!-- Concentric Micro Ring on Hover/Active -->
          <circle
            :cx="node.x"
            :cy="node.y"
            r="11"
            class="pointer-events-none fill-none stroke-sky-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            :class="{ 'opacity-100 stroke-sky-300': selectedNodeId === node.id }"
          />

          <!-- Core Center Pin -->
          <circle
            :cx="node.x"
            :cy="node.y"
            r="7"
            class="pointer-events-none fill-sky-600 dark:fill-sky-400 transition-all duration-300 group-hover:fill-sky-300 group-hover:scale-110"
            :class="{ 'fill-sky-300 scale-110': selectedNodeId === node.id }"
            :style="{
              transformBox: 'fill-box',
              transformOrigin: 'center',
            }"
          />

          <!-- Node Label -->
          <text
            :x="node.x"
            :y="node.y + 26"
            text-anchor="middle"
            class="pointer-events-none text-[9px] font-mono fill-slate-500 dark:fill-slate-400 transition-colors duration-200 group-hover:fill-sky-500 dark:group-hover:fill-sky-300 font-semibold"
            :class="{ 'fill-sky-500 dark:fill-sky-300': selectedNodeId === node.id }"
          >
            {{ node.label }}
          </text>
        </g>
      </svg>
    </div>

    <!-- Telemetry Footer -->
    <div class="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800">
      <span>SPIKE FREQ: {{ neurotransmitterRate }} Hz</span>
      <span class="text-sky-500 font-semibold">ALL 6 AXONS CONNECTED</span>
    </div>
  </div>
</template>

<style scoped>
@keyframes pulseFlow {
  to {
    stroke-dashoffset: -36;
  }
}
.animate-pulse-flow {
  animation: pulseFlow 1.2s linear infinite;
}
</style>
