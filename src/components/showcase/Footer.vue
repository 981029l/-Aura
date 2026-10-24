<script setup lang="ts">
import { Heart } from 'lucide-vue-next'
</script>

<template>
  <footer class="border-t border-zinc-200/80 bg-zinc-50/50 py-12 dark:border-zinc-800/80 dark:bg-zinc-950/50 transition-colors">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-3">
          <div class="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-zinc-200/80 bg-zinc-900 shadow-sm dark:border-zinc-800">
            <img src="/logo.png" alt="Aura UI Logo" class="h-full w-full object-cover" />
          </div>
          <div>
            <p class="text-sm font-bold text-zinc-900 dark:text-zinc-100">
              Aura UI (Vue 3)
            </p>
            <p class="text-xs text-zinc-500 dark:text-zinc-400">
              Aura UI · 面向 Vue 3 的动效组件库
            </p>
          </div>
        </div>

        <div class="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
          <span>MIT 协议开源，复制源码即可使用</span>
          <span>•</span>
          <span class="inline-flex items-center gap-1">
            Built with <Heart class="h-3 w-3 text-red-500 fill-red-500" /> for Vue 3 ecosystem
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>
