const n=`<script setup lang="ts">
import { ref } from 'vue'
import { UserPlus, Mail, Shield, Check, Link2, Sparkles, X } from 'lucide-vue-next'
import TagInput from '@/components/ui/TagInput.vue'
import CopySnippet from '@/components/ui/CopySnippet.vue'

const emails = ref(['designer@acme.ai', 'architect@acme.ai'])
const defaultRole = ref('editor')
const inviteLink = 'https://aura-ui.dev/join?workspace=acme-core&token=aura_inv_9831a2'

const invitedList = ref([
  { email: 'alex@acme.ai', role: 'admin', status: '已加入', date: '10 分钟前' },
  { email: 'sarah@acme.ai', role: 'editor', status: '待接受', date: '1 小时前' },
])

const isSending = ref(false)
const showSuccessNotice = ref(false)

function sendInvites() {
  if (emails.value.length === 0) return
  isSending.value = true
  setTimeout(() => {
    emails.value.forEach(em => {
      invitedList.value.unshift({
        email: em,
        role: defaultRole.value,
        status: '邀请已发出',
        date: '刚刚'
      })
    })
    emails.value = []
    isSending.value = false
    showSuccessNotice.value = true
    setTimeout(() => {
      showSuccessNotice.value = false
    }, 4000)
  }, 600)
}

function removeInvited(index: number) {
  invitedList.value.splice(index, 1)
}
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-4xl px-4 sm:px-6">
      <!-- 头部说明 -->
      <div class="text-center max-w-2xl mx-auto mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 text-xs font-semibold mb-4">
          <UserPlus class="w-3.5 h-3.5" />
          <span>团队扩容协同 · 批量成员分发</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
          邀请协作者共建数字体验
        </h2>
        <p class="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          支持多邮箱标签批量录入、权限预设分配与一次性安全邀请链接极速分享。
        </p>
      </div>

      <!-- 主邀请卡片 -->
      <div class="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-2xl p-6 sm:p-10 backdrop-blur-xl text-left">
        <!-- 批量录入区域 -->
        <div class="space-y-6">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 class="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <Mail class="w-4 h-4 text-sky-500" />
                <span>输入协作者电子邮箱</span>
              </h3>
              <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">每输入一个邮箱后按回车键即可打成药丸标签。</p>
            </div>

            <!-- 权限角色选择器 -->
            <div class="flex items-center gap-2">
              <Shield class="w-4 h-4 text-zinc-400" />
              <span class="text-xs text-zinc-500">预设权限：</span>
              <select
                v-model="defaultRole"
                class="px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-xs text-zinc-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="admin">组织管理员 (Admin)</option>
                <option value="editor">项目协作者 (Editor)</option>
                <option value="viewer">仅可查看 (Viewer)</option>
              </select>
            </div>
          </div>

          <!-- 标签输入器 (复用 TagInput 原子组件) -->
          <div class="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50 p-2">
            <TagInput
              v-model="emails"
              placeholder="输入同事企业邮箱并回车添加..."
              :maxTags="10"
            />
          </div>

          <!-- 操作按钮与反馈 -->
          <div class="flex items-center justify-between pt-2">
            <span class="text-xs text-zinc-500">已就绪 {{ emails.length }} 位待邀请成员</span>
            <button
              @click="sendInvites"
              :disabled="emails.length === 0 || isSending"
              :class="[
                'inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md',
                emails.length > 0 && !isSending
                  ? 'bg-sky-600 hover:bg-sky-500 text-white shadow-sky-600/20 active:scale-95'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400 cursor-not-allowed'
              ]"
            >
              <UserPlus class="w-3.5 h-3.5" />
              <span>{{ isSending ? '正在分发凭证...' : '立即发出邀请' }}</span>
            </button>
          </div>

          <!-- 成功通知气泡 -->
          <div
            v-if="showSuccessNotice"
            class="p-3.5 rounded-xl border border-emerald-500/20 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 text-xs flex items-center gap-2 animate-fade-in"
          >
            <Check class="w-4 h-4 shrink-0" />
            <span>成员专属加密激活邮件已分发完毕，链接有效期为 7 天。</span>
          </div>
        </div>

        <!-- 分割线 -->
        <div class="my-8 border-t border-zinc-100 dark:border-zinc-800"></div>

        <!-- 专属分享链接 (复用 CopySnippet 原子组件) -->
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
              <Link2 class="w-3.5 h-3.5 text-zinc-400" />
              <span>或者直接分享组织加入链接</span>
            </span>
            <span class="text-[11px] text-zinc-400">仅允许 @acme.ai 域名后缀员工加入</span>
          </div>
          <div>
            <CopySnippet :code="inviteLink" class="w-full justify-between" />
          </div>
        </div>

        <!-- 历史邀请成员列表 -->
        <div class="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">最近邀请记录 ({{ invitedList.length }})</h4>
            <div class="flex items-center gap-1 text-[11px] text-zinc-400">
              <Sparkles class="w-3 h-3 text-sky-500" />
              <span>支持随时撤销未激活席位</span>
            </div>
          </div>

          <div class="space-y-2">
            <div
              v-for="(item, idx) in invitedList"
              :key="item.email"
              class="flex items-center justify-between p-3 rounded-xl border border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-800/40 text-xs"
            >
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center font-bold text-zinc-600 dark:text-zinc-300 uppercase">
                  {{ item.email.slice(0, 2) }}
                </div>
                <div>
                  <span class="font-medium text-zinc-900 dark:text-white">{{ item.email }}</span>
                  <div class="text-[10px] text-zinc-400">邀请于 {{ item.date }}</div>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <span class="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300">
                  {{ item.role }}
                </span>
                <span :class="['text-[11px] font-medium', item.status === '已加入' ? 'text-emerald-500' : 'text-amber-500']">
                  {{ item.status }}
                </span>
                <button
                  @click="removeInvited(idx)"
                  class="text-zinc-400 hover:text-rose-500 transition-colors p-1"
                  title="撤销邀请"
                >
                  <X class="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
