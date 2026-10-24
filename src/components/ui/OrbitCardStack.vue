<template>
  <div
    class="relative flex min-h-full w-full items-center justify-center overflow-hidden p-6 sm:p-8 select-none"
    :class="className"
  >
    <div
      ref="stageRef"
      class="relative h-[480px] w-full max-w-[980px] flex items-center justify-center"
      role="list"
      aria-label="Profile card stack"
      @mouseleave="close"
      @blur="leaveFocus"
    >
      <article
        v-for="(item, index) in cards"
        :key="`${item.name}-${index}`"
        role="listitem"
        tabindex="0"
        :aria-current="index === activeIndex ? 'true' : undefined"
        class="absolute left-1/2 top-1/2 w-[min(78vw,20.5rem)] origin-bottom cursor-pointer rounded-[1.9rem] border border-black/10 dark:border-white/10 bg-[#e9e6df] dark:bg-[#1a1b1e] p-4 text-[#141414] dark:text-[#f4f4f5] outline-none shadow-xl transition-all ease-[cubic-bezier(.2,.8,.2,1)] focus-visible:ring-2 focus-visible:ring-cyan-500"
        :class="cardClassName"
        :style="getCardStyle(index)"
        @mouseenter="activate(index)"
        @focus="activate(index)"
        @click="activate(index)"
        @keydown="handleKeyDown($event, index)"
      >
        <!-- Card Top Visual / Portrait -->
        <div class="relative">
          <!-- Portrait Container -->
          <div class="relative flex aspect-[1.36] w-full overflow-hidden rounded-[1.45rem] border border-black/[0.08] dark:border-white/10 bg-black/[0.045] dark:bg-white/[0.05]">
            <img
              v-if="item.image"
              :src="item.image"
              :alt="item.name"
              class="h-full w-full object-cover"
              loading="lazy"
            >
            <!-- Stylized Minimalist Avatar Fallback -->
            <div
              v-else
              class="relative w-full h-full flex items-center justify-center overflow-hidden"
              :style="{ '--portrait-accent': item.accent || '#38bdf8' } as any"
            >
              <div
                class="absolute inset-0 opacity-40"
                style="background: radial-gradient(circle at 22% 20%, var(--portrait-accent), transparent 28%), radial-gradient(circle at 85% 72%, rgba(255,255,255,0.4), transparent 32%);"
              />
              <div class="absolute inset-x-8 bottom-0 h-[72%] rounded-t-[999px] border-2 border-zinc-950 dark:border-white/20 bg-[#f7f5ef] dark:bg-zinc-800" />
              <div class="absolute left-1/2 top-[22%] w-20 h-20 -translate-x-1/2 rounded-[45%_55%_48%_52%] border-2 border-zinc-950 dark:border-white/20 bg-[#f5f2eb] dark:bg-zinc-700">
                <span class="absolute left-[27%] top-[34%] w-2 h-2 rounded-full bg-zinc-950 dark:bg-white" />
                <span class="absolute right-[27%] top-[34%] w-2 h-2 rounded-full bg-zinc-950 dark:bg-white" />
                <span class="absolute left-1/2 top-[52%] h-5 w-3.5 -translate-x-1/2 rounded-b-full border-b-2 border-zinc-950 dark:border-white" />
                <span
                  class="absolute -top-4 left-1/2 h-8 w-20 -translate-x-1/2 rounded-t-full border-2 border-b-0 border-zinc-950 dark:border-white/20"
                  :style="{ backgroundColor: item.accent || '#38bdf8' }"
                />
              </div>
            </div>

            <!-- Initials Pill -->
            <span class="absolute bottom-3 right-3 rounded-full bg-zinc-950/90 dark:bg-zinc-900 border border-white/20 px-2.5 py-0.5 text-[11px] font-mono font-semibold tracking-[0.16em] text-white">
              {{ initialsFor(item) }}
            </span>
          </div>

          <!-- Arrow Corner Floating Badge -->
          <span class="absolute right-3 top-3 grid w-9 h-9 place-items-center rounded-full bg-zinc-950/90 dark:bg-white text-white dark:text-zinc-950 shadow-md transition-transform duration-300 group-hover:scale-110">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </span>
        </div>

        <!-- Card Body Info -->
        <div class="px-2 pb-2 pt-5">
          <p class="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
            {{ item.role }}
          </p>
          <h3 class="mt-1.5 text-2xl font-bold leading-none tracking-tight text-zinc-950 dark:text-white">
            {{ item.name }}
          </h3>
          <p class="mt-3 line-clamp-3 text-xs leading-relaxed text-zinc-700 dark:text-zinc-300">
            {{ item.description }}
          </p>
          <div class="mt-4 border-t border-black/10 dark:border-white/10 pt-3 flex items-center justify-between text-[0.68rem] font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            <span>{{ item.stat ?? 'Identity' }}</span>
            <span
              class="w-2 h-2 rounded-full"
              :style="{ backgroundColor: item.accent || '#38bdf8' }"
            />
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
export interface OrbitStackItem {
  name: string
  role: string
  description: string
  accent?: string
  initials?: string
  stat?: string
  image?: string
}

export const DEFAULT_ORBIT_ITEMS: OrbitStackItem[] = [
  {
    name: "Elena Rostova",
    role: "Principal Architect / 系统架构师",
    description: "负责设计系统和前端架构，制定组件规范和设计 Token。",
    accent: "#38bdf8",
    initials: "ER",
    stat: "Systems",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Kai Thorne",
    role: "AI Researcher / AI 研究员",
    description: "研究如何把模型的推理过程清楚地展示给用户。",
    accent: "#a855f7",
    initials: "KT",
    stat: "Cognition",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Marcus Vance",
    role: "Creative Director / 创意总监",
    description: "负责品牌视觉和官网设计，关注动效与转化率。",
    accent: "#f59e0b",
    initials: "MV",
    stat: "Aesthetic",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Aria Sterling",
    role: "Graphics Engineer / 图形工程师",
    description: "负责 WebGL 背景和图形效果，并优化渲染性能。",
    accent: "#10b981",
    initials: "AS",
    stat: "Optics",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Julian Hayes",
    role: "VP of Design / 设计副总裁",
    description: "管理设计团队，推动设计稿和最终代码保持一致。",
    accent: "#ec4899",
    initials: "JH",
    stat: "Craft",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85",
  },
]
</script>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  items?: OrbitStackItem[]
  className?: string
  cardClassName?: string
  defaultActiveIndex?: number
  spread?: number
  lift?: number
}

const props = withDefaults(defineProps<Props>(), {
  items: () => DEFAULT_ORBIT_ITEMS,
  className: '',
  cardClassName: '',
  defaultActiveIndex: 2,
  spread: 168,
  lift: 36,
})

const emit = defineEmits<{
  (e: 'active-change', item: OrbitStackItem, index: number): void
}>()

const cards = computed(() => (props.items && props.items.length ? props.items : DEFAULT_ORBIT_ITEMS))
const restingIndex = computed(() => Math.min(Math.max(0, props.defaultActiveIndex), cards.value.length - 1))
const activeIndex = ref(restingIndex.value)
const isOpen = ref(false)
const stageRef = ref<HTMLDivElement | null>(null)

function initialsFor(item: OrbitStackItem) {
  return (
    item.initials ??
    item.name
      .split(/\s+/)
      .map((part) => part.charAt(0))
      .join('')
      .slice(0, 2)
      .toUpperCase()
  )
}

function activate(index: number) {
  const next = Math.min(Math.max(0, index), cards.value.length - 1)
  isOpen.value = true
  activeIndex.value = next
  const current = cards.value[next]
  if (current) {
    emit('active-change', current, next)
  }
}

function close() {
  isOpen.value = false
  activeIndex.value = restingIndex.value
}

function leaveFocus(event: FocusEvent) {
  const currentTarget = event.currentTarget as HTMLElement | null
  const relatedTarget = event.relatedTarget as HTMLElement | null
  if (currentTarget && !currentTarget.contains(relatedTarget)) {
    close()
  }
}

function handleKeyDown(event: KeyboardEvent, index: number) {
  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
    event.preventDefault()
    const next = (index + 1) % cards.value.length
    activate(next)
  } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
    event.preventDefault()
    const next = (index - 1 + cards.value.length) % cards.value.length
    activate(next)
  } else if (event.key === 'Escape') {
    close()
  }
}

function getCardStyle(index: number) {
  const midpoint = (cards.value.length - 1) / 2
  const orbit = index - midpoint
  const stack = index - restingIndex.value

  const openLayout = {
    x: orbit * props.spread,
    y: Math.abs(orbit) * 28 + Math.max(0, Math.abs(orbit) - 1) * 10,
    rotation: orbit * 8.5,
  }

  const closedLayout = {
    x: stack * 10,
    y: Math.abs(stack) * 5,
    rotation: stack * 2.8,
  }

  const pos = isOpen.value ? openLayout : closedLayout
  const active = index === activeIndex.value

  const zIndex = active ? 80 : 50 - Math.abs(index - activeIndex.value)
  const translateY = pos.y - (isOpen.value && active ? props.lift : 0)
  const scale = isOpen.value ? 0.985 : 0.97

  return {
    zIndex,
    transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${translateY}px)) rotate(${pos.rotation}deg) scale(${scale})`,
    transitionDuration: '420ms',
  }
}
</script>
