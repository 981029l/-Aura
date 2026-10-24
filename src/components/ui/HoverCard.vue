<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'
import {
  BadgeCheck,
  ExternalLink,
  Check,
  UserPlus,
} from 'lucide-vue-next'

export interface HoverCardProps {
  name?: string
  handle?: string
  avatar?: string
  bio?: string
  following?: string
  followers?: string
  joinedDate?: string
  defaultFollowed?: boolean
  class?: string
}

const props = withDefaults(defineProps<HoverCardProps>(), {
  name: 'Elena Rostova',
  handle: '@elena_arch',
  avatar: '👩‍🔬',
  bio: 'Aura UI 设计师，关注交互动效和设计系统。',
  following: '184',
  followers: '42.8k',
  joinedDate: 'Joined March 2024',
  defaultFollowed: false,
})

const emit = defineEmits<{
  (e: 'follow', followed: boolean): void
}>()

const isOpen = ref(false)
const isFollowed = ref(props.defaultFollowed)
let timer: ReturnType<typeof setTimeout> | null = null

const displayFollowers = computed(() => {
  if (!isFollowed.value) return props.followers
  if (/[kmw万千]/i.test(props.followers)) return props.followers
  const num = parseInt(props.followers.replace(/,/g, ''), 10)
  if (!isNaN(num)) return (num + 1).toLocaleString()
  return props.followers
})

function toggleFollow() {
  isFollowed.value = !isFollowed.value
  emit('follow', isFollowed.value)
}

function handleMouseEnter() {
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    isOpen.value = true
  }, 150)
}

function handleMouseLeave() {
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    isOpen.value = false
  }, 220)
}
</script>

<template>
  <div
    :class="cn('relative inline-block select-none font-sans', props.class)"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- 触发器文本链接 -->
    <a
      href="javascript:void(0)"
      @click="isOpen = !isOpen"
      class="inline-flex items-center gap-1 font-bold text-xs text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 underline decoration-blue-500/40 underline-offset-4 cursor-pointer"
    >
      <span>{{ props.handle }}</span>
      <ExternalLink class="h-3 w-3" />
    </a>

    <!-- 悬浮弹出信息名片 -->
    <div
      v-if="isOpen"
      class="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-72 rounded-2xl border border-zinc-200/90 bg-white/95 p-4 shadow-xl shadow-zinc-900/10 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 z-50 animate-pop-in text-left"
    >
      <div class="flex items-start justify-between gap-2">
        <div class="flex items-center gap-2.5 min-w-0">
          <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-xl dark:bg-blue-900/30">
            {{ props.avatar }}
          </span>
          <div class="min-w-0">
            <div class="flex items-center gap-1">
              <span class="font-bold text-sm text-zinc-900 dark:text-white truncate">{{ props.name }}</span>
              <BadgeCheck class="h-4 w-4 shrink-0 text-blue-500" />
            </div>
            <span class="text-xs font-mono text-zinc-400 block truncate">{{ props.handle }}</span>
          </div>
        </div>

        <button
          type="button"
          @click.stop="toggleFollow"
          :class="[
            'inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-[11px] font-semibold transition-all cursor-pointer active:scale-95 shrink-0',
            isFollowed
              ? 'border border-emerald-500/30 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 dark:bg-emerald-950/50 dark:text-emerald-400 dark:hover:bg-emerald-950/80'
              : 'bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 shadow-sm',
          ]"
        >
          <Check v-if="isFollowed" class="h-3 w-3" />
          <UserPlus v-else class="h-3 w-3" />
          <span>{{ isFollowed ? '已关注' : '关注' }}</span>
        </button>
      </div>

      <p class="mt-3 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
        {{ props.bio }}
      </p>

      <div class="mt-3 flex items-center justify-between text-xs font-mono text-zinc-500 border-t border-zinc-100 pt-2.5 dark:border-zinc-800/80">
        <div class="flex items-center gap-4">
          <div>
            <strong class="text-zinc-900 dark:text-white">{{ props.following }}</strong>
            <span class="ml-1 text-[11px] text-zinc-400">正在关注</span>
          </div>
          <div>
            <strong class="text-zinc-900 dark:text-white">
              {{ displayFollowers }}
            </strong>
            <span class="ml-1 text-[11px] text-zinc-400">关注者</span>
          </div>
        </div>
        <span v-if="isFollowed" class="text-[10px] text-emerald-500 font-sans font-medium">
          互相关注中
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes pop-in {
  from { opacity: 0; transform: translate(-50%, 6px) scale(0.96); }
  to { opacity: 1; transform: translate(-50%, 0) scale(1); }
}
.animate-pop-in {
  animation: pop-in 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
