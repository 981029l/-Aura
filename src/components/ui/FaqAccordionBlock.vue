<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { Plus, HelpCircle } from 'lucide-vue-next'

export interface FaqItem {
  id: string | number
  question: string
  answer: string
}

interface FaqAccordionBlockProps {
  title?: string
  subtitle?: string
  items?: FaqItem[]
  multiple?: boolean
  class?: string
}

const props = withDefaults(defineProps<FaqAccordionBlockProps>(), {
  title: '常见问题解答',
  subtitle: '关于使用方式、性能和授权的常见问题',
  multiple: false,
  items: () => [
    {
      id: 'zero-config',
      question: '复制一个 .vue 文件就能用吗？',
      answer: '大多数组件可以。组件的动画关键帧写在各自的 <style scoped> 里，把 .vue 文件复制到项目的 src/components/ui/ 目录，再安装 @vueuse/core、clsx 和 tailwind-merge 即可使用，不需要修改 tailwind.config.js。少数组件用到了 animate-in 等入场动画类，需要同时把对应的几行 CSS 复制到全局样式中。',
    },
    {
      id: 'performance',
      question: '在手机和低配设备上会卡吗？',
      answer: '动画主要使用 transform 和 opacity，尽量避免触发页面重排；Canvas 和 WebGL 类组件在卸载时会停止动画并移除事件监听。粒子数量多或使用 WebGL 的组件开销相对较大，建议在目标设备上实际测试，必要时调低粒子数量等参数。',
    },
    {
      id: 'commercial',
      question: '可以用在商业项目里吗？',
      answer: '可以。Aura UI 使用 MIT 协议，可以用于商业产品和客户项目，也可以自由修改。如果分发源码，需要保留原有的版权和许可声明。',
    },
    {
      id: 'typescript',
      question: '支持 TypeScript 吗？',
      answer: '支持。所有组件都使用 <script setup lang="ts"> 编写，Props 和事件都有类型定义，在编辑器中可以获得自动补全。',
    },
  ],
})

const activeIds = ref<(string | number)[]>([props.items[0]?.id || 'zero-config'])

function toggleItem(id: string | number) {
  if (props.multiple) {
    if (activeIds.value.includes(id)) {
      activeIds.value = activeIds.value.filter((i) => i !== id)
    } else {
      activeIds.value.push(id)
    }
  } else {
    if (activeIds.value.includes(id)) {
      activeIds.value = []
    } else {
      activeIds.value = [id]
    }
  }
}
</script>

<template>
  <div :class="cn('w-full py-12 select-none', props.class)">
    <div class="mx-auto max-w-4xl px-4 sm:px-6">
      <!-- 头部标题文案 -->
      <div class="text-center max-w-xl mx-auto mb-10 space-y-3">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
          <HelpCircle class="h-3.5 w-3.5" />
          <span>GOT QUESTIONS?</span>
        </span>
        <h2 class="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
          {{ props.title }}
        </h2>
        <p class="text-sm text-zinc-500 font-normal">
          {{ props.subtitle }}
        </p>
      </div>

      <!-- 手风琴折叠列表 -->
      <div class="space-y-3.5">
        <div
          v-for="item in props.items"
          :key="item.id"
          class="overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/90 backdrop-blur-xl transition-all dark:border-zinc-800/90 dark:bg-zinc-950/90"
        >
          <!-- 问题头部触发按钮 -->
          <button
            type="button"
            @click="toggleItem(item.id)"
            class="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-zinc-50/80 dark:hover:bg-zinc-900/50 cursor-pointer"
          >
            <span class="font-bold text-sm sm:text-base text-zinc-800 dark:text-zinc-200">
              {{ item.question }}
            </span>

            <span
              class="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400 transition-transform duration-200"
              :class="{ 'rotate-45 text-blue-500': activeIds.includes(item.id) }"
            >
              <Plus class="h-4 w-4" />
            </span>
          </button>

          <!-- 展开内容区 -->
          <transition name="faq-collapse">
            <div v-if="activeIds.includes(item.id)" class="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-900">
              {{ item.answer }}
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.faq-collapse-enter-active,
.faq-collapse-leave-active {
  transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.faq-collapse-enter-from,
.faq-collapse-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
