const e=`<script setup lang="ts">
import { ref } from 'vue'
import { Play, X, Sparkles, Volume2, Maximize2 } from 'lucide-vue-next'
import Ripple from '@/components/ui/Ripple.vue'

const isModalOpen = ref(false)

function openModal() {
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false
}
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-white py-16 sm:py-24 lg:py-32 dark:bg-zinc-950 transition-colors">
    <!-- 背景柔和光晕 -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute left-1/2 top-10 -translate-x-1/2 w-[600px] h-[350px] bg-blue-500/10 blur-[100px] rounded-full"></div>
    </div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <!-- 顶部徽标 -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-6">
        <Sparkles class="w-3.5 h-3.5" />
        <span>看一眼，便知不同 · 2026 年度产品发布会</span>
      </div>

      <!-- 标题 -->
      <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 dark:text-white max-w-3xl leading-[1.12]">
        重塑交互体验的
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          全保真演示视频
        </span>
      </h1>

      <p class="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
        只需 90 秒，全面领略如何以原子动效与原生单文件组件，成倍提速现代 SaaS 产品的前端交付周期。
      </p>

      <!-- 核心视频缩略图舞台：集成 Ripple 涟漪微交互 -->
      <div class="mt-12 w-full max-w-4xl relative">
        <div class="relative rounded-3xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-900 p-2 shadow-2xl overflow-hidden group cursor-pointer" @click="openModal">
          <!-- 视频封面图模拟 -->
          <div class="relative aspect-video w-full rounded-2xl overflow-hidden bg-gradient-to-tr from-zinc-950 via-zinc-900 to-blue-950 flex items-center justify-center">
            <!-- 涟漪脉冲扩散组件：集成 Ripple 原子组件 -->
            <Ripple :mainCircleSize="120" :numCircles="6" class="opacity-75" />

            <!-- 中心脉冲播放按钮 -->
            <div class="relative z-10 w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl shadow-blue-500/40 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300">
              <Play class="w-8 h-8 ml-1 fill-white" />
            </div>

            <!-- 底部视频信息预览条 -->
            <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/80 font-mono z-10 bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                <span>AURA-KEYNOTE-2026.MP4</span>
              </div>
              <span>01:34 / 4K 60FPS</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 视频弹窗 Modal -->
      <Teleport to="body">
        <div
          v-if="isModalOpen"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
          @click.self="closeModal"
        >
          <div class="relative w-full max-w-5xl rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden">
            <!-- 弹窗顶栏 -->
            <div class="flex items-center justify-between px-4 py-3 border-b border-zinc-800 text-zinc-300">
              <div class="flex items-center gap-2 text-xs font-mono">
                <Sparkles class="w-4 h-4 text-blue-400" />
                <span>产品实操演示 · 4K 高保真视频</span>
              </div>
              <button
                @click="closeModal"
                class="p-1 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <X class="w-5 h-5" />
              </button>
            </div>

            <!-- 视频播放画布模拟 -->
            <div class="relative aspect-video w-full bg-black flex flex-col items-center justify-center p-8 text-center">
              <div class="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center mb-4">
                <Play class="w-8 h-8 ml-1 fill-blue-400" />
              </div>
              <h3 class="text-xl font-bold text-white mb-2">Aura UI 全套 109 款场景区块实操实录</h3>
              <p class="text-xs text-zinc-400 max-w-md">
                展示纯 Vue 3.5 SFC 零配置快速装配、Tailwind 动态样式渲染与无缝深浅双模切换。
              </p>

              <!-- 播放控制器模拟条 -->
              <div class="absolute bottom-4 inset-x-4 bg-zinc-900/90 rounded-xl p-3 flex items-center justify-between text-xs text-zinc-300 border border-zinc-800">
                <div class="flex items-center gap-3">
                  <Play class="w-4 h-4 fill-white cursor-pointer" />
                  <Volume2 class="w-4 h-4 cursor-pointer" />
                  <span class="font-mono text-[11px] text-zinc-400">00:42 / 01:34</span>
                </div>
                <!-- 进度条 -->
                <div class="flex-1 mx-4 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div class="w-[45%] h-full bg-blue-500 rounded-full"></div>
                </div>
                <Maximize2 class="w-4 h-4 cursor-pointer text-zinc-400 hover:text-white" />
              </div>
            </div>
          </div>
        </div>
      </Teleport>
    </div>
  </div>
</template>
`;export{e as default};
