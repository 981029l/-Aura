const e=`<script setup lang="ts">
import { ref } from 'vue'
import { ShieldCheck, Cookie, Lock, Scale, Check, ChevronRight } from 'lucide-vue-next'

const showCookieModal = ref(false)
const cookiePreferences = ref({
  essential: true, // 必须开启
  analytics: true,
  marketing: false,
})

const isPreferencesSaved = ref(false)

function saveCookieSettings() {
  isPreferencesSaved.value = true
  setTimeout(() => {
    isPreferencesSaved.value = false
    showCookieModal.value = false
  }, 800)
}
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-950 text-zinc-400 border-t border-zinc-900 transition-colors py-10">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 极简合规导航条 -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-left">
        <!-- 左侧版权与合规标准 -->
        <div class="space-y-1">
          <div class="flex flex-wrap items-center gap-2 text-zinc-300 font-medium">
            <span>© 2026 Aura Platform Inc.</span>
            <span>•</span>
            <span class="flex items-center gap-1 text-emerald-400">
              <ShieldCheck class="w-3.5 h-3.5" />
              <span>EU GDPR & CCPA 严苛合规</span>
            </span>
          </div>
          <p class="text-[11px] text-zinc-500">
            我们尊重每位开发者与访客的数字主权与个人隐私，所有网络遥测数据均经客户端脱敏。
          </p>
        </div>

        <!-- 中部法律条款超链接组 -->
        <div class="flex flex-wrap items-center gap-4 text-xs">
          <a href="#terms" class="hover:text-white transition-colors flex items-center gap-1">
            <Scale class="w-3.5 h-3.5 text-zinc-500" />
            <span>服务协议条款</span>
          </a>
          <a href="#privacy" class="hover:text-white transition-colors flex items-center gap-1">
            <Lock class="w-3.5 h-3.5 text-zinc-500" />
            <span>全球隐私政策</span>
          </a>
          <button
            @click="showCookieModal = true"
            class="hover:text-white transition-colors flex items-center gap-1 cursor-pointer text-indigo-400 hover:text-indigo-300 font-semibold"
          >
            <Cookie class="w-3.5 h-3.5" />
            <span>Cookie 偏好管理</span>
          </button>
        </div>
      </div>

      <!-- 面包屑合规引导路径模拟 -->
      <div class="mt-6 pt-4 border-t border-zinc-900 flex items-center gap-2 text-[10px] text-zinc-500 font-mono">
        <span>Aura Cloud</span>
        <ChevronRight class="w-3 h-3 text-zinc-600" />
        <span>Legal Center</span>
        <ChevronRight class="w-3 h-3 text-zinc-600" />
        <span class="text-zinc-400">Compliance & Trust Transparency</span>
      </div>

      <!-- 弹出式 Cookie 偏好设置面板 -->
      <div
        v-if="showCookieModal"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in text-left"
      >
        <div class="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8 shadow-2xl space-y-6">
          <div class="flex items-center justify-between pb-3 border-b border-zinc-800">
            <div class="flex items-center gap-2">
              <Cookie class="w-5 h-5 text-indigo-400" />
              <h3 class="text-base font-bold text-white">Cookie 偏好设定</h3>
            </div>
            <span class="text-xs text-zinc-500 font-mono">GDPR Article 7</span>
          </div>

          <p class="text-xs text-zinc-400 leading-relaxed">
            您可以自主选择允许的追踪类别。我们默认禁用所有第三方跨站广告追踪。
          </p>

          <div class="space-y-3">
            <!-- 必要 Cookie -->
            <div class="flex items-center justify-between p-3 rounded-xl bg-zinc-950/60 border border-zinc-800">
              <div>
                <div class="text-xs font-bold text-white">必要系统 Cookie</div>
                <div class="text-[10px] text-zinc-500">保障登录会话与明暗模式偏好存储</div>
              </div>
              <span class="text-xs font-mono font-bold text-emerald-400">始终开启</span>
            </div>

            <!-- 分析 Cookie -->
            <div class="flex items-center justify-between p-3 rounded-xl bg-zinc-950/60 border border-zinc-800">
              <div>
                <div class="text-xs font-bold text-white">匿名性能分析</div>
                <div class="text-[10px] text-zinc-500">用于优化组件加载耗时与 60fps 帧率</div>
              </div>
              <input
                v-model="cookiePreferences.analytics"
                type="checkbox"
                class="rounded border-zinc-700 text-indigo-600 focus:ring-indigo-500 w-4 h-4 cursor-pointer"
              />
            </div>

            <!-- 营销 Cookie -->
            <div class="flex items-center justify-between p-3 rounded-xl bg-zinc-950/60 border border-zinc-800">
              <div>
                <div class="text-xs font-bold text-white">个性化推荐营销</div>
                <div class="text-[10px] text-zinc-500">针对技术栈为您定向推荐新 Block</div>
              </div>
              <input
                v-model="cookiePreferences.marketing"
                type="checkbox"
                class="rounded border-zinc-700 text-indigo-600 focus:ring-indigo-500 w-4 h-4 cursor-pointer"
              />
            </div>
          </div>

          <div class="flex items-center justify-end gap-3 pt-2">
            <button
              @click="showCookieModal = false"
              class="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-400 hover:text-white"
            >
              取消
            </button>
            <button
              @click="saveCookieSettings"
              class="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/20"
            >
              <Check v-if="isPreferencesSaved" class="w-3.5 h-3.5" />
              <span>{{ isPreferencesSaved ? '已保存设置' : '保存偏好设置' }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`;export{e as default};
