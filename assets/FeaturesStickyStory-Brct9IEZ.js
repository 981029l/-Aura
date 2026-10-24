const t=`<script setup lang="ts">
import { ref } from 'vue'
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-vue-next'
import Cube3D from '@/components/ui/Cube3D.vue'
import ProgressSteps, { type StepItem } from '@/components/ui/ProgressSteps.vue'

const steps: StepItem[] = [
  { id: 1, title: '阶段 01: 需求解析', description: '自然语言拆解与多智能体任务分解' },
  { id: 2, title: '阶段 02: 向量召回', description: '高维企业私有知识库 Top-K 检索' },
  { id: 3, title: '阶段 03: 工具执行', description: '沙盒环境安全运行与代码热重载' },
  { id: 4, title: '阶段 04: 自适应纠偏', description: '结果校验与闭环自愈反馈' },
]

const currentStep = ref(2)

const stepDetails: Record<number, { title: string; desc: string; bullet: string[] }> = {
  1: {
    title: '自主语义理解与 DAG 拓扑拆解',
    desc: '当用户输入复杂业务目标时，主中枢智能体自动将任务拆解为多子目标，并依据依赖关系生成有向无环图。',
    bullet: ['意图精准识别率 99.2%', '自动消除歧义指令', '毫秒级任务分发'],
  },
  2: {
    title: '全息高维向量检索与注意力注流',
    desc: '在数以千万计的企业结构化/非结构化文档中，以混合检索（向量余弦 + BM25）实现超精准上下文召回。',
    bullet: ['平均检索时延 < 8ms', '动态上下文窗口智能压缩', '消除幻觉率 94%'],
  },
  3: {
    title: '硬件级隔离沙盒与实时工具调度',
    desc: '每个工具调用均在独立的轻量安全容器中运行，支持直接与外部 API、数据库和终端执行交互。',
    bullet: ['微秒级冷启动', '多语言运行环境隔离', '细粒度权限审计'],
  },
  4: {
    title: '感知-行动-验证自愈闭环',
    desc: '智能体主动对执行输出进行单元测试与边界检查。若出现偶发异常，自动启动回溯重试与策略纠偏。',
    bullet: ['全自动自我补偿机制', '零人工介入自愈率 88%', '完整的执行溯源链'],
  },
}
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部介绍 -->
      <div class="text-center max-w-3xl mx-auto mb-14">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 text-xs font-semibold mb-4">
          <Sparkles class="w-3.5 h-3.5" />
          <span>分步故事演进 · 3D 动力学透视</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          四阶演进
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
            探寻智能体执行全貌
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          通过交互式进度步进与三维动态旋转立方体，生动感知每一次复杂任务的完整生命周期。
        </p>
      </div>

      <!-- 进度指示器：集成 ProgressSteps 原子组件 -->
      <div class="max-w-4xl mx-auto mb-14">
        <ProgressSteps
          :steps="steps"
          v-model:currentStep="currentStep"
        />
      </div>

      <!-- 核心主体分屏 -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
        <!-- 左侧：3D 旋转多维立方体：集成 Cube3D 原子组件 -->
        <div class="lg:col-span-6 flex items-center justify-center p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xl backdrop-blur-md">
          <Cube3D :size="220" :autoRotate="true" />
        </div>

        <!-- 右侧：当前阶段深度剖析 -->
        <div class="lg:col-span-6 flex flex-col items-start text-left">
          <span class="text-xs font-mono font-bold text-purple-600 dark:text-purple-400 tracking-wider uppercase">
            STAGE 0{{ currentStep }} OF 04
          </span>
          <h3 class="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white mt-2">
            {{ stepDetails[currentStep].title }}
          </h3>
          <p class="mt-4 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {{ stepDetails[currentStep].desc }}
          </p>

          <!-- 要点清单 -->
          <div class="mt-6 space-y-2.5">
            <div
              v-for="bullet in stepDetails[currentStep].bullet"
              :key="bullet"
              class="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300"
            >
              <CheckCircle2 class="w-4 h-4 text-purple-500 shrink-0" />
              <span>{{ bullet }}</span>
            </div>
          </div>

          <!-- 切换控制 -->
          <div class="mt-8 flex flex-wrap items-center gap-3">
            <button
              v-if="currentStep < 4"
              @click="currentStep++"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-all shadow-md active:scale-95"
            >
              <span>查看下一阶段</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </button>
            <button
              v-else
              @click="currentStep = 1"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-all shadow-md active:scale-95"
            >
              <span>从头重新演示</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`;export{t as default};
