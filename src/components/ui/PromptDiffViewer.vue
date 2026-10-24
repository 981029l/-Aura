<script setup lang="ts">
import { ref, computed } from 'vue'
import { GitCompare, Columns, Rows, Check, Copy, Sparkles, RefreshCw, ArrowRight } from 'lucide-vue-next'

interface Props {
  title?: string
  initialOriginal?: string
  initialModified?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'AI PROMPT VERSION DIFF',
  initialOriginal: `You are an AI customer support assistant for Aura Cloud.
Your tone must be polite, helpful, and concise.
Always ask for the user's order ID before looking up any details.
If the customer asks for a refund, escalate to tier 2 human agent.`,
  initialModified: `You are an autonomous AI customer support specialist for Aura Cloud v2.
Your tone must be empathetic, highly proactive, and crystal clear.
Always verify the user's workspace ID and order ID via secure token.
If the customer qualifies for instant refund under $50, process it autonomously.
Otherwise, escalate to tier 2 human agent with conversation summary.`,
})

const viewMode = ref<'split' | 'unified'>('split')
const originalText = ref(props.initialOriginal)
const modifiedText = ref(props.initialModified)
const isCopied = ref(false)

const originalLines = computed(() => originalText.value.split('\n'))
const modifiedLines = computed(() => modifiedText.value.split('\n'))

const diffStats = computed(() => {
  const origWords = originalText.value.trim().split(/\s+/).length
  const modWords = modifiedText.value.trim().split(/\s+/).length
  return {
    origTokens: Math.round(origWords * 1.3),
    modTokens: Math.round(modWords * 1.3),
    deltaTokens: Math.round((modWords - origWords) * 1.3),
  }
})

const copyModified = async () => {
  try {
    await navigator.clipboard.writeText(modifiedText.value)
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 2000)
  } catch {
    // fallback
  }
}

const resetDefaults = () => {
  originalText.value = props.initialOriginal
  modifiedText.value = props.initialModified
}
</script>

<template>
  <div class="relative w-full max-w-3xl mx-auto rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-300 border border-slate-200 dark:border-indigo-900/40 bg-white dark:bg-slate-950 shadow-2xl font-sans">
    <!-- Header with Stats & Actions -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
      <div class="flex items-center gap-3">
        <div class="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/40">
          <GitCompare class="w-5 h-5" />
        </div>
        <div>
          <h3 class="text-sm font-mono font-bold tracking-wider text-slate-800 dark:text-slate-100 uppercase">
            {{ props.title }}
          </h3>
          <div class="flex items-center gap-2 mt-0.5 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span>Tokens: {{ diffStats.origTokens }}</span>
            <ArrowRight class="w-3 h-3 text-slate-400" />
            <span class="text-indigo-600 dark:text-indigo-400 font-semibold">{{ diffStats.modTokens }}</span>
            <span :class="diffStats.deltaTokens >= 0 ? 'text-emerald-500' : 'text-rose-500'">
              ({{ diffStats.deltaTokens >= 0 ? '+' : '' }}{{ diffStats.deltaTokens }})
            </span>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <div class="flex items-center gap-2">
        <div class="flex items-center bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-medium">
          <button
            @click="viewMode = 'split'"
            class="flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all"
            :class="viewMode === 'split' ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-bold shadow-sm' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'"
          >
            <Columns class="w-3.5 h-3.5" />
            <span>Split</span>
          </button>
          <button
            @click="viewMode = 'unified'"
            class="flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all"
            :class="viewMode === 'unified' ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-bold shadow-sm' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'"
          >
            <Rows class="w-3.5 h-3.5" />
            <span>Unified</span>
          </button>
        </div>

        <button
          @click="copyModified"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20 active:scale-95 transition-all"
        >
          <Check v-if="isCopied" class="w-3.5 h-3.5 text-emerald-300" />
          <Copy v-else class="w-3.5 h-3.5" />
          <span>{{ isCopied ? 'Copied!' : 'Copy New' }}</span>
        </button>
      </div>
    </div>

    <!-- Main Diff Viewport -->
    <div class="my-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 overflow-hidden font-mono text-xs">
      <!-- Split View Mode -->
      <div v-if="viewMode === 'split'" class="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
        <!-- Original Column -->
        <div class="flex flex-col">
          <div class="px-4 py-2 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] font-semibold text-slate-600 dark:text-slate-300">
            <span>VERSION 1.0 (BASELINE)</span>
            <span class="text-rose-500 font-mono">- DELETED / MODIFIED</span>
          </div>
          <div class="p-3 space-y-1 overflow-x-auto min-h-[180px]">
            <div
              v-for="(line, idx) in originalLines"
              :key="'orig-'+idx"
              class="flex items-start gap-2 p-1 rounded transition-colors text-slate-700 dark:text-slate-300"
              :class="line !== modifiedLines[idx] ? 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-l-2 border-rose-500 pl-2' : ''"
            >
              <span class="w-5 text-right select-none text-slate-400 text-[10px]">{{ idx + 1 }}</span>
              <span class="flex-1 break-words leading-relaxed">{{ line }}</span>
            </div>
          </div>
        </div>

        <!-- Modified Column -->
        <div class="flex flex-col">
          <div class="px-4 py-2 bg-indigo-50/50 dark:bg-indigo-950/40 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] font-semibold text-indigo-700 dark:text-indigo-300">
            <span>VERSION 2.0 (REFINED)</span>
            <span class="text-emerald-500 font-mono">+ ADDED / OPTIMIZED</span>
          </div>
          <div class="p-3 space-y-1 overflow-x-auto min-h-[180px]">
            <div
              v-for="(line, idx) in modifiedLines"
              :key="'mod-'+idx"
              class="flex items-start gap-2 p-1 rounded transition-colors text-slate-800 dark:text-slate-200"
              :class="line !== originalLines[idx] ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-l-2 border-emerald-500 pl-2' : ''"
            >
              <span class="w-5 text-right select-none text-slate-400 text-[10px]">{{ idx + 1 }}</span>
              <span class="flex-1 break-words leading-relaxed font-medium">{{ line }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Unified View Mode -->
      <div v-else class="p-4 space-y-2">
        <div class="text-[11px] text-slate-400 pb-2 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
          <Sparkles class="w-3.5 h-3.5 text-indigo-500" />
          <span>Unified Token Diff Feed</span>
        </div>
        <div
          v-for="(line, idx) in modifiedLines"
          :key="'uni-'+idx"
          class="flex items-start gap-2 p-1.5 rounded transition-colors"
          :class="line !== originalLines[idx] ? 'bg-emerald-500/10 text-emerald-800 dark:text-emerald-200 border-l-2 border-emerald-500' : 'text-slate-700 dark:text-slate-300'"
        >
          <span class="text-emerald-500 font-bold select-none" v-if="line !== originalLines[idx]">+</span>
          <span class="text-slate-400 font-bold select-none" v-else>•</span>
          <span class="flex-1 break-words leading-relaxed">{{ line }}</span>
        </div>
      </div>
    </div>

    <!-- Footer Insights -->
    <div class="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
      <div class="flex items-center gap-2">
        <span class="inline-block w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
        <span>Semantic Fidelity: 99.4% Verified</span>
      </div>
      <button
        @click="resetDefaults"
        class="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
      >
        <RefreshCw class="w-3.5 h-3.5" />
        <span>Reset Baseline</span>
      </button>
    </div>
  </div>
</template>
