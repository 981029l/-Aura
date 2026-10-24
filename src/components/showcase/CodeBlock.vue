<script setup lang="ts">
import { ref, computed } from 'vue'
import { Check, Copy } from 'lucide-vue-next'
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-css'

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
}

const props = withDefaults(defineProps<CodeBlockProps>(), {
  language: 'html',
})

const copied = ref(false)

const highlightedCode = computed(() => {
  const grammar = Prism.languages[props.language] || Prism.languages.markup
  return Prism.highlight(props.code.trim(), grammar, props.language)
})

async function copyCode() {
  try {
    await navigator.clipboard.writeText(props.code.trim())
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy', err)
  }
}
</script>

<template>
  <div class="relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800 text-zinc-100 shadow-sm">
    <!-- 顶部标签栏 -->
    <div class="flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/90 px-4 py-2.5 text-xs text-zinc-400">
      <span class="font-mono">{{ props.filename || props.language.toUpperCase() }}</span>
      <button
        type="button"
        class="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
        @click="copyCode"
      >
        <Check v-if="copied" class="h-3.5 w-3.5 text-emerald-400" />
        <Copy v-else class="h-3.5 w-3.5" />
        <span>{{ copied ? '已复制' : '复制代码' }}</span>
      </button>
    </div>

    <!-- 代码正文 -->
    <div class="max-h-[480px] overflow-auto p-4 text-xs font-mono leading-relaxed">
      <pre class="!m-0 !p-0 !bg-transparent"><code v-html="highlightedCode" /></pre>
    </div>
  </div>
</template>
