<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import {
  GitFork,
  RotateCw,
} from 'lucide-vue-next'

export interface TreeNode {
  id: string
  label: string
  score: number // 0 - 1
  isPruned: boolean
  isWinner: boolean
  rationale: string
  children?: TreeNode[]
}

export interface ReasoningTreeProps {
  query?: string
  class?: string
}

const props = withDefaults(defineProps<ReasoningTreeProps>(), {
  query: '动效组件库应该怎么实现？',
})

const selectedNode = ref<TreeNode | null>(null)
const isReevaluating = ref(false)

const treeData = ref<TreeNode>({
  id: 'root',
  label: '问题：' + props.query,
  score: 1.0,
  isPruned: false,
  isWinner: true,
  rationale: '需求：动画流畅，组件可以单独复制使用，不需要额外配置。',
  children: [
    {
      id: 'a',
      label: '方案 A：发布 npm 包 + Tailwind 插件',
      score: 0.34,
      isPruned: true,
      isWinner: false,
      rationale: '用户需要额外安装和配置，还可能和项目现有的 Tailwind 配置冲突。',
    },
    {
      id: 'b',
      label: '方案 B：单文件组件 + <style scoped>',
      score: 0.94,
      isPruned: false,
      isWinner: true,
      rationale: '动画写在组件内部，复制一个文件就能用，也方便修改。',
      children: [
        {
          id: 'b1',
          label: '细化 1：动画只改 transform 和 opacity',
          score: 0.96,
          isPruned: false,
          isWinner: true,
          rationale: '不触发页面重排，在手机和低配设备上也更流畅。',
        },
        {
          id: 'b2',
          label: '细化 2：用 requestAnimationFrame 做弹性动画',
          score: 0.92,
          isPruned: false,
          isWinner: true,
          rationale: '拖拽和回弹等交互可以带有惯性，手感更自然。',
        },
      ],
    },
    {
      id: 'c',
      label: '方案 C：WebAssembly + WebGL',
      score: 0.58,
      isPruned: true,
      isWinner: false,
      rationale: '体积大、加载慢，而且不方便和普通页面元素结合。',
    },
  ],
})

selectedNode.value = treeData.value.children![1]

function selectNode(node: TreeNode) {
  selectedNode.value = node
}

function handleReevaluate() {
  isReevaluating.value = true
  setTimeout(() => {
    isReevaluating.value = false
  }, 600)
}
</script>

<template>
  <div
    :class="
      cn(
        'w-full max-w-3xl rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-6',
        props.class
      )
    "
  >
    <!-- 顶部操作栏 -->
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
        <GitFork class="h-3.5 w-3.5 text-emerald-500" />
        <span>推理分支</span>
      </div>

      <button
        type="button"
        @click="handleReevaluate"
        class="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors cursor-pointer active:scale-95"
      >
        <RotateCw :class="['h-3.5 w-3.5', isReevaluating && 'animate-spin']" />
        <span>重新推理</span>
      </button>
    </div>

    <!-- 树状节点拓扑图容器 -->
    <div class="relative overflow-x-auto rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-6 dark:border-zinc-800/80 dark:bg-zinc-900/30">
      <div class="min-w-[580px] space-y-6">
        <!-- 根节点 -->
        <div class="flex justify-center">
          <div
            @click="selectNode(treeData)"
            :class="[
              'rounded-xl border px-4 py-2.5 text-xs font-bold transition-all cursor-pointer shadow-sm max-w-md text-center',
              selectedNode?.id === treeData.id
                ? 'border-blue-500 bg-blue-500 text-white shadow-md shadow-blue-500/20'
                : 'border-zinc-200 bg-white text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200',
            ]"
          >
            {{ treeData.label }}
          </div>
        </div>

        <!-- 连线层 -->
        <div class="flex justify-center">
          <div class="h-4 w-0.5 bg-zinc-300 dark:bg-zinc-700" />
        </div>

        <!-- 第一层 3 组方案分支 -->
        <div class="grid grid-cols-3 gap-4">
          <div
            v-for="child in treeData.children"
            :key="child.id"
            class="flex flex-col items-center space-y-4"
          >
            <!-- 节点卡片 -->
            <div
              @click="selectNode(child)"
              :class="[
                'w-full rounded-xl border p-3 text-xs transition-all cursor-pointer shadow-sm relative',
                child.isWinner
                  ? 'border-emerald-500/80 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200 font-bold ring-2 ring-emerald-500/30'
                  : 'border-zinc-200/80 bg-white/70 text-zinc-400 opacity-60 line-through dark:border-zinc-800/80 dark:bg-zinc-950/60',
                selectedNode?.id === child.id && 'scale-105 shadow-md',
              ]"
            >
              <div class="flex items-center justify-between mb-1.5">
                <span class="font-mono text-[10px] font-bold">
                  {{ child.isWinner ? '★ 选中' : '✕ 已排除' }}
                </span>
                <span
                  :class="[
                    'rounded px-1.5 py-px font-mono text-[10px] font-bold',
                    child.isWinner
                      ? 'bg-emerald-500 text-white'
                      : 'bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400',
                  ]"
                >
                  Score: {{ child.score }}
                </span>
              </div>
              <p class="leading-relaxed">{{ child.label }}</p>
            </div>

            <!-- 第二层子策略节点 (如果是优胜分支) -->
            <div v-if="child.children" class="w-full space-y-2 pt-2 border-t-2 border-emerald-500/40">
              <div
                v-for="sub in child.children"
                :key="sub.id"
                @click="selectNode(sub)"
                :class="[
                  'w-full rounded-lg border border-emerald-500/50 bg-emerald-500/15 p-2.5 text-[11px] font-medium text-emerald-800 dark:text-emerald-200 transition-all cursor-pointer hover:bg-emerald-500/25',
                  selectedNode?.id === sub.id && 'ring-2 ring-emerald-500 shadow-sm',
                ]"
              >
                <div class="flex items-center justify-between mb-1">
                  <span class="font-mono text-[10px] font-bold">Step Confirmed</span>
                  <span class="font-mono text-[10px] text-emerald-600 dark:text-emerald-300 font-bold">
                    {{ sub.score }}
                  </span>
                </div>
                <p>{{ sub.label }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部选中节点的推理阐述面板 -->
    <div
      v-if="selectedNode"
      class="rounded-xl border border-zinc-200/80 bg-zinc-50/70 p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-900/50 space-y-1.5"
    >
      <div class="flex items-center justify-between font-mono text-[11px] text-zinc-400">
        <span class="font-bold text-zinc-700 dark:text-zinc-300">
          节点详情：{{ selectedNode.id.toUpperCase() }}
        </span>
        <span class="font-bold text-emerald-600 dark:text-emerald-400">
          评分：{{ selectedNode.score }}
        </span>
      </div>
      <p class="text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
        {{ selectedNode.rationale }}
      </p>
    </div>
  </div>
</template>
