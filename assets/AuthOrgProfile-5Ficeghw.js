const e=`<script setup lang="ts">
import { ref } from 'vue'
import { Building, Users, Sparkles, Check, Globe2, Briefcase, ArrowRight } from 'lucide-vue-next'
import MagneticBadge from '@/components/ui/MagneticBadge.vue'

const orgName = ref('Novasphere Labs Inc.')
const teamSize = ref('11-50')
const industry = ref('ai-llm')
const region = ref('apac')

const teamSizes = [
  { id: '1-10', label: '1 - 10 人', desc: '初创探索团队' },
  { id: '11-50', label: '11 - 50 人', desc: '快速成长型企业' },
  { id: '51-200', label: '51 - 200 人', desc: '成熟中型规模' },
  { id: '201+', label: '200+ 人', desc: '跨国集团 / 规模化' },
]

const industries = [
  { id: 'ai-llm', label: '生成式 AI & 大模型研发' },
  { id: 'fintech', label: '金融科技 & 支付清算' },
  { id: 'saas', label: 'B2B 企业级 SaaS' },
  { id: 'ecommerce', label: '跨境电商与数字零售' },
  { id: 'health', label: '医疗健康与生物信息' },
  { id: 'hardware', label: '智能硬件与 IoT 边缘计算' },
]

const selectedGoals = ref<string[]>(['fast-deploy', 'multi-theme'])
function toggleGoal(id: string) {
  if (selectedGoals.value.includes(id)) {
    selectedGoals.value = selectedGoals.value.filter(g => g !== id)
  } else {
    selectedGoals.value.push(id)
  }
}

const goals = [
  { id: 'fast-deploy', label: '极速构建上线' },
  { id: 'multi-theme', label: '原生明暗双模' },
  { id: 'type-safe', label: '100% 类型安全' },
  { id: 'ai-consoles', label: '集成 AI 智能体工作台' },
]

const isSaved = ref(false)
function saveProfile() {
  isSaved.value = true
  setTimeout(() => {
    isSaved.value = false
  }, 2500)
}
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-4xl px-4 sm:px-6">
      <!-- 头部说明 -->
      <div class="text-center max-w-2xl mx-auto mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 text-xs font-semibold mb-4">
          <Building class="w-3.5 h-3.5" />
          <span>组织画像初始化 · 行业业务定制</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
          完善企业资料与业务维度
        </h2>
        <p class="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          帮助智能体为您针对性编排最佳的 Blocks 业务模板组合与合规安全策略。
        </p>
      </div>

      <!-- 核心卡片 -->
      <div class="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-2xl p-6 sm:p-10 backdrop-blur-xl text-left space-y-8">
        <!-- 基础信息 -->
        <div>
          <h3 class="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
            <Briefcase class="w-4 h-4 text-violet-500" />
            <span>企业法定或项目名称</span>
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">企业或项目名称</label>
              <input
                v-model="orgName"
                type="text"
                class="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
            <div>
              <label class="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">主要服务地区</label>
              <div class="relative">
                <Globe2 class="w-4 h-4 text-zinc-400 absolute left-3 top-2.5" />
                <select
                  v-model="region"
                  class="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-violet-500"
                >
                  <option value="apac">亚太与中国地区 (APAC)</option>
                  <option value="na">北美自由贸易区 (NA)</option>
                  <option value="eu">欧洲经济区 (EU GDPR)</option>
                  <option value="global">全球多区域分布式节点</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- 团队规模选择 -->
        <div>
          <h3 class="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2 mb-3">
            <Users class="w-4 h-4 text-violet-500" />
            <span>当前全职研发团队规模</span>
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div
              v-for="s in teamSizes"
              :key="s.id"
              @click="teamSize = s.id"
              :class="[
                'p-3.5 rounded-xl border cursor-pointer transition-all text-center',
                teamSize === s.id
                  ? 'border-violet-500 bg-violet-50 dark:bg-violet-950/40 ring-2 ring-violet-500/20'
                  : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
              ]"
            >
              <div class="text-xs font-bold text-zinc-900 dark:text-white">{{ s.label }}</div>
              <div class="text-[10px] text-zinc-500 mt-1">{{ s.desc }}</div>
            </div>
          </div>
        </div>

        <!-- 行业领域选择 -->
        <div>
          <h3 class="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2 mb-3">
            <Sparkles class="w-4 h-4 text-violet-500" />
            <span>所属行业赛道</span>
          </h3>
          <div class="flex flex-wrap gap-2.5">
            <button
              v-for="ind in industries"
              :key="ind.id"
              @click="industry = ind.id"
              :class="[
                'px-3.5 py-2 rounded-xl text-xs font-medium transition-all border',
                industry === ind.id
                  ? 'bg-violet-600 text-white border-violet-600 shadow-sm'
                  : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300'
              ]"
            >
              {{ ind.label }}
            </button>
          </div>
        </div>

        <!-- 核心业务预期目标 -->
        <div>
          <label class="block text-xs font-bold text-zinc-900 dark:text-white mb-2">核心产品目标与首要考量（多选）</label>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="g in goals"
              :key="g.id"
              @click="toggleGoal(g.id)"
              :class="[
                'px-3 py-1.5 rounded-lg text-xs font-medium border flex items-center gap-1.5 transition-all',
                selectedGoals.includes(g.id)
                  ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400'
                  : 'border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400'
              ]"
            >
              <Check v-if="selectedGoals.includes(g.id)" class="w-3.5 h-3.5" />
              <span>{{ g.label }}</span>
            </button>
          </div>
        </div>

        <!-- 磁吸标签群 (复用 MagneticBadge 原子组件) -->
        <div class="pt-2">
          <label class="block text-xs font-bold text-zinc-900 dark:text-white mb-2">组织安全技术栈与合规特性</label>
          <MagneticBadge title="视差微触觉企业属性标签" />
        </div>

        <!-- 保存按钮 -->
        <div class="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <span class="text-xs text-zinc-500">配置随时可在控制台组织偏好中更新</span>
          <button
            @click="saveProfile"
            class="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-violet-600 hover:bg-violet-500 shadow-md shadow-violet-600/20 transition-all active:scale-95"
          >
            <Check v-if="isSaved" class="w-3.5 h-3.5" />
            <ArrowRight v-else class="w-3.5 h-3.5" />
            <span>{{ isSaved ? '组织偏好已保存！' : '保存组织档案并继续' }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
`;export{e as default};
