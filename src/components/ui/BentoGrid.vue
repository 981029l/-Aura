<script setup lang="ts">
import { cn } from '@/lib/utils'

interface BentoGridProps {
  class?: string
}

const props = defineProps<BentoGridProps>()
</script>

<template>
  <div
    :class="
      cn(
        'grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>
