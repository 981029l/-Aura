const n=`<script setup lang="ts">
import { ref } from 'vue'
import { Sparkles, ArrowLeft, ArrowRight, Quote } from 'lucide-vue-next'
import StarRating from '@/components/ui/StarRating.vue'
import PaginationSlider from '@/components/ui/PaginationSlider.vue'

const slides = [
  {
    company: 'Stripe Ecosystem',
    author: 'Liam O’Connor',
    role: 'Principal UI Engineer',
    quote: 'Aura UI 将我们过去需要几千行手写 WebGL/Canvas 的复杂微交互，压缩成了一个个纯粹的 Vue 3.5 SFC。设计还原度达到了 100%。',
  },
  {
    company: 'Anthropic Partner Network',
    author: 'Maya Lin',
    role: 'AI Product Director',
    quote: '多智能体思考链与推测解码的场景组合极其震撼。我们在投资者演示日上展示了新界面，反响极其热烈。',
  },
  {
    company: 'Vercel Partner Studio',
    author: 'Carlos Santana',
    role: 'Design Lead',
    quote: '无论是夜间深邃暗色还是明亮日光模式，对比度都符合最高的 WCAG 规范。这是前端组件库设计的新标杆。',
  },
]

const currentPage = ref(1)

function prev() {
  if (currentPage.value > 1) currentPage.value--
  else currentPage.value = slides.length
}

function next() {
  if (currentPage.value < slides.length) currentPage.value++
  else currentPage.value = 1
}
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-white py-16 sm:py-24 dark:bg-zinc-950 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-14">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
          <Sparkles class="w-3.5 h-3.5" />
          <span>分屏轮播 · 交互式滑块阅览</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          翻页沉浸体验
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            客户全真访谈长文
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          通过下方分页滑块控制条，探索每一位企业客户的技术选型故事。
        </p>
      </div>

      <!-- 轮播核心主体 -->
      <div class="max-w-3xl mx-auto relative">
        <div class="p-8 sm:p-12 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 shadow-xl text-left relative overflow-hidden transition-all duration-300">
          <Quote class="w-16 h-16 text-zinc-200 dark:text-zinc-800 absolute right-6 top-6 pointer-events-none select-none opacity-60" />

          <div class="relative z-10">
            <div class="flex items-center justify-between mb-6">
              <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                {{ slides[currentPage - 1].company }}
              </span>
              <StarRating :modelValue="5" :readonly="true" color="#f59e0b" />
            </div>

            <blockquote class="text-lg sm:text-2xl font-bold text-zinc-900 dark:text-white leading-relaxed min-h-[90px]">
              “{{ slides[currentPage - 1].quote }}”
            </blockquote>

            <div class="mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
              <div>
                <div class="text-sm font-bold text-zinc-900 dark:text-white">
                  {{ slides[currentPage - 1].author }}
                </div>
                <div class="text-xs text-zinc-500">
                  {{ slides[currentPage - 1].role }}
                </div>
              </div>

              <!-- 左右切换按键 -->
              <div class="flex items-center gap-2">
                <button
                  @click="prev"
                  class="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors"
                >
                  <ArrowLeft class="w-4 h-4" />
                </button>
                <button
                  @click="next"
                  class="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors"
                >
                  <ArrowRight class="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 底部平滑滑块分页器：集成 PaginationSlider 原子组件 -->
        <div class="mt-8 flex justify-center">
          <PaginationSlider
            v-model="currentPage"
            :totalPages="slides.length"
            :showSlider="true"
            class="max-w-xs"
          />
        </div>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
