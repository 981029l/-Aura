<script setup lang="ts">
import { ShieldAlert, CheckCircle2 } from 'lucide-vue-next'
import CircuitBoardCard from '@/components/ui/CircuitBoardCard.vue'

const safetyPolicies = [
  '检测并拦截提示词注入',
  '自动隐藏手机号、身份证号等个人信息',
  '拦截危险的命令和代码',
  '识别越狱（Jailbreak）尝试',
]
</script>

<template>
  <div class="relative w-full overflow-hidden bg-black text-white py-16 sm:py-24 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- 左侧：安全护栏策略说明 -->
        <div class="lg:col-span-6 flex flex-col items-start text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/30 bg-rose-950/40 text-rose-400 text-xs font-mono mb-6">
            <ShieldAlert class="w-3.5 h-3.5" />
            <span>AI SAFETY GUARDRAILS SYSTEM</span>
          </div>

          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white leading-[1.15]">
            输入和输出双向检查
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400">
              安全防护
            </span>
          </h2>

          <p class="mt-6 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-lg">
            结合规则和语义检测，检查用户输入和模型输出，拦截不符合公司规范的内容。
          </p>

          <div class="mt-8 space-y-3 w-full">
            <div
              v-for="policy in safetyPolicies"
              :key="policy"
              class="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300"
            >
              <CheckCircle2 class="w-4 h-4 text-rose-400 shrink-0" />
              <span>{{ policy }}</span>
            </div>
          </div>
        </div>

        <!-- 右侧：电路板安全芯片卡片：集成 CircuitBoardCard 原子组件 -->
        <div class="lg:col-span-6 flex items-center justify-center">
          <div class="w-full max-w-lg">
            <CircuitBoardCard
              chipName="GUARDRAIL-ASIC-X9"
              clockSpeed="5.2 GHz"
              :coreCount="16"
              boardModel="SAFETY-GATEWAY-2026"
              class="w-full !max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
