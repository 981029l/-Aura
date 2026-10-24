<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import {
  Keyboard,
  AlertTriangle,
  X,
} from 'lucide-vue-next'

export interface ShortcutRecorderProps {
  modelValue?: string[] // 例如 ['Meta', 'k'] 或 ['Control', 'Shift', 'p']
  placeholder?: string
  class?: string
}

const props = withDefaults(defineProps<ShortcutRecorderProps>(), {
  modelValue: () => ['Meta', 'k'],
  placeholder: '点击录制快捷键',
})

const emit = defineEmits<{
  (e: 'update:modelValue', keys: string[]): void
  (e: 'change', keys: string[]): void
}>()

const isRecording = ref(false)
const currentKeys = ref<string[]>([...props.modelValue])
const hasConflict = ref(false)

const reservedShortcuts = ['control+w', 'control+t', 'control+n', 'meta+w', 'meta+t', 'meta+q']

function formatKey(key: string): string {
  const map: Record<string, string> = {
    meta: '⌘ Command',
    control: 'Ctrl',
    shift: '⇧ Shift',
    alt: '⌥ Option',
    enter: '↵ Enter',
    escape: 'Esc',
    arrowup: '↑',
    arrowdown: '↓',
    arrowleft: '←',
    arrowright: '→',
    backspace: '⌫',
  }
  return map[key.toLowerCase()] || key.toUpperCase()
}

function startRecording() {
  isRecording.value = true
  hasConflict.value = false
  window.addEventListener('keydown', handleKeyDown)
}

function stopRecording() {
  isRecording.value = false
  window.removeEventListener('keydown', handleKeyDown)
}

function handleKeyDown(e: KeyboardEvent) {
  e.preventDefault()
  e.stopPropagation()

  if (e.key === 'Escape') {
    stopRecording()
    return
  }

  const keys: string[] = []
  if (e.metaKey) keys.push('Meta')
  if (e.ctrlKey) keys.push('Control')
  if (e.altKey) keys.push('Alt')
  if (e.shiftKey) keys.push('Shift')

  const nonModifiers = ['Meta', 'Control', 'Alt', 'Shift']
  if (!nonModifiers.includes(e.key)) {
    keys.push(e.key.length === 1 ? e.key.toLowerCase() : e.key)
    currentKeys.value = keys
    stopRecording()

    // 冲突检查
    const signature = keys.map((k) => k.toLowerCase()).join('+')
    hasConflict.value = reservedShortcuts.includes(signature)

    emit('update:modelValue', keys)
    emit('change', keys)
  } else {
    currentKeys.value = keys
  }
}

function clearKeys() {
  currentKeys.value = []
  hasConflict.value = false
  emit('update:modelValue', [])
}

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <div
    :class="
      cn(
        'inline-flex flex-col gap-2 rounded-2xl border border-zinc-200/90 bg-white/90 p-4 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/90 select-none font-sans',
        props.class
      )
    "
  >
    <div class="flex items-center justify-between gap-4">
      <!-- 快捷键录制区域 -->
      <div
        @click="startRecording"
        :class="[
          'flex min-h-10 min-w-[200px] items-center gap-1.5 rounded-xl border px-3 py-1.5 transition-all cursor-pointer',
          isRecording
            ? 'border-blue-500 bg-blue-500/10 ring-2 ring-blue-500/20 animate-pulse'
            : 'border-zinc-200/80 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800',
        ]"
      >
        <Keyboard class="h-4 w-4 text-zinc-400 shrink-0" />

        <div v-if="isRecording" class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
          请按下组合键...
        </div>

        <div v-else-if="currentKeys.length > 0" class="flex items-center gap-1.5">
          <kbd
            v-for="k in currentKeys"
            :key="k"
            class="inline-flex items-center rounded-lg border border-zinc-300 bg-gradient-to-b from-white to-zinc-100 px-2 py-0.5 font-mono text-xs font-bold text-zinc-800 shadow-[0_2px_0_0_#d4d4d8] dark:border-zinc-700 dark:bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900 dark:text-zinc-200 dark:shadow-[0_2px_0_0_#27272a]"
          >
            {{ formatKey(k) }}
          </kbd>
        </div>

        <span v-else class="text-xs text-zinc-400">
          {{ props.placeholder }}
        </span>
      </div>

      <!-- 清空按键 -->
      <button
        v-if="currentKeys.length > 0"
        type="button"
        @click="clearKeys"
        class="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer"
        title="清空快捷键"
      >
        <X class="h-4 w-4" />
      </button>
    </div>

    <!-- 冲突告警条 -->
    <div
      v-if="hasConflict"
      class="flex items-center gap-1.5 text-[11px] font-mono text-amber-600 dark:text-amber-400"
    >
      <AlertTriangle class="h-3.5 w-3.5 shrink-0" />
      <span>这个组合键已被浏览器占用，建议换一个。</span>
    </div>
  </div>
</template>
