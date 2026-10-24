const n=`<script setup lang="ts">
import { ref } from 'vue'
import { Sparkles, ArrowRight, Check, Shield } from 'lucide-vue-next'
import LampEffect from '@/components/ui/LampEffect.vue'
import SparklesCore from '@/components/ui/SparklesCore.vue'
import HoldToConfirm from '@/components/ui/HoldToConfirm.vue'

const isConfirmed = ref(false)

function handleConfirm() {
  isConfirmed.value = true
}
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-950 py-16 sm:py-24 text-white">
    <!-- 极光天灯光锥 (复用 LampEffect 原子组件) -->
    <div class="relative w-full max-w-6xl mx-auto overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/80 shadow-2xl">
      <LampEffect glowColor="#6366f1" class="min-h-[480px]">
        <!-- 星芒粒子微粒 (复用 SparklesCore 原子组件) -->
        <div class="absolute inset-0 pointer-events-none opacity-40">
          <SparklesCore
            id="aurora-cta-sparkles"
            background="transparent"
            :minSize="0.6"
            :maxSize="1.8"
            :particleDensity="60"
            particleColor="#a5b4fc"
          />
        </div>

        <div class="relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-6 shadow-inner">
            <Sparkles class="w-3.5 h-3.5 text-indigo-400" />
            <span>全新 2.0 时代已就绪 · 即刻升级</span>
          </div>

          <h2 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            以 10 倍速度重塑您的
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-teal-300">
              数字交互体验
            </span>
          </h2>

          <p class="mt-6 text-sm sm:text-base text-zinc-300 max-w-xl mx-auto leading-relaxed">
            全量 109 款开箱即用业务场景区块与 182 款原子动效组件，零构建依赖，即拷即用。
          </p>

          <!-- 行动长按蓄力按钮 (复用 HoldToConfirm 原子组件) -->
          <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div class="w-full sm:w-auto">
              <HoldToConfirm
                :duration="1200"
                variant="primary"
                label="长按蓄力解锁全部企业权限"
                holdingLabel="正在注入全息协议密钥..."
                confirmedLabel="已成功激活企业级授权！"
                @confirm="handleConfirm"
                class="shadow-lg shadow-indigo-500/30 font-bold text-xs"
              />
            </div>

            <a
              href="#docs"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-zinc-300 hover:text-white border border-zinc-700 hover:border-zinc-500 transition-all"
            >
              <span>浏览文档手册</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </a>
          </div>

          <!-- 安全背书 -->
          <div class="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <div class="flex items-center gap-1.5">
              <Check class="w-3.5 h-3.5 text-emerald-400" />
              <span>100% 独立开源纯度</span>
            </div>
            <div class="flex items-center gap-1.5">
              <Shield class="w-3.5 h-3.5 text-indigo-400" />
              <span>TypeScript 严格类型安全</span>
            </div>
            <div class="flex items-center gap-1.5">
              <Check class="w-3.5 h-3.5 text-emerald-400" />
              <span>Clean Light / Deep Dark 双模支持</span>
            </div>
          </div>
        </div>
      </LampEffect>
    </div>
  </div>
</template>
`;export{n as default};
