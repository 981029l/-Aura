<script setup lang="ts">
import { ArrowRight, Globe, Zap, Server, Shield } from 'lucide-vue-next'
import Globe3D from '@/components/ui/Globe3D.vue'

const popNodes = [
  { city: '硅谷 (us-west-1)', rtt: '1.2ms', status: 'Optimal' },
  { city: '法兰克福 (eu-central-1)', rtt: '8.4ms', status: 'Optimal' },
  { city: '东京 (ap-northeast-1)', rtt: '14.1ms', status: 'Optimal' },
  { city: '新加坡 (ap-southeast-1)', rtt: '18.9ms', status: 'Optimal' },
]
</script>

<template>
  <div class="relative w-full overflow-hidden bg-black text-white py-10 sm:py-20 lg:py-28 flex flex-col justify-center">
    <!-- 背景流光 -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute right-10 top-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
      <div class="absolute left-10 bottom-10 w-[400px] h-[400px] bg-indigo-600/10 blur-[100px] rounded-full"></div>
    </div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <!-- 左侧：文案与全球网络指标 -->
        <div class="lg:col-span-6 flex flex-col items-start text-left z-10">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-950/40 text-blue-400 text-xs font-mono font-medium backdrop-blur-md mb-4 sm:mb-6">
            <Globe class="w-3.5 h-3.5 text-blue-400 animate-spin" />
            <span>ANYCAST GLOBAL EDGE MESH</span>
          </div>

          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
            跨洲际零延迟
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
              全球边缘智能网络
            </span>
          </h1>

          <p class="mt-4 sm:mt-6 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl">
            跨越五大洲 300+ 边缘数据中心。原生 Anycast 协议与智能 BGP 动态调优，确保全球任意角落的用户都能在毫秒内直达最近的算力计算集群。
          </p>

          <!-- 4 组全球 PoP 实时延迟列表 -->
          <div class="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 w-full max-w-lg">
            <div
              v-for="node in popNodes"
              :key="node.city"
              class="p-3 rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md flex flex-col justify-between"
            >
              <div class="text-[11px] text-zinc-400 truncate">{{ node.city }}</div>
              <div class="mt-2 flex items-center justify-between">
                <span class="text-sm font-bold font-mono text-white">{{ node.rtt }}</span>
                <span class="text-[10px] font-mono font-semibold text-emerald-400 flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  {{ node.status }}
                </span>
              </div>
            </div>
          </div>

          <!-- 行动按钮 -->
          <div class="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4 w-full">
            <button class="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-blue-600/30 active:scale-95">
              <span>部署边缘函数</span>
              <ArrowRight class="w-4 h-4" />
            </button>
            <button class="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-300 text-xs sm:text-sm transition-all">
              <Server class="w-4 h-4 text-zinc-400" />
              <span>查看节点分布图谱</span>
            </button>
          </div>
        </div>

        <!-- 右侧：真实 3D 旋转地球仪：集成 Globe3D 原子组件 -->
        <div class="lg:col-span-6 flex items-center justify-center relative mt-8 lg:mt-0">
          <!-- 地球仪光晕底盘 -->
          <div class="relative w-full max-w-[340px] sm:max-w-[460px] aspect-square flex items-center justify-center">
            <Globe3D :size="400" :speed="0.003" class="z-10" />

            <!-- 浮动悬浮卡片 1 -->
            <div class="absolute -top-2 right-2 p-3 rounded-xl border border-zinc-800 bg-zinc-900/90 shadow-xl backdrop-blur-md text-left z-20 hidden sm:block">
              <div class="flex items-center gap-2 text-[11px] text-zinc-400 font-mono">
                <Zap class="w-3.5 h-3.5 text-amber-400" />
                <span>BGP Anycast Routing</span>
              </div>
              <div class="text-xs font-bold text-white mt-1">自动优选最短光缆链路</div>
            </div>

            <!-- 浮动悬浮卡片 2 -->
            <div class="absolute -bottom-2 left-2 p-3 rounded-xl border border-zinc-800 bg-zinc-900/90 shadow-xl backdrop-blur-md text-left z-20 hidden sm:block">
              <div class="flex items-center gap-2 text-[11px] text-zinc-400 font-mono">
                <Shield class="w-3.5 h-3.5 text-blue-400" />
                <span>Tbps DDoS 实时清洗</span>
              </div>
              <div class="text-xs font-bold text-emerald-400 font-mono mt-1">0% PACKET DROP</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
