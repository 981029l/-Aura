const e=`<script setup lang="ts">
import { Sparkles, ArrowUpRight, Github, Twitter, Heart } from 'lucide-vue-next'
import ShinyText from '@/components/ui/ShinyText.vue'

const footerLinks = [
  { name: '109 款场景区块', href: '#blocks' },
  { name: '182 款原子动效', href: '#components' },
  { name: '开发文档手册', href: '#docs' },
  { name: 'GitHub 仓库', href: 'https://github.com' },
  { name: '企业技术支持', href: '#enterprise' },
]
<\/script>

<template>
  <footer class="relative w-full overflow-hidden bg-black text-white pt-20 pb-8 transition-colors select-none">
    <!-- 顶部导航与行动链接 -->
    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-16 border-b border-zinc-900">
        <!-- 品牌与标语 -->
        <div class="space-y-3 text-left">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <Sparkles class="w-4 h-4" />
            </div>
            <span class="text-lg font-black tracking-tight text-white">Aura Platform</span>
          </div>
          <p class="text-xs text-zinc-400 max-w-sm leading-relaxed">
            极简、高贵、高帧率。为现代数字化体验与大模型时代定制的全局设计系统。
          </p>
        </div>

        <!-- 导航链接 -->
        <div class="flex flex-wrap items-center gap-6 text-xs">
          <a
            v-for="link in footerLinks"
            :key="link.name"
            :href="link.href"
            class="text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
          >
            <span>{{ link.name }}</span>
            <ArrowUpRight class="w-3 h-3 text-zinc-600 group-hover:text-indigo-400 transition-colors" />
          </a>
        </div>

        <!-- 社交快捷入口 -->
        <div class="flex items-center gap-3">
          <a href="https://github.com" target="_blank" class="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
            <Github class="w-4 h-4" />
          </a>
          <a href="https://twitter.com" target="_blank" class="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
            <Twitter class="w-4 h-4" />
          </a>
        </div>
      </div>

      <!-- 中间流光标语 (复用 ShinyText 原子组件) -->
      <div class="mt-8 text-center">
        <ShinyText
          text="SHAPING THE FUTURE OF INTERACTIVE EXPERIENCES"
          :duration="3"
          variant="cyber"
          class="text-xs sm:text-sm font-mono tracking-widest uppercase font-bold"
        />
      </div>
    </div>

    <!-- 底部巨幅字标透光轮廓 (Giant Wordmark) -->
    <div class="relative w-full overflow-hidden flex justify-center items-center pt-8 sm:pt-12 pointer-events-none">
      <div class="text-[18vw] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-zinc-800/80 via-zinc-900/40 to-transparent select-none drop-shadow-2xl">
        AURA UI
      </div>
    </div>

    <!-- 极底版权与致敬 -->
    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-600">
      <div>
        <span>© 2026 Aura Platform Inc. All Rights Reserved.</span>
      </div>
      <div class="flex items-center gap-1.5 text-zinc-500">
        <span>Designed with</span>
        <Heart class="w-3 h-3 text-rose-500 fill-rose-500" />
        <span>for modern engineers worldwide</span>
      </div>
    </div>
  </footer>
</template>
`;export{e as default};
