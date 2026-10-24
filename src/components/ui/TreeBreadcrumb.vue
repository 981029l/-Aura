<script setup lang="ts">
import { ref } from 'vue'
import { Folder, FolderOpen, ChevronRight, Home, Copy, Check, ChevronDown, Layers } from 'lucide-vue-next'

interface BreadcrumbItem {
  id: string
  label: string
  siblings?: string[]
}

interface Props {
  initialPath?: BreadcrumbItem[]
}

const props = withDefaults(defineProps<Props>(), {
  initialPath: () => [
    { id: 'root', label: 'aura-ui' },
    { id: 'packages', label: 'packages', siblings: ['packages', 'apps', 'tooling'] },
    { id: 'core', label: 'core', siblings: ['core', 'tokens', 'compiler'] },
    { id: 'src', label: 'src' },
    { id: 'components', label: 'components', siblings: ['components', 'hooks', 'utils', 'styles'] },
    { id: 'ui', label: 'ui', siblings: ['ui', 'layout', 'blocks'] },
    { id: 'file', label: 'TreeBreadcrumb.vue' },
  ],
})

const activeDropdown = ref<string | null>(null)
const items = ref<BreadcrumbItem[]>(JSON.parse(JSON.stringify(props.initialPath)))
const isCopied = ref(false)

const toggleDropdown = (id: string) => {
  activeDropdown.value = activeDropdown.value === id ? null : id
}

const selectSibling = (item: BreadcrumbItem, newLabel: string) => {
  item.label = newLabel
  activeDropdown.value = null
}

const copyFullPath = async () => {
  const pathString = items.value.map(i => i.label).join('/')
  try {
    await navigator.clipboard.writeText(pathString)
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 2000)
  } catch {
    // fallback
  }
}
</script>

<template>
  <div class="relative w-full max-w-2xl mx-auto rounded-3xl p-6 sm:p-8 overflow-visible transition-all duration-300 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl font-sans">
    <!-- Header -->
    <div class="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
      <div class="flex items-center gap-2">
        <Layers class="w-4 h-4 text-blue-500" />
        <span class="text-xs font-mono font-semibold tracking-wider text-slate-700 dark:text-slate-300 uppercase">
          WORKSPACE TREE EXPLORER
        </span>
      </div>

      <button
        @click="copyFullPath"
        class="flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-mono transition-all border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:border-blue-500 hover:text-blue-500"
      >
        <Check v-if="isCopied" class="w-3.5 h-3.5 text-emerald-500" />
        <Copy v-else class="w-3.5 h-3.5" />
        <span>{{ isCopied ? 'Path Copied!' : 'Copy Path' }}</span>
      </button>
    </div>

    <!-- Breadcrumb Bar -->
    <div class="my-6 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center gap-1.5 text-xs font-mono">
      <!-- Root Home Icon -->
      <button class="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
        <Home class="w-3.5 h-3.5" />
      </button>

      <ChevronRight class="w-3.5 h-3.5 text-slate-400 select-none" />

      <!-- Breadcrumb Nodes -->
      <template v-for="(item, idx) in items" :key="item.id">
        <div class="relative inline-flex items-center">
          <!-- Item Pill Button -->
          <button
            @click="item.siblings ? toggleDropdown(item.id) : null"
            class="group inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl transition-all"
            :class="[
              idx === items.length - 1
                ? 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-bold border border-blue-500/30'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-800'
            ]"
          >
            <FolderOpen v-if="idx < items.length - 1" class="w-3.5 h-3.5 text-amber-500" />
            <Folder v-else class="w-3.5 h-3.5 text-blue-500" />

            <span>{{ item.label }}</span>

            <!-- Sibling Dropdown trigger icon -->
            <ChevronDown
              v-if="item.siblings"
              class="w-3 h-3 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-transform duration-200"
              :class="{ 'rotate-180 text-blue-500': activeDropdown === item.id }"
            />
          </button>

          <!-- Dropdown Popover for Siblings -->
          <div
            v-if="activeDropdown === item.id && item.siblings"
            class="absolute top-full left-0 mt-1.5 w-44 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-1.5 z-50 text-xs backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150"
          >
            <div class="px-2 py-1 text-[10px] font-mono text-slate-400 uppercase">Switch Sibling</div>
            <button
              v-for="s in item.siblings"
              :key="s"
              @click="selectSibling(item, s)"
              class="w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl transition-colors text-left font-mono"
              :class="s === item.label
                ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-bold'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'"
            >
              <div class="flex items-center gap-1.5">
                <Folder class="w-3 h-3 text-amber-500" />
                <span>{{ s }}</span>
              </div>
              <Check v-if="s === item.label" class="w-3 h-3 text-blue-500" />
            </button>
          </div>
        </div>

        <!-- Chevron Separator -->
        <ChevronRight v-if="idx < items.length - 1" class="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 select-none" />
      </template>
    </div>

    <!-- Active Path Bar -->
    <div class="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
      <span>Depth: {{ items.length }} levels</span>
      <span class="text-blue-600 dark:text-blue-400">Target: {{ items[items.length - 1].label }}</span>
    </div>
  </div>
</template>
