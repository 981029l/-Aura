<script setup lang="ts">
import { computed, defineAsyncComponent, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { BLOCKS_DATA, DEFAULT_BLOCK_ID } from '@/data/blocks'

const route = useRoute()
const blockComponents = import.meta.glob('/src/components/blocks/*.vue')

const currentId = computed(() => (route.params.id as string) || DEFAULT_BLOCK_ID)
const currentBlock = computed(() => BLOCKS_DATA.find((b) => b.id === currentId.value) || BLOCKS_DATA[0])

const CurrentBlockAsync = computed(() => {
  const filename = currentBlock.value?.blockFilename
  if (!filename) return null
  const loader = blockComponents[`/src/components/blocks/${filename}`]
  return loader ? defineAsyncComponent(loader as any) : null
})

// 响应 URL 参数中的 dark 模式控制
const isDark = computed(() => {
  if (route.query.dark === 'true') return true
  if (route.query.dark === 'false') return false
  return true // 默认暗黑模式
})

function applyTheme(dark: boolean) {
  if (dark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

watch(isDark, (val) => {
  applyTheme(val)
}, { immediate: true })

// 监听宿主视口发来的实时明暗模式切换
function handleMessage(event: MessageEvent) {
  if (event.data && typeof event.data.dark === 'boolean') {
    applyTheme(event.data.dark)
  }
}

onMounted(() => {
  applyTheme(isDark.value)
  window.addEventListener('message', handleMessage)
})

onUnmounted(() => {
  window.removeEventListener('message', handleMessage)
})
</script>

<template>
  <div class="w-full min-h-screen overflow-x-hidden overflow-y-auto scrollbar-thin pt-10 sm:pt-0" :class="isDark ? 'dark bg-black text-zinc-100' : 'bg-white text-zinc-900'">
    <component :is="CurrentBlockAsync" v-if="CurrentBlockAsync" />
  </div>
</template>
