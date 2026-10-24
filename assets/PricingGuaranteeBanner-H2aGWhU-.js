const e=`<script setup lang="ts">
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-vue-next'
import HologramBadgeCard from '@/components/ui/HologramBadgeCard.vue'

const guaranteePoints = [
  '30 天内任何不满意，一键发起全额退款，无需填写复杂问卷',
  '退款后保留已下载的 MIT 开源单文件组件，不受追溯限制',
  '通过 Stripe & 银联安全托管，退款原路秒级返还支付账户',
]
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-white py-16 sm:py-24 dark:bg-zinc-950 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="max-w-5xl mx-auto rounded-3xl border border-emerald-500/30 bg-emerald-50/40 dark:bg-emerald-950/20 p-8 sm:p-12 shadow-xl backdrop-blur-md">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          <!-- 左侧：全息安全背书徽章 -->
          <div class="lg:col-span-5 flex items-center justify-center">
            <div class="w-full max-w-xs">
              <HologramBadgeCard
                memberId="REFUND-SAFE-30D"
                tierName="MONEY BACK TRUST"
                issueDate="30 DAYS"
                class="w-full !max-w-full"
              />
            </div>
          </div>

          <!-- 右侧：无忧退款说明 -->
          <div class="lg:col-span-7 flex flex-col items-start">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-100/60 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-4">
              <ShieldCheck class="w-3.5 h-3.5" />
              <span>零风险承诺 · 100% 退款保障</span>
            </div>

            <h2 class="text-2xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
              30 天无条件全额退款
              <span class="block text-emerald-600 dark:text-emerald-400">
                把所有试错风险留给我们
              </span>
            </h2>

            <p class="mt-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              我们对 Aura UI 的单文件组件代码纯净度与工程设计标准充满信心。如果您在采购后 30 天内认为它未达到团队预期，我们将无条件秒级全额退款。
            </p>

            <div class="mt-6 space-y-2.5">
              <div
                v-for="pt in guaranteePoints"
                :key="pt"
                class="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300"
              >
                <CheckCircle2 class="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{{ pt }}</span>
              </div>
            </div>

            <div class="mt-8 flex items-center gap-4">
              <button class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-md active:scale-95">
                <span>无忧开启订阅</span>
                <ArrowRight class="w-4 h-4" />
              </button>
              <span class="text-xs text-zinc-500">已有 8,400+ 团队享有此保障</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`;export{e as default};
