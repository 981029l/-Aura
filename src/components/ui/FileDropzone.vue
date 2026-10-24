<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import {
  UploadCloud,
  X,
  FileText,
} from 'lucide-vue-next'

export interface UploadedFileItem {
  id: string
  name: string
  size: number
  progress: number
  status: 'uploading' | 'completed' | 'error'
}

export interface FileDropzoneProps {
  accept?: string
  maxSizeMb?: number
  multiple?: boolean
  class?: string
}

const props = withDefaults(defineProps<FileDropzoneProps>(), {
  accept: '.vue,.ts,.json,.png,.jpg',
  maxSizeMb: 10,
  multiple: true,
})

const isDragging = ref(false)
const fileInputRef = ref<HTMLInputElement | null>(null)
const files = ref<UploadedFileItem[]>([
  {
    id: '1',
    name: 'BorderBeam.vue',
    size: 24500,
    progress: 100,
    status: 'completed',
  },
  {
    id: '2',
    name: 'design-tokens.json',
    size: 89000,
    progress: 100,
    status: 'completed',
  },
])

function triggerBrowse() {
  fileInputRef.value?.click()
}

function handleDragOver(e: DragEvent) {
  e.preventDefault()
  isDragging.value = true
}

function handleDragLeave() {
  isDragging.value = false
}

function handleDrop(e: DragEvent) {
  e.preventDefault()
  isDragging.value = false
  if (e.dataTransfer?.files) {
    processFiles(Array.from(e.dataTransfer.files))
  }
}

function handleFileInput(e: Event) {
  const target = e.target as HTMLInputElement
  if (target.files) {
    processFiles(Array.from(target.files))
  }
}

function processFiles(incoming: File[]) {
  for (const f of incoming) {
    const item: UploadedFileItem = {
      id: Math.random().toString(36).substring(2, 9),
      name: f.name,
      size: f.size,
      progress: 0,
      status: 'uploading',
    }
    files.value.push(item)

    // 模拟上传进度流转
    let p = 0
    const interval = setInterval(() => {
      p += 25
      item.progress = Math.min(100, p)
      if (p >= 100) {
        clearInterval(interval)
        item.status = 'completed'
      }
    }, 200)
  }
}

function removeFile(id: string) {
  files.value = files.value.filter((f) => f.id !== id)
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
}
</script>

<template>
  <div
    :class="
      cn(
        'w-full max-w-xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-4',
        props.class
      )
    "
  >
    <!-- 隐形原生文件选择器 -->
    <input
      ref="fileInputRef"
      type="file"
      :accept="props.accept"
      :multiple="props.multiple"
      class="hidden"
      @change="handleFileInput"
    />

    <!-- 拖拽放置主区域 -->
    <div
      @click="triggerBrowse"
      @dragover="handleDragOver"
      @dragleave="handleDragLeave"
      @drop="handleDrop"
      :class="[
        'flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 text-center transition-all duration-200 cursor-pointer',
        isDragging
          ? 'border-blue-500 bg-blue-500/10 scale-[1.02] ring-4 ring-blue-500/15'
          : 'border-zinc-200 bg-zinc-50/70 hover:border-zinc-300 hover:bg-zinc-100/60 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700',
      ]"
    >
      <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-3 transition-transform duration-200 group-hover:scale-110">
        <UploadCloud class="h-6 w-6" />
      </div>

      <h4 class="text-sm font-bold text-zinc-900 dark:text-white">
        点击选择文件，或把文件拖到这里
      </h4>
      <p class="mt-1 text-xs text-zinc-500 font-mono">
        支持 {{ props.accept }} 格式 · 单文件不超过 {{ props.maxSizeMb }}MB
      </p>
    </div>

    <!-- 上传文件清单 -->
    <div v-if="files.length > 0" class="space-y-2 pt-1">
      <div
        v-for="file in files"
        :key="file.id"
        class="flex items-center justify-between rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-3 text-xs dark:border-zinc-800/80 dark:bg-zinc-900/40 transition-colors"
      >
        <div class="flex items-center gap-3 overflow-hidden">
          <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
            <FileText class="h-4 w-4" />
          </div>

          <div class="truncate">
            <h5 class="font-bold text-zinc-900 dark:text-white truncate">
              {{ file.name }}
            </h5>
            <div class="flex items-center gap-2 mt-0.5 text-[10px] text-zinc-400 font-mono">
              <span>{{ formatSize(file.size) }}</span>
              <span>·</span>
              <span
                :class="[
                  file.status === 'completed'
                    ? 'text-emerald-600 dark:text-emerald-400 font-bold'
                    : 'text-blue-500',
                ]"
              >
                {{ file.status === 'completed' ? '上传完成' : `上传中 ${file.progress}%` }}
              </span>
            </div>
          </div>
        </div>

        <!-- 移除按钮 -->
        <button
          type="button"
          @click.stop="removeFile(file.id)"
          class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-zinc-400 hover:bg-zinc-200/70 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer"
          title="移除文件"
        >
          <X class="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  </div>
</template>
