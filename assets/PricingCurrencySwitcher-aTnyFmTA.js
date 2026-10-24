const n=`<script setup lang="ts">
import { ref, computed } from 'vue'
import { Globe, ArrowRight } from 'lucide-vue-next'
import MoneyInput from '@/components/ui/MoneyInput.vue'

const currentCurrency = ref('USD')
const inputBudget = ref(2500)

const exchangeRates: Record<string, { rate: number; symbol: string; label: string }> = {
  USD: { rate: 1.0, symbol: '$', label: '美元 (USD)' },
  CNY: { rate: 7.24, symbol: '¥', label: '人民币 (CNY)' },
  EUR: { rate: 0.92, symbol: '€', label: '欧元 (EUR)' },
  GBP: { rate: 0.78, symbol: '£', label: '英镑 (GBP)' },
}

const convertedAmount = computed(() => {
  const rate = exchangeRates[currentCurrency.value]?.rate || 1.0
  return (inputBudget.value * rate).toFixed(2)
})
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
          <Globe class="w-3.5 h-3.5" />
          <span>多币种结算 · 国际化汇率自适应</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          全球多币种自适应
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
            本地化定价无损结算
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          支持人民币 (¥)、美元 ($)、欧元 (€) 与英镑 (£) 本地结算，自动根据实时官方基准汇率折算。
        </p>
      </div>

      <!-- 货币转换互动看板 -->
      <div class="max-w-3xl mx-auto rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 p-6 sm:p-10 shadow-xl text-left">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <label class="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-2">
              设定项目采购基准预算 (USD)
            </label>
            <MoneyInput
              v-model="inputBudget"
              v-model:currency="currentCurrency"
              class="w-full"
            />
            <p class="mt-3 text-[11px] text-zinc-500">
              切换货币代码即可实时调取中行与彭博外汇结算汇率。
            </p>
          </div>

          <!-- 本地化结账折算展示 -->
          <div class="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-center flex flex-col justify-between">
            <div>
              <span class="text-xs uppercase font-mono tracking-wider text-zinc-400">
                折合本地币种到账金额
              </span>
              <div class="mt-4 flex items-baseline justify-center gap-1 font-mono">
                <span class="text-2xl font-bold text-zinc-500">
                  {{ exchangeRates[currentCurrency]?.symbol }}
                </span>
                <span class="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-white">
                  {{ convertedAmount }}
                </span>
              </div>
              <div class="mt-2 text-xs text-emerald-500 font-semibold font-mono">
                实时汇率: 1 USD ≈ {{ exchangeRates[currentCurrency]?.rate }} {{ currentCurrency }}
              </div>
            </div>

            <button class="mt-6 w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2">
              <span>以 {{ currentCurrency }} 货币结账</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
