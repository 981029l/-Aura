<template>
  <div
    :class="cn('relative inline-flex flex-col items-center gap-10 py-6 select-none', className)"
  >
    <!-- Hidden YouTube / Audio Element if external src is provided -->
    <iframe
      v-if="youtubeId"
      ref="iframeRef"
      class="hidden"
      :src="`https://www.youtube.com/embed/${youtubeId}?enablejsapi=1&autoplay=${autoPlay ? 1 : 0}&controls=0`"
      allow="autoplay"
    />
    <audio
      v-else-if="src"
      ref="audioRef"
      :src="src"
      class="hidden"
      @ended="isPlaying = false"
    />

    <!-- Spinning Picture-Disc Vinyl & Tonearm (Faithful Componentry Design) -->
    <div
      class="relative cursor-pointer select-none h-64 w-64 md:h-80 md:w-80 group"
      :title="isPlaying ? '暂停' : '播放'"
      @click="togglePlay"
    >
      <!-- Ambient Subtle Shadow Glow under Vinyl -->
      <div
        class="pointer-events-none absolute inset-4 rounded-full blur-2xl transition-opacity duration-700 bg-black/25 dark:bg-white/10"
        :class="isPlaying ? 'opacity-90 scale-105' : 'opacity-40 scale-100'"
      />

      <!-- Tonearm -->
      <div
        class="absolute z-20 top-[-5%] right-[-10%] sm:top-[-8%] sm:right-[-15%] origin-top-right w-[60%] h-[15%] pointer-events-none transition-transform duration-500 ease-in-out"
        :style="{
          transform: `rotate(${isPlaying ? -20 : 10}deg)`,
        }"
      >
        <!-- Tonearm base -->
        <div
          class="absolute top-0 right-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-zinc-400 dark:bg-zinc-600 shadow-md transform translate-x-1/2 -translate-y-1/2 border-4 border-zinc-200 dark:border-zinc-800 z-10"
        />
        <!-- Tonearm stick & Needle -->
        <div
          class="absolute top-0 right-[10px] sm:right-[15px] w-[90%] h-2 md:h-3 bg-zinc-400 dark:bg-zinc-500 rounded-full origin-right -rotate-12 shadow-sm flex items-center justify-start"
        >
          <!-- Needle -->
          <div
            class="w-4 h-4 md:w-5 md:h-5 bg-zinc-800 dark:bg-zinc-300 rounded-full shadow-md transform -translate-x-1/2"
          />
        </div>
      </div>

      <!-- Record Disc -->
      <div
        class="relative w-full h-full rounded-full border-4 sm:border-8 border-black/10 dark:border-white/10 shadow-2xl overflow-hidden shadow-black/40 bg-black vinyl-spin"
        :style="{
          animationDuration: '4s',
          animationPlayState: isPlaying ? 'running' : 'paused',
        }"
      >
        <!-- Album Cover Background (Full-bleed Picture Disc) -->
        <div
          class="absolute inset-0 bg-cover bg-center opacity-90 transition-all duration-500"
          :style="{ backgroundImage: `url(${activeCover})` }"
        />

        <!-- Grooves Overlay (Multiple dark gradient rings) -->
        <div
          class="absolute inset-0 rounded-full border border-black/20"
          style="
            background: radial-gradient(
              circle,
              transparent 20%,
              rgba(0, 0, 0, 0.4) 21%,
              transparent 22%,
              transparent 35%,
              rgba(0, 0, 0, 0.5) 36%,
              transparent 37%,
              transparent 50%,
              rgba(0, 0, 0, 0.3) 51%,
              transparent 52%,
              transparent 65%,
              rgba(0, 0, 0, 0.6) 66%,
              transparent 67%,
              transparent 80%,
              rgba(0, 0, 0, 0.4) 81%,
              transparent 82%
            );
          "
        />

        <!-- Glare effect -->
        <div
          class="absolute inset-0 rounded-full pointer-events-none"
          style="
            background: linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.4) 0%,
              transparent 40%,
              transparent 60%,
              rgba(255, 255, 255, 0.2) 100%
            );
          "
        />

        <!-- Center Hole and Label Area -->
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-full bg-zinc-900 border border-zinc-700 shadow-inner flex items-center justify-center"
        >
          <!-- The very center pin hole -->
          <div
            class="w-3 h-3 md:w-4 md:h-4 bg-zinc-300 dark:bg-zinc-600 rounded-full shadow-inner border border-black/40"
          />
        </div>
      </div>
    </div>

    <!-- Minimalist Floating Track Capsule -->
    <div
      class="w-72 sm:w-80 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/85 dark:bg-zinc-900/85 backdrop-blur-xl p-3 shadow-lg shadow-black/5 flex items-center justify-between gap-3"
    >
      <div class="flex items-center gap-3 min-w-0">
        <div class="relative w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 border border-black/10 dark:border-white/10">
          <img :src="activeCover" :alt="currentTrack.title" class="w-full h-full object-cover" />
        </div>
        <div class="min-w-0">
          <div class="flex items-center gap-1.5">
            <h4 class="text-xs font-semibold text-zinc-900 dark:text-zinc-100 truncate">
              {{ currentTrack.title }}
            </h4>
          </div>
          <p class="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">
            {{ currentTrack.artist }}
          </p>
        </div>
      </div>

      <!-- Clean Monochrome Controls -->
      <div class="flex items-center gap-1 flex-shrink-0">
        <button
          type="button"
          class="p-1.5 rounded-full text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors cursor-pointer"
          title="上一首"
          @click.stop="prevTrack"
        >
          <SkipBack class="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          class="w-8 h-8 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer"
          :title="isPlaying ? '暂停' : '播放'"
          @click.stop="togglePlay"
        >
          <component :is="isPlaying ? Pause : Play" class="w-3.5 h-3.5" :class="!isPlaying ? 'ml-0.5' : ''" />
        </button>

        <button
          type="button"
          class="p-1.5 rounded-full text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors cursor-pointer"
          title="下一首"
          @click.stop="nextTrack"
        >
          <SkipForward class="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import { Play, Pause, SkipBack, SkipForward } from 'lucide-vue-next'

interface Props {
  src?: string
  coverArt?: string
  autoPlay?: boolean
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  src: '',
  coverArt: '',
  autoPlay: false,
  className: '',
})

const tracks = [
  {
    title: 'After Hours Reverie',
    artist: 'Midnight Analog',
    cover: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=600&q=80&fit=crop',
  },
  {
    title: 'Velvet Horizon',
    artist: 'Studio Solaria',
    cover: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600&h=600&q=80&fit=crop',
  },
  {
    title: 'Prism Echoes',
    artist: 'Koto & Synthetica',
    cover: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600&h=600&q=80&fit=crop',
  },
]

const trackIndex = ref(0)
const isPlaying = ref(props.autoPlay)
const audioRef = ref<HTMLAudioElement | null>(null)
const iframeRef = ref<HTMLIFrameElement | null>(null)

const currentTrack = computed(() => tracks[trackIndex.value] || tracks[0]!)
const activeCover = computed(() => props.coverArt || currentTrack.value.cover)

function getYoutubeId(url: string) {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/
  )
  return match ? match[1] : null
}

const youtubeId = computed(() => (props.src ? getYoutubeId(props.src) : null))

// Subtle Web Audio synthesizer fallback when no external src is provided
let audioCtx: AudioContext | null = null
let masterGain: GainNode | null = null
let oscNodes: OscillatorNode[] = []

function startFallbackSynth() {
  if (props.src) return
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    if (!AudioContextClass) return
    if (!audioCtx) {
      audioCtx = new AudioContextClass()
      masterGain = audioCtx.createGain()
      masterGain.gain.value = 0.12
      masterGain.connect(audioCtx.destination)
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {})
    }
    stopFallbackSynth()

    const chords = [
      [220, 261.63, 329.63, 392.0],
      [196, 246.94, 293.66, 369.99],
      [174.61, 220.0, 261.63, 349.23],
    ]
    const freqs = chords[trackIndex.value % chords.length]!
    oscNodes = freqs.map((f, i) => {
      const osc = audioCtx!.createOscillator()
      const filter = audioCtx!.createBiquadFilter()
      const gain = audioCtx!.createGain()
      osc.type = i % 2 === 0 ? 'sine' : 'triangle'
      osc.frequency.value = f
      filter.type = 'lowpass'
      filter.frequency.value = 600
      gain.gain.value = 0.06
      osc.connect(filter)
      filter.connect(gain)
      gain.connect(masterGain!)
      osc.start()
      return osc
    })
  } catch {}
}

function stopFallbackSynth() {
  oscNodes.forEach((osc) => {
    try {
      osc.stop()
      osc.disconnect()
    } catch {}
  })
  oscNodes = []
}

watch(isPlaying, (playing) => {
  if (playing) {
    if (youtubeId.value && iframeRef.value?.contentWindow) {
      iframeRef.value.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
        '*'
      )
    } else if (props.src && audioRef.value) {
      audioRef.value.play().catch(() => {
        isPlaying.value = false
      })
    } else {
      startFallbackSynth()
    }
  } else {
    if (youtubeId.value && iframeRef.value?.contentWindow) {
      iframeRef.value.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }),
        '*'
      )
    } else if (props.src && audioRef.value) {
      audioRef.value.pause()
    } else {
      stopFallbackSynth()
    }
  }
})

function togglePlay() {
  isPlaying.value = !isPlaying.value
}

function prevTrack() {
  trackIndex.value = (trackIndex.value - 1 + tracks.length) % tracks.length
  if (isPlaying.value) startFallbackSynth()
}

function nextTrack() {
  trackIndex.value = (trackIndex.value + 1) % tracks.length
  if (isPlaying.value) startFallbackSynth()
}

onUnmounted(() => {
  stopFallbackSynth()
  if (audioCtx) {
    audioCtx.close().catch(() => {})
  }
})
</script>

<style scoped>
@keyframes vinylSpin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.vinyl-spin {
  animation-name: vinylSpin;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
</style>
