<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import {
  CreditCard,
  Building2,
  ShieldCheck,
  CheckCircle2,
  RotateCw,
  Lock,
} from 'lucide-vue-next'

export interface PaymentFlowProps {
  title?: string
  amount?: string
  class?: string
}

const props = withDefaults(defineProps<PaymentFlowProps>(), {
  title: '支付流程',
  amount: '¥129.00',
})

const currentStep = ref(0)
const isProcessing = ref(false)

const steps = [
  { id: 1, title: 'Card Tap', sub: '用户刷卡或使用手机支付' },
  { id: 2, title: 'Payment Gateway', sub: '加密卡号并进行风险检查' },
  { id: 3, title: 'Card Network', sub: '通过卡组织转发交易' },
  { id: 4, title: 'Issuing Bank', sub: '发卡银行确认余额并授权' },
  { id: 5, title: 'Settlement', sub: '款项结算给商户' },
]

function startPayment() {
  if (isProcessing.value) return
  isProcessing.value = true
  currentStep.value = 1

  const interval = setInterval(() => {
    if (currentStep.value < 5) {
      currentStep.value += 1
    } else {
      clearInterval(interval)
      isProcessing.value = false
    }
  }, 700)
}

function reset() {
  currentStep.value = 0
  isProcessing.value = false
}
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
    <!-- 头部看板 -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 pb-5 dark:border-zinc-800/80">
      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <CreditCard class="h-4 w-4 text-emerald-500" />
          <h3 class="text-sm font-bold text-zinc-900 dark:text-white">
            {{ props.title }}
          </h3>
        </div>
        <p class="text-xs text-zinc-500 font-mono">
          按步骤演示一次刷卡支付的完整流程
        </p>
      </div>

      <!-- 支付发起按钮 -->
      <div class="flex items-center gap-2">
        <button
          type="button"
          @click="startPayment"
          :disabled="isProcessing"
          class="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-all active:scale-95 cursor-pointer"
        >
          <CreditCard class="h-3.5 w-3.5" />
          <span>{{ isProcessing ? '处理中...' : `支付 ${props.amount}` }}</span>
        </button>

        <button
          v-if="currentStep === 5"
          type="button"
          @click="reset"
          class="inline-flex items-center gap-1 rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1.5 text-xs font-semibold text-zinc-600 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer"
        >
          <RotateCw class="h-3 w-3" />
          <span>重新演示</span>
        </button>
      </div>
    </div>

    <!-- 5 节点流转横轴卡片 -->
    <div class="relative overflow-x-auto rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-6 dark:border-zinc-800/80 dark:bg-zinc-900/30">
      <div class="flex items-center justify-between min-w-[620px] gap-2">
        <template v-for="(step, idx) in steps" :key="step.id">
          <!-- 单个节点 -->
          <div class="flex flex-col items-center flex-1 text-center space-y-2">
            <!-- 状态圆环 -->
            <div
              :class="[
                'flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 shadow-sm relative',
                currentStep >= step.id
                  ? 'border-emerald-500 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 ring-2 ring-emerald-500/30'
                  : 'border-zinc-200 bg-white text-zinc-400 dark:border-zinc-800 dark:bg-zinc-950',
                currentStep === step.id && 'animate-pulse scale-110 shadow-md shadow-emerald-500/20',
              ]"
            >
              <CreditCard v-if="step.id === 1" class="h-5 w-5" />
              <Lock v-else-if="step.id === 2" class="h-5 w-5" />
              <ShieldCheck v-else-if="step.id === 3" class="h-5 w-5" />
              <Building2 v-else-if="step.id === 4" class="h-5 w-5" />
              <CheckCircle2 v-else class="h-5 w-5" />

              <!-- 金额芯片徽标 (伴随当前阶段) -->
              <span
                v-if="currentStep === step.id"
                class="absolute -top-3 whitespace-nowrap rounded-full bg-emerald-600 px-2 py-0.5 text-[9px] font-mono font-bold text-white shadow-md animate-bounce"
              >
                {{ props.amount }}
              </span>
            </div>

            <div>
              <h4
                :class="[
                  'text-xs font-bold transition-colors',
                  currentStep >= step.id ? 'text-zinc-900 dark:text-white' : 'text-zinc-400',
                ]"
              >
                {{ step.title }}
              </h4>
              <p class="text-[10px] text-zinc-400 font-mono mt-0.5">{{ step.sub }}</p>
            </div>
          </div>

          <!-- 节点间箭头连线 (除最后一项) -->
          <div
            v-if="idx < steps.length - 1"
            class="flex items-center justify-center shrink-0 w-8"
          >
            <div
              :class="[
                'h-0.5 w-full transition-colors duration-300',
                currentStep > step.id ? 'bg-emerald-500' : 'bg-zinc-200 dark:bg-zinc-800',
              ]"
            />
          </div>
        </template>
      </div>
    </div>

    <!-- 底部状态说明条 -->
    <div class="flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400 px-1">
      <div class="flex items-center gap-1.5">
        <span
          :class="[
            'h-2 w-2 rounded-full',
            currentStep === 5 ? 'bg-emerald-500' : currentStep > 0 ? 'bg-blue-500 animate-ping' : 'bg-zinc-400',
          ]"
        />
        <span>
          {{
            currentStep === 0
              ? '点击上方按钮开始演示'
              : currentStep === 5
                ? '支付成功，授权码 #AUTH_849204'
                : `第 ${currentStep}/5 步：${steps[currentStep - 1].title}...`
          }}
        </span>
      </div>

      <span class="font-bold text-emerald-600 dark:text-emerald-400">
        演示流程，不会真实扣款
      </span>
    </div>
  </div>
</template>
