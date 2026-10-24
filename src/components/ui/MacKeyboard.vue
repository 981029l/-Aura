<template>
  <div
    class="relative w-full max-w-4xl mx-auto p-4 sm:p-6 rounded-[28px] select-none shadow-2xl border border-white/10"
    :class="className"
    :style="{
      background: 'linear-gradient(180deg, #1e1e24 0%, #151518 100%)',
      boxShadow: '0 25px 60px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.1)',
    }"
  >
    <div class="flex flex-col gap-1.5 sm:gap-2">
      <!-- Function Row -->
      <div class="flex gap-1 sm:gap-1.5 w-full">
        <div
          v-for="k in functionRow"
          :key="k.code"
          class="flex-1 h-7 sm:h-9 rounded-md flex items-center justify-center text-[10px] sm:text-xs font-mono font-medium transition-all duration-75 border"
          :class="getKeyClass(k.code)"
          @click="pressKey(k.code)"
        >
          {{ k.label }}
        </div>
      </div>

      <!-- Numbers Row -->
      <div class="flex gap-1 sm:gap-1.5 w-full">
        <div
          v-for="k in numberRow"
          :key="k.code"
          :class="[k.code === 'Backspace' ? 'w-16 sm:w-20' : 'flex-1', getKeyClass(k.code)]"
          class="h-9 sm:h-12 rounded-md flex flex-col items-center justify-center text-[11px] sm:text-xs font-mono font-semibold transition-all duration-75 border"
          @click="pressKey(k.code)"
        >
          <span>{{ k.label }}</span>
        </div>
      </div>

      <!-- QWERTY Row -->
      <div class="flex gap-1 sm:gap-1.5 w-full">
        <div
          v-for="k in qwertyRow"
          :key="k.code"
          :class="[k.code === 'Tab' ? 'w-14 sm:w-16' : 'flex-1', getKeyClass(k.code)]"
          class="h-9 sm:h-12 rounded-md flex items-center justify-center text-xs sm:text-sm font-sans font-medium transition-all duration-75 border"
          @click="pressKey(k.code)"
        >
          {{ k.label }}
        </div>
      </div>

      <!-- ASDF Row -->
      <div class="flex gap-1 sm:gap-1.5 w-full">
        <div
          v-for="k in asdfRow"
          :key="k.code"
          :class="[k.code === 'CapsLock' ? 'w-16 sm:w-20' : k.code === 'Enter' ? 'w-16 sm:w-20' : 'flex-1', getKeyClass(k.code)]"
          class="h-9 sm:h-12 rounded-md flex items-center justify-center text-xs sm:text-sm font-sans font-medium transition-all duration-75 border"
          @click="pressKey(k.code)"
        >
          {{ k.label }}
        </div>
      </div>

      <!-- ZXCV Row -->
      <div class="flex gap-1 sm:gap-1.5 w-full">
        <div
          v-for="k in zxcvRow"
          :key="k.code"
          :class="[k.code === 'ShiftLeft' ? 'w-20 sm:w-24' : k.code === 'ShiftRight' ? 'w-20 sm:w-24' : 'flex-1', getKeyClass(k.code)]"
          class="h-9 sm:h-12 rounded-md flex items-center justify-center text-xs sm:text-sm font-sans font-medium transition-all duration-75 border"
          @click="pressKey(k.code)"
        >
          {{ k.label }}
        </div>
      </div>

      <!-- Bottom Space Row -->
      <div class="flex gap-1 sm:gap-1.5 w-full">
        <div
          v-for="k in bottomRow"
          :key="k.code"
          :class="[k.code === 'Space' ? 'flex-[4]' : 'flex-1', getKeyClass(k.code)]"
          class="h-9 sm:h-12 rounded-md flex items-center justify-center text-[10px] sm:text-xs font-sans font-medium transition-all duration-75 border"
          @click="pressKey(k.code)"
        >
          {{ k.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  className?: string
}

withDefaults(defineProps<Props>(), {
  className: '',
})

const activeKeys = ref<Set<string>>(new Set())

const functionRow = [
  { code: 'Escape', label: 'esc' },
  { code: 'F1', label: 'F1' },
  { code: 'F2', label: 'F2' },
  { code: 'F3', label: 'F3' },
  { code: 'F4', label: 'F4' },
  { code: 'F5', label: 'F5' },
  { code: 'F6', label: 'F6' },
  { code: 'F7', label: 'F7' },
  { code: 'F8', label: 'F8' },
  { code: 'F9', label: 'F9' },
  { code: 'F10', label: 'F10' },
  { code: 'F11', label: 'F11' },
  { code: 'F12', label: 'F12' },
]

const numberRow = [
  { code: 'Backquote', label: '~' },
  { code: 'Digit1', label: '1' },
  { code: 'Digit2', label: '2' },
  { code: 'Digit3', label: '3' },
  { code: 'Digit4', label: '4' },
  { code: 'Digit5', label: '5' },
  { code: 'Digit6', label: '6' },
  { code: 'Digit7', label: '7' },
  { code: 'Digit8', label: '8' },
  { code: 'Digit9', label: '9' },
  { code: 'Digit0', label: '0' },
  { code: 'Minus', label: '-' },
  { code: 'Equal', label: '=' },
  { code: 'Backspace', label: 'delete' },
]

const qwertyRow = [
  { code: 'Tab', label: 'tab' },
  { code: 'KeyQ', label: 'Q' },
  { code: 'KeyW', label: 'W' },
  { code: 'KeyE', label: 'E' },
  { code: 'KeyR', label: 'R' },
  { code: 'KeyT', label: 'T' },
  { code: 'KeyY', label: 'Y' },
  { code: 'KeyU', label: 'U' },
  { code: 'KeyI', label: 'I' },
  { code: 'KeyO', label: 'O' },
  { code: 'KeyP', label: 'P' },
  { code: 'BracketLeft', label: '[' },
  { code: 'BracketRight', label: ']' },
  { code: 'Backslash', label: '\\' },
]

const asdfRow = [
  { code: 'CapsLock', label: 'caps lock' },
  { code: 'KeyA', label: 'A' },
  { code: 'KeyS', label: 'S' },
  { code: 'KeyD', label: 'D' },
  { code: 'KeyF', label: 'F' },
  { code: 'KeyG', label: 'G' },
  { code: 'KeyH', label: 'H' },
  { code: 'KeyJ', label: 'J' },
  { code: 'KeyK', label: 'K' },
  { code: 'KeyL', label: 'L' },
  { code: 'Semicolon', label: ';' },
  { code: 'Quote', label: "'" },
  { code: 'Enter', label: 'return' },
]

const zxcvRow = [
  { code: 'ShiftLeft', label: 'shift' },
  { code: 'KeyZ', label: 'Z' },
  { code: 'KeyX', label: 'X' },
  { code: 'KeyC', label: 'C' },
  { code: 'KeyV', label: 'V' },
  { code: 'KeyB', label: 'B' },
  { code: 'KeyN', label: 'N' },
  { code: 'KeyM', label: 'M' },
  { code: 'Comma', label: ',' },
  { code: 'Period', label: '.' },
  { code: 'Slash', label: '/' },
  { code: 'ShiftRight', label: 'shift' },
]

const bottomRow = [
  { code: 'ControlLeft', label: 'control' },
  { code: 'AltLeft', label: 'option' },
  { code: 'MetaLeft', label: 'command' },
  { code: 'Space', label: '' },
  { code: 'MetaRight', label: 'command' },
  { code: 'AltRight', label: 'option' },
  { code: 'ArrowLeft', label: '◀' },
  { code: 'ArrowUp', label: '▲' },
  { code: 'ArrowDown', label: '▼' },
  { code: 'ArrowRight', label: '▶' },
]

function getKeyClass(code: string) {
  const isDown = activeKeys.value.has(code)
  if (isDown) {
    return 'bg-cyan-500 text-black border-cyan-300 shadow-[0_0_15px_#06b6d4] translate-y-0.5'
  }
  return 'bg-[#18181b] text-neutral-300 border-white/5 hover:border-white/20 shadow-[0_2px_0_#09090b]'
}

function pressKey(code: string) {
  activeKeys.value.add(code)
  setTimeout(() => {
    activeKeys.value.delete(code)
  }, 140)
}

function handleKeyDown(e: KeyboardEvent) {
  activeKeys.value.add(e.code)
}

function handleKeyUp(e: KeyboardEvent) {
  activeKeys.value.delete(e.code)
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('keyup', handleKeyUp)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
  window.removeEventListener('keyup', handleKeyUp)
})
</script>
