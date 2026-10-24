const n=`<script setup lang="ts">
import { ref, computed } from 'vue'
import { CreditCard, Lock, ShieldCheck, Check, Sparkles, AlertCircle } from 'lucide-vue-next'
import PaymentFlow from '@/components/ui/PaymentFlow.vue'

const cardNumber = ref('4242 •••• •••• 8892')
const cardHolder = ref('ALEX CHEN')
const expiry = ref('08/29')
const cvc = ref('382')
const isFlipped = ref(false)

const formattedCardNumber = computed(() => {
  return cardNumber.value || '•••• •••• •••• ••••'
})

const isPaid = ref(false)
const isProcessing = ref(false)

function submitPayment() {
  isProcessing.value = true
  setTimeout(() => {
    isProcessing.value = false
    isPaid.value = true
  }, 1200)
}
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-5xl px-4 sm:px-6">
      <!-- 头部说明 -->
      <div class="text-center max-w-2xl mx-auto mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-4">
          <CreditCard class="w-3.5 h-3.5" />
          <span>银行卡支付</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
          填写支付信息
        </h2>
        <p class="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          输入卡号时卡片预览会同步更新，填写安全码时卡片自动翻到背面。
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- 左侧拟真 3D 银行卡与全链路流转 (7 cols) -->
        <div class="lg:col-span-7 space-y-8">
          <!-- 拟真卡片容器 (可点击翻转) -->
          <div
            @click="isFlipped = !isFlipped"
            class="relative w-full max-w-md mx-auto aspect-[1.586/1] rounded-3xl p-6 sm:p-8 cursor-pointer shadow-2xl transition-all duration-700 select-none overflow-hidden text-white"
            :style="{
              background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #0f172a 100%)',
              perspective: '1000px',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              transformStyle: 'preserve-3d'
            }"
          >
            <!-- 正面 -->
            <div v-if="!isFlipped" class="h-full flex flex-col justify-between">
              <div class="flex items-center justify-between">
                <!-- 拟真金属芯片 -->
                <div class="w-12 h-9 rounded-md bg-gradient-to-tr from-amber-400 to-amber-200 shadow-inner flex items-center justify-center p-1">
                  <div class="w-full h-full border border-amber-600/40 rounded flex flex-col justify-around">
                    <div class="border-b border-amber-600/40 h-1/2"></div>
                  </div>
                </div>
                <div class="flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-indigo-300">
                  <Sparkles class="w-3.5 h-3.5" />
                  <span>AURA BLACK CARD</span>
                </div>
              </div>

              <!-- 卡号 -->
              <div class="py-2">
                <div class="text-xs text-indigo-300 font-mono mb-1">CARD NUMBER</div>
                <div class="font-mono text-xl sm:text-2xl font-bold tracking-widest text-zinc-100 drop-shadow">
                  {{ formattedCardNumber }}
                </div>
              </div>

              <!-- 持卡人与到期日 -->
              <div class="flex items-center justify-between font-mono text-xs">
                <div>
                  <div class="text-[10px] text-indigo-300">CARDHOLDER</div>
                  <div class="font-bold tracking-wider uppercase">{{ cardHolder || 'YOUR NAME' }}</div>
                </div>
                <div>
                  <div class="text-[10px] text-indigo-300">EXPIRES</div>
                  <div class="font-bold tracking-wider">{{ expiry || 'MM/YY' }}</div>
                </div>
              </div>
            </div>

            <!-- 反面 -->
            <div v-else class="h-full flex flex-col justify-between py-2" style="transform: rotateY(180deg);">
              <!-- 磁条 -->
              <div class="-mx-8 h-10 bg-zinc-950 mt-2"></div>
              <div class="space-y-1">
                <div class="text-right text-[10px] text-indigo-300 font-mono pr-2">CVV / CVC</div>
                <div class="h-8 bg-zinc-200 rounded flex items-center justify-end px-3">
                  <span class="font-mono font-bold text-zinc-950 tracking-widest">{{ cvc || '•••' }}</span>
                </div>
              </div>
              <div class="text-[9px] text-zinc-400 leading-tight">
                点击卡片可以翻转查看另一面。
              </div>
            </div>
          </div>

          <!-- 全链路清算动效 (复用 PaymentFlow 原子组件) -->
          <div class="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 shadow-lg">
            <PaymentFlow amount="¥299.00 / 月" title="支付流程" />
          </div>
        </div>

        <!-- 右侧输入表单 (5 cols) -->
        <div class="lg:col-span-5 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-2xl p-6 sm:p-8 backdrop-blur-xl text-left">
          <div class="pb-4 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
            <h3 class="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Lock class="w-4 h-4 text-emerald-500" />
              <span>银行卡信息</span>
            </h3>
            <span class="text-[10px] text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full font-mono font-bold">
              256-BIT SSL
            </span>
          </div>

          <div class="mt-6 space-y-4">
            <!-- 持卡人姓名 -->
            <div>
              <label class="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">持卡人姓名 (拼音或英文)</label>
              <input
                v-model="cardHolder"
                type="text"
                class="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white text-xs uppercase font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <!-- 卡号 -->
            <div>
              <label class="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">银行卡号</label>
              <input
                v-model="cardNumber"
                type="text"
                maxlength="19"
                class="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white text-xs font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <!-- 有效期与 CVC -->
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">有效期 (MM/YY)</label>
                <input
                  v-model="expiry"
                  type="text"
                  placeholder="12/28"
                  maxlength="5"
                  class="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white text-xs font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label class="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">安全码 (CVC / CVV)</label>
                <input
                  v-model="cvc"
                  type="password"
                  placeholder="•••"
                  maxlength="4"
                  @focus="isFlipped = true"
                  @blur="isFlipped = false"
                  class="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white text-xs font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div class="flex items-center gap-2 text-[11px] text-zinc-500 pt-1">
              <ShieldCheck class="w-3.5 h-3.5 text-emerald-500" />
              <span>卡片信息由 Stripe / Adyen 负责 Token 化存储，本地不保留原始卡密。</span>
            </div>

            <!-- 支付按钮 -->
            <div class="pt-4">
              <button
                @click="submitPayment"
                :disabled="isProcessing || isPaid"
                :class="[
                  'w-full py-3.5 rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2',
                  isPaid
                    ? 'bg-emerald-600 text-white'
                    : isProcessing
                    ? 'bg-indigo-400 text-white cursor-wait'
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/20 active:scale-[0.98]'
                ]"
              >
                <span v-if="isPaid" class="flex items-center gap-1.5">
                  <Check class="w-4 h-4" />
                  <span>扣款成功 · 电子凭证已下发</span>
                </span>
                <span v-else-if="isProcessing">正在支付...</span>
                <span v-else class="flex items-center gap-1.5">
                  <CreditCard class="w-4 h-4" />
                  <span>确认支付 ¥299.00 / 月</span>
                </span>
              </button>
            </div>

            <!-- 安全保证 -->
            <div class="flex items-center justify-center gap-3 pt-2 text-[10px] text-zinc-400">
              <span class="flex items-center gap-1">
                <AlertCircle class="w-3 h-3" />
                <span>30 天无理由退款</span>
              </span>
              <span>•</span>
              <span>可随时解绑</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
