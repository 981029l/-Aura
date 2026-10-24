<script setup lang="ts">
import { Globe, Server, Activity, ShieldCheck, Zap } from 'lucide-vue-next'
import Globe3D from '@/components/ui/Globe3D.vue'

const nodesList = [
  { region: '亚太区域 (APAC)', city: '东京 / 新加坡 / 香港', latency: '4ms', load: '32%' },
  { region: '北美核心 (NA)', city: '弗吉尼亚 / 俄勒冈 / 硅谷', latency: '2ms', load: '45%' },
  { region: '欧洲中枢 (EMEA)', city: '法兰克福 / 伦敦 / 阿姆斯特丹', latency: '6ms', load: '28%' },
  { region: '拉美与大洋洲 (LATAM & OCE)', city: '圣保罗 / 悉尼', latency: '18ms', load: '19%' },
]
</script>

<template>
  <div class="relative w-full overflow-hidden bg-black text-white py-16 sm:py-24 transition-colors">
    <!-- 背景流光 -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute left-1/2 -top-20 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full"></div>
    </div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-950/40 text-blue-400 text-xs font-mono mb-4">
          <Globe class="w-3.5 h-3.5 animate-spin" />
          <span>ANYCAST LOW LATENCY BACKBONE</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
          全球边缘节点
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
            毫秒级智能调度
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-400">
          基于高精度 3D 旋转数字地球拓扑与智能 BGP Anycast 路由，自动规避跨洋海缆拥塞，确保 99.999% 的请求在 10ms 范围直达计算边缘。
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <!-- 左侧：3D 地球仪：集成 Globe3D 原子组件 -->
        <div class="lg:col-span-7 flex items-center justify-center relative">
          <div class="relative w-full max-w-[340px] sm:max-w-[480px] aspect-square flex items-center justify-center">
            <Globe3D :size="400" :speed="0.002" class="z-10" />
            <!-- 光晕装饰 -->
            <div class="absolute inset-0 rounded-full bg-blue-500/5 blur-2xl pointer-events-none"></div>
          </div>
        </div>

        <!-- 右侧：全球边缘节点列表 -->
        <div class="lg:col-span-5 space-y-4 text-left">
          <div
            v-for="node in nodesList"
            :key="node.region"
            class="p-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md hover:border-zinc-700 transition-colors"
          >
            <div class="flex items-center justify-between text-xs text-zinc-400 font-mono">
              <span class="flex items-center gap-1.5 font-bold text-white">
                <Server class="w-3.5 h-3.5 text-blue-400" />
                {{ node.region }}
              </span>
              <span class="text-emerald-400 font-bold flex items-center gap-1">
                <Activity class="w-3 h-3" />
                {{ node.latency }}
              </span>
            </div>
            <div class="mt-2 text-xs text-zinc-300">{{ node.city }}</div>
            <div class="mt-3 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
              <span>负载状态: {{ node.load }}</span>
              <span class="text-blue-400">HEALTHY</span>
            </div>
          </div>

          <!-- 底部保障徽标 -->
          <div class="pt-4 flex items-center justify-between text-xs text-zinc-400 border-t border-zinc-800/80">
            <span class="flex items-center gap-1.5">
              <ShieldCheck class="w-4 h-4 text-emerald-400" />
              全链路 DDoS 实时清洗
            </span>
            <span class="flex items-center gap-1.5">
              <Zap class="w-4 h-4 text-amber-400" />
              智能 BGP 容灾
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
