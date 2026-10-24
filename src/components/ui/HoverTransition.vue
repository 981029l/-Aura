<template>
  <div
    class="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer select-none border border-white/10 group shadow-2xl"
    :class="className"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Default Layer (Base) -->
    <div class="absolute inset-0 w-full h-full">
      <slot name="default">
        <div class="w-full h-full bg-gradient-to-br from-indigo-950 via-slate-900 to-black p-8 flex flex-col justify-between">
          <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-cyan-400 font-bold">
            01
          </div>
          <div>
            <span class="text-xs uppercase tracking-widest text-neutral-400 font-mono">Rest State</span>
            <h3 class="text-2xl font-bold text-white">Default Interface</h3>
          </div>
        </div>
      </slot>
    </div>

    <!-- Hover Layer (Revealed with clip-path transition) -->
    <div
      class="absolute inset-0 w-full h-full transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
      :style="{
        clipPath: isHovered ? 'inset(0% 0% 0% 0%)' : getInitialClipPath(),
        transitionDuration: `${duration}ms`,
      }"
    >
      <slot name="hover">
        <div class="w-full h-full bg-gradient-to-tr from-cyan-600 via-sky-500 to-indigo-600 p-8 flex flex-col justify-between text-white">
          <div class="w-10 h-10 rounded-xl bg-black/20 backdrop-blur-md flex items-center justify-center text-white font-bold">
            ✨
          </div>
          <div>
            <span class="text-xs uppercase tracking-widest text-cyan-100 font-mono">Active State</span>
            <h3 class="text-2xl font-black text-white">Revealed Overlay</h3>
          </div>
        </div>
      </slot>
    </div>

    <!-- Effect Badge Indicator -->
    <div class="absolute top-4 right-4 z-20 px-2.5 py-1 rounded-full bg-black/50 border border-white/10 backdrop-blur-md text-[10px] font-mono text-neutral-300">
      {{ effect }} · {{ direction }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  effect?: 'wipe' | 'ripple' | 'diagonal' | 'curtain'
  direction?: 'top' | 'right' | 'bottom' | 'left'
  duration?: number
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  effect: 'wipe',
  direction: 'bottom',
  duration: 500,
  className: '',
})

const isHovered = ref(false)

function getInitialClipPath() {
  switch (props.direction) {
    case 'top':
      return 'inset(0% 0% 100% 0%)'
    case 'right':
      return 'inset(0% 0% 0% 100%)'
    case 'left':
      return 'inset(0% 100% 0% 0%)'
    case 'bottom':
    default:
      return 'inset(100% 0% 0% 0%)'
  }
}
</script>
