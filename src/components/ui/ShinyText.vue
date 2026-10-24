<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface ShinyTextProps {
  /** 文本内容（可选，也可用默认插槽） */
  text?: string
  /** 动画单次完整周期秒数，默认 2.5s，丝滑连贯，清晰可观赏 */
  duration?: number
  /** 流光高光模式：'white' 纯净耀白 / 'cyber' 赛博蓝紫霓虹 */
  variant?: 'white' | 'cyber'
  class?: string
}

const props = withDefaults(defineProps<ShinyTextProps>(), {
  duration: 2.5,
  variant: 'white',
})

const styleObj = computed(() => {
  return {
    '--duration': `${props.duration}s`,
  } as Record<string, string>
})
</script>

<template>
  <span
    :style="styleObj"
    :class="
      cn(
        'shiny-text-root inline-block font-bold bg-clip-text text-transparent',
        props.variant === 'white' && 'shiny-variant-white',
        props.variant === 'cyber' && 'shiny-variant-cyber',
        props.class
      )
    "
  >
    <slot>{{ props.text }}</slot>
  </span>
</template>

<style scoped>
.shiny-text-root {
  background-size: 200% 100%;
  /* 持续连贯无缝流动，每秒都在流淌，绝无突兀停滞空白 */
  animation: shiny-continuous var(--duration) linear infinite;
  -webkit-background-clip: text;
  background-clip: text;
}

/* ================= 1. 经典纯净耀白模式 ================= */
/* 亮色模式：优雅深灰底色 + 浓郁黑金高光缓慢拂过 */
.shiny-variant-white {
  background-image: linear-gradient(
    110deg,
    #9ca3af 20%,
    #09090b 50%,
    #9ca3af 80%
  );
}

/* 暗黑模式：清晰冷银底色 (40%) + 宽阔纯白高光 (100%) 源源不断流淌 */
:global(.dark .shiny-variant-white) {
  background-image: linear-gradient(
    110deg,
    rgba(255, 255, 255, 0.4) 20%,
    #ffffff 50%,
    rgba(255, 255, 255, 0.4) 80%
  );
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.2));
}

/* ================= 2. 赛博霓虹流光模式 ================= */
.shiny-variant-cyber {
  background-image: linear-gradient(
    110deg,
    #6366f1 20%,
    #06b6d4 50%,
    #6366f1 80%
  );
}

:global(.dark .shiny-variant-cyber) {
  background-image: linear-gradient(
    110deg,
    rgba(99, 102, 241, 0.5) 15%,
    #38bdf8 45%,
    #ffffff 50%,
    #ec4899 55%,
    rgba(99, 102, 241, 0.5) 85%
  );
  filter: drop-shadow(0 0 12px rgba(56, 189, 248, 0.3));
}

/* 持续无缝无停顿动画：从 200% 匀速移到 -200%，前后完美平滑接续 */
@keyframes shiny-continuous {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
