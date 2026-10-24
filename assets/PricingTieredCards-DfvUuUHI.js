const n=`<script setup lang="ts">
import { Sparkles, Check, ArrowRight } from 'lucide-vue-next'
import BorderBeam from '@/components/ui/BorderBeam.vue'
import ShimmerButton from '@/components/ui/ShimmerButton.vue'

const tiers = [
  {
    name: '基础开发者版 (Starter)',
    desc: '适合个人独立开发者与原型项目快速起步验证。',
    price: '$0',
    period: '永久免费',
    popular: false,
    features: [
      '全量 182 款原子动效组件免费使用',
      '每月 50,000 次 API 推理调用额度',
      '社区 Discord 与 GitHub 异步支持',
      'MIT 开源商业友好协议',
    ],
    cta: '免费开始使用',
  },
  {
    name: '专业团队版 (Pro)',
    desc: '专为快速迭代的初创与中型企业 SaaS 研发团队设计。',
    price: '$49',
    period: '每席位 / 月',
    popular: true,
    features: [
      '包含 Starter 版全部功能',
      '全量 109 款场景业务 Blocks 组合矩阵',
      '每月 2,000,000 次高优先级推测推理额度',
      '企业私有 NPM 镜像与优先工单响应',
      '代码审查与自愈补偿诊断机制',
    ],
    cta: '开始 14 天免费体验',
  },
  {
    name: '企业旗舰版 (Enterprise)',
    desc: '专为财富 500 强与对数据主权有极高要求的金融客户设计。',
    price: '$299',
    period: '定制混合云部署',
    popular: false,
    features: [
      '包含 Pro 版全部功能',
      '私有化硬件飞地独立集群部署',
      '无限量并发推测推理吞吐量',
      '99.999% 金融级 SLA 可靠性保单',
      '专属架构师 1v1 驻场技术支持',
    ],
    cta: '联系架构师咨询',
  },
]
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-white py-16 sm:py-24 dark:bg-zinc-950 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
          <Sparkles class="w-3.5 h-3.5" />
          <span>透明公开定价 · 阶梯订阅方案</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          灵活定价矩阵
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            伴随业务一同规模化成长
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          无任何隐藏收费。支持随时升降级或按月取消，100% 掌握预算自主权。
        </p>
      </div>

      <!-- 三档定价卡片网格 -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto text-left">
        <div
          v-for="tier in tiers"
          :key="tier.name"
          :class="[
            'relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300',
            tier.popular
              ? 'border-2 border-blue-500 bg-white dark:bg-zinc-900 shadow-2xl shadow-blue-500/10 lg:-translate-y-2'
              : 'border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/50 shadow-sm',
          ]"
        >
          <!-- Pro 版顶部流光边框：集成 BorderBeam 原子组件 -->
          <BorderBeam
            v-if="tier.popular"
            :size="260"
            :duration="6"
            colorFrom="#3b82f6"
            colorTo="#a855f7"
          />

          <!-- 热门推荐胶囊 -->
          <div
            v-if="tier.popular"
            class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold tracking-wider uppercase shadow-md"
          >
            MOST POPULAR
          </div>

          <div>
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-black text-zinc-900 dark:text-white">{{ tier.name }}</h3>
            </div>
            <p class="mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{{ tier.desc }}</p>

            <!-- 价格展示 -->
            <div class="mt-6 flex items-baseline gap-1">
              <span class="text-4xl font-black font-mono text-zinc-900 dark:text-white tracking-tight">{{ tier.price }}</span>
              <span class="text-xs text-zinc-500 font-mono">/ {{ tier.period }}</span>
            </div>

            <!-- 特性打勾清单 -->
            <div class="mt-8 space-y-3 pt-6 border-t border-zinc-100 dark:border-zinc-800">
              <div
                v-for="f in tier.features"
                :key="f"
                class="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300"
              >
                <div class="p-0.5 rounded-full bg-emerald-500/10 text-emerald-500 shrink-0 mt-0.5">
                  <Check class="w-3.5 h-3.5" />
                </div>
                <span>{{ f }}</span>
              </div>
            </div>
          </div>

          <!-- 行动按钮：Pro 版使用 ShimmerButton 原子组件 -->
          <div class="mt-8 pt-4">
            <ShimmerButton
              v-if="tier.popular"
              class="w-full text-xs font-bold !py-3"
            >
              <span class="flex items-center justify-center gap-2">
                {{ tier.cta }}
                <ArrowRight class="w-3.5 h-3.5" />
              </span>
            </ShimmerButton>
            <button
              v-else
              class="w-full py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white font-semibold text-xs transition-colors shadow-sm active:scale-95"
            >
              {{ tier.cta }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
