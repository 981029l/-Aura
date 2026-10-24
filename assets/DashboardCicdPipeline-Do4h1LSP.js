const e=`<script setup lang="ts">
import { ref } from 'vue'
import { GitCommit, CheckCircle2 } from 'lucide-vue-next'
import ProgressSteps, { type StepItem } from '@/components/ui/ProgressSteps.vue'
import HoldToConfirm from '@/components/ui/HoldToConfirm.vue'

const pipelineSteps: StepItem[] = [
  { id: 1, title: '静态代码扫描', description: 'vue-tsc -b 严格类型检测通过' },
  { id: 2, title: '单元与 E2E 测试', description: 'Playwright 无头浏览器回归 0 报错' },
  { id: 3, title: '容器镜像构建', description: 'Docker 镜像推送至私有镜像仓库' },
  { id: 4, title: '金丝雀灰度发布', description: '首批 10% 真实生产流量平滑切入' },
]

const currentStep = ref(3)
const isDeployed = ref(false)

function handleDeployConfirm() {
  currentStep.value = 4
  isDeployed.value = true
}
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-4">
          <GitCommit class="w-3.5 h-3.5" />
          <span>持续集成与交付 · 金丝雀灰度流水线</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          CI/CD 自动化流水线
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500">
            阶段进度与长按上线确认
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          严格的代码门禁管控。类型检查与端到端自动化测试全部绿灯后，需蓄力长按完成最终生产环境全量发布。
        </p>
      </div>

      <!-- 流水线卡片主体 -->
      <div class="max-w-4xl mx-auto rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-10 shadow-xl text-left space-y-8">
        <div class="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800">
          <div>
            <span class="text-xs font-mono font-bold text-zinc-400">PIPELINE #2026-RELEASE-V4</span>
            <h3 class="text-base font-bold text-zinc-900 dark:text-white mt-0.5">全量 109 款场景 Blocks 生产交付</h3>
          </div>
          <span class="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-xs font-mono font-bold">
            {{ isDeployed ? 'RELEASE COMPLETED' : 'CANARY VERIFYING' }}
          </span>
        </div>

        <!-- 阶段步进器：集成 ProgressSteps 原子组件 -->
        <div class="py-2">
          <ProgressSteps
            :steps="pipelineSteps"
            :currentStep="currentStep"
            :clickable="false"
          />
        </div>

        <!-- 部署发布操作区：集成 HoldToConfirm 原子组件 -->
        <div class="pt-6 border-t border-zinc-100 dark:border-zinc-800 flex flex-col items-center gap-3">
          <div v-if="!isDeployed" class="w-full max-w-sm flex flex-col items-center gap-2">
            <HoldToConfirm
              :duration="1200"
              label="长按 1.2 秒确认全量上线"
              holdingLabel="正在注入金丝雀流量，请勿松手..."
              confirmedLabel="全量灰度已完成！"
              variant="primary"
              @confirm="handleDeployConfirm"
              class="w-full !bg-emerald-600 hover:!bg-emerald-500 !text-white font-bold"
            />
            <span class="text-[11px] text-zinc-400 font-mono">
              生产发布具备自动化蓝绿回滚机制
            </span>
          </div>

          <div v-else class="text-center py-2 flex items-center gap-2 text-sm font-bold text-emerald-500">
            <CheckCircle2 class="w-4 h-4" />
            <span>生产集群 100% 流量注入成功，已就绪！</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`;export{e as default};
