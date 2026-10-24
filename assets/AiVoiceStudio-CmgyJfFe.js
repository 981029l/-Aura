const t=`<script setup lang="ts">
import { Mic } from 'lucide-vue-next'
import VoiceWaveform from '@/components/ui/VoiceWaveform.vue'
import AudioVisualizer from '@/components/ui/AudioVisualizer.vue'
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-black text-white py-16 sm:py-24 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-950/40 text-teal-400 text-xs font-mono mb-4">
          <Mic class="w-3.5 h-3.5" />
          <span>FULL-DUPLEX REAL-TIME AUDIO LAB</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
          AI 语音流控工作室
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
            全双工音频流式交互
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-400">
          广播级 48kHz / 24-bit 拟态声谱采样。实时渲染人声声压共振与状态振荡球。
        </p>
      </div>

      <!-- 组合展示区：声谱振荡仪 + 交互声波球 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto text-left">
        <div class="w-full">
          <VoiceWaveform
            title="实时音频流谱分析仪 (Voice Waveform)"
            subtitle="声压级感知 · 毫秒级流式响应"
            class="shadow-2xl"
          />
        </div>
        <div class="w-full">
          <AudioVisualizer
            mode="orb"
            state="speaking"
            class="shadow-2xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>
`;export{t as default};
