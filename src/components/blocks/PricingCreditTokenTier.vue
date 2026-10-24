<script setup lang="ts">
import { Coins, ArrowRight } from 'lucide-vue-next'
import PromptCache from '@/components/ui/PromptCache.vue'

const tokenPacks = [
  { name: '100M Tokens 点卡包', price: '$25', discount: '基础原价', badge: '起步包' },
  { name: '500M Tokens 储值包', price: '$99', discount: '省 20%', badge: '热门选择', popular: true },
  { name: '2B Tokens 算力池包', price: '$349', discount: '省 30%', badge: '大宗优惠' },
  { name: '10B Tokens 独占算力池', price: '$1,490', discount: '省 40%', badge: '企业定制' },
]
</script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-4">
          <Coins class="w-3.5 h-3.5" />
          <span>大模型 Token 预充值 · 阶梯式点卡</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          AI Token 弹性点卡
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500">
            配合 Prompt 缓存立省 90%
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          永不过期的预付点卡机制。配合前缀缓存加速（Prompt Caching），重复上下文仅需十分之一费用。
        </p>
      </div>

      <!-- 四档点卡横向网格 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12 text-left">
        <div
          v-for="pack in tokenPacks"
          :key="pack.name"
          :class="[
            'p-5 rounded-2xl border flex flex-col justify-between transition-all duration-300',
            pack.popular
              ? 'border-2 border-emerald-500 bg-white dark:bg-zinc-900 shadow-xl'
              : 'border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 shadow-sm',
          ]"
        >
          <div>
            <div class="flex items-center justify-between text-xs font-mono font-bold mb-3">
              <span class="text-zinc-500">{{ pack.badge }}</span>
              <span class="text-emerald-500 font-bold">{{ pack.discount }}</span>
            </div>
            <h4 class="text-sm font-bold text-zinc-900 dark:text-white">{{ pack.name }}</h4>
            <div class="mt-4 text-2xl font-black font-mono text-zinc-900 dark:text-white">{{ pack.price }}</div>
          </div>
          <button class="mt-6 w-full py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5">
            <span>选购点卡包</span>
            <ArrowRight class="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <!-- 提示词缓存节省计算演示：集成 PromptCache 原子组件 -->
      <div class="max-w-4xl mx-auto">
        <PromptCache
          title="前缀缓存加速与资费节省实时测算 (Prompt Cache)"
          class="shadow-xl"
        />
      </div>
    </div>
  </div>
</template>
