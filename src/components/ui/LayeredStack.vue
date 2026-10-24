<template>
  <div
    ref="containerRef"
    class="relative w-full min-h-[420px] p-6 sm:p-10 flex flex-col items-center justify-center select-none rounded-2xl bg-neutral-950 overflow-hidden border border-white/10"
    :class="className"
    @mouseenter="isContainerHovered = true"
    @mouseleave="handleContainerLeave"
  >
    <!-- Top Interactive Status / Reset Bar -->
    <div class="mb-4 flex items-center justify-between w-full max-w-2xl px-2 text-xs text-neutral-400">
      <div class="flex items-center gap-2">
        <span
          class="inline-block w-2 h-2 rounded-full transition-colors duration-300"
          :class="activeCardIndex !== null ? 'bg-sky-400 animate-pulse' : 'bg-neutral-600'"
        />
        <span class="font-medium text-neutral-300">
          {{ activeCardIndex !== null ? `当前选中：${displayCards[activeCardIndex]?.title}` : '悬停时卡片展开，点击可选中' }}
        </span>
      </div>

      <button
        v-if="activeCardIndex !== null"
        @click.stop="activeCardIndex = null"
        class="text-[11px] text-sky-400 hover:text-sky-300 underline font-mono transition-colors cursor-pointer"
      >
        取消选中
      </button>
    </div>

    <!-- Cards Arena -->
    <div class="relative w-full max-w-2xl h-[320px] flex items-center justify-center">
      <div
        v-for="(card, i) in displayCards"
        :key="i"
        class="absolute w-[210px] sm:w-[250px] h-[290px] rounded-2xl p-6 flex flex-col justify-between border transition-all duration-500 ease-out will-change-transform cursor-pointer"
        :class="[
          activeCardIndex === i
            ? 'ring-2 ring-sky-400 shadow-2xl shadow-sky-500/30 border-sky-400/80'
            : hoveredCardIndex === i
            ? 'border-white/40 shadow-2xl shadow-black/80'
            : 'border-white/10 shadow-xl opacity-90 hover:opacity-100'
        ]"
        :style="getCardStyle(i)"
        @mouseenter="hoveredCardIndex = i"
        @mouseleave="hoveredCardIndex = null"
        @click.stop="selectCard(i)"
      >
        <!-- Slot support: Allows developers to pass completely custom card templates -->
        <slot
          name="card"
          :card="card"
          :index="i"
          :is-selected="activeCardIndex === i"
          :is-hovered="hoveredCardIndex === i"
        >
          <!-- Default Card Header -->
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-white border border-white/20">
              0{{ i + 1 }}
            </span>
            <div class="flex items-center gap-1.5">
              <span
                v-if="activeCardIndex === i"
                class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-sky-400 text-slate-950 font-bold"
              >
                ACTIVE
              </span>
              <span
                class="w-2.5 h-2.5 rounded-full transition-transform duration-300"
                :class="activeCardIndex === i ? 'bg-sky-400 scale-125' : 'bg-white/40'"
              />
            </div>
          </div>

          <!-- Default Card Body -->
          <div>
            <h4 class="text-lg font-bold text-white mb-1.5 tracking-tight flex items-center justify-between">
              <span>{{ card.title }}</span>
              <span
                class="text-xs transition-transform duration-300"
                :class="activeCardIndex === i || hoveredCardIndex === i ? 'translate-x-0.5 -translate-y-0.5 opacity-100' : 'opacity-40'"
              >
                ↗
              </span>
            </h4>
            <p class="text-xs text-white/80 leading-relaxed line-clamp-3">
              {{ card.description }}
            </p>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export interface LayeredCard {
  title: string
  description: string
  bg: string
}

// Neutral, generic UI engineering demo tokens instead of personal portfolio text
export const DEFAULT_CARDS: LayeredCard[] = [
  {
    title: '3D 效果',
    description: '倾斜、视差和带纵深感的组件。',
    bg: 'linear-gradient(135deg, #4338ca 0%, #1e1b4b 100%)',
  },
  {
    title: '交互动效',
    description: '拖拽、长按和带弹性回弹的交互。',
    bg: 'linear-gradient(135deg, #0e7490 0%, #083344 100%)',
  },
  {
    title: 'AI 组件',
    description: '思考过程、工具调用和流式输出。',
    bg: 'linear-gradient(135deg, #be185d 0%, #500724 100%)',
  },
  {
    title: '背景与质感',
    description: '点阵、全息和渐变背景。',
    bg: 'linear-gradient(135deg, #b45309 0%, #451a03 100%)',
  },
]
</script>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  cards?: LayeredCard[]
  modelValue?: number | null
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  cards: () => DEFAULT_CARDS,
  modelValue: null,
  className: '',
})

const emit = defineEmits<{
  (e: 'update:modelValue', index: number | null): void
  (e: 'select', card: LayeredCard, index: number): void
}>()

const isContainerHovered = ref(false)
const hoveredCardIndex = ref<number | null>(null)
const activeCardIndex = ref<number | null>(props.modelValue ?? null)

const displayCards = computed(() => {
  return props.cards && props.cards.length > 0 ? props.cards : DEFAULT_CARDS
})

const STACK_ROTATIONS = [-7, 5, -3, 8]

function handleContainerLeave() {
  isContainerHovered.value = false
  hoveredCardIndex.value = null
}

function selectCard(index: number) {
  if (activeCardIndex.value === index) {
    activeCardIndex.value = null
    emit('update:modelValue', null)
  } else {
    activeCardIndex.value = index
    emit('update:modelValue', index)
    const card = displayCards.value[index]
    if (card) {
      emit('select', card, index)
    }
  }
}

function getCardStyle(i: number) {
  const len = displayCards.value.length
  const rot = STACK_ROTATIONS[i % STACK_ROTATIONS.length]!

  const isSelected = activeCardIndex.value === i
  const isCardHovered = hoveredCardIndex.value === i
  const background = displayCards.value[i]!.bg

  // 1. Collapsed stacked state (when not hovering and nothing selected)
  if (!isContainerHovered.value && activeCardIndex.value === null) {
    return {
      background,
      transform: `translate3d(0, 0, 0) rotate(${rot}deg)`,
      zIndex: len - i,
    }
  }

  // 2. Expanded spread state (hovered or has selected card)
  const centerIdx = (len - 1) / 2
  const spreadX = (i - centerIdx) * 165
  let spreadY = Math.abs(i - centerIdx) * 10
  let scale = 1
  let currentRot = rot * 0.25

  // Default layered stack zIndex
  let zIndex = i + 1

  if (isSelected) {
    zIndex = 100 // Selected card floats to topmost
    spreadY -= 30
    scale = 1.08
    currentRot = 0
  } else if (isCardHovered) {
    zIndex = 80 // Hovered card rises above its neighbours to prevent occlusion
    spreadY -= 18
    scale = 1.05
    currentRot = 0
  } else if (activeCardIndex.value !== null) {
    // Settle unselected cards slightly back
    scale = 0.94
    spreadY += 6
  }

  return {
    background,
    transform: `translate3d(${spreadX}px, ${spreadY}px, 0) rotate(${currentRot}deg) scale(${scale})`,
    zIndex,
  }
}
</script>
