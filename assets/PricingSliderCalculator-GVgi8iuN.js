const n=`<script setup lang="ts">
import { ref, computed } from 'vue'
import { Sparkles, Users, Cpu, ArrowRight } from 'lucide-vue-next'
import ElasticSlider from '@/components/ui/ElasticSlider.vue'

const mauCount = ref(50) // 单位：千 (k)
const tokenPerUser = ref(20) // 单位：万 token

const estimatedCost = computed(() => {
  const users = mauCount.value * 1000
  const tokens = users * (tokenPerUser.value * 10000)
  // 基础计费公式：每 1M tokens 约 $0.25，外加基础席位折算
  const tokenCost = (tokens / 1000000) * 0.25
  const baseCost = Math.max(29, mauCount.value * 1.2)
  return Math.round(baseCost + tokenCost)
})
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-white py-16 sm:py-24 dark:bg-zinc-950 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
          <Sparkles class="w-3.5 h-3.5" />
          <span>弹性用量滑块 · 动态资费即时算力器</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          按真实规模付费
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            拒绝预先闲置浪费
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          拖拽下方滑块即可预估月度月活用户量与 Token 消耗对应的月度综合基础设施资费。
        </p>
      </div>

      <!-- 计算器工作卡片 -->
      <div class="max-w-4xl mx-auto rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 p-6 sm:p-10 shadow-xl text-left">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <!-- 左侧滑块控制区 -->
          <div class="lg:col-span-7 space-y-8">
            <!-- 滑块 1: 月活跃用户数 (MAU) -->
            <div>
              <div class="flex items-center justify-between text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-2">
                <span class="flex items-center gap-1.5">
                  <Users class="w-4 h-4 text-blue-500" />
                  月度活跃用户量 (MAU)
                </span>
                <span class="font-mono text-sm text-blue-600 dark:text-blue-400 font-black">
                  {{ mauCount * 1000 }} 人
                </span>
              </div>
              <ElasticSlider v-model="mauCount" :min="1" :max="200" />
              <div class="flex justify-between text-[10px] text-zinc-400 font-mono mt-1">
                <span>1,000 (极小起步)</span>
                <span>200,000 (中大型业务)</span>
              </div>
            </div>

            <!-- 滑块 2: 单用户 Token 消费 -->
            <div>
              <div class="flex items-center justify-between text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-2">
                <span class="flex items-center gap-1.5">
                  <Cpu class="w-4 h-4 text-purple-500" />
                  单用户平均月消耗 Token
                </span>
                <span class="font-mono text-sm text-purple-600 dark:text-purple-400 font-black">
                  {{ tokenPerUser * 10000 }} Tokens
                </span>
              </div>
              <ElasticSlider v-model="tokenPerUser" :min="5" :max="100" />
              <div class="flex justify-between text-[10px] text-zinc-400 font-mono mt-1">
                <span>50,000 (轻度交互)</span>
                <span>1,000,000 (深度推理)</span>
              </div>
            </div>
          </div>

          <!-- 右侧资费输出看板 -->
          <div class="lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-md flex flex-col justify-between text-center">
            <div>
              <div class="text-xs uppercase font-mono tracking-wider text-zinc-400">
                预估月度总开销
              </div>
              <div class="mt-4 flex items-baseline justify-center gap-1">
                <span class="text-3xl font-black font-mono text-zinc-900 dark:text-white">$</span>
                <span class="text-5xl font-black font-mono text-blue-600 dark:text-blue-400 tracking-tight">
                  {{ estimatedCost }}
                </span>
                <span class="text-xs text-zinc-400 font-mono">/ 月</span>
              </div>
              <p class="mt-2 text-[11px] text-zinc-500">
                包含全球 Anycast 网络传输与 99.99% 基础 SLA
              </p>
            </div>

            <div class="mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <button class="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-md active:scale-95 flex items-center justify-center gap-2">
                <span>锁定该用量预估方案</span>
                <ArrowRight class="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
