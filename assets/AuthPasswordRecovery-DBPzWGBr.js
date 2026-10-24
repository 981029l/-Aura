const n=`<script setup lang="ts">
import { ref } from 'vue'
import { KeyRound, Mail, ArrowRight, ArrowLeft, Check, RotateCcw, ShieldCheck } from 'lucide-vue-next'
import PasswordStrength from '@/components/ui/PasswordStrength.vue'

// 阶段：1-输入邮箱，2-已发送邮件等待验证，3-重设新密码，4-重设成功
const stage = ref<1 | 2 | 3 | 4>(1)
const email = ref('founder@hyperflow.ai')
const newPassword = ref('')
const countdown = ref(58)
const isSubmitting = ref(false)

function submitEmail() {
  if (!email.value) return
  isSubmitting.value = true
  setTimeout(() => {
    isSubmitting.value = false
    stage.value = 2
  }, 700)
}

function submitNewPassword() {
  if (!newPassword.value) return
  isSubmitting.value = true
  setTimeout(() => {
    isSubmitting.value = false
    stage.value = 4
  }, 800)
}
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-lg px-4 sm:px-6">
      <!-- 容器卡片 -->
      <div class="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-2xl p-6 sm:p-10 backdrop-blur-xl text-center">
        <!-- 阶段 1：输入邮箱获取重置链接 -->
        <div v-if="stage === 1" class="space-y-6 animate-fade-in text-left">
          <div class="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto mb-4">
            <KeyRound class="w-7 h-7" />
          </div>
          <div class="text-center">
            <h2 class="text-2xl font-black text-zinc-900 dark:text-white">重置安全密码</h2>
            <p class="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1.5">
              输入您注册时的电子邮箱，我们将发送包含一次性安全令牌的密码重置链接。
            </p>
          </div>

          <div class="space-y-4 pt-2">
            <div>
              <label class="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">绑定的安全邮箱</label>
              <div class="relative">
                <Mail class="w-4 h-4 text-zinc-400 absolute left-3.5 top-3" />
                <input
                  v-model="email"
                  type="email"
                  placeholder="alex@company.com"
                  class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <button
              @click="submitEmail"
              :disabled="!email || isSubmitting"
              class="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/25 transition-all active:scale-[0.98]"
            >
              <span>{{ isSubmitting ? '正在校验并生成签名...' : '发送重置指令' }}</span>
              <ArrowRight class="w-4 h-4" />
            </button>
          </div>

          <div class="text-center pt-2">
            <a href="#" class="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <ArrowLeft class="w-3.5 h-3.5" />
              <span>返回登录页面</span>
            </a>
          </div>
        </div>

        <!-- 阶段 2：邮件已发送 -->
        <div v-else-if="stage === 2" class="space-y-6 animate-fade-in text-center">
          <div class="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
            <Mail class="w-7 h-7" />
          </div>
          <div>
            <h2 class="text-2xl font-black text-zinc-900 dark:text-white">请查收重置邮件</h2>
            <p class="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1.5">
              重置链接已发送至 <span class="font-mono text-zinc-900 dark:text-zinc-200 font-semibold">{{ email }}</span>。该链接将在 15 分钟后失效。
            </p>
          </div>

          <div class="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-800 text-xs text-zinc-500 space-y-2">
            <p>未在收件箱中看到邮件？请检查垃圾邮件夹或点击下方重新发送。</p>
            <div class="flex items-center justify-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium">
              <RotateCcw class="w-3 h-3" />
              <span>{{ countdown }}s 后可再次请求</span>
            </div>
          </div>

          <div class="flex items-center justify-center gap-3 pt-2">
            <!-- 演示快捷跳转到重设密码阶段 -->
            <button
              @click="stage = 3"
              class="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/20"
            >
              模拟点击邮件中的重置链接
            </button>
            <button
              @click="stage = 1"
              class="px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              更换邮箱
            </button>
          </div>
        </div>

        <!-- 阶段 3：录入新密码 -->
        <div v-else-if="stage === 3" class="space-y-6 animate-fade-in text-left">
          <div class="text-center">
            <div class="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck class="w-7 h-7" />
            </div>
            <h2 class="text-2xl font-black text-zinc-900 dark:text-white">设置全新密码</h2>
            <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              为了账号安全，新密码不得与过去 3 次使用的密码重复。
            </p>
          </div>

          <!-- 密码强度组件 (复用 PasswordStrength 原子组件) -->
          <div>
            <PasswordStrength
              v-model="newPassword"
              placeholder="请输入新的强密码..."
              :showRules="true"
            />
          </div>

          <button
            @click="submitNewPassword"
            :disabled="!newPassword || isSubmitting"
            class="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/25 transition-all active:scale-[0.98]"
          >
            <span>{{ isSubmitting ? '正在更新散列凭证...' : '确认更新密码' }}</span>
            <Check class="w-4 h-4" />
          </button>
        </div>

        <!-- 阶段 4：重置成功 -->
        <div v-else class="space-y-6 animate-fade-in text-center py-6">
          <div class="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
            <Check class="w-8 h-8" />
          </div>
          <div>
            <h2 class="text-2xl font-black text-zinc-900 dark:text-white">密码已成功重置！</h2>
            <p class="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1.5 max-w-xs mx-auto">
              您的全局身份凭据已更新，所有现有活动会话已安全注销。
            </p>
          </div>
          <button
            @click="stage = 1; email = ''; newPassword = ''"
            class="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-zinc-900 dark:bg-white dark:text-zinc-900 hover:bg-zinc-800 shadow-md"
          >
            立即使用新密码登录
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
