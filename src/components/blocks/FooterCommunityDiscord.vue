<script setup lang="ts">
import { ref } from 'vue'
import { MessageSquare, Github, ArrowRight, Sparkles, Users, Heart } from 'lucide-vue-next'
import NumberTicker from '@/components/ui/NumberTicker.vue'

const discordOnline = ref(4820)
const totalCommunityMembers = ref(38400)
</script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-950 py-16 sm:py-24 text-white">
    <!-- 渐变星云背景 -->
    <div class="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-transparent to-zinc-950 pointer-events-none"></div>

    <div class="relative mx-auto max-w-5xl px-4 sm:px-6 text-center">
      <!-- 头部说明 -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-semibold mb-6">
        <MessageSquare class="w-3.5 h-3.5" />
        <span>开源极客精神 · 开发者社区</span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
        与全球数万名前沿开发者实时切磋
      </h2>

      <p class="mt-4 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
        交流动效设计心得、提交 PR 贡献、第一时间获得官方核心团队的架构指导。
      </p>

      <!-- 核心指标跳动卡片 (复用 NumberTicker 原子组件) -->
      <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
        <!-- Discord 在线 -->
        <div class="p-6 rounded-3xl border border-indigo-500/30 bg-indigo-950/20 backdrop-blur-xl text-left space-y-2">
          <div class="flex items-center justify-between text-indigo-400 text-xs">
            <span class="flex items-center gap-1.5 font-bold">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Discord 实时在线</span>
            </span>
            <Users class="w-4 h-4" />
          </div>
          <div class="text-3xl font-black text-white font-mono flex items-baseline gap-1">
            <NumberTicker :value="discordOnline" :duration="2" />
            <span class="text-sm font-normal text-zinc-400">位开发者</span>
          </div>
          <div class="text-[11px] text-zinc-500">活跃在 16 个技术探讨频道</div>
        </div>

        <!-- 全球社区总人数 -->
        <div class="p-6 rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl text-left space-y-2">
          <div class="flex items-center justify-between text-zinc-400 text-xs">
            <span class="font-bold">全球贡献者与成员</span>
            <Sparkles class="w-4 h-4 text-amber-400" />
          </div>
          <div class="text-3xl font-black text-white font-mono flex items-baseline gap-1">
            <NumberTicker :value="totalCommunityMembers" :duration="2.5" />
            <span class="text-sm font-normal text-zinc-400">+</span>
          </div>
          <div class="text-[11px] text-zinc-500">来自全球 90+ 国家与地区</div>
        </div>
      </div>

      <!-- 加入通道按钮组 -->
      <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href="https://discord.com"
          target="_blank"
          class="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 transition-all hover:scale-105 active:scale-95"
        >
          <MessageSquare class="w-4 h-4" />
          <span>加入官方 Discord 社区</span>
          <ArrowRight class="w-3.5 h-3.5" />
        </a>

        <a
          href="https://github.com"
          target="_blank"
          class="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold text-zinc-200 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all"
        >
          <Github class="w-4 h-4" />
          <span>参与 GitHub 开源贡献</span>
        </a>
      </div>

      <!-- 底部致谢 -->
      <div class="mt-12 flex items-center justify-center gap-2 text-xs text-zinc-500">
        <Heart class="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
        <span>向所有为开源生态提交 Issue 与 PR 的贡献者致敬</span>
      </div>
    </div>
  </div>
</template>
