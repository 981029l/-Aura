<script setup lang="ts">
import { cn } from '@/lib/utils'
import Marquee from './Marquee.vue'
import StarRating from './StarRating.vue'
import { BadgeCheck } from 'lucide-vue-next'

interface TestimonialMarqueeBlockProps {
  title?: string
  subtitle?: string
  class?: string
}

const props = withDefaults(defineProps<TestimonialMarqueeBlockProps>(), {
  title: '用户怎么说',
  subtitle: '以下为示例评价',
})

const reviewsRow1 = [
  {
    author: 'Alex Rivera',
    handle: '@alex_dev',
    avatar: '👨‍💻',
    role: 'Frontend Engineer at Northwind',
    content: '组件复制过来就能用，不需要改构建配置，团队做动效省了不少时间。',
    stars: 5,
  },
  {
    author: 'Sarah Jenkins',
    handle: '@sarah_design',
    avatar: '👩‍🎨',
    role: 'Design Director at Acme',
    content: '弹性回弹和缓动曲线调得很自然，细节做得很用心。',
    stars: 5,
  },
  {
    author: 'Michael Zhang',
    handle: '@mz_architect',
    avatar: '🧑‍🚀',
    role: 'Founder at Globex AI',
    content: 'AgentStatus 和思考过程折叠卡正好是我们 AI 产品需要的，直接拿来改改就上线了。',
    stars: 5,
  },
]

const reviewsRow2 = [
  {
    author: 'Elena Rostova',
    handle: '@elena_tech',
    avatar: '👩‍🔬',
    role: 'Lead Architect at Initech',
    content: '大部分组件不用改 tailwind.config.js，动画关键帧都写在组件文件里，维护起来很方便。',
    stars: 5,
  },
  {
    author: 'David Kim',
    handle: '@dkim_codes',
    avatar: '🧑‍💻',
    role: 'Senior Developer at Hooli',
    content: 'ScrubInput 和 HoldToConfirm 的手感很接近桌面应用，用户反馈不错。',
    stars: 5,
  },
  {
    author: 'Chloe Dupont',
    handle: '@chloe_ux',
    avatar: '✨',
    role: 'Product Lead at Umbrella',
    content: '浅色和深色模式都适配得很好，切换主题时不用再单独调样式。',
    stars: 5,
  },
]
</script>

<template>
  <div :class="cn('relative w-full overflow-hidden py-16 select-none', props.class)">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 mb-12 text-center space-y-3">
      <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
        WALL OF LOVE
      </span>
      <h2 class="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
        {{ props.title }}
      </h2>
      <p class="text-sm text-zinc-500 max-w-xl mx-auto">
        {{ props.subtitle }}
      </p>
    </div>

    <!-- 双轨跑马灯滚动区 -->
    <div class="relative space-y-4">
      <!-- 左右边缘虚化消隐蒙版 -->
      <div class="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 to-transparent z-10" />
      <div class="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-zinc-50 dark:from-zinc-950 to-transparent z-10" />

      <!-- 正向滚动轨 -->
      <Marquee :pause-on-hover="true" :speed="40">
        <div
          v-for="r in reviewsRow1"
          :key="r.handle"
          class="mx-3 w-80 sm:w-96 rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <span class="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-lg dark:bg-zinc-800">
                {{ r.avatar }}
              </span>
              <div>
                <div class="flex items-center gap-1">
                  <span class="font-bold text-sm text-zinc-900 dark:text-white">{{ r.author }}</span>
                  <BadgeCheck class="h-3.5 w-3.5 text-blue-500" />
                </div>
                <span class="text-[11px] text-zinc-400">{{ r.role }}</span>
              </div>
            </div>
            <StarRating :model-value="r.stars" :readonly="true" />
          </div>
          <p class="mt-4 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
            “{{ r.content }}”
          </p>
        </div>
      </Marquee>

      <!-- 反向滚动轨 -->
      <Marquee :reverse="true" :pause-on-hover="true" :speed="35">
        <div
          v-for="r in reviewsRow2"
          :key="r.handle"
          class="mx-3 w-80 sm:w-96 rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <span class="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-lg dark:bg-zinc-800">
                {{ r.avatar }}
              </span>
              <div>
                <div class="flex items-center gap-1">
                  <span class="font-bold text-sm text-zinc-900 dark:text-white">{{ r.author }}</span>
                  <BadgeCheck class="h-3.5 w-3.5 text-blue-500" />
                </div>
                <span class="text-[11px] text-zinc-400">{{ r.role }}</span>
              </div>
            </div>
            <StarRating :model-value="r.stars" :readonly="true" />
          </div>
          <p class="mt-4 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
            “{{ r.content }}”
          </p>
        </div>
      </Marquee>
    </div>
  </div>
</template>
