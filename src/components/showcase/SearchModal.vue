<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import {
  Search,
  X,
  Layers,
  LayoutGrid,
  Zap,
  Sparkles,
  Bot,
  Globe,
  Film,
  Sliders,
  CornerDownLeft,
  Palette,
  Home,
} from 'lucide-vue-next'
import { COMPONENTS_DATA, type ComponentDoc } from '@/data/components'
import { BLOCKS_DATA, type BlockDoc } from '@/data/blocks'

interface Props {
  modelValue: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const router = useRouter()
const searchInputRef = ref<HTMLInputElement | null>(null)
const query = ref('')
const activeFilter = ref<'all' | 'components' | 'blocks' | 'actions'>('all')
const selectedIndex = ref(0)
const resultsContainerRef = ref<HTMLDivElement | null>(null)

// 统一搜索条目接口
export interface SearchItem {
  id: string
  type: 'component' | 'block' | 'action'
  title: string
  subtitle: string
  category: string
  url?: string
  icon: any
  action?: () => void
}

// 快捷动作定义
const quickActions: SearchItem[] = [
  {
    id: 'action-toggle-theme',
    type: 'action',
    title: '切换浅色 / 深色模式',
    subtitle: '在浅色和深色界面之间切换',
    category: '外观偏好',
    icon: Palette,
    action: () => {
      const isDark = document.documentElement.classList.contains('dark')
      if (isDark) {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('aura-theme', 'light')
      } else {
        document.documentElement.classList.add('dark')
        localStorage.setItem('aura-theme', 'dark')
      }
    },
  },
  {
    id: 'action-goto-home',
    type: 'action',
    title: '首页',
    subtitle: '返回首页，查看组件预览与主题套件',
    category: '全局导航',
    url: '/',
    icon: Home,
  },
  {
    id: 'action-goto-docs',
    type: 'action',
    title: '组件库',
    subtitle: `浏览全部 ${COMPONENTS_DATA.length} 个动效组件`,
    category: '全局导航',
    url: '/docs/border-beam',
    icon: Layers,
  },
  {
    id: 'action-goto-blocks',
    type: 'action',
    title: '场景区块',
    subtitle: `浏览全部 ${BLOCKS_DATA.length} 个页面区块，如首屏、定价、登录页`,
    category: '全局导航',
    url: '/blocks/hero-modern',
    icon: LayoutGrid,
  },
]

// 组件类别图标匹配
function getCategoryIcon(cat: string) {
  switch (cat) {
    case 'AI':
      return Bot
    case 'Cards':
      return Layers
    case 'Button':
      return Zap
    case 'Effect':
      return Globe
    case 'Background':
      return Film
    case 'Interactive':
      return Sliders
    default:
      return Sparkles
  }
}

// 过滤与聚合全量搜索数据
const searchResults = computed<SearchItem[]>(() => {
  const q = query.value.trim().toLowerCase()

  // 1. 过滤组件
  let componentItems: SearchItem[] = []
  if (activeFilter.value === 'all' || activeFilter.value === 'components') {
    componentItems = COMPONENTS_DATA.filter((c: ComponentDoc) => {
      if (!q) return true
      return (
        c.name.toLowerCase().includes(q) ||
        c.title.toLowerCase().includes(q) ||
        c.id.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)
      )
    }).map((c: ComponentDoc) => ({
      id: `comp-${c.id}`,
      type: 'component',
      title: c.name,
      subtitle: `${c.title} — ${c.description.slice(0, 50)}...`,
      category: c.category,
      url: `/docs/${c.id}`,
      icon: getCategoryIcon(c.category),
    }))
  }

  // 2. 过滤场景区块 (109 款)
  let blockItems: SearchItem[] = []
  if (activeFilter.value === 'all' || activeFilter.value === 'blocks') {
    blockItems = BLOCKS_DATA.filter((b: BlockDoc) => {
      if (!q) return true
      return (
        b.title.toLowerCase().includes(q) ||
        b.name.toLowerCase().includes(q) ||
        b.id.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q) ||
        b.tags.some((t) => t.toLowerCase().includes(q))
      )
    }).map((b: BlockDoc) => ({
      id: `block-${b.id}`,
      type: 'block',
      title: b.name,
      subtitle: `${b.title} (${b.category}) — ${b.description.slice(0, 50)}...`,
      category: b.category,
      url: `/blocks/${b.id}`,
      icon: LayoutGrid,
    }))
  }

  // 3. 过滤系统动作
  let actionItems: SearchItem[] = []
  if (activeFilter.value === 'all' || activeFilter.value === 'actions') {
    actionItems = quickActions.filter((a) => {
      if (!q) return true
      return (
        a.title.toLowerCase().includes(q) ||
        a.subtitle.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
      )
    })
  }

  // 若无搜索关键词，各取代表性示例
  if (!q) {
    return [
      ...actionItems,
      ...componentItems.slice(0, 8),
      ...blockItems.slice(0, 6),
    ]
  }

  // 有关键词时按类型汇聚返回
  return [...componentItems, ...blockItems, ...actionItems]
})

// 分组展示
const groupedResults = computed(() => {
  const groups: { name: string; type: string; items: SearchItem[] }[] = []
  const comps = searchResults.value.filter((i) => i.type === 'component')
  const blocks = searchResults.value.filter((i) => i.type === 'block')
  const actions = searchResults.value.filter((i) => i.type === 'action')

  if (actions.length > 0) {
    groups.push({ name: '快捷操作', type: 'action', items: actions })
  }
  if (comps.length > 0) {
    groups.push({ name: `组件 (${comps.length})`, type: 'component', items: comps })
  }
  if (blocks.length > 0) {
    groups.push({ name: `场景区块 (${blocks.length})`, type: 'block', items: blocks })
  }

  return groups
})

// 展平后的结果列表（便于键盘上下光标索引）
const flatList = computed(() => searchResults.value)

// 限制键盘上下移动边界
watch(query, () => {
  selectedIndex.value = 0
})

watch(activeFilter, () => {
  selectedIndex.value = 0
})

function close() {
  emit('update:modelValue', false)
  query.value = ''
  selectedIndex.value = 0
}

function handleSelect(item: SearchItem) {
  if (item.action) {
    item.action()
  } else if (item.url) {
    router.push(item.url)
  }
  close()
}

// 键盘控制（上下方向键、回车、Esc）
function handleKeydown(e: KeyboardEvent) {
  if (!props.modelValue) return

  if (e.key === 'Escape') {
    e.preventDefault()
    close()
  } else if (e.key === 'ArrowDown') {
    e.preventDefault()
    if (flatList.value.length > 0) {
      selectedIndex.value = (selectedIndex.value + 1) % flatList.value.length
      scrollToActive()
    }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    if (flatList.value.length > 0) {
      selectedIndex.value = (selectedIndex.value - 1 + flatList.value.length) % flatList.value.length
      scrollToActive()
    }
  } else if (e.key === 'Enter') {
    e.preventDefault()
    const active = flatList.value[selectedIndex.value]
    if (active) {
      handleSelect(active)
    }
  }
}

// 自动滚动到被选中的元素
function scrollToActive() {
  nextTick(() => {
    const el = document.getElementById(`search-item-${selectedIndex.value}`)
    if (el && resultsContainerRef.value) {
      el.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    }
  })
}

// 监听打开状态并自动聚焦输入框
watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      selectedIndex.value = 0
      nextTick(() => {
        searchInputRef.value?.focus()
      })
    }
  }
)

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <teleport to="body">
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 z-[100] flex items-start justify-center p-4 sm:p-6 md:pt-20 bg-black/60 backdrop-blur-md"
        @click.self="close"
      >
        <!-- 弹窗容器主体 (Raycast / Spotlight 超高质感流光面板) -->
        <div
          class="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-zinc-200 bg-white/95 text-zinc-900 shadow-2xl backdrop-blur-2xl dark:border-zinc-800 dark:bg-zinc-950/95 dark:text-zinc-100 flex flex-col max-h-[85vh] transition-colors"
        >
          <!-- 顶部搜索输入框 -->
          <div class="relative flex items-center border-b border-zinc-200/80 px-4 py-3.5 dark:border-zinc-800/80">
            <Search class="h-4 w-4 shrink-0 text-blue-500 mr-3" />
            <input
              ref="searchInputRef"
              v-model="query"
              type="text"
              placeholder="搜索组件、场景区块或操作（支持中英文）..."
              class="h-7 w-full bg-transparent text-sm font-medium text-zinc-900 placeholder:text-zinc-400 outline-none dark:text-white"
            />
            <button
              v-if="query"
              type="button"
              @click="query = ''"
              class="mr-2 p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
              title="清空"
            >
              <X class="h-3.5 w-3.5" />
            </button>
            <kbd
              class="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono font-semibold rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400"
            >
              ESC
            </kbd>
          </div>

          <!-- 快速过滤器标签 (全部 / 组件 / 场景 / 动作) -->
          <div class="flex items-center gap-1.5 px-4 py-2 border-b border-zinc-100 dark:border-zinc-900 bg-zinc-50/70 dark:bg-zinc-900/50 text-xs overflow-x-auto scrollbar-none">
            <span class="text-[11px] text-zinc-400 dark:text-zinc-500 mr-1 shrink-0 font-medium">筛选:</span>
            <button
              type="button"
              @click="activeFilter = 'all'"
              class="px-2.5 py-1 rounded-lg text-xs font-medium transition-colors shrink-0"
              :class="
                activeFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-zinc-600 hover:bg-zinc-200/70 dark:text-zinc-400 dark:hover:bg-zinc-800'
              "
            >
              全部 ({{ flatList.length }})
            </button>
            <button
              type="button"
              @click="activeFilter = 'components'"
              class="px-2.5 py-1 rounded-lg text-xs font-medium transition-colors shrink-0"
              :class="
                activeFilter === 'components'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-zinc-600 hover:bg-zinc-200/70 dark:text-zinc-400 dark:hover:bg-zinc-800'
              "
            >
              组件 ({{ COMPONENTS_DATA.length }})
            </button>
            <button
              type="button"
              @click="activeFilter = 'blocks'"
              class="px-2.5 py-1 rounded-lg text-xs font-medium transition-colors shrink-0"
              :class="
                activeFilter === 'blocks'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-zinc-600 hover:bg-zinc-200/70 dark:text-zinc-400 dark:hover:bg-zinc-800'
              "
            >
              场景区块 ({{ BLOCKS_DATA.length }})
            </button>
            <button
              type="button"
              @click="activeFilter = 'actions'"
              class="px-2.5 py-1 rounded-lg text-xs font-medium transition-colors shrink-0"
              :class="
                activeFilter === 'actions'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-zinc-600 hover:bg-zinc-200/70 dark:text-zinc-400 dark:hover:bg-zinc-800'
              "
            >
              快捷操作
            </button>
          </div>

          <!-- 搜索结果展示区 -->
          <div
            ref="resultsContainerRef"
            class="flex-1 overflow-y-auto p-2 space-y-4 max-h-[50vh] scrollbar-thin"
          >
            <!-- 空状态 -->
            <div
              v-if="flatList.length === 0"
              class="py-14 text-center text-zinc-500 dark:text-zinc-400 text-xs"
            >
              <div class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-900 mb-3 text-zinc-400">
                <Search class="h-6 w-6" />
              </div>
              <p class="font-medium text-sm text-zinc-800 dark:text-zinc-200">没有找到匹配的结果</p>
              <p class="mt-1 text-zinc-400 text-xs">可以试试组件英文名（如 BorderBeam）或中文关键词（如“粒子”“卡片”）</p>
            </div>

            <!-- 分组渲染 -->
            <div
              v-for="group in groupedResults"
              :key="group.name"
              class="space-y-1"
            >
              <div class="px-3 py-1 text-[11px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                {{ group.name }}
              </div>

              <div
                v-for="item in group.items"
                :key="item.id"
                :id="`search-item-${flatList.findIndex((i) => i.id === item.id)}`"
                @click="handleSelect(item)"
                @mouseenter="selectedIndex = flatList.findIndex((i) => i.id === item.id)"
                class="group flex items-center justify-between px-3 py-2 rounded-xl text-xs cursor-pointer transition-all"
                :class="
                  flatList.findIndex((i) => i.id === item.id) === selectedIndex
                    ? 'bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300'
                    : 'text-zinc-700 hover:bg-zinc-100/70 dark:text-zinc-300 dark:hover:bg-zinc-900/70'
                "
              >
                <!-- 左侧图标与文本 -->
                <div class="flex items-center gap-3 min-w-0 flex-1">
                  <div
                    class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-transform group-hover:scale-105"
                    :class="
                      flatList.findIndex((i) => i.id === item.id) === selectedIndex
                        ? 'border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400'
                        : 'border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400'
                    "
                  >
                    <component :is="item.icon" class="h-4 w-4" />
                  </div>

                  <div class="flex flex-col min-w-0 flex-1">
                    <div class="flex items-center gap-2">
                      <span class="font-bold text-zinc-900 dark:text-zinc-100 truncate">
                        {{ item.title }}
                      </span>
                      <span
                        class="px-1.5 py-px rounded text-[10px] font-mono shrink-0 border"
                        :class="
                          item.type === 'component'
                            ? 'bg-blue-50 text-blue-600 border-blue-200/60 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800/60'
                            : item.type === 'block'
                            ? 'bg-purple-50 text-purple-600 border-purple-200/60 dark:bg-purple-950/50 dark:text-purple-300 dark:border-purple-800/60'
                            : 'bg-emerald-50 text-emerald-600 border-emerald-200/60 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800/60'
                        "
                      >
                        {{ item.category }}
                      </span>
                    </div>
                    <span class="text-[11px] text-zinc-400 dark:text-zinc-500 truncate mt-0.5">
                      {{ item.subtitle }}
                    </span>
                  </div>
                </div>

                <!-- 右侧回车直达箭头 -->
                <div
                  class="flex items-center gap-1 shrink-0 ml-3 text-zinc-400 transition-opacity"
                  :class="
                    flatList.findIndex((i) => i.id === item.id) === selectedIndex
                      ? 'opacity-100 text-blue-600 dark:text-blue-400'
                      : 'opacity-0'
                  "
                >
                  <span class="text-[10px] font-mono">跳转</span>
                  <CornerDownLeft class="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          </div>

          <!-- 底部快捷键指南 -->
          <div class="flex items-center justify-between border-t border-zinc-200/80 px-4 py-2.5 text-[11px] text-zinc-400 dark:border-zinc-800/80 dark:text-zinc-500 bg-zinc-50/80 dark:bg-zinc-900/60 font-mono">
            <div class="flex items-center gap-3">
              <span class="inline-flex items-center gap-1">
                <kbd class="rounded border border-zinc-200 px-1 py-0.5 bg-white dark:border-zinc-700 dark:bg-zinc-800">↑</kbd>
                <kbd class="rounded border border-zinc-200 px-1 py-0.5 bg-white dark:border-zinc-700 dark:bg-zinc-800">↓</kbd>
                <span>选择</span>
              </span>
              <span class="inline-flex items-center gap-1">
                <kbd class="rounded border border-zinc-200 px-1 py-0.5 bg-white dark:border-zinc-700 dark:bg-zinc-800">↵</kbd>
                <span>打开</span>
              </span>
              <span class="inline-flex items-center gap-1">
                <kbd class="rounded border border-zinc-200 px-1 py-0.5 bg-white dark:border-zinc-700 dark:bg-zinc-800">ESC</kbd>
                <span>退出</span>
              </span>
            </div>
            <div class="text-[10px] hidden sm:block">
              共 {{ COMPONENTS_DATA.length }} 个组件 · {{ BLOCKS_DATA.length }} 个场景区块
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>
