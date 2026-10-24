<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface MarqueeProps {
  /** 滚动一圈耗时，单位秒 */
  duration?: number
  /** 是否反向滚动 */
  reverse?: boolean
  /** 鼠标悬浮时是否暂停滚动 */
  pauseOnHover?: boolean
  /** 是否为垂直滚动 */
  vertical?: boolean
  /** 重复渲染份数，防止在大屏下出现断层空白，默认 4 */
  repeat?: number
  class?: string
}

const props = withDefaults(defineProps<MarqueeProps>(), {
  duration: 30,
  reverse: false,
  pauseOnHover: true,
  vertical: false,
  repeat: 4,
})

const styleObj = computed(() => {
  return {
    '--duration': `${props.duration}s`,
  } as Record<string, string>
})
</script>

<template>
  <div
    :style="styleObj"
    :class="
      cn(
        'group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]',
        props.vertical ? 'flex-col' : 'flex-row',
        props.class
      )
    "
  >
    <div
      v-for="i in props.repeat"
      :key="i"
      :class="
        cn(
          'flex shrink-0 justify-around [gap:var(--gap)]',
          props.vertical
            ? 'flex-col animate-marquee-vertical'
            : 'flex-row animate-marquee',
          props.pauseOnHover && 'group-hover:[animation-play-state:paused]',
          props.reverse && '[animation-direction:reverse]'
        )
      "
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.animate-marquee {
  animation: marquee-anim var(--duration) linear infinite;
}

.animate-marquee-vertical {
  animation: marquee-vertical-anim var(--duration) linear infinite;
}

@keyframes marquee-anim {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

@keyframes marquee-vertical-anim {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(calc(-100% - var(--gap)));
  }
}
</style>
