<script setup lang="ts">
import { ref } from 'vue'
import { Sparkles, Globe, Github, Twitter, Linkedin, ArrowUpRight, ShieldCheck, Heart } from 'lucide-vue-next'

const currentLang = ref('zh-CN')

const megaSections = [
  {
    title: '产品与架构',
    links: [
      { name: '109 款场景区块', href: '#blocks', badge: 'New' },
      { name: '182 款原子动效组件', href: '#components' },
      { name: 'Vue 3.5 编译优化', href: '#compiler' },
      { name: 'Tailwind 原生双模', href: '#theming' },
      { name: 'CLI 脚手架工具', href: '#cli' },
    ]
  },
  {
    title: '行业解决方案',
    links: [
      { name: 'AI 原生智能体控制台', href: '#ai-consoles' },
      { name: 'SaaS 业务与大盘监控', href: '#saas' },
      { name: 'FinTech 金融清算风控', href: '#fintech' },
      { name: '企业级单点登录 SSO', href: '#auth' },
      { name: '私有化内网独立部署', href: '#on-premise' },
    ]
  },
  {
    title: '开发者生态',
    links: [
      { name: '快速上手起步文档', href: '#docs' },
      { name: 'GitHub 官方仓库', href: 'https://github.com/981029l/-Aura', external: true },
      { name: 'TypeScript 类型系统声明', href: '#types' },
      { name: 'Playwright E2E 测试集', href: '#tests' },
      { name: '更新日志 Changelog', href: '#changelog', badge: 'v2.4.0' },
    ]
  },
  {
    title: '关于与合规',
    links: [
      { name: '虚拟核心工程团队', href: '#team' },
      { name: '隐私与数据保护条例', href: '#privacy' },
      { name: '安全漏洞致谢与赏金', href: '#security' },
      { name: '服务级别协议 (SLA)', href: '#sla' },
      { name: '联系商务专属架构师', href: '#contact' },
    ]
  }
]
</script>

<template>
  <footer class="relative w-full overflow-hidden bg-zinc-950 text-zinc-300 border-t border-zinc-800 transition-colors pt-16 pb-12">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 顶部 4 列超级导航矩阵 + 品牌大纲 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-16 border-b border-zinc-800/80">
        <!-- 品牌列 (占据 1 列在 md/lg 上) -->
        <div class="col-span-2 md:col-span-1 space-y-4 text-left">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-sky-400 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
              <Sparkles class="w-4 h-4" />
            </div>
            <span class="text-base font-black text-white tracking-tight">Aura Platform</span>
          </div>

          <p class="text-xs text-zinc-400 leading-relaxed">
            专为现代化全栈工程打造的下一代 Web 交互动效与场景区块基础设施。
          </p>

          <!-- 社交与社区图标组 -->
          <div class="flex items-center gap-3 pt-2">
            <a href="https://github.com/981029l/-Aura" target="_blank" class="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors">
              <Github class="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" class="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors">
              <Twitter class="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" class="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors">
              <Linkedin class="w-4 h-4" />
            </a>
          </div>

          <!-- 语言选择器 -->
          <div class="pt-2">
            <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
              <Globe class="w-3.5 h-3.5 text-zinc-400" />
              <select
                v-model="currentLang"
                class="bg-transparent text-xs text-zinc-200 focus:outline-none cursor-pointer"
              >
                <option value="zh-CN" class="bg-zinc-900 text-white">简体中文 (CN)</option>
                <option value="en-US" class="bg-zinc-900 text-white">English (US)</option>
                <option value="ja-JP" class="bg-zinc-900 text-white">日本語 (JP)</option>
              </select>
            </div>
          </div>
        </div>

        <!-- 4 大分类列 -->
        <div
          v-for="sec in megaSections"
          :key="sec.title"
          class="space-y-4 text-left"
        >
          <h4 class="text-xs font-bold text-white uppercase tracking-wider">
            {{ sec.title }}
          </h4>
          <ul class="space-y-2.5">
            <li v-for="link in sec.links" :key="link.name">
              <a
                :href="link.href"
                class="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors group"
              >
                <span>{{ link.name }}</span>
                <span
                  v-if="link.badge"
                  class="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                >
                  {{ link.badge }}
                </span>
                <ArrowUpRight
                  v-if="link.external"
                  class="w-3 h-3 text-zinc-500 group-hover:text-zinc-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- 底部版权与状态栏 -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 text-left">
        <div class="flex items-center gap-2">
          <span>© 2026 Aura Platform Inc. 保留所有权利。</span>
          <span>•</span>
          <span class="flex items-center gap-1">
            <span>精心设计</span>
            <Heart class="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>为极致性能而生</span>
          </span>
        </div>

        <div class="flex items-center gap-4">
          <div class="flex items-center gap-1.5 text-emerald-400">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>所有系统正常运转 (99.99%)</span>
          </div>
          <span>•</span>
          <div class="flex items-center gap-1 text-zinc-400">
            <ShieldCheck class="w-3.5 h-3.5 text-indigo-400" />
            <span>ISO 27001 体系受保护</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
