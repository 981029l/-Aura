const n=`<script setup lang="ts">
import { Mic } from 'lucide-vue-next'
import AudioVisualizer from '@/components/ui/AudioVisualizer.vue'
import VoiceWaveform from '@/components/ui/VoiceWaveform.vue'
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-white py-16 sm:py-24 dark:bg-zinc-950 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/20 bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 text-xs font-semibold mb-4">
          <Mic class="w-3.5 h-3.5" />
          <span>多模态音频理解 · 毫秒级语音交互</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          多模态流式音频
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-indigo-500">
            全频段声谱分析
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          基于高动态分贝采集与物理正弦波共振合成。支持实时降噪、情绪分贝感知与双向实时全双工语音交互。
        </p>
      </div>

      <!-- 双核心音频交互视窗 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div class="w-full">
          <div class="p-4 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/60 backdrop-blur-md shadow-xl">
            <AudioVisualizer
              mode="wave"
              state="speaking"
              :barCount="36"
              class="w-full"
            />
          </div>
        </div>
        <div class="w-full">
          <div class="p-4 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/60 backdrop-blur-md shadow-xl">
            <VoiceWaveform
              title="多频段声谱振荡仪 (Voice Waveform)"
              subtitle="48 kHz / 24-bit 广播级采样精度"
              :barCount="32"
              class="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
