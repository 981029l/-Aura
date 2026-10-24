<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'
import { Sparkles, Play, Square, Sliders, Cpu, Copy, Check } from 'lucide-vue-next'

export interface PromptPlaygroundProps {
  title?: string
  subtitle?: string
  defaultSystemPrompt?: string
  defaultUserPrompt?: string
  class?: string
}

const props = withDefaults(defineProps<PromptPlaygroundProps>(), {
  title: '',
  subtitle: '',
  defaultSystemPrompt: '你是一名前端工程师，回答要简洁，并给出可以直接使用的代码。',
  defaultUserPrompt: '用 Vue 3 和 Tailwind CSS 实现一个鼠标悬停时发光的卡片。',
})

const systemPrompt = ref(props.defaultSystemPrompt)
const userPrompt = ref(props.defaultUserPrompt)
const temperature = ref(0.7)
const topP = ref(0.9)
const maxTokens = ref(2048)

const isGenerating = ref(false)
const generatedText = ref('')
const copied = ref(false)
let generateInterval: number | null = null

const simulatedAnswer = '实现思路如下：\n1. 监听 mousemove，把鼠标在卡片内的坐标写入 CSS 变量；\n2. 用 radial-gradient 以该坐标为中心绘制一层高光；\n3. 鼠标移出时把高光透明度过渡到 0。'

function runInference() {
  if (isGenerating.value) return
  isGenerating.value = true
  generatedText.value = ''

  let charIndex = 0
  generateInterval = window.setInterval(() => {
    if (charIndex < simulatedAnswer.length) {
      generatedText.value += simulatedAnswer[charIndex]
      charIndex++
    } else {
      stopInference()
    }
  }, 35)
}

function stopInference() {
  if (generateInterval !== null) {
    clearInterval(generateInterval)
    generateInterval = null
  }
  isGenerating.value = false
}

function copyOutput() {
  if (!generatedText.value) return
  navigator.clipboard.writeText(generatedText.value)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 1500)
}

const totalTokens = computed(() => {
  return Math.round((systemPrompt.value.length + userPrompt.value.length + generatedText.value.length) * 1.35)
})
</script>

<template>
  <div :class="cn('w-full max-w-2xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6', props.class)">
    <!-- 头部指标栏 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800/80">
      <div class="flex items-center gap-2">
        <Sparkles class="h-4 w-4 text-purple-500" />
        <span class="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
          {{ props.title || '提示词调试' }}
        </span>
        <span v-if="props.subtitle" class="text-xs text-zinc-400 font-mono">
          · {{ props.subtitle }}
        </span>
      </div>

      <div class="flex items-center gap-2">
        <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
          <Cpu class="h-3 w-3 text-purple-500" />
          <span>{{ totalTokens }} Tokens</span>
        </span>
      </div>
    </div>

    <!-- 参数调节栏 -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/70 dark:border-zinc-800/70 text-xs font-mono">
      <div class="space-y-1.5">
        <div class="flex justify-between text-zinc-500">
          <span class="flex items-center gap-1"><Sliders class="h-3 w-3" /> Temperature</span>
          <span class="font-bold text-zinc-800 dark:text-zinc-200">{{ temperature }}</span>
        </div>
        <input
          v-model.number="temperature"
          type="range"
          min="0.1"
          max="1.5"
          step="0.05"
          class="w-full h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
        />
      </div>

      <div class="space-y-1.5">
        <div class="flex justify-between text-zinc-500">
          <span>Top P (核采样)</span>
          <span class="font-bold text-zinc-800 dark:text-zinc-200">{{ topP }}</span>
        </div>
        <input
          v-model.number="topP"
          type="range"
          min="0.1"
          max="1.0"
          step="0.05"
          class="w-full h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
        />
      </div>

      <div class="space-y-1.5">
        <div class="flex justify-between text-zinc-500">
          <span>Max Tokens</span>
          <span class="font-bold text-zinc-800 dark:text-zinc-200">{{ maxTokens }}</span>
        </div>
        <input
          v-model.number="maxTokens"
          type="range"
          min="256"
          max="4096"
          step="128"
          class="w-full h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
        />
      </div>
    </div>

    <!-- 提示词输入区 -->
    <div class="space-y-3.5">
      <div class="space-y-1.5">
        <div class="flex items-center justify-between text-xs font-mono text-zinc-500">
          <span>SYSTEM PROMPT (系统设定)</span>
          <span class="text-[10px] text-purple-600 dark:text-purple-400">系统设定</span>
        </div>
        <textarea
          v-model="systemPrompt"
          rows="2"
          class="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-800 placeholder-zinc-400 focus:border-purple-500 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 font-mono resize-none shadow-sm"
        />
      </div>

      <div class="space-y-1.5">
        <div class="flex items-center justify-between text-xs font-mono text-zinc-500">
          <span>USER QUERY (用户输入)</span>
          <span class="text-[10px] text-zinc-400">用户输入</span>
        </div>
        <textarea
          v-model="userPrompt"
          rows="2"
          class="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-800 placeholder-zinc-400 focus:border-purple-500 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 font-mono resize-none shadow-sm"
        />
      </div>
    </div>

    <!-- 流式推理结果区 -->
    <div class="relative rounded-xl border border-zinc-200/80 bg-zinc-50/70 p-4 dark:border-zinc-800/80 dark:bg-zinc-900/40 min-h-[110px] space-y-2">
      <div class="flex items-center justify-between border-b border-zinc-200/50 dark:border-zinc-800/60 pb-2 text-xs font-mono text-zinc-500">
        <span class="flex items-center gap-1.5">
          <span :class="['w-2 h-2 rounded-full', isGenerating ? 'bg-emerald-500 animate-ping' : 'bg-zinc-400']" />
          <span>{{ isGenerating ? '生成中...' : '就绪' }}</span>
        </span>

        <button
          v-if="generatedText"
          type="button"
          @click="copyOutput"
          class="inline-flex items-center gap-1 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer"
        >
          <Check v-if="copied" class="h-3.5 w-3.5 text-emerald-500" />
          <Copy v-else class="h-3.5 w-3.5" />
          <span>{{ copied ? '已复制' : '复制代码' }}</span>
        </button>
      </div>

      <div class="text-xs font-mono text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap leading-relaxed">
        <span v-if="generatedText">{{ generatedText }}</span>
        <span v-else class="text-zinc-400 italic">点击下方“运行”开始生成...</span>
        <span v-if="isGenerating" class="inline-block w-1.5 h-3.5 bg-purple-500 ml-1 animate-pulse" />
      </div>
    </div>

    <!-- 操作按钮组 -->
    <div class="flex items-center justify-between pt-1">
      <div class="flex items-center gap-2">
        <button
          v-if="!isGenerating"
          type="button"
          @click="runInference"
          class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold shadow-sm transition-all active:scale-95 cursor-pointer"
        >
          <Play class="h-3.5 w-3.5 fill-current" />
          <span>运行</span>
        </button>

        <button
          v-else
          type="button"
          @click="stopInference"
          class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold shadow-sm transition-all active:scale-95 cursor-pointer"
        >
          <Square class="h-3.5 w-3.5 fill-current" />
          <span>停止</span>
        </button>
      </div>

      <div class="text-[11px] font-mono text-zinc-400">
        Temperature = {{ temperature }} · Top-P = {{ topP }}
      </div>
    </div>
  </div>
</template>
