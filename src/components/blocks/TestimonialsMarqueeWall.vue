<script setup lang="ts">
import { Heart } from 'lucide-vue-next'
import Marquee from '@/components/ui/Marquee.vue'
import StarRating from '@/components/ui/StarRating.vue'
import GlassCard from '@/components/ui/GlassCard.vue'

const reviewsTop = [
  { name: 'Sarah Lin', role: 'Staff Frontend @ Stripe', text: 'Aura UI 彻底改变了我们团队的原型交付节奏，100% 纯 Vue 3.5 SFC，拷贝即用，零配置依赖！', score: 5 },
  { name: 'Marcus Vance', role: 'CTO @ CloudSync', text: '暗黑模式与微动效的细节打磨极度惊艳，完全达到了我们对企业级产品的严苛视觉要求。', score: 5 },
  { name: 'Dr. Elena Rostova', role: 'AI Researcher @ BrainLab', text: '推测解码与向量降维可视化组件非常专业，为我们的高维论文演示增色不少。', score: 5 },
  { name: 'Kenji Sato', role: 'Lead Architect @ Mercari', text: '不仅动画丝滑，而且在 60FPS 渲染下对低配移动设备的 CPU 占用微乎其微。', score: 5 },
]

const reviewsBottom = [
  { name: 'David Kim', role: 'Founder @ NextSaaS', text: '有了 109 款场景区块，我们只用了 3 天就搭完了新一代 AI 产品的完整营销落地页！', score: 5 },
  { name: 'Olivia Martin', role: 'Design Systems Lead', text: '同心圆角律与空气感弥散阴影无可挑剔，是目前前端社区最克制、最典雅的动效库。', score: 5 },
  { name: 'Felix Bauer', role: 'VP of Product @ FinTech Hub', text: '全息钛金黑卡与资金滑块组件让我们的 Web3 支付产品转化率直接拉升了 38%。', score: 5 },
  { name: 'Emily Thorne', role: 'Fullstack Dev @ Vercel Ecosystem', text: '彻底告别了黑盒打包侵入，每个组件的代码整洁得让人惊叹，强推！', score: 5 },
]
</script>

<template>
  <div class="relative w-full overflow-hidden bg-white py-16 sm:py-24 dark:bg-zinc-950 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-14 text-center">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/20 bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 text-xs font-semibold mb-4">
        <Heart class="w-3.5 h-3.5 fill-rose-500" />
        <span>全球开发者口碑 · 真实好评跑马灯</span>
      </div>
      <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
        深受全球万千团队
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-indigo-500">
          深情信赖与由衷赞誉
        </span>
      </h2>
      <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
        从独立开发者到全球 500 强产研组织，聆听来自一线工程师与产品设计专家的真实声音。
      </p>
    </div>

    <!-- 双轨跑马灯流：集成 Marquee, StarRating, GlassCard 原子组件 -->
    <div class="relative w-full overflow-hidden space-y-4">
      <!-- 左右边缘虚化渐变遮罩 -->
      <div class="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none"></div>
      <div class="absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none"></div>

      <!-- 第一轨：从右向左 -->
      <Marquee :duration="35" :pauseOnHover="true">
        <div v-for="rev in reviewsTop" :key="rev.name" class="w-80 sm:w-96 p-5">
          <GlassCard class="p-5 text-left h-full flex flex-col justify-between border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/60 shadow-sm">
            <div>
              <div class="flex items-center justify-between mb-3">
                <StarRating :modelValue="rev.score" :readonly="true" color="#f59e0b" />
                <span class="text-[10px] font-mono text-zinc-400">VERIFIED USER</span>
              </div>
              <p class="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                "{{ rev.text }}"
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-bold text-xs flex items-center justify-center shrink-0">
                {{ rev.name[0] }}
              </div>
              <div>
                <div class="text-xs font-bold text-zinc-900 dark:text-white">{{ rev.name }}</div>
                <div class="text-[10px] text-zinc-500">{{ rev.role }}</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </Marquee>

      <!-- 第二轨：从左向右 (reverse) -->
      <Marquee :duration="40" :reverse="true" :pauseOnHover="true">
        <div v-for="rev in reviewsBottom" :key="rev.name" class="w-80 sm:w-96 p-5">
          <GlassCard class="p-5 text-left h-full flex flex-col justify-between border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/60 shadow-sm">
            <div>
              <div class="flex items-center justify-between mb-3">
                <StarRating :modelValue="rev.score" :readonly="true" color="#f59e0b" />
                <span class="text-[10px] font-mono text-zinc-400">VERIFIED USER</span>
              </div>
              <p class="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                "{{ rev.text }}"
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-500 text-white font-bold text-xs flex items-center justify-center shrink-0">
                {{ rev.name[0] }}
              </div>
              <div>
                <div class="text-xs font-bold text-zinc-900 dark:text-white">{{ rev.name }}</div>
                <div class="text-[10px] text-zinc-500">{{ rev.role }}</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </Marquee>
    </div>
  </div>
</template>
