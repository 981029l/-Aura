export interface BlockSuite {
  id: 'marketing-hero' | 'marketing-features' | 'marketing-pricing' | 'marketing-testimonials' | 'ai-consoles' | 'saas-dashboards' | 'auth-onboarding' | 'footers-cta'
  name: string
  englishName: string
  description: string
  badgeColor: string
  iconName: string
  count: number
}

export const BLOCK_SUITES: BlockSuite[] = [
  {
    id: 'marketing-hero',
    name: '首屏英雄区块',
    englishName: 'Marketing Hero Sections',
    description: '高转化率 SaaS 与 AI 平台官网首屏。涵盖 3D 视差、视频弹窗、代码终端、渐变极光与多列复合表单。',
    badgeColor: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
    iconName: 'Rocket',
    count: 15,
  },
  {
    id: 'marketing-features',
    name: '核心特性与产品矩阵',
    englishName: 'Features & Capabilities Showcase',
    description: '苹果风便当盒 Bento Grid、交互式标签页视窗、多地域全球边缘节点与深浅双模动态特性矩阵。',
    badgeColor: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
    iconName: 'Layers',
    count: 18,
  },
  {
    id: 'marketing-pricing',
    name: '定价策略与订阅矩阵',
    englishName: 'Pricing & Plans Matrix',
    description: '三档订阅卡片、按月/按年平滑切换、动态滑块计费计算器、全量特性勾选对比与企业级报价通道。',
    badgeColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    iconName: 'CreditCard',
    count: 12,
  },
  {
    id: 'marketing-testimonials',
    name: '客户评价与信任背书',
    englishName: 'Testimonials & Social Proof',
    description: '双轨无缝滚动好评跑马灯、瀑布流真实评价卡片、500 强企业合作徽标墙与 G2 评分徽章。',
    badgeColor: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    iconName: 'MessageSquareQuote',
    count: 12,
  },
  {
    id: 'ai-consoles',
    name: 'AI 控制台与智能体工作台',
    englishName: 'AI Native Consoles & Workspaces',
    description: '多智能体思考链协同控制台、提示词工程演练场、双模型推测解码对比、高维向量检索与音频频谱工作台。',
    badgeColor: 'text-sky-500 bg-sky-500/10 border-sky-500/20',
    iconName: 'Bot',
    count: 16,
  },
  {
    id: 'saas-dashboards',
    name: 'SaaS 仪表盘与管理后台',
    englishName: 'SaaS Dashboards & Management',
    description: '高管 KPI 数据大盘、FinOps 云端资费开销分析、实时流量 DDoS 哨兵监控、RBAC 权限与审计日志追踪。',
    badgeColor: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
    iconName: 'LayoutDashboard',
    count: 16,
  },
  {
    id: 'auth-onboarding',
    name: '入职引导与认证流程',
    englishName: 'Onboarding & Auth Flows',
    description: '多步骤向导式工作空间配置、分屏沉浸式登录注册、OTP 双重认证微键帽、团队邀请与信用卡支付录入。',
    badgeColor: 'text-rose-500 bg-rose-500/10 border-rose-500/20',
    iconName: 'ShieldCheck',
    count: 10,
  },
  {
    id: 'footers-cta',
    name: '页脚导航与行动号召',
    englishName: 'Footers & Call to Action Banners',
    description: '极光破晓流光 CTA 横幅、开发者命令复制条、多列企业级 SaaS 巨型页脚与合规免责声明。',
    badgeColor: 'text-teal-500 bg-teal-500/10 border-teal-500/20',
    iconName: 'Compass',
    count: 10,
  },
]

export interface BlockDoc {
  id: string
  name: string
  title: string
  suiteId: 'marketing-hero' | 'marketing-features' | 'marketing-pricing' | 'marketing-testimonials' | 'ai-consoles' | 'saas-dashboards' | 'auth-onboarding' | 'footers-cta'
  category: string
  description: string
  blockFilename: string
  tags: string[]
}

export const BLOCKS_DATA: BlockDoc[] = [
  // ================= 1. Marketing Hero (15 款) =================
  {
    id: 'hero-ai-studio',
    name: 'HeroAiStudio',
    title: 'AI 智能体工作台现代 Hero（Hero AI Studio）',
    suiteId: 'marketing-hero',
    category: 'Hero',
    description: '专为 AI SaaS 打造的沉浸式 Hero 首屏。集成公告发光药丸、3D 关键词轮播标题、交互式提示词运行框与企业客户跑马灯。',
    blockFilename: 'HeroAiStudio.vue',
    tags: ['Hero', 'AI', 'WordRotate', 'PromptInput', 'Marquee']
  },
  {
    id: 'hero-dashboard-preview',
    name: 'HeroDashboardPreview',
    title: 'SaaS 仪表盘视差倾斜 Hero（Hero Dashboard Preview）',
    suiteId: 'marketing-hero',
    category: 'Hero',
    description: '以三维透视倾斜悬浮的 SaaS 仪表盘界面为视觉焦点，搭载 1px 细微流光边框、发光背景光锥与双行动号召按钮。',
    blockFilename: 'HeroDashboardPreview.vue',
    tags: ['Hero', 'SaaS', 'BorderBeam', 'TiltCard', 'LampEffect']
  },
  {
    id: 'hero-terminal-developer',
    name: 'HeroTerminalDeveloper',
    title: '开发者终端交互 Hero（Hero Terminal Developer）',
    suiteId: 'marketing-hero',
    category: 'Hero',
    description: '面向底层开发工具的黑客极客 Hero 首屏。左侧大字号硬核标题与快速安装命令，右侧可交互 macOS 终端与实时打字机输出。',
    blockFilename: 'HeroTerminalDeveloper.vue',
    tags: ['Hero', 'Developer', 'Terminal', 'TypewriterTerminal', 'CopySnippet']
  },
  {
    id: 'hero-aurora-gradient',
    name: 'HeroAuroraGradient',
    title: '动态极光流体破晓 Hero（Hero Aurora Gradient）',
    suiteId: 'marketing-hero',
    category: 'Hero',
    description: '极光破晓流体背景下的现代化 Hero。多重柔和极光光斑交织漂移，搭配金属高光文字与玻璃拟态操作面板。',
    blockFilename: 'HeroAuroraGradient.vue',
    tags: ['Hero', 'Aurora', 'ShinyText', 'GlassCard', 'Meteors']
  },
  {
    id: 'hero-particle-nebula',
    name: 'HeroParticleNebula',
    title: '粒子星云交互星空 Hero（Hero Particle Nebula）',
    suiteId: 'marketing-hero',
    category: 'Hero',
    description: '全屏 Canvas 交互式磁吸粒子星空背景，光标靠近时微粒向心聚合与连线，中心悬浮极简品牌行动胶囊。',
    blockFilename: 'HeroParticleNebula.vue',
    tags: ['Hero', '3D', 'InteractiveParticles', 'SparklesCore']
  },
  {
    id: 'hero-video-modal',
    name: 'HeroVideoModal',
    title: '产品视讯演示弹窗 Hero（Hero Video Modal）',
    suiteId: 'marketing-hero',
    category: 'Hero',
    description: '带高品质毛玻璃视频预览封面与呼吸微光 Play 按钮，点击原地弹出高斯模糊模态播放视窗。',
    blockFilename: 'HeroVideoModal.vue',
    tags: ['Hero', 'Video', 'MorphingDialog', 'Ripple']
  },
  {
    id: 'hero-retro-grid',
    name: 'HeroRetroGrid',
    title: '复古赛博 3D 透视网格 Hero（Hero Retro Grid）',
    suiteId: 'marketing-hero',
    category: 'Hero',
    description: '80 年代赛博朋克 3D 地平线网格无限推进，地平线橙色霞光升腾，搭载高频字符解密文字。',
    blockFilename: 'HeroRetroGrid.vue',
    tags: ['Hero', 'Cyber', 'RetroGrid', 'DecryptedText']
  },
  {
    id: 'hero-split-form',
    name: 'HeroSplitForm',
    title: '分栏注册与实时试用 Hero（Hero Split Form）',
    suiteId: 'marketing-hero',
    category: 'Hero',
    description: '左侧品牌核心价值与权威客户背书，右侧内嵌高转化率即时试用表单，支持免密一键体验与实时校验。',
    blockFilename: 'HeroSplitForm.vue',
    tags: ['Hero', 'Conversion', 'PasswordStrength', 'TagInput']
  },
  {
    id: 'hero-minimal-typographic',
    name: 'HeroMinimalTypographic',
    title: '极简大字号排版双轨 Hero（Hero Minimal Typographic）',
    suiteId: 'marketing-hero',
    category: 'Hero',
    description: '瑞士国际主义平面排版美学，超大字号无衬线粗体标题，底部双轨无缝滚动核心指标数字。',
    blockFilename: 'HeroMinimalTypographic.vue',
    tags: ['Hero', 'Typography', 'AnimatedCounter', 'TextTicker']
  },
  {
    id: 'hero-3d-globe',
    name: 'Hero3dGlobe',
    title: '数字孪生 3D 全球网络 Hero（Hero 3D Globe）',
    suiteId: 'marketing-hero',
    category: 'Hero',
    description: '中央搭载 Canvas 3D 正射投影旋转地球仪，全球骨干机房光斑脉冲，专为出海 SaaS 与跨国云厂商打造。',
    blockFilename: 'Hero3dGlobe.vue',
    tags: ['Hero', 'Globe', 'Globe3D', 'AnimatedBeam']
  },
  {
    id: 'hero-bento-interactive',
    name: 'HeroBentoInteractive',
    title: '多维交互便当盒矩阵 Hero（Hero Bento Interactive）',
    suiteId: 'marketing-hero',
    category: 'Hero',
    description: '打破传统单一居中布局，以苹果风多列非对称便当盒为首屏，分别展示速度、生态、安全与双模。',
    blockFilename: 'HeroBentoInteractive.vue',
    tags: ['Hero', 'Bento', 'BentoGrid', 'BorderBeam']
  },
  {
    id: 'hero-fintech-card',
    name: 'HeroFintechCard',
    title: '金融级高奢金属卡片 Hero（Hero Fintech Card）',
    suiteId: 'marketing-hero',
    category: 'Hero',
    description: '金融支付与资产管理平台专属。悬浮 3D 全息反光钛金属黑卡，带光标视差光斑折射与实时交易流光。',
    blockFilename: 'HeroFintechCard.vue',
    tags: ['Hero', 'Fintech', 'HolographicCard', 'MoneyInput']
  },
  {
    id: 'hero-mobile-app',
    name: 'HeroMobileApp',
    title: '移动原生应用双机并排 Hero（Hero Mobile App）',
    suiteId: 'marketing-hero',
    category: 'Hero',
    description: '高精拟真 iPhone 边框展示原生 App 运行画面，两侧浮动实时消息吐司与用户评分勋章。',
    blockFilename: 'HeroMobileApp.vue',
    tags: ['Hero', 'Mobile', 'BottomSheet', 'StarRating']
  },
  {
    id: 'hero-web3-node',
    name: 'HeroWeb3Node',
    title: '去中心化算力拓扑 Hero（Hero Web3 Node）',
    suiteId: 'marketing-hero',
    category: 'Hero',
    description: '去中心化计算网络与区块链拓扑节点，引力连线动态寻迹脉冲，显示全网实时节点数与 TPS。',
    blockFilename: 'HeroWeb3Node.vue',
    tags: ['Hero', 'Web3', 'KnowledgeGraph', 'DataFlow']
  },
  {
    id: 'hero-enterprise-cloud',
    name: 'HeroEnterpriseCloud',
    title: '企业级云基础设施 Hero（Hero Enterprise Cloud）',
    suiteId: 'marketing-hero',
    category: 'Hero',
    description: '面向千亿级数据吞吐的私有云/混合云平台。集成多地域自动容灾演练调度图谱与 SLA 99.999% 承诺。',
    blockFilename: 'HeroEnterpriseCloud.vue',
    tags: ['Hero', 'Enterprise', 'MultiRegionFailover', 'StatCard']
  },

  // ================= 2. Marketing Features (18 款) =================
  {
    id: 'features-bento-grid',
    name: 'FeaturesBentoGrid',
    title: '苹果风六合一便当盒特性矩阵（Features Bento Grid）',
    suiteId: 'marketing-features',
    category: 'Features',
    description: '非对称 Bento Grid 布局，跨列大卡片搭载 1px 细微跑马发光 BorderBeam，融合多维硬件加速指标。',
    blockFilename: 'FeaturesBentoGrid.vue',
    tags: ['Features', 'Bento', 'BorderBeam', 'BentoCard']
  },
  {
    id: 'features-tabbed-mockup',
    name: 'FeaturesTabbedMockup',
    title: '选项卡联动交互式视窗矩阵（Features Tabbed Mockup）',
    suiteId: 'marketing-features',
    category: 'Features',
    description: '左侧选项卡带弹性胶囊滑动指示器，右侧无缝联动切换不同的功能视窗与实时交互组件。',
    blockFilename: 'FeaturesTabbedMockup.vue',
    tags: ['Features', 'Tabs', 'FluidTabs', 'CodeWindow']
  },
  {
    id: 'features-global-edge-map',
    name: 'FeaturesGlobalEdgeMap',
    title: '全球边缘节点低延迟拓扑（Features Global Edge Map）',
    suiteId: 'marketing-features',
    category: 'Features',
    description: '全球主要洲际机房节点分布图，具备鼠标悬停探测 RTT 毫秒时延与动态粒子飞线。',
    blockFilename: 'FeaturesGlobalEdgeMap.vue',
    tags: ['Features', 'Globe', 'InteractiveGlobe', 'AnimatedBeam']
  },
  {
    id: 'features-model-comparison',
    name: 'FeaturesModelComparison',
    title: 'AI 大模型性能胜率矩阵对比（Features Model Comparison）',
    suiteId: 'marketing-features',
    category: 'Features',
    description: '多维度模型评测雷达图、吞吐量延迟对决条形图与代码胜率指标横向对比。',
    blockFilename: 'FeaturesModelComparison.vue',
    tags: ['Features', 'AI', 'ModelBenchmarkMatrix', 'RadarChart']
  },
  {
    id: 'features-sticky-story',
    name: 'FeaturesStickyStory',
    title: '吸附式分段滚动叙事画廊（Features Sticky Story）',
    suiteId: 'marketing-features',
    category: 'Features',
    description: '左侧固定吸附展示三维动态模型，右侧伴随滚动优雅流转步骤解说，带平滑视差高亮。',
    blockFilename: 'FeaturesStickyStory.vue',
    tags: ['Features', 'Story', 'Cube3D', 'ProgressSteps']
  },
  {
    id: 'features-spotlight-matrix',
    name: 'FeaturesSpotlightMatrix',
    title: '光标追踪径向聚光卡片组（Features Spotlight Matrix）',
    suiteId: 'marketing-features',
    category: 'Features',
    description: '6 张特性卡片共享环境光感应，光标靠近时精准点亮卡片发丝边框与内衬柔和聚光灯。',
    blockFilename: 'FeaturesSpotlightMatrix.vue',
    tags: ['Features', 'Spotlight', 'SpotlightCard', 'CardHoverGlow']
  },
  {
    id: 'features-workflow-canvas',
    name: 'FeaturesWorkflowCanvas',
    title: '无限画布节点工作流特性（Features Workflow Canvas）',
    suiteId: 'marketing-features',
    category: 'Features',
    description: '模拟 Figma 级无限漫游画布，拖动画布平移并查看微服务 DAG 节点的自动化执行连线。',
    blockFilename: 'FeaturesWorkflowCanvas.vue',
    tags: ['Features', 'Canvas', 'InfiniteCanvas', 'KnowledgeGraph']
  },
  {
    id: 'features-multimodal-audio',
    name: 'FeaturesMultimodalAudio',
    title: '多模态语音与声波识别特性（Features Multimodal Audio）',
    suiteId: 'marketing-features',
    category: 'Features',
    description: '展示 AI 语音流式输入、32 频段自适应振荡柱、动态分贝感知与实时转录打字机。',
    blockFilename: 'FeaturesMultimodalAudio.vue',
    tags: ['Features', 'Audio', 'AudioVisualizer', 'VoiceWaveform']
  },
  {
    id: 'features-team-collaboration',
    name: 'FeaturesTeamCollaboration',
    title: '多人实时协作协同光标特性（Features Team Collaboration）',
    suiteId: 'marketing-features',
    category: 'Features',
    description: '展示跨地域团队成员的实时浮动光标、就地协同注释批注与 @ 成员自动唤出。',
    blockFilename: 'FeaturesTeamCollaboration.vue',
    tags: ['Features', 'Collaboration', 'MentionInput', 'InlineEdit']
  },
  {
    id: 'features-developer-sdk',
    name: 'FeaturesDeveloperSdk',
    title: '多语言 SDK 极速接入代码视窗（Features Developer SDK）',
    suiteId: 'marketing-features',
    category: 'Features',
    description: '切换 TypeScript / Python / Go / Rust 原生代码片段，行号流光追踪与一键复制代码。',
    blockFilename: 'FeaturesDeveloperSdk.vue',
    tags: ['Features', 'SDK', 'CodeWindow', 'CopySnippet']
  },
  {
    id: 'features-security-shield',
    name: 'FeaturesSecurityShield',
    title: '金融级安全与合规防御中心（Features Security Shield）',
    suiteId: 'marketing-features',
    category: 'Features',
    description: 'SOC2 Type II、GDPR、HIPAA 合规认证勋章，全链路 TLS 1.3 加密与硬件隔离沙盒展示。',
    blockFilename: 'FeaturesSecurityShield.vue',
    tags: ['Features', 'Security', 'HologramBadgeCard', 'ShieldCheck']
  },
  {
    id: 'features-vector-search',
    name: 'FeaturesVectorSearch',
    title: '高维向量空间嵌入检索特性（Features Vector Search）',
    suiteId: 'marketing-features',
    category: 'Features',
    description: '2.5D 透视向量空间检索，高维点云语义聚类与 Query 探针余弦相似度 Top-K 聚光。',
    blockFilename: 'FeaturesVectorSearch.vue',
    tags: ['Features', 'Vector', 'VectorSearch', 'EmbeddingVisualizer']
  },
  {
    id: 'features-atomic-playground',
    name: 'FeaturesAtomicPlayground',
    title: '触觉微交互原子演练场（Features Atomic Playground）',
    suiteId: 'marketing-features',
    category: 'Features',
    description: '将果冻滑块、磁吸按钮、触觉开关与长按蓄力按钮组合在一个高保真交互试玩舱中。',
    blockFilename: 'FeaturesAtomicPlayground.vue',
    tags: ['Features', 'Tactile', 'ElasticSlider', 'MagneticButton', 'HoldToConfirm']
  },
  {
    id: 'features-responsive-devices',
    name: 'FeaturesResponsiveDevices',
    title: '全端设备自适应响应式画廊（Features Responsive Devices）',
    suiteId: 'marketing-features',
    category: 'Features',
    description: '平滑切换桌面端、平板与移动端视窗，体验 100% 自包含的流体组件排版。',
    blockFilename: 'FeaturesResponsiveDevices.vue',
    tags: ['Features', 'Responsive', 'ImageCompare', 'SegmentedControl']
  },
  {
    id: 'features-stream-throughput',
    name: 'FeaturesStreamThroughput',
    title: '零延迟 WebSocket 流式吞吐核心（Features Stream Throughput）',
    suiteId: 'marketing-features',
    category: 'Features',
    description: '实时十六进制 Hex 字节瀑布、中央 360° 旋转双环处理引擎与实时 TPS 计量。',
    blockFilename: 'FeaturesStreamThroughput.vue',
    tags: ['Features', 'Stream', 'DataStreamProbe', 'DataFlow']
  },
  {
    id: 'features-agent-self-heal',
    name: 'FeaturesAgentSelfHeal',
    title: '自愈型智能体闭环运行拓扑（Features Agent Self Heal）',
    suiteId: 'marketing-features',
    category: 'Features',
    description: '感知-行动-验证自愈闭环，中心大模型大脑与 4 极工作站沿轨环流，自愈周期动态计数。',
    blockFilename: 'FeaturesAgentSelfHeal.vue',
    tags: ['Features', 'Agent', 'AgentLoop', 'AgentPlan']
  },
  {
    id: 'features-dual-theme-showcase',
    name: 'FeaturesDualThemeShowcase',
    title: '真·明暗双模实时对比舞台（Features Dual Theme Showcase）',
    suiteId: 'marketing-features',
    category: 'Features',
    description: '左右滑动对比滑块，体验纯白 Clean Light 与深邃 Deep Dark 模式的极致光影过渡。',
    blockFilename: 'FeaturesDualThemeShowcase.vue',
    tags: ['Features', 'Theme', 'ImageCompare', 'ToggleSwitchMorph']
  },
  {
    id: 'features-sla-reliability',
    name: 'FeaturesSlaReliability',
    title: '99.999% 高可用可靠性承诺墙（Features SLA Reliability）',
    suiteId: 'marketing-features',
    category: 'Features',
    description: '展示 90 天全网服务平稳运行绿灯条、自动故障转移与毫秒级全球 DNS Anycast。',
    blockFilename: 'FeaturesSlaReliability.vue',
    tags: ['Features', 'SLA', 'MultiRegionFailover', 'RadialGauge']
  },

  // ================= 3. Marketing Pricing (12 款) =================
  {
    id: 'pricing-tiered-cards',
    name: 'PricingTieredCards',
    title: '三档 SaaS 阶梯方案与推荐流光卡（Pricing Tiered Cards）',
    suiteId: 'marketing-pricing',
    category: 'Pricing',
    description: '最经典的 Starter / Pro / Enterprise 三卡并排，推荐方案搭载 360° 发光边框与热门标签。',
    blockFilename: 'PricingTieredCards.vue',
    tags: ['Pricing', 'Tiered', 'BorderBeam', 'ShimmerButton']
  },
  {
    id: 'pricing-billing-toggle',
    name: 'PricingBillingToggle',
    title: '月付/年付平滑滑动折扣定价（Pricing Billing Toggle）',
    suiteId: 'marketing-pricing',
    category: 'Pricing',
    description: '带 8 折立减促销药丸，切换月付年付时所有卡片价格数字带物理滚轮毫秒平滑翻滚。',
    blockFilename: 'PricingBillingToggle.vue',
    tags: ['Pricing', 'Toggle', 'SegmentedControl', 'NumberTicker']
  },
  {
    id: 'pricing-slider-calculator',
    name: 'PricingSliderCalculator',
    title: '滑块式用户量动态计费计算器（Pricing Slider Calculator）',
    suiteId: 'marketing-pricing',
    category: 'Pricing',
    description: '根据 MAU、Token 消耗量或节点规模动态滑动，实时计算并显示预估月度资费账单。',
    blockFilename: 'PricingSliderCalculator.vue',
    tags: ['Pricing', 'Calculator', 'SliderTooltipHaptic', 'ElasticSlider']
  },
  {
    id: 'pricing-matrix-checklist',
    name: 'PricingMatrixChecklist',
    title: '全量特性打勾对比矩阵表格（Pricing Matrix Checklist）',
    suiteId: 'marketing-pricing',
    category: 'Pricing',
    description: '长篇幅专业级特性对比表格，整行悬停高亮追踪、表头固定吸顶与弹性对勾动效。',
    blockFilename: 'PricingMatrixChecklist.vue',
    tags: ['Pricing', 'Matrix', 'ComparisonMatrix']
  },
  {
    id: 'pricing-single-lifetime',
    name: 'PricingSingleLifetime',
    title: '单卡终生授权与早鸟特惠（Pricing Single Lifetime）',
    suiteId: 'marketing-pricing',
    category: 'Pricing',
    description: '针对独立开发者与单次付费产品的终生买断卡片，带倒计时库存告急与长按蓄力支付。',
    blockFilename: 'PricingSingleLifetime.vue',
    tags: ['Pricing', 'Lifetime', 'HoldToConfirm', 'SpotlightCard']
  },
  {
    id: 'pricing-credit-token-tier',
    name: 'PricingCreditTokenTier',
    title: 'AI Token 预付积分档位换算（Pricing Credit Token Tier）',
    suiteId: 'marketing-pricing',
    category: 'Pricing',
    description: '针对大模型 API 的积分卡片包，展示每百万 Token 单价对比与批量充值折上折。',
    blockFilename: 'PricingCreditTokenTier.vue',
    tags: ['Pricing', 'Token', 'PromptCache', 'NumberRoll']
  },
  {
    id: 'pricing-team-seats',
    name: 'PricingTeamSeats',
    title: '团队席位阶梯加购计数器（Pricing Team Seats）',
    suiteId: 'marketing-pricing',
    category: 'Pricing',
    description: '席位步进器，结合阶梯优惠算法（5人以上9折、20人以上8折），实时呈现人均成本。',
    blockFilename: 'PricingTeamSeats.vue',
    tags: ['Pricing', 'Seats', 'NumberWheelStepper', 'MoneyInput']
  },
  {
    id: 'pricing-developer-freemium',
    name: 'PricingDeveloperFreemium',
    title: '开源免费版与商业支持对比（Pricing Developer Freemium）',
    suiteId: 'marketing-pricing',
    category: 'Pricing',
    description: '突出开源版本自由自部署承诺，右侧对比企业商业专有技术支持与 SLA 专家团队。',
    blockFilename: 'PricingDeveloperFreemium.vue',
    tags: ['Pricing', 'Freemium', 'CodeWindow']
  },
  {
    id: 'pricing-enterprise-quote',
    name: 'PricingEnterpriseQuote',
    title: '企业大客户定制询价预约（Pricing Enterprise Quote）',
    suiteId: 'marketing-pricing',
    category: 'Pricing',
    description: '针对千万元级大客户的专属销售通道，带企业规模下拉、SOC2 报告下载与架构师直连。',
    blockFilename: 'PricingEnterpriseQuote.vue',
    tags: ['Pricing', 'Enterprise', 'DropdownMenu']
  },
  {
    id: 'pricing-currency-switcher',
    name: 'PricingCurrencySwitcher',
    title: '多币种国际自适应定价（Pricing Currency Switcher）',
    suiteId: 'marketing-pricing',
    category: 'Pricing',
    description: '支持 USD、EUR、GBP、CNY、JPY 自动汇率换算与各国家/地区税费合规说明。',
    blockFilename: 'PricingCurrencySwitcher.vue',
    tags: ['Pricing', 'Currency', 'PhoneInput']
  },
  {
    id: 'pricing-guarantee-banner',
    name: 'PricingGuaranteeBanner',
    title: '30 天无条件退款保障信誉栏（Pricing Guarantee Banner）',
    suiteId: 'marketing-pricing',
    category: 'Pricing',
    description: '解除买家顾虑的信誉保证区块，带金牌退款徽章、零风险承诺与极速退款通道说明。',
    blockFilename: 'PricingGuaranteeBanner.vue',
    tags: ['Pricing', 'Trust', 'HologramBadgeCard']
  },
  {
    id: 'pricing-addon-matrix',
    name: 'PricingAddonMatrix',
    title: '增值微服务可选附加模块矩阵（Pricing Addon Matrix）',
    suiteId: 'marketing-pricing',
    category: 'Pricing',
    description: '以开关组件自由勾选独立 IP、审计日志归档、专用专线与冷备份，总价动态实时汇算。',
    blockFilename: 'PricingAddonMatrix.vue',
    tags: ['Pricing', 'Addon', 'ElasticSwitch']
  },

  // ================= 4. Marketing Testimonials (12 款) =================
  {
    id: 'testimonials-marquee-wall',
    name: 'TestimonialsMarqueeWall',
    title: '双轨反向无缝用户好评墙（Testimonials Marquee Wall）',
    suiteId: 'marketing-testimonials',
    category: 'Testimonials',
    description: '双轨反向滚动的无缝评价跑马灯，卡片搭载磨砂毛玻璃质感、五星评分与官方认证蓝标。',
    blockFilename: 'TestimonialsMarqueeWall.vue',
    tags: ['Testimonials', 'Marquee', 'StarRating', 'GlassCard']
  },
  {
    id: 'testimonials-masonry-cards',
    name: 'TestimonialsMasonryCards',
    title: '瀑布流交错客户评价画廊（Testimonials Masonry Cards）',
    suiteId: 'marketing-testimonials',
    category: 'Testimonials',
    description: '多列错落响应式瀑布流，各卡片包含长篇深度案例好评、作者头像与所属企业职位。',
    blockFilename: 'TestimonialsMasonryCards.vue',
    tags: ['Testimonials', 'Masonry', 'WaterfallGrid']
  },
  {
    id: 'testimonials-single-spotlight',
    name: 'TestimonialsSingleSpotlight',
    title: '重磅客户巨幅引言聚光展示（Testimonials Single Spotlight）',
    suiteId: 'marketing-testimonials',
    category: 'Testimonials',
    description: '顶级独角兽 CEO 的深度背书引言，大字号排版搭配背景柔和聚光与业绩指标翻滚。',
    blockFilename: 'TestimonialsSingleSpotlight.vue',
    tags: ['Testimonials', 'Spotlight', 'ShinyText', 'AnimatedCounter']
  },
  {
    id: 'testimonials-video-modal-grid',
    name: 'TestimonialsVideoModalGrid',
    title: '真实客户访谈视频卡片组（Testimonials Video Modal Grid）',
    suiteId: 'marketing-testimonials',
    category: 'Testimonials',
    description: '点击视频缩略图原地平滑展开无损访谈灯箱，展示业务迁移至 Aura 后的实测收益。',
    blockFilename: 'TestimonialsVideoModalGrid.vue',
    tags: ['Testimonials', 'Video', 'MorphingDialog']
  },
  {
    id: 'testimonials-logo-marquee',
    name: 'TestimonialsLogoMarquee',
    title: '全球 500 强顶级客户徽标墙（Testimonials Logo Marquee）',
    suiteId: 'marketing-testimonials',
    category: 'Testimonials',
    description: '单轨/双轨无缝滚动全球顶级客户矢量 Logo，悬停平滑暂停，支持深浅色自适应反差。',
    blockFilename: 'TestimonialsLogoMarquee.vue',
    tags: ['Testimonials', 'Logos', 'Marquee', 'OrbitLogos']
  },
  {
    id: 'testimonials-g2-ratings',
    name: 'TestimonialsG2Ratings',
    title: 'G2 / Capterra 权威评分领袖勋章（Testimonials G2 Ratings）',
    suiteId: 'marketing-testimonials',
    category: 'Testimonials',
    description: '集成 G2 2025 领导者徽章、4.9/5 分综合口碑与数万真实开发者五星打分评测。',
    blockFilename: 'TestimonialsG2Ratings.vue',
    tags: ['Testimonials', 'Badges', 'StarRating', 'KeyboardBadge']
  },
  {
    id: 'testimonials-tweet-stream',
    name: 'TestimonialsTweetStream',
    title: '社交媒体实时推文互动流（Testimonials Tweet Stream）',
    suiteId: 'marketing-testimonials',
    category: 'Testimonials',
    description: '模拟 X / Twitter 真实互动推文卡片，带点赞表情回弹、转推与作者官方认证标识。',
    blockFilename: 'TestimonialsTweetStream.vue',
    tags: ['Testimonials', 'Twitter', 'Reactions']
  },
  {
    id: 'testimonials-case-metric',
    name: 'TestimonialsCaseMetric',
    title: '客户业务指标翻倍案例看板（Testimonials Case Metric）',
    suiteId: 'marketing-testimonials',
    category: 'Testimonials',
    description: '直观呈现客户使用后转化率提升 340%、首屏加载加速 8.6x 与资费降低 70% 的硬核对比。',
    blockFilename: 'TestimonialsCaseMetric.vue',
    tags: ['Testimonials', 'Metrics', 'StatCard', 'Sparkline']
  },
  {
    id: 'testimonials-map-pins',
    name: 'TestimonialsMapPins',
    title: '全球客户分布脉冲互动地图（Testimonials Map Pins）',
    suiteId: 'marketing-testimonials',
    category: 'Testimonials',
    description: '覆盖 140+ 国家的用户分布点阵，光标掠过地图锚点时浮动显示当地代表性团队。',
    blockFilename: 'TestimonialsMapPins.vue',
    tags: ['Testimonials', 'Map', 'InteractiveGlobe']
  },
  {
    id: 'testimonials-interactive-slider',
    name: 'TestimonialsInteractiveSlider',
    title: '触觉翻页用户好评画廊滑块（Testimonials Interactive Slider）',
    suiteId: 'marketing-testimonials',
    category: 'Testimonials',
    description: '带拖拽阻尼的评价卡片滑块，支持触控滑动翻阅、底部进度条与快捷翻页微按键。',
    blockFilename: 'TestimonialsInteractiveSlider.vue',
    tags: ['Testimonials', 'Slider', 'PaginationSlider', 'SwipeActions']
  },
  {
    id: 'testimonials-developer-stars',
    name: 'TestimonialsDeveloperStars',
    title: 'GitHub 50k+ Stars 开发者荣耀墙（Testimonials Developer Stars）',
    suiteId: 'marketing-testimonials',
    category: 'Testimonials',
    description: '开源社区开发者真实评语、GitHub 贡献者头像墙与实时 Stars 动态递增。',
    blockFilename: 'TestimonialsDeveloperStars.vue',
    tags: ['Testimonials', 'Developer', 'NumberTicker']
  },
  {
    id: 'testimonials-founder-letter',
    name: 'TestimonialsFounderLetter',
    title: '创始人公开信与签名承诺卡（Testimonials Founder Letter）',
    suiteId: 'marketing-testimonials',
    category: 'Testimonials',
    description: '高质感纸质折叠感信件，包含创始人亲笔草图手绘签名、初衷阐述与团队合影。',
    blockFilename: 'TestimonialsFounderLetter.vue',
    tags: ['Testimonials', 'Letter', 'FoldCard', 'InteractiveCanvas']
  },

  // ================= 5. AI Native Consoles (16 款) =================
  {
    id: 'ai-agent-workspace',
    name: 'AiAgentWorkspace',
    title: '多智能体思考链协同工作台（AI Agent Workspace）',
    suiteId: 'ai-consoles',
    category: 'AI-Console',
    description: '集成 Orchestrator / Researcher / Coder 三大智能体泳道、多步规划清单与执行甘特图。',
    blockFilename: 'AiAgentWorkspace.vue',
    tags: ['AI-Console', 'Agent', 'AgentTimeline', 'AgentPlan', 'ToolCall']
  },
  {
    id: 'ai-prompt-studio',
    name: 'AiPromptStudio',
    title: '企业级提示词演练与版本对比室（AI Prompt Studio）',
    suiteId: 'ai-consoles',
    category: 'AI-Console',
    description: '提示词温度/核采样滑块微调、多版本双向 Diff 差异高亮与 Token 增量实时统计。',
    blockFilename: 'AiPromptStudio.vue',
    tags: ['AI-Console', 'Prompt', 'PromptPlayground', 'PromptDiffViewer']
  },
  {
    id: 'ai-model-arena',
    name: 'AiModelArena',
    title: '双模型实时前向竞技场（AI Model Arena）',
    suiteId: 'ai-consoles',
    category: 'AI-Console',
    description: '双模型同屏幕并行推理打擂对决，实时统计首字延迟 TTFT、TPS 吞吐与输出质量打分。',
    blockFilename: 'AiModelArena.vue',
    tags: ['AI-Console', 'Arena', 'ModelBenchmarkMatrix', 'RadarChart']
  },
  {
    id: 'ai-rag-knowledge-explorer',
    name: 'AiRagKnowledgeExplorer',
    title: 'RAG 记忆拓扑与语义检索中心（AI RAG Knowledge Explorer）',
    suiteId: 'ai-consoles',
    category: 'AI-Console',
    description: '文档语义切片点阵聚类、Top-K 向量空间检索光锥与动态实体知识图谱穿透。',
    blockFilename: 'AiRagKnowledgeExplorer.vue',
    tags: ['AI-Console', 'RAG', 'KnowledgeGraph', 'VectorSearch']
  },
  {
    id: 'ai-voice-studio',
    name: 'AiVoiceStudio',
    title: '多模态语音交互与频谱监视台（AI Voice Studio）',
    suiteId: 'ai-consoles',
    category: 'AI-Console',
    description: '麦克风实时声音捕获、32 频段自适应共振柱与转录文本流式输出。',
    blockFilename: 'AiVoiceStudio.vue',
    tags: ['AI-Console', 'Voice', 'VoiceWaveform', 'AudioVisualizer']
  },
  {
    id: 'ai-diffusion-canvas',
    name: 'AiDiffusionCanvas',
    title: '扩散模型潜空间去噪渲染舱（AI Diffusion Canvas）',
    suiteId: 'ai-consoles',
    category: 'AI-Console',
    description: '高斯白噪点 -> 轮廓成型 -> 纹理细节 4 阶去噪步进展示，带采样步数滑块与提示词控制。',
    blockFilename: 'AiDiffusionCanvas.vue',
    tags: ['AI-Console', 'Diffusion', 'ImageGenerationProgress']
  },
  {
    id: 'ai-context-inspector',
    name: 'AiContextInspector',
    title: '上下文窗口 Token 内存矩阵（AI Context Inspector）',
    suiteId: 'ai-consoles',
    category: 'AI-Console',
    description: '大模型 200k 上下文矩阵高精映射，清晰标定 System / Tools / RAG / Chat 各自占用率。',
    blockFilename: 'AiContextInspector.vue',
    tags: ['AI-Console', 'Context', 'ContextWindow', 'PromptCache']
  },
  {
    id: 'ai-weights-probe-studio',
    name: 'AiWeightsProbeStudio',
    title: '神经网络张量量化与剪枝探针（AI Weights Probe Studio）',
    suiteId: 'ai-consoles',
    category: 'AI-Console',
    description: '8x8 多层权重矩阵热力图、FP16/INT8/INT4 动态量化切换与剪枝稀疏度计算。',
    blockFilename: 'AiWeightsProbeStudio.vue',
    tags: ['AI-Console', 'Weights', 'NeuralWeightsMatrix']
  },
  {
    id: 'ai-speculative-speedup',
    name: 'AiSpeculativeSpeedup',
    title: '推测解码双模型协同加速台（AI Speculative Speedup）',
    suiteId: 'ai-consoles',
    category: 'AI-Console',
    description: 'Draft 模型候选生成与 Target 大模型单次前向批量验证纠偏，展示实际 2.8x 加速比。',
    blockFilename: 'AiSpeculativeSpeedup.vue',
    tags: ['AI-Console', 'Speedup', 'SpeculativeDecoding']
  },
  {
    id: 'ai-moe-router-monitor',
    name: 'AiMoeRouterMonitor',
    title: 'MoE 混合专家模型门控路由监控（AI MoE Router Monitor）',
    suiteId: 'ai-consoles',
    category: 'AI-Console',
    description: '实时 Token 经由 Router 计算 Softmax 权重分发至专业化专家层的激活拓扑。',
    blockFilename: 'AiMoeRouterMonitor.vue',
    tags: ['AI-Console', 'MoE', 'MixtureOfExperts']
  },
  {
    id: 'ai-reasoning-tree-studio',
    name: 'AiReasoningTreeStudio',
    title: '树状思维链搜索与蒙特卡洛剪枝（AI Reasoning Tree Studio）',
    suiteId: 'ai-consoles',
    category: 'AI-Console',
    description: '深度思考树分支探索，低分枝叶虚化剪枝，最优推理链路高亮发光追踪。',
    blockFilename: 'AiReasoningTreeStudio.vue',
    tags: ['AI-Console', 'Reasoning', 'ReasoningTree', 'ThoughtAccordion']
  },
  {
    id: 'ai-safety-guardrails',
    name: 'AiSafetyGuardrails',
    title: '安全防护栏与敏感词拦截系统（AI Safety Guardrails）',
    suiteId: 'ai-consoles',
    category: 'AI-Console',
    description: '实时拦截越狱提示词、检测代码注入风险，高亮违规词并触发防御熔断。',
    blockFilename: 'AiSafetyGuardrails.vue',
    tags: ['AI-Console', 'Safety', 'CircuitBoardCard']
  },
  {
    id: 'ai-cost-sentinel',
    name: 'AiCostSentinel',
    title: 'AI 调用资费与 Token 预算哨兵（AI Cost Sentinel）',
    suiteId: 'ai-consoles',
    category: 'AI-Console',
    description: '多组织部门 API 调用配额消耗柱形图、暖缓存节省成本实时计算与超额预警。',
    blockFilename: 'AiCostSentinel.vue',
    tags: ['AI-Console', 'Cost', 'StatCard', 'PromptCache']
  },
  {
    id: 'ai-synapse-pulse-center',
    name: 'AiSynapsePulseCenter',
    title: '生物神经突触网络脉冲中心（AI Synapse Pulse Center）',
    suiteId: 'ai-consoles',
    category: 'AI-Console',
    description: '仿生突触脉冲放电频率监视、轴突电位传递动态拓扑与刺激阈值调节。',
    blockFilename: 'AiSynapsePulseCenter.vue',
    tags: ['AI-Console', 'Synapse', 'SynapticSignalGraph']
  },
  {
    id: 'ai-quantum-bloch-console',
    name: 'AiQuantumBlochConsole',
    title: '量子计算 Qubit 布洛赫球态矢空间（AI Quantum Bloch Console）',
    suiteId: 'ai-consoles',
    category: 'AI-Console',
    description: '三维量子比特叠加态概率幅矢量旋转、Hadamard / Pauli 门操作与波函数测量。',
    blockFilename: 'AiQuantumBlochConsole.vue',
    tags: ['AI-Console', 'Quantum', 'QuantumSuperposition']
  },
  {
    id: 'ai-stream-sniffer-station',
    name: 'AiStreamSnifferStation',
    title: '网络流式字节与十六进制剖析台（AI Stream Sniffer Station）',
    suiteId: 'ai-consoles',
    category: 'AI-Console',
    description: '长连接报文瀑布抓包、十六进制与 ASCII 双栏对照、数据校验与信道分流。',
    blockFilename: 'AiStreamSnifferStation.vue',
    tags: ['AI-Console', 'Sniffer', 'DataStreamProbe']
  },

  // ================= 6. SaaS Dashboards (16 款) =================
  {
    id: 'dashboard-executive-kpi',
    name: 'DashboardExecutiveKpi',
    title: '高管核心业务指标大盘（Dashboard Executive KPI）',
    suiteId: 'saas-dashboards',
    category: 'Dashboard',
    description: 'MRR、净收入留存率 NRR、获客成本 CAC 与嵌入式微趋势折线图一览看板。',
    blockFilename: 'DashboardExecutiveKpi.vue',
    tags: ['Dashboard', 'KPI', 'StatCard', 'Sparkline']
  },
  {
    id: 'dashboard-finops-cloud',
    name: 'DashboardFinopsCloud',
    title: 'FinOps 多云资费与成本优化中心（Dashboard FinOps Cloud）',
    suiteId: 'saas-dashboards',
    category: 'Dashboard',
    description: 'AWS / GCP / Azure 资源利用率横向对比、闲置算力回收预警与开销预测曲线。',
    blockFilename: 'DashboardFinopsCloud.vue',
    tags: ['Dashboard', 'FinOps', 'ComparisonMatrix', 'RadialGauge']
  },
  {
    id: 'dashboard-traffic-sentinel',
    name: 'DashboardTrafficSentinel',
    title: '实时网络流量与 DDoS 攻击哨兵（Dashboard Traffic Sentinel）',
    suiteId: 'saas-dashboards',
    category: 'Dashboard',
    description: '毫秒级 QPS 请求洪峰跳动、恶意 IP 自动拉黑防火墙与清洗流量仪表盘。',
    blockFilename: 'DashboardTrafficSentinel.vue',
    tags: ['Dashboard', 'Traffic', 'CyberpunkGridCard', 'GaugeMeter']
  },
  {
    id: 'dashboard-rbac-users',
    name: 'DashboardRbacUsers',
    title: '企业成员管理与 RBAC 权限矩阵（Dashboard RBAC Users）',
    suiteId: 'saas-dashboards',
    category: 'Dashboard',
    description: '成员列表、角色指派（Admin / Developer / Viewer）、就地重命名与操作抽屉。',
    blockFilename: 'DashboardRbacUsers.vue',
    tags: ['Dashboard', 'RBAC', 'InlineEdit', 'SlideOverDrawer']
  },
  {
    id: 'dashboard-webhooks-events',
    name: 'DashboardWebhooksEvents',
    title: 'Webhook 调度中心与事件分发流（Dashboard Webhooks Events）',
    suiteId: 'saas-dashboards',
    category: 'Dashboard',
    description: '事件投递成功率、失败重试队列、Payload JSON 预览与一键重放触发测试。',
    blockFilename: 'DashboardWebhooksEvents.vue',
    tags: ['Dashboard', 'Webhook', 'CodeWindow', 'ToastNotification']
  },
  {
    id: 'dashboard-cluster-health',
    name: 'DashboardClusterHealth',
    title: 'Kubernetes 节点集群健康拓扑（Dashboard Cluster Health）',
    suiteId: 'saas-dashboards',
    category: 'Dashboard',
    description: 'Pod 容器存活状态、CPU/内存饱和度热力图与节点驱逐警戒状态。',
    blockFilename: 'DashboardClusterHealth.vue',
    tags: ['Dashboard', 'K8s', 'VoxelGrid', 'StatCard']
  },
  {
    id: 'dashboard-database-queries',
    name: 'DashboardDatabaseQueries',
    title: '数据库慢查询分析与锁竞争（Dashboard Database Queries）',
    suiteId: 'saas-dashboards',
    category: 'Dashboard',
    description: 'SQL 执行耗时 P99 分布、全表扫描告警提示与索引命中率量表。',
    blockFilename: 'DashboardDatabaseQueries.vue',
    tags: ['Dashboard', 'Database', 'SegmentedMeter', 'Sparkline']
  },
  {
    id: 'dashboard-service-mesh',
    name: 'DashboardServiceMesh',
    title: '微服务网格调用链路拓扑图（Dashboard Service Mesh）',
    suiteId: 'saas-dashboards',
    category: 'Dashboard',
    description: '服务间 RPC 调用耗时连线流束、错误熔断节点红色呼吸与金丝雀发布权重。',
    blockFilename: 'DashboardServiceMesh.vue',
    tags: ['Dashboard', 'ServiceMesh', 'AnimatedBeam', 'MultiRegionFailover']
  },
  {
    id: 'dashboard-cdn-storage',
    name: 'DashboardCdnStorage',
    title: '分布式文件对象存储与 CDN 缓存（Dashboard CDN Storage）',
    suiteId: 'saas-dashboards',
    category: 'Dashboard',
    description: '存储桶容量占用刻度、边缘缓存命中率 98.4% 与大文件多线程切片上传舱。',
    blockFilename: 'DashboardCdnStorage.vue',
    tags: ['Dashboard', 'Storage', 'FileDropzone', 'RadialGauge']
  },
  {
    id: 'dashboard-transactions-ledger',
    name: 'DashboardTransactionsLedger',
    title: '交易支付清算流水账本（Dashboard Transactions Ledger）',
    suiteId: 'saas-dashboards',
    category: 'Dashboard',
    description: '多渠道交易入账流水、退款仲裁单据管理与全链路清算状态跟踪。',
    blockFilename: 'DashboardTransactionsLedger.vue',
    tags: ['Dashboard', 'Ledger', 'PaymentFlow', 'MoneyInput']
  },
  {
    id: 'dashboard-uptime-status',
    name: 'DashboardUptimeStatus',
    title: '公开服务可用性状态页与事故复盘（Dashboard Uptime Status）',
    suiteId: 'saas-dashboards',
    category: 'Dashboard',
    description: '全系统 90 天运行绿色心跳条、历史事故公告与邮件告警订阅。',
    blockFilename: 'DashboardUptimeStatus.vue',
    tags: ['Dashboard', 'Status', 'SegmentedControl', 'ProgressSteps']
  },
  {
    id: 'dashboard-notification-center',
    name: 'DashboardNotificationCenter',
    title: '通知中心与多通道告警抽屉（Dashboard Notification Center）',
    suiteId: 'saas-dashboards',
    category: 'Dashboard',
    description: '未读气泡计数、分类标签（Security / System / Billing）与快捷标为已读。',
    blockFilename: 'DashboardNotificationCenter.vue',
    tags: ['Dashboard', 'Notification', 'SlideOverDrawer', 'ToastNotification']
  },
  {
    id: 'dashboard-cicd-pipeline',
    name: 'DashboardCicdPipeline',
    title: '持续集成 CI/CD 流水线发布状态（Dashboard CI/CD Pipeline）',
    suiteId: 'saas-dashboards',
    category: 'Dashboard',
    description: '构建/测试/安全扫描/部署阶段状态流转、Commit 摘要与一键回滚。',
    blockFilename: 'DashboardCicdPipeline.vue',
    tags: ['Dashboard', 'CICD', 'ProgressSteps', 'HoldToConfirm']
  },
  {
    id: 'dashboard-security-heatmap',
    name: 'DashboardSecurityHeatmap',
    title: '安全漏洞扫描与威胁风险热力图（Dashboard Security Heatmap）',
    suiteId: 'saas-dashboards',
    category: 'Dashboard',
    description: 'CVE 漏洞严重程度分级、修复建议指南与依赖包供应链安全矩阵。',
    blockFilename: 'DashboardSecurityHeatmap.vue',
    tags: ['Dashboard', 'Security', 'AttentionHeatmap', 'CardHoverGlow']
  },
  {
    id: 'dashboard-workspace-switcher',
    name: 'DashboardWorkspaceSwitcher',
    title: '多租户工作空间与组织极速穿梭（Dashboard Workspace Switcher）',
    suiteId: 'saas-dashboards',
    category: 'Dashboard',
    description: '快捷搜索与一键切换不同租户环境、团队成员数与方案权限指示。',
    blockFilename: 'DashboardWorkspaceSwitcher.vue',
    tags: ['Dashboard', 'Workspace', 'CommandDialog', 'TreeBreadcrumb']
  },
  {
    id: 'dashboard-audit-timeline',
    name: 'DashboardAuditTimeline',
    title: '企业操作审计追溯时间轴（Dashboard Audit Timeline）',
    suiteId: 'saas-dashboards',
    category: 'Dashboard',
    description: '时间轴垂直排列操作者 IP、受影响资源、敏感变更 Diff 与快照比对。',
    blockFilename: 'DashboardAuditTimeline.vue',
    tags: ['Dashboard', 'Audit', 'PromptDiffViewer', 'AgentTimeline']
  },

  // ================= 7. Onboarding & Auth (10 款) =================
  {
    id: 'auth-wizard-steps',
    name: 'AuthWizardSteps',
    title: '多步骤交互式引导配置向导（Auth Wizard Steps）',
    suiteId: 'auth-onboarding',
    category: 'Auth',
    description: '账号注册 -> 团队命名 -> 角色技术栈选择 -> 邀请成员 4 步无缝过渡。',
    blockFilename: 'AuthWizardSteps.vue',
    tags: ['Auth', 'Wizard', 'ProgressSteps', 'TagInput']
  },
  {
    id: 'auth-split-showcase',
    name: 'AuthSplitShowcase',
    title: '左右分屏沉浸式登录注册舱（Auth Split Showcase）',
    suiteId: 'auth-onboarding',
    category: 'Auth',
    description: '左侧炫酷动效产品口碑引言，右侧极简免密/密码登录，带密码强度探针。',
    blockFilename: 'AuthSplitShowcase.vue',
    tags: ['Auth', 'Login', 'PasswordStrength', 'SparklesCore']
  },
  {
    id: 'auth-two-factor-card',
    name: 'AuthTwoFactorCard',
    title: '2FA 双重身份验证微键帽录入（Auth Two Factor Card）',
    suiteId: 'auth-onboarding',
    category: 'Auth',
    description: '6 位安全验证码独立输入框，敲击物理键盘下沉反馈与倒计时重新发送。',
    blockFilename: 'AuthTwoFactorCard.vue',
    tags: ['Auth', '2FA', 'KeyboardBadge', 'ShortcutRecorder']
  },
  {
    id: 'auth-team-invite',
    name: 'AuthTeamInvite',
    title: '团队成员协同批量邀请卡片（Auth Team Invite）',
    suiteId: 'auth-onboarding',
    category: 'Auth',
    description: '邮箱标签回车快速输入、角色批量配置与专属邀请链接一键复制。',
    blockFilename: 'AuthTeamInvite.vue',
    tags: ['Auth', 'Invite', 'TagInput', 'CopySnippet']
  },
  {
    id: 'auth-payment-entry',
    name: 'AuthPaymentEntry',
    title: '信用卡安全支付录入卡片（Auth Payment Entry）',
    suiteId: 'auth-onboarding',
    category: 'Auth',
    description: '高精拟真银行卡双面翻转，卡号动态分段输入与实时芯片流光反馈。',
    blockFilename: 'AuthPaymentEntry.vue',
    tags: ['Auth', 'Payment', 'PaymentFlow', 'MoneyInput']
  },
  {
    id: 'auth-password-recovery',
    name: 'AuthPasswordRecovery',
    title: '找回密码与安全链接核验流程（Auth Password Recovery）',
    suiteId: 'auth-onboarding',
    category: 'Auth',
    description: '邮箱输入验证、安全重置链接发送倒计时与新密码强度即时校验。',
    blockFilename: 'AuthPasswordRecovery.vue',
    tags: ['Auth', 'Recovery', 'PasswordStrength']
  },
  {
    id: 'auth-org-profile',
    name: 'AuthOrgProfile',
    title: '企业组织架构与行业属性选择（Auth Org Profile）',
    suiteId: 'auth-onboarding',
    category: 'Auth',
    description: '团队规模、行业领域磁吸药丸多选，带输入提示与专属推荐配置。',
    blockFilename: 'AuthOrgProfile.vue',
    tags: ['Auth', 'Profile', 'MagneticBadge']
  },
  {
    id: 'auth-oauth-providers',
    name: 'AuthOauthProviders',
    title: '第三方 OAuth 快捷登录胶囊组（Auth OAuth Providers）',
    suiteId: 'auth-onboarding',
    category: 'Auth',
    description: 'GitHub、Google、Apple、Microsoft 一键授权登录按钮组与触觉微震颤。',
    blockFilename: 'AuthOauthProviders.vue',
    tags: ['Auth', 'OAuth', 'ExpandingButtonGroup']
  },
  {
    id: 'auth-checklist-tracker',
    name: 'AuthChecklistTracker',
    title: '新用户上手任务打勾进度清单（Auth Checklist Tracker）',
    suiteId: 'auth-onboarding',
    category: 'Auth',
    description: '新手四项核心任务，点击操作就地打勾形变并累加整体激活进度条。',
    blockFilename: 'AuthChecklistTracker.vue',
    tags: ['Auth', 'Onboarding', 'ProgressSteps']
  },
  {
    id: 'auth-tour-spotlight',
    name: 'AuthTourSpotlight',
    title: '新功能交互式聚光引导气泡（Auth Tour Spotlight）',
    suiteId: 'auth-onboarding',
    category: 'Auth',
    description: '屏幕半透明遮罩与关键功能聚光挖孔高亮，悬浮引导气泡与下一步漫游。',
    blockFilename: 'AuthTourSpotlight.vue',
    tags: ['Auth', 'Tour', 'FloatingPopover']
  },

  // ================= 8. Footers & CTA (10 款) =================
  {
    id: 'footer-aurora-cta',
    name: 'FooterAuroraCta',
    title: '极光破晓流光大型行动号召横幅（Footer Aurora CTA）',
    suiteId: 'footers-cta',
    category: 'Footer',
    description: '顶部极光光锥天灯、星芒微粒闪烁与长按蓄力行动按钮，冲击力极强。',
    blockFilename: 'FooterAuroraCta.vue',
    tags: ['Footer', 'CTA', 'LampEffect', 'SparklesCore', 'HoldToConfirm']
  },
  {
    id: 'footer-split-newsletter',
    name: 'FooterSplitNewsletter',
    title: '分栏订阅资讯通讯行动条（Footer Split Newsletter）',
    suiteId: 'footers-cta',
    category: 'Footer',
    description: '左侧前沿技术周刊介绍与 50k+ 订阅者计数，右侧极简邮箱订阅输入。',
    blockFilename: 'FooterSplitNewsletter.vue',
    tags: ['Footer', 'Newsletter', 'ShimmerButton']
  },
  {
    id: 'footer-enterprise-mega',
    name: 'FooterEnterpriseMega',
    title: '企业级 4 列巨型超级页脚（Footer Enterprise Mega）',
    suiteId: 'footers-cta',
    category: 'Footer',
    description: '涵盖产品、解决方案、开发者生态与公司的完整 4 列导航架构与语言切换。',
    blockFilename: 'FooterEnterpriseMega.vue',
    tags: ['Footer', 'Mega', 'DropdownMenu']
  },
  {
    id: 'footer-developer-cli-cta',
    name: 'FooterDeveloperCliCta',
    title: '开发者快速开始 CTA（Footer Developer CLI CTA）',
    suiteId: 'footers-cta',
    category: 'Footer',
    description: '居中代码胶囊展示用 Vite 创建 Vue 3 项目的命令，可切换 pnpm / npm / bun，点击即可复制。',
    blockFilename: 'FooterDeveloperCliCta.vue',
    tags: ['Footer', 'CLI', 'CopySnippet']
  },
  {
    id: 'footer-cyber-grid',
    name: 'FooterCyberGrid',
    title: '赛博科技网格与运行状态页脚（Footer Cyber Grid）',
    suiteId: 'footers-cta',
    category: 'Footer',
    description: '赛博微暗格纹底衬，集成全网服务运行绿灯、系统版本与安全认证标记。',
    blockFilename: 'FooterCyberGrid.vue',
    tags: ['Footer', 'Cyber', 'DotPattern']
  },
  {
    id: 'footer-mobile-accordion',
    name: 'FooterMobileAccordion',
    title: '移动端手风琴自适应折叠页脚（Footer Mobile Accordion）',
    suiteId: 'footers-cta',
    category: 'Footer',
    description: '移动视口下各导航列优雅收拢为折叠手风琴，展开带平滑过渡与微触觉。',
    blockFilename: 'FooterMobileAccordion.vue',
    tags: ['Footer', 'Mobile', 'ThoughtAccordion']
  },
  {
    id: 'footer-app-downloads',
    name: 'FooterAppDownloads',
    title: 'App Store 与 Google Play 下载号召栏（Footer App Downloads）',
    suiteId: 'footers-cta',
    category: 'Footer',
    description: '深色高奢下载徽章按钮、二维码快速扫码下载与移动端评分背书。',
    blockFilename: 'FooterAppDownloads.vue',
    tags: ['Footer', 'Download', 'KeyboardBadge']
  },
  {
    id: 'footer-community-discord',
    name: 'FooterCommunityDiscord',
    title: '开源 Discord 与开发者社区集结令（Footer Community Discord）',
    suiteId: 'footers-cta',
    category: 'Footer',
    description: '实时在线开发者人数计数、Discord 专属邀请胶囊与 GitHub 贡献通道。',
    blockFilename: 'FooterCommunityDiscord.vue',
    tags: ['Footer', 'Community', 'NumberTicker']
  },
  {
    id: 'footer-legal-bottombar',
    name: 'FooterLegalBottombar',
    title: '合规隐私政策与 Cookie 许可底衬（Footer Legal Bottombar）',
    suiteId: 'footers-cta',
    category: 'Footer',
    description: '符合 GDPR 与 CCPA 规范的版权声明、服务条款、隐私政策与偏好设置。',
    blockFilename: 'FooterLegalBottombar.vue',
    tags: ['Footer', 'Legal', 'BreadcrumbTrail']
  },
  {
    id: 'footer-giant-wordmark',
    name: 'FooterGiantWordmark',
    title: '超大巨幅全息品牌标识页脚（Footer Giant Wordmark）',
    suiteId: 'footers-cta',
    category: 'Footer',
    description: '底部全幅横贯的大字号 AURA 品牌全息透光渐变轮廓，具有震撼的视觉落幕感。',
    blockFilename: 'FooterGiantWordmark.vue',
    tags: ['Footer', 'Brand', 'ShinyText', 'TextRevealCard']
  }
]

// 场景区块智能记忆与默认首项 ID 解析
const LAST_BLOCK_STORAGE_KEY = 'aura_last_block_id';

export const DEFAULT_BLOCK_ID = BLOCKS_DATA[0]?.id || 'hero-ai-studio';

export function getLastVisitedBlockId(): string {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem(LAST_BLOCK_STORAGE_KEY);
      if (saved && BLOCKS_DATA.some((b) => b.id === saved)) {
        return saved;
      }
    } catch {
      // ignore
    }
  }
  return DEFAULT_BLOCK_ID;
}

export function saveLastVisitedBlockId(id: string): void {
  if (typeof window !== 'undefined' && id) {
    try {
      localStorage.setItem(LAST_BLOCK_STORAGE_KEY, id);
    } catch {
      // ignore
    }
  }
}
