# 🌌 AuraUI (v1.0)

> **专为 Vue 3 项目打造的高品质动效组件库与场景区块集合**  
> 采用 **Copy & Paste**（代码即用）模式，零黑盒依赖，每个组件均为独立的 `.vue` 文件，直接复制到您的项目中自由使用与定制。

<div align="center">

<img src="./public/logo.png" alt="Aura UI Mascot Logo" width="128" style="border-radius: 26px; box-shadow: 0 12px 30px -6px rgba(37, 99, 235, 0.35);" />

### 🤖 积木智能体 · 积木仔 (Block Bot)
*Aura UI 官方专属吉祥物*

<br />

[![Online Demo](https://img.shields.io/badge/Demo-在线演示-3b82f6?style=flat-square&logo=cloudflare)](https://auraui.lvky.cn)
[![Vue](https://img.shields.io/badge/Vue-3.5+-42b883?style=flat-square&logo=vue.js)](https://vuejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4+-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7+-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0+-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-emerald?style=flat-square)](LICENSE)

</div>

---

## 🌐 在线体验与演示

* 🚀 **在线演示地址**：[https://auraui.lvky.cn](https://auraui.lvky.cn)
* 🐙 **GitHub 仓库**：[https://github.com/981029l/-Aura.git](https://github.com/981029l/-Aura.git)

---

## 💡 为什么选择 AuraUI？

* **代码即用（Copy & Paste）**：类似 `shadcn/ui` 的设计哲学，不发布黑盒 npm 运行包。每个组件都是干净透明的 `.vue` 单文件，直接复制到你项目的 `src/components/ui/`，代码完全由你掌控；
* **单文件自包含（Zero-Config）**：动画关键帧与流光逻辑均封装在单文件内或基于 Tailwind 工具类，**无需复杂修改现有的 `tailwind.config.js`**，拷过去立刻生效；
* **真·明暗双模（Clean Light & Deep Dark）**：全套组件原生兼顾纯白极简风与深色科技风，在浅色背景下轮廓分明，在暗黑背景下流光溢彩；
* **60 FPS 硬件加速**：基于 Canvas 2D、SVG 与 CSS 3D 优化，即使包含大量微粒与流体动效，依然流畅稳定；
* **TypeScript 完备**：所有组件具备严谨清晰的 Props、Emits 与插槽类型支持。

---

## 📊 项目真实资产规模

| 模块类别 | 数量 | 涵盖领域 |
| :--- | :---: | :--- |
| **原子动效组件 (Components)** | **232 款** | AI 原生交互、流光卡片、空间 3D、动态背景、流式文本、物理按钮、高阶输入、交互弹窗等 |
| **场景业务区块 (Blocks)** | **109 款** | 首屏营销 Hero、产品特性矩阵、定价方案、客户评价墙、AI 控制台、SaaS 数据大盘、认证引导、超级页脚 |

---

## 🚀 3 步极速上手

### 1. 安装基础依赖

在你的 Vue 3 项目根目录下安装常用辅助工具库：

```bash
pnpm add @vueuse/core clsx tailwind-merge lucide-vue-next
# 或者使用 npm / yarn
npm install @vueuse/core clsx tailwind-merge lucide-vue-next
```

### 2. 添加 `cn` 样式合并工具

在你的项目 `src/lib/utils.ts` 中创建：

```typescript
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### 3. 直接复制代码并引入

例如从本仓库复制 `src/components/ui/BorderBeam.vue` 到你的项目，即可直接使用：

```vue
<script setup lang="ts">
import BorderBeam from '@/components/ui/BorderBeam.vue'
</script>

<template>
  <div class="relative h-64 w-80 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950 flex flex-col items-center justify-center">
    <h3 class="text-lg font-bold text-zinc-900 dark:text-white">高亮展示卡片</h3>
    <BorderBeam :size="160" :duration="6" color-from="#38bdf8" color-to="#a855f7" />
  </div>
</template>
```

---

## 📦 232 款原子动效组件分类总览

### 1. 🤖 AI 原生交互套件 (24 款)
* **`AgentLoop.vue`**：智能体“感知-思考-执行-验证”闭环运转环流
* **`AudioVisualizer.vue`**：多模态音频可视化（柱状频谱、流体声波、发光共鸣球三模式）
* **`KnowledgeGraph.vue`**：知识图谱（节点力导向分布、能量流动连线、实体交互详情）
* **`ImageGenerationProgress.vue`**：图片生成进度（潜空间去噪渐进清晰效果、采样器参数 HUD）
* **`ReasoningTree.vue`**：思维树（分步深度思考可视化，支持分支剪枝高亮追踪）
* **`AttentionHeatmap.vue`**：注意力热力图（多头相关性矩阵，带十字交叉标尺与动态探针）
* **`SpeculativeDecoding.vue`**：推测解码（双模型协同验证加速对比可视化）
* **`AgentTimeline.vue`**：多智能体甘特图（跨角色执行泳道、状态回放与时间轴拖拽）
* **`ToolCall.vue`**：智能体工具调用卡片（运行中脉冲、成功/失败状态与审批交互）
* **`AgentPlan.vue`**：任务规划清单（动态多步执行清单与进度流转）
* **`ContextWindow.vue`**：上下文窗口占比矩阵（直观映射 System、Tools、RAG 与 Messages）
* **`PromptPlayground.vue`**：提示词演练场（温度、核采样滑块微调与流式生成测试）
* **`PromptCache.vue`**：提示词前缀缓存（缓存命中与首字延迟 TTFT 收益对比）
* **`EmbeddingVisualizer.vue`**：向量嵌入降维投影（t-SNE / UMAP / PCA 散点聚类与余弦相似度连线）
* **`VectorSearch.vue`**：高维向量空间检索（空间点云检索与 Top-K 聚光连线）
* **`MixtureOfExperts.vue`**：MoE 混合专家路由（动态门控网络稀疏分发与专家负载展示）
* **`VoiceWaveform.vue`**：语音交互波形仪（32 频段自适应跳动、分贝感知与状态切换）
* **`RadarChart.vue`**：多维能力评测雷达图（6 维多边形覆盖度与双模型对比）
* **`DataFlow.vue`**：流式数据管道（多源输入与实时 TPS 吞吐处理）
* **`AgentStatus.vue`**：智能体运行状态徽章指示器
* **`TypewriterTerminal.vue`**：终端打字机流式对话输出
* **`PromptInput.vue`**：大模型对话高阶输入框
* **`ThoughtAccordion.vue`**：思维链折叠手风琴
* **`ModelBenchmarkMatrix.vue`**：模型综合性能评测矩阵基准榜

### 2. 🎴 流光与立体卡片 (20 款)
* **`BorderBeam.vue`**：圆角流光边框动画
* **`SpotlightCard.vue`**：光标跟随径向聚光灯卡片
* **`TiltCard.vue`**：3D 视差倾斜悬浮卡片
* **`HolographicCard.vue`**：全息彩虹折射与金属光泽卡片
* **`GlassCard.vue`**：磨砂亚克力玻璃拟态卡片
* **`CodeWindow.vue`**：macOS 风格开发者代码视窗
* **`BentoGrid.vue` & `BentoCard.vue`**：便当盒多维网格卡片
* **`CardStack.vue`**：层叠滑动卡片堆栈
* **`FoldCard.vue`**：纸质折叠手册手风琴卡片
* **`CardHoverGlow.vue`**：环境光边界发光卡片
* **`GradientTracing.vue`**：电路脉冲寻迹流束发光卡片
* **`StatCard.vue`**：KPI 度量卡片（集成平滑数字递增与 Mini Sparkline）
* **`ComparisonMatrix.vue`**：特性对比矩阵表格
* **`GlassmorphismCard.vue`**：多层磨砂毛玻璃卡片
* **`GlowingCard.vue`**：渐变弥散发光边框卡片
* **`NoiseCard.vue`**：胶片质感噪点卡片
* **`CircuitBoardCard.vue`**：印刷电路板流光导线卡片
* **`CyberpunkGridCard.vue`**：机能切角赛博朋克卡片
* **`HologramBadgeCard.vue`**：激光全息防伪徽章卡片
* **`HolographicPrismBorder.vue`**：三棱镜光学色散边框卡片

### 3. 🌐 空间与 3D 纵深 (16 款)
* **`Globe3D.vue`**：数字孪生 3D 旋转地球仪（正射投影与发光飞线）
* **`Vortex.vue`**：引力涡旋粒子流光背景
* **`GravityCards.vue`**：物理重力掉落与碰撞卡片沙盒
* **`PerspectiveGrid.vue`**：无限延伸 3D 透视网格地平线
* **`FluidCursor.vue`**：流体微粒光标跟随与粘性拖尾
* **`RetroGrid.vue`**：复古 3D 透视网格
* **`InteractiveParticles.vue`**：鼠标磁吸星空连线粒子
* **`Cube3D.vue`**：CSS 3D 机械魔方视窗
* **`ParticleMorph.vue`**：几何星座插值粒子形变
* **`CircularCarousel.vue`**：3D 环形圆柱无限轮播
* **`InfiniteCanvas.vue`**：无限画布漫游与平移缩放
* **`WaterfallGrid.vue`**：动态瀑布流媒体网格
* **`Tunnel3D.vue`**：三维时空隧道穿梭
* **`InteractiveGlobe.vue`**：矢量 3D 拓扑网络球体
* **`VoxelGrid.vue`**：等轴测体素阶梯网格
* **`SolarSystemOrbits.vue`**：多星体公转轨道动力学模拟

### 4. 🌌 动态背景与纹理 (14 款)
* **`SparklesCore.vue`**：星芒晶体闪烁粒子矩阵
* **`DotGrid.vue`**：凸透镜光标波纹点阵
* **`GravityWell.vue`**：时空引力微网格
* **`FlickeringGrid.vue`**：科技方格微光呼吸网格
* **`NoiseBackground.vue`**：动态分形噪点极光背景
* **`DotPattern.vue`**：矢量科技波点底纹
* **`Meteors.vue`**：流星划过夜空动画
* **`Ripple.vue`**：同心圆声波涟漪扩展
* **`LampEffect.vue`**：极光破晓天灯光锥
* **`OrbitLogos.vue`**：同心公转轨道阵列
* **`AnimatedGradient.vue`**：平滑流动渐变背景
* **`AsciiEffect.vue`**：字符 ASCII 艺术滤镜
* **`AuroraFlow.vue`**：极光流体呼吸渐变
* **`SilkAurora.vue`**：丝绸柔光极光背景

### 5. ✨ 文字与动态排版 (26 款)
* **`TextGenerateEffect.vue`**：逐词平滑高斯解冻流式生成
* **`WordRotate.vue`**：关键词 3D 纵深循环翻滚轮播
* **`FlipWords.vue`**：字母级 3D 翻牌交替动效
* **`HyperText.vue`**：赛博乱码解密变换文字
* **`GradualSpacing.vue`**：字间距聚合与扩散渐变
* **`TextRevealCard.vue`**：光标刮刮乐式文字破晓显影
* **`AnimatedCounter.vue`**：平滑插值渐变数字计数器
* **`NumberRoll.vue`**：机械滚轮数字翻转器
* **`ShinyText.vue`**：金属微光横向划过文字
* **`Marquee.vue`**：双轨无缝平滑跑马灯
* **`MatrixRain.vue`**：数字代码雨字符流
* **`GlitchText.vue`**：RGB 多通道色散故障文字
* **`TypewriterScramble.vue`**：乱码解密逐字打字机
* **`DecryptedText.vue`**：文本悬停逐位解密锁存
* **`WaveformText.vue`**：正弦波谐波起伏文字
* **`NumberTicker.vue`**：数值毫秒平滑递增翻滚
* **`TextTicker.vue`**：大盘行情双轨滚动看板
* **`PerspectiveText.vue`**：三维空间透视折叠文本
* **`GlitchScrambleText.vue`**：故障撕裂电磁文字
* **`MatrixCodeRainDrop.vue`**：字符水滴碰撞重组文字
* **`TypewriterCursorGlow.vue`**：发光光标呼吸打字流
* **`KineticScaleText.vue`**：可变字重微弹簧形变排版
* **`LiquidTextMorph.vue`**：流体水滴熔融交汇形变
* **`SplitFlapDisplay.vue`**：机械翻牌屏显示看板
* **`TextRepel.vue`**：光标引力斥力文字排斥
* **`Signature.vue`**：笔触签名手绘书写动画

### 6. ⚡ 触觉反馈与原子操作 (14 款)
* **`MagneticButton.vue`**：磁吸物理吸引悬浮按钮
* **`HoldToConfirm.vue`**：长按蓄力物理防误触确认按钮
* **`CopySnippet.vue`**：极速复制代码胶囊（带微动效打勾反馈）
* **`KeyboardBadge.vue`**：拟物机械键盘键帽反馈
* **`ShimmerButton.vue`**：360° 旋转微光流转行动按钮
* **`SplitButton.vue`**：主行动键伴随下拉菜单复合按钮
* **`GradientButton.vue`**：多色流动极光行动按钮
* **`ElasticSwitch.vue`**：果冻阻尼物理弹性开关
* **`IconMorph.vue`**：SVG 矢量平滑形变图标
* **`Reactions.vue`**：Emoji 表情物理回弹互动群
* **`SwipeActions.vue`**：跟手滑动露出行操作
* **`MagneticBadge.vue`**：视差磁吸物理感应标签群
* **`HoldToProgress.vue`**：长按阶段性充能锁存按钮
* **`ToggleSwitchMorph.vue`**：拟态流体微触觉形态开关

### 7. 🧭 交互与高阶导航 (40 款)
* **`CommandDialog.vue`**：全局 ⌘K / Ctrl+K 命令快捷浮层
* **`SlideOverDrawer.vue`**：平滑侧滑抽屉面板
* **`ContextMenu.vue`**：桌面级防溢出右键菜单
* **`ToastNotification.vue`**：消息通知物理堆叠浮层
* **`DropdownMenu.vue`**：多级选项下拉菜单
* **`FloatingPopover.vue`**：微动浮动气泡浮层
* **`SegmentedControl.vue`**：iOS 风格滑动指示器分段选择器
* **`ProgressSteps.vue`**：阶段进度步骤器
* **`RadialMenu.vue`**：环形轮盘动作展开菜单
* **`BreadcrumbTrail.vue`**：长路径折叠气泡面包屑
* **`Dock.vue`**：macOS 鱼眼放大 Dock 栏
* **`ImageCompare.vue`**：水平拖拽高帧率图像对比滑块
* **`FluidTabs.vue`**：流体悬停平滑标签页
* **`BottomSheet.vue`**：手势阻尼吸附底部抽屉
* **`AnimatedBeam.vue`**：SVG 渐变流束拓扑连线
* **`HoverCard.vue`**：人员名片悬停视差浮层
* **`MorphingDialog.vue`**：原地平滑无缝展开大模态卡片
* **`AudioPlayer.vue`**：波形交互音频播放器
* **`GaugeMeter.vue`**：全景半圆指针度量表
* **`ScrollProgressPill.vue`**：页面阅读进度胶囊
* **`TreeBreadcrumb.vue`**：树状层级多分支折叠面包屑
* *(其余 19 款交互导航组件详见组件库文档)*

### 8. 📝 表单与高阶输入 (6 款)
* **`InlineEdit.vue`**：原地无缝重命名微交互输入
* **`ShortcutRecorder.vue`**：快捷键热键录制与冲突检测
* **`ScrubInput.vue`**：水平拖拽数值微调输入框
* **`PasswordStrength.vue`**：密码强度动态仪表盘与规则校验
* **`MoneyInput.vue`**：千分位自适应字号金额输入
* **`PhoneInput.vue`**：国际手机号区号分段格式化输入

---

## 🏛️ 109 款场景业务 Blocks 组合总览

遵循标准业务场景，提供完整组合模板，支持直接复制整页或局部嵌入：

1. **🚀 首屏营销套件 (`marketing-hero` · 15 款)**：涵盖 AI Studio 旗舰首屏、控制台视差、终端打字流、极光渐变、3D 旋转地球仪、Bento 交互网格、双屏移动端 App 展示等；
2. **⚡ 核心特性矩阵 (`marketing-features` · 18 款)**：涵盖便当盒 Bento Grid、标签沙盒、全球 CDN 延迟探针、模型多维对比、工作流画布拖拽、深浅双模展示舞台等；
3. **💳 定价策略方案 (`marketing-pricing` · 12 款)**：涵盖三阶梯方案卡、月/年付滑动折扣、用户量滑块计算器、特性打勾清单矩阵、Token 积分预付档位等；
4. **🌟 客户评价好评 (`marketing-testimonials` · 12 款)**：涵盖双向无缝跑马灯、瀑布流真实证言、500 强企业 Logo 墙、G2 徽章评分、社交媒体推文流式聚合等；
5. **🤖 AI 工作台与控制台 (`ai-consoles` · 16 款)**：涵盖多智能体编排工作台、提示词调优工作室、双模型盲测竞技场、RAG 切片知识库、推理链搜索与剪枝控制台等；
6. **📊 SaaS 管理后台大盘 (`saas-dashboards` · 16 款)**：涵盖企业 KPI 数据大盘、FinOps 多云账单分析、全局流量吞吐哨兵、RBAC 用户权限矩阵、微服务调用拓扑等；
7. **🛡️ 引导与认证流程 (`auth-onboarding` · 10 款)**：涵盖多步配置向导、分屏沉浸式登录注册、2FA 双重身份验证、组织属性配置、团队协同批量邀请等；
8. **📐 页脚导航与行动号召 (`footers-cta` · 10 款)**：涵盖极光破晓流光 CTA 横幅、开发者命令行快速开始条、企业级 4 列超级页脚、移动端手风琴折叠页脚等。

---

## 🛠️ 本地运行与部署指南

### 本地启动展示站

```bash
# 1. 安装依赖
pnpm install

# 2. 启动本地开发服务
pnpm dev
# 本地访问 http://localhost:3000
```

### 本地构建产物

```bash
pnpm build
# 产物输出至 dist/ 目录，经过极致代码压缩与单页路由预处理
```

### 全球极速托管部署 (Cloudflare)

本项目已原生配置 [wrangler.jsonc](wrangler.jsonc)，全面支持 Cloudflare Workers 与 Pages 一键持续集成：
1. 在 Cloudflare 控制台直接关联 GitHub 仓库 `981029l/-Aura`；
2. 构建命令填入 `pnpm run build`，输出目录填入 `dist`；
3. 绑定自定义域名（如 `auraui.lvky.cn`）即可享受全球 Anycast CDN 加速与免维护自动 HTTPS。

### 私有化云服务器 (Nginx)

参考根目录下自带的 [nginx.conf](nginx.conf)，在服务器 Nginx 配置中载入静态目录并配置单页路由（防止页面刷新 404）：

```nginx
server {
    listen 80;
    server_name ui.yourdomain.com;

    root /www/aura-ui/dist;
    index index.html;

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml image/svg+xml;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## 🤝 社区致敬与生态支持 (Special Thanks)

特别致敬 **[LINUX DO 开发者社区 (linux.do)](https://linux.do)**  
> *“真诚、友善、团结、专业”* —— 本项目深受 LINUX DO 活跃的技术探索精神与开源分享氛围启发，特向社区内所有热衷于前沿技术探索与无私分享的同仁致敬！

[![LINUX DO](https://img.shields.io/badge/Community-LINUX%20DO-blue?style=for-the-badge&logo=linux&logoColor=white)](https://linux.do)

---

## 📄 开源协议

本项目基于 [MIT License](LICENSE) 协议开源。欢迎自由用于商业项目、SaaS 产品官网或个人作品集！
