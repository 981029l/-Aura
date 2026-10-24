<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import { Binary, Play, RefreshCw, KeyRound, CheckCircle } from 'lucide-vue-next'

export interface DecryptedTextProps {
  title?: string
  subtitle?: string
  class?: string
}

const props = withDefaults(defineProps<DecryptedTextProps>(), {
  title: '',
  subtitle: '',
})

const phrases = [
  'QUANTUM_ENCRYPTED_PAYLOAD_AUTHORIZED',
  'NEURAL_INTERFACE_INITIALIZED_SUCCESS',
  'AURA_UI_ZERO_CONFIG_SFC_PURITY_VERIFIED',
  'DISTRIBUTED_GPU_CLUSTER_SYNCHRONIZED',
]

const currentPhraseIndex = ref(0)
const displayText = ref('')
const isDecrypting = ref(false)
const revealedCount = ref(0)

const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=~<>?/'

let timerId: number | null = null

function startDecryption() {
  if (isDecrypting.value) return
  isDecrypting.value = true
  revealedCount.value = 0

  const target = phrases[currentPhraseIndex.value]
  let iteration = 0

  if (timerId) clearInterval(timerId)

  timerId = window.setInterval(() => {
    let result = ''
    for (let i = 0; i < target.length; i++) {
      if (i < iteration) {
        result += target[i]
      } else {
        result += charset[Math.floor(Math.random() * charset.length)]
      }
    }

    displayText.value = result
    revealedCount.value = Math.min(target.length, iteration)

    if (iteration >= target.length) {
      if (timerId) clearInterval(timerId)
      isDecrypting.value = false
      displayText.value = target
    }

    iteration += 1
  }, 45)
}

function nextPhrase() {
  currentPhraseIndex.value = (currentPhraseIndex.value + 1) % phrases.length
  startDecryption()
}

onMounted(() => {
  startDecryption()
})

onUnmounted(() => {
  if (timerId) clearInterval(timerId)
})
</script>

<template>
  <div :class="cn('w-full max-w-xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6', props.class)">
    <!-- 头部指标栏 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-2.5">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
          <Binary class="h-5 w-5" />
        </div>
        <div>
          <span class="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
            {{ props.title || '字符解密' }}
          </span>
          <span v-if="props.subtitle" class="text-xs text-zinc-400 font-mono">
            · {{ props.subtitle }}
          </span>
        </div>
      </div>

      <div class="flex items-center gap-1.5">
        <span
          :class="[
            'px-2.5 py-1 rounded-full text-xs font-mono font-semibold transition-colors',
            isDecrypting
              ? 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400'
              : 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
          ]"
        >
          {{ isDecrypting ? '正在解密...' : '已完成' }}
        </span>
      </div>
    </div>

    <!-- 解密终端大视窗 (支持悬停触发解密) -->
    <div
      class="group relative rounded-2xl border border-zinc-800 bg-zinc-950 p-6 overflow-hidden cursor-pointer shadow-inner min-h-[140px] flex flex-col justify-between"
      @mouseenter="startDecryption"
    >
      <!-- 终端网格背景 -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      <!-- 顶部信息 -->
      <div class="relative z-10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
        <span class="flex items-center gap-1.5 text-cyan-400">
          <KeyRound class="h-3.5 w-3.5" />
          <span>CIPHER_LEVEL: AES-GCM-256</span>
        </span>
        <span>REVEALED: {{ revealedCount }} / {{ phrases[currentPhraseIndex].length }}</span>
      </div>

      <!-- 动态解密字符核心主体 -->
      <div class="relative z-10 my-4 text-center">
        <span class="font-mono text-lg sm:text-xl font-black tracking-widest text-cyan-400 drop-shadow-[0_0_12px_rgba(6,182,212,0.4)] break-all select-all">
          {{ displayText }}
        </span>
      </div>

      <!-- 底部提示 -->
      <div class="relative z-10 flex items-center justify-between text-[10px] font-mono text-zinc-500">
        <span>STATUS: DECRYPT_READY</span>
        <span class="text-zinc-400 group-hover:text-cyan-400 transition-colors">鼠标悬停这里重新播放</span>
      </div>
    </div>

    <!-- 底部控制面板 -->
    <div class="flex flex-wrap items-center justify-between gap-4">
      <div class="flex items-center gap-2">
        <button
          type="button"
          @click="startDecryption"
          class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shadow-sm transition-all active:scale-95 cursor-pointer"
        >
          <Play class="h-3.5 w-3.5 fill-current" />
          <span>重新播放</span>
        </button>

        <button
          type="button"
          @click="nextPhrase"
          class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
        >
          <RefreshCw class="h-3.5 w-3.5" />
          <span>换一句</span>
        </button>
      </div>

      <div class="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
        <CheckCircle class="h-3.5 w-3.5 text-emerald-500" />
        <span>每个字符 45ms</span>
      </div>
    </div>
  </div>
</template>
