<script setup lang="ts">
import { ref } from 'vue'
import { Sparkles, ArrowRight, ArrowLeft, Check, Building2, User, Code2, Users } from 'lucide-vue-next'
import ProgressSteps from '@/components/ui/ProgressSteps.vue'
import TagInput from '@/components/ui/TagInput.vue'

const currentStep = ref(1)

const wizardSteps = [
  { id: 1, title: '账号信息', description: '配置个人与身份' },
  { id: 2, title: '组织工作区', description: '命名团队与租户' },
  { id: 3, title: '技术栈偏好', description: '定制开发环境' },
  { id: 4, title: '协同邀请', description: '配置首批成员' },
]

// 表单状态
const formData = ref({
  fullName: 'Alex Morgan',
  workEmail: 'alex@hyperflow.ai',
  workspaceName: 'HyperFlow AI Lab',
  workspaceSlug: 'hyperflow-ai',
  role: 'tech-lead',
  techTags: ['Vue 3.5', 'TailwindCSS', 'TypeScript', 'Node.js', 'PostgreSQL'],
  inviteEmails: ['dev-lead@hyperflow.ai', 'designer@hyperflow.ai']
})

const roles = [
  { id: 'tech-lead', title: '技术总监 / 架构师', desc: '全权管理部署、API 密钥与 CI/CD 流程', icon: Code2 },
  { id: 'fullstack', title: '全栈开发工程师', desc: '构建端到端功能并集成 Aura UI 组件库', icon: User },
  { id: 'designer', title: '产品 / UI 设计师', desc: '设计设计系统规范与动态动效原型', icon: Sparkles },
  { id: 'manager', title: '研发项目管理', desc: '追踪里程碑交付与团队席位配额', icon: Users },
]

function nextStep() {
  if (currentStep.value < 4) {
    currentStep.value++
  }
}

function prevStep() {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const isCompleted = ref(false)
function completeWizard() {
  isCompleted.value = true
}
</script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-2xl mx-auto mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-4">
          <Sparkles class="w-3.5 h-3.5" />
          <span>全新组织引导向导 · 多步骤平滑过渡</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
          四步开启您的专属云端工作区
        </h2>
        <p class="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          轻量向导容器，集成步骤条、标签输入器与角色多态选择，助您极速完成企业开户。
        </p>
      </div>

      <!-- 向导外框卡片 -->
      <div class="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-2xl p-6 sm:p-10 backdrop-blur-xl">
        <!-- 步骤进度指示条 (原子组件 ProgressSteps) -->
        <div class="mb-10 pb-8 border-b border-zinc-100 dark:border-zinc-800">
          <ProgressSteps
            :steps="wizardSteps"
            :currentStep="currentStep"
            @update:currentStep="(s) => currentStep = s"
          />
        </div>

        <!-- 步骤内容容器 -->
        <div v-if="!isCompleted" class="min-h-[320px] flex flex-col justify-between">
          <!-- Step 1: 账号与个人资料 -->
          <div v-if="currentStep === 1" class="space-y-6 animate-fade-in text-left">
            <div>
              <h3 class="text-lg font-bold text-zinc-900 dark:text-white">步骤 1：确认您的个人及安全档案</h3>
              <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">此信息将用于签署审计日志与团队通信。</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">真实姓名 / 开发者别名</label>
                <input
                  v-model="formData.fullName"
                  type="text"
                  class="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label class="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">企业授权邮箱</label>
                <input
                  v-model="formData.workEmail"
                  type="email"
                  class="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>

          <!-- Step 2: 组织与工作空间 -->
          <div v-else-if="currentStep === 2" class="space-y-6 animate-fade-in text-left">
            <div>
              <h3 class="text-lg font-bold text-zinc-900 dark:text-white">步骤 2：为您的团队工作空间命名</h3>
              <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">创建独立的租户沙箱，将自动分配专属二级域名与独立存储桶。</p>
            </div>
            <div class="space-y-4">
              <div>
                <label class="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">工作区显示全称</label>
                <div class="relative">
                  <Building2 class="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
                  <input
                    v-model="formData.workspaceName"
                    type="text"
                    class="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label class="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">专属访问二级域名 URL</label>
                <div class="flex items-center rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 px-3 py-2 text-sm text-zinc-500 font-mono">
                  <span>https://</span>
                  <input
                    v-model="formData.workspaceSlug"
                    type="text"
                    class="bg-transparent text-zinc-900 dark:text-white focus:outline-none font-semibold px-1"
                  />
                  <span>.aura-cloud.internal</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 3: 角色与技术栈 -->
          <div v-else-if="currentStep === 3" class="space-y-6 animate-fade-in text-left">
            <div>
              <h3 class="text-lg font-bold text-zinc-900 dark:text-white">步骤 3：选择您在团队中的核心职责与常用技术栈</h3>
              <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">系统将根据您的技术栈自动预装 CLI 脚手架并推荐对应的 Blocks 模板。</p>
            </div>

            <!-- 职责多态网格 -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                v-for="r in roles"
                :key="r.id"
                @click="formData.role = r.id"
                :class="[
                  'p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3',
                  formData.role === r.id
                    ? 'border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/30 ring-2 ring-indigo-500/20'
                    : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                ]"
              >
                <div :class="['w-8 h-8 rounded-lg flex items-center justify-center shrink-0', formData.role === r.id ? 'bg-indigo-500 text-white' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400']">
                  <component :is="r.icon" class="w-4 h-4" />
                </div>
                <div>
                  <h4 class="text-xs font-bold text-zinc-900 dark:text-white">{{ r.title }}</h4>
                  <p class="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">{{ r.desc }}</p>
                </div>
              </div>
            </div>

            <!-- 技术栈标签输入 (复用 TagInput 原子组件) -->
            <div>
              <label class="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">技术栈标签（回车添加，便于智能体自动编译对应模板）</label>
              <TagInput v-model="formData.techTags" placeholder="输入技术标签如 GraphQL, Docker 并回车..." />
            </div>
          </div>

          <!-- Step 4: 邀请协同伙伴 -->
          <div v-else class="space-y-6 animate-fade-in text-left">
            <div>
              <h3 class="text-lg font-bold text-zinc-900 dark:text-white">步骤 4：邀请同行开发者与产品经理</h3>
              <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">被邀请的成员将立即收到具有一次性免密安全凭证的专属开通邮件。</p>
            </div>
            <div>
              <label class="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">批量添加协同邮箱地址</label>
              <TagInput v-model="formData.inviteEmails" placeholder="输入同事邮箱并回车如 eng@company.com..." />
            </div>
            <div class="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 text-amber-700 dark:text-amber-400 text-xs flex items-center gap-2">
              <Sparkles class="w-4 h-4 shrink-0" />
              <span>初始团队席位享有 14 天企业版全量 109 款 Blocks 及 AI 控制台无限量体验。</span>
            </div>
          </div>

          <!-- 底部控制按钮栏 -->
          <div class="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
            <button
              v-if="currentStep > 1"
              @click="prevStep"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft class="w-3.5 h-3.5" />
              <span>上一步</span>
            </button>
            <div v-else></div>

            <button
              v-if="currentStep < 4"
              @click="nextStep"
              class="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/20 transition-all hover:scale-[1.02] active:scale-95"
            >
              <span>下一步</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </button>
            <button
              v-else
              @click="completeWizard"
              class="inline-flex items-center gap-2 px-7 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02] active:scale-95"
            >
              <Check class="w-4 h-4" />
              <span>完成初始化并进入控制台</span>
            </button>
          </div>
        </div>

        <!-- 完成状态展区 -->
        <div v-else class="py-12 text-center space-y-4 animate-fade-in">
          <div class="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 mx-auto flex items-center justify-center">
            <Check class="w-8 h-8" />
          </div>
          <h3 class="text-2xl font-black text-zinc-900 dark:text-white">工作区已成功就绪！</h3>
          <p class="text-sm text-zinc-500 max-w-md mx-auto">
            欢迎加入 {{ formData.workspaceName }}。邀请邮件已发送给相关成员，您可以立即开始探索全部 Blocks。
          </p>
          <div class="pt-4">
            <button
              @click="isCompleted = false; currentStep = 1"
              class="px-5 py-2 rounded-xl text-xs font-semibold border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              重置并重新演示向导
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
