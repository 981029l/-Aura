<script setup lang="ts">
import { ref } from 'vue'
import { Plus, Share2, Copy, Bookmark, Settings, Trash2, Edit3 } from 'lucide-vue-next'

interface MenuItem {
  id: string
  label: string
  icon: any
  angle: number // degrees
  distance: number // px
  color: string
}

const isOpen = ref(true)
const hoveredItem = ref<MenuItem | null>(null)

const items: MenuItem[] = [
  { id: 'share', label: 'Share', icon: Share2, angle: 0, distance: 95, color: 'text-blue-500' },
  { id: 'copy', label: 'Copy Link', icon: Copy, angle: 60, distance: 95, color: 'text-emerald-500' },
  { id: 'bookmark', label: 'Bookmark', icon: Bookmark, angle: 120, distance: 95, color: 'text-amber-500' },
  { id: 'settings', label: 'Settings', icon: Settings, angle: 180, distance: 95, color: 'text-purple-500' },
  { id: 'trash', label: 'Delete', icon: Trash2, angle: 240, distance: 95, color: 'text-rose-500' },
  { id: 'edit', label: 'Edit', icon: Edit3, angle: 300, distance: 95, color: 'text-indigo-500' },
]

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="relative w-full max-w-md mx-auto p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl font-sans select-none text-center">
    <!-- Header -->
    <div class="pb-4 border-b border-slate-100 dark:border-slate-800 text-xs">
      <h3 class="font-semibold text-slate-800 dark:text-slate-100">
        Radial Cluster Satellite Menu
      </h3>
      <p class="text-slate-400 mt-0.5">
        Centrifugal polar spring expansion with focus tooltips
      </p>
    </div>

    <!-- Radial Menu Stage Arena -->
    <div class="relative my-12 h-64 flex items-center justify-center">
      <!-- Outer Orbit Guideline Ring -->
      <div
        class="absolute w-48 h-48 rounded-full border border-dashed border-slate-300 dark:border-slate-800 pointer-events-none transition-all duration-500"
        :class="isOpen ? 'scale-100 opacity-60' : 'scale-50 opacity-0'"
      ></div>

      <!-- Center Hub Trigger Button -->
      <button
        @click="toggleMenu"
        class="relative z-30 w-14 h-14 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl shadow-indigo-600/30 flex items-center justify-center transition-all duration-300 active:scale-90 cursor-pointer"
        :class="{ 'rotate-45 bg-rose-600 hover:bg-rose-700 shadow-rose-600/30': isOpen }"
      >
        <Plus class="w-6 h-6 transition-transform duration-300" />
      </button>

      <!-- Satellite Orbit Items -->
      <div
        v-for="(item, idx) in items"
        :key="item.id"
        @mouseenter="hoveredItem = item"
        @mouseleave="hoveredItem = null"
        class="absolute z-20 transition-all duration-500 ease-out"
        :style="{
          transform: isOpen
            ? `translate(${Math.cos((item.angle * Math.PI) / 180) * item.distance}px, ${Math.sin((item.angle * Math.PI) / 180) * item.distance}px)`
            : 'translate(0px, 0px) scale(0)',
          transitionDelay: `${idx * 30}ms`,
          opacity: isOpen ? 1 : 0,
        }"
      >
        <button
          class="w-11 h-11 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg flex items-center justify-center hover:scale-125 transition-transform duration-200 cursor-pointer group"
        >
          <component :is="item.icon" class="w-4 h-4 transition-colors" :class="item.color" />
        </button>
      </div>

      <!-- Center Action Tooltip Preview -->
      <div
        v-if="hoveredItem && isOpen"
        class="absolute -bottom-8 px-3 py-1 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[11px] font-mono font-bold shadow-lg animate-in fade-in zoom-in-95 pointer-events-none z-40"
      >
        Action: {{ hoveredItem.label }}
      </div>
    </div>

    <!-- Footer Status -->
    <div class="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800">
      <span>STATE: {{ isOpen ? 'EXPANDED' : 'COLLAPSED' }}</span>
      <span class="text-indigo-600 dark:text-indigo-400 font-semibold">6 SATELLITE NODES</span>
    </div>
  </div>
</template>
