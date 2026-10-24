const t=`<script setup lang="ts">
import { Sparkles, Shield, Cpu, Zap, Database, Terminal, ArrowRight } from 'lucide-vue-next'
import SpotlightCard from '@/components/ui/SpotlightCard.vue'

const matrixItems = [
  { icon: Cpu, title: '混合专家推演 (MoE)', desc: '动态激活 8x7B 稀疏网络参数，保持低显存消耗的同时获得极致表达能力。', badge: 'MoE V3' },
  { icon: Shield, title: '零知识证明飞地', desc: '在密闭安全计算环境内验证提示词合规性，阻断任何可能的敏感泄露。', badge: 'ENCLAVE' },
  { icon: Zap, title: '亚毫秒级推测解码', desc: '小模型推测前瞻与大模型验证双循环，将首 Token 响应压缩至眨眼之间。', badge: 'SPECULATIVE' },
  { icon: Database, title: '亿级向量语义索引', desc: '原生支持 HNSW 与 IVFFlat 分布式分区索引，支持混合向量余弦距离搜索。', badge: 'VECTOR' },
  { icon: Terminal, title: '确定性代码执行沙盒', desc: '为每个代码片段提供隔离的 MicroVM 运行时，支持超时熔断与内存硬配额。', badge: 'MICRO-VM' },
  { icon: Sparkles, title: '自适应注意力压缩', desc: '动态丢弃弱相关上下文 Token，长对话场景下降低 50% 显存峰值开销。', badge: 'ATTENTION' },
]
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-white py-16 sm:py-24 dark:bg-zinc-950 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
          <Sparkles class="w-3.5 h-3.5" />
          <span>光标跟随聚光灯 · 矩阵特性卡片</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          灵敏交互感知的
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">
            高光特性矩阵
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          鼠标滑动在卡片之间，实时折射流动的蓝色聚光灯光斑与边框高光，赋予严谨的技术栈以触手可及的温度。
        </p>
      </div>

      <!-- 6 宫格聚光灯卡片矩阵：集成 SpotlightCard 原子组件 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        <SpotlightCard
          v-for="item in matrixItems"
          :key="item.title"
          spotlightColor="rgba(59, 130, 246, 0.2)"
          :spotlightRadius="340"
          class="p-6 rounded-2xl flex flex-col justify-between min-h-[220px]"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500 flex items-center justify-center">
                <component :is="item.icon" class="w-5 h-5" />
              </div>
              <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                {{ item.badge }}
              </span>
            </div>
            <h3 class="text-base font-bold text-zinc-900 dark:text-white tracking-tight">
              {{ item.title }}
            </h3>
            <p class="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {{ item.desc }}
            </p>
          </div>

          <div class="mt-6 flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
            <span>了解技术细节</span>
            <ArrowRight class="w-3.5 h-3.5" />
          </div>
        </SpotlightCard>
      </div>
    </div>
  </div>
</template>
`;export{t as default};
