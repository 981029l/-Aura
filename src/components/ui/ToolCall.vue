<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import {
  Terminal,
  Check,
  X,
  ChevronDown,
  RotateCw,
  Clock,
  ShieldAlert,
  Code2,
} from 'lucide-vue-next'

export type ToolCallStatus = 'idle' | 'running' | 'success' | 'error' | 'approval_required'

export interface ToolCallProps {
  toolName?: string
  command?: string
  status?: ToolCallStatus
  parameters?: Record<string, any> | string
  result?: Record<string, any> | string
  durationMs?: number
  canApprove?: boolean
  class?: string
}

const props = withDefaults(defineProps<ToolCallProps>(), {
  toolName: 'execute_sql',
  command: 'SELECT id, email, created_at FROM users WHERE tier = "pro" LIMIT 10;',
  status: 'approval_required',
  parameters: () => ({
    query: 'SELECT id, email, created_at FROM users WHERE tier = "pro" LIMIT 10;',
    database: 'production_primary',
    timeout_ms: 3000,
  }),
  result: () => ({
    status: 200,
    rows_affected: 10,
    execution_time: '42ms',
  }),
  durationMs: 142,
  canApprove: true,
})

const emit = defineEmits<{
  (e: 'approve'): void
  (e: 'reject'): void
  (e: 'retry'): void
}>()

const isExpanded = ref(true)
const currentStatus = ref<ToolCallStatus>(props.status)

function handleApprove() {
  currentStatus.value = 'running'
  emit('approve')
  setTimeout(() => {
    currentStatus.value = 'success'
  }, 1200)
}

function handleReject() {
  currentStatus.value = 'error'
  emit('reject')
}

function handleRetry() {
  currentStatus.value = 'running'
  emit('retry')
  setTimeout(() => {
    currentStatus.value = 'success'
  }, 1200)
}

function formatJson(val: any): string {
  if (typeof val === 'string') return val
  try {
    return JSON.stringify(val, null, 2)
  } catch {
    return String(val)
  }
}
</script>

<template>
  <div
    :class="
      cn(
        'w-full max-w-2xl rounded-2xl border transition-all duration-300 overflow-hidden font-sans select-none',
        currentStatus === 'approval_required'
          ? 'border-amber-500/40 bg-amber-500/5 shadow-md shadow-amber-500/5 dark:border-amber-500/30 dark:bg-amber-500/5'
          : currentStatus === 'running'
            ? 'border-blue-500/50 bg-blue-500/5 shadow-md shadow-blue-500/5 dark:border-blue-500/30'
            : currentStatus === 'error'
              ? 'border-rose-500/40 bg-rose-500/5 dark:border-rose-500/30'
              : 'border-zinc-200/90 bg-white/95 shadow-sm dark:border-zinc-800/90 dark:bg-zinc-950/90',
        props.class
      )
    "
  >
    <!-- 头部工具行 -->
    <div
      @click="isExpanded = !isExpanded"
      class="flex items-center justify-between p-4 cursor-pointer hover:bg-zinc-50/70 dark:hover:bg-zinc-900/40 transition-colors"
    >
      <div class="flex items-center gap-3 overflow-hidden">
        <!-- 状态指示图标 -->
        <div
          :class="[
            'flex h-8 w-8 shrink-0 items-center justify-center rounded-xl font-mono text-xs font-bold transition-all',
            currentStatus === 'running'
              ? 'bg-blue-500 text-white shadow-sm shadow-blue-500/30 animate-pulse'
              : currentStatus === 'success'
                ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                : currentStatus === 'error'
                  ? 'bg-rose-500/15 text-rose-600 dark:text-rose-400'
                  : currentStatus === 'approval_required'
                    ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400'
                    : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300',
          ]"
        >
          <RotateCw v-if="currentStatus === 'running'" class="h-4 w-4 animate-spin" />
          <Check v-else-if="currentStatus === 'success'" class="h-4 w-4" />
          <X v-else-if="currentStatus === 'error'" class="h-4 w-4" />
          <ShieldAlert v-else-if="currentStatus === 'approval_required'" class="h-4 w-4" />
          <Terminal v-else class="h-4 w-4" />
        </div>

        <div class="truncate">
          <div class="flex items-center gap-2">
            <span class="font-mono text-xs font-bold text-zinc-900 dark:text-white">
              {{ props.toolName }}
            </span>
            <span
              :class="[
                'inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold tracking-wider uppercase',
                currentStatus === 'running'
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300'
                  : currentStatus === 'success'
                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'
                    : currentStatus === 'error'
                      ? 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300'
                      : currentStatus === 'approval_required'
                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300'
                        : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400',
              ]"
            >
              {{ currentStatus }}
            </span>
          </div>

          <p v-if="props.command" class="mt-0.5 font-mono text-[11px] text-zinc-500 dark:text-zinc-400 truncate">
            {{ props.command }}
          </p>
        </div>
      </div>

      <!-- 右侧耗时与折叠箭头 -->
      <div class="flex items-center gap-3 shrink-0 ml-4">
        <div v-if="props.durationMs" class="flex items-center gap-1 font-mono text-[11px] text-zinc-400">
          <Clock class="h-3 w-3" />
          <span>{{ props.durationMs }}ms</span>
        </div>

        <ChevronDown
          :class="[
            'h-4 w-4 text-zinc-400 transition-transform duration-200',
            isExpanded ? 'rotate-180' : 'rotate-0',
          ]"
        />
      </div>
    </div>

    <!-- 待审批提示与行动区 -->
    <div
      v-if="currentStatus === 'approval_required' && props.canApprove"
      class="border-t border-amber-500/20 bg-amber-500/10 px-4 py-3 flex flex-wrap items-center justify-between gap-3"
    >
      <div class="flex items-center gap-2 text-xs font-medium text-amber-800 dark:text-amber-300">
        <ShieldAlert class="h-4 w-4 shrink-0" />
        <span>这个操作会修改数据，需要你确认后才会执行。</span>
      </div>

      <div class="flex items-center gap-2">
        <button
          type="button"
          @click.stop="handleReject"
          class="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-semibold text-zinc-600 hover:bg-zinc-200/80 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
        >
          <X class="h-3.5 w-3.5" />
          <span>拒绝</span>
        </button>

        <button
          type="button"
          @click.stop="handleApprove"
          class="inline-flex items-center gap-1 rounded-lg bg-amber-600 hover:bg-amber-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-all active:scale-95 cursor-pointer"
        >
          <Check class="h-3.5 w-3.5" />
          <span>批准</span>
        </button>
      </div>
    </div>

    <!-- 展开折叠的参数与返回区 -->
    <div
      v-if="isExpanded"
      class="border-t border-zinc-200/80 bg-zinc-50/50 p-4 space-y-3 dark:border-zinc-800/80 dark:bg-zinc-900/30"
    >
      <!-- 参数 -->
      <div class="space-y-1.5">
        <div class="flex items-center justify-between">
          <span class="flex items-center gap-1 font-mono text-[11px] font-bold text-zinc-500 dark:text-zinc-400">
            <Code2 class="h-3 w-3" />
            <span>INPUT PARAMETERS</span>
          </span>
        </div>
        <pre
          class="overflow-x-auto rounded-xl border border-zinc-200/80 bg-white p-3 font-mono text-[11px] text-zinc-800 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
        ><code>{{ formatJson(props.parameters) }}</code></pre>
      </div>

      <!-- 返回结果 -->
      <div v-if="props.result && currentStatus !== 'approval_required'" class="space-y-1.5">
        <div class="flex items-center justify-between">
          <span class="flex items-center gap-1 font-mono text-[11px] font-bold text-zinc-500 dark:text-zinc-400">
            <Check class="h-3 w-3" />
            <span>OUTPUT RESULT</span>
          </span>
          <button
            v-if="currentStatus === 'error'"
            type="button"
            @click.stop="handleRetry"
            class="flex items-center gap-1 text-[11px] font-semibold text-blue-500 hover:underline cursor-pointer"
          >
            <RotateCw class="h-3 w-3" />
            <span>重试</span>
          </button>
        </div>
        <pre
          class="overflow-x-auto rounded-xl border border-zinc-200/80 bg-white p-3 font-mono text-[11px] text-zinc-800 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
        ><code>{{ formatJson(props.result) }}</code></pre>
      </div>
    </div>
  </div>
</template>
