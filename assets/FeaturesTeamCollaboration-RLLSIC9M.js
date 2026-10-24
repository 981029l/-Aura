const n=`<script setup lang="ts">
import { ref } from 'vue'
import { Users, MessageSquare } from 'lucide-vue-next'
import MentionInput from '@/components/ui/MentionInput.vue'
import InlineEdit from '@/components/ui/InlineEdit.vue'

const projectTitle = ref('2026 全球业务场景动效库标准制定')
const commentText = ref('嗨 @aura_ai，请审查最新提交的 109 款场景区块单文件组件的 Tree-shaking 表现！')
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部介绍 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
          <Users class="w-3.5 h-3.5" />
          <span>实时协同 · 智能体与团队共创</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          团队与 AI 智能体
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            无缝同屏协作
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          支持 @ 提及多智能体与人类协作者、行内无痕快速编辑与毫秒级协同光标同步。
        </p>
      </div>

      <!-- 协同工作区模拟 -->
      <div class="w-full max-w-3xl mx-auto rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 p-6 sm:p-8 shadow-xl text-left space-y-6">
        <!-- 行内可编辑项目标题 -->
        <div>
          <div class="text-xs font-semibold text-zinc-400 mb-2">项目当前研讨议题（点击可直接行内修改）:</div>
          <div class="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
            <InlineEdit v-model="projectTitle" class="text-lg font-bold text-zinc-900 dark:text-white" />
          </div>
        </div>

        <!-- 提及与评论输入区：集成 MentionInput 原子组件 -->
        <div>
          <div class="flex items-center justify-between text-xs font-semibold text-zinc-400 mb-2">
            <span class="flex items-center gap-1.5">
              <MessageSquare class="w-3.5 h-3.5" />
              协同讨论区（输入 @ 触发智能体或成员列表）
            </span>
            <span class="text-[11px] font-mono text-blue-500">3 位成员在线</span>
          </div>

          <div class="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
            <MentionInput
              v-model="commentText"
              placeholder="输入讨论建议，键入 @ 呼出协作助手..."
              class="w-full"
            />
          </div>
        </div>

        <!-- 模拟在线头像光标列表 -->
        <div class="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-500">
          <div class="flex items-center -space-x-2">
            <div class="w-7 h-7 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-[10px] ring-2 ring-white dark:ring-zinc-900">
              AI
            </div>
            <div class="w-7 h-7 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-[10px] ring-2 ring-white dark:ring-zinc-900">
              AR
            </div>
            <div class="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-[10px] ring-2 ring-white dark:ring-zinc-900">
              ER
            </div>
          </div>
          <span class="font-mono text-[11px]">全量协同事件已被 CRDT 向量时钟严格锁存</span>
        </div>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
