<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'
import {
  ListChecks,
  CheckCircle2,
  Circle,
  Loader2,
  AlertCircle,
  ChevronDown,
} from 'lucide-vue-next'

export type StepStatus = 'pending' | 'running' | 'completed' | 'failed'

export interface PlanStep {
  id: string | number
  title: string
  description?: string
  status: StepStatus
  priority?: 'P0' | 'P1' | 'P2'
  subtasks?: string[]
}

export interface AgentPlanProps {
  title?: string
  goal?: string
  steps?: PlanStep[]
  class?: string
}

const props = withDefaults(defineProps<AgentPlanProps>(), {
  title: '',
  goal: '为管理后台添加深色模式',
  steps: () => [
    {
      id: 1,
      title: '梳理现有颜色定义',
      description: '找出项目中所有写死的颜色值，整理成一份颜色变量清单。',
      status: 'completed',
      priority: 'P0',
      subtasks: ['搜索样式中的颜色值', '整理颜色清单'],
    },
    {
      id: 2,
      title: '替换为主题变量',
      description: '把组件里写死的颜色改为 CSS 变量，并定义浅色和深色两套取值。',
      status: 'completed',
      priority: 'P0',
      subtasks: ['替换按钮和表单颜色', '替换图表配色'],
    },
    {
      id: 3,
      title: '调整深色模式样式',
      description: '逐页检查深色模式下的文字对比度、边框和阴影，修正看不清的地方。',
      status: 'running',
      priority: 'P1',
      subtasks: ['检查文字对比度', '调整阴影和边框'],
    },
    {
      id: 4,
      title: '交互与可访问性走查',
      description: '逐个检查组件的键盘操作、焦点状态与 ARIA 属性，补齐减少动态效果（prefers-reduced-motion）的降级处理。',
      status: 'pending',
      priority: 'P1',
    },
    {
      id: 5,
      title: '构建并发布',
      description: '运行类型检查和构建，确认无误后发布到生产环境。',
      status: 'pending',
      priority: 'P2',
    },
  ],
})

const emit = defineEmits<{
  (e: 'step-click', step: PlanStep): void
  (e: 'toggle-step', stepId: string | number): void
}>()

const localSteps = ref<PlanStep[]>([...props.steps])
const expandedStepIds = ref<(string | number)[]>([props.steps[2]?.id || 3])

const completedCount = computed(() => {
  return localSteps.value.filter((s) => s.status === 'completed').length
})

const progressPercent = computed(() => {
  if (localSteps.value.length === 0) return 0
  return Math.round((completedCount.value / localSteps.value.length) * 100)
})

function toggleExpand(id: string | number) {
  if (expandedStepIds.value.includes(id)) {
    expandedStepIds.value = expandedStepIds.value.filter((i) => i !== id)
  } else {
    expandedStepIds.value.push(id)
  }
}

function cycleStatus(step: PlanStep) {
  const map: Record<StepStatus, StepStatus> = {
    pending: 'running',
    running: 'completed',
    completed: 'pending',
    failed: 'pending',
  }
  step.status = map[step.status]
  emit('toggle-step', step.id)
}
</script>

<template>
  <div
    :class="
      cn(
        'w-full max-w-2xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none',
        props.class
      )
    "
  >
    <!-- 头部规划看板 -->
    <div class="space-y-4 border-b border-zinc-100 pb-5 dark:border-zinc-800/80">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
            <ListChecks class="h-4 w-4" />
          </div>
          <div>
            <h3 class="text-sm font-bold text-zinc-900 dark:text-white">
              {{ props.title }}
            </h3>
            <p class="text-xs text-zinc-500 font-normal">
              {{ props.goal }}
            </p>
          </div>
        </div>

        <!-- 进度胶囊 -->
        <div class="flex items-center gap-2">
          <span class="font-mono text-xs font-bold text-zinc-700 dark:text-zinc-300">
            {{ completedCount }} / {{ localSteps.length }}
          </span>
          <span class="rounded-full bg-blue-500/10 px-2.5 py-0.5 font-mono text-[11px] font-bold text-blue-600 dark:text-blue-400 border border-blue-500/20">
            {{ progressPercent }}%
          </span>
        </div>
      </div>

      <!-- 动态进度条 -->
      <div class="h-1.5 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
        <div
          class="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 transition-all duration-500"
          :style="{ width: `${progressPercent}%` }"
        />
      </div>
    </div>

    <!-- 步骤清单 -->
    <div class="mt-4 space-y-2.5">
      <div
        v-for="(step, idx) in localSteps"
        :key="step.id"
        :class="[
          'rounded-xl border transition-all duration-200 overflow-hidden',
          step.status === 'running'
            ? 'border-blue-500/50 bg-blue-500/5 shadow-sm dark:border-blue-500/40 dark:bg-blue-500/5'
            : step.status === 'completed'
              ? 'border-zinc-200/60 bg-zinc-50/40 dark:border-zinc-800/60 dark:bg-zinc-900/20'
              : 'border-zinc-200/80 bg-white dark:border-zinc-800/80 dark:bg-zinc-950',
        ]"
      >
        <!-- 步骤标题行 -->
        <div
          @click="toggleExpand(step.id)"
          class="flex items-center justify-between p-3.5 cursor-pointer hover:bg-zinc-50/80 dark:hover:bg-zinc-900/50 transition-colors"
        >
          <div class="flex items-center gap-3 overflow-hidden">
            <!-- 勾选/状态按钮 -->
            <button
              type="button"
              @click.stop="cycleStatus(step)"
              class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg transition-transform active:scale-90 cursor-pointer"
              :title="`切换状态 (当前: ${step.status})`"
            >
              <CheckCircle2 v-if="step.status === 'completed'" class="h-5 w-5 text-emerald-500 animate-bounce-once" />
              <Loader2 v-else-if="step.status === 'running'" class="h-5 w-5 text-blue-500 animate-spin" />
              <AlertCircle v-else-if="step.status === 'failed'" class="h-5 w-5 text-rose-500" />
              <Circle v-else class="h-5 w-5 text-zinc-300 dark:text-zinc-600 hover:text-zinc-500" />
            </button>

            <span class="font-mono text-xs text-zinc-400 font-semibold shrink-0">
              0{{ idx + 1 }}.
            </span>

            <span
              :class="[
                'text-xs font-bold truncate transition-colors',
                step.status === 'completed'
                  ? 'text-zinc-400 line-through dark:text-zinc-500'
                  : 'text-zinc-800 dark:text-zinc-200',
              ]"
            >
              {{ step.title }}
            </span>
          </div>

          <!-- 右侧优先级与展开角标 -->
          <div class="flex items-center gap-2 shrink-0 ml-3">
            <span
              v-if="step.priority"
              :class="[
                'px-1.5 py-0.5 rounded text-[10px] font-mono font-bold',
                step.priority === 'P0'
                  ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20'
                  : step.priority === 'P1'
                    ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                    : 'bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400',
              ]"
            >
              {{ step.priority }}
            </span>

            <ChevronDown
              :class="[
                'h-3.5 w-3.5 text-zinc-400 transition-transform duration-200',
                expandedStepIds.includes(step.id) ? 'rotate-180' : 'rotate-0',
              ]"
            />
          </div>
        </div>

        <!-- 步骤展开详情与子任务清单 -->
        <div
          v-if="expandedStepIds.includes(step.id)"
          class="border-t border-zinc-100 bg-zinc-50/50 px-4 py-3 text-xs dark:border-zinc-800/80 dark:bg-zinc-900/40 space-y-2.5"
        >
          <p v-if="step.description" class="text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
            {{ step.description }}
          </p>

          <div v-if="step.subtasks && step.subtasks.length > 0" class="space-y-1.5 pt-1">
            <div
              v-for="subtask in step.subtasks"
              :key="subtask"
              class="flex items-center gap-2 text-[11px] text-zinc-500 dark:text-zinc-400 font-mono"
            >
              <span class="h-1 w-1 rounded-full bg-zinc-400 dark:bg-zinc-600" />
              <span>{{ subtask }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes bounce-once {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}
.animate-bounce-once {
  animation: bounce-once 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
