const n=`<script setup lang="ts">
import { Globe, MapPin, Users } from 'lucide-vue-next'
import Globe3D from '@/components/ui/Globe3D.vue'

const activeHubs = [
  { city: '旧金山 / 硅谷', count: '4,280+ 活跃团队', note: 'AI 智能体研发中心' },
  { city: '伦敦 & 柏林', count: '2,940+ 活跃团队', note: 'FinTech 与设计先锋' },
  { city: '东京 & 新加坡', count: '3,810+ 活跃团队', note: '高可用零售与物流网络' },
]
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-black text-white py-16 sm:py-24 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-950/40 text-blue-400 text-xs font-mono mb-4">
          <Globe class="w-3.5 h-3.5 animate-spin" />
          <span>WORLDWIDE CUSTOMER DISTRIBUTION</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
          遍布全球 120+ 国家
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
            客户全景分布图谱
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-400">
          基于 WebGL 3D 全息交互地球仪。从硅谷到苏黎世，见证全球各地工程师的活跃创新实践。
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <!-- 左侧：3D 地球仪：集成 Globe3D 原子组件 -->
        <div class="lg:col-span-7 flex items-center justify-center">
          <div class="relative w-full max-w-[460px] aspect-square flex items-center justify-center">
            <Globe3D :size="420" :speed="0.002" class="z-10" />
          </div>
        </div>

        <!-- 右侧：核心枢纽城市卡片 -->
        <div class="lg:col-span-5 space-y-4 text-left">
          <div
            v-for="hub in activeHubs"
            :key="hub.city"
            class="p-5 rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md hover:border-zinc-700 transition-colors"
          >
            <div class="flex items-center justify-between text-xs font-bold text-white mb-1">
              <span class="flex items-center gap-1.5">
                <MapPin class="w-4 h-4 text-blue-400" />
                {{ hub.city }}
              </span>
              <span class="text-emerald-400 font-mono">{{ hub.count }}</span>
            </div>
            <p class="text-xs text-zinc-400 mt-1">{{ hub.note }}</p>
          </div>

          <div class="p-5 rounded-2xl border border-blue-500/30 bg-blue-950/20 text-xs text-zinc-300 flex items-center gap-3">
            <Users class="w-5 h-5 text-blue-400 shrink-0" />
            <span>全球已有超过 18,000+ 产研工程师加入 Aura 动效开发者生态网络。</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
