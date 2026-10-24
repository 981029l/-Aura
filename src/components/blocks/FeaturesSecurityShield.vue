<script setup lang="ts">
import { ShieldCheck, Lock, Key, FileCheck } from 'lucide-vue-next'
import HologramBadgeCard from '@/components/ui/HologramBadgeCard.vue'

const securityPillars = [
  { icon: Lock, title: '零知识证明飞地隔离', desc: '在受保护的硬件隔离环境中执行计算，平台运维与外部环境均无权限读取敏感内存。' },
  { icon: Key, title: '全链路硬件安全模块 (HSM)', desc: '私钥派生与签名完全保存在通过 FIPS 140-2 Level 3 认证的专用加密机中。' },
  { icon: FileCheck, title: '自动化不可篡改审计追踪', desc: '每次智能体工具调用与用户权限变动均生成加密哈希链，满足严格的法律溯源要求。' },
]
</script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- 左侧：全息安全认证徽章：集成 HologramBadgeCard 原子组件 -->
        <div class="lg:col-span-5 flex items-center justify-center">
          <div class="w-full max-w-sm">
            <HologramBadgeCard
              memberId="SEC-2026-FIPS"
              tierName="FINANCIAL ENCLAVE"
              issueDate="2026.10"
              class="w-full !max-w-full"
            />
          </div>
        </div>

        <!-- 右侧：企业级安全矩阵描述 -->
        <div class="lg:col-span-7 flex flex-col items-start text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/30 bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 text-xs font-semibold mb-6">
            <ShieldCheck class="w-3.5 h-3.5" />
            <span>金融级安全与合规防御盾</span>
          </div>

          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
            端到端全息安全
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500">
              数据隐私与主权防线
            </span>
          </h2>

          <p class="mt-6 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
            专为金融机构、跨国医疗与国防基础设施打造。从芯片硬件飞地、传输层零信任握手到存储层向量加密，筑牢坚不可摧的数字防线。
          </p>

          <!-- 三大安全支柱卡片 -->
          <div class="mt-8 space-y-4 w-full">
            <div
              v-for="pillar in securityPillars"
              :key="pillar.title"
              class="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 backdrop-blur-md flex items-start gap-3"
            >
              <div class="p-2 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 shrink-0 mt-0.5">
                <component :is="pillar.icon" class="w-4 h-4" />
              </div>
              <div>
                <h4 class="text-sm font-bold text-zinc-900 dark:text-white">{{ pillar.title }}</h4>
                <p class="mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{{ pillar.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
