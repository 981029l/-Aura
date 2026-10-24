const n=`<script setup lang="ts">
import { Server, Activity } from 'lucide-vue-next'
import FlickeringGrid from '@/components/ui/FlickeringGrid.vue'
import StatCard from '@/components/ui/StatCard.vue'

const k8sNodes = [
  { name: 'worker-gpu-h100-01', cpu: '78%', memory: '64%', status: 'Ready' },
  { name: 'worker-gpu-h100-02', cpu: '82%', memory: '71%', status: 'Ready' },
  { name: 'worker-cpu-compute-03', cpu: '45%', memory: '38%', status: 'Ready' },
  { name: 'worker-cpu-compute-04', cpu: '39%', memory: '42%', status: 'Ready' },
]
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-950 text-white py-16 sm:py-24 transition-colors">
    <!-- 闪烁体素网格背景：集成 FlickeringGrid 原子组件 -->
    <div class="absolute inset-0 opacity-20 pointer-events-none">
      <FlickeringGrid :squareSize="6" :gridGap="8" color="#38bdf8" />
    </div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-950/40 text-sky-400 text-xs font-mono mb-4">
          <Server class="w-3.5 h-3.5" />
          <span>KUBERNETES DISTRIBUTED CLUSTER SENTINEL</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
          K8s 容器集群拓扑大盘
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400">
            算力节点与内存监控
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-400">
          包含 GPU 算力集群物理利用率、Pod 副本自愈生命周期与节点心跳。
        </p>
      </div>

      <!-- 三大集群状态卡：集成 StatCard 原子组件 -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10 text-left">
        <StatCard
          title="活跃计算节点 (Nodes)"
          :value="48"
          suffix=" 节点"
          :change="100"
          changePeriod="全部在线"
          color="#38bdf8"
          class="!border-zinc-800 !bg-zinc-900/60"
        />
        <StatCard
          title="集群平均 GPU 算力占用"
          :value="74.2"
          suffix="%"
          :decimals="1"
          :change="6.4"
          changePeriod="负载平稳"
          color="#10b981"
          class="!border-zinc-800 !bg-zinc-900/60"
        />
        <StatCard
          title="调度中 Pods 容器实例"
          :value="1840"
          suffix=" Pods"
          :change="12.0"
          changePeriod="自动水平扩容"
          color="#8b5cf6"
          class="!border-zinc-800 !bg-zinc-900/60"
        />
      </div>

      <!-- 节点实时状态卡片列表 -->
      <div class="max-w-5xl mx-auto rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md p-6 text-left">
        <div class="flex items-center justify-between pb-4 border-b border-zinc-800 text-xs font-mono text-zinc-400">
          <span>CLUSTER NODES POOL</span>
          <span class="text-emerald-400 font-bold flex items-center gap-1">
            <Activity class="w-3.5 h-3.5" />
            CONTROL PLANE HEALTHY
          </span>
        </div>

        <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            v-for="node in k8sNodes"
            :key="node.name"
            class="p-4 rounded-2xl border border-zinc-800/80 bg-zinc-950/60 flex items-center justify-between"
          >
            <div>
              <div class="text-xs font-mono font-bold text-white">{{ node.name }}</div>
              <div class="mt-2 flex items-center gap-4 text-[11px] text-zinc-400 font-mono">
                <span>CPU: <strong class="text-sky-400">{{ node.cpu }}</strong></span>
                <span>MEM: <strong class="text-purple-400">{{ node.memory }}</strong></span>
              </div>
            </div>
            <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
              {{ node.status }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
