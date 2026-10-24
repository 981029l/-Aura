<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'
import { Copy, Check, FileCode, Terminal } from 'lucide-vue-next'

export interface CodeTab {
  id: string
  filename: string
  language: string
  code: string[]
}

export interface CodeWindowProps {
  title?: string
  initialTab?: string
  class?: string
}

const props = withDefaults(defineProps<CodeWindowProps>(), {
  title: 'Aura Developer Sandbox',
  initialTab: 'BorderBeam.vue',
})

const tabs = ref<CodeTab[]>([
  {
    id: 'BorderBeam.vue',
    filename: 'BorderBeam.vue',
    language: 'vue',
    code: [
      '<script setup lang="ts">',
      "import { computed } from 'vue'",
      "import { cn } from '@/lib/utils'",
      '',
      'interface Props {',
      '  duration?: number',
      '  borderWidth?: number',
      '  colorFrom?: string',
      '  colorTo?: string',
      '}',
      '</' + 'script>',
      '',
      '<template>',
      '  <div class="relative overflow-hidden rounded-2xl">',
      '    <div class="absolute inset-0 bg-gradient-to-r" />',
      '    <slot />',
      '  </div>',
      '</' + 'template>',
    ],
  },
  {
    id: 'useMotion.ts',
    filename: 'useMotion.ts',
    language: 'typescript',
    code: [
      "import { ref, onMounted } from 'vue'",
      '',
      'export function useMotion(targetRef: any) {',
      '  const velocity = ref(0)',
      '  const damping = ref(0.92)',
      '',
      '  function tick() {',
      '    velocity.value *= damping.value',
      '  }',
      '',
      '  return { velocity, tick }',
      '}',
    ],
  },
])

const activeTabId = ref(props.initialTab)
const copied = ref(false)
const hoveredLine = ref<number | null>(null)

const currentTab = computed(() => {
  return tabs.value.find((t) => t.id === activeTabId.value) || tabs.value[0]
})

function copyCode() {
  const fullText = currentTab.value.code.join('\n')
  navigator.clipboard?.writeText(fullText).catch(() => {})
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<template>
  <div :class="cn('w-full max-w-2xl rounded-2xl border border-zinc-200/90 bg-white/95 shadow-lg shadow-zinc-900/5 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none overflow-hidden', props.class)">
    <!-- 1. macOS 拟态视窗顶部标题栏 -->
    <div class="flex items-center justify-between border-b border-zinc-100 bg-zinc-50/80 px-4 py-3 dark:border-zinc-800/80 dark:bg-zinc-900/70">
      <!-- 红黄绿窗口按钮与标题 -->
      <div class="flex items-center gap-3">
        <div class="flex items-center gap-1.5">
          <div class="h-3 w-3 rounded-full bg-rose-500/80 hover:bg-rose-500 cursor-pointer transition-colors" />
          <div class="h-3 w-3 rounded-full bg-amber-500/80 hover:bg-amber-500 cursor-pointer transition-colors" />
          <div class="h-3 w-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 cursor-pointer transition-colors" />
        </div>

        <div class="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />

        <!-- 多标签页切换 -->
        <div class="flex items-center gap-1">
          <button
            type="button"
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTabId = tab.id"
            :class="[
              'flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer',
              activeTabId === tab.id
                ? 'bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-white font-bold'
                : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200',
            ]"
          >
            <FileCode class="h-3.5 w-3.5 text-blue-500" />
            <span>{{ tab.filename }}</span>
          </button>
        </div>
      </div>

      <!-- 右侧复制代码与终端状态 -->
      <div class="flex items-center gap-2">
        <button
          type="button"
          @click="copyCode"
          class="flex items-center gap-1 px-2.5 py-1 rounded-lg border border-zinc-200 hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-300 transition-colors cursor-pointer"
        >
          <Check v-if="copied" class="h-3.5 w-3.5 text-emerald-500" />
          <Copy v-else class="h-3.5 w-3.5" />
          <span>{{ copied ? '已复制' : '复制' }}</span>
        </button>
      </div>
    </div>

    <!-- 2. 代码高亮呈现区 (含行号与光标追踪) -->
    <div class="p-4 font-mono text-xs overflow-x-auto bg-zinc-950 text-zinc-300">
      <div class="space-y-1">
        <div
          v-for="(line, idx) in currentTab.code"
          :key="idx"
          @mouseenter="hoveredLine = idx + 1"
          @mouseleave="hoveredLine = null"
          :class="[
            'flex items-center gap-4 px-2 py-0.5 rounded-md transition-colors',
            hoveredLine === idx + 1 ? 'bg-zinc-800/80 text-white' : '',
          ]"
        >
          <!-- 行号 -->
          <span class="w-6 text-right text-zinc-600 select-none text-[11px]">
            {{ idx + 1 }}
          </span>

          <!-- 代码文字内容 (拟态语法高亮) -->
          <span class="leading-relaxed">
            <template v-if="line.startsWith('<')">
              <span class="text-sky-400">{{ line }}</span>
            </template>
            <template v-else-if="line.startsWith('import') || line.startsWith('export')">
              <span class="text-purple-400">{{ line.split(' ')[0] }}</span>
              <span class="text-zinc-200">{{ line.substring(line.indexOf(' ')) }}</span>
            </template>
            <template v-else-if="line.includes('const') || line.includes('function')">
              <span class="text-emerald-400">{{ line }}</span>
            </template>
            <template v-else>
              <span>{{ line }}</span>
            </template>
          </span>
        </div>
      </div>
    </div>

    <!-- 3. 底部视窗状态栏 -->
    <div class="flex items-center justify-between border-t border-zinc-100 bg-zinc-50/60 px-4 py-2 text-[11px] font-mono text-zinc-400 dark:border-zinc-800/80 dark:bg-zinc-900/40">
      <div class="flex items-center gap-2">
        <Terminal class="h-3 w-3 text-emerald-500" />
        <span>UTF-8 · LF · {{ currentTab.language }}</span>
      </div>
      <div>{{ currentTab.code.length }} lines · 100% SFC</div>
    </div>
  </div>
</template>
