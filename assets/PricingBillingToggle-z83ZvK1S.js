const n=`<script setup lang="ts">
import { ref, computed } from 'vue'
import { Sparkles, Check, ArrowRight } from 'lucide-vue-next'
import SegmentedControl, { type SegmentedOption } from '@/components/ui/SegmentedControl.vue'
import NumberTicker from '@/components/ui/NumberTicker.vue'

const billingCycle = ref<'monthly' | 'yearly'>('yearly')

const billingOptions: SegmentedOption[] = [
  { id: 'monthly', label: '按月支付' },
  { id: 'yearly', label: '按年支付', badge: '立省 20%' },
]

const plans = computed(() => [
  {
    name: 'Growth 成长版',
    desc: '适合快速扩充的初创项目与小团队。',
    monthlyPrice: 59,
    yearlyPrice: 47,
    features: ['无限量场景 Blocks 下载', '每月 1M 基础模型调用', '标准工单 24h 响应'],
  },
  {
    name: 'Scale 规模版',
    desc: '为拥有高并发需求的中大型应用打造。',
    monthlyPrice: 199,
    yearlyPrice: 159,
    popular: true,
    features: ['包含 Growth 全量特性', '每月 10M 深度推测推理', '多地域容灾热备', '优先架构评审支持'],
  },
])
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <!-- 头部说明 -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-4">
        <Sparkles class="w-3.5 h-3.5" />
        <span>平滑切换 · 年付折扣动态计算</span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white max-w-3xl">
        按需计费周期
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
          即时数字翻牌动效
        </span>
      </h2>

      <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
        支持按月弹性付费或按年锁定折扣。切换周期时数字平滑滚动，并自动折算年化节省开销。
      </p>

      <!-- 周期切换胶囊：集成 SegmentedControl 原子组件 -->
      <div class="mt-8">
        <SegmentedControl
          v-model="billingCycle"
          :options="billingOptions"
          size="md"
        />
      </div>

      <!-- 两档双卡网格 -->
      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl text-left">
        <div
          v-for="plan in plans"
          :key="plan.name"
          :class="[
            'p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300',
            plan.popular
              ? 'border-2 border-emerald-500 bg-white dark:bg-zinc-900 shadow-xl'
              : 'border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 shadow-sm',
          ]"
        >
          <div>
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-bold text-zinc-900 dark:text-white">{{ plan.name }}</h3>
              <span
                v-if="plan.popular"
                class="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-[10px] font-bold"
              >
                RECOMMENDED
              </span>
            </div>
            <p class="mt-2 text-xs text-zinc-500 dark:text-zinc-400">{{ plan.desc }}</p>

            <!-- 动态价格翻牌：集成 NumberTicker 原子组件 -->
            <div class="mt-6 flex items-baseline gap-1">
              <span class="text-4xl sm:text-5xl font-black font-mono text-zinc-900 dark:text-white">$</span>
              <span class="text-4xl sm:text-5xl font-black font-mono text-zinc-900 dark:text-white">
                <NumberTicker
                  :key="billingCycle"
                  :value="billingCycle === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice"
                  :duration="1.2"
                />
              </span>
              <span class="text-xs text-zinc-500 font-mono">/ 月</span>
            </div>
            <p v-if="billingCycle === 'yearly'" class="mt-1 text-[11px] text-emerald-500 font-medium">
              按年计费，每年结账一次（已享受 20% 折扣）
            </p>

            <!-- 特性打勾列表 -->
            <div class="mt-8 space-y-3 pt-6 border-t border-zinc-100 dark:border-zinc-800">
              <div
                v-for="f in plan.features"
                :key="f"
                class="flex items-center gap-2.5 text-xs text-zinc-700 dark:text-zinc-300"
              >
                <Check class="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{{ f }}</span>
              </div>
            </div>
          </div>

          <div class="mt-8 pt-4">
            <button
              :class="[
                'w-full py-3 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 active:scale-95 shadow-md',
                plan.popular
                  ? 'bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold'
                  : 'bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-white',
              ]"
            >
              <span>立即选用 {{ plan.name }}</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
