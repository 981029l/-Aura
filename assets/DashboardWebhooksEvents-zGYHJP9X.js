const n=`<script setup lang="ts">
import { ref } from 'vue'
import { Webhook, RotateCw } from 'lucide-vue-next'
import CodeWindow from '@/components/ui/CodeWindow.vue'

interface EventItem {
  id: string
  event: string
  endpoint: string
  status: 200 | 500 | 404
  duration: string
  time: string
}

const events = ref<EventItem[]>([
  { id: 'evt_1', event: 'agent.run.completed', endpoint: 'https://api.my-saas.com/v1/webhook', status: 200, duration: '42ms', time: '10s ago' },
  { id: 'evt_2', event: 'user.subscribed.pro', endpoint: 'https://billing.internal/stripe/hook', status: 200, duration: '88ms', time: '45s ago' },
  { id: 'evt_3', event: 'cluster.failover.drain', endpoint: 'https://ops-pager.internal/alerts', status: 200, duration: '120ms', time: '2m ago' },
  { id: 'evt_4', event: 'token.quota.warning', endpoint: 'https://slack.com/services/hook/xxx', status: 200, duration: '64ms', time: '5m ago' },
])

const isRetrying = ref(false)
function resendEvent() {
  isRetrying.value = true
  setTimeout(() => {
    isRetrying.value = false
  }, 1000)
}
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
          <Webhook class="w-3.5 h-3.5" />
          <span>事件管道 · Webhook 可靠投递日志</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          Webhook 事件分发大盘
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            带载重试与 Payload 调试
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          全时段追踪外部系统的事件交付状态，支持指数退避重试与 HMAC-SHA256 签名校验。
        </p>
      </div>

      <!-- 组合展示区：左侧事件日志列表，右侧 Payload 源码 -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto text-left">
        <!-- 左侧事件投递流 -->
        <div class="lg:col-span-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl overflow-hidden">
          <div class="p-5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
            <h3 class="text-sm font-bold text-zinc-900 dark:text-white">最近 24 小时交付日志</h3>
            <button
              @click="resendEvent"
              class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs text-zinc-700 dark:text-zinc-300 transition-colors"
            >
              <RotateCw class="w-3.5 h-3.5" :class="{ 'animate-spin': isRetrying }" />
              <span>重新投递测试</span>
            </button>
          </div>

          <div class="divide-y divide-zinc-100 dark:border-zinc-800">
            <div
              v-for="evt in events"
              :key="evt.id"
              class="p-4 flex items-center justify-between hover:bg-zinc-50 dark:hover:bg-zinc-800/40 transition-colors"
            >
              <div>
                <div class="flex items-center gap-2">
                  <span class="text-xs font-mono font-bold text-zinc-900 dark:text-white">{{ evt.event }}</span>
                  <span class="px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-500 font-bold">
                    {{ evt.status }} OK
                  </span>
                </div>
                <div class="text-[11px] text-zinc-500 font-mono truncate max-w-xs mt-0.5">
                  {{ evt.endpoint }}
                </div>
              </div>

              <div class="text-right text-[11px] font-mono text-zinc-400">
                <div>{{ evt.duration }}</div>
                <div class="text-[10px] text-zinc-500">{{ evt.time }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧：真实 JSON Payload 视窗：集成 CodeWindow 原子组件 -->
        <div class="lg:col-span-6 w-full">
          <CodeWindow
            title="webhook-payload.json · HMAC-SHA256"
            initialTab="BorderBeam.vue"
            class="shadow-2xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
