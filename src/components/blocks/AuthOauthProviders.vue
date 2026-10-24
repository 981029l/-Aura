<script setup lang="ts">
import { ref } from 'vue'
import { KeyRound, Shield, Check, Lock, ArrowRight, Sparkles } from 'lucide-vue-next'
import ExpandingButtonGroup from '@/components/ui/ExpandingButtonGroup.vue'

const activeProvider = ref<string | null>(null)
const isAuthorizing = ref(false)
const authorizedProvider = ref<string | null>(null)

const ssoDomain = ref('auth.acme-corp.com')

function handleProviderSelect(provider: string) {
  activeProvider.value = provider
  isAuthorizing.value = true
  setTimeout(() => {
    isAuthorizing.value = false
    authorizedProvider.value = provider
  }, 1000)
}
</script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-4xl px-4 sm:px-6">
      <!-- 头部说明 -->
      <div class="text-center max-w-2xl mx-auto mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 text-xs font-semibold mb-4">
          <KeyRound class="w-3.5 h-3.5" />
          <span>SSO / OAuth 登录</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
          使用已有账号登录
        </h2>
        <p class="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          支持 GitHub、Google、Apple、Microsoft 账号，以及企业的 SAML 2.0 / Okta 单点登录。
        </p>
      </div>

      <!-- 核心卡片 -->
      <div class="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-2xl p-6 sm:p-10 backdrop-blur-xl text-left space-y-8">
        <!-- 主流 OAuth 服务提供商胶囊卡片 -->
        <div>
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Shield class="w-4 h-4 text-sky-500" />
              <span>选择登录方式</span>
            </h3>
            <span class="text-xs text-zinc-400 font-mono">OpenID Connect 1.0</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <!-- GitHub -->
            <button
              @click="handleProviderSelect('GitHub')"
              :disabled="isAuthorizing"
              class="flex items-center gap-3 p-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all text-left group"
            >
              <div class="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center shrink-0">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>
              <div class="overflow-hidden">
                <div class="text-xs font-bold text-zinc-900 dark:text-white truncate">GitHub 授权</div>
                <div class="text-[10px] text-zinc-500">用于开发者工作区</div>
              </div>
            </button>

            <!-- Google -->
            <button
              @click="handleProviderSelect('Google')"
              :disabled="isAuthorizing"
              class="flex items-center gap-3 p-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all text-left group"
            >
              <div class="w-10 h-10 rounded-xl bg-white shadow-sm border border-zinc-200 dark:border-zinc-700 flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
              </div>
              <div class="overflow-hidden">
                <div class="text-xs font-bold text-zinc-900 dark:text-white truncate">Google Workspace</div>
                <div class="text-[10px] text-zinc-500">企业与团队套件</div>
              </div>
            </button>

            <!-- Microsoft Entra ID -->
            <button
              @click="handleProviderSelect('Microsoft')"
              :disabled="isAuthorizing"
              class="flex items-center gap-3 p-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all text-left group"
            >
              <div class="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <div class="grid grid-cols-2 gap-0.5 w-4 h-4">
                  <div class="bg-rose-500"></div>
                  <div class="bg-emerald-500"></div>
                  <div class="bg-sky-500"></div>
                  <div class="bg-amber-500"></div>
                </div>
              </div>
              <div class="overflow-hidden">
                <div class="text-xs font-bold text-zinc-900 dark:text-white truncate">Microsoft Entra</div>
                <div class="text-[10px] text-zinc-500">Azure AD 租户目录</div>
              </div>
            </button>

            <!-- Apple -->
            <button
              @click="handleProviderSelect('Apple')"
              :disabled="isAuthorizing"
              class="flex items-center gap-3 p-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all text-left group"
            >
              <div class="w-10 h-10 rounded-xl bg-zinc-900 text-white flex items-center justify-center shrink-0">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 170 170">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.05-7.85-7.9-12.45-14.54-6.41-9.25-11.49-20.1-15.24-32.55-3.75-12.45-5.63-24.13-5.63-35.03 0-14.15 3.49-25.9 10.47-35.25 6.99-9.35 15.77-14.07 26.35-14.17 4.91 0 10.4 1.28 16.47 3.84 6.07 2.56 10.02 3.9 11.85 4.02 1.63-.12 5.79-1.52 12.48-4.2 6.69-2.68 12.27-3.9 16.74-3.66 12.27.61 22.18 5.2 29.73 13.78-10.74 6.53-15.98 15.6-15.71 27.22.27 9.17 3.86 16.92 10.78 23.25 6.92 6.33 15.22 9.94 24.9 10.83-2.18 6.53-4.91 13.27-8.19 20.21zM119.22 33.39c0-6.72 2.37-13.1 7.11-19.14 4.74-6.04 10.76-10.15 18.06-12.33.65 3.27.76 6.33.33 9.17-.65 4.36-2.4 8.72-5.24 13.08-2.84 4.36-6.43 7.63-10.77 9.81-3.27 1.63-6.43 2.51-9.49 2.62v-3.21z" />
                </svg>
              </div>
              <div class="overflow-hidden">
                <div class="text-xs font-bold text-zinc-900 dark:text-white truncate">Apple 快捷登录</div>
                <div class="text-[10px] text-zinc-500">私密中继保护</div>
              </div>
            </button>
          </div>

          <!-- 授权模拟反馈提示 -->
          <div
            v-if="isAuthorizing || authorizedProvider"
            class="mt-4 p-3 rounded-xl border border-sky-500/20 bg-sky-500/5 text-xs text-sky-700 dark:text-sky-300 flex items-center justify-between animate-fade-in"
          >
            <div class="flex items-center gap-2">
              <Sparkles class="w-4 h-4 animate-spin text-sky-500" v-if="isAuthorizing" />
              <Check class="w-4 h-4 text-emerald-500" v-else />
              <span>
                {{ isAuthorizing ? `正在通过 ${activeProvider} 登录...` : `已通过 ${authorizedProvider} 登录` }}
              </span>
            </div>
            <button
              v-if="authorizedProvider"
              @click="authorizedProvider = null"
              class="text-[11px] underline font-medium"
            >
              退出登录
            </button>
          </div>
        </div>

        <!-- 分割线 -->
        <div class="relative flex items-center justify-center">
          <div class="border-t border-zinc-200 dark:border-zinc-800 w-full"></div>
          <span class="bg-white dark:bg-zinc-900 px-3 text-[11px] text-zinc-400 uppercase tracking-widest absolute">
            企业单点登录（SAML / Okta）
          </span>
        </div>

        <!-- 企业 SSO 输入框与连接 -->
        <div class="space-y-3">
          <label class="block text-xs font-bold text-zinc-900 dark:text-white">输入公司域名</label>
          <div class="flex gap-2">
            <div class="relative flex-1">
              <Lock class="w-4 h-4 text-zinc-400 absolute left-3.5 top-3" />
              <input
                v-model="ssoDomain"
                type="text"
                placeholder="sso.yourcompany.com"
                class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white text-xs font-mono focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <button
              type="button"
              class="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-zinc-900 dark:bg-white dark:text-zinc-900 hover:bg-zinc-800 transition-all flex items-center gap-2 shrink-0"
            >
              <span>继续</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <!-- 扩展按钮组 (复用 ExpandingButtonGroup 原子组件) -->
        <div class="pt-4 border-t border-zinc-100 dark:border-zinc-800">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold text-zinc-900 dark:text-white">快捷操作</span>
            <span class="text-[10px] text-zinc-400">悬停展开</span>
          </div>
          <ExpandingButtonGroup />
        </div>
      </div>
    </div>
  </div>
</template>
