<script setup lang="ts">
import { ref } from 'vue'
import { LayoutGrid, BarChart3, Shield, Cable, CreditCard } from 'lucide-vue-next'

interface TabItem {
  id: string
  label: string
  icon: any
  badge?: number
}

interface Props {
  defaultTab?: string
}

const props = withDefaults(defineProps<Props>(), {
  defaultTab: 'analytics',
})

const tabs: TabItem[] = [
  { id: 'overview', label: 'Overview', icon: LayoutGrid },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, badge: 3 },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'integrations', label: 'Integrations', icon: Cable },
  { id: 'billing', label: 'Billing', icon: CreditCard },
]

const activeTab = ref(props.defaultTab)
</script>

<template>
  <div class="relative w-full max-w-xl mx-auto rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-300 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl font-sans select-none">
    <!-- Header -->
    <div class="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
      <div>
        <h3 class="text-sm font-semibold text-slate-800 dark:text-slate-100">
          Floating Capsule Tab Navigation
        </h3>
        <p class="text-xs text-slate-400">
          Smooth spring morph pill with live badge indicators
        </p>
      </div>

      <div class="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
        Active: {{ activeTab.toUpperCase() }}
      </div>
    </div>

    <!-- Capsule Tab Bar Container -->
    <div class="relative p-1.5 rounded-2xl bg-slate-100/80 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-1 overflow-x-auto">
      <button
        v-for="t in tabs"
        :key="t.id"
        @click="activeTab = t.id"
        class="relative flex-1 min-w-[80px] flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold transition-all duration-300 z-10"
        :class="activeTab === t.id
          ? 'text-white shadow-md'
          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'"
      >
        <!-- Background Pill for Active Tab -->
        <div
          v-if="activeTab === t.id"
          class="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 -z-10 shadow-lg shadow-indigo-500/25 transition-all duration-300"
        ></div>

        <component :is="t.icon" class="w-3.5 h-3.5" />
        <span class="truncate">{{ t.label }}</span>

        <!-- Badge -->
        <span
          v-if="t.badge"
          class="px-1.5 py-px rounded-full text-[9px] font-mono font-bold"
          :class="activeTab === t.id ? 'bg-white text-indigo-700' : 'bg-indigo-500 text-white'"
        >
          {{ t.badge }}
        </span>
      </button>
    </div>

    <!-- Tab View Preview Card -->
    <div class="mt-6 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/40 text-center">
      <div class="inline-flex p-3 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-2">
        <component :is="tabs.find(t => t.id === activeTab)?.icon" class="w-6 h-6" />
      </div>
      <h4 class="text-sm font-bold text-slate-800 dark:text-slate-100 capitalize">
        {{ activeTab }} Viewport
      </h4>
      <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
        Seamlessly rendered component panel for {{ activeTab }} module.
      </p>
    </div>
  </div>
</template>
