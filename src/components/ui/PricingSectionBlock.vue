<script setup lang="ts">
import { ref, watch } from 'vue'
import { cn } from '@/lib/utils'
import SegmentedControl from './SegmentedControl.vue'
import { Check, Sparkles } from 'lucide-vue-next'

interface PricingSectionBlockProps {
  title?: string
  subtitle?: string
  /** 当前选中的套餐 id，支持 v-model；未绑定时默认选中 popular 套餐 */
  modelValue?: string
  class?: string
}

const props = withDefaults(defineProps<PricingSectionBlockProps>(), {
  title: '选择适合你的方案',
  subtitle: '所有方案都可以免费试用 14 天，随时可以取消',
})

const emit = defineEmits<{
  (e: 'update:modelValue', planId: string): void
  (e: 'selectPlan', planId: string): void
}>()

const billingCycle = ref('annual')

const plans = [
  {
    id: 'free',
    name: '免费版',
    desc: '适合个人和小型项目',
    priceMonthly: '¥0',
    priceAnnual: '¥0',
    popular: false,
    features: [
      '最多 3 个项目',
      '1 GB 存储空间',
      '社区论坛支持',
      '基础数据分析',
    ],
    buttonText: '免费开始',
  },
  {
    id: 'pro',
    name: '专业版',
    desc: '适合独立开发者和小团队',
    priceMonthly: '¥129',
    priceAnnual: '¥99',
    period: '月',
    popular: true,
    badge: '推荐',
    features: [
      '不限项目数量',
      '50 GB 存储空间',
      '自定义域名',
      '高级数据分析',
      '邮件支持',
    ],
    buttonText: '开始试用',
  },
  {
    id: 'team',
    name: '团队版',
    desc: '适合需要协作的团队',
    priceMonthly: '¥499',
    priceAnnual: '¥399',
    period: '月',
    popular: false,
    features: [
      '包含专业版全部功能',
      '不限成员数量',
      '单点登录（SSO）',
      '成员权限管理',
      '专属客户经理',
    ],
    buttonText: '联系销售',
  },
]

// 当前选中的套餐：点击卡片任意位置切换；“最受欢迎”徽标仍固定在 popular 套餐上
const selectedPlanId = ref(props.modelValue ?? plans.find((p) => p.popular)?.id)

watch(
  () => props.modelValue,
  (val) => {
    if (val !== undefined) selectedPlanId.value = val
  }
)

function selectPlan(planId: string) {
  selectedPlanId.value = planId
  emit('update:modelValue', planId)
  emit('selectPlan', planId)
}
</script>

<template>
  <div :class="cn('w-full py-12 select-none', props.class)">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <!-- 头部文案与计费周期切换 -->
      <div class="text-center max-w-2xl mx-auto mb-10 space-y-4">
        <h2 class="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
          {{ props.title }}
        </h2>
        <p class="text-sm text-zinc-500 font-normal">
          {{ props.subtitle }}
        </p>

        <!-- 月付 / 年付分段器 -->
        <div class="pt-2 flex items-center justify-center gap-3">
          <SegmentedControl
            v-model="billingCycle"
            :options="[
              { label: '按月付费', id: 'monthly' },
              { label: '按年付费 (省 20%)', id: 'annual' },
            ]"
          />
        </div>
      </div>

      <!-- 3 档卡片网格 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
        <div
          v-for="plan in plans"
          :key="plan.id"
          @click="selectPlan(plan.id)"
          :class="[
            'relative flex flex-col justify-between rounded-2xl border p-8 backdrop-blur-xl transition-all duration-300 cursor-pointer',
            plan.id === selectedPlanId
              ? 'border-blue-500/80 ring-1 ring-blue-500/80 bg-white shadow-xl dark:border-blue-500/80 dark:ring-blue-500/80 dark:bg-zinc-900 md:-translate-y-2'
              : 'border-zinc-200/90 bg-white/80 shadow-sm dark:border-zinc-800/90 dark:bg-zinc-950/80 hover:border-zinc-300 dark:hover:border-zinc-700',
          ]"
        >
          <!-- 推荐徽标 -->
          <div
            v-if="plan.popular"
            class="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-3.5 py-0.5 text-[11px] font-bold text-white shadow-md shadow-blue-500/25"
          >
            <Sparkles class="h-3 w-3" />
            <span>{{ plan.badge }}</span>
          </div>

          <div>
            <!-- 套餐名与说明 -->
            <h3 class="text-lg font-bold text-zinc-900 dark:text-white">
              {{ plan.name }}
            </h3>
            <p class="mt-1 text-xs text-zinc-500">
              {{ plan.desc }}
            </p>

            <!-- 价格 -->
            <div class="mt-6 flex items-baseline gap-1">
              <span class="text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
                {{ billingCycle === 'annual' ? plan.priceAnnual : plan.priceMonthly }}
              </span>
              <span v-if="plan.period" class="text-xs text-zinc-400">
                / {{ plan.period }}
              </span>
            </div>

            <!-- 特性列表 -->
            <ul class="mt-8 space-y-3 border-t border-zinc-100 pt-6 dark:border-zinc-800/80">
              <li
                v-for="feature in plan.features"
                :key="feature"
                class="flex items-center gap-2.5 text-xs text-zinc-600 dark:text-zinc-300"
              >
                <div class="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Check class="h-2.5 w-2.5" />
                </div>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>

          <!-- 行动按钮 -->
          <!-- 点击按钮会冒泡到卡片，同样完成选中 -->
          <button
            type="button"
            :aria-pressed="plan.id === selectedPlanId"
            :class="[
              'mt-8 w-full rounded-xl py-2.5 text-xs font-semibold shadow-sm transition-all active:scale-95 cursor-pointer',
              plan.id === selectedPlanId
                ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-blue-500/25'
                : 'bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700',
            ]"
          >
            {{ plan.buttonText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
