const n=`<script setup lang="ts">
import { ref, computed } from 'vue'
import { CheckCircle2, Circle, ArrowRight, Sparkles, Trophy, Rocket, RefreshCw } from 'lucide-vue-next'
import ProgressSteps from '@/components/ui/ProgressSteps.vue'

interface Task {
  id: string
  title: string
  desc: string
  reward: string
  done: boolean
}

const tasks = ref<Task[]>([
  { id: 'profile', title: '完善个人资料', desc: '上传头像，填写常用的开发语言', reward: '+100 积分', done: true },
  { id: 'first-block', title: '在项目中使用第一个组件', desc: '复制任意一个组件到你的项目中并运行', reward: '+200 积分', done: true },
  { id: 'invite', title: '邀请一位同事', desc: '通过邀请链接或邮箱邀请同事加入', reward: '解锁 14 天 Pro 权限', done: false },
  { id: 'deploy', title: '配置自动部署', desc: '连接代码仓库，完成第一次自动部署', reward: '获得认证徽章', done: false },
])

const completedCount = computed(() => tasks.value.filter(t => t.done).length)
const progressPercent = computed(() => Math.round((completedCount.value / tasks.value.length) * 100))

function toggleTask(task: Task) {
  task.done = !task.done
}

const stepsForDisplay = computed(() => {
  return tasks.value.map(t => ({
    title: t.title.split(' ')[0] || t.title,
    description: t.done ? '已达成' : '待处理'
  }))
})

const currentStepIndex = computed(() => {
  return Math.min(completedCount.value + 1, tasks.value.length)
})

function resetAll() {
  tasks.value.forEach(t => t.done = false)
}
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-4xl px-4 sm:px-6">
      <!-- 头部说明 -->
      <div class="text-center max-w-2xl mx-auto mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 text-xs font-semibold mb-4">
          <Trophy class="w-3.5 h-3.5" />
          <span>新手引导</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
          快速上手
        </h2>
        <p class="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          完成以下 4 项任务，即可领取新手奖励。
        </p>
      </div>

      <!-- 核心大卡片 -->
      <div class="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-2xl p-6 sm:p-10 backdrop-blur-xl text-left space-y-8">
        <!-- 进度条与积分头图 -->
        <div class="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent border border-amber-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">新手任务完成度</span>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-700 dark:text-amber-300">
                {{ completedCount }} / {{ tasks.length }} 项已完成
              </span>
            </div>
            <div class="text-2xl font-black text-zinc-900 dark:text-white">
              已完成 {{ progressPercent }}%
            </div>
          </div>

          <!-- 模拟环形或横向渐变进度条 -->
          <div class="w-full sm:w-64 space-y-2">
            <div class="h-3 w-full rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
              <div
                class="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500 rounded-full"
                :style="{ width: \`\${progressPercent}%\` }"
              ></div>
            </div>
            <div class="flex justify-between text-[10px] text-zinc-400 font-mono">
              <span>开始</span>
              <span v-if="progressPercent === 100" class="text-emerald-500 font-bold">全部完成！</span>
              <span v-else>还差 {{ tasks.length - completedCount }} 步</span>
            </div>
          </div>
        </div>

        <!-- 步骤条展示 (复用 ProgressSteps 原子组件) -->
        <div class="pt-2 pb-4">
          <ProgressSteps
            :steps="stepsForDisplay"
            :currentStep="currentStepIndex"
            :clickable="false"
          />
        </div>

        <!-- 任务列表 -->
        <div class="space-y-3">
          <div
            v-for="task in tasks"
            :key="task.id"
            @click="toggleTask(task)"
            :class="[
              'p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4',
              task.done
                ? 'border-emerald-500/30 bg-emerald-50/30 dark:bg-emerald-950/10'
                : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-800/40'
            ]"
          >
            <div class="flex items-start gap-4">
              <!-- 打勾图标切换 -->
              <button
                type="button"
                class="mt-0.5 shrink-0 transition-transform active:scale-90"
              >
                <CheckCircle2
                  v-if="task.done"
                  class="w-5 h-5 text-emerald-500 fill-emerald-500/20"
                />
                <Circle
                  v-else
                  class="w-5 h-5 text-zinc-300 dark:text-zinc-600 hover:text-zinc-400"
                />
              </button>

              <div class="space-y-0.5">
                <h4 :class="['text-sm font-bold transition-colors', task.done ? 'line-through text-zinc-400 dark:text-zinc-500' : 'text-zinc-900 dark:text-white']">
                  {{ task.title }}
                </h4>
                <p class="text-xs text-zinc-500 dark:text-zinc-400">
                  {{ task.desc }}
                </p>
              </div>
            </div>

            <!-- 奖励胶囊与操作 -->
            <div class="flex items-center gap-3 shrink-0">
              <span class="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                <Sparkles class="w-3 h-3" />
                <span>{{ task.reward }}</span>
              </span>
              <span class="text-xs font-semibold text-zinc-400 flex items-center gap-1 group-hover:text-zinc-600">
                <span>{{ task.done ? '已达成' : '点击完成' }}</span>
                <ArrowRight class="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>

        <!-- 底部全部完成提示 -->
        <div class="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <button
            @click="resetAll"
            class="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
          >
            <RefreshCw class="w-3 h-3" />
            <span>重置</span>
          </button>

          <button
            :disabled="progressPercent < 100"
            :class="[
              'inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md',
              progressPercent === 100
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-500/20 active:scale-95'
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400 cursor-not-allowed'
            ]"
          >
            <Rocket class="w-4 h-4" />
            <span>{{ progressPercent === 100 ? '领取新手奖励' : '完成全部任务后领取奖励' }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
