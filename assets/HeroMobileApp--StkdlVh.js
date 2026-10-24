const n=`<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight, Smartphone, Sparkles, Download, Check } from 'lucide-vue-next'
import StarRating from '@/components/ui/StarRating.vue'

const userRating = ref(5)
const isDownloaded = ref(false)

function handleDownload() {
  isDownloaded.value = true
}
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 lg:py-32 dark:bg-zinc-950 transition-colors">
    <!-- 背景流光 -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full"></div>
    </div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- 左侧：App 营销价值主张 -->
        <div class="lg:col-span-6 flex flex-col items-start text-left">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-500/20 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-6">
            <Smartphone class="w-3.5 h-3.5" />
            <span>iOS & Android 移动端原生 App 现已上架</span>
          </div>

          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.12]">
            掌中掌控全局
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">
              原生手势与微动效
            </span>
          </h1>

          <p class="mt-6 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
            专为触控屏幕优化的 60FPS 丝滑手势交互。阻尼回弹抽屉、微震动触感反馈与端侧神经网络离线推理，将桌面级算力无缝装入掌心。
          </p>

          <!-- App Store 评分徽章：集成 StarRating 原子组件 -->
          <div class="mt-6 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-md flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md">
              <Sparkles class="w-6 h-6" />
            </div>
            <div>
              <div class="flex items-center gap-2">
                <StarRating v-model="userRating" :readonly="true" color="#f59e0b" />
                <span class="text-xs font-bold text-zinc-900 dark:text-white">4.9 星好评</span>
              </div>
              <p class="text-[11px] text-zinc-500 mt-0.5">超过 250,000+ 次下载与全球编辑精选推荐</p>
            </div>
          </div>

          <!-- 下载行动按钮 -->
          <div class="mt-8 flex flex-wrap items-center gap-4">
            <button
              @click="handleDownload"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-black font-semibold text-xs sm:text-sm transition-all shadow-md active:scale-95"
            >
              <Check v-if="isDownloaded" class="w-4 h-4 text-emerald-500" />
              <Download v-else class="w-4 h-4" />
              <span>{{ isDownloaded ? '已获取安装包' : '免费下载 iOS / Android 版' }}</span>
            </button>
            <button class="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-semibold text-xs sm:text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all">
              <span>查看离线功能清单</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <!-- 右侧：拟真双手机视差模型 -->
        <div class="lg:col-span-6 flex items-center justify-center relative">
          <!-- 手机壳 1 (主屏) -->
          <div class="relative w-64 sm:w-72 aspect-[9/19] rounded-[42px] border-[6px] border-zinc-800 bg-zinc-950 p-2 shadow-2xl overflow-hidden z-20">
            <!-- 灵动岛药丸 -->
            <div class="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-center">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>

            <!-- 手机内嵌屏幕 -->
            <div class="w-full h-full rounded-[34px] bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-4 pt-12 flex flex-col justify-between text-left text-white overflow-hidden">
              <div>
                <span class="text-[10px] text-zinc-400 font-mono">LIVE TELEMETRY</span>
                <div class="text-lg font-bold text-white mt-1">智能体任务监视器</div>
                <div class="mt-4 space-y-2">
                  <div class="p-2.5 rounded-xl bg-zinc-800/80 border border-zinc-700/60 text-xs">
                    <div class="flex justify-between text-zinc-400 text-[10px]">
                      <span>主动推演思考链</span>
                      <span class="text-emerald-400">98% COMPLETED</span>
                    </div>
                    <div class="font-semibold mt-1">自动构建多模型并行评估测试</div>
                  </div>
                  <div class="p-2.5 rounded-xl bg-zinc-800/80 border border-zinc-700/60 text-xs">
                    <div class="flex justify-between text-zinc-400 text-[10px]">
                      <span>端侧向量索引</span>
                      <span class="text-blue-400">12,400 NODES</span>
                    </div>
                    <div class="font-semibold mt-1">离线缓存命中率 99.4%</div>
                  </div>
                </div>
              </div>

              <!-- 仿触控抽屉展开指示条 -->
              <div class="p-3 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-center">
                <div class="w-8 h-1 bg-white/40 rounded-full mx-auto mb-2"></div>
                <span class="text-[11px] font-semibold text-blue-300">向上滑动查看更多指标</span>
              </div>
            </div>
          </div>

          <!-- 手机壳 2 (副屏视差倾斜背景) -->
          <div class="absolute -right-2 sm:right-6 top-6 w-56 sm:w-64 aspect-[9/19] rounded-[38px] border-[5px] border-zinc-800/80 bg-zinc-900 p-2 shadow-xl opacity-60 scale-90 -rotate-6 hidden sm:block pointer-events-none">
            <div class="w-full h-full rounded-[30px] bg-zinc-950 p-4 pt-10 flex flex-col justify-between text-zinc-400 text-xs">
              <div class="w-16 h-4 bg-zinc-800 rounded-full mb-4"></div>
              <div class="space-y-2">
                <div class="h-10 bg-zinc-800/50 rounded-xl"></div>
                <div class="h-10 bg-zinc-800/50 rounded-xl"></div>
                <div class="h-10 bg-zinc-800/50 rounded-xl"></div>
              </div>
              <div class="h-8 bg-zinc-800/40 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
