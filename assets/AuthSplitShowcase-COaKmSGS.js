const n=`<script setup lang="ts">
import { ref } from 'vue'
import { Sparkles, Mail, Lock, ArrowRight, ShieldCheck, Github, Quote } from 'lucide-vue-next'
import PasswordStrength from '@/components/ui/PasswordStrength.vue'
import SparklesCore from '@/components/ui/SparklesCore.vue'

const activeTab = ref<'login' | 'signup'>('signup')
const email = ref('developer@antigravity.dev')
const password = ref('AuraDynamic@2026')
const rememberMe = ref(true)
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 dark:bg-black transition-colors min-h-[640px] flex items-stretch">
    <!-- 主体左右分屏容器 -->
    <div class="w-full grid grid-cols-1 lg:grid-cols-2">
      <!-- 左侧品牌与动效引言沉浸区 (仅在 lg 以上展示或自适应) -->
      <div class="relative hidden lg:flex flex-col justify-between p-12 bg-zinc-950 overflow-hidden border-r border-zinc-800 text-left">
        <!-- 背景粒子星芒 (复用 SparklesCore 原子组件) -->
        <div class="absolute inset-0 pointer-events-none opacity-40">
          <SparklesCore
            id="auth-split-sparkles"
            background="transparent"
            :minSize="0.6"
            :maxSize="1.6"
            :particleDensity="70"
            particleColor="#818cf8"
          />
        </div>

        <!-- 极光背景渐变球 -->
        <div class="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600/30 rounded-full blur-[100px] pointer-events-none"></div>
        <div class="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>

        <!-- 顶栏 Logo -->
        <div class="relative z-10 flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
            <Sparkles class="w-5 h-5" />
          </div>
          <div>
            <span class="text-base font-black tracking-tight text-white">Aura Platform</span>
            <span class="block text-[10px] text-zinc-400 font-mono">NEXT-GEN UI SUITE</span>
          </div>
        </div>

        <!-- 中间口碑引用与数据标杆 -->
        <div class="relative z-10 my-auto max-w-md space-y-6">
          <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-indigo-400">
            <Quote class="w-5 h-5" />
          </div>
          <blockquote class="text-xl font-medium text-zinc-200 leading-relaxed">
            “Aura UI 彻底刷新了我们对现代化全栈组件库的认知。109 款业务级场景 Blocks 让我们以光速交付企业级应用，开发效率提升了整整三倍。”
          </blockquote>
          <div class="flex items-center gap-3 pt-2">
            <div class="w-11 h-11 rounded-full ring-2 ring-indigo-500/40 bg-zinc-800 flex items-center justify-center text-white font-bold text-sm">
              TC
            </div>
            <div>
              <div class="text-sm font-bold text-white">Tristan Campbell</div>
              <div class="text-xs text-zinc-400">首席技术官 · NovaCloud Enterprise</div>
            </div>
          </div>
        </div>

        <!-- 底栏安全合规背书 -->
        <div class="relative z-10 flex items-center gap-4 text-xs text-zinc-400 pt-8 border-t border-zinc-800/80">
          <div class="flex items-center gap-1.5">
            <ShieldCheck class="w-4 h-4 text-emerald-400" />
            <span>SOC2 Type II 认证</span>
          </div>
          <span>•</span>
          <span>端到端双因子加密</span>
          <span>•</span>
          <span>SLA 99.99%</span>
        </div>
      </div>

      <!-- 右侧表单操作区 -->
      <div class="flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-16 xl:px-20 bg-white dark:bg-zinc-950 text-left">
        <div class="w-full max-w-md mx-auto space-y-8">
          <!-- 头部切换与欢迎 -->
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                身份验证与安全访问
              </span>
              <!-- 登录/注册 Tab 切换 -->
              <div class="flex rounded-lg bg-zinc-100 dark:bg-zinc-800 p-0.5 text-xs font-medium">
                <button
                  @click="activeTab = 'signup'"
                  :class="[
                    'px-3 py-1 rounded-md transition-all',
                    activeTab === 'signup'
                      ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs'
                      : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                  ]"
                >
                  创建账号
                </button>
                <button
                  @click="activeTab = 'login'"
                  :class="[
                    'px-3 py-1 rounded-md transition-all',
                    activeTab === 'login'
                      ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs'
                      : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                  ]"
                >
                  直接登录
                </button>
              </div>
            </div>

            <h2 class="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
              {{ activeTab === 'signup' ? '开始您的 14 天免费体验' : '欢迎回到控制台' }}
            </h2>
            <p class="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1.5">
              {{ activeTab === 'signup' ? '无需信用卡，立即解锁全量 109 款场景区块与 AI 算力。' : '请输入您的企业账号凭据以继续工作。' }}
            </p>
          </div>

          <!-- OAuth 快捷登录通道 -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              class="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-xs font-semibold text-zinc-700 dark:text-zinc-200 transition-colors"
            >
              <Github class="w-4 h-4" />
              <span>GitHub 授权</span>
            </button>
            <button
              type="button"
              class="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-xs font-semibold text-zinc-700 dark:text-zinc-200 transition-colors"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>Google 接入</span>
            </button>
          </div>

          <!-- 分割线 -->
          <div class="relative flex items-center justify-center">
            <div class="border-t border-zinc-200 dark:border-zinc-800 w-full"></div>
            <span class="bg-white dark:bg-zinc-950 px-3 text-[11px] text-zinc-400 uppercase tracking-widest absolute">
              或者通过企业邮箱
            </span>
          </div>

          <!-- 表单主体 -->
          <div class="space-y-4">
            <!-- 邮箱输入 -->
            <div>
              <label class="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">工作电子邮箱</label>
              <div class="relative">
                <Mail class="w-4 h-4 text-zinc-400 absolute left-3.5 top-3" />
                <input
                  v-model="email"
                  type="email"
                  placeholder="name@company.com"
                  class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <!-- 密码输入与强度检测 (复用 PasswordStrength 原子组件) -->
            <div>
              <div class="flex items-center justify-between mb-1.5">
                <label class="block text-xs font-medium text-zinc-700 dark:text-zinc-300">安全访问口令</label>
                <a v-if="activeTab === 'login'" href="#" class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline">忘记密码？</a>
              </div>
              <div v-if="activeTab === 'signup'">
                <PasswordStrength
                  v-model="password"
                  placeholder="设置高强度管理口令..."
                  :showRules="true"
                />
              </div>
              <div v-else class="relative">
                <Lock class="w-4 h-4 text-zinc-400 absolute left-3.5 top-3" />
                <input
                  v-model="password"
                  type="password"
                  placeholder="输入您的访问密码..."
                  class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <!-- 记住选项与条款 -->
            <div class="flex items-center justify-between pt-1">
              <label class="flex items-center gap-2 cursor-pointer text-xs text-zinc-600 dark:text-zinc-400">
                <input
                  v-model="rememberMe"
                  type="checkbox"
                  class="rounded border-zinc-300 text-indigo-600 focus:ring-indigo-500 w-3.5 h-3.5"
                />
                <span>保持 30 天免密信任</span>
              </label>
            </div>

            <!-- 提交按钮 -->
            <button
              type="button"
              class="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/25 transition-all hover:scale-[1.01] active:scale-98"
            >
              <span>{{ activeTab === 'signup' ? '立即创建专属工作区' : '安全验证并登入' }}</span>
              <ArrowRight class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
