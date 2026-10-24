const n=`<script setup lang="ts">
import { ref } from 'vue'
import { Terminal, Shield, Cpu, Activity, ArrowUpRight, Zap } from 'lucide-vue-next'
import DotPattern from '@/components/ui/DotPattern.vue'

const currentLatency = ref(18)
const buildHash = 'sha256:7f90b21c'

const cyberLinks = [
  { group: '系统内核', items: ['V8 TurboFan JIT', 'WebAssembly 引擎', 'GPU 光栅管线', 'SIMD 向量加速'] },
  { group: '网络协议', items: ['HTTP/3 (QUIC)', 'WebSocket 流', 'gRPC-Web 桥接', 'Zero-Copy 传输'] },
  { group: '容灾合规', items: ['多区域 Anycast', '冷热备份同步', '自动化故障自愈', 'FIPS 140-3 级加密'] },
]
<\/script>

<template>
  <footer class="relative w-full overflow-hidden bg-black text-zinc-400 border-t border-zinc-800/80 pt-16 pb-12 transition-colors font-mono">
    <!-- 点阵微光底衬 (复用 DotPattern 原子组件) -->
    <div class="absolute inset-0 pointer-events-none opacity-20">
      <DotPattern
        :width="24"
        :height="24"
        :cr="1"
        :glow="true"
        class="text-emerald-500 fill-emerald-500"
      />
    </div>

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 顶部赛博运行状态抬头 -->
      <div class="p-6 rounded-2xl border border-zinc-800 bg-zinc-950/90 backdrop-blur-xl mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
            <Activity class="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-white uppercase tracking-wider">AURA CYBERNET OPERATIONAL</span>
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            </div>
            <div class="text-[11px] text-zinc-500 mt-0.5">
              全球 48 个边缘 PoP 节点正常响应 · 实时往返延迟: <span class="text-emerald-400 font-bold">{{ currentLatency }}ms</span>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-4 text-xs">
          <div class="px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 flex items-center gap-2">
            <Cpu class="w-3.5 h-3.5 text-indigo-400" />
            <span>NODE_ENV: production</span>
          </div>
          <div class="px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 flex items-center gap-2">
            <Terminal class="w-3.5 h-3.5 text-amber-400" />
            <span>BUILD: {{ buildHash.slice(0, 14) }}</span>
          </div>
        </div>
      </div>

      <!-- 赛博多栏列 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-zinc-800/80 text-left">
        <!-- 品牌标识 -->
        <div class="space-y-4">
          <div class="flex items-center gap-2 text-white">
            <Zap class="w-5 h-5 text-emerald-400" />
            <span class="text-sm font-bold tracking-widest uppercase">AURA.CYBER // 2026</span>
          </div>
          <p class="text-xs text-zinc-500 leading-relaxed font-sans">
            基于高密度硬件加速与流式响应构建的纯度交互组件阵列。
          </p>
          <div class="flex items-center gap-2 text-[11px] text-emerald-400">
            <Shield class="w-3.5 h-3.5" />
            <span>END-TO-END CRYPTOGRAPHICALLY SECURED</span>
          </div>
        </div>

        <!-- 3 大专栏 -->
        <div v-for="col in cyberLinks" :key="col.group" class="space-y-3">
          <h4 class="text-xs font-bold text-zinc-200 tracking-wider border-l-2 border-emerald-500 pl-2">
            {{ col.group }}
          </h4>
          <ul class="space-y-2">
            <li v-for="item in col.items" :key="item">
              <a href="#" class="text-xs text-zinc-500 hover:text-emerald-400 transition-colors inline-flex items-center gap-1 group">
                <span>{{ item }}</span>
                <ArrowUpRight class="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- 底部版权与终端提示 -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600 text-left">
        <div>
          <span>[SYSTEM] // ALL RIGHTS RESERVED © 2026 AURA PROTOCOL LABS</span>
        </div>
        <div class="flex items-center gap-3">
          <span>TLS 1.3 / ECH ENABLED</span>
          <span>•</span>
          <span>BGP ANYCAST ROUTED</span>
        </div>
      </div>
    </div>
  </footer>
</template>
`;export{n as default};
