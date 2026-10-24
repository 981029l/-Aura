<script setup lang="ts">
import { Cpu } from 'lucide-vue-next'
import QuantumSuperposition from '@/components/ui/QuantumSuperposition.vue'
</script>

<template>
  <div class="relative w-full overflow-hidden bg-black text-white py-16 sm:py-24 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <!-- 头部说明 -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs font-mono mb-4">
        <Cpu class="w-3.5 h-3.5" />
        <span>QUANTUM BLOCH SPHERE OPERATOR</span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-3xl">
        量子比特演示
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
          布洛赫球与测量
        </span>
      </h2>

      <p class="mt-4 text-sm sm:text-base text-zinc-400 max-w-xl">
        可以施加 Hadamard 门和 Pauli-X 门，查看量子态的变化，并模拟测量结果。
      </p>

      <!-- 核心量子组件：集成 QuantumSuperposition 原子组件 -->
      <div class="mt-12 w-full max-w-2xl text-left">
        <QuantumSuperposition
          qubitLabel="QUBIT q[0] · QPU ACCELERATOR"
          class="shadow-2xl"
        />
      </div>
    </div>
  </div>
</template>
