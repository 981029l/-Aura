const n=`<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ShieldCheck, RotateCcw, ArrowRight, Smartphone, Check } from 'lucide-vue-next'
import KeyboardBadge from '@/components/ui/KeyboardBadge.vue'

const codeDigits = ref(['', '', '', '', '', ''])
const inputRefs = ref<HTMLInputElement[]>([])
const countdown = ref(54)
let timer: any = null

function handleInput(index: number, e: Event) {
  const target = e.target as HTMLInputElement
  const val = target.value.slice(-1)
  codeDigits.value[index] = val

  if (val && index < 5) {
    inputRefs.value[index + 1]?.focus()
  }
}

function handleKeyDown(index: number, e: KeyboardEvent) {
  if (e.key === 'Backspace' && !codeDigits.value[index] && index > 0) {
    inputRefs.value[index - 1]?.focus()
  }
}

function handlePaste(e: ClipboardEvent) {
  const pasteData = e.clipboardData?.getData('text').trim() || ''
  if (/^\\d{6}$/.test(pasteData)) {
    pasteData.split('').forEach((digit, i) => {
      codeDigits.value[i] = digit
    })
    inputRefs.value[5]?.focus()
  }
}

const isVerifying = ref(false)
const isVerified = ref(false)

function verifyCode() {
  if (codeDigits.value.join('').length === 6) {
    isVerifying.value = true
    setTimeout(() => {
      isVerifying.value = false
      isVerified.value = true
    }, 800)
  }
}

function resendCode() {
  if (countdown.value === 0) {
    countdown.value = 60
    codeDigits.value = ['', '', '', '', '', '']
    inputRefs.value[0]?.focus()
  }
}

onMounted(() => {
  timer = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value--
    }
  }, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-xl px-4 sm:px-6">
      <!-- 2FA 核心卡片 -->
      <div class="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-2xl p-6 sm:p-10 backdrop-blur-xl text-center">
        <!-- 顶栏图标 -->
        <div class="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 mx-auto flex items-center justify-center mb-6 shadow-inner">
          <ShieldCheck class="w-8 h-8" />
        </div>

        <h2 class="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
          双重安全身份核验 (2FA)
        </h2>
        <p class="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-sm mx-auto">
          我们已向绑定设备 <span class="font-mono text-zinc-900 dark:text-zinc-200 font-semibold">+86 186****9021</span> 发送了 6 位一次性验证码。
        </p>

        <!-- 6 位键帽风格输入框组 -->
        <div class="mt-8 flex justify-center items-center gap-2 sm:gap-3" @paste="handlePaste">
          <input
            v-for="(_, idx) in codeDigits"
            :key="idx"
            :ref="el => { if (el) inputRefs[idx] = el as HTMLInputElement }"
            v-model="codeDigits[idx]"
            type="text"
            inputmode="numeric"
            maxlength="1"
            @input="handleInput(idx, $event)"
            @keydown="handleKeyDown(idx, $event)"
            :class="[
              'w-11 h-14 sm:w-14 sm:h-16 text-center text-xl sm:text-2xl font-mono font-bold rounded-2xl border-2 transition-all outline-none',
              codeDigits[idx]
                ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 shadow-md shadow-indigo-500/10'
                : 'border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/80 text-zinc-900 dark:text-white hover:border-zinc-300 dark:hover:border-zinc-600 focus:border-indigo-500'
            ]"
          />
        </div>

        <!-- 键盘徽章提示 (复用 KeyboardBadge 原子组件) -->
        <div class="mt-4 flex items-center justify-center gap-2 text-[11px] text-zinc-400">
          <span>支持通过物理键盘</span>
          <KeyboardBadge keyName="0-9" size="sm" />
          <span>直接敲击或</span>
          <KeyboardBadge keyName="⌘V" size="sm" />
          <span>整串粘贴</span>
        </div>

        <!-- 验证按钮与倒计时 -->
        <div class="mt-8 space-y-4">
          <button
            @click="verifyCode"
            :disabled="codeDigits.join('').length < 6 || isVerifying || isVerified"
            :class="[
              'w-full py-3.5 px-6 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md',
              isVerified
                ? 'bg-emerald-600 text-white'
                : codeDigits.join('').length === 6
                ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/25 active:scale-[0.98]'
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400 cursor-not-allowed'
            ]"
          >
            <span v-if="isVerifying">正在核验数字签名...</span>
            <span v-else-if="isVerified" class="flex items-center gap-2">
              <Check class="w-4 h-4" />
              <span>验证成功，正在授予会话令牌</span>
            </span>
            <span v-else class="flex items-center gap-2">
              <span>确认授权身份</span>
              <ArrowRight class="w-4 h-4" />
            </span>
          </button>

          <!-- 倒计时重新获取 -->
          <div class="flex items-center justify-center gap-2 text-xs">
            <span class="text-zinc-500 dark:text-zinc-400">未收到验证码？</span>
            <button
              @click="resendCode"
              :disabled="countdown > 0"
              :class="[
                'font-medium inline-flex items-center gap-1 transition-colors',
                countdown > 0
                  ? 'text-zinc-400 cursor-not-allowed'
                  : 'text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer'
              ]"
            >
              <RotateCcw class="w-3 h-3" />
              <span>{{ countdown > 0 ? \`\${countdown}s 后可重新获取\` : '立即重新发送' }}</span>
            </button>
          </div>
        </div>

        <!-- 备用验证通道提示 -->
        <div class="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
          <Smartphone class="w-4 h-4 text-zinc-400" />
          <span>无法使用手机？尝试 <a href="#" class="text-indigo-600 dark:text-indigo-400 hover:underline">备用安全密钥 (FIDO2)</a></span>
        </div>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
