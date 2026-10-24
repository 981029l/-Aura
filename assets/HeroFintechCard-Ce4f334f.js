const n=`<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight, CreditCard, Shield, Globe, Lock } from 'lucide-vue-next'
import HolographicCard from '@/components/ui/HolographicCard.vue'
import MoneyInput from '@/components/ui/MoneyInput.vue'

const transferAmount = ref(5000)
const selectedCurrency = ref('USD')
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-950 text-white py-16 sm:py-24 lg:py-32 transition-colors">
    <!-- 金融科技流光背景 -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute left-1/3 top-10 w-[600px] h-[400px] bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-indigo-500/0 blur-[130px] rounded-full"></div>
    </div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- 左侧：文案与资金调度输入 -->
        <div class="lg:col-span-6 flex flex-col items-start text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-400 text-xs font-mono font-medium backdrop-blur-md mb-6">
            <CreditCard class="w-3.5 h-3.5" />
            <span>GLOBAL SETTLEMENT 2.0</span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
            全球即时清算
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              全息钛金黑卡
            </span>
          </h1>

          <p class="mt-6 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl">
            跨越 180+ 国家与 40+ 主流法币、稳定币即时兑换。以银行级多方安全计算（MPC）与硬件安全芯片为底层，享受 0 汇损即时到账。
          </p>

          <!-- 资金输入组件：集成 MoneyInput 原子组件 -->
          <div class="mt-8 w-full max-w-md p-4 rounded-2xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-md shadow-xl">
            <div class="text-xs text-zinc-400 mb-2 font-medium">即时跨境转账模拟计算</div>
            <MoneyInput
              v-model="transferAmount"
              v-model:currency="selectedCurrency"
              class="w-full !border-zinc-800 !bg-zinc-950"
            />
            <div class="mt-3 flex items-center justify-between text-[11px] text-zinc-500">
              <span>预估网络手续费: 0.00%</span>
              <span class="text-emerald-400 font-mono">秒级结算已就绪</span>
            </div>
          </div>

          <!-- 行动按钮 -->
          <div class="mt-8 flex items-center gap-4">
            <button class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/25 active:scale-95">
              <span>申请全息实体黑卡</span>
              <ArrowRight class="w-4 h-4" />
            </button>
            <button class="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 text-xs sm:text-sm transition-all">
              <Lock class="w-4 h-4 text-emerald-400" />
              <span>MPC 密钥托管</span>
            </button>
          </div>
        </div>

        <!-- 右侧：全息 3D 彩虹折射卡片：集成 HolographicCard 原子组件 -->
        <div class="lg:col-span-6 flex flex-col items-center justify-center">
          <div class="w-full max-w-md">
            <HolographicCard
              title="Aura Titanium Mythic"
              subtitle="全球离岸结算无限卡"
              tier="BLACK EDITION #8888"
              class="w-full !max-w-full"
            />
          </div>

          <!-- 卡片安全特性说明条 -->
          <div class="mt-6 flex items-center justify-center gap-6 text-xs text-zinc-400 font-mono">
            <span class="flex items-center gap-1.5">
              <Shield class="w-3.5 h-3.5 text-emerald-400" />
              PCI-DSS Level 1
            </span>
            <span class="flex items-center gap-1.5">
              <Globe class="w-3.5 h-3.5 text-cyan-400" />
              SWIFT / SEPA / ACH
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
