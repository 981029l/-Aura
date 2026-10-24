<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown, Sparkles, Smartphone, Shield, ArrowUpRight } from 'lucide-vue-next'
import ThoughtAccordion from '@/components/ui/ThoughtAccordion.vue'

interface AccordionSection {
  id: string
  title: string
  links: string[]
}

const sections = ref<AccordionSection[]>([
  {
    id: 'components',
    title: '动效组件与区块 (182 + 109)',
    links: ['原子物理动效', 'AI 原生工作台', '高管 KPI 大盘', '认证与入职向导', '超级页脚与 CTA']
  },
  {
    id: 'tech',
    title: '架构与技术规范',
    links: ['Vue 3.5 响应式核心', 'Tailwind CSS 双模集成', 'TypeScript 严格类型', 'Zero-Config 单文件即拷即用']
  },
  {
    id: 'support',
    title: '资源与社区协同',
    links: ['官方文档中心', 'GitHub 源码仓库', 'Discord 开发者群组', '企业私有化顾问咨询']
  },
  {
    id: 'legal',
    title: '合规与法律服务',
    links: ['用户服务协议', 'GDPR 隐私条例', '安全漏洞披露指南', '开源许可协议 MIT']
  }
])

const openSectionId = ref<string | null>('components')

function toggleSection(id: string) {
  openSectionId.value = openSectionId.value === id ? null : id
}
</script>

<template>
  <footer class="relative w-full overflow-hidden bg-zinc-900 text-zinc-300 border-t border-zinc-800 transition-colors pt-12 pb-10">
    <div class="relative mx-auto max-w-4xl px-4 sm:px-6">
      <!-- 移动端视窗提示 -->
      <div class="text-center mb-8">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-700 bg-zinc-800/80 text-zinc-300 text-xs font-semibold mb-3">
          <Smartphone class="w-3.5 h-3.5 text-sky-400" />
          <span>移动端自适应折叠手风琴 · 触控阻尼平滑过渡</span>
        </div>
        <h3 class="text-xl sm:text-2xl font-bold text-white tracking-tight">
          自适应视口导航折叠页脚
        </h3>
      </div>

      <!-- 手风琴折叠列表 -->
      <div class="space-y-3 mb-10 text-left">
        <div
          v-for="sec in sections"
          :key="sec.id"
          class="rounded-2xl border border-zinc-800 bg-zinc-950/60 overflow-hidden transition-all"
        >
          <button
            @click="toggleSection(sec.id)"
            class="w-full p-4 flex items-center justify-between text-left text-sm font-bold text-white hover:bg-zinc-800/30 transition-colors"
          >
            <span>{{ sec.title }}</span>
            <ChevronDown
              :class="[
                'w-4 h-4 text-zinc-400 transition-transform duration-300',
                openSectionId === sec.id ? 'rotate-180 text-sky-400' : ''
              ]"
            />
          </button>

          <!-- 展开内容 -->
          <div
            v-show="openSectionId === sec.id"
            class="px-4 pb-4 pt-1 border-t border-zinc-800/60 animate-fade-in space-y-2.5"
          >
            <div
              v-for="link in sec.links"
              :key="link"
              class="flex items-center justify-between py-1 text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer group"
            >
              <span>{{ link }}</span>
              <ArrowUpRight class="w-3 h-3 text-zinc-600 group-hover:text-sky-400 transition-colors" />
            </div>
          </div>
        </div>
      </div>

      <!-- 思考推演折叠 (复用 ThoughtAccordion 原子组件) -->
      <div class="mb-10 text-left">
        <div class="text-xs font-bold text-zinc-400 mb-2 flex items-center gap-1.5">
          <Sparkles class="w-3.5 h-3.5 text-indigo-400" />
          <span>移动端手风琴排版架构推演过程：</span>
        </div>
        <ThoughtAccordion
          duration="思考耗时 0.4 秒"
          thoughtText="> 针对移动小屏 (375px) 视口，传统 4 列多排导航会导致纵向无限拉长，增加滚动负担。
> 采用自适应手风琴收纳，首屏收拢高度减少 70%，且单手易触控。
> 结合阻尼缓动函数与无回流 CSS height 动画，确保在 60Hz 及 120Hz 高刷屏均丝滑流畅。"
        />
      </div>

      <!-- 底部版权与背书 -->
      <div class="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <div class="flex items-center gap-2">
          <span>© 2026 Aura UI. 移动优先架构.</span>
        </div>
        <div class="flex items-center gap-1.5 text-zinc-400">
          <Shield class="w-3.5 h-3.5 text-emerald-400" />
          <span>W3C 移动无障碍标准 (WCAG 2.1 AA) 达标</span>
        </div>
      </div>
    </div>
  </footer>
</template>
