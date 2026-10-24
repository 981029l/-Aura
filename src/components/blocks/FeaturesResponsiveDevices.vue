<script setup lang="ts">
import { ref } from 'vue'
import { Sparkles, Monitor, Tablet, Smartphone } from 'lucide-vue-next'
import SegmentedControl, { type SegmentedOption } from '@/components/ui/SegmentedControl.vue'

const deviceMode = ref<'desktop' | 'tablet' | 'mobile'>('desktop')

const deviceOptions: SegmentedOption[] = [
  { id: 'desktop', label: '桌面端 (1440px)', icon: Monitor },
  { id: 'tablet', label: '平板端 (768px)', icon: Tablet },
  { id: 'mobile', label: '移动端 (375px)', icon: Smartphone },
]
</script>

<template>
  <div class="relative w-full overflow-hidden bg-white py-16 sm:py-24 dark:bg-zinc-950 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <!-- 头部说明 -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
        <Sparkles class="w-3.5 h-3.5" />
        <span>多端响应式架构 · 像素级视口适配</span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white max-w-3xl">
        全视口自适应
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
          全设备优雅流体排版
        </span>
      </h2>

      <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
        无论在 4K 超宽带鱼屏、iPad Pro 还是移动掌心手机，Aura UI 的每一个单文件区块均基于严格的弹性流体栅格设计。
      </p>

      <!-- 视口模拟器切换胶囊：集成 SegmentedControl 原子组件 -->
      <div class="mt-8">
        <SegmentedControl
          v-model="deviceMode"
          :options="deviceOptions"
          size="md"
        />
      </div>

      <!-- 动态响应式模拟容器 -->
      <div class="mt-12 w-full flex justify-center">
        <div
          :class="[
            'transition-all duration-500 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 p-4 sm:p-6 shadow-2xl overflow-hidden',
            deviceMode === 'desktop' ? 'w-full max-w-4xl' : deviceMode === 'tablet' ? 'w-full max-w-[768px]' : 'w-full max-w-[375px]',
          ]"
        >
          <!-- 仿浏览器顶栏 -->
          <div class="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800 text-xs text-zinc-400 font-mono">
            <div class="flex items-center gap-1.5">
              <div class="w-3 h-3 rounded-full bg-rose-500/80"></div>
              <div class="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div class="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              <span class="ml-2">aura-responsive-viewport</span>
            </div>
            <span>{{ deviceMode === 'desktop' ? '100% 宽度' : deviceMode === 'tablet' ? '768px' : '375px' }}</span>
          </div>

          <!-- 模拟内容 -->
          <div class="py-8 px-4 text-left space-y-4">
            <div class="inline-block px-2.5 py-1 rounded bg-blue-500/10 text-blue-500 text-[10px] font-mono font-bold">
              FLUID LAYOUT ACTIVE
            </div>
            <h3 class="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
              弹性容器自适应伸缩演示
            </h3>
            <p class="text-xs text-zinc-500 dark:text-zinc-400">
              单列、双列或三列断点自适应重排，无需媒体查询冗余覆写，完全依托 Tailwind 原生响应式前缀。
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
              <div class="p-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-center">
                <div class="font-bold text-sm text-zinc-900 dark:text-white">模块 A</div>
                <div class="text-[10px] text-zinc-400">Flex shrink: 0</div>
              </div>
              <div class="p-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-center">
                <div class="font-bold text-sm text-zinc-900 dark:text-white">模块 B</div>
                <div class="text-[10px] text-zinc-400">Flex grow: 1</div>
              </div>
              <div class="p-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-center">
                <div class="font-bold text-sm text-zinc-900 dark:text-white">模块 C</div>
                <div class="text-[10px] text-zinc-400">Auto wrap</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
