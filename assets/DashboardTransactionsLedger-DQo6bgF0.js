const t=`<script setup lang="ts">
import { Receipt } from 'lucide-vue-next'
import PaymentFlow from '@/components/ui/PaymentFlow.vue'
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-white py-16 sm:py-24 dark:bg-zinc-950 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-4">
          <Receipt class="w-3.5 h-3.5" />
          <span>金融级支付清算 · 交易流水全链路</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          交易流水与清算大盘
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500">
            NFC 触碰至银行资金核验
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          全息展示从快捷卡片触碰、网关 Token 化风控、跨行转接至发卡行授权核验的 5 阶动态流转。
        </p>
      </div>

      <!-- 核心流转组件：集成 PaymentFlow 原子组件 -->
      <div class="max-w-4xl mx-auto">
        <PaymentFlow
          title="银行级交易清算全景链路 (Payment Flow)"
          amount="$49.00 USD"
          class="shadow-2xl"
        />
      </div>
    </div>
  </div>
</template>
`;export{t as default};
