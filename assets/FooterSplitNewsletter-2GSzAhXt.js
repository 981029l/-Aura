const e=`<script setup lang="ts">
import { ref } from 'vue'
import { Mail, Check, Sparkles, Send, ShieldCheck } from 'lucide-vue-next'
import ShimmerButton from '@/components/ui/ShimmerButton.vue'

const email = ref('')
const isSubscribed = ref(false)
const subscriberCount = '52,480+'

function subscribe() {
  if (!email.value) return
  isSubscribed.value = true
  setTimeout(() => {
    isSubscribed.value = false
    email.value = ''
  }, 4000)
}
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-20 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <!-- 分栏卡片 -->
      <div class="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl p-8 sm:p-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <!-- 左侧：技术周刊介绍与订阅者人数 (7 cols) -->
          <div class="lg:col-span-7 space-y-4 text-left">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 text-xs font-semibold">
              <Mail class="w-3.5 h-3.5" />
              <span>AURA WEEKLY 前沿技术专刊</span>
            </div>

            <h3 class="text-2xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
              每周五准时速递，深度解构全球顶级交互与架构工程
            </h3>

            <p class="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
              加入全球超过 <span class="font-bold text-sky-600 dark:text-sky-400">{{ subscriberCount }}</span> 位技术总监与独立开发者的订阅列表。包含原创 Vue 3.5 动效解密、全栈最佳实践与无锁算法解析。
            </p>

            <div class="flex items-center gap-4 text-xs text-zinc-500 pt-2">
              <span class="flex items-center gap-1.5">
                <Sparkles class="w-3.5 h-3.5 text-amber-500" />
                <span>零商业广告轰炸</span>
              </span>
              <span>•</span>
              <span class="flex items-center gap-1.5">
                <ShieldCheck class="w-3.5 h-3.5 text-emerald-500" />
                <span>随时一键取消订阅</span>
              </span>
            </div>
          </div>

          <!-- 右侧：订阅输入框与流光提交按钮 (5 cols) -->
          <div class="lg:col-span-5 text-left">
            <div class="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60 space-y-4">
              <div v-if="!isSubscribed" class="space-y-3">
                <label class="block text-xs font-bold text-zinc-700 dark:text-zinc-200">
                  订阅官方邮件通讯
                </label>
                <div class="space-y-3">
                  <div class="relative">
                    <Mail class="w-4 h-4 text-zinc-400 absolute left-3.5 top-3" />
                    <input
                      v-model="email"
                      type="email"
                      placeholder="输入您的常用工作邮箱..."
                      class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <!-- 流光按钮 (复用 ShimmerButton 原子组件) -->
                  <ShimmerButton
                    @click="subscribe"
                    shimmerColor="#38bdf8"
                    shimmerDuration="2s"
                    class="w-full py-2.5 px-4 text-xs font-bold text-white shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>即刻加入技术周刊</span>
                    <Send class="w-3.5 h-3.5" />
                  </ShimmerButton>
                </div>
                <p class="text-[10px] text-zinc-400 text-center">
                  点击订阅即代表您同意我们的隐私合规条款，我们绝不出售您的邮箱信息。
                </p>
              </div>

              <!-- 订阅成功反馈 -->
              <div v-else class="text-center py-4 space-y-2 animate-fade-in">
                <div class="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 mx-auto flex items-center justify-center">
                  <Check class="w-5 h-5" />
                </div>
                <h4 class="text-sm font-bold text-zinc-900 dark:text-white">订阅成功！欢迎同行</h4>
                <p class="text-xs text-zinc-500">确认邮件已送达您的收件箱，请查收首期精彩专刊。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`;export{e as default};
