<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Activity, ShieldCheck, Terminal, Play, Pause, Radio } from 'lucide-vue-next'

interface Props {
  streamSource?: string
  bufferLimit?: number
}

const props = withDefaults(defineProps<Props>(), {
  streamSource: 'wss://agent.aura-cloud.internal/v2/stream',
  bufferLimit: 128,
})

const isStreaming = ref(true)
const packetsCount = ref(1048)
const throughputKb = ref(48.6)
const activeChannel = ref<'telemetry' | 'tensor' | 'audit'>('tensor')

interface PacketLog {
  id: number
  hex: string
  ascii: string
  ts: string
  type: string
}

const packets = ref<PacketLog[]>([])
let packetId = 0

const hexChars = '0123456789ABCDEF'
const generatePacket = (): PacketLog => {
  packetId++
  let hex = ''
  let ascii = ''
  for (let i = 0; i < 8; i++) {
    const byte = hexChars[Math.floor(Math.random() * 16)] + hexChars[Math.floor(Math.random() * 16)]
    hex += byte + ' '
    const charCode = parseInt(byte, 16)
    ascii += (charCode >= 32 && charCode <= 126) ? String.fromCharCode(charCode) : '.'
  }

  const types = ['INFERENCE_CHUNK', 'EMBEDDING_PULSE', 'ATTENTION_WEIGHT', 'TOKEN_SYNC']
  const now = new Date()
  const ts = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}.${now.getMilliseconds().toString().padStart(3, '0')}`

  return {
    id: packetId,
    hex: hex.trim(),
    ascii,
    ts,
    type: types[Math.floor(Math.random() * types.length)],
  }
}

let timer: ReturnType<typeof setInterval> | null = null

const toggleStream = () => {
  isStreaming.value = !isStreaming.value
}

onMounted(() => {
  // Prepopulate
  for (let i = 0; i < 6; i++) {
    packets.value.push(generatePacket())
  }

  timer = setInterval(() => {
    if (isStreaming.value) {
      packetsCount.value++
      throughputKb.value = Number((42 + Math.random() * 18).toFixed(1))
      packets.value.unshift(generatePacket())
      if (packets.value.length > 8) {
        packets.value.pop()
      }
    }
  }, 400)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div class="relative w-full max-w-2xl mx-auto rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-300 border border-slate-200 dark:border-sky-900/40 bg-white dark:bg-slate-950 shadow-2xl font-mono text-slate-800 dark:text-slate-100 select-none">
    <!-- Top HUD Header -->
    <div class="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
      <div class="flex items-center gap-2.5">
        <div class="p-2 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200/50 dark:border-sky-800/40">
          <Terminal class="w-4 h-4" />
        </div>
        <div>
          <h3 class="text-xs font-bold tracking-wider uppercase text-slate-800 dark:text-sky-300">
            DATA STREAM PROBE // HEX SNIFFER
          </h3>
          <span class="text-[10px] text-slate-500 dark:text-slate-400 truncate max-w-[200px] sm:max-w-xs block">
            {{ props.streamSource }}
          </span>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <button
          @click="toggleStream"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all"
          :class="isStreaming
            ? 'border-sky-500/50 bg-sky-500/10 text-sky-600 dark:text-sky-400'
            : 'border-slate-300 dark:border-slate-700 text-slate-500'"
        >
          <Pause v-if="isStreaming" class="w-3.5 h-3.5" />
          <Play v-else class="w-3.5 h-3.5" />
          <span>{{ isStreaming ? 'Capturing' : 'Paused' }}</span>
        </button>
      </div>
    </div>

    <!-- Live Telemetry Banner -->
    <div class="grid grid-cols-3 gap-2 my-4 text-xs">
      <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
        <span class="text-slate-400 text-[10px] block">TOTAL PACKETS</span>
        <span class="font-bold text-sky-600 dark:text-sky-400 flex items-center gap-1 mt-0.5">
          <Activity class="w-3 h-3" /> {{ packetsCount }}
        </span>
      </div>
      <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
        <span class="text-slate-400 text-[10px] block">THROUGHPUT</span>
        <span class="font-bold text-emerald-500 flex items-center gap-1 mt-0.5">
          <Radio class="w-3 h-3 animate-pulse" /> {{ throughputKb }} KB/s
        </span>
      </div>
      <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
        <span class="text-slate-400 text-[10px] block">PARITY CHECK</span>
        <span class="font-bold text-indigo-500 flex items-center gap-1 mt-0.5">
          <ShieldCheck class="w-3 h-3" /> CRC32 OK
        </span>
      </div>
    </div>

    <!-- Hex Sniffer Packet Waterfall Feed -->
    <div class="my-4 rounded-2xl bg-slate-50 dark:bg-black/60 border border-slate-200 dark:border-slate-800 p-3 space-y-1.5 text-xs overflow-hidden">
      <div class="flex items-center justify-between text-[10px] font-bold text-slate-400 pb-1 border-b border-slate-200 dark:border-slate-800">
        <span class="w-20">TIMESTAMP</span>
        <span class="w-32">PACKET TYPE</span>
        <span class="flex-1 text-center">HEX BYTES</span>
        <span class="w-20 text-right">ASCII DUMP</span>
      </div>

      <div
        v-for="pkt in packets"
        :key="pkt.id"
        class="flex items-center justify-between text-[11px] p-1.5 rounded transition-all hover:bg-slate-100 dark:hover:bg-slate-900/80"
      >
        <span class="w-20 text-slate-500 text-[10px]">{{ pkt.ts }}</span>
        <span class="w-32 text-sky-600 dark:text-sky-400 font-semibold text-[10px] truncate">{{ pkt.type }}</span>
        <span class="flex-1 text-center font-mono text-slate-700 dark:text-slate-300 tracking-wider">{{ pkt.hex }}</span>
        <span class="w-20 text-right font-mono text-slate-400 text-[10px]">{{ pkt.ascii }}</span>
      </div>
    </div>

    <!-- Channel Selector Footer -->
    <div class="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800 text-xs">
      <div class="flex items-center gap-1.5">
        <span class="text-slate-400 text-[11px]">CHANNEL:</span>
        <div class="inline-flex rounded-xl bg-slate-100 dark:bg-slate-900 p-0.5 border border-slate-200 dark:border-slate-800">
          <button
            v-for="ch in (['telemetry', 'tensor', 'audit'] as const)"
            :key="ch"
            @click="activeChannel = ch"
            class="px-2 py-0.5 rounded-lg text-[10px] uppercase font-bold transition-all"
            :class="activeChannel === ch ? 'bg-sky-500 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'"
          >
            {{ ch }}
          </button>
        </div>
      </div>

      <div class="flex items-center gap-2 text-slate-400 text-[11px]">
        <span class="w-1.5 h-1.5 rounded-full" :class="isStreaming ? 'bg-emerald-500 animate-ping' : 'bg-slate-400'"></span>
        <span>{{ isStreaming ? 'STREAM SYNCED' : 'STREAM HALTED' }}</span>
      </div>
    </div>
  </div>
</template>
