const n=`<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight, Sparkles, Bot, Cpu } from 'lucide-vue-next'
import WordRotate from '@/components/ui/WordRotate.vue'
import PromptInput from '@/components/ui/PromptInput.vue'
import Marquee from '@/components/ui/Marquee.vue'

const clientLogos = [
  'OpenAI', 'Anthropic', 'Hugging Face', 'Mistral AI', 'Cohere', 'Stability AI', 'Scale AI', 'Perplexity'
]

const recentPrompts = [
  '分析 Q3 营收数据并生成三页高管摘要幻灯片',
  '重构多智能体协作推演工作流，降低 40% Token 消耗',
  '自动扫描云基础设施漏洞并提交修复 Pull Request'
]

const currentPrompt = ref('')
function handlePromptSubmit(val: string) {
  currentPrompt.value = val
}
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-white py-16 sm:py-24 lg:py-32 dark:bg-black transition-colors">
    <!-- 背景流光与径向微光渐变 -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-500/20 via-indigo-500/15 to-purple-500/0 blur-[120px] rounded-full"></div>
      <div class="absolute right-10 top-1/3 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full"></div>
    </div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <!-- 顶部发光微徽章 -->
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-50/60 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold backdrop-blur-md shadow-xs animate-fade-in">
        <Sparkles class="w-3.5 h-3.5" />
        <span>Aura 3.5 智能体运行时引擎全新上线</span>
        <span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
      </div>

      <!-- 主标题区：集成 WordRotate 动态轮播关键词 -->
      <h1 class="mt-8 text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight text-zinc-900 dark:text-white max-w-4xl leading-[1.15] flex flex-col items-center justify-center">
        <span>构建自主思考的</span>
        <span class="mt-2 inline-flex items-center justify-center text-blue-600 dark:text-blue-400">
          <WordRotate
            :words="['AI 智能体', '业务工作流', '推测推理引擎', '自动化专家']"
            :duration="2600"
          />
        </span>
      </h1>

      <!-- 副标题 -->
      <p class="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
        连接高维模型、私有企业向量数据库与工具调用沙盒。毫秒级推测解码，无需繁琐配置，一键从提示词演练发布至高可用生产集群。
      </p>

      <!-- 双行动号召按钮 -->
      <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/25 active:scale-95">
          <span>免费创建工作空间</span>
          <ArrowRight class="w-4 h-4" />
        </button>
        <button class="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-semibold text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all active:scale-95 shadow-xs">
          <Bot class="w-4 h-4 text-zinc-500" />
          <span>预约专家架构评审</span>
        </button>
      </div>

      <!-- 核心交互区：集成 PromptInput 原子组件 -->
      <div class="mt-12 w-full max-w-2xl">
        <div class="p-2 sm:p-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-xl">
          <PromptInput
            placeholder="输入自然语言指令，智能体立即为您拆解规划..."
            @submit="handlePromptSubmit"
          />
        </div>

        <!-- 快捷提示词建议 -->
        <div class="mt-3 flex items-center justify-center gap-2 flex-wrap text-xs text-zinc-500 dark:text-zinc-400">
          <span class="font-medium text-zinc-400">示例指令:</span>
          <button
            v-for="p in recentPrompts"
            :key="p"
            @click="handlePromptSubmit(p)"
            class="px-2.5 py-1 rounded-md bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 transition-colors truncate max-w-xs"
          >
            "{{ p }}"
          </button>
        </div>
      </div>

      <!-- 底部信任跑马灯：集成 Marquee 原子组件 -->
      <div class="mt-16 w-full max-w-5xl pt-10 border-t border-zinc-100 dark:border-zinc-900">
        <p class="text-xs uppercase tracking-wider text-zinc-400 font-mono mb-6">
          深受全球顶尖人工智能与基础设施团队信赖
        </p>
        <Marquee :speed="40" :pauseOnHover="true">
          <div
            v-for="logo in clientLogos"
            :key="logo"
            class="mx-6 flex items-center gap-2 text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 font-bold text-sm tracking-wider uppercase transition-colors"
          >
            <Cpu class="w-4 h-4 text-blue-500/70" />
            <span>{{ logo }}</span>
          </div>
        </Marquee>
      </div>
    </div>
  </div>
</template>
`;export{n as default};
