<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import {
  Globe,
  ShieldAlert,
  ShieldCheck,
} from 'lucide-vue-next'

export interface MultiRegionFailoverProps {
  title?: string
  class?: string
}

const props = withDefaults(defineProps<MultiRegionFailoverProps>(), {
  title: '多地域容灾',
})

export type FailoverState = 'healthy' | 'failing' | 'failed' | 'recovering'

const state = ref<FailoverState>('healthy')
const failedProbes = ref(0)
const trafficSplit = ref({ regionA: 50, regionB: 50 })

function simulateOutage() {
  if (state.value !== 'healthy') return
  state.value = 'failing'
  failedProbes.value = 1

  setTimeout(() => {
    failedProbes.value = 2
  }, 600)

  setTimeout(() => {
    failedProbes.value = 3
    state.value = 'failed'
    trafficSplit.value = { regionA: 0, regionB: 100 }
  }, 1200)
}

function recoverRegion() {
  if (state.value !== 'failed') return
  state.value = 'recovering'

  setTimeout(() => {
    state.value = 'healthy'
    failedProbes.value = 0
    trafficSplit.value = { regionA: 50, regionB: 50 }
  }, 1000)
}
</script>

<template>
  <div
    :class="
      cn(
        'w-full max-w-4xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6',
        props.class
      )
    "
  >
    <!-- 头部指标与演练控制器 -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 pb-5 dark:border-zinc-800/80">
      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <Globe class="h-4 w-4 text-blue-500" />
          <h3 class="text-sm font-bold text-zinc-900 dark:text-white">
            {{ props.title }}
          </h3>
        </div>
        <p class="text-xs text-zinc-500 font-mono">
          主地域连续 3 次健康检查失败后，流量自动切换到备用地域
        </p>
      </div>

      <!-- 演练按钮 -->
      <div class="flex items-center gap-2">
        <button
          v-if="state === 'healthy'"
          type="button"
          @click="simulateOutage"
          class="inline-flex items-center gap-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-all active:scale-95 cursor-pointer"
        >
          <ShieldAlert class="h-3.5 w-3.5" />
          <span>模拟 Region A 故障</span>
        </button>

        <button
          v-else
          type="button"
          @click="recoverRegion"
          class="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-all active:scale-95 cursor-pointer"
        >
          <ShieldCheck class="h-3.5 w-3.5" />
          <span>恢复 Region A</span>
        </button>
      </div>
    </div>

    <!-- 拓扑演练舞台 -->
    <div class="relative overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-950 p-6 min-h-[340px] flex flex-col justify-between">
      <!-- 背景网格 -->
      <div
        class="absolute inset-0 opacity-15 pointer-events-none"
        style="
          background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px);
          background-size: 20px 20px;
        "
      />

      <!-- 顶部: 全局 Anycast 负载均衡器 -->
      <div class="relative z-10 flex flex-col items-center">
        <div class="flex items-center gap-2 rounded-2xl border border-blue-500/50 bg-blue-500/10 px-5 py-2.5 shadow-lg shadow-blue-500/10 backdrop-blur-md">
          <Globe class="h-5 w-5 text-blue-400" />
          <div>
            <h4 class="text-xs font-bold text-white">Global Edge Load Balancer</h4>
            <p class="text-[10px] text-blue-300 font-mono">Anycast DNS · Latency-Based Routing</p>
          </div>
        </div>
      </div>

      <!-- 中间流量分发比例指示 -->
      <div class="relative z-10 flex justify-around px-8 my-4 font-mono text-xs">
        <!-- 分支 A 流量 -->
        <div class="flex flex-col items-center">
          <span
            :class="[
              'font-black transition-colors text-sm',
              trafficSplit.regionA > 0 ? 'text-blue-400' : 'text-rose-500 line-through',
            ]"
          >
            {{ trafficSplit.regionA }}% 流量
          </span>
          <span class="text-[10px] text-zinc-500">
            {{ trafficSplit.regionA > 0 ? '24.2k req/s' : '0 req/s (Diverted)' }}
          </span>
        </div>

        <!-- 分支 B 流量 -->
        <div class="flex flex-col items-center">
          <span class="font-black text-sm text-emerald-400">
            {{ trafficSplit.regionB }}% 流量
          </span>
          <span class="text-[10px] text-zinc-500">
            {{ trafficSplit.regionB === 100 ? '48.4k req/s (Full Load)' : '24.2k req/s' }}
          </span>
        </div>
      </div>

      <!-- 底部: 双地域集群对比卡片 -->
      <div class="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <!-- Region A: us-east-1 -->
        <div
          :class="[
            'rounded-2xl border p-4 transition-all duration-300 backdrop-blur-md relative overflow-hidden',
            state === 'healthy'
              ? 'border-zinc-800 bg-zinc-900/90'
              : state === 'failing'
                ? 'border-amber-500/60 bg-amber-500/10'
                : 'border-rose-500/60 bg-rose-500/10',
          ]"
        >
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <span
                :class="[
                  'h-2.5 w-2.5 rounded-full',
                  state === 'healthy'
                    ? 'bg-emerald-500 animate-pulse'
                    : state === 'failing'
                      ? 'bg-amber-500 animate-ping'
                      : 'bg-rose-500',
                ]"
              />
              <span class="font-bold text-xs text-white">Region A: us-east-1 (Primary)</span>
            </div>

            <span
              :class="[
                'px-2 py-0.5 rounded font-mono text-[10px] font-bold uppercase',
                state === 'healthy'
                  ? 'bg-emerald-500/20 text-emerald-300'
                  : 'bg-rose-500/20 text-rose-300',
              ]"
            >
              {{ state === 'healthy' ? 'Healthy' : `Probe ${failedProbes}/3 Failed` }}
            </span>
          </div>

          <p class="text-[11px] text-zinc-400 leading-relaxed font-normal">
            {{
              state === 'healthy'
                ? '所有服务运行正常，P99 延迟 18ms。'
                : '健康检查失败，流量已切换到备用地域。'
            }}
          </p>
        </div>

        <!-- Region B: eu-west-1 (Secondary / Failover) -->
        <div
          :class="[
            'rounded-2xl border p-4 transition-all duration-300 backdrop-blur-md relative overflow-hidden',
            state === 'failed'
              ? 'border-emerald-500/80 bg-emerald-500/10 ring-2 ring-emerald-500/30'
              : 'border-zinc-800 bg-zinc-900/90',
          ]"
        >
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <span class="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span class="font-bold text-xs text-white">Region B: eu-west-1 (Failover)</span>
            </div>

            <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold uppercase">
              {{ state === 'failed' ? 'Absorbing 100% Traffic' : 'Standby / Active' }}
            </span>
          </div>

          <p class="text-[11px] text-zinc-400 leading-relaxed font-normal">
            备用地域已扩容并承接全部流量，P99 延迟 24ms。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
