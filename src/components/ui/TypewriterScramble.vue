<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import { Terminal, RotateCw, Sparkles } from 'lucide-vue-next'

export interface TypewriterScrambleProps {
  phrases?: string[]
  scrambleChars?: string
  typingSpeed?: number
  class?: string
}

const props = withDefaults(defineProps<TypewriterScrambleProps>(), {
  phrases: () => [
    'AURA UI · Vue 3 动效组件库',
    'COPY & PASTE · 复制源码即可使用',
    'AI COMPONENTS · 智能体与对话组件',
    'DARK MODE · 支持浅色和深色模式',
  ],
  scrambleChars: '!@#$%^&*()_+-=[]{}|;:,.<>?/~0123456789ABCDEF',
  typingSpeed: 60,
})

const currentPhraseIndex = ref(0)
const displayText = ref('')
const isScrambling = ref(false)

let timer: any = null

function runAnimation() {
  const target = props.phrases[currentPhraseIndex.value]
  let charIndex = 0
  displayText.value = ''
  isScrambling.value = true

  function step() {
    if (charIndex <= target.length) {
      // 当前已完成的前缀 + 1 个随机乱码字符
      const settled = target.substring(0, charIndex)
      if (charIndex < target.length) {
        const randChar =
          props.scrambleChars[
            Math.floor(Math.random() * props.scrambleChars.length)
          ]
        displayText.value = settled + randChar
      } else {
        displayText.value = settled
      }
      charIndex++
      timer = setTimeout(step, props.typingSpeed)
    } else {
      isScrambling.value = false
      // 停顿后进入下一句
      timer = setTimeout(() => {
        currentPhraseIndex.value =
          (currentPhraseIndex.value + 1) % props.phrases.length
        runAnimation()
      }, 2400)
    }
  }

  step()
}

function restart() {
  if (timer) clearTimeout(timer)
  currentPhraseIndex.value = 0
  runAnimation()
}

onMounted(() => {
  runAnimation()
})

onUnmounted(() => {
  if (timer) clearTimeout(timer)
})
</script>

<template>
  <div :class="cn('w-full max-w-xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6', props.class)">
    <!-- 头部看板 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
        <Terminal class="h-4 w-4 text-purple-500" />
        <span>乱码打字机</span>
      </div>

      <button
        type="button"
        @click="restart"
        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-xs font-mono font-semibold text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
      >
        <RotateCw class="h-3.5 w-3.5" />
        <span>重新播放</span>
      </button>
    </div>

    <!-- 打字机主终端屏 -->
    <div class="relative min-h-[120px] rounded-2xl border border-zinc-200/80 bg-zinc-950 p-6 flex items-center justify-center text-center">
      <div class="font-mono text-base sm:text-lg font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-sky-300 to-emerald-400 leading-relaxed">
        <span>{{ displayText }}</span>
        <!-- 终端呼吸光标条 -->
        <span class="inline-block w-2.5 h-5 bg-purple-400 ml-1.5 align-middle animate-cursor-blink" />
      </div>

      <!-- 底部矩阵徽标 -->
      <div class="absolute bottom-2.5 right-4 flex items-center gap-1.5 text-[10px] font-mono text-zinc-500">
        <Sparkles class="h-3 w-3 text-purple-400" />
        <span>DECRYPTION ENGINE</span>
      </div>
    </div>

    <!-- 底部短语索引胶囊群 -->
    <div class="flex items-center justify-between text-xs font-mono text-zinc-400 pt-1">
      <span>句子 ({{ currentPhraseIndex + 1 }}/{{ props.phrases.length }})</span>
      <div class="flex items-center gap-1.5">
        <span
          v-for="(_, i) in props.phrases"
          :key="i"
          :class="[
            'h-1.5 rounded-full transition-all duration-300',
            currentPhraseIndex === i ? 'w-4 bg-purple-500' : 'w-1.5 bg-zinc-300 dark:bg-zinc-700',
          ]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes cursorBlink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.animate-cursor-blink {
  animation: cursorBlink 0.9s infinite;
}
</style>
