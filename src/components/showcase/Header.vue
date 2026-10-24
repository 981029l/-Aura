<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { Sparkles, Github, Layers, LayoutGrid, Menu, X, Search } from 'lucide-vue-next'
import ThemeToggle from './ThemeToggle.vue'
import SearchModal from './SearchModal.vue'
import {
  COMPONENTS_DATA,
  getLastVisitedDocId,
  saveLastVisitedDocId,
} from '@/data/components'
import {
  BLOCKS_DATA,
  getLastVisitedBlockId,
  saveLastVisitedBlockId,
} from '@/data/blocks'

const route = useRoute()
const isDocsActive = computed(() => route.path.startsWith('/docs'))
const isBlocksActive = computed(() => route.path.startsWith('/blocks'))

// 全局 Command Palette 搜索弹窗控制
const isSearchOpen = ref(false)

function handleGlobalKeydown(e: KeyboardEvent) {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault()
    isSearchOpen.value = true
  } else if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
    e.preventDefault()
    isSearchOpen.value = true
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleGlobalKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleGlobalKeydown)
})

// 智能记忆目标组件 ID (记录用户上一次浏览的组件，默认回退至首个 A-Z 组件)
const targetDocId = ref(getLastVisitedDocId())
const docsLink = computed(() => `/docs/${targetDocId.value}`)

// 智能记忆目标场景区块 ID
const targetBlockId = ref(getLastVisitedBlockId())
const blocksLink = computed(() => `/blocks/${targetBlockId.value}`)

// 移动端汉堡菜单折叠状态
const mobileMenuOpen = ref(false)

watch(
  () => route.path,
  (newPath) => {
    mobileMenuOpen.value = false
    if (newPath.startsWith('/docs/')) {
      const id = newPath.replace('/docs/', '')
      if (id && COMPONENTS_DATA.some((c) => c.id === id)) {
        targetDocId.value = id
        saveLastVisitedDocId(id)
      }
    } else if (newPath.startsWith('/blocks/')) {
      const id = newPath.replace('/blocks/', '')
      if (id && BLOCKS_DATA.some((b) => b.id === id)) {
        targetBlockId.value = id
        saveLastVisitedBlockId(id)
      }
    }
  },
  { immediate: true }
)
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-black/80 transition-colors">
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <!-- 品牌 Logo -->
      <router-link to="/" class="flex items-center gap-2.5 group">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-md shadow-blue-500/20 text-white transition-transform duration-300 group-hover:scale-105">
          <Sparkles class="h-5 w-5" />
        </div>
        <div class="flex flex-col">
          <div class="flex items-center gap-1.5">
            <span class="text-lg font-black tracking-tight text-zinc-900 dark:text-white">
              Aura<span class="text-blue-600 dark:text-blue-400">UI</span>
            </span>
            <span class="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-700 dark:bg-blue-950/80 dark:text-blue-300">
              v1.0
            </span>
          </div>
          <span class="text-[10px] text-zinc-400">Vue 3 动效组件库</span>
        </div>
      </router-link>

      <!-- 中间导航项 (使用路由前缀精确匹配，切换侧边栏任何组件均始终保持高亮) -->
      <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
        <router-link
          to="/"
          class="transition-colors"
          :class="
            route.path === '/'
              ? 'text-blue-600 dark:text-blue-400 font-semibold'
              : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
          "
        >
          首页
        </router-link>
        <router-link
          :to="docsLink"
          class="inline-flex items-center gap-1.5 transition-colors"
          :class="
            isDocsActive
              ? 'text-blue-600 dark:text-blue-400 font-semibold'
              : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
          "
        >
          <Layers class="h-4 w-4" />
          <span>组件库 ({{ COMPONENTS_DATA.length }})</span>
        </router-link>
        <router-link
          :to="blocksLink"
          class="inline-flex items-center gap-1.5 transition-colors"
          :class="
            isBlocksActive
              ? 'text-blue-600 dark:text-blue-400 font-semibold'
              : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
          "
        >
          <LayoutGrid class="h-4 w-4" />
          <span>场景区块 ({{ BLOCKS_DATA.length }})</span>
        </router-link>
      </nav>

      <!-- 右侧操作区 -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- 全局快捷搜索按钮 (桌面端+平板端) -->
        <button
          type="button"
          @click="isSearchOpen = true"
          class="group hidden sm:flex items-center gap-2 rounded-xl border border-zinc-200/90 bg-zinc-100/70 px-3 py-1.5 text-xs text-zinc-500 hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800/90 dark:bg-zinc-900/70 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-white transition-all shadow-sm cursor-pointer"
          title="全局搜索 (⌘K 或 Ctrl+K)"
        >
          <Search class="h-3.5 w-3.5 text-zinc-400 group-hover:text-blue-500 transition-colors" />
          <span class="hidden lg:inline">搜索组件或区块...</span>
          <span class="lg:hidden">搜索...</span>
          <div class="flex items-center gap-0.5 ml-1 font-mono text-[10px] text-zinc-400 dark:text-zinc-500 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded px-1.5 py-0.5 shadow-sm">
            <span class="text-[11px] leading-none">⌘</span>K
          </div>
        </button>

        <!-- 移动端独立搜索图标按钮 -->
        <button
          type="button"
          @click="isSearchOpen = true"
          class="sm:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-sm hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          title="搜索组件库"
        >
          <Search class="h-4 w-4 text-zinc-500" />
        </button>

        <!-- 明暗双模切换开关 -->
        <ThemeToggle />

        <!-- 外部链接 / GitHub 占位 -->
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          class="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
          title="GitHub 仓库"
        >
          <Github class="h-4 w-4" />
        </a>

        <!-- 快速起步 CTA -->
        <router-link
          :to="docsLink"
          class="hidden sm:inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          浏览代码
        </router-link>

        <!-- 移动端汉堡菜单切换按钮 -->
        <button
          type="button"
          class="flex md:hidden h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
          @click="mobileMenuOpen = !mobileMenuOpen"
          :aria-expanded="mobileMenuOpen"
          aria-label="切换主导航菜单"
        >
          <X v-if="mobileMenuOpen" class="h-4 w-4" />
          <Menu v-else class="h-4 w-4" />
        </button>
      </div>
    </div>

    <!-- 移动端全量自适应折叠导航 -->
    <div
      v-show="mobileMenuOpen"
      class="md:hidden border-t border-zinc-200/80 bg-white/95 px-4 py-3 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-950/95"
    >
      <!-- 移动端搜索快捷呼出栏 -->
      <button
        type="button"
        @click="isSearchOpen = true; mobileMenuOpen = false"
        class="flex w-full items-center justify-between rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900 px-3.5 py-2.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 mb-3 shadow-sm"
      >
        <div class="flex items-center gap-2">
          <Search class="h-4 w-4 text-blue-500" />
          <span>搜索组件与场景区块...</span>
        </div>
        <kbd class="font-mono text-[10px] bg-white dark:bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">⌘K</kbd>
      </button>

      <nav class="flex flex-col gap-1 text-sm font-medium">
        <router-link
          to="/"
          class="flex items-center justify-between rounded-xl px-3 py-2 transition-colors"
          :class="
            route.path === '/'
              ? 'bg-blue-50 text-blue-600 font-semibold dark:bg-blue-950/50 dark:text-blue-400'
              : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900'
          "
        >
          <span>首页</span>
        </router-link>
        <router-link
          :to="docsLink"
          class="flex items-center justify-between rounded-xl px-3 py-2 transition-colors"
          :class="
            isDocsActive
              ? 'bg-blue-50 text-blue-600 font-semibold dark:bg-blue-950/50 dark:text-blue-400'
              : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900'
          "
        >
          <div class="flex items-center gap-2">
            <Layers class="h-4 w-4 text-blue-500" />
            <span>组件库</span>
          </div>
          <span class="rounded bg-zinc-100 dark:bg-zinc-900 px-1.5 py-0.5 text-xs text-zinc-500 font-mono">
            {{ COMPONENTS_DATA.length }}
          </span>
        </router-link>
        <router-link
          :to="blocksLink"
          class="flex items-center justify-between rounded-xl px-3 py-2 transition-colors"
          :class="
            isBlocksActive
              ? 'bg-blue-50 text-blue-600 font-semibold dark:bg-blue-950/50 dark:text-blue-400'
              : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900'
          "
        >
          <div class="flex items-center gap-2">
            <LayoutGrid class="h-4 w-4 text-blue-500" />
            <span>场景区块</span>
          </div>
          <span class="rounded bg-zinc-100 dark:bg-zinc-900 px-1.5 py-0.5 text-xs text-zinc-500 font-mono">
            {{ BLOCKS_DATA.length }}
          </span>
        </router-link>
      </nav>
    </div>

    <!-- 全局 Command Palette 搜索弹窗 -->
    <SearchModal v-model="isSearchOpen" />
  </header>
</template>
