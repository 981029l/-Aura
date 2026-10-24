<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import { cn } from '@/lib/utils'
import { Search, X, Check } from 'lucide-vue-next'

export interface SearchResultItem {
  id: string
  title: string
  category: string
}

export interface ExpandingSearchProps {
  modelValue?: string
  placeholder?: string
  results?: SearchResultItem[]
  class?: string
}

const props = withDefaults(defineProps<ExpandingSearchProps>(), {
  modelValue: '',
  placeholder: '搜索组件或文档...',
  results: () => [
    { id: '1', title: 'BorderBeam 流光边框', category: 'Borders & Cards' },
    { id: '2', title: 'AgentStatus 智能体状态', category: 'AI Native' },
    { id: '3', title: 'MagneticButton 磁吸按钮', category: 'Tactile Actions' },
    { id: '4', title: 'Globe3D 3D 地球', category: 'Space & 3D' },
  ],
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'select', item: SearchResultItem): void
}>()

const isExpanded = ref(false)
const showDropdown = ref(false)
const searchQuery = ref(props.modelValue)
const selectedId = ref<string | null>(null)
const inputRef = ref<HTMLInputElement | null>(null)

// 实时过滤推荐结果（若当前内容恰好是已选中项的完整标题，则展示全部以便切换）
const filteredResults = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return props.results
  const isExactSelected = props.results.some(
    (r) => r.id === selectedId.value && r.title.toLowerCase() === q
  )
  if (isExactSelected) return props.results
  return props.results.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
  )
})

async function expandSearch() {
  isExpanded.value = true
  showDropdown.value = true
  await nextTick()
  if (inputRef.value) {
    inputRef.value.focus()
  }
}

function handleInput() {
  showDropdown.value = true
  emit('update:modelValue', searchQuery.value)
}

function selectItem(item: SearchResultItem) {
  searchQuery.value = item.title
  selectedId.value = item.id
  showDropdown.value = false
  emit('update:modelValue', item.title)
  emit('select', item)
}

function handleClearOrClose() {
  if (searchQuery.value) {
    searchQuery.value = ''
    selectedId.value = null
    showDropdown.value = true
    emit('update:modelValue', '')
    inputRef.value?.focus()
  } else {
    collapseSearch()
  }
}

function collapseSearch() {
  isExpanded.value = false
  showDropdown.value = false
  searchQuery.value = ''
  selectedId.value = null
  emit('update:modelValue', '')
}
</script>

<template>
  <div
    :class="
      cn(
        'relative inline-flex items-center select-none font-sans',
        props.class
      )
    "
  >
    <!-- 收起态: 紧凑圆点图标按钮 -->
    <button
      v-if="!isExpanded"
      type="button"
      @click="expandSearch"
      class="flex h-10 w-10 items-center justify-center rounded-2xl border border-zinc-200/90 bg-white/90 text-zinc-600 shadow-sm backdrop-blur-xl hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800/90 dark:bg-zinc-950/90 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 transition-all cursor-pointer active:scale-95"
      title="展开搜索"
    >
      <Search class="h-4 w-4" />
    </button>

    <!-- 展开态: 平滑膨胀搜索输入胶囊 -->
    <div
      v-else
      class="relative flex w-72 sm:w-80 items-center rounded-2xl border border-zinc-200 bg-white shadow-lg backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950 animate-expand-in"
    >
      <Search class="ml-3 h-4 w-4 text-zinc-400 shrink-0" />

      <input
        ref="inputRef"
        v-model="searchQuery"
        type="text"
        :placeholder="props.placeholder"
        @click="showDropdown = true"
        @input="handleInput"
        @keydown.escape="collapseSearch"
        class="w-full bg-transparent py-2.5 pl-2.5 pr-8 text-xs font-medium text-zinc-900 placeholder-zinc-400 outline-none dark:text-white"
      />

      <button
        type="button"
        @click="handleClearOrClose"
        class="mr-2 flex h-6 w-6 items-center justify-center rounded-lg text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer"
        :title="searchQuery ? '清空内容' : '关闭搜索'"
      >
        <X class="h-3.5 w-3.5" />
      </button>

      <!-- 搜索结果智能下拉推荐面板 -->
      <div
        v-if="isExpanded && showDropdown"
        class="absolute top-12 left-0 right-0 overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/95 p-2 shadow-xl backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 z-50 animate-fade-down"
      >
        <div class="px-2 py-1 text-[10px] font-mono font-bold text-zinc-400">
          SUGGESTED COMPONENTS
        </div>

        <div v-if="filteredResults.length > 0" class="space-y-1 mt-1">
          <div
            v-for="item in filteredResults"
            :key="item.id"
            @click="selectItem(item)"
            :class="[
              'flex items-center justify-between rounded-xl px-2.5 py-2 text-xs font-medium cursor-pointer transition-colors',
              selectedId === item.id
                ? 'bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400'
                : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900',
            ]"
          >
            <div class="flex items-center gap-1.5 min-w-0">
              <Check v-if="selectedId === item.id" class="h-3.5 w-3.5 shrink-0 text-blue-500" />
              <span class="truncate">{{ item.title }}</span>
            </div>
            <span class="rounded bg-zinc-100 px-1.5 py-0.5 text-[9px] font-mono text-zinc-400 dark:bg-zinc-800 shrink-0 ml-2">
              {{ item.category }}
            </span>
          </div>
        </div>

        <div v-else class="px-2.5 py-4 text-center text-xs text-zinc-400">
          没有找到匹配的组件
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes expand-in {
  from { width: 40px; opacity: 0.5; }
  to { width: 320px; opacity: 1; }
}
.animate-expand-in {
  animation: expand-in 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes fade-down {
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-down {
  animation: fade-down 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
