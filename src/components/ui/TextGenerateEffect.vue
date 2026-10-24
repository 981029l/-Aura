<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { cn } from '@/lib/utils'

interface TextGenerateEffectProps {
  words: string
  duration?: number
  delay?: number
  class?: string
}

const props = withDefaults(defineProps<TextGenerateEffectProps>(), {
  words: 'Aura UI 是一套 Vue 3 动效组件库，每个组件都是独立的 .vue 文件，复制到项目里就能使用。',
  duration: 0.5,
  delay: 0.06,
})

const displayedTokens = ref<{ text: string; visible: boolean }[]>([])

function triggerAnimation() {
  // 中英文混合拆分：英文字词按空格，中文按单字拆分
  const raw = props.words
  const tokens: string[] = []
  
  let currentEnWord = ''
  for (let i = 0; i < raw.length; i++) {
    const char = raw[i]
    if (/[a-zA-Z0-9_\-+]/.test(char)) {
      currentEnWord += char
    } else {
      if (currentEnWord) {
        tokens.push(currentEnWord)
        currentEnWord = ''
      }
      tokens.push(char)
    }
  }
  if (currentEnWord) tokens.push(currentEnWord)

  displayedTokens.value = tokens.map((t) => ({ text: t, visible: false }))

  tokens.forEach((_, idx) => {
    setTimeout(() => {
      if (displayedTokens.value[idx]) {
        displayedTokens.value[idx].visible = true
      }
    }, idx * (props.delay * 1000))
  })
}

onMounted(() => {
  triggerAnimation()
})

watch(() => props.words, () => {
  triggerAnimation()
})

defineExpose({
  replay: triggerAnimation,
})
</script>

<template>
  <div :class="cn('font-sans font-bold leading-relaxed tracking-wide select-none', props.class)">
    <span
      v-for="(token, idx) in displayedTokens"
      :key="idx"
      class="inline-block transition-all ease-out"
      :style="{
        transitionDuration: `${props.duration}s`,
        opacity: token.visible ? 1 : 0,
        filter: token.visible ? 'blur(0px)' : 'blur(8px)',
        transform: token.visible ? 'translateY(0)' : 'translateY(6px)',
      }"
      :class="[
        token.text === ' ' ? 'w-1.5' : '',
        'text-zinc-900 dark:text-white',
      ]"
    >
      {{ token.text }}
    </span>
  </div>
</template>
