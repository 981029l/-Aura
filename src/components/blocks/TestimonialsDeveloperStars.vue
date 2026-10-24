<script setup lang="ts">
import { Github, Star, GitFork, Users, ArrowRight } from 'lucide-vue-next'
import NumberTicker from '@/components/ui/NumberTicker.vue'

const communityMetrics = [
  { icon: Star, label: 'GitHub Stars', value: 52400, color: 'text-amber-500' },
  { icon: GitFork, label: 'Community Forks', value: 8900, color: 'text-blue-500' },
  { icon: Users, label: 'Discord Members', value: 34500, color: 'text-purple-500' },
]
</script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-950 text-white py-16 sm:py-24 transition-colors">
    <!-- 背景极客网格微光 -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))] pointer-events-none"></div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <!-- 头部说明 -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-950/40 text-amber-400 text-xs font-mono mb-6">
        <Star class="w-3.5 h-3.5 fill-amber-400" />
        <span>GITHUB 50,000+ STARS MILESTONE</span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-3xl">
        数万名极客开发者
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400">
          星标认可的开源阵地
        </span>
      </h2>

      <p class="mt-4 text-sm sm:text-base text-zinc-400 max-w-xl">
        感谢来自全球超过 180+ 国家的开源贡献者。我们持续打磨每一个微动效，回馈整个 Web 生态。
      </p>

      <!-- 三大核心开源数字翻牌器网格：集成 NumberTicker 原子组件 -->
      <div class="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl text-center">
        <div
          v-for="m in communityMetrics"
          :key="m.label"
          class="p-6 rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md flex flex-col items-center justify-center"
        >
          <div class="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-4">
            <component :is="m.icon" class="w-6 h-6" :class="m.color" />
          </div>
          <div class="text-4xl sm:text-5xl font-black font-mono text-white tracking-tight">
            <NumberTicker :value="m.value" :duration="2" />
            <span class="text-zinc-500 text-2xl font-sans">+</span>
          </div>
          <div class="mt-2 text-xs font-mono uppercase text-zinc-400">{{ m.label }}</div>
        </div>
      </div>

      <!-- 行动胶囊 -->
      <div class="mt-10 flex items-center gap-4">
        <a
          href="https://github.com/981029l/-Aura"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs sm:text-sm transition-all shadow-lg active:scale-95"
        >
          <Github class="w-4 h-4" />
          <span>Star on GitHub</span>
          <ArrowRight class="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  </div>
</template>
