const n=`<script setup lang="ts">
import { Database, Clock, Zap } from 'lucide-vue-next'
import SegmentedMeter from '@/components/ui/SegmentedMeter.vue'
import Sparkline from '@/components/ui/Sparkline.vue'

const slowQueries = [
  { sql: 'SELECT * FROM vector_embeddings WHERE cosine_dist < 0.15 ORDER BY id LIMIT 50;', latency: '124ms', calls: '14.2k/hr' },
  { sql: 'UPDATE user_workspaces SET active_tokens = active_tokens + 1 WHERE id = $1;', latency: '8.4ms', calls: '89.4k/hr' },
  { sql: 'SELECT count(*) FROM audit_logs WHERE created_at > NOW() - INTERVAL 7 DAY;', latency: '42.1ms', calls: '2.1k/hr' },
]
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-white py-16 sm:py-24 dark:bg-zinc-950 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-4">
          <Database class="w-3.5 h-3.5" />
          <span>数据库性能分析 · 慢查询雷达</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          数据库连接池与慢 SQL
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
            硬件级分段刻度仪
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          全时段监控 Postgres 连接池水位与 QPS 吞吐，自动识别缺失索引的耗时查询。
        </p>
      </div>

      <!-- 组合展示区：分段刻度计 + 慢查询列表 -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto text-left">
        <!-- 左侧连接池刻度计：集成 SegmentedMeter 原子组件 -->
        <div class="lg:col-span-6 w-full">
          <SegmentedMeter
            title="数据库连接池占用率 (Pool Usage)"
            subtitle="当前活跃连接 68 / 100 · 预警阈值 85%"
            :totalSegments="24"
            class="shadow-xl"
          />
        </div>

        <!-- 右侧慢查询列表与实时 QPS 折线 -->
        <div class="lg:col-span-6 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 shadow-xl space-y-5">
          <div class="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800">
            <span class="text-xs font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
              <Zap class="w-4 h-4 text-amber-500" />
              实时查询吞吐 (QPS)
            </span>
            <span class="text-xs font-mono font-bold text-emerald-500">平均 4,820 QPS</span>
          </div>

          <!-- 折线图：集成 Sparkline 原子组件 -->
          <div class="py-2 flex justify-center">
            <Sparkline
              :data="[3800, 4200, 3950, 4600, 4820, 5100, 4750, 4900, 5200, 4820]"
              :width="380"
              :height="70"
              color="#3b82f6"
            />
          </div>

          <!-- 慢查询清单 -->
          <div class="space-y-3 pt-2">
            <div class="text-xs font-bold text-zinc-400">TOP 耗时慢查询 (Slow Queries)</div>
            <div
              v-for="q in slowQueries"
              :key="q.sql"
              class="p-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs"
            >
              <div class="font-mono text-zinc-800 dark:text-zinc-200 truncate mb-1">{{ q.sql }}</div>
              <div class="flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <span class="flex items-center gap-1 text-rose-500 font-bold">
                  <Clock class="w-3 h-3" />
                  {{ q.latency }}
                </span>
                <span>{{ q.calls }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
