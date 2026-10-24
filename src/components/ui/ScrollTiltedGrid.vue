<template>
  <div
    ref="containerRef"
    class="relative w-full max-h-[550px] overflow-y-auto overflow-x-hidden p-6 rounded-2xl bg-neutral-950 select-none scrollbar-thin scrollbar-thumb-neutral-800"
    :class="className"
    @scroll="handleScroll"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto py-8">
      <article
        v-for="(image, index) in images"
        :key="index"
        :ref="(el) => setTileRef(el as HTMLElement, index)"
        class="group relative overflow-hidden rounded-2xl will-change-transform transition-all duration-150 ease-out border border-white/10 shadow-2xl"
        :style="getTileStyle(index)"
      >
        <div class="aspect-[4/3] w-full overflow-hidden bg-neutral-900">
          <img
            :src="image.src"
            :alt="image.alt"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div class="p-4 bg-neutral-900/90 flex items-center justify-between">
          <span class="text-sm font-semibold text-neutral-200">{{ image.alt }}</span>
          <span class="text-xs font-mono text-cyan-400">0{{ index + 1 }}</span>
        </div>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
export interface TiltedImage {
  src: string
  alt: string
}

export const DEFAULT_IMAGES: TiltedImage[] = [
  { src: 'https://images.unsplash.com/photo-1514906689926-25ba6dcb584b?w=700&q=80', alt: 'Silver Veil' },
  { src: 'https://images.unsplash.com/photo-1527630941-4a229fd674ab?w=700&q=80', alt: 'Quiet Frame' },
  { src: 'https://images.unsplash.com/photo-1568557412756-7d219873dd11?w=700&q=80', alt: 'Ember Transit' },
  { src: 'https://images.unsplash.com/photo-1581892805885-73bdd91beff0?w=700&q=80', alt: 'Soft Gesture' },
  { src: 'https://images.unsplash.com/photo-1603786420263-ad59136a7409?w=700&q=80', alt: 'Amber Horizon' },
  { src: 'https://images.unsplash.com/photo-1610846202780-b4d9837371ea?w=700&q=80', alt: 'Moss Garden' },
]
</script>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Props {
  images?: TiltedImage[]
  maxTilt?: number
  maxBlur?: number
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  images: () => DEFAULT_IMAGES,
  maxTilt: 16,
  maxBlur: 6,
  className: '',
})

const containerRef = ref<HTMLDivElement | null>(null)
const tileRefs = ref<HTMLElement[]>([])
const tileTransforms = ref<{ tilt: number; blur: number; x: number; y: number }[]>([])

function setTileRef(el: HTMLElement | null, idx: number) {
  if (el) tileRefs.value[idx] = el
}

function handleScroll() {
  const container = containerRef.value
  if (!container) return
  const cr = container.getBoundingClientRect()
  const cCenter = cr.top + cr.height / 2

  tileRefs.value.forEach((tile, index) => {
    if (!tile) return
    const tr = tile.getBoundingClientRect()
    const tCenter = tr.top + tr.height / 2
    const distNorm = (tCenter - cCenter) / (cr.height / 2) // -1 (top) to +1 (bottom)
    const clamped = Math.max(-1, Math.min(1, distNorm))

    const side = index % 2 === 0 ? -1 : 1
    const tilt = clamped * props.maxTilt * side
    const blur = Math.abs(clamped) * props.maxBlur
    const x = side * Math.abs(clamped) * 14
    const y = -clamped * 16

    tileTransforms.value[index] = { tilt, blur, x, y }
  })
}

function getTileStyle(index: number) {
  const t = tileTransforms.value[index] || { tilt: 0, blur: 0, x: 0, y: 0 }
  return {
    transform: `perspective(1000px) translate3d(${t.x}px, ${t.y}px, 0) rotateY(${t.tilt}deg) rotateX(${t.y * 0.3}deg)`,
    filter: `blur(${t.blur}px)`,
  }
}

onMounted(() => {
  tileTransforms.value = props.images.map(() => ({ tilt: 0, blur: 0, x: 0, y: 0 }))
  setTimeout(handleScroll, 50)
})
</script>
