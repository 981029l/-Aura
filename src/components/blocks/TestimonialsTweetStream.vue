<script setup lang="ts">
import { MessageCircle, Heart, Repeat, Share } from 'lucide-vue-next'
import Reactions from '@/components/ui/Reactions.vue'

const tweets = [
  {
    handle: '@alex_dev',
    name: 'Alexandre Rivière',
    avatar: 'AR',
    date: '2h ago',
    content: '刚用 @AuraUI 把我们 SaaS 首页的 Hero 和 Pricing 全换了。没有引入任何臃肿构建插件，100% 纯 Vue 3.5 SFC，体验简直太优雅了！🔥🚀',
    replies: 18,
    retweets: 42,
    likes: 380,
  },
  {
    handle: '@elena_codes',
    name: 'Elena Rostova',
    avatar: 'ER',
    date: '5h ago',
    content: '必须吹一下他们的推测解码（Speculative Decoding）和 3D 地球仪组件，交互阻尼细节堪比苹果官网，直接把产品档次拉满。💯',
    replies: 12,
    retweets: 29,
    likes: 240,
  },
  {
    handle: '@david_tech',
    name: 'David Thorne',
    avatar: 'DT',
    date: '1d ago',
    content: '之前用其他动效库总遇到类型报错或者样式污染，Aura UI 的每个组件都通过了 vue-tsc 严格编译，TypeScript 体验拉满！❤️',
    replies: 34,
    retweets: 85,
    likes: 610,
  },
]
</script>

<template>
  <div class="relative w-full overflow-hidden bg-white py-16 sm:py-24 dark:bg-zinc-950 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 text-xs font-semibold mb-4">
          <MessageCircle class="w-3.5 h-3.5" />
          <span>社交网络热议 · 实时互动表情流</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          社交媒体热议
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600">
            推特 / X 社区动态墙
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          点击推文下方即可实时互动点赞与追加表情反馈。
        </p>
      </div>

      <!-- 推特流三列卡片网格 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
        <div
          v-for="tw in tweets"
          :key="tw.handle"
          class="p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <!-- 头部头像与账号 -->
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-500 to-blue-600 text-white font-bold text-xs flex items-center justify-center">
                  {{ tw.avatar }}
                </div>
                <div>
                  <div class="text-xs font-bold text-zinc-900 dark:text-white">{{ tw.name }}</div>
                  <div class="text-[11px] text-zinc-400">{{ tw.handle }}</div>
                </div>
              </div>
              <span class="text-[10px] text-zinc-400 font-mono">{{ tw.date }}</span>
            </div>

            <p class="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {{ tw.content }}
            </p>
          </div>

          <!-- 底部交互表情：集成 Reactions 原子组件 -->
          <div class="mt-6 pt-4 border-t border-zinc-200/80 dark:border-zinc-800">
            <Reactions />

            <!-- 统计小按钮 -->
            <div class="mt-4 flex items-center justify-between text-xs text-zinc-400">
              <span class="flex items-center gap-1 hover:text-blue-500 transition-colors">
                <MessageCircle class="w-3.5 h-3.5" />
                {{ tw.replies }}
              </span>
              <span class="flex items-center gap-1 hover:text-emerald-500 transition-colors">
                <Repeat class="w-3.5 h-3.5" />
                {{ tw.retweets }}
              </span>
              <span class="flex items-center gap-1 hover:text-rose-500 transition-colors">
                <Heart class="w-3.5 h-3.5" />
                {{ tw.likes }}
              </span>
              <Share class="w-3.5 h-3.5 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
