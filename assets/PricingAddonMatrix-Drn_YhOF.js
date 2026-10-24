const n=`<script setup lang="ts">
import { ref, computed } from 'vue'
import { Layers, Check, ArrowRight } from 'lucide-vue-next'

interface Addon {
  id: string
  name: string
  desc: string
  price: number
  enabled: boolean
}

const addons = ref<Addon[]>([
  { id: 'enclave', name: '硬件飞地 (Enclave) 密态计算环境', desc: '物理隔绝内存泄露风险，满足军工与跨国金融数据主权审计。', price: 99, enabled: true },
  { id: 'multiregion', name: '跨洲际 Anycast 双活热备容灾', desc: '300+ 全球边缘 PoP 节点自动分发，SLA 99.999% 无感故障切换。', price: 79, enabled: true },
  { id: 'sla', name: '15 分钟加急响应专属架构师 TAM', desc: '提供 1v1 驻场架构咨询、代码性能剖析与疑难报错排查。', price: 149, enabled: false },
  { id: 'audit', name: '全链路不可篡改区块链审计存证', desc: '记录所有操作与状态变更哈希，出具具备司法效力的溯源凭证。', price: 49, enabled: false },
])

const basePlanCost = 49
const addonsTotal = computed(() => {
  return addons.value.filter((a) => a.enabled).reduce((sum, a) => sum + a.price, 0)
})
const finalTotal = computed(() => basePlanCost + addonsTotal.value)
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 text-xs font-semibold mb-4">
          <Layers class="w-3.5 h-3.5" />
          <span>增值微服务 · 按需自选叠加</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          按需附加服务
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
            只为真正使用的特性买单
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          勾选您团队需要的企业级增值模块。实时计算附加费用，随时在控制台开启或关闭。
        </p>
      </div>

      <!-- 增值服务卡片网格与结算面板 -->
      <div class="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
        <!-- 左侧服务勾选列表 -->
        <div class="lg:col-span-8 space-y-4">
          <div
            v-for="addon in addons"
            :key="addon.id"
            @click="addon.enabled = !addon.enabled"
            :class="[
              'p-5 rounded-2xl border cursor-pointer transition-all duration-200 flex items-start gap-4 select-none',
              addon.enabled
                ? 'border-purple-500/60 bg-white dark:bg-zinc-900 shadow-md'
                : 'border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 hover:border-zinc-300',
            ]"
          >
            <!-- 仿原生自定义复选框 -->
            <div
              :class="[
                'w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors',
                addon.enabled ? 'bg-purple-600 text-white' : 'border border-zinc-300 dark:border-zinc-700',
              ]"
            >
              <Check v-if="addon.enabled" class="w-3.5 h-3.5 stroke-[3]" />
            </div>

            <div class="flex-1">
              <div class="flex items-center justify-between">
                <h4 class="text-sm font-bold text-zinc-900 dark:text-white">{{ addon.name }}</h4>
                <span class="text-sm font-black font-mono text-purple-600 dark:text-purple-400">
                  +\${{ addon.price }} / 月
                </span>
              </div>
              <p class="mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{{ addon.desc }}</p>
            </div>
          </div>
        </div>

        <!-- 右侧结算面板 -->
        <div class="lg:col-span-4 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl flex flex-col justify-between">
          <div>
            <h4 class="text-sm font-bold text-zinc-900 dark:text-white pb-3 border-b border-zinc-100 dark:border-zinc-800">
              套餐与附加服务总计
            </h4>

            <div class="mt-4 space-y-2 text-xs">
              <div class="flex justify-between text-zinc-500">
                <span>基础专业版订阅:</span>
                <span class="font-mono text-zinc-800 dark:text-zinc-200">\${{ basePlanCost }} / 月</span>
              </div>
              <div class="flex justify-between text-zinc-500">
                <span>已选增值模块 ({{ addons.filter(a => a.enabled).length }} 项):</span>
                <span class="font-mono text-purple-600">+\${{ addonsTotal }} / 月</span>
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-baseline justify-between">
              <span class="text-xs font-bold text-zinc-900 dark:text-white">最终月付总额:</span>
              <div class="text-right">
                <span class="text-2xl font-black font-mono text-purple-600 dark:text-purple-400">
                  \${{ finalTotal }}
                </span>
                <span class="text-[10px] text-zinc-400 font-mono"> / 月</span>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <button class="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-all shadow-md active:scale-95 flex items-center justify-center gap-2">
              <span>应用并生成账单</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
