<script setup lang="ts">
import { ref } from 'vue'
import { ShieldCheck, UserPlus, Settings, Check } from 'lucide-vue-next'
import SlideOverDrawer from '@/components/ui/SlideOverDrawer.vue'
import InlineEdit from '@/components/ui/InlineEdit.vue'

interface Member {
  id: string
  name: string
  email: string
  role: 'Owner' | 'Admin' | 'Member' | 'Viewer'
  mfa: boolean
}

const members = ref<Member[]>([
  { id: '1', name: 'Alex Rivera', email: 'alex@company.com', role: 'Owner', mfa: true },
  { id: '2', name: 'Elena Rostova', email: 'elena@company.com', role: 'Admin', mfa: true },
  { id: '3', name: 'Marcus Vance', email: 'marcus@company.com', role: 'Member', mfa: true },
  { id: '4', name: 'Sarah Lin', email: 'sarah@company.com', role: 'Viewer', mfa: false },
])

const isDrawerOpen = ref(false)
const selectedMember = ref<Member | null>(null)

function openDetails(m: Member) {
  selectedMember.value = m
  isDrawerOpen.value = true
}
</script>

<template>
  <div class="relative w-full overflow-hidden bg-white py-16 sm:py-24 dark:bg-zinc-950 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 text-xs font-semibold mb-4">
          <ShieldCheck class="w-3.5 h-3.5" />
          <span>RBAC 角色访问控制 · 细粒度审计</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          企业成员与权限矩阵
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
            行内即时编辑与侧拉详情
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          点击成员可唤起全量操作抽屉，支持行内修改权限角色与双重认证 (MFA) 状态审查。
        </p>
      </div>

      <!-- 成员列表主卡片 -->
      <div class="max-w-5xl mx-auto rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 shadow-xl overflow-hidden text-left">
        <div class="p-6 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <div>
            <h3 class="text-base font-bold text-zinc-900 dark:text-white">组织成员目录 ({{ members.length }})</h3>
            <p class="text-xs text-zinc-500">支持基于 SAML / Okta / Azure AD 自动同步用户组</p>
          </div>
          <button class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs shadow-md">
            <UserPlus class="w-3.5 h-3.5" />
            <span>邀请新成员</span>
          </button>
        </div>

        <!-- 表格清单 -->
        <div class="divide-y divide-zinc-200 dark:divide-zinc-800">
          <div
            v-for="m in members"
            :key="m.id"
            class="p-4 sm:p-5 flex items-center justify-between hover:bg-white dark:hover:bg-zinc-800/40 transition-colors"
          >
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 text-white font-bold text-xs flex items-center justify-center">
                {{ m.name[0] }}
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <span class="text-xs font-bold text-zinc-900 dark:text-white">{{ m.name }}</span>
                  <span
                    :class="[
                      'text-[10px] font-mono px-2 py-0.5 rounded-full font-bold',
                      m.role === 'Owner' ? 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300' : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400',
                    ]"
                  >
                    {{ m.role }}
                  </span>
                </div>
                <div class="text-[11px] text-zinc-500 font-mono">{{ m.email }}</div>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <span
                :class="[
                  'text-[11px] font-mono flex items-center gap-1',
                  m.mfa ? 'text-emerald-500' : 'text-amber-500',
                ]"
              >
                <Check v-if="m.mfa" class="w-3.5 h-3.5" />
                {{ m.mfa ? '2FA 已启用' : '2FA 待开启' }}
              </span>
              <button
                @click="openDetails(m)"
                class="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
              >
                <Settings class="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 侧边滑出抽屉：集成 SlideOverDrawer 原子组件 -->
      <SlideOverDrawer
        v-model="isDrawerOpen"
        :title="selectedMember ? `成员权限详情 · ${selectedMember.name}` : '权限配置'"
        description="修改该成员在当前企业工作空间下的细粒度策略"
      >
        <div v-if="selectedMember" class="space-y-6 pt-4 text-left">
          <div>
            <label class="block text-xs font-bold text-zinc-400 mb-1">行内修改显示名称:</label>
            <InlineEdit v-model="selectedMember.name" class="p-2 border rounded-xl" />
          </div>

          <div>
            <label class="block text-xs font-bold text-zinc-400 mb-2">角色策略分派:</label>
            <div class="space-y-2">
              <label
                v-for="r in ['Owner', 'Admin', 'Member', 'Viewer'] as const"
                :key="r"
                class="flex items-center gap-2 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 cursor-pointer text-xs"
              >
                <input
                  type="radio"
                  :value="r"
                  v-model="selectedMember.role"
                  class="text-purple-600"
                />
                <span class="font-bold">{{ r }}</span>
              </label>
            </div>
          </div>
        </div>
      </SlideOverDrawer>
    </div>
  </div>
</template>
