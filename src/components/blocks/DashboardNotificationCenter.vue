<script setup lang="ts">
import { ref } from 'vue'
import { Bell } from 'lucide-vue-next'
import SlideOverDrawer from '@/components/ui/SlideOverDrawer.vue'
import ToastNotification, { type ToastItem } from '@/components/ui/ToastNotification.vue'

const isDrawerOpen = ref(false)
const toasts = ref<ToastItem[]>([])

const notifications = [
  { id: 1, title: 'GPU 算力集群自动扩容完成', desc: '新增 4x H100 实例已加入调度池', type: 'success' as const, time: '3m ago' },
  { id: 2, title: 'Token 每日消耗达到预警水位 (80%)', desc: '当前工作空间今日已消耗 820k / 1M', type: 'warning' as const, time: '14m ago' },
  { id: 3, title: 'DDoS 哨兵成功阻断跨国泛洪攻击', desc: '已将 12 个可疑源 IP 移入黑洞清洗名单', type: 'info' as const, time: '1h ago' },
]

function triggerTestToast() {
  toasts.value.push({
    id: Date.now(),
    title: '系统通知测试',
    description: '您成功触发了一条实时 Toast 告警弹窗！',
    type: 'success',
  })
}

function handleDismissToast(id: string | number) {
  toasts.value = toasts.value.filter((t) => t.id !== id)
}
</script>

<template>
  <div class="relative w-full overflow-hidden bg-white py-16 sm:py-24 dark:bg-zinc-950 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <!-- 头部说明 -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
        <Bell class="w-3.5 h-3.5" />
        <span>通知中枢 · 侧边抽屉与微弹窗</span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white max-w-3xl">
        全场景告警通知中心
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
          侧拉抽屉与即时 Toast
        </span>
      </h2>

      <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
        点击下方按钮唤起系统级通知抽屉，或者模拟触发一条即时浮动通知。
      </p>

      <!-- 操作按钮组 -->
      <div class="mt-8 flex items-center justify-center gap-4">
        <button
          @click="isDrawerOpen = true"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-md active:scale-95 transition-all"
        >
          <Bell class="w-4 h-4" />
          <span>打开侧拉通知抽屉</span>
        </button>
        <button
          @click="triggerTestToast"
          class="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-semibold text-xs hover:bg-zinc-100 dark:hover:bg-zinc-800 active:scale-95 transition-all"
        >
          <span>触发一条实时 Toast</span>
        </button>
      </div>

      <!-- 侧边通知抽屉：集成 SlideOverDrawer 原子组件 -->
      <SlideOverDrawer
        v-model="isDrawerOpen"
        title="系统事件通知中心"
        description="所有关键集群变更、资费预警与安全事件归档"
      >
        <div class="space-y-4 pt-4 text-left">
          <div
            v-for="n in notifications"
            :key="n.id"
            class="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs space-y-1"
          >
            <div class="flex items-center justify-between">
              <span class="font-bold text-zinc-900 dark:text-white">{{ n.title }}</span>
              <span class="text-[10px] text-zinc-400 font-mono">{{ n.time }}</span>
            </div>
            <p class="text-zinc-500 dark:text-zinc-400">{{ n.desc }}</p>
          </div>
        </div>
      </SlideOverDrawer>

      <!-- 浮动 Toast 弹窗：集成 ToastNotification 原子组件 -->
      <ToastNotification
        :toasts="toasts"
        position="bottom-right"
        @dismiss="handleDismissToast"
      />
    </div>
  </div>
</template>
