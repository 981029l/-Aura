<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { cn } from '@/lib/utils'
import { Pencil, Check } from 'lucide-vue-next'

export interface InlineEditProps {
  modelValue?: string
  placeholder?: string
  class?: string
}

const props = withDefaults(defineProps<InlineEditProps>(), {
  modelValue: '2025 年第四季度产品规划',
  placeholder: '点击输入...',
})

const emit = defineEmits<{
  (e: 'update:modelValue', val: string): void
  (e: 'save', val: string): void
  (e: 'cancel'): void
}>()

const isEditing = ref(false)
const inputValue = ref(props.modelValue)
const previousValue = ref(props.modelValue)
const inputRef = ref<HTMLInputElement | null>(null)
const isSaved = ref(false)

async function startEditing() {
  previousValue.value = inputValue.value
  isEditing.value = true
  await nextTick()
  if (inputRef.value) {
    inputRef.value.focus()
    inputRef.value.select()
  }
}

function handleSave() {
  if (!isEditing.value) return
  isEditing.value = false
  emit('update:modelValue', inputValue.value)
  emit('save', inputValue.value)

  isSaved.value = true
  setTimeout(() => {
    isSaved.value = false
  }, 1200)
}

function handleCancel() {
  inputValue.value = previousValue.value
  isEditing.value = false
  emit('cancel')
}

function handleKeyDown(e: KeyboardEvent) {
  if (e.key === 'Enter') {
    handleSave()
  } else if (e.key === 'Escape') {
    handleCancel()
  }
}
</script>

<template>
  <div
    :class="
      cn(
        'group relative inline-flex items-center gap-2 select-none font-sans',
        props.class
      )
    "
  >
    <!-- 编辑状态输入框 -->
    <div v-if="isEditing" class="relative flex items-center">
      <input
        ref="inputRef"
        v-model="inputValue"
        type="text"
        :placeholder="props.placeholder"
        @blur="handleSave"
        @keydown="handleKeyDown"
        class="rounded-lg border border-blue-500 bg-white px-2.5 py-1 text-sm font-semibold text-zinc-900 shadow-sm outline-none ring-2 ring-blue-500/20 dark:bg-zinc-900 dark:text-white"
      />
      <span class="ml-2 font-mono text-[10px] text-zinc-400">
        回车确认 · ESC 取消
      </span>
    </div>

    <!-- 静态只读文本展示状态 -->
    <div
      v-else
      @click="startEditing"
      class="flex items-center gap-2 rounded-lg px-2.5 py-1 text-sm font-semibold text-zinc-800 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
      title="点击重命名"
    >
      <span>{{ inputValue || props.placeholder }}</span>

      <!-- 悬停微铅笔图标 -->
      <Pencil class="h-3.5 w-3.5 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />

      <!-- 保存成功微标记 -->
      <span
        v-if="isSaved"
        class="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 animate-fade-in"
      >
        <Check class="h-3 w-3" />
        <span>已保存</span>
      </span>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: scale(0.85); }
  to { opacity: 1; transform: scale(1); }
}
.animate-fade-in {
  animation: fade-in 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
