<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { cn } from '@/lib/utils'
import { RotateCw, Copy, Check, Terminal as TerminalIcon } from 'lucide-vue-next'

export interface TerminalLine {
  id?: string | number
  /** 'input' 为终端命令输入（逐字打字）；'output' / 'success' / 'error' / 'warning' / 'info' 为输出日志 */
  type: 'input' | 'output' | 'success' | 'error' | 'warning' | 'info'
  text: string
  /** 延迟多久后开始（毫秒），默认自动计算 */
  delay?: number
  /** 自定义输入前缀，默认 '$ ' */
  prefix?: string
  /** 输出行是否像 LLM 生成 Token 一样逐字流式输出，默认 false（整行出现） */
  stream?: boolean
}

interface TypewriterTerminalProps {
  title?: string
  lines?: TerminalLine[]
  /** 打字每字符基准毫秒，默认 35 */
  typingSpeed?: number
  /** 全部完成后的停留时间，默认 3500 */
  pauseEnd?: number
  /** 是否自动循环播放，默认 true */
  loop?: boolean
  /** 是否显示右上角控制项，默认 true */
  controls?: boolean
  class?: string
}

const props = withDefaults(defineProps<TypewriterTerminalProps>(), {
  title: 'AI Assistant · 流式输出',
  typingSpeed: 35,
  pauseEnd: 3500,
  loop: true,
  controls: true,
  lines: () => [
    { type: 'input', prefix: '> ', text: '帮我写一个 TypeScript 防抖函数' },
    { type: 'info', text: '⠋ 思考中...', delay: 600 },
    { type: 'output', stream: true, text: '好的，下面是一个带类型推断的 debounce 实现：' },
    { type: 'output', stream: true, text: 'function debounce<T extends (...args: any[]) => void>(fn: T, wait = 300) {' },
    { type: 'output', stream: true, text: '  let timer: ReturnType<typeof setTimeout> | undefined' },
    { type: 'output', stream: true, text: '  return (...args: Parameters<T>) => {' },
    { type: 'output', stream: true, text: '    clearTimeout(timer)' },
    { type: 'output', stream: true, text: '    timer = setTimeout(() => fn(...args), wait)' },
    { type: 'output', stream: true, text: '  }' },
    { type: 'output', stream: true, text: '}' },
    { type: 'success', text: '✓ 生成完成 · 128 tokens · 1.6s' },
  ],
})

interface RenderedLine {
  type: TerminalLine['type']
  text: string
  prefix?: string
}

const renderedLines = ref<RenderedLine[]>([])
const currentLineIdx = ref(0)
const currentCharIdx = ref(0)
const isTyping = ref(false)
const isFinished = ref(false)
const copied = ref(false)
const terminalBodyRef = ref<HTMLDivElement | null>(null)

let timer: any = null

function scrollToBottom() {
  if (terminalBodyRef.value) {
    terminalBodyRef.value.scrollTop = terminalBodyRef.value.scrollHeight
  }
}

function resetAndStart() {
  if (timer) clearTimeout(timer)
  renderedLines.value = []
  currentLineIdx.value = 0
  currentCharIdx.value = 0
  isTyping.value = false
  isFinished.value = false
  runNextStep()
}

function runNextStep() {
  if (!props.lines || props.lines.length === 0) return

  if (currentLineIdx.value >= props.lines.length) {
    isTyping.value = false
    isFinished.value = true
    if (props.loop) {
      timer = setTimeout(() => {
        resetAndStart()
      }, props.pauseEnd)
    }
    return
  }

  const line = props.lines[currentLineIdx.value]
  const isInput = line.type === 'input'

  if (isInput || line.stream) {
    // 逐字打字逻辑：命令输入模拟人类打字，流式输出模拟 LLM 逐 Token 生成
    isTyping.value = true
    if (currentCharIdx.value === 0) {
      // 开启新行
      renderedLines.value.push({
        type: line.type,
        text: '',
        prefix: isInput ? line.prefix || '$ ' : line.prefix,
      })
    }

    if (currentCharIdx.value < line.text.length) {
      const activeLine = renderedLines.value[renderedLines.value.length - 1]
      // 流式输出每次吐出 1~3 个字符（类似一个 Token），节奏比人类打字更快
      const step = isInput ? 1 : 1 + Math.floor(Math.random() * 3)
      activeLine.text += line.text.slice(currentCharIdx.value, currentCharIdx.value + step)
      currentCharIdx.value += step
      scrollToBottom()

      // 人类自然打字微弱抖动 (20ms ~ 50ms)；流式输出约为打字速度的一半
      const jitter = Math.floor(Math.random() * 25) - 10
      const base = isInput ? props.typingSpeed : props.typingSpeed / 2
      const delay = Math.max(15, base + jitter)
      timer = setTimeout(runNextStep, delay)
    } else {
      // 当前行输出完毕，暂停一下再进入下一行
      currentCharIdx.value = 0
      currentLineIdx.value++
      isTyping.value = false
      scrollToBottom()
      timer = setTimeout(runNextStep, isInput ? 400 : line.delay ?? 80)
    }
  } else {
    // 日志直接整行输出
    isTyping.value = false
    renderedLines.value.push({
      type: line.type,
      text: line.text,
      prefix: line.prefix,
    })
    currentLineIdx.value++
    scrollToBottom()

    const delay = line.delay ?? 220
    timer = setTimeout(runNextStep, delay)
  }
}

// 结束后底部空闲提示符沿用最后一条输入行的前缀
const lastInputPrefix = computed(() => {
  const lastInput = [...props.lines].reverse().find((l) => l.type === 'input')
  return lastInput?.prefix || '$ '
})

function copyAllText() {
  const fullText = props.lines.map((l) => `${l.prefix || (l.type === 'input' ? '$ ' : '')}${l.text}`).join('\n')
  navigator.clipboard.writeText(fullText)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}

onMounted(() => {
  resetAndStart()
})

onUnmounted(() => {
  if (timer) clearTimeout(timer)
})

watch(() => props.lines, () => {
  resetAndStart()
}, { deep: true })
</script>

<template>
  <div
    :class="
      cn(
        'relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-950 font-mono text-xs sm:text-sm text-zinc-300 shadow-2xl backdrop-blur-md dark:border-zinc-800/80',
        props.class
      )
    "
  >
    <!-- 终端顶部标题栏 (macOS 极客质感) -->
    <div class="flex h-10 w-full items-center justify-between border-b border-zinc-800/80 bg-zinc-900/90 px-4 select-none">
      <!-- 三色交通灯 -->
      <div class="flex items-center gap-2">
        <span class="h-3 w-3 rounded-full bg-[#ff5f56] shadow-sm transition-transform hover:scale-110" />
        <span class="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-sm transition-transform hover:scale-110" />
        <span class="h-3 w-3 rounded-full bg-[#27c93f] shadow-sm transition-transform hover:scale-110" />
      </div>

      <!-- 标题居中 -->
      <div class="flex items-center gap-1.5 text-[11px] font-medium text-zinc-400">
        <TerminalIcon class="h-3.5 w-3.5 text-zinc-500" />
        <span class="truncate max-w-[220px] sm:max-w-md">{{ props.title }}</span>
      </div>

      <!-- 右侧控制区 -->
      <div v-if="props.controls" class="flex items-center gap-2">
        <button
          @click="resetAndStart"
          title="重新播放"
          class="flex h-6 w-6 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"
        >
          <RotateCw class="h-3.5 w-3.5" />
        </button>
        <button
          @click="copyAllText"
          title="复制全部内容"
          class="flex h-6 w-6 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"
        >
          <Check v-if="copied" class="h-3.5 w-3.5 text-emerald-400" />
          <Copy v-else class="h-3.5 w-3.5" />
        </button>
      </div>
      <div v-else class="w-12" />
    </div>

    <!-- 终端输出区域 -->
    <div
      ref="terminalBodyRef"
      class="max-h-80 min-h-[220px] overflow-y-auto p-4 sm:p-5 space-y-1.5 scrollbar-thin scrollbar-thumb-zinc-800"
    >
      <div
        v-for="(line, idx) in renderedLines"
        :key="idx"
        class="flex items-start gap-2 leading-relaxed"
      >
        <!-- 命令行输入模式 -->
        <template v-if="line.type === 'input'">
          <span class="text-blue-400 select-none font-bold">{{ line.prefix || '$ ' }}</span>
          <span class="text-zinc-100 font-semibold flex-1 break-all">
            {{ line.text }}
            <!-- 当前正在输入的行显示光标 -->
            <span
              v-if="isTyping && idx === renderedLines.length - 1"
              class="inline-block h-4 w-2 translate-y-0.5 bg-blue-500 animate-pulse ml-0.5"
            />
          </span>
        </template>

        <!-- 输出日志（success / error / warning / info / 默认），保留缩进以便展示代码 -->
        <span
          v-else
          :class="[
            'flex-1 break-all whitespace-pre-wrap',
            line.type === 'success' && 'text-emerald-400 font-medium',
            line.type === 'error' && 'text-rose-400 font-medium',
            line.type === 'warning' && 'text-amber-400 font-medium',
            line.type === 'info' && 'text-sky-400 font-medium',
            line.type === 'output' && 'text-zinc-400',
          ]"
        >{{ line.text }}<span
            v-if="isTyping && idx === renderedLines.length - 1"
            class="inline-block h-4 w-2 translate-y-0.5 bg-zinc-400 animate-pulse ml-0.5"
          /></span>
      </div>

      <!-- 如果已经全部完成且非打字状态，底部留一个静止微闪光标 -->
      <div v-if="isFinished" class="flex items-center gap-2 pt-1">
        <span class="text-blue-400 font-bold select-none">{{ lastInputPrefix }}</span>
        <span class="inline-block h-4 w-2 bg-zinc-500 animate-pulse" />
      </div>
    </div>
  </div>
</template>
