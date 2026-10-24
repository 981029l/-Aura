<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'

interface KeyboardBadgeProps {
  keyName: string
  shortcutKey?: string // 监听真实键盘按键代码，例如 'k' 或 'Enter'
  size?: 'sm' | 'md' | 'lg'
  class?: string
}

const props = withDefaults(defineProps<KeyboardBadgeProps>(), {
  keyName: '⌘K',
  size: 'md',
})

const isPressed = ref(false)

function handleKeyDown(e: KeyboardEvent) {
  if (props.shortcutKey && e.key.toLowerCase() === props.shortcutKey.toLowerCase()) {
    isPressed.value = true
  }
}

function handleKeyUp(e: KeyboardEvent) {
  if (props.shortcutKey && e.key.toLowerCase() === props.shortcutKey.toLowerCase()) {
    isPressed.value = false
  }
}

onMounted(() => {
  if (props.shortcutKey) {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
  }
})

onUnmounted(() => {
  if (props.shortcutKey) {
    window.removeEventListener('keydown', handleKeyDown)
    window.removeEventListener('keyup', handleKeyUp)
  }
})
</script>

<template>
  <kbd
    @mousedown="isPressed = true"
    @mouseup="isPressed = false"
    @mouseleave="isPressed = false"
    :class="
      cn(
        'inline-flex items-center justify-center font-mono font-bold select-none cursor-pointer rounded-lg border transition-all duration-75',
        // 拟物 3D 键帽阴影与边缘
        'border-zinc-300 bg-gradient-to-b from-white to-zinc-100 text-zinc-700 shadow-[0_3px_0_0_#d4d4d8,0_4px_6px_-1px_rgba(0,0,0,0.1)]',
        'dark:border-zinc-700 dark:bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900 dark:text-zinc-200 dark:shadow-[0_3px_0_0_#27272a,0_4px_6px_-1px_rgba(0,0,0,0.4)]',
        // 按下物理沉降
        isPressed && 'translate-y-[2px] shadow-[0_1px_0_0_#d4d4d8] dark:shadow-[0_1px_0_0_#27272a]',
        // 尺寸变体
        props.size === 'sm' && 'h-6 min-w-[24px] px-1.5 text-[10px]',
        props.size === 'md' && 'h-8 min-w-[32px] px-2.5 text-xs',
        props.size === 'lg' && 'h-10 min-w-[40px] px-3.5 text-sm',
        props.class
      )
    "
  >
    <slot>{{ props.keyName }}</slot>
  </kbd>
</template>
