<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { cn } from '@/lib/utils'
import { Check, X, Sparkles, Zap, Shield } from 'lucide-vue-next'

export interface ElasticSwitchProps {
  modelValue?: boolean
  label?: string
  description?: string
  variant?: 'blue' | 'emerald' | 'violet'
  disabled?: boolean
  class?: string
}

const props = withDefaults(defineProps<ElasticSwitchProps>(), {
  modelValue: true,
  label: '消息通知',
  description: '有新的评论或 @ 提及时推送提醒',
  variant: 'blue',
  disabled: false,
})

const emit = defineEmits<{
  'update:modelValue': [val: boolean]
  change: [val: boolean]
}>()

// 组件内部保存开关状态：未绑定 v-model 时也能正常切换；绑定时跟随外部值
const internalChecked = ref(props.modelValue)

watch(
  () => props.modelValue,
  (val) => {
    internalChecked.value = val
  }
)

const isChecked = computed({
  get: () => internalChecked.value,
  set: (val: boolean) => {
    internalChecked.value = val
    emit('update:modelValue', val)
    emit('change', val)
  },
})

// 物理水滴形变与果冻弹簧状态
const isStretching = ref(false)

function toggle() {
  if (props.disabled) return
  isStretching.value = true
  isChecked.value = !isChecked.value

  // 模拟拉伸形变完成后回弹果冻震颤
  setTimeout(() => {
    isStretching.value = false
  }, 280)
}

// 轨道与滑块中心圆点共用的主题色
const variantColors = {
  blue: 'bg-blue-600',
  emerald: 'bg-emerald-600',
  violet: 'bg-violet-600',
}

// 演示第二与第三个独立 Switch
const demoA = ref(true)
const demoB = ref(false)
</script>

<template>
  <div :class="cn('w-full max-w-lg rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-4', props.class)">
    <!-- 1. 主控开关项 -->
    <div
      class="flex items-center justify-between p-4 rounded-xl border border-zinc-200/70 bg-zinc-50/50 dark:border-zinc-800/60 dark:bg-zinc-900/30 cursor-pointer"
      @click="toggle"
    >
      <div class="flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
          <Zap class="h-5 w-5" />
        </div>
        <div>
          <h4 class="font-bold text-sm text-zinc-900 dark:text-white">
            {{ props.label }}
          </h4>
          <p class="text-xs text-zinc-400 font-mono mt-0.5">
            {{ props.description }}
          </p>
        </div>
      </div>

      <!-- 果冻弹性开关本体 -->
      <button
        type="button"
        role="switch"
        :aria-checked="isChecked"
        :disabled="props.disabled"
        :class="[
          'relative inline-flex h-7 w-[3.25rem] shrink-0 cursor-pointer rounded-full p-0.5 transition-colors duration-300 ease-in-out focus:outline-none',
          isChecked ? variantColors[props.variant] : 'bg-zinc-300 dark:bg-zinc-700',
          props.disabled && 'opacity-50 cursor-not-allowed',
        ]"
      >
        <!-- 内部微图标 (Check / X) -->
        <span class="absolute inset-y-0 left-1.5 flex items-center justify-center text-white/90">
          <Check class="h-3 w-3 stroke-[3]" />
        </span>
        <span class="absolute inset-y-0 right-1.5 flex items-center justify-center text-zinc-500 dark:text-zinc-400">
          <X class="h-3 w-3 stroke-[3]" />
        </span>

        <!-- 物理果冻拉伸圆形滑块：拉伸时宽度 24px → 32px，并贴住目标一侧，始终不超出轨道 -->
        <span
          :class="[
            'pointer-events-none relative inline-flex h-6 items-center justify-center rounded-full bg-white shadow-md ring-0 transition-all duration-200 ease-out',
            isStretching ? 'w-8' : 'w-6',
            isChecked ? (isStretching ? 'translate-x-4' : 'translate-x-6') : 'translate-x-0',
          ]"
        >
          <span
            :class="[
              'h-2 w-2 rounded-full transition-colors',
              isChecked ? variantColors[props.variant] : 'bg-zinc-400',
            ]"
          />
        </span>
      </button>
    </div>

    <!-- 2. 次级快捷开关联动展示 -->
    <div class="grid grid-cols-2 gap-3 pt-1">
      <div
        class="flex items-center justify-between p-3 rounded-xl border border-zinc-200/60 bg-zinc-50/40 dark:border-zinc-800/50 dark:bg-zinc-900/20 cursor-pointer"
        @click="demoA = !demoA"
      >
        <div class="flex items-center gap-2">
          <Sparkles class="h-4 w-4 text-emerald-500" />
          <span class="text-xs font-semibold text-zinc-800 dark:text-zinc-200">自动保存</span>
        </div>
        <div
          :class="[
            'relative inline-flex h-5 w-9 shrink-0 rounded-full p-0.5 transition-colors duration-200',
            demoA ? 'bg-emerald-600' : 'bg-zinc-300 dark:bg-zinc-700',
          ]"
        >
          <span
            :class="[
              'inline-block h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200',
              demoA ? 'translate-x-4' : 'translate-x-0',
            ]"
          />
        </div>
      </div>

      <div
        class="flex items-center justify-between p-3 rounded-xl border border-zinc-200/60 bg-zinc-50/40 dark:border-zinc-800/50 dark:bg-zinc-900/20 cursor-pointer"
        @click="demoB = !demoB"
      >
        <div class="flex items-center gap-2">
          <Shield class="h-4 w-4 text-purple-500" />
          <span class="text-xs font-semibold text-zinc-800 dark:text-zinc-200">免打扰</span>
        </div>
        <div
          :class="[
            'relative inline-flex h-5 w-9 shrink-0 rounded-full p-0.5 transition-colors duration-200',
            demoB ? 'bg-purple-600' : 'bg-zinc-300 dark:bg-zinc-700',
          ]"
        >
          <span
            :class="[
              'inline-block h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200',
              demoB ? 'translate-x-4' : 'translate-x-0',
            ]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
