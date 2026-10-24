<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Sun, Moon } from 'lucide-vue-next'

const isDark = ref(true)

function toggleTheme() {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('aura-theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('aura-theme', 'light')
  }
}

onMounted(() => {
  const saved = localStorage.getItem('aura-theme')
  if (saved) {
    isDark.value = saved === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})
</script>

<template>
  <button
    type="button"
    class="relative flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
    title="切换亮色 / 暗色模式"
    @click="toggleTheme"
  >
    <Sun v-if="isDark" class="h-4 w-4 transition-transform duration-300 rotate-0 hover:rotate-45 text-amber-400" />
    <Moon v-else class="h-4 w-4 transition-transform duration-300 -rotate-12 hover:rotate-0 text-indigo-600" />
  </button>
</template>
