<template>
  <div
    ref="containerRef"
    class="relative w-full h-[540px] overflow-hidden rounded-2xl bg-neutral-950 text-white select-none cursor-grab active:cursor-grabbing group focus:outline-none"
    :class="className"
    tabindex="0"
    @pointerdown="handlePointerDown"
    @pointermove="handlePointerMove"
    @pointerup="handlePointerUp"
    @pointercancel="handlePointerUp"
    @wheel.prevent="handleWheel"
    @keydown.left="prevCard"
    @keydown.right="nextCard"
    @keydown.esc="closeModal"
  >
    <!-- Background Vignette & Ambient Glow -->
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(56,189,248,0.12),transparent_70%)]"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"
    />

    <!-- Brand Typography Header -->
    <div class="absolute top-6 left-6 z-30 pointer-events-none transition-all duration-300">
      <div class="flex items-center gap-2 mb-1">
        <span class="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400">Spatial Curation</span>
        <span class="px-2 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/15 text-cyan-300 border border-cyan-500/25">
          0{{ activeIndex + 1 }} / 0{{ items.length }}
        </span>
      </div>
      <h2 class="text-2xl sm:text-4xl font-black tracking-tight text-white drop-shadow-md">
        AURA RUNWAY SS/26
      </h2>
      <p class="text-xs text-zinc-400 font-mono mt-1 flex items-center gap-2">
        <span>当前作品：</span>
        <span class="text-cyan-300 font-semibold">{{ activeCard?.title }}</span>
      </p>
    </div>

    <!-- Top Right Runway Controls -->
    <div class="absolute top-6 right-6 z-30 flex items-center gap-2">
      <button
        type="button"
        class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/10 bg-black/60 hover:bg-white/10 text-xs text-zinc-300 font-mono backdrop-blur-md transition-colors cursor-pointer"
        @click.stop="isAutoDrift = !isAutoDrift"
        :title="isAutoDrift ? '暂停自动播放' : '自动播放'"
      >
        <component :is="isAutoDrift ? Pause : Play" class="w-3.5 h-3.5 text-cyan-400" />
        <span class="hidden sm:inline">{{ isAutoDrift ? '自动播放中' : '已暂停' }}</span>
      </button>

      <button
        type="button"
        class="p-2 rounded-xl border border-white/10 bg-black/60 hover:bg-white/10 text-zinc-300 backdrop-blur-md transition-colors cursor-pointer"
        @click.stop="prevCard"
        title="上一件"
      >
        <ChevronLeft class="w-4 h-4" />
      </button>
      <button
        type="button"
        class="p-2 rounded-xl border border-white/10 bg-black/60 hover:bg-white/10 text-zinc-300 backdrop-blur-md transition-colors cursor-pointer"
        @click.stop="nextCard"
        title="下一件"
      >
        <ChevronRight class="w-4 h-4" />
      </button>
    </div>

    <!-- 3D Spatial Runway -->
    <div
      class="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none"
      style="perspective: 1200px;"
    >
      <div
        class="relative w-0 h-0"
        :style="{
          transformStyle: 'preserve-3d',
          transform: `translate3d(0, 0, 0) rotateX(12deg) rotateY(-18deg)`,
        }"
      >
        <div
          v-for="(item, i) in displayItems"
          :key="`${item.id}-${i}`"
          class="card-runway absolute will-change-transform pointer-events-auto rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer"
          :class="[
            isCardAtFront(i)
              ? 'ring-2 ring-cyan-400/90 shadow-[0_0_45px_rgba(56,189,248,0.45)] border-cyan-400/70 brightness-110'
              : 'border-white/10 shadow-2xl opacity-75 hover:opacity-100 hover:border-white/30 hover:scale-105',
          ]"
          :style="getCardStyle(i)"
          @click.stop="onCardClick(item, i)"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-full object-cover transition-transform duration-700 ease-out"
            :class="isCardAtFront(i) ? 'scale-105' : 'hover:scale-105'"
            loading="lazy"
          />

          <!-- Gradient Overlay & Content -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent p-5 flex flex-col justify-end">
            <div class="flex items-center justify-between mb-1">
              <span
                class="text-[11px] font-mono font-bold transition-colors"
                :class="isCardAtFront(i) ? 'text-cyan-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]' : 'text-cyan-400/80'"
              >
                {{ item.badge || `LOOK 0${(i % items.length) + 1}` }}
              </span>
              <span
                v-if="isCardAtFront(i)"
                class="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-cyan-500/20 text-cyan-200 border border-cyan-400/40 flex items-center gap-1 animate-pulse"
              >
                <Sparkles class="w-2.5 h-2.5" />
                查看详情
              </span>
            </div>
            <h4 class="text-base font-bold text-white truncate drop-shadow-sm">
              {{ item.title }}
            </h4>
            <p v-if="item.subtitle" class="text-[10px] text-zinc-400 font-mono truncate mt-0.5">
              {{ item.subtitle }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Interactive Operation Pill -->
    <div
      class="pointer-events-none absolute bottom-5 right-5 z-30 flex items-center gap-2 rounded-full border border-white/15 bg-black/80 px-4 py-2 text-xs text-white/90 backdrop-blur-md shadow-xl transition-all duration-300"
    >
      <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
      <span class="font-mono text-[11px]">拖动浏览 · 点击卡片查看详情</span>
    </div>

    <!-- Bottom Runway Dots -->
    <div class="absolute bottom-5 left-6 z-30 flex items-center gap-1.5 pointer-events-auto">
      <button
        v-for="(_, idx) in items"
        :key="idx"
        type="button"
        class="h-1.5 rounded-full transition-all duration-300 cursor-pointer"
        :class="[
          activeIndex === idx
            ? 'w-6 bg-cyan-400 shadow-[0_0_10px_#38bdf8]'
            : 'w-1.5 bg-white/30 hover:bg-white/60',
        ]"
        @click.stop="scrollToCardIndex(idx)"
        :title="`切换到 0${idx + 1}`"
      />
    </div>

    <!-- 沉浸式卡片详情弹窗 / 模态卡片查看器 -->
    <Transition name="modal-fade">
      <div
        v-if="activeItem"
        class="absolute inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-xl pointer-events-auto select-text"
        @click.self="closeModal"
      >
        <div
          class="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-zinc-950/95 shadow-2xl flex flex-col md:flex-row text-white animate-in zoom-in-95 duration-200"
        >
          <!-- Close Button -->
          <button
            type="button"
            class="absolute top-3.5 right-3.5 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer border border-white/10"
            @click="closeModal"
            title="关闭"
          >
            <X class="w-4 h-4" />
          </button>

          <!-- Left Poster -->
          <div class="relative w-full md:w-5/12 h-64 md:h-auto min-h-[260px] overflow-hidden bg-black flex-shrink-0">
            <img
              :src="activeItem.image"
              :alt="activeItem.title"
              class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
              <span class="text-xs font-mono font-bold text-cyan-400">
                {{ activeItem.badge || 'LOOK SPEC' }}
              </span>
              <h3 class="text-lg font-black text-white leading-tight">
                {{ activeItem.title }}
              </h3>
            </div>
          </div>

          <!-- Right Content Specs -->
          <div class="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
            <div>
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                  {{ activeItem.category || 'AURA CREATIVE' }}
                </span>
                <span class="text-xs font-mono text-zinc-400">
                  ID: #{{ activeItem.id }}
                </span>
              </div>

              <h2 class="text-2xl font-black text-white tracking-tight">
                {{ activeItem.title }}
              </h2>
              <p v-if="activeItem.subtitle" class="text-xs font-mono text-cyan-400/90 mt-0.5">
                {{ activeItem.subtitle }}
              </p>

              <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed mt-3">
                {{ activeItem.description || '暂无详细介绍。' }}
              </p>

              <!-- Technical Specifications -->
              <div class="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-white/10">
                <div
                  v-for="(spec, sIdx) in (activeItem.specs || defaultSpecs)"
                  :key="sIdx"
                  class="p-2 rounded-lg bg-white/5 border border-white/5"
                >
                  <div class="text-[9px] font-mono text-zinc-400 uppercase tracking-wider">
                    {{ spec.label }}
                  </div>
                  <div class="text-xs font-mono font-semibold text-zinc-100 truncate mt-0.5">
                    {{ spec.value }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Footer Actions -->
            <div class="flex items-center justify-between pt-3 border-t border-white/10 gap-2">
              <div class="flex items-center gap-1.5">
                <button
                  type="button"
                  class="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/15 text-zinc-300 transition-colors cursor-pointer"
                  @click="modalPrev"
                  title="上一件"
                >
                  <ChevronLeft class="w-4 h-4" />
                </button>
                <button
                  type="button"
                  class="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/15 text-zinc-300 transition-colors cursor-pointer"
                  @click="modalNext"
                  title="下一件"
                >
                  <ChevronRight class="w-4 h-4" />
                </button>
              </div>

              <button
                type="button"
                class="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold font-mono transition-all duration-200 cursor-pointer shadow-[0_0_20px_rgba(56,189,248,0.35)]"
                @click="copySpecs"
              >
                <component :is="isCopied ? Check : Copy" class="w-3.5 h-3.5" />
                <span>{{ isCopied ? '已复制' : '复制作品信息' }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts">
export interface SurferItemSpec {
  label: string
  value: string
}

export interface SurferItem {
  id: number | string
  title: string
  subtitle?: string
  badge?: string
  category?: string
  description?: string
  specs?: SurferItemSpec[]
  image: string
  color?: string
}

export const DEFAULT_ITEMS: SurferItem[] = [
  {
    id: 1,
    title: '智能家居 App',
    subtitle: 'Quantum Photonics Interface',
    badge: 'LOOK 01',
    category: '移动端 / 产品设计',
    description: '用一个首页集中控制全屋设备，常用场景一键切换。',
    specs: [
      { label: '平台', value: 'iOS / Android' },
      { label: '团队', value: '4 人' },
      { label: '周期', value: '8 周' },
      { label: '年份', value: '2025' },
    ],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    color: '#38bdf8',
  },
  {
    id: 2,
    title: '销售数据看板',
    subtitle: 'Synaptic Manifold Mesh',
    badge: 'LOOK 02',
    category: 'Web / 数据可视化',
    description: '把分散在多个系统里的销售数据汇总到一个看板，支持按地区和时间筛选。',
    specs: [
      { label: '平台', value: 'Web' },
      { label: '图表数量', value: '18 个' },
      { label: '周期', value: '6 周' },
      { label: '年份', value: '2025' },
    ],
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80',
    color: '#a855f7',
  },
  {
    id: 3,
    title: '品牌官网改版',
    subtitle: 'Obsidian Spatial System',
    badge: 'LOOK 03',
    category: 'Web / 品牌设计',
    description: '重新梳理官网的信息结构和视觉风格，首屏加入产品演示动画。',
    specs: [
      { label: '平台', value: 'Web' },
      { label: '页面数', value: '12 页' },
      { label: '周期', value: '10 周' },
      { label: '年份', value: '2024' },
    ],
    image: 'https://images.unsplash.com/photo-1527630941-4a229fd674ab?w=800&q=80',
    color: '#f43f5e',
  },
  {
    id: 4,
    title: 'AI 写作助手',
    subtitle: 'Diffusion Latent Field',
    badge: 'LOOK 04',
    category: 'Web / AI 产品',
    description: '在编辑器里直接调用 AI 续写、改写和总结，生成的内容可以逐段确认。',
    specs: [
      { label: '平台', value: 'Web' },
      { label: '功能数', value: '6 个' },
      { label: '周期', value: '5 周' },
      { label: '年份', value: '2025' },
    ],
    image: 'https://images.unsplash.com/photo-1581892805885-73bdd91beff0?w=800&q=80',
    color: '#10b981',
  },
  {
    id: 5,
    title: '天气 App',
    subtitle: 'Kinetic Fluid Grid',
    badge: 'LOOK 05',
    category: '移动端 / 动效设计',
    description: '背景动画随天气变化，晴天、雨天和雪天各有不同的效果。',
    specs: [
      { label: '平台', value: 'iOS' },
      { label: '天气动画', value: '8 种' },
      { label: '周期', value: '4 周' },
      { label: '年份', value: '2024' },
    ],
    image: 'https://images.unsplash.com/photo-1603786420263-ad59136a7409?w=800&q=80',
    color: '#f59e0b',
  },
  {
    id: 6,
    title: '电商活动页',
    subtitle: 'Holographic Runway Space',
    badge: 'LOOK 06',
    category: 'Web / 运营设计',
    description: '限时折扣活动页，包含倒计时、优惠券领取和商品推荐。',
    specs: [
      { label: '平台', value: 'Web / H5' },
      { label: '模块数', value: '9 个' },
      { label: '周期', value: '2 周' },
      { label: '年份', value: '2025' },
    ],
    image: 'https://images.unsplash.com/photo-1610846202780-b4d9837371ea?w=800&q=80',
    color: '#06b6d4',
  },
]
</script>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Sparkles,
  X,
  Copy,
  Check,
} from 'lucide-vue-next'

interface Props {
  items?: SurferItem[]
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  items: () => DEFAULT_ITEMS,
  className: '',
})

const emit = defineEmits<{
  (e: 'select', item: SurferItem): void
}>()

const defaultSpecs: SurferItemSpec[] = [
  { label: '平台', value: 'Web' },
  { label: '团队', value: '—' },
  { label: '周期', value: '—' },
  { label: '年份', value: '—' },
]

const containerRef = ref<HTMLDivElement | null>(null)
const activeItem = ref<SurferItem | null>(null)
const isAutoDrift = ref(true)
const isCopied = ref(false)

const scrollPos = ref(0)
const targetScrollPos = ref<number | null>(null)
const vel = ref(0)

const stepX = 220
const stepY = -60
const stepZ = -260

const totalLength = computed(() => props.items.length * stepX)

const displayItems = computed(() => {
  return [...props.items, ...props.items, ...props.items]
})

const activeIndex = computed(() => {
  const len = totalLength.value
  let minDist = Infinity
  let bestIdx = 0

  for (let i = 0; i < props.items.length; i++) {
    const rawDist = i * stepX - (scrollPos.value % len)
    const normDist = ((rawDist % len) + len) % len
    const dist = Math.min(normDist, len - normDist)
    if (dist < minDist) {
      minDist = dist
      bestIdx = i
    }
  }
  return bestIdx
})

const activeCard = computed(() => {
  return props.items[activeIndex.value] || props.items[0]!
})

function isCardAtFront(index: number) {
  const len = totalLength.value
  const rawDist = index * stepX - (scrollPos.value % len)
  const normDist = ((rawDist % len) + len) % len
  return normDist < 75 || normDist > len - 75
}

function getCardStyle(index: number) {
  const len = totalLength.value
  const rawDist = index * stepX - (scrollPos.value % len)
  const normDist = ((rawDist % len) + len) % len

  const x = normDist - 300
  const factor = normDist / stepX
  const y = factor * stepY + 80
  const z = factor * stepZ + 100

  const isFront = normDist < 75 || normDist > len - 75
  const scale = isFront ? 1.08 : 1.0

  return {
    width: '200px',
    height: '280px',
    left: 'calc(50% - 100px)',
    top: 'calc(50% - 140px)',
    transform: `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`,
    transformStyle: 'preserve-3d' as const,
    zIndex: Math.round(1500 + z + (isFront ? 500 : 0)),
  }
}

function scrollToCard(itemIndex: number) {
  const len = totalLength.value
  const rawDist = itemIndex * stepX - (scrollPos.value % len)
  const normDist = ((rawDist % len) + len) % len

  let delta = 0
  if (normDist <= len / 2) {
    delta = normDist
  } else {
    delta = normDist - len
  }

  targetScrollPos.value = scrollPos.value + delta
}

function scrollToCardIndex(itemIndex: number) {
  isAutoDrift.value = false
  scrollToCard(itemIndex)
}

function prevCard() {
  isAutoDrift.value = false
  const target = (activeIndex.value - 1 + props.items.length) % props.items.length
  scrollToCard(target)
}

function nextCard() {
  isAutoDrift.value = false
  const target = (activeIndex.value + 1) % props.items.length
  scrollToCard(target)
}

let isDragging = false
let hasDragged = false
let startPointerX = 0
let startPointerY = 0
let rafId = 0

function handlePointerDown(e: PointerEvent) {
  isDragging = true
  hasDragged = false
  startPointerX = e.clientX
  startPointerY = e.clientY
  vel.value = 0
  targetScrollPos.value = null

  const target = e.currentTarget as HTMLElement | null
  if (target?.setPointerCapture) {
    try {
      target.setPointerCapture(e.pointerId)
    } catch {}
  }
}

function handlePointerMove(e: PointerEvent) {
  if (!isDragging) return
  const dx = e.clientX - startPointerX
  const dy = e.clientY - startPointerY
  if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
    hasDragged = true
    isAutoDrift.value = false
  }
  scrollPos.value -= dx * 1.5
  vel.value = -dx * 0.5
  startPointerX = e.clientX
  startPointerY = e.clientY
}

function handlePointerUp(e: PointerEvent) {
  if (!isDragging) return
  isDragging = false

  const target = e.currentTarget as HTMLElement | null
  if (target?.releasePointerCapture) {
    try {
      target.releasePointerCapture(e.pointerId)
    } catch {}
  }

  setTimeout(() => {
    hasDragged = false
  }, 60)
}

function onCardClick(item: SurferItem, displayIndex: number) {
  if (hasDragged) return
  isAutoDrift.value = false

  // 1. 顺畅将点击卡片滑移至中央焦点
  scrollToCard(displayIndex)

  // 2. 展开卡片沉浸式详情弹窗
  activeItem.value = item
  emit('select', item)
}

function closeModal() {
  activeItem.value = null
}

function modalPrev() {
  if (!activeItem.value) return
  const currentIdx = props.items.findIndex(it => it.id === activeItem.value?.id)
  const prevIdx = (currentIdx - 1 + props.items.length) % props.items.length
  activeItem.value = props.items[prevIdx] || null
  scrollToCard(prevIdx)
}

function modalNext() {
  if (!activeItem.value) return
  const currentIdx = props.items.findIndex(it => it.id === activeItem.value?.id)
  const nextIdx = (currentIdx + 1) % props.items.length
  activeItem.value = props.items[nextIdx] || null
  scrollToCard(nextIdx)
}

function copySpecs() {
  if (!activeItem.value) return
  const text = `${activeItem.value.title} (${activeItem.value.subtitle || ''})\n分类: ${activeItem.value.category || ''}\n描述: ${activeItem.value.description || ''}`
  navigator.clipboard?.writeText(text)
  isCopied.value = true
  setTimeout(() => {
    isCopied.value = false
  }, 1800)
}

function handleWheel(e: WheelEvent) {
  isAutoDrift.value = false
  targetScrollPos.value = null
  const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY
  scrollPos.value += delta * 0.8
}

function animate() {
  if (!activeItem.value) {
    if (targetScrollPos.value !== null) {
      const diff = targetScrollPos.value - scrollPos.value
      if (Math.abs(diff) > 0.4) {
        scrollPos.value += diff * 0.12
      } else {
        scrollPos.value = targetScrollPos.value
        targetScrollPos.value = null
      }
    } else if (!isDragging && isAutoDrift.value) {
      scrollPos.value += 0.8 + vel.value
      vel.value *= 0.94
    } else if (!isDragging) {
      if (Math.abs(vel.value) > 0.05) {
        scrollPos.value += vel.value
        vel.value *= 0.94
      }
    }
  }

  rafId = requestAnimationFrame(animate)
}

onMounted(() => {
  rafId = requestAnimationFrame(animate)
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
})
</script>

<style scoped>
.card-runway {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: scale(0.97);
}
</style>
