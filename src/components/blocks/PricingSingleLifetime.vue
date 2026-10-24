<script setup lang="ts">
import { ref } from 'vue'
import { Sparkles, Check, Crown, Flame } from 'lucide-vue-next'
import SpotlightCard from '@/components/ui/SpotlightCard.vue'
import HoldToConfirm from '@/components/ui/HoldToConfirm.vue'

const isPurchased = ref(false)
const remainingLicenses = ref(42)

function handleConfirmPurchase() {
  isPurchased.value = true
  if (remainingLicenses.value > 0) remainingLicenses.value--
}

const lifetimeBenefits = [
  '永久终身无限制访问所有 182 款原子动效组件与未来所有更新',
  '全量 109 款场景业务 Blocks 组合矩阵永久商用授权',
  '包含 Figma 官方源设计规范文件与设计 Token 字典',
  '专属创始会员专属 Discord 频道与路线图投票权',
  '一次性买断，终身零订阅费与零续费捆绑',
]
</script>

<template>
  <div class="relative w-full overflow-hidden bg-white py-16 sm:py-24 dark:bg-zinc-950 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/30 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 text-xs font-semibold mb-4">
          <Crown class="w-3.5 h-3.5" />
          <span>创始人买断特权 · 限量发售</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          一次性买断终身
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500">
            告别无休止月度订阅
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          专为极客创作者与精品工作室设立的终身永久授权。支付一次，享受所有未来重大版本自动升级。
        </p>
      </div>

      <!-- 终身卡片：集成 SpotlightCard 与 HoldToConfirm 原子组件 -->
      <div class="max-w-2xl mx-auto">
        <SpotlightCard
          spotlightColor="rgba(245, 158, 11, 0.18)"
          :spotlightRadius="380"
          class="p-8 sm:p-10 rounded-3xl border-2 border-amber-500/40 bg-zinc-50 dark:bg-zinc-900/90 shadow-2xl text-left"
        >
          <!-- 剩余席位警示条 -->
          <div class="flex items-center justify-between pb-6 border-b border-zinc-200 dark:border-zinc-800">
            <div class="flex items-center gap-2">
              <span class="p-1.5 rounded-lg bg-amber-500/10 text-amber-500">
                <Flame class="w-4 h-4" />
              </span>
              <span class="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                Founder Lifetime Pass
              </span>
            </div>
            <div class="px-3 py-1 rounded-full bg-rose-500/10 text-rose-500 border border-rose-500/20 text-xs font-mono font-bold">
              仅剩 {{ remainingLicenses }} 席位
            </div>
          </div>

          <!-- 价格区域 -->
          <div class="mt-8 flex items-baseline gap-3">
            <span class="text-5xl sm:text-6xl font-black font-mono text-zinc-900 dark:text-white">$249</span>
            <div class="flex flex-col text-left">
              <span class="text-xs text-zinc-400 line-through font-mono">原价 $899</span>
              <span class="text-xs font-bold text-emerald-500">立省 72% · 一次性买断</span>
            </div>
          </div>

          <!-- 权益列表 -->
          <div class="mt-8 space-y-3">
            <div
              v-for="b in lifetimeBenefits"
              :key="b"
              class="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300"
            >
              <div class="p-0.5 rounded-full bg-amber-500/10 text-amber-500 shrink-0 mt-0.5">
                <Check class="w-3.5 h-3.5" />
              </div>
              <span>{{ b }}</span>
            </div>
          </div>

          <!-- 蓄力防冲动支付确认：集成 HoldToConfirm 原子组件 -->
          <div class="mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col items-center">
            <div v-if="!isPurchased" class="w-full flex flex-col items-center gap-2">
              <HoldToConfirm
                :duration="1400"
                label="长按 1.4 秒以解锁终身买断授权"
                holdingLabel="正在锁定创始人席位，请保持按下..."
                confirmedLabel="恭喜！已成功锁定终身授权！"
                variant="primary"
                @confirm="handleConfirmPurchase"
                class="w-full max-w-md !bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 !text-zinc-950 font-bold"
              />
              <span class="text-[11px] text-zinc-400">支持 30 天无条件全额退款保单</span>
            </div>
            <div v-else class="text-center py-4">
              <div class="inline-flex items-center gap-2 text-sm font-bold text-emerald-500">
                <Sparkles class="w-4 h-4" />
                <span>永久买断授权码已激活，请前往控制台绑定</span>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  </div>
</template>
