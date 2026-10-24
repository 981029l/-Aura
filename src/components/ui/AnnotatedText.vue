<template>
  <span
    class="relative inline-block select-none"
    :class="className"
    @click="replay"
  >
    <span class="relative z-10">
      <slot>{{ text }}</slot>
    </span>

    <!-- SVG Annotation Mark -->
    <svg
      :key="animationKey"
      class="absolute pointer-events-none overflow-visible inset-0 w-full h-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <!-- Underline variant -->
      <path
        v-if="type === 'underline'"
        d="M 2 92 Q 50 96, 98 90"
        fill="none"
        :stroke="color"
        :stroke-width="strokeWidth"
        stroke-linecap="round"
        class="annotation-draw"
      />

      <!-- Circle / Loop variant -->
      <path
        v-else-if="type === 'circle'"
        d="M 5 50 C 3 15, 95 10, 95 50 C 95 85, 8 92, 4 48"
        fill="none"
        :stroke="color"
        :stroke-width="strokeWidth"
        stroke-linecap="round"
        class="annotation-draw"
      />

      <!-- Highlight / Marker box -->
      <rect
        v-else-if="type === 'highlight'"
        x="0"
        y="15"
        width="100"
        height="70"
        rx="4"
        :fill="color"
        fill-opacity="0.25"
        class="annotation-fade"
      />

      <!-- Strike-through -->
      <path
        v-else-if="type === 'strike'"
        d="M 2 52 Q 50 48, 98 50"
        fill="none"
        :stroke="color"
        :stroke-width="strokeWidth"
        stroke-linecap="round"
        class="annotation-draw"
      />

      <!-- Squiggle Wave -->
      <path
        v-else-if="type === 'squiggle'"
        d="M 2 92 Q 12 84, 22 92 T 42 92 T 62 92 T 82 92 T 98 92"
        fill="none"
        :stroke="color"
        :stroke-width="strokeWidth"
        stroke-linecap="round"
        class="annotation-draw"
      />

      <!-- Box variant -->
      <rect
        v-else-if="type === 'box'"
        x="2"
        y="5"
        width="96"
        height="90"
        rx="6"
        fill="none"
        :stroke="color"
        :stroke-width="strokeWidth"
        class="annotation-draw"
      />
    </svg>
  </span>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  text?: string
  type?: 'underline' | 'circle' | 'highlight' | 'strike' | 'squiggle' | 'box'
  color?: string
  strokeWidth?: number
  className?: string
}

withDefaults(defineProps<Props>(), {
  text: 'Motion Engineered',
  type: 'underline',
  color: '#38bdf8',
  strokeWidth: 3,
  className: 'font-bold text-white',
})

const animationKey = ref(0)

function replay() {
  animationKey.value++
}
</script>

<style scoped>
@keyframes drawMark {
  0% {
    stroke-dashoffset: 400;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

.annotation-draw {
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  animation: drawMark 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.25;
  }
}

.annotation-fade {
  animation: fadeIn 0.5s ease-out forwards;
}
</style>
