<script setup lang="ts">
import { ref, computed } from 'vue'
import { Users, ArrowRight } from 'lucide-vue-next'
import NumberWheelStepper from '@/components/ui/NumberWheelStepper.vue'

const basePricePerSeat = 39
const seatsCount = ref(12)

const totalPrice = computed(() => {
  return seatsCount.value * basePricePerSeat
})
</script>

<template>
  <div class="relative w-full overflow-hidden bg-white py-16 sm:py-24 dark:bg-zinc-950 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
          <Users class="w-3.5 h-3.5" />
          <span>团队席位扩容 · 动态滚轮步进器</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          按席位线性扩容
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
            随时增减团队成员
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          基于滚轮惯性微步进器。直观调整工程团队席位数，系统自动按天折算未消耗差额。
        </p>
      </div>

      <!-- 席位计算器主体 -->
      <div class="max-w-3xl mx-auto rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 p-6 sm:p-10 shadow-xl text-left">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <!-- 左侧：滚轮步进调整 -->
          <div class="space-y-4">
            <div class="text-xs font-bold text-zinc-700 dark:text-zinc-300">
              选择需要的研发席位数 (Seats)
            </div>
            <div class="p-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
              <NumberWheelStepper
                :initialValue="seatsCount"
                :min="1"
                :max="100"
                unit="席位"
              />
            </div>
            <p class="text-[11px] text-zinc-500">
              单价: ${{ basePricePerSeat }} / 席位 / 月（包含全量 109 款场景区块）
            </p>
          </div>

          <!-- 右侧：资费总计与确认按钮 -->
          <div class="p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-md text-center flex flex-col justify-between">
            <div>
              <div class="text-xs uppercase font-mono tracking-wider text-zinc-400">
                本月预估总额
              </div>
              <div class="mt-4 flex items-baseline justify-center gap-1">
                <span class="text-2xl font-black font-mono text-zinc-900 dark:text-white">$</span>
                <span class="text-5xl font-black font-mono text-blue-600 dark:text-blue-400">
                  {{ totalPrice }}
                </span>
                <span class="text-xs text-zinc-400 font-mono">/ 月</span>
              </div>
              <div class="mt-2 text-xs font-semibold text-emerald-500">
                支持开具企业增值税专票
              </div>
            </div>

            <div class="mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <button class="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-md active:scale-95 flex items-center justify-center gap-2">
                <span>更新席位配置</span>
                <ArrowRight class="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
