<script setup lang="ts">
import { ref, computed, defineAsyncComponent, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import {
  BLOCK_SUITES,
  BLOCKS_DATA,
  saveLastVisitedBlockId,
  type BlockDoc,
  type BlockSuite,
} from '@/data/blocks'
import CodeBlock from '@/components/showcase/CodeBlock.vue'
import {
  Search,
  Monitor,
  Tablet,
  Smartphone,
  Code2,
  Eye,
  Sparkles,
  RotateCcw,
  Terminal,
  Rocket,
  Layers,
  CreditCard,
  MessageSquareQuote,
  Bot,
  LayoutDashboard,
  ShieldCheck,
  PanelBottom,
  ChevronDown,
  ExternalLink,
  LayoutGrid,
  Wifi,
  Signal,
} from 'lucide-vue-next'

const route = useRoute()

// 动态载入所有 Blocks 组件与源码（Vite Glob）
const blockComponents = import.meta.glob('/src/components/blocks/*.vue')
const blockSources = import.meta.glob('/src/components/blocks/*.vue', { query: '?raw', import: 'default' })

// 状态管理
const searchQuery = ref('')
const mobileSidebarOpen = ref(false)
const viewport = ref<'desktop' | 'tablet' | 'mobile'>('desktop')
const bgMode = ref<'default' | 'dark' | 'light'>('default')
const activeTab = ref<'preview' | 'code'>('preview')
const refreshKey = ref(0)
const currentRawCode = ref<string>('')
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

// 当前激活的区块 ID
const currentId = computed(() => {
  return (route.params.id as string) || BLOCKS_DATA[0].id
})

// 当前选中的区块对象
const currentBlock = computed<BlockDoc>(() => {
  const found = BLOCKS_DATA.find((b) => b.id === currentId.value)
  return found || BLOCKS_DATA[0]
})

// 当前区块所属套件
const currentSuite = computed<BlockSuite | undefined>(() => {
  return BLOCK_SUITES.find((s) => s.id === currentBlock.value?.suiteId)
})

// 获取套件图标
function getSuiteIcon(suiteId: string) {
  const map: Record<string, any> = {
    'marketing-hero': Rocket,
    'marketing-features': Layers,
    'marketing-pricing': CreditCard,
    'marketing-testimonials': MessageSquareQuote,
    'ai-consoles': Bot,
    'saas-dashboards': LayoutDashboard,
    'auth-onboarding': ShieldCheck,
    'footers-cta': PanelBottom,
  }
  return map[suiteId] || Sparkles
}

// 侧边栏套件折叠状态管理
const collapsedSuites = ref<Record<string, boolean>>({})

function toggleSuite(suiteId: string) {
  collapsedSuites.value[suiteId] = !collapsedSuites.value[suiteId]
}

const isSuiteCollapsed = (suiteId: string) => !searchQuery.value.trim() && !!collapsedSuites.value[suiteId]

const areAllCollapsed = computed(() => {
  return BLOCK_SUITES.every((suite) => collapsedSuites.value[suite.id])
})

function toggleAllSuites() {
  if (areAllCollapsed.value) {
    // 全部展开
    collapsedSuites.value = {}
  } else {
    // 全部折叠（仅保留当前区块所在套件展开）
    const map: Record<string, boolean> = {}
    for (const suite of BLOCK_SUITES) {
      if (suite.id !== currentBlock.value?.suiteId) {
        map[suite.id] = true
      }
    }
    collapsedSuites.value = map
  }
}

// 获取套件下经过搜索过滤并按 A-Z 严格字母升序排列的区块列表
function getSuiteBlocks(suiteId: string) {
  const query = searchQuery.value.trim().toLowerCase()
  const list = BLOCKS_DATA.filter((block) => {
    if (block.suiteId !== suiteId) return false
    if (!query) return true
    return (
      block.title.toLowerCase().includes(query) ||
      block.name.toLowerCase().includes(query) ||
      block.description.toLowerCase().includes(query) ||
      block.category.toLowerCase().includes(query) ||
      block.tags.some((t) => t.toLowerCase().includes(query))
    )
  })
  return list.sort((a, b) => a.name.localeCompare(b.name, 'en'))
}

// 动态渲染当前选中的 Block 组件
const CurrentBlockAsync = computed(() => {
  const filename = currentBlock.value.blockFilename
  const path = `/src/components/blocks/${filename}`
  const loader = blockComponents[path]
  if (loader) {
    return defineAsyncComponent(loader as any)
  }
  return null
})

// 异步读取当前源码
async function loadSourceCode() {
  const filename = currentBlock.value.blockFilename
  const path = `/src/components/blocks/${filename}`
  const loader = blockSources[path]
  if (loader) {
    try {
      const code = (await loader()) as string
      currentRawCode.value = code
    } catch {
      currentRawCode.value = `// 无法加载 ${filename} 源码`
    }
  } else {
    currentRawCode.value = `<!-- ${filename} 源码未找到 -->`
  }
}

watch(
  () => currentBlock.value.id,
  (newId) => {
    loadSourceCode()
    refreshKey.value++
    mobileSidebarOpen.value = false
    if (newId) {
      saveLastVisitedBlockId(newId)
    }
    const suiteId = currentBlock.value?.suiteId
    if (suiteId && collapsedSuites.value[suiteId]) {
      collapsedSuites.value[suiteId] = false
    }
  },
  { immediate: true }
)

function reloadBlock() {
  refreshKey.value++
}
</script>

<template>
  <div class="mx-auto max-w-7xl px-4 py-6 sm:py-8 sm:px-6 lg:px-8">
    <!-- 移动端专属：场景区块套件快捷选择栏 -->
    <div class="md:hidden mb-4">
      <button
        type="button"
        @click="mobileSidebarOpen = !mobileSidebarOpen"
        class="w-full flex items-center justify-between p-3.5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 shadow-sm backdrop-blur-md transition-all active:scale-[0.99]"
      >
        <div class="flex items-center gap-2.5 min-w-0">
          <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
            <LayoutGrid class="h-4 w-4" />
          </div>
          <div class="flex flex-col text-left min-w-0">
            <span class="text-xs font-bold text-zinc-900 dark:text-zinc-100 truncate">
              {{ currentBlock.name }}
            </span>
            <span class="text-[10px] text-zinc-400 font-mono truncate">
              {{ currentSuite?.name }} · {{ currentBlock.category }}
            </span>
          </div>
        </div>
        <div class="flex items-center gap-1.5 shrink-0 text-xs font-semibold text-blue-600 dark:text-blue-400 pl-2">
          <span>{{ mobileSidebarOpen ? '收起目录' : '选择区块 (109)' }}</span>
          <ChevronDown class="h-3.5 w-3.5 transition-transform duration-200" :class="{ 'rotate-180': mobileSidebarOpen }" />
        </div>
      </button>
    </div>

    <div class="flex flex-col md:flex-row gap-8">
      <!-- ================= 左侧场景区块导航侧边栏（移动端折叠，桌面端固定） ================= -->
      <aside
        :class="[
          'shrink-0 transition-all',
          mobileSidebarOpen ? 'block w-full' : 'hidden md:block md:w-72',
        ]"
      >
        <div class="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto overflow-x-hidden scrollbar-thin rounded-2xl border border-zinc-200/80 bg-white/70 p-4 shadow-sm backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/70">
          <div class="mb-4 flex items-center justify-between pb-3 border-b border-zinc-200/60 dark:border-zinc-800/60 px-1">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                场景套件矩阵
              </span>
              <span class="rounded-full bg-blue-500/10 px-2 py-0.5 text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 border border-blue-500/20">
                {{ BLOCKS_DATA.length }}
              </span>
            </div>
            <!-- 全部折叠/展开快捷按钮 -->
            <button
              type="button"
              @click="toggleAllSuites"
              class="text-xs font-medium text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer select-none focus:outline-none"
            >
              {{ areAllCollapsed ? '全部展开' : '收起其他' }}
            </button>
          </div>

          <!-- 侧边栏快速检索框 -->
          <div class="mb-4 px-1">
            <div class="relative">
              <Search class="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400" />
              <input
                v-model="searchQuery"
                type="text"
                placeholder="搜索 109 款场景区块..."
                class="w-full pl-8 pr-3 py-1.5 text-xs bg-zinc-100/80 dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800 rounded-xl focus:outline-none focus:border-zinc-300 dark:focus:border-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400"
              />
            </div>
          </div>

          <!-- 按 8 大场景套件分组展示 (上下两行中英双语工整排版，彻底消除文字断词折行) -->
          <div class="space-y-2">
            <template v-for="suite in BLOCK_SUITES" :key="suite.id">
              <div
                v-if="getSuiteBlocks(suite.id).length > 0"
                class="space-y-1"
              >
                <!-- 套件可点击折叠头部 -->
                <button
                  type="button"
                  @click="toggleSuite(suite.id)"
                  class="w-full flex items-center justify-between px-2.5 py-2 rounded-xl hover:bg-zinc-100/80 dark:hover:bg-zinc-900/80 transition-colors cursor-pointer group select-none focus:outline-none focus:ring-0 active:bg-zinc-100 dark:active:bg-zinc-800"
                >
                  <!-- 左侧图标与上下工整双语标题 -->
                  <div class="flex items-center gap-2.5 min-w-0">
                    <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-900 text-blue-600 dark:text-blue-400 border border-zinc-200/60 dark:border-zinc-800/80 group-hover:scale-105 transition-transform">
                      <component :is="getSuiteIcon(suite.id)" class="h-3.5 w-3.5" />
                    </div>
                    <div class="flex flex-col text-left min-w-0">
                      <span class="text-xs font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate leading-tight">
                        {{ suite.name }}
                      </span>
                      <span class="text-[9.5px] font-mono tracking-wider text-zinc-400 dark:text-zinc-500 uppercase truncate leading-tight mt-0.5">
                        {{ suite.englishName }}
                      </span>
                    </div>
                  </div>

                  <!-- 右侧数量徽章与展开箭头 -->
                  <div class="flex items-center gap-2 shrink-0 ml-2">
                    <span class="rounded-full bg-zinc-100 dark:bg-zinc-900 px-2 py-0.5 text-[10px] font-mono font-medium text-zinc-500 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-800">
                      {{ getSuiteBlocks(suite.id).length }}
                    </span>
                    <ChevronDown
                      class="h-3.5 w-3.5 text-zinc-400 transition-transform duration-200 group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
                      :class="{ '-rotate-90': isSuiteCollapsed(suite.id) }"
                    />
                  </div>
                </button>

                <!-- 套件内区块链接 (可收起/折叠，字母升序排列) -->
                <nav v-show="!isSuiteCollapsed(suite.id)" class="space-y-0.5 pl-3 border-l border-zinc-200/60 dark:border-zinc-800/60 ml-3 transition-all">
                  <router-link
                    v-for="block in getSuiteBlocks(suite.id)"
                    :key="block.id"
                    :to="`/blocks/${block.id}`"
                    :class="[
                      'flex items-center justify-between rounded-xl px-2.5 py-1.5 text-xs font-medium transition-colors',
                      currentId === block.id
                        ? 'bg-blue-600 text-white font-semibold shadow-sm'
                        : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100',
                    ]"
                  >
                    <span class="min-w-0 flex-1 truncate">{{ block.name }}</span>
                    <span
                      :class="[
                        'text-[9px] rounded px-1.5 py-px shrink-0 ml-1',
                        currentId === block.id
                          ? 'bg-blue-700/80 text-blue-100'
                          : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-400',
                      ]"
                    >
                      {{ block.category }}
                    </span>
                  </router-link>
                </nav>
              </div>
            </template>
          </div>

          <!-- 快速使用提示卡片 -->
          <div class="mt-6 border-t border-zinc-200 dark:border-zinc-800 pt-4 px-2">
            <div class="flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100">
              <Terminal class="h-3.5 w-3.5 text-blue-500" />
              <span>即拷即用 SFC</span>
            </div>
            <p class="mt-1 text-[11px] text-zinc-400">所有场景区块均由原子动效组件深度拼装：</p>
            <div class="mt-2 rounded-lg bg-zinc-900 p-2 font-mono text-[10px] text-zinc-200 select-all break-all">
              src/components/blocks/{{ currentBlock.blockFilename }}
            </div>
          </div>
        </div>
      </aside>

      <!-- ================= 右侧主视窗（与 ComponentPreview 100% 统一） ================= -->
      <main class="min-w-0 flex-1">
        <div class="space-y-4">
          <!-- 区块标题与简介 -->
          <div class="space-y-2">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full" :class="currentSuite?.badgeColor">
                {{ currentSuite?.name }}
              </span>
              <span class="text-xs font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                {{ currentBlock.blockFilename }}
              </span>
              <span
                v-for="tag in currentBlock.tags"
                :key="tag"
                class="text-[10px] px-2 py-0.5 rounded-md font-mono bg-zinc-100 dark:bg-zinc-800/80 text-zinc-500 dark:text-zinc-400"
              >
                #{{ tag }}
              </span>
            </div>
            <div class="flex flex-wrap items-baseline gap-2.5">
              <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-mono">
                {{ currentBlock.name || currentBlock.title }}
              </h2>
              <span
                v-if="currentBlock.name && currentBlock.title && currentBlock.name !== currentBlock.title"
                class="text-sm sm:text-base font-medium text-zinc-500 dark:text-zinc-400"
              >
                {{ currentBlock.title }}
              </span>
            </div>
            <p class="text-sm text-zinc-500 dark:text-zinc-400">
              {{ currentBlock.description }}
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
                  <span>实时效果</span>
                </button>
                <button
                  type="button"
                  :class="[
                    'inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all',
                    activeTab === 'code'
                      ? 'bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100'
                      : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100',
                  ]"
                  @click="activeTab = 'code'"
                >
                  <Code2 class="h-3.5 w-3.5" />
                  <span>组件源码 ({{ currentBlock.blockFilename }})</span>
                </button>
              </div>

              <!-- 仅在预览模式下展示的微调控制栏 -->
              <div v-if="activeTab === 'preview'" class="flex items-center gap-3 text-xs flex-wrap">
                <!-- 响应式视口宽度切换 -->
                <div class="hidden sm:flex items-center gap-1 rounded-md border border-zinc-200 dark:border-zinc-800 p-0.5">
                  <button
                    type="button"
                    :class="[
                      'p-1 rounded transition-colors',
                      viewport === 'desktop'
                        ? 'bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100'
                        : 'text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100',
                    ]"
                    title="桌面全宽 (100%)"
                    @click="viewport = 'desktop'"
                  >
                    <Monitor class="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    :class="[
                      'p-1 rounded transition-colors',
                      viewport === 'tablet'
                        ? 'bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100'
                        : 'text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100',
                    ]"
                    title="平板视口 (768px)"
                    @click="viewport = 'tablet'"
                  >
                    <Tablet class="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    :class="[
                      'p-1 rounded transition-colors',
                      viewport === 'mobile'
                        ? 'bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100'
                        : 'text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100',
                    ]"
                    title="手机视口 (375px)"
                    @click="viewport = 'mobile'"
                  >
                    <Smartphone class="h-3.5 w-3.5" />
                  </button>
                </div>

                <!-- 独立底色切换测试（与 ComponentPreview 完全一致） -->
                <div class="flex items-center gap-1.5">
                  <span class="text-zinc-400">视窗底色：</span>
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
                      自适应
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
                      亮白
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
                      暗黑
                    </button>
                  </div>
                </div>

                <!-- 重新播放按钮 -->
                <button
                  type="button"
                  class="inline-flex items-center gap-1 rounded-md p-1.5 text-zinc-500 transition-colors hover:bg-zinc-200/60 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                  title="重新触发动效"
                  @click="reloadBlock"
                >
                  <RotateCcw class="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            <!-- 内容主体 -->
            <div class="relative">
              <!-- 1. 实时效果视窗 -->
              <div
                v-show="activeTab === 'preview'"
                :class="[
                  'relative flex min-h-[420px] w-full items-center justify-center overflow-hidden',
                  isDark ? 'dark bg-black text-zinc-100' : 'bg-zinc-100/80 text-zinc-900',
                  viewport !== 'desktop' ? 'p-3 sm:p-6' : '',
                ]"
              >
                <!-- 模式 A：桌面全宽（直接在宿主上下文中渲染组件，零通信延迟） -->
                <div
                  v-if="viewport === 'desktop'"
                  :key="refreshKey"
                  class="w-full mx-auto overflow-hidden max-w-full"
                >
                  <component :is="CurrentBlockAsync" v-if="CurrentBlockAsync" />
                </div>

                <!-- 模式 B：真实独立小屏沙箱视口（iframe 隔离，完美触发真实 @media 媒体查询，彻底杜绝大屏挤压失真） -->
                <div
                  v-else
                  class="flex flex-col items-center w-full py-2"
                >
                  <div
                    class="mb-3 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 font-mono"
                    :style="{ width: viewport === 'mobile' ? '375px' : '768px', maxWidth: '100%' }"
                  >
                    <div class="flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span class="font-bold text-zinc-700 dark:text-zinc-200">
                        {{ viewport === 'mobile' ? '独立手机真实视口 (375 × 700)' : '独立平板真实视口 (768 × 700)' }}
                      </span>
                    </div>
                    <a
                      :href="`/preview/block/${currentBlock.id}?dark=${isDark}`"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                      title="在新标签页全屏独立查看"
                    >
                      <span>全屏独立视口</span>
                      <ExternalLink class="h-3 w-3" />
                    </a>
                  </div>

                  <!-- 仿真设备外壳 + 真实沙箱 iframe (GPU 硬件级双重裁剪，绝不穿透圆角) -->
                  <div
                    :class="[
                      'relative border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-black shadow-2xl transition-all',
                      viewport === 'mobile'
                        ? 'w-[375px] max-w-full h-[720px] rounded-[2.5rem] ring-8 ring-zinc-200/90 dark:ring-zinc-800/90'
                        : 'w-[768px] max-w-full h-[720px] rounded-3xl ring-8 ring-zinc-200/90 dark:ring-zinc-800/90',
                    ]"
                    :style="{
                      clipPath: viewport === 'mobile' ? 'inset(0 round 2.5rem)' : 'inset(0 round 1.5rem)',
                      WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                      isolation: 'isolate',
                      transform: 'translateZ(0)',
                    }"
                  >
                    <!-- 顶部拟真 iPhone 状态栏与灵动岛（仅手机视口展示） -->
                    <div
                      v-if="viewport === 'mobile'"
                      class="absolute top-0 inset-x-0 h-10 pointer-events-none z-30 flex items-center justify-between px-7 select-none backdrop-blur-sm bg-black/10 dark:bg-black/20"
                    >
                      <span class="text-[11px] font-semibold font-mono tracking-tight text-zinc-400">9:41</span>
                      <!-- 灵动岛药丸 -->
                      <div class="w-24 h-5 bg-black rounded-full border border-zinc-800/80 shadow-sm flex items-center justify-center gap-1.5 px-2">
                        <div class="w-2.5 h-2.5 rounded-full bg-zinc-900 border border-zinc-800"></div>
                        <div class="w-2 h-2 rounded-full bg-blue-500/30"></div>
                      </div>
                      <!-- 状态指示 (信号 / WiFi / 电池) -->
                      <div class="flex items-center gap-1.5 text-zinc-400 text-[10px]">
                        <Signal class="w-3 h-3" />
                        <Wifi class="w-3 h-3" />
                        <div class="w-4 h-[0.55rem] rounded-[2px] border border-zinc-400 p-[1px] flex items-center">
                          <div class="w-2 h-full bg-zinc-400 rounded-[1px]"></div>
                        </div>
                      </div>
                    </div>

                    <!-- 真实沙箱 iframe (硬件级圆角裁切，绝对不穿透) -->
                    <iframe
                      :key="`${currentBlock.id}-${bgMode}-${isDark}-${refreshKey}`"
                      :src="`/preview/block/${currentBlock.id}?dark=${isDark}`"
                      class="w-full h-full border-0 block"
                      :style="{
                        clipPath: viewport === 'mobile' ? 'inset(0 round 2.5rem)' : 'inset(0 round 1.5rem)',
                        borderRadius: viewport === 'mobile' ? '2.5rem' : '1.5rem',
                        transform: 'translateZ(0)',
                      }"
                      loading="lazy"
                    />

                    <!-- 底部拟真 Home Indicator 横条 -->
                    <div v-if="viewport === 'mobile'" class="absolute bottom-1.5 inset-x-0 pointer-events-none z-30 flex justify-center">
                      <div class="w-32 h-1 rounded-full bg-zinc-400/30"></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 2. 组件源码 Tab（复用 CodeBlock 组件） -->
              <div v-show="activeTab === 'code'" class="p-4">
                <CodeBlock
                  :code="currentRawCode"
                  :filename="currentBlock.blockFilename"
                  language="html"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
