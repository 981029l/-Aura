<script setup lang="ts">
import { ref } from 'vue'
import { Smartphone, QrCode, Star, Download, Apple, ArrowRight, ShieldCheck } from 'lucide-vue-next'
import KeyboardBadge from '@/components/ui/KeyboardBadge.vue'

const showQrModal = ref(false)
const appRating = '4.9 / 5.0'
const totalDownloads = '1,200,000+'
</script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-950 py-16 sm:py-24 text-white">
    <!-- 背景流光 -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="relative mx-auto max-w-5xl px-4 sm:px-6 text-center">
      <!-- 头部说明 -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-semibold mb-6">
        <Smartphone class="w-3.5 h-3.5" />
        <span>全端互联 · iOS 与 Android 移动工作台</span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
        随时随地，掌控企业级业务大盘
      </h2>

      <p class="mt-4 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
        移动端 App 集成实时告警 Push 推送、AI 智能体语音对讲与毫秒级指纹授权。
      </p>

      <!-- 下载按钮与二维码区域 -->
      <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
        <!-- App Store 按钮 -->
        <a
          href="#appstore"
          class="flex items-center gap-3 px-6 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/80 transition-all shadow-xl group text-left"
        >
          <Apple class="w-7 h-7 text-white shrink-0" />
          <div>
            <div class="text-[10px] text-zinc-400 uppercase tracking-wider">Download on the</div>
            <div class="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">App Store</div>
          </div>
        </a>

        <!-- Google Play 按钮 -->
        <a
          href="#googleplay"
          class="flex items-center gap-3 px-6 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/80 transition-all shadow-xl group text-left"
        >
          <div class="w-7 h-7 flex items-center justify-center shrink-0">
            <svg class="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M3.6 1.8L13.8 12 3.6 22.2c-.3-.3-.6-.8-.6-1.4V3.2c0-.6.3-1.1.6-1.4z"/>
              <path fill="#FBBC05" d="M17.1 8.7L13.8 12l3.3 3.3 3.9-2.2c.8-.5.8-1.7 0-2.2l-3.9-2.2z"/>
              <path fill="#34A853" d="M13.8 12L3.6 1.8l10.9 6.2 2.6 4z"/>
              <path fill="#EA4335" d="M13.8 12l2.6 4-10.9 6.2L13.8 12z"/>
            </svg>
          </div>
          <div>
            <div class="text-[10px] text-zinc-400 uppercase tracking-wider">GET IT ON</div>
            <div class="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">Google Play</div>
          </div>
        </a>

        <!-- 二维码扫码弹窗开关 -->
        <button
          @click="showQrModal = !showQrModal"
          class="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 text-xs font-bold text-zinc-300 hover:text-white transition-all"
        >
          <QrCode class="w-4 h-4 text-indigo-400" />
          <span>{{ showQrModal ? '收起二维码' : '扫码快速安装' }}</span>
        </button>
      </div>

      <!-- 快捷键徽章 (复用 KeyboardBadge 原子组件) -->
      <div class="mt-4 flex items-center justify-center gap-2 text-[11px] text-zinc-500">
        <span>支持扫码后按</span>
        <KeyboardBadge keyName="Enter" size="sm" />
        <span>直接唤醒 TestFlight 内测通道</span>
      </div>

      <!-- 动态展开的二维码卡片 -->
      <div
        v-if="showQrModal"
        class="mt-6 p-6 max-w-xs mx-auto rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl text-center space-y-3 animate-fade-in"
      >
        <div class="w-40 h-40 bg-white rounded-2xl p-2 mx-auto shadow-inner flex items-center justify-center">
          <QrCode class="w-36 h-36 text-zinc-950" />
        </div>
        <div class="text-xs font-bold text-white">使用手机相机直接扫描</div>
        <p class="text-[10px] text-zinc-400">自动识别 iOS / Android 设备并定向到对应商店通道</p>
      </div>

      <!-- 评分背书与装机量 -->
      <div class="mt-12 pt-8 border-t border-zinc-800/80 flex flex-wrap items-center justify-center gap-8 text-xs text-zinc-400">
        <div class="flex items-center gap-2">
          <div class="flex text-amber-400">
            <Star v-for="i in 5" :key="i" class="w-4 h-4 fill-amber-400" />
          </div>
          <span class="font-bold text-white">{{ appRating }}</span>
          <span>(超过 42,000 条真实评价)</span>
        </div>

        <div class="flex items-center gap-1.5 text-zinc-300">
          <Download class="w-4 h-4 text-sky-400" />
          <span class="font-bold text-white">{{ totalDownloads }}</span>
          <span>全球累计下载</span>
        </div>

        <div class="flex items-center gap-1.5 text-emerald-400">
          <ShieldCheck class="w-4 h-4" />
          <span>App Store 官方推荐应用</span>
        </div>
      </div>

      <!-- 底部跳转 -->
      <div class="mt-8">
        <a href="#changelog" class="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
          <span>查看移动客户端更新日志 (v2.8.2)</span>
          <ArrowRight class="w-3 h-3" />
        </a>
      </div>
    </div>
  </div>
</template>
