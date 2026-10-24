const n=`<script setup lang="ts">
import { HardDrive } from 'lucide-vue-next'
import FileDropzone from '@/components/ui/FileDropzone.vue'
import RadialGauge from '@/components/ui/RadialGauge.vue'
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
          <HardDrive class="w-3.5 h-3.5" />
          <span>对象存储与边缘 CDN · 资产托管</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          分布式 CDN 存储桶
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            全球就近边缘分发
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          支持拖拽即传、分块并行校验与秒级缓存预热。
        </p>
      </div>

      <!-- 组合展示区：左侧文件上传区，右侧容量配额仪表盘 -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto text-left">
        <div class="lg:col-span-8 w-full">
          <FileDropzone class="shadow-xl" />
        </div>

        <div class="lg:col-span-4 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-xs font-mono font-bold text-zinc-400">
              <span>STORAGE QUOTA</span>
              <span class="text-blue-500">S3 COMPATIBLE</span>
            </div>
            <h3 class="text-base font-bold text-zinc-900 dark:text-white mt-1">存储容量已使用</h3>

            <div class="my-6 flex justify-center">
              <RadialGauge :value="64" :size="140" :strokeWidth="12" label="容量" />
            </div>

            <div class="space-y-2 text-xs text-zinc-600 dark:text-zinc-400 font-mono">
              <div class="flex justify-between">
                <span>总容量上限:</span>
                <span class="font-bold text-zinc-900 dark:text-white">10.0 TB</span>
              </div>
              <div class="flex justify-between">
                <span>全球边缘命中率:</span>
                <span class="font-bold text-emerald-500">98.4%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
