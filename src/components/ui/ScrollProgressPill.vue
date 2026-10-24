<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { Compass, ArrowUp, BookOpen, Clock } from 'lucide-vue-next'

export interface ScrollProgressPillProps {
  title?: string
  subtitle?: string
  class?: string
}

const props = withDefaults(defineProps<ScrollProgressPillProps>(), {
  title: '',
  subtitle: '',
})

const scrollPercent = ref(42)
const currentChapter = ref('03 · 如何计算向量相似度')
const readingTimeLeft = '约 4 分钟读完'

const chapters = [
  '01 · 什么是向量嵌入',
  '02 · 从 Word2Vec 到 Transformer',
  '03 · 如何计算向量相似度',
  '04 · 向量数据库的索引',
]

function handleScroll(e: Event) {
  const target = e.target as HTMLElement
  const total = target.scrollHeight - target.clientHeight
  if (total > 0) {
    const percent = Math.round((target.scrollTop / total) * 100)
    scrollPercent.value = percent

    // 动态章节映射
    const idx = Math.min(chapters.length - 1, Math.floor((percent / 100) * chapters.length))
    currentChapter.value = chapters[idx]
  }
}

function scrollToTop() {
  const container = document.getElementById('aura-scroll-content')
  if (container) {
    container.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<template>
  <div :class="cn('w-full max-w-xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6', props.class)">
    <!-- 头部指标栏 -->
    <div class="flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800/80">
      <div class="flex items-center gap-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
        <Compass class="h-4 w-4 text-teal-500" />
        <span>{{ props.title || '阅读进度胶囊' }}</span>
        <span v-if="props.subtitle" class="text-xs text-zinc-400 font-mono">
          · {{ props.subtitle }}
        </span>
      </div>

      <div class="flex items-center gap-1.5 text-xs font-mono text-teal-600 dark:text-teal-400">
        <Clock class="h-3.5 w-3.5" />
        <span>{{ readingTimeLeft }}</span>
      </div>
    </div>

    <!-- 模拟长文阅读视窗 (带有悬浮进度胶囊) -->
    <div class="relative rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 overflow-hidden shadow-inner">
      <!-- 悬浮在右上方的进度药丸胶囊 -->
      <div class="absolute top-4 right-4 z-20 flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-700/90 shadow-lg backdrop-blur-md transition-all">
        <!-- SVG 环形进度条 -->
        <div class="relative w-6 h-6 flex items-center justify-center">
          <svg class="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <path
              class="text-zinc-200 dark:text-zinc-800"
              stroke-width="3.5"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              class="text-teal-500 transition-all duration-150"
              stroke-dasharray="100, 100"
              :stroke-dashoffset="100 - scrollPercent"
              stroke-linecap="round"
              stroke-width="3.5"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <span class="absolute text-[8px] font-mono font-bold text-zinc-700 dark:text-zinc-300">
            {{ scrollPercent }}
          </span>
        </div>

        <div class="flex items-center gap-1.5 border-l border-zinc-200 dark:border-zinc-800 pl-2 text-xs font-mono font-bold text-zinc-800 dark:text-zinc-200 truncate max-w-[140px]">
          <BookOpen class="h-3 w-3 text-teal-500 shrink-0" />
          <span class="truncate">{{ currentChapter.split('·')[0].trim() }}</span>
        </div>

        <button
          type="button"
          @click="scrollToTop"
          class="p-1 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer"
          title="回到顶部"
        >
          <ArrowUp class="h-3.5 w-3.5" />
        </button>
      </div>

      <!-- 可滚动长文正文容器 -->
      <div
        id="aura-scroll-content"
        @scroll="handleScroll"
        class="h-64 overflow-y-auto p-6 space-y-4 text-xs font-sans text-zinc-600 dark:text-zinc-300 leading-relaxed bg-zinc-50/60 dark:bg-zinc-950/60"
      >
        <div v-for="(chap, i) in chapters" :key="i" class="space-y-2 pb-6 border-b border-zinc-200/50 dark:border-zinc-800/50 last:border-none">
          <h5 class="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <span class="w-1.5 h-4 bg-teal-500 rounded-full" />
            <span>{{ chap }}</span>
          </h5>
          <p>
            向量嵌入（Vector Embedding）是把文字、图片等内容转换成一组数字。意思相近的内容，转换后的向量在空间中的距离也更近，这正是语义搜索的基础。
          </p>
          <p class="text-zinc-500 text-[11px]">
            在实际应用中，通常用余弦相似度衡量两个向量有多接近，并借助 HNSW 等近似最近邻索引，在大量向量中快速找到最相似的结果。在这个区域内滚动，可以看到右上角的进度胶囊随之变化。
          </p>
        </div>
      </div>
    </div>

    <!-- 底部状态说明条 -->
    <div class="flex items-center justify-between text-xs font-mono text-zinc-400">
      <span>当前章节：{{ currentChapter }}</span>
      <span class="text-teal-600 dark:text-teal-400 font-bold">已阅 {{ scrollPercent }}%</span>
    </div>
  </div>
</template>
