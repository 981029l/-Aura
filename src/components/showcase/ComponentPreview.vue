<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Eye, Code2, RotateCcw } from 'lucide-vue-next'
import CodeBlock from './CodeBlock.vue'

interface PropItem {
  name: string
  type: string
  default: string
  description: string
}

interface ComponentPreviewProps {
  name?: string
  title: string
  description: string
  componentCode: string
  usageCode: string
  componentFilename: string
  propsList?: PropItem[]
  size?: 'standard' | 'expanded'
}

const props = withDefaults(defineProps<ComponentPreviewProps>(), {
  size: 'standard',
})

const activeTab = ref<'preview' | 'component' | 'usage'>('preview')
const bgMode = ref<'default' | 'dark' | 'light'>('default')
const reloadKey = ref(0)
const isGlobalDark = ref(true)

let observer: MutationObserver | null = null

onMounted(() => {
  isGlobalDark.value = document.documentElement.classList.contains('dark')
  observer = new MutationObserver(() => {
    isGlobalDark.value = document.documentElement.classList.contains('dark')
  })
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  })
})

onUnmounted(() => {
  observer?.disconnect()
})

const isDark = computed(() => {
  if (bgMode.value === 'dark') return true
  if (bgMode.value === 'light') return false
  return isGlobalDark.value
})

function reloadComponent() {
  reloadKey.value++
}
</script>

<template>
  <div class="space-y-4">
    <!-- 组件标题与简介 -->
    <div class="space-y-1.5">
      <div class="flex flex-wrap items-baseline gap-2.5">
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-mono">
          {{ props.name || props.title }}
        </h2>
        <span
          v-if="props.name && props.title && props.name !== props.title"
          class="text-sm sm:text-base font-medium text-zinc-500 dark:text-zinc-400"
        >
          {{ props.title }}
        </span>
      </div>
      <p class="text-sm text-zinc-500 dark:text-zinc-400">
        {{ props.description }}
      </p>
    </div>

    <!-- 交互预览与代码展示卡片 -->
    <div class="overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 shadow-sm transition-colors">
      <!-- 视窗工具栏 -->
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200/80 bg-zinc-50/80 px-4 py-2.5 dark:border-zinc-800/80 dark:bg-zinc-900/60">
        <!-- 标签页切换 -->
        <div class="flex items-center gap-1 rounded-lg bg-zinc-200/60 p-1 dark:bg-zinc-800/60 text-xs font-medium">
          <button
            type="button"
            :class="[
              'inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all',
              activeTab === 'preview'
                ? 'bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100'
                : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100',
            ]"
            @click="activeTab = 'preview'"
          >
            <Eye class="h-3.5 w-3.5" />
            <span>预览</span>
          </button>
          <button
            type="button"
            :class="[
              'inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all',
              activeTab === 'component'
                ? 'bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100'
                : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100',
            ]"
            @click="activeTab = 'component'"
          >
            <Code2 class="h-3.5 w-3.5" />
            <span>源码 ({{ props.componentFilename }})</span>
          </button>
          <button
            type="button"
            :class="[
              'inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all',
              activeTab === 'usage'
                ? 'bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100'
                : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100',
            ]"
            @click="activeTab = 'usage'"
          >
            <Code2 class="h-3.5 w-3.5" />
            <span>用法示例</span>
          </button>
        </div>

        <!-- 仅在预览模式下展示的微调控制栏 -->
        <div v-if="activeTab === 'preview'" class="flex items-center gap-2 text-xs">
          <!-- 独立底色切换测试 -->
          <span class="text-zinc-400">预览背景：</span>
          <div class="flex items-center gap-1 rounded-md border border-zinc-200 dark:border-zinc-800 p-0.5">
            <button
              type="button"
              :class="[
                'px-2 py-0.5 rounded text-[11px] font-medium transition-colors',
                bgMode === 'default'
                  ? 'bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100 font-semibold'
                  : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100',
              ]"
              @click="bgMode = 'default'"
            >
              跟随页面
            </button>
            <button
              type="button"
              :class="[
                'px-2 py-0.5 rounded text-[11px] font-medium transition-colors',
                bgMode === 'light'
                  ? 'bg-white text-zinc-900 shadow-sm font-semibold'
                  : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100',
              ]"
              @click="bgMode = 'light'"
            >
              浅色
            </button>
            <button
              type="button"
              :class="[
                'px-2 py-0.5 rounded text-[11px] font-medium transition-colors',
                bgMode === 'dark'
                  ? 'bg-black text-white shadow-sm font-semibold'
                  : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100',
              ]"
              @click="bgMode = 'dark'"
            >
              深色
            </button>
          </div>

          <!-- 重新播放按钮 -->
          <button
            type="button"
            class="inline-flex items-center gap-1 rounded-md p-1.5 text-zinc-500 transition-colors hover:bg-zinc-200/60 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
            title="重新播放"
            @click="reloadComponent"
          >
            <RotateCcw class="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <!-- 内容主体 -->
      <div class="relative">
        <!-- 1. 实时效果视窗（保底居中 + 内容自适应舒展，彻底消除截断） -->
        <div
          v-show="activeTab === 'preview'"
          :class="[
            'relative flex w-full items-center justify-center py-10 px-4 sm:px-8 transition-all duration-300',
            props.size === 'expanded'
              ? 'min-h-[560px] h-auto'
              : 'min-h-[380px] h-auto',
            isDark ? 'dark bg-black text-zinc-100' : 'bg-zinc-100/80 text-zinc-900',
          ]"
        >
          <div :key="reloadKey" class="w-full flex items-center justify-center">
            <slot :isDark="isDark" />
          </div>
        </div>

        <!-- 2. 组件源码 Tab -->
        <div v-show="activeTab === 'component'" class="p-4">
          <CodeBlock
            :code="props.componentCode"
            :filename="props.componentFilename"
            language="html"
          />
        </div>

        <!-- 3. 业务调用 Usage Tab -->
        <div v-show="activeTab === 'usage'" class="p-4">
          <CodeBlock
            :code="props.usageCode"
            filename="UsageExample.vue"
            language="html"
          />
        </div>
      </div>
    </div>

    <!-- Props 属性说明表格 -->
    <div v-if="props.propsList && props.propsList.length > 0" class="mt-8 space-y-3">
      <h3 class="text-base font-semibold text-zinc-900 dark:text-zinc-100">
        Props
      </h3>
      <div class="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
        <table class="w-full text-left text-xs">
          <thead class="border-b border-zinc-200 bg-zinc-50/80 font-mono text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400">
            <tr>
              <th class="px-4 py-2.5">属性名</th>
              <th class="px-4 py-2.5">类型</th>
              <th class="px-4 py-2.5">默认值</th>
              <th class="px-4 py-2.5">说明</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-zinc-200 dark:divide-zinc-800/60 font-mono">
            <tr
              v-for="item in props.propsList"
              :key="item.name"
              class="text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/40"
            >
              <td class="px-4 py-2.5 font-bold text-blue-600 dark:text-blue-400">
                {{ item.name }}
              </td>
              <td class="px-4 py-2.5 text-pink-600 dark:text-pink-400">
                {{ item.type }}
              </td>
              <td class="px-4 py-2.5 text-zinc-500">
                {{ item.default }}
              </td>
              <td class="px-4 py-2.5 font-sans text-zinc-600 dark:text-zinc-300">
                {{ item.description }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
