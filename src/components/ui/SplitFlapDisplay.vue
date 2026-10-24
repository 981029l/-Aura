<template>
  <div
    class="inline-flex flex-col gap-2 p-5 rounded-2xl select-none"
    :class="className"
    :style="{
      background: 'linear-gradient(145deg, #0c0c0c 0%, #080808 50%, #0a0a0a 100%)',
      border: '1px solid rgba(255,255,255,0.06)',
      boxShadow: '0 25px 80px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.04)',
    }"
  >
    <!-- Single row mode -->
    <template v-if="text && (!rows || rows.length === 0)">
      <div class="flex items-center gap-1.5">
        <div
          v-if="showIndicators"
          :class="[indicatorHeightClass, 'w-[6px] rounded-[2px] flex-shrink-0 self-stretch']"
          :style="{
            background: `linear-gradient(180deg, ${accentColor} 0%, ${accentColor}99 40%, ${accentColor}66 60%, ${accentColor}99 100%)`,
            boxShadow: `0 0 8px ${accentColor}44, inset 0 1px 2px rgba(255,255,255,0.2)`,
          }"
        />
        <div class="flex gap-[3px]">
          <div
            v-for="(_, i) in paddedSingleText"
            :key="i"
            :class="['relative select-none font-mono font-bold', cellSizeClass]"
            style="perspective: 400px;"
          >
            <!-- Static top half -->
            <div
              class="absolute inset-x-0 top-0 h-1/2 overflow-hidden rounded-t-[3px]"
              style="background: linear-gradient(180deg, #1e1e1e 0%, #181818 100%);"
            >
              <span
                class="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[48%] text-[#e8e6e3] drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)] font-mono"
              >
                {{ cellChars[i] || ' ' }}
              </span>
            </div>

            <!-- Static bottom half -->
            <div
              class="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden rounded-b-[3px]"
              style="background: linear-gradient(180deg, #151515 0%, #111111 100%);"
            >
              <span
                class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[48%] text-[#d4d2cf] drop-shadow-[0_-1px_1px_rgba(0,0,0,0.6)] font-mono"
              >
                {{ cellChars[i] || ' ' }}
              </span>
            </div>

            <!-- Flipping top flap -->
            <div
              v-if="cellStates[i]?.isFlipping && cellStates[i]?.phase === 'top-down'"
              class="absolute inset-x-0 top-0 h-1/2 overflow-hidden rounded-t-[3px] z-10 flap-top-down"
              :style="{
                background: 'linear-gradient(180deg, #222 0%, #1a1a1a 100%)',
                transformOrigin: 'bottom center',
                animationDuration: `${flipSpeed * 0.4}ms`,
              }"
            >
              <span class="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[48%] text-[#e8e6e3] font-mono">
                {{ cellStates[i]?.prevChar || ' ' }}
              </span>
            </div>

            <!-- Flipping bottom flap -->
            <div
              v-if="cellStates[i]?.isFlipping && cellStates[i]?.phase === 'bottom-up'"
              class="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden rounded-b-[3px] z-10 flap-bottom-up"
              :style="{
                background: 'linear-gradient(180deg, #181818 0%, #111 100%)',
                transformOrigin: 'top center',
                animationDuration: `${flipSpeed * 0.4}ms`,
              }"
            >
              <span class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[48%] text-[#d4d2cf] font-mono">
                {{ cellChars[i] || ' ' }}
              </span>
            </div>

            <!-- Center divider line -->
            <div
              class="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none h-[2px]"
              style="background: linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.9) 100%); boxShadow: 0 1px 0 rgba(255,255,255,0.04);"
            />

            <!-- Subtle inner shadow overlay -->
            <div
              class="absolute inset-0 rounded-[3px] z-20 pointer-events-none"
              style="box-shadow: inset 0 1px 2px rgba(0,0,0,0.5), inset 0 -1px 2px rgba(0,0,0,0.3);"
            />
          </div>
        </div>
        <div
          v-if="showIndicators"
          :class="[indicatorHeightClass, 'w-[6px] rounded-[2px] flex-shrink-0 self-stretch']"
          :style="{
            background: `linear-gradient(180deg, ${accentColor} 0%, ${accentColor}99 40%, ${accentColor}66 60%, ${accentColor}99 100%)`,
            boxShadow: `0 0 8px ${accentColor}44, inset 0 1px 2px rgba(255,255,255,0.2)`,
          }"
        />
      </div>
    </template>

    <!-- Multi row mode -->
    <template v-else>
      <div
        v-for="(rowString, rIdx) in multiRowPaddedStrings"
        :key="rIdx"
        class="flex items-center gap-1.5"
      >
        <div
          v-if="showIndicators"
          :class="[indicatorHeightClass, 'w-[6px] rounded-[2px] flex-shrink-0 self-stretch']"
          :style="{
            background: `linear-gradient(180deg, ${accentColor} 0%, ${accentColor}99 40%, ${accentColor}66 60%, ${accentColor}99 100%)`,
            boxShadow: `0 0 8px ${accentColor}44, inset 0 1px 2px rgba(255,255,255,0.2)`,
          }"
        />
        <div class="flex gap-[3px]">
          <div
            v-for="(_, cIdx) in rowString"
            :key="cIdx"
            :class="['relative select-none font-mono font-bold', cellSizeClass]"
            style="perspective: 400px;"
          >
            <!-- Static top half -->
            <div
              class="absolute inset-x-0 top-0 h-1/2 overflow-hidden rounded-t-[3px]"
              style="background: linear-gradient(180deg, #1e1e1e 0%, #181818 100%);"
            >
              <span
                class="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[48%] text-[#e8e6e3] drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)] font-mono"
              >
                {{ multiRowChars[rIdx]?.[cIdx] || ' ' }}
              </span>
            </div>

            <!-- Static bottom half -->
            <div
              class="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden rounded-b-[3px]"
              style="background: linear-gradient(180deg, #151515 0%, #111111 100%);"
            >
              <span
                class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[48%] text-[#d4d2cf] drop-shadow-[0_-1px_1px_rgba(0,0,0,0.6)] font-mono"
              >
                {{ multiRowChars[rIdx]?.[cIdx] || ' ' }}
              </span>
            </div>

            <!-- Flipping top flap -->
            <div
              v-if="multiRowStates[rIdx]?.[cIdx]?.isFlipping && multiRowStates[rIdx]?.[cIdx]?.phase === 'top-down'"
              class="absolute inset-x-0 top-0 h-1/2 overflow-hidden rounded-t-[3px] z-10 flap-top-down"
              :style="{
                background: 'linear-gradient(180deg, #222 0%, #1a1a1a 100%)',
                transformOrigin: 'bottom center',
                animationDuration: `${flipSpeed * 0.4}ms`,
              }"
            >
              <span class="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[48%] text-[#e8e6e3] font-mono">
                {{ multiRowStates[rIdx]?.[cIdx]?.prevChar || ' ' }}
              </span>
            </div>

            <!-- Flipping bottom flap -->
            <div
              v-if="multiRowStates[rIdx]?.[cIdx]?.isFlipping && multiRowStates[rIdx]?.[cIdx]?.phase === 'bottom-up'"
              class="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden rounded-b-[3px] z-10 flap-bottom-up"
              :style="{
                background: 'linear-gradient(180deg, #181818 0%, #111 100%)',
                transformOrigin: 'top center',
                animationDuration: `${flipSpeed * 0.4}ms`,
              }"
            >
              <span class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[48%] text-[#d4d2cf] font-mono">
                {{ multiRowChars[rIdx]?.[cIdx] || ' ' }}
              </span>
            </div>

            <!-- Center divider line -->
            <div
              class="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none h-[2px]"
              style="background: linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.9) 100%); boxShadow: 0 1px 0 rgba(255,255,255,0.04);"
            />

            <!-- Subtle inner shadow overlay -->
            <div
              class="absolute inset-0 rounded-[3px] z-20 pointer-events-none"
              style="box-shadow: inset 0 1px 2px rgba(0,0,0,0.5), inset 0 -1px 2px rgba(0,0,0,0.3);"
            />
          </div>
        </div>
        <div
          v-if="showIndicators"
          :class="[indicatorHeightClass, 'w-[6px] rounded-[2px] flex-shrink-0 self-stretch']"
          :style="{
            background: `linear-gradient(180deg, ${accentColor} 0%, ${accentColor}99 40%, ${accentColor}66 60%, ${accentColor}99 100%)`,
            boxShadow: `0 0 8px ${accentColor}44, inset 0 1px 2px rgba(255,255,255,0.2)`,
          }"
        />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onUnmounted, onMounted } from 'vue'

export interface SplitFlapRow {
  label: string
  value: string
}

interface Props {
  rows?: SplitFlapRow[]
  text?: string
  columns?: number
  size?: 'sm' | 'md' | 'lg'
  accentColor?: string
  showIndicators?: boolean
  staggerDelay?: number
  flipSpeed?: number
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  rows: () => [
    { label: 'FLIGHT BA 178', value: 'ON TIME' },
    { label: 'GATE B24', value: 'BOARDING' },
    { label: 'TOKYO HND', value: 'DEPARTED' },
  ],
  text: '',
  columns: 16,
  size: 'md',
  accentColor: '#22c55e',
  showIndicators: true,
  staggerDelay: 25,
  flipSpeed: 30,
  className: '',
})

const CHARACTERS = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$.,!?:;+-=%&#@'

function getNextChar(current: string): string {
  const idx = CHARACTERS.indexOf(current)
  if (idx === -1 || idx >= CHARACTERS.length - 1) return CHARACTERS[0] ?? ' '
  return CHARACTERS[idx + 1] ?? ' '
}

const cellSizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'w-[24px] h-[34px] text-[15px]'
    case 'lg':
      return 'w-[48px] h-[68px] text-[32px]'
    default:
      return 'w-[36px] h-[50px] text-[22px]'
  }
})

const indicatorHeightClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'h-[34px]'
    case 'lg':
      return 'h-[68px]'
    default:
      return 'h-[50px]'
  }
})

// Single row state
const paddedSingleText = computed(() => {
  return (props.text || '').toUpperCase().padEnd(props.columns, ' ').slice(0, props.columns)
})

const cellChars = ref<string[]>([])
const cellStates = ref<{ isFlipping: boolean; phase: 'idle' | 'top-down' | 'bottom-up'; prevChar: string }[]>([])
const timers: (ReturnType<typeof setTimeout> | ReturnType<typeof setInterval>)[] = []

function clearAllTimers() {
  timers.forEach((t) => {
    clearTimeout(t as ReturnType<typeof setTimeout>)
    clearInterval(t as ReturnType<typeof setInterval>)
  })
  timers.length = 0
}

function startSingleRowFlip() {
  clearAllTimers()
  const targetStr = paddedSingleText.value
  while (cellChars.value.length < props.columns) {
    cellChars.value.push(' ')
    cellStates.value.push({ isFlipping: false, phase: 'idle', prevChar: ' ' })
  }

  for (let i = 0; i < props.columns; i++) {
    const targetChar = targetStr[i] || ' '
    const startDelay = i * props.staggerDelay

    const timeout = setTimeout(() => {
      if (cellChars.value[i] === targetChar) return

      const interval = setInterval(() => {
        const curr = cellChars.value[i] || ' '
        const next = getNextChar(curr)
        cellStates.value[i] = {
          isFlipping: true,
          phase: 'top-down',
          prevChar: curr,
        }

        const t1 = setTimeout(() => {
          if (cellStates.value[i]) cellStates.value[i].phase = 'bottom-up'
        }, props.flipSpeed * 0.4)
        timers.push(t1)

        const t2 = setTimeout(() => {
          if (cellStates.value[i]) cellStates.value[i].phase = 'idle'
        }, props.flipSpeed * 0.8)
        timers.push(t2)

        cellChars.value[i] = next

        if (next === targetChar) {
          clearInterval(interval)
          const t3 = setTimeout(() => {
            if (cellStates.value[i]) {
              cellStates.value[i].isFlipping = false
              cellStates.value[i].phase = 'idle'
            }
          }, props.flipSpeed)
          timers.push(t3)
        }
      }, props.flipSpeed)

      timers.push(interval)
    }, startDelay)

    timers.push(timeout)
  }
}

// Multi row state
const multiRowPaddedStrings = computed(() => {
  return (props.rows || []).map((row) => {
    const combined = `${row.label}${' '.repeat(Math.max(1, props.columns - row.label.length - row.value.length))}${row.value}`
    return combined.toUpperCase().padEnd(props.columns, ' ').slice(0, props.columns)
  })
})

const multiRowChars = ref<string[][]>([])
const multiRowStates = ref<{ isFlipping: boolean; phase: 'idle' | 'top-down' | 'bottom-up'; prevChar: string }[][]>([])

function startMultiRowFlip() {
  clearAllTimers()
  const rows = multiRowPaddedStrings.value

  multiRowChars.value = rows.map((_, rIdx) => multiRowChars.value[rIdx] || Array(props.columns).fill(' '))
  multiRowStates.value = rows.map((_, rIdx) => multiRowStates.value[rIdx] || Array(props.columns).fill(null).map(() => ({ isFlipping: false, phase: 'idle', prevChar: ' ' })))

  rows.forEach((rowStr, rIdx) => {
    for (let cIdx = 0; cIdx < props.columns; cIdx++) {
      const targetChar = rowStr[cIdx] || ' '
      const startDelay = (rIdx * 3 + cIdx) * props.staggerDelay

      const timeout = setTimeout(() => {
        if (multiRowChars.value[rIdx][cIdx] === targetChar) return

        const interval = setInterval(() => {
          const curr = multiRowChars.value[rIdx]?.[cIdx] || ' '
          const next = getNextChar(curr)

          if (multiRowStates.value[rIdx]?.[cIdx]) {
            multiRowStates.value[rIdx][cIdx] = {
              isFlipping: true,
              phase: 'top-down',
              prevChar: curr,
            }
          }

          const t1 = setTimeout(() => {
            if (multiRowStates.value[rIdx]?.[cIdx]) multiRowStates.value[rIdx][cIdx].phase = 'bottom-up'
          }, props.flipSpeed * 0.4)
          timers.push(t1)

          const t2 = setTimeout(() => {
            if (multiRowStates.value[rIdx]?.[cIdx]) multiRowStates.value[rIdx][cIdx].phase = 'idle'
          }, props.flipSpeed * 0.8)
          timers.push(t2)

          multiRowChars.value[rIdx][cIdx] = next

          if (next === targetChar) {
            clearInterval(interval)
            const t3 = setTimeout(() => {
              if (multiRowStates.value[rIdx]?.[cIdx]) {
                multiRowStates.value[rIdx][cIdx].isFlipping = false
                multiRowStates.value[rIdx][cIdx].phase = 'idle'
              }
            }, props.flipSpeed)
            timers.push(t3)
          }
        }, props.flipSpeed)

        timers.push(interval)
      }, startDelay)

      timers.push(timeout)
    }
  })
}

function runAnimation() {
  if (props.text && (!props.rows || props.rows.length === 0)) {
    startSingleRowFlip()
  } else {
    startMultiRowFlip()
  }
}

watch(() => [props.text, props.rows, props.columns], runAnimation, { deep: true })

onMounted(() => {
  runAnimation()
})

onUnmounted(() => {
  clearAllTimers()
})
</script>

<style scoped>
@keyframes flapTopDown {
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(-90deg);
  }
}

@keyframes flapBottomUp {
  0% {
    transform: rotateX(90deg);
  }
  100% {
    transform: rotateX(0deg);
  }
}

.flap-top-down {
  animation-name: flapTopDown;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
}

.flap-bottom-up {
  animation-name: flapBottomUp;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}
</style>
