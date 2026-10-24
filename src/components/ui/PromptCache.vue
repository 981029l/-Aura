<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import {
  Database,
  Coins,
  Clock,
  Zap,
} from 'lucide-vue-next'

export interface PromptCacheProps {
  title?: string
  cachedTokens?: number
  uncachedTokens?: number
  class?: string
}

const props = withDefaults(defineProps<PromptCacheProps>(), {
  title: '',
  cachedTokens: 64000,
  uncachedTokens: 1250,
})

const isCacheEnabled = ref(true)

const costWithoutCache = 0.194
const costWithCache = 0.021
const ttftWithoutCache = 1820
const ttftWithCache = 210
</script>

<template>
  <div
    :class="
      cn(
        'w-full max-w-4xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6',
        props.class
      )
    "
  >
    <!-- 顶部状态栏 -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-100 pb-3 dark:border-zinc-800/80">
      <div class="flex items-center gap-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
        <Database class="h-4 w-4 text-emerald-500" />
        <span>{{ props.title || '提示词缓存' }}</span>
      </div>

      <!-- 启用/关闭缓存对比开关 -->
      <div class="flex items-center gap-2">
        <button
          type="button"
          @click="isCacheEnabled = !isCacheEnabled"
          :class="[
            'inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold shadow-sm transition-all active:scale-95 cursor-pointer',
            isCacheEnabled
              ? 'bg-emerald-600 text-white hover:bg-emerald-500'
              : 'bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300',
          ]"
        >
          <Zap class="h-3.5 w-3.5" />
          <span>{{ isCacheEnabled ? '缓存已开启（这部分费用降低约 90%）' : '缓存未开启（每次重新计算）' }}</span>
        </button>
      </div>
    </div>

    <!-- 缓存前缀与动态后缀分段视图 -->
    <div class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <!-- 共享前缀缓存块 (占 3 列) -->
        <div
          :class="[
            'md:col-span-3 rounded-xl border p-4 transition-all duration-300 relative overflow-hidden',
            isCacheEnabled
              ? 'border-emerald-500/50 bg-emerald-500/10 dark:border-emerald-500/40'
              : 'border-zinc-200 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/40',
          ]"
        >
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <span
                :class="[
                  'h-2 w-2 rounded-full',
                  isCacheEnabled ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-400',
                ]"
              />
              <span class="font-mono text-xs font-bold text-zinc-900 dark:text-white">
                SHARED PREFIX (SYSTEM + DOCS + TOOLS)
              </span>
            </div>

            <span
              v-if="isCacheEnabled"
              class="rounded-md bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] font-black text-emerald-700 dark:text-emerald-300 border border-emerald-500/30"
            >
              WARM CACHE HIT (90% OFF)
            </span>
          </div>

          <p class="font-mono text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed truncate">
            &lt;system_instructions&gt; Aura UI 2.0 Motion Specification, Design Tokens, 88 Components Definition...
          </p>

          <div class="mt-3 flex items-center gap-3 font-mono text-[11px] text-zinc-500">
            <span>缓存部分：<strong>{{ (props.cachedTokens / 1000).toFixed(0) }}k Tokens</strong></span>
            <span>·</span>
            <span>单价：<strong>{{ isCacheEnabled ? '$0.30 / M' : '$3.00 / M' }}</strong></span>
          </div>
        </div>

        <!-- 动态增量后缀块 (占 1 列) -->
        <div class="rounded-xl border border-blue-500/40 bg-blue-500/10 p-4 dark:border-blue-500/30 flex flex-col justify-between">
          <div>
            <span class="font-mono text-xs font-bold text-blue-700 dark:text-blue-300 block mb-1">
              DYNAMIC USER QUERY
            </span>
            <p class="font-mono text-xs text-zinc-600 dark:text-zinc-400 truncate">
              "帮我总结这份文档的要点"
            </p>
          </div>

          <div class="mt-4 font-mono text-[11px] text-zinc-500">
            <span>新增：<strong>{{ props.uncachedTokens }} Tokens</strong></span>
          </div>
        </div>
      </div>

      <!-- 核心指标收益对比卡片 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div class="rounded-xl border border-zinc-200/80 bg-zinc-50/70 p-4 dark:border-zinc-800/80 dark:bg-zinc-900/50 flex items-center justify-between">
          <div class="space-y-1">
            <span class="text-xs text-zinc-500 font-medium">单次调用费用</span>
            <div class="flex items-baseline gap-2">
              <span class="text-2xl font-black text-zinc-900 dark:text-white font-mono">
                ${{ (isCacheEnabled ? costWithCache : costWithoutCache).toFixed(3) }}
              </span>
              <span v-if="isCacheEnabled" class="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                -89.2%
              </span>
            </div>
          </div>
          <Coins class="h-6 w-6 text-emerald-500" />
        </div>

        <div class="rounded-xl border border-zinc-200/80 bg-zinc-50/70 p-4 dark:border-zinc-800/80 dark:bg-zinc-900/50 flex items-center justify-between">
          <div class="space-y-1">
            <span class="text-xs text-zinc-500 font-medium">首字生成延迟</span>
            <div class="flex items-baseline gap-2">
              <span class="text-2xl font-black text-zinc-900 dark:text-white font-mono">
                {{ isCacheEnabled ? ttftWithCache : ttftWithoutCache }}ms
              </span>
              <span v-if="isCacheEnabled" class="text-xs font-bold text-blue-600 dark:text-blue-400">
                约快 8.6 倍
              </span>
            </div>
          </div>
          <Clock class="h-6 w-6 text-blue-500" />
        </div>
      </div>
    </div>
  </div>
</template>
