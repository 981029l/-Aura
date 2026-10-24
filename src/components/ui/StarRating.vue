<script setup lang="ts">
import { ref, watch } from 'vue'
import { cn } from '@/lib/utils'
import { Star } from 'lucide-vue-next'

interface StarRatingProps {
  modelValue?: number
  maxStars?: number
  readonly?: boolean
  color?: string
  class?: string
}

const props = withDefaults(defineProps<StarRatingProps>(), {
  modelValue: 4,
  maxStars: 5,
  readonly: false,
  color: '#f59e0b',
})

const emit = defineEmits<{
  (e: 'update:modelValue', val: number): void
  (e: 'change', val: number): void
}>()

const currentScore = ref(props.modelValue)
const hoverScore = ref<number | null>(null)
const burstStarIndex = ref<number | null>(null)
// 点击打分后锁定悬停预览，避免光标移出途中划过其它星星时预览分数又跳变；光标离开星星区域后解锁
const hoverLocked = ref(false)

function handleClick(starIndex: number) {
  if (props.readonly) return
  currentScore.value = starIndex
  hoverScore.value = null
  hoverLocked.value = true
  burstStarIndex.value = starIndex
  emit('update:modelValue', starIndex)
  emit('change', starIndex)

  setTimeout(() => {
    burstStarIndex.value = null
  }, 400)
}

function handleMouseEnter(starIndex: number) {
  if (props.readonly || hoverLocked.value) return
  hoverScore.value = starIndex
}

function handleMouseLeave() {
  if (props.readonly) return
  hoverScore.value = null
  hoverLocked.value = false
}

watch(() => props.modelValue, (val) => {
  if (val !== undefined) currentScore.value = val
})
</script>

<template>
  <div :class="cn('inline-flex items-center select-none', props.class)">
    <!-- 星星区域：悬停预览只在这里生效，移到右侧分数上即视为离开 -->
    <div class="inline-flex items-center gap-1" @mouseleave="handleMouseLeave">
      <button
        v-for="index in props.maxStars"
        :key="index"
        type="button"
        :disabled="props.readonly"
        @click="handleClick(index)"
        @mouseenter="handleMouseEnter(index)"
        :class="[
          'group relative flex items-center justify-center p-1 transition-transform',
          props.readonly ? 'cursor-default' : 'cursor-pointer active:scale-90',
          hoverScore !== null && hoverScore >= index && !props.readonly && 'scale-[1.15]',
          burstStarIndex === index && 'animate-star-burst',
        ]"
      >
        <!-- 星芒背景微发光 -->
        <span
          v-if="burstStarIndex === index"
          class="absolute inset-0 rounded-full bg-amber-400/30 blur-sm pointer-events-none animate-ping"
        />

        <Star
          class="h-5 w-5 transition-colors duration-150"
          :class="[
            (hoverScore !== null ? hoverScore >= index : currentScore >= index)
              ? 'fill-amber-400 text-amber-400 drop-shadow-sm'
              : 'fill-transparent text-zinc-300 dark:text-zinc-700',
          ]"
        />
      </button>
    </div>

    <!-- 分数指示胶囊 -->
    <span class="ml-2 font-mono text-xs font-bold text-zinc-600 dark:text-zinc-400">
      {{ (hoverScore !== null ? hoverScore : currentScore).toFixed(1) }}
    </span>
  </div>
</template>

<style scoped>
@keyframes star-burst {
  0% { transform: scale(1); }
  50% { transform: scale(1.35) rotate(12deg); }
  100% { transform: scale(1); }
}

.animate-star-burst {
  animation: star-burst 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
