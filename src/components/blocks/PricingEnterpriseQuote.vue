<script setup lang="ts">
import { ref } from 'vue'
import { Building2, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-vue-next'
import DropdownMenu, { type DropdownItem } from '@/components/ui/DropdownMenu.vue'

const companyName = ref('')
const workEmail = ref('')
const teamScale = ref('50-200 人')
const submitted = ref(false)

const scaleOptions: DropdownItem[] = [
  { id: 's1', label: '10 - 50 席位研发团队' },
  { id: 's2', label: '50 - 200 席位中大型企业' },
  { id: 's3', label: '200 - 1000+ 席位跨国集团' },
]

function handleSubmit() {
  submitted.value = true
}
</script>

<template>
  <div class="relative w-full overflow-hidden bg-white py-16 sm:py-24 dark:bg-zinc-950 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- 左侧：企业级定制权益 -->
        <div class="lg:col-span-6 flex flex-col items-start text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-6">
            <Building2 class="w-3.5 h-3.5" />
            <span>财富 500 强专属定制合同</span>
          </div>

          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
            量身定制企业级
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              混合云专属交付方案
            </span>
          </h2>

          <p class="mt-6 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg">
            满足最为严苛的安全合规、私有专线接入、代码级私有化审计与金融级可用性协议。我们的架构总监将在 2 小时内与您深度对接。
          </p>

          <div class="mt-8 space-y-3">
            <div class="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
              <CheckCircle2 class="w-4 h-4 text-emerald-500 shrink-0" />
              <span>支持开具多币种企业发票、线下银行对公转账与采购 PO 流程</span>
            </div>
            <div class="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
              <CheckCircle2 class="w-4 h-4 text-emerald-500 shrink-0" />
              <span>支持定制法律 NDA 保密协议与 SOC-2 / ISO 27001 审计背书</span>
            </div>
            <div class="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
              <CheckCircle2 class="w-4 h-4 text-emerald-500 shrink-0" />
              <span>专属技术客户经理 (TAM) 与 15 分钟极速响应工单通道</span>
            </div>
          </div>
        </div>

        <!-- 右侧：企业咨询预约表单 -->
        <div class="lg:col-span-6 w-full max-w-lg mx-auto">
          <div class="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80 p-6 sm:p-8 shadow-xl text-left">
            <div class="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
              <div>
                <h3 class="text-lg font-bold text-zinc-900 dark:text-white">预约企业架构评审</h3>
                <p class="text-xs text-zinc-500">2 小时内获取定制报价与技术白皮书</p>
              </div>
              <ShieldCheck class="w-6 h-6 text-blue-500" />
            </div>

            <div v-if="!submitted" class="mt-6 space-y-4">
              <div>
                <label class="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">企业或机构名称</label>
                <input
                  v-model="companyName"
                  type="text"
                  placeholder="例如: 全球云端科技有限公司"
                  class="w-full px-3.5 py-2.5 text-xs rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label class="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">企业工作邮箱</label>
                <input
                  v-model="workEmail"
                  type="email"
                  placeholder="cto@company.com"
                  class="w-full px-3.5 py-2.5 text-xs rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label class="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">研发团队预估规模</label>
                <div class="relative">
                  <DropdownMenu
                    :items="scaleOptions"
                    :triggerText="teamScale"
                    class="w-full"
                  />
                </div>
              </div>

              <button
                @click="handleSubmit"
                class="w-full mt-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
              >
                <span>提交架构咨询预约</span>
                <ArrowRight class="w-3.5 h-3.5" />
              </button>
            </div>

            <div v-else class="py-12 text-center flex flex-col items-center gap-3">
              <div class="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <CheckCircle2 class="w-6 h-6" />
              </div>
              <h4 class="text-base font-bold text-zinc-900 dark:text-white">咨询已成功提交！</h4>
              <p class="text-xs text-zinc-500 max-w-xs">
                企业顾问将在两个工作小时内通过 {{ workEmail || '您的邮箱' }} 发送报价专函。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
