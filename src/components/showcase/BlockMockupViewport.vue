<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue'
import { useDark } from '@vueuse/core'
import { ExternalLink } from 'lucide-vue-next'

interface Props {
  blockId: string
  title?: string
}

const props = defineProps<Props>()

const isDark = useDark()
const viewportRef = ref<HTMLDivElement | null>(null)
const scale = ref(0.45)
const isLoaded = ref(false)

const iframeSrc = computed(() => `/preview/${props.blockId}?dark=${isDark.value}`)

let ro: ResizeObserver | null = null

function updateScale() {
  if (viewportRef.value) {
    const width = viewportRef.value.clientWidth
    if (width > 0) {
      scale.value = width / 1200
    }
  }
}

function handleIframeLoad() {
  isLoaded.value = true
}

onMounted(() => {
  nextTick(() => {
    updateScale()
    if (viewportRef.value && typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => {
        updateScale()
      })
      ro.observe(viewportRef.value)
    }
  })
  window.addEventListener('resize', updateScale)
})

onUnmounted(() => {
  ro?.disconnect()
  window.removeEventListener('resize', updateScale)
})
</script>

<template>
  <div class="relative w-full aspect-[16/10] overflow-hidden rounded-t-2xl bg-zinc-950 flex flex-col border-b border-zinc-200/80 dark:border-zinc-800/80 select-none">
    <!-- macOS 拟真顶栏 Chrome -->
    <div class="relative z-20 flex h-7 items-center justify-between px-3 border-b border-zinc-800/80 bg-zinc-900/95 backdrop-blur-md">
      <div class="flex items-center gap-1.5">
        <span class="h-2 w-2 rounded-full bg-rose-500/80 inline-block" />
        <span class="h-2 w-2 rounded-full bg-amber-500/80 inline-block" />
        <span class="h-2 w-2 rounded-full bg-emerald-500/80 inline-block" />
      </div>
      <div class="flex items-center gap-1 px-2 py-0.5 rounded-md bg-zinc-800/80 text-[10px] font-mono text-zinc-400 max-w-[200px] truncate">
        <span class="text-zinc-500">aura://</span>
        <span class="text-zinc-300 font-semibold truncate">{{ blockId }}</span>
      </div>
      <div class="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
        <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span class="hidden sm:inline font-bold">Live Vue 3.5</span>
      </div>
    </div>

    <!-- 视窗内部舞台：自适应缩放 iframe -->
    <div ref="viewportRef" class="relative flex-1 w-full overflow-hidden bg-black">
      <!-- 骨架暗色光晕（iframe 加载前平滑占位） -->
      <div
        v-if="!isLoaded"
        class="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-zinc-900 to-zinc-950 flex items-center justify-center animate-pulse"
      >
        <span class="text-[10px] font-mono text-zinc-600">Loading live viewport...</span>
      </div>

      <!-- 真实全屏组件 iframe 1:1 动态缩放 -->
      <iframe
        :src="iframeSrc"
        class="absolute top-0 left-0 border-none pointer-events-none origin-top-left transition-opacity duration-500"
        :class="isLoaded ? 'opacity-100' : 'opacity-0'"
        :style="{
          width: '1200px',
          height: '750px',
          transform: `scale(${scale})`,
        }"
        loading="lazy"
        @load="handleIframeLoad"
      />

      <!-- Supahero 标志性悬停暗调渐变浮层与直达入口 -->
      <router-link
        :to="'/preview/' + blockId"
        target="_blank"
        class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none transition-opacity duration-300 flex items-end justify-between p-4 z-10 cursor-pointer"
        :aria-label="`在新窗口全屏实景体验 ${title || blockId}`"
        :title="`在新窗口全屏实景体验 ${title || blockId}`"
      >
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-xl transition-transform hover:scale-105 active:scale-95">
          <span>在新窗口全屏实景体验</span>
          <ExternalLink class="w-3.5 h-3.5" />
        </span>
        <span class="text-[10px] font-mono text-zinc-300 bg-black/60 px-2 py-1 rounded-md backdrop-blur-md border border-white/10">
          1:1 Native Engine
        </span>
      </router-link>
    </div>
  </div>
</template>
