<template>
  <div
    ref="containerRef"
    class="relative w-full max-w-4xl mx-auto py-8 px-4 select-none"
    :class="className"
  >
    <!-- Header / Eyebrow info -->
    <div class="flex items-center justify-between mb-6">
      <div>
        <p v-if="hint" class="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-1">
          {{ hint }}
        </p>
        <h3 v-if="heading" class="text-xl md:text-2xl font-bold text-neutral-100">
          {{ heading }}
        </h3>
      </div>
      <div class="flex items-center gap-2">
        <button
          class="p-2 rounded-full border border-neutral-700 bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 disabled:opacity-40 transition-colors"
          :disabled="currentIndex === 0"
          @click="prevCard"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <span class="text-xs font-mono text-neutral-400 px-1">
          {{ currentIndex + 1 }} / {{ items.length }}
        </span>
        <button
          class="p-2 rounded-full border border-neutral-700 bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 disabled:opacity-40 transition-colors"
          :disabled="currentIndex === items.length - 1"
          @click="nextCard"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>

    <!-- 3D Card Stack Container -->
    <div class="relative w-full aspect-[4/5] sm:aspect-[1.8/1]" style="perspective: 1200px;">
      <article
        v-for="(item, index) in items"
        :key="index"
        class="absolute inset-0 will-change-transform transition-all duration-700 ease-out"
        :style="getCardStyle(index)"
      >
        <div
          class="grid h-full overflow-hidden rounded-3xl shadow-2xl sm:grid-cols-[1.15fr_0.85fr] border border-white/10"
          :style="{
            backgroundColor: item.background,
            color: item.foreground || '#ffffff',
          }"
        >
          <!-- Left side content -->
          <div class="flex flex-col justify-between p-6 sm:p-10">
            <div class="flex items-start">
              <span class="text-3xl font-bold font-mono tracking-tighter opacity-80">
                {{ item.number || String(index + 1).padStart(2, '0') }}
              </span>
            </div>

            <div class="mt-4">
              <p class="text-xs font-semibold uppercase tracking-widest opacity-80 mb-2">
                {{ item.eyebrow }}
              </p>
              <h2 class="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                {{ item.title }}
              </h2>
              <p class="mt-3 text-xs sm:text-sm leading-relaxed opacity-90 line-clamp-3">
                {{ item.description }}
              </p>
            </div>
          </div>

          <!-- Right side image -->
          <div class="relative m-3 sm:m-4 min-h-[140px] sm:min-h-full overflow-hidden rounded-2xl bg-black/20">
            <img
              :src="item.image"
              :alt="item.imageAlt || item.title"
              class="h-full w-full object-cover"
              loading="lazy"
            />
            <div class="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-white/10" />
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
export interface CaseStudyFlipItem {
  number?: string
  eyebrow: string
  title: string
  description: string
  image: string
  imageAlt?: string
  background: string
  foreground?: string
}

export const DEFAULT_ITEMS: CaseStudyFlipItem[] = [
  {
    eyebrow: '设计系统 / 组件库',
    title: '为 Web、iOS 和 Android 建立统一的设计系统',
    description:
      '整理颜色、字号和间距等基础规范，沉淀了 60 多个通用组件，新页面的开发时间明显缩短。',
    image:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1000&q=85&auto=format&fit=crop',
    background: '#0f172a',
    foreground: '#f8fafc',
  },
  {
    eyebrow: 'AI 助手 / 对话界面',
    title: '让用户看到 AI 每一步在做什么',
    description:
      '在对话中展示模型的思考过程、调用的工具和引用的资料，用户可以随时打断或纠正。',
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&q=85&auto=format&fit=crop',
    background: '#312e81',
    foreground: '#e0e7ff',
  },
  {
    eyebrow: '品牌官网 / WebGL 背景',
    title: '用 WebGL 动态背景提升品牌官网的视觉表现',
    description:
      '首屏使用流体渐变背景，并针对移动端降低渲染开销，保证滚动流畅。',
    image:
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1000&q=85&auto=format&fit=crop',
    background: '#064e3b',
    foreground: '#ecfdf5',
  },
  {
    eyebrow: '支付应用 / 安全确认',
    title: '用长按确认减少转账误操作',
    description:
      '大额转账和删除账户等操作需要长按确认，松手即取消，避免一次误触就执行。',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1000&q=85&auto=format&fit=crop',
    background: '#831843',
    foreground: '#fdf2f8',
  },
]
</script>

<script setup lang="ts">
import { ref, type CSSProperties } from 'vue'

interface Props {
  items?: CaseStudyFlipItem[]
  hint?: string
  heading?: string
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  items: () => DEFAULT_ITEMS,
  hint: 'FEATURED CASE STUDIES',
  heading: 'Selected Works & Case Studies',
  className: '',
})

const currentIndex = ref(0)
const containerRef = ref<HTMLDivElement | null>(null)

function nextCard() {
  if (currentIndex.value < props.items.length - 1) {
    currentIndex.value++
  }
}

function prevCard() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

function getCardStyle(index: number): CSSProperties {
  const total = props.items.length
  const diff = index - currentIndex.value

  if (diff < 0) {
    // Card has flipped away (upwards with 3D tilt)
    return {
      zIndex: total + diff,
      transform: 'translate3d(0, -115%, 0) rotateX(25deg) scale(0.9)',
      opacity: '0',
      pointerEvents: 'none' as const,
    }
  } else if (diff === 0) {
    // Active card
    return {
      zIndex: total,
      transform: 'translate3d(0, 0, 0) rotateX(0deg) scale(1)',
      opacity: '1',
      pointerEvents: 'auto' as const,
    }
  } else {
    // Upcoming stacked cards below
    const offset = Math.min(diff * 14, 32)
    const scale = Math.max(0.88, 1 - diff * 0.04)
    return {
      zIndex: total - diff,
      transform: `translate3d(0, ${offset}px, -${diff * 40}px) scale(${scale})`,
      opacity: diff > 3 ? '0' : '1',
      pointerEvents: 'none' as const,
    }
  }
}
</script>
