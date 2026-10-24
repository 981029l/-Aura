const e=`<script setup lang="ts">
import { ArrowRight, Terminal, Radio, ShieldAlert } from 'lucide-vue-next'
import RetroGrid from '@/components/ui/RetroGrid.vue'
import DecryptedText from '@/components/ui/DecryptedText.vue'
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-black text-white py-24 sm:py-32 min-h-[640px] flex items-center justify-center">
    <!-- 80 年代赛博朋克 3D 视差网格：集成 RetroGrid 原子组件 -->
    <RetroGrid
      :angle="65"
      :cellSize="50"
      :opacity="0.6"
      darkLineColor="#a855f7"
      lightLineColor="#6366f1"
      class="z-0"
    />

    <!-- 地平线紫粉色辐射霓虹渐变 -->
    <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none z-1"></div>
    <div class="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-purple-600/20 blur-[130px] rounded-full pointer-events-none z-1"></div>

    <div class="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <!-- 赛博霓虹警告药丸 -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/40 bg-purple-950/40 text-purple-300 text-xs font-mono backdrop-blur-md mb-8 shadow-sm shadow-purple-500/30">
        <Radio class="w-3.5 h-3.5 text-purple-400 animate-pulse" />
        <span>CYBER_NODE // PROTOCOL 2088</span>
      </div>

      <!-- 核心大标题 -->
      <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none font-mono">
        RETRO
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
          CYBERPUNK
        </span>
        HORIZON
      </h1>

      <p class="mt-6 text-sm sm:text-base text-zinc-400 max-w-xl font-mono leading-relaxed">
        复古合成波 3D 矩阵延伸。将 80 年代霓虹美学注入现代生产级 Vue 3.5 界面体系。
      </p>

      <!-- 字符解密交互区：集成 DecryptedText 原子组件 -->
      <div class="mt-10 w-full max-w-2xl p-4 rounded-2xl border border-purple-500/30 bg-zinc-950/80 backdrop-blur-xl shadow-2xl">
        <DecryptedText
          title="加密通信信道已锁存"
          subtitle="悬停或点击触发字符逆向推演"
          class="!border-0 !bg-transparent"
        />
      </div>

      <!-- 行动胶囊 -->
      <div class="mt-10 flex flex-wrap items-center justify-center gap-4 font-mono">
        <button class="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-purple-500/30 active:scale-95">
          <Terminal class="w-4 h-4" />
          <span>INJECT_PAYLOAD</span>
          <ArrowRight class="w-4 h-4" />
        </button>
        <button class="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-purple-500/30 bg-purple-950/20 hover:bg-purple-950/40 text-purple-300 text-xs sm:text-sm backdrop-blur-md transition-all active:scale-95">
          <ShieldAlert class="w-4 h-4 text-purple-400" />
          <span>BYPASS_FIREWALL</span>
        </button>
      </div>
    </div>
  </div>
</template>
`;export{e as default};
