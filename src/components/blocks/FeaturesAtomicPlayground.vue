<script setup lang="ts">
import { ref } from 'vue'
import { Sparkles, Sliders, Hand } from 'lucide-vue-next'
import ElasticSlider from '@/components/ui/ElasticSlider.vue'
import MagneticButton from '@/components/ui/MagneticButton.vue'
import HoldToConfirm from '@/components/ui/HoldToConfirm.vue'

const sliderVal = ref(65)
const confirmedCount = ref(0)

function handleConfirmed() {
  confirmedCount.value++
}
</script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
          <Hand class="w-3.5 h-3.5" />
          <span>物理触觉反馈 · 拟真微交互操场</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          拟真物理触觉
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            原生动效演练场
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          亲手体验非线性弹簧拉伸阻尼、鼠标光标磁吸引导与防误触长按确认。每个微交互都经过严密物理公式推导。
        </p>
      </div>

      <!-- 三大微交互组件体验阵列 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
        <!-- 体验 1: 弹性拉伸滑块 -->
        <div class="p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 shadow-lg flex flex-col justify-between min-h-[260px]">
          <div>
            <div class="flex items-center justify-between text-xs font-bold text-zinc-400 mb-2">
              <span class="flex items-center gap-1.5 text-zinc-800 dark:text-zinc-200">
                <Sliders class="w-4 h-4 text-blue-500" />
                非线性弹性拉伸滑块
              </span>
              <span class="font-mono text-blue-500">{{ sliderVal }}%</span>
            </div>
            <p class="text-xs text-zinc-500 leading-relaxed mb-6">
              拖拽滑块滑向边界时可体验橡胶质感的阻尼超纲拉伸与松手回弹。
            </p>
          </div>
          <div class="py-4">
            <ElasticSlider v-model="sliderVal" :min="0" :max="100" />
          </div>
          <div class="text-[11px] font-mono text-zinc-400 text-center">
            原生 CSS 自定义变量 + 动量衰减
          </div>
        </div>

        <!-- 体验 2: 光标磁吸按钮 -->
        <div class="p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 shadow-lg flex flex-col justify-between min-h-[260px]">
          <div>
            <div class="flex items-center gap-1.5 text-xs font-bold text-zinc-800 dark:text-zinc-200 mb-2">
              <Sparkles class="w-4 h-4 text-purple-500" />
              光标磁吸引力按钮
            </div>
            <p class="text-xs text-zinc-500 leading-relaxed mb-6">
              鼠标靠近 90px 半径范围即产生自然磁吸倾角，文字与底衬分层位移。
            </p>
          </div>
          <div class="flex items-center justify-center py-4">
            <MagneticButton :strength="0.4" :distance="100">
              <button class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs shadow-md shadow-purple-500/25">
                靠近体验磁吸
              </button>
            </MagneticButton>
          </div>
          <div class="text-[11px] font-mono text-zinc-400 text-center">
            双轴弹簧力学公式推导
          </div>
        </div>

        <!-- 体验 3: 蓄力防误触按钮 -->
        <div class="p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 shadow-lg flex flex-col justify-between min-h-[260px]">
          <div>
            <div class="flex items-center justify-between text-xs font-bold text-zinc-400 mb-2">
              <span class="text-zinc-800 dark:text-zinc-200">蓄力长按防误触</span>
              <span class="font-mono text-rose-500">已触发: {{ confirmedCount }}</span>
            </div>
            <p class="text-xs text-zinc-500 leading-relaxed mb-6">
              高危敏感操作专用。按下蓄力环形进度灌入，中途松手平滑退回。
            </p>
          </div>
          <div class="flex items-center justify-center py-4">
            <HoldToConfirm
              :duration="1200"
              label="长按以销毁实例"
              holdingLabel="蓄力中，请勿松手..."
              confirmedLabel="销毁指令已执行！"
              variant="danger"
              @confirm="handleConfirmed"
            />
          </div>
          <div class="text-[11px] font-mono text-zinc-400 text-center">
            SVG 动态虚线环描边遮罩
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
