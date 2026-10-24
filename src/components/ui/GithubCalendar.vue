<template>
  <div
    class="relative w-full max-w-4xl mx-auto p-6 rounded-2xl bg-neutral-950 border border-white/10 select-none overflow-hidden"
    :class="className"
  >
    <!-- Header with User and Total -->
    <div class="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-xs font-bold text-white">
          GH
        </div>
        <div>
          <h4 class="text-sm font-bold text-white">@{{ username }}</h4>
          <span class="text-xs text-neutral-400">GitHub Activity Graph</span>
        </div>
      </div>
      <div class="text-right">
        <span class="text-xs font-mono text-emerald-400 font-semibold">{{ totalContributions }} contributions</span>
        <span class="block text-[11px] text-neutral-500">in the last year</span>
      </div>
    </div>

    <!-- Calendar Contribution Grid (52 weeks x 7 days) -->
    <div class="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-neutral-800">
      <div class="flex gap-1 min-w-[680px]">
        <div
          v-for="(week, wIdx) in gridWeeks"
          :key="wIdx"
          class="flex flex-col gap-1"
        >
          <div
            v-for="(day, dIdx) in week"
            :key="dIdx"
            class="w-3 h-3 transition-transform duration-200 hover:scale-125 cursor-pointer"
            :class="[getShapeClass(), getLevelClass(day.level)]"
            @mouseenter="hoveredDay = day"
            @mouseleave="hoveredDay = null"
          />
        </div>
      </div>
    </div>

    <!-- Footer Legend & Hover Tooltip -->
    <div class="mt-4 flex items-center justify-between text-xs text-neutral-400">
      <div class="h-5 flex items-center">
        <span v-if="hoveredDay" class="text-white font-mono">
          {{ hoveredDay.count }} contributions on {{ hoveredDay.date }}
        </span>
        <span v-else class="text-neutral-500">Hover over any square to see details</span>
      </div>

      <div class="flex items-center gap-1.5">
        <span class="text-[10px]">Less</span>
        <div class="w-2.5 h-2.5 rounded-sm" :class="getLevelClass(0)" />
        <div class="w-2.5 h-2.5 rounded-sm" :class="getLevelClass(1)" />
        <div class="w-2.5 h-2.5 rounded-sm" :class="getLevelClass(2)" />
        <div class="w-2.5 h-2.5 rounded-sm" :class="getLevelClass(3)" />
        <div class="w-2.5 h-2.5 rounded-sm" :class="getLevelClass(4)" />
        <span class="text-[10px]">More</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  username?: string
  shape?: 'rounded' | 'circle' | 'square'
  colorSchema?: 'green' | 'blue' | 'purple' | 'orange'
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  username: 'antigravity-dev',
  shape: 'rounded',
  colorSchema: 'green',
  className: '',
})

interface Day {
  date: string
  count: number
  level: number
}

const hoveredDay = ref<Day | null>(null)

function getShapeClass() {
  switch (props.shape) {
    case 'circle':
      return 'rounded-full'
    case 'square':
      return 'rounded-none'
    default:
      return 'rounded-sm'
  }
}

function getLevelClass(level: number) {
  if (props.colorSchema === 'blue') {
    switch (level) {
      case 1:
        return 'bg-blue-900/60'
      case 2:
        return 'bg-blue-700'
      case 3:
        return 'bg-blue-500 shadow-[0_0_6px_#3b82f6]'
      case 4:
        return 'bg-blue-400 shadow-[0_0_8px_#60a5fa]'
      default:
        return 'bg-neutral-900 border border-white/5'
    }
  } else if (props.colorSchema === 'purple') {
    switch (level) {
      case 1:
        return 'bg-purple-900/60'
      case 2:
        return 'bg-purple-700'
      case 3:
        return 'bg-purple-500 shadow-[0_0_6px_#a855f7]'
      case 4:
        return 'bg-purple-400 shadow-[0_0_8px_#c084fc]'
      default:
        return 'bg-neutral-900 border border-white/5'
    }
  } else {
    // Green default
    switch (level) {
      case 1:
        return 'bg-emerald-900/60'
      case 2:
        return 'bg-emerald-700'
      case 3:
        return 'bg-emerald-500 shadow-[0_0_6px_#10b981]'
      case 4:
        return 'bg-emerald-400 shadow-[0_0_8px_#34d399]'
      default:
        return 'bg-neutral-900 border border-white/5'
    }
  }
}

// Generate realistic simulated commit weeks
const gridWeeks = computed(() => {
  const weeks: Day[][] = []
  const today = new Date()
  let total = 0

  for (let w = 48; w >= 0; w--) {
    const week: Day[] = []
    for (let d = 0; d < 7; d++) {
      const dayDate = new Date(today)
      dayDate.setDate(today.getDate() - (w * 7 + (6 - d)))
      const dateStr = dayDate.toISOString().slice(0, 10)

      // Random density
      const seed = Math.sin(w * 13 + d * 7)
      let level = 0
      let count = 0
      if (seed > 0.7) {
        level = 4
        count = 14 + Math.floor(Math.random() * 8)
      } else if (seed > 0.35) {
        level = 3
        count = 8 + Math.floor(Math.random() * 5)
      } else if (seed > 0.0) {
        level = 2
        count = 4 + Math.floor(Math.random() * 3)
      } else if (seed > -0.4) {
        level = 1
        count = 1 + Math.floor(Math.random() * 2)
      }

      total += count
      week.push({ date: dateStr, count, level })
    }
    weeks.push(week)
  }

  return weeks
})

const totalContributions = computed(() => {
  return gridWeeks.value.reduce(
    (acc, week) => acc + week.reduce((sum, day) => sum + day.count, 0),
    0
  )
})
</script>
