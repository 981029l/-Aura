<script setup lang="ts">
import { ref, watch } from 'vue'
import { cn } from '@/lib/utils'
import { Check, Copy } from 'lucide-vue-next'

interface ColorPickerMorphProps {
  modelValue?: string
  colors?: string[]
  class?: string
}

const props = withDefaults(defineProps<ColorPickerMorphProps>(), {
  modelValue: '#3b82f6',
  colors: () => [
    '#3b82f6', // Blue
    '#10b981', // Emerald
    '#8b5cf6', // Violet
    '#f59e0b', // Amber
    '#ec4899', // Pink
    '#06b6d4', // Cyan
    '#f43f5e', // Rose
    '#18181b', // Zinc
  ],
})

const emit = defineEmits<{
  (e: 'update:modelValue', val: string): void
  (e: 'change', val: string): void
}>()

const selectedColor = ref(props.modelValue)
const copied = ref(false)

function selectColor(color: string) {
  selectedColor.value = color
  emit('update:modelValue', color)
  emit('change', color)
}

async function copyHex() {
  try {
    await navigator.clipboard.writeText(selectedColor.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 1500)
  } catch (err) {
    console.error('Failed to copy', err)
  }
}

watch(() => props.modelValue, (val) => {
  if (val) selectedColor.value = val
})
</script>

<template>
  <div
    :class="
      cn(
        'inline-flex flex-col gap-3 rounded-2xl border border-zinc-200/90 bg-white/90 p-4 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/90 select-none',
        props.class
      )
    "
  >
    <!-- 色彩气泡阵列 -->
    <div class="flex items-center gap-2.5">
      <button
        v-for="color in props.colors"
        :key="color"
        type="button"
        @click="selectColor(color)"
        class="group relative flex h-7 w-7 items-center justify-center rounded-full transition-transform active:scale-90 cursor-pointer"
        :title="color"
        :aria-label="color"
        :aria-pressed="selectedColor === color"
      >
        <!-- 实心色块：填满整个按钮，选中时整体弹性放大 -->
        <span
          :class="[
            'h-full w-full rounded-full shadow-inner transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
            selectedColor === color ? 'scale-[1.22]' : 'group-hover:scale-105',
          ]"
          :style="{ backgroundColor: color }"
        />

        <!-- 选中态中心小对勾：绝对定位叠在色块正中，不参与排版 -->
        <Check
          v-if="selectedColor === color"
          class="pointer-events-none absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 text-white drop-shadow-md"
        />
      </button>
    </div>

    <!-- 底部色彩代码与复制胶囊 -->
    <div class="flex items-center justify-between border-t border-zinc-100 pt-2.5 dark:border-zinc-800/80">
      <div class="flex items-center gap-2">
        <span class="h-3 w-3 rounded-full" :style="{ backgroundColor: selectedColor }" />
        <span class="font-mono text-xs font-bold text-zinc-700 dark:text-zinc-300">
          {{ selectedColor.toUpperCase() }}
        </span>
      </div>

      <button
        type="button"
        @click="copyHex"
        class="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-mono text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer"
      >
        <Check v-if="copied" class="h-3 w-3 text-emerald-500" />
        <Copy v-else class="h-3 w-3" />
        <span>{{ copied ? '已复制' : '复制 HEX' }}</span>
      </button>
    </div>
  </div>
</template>
