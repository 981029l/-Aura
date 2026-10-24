const n=`<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight, Star, CheckCircle, ShieldCheck, Mail, User } from 'lucide-vue-next'
import PasswordStrength from '@/components/ui/PasswordStrength.vue'
import TagInput from '@/components/ui/TagInput.vue'

const email = ref('')
const name = ref('')
const password = ref('')
const tags = ref(['AI 智能体', 'SaaS 架构', '低代码工作流'])

const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
}
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 lg:py-28 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <!-- 左侧：品牌价值主张与客户背书 -->
        <div class="lg:col-span-6 flex flex-col items-start text-left">
          <!-- 评分徽章 -->
          <div class="flex items-center gap-2 mb-6">
            <div class="flex text-amber-400">
              <Star v-for="i in 5" :key="i" class="w-4 h-4 fill-amber-400" />
            </div>
            <span class="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              4.9/5 · 超过 10,000+ 团队信赖
            </span>
          </div>

          <h1 class="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
            即刻开启企业级
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              全场景动画协同
            </span>
          </h1>

          <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
            告别零碎低效的 UI 试错。开箱即用的 109 款现代场景业务区块，助力产研团队以 10 倍效率落地精美前端设计。
          </p>

          <!-- 核心权益保障 -->
          <div class="mt-8 space-y-3">
            <div class="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
              <CheckCircle class="w-4 h-4 text-emerald-500 shrink-0" />
              <span>永久免费无限制使用所有 182 款原子基础动效</span>
            </div>
            <div class="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
              <CheckCircle class="w-4 h-4 text-emerald-500 shrink-0" />
              <span>100% 纯 Vue 3.5 单文件组件，零黑盒构建侵入</span>
            </div>
            <div class="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
              <CheckCircle class="w-4 h-4 text-emerald-500 shrink-0" />
              <span>符合 SOC-2 与 GDPR 企业合规安全规范</span>
            </div>
          </div>

          <!-- 客户评价卡片 -->
          <div class="mt-10 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-md max-w-md">
            <p class="text-xs italic text-zinc-600 dark:text-zinc-300 leading-relaxed">
              “这是我们见过的代码最纯净的 UI 动效库，直接复制 SFC 组件就能无缝跑起来，为我们的 SaaS 首发节省了数周前端时间。”
            </p>
            <div class="mt-3 flex items-center gap-2">
              <div class="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                TC
              </div>
              <div>
                <div class="text-xs font-bold text-zinc-900 dark:text-white">Thomas Chen</div>
                <div class="text-[10px] text-zinc-500">VP of Engineering, CloudCore</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧：高转化注册表单（内嵌 PasswordStrength 与 TagInput） -->
        <div class="lg:col-span-6 w-full max-w-lg mx-auto">
          <div class="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 shadow-xl text-left">
            <div class="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800">
              <div>
                <h3 class="text-lg font-bold text-zinc-900 dark:text-white">创建专属团队空间</h3>
                <p class="text-xs text-zinc-500">30 秒完成初始化，无需信用卡</p>
              </div>
              <ShieldCheck class="w-6 h-6 text-emerald-500" />
            </div>

            <div v-if="!submitted" class="mt-6 space-y-4">
              <!-- 姓名 -->
              <div>
                <label class="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">您的全名</label>
                <div class="relative">
                  <User class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    v-model="name"
                    type="text"
                    placeholder="张小凡"
                    class="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-900 dark:text-white"
                  />
                </div>
              </div>

              <!-- 邮箱 -->
              <div>
                <label class="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">企业工作邮箱</label>
                <div class="relative">
                  <Mail class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    v-model="email"
                    type="email"
                    placeholder="name@company.com"
                    class="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-900 dark:text-white"
                  />
                </div>
              </div>

              <!-- 动态密码强度检测：集成 PasswordStrength 原子组件 -->
              <div>
                <label class="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">设置密码</label>
                <PasswordStrength
                  v-model="password"
                  placeholder="设置包含字母、数字和符号的强密码"
                  :showRules="true"
                />
              </div>

              <!-- 团队关注领域标签：集成 TagInput 原子组件 -->
              <div>
                <label class="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">感兴趣的业务场景标签</label>
                <TagInput
                  v-model="tags"
                  placeholder="输入领域后回车添加..."
                />
              </div>

              <!-- 提交按钮 -->
              <button
                @click="handleSubmit"
                class="w-full mt-2 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-md active:scale-95"
              >
                <span>立即进入工作台</span>
                <ArrowRight class="w-4 h-4" />
              </button>
            </div>

            <!-- 成功提交状态 -->
            <div v-else class="py-12 text-center flex flex-col items-center gap-3">
              <div class="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <CheckCircle class="w-6 h-6" />
              </div>
              <h4 class="text-base font-bold text-zinc-900 dark:text-white">团队工作空间配置完成！</h4>
              <p class="text-xs text-zinc-500 max-w-xs">
                已向 {{ email || '您的邮箱' }} 发送激活验证链，即刻登录体验 109 款场景区块。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
