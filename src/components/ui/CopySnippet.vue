<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { Copy, Check } from 'lucide-vue-next'

interface CopySnippetProps {
  code: string
  prefix?: string
  class?: string
}

const props = withDefaults(defineProps<CopySnippetProps>(), {
  code: "import { cn } from '@/lib/utils'",
  prefix: '',
})

const copied = ref(false)

async function handleCopy() {
  try {
    await navigator.clipboard.writeText(props.code)
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
  <div
    :class="
      cn(
        'group relative inline-flex items-center gap-3 rounded-xl border border-zinc-200/90 bg-white/90 px-4 py-2.5 font-mono text-xs shadow-sm backdrop-blur-xl transition-all hover:border-zinc-300 dark:border-zinc-800/90 dark:bg-zinc-950/90 dark:hover:border-zinc-700',
        props.class
      )
    "
  >
    <div class="flex items-center gap-2 overflow-hidden">
      <span v-if="props.prefix" class="text-zinc-400 select-none">{{ props.prefix }}</span>
      <span class="truncate font-semibold text-zinc-800 dark:text-zinc-200">
        {{ props.code }}
      </span>
    </div>

    <!-- 复制行动按钮 -->
    <button
      type="button"
      @click="handleCopy"
      class="ml-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-zinc-200/80 bg-zinc-50 text-zinc-500 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 active:scale-90 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white cursor-pointer"
      :title="copied ? '已复制' : '复制代码'"
    >
      <transition mode="out-in" name="copy-scale">
        <Check v-if="copied" class="h-3.5 w-3.5 text-emerald-500" />
        <Copy v-else class="h-3.5 w-3.5" />
      </transition>
    </button>
  </div>
</template>

<style scoped>
.copy-scale-enter-active,
.copy-scale-leave-active {
  transition: transform 0.15s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.15s ease;
}
.copy-scale-enter-from {
  opacity: 0;
  transform: scale(0.6);
}
.copy-scale-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
</style>
