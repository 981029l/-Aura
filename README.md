# 🌌 Aura UI (Vue 3)

> **属于 Vue 3 的动效原子代码库 (Motion Primitives for Vue 3)**  
> 专为 **AI 官网、SaaS 营销页、酷炫个人主页** 打造。全面对标 React 生态的 Magic UI 与 Aceternity UI。

---

## 💡 为什么选择 Aura UI？

* **Copy & Paste（代码即用）**：采用类似 `shadcn` 的设计模式，不封装黑盒 npm 依赖。代码直接复制进你的项目 `src/components/ui/`，完全由你掌控与扩展；
* **单文件自包含（Zero-Config 杀手级特性）**：动画关键帧与流光路径由内联 CSS 变量与 `<style scoped>` 封装，**无需修改你的 `tailwind.config.js`，拷过去 100% 立即生效**；
* **真·明暗双模自适应（Clean Light & Deep Dark）**：全套动效原生兼顾纯白背景与暗黑科技风，在白色背景下文字与线条极度清晰，在暗色背景下流光溢彩；
* **60fps 满帧硬件加速**：基于原生 Canvas 2D 与 CSS 硬件加速，杜绝主线程卡顿与移动端掉帧；
* **TypeScript 完备**：所有 Props、插槽与事件均拥有清晰的 TS 类型定义。

---

## 📦 7 大主题套件 · 182 款动效原子与架构 Blocks 矩阵（182 款原子组件全量达成 🎉 Phase 1 100% 满编收官）

Aura UI 持续对标并全量用 Vue 3.5+ 与 Tailwind CSS 重构 Arc UI（182 组件 + 109 Blocks）：

### 1. 🎨 核心设计规范与动效预设（Design Tokens & Motion Presets）
* **多层空气感弥散阴影**：`--shadow-popover` 专为浮层与弹出菜单打造的自然环境漫反射阴影（含深色模式 1px 高光环）；
* **物理弹簧动效曲线**：`--ease-snappy` (按压点击), `--ease-smooth` (面板手风琴), `--ease-morph` (流体胶囊指示器)；
* **同心圆角律**：$R_{outer} = R_{inner} + Padding$。

### 2. 📝 表单与高阶输入套件 (`forms-inputs`)
* **`InlineEdit.vue`**：就地平滑无缝重命名微交互输入（保持排版节奏的原地重命名，Enter 确认并闪现保存态，Escape 还原上一次值）
* **`ShortcutRecorder.vue`**：快捷键热键录制器与冲突告警微键帽（直接敲击键盘组合键生成高拟真 3D 键帽，自带浏览器保留快捷键冲突检测与一键清空）
* **`ScrubInput.vue`**：Figma 风格水平微调拖拽输入（Shift 10x 加速，Alt 0.1x 微调，双击直接键入）
* **`PasswordStrength.vue`**：密码学强度动态计量仪表盘（4 档色彩平滑过渡，5 维规则清单动态打勾）
* **`MoneyInput.vue`**：金融级金额自适应缩放输入框（动态千分位，超长自适应缩放字号，快捷面额药丸）
* **`PhoneInput.vue`**：国际手机号国旗格式化输入框（国家区号下拉，自适应分段格式化，合法性对勾）
* **`TagInput.vue`**：弹性标签胶囊动态输入器（回车/逗号生成，退格删除，缩放进出场动效，上限约束）
* **`MentionInput.vue`**：@ 协作成员与智能体呼出输入框（键入 @ 呼出菜单，键盘光标导航，高亮精确注入）
* **`FileDropzone.vue`**：物理弹性拖拽投掷文件上传舱（拖放感应缩放悬停动画、多文件模拟上传进度流转、文件大小格式校验与实时清理）

### 3. ⚡ 触觉反馈与原子操作套件 (`tactile-actions`)
* **`ExpandingButtonGroup.vue`**：视差自适应胶囊膨胀按钮组（鼠标悬停单按钮平滑膨胀展开文字，邻近按钮优雅让位，点击就地确认打勾）
* **`FloatingButtonGroup.vue`**：流体弹簧平滑高亮浮动托盘按钮组（共享一块流体高亮底衬，随光标滑动平滑形变位移，激活态微弹簧阻尼固化）
* **`MagneticButton.vue`**：磁吸物理吸引悬浮按钮（光标靠近感应半径内非线性弹性吸引位移，内层图文视差偏移，移出柔和弹簧归位）
* **`ElasticSlider.vue`**：果冻弹性边界拉伸滑动条（极限两端橡皮筋拉伸变形，松手高阻尼回弹震荡，集成动态浮动数值指示气泡）
* **`CopySnippet.vue`**：极速复制代码胶囊（一键写入剪贴板，复制图标与对勾标记弹簧微形变，深浅色毛玻璃高质感底衬）
* **`KeyboardBadge.vue`**：拟物机械键盘键帽按键反馈（拥有上高光、倾斜斜角与底部立体投影，点击或敲击对应物理按键时具备真实的机械沉降反馈）
* **`ColorPickerMorph.vue`**：调色板流体色盘拾色器（选中色块弹性放大并叠加居中对勾，集成 Hex 代码展示与一键快速复制胶囊）
* **`StarRating.vue`**：高精度流体星星评分打分器（支持悬停实时预览、微弹簧缩放震颤反馈，点击选定时产生星芒微爆开光环，支持只读模式）
* **`HoldToConfirm.vue`**：长按蓄力物理确认按钮（防误触线性蓄力，60fps 进度填充，松手回退与成功态形变）
* **`ConfirmMorph.vue`**：就地渐变二次确认（原地展开确认/取消，零弹窗打断）
* **`IconMorph.vue`**：SVG 矢量平滑形变图标（Menu ↔ Close、Play ↔ Pause、Plus ↔ Minus 矢量插值）
* **`ActionButton.vue`**：高触感工具栏原子按钮（active:scale-90 阻尼，Tooltip 悬浮气泡，Badge 徽标）
* **`SplitButton.vue`**：发丝级分体复合操作按钮（主行动键 + 发丝分割线 + 伴随下拉菜单）
* **`Reactions.vue`**：物理回弹 Emoji 表情反应群（Spring 弹性放大，实时翻滚计数，追加自定义表情）
* **`SwipeActions.vue`**：移动端与触控板物理跟手滑动行操作（支持 PointerEvent 弹性左滑露出置顶/归档/删除操作按钮，阻尼回弹复位）
* **`ElasticSwitch.vue`**：果冻阻尼物理弹性形变开关（水平水滴状拉伸形变 Stretch & Squeeze，到达对侧产生高阻尼果冻震颤回弹与微图标渐变）
* **`MagneticBadge.vue`**：视差磁吸物理感应标签群（光标靠近感应半径产生非线性欧拉磁吸位移，内层图文反向视差偏移，支持多标签联动）
* **`GradientButton.vue`**：动态多色流体极光行动按钮（内部多色渐变自适应旋转流动、外部高斯虚化弥散环境光环、物理微按压）
* **`InteractiveCanvas.vue`**：触觉手绘草图签名画布（二次贝塞尔平滑笔触、压感微触觉、五色快选调色盘与一键 PNG 导出）
* **`ToggleSwitchMorph.vue`**：拟态流体微触觉形态开关（水滴拉伸与弹性回弹滑块、日夜微光/并行推理超频/硬件隔离三组特色开关形态展示）
* **`ElasticPullToRefresh.vue`**：物理弹性下拉阻尼刷新舱（对数非线性橡皮筋下拉阻尼、旋转加载器过渡、触觉释放判定与成功对勾动画反馈）
* **`HoldToProgress.vue`**：长按触觉阶段性蓄力按钮（长按物理阻尼充能确认、松手即刻泄压回弹、充能至 100% 触发成功执行锁存防误触）
* **`SliderTooltipHaptic.vue`**：触觉浮动气泡跟随滑块（触觉反馈气泡跟随滑块、吸附里程碑刻度磁性震动、液态水滴弹性数值气泡与温度/亮度/音量多模式无缝切换）
* **`NumberWheelStepper.vue`**：物理滚轮微触觉弹性步进计数器（拟物机械滚轮手感步进计数微交互、上下惯性滚轮翻滚与物理磁吸阻尼触觉刻度）
* **`SwipeToDismissPill.vue`**：跟手滑动吸附弹性滑块药丸（移动端与触控板跟手弹性滑动确认药丸、拖拽非线性阻尼形变与磁性滑道阈值吸附）
* **`PhysicsBalanceScale.vue`**：杠杆力矩平衡物理微交互天平（真实物理力矩杠杆天平平衡微交互、阻尼弹簧摆动平衡计算与增减配重平衡对齐）

### 4. 🤖 AI 原生与智能体套件 (`ai-native`)
* **`AgentLoop.vue`**：智能体感知-行动-验证自愈闭环（Observe -> Reason -> Act -> Verify 闭环循环，中心大模型大脑与 4 极工作站沿轨环流，自愈周期动态计数）
* **`AudioVisualizer.vue`**：AI 多模态音频频谱可视化仪（柱状频谱跳动、多重正弦流体声波叠加与语音共鸣流光球三模式拟态，支持麦克风交互监听与语音状态机切换）
* **`KnowledgeGraph.vue`**：AI 记忆拓扑与动态多维知识图谱（力导向节点分布拟态、能量流动连线、点击相邻实体交互下钻与记忆语义权重度量）
* **`ImageGenerationProgress.vue`**：扩散模型去噪渲染渐进加载舱（潜空间随机高斯白噪点 -> 粗粒度轮廓解冻 -> 细节材质纹理 -> 4K 锐化超清，集成采样器 HUD 看板与动态参数展示）
* **`RadarChart.vue`**：大模型多维认知能力评测雷达（6 维能力评测多边形覆盖、双模型胜率对比、顶点悬停高亮联动）
* **`VoiceWaveform.vue`**：AI 实时语音流式交互仪（32 频段自适应振荡柱、动态分贝感知计算、流式/监听/推理模式切换与麦克风增益调节）
* **`PromptPlayground.vue`**：提示词调试交互演练场（温度/核采样/最大 Token 滑块微调、系统与用户提示词编辑、动态 Token 计数与流式推理输出）
* **`EmbeddingVisualizer.vue`**：高维向量嵌入降维投影仪（t-SNE / UMAP / PCA 空间拓扑聚类、余弦相似度最近邻激光连线与语义检索定位）
* **`AttentionHeatmap.vue`**：多头自注意力交互热力图（Transformer 6×6 多头相关性矩阵、交叉十字标尺高亮与 Softmax 权重探针）
* **`AgentTimeline.vue`**：多智能体协同运行甘特图与事件溯源（共享时间轴回放、跨智能体泳道 Orchestrator/Researcher/Coder、思考/工具调用/交接状态跨度条，支持播放头实时滑动与详情探针下钻）
* **`MixtureOfExperts.vue`**：MoE 混合专家模型动态路由与门控网络（Token 经由门控网络 Router Gating 计算 Softmax 激活权重，稀疏分发至 Top-2 专业化专家层 Code/Math/Vision/Discourse 并加权汇聚）
* **`SpeculativeDecoding.vue`**：推测解码双模型协同加速（轻量级 Draft 模型以极低延迟推测 K 个候选 Token，大模型单次前向并行完成全部验证，被接受 Token 批量上屏，被拒绝 Token 瞬时纠偏重采样）
* **`PromptCache.vue`**：提示词前缀缓存命中与成本节省动态计量（长系统前缀与文档知识库暖缓存命中，高达 90% 资费减免与 8.6x 首字生成延迟 TTFT 优化对比，支持实时切换缓存模式验证收益）
* **`ToolCall.vue`**：智能体工具调用全状态交互卡片（对标 Claude 3.5 / MCP 协议，支持运行中脉冲微光、成功/失败状态形变、敏感写操作人工审批 Approve/Reject 与就地重试）
* **`AgentPlan.vue`**：智能体动态多步执行规划清单（展示任务目标、整体完成度动态进度条、多步步骤清单与优先级标记，支持交互点击状态流转与子任务抽屉）
* **`ContextWindow.vue`**：大模型上下文窗口分布矩阵（200 单元格高精映射，直观映射 System Prompt、Tools、RAG、Messages 与可用容量，80% Compaction 压缩警戒线）
* **`VectorSearch.vue`**：高维向量空间嵌入检索与 Top-K 语义拓扑（2.5D 透视向量空间检索，高维点云主题聚类，Query 探针波纹与余弦相似度 Top-3 聚光拓扑连线）
* **`ReasoningTree.vue`**：树状思维链搜索与蒙特卡洛剪枝（Tree-of-Thought / MCTS 深度思考可视化，低分分支虚化剪枝 Pruning，优胜推理链路高亮发光追踪）
* **`DataFlow.vue`**：多源流式数据管道与实时吞吐核心（多源数据输入，中央 360° 旋转双环处理引擎与实时 TPS 计数，右侧多渠道汇入）
* **`AgentStatus.vue`**：智能体执行状态指示器（思考/运行/工具调用/成功/失败 5 态流光矩阵）
* **`TypewriterTerminal.vue`**：终端打字机流式输出器（模拟 AI 对话逐 Token 流式生成，光标呼吸闪烁）
* **`PromptInput.vue`**：大模型对话指令高阶输入框（聚焦顶部流光，模型选择胶囊，Shift+Enter 换行）
* **`ThoughtAccordion.vue`**：推理思维链折叠手风琴（对标 DeepSeek R1 / o1 深度思考流）
* **`ModelBenchmarkMatrix.vue`**：AI 大模型评测矩阵基准榜（多模型六维能力图谱、吞吐量延迟实时对决与多模型评测参数切换）
* **`PromptDiffViewer.vue`**：AI 提示词双向差异对比器（AI 提示词多版本双向对比与语义差异高亮查看器、单栏合并/双栏并行分屏与 Token 增量统计）
* **`DataStreamProbe.vue`**：实时网络数据流探针与报文剖析仪（AI 代理多信道流式报文探针与网络吞吐监控仪、实时十六进制 Hex 字节流瀑布与报文解码）
* **`NeuralWeightsMatrix.vue`**：神经网络量化权重热力探针（神经网络 FP16/INT8/INT4 量化多层权重矩阵热力探针、交互式权重稀疏度探针与剪枝截断）
* **`SynapticSignalGraph.vue`**：生物神经突触脉冲拓扑网络（仿生神经元突触脉冲传递拓扑网络、轴突动作电位放电、突触小泡神经递质流转与刺激阈值触发）

### 5. 🧭 交互与高阶导航套件 (`interactive-nav`)
* **`ExpandingSearch.vue`**：极简搜索图标流体膨胀输入框（点击紧凑圆点图标平滑伸展为宽搜索胶囊，集成实时自动补全下拉推荐面板）
* **`MultiRegionFailover.vue`**：多地域容灾与高可用智能流量调度（全局 Anycast LB 流量智能调度，Region A 发生故障时连续 3 次探针告警智能熔断，流量毫秒级零丢包平滑重定向至备用 Region B）
* **`PaymentFlow.vue`**：金融级卡片支付清算全链路流转（买家触碰刷卡 -> 支付网关风控与 Token 化 -> 银联/Visa 清算网络路由 -> 发卡行 3DS 授权核验 -> 商户全额入账与回执开具，金额芯片全程流光跟随）
* **`CommandDialog.vue`**：macOS Spotlight / Raycast 仿生快捷命令浮层（全局 ⌘K / Ctrl+K 快捷呼出，模糊搜索分组匹配，键盘上下导航，Esc 退出）
* **`SlideOverDrawer.vue`**：平滑弹力侧滑抽屉面板（左/右侧双向滑入，遮罩高斯虚化，自定义 Header/Body/Footer 插槽，ESC 快速关闭）
* **`FloatingPopover.vue`**：微动浮动气泡浮层（多层环境扩散弥散阴影 `--shadow-popover`，精细对齐微三角，Outside Click 智能闭合）
* **`ContextMenu.vue`**：桌面级右键上下文菜单（光标实时跟随，视口屏幕边缘碰撞自动贴边防溢出，快捷键徽标指示，危险操作项高亮）
* **`ToastNotification.vue`**：物理堆叠浮动消息吐司（Success / Error / Warning / Info 四态样式，自动倒计时，悬停暂停，多通道物理堆叠）
* **`DropdownMenu.vue`**：高触感选项下拉菜单（单选 Radio、复选 Checkbox、分组标题、分割线、键盘上下箭头导航与全套深浅色自适应）
* **`Sparkline.vue`**：微型趋势折线/面积图（纯 SVG 贝塞尔曲线平滑插值路径，光标悬停十字指示线与数值浮层）
* **`RadialGauge.vue`**：科技仪表盘弧形进度量表（240° 环形大开口渐变笔触，弧端高亮圆点与三级警示阈值自动变色）
* **`ProgressSteps.vue`**：物理弹簧阶段进度步骤器（已完成节点弹性打勾形变，活跃节点呼吸光环，连接线渐变流动）
* **`SegmentedControl.vue`**：物理弹簧滑动高亮分段选择器（iOS / macOS 风格指示器底衬，键盘左右方向键漫游切换）
* **`BreadcrumbTrail.vue`**：折叠与多层弥散高亮面包屑导航（超限时中间自动收纳为气泡选单，高阶弥散阴影）
* **`FloatingActionMenu.vue`**：悬浮折叠展开 FAB 阶梯操作菜单（中心加号 135° 平滑旋转形变，子按钮延时弹簧放射展开）
* **`NavbarHover.vue`**：视口自适应平滑跟随悬浮子菜单（对标 Stripe / Vercel 顶栏，光标移动自适应尺寸与指针平滑滑动）
* **`PaginationSlider.vue`**：物理翻页滑块与平滑页码快速滚动器（常规页码序列 + 触感水平滑动条快速大跨度翻选）
* **`CircularProgressNav.vue`**：环形微交互阅读进度导航指示器（SVG 矢量环形动态笔触，内置一键回到顶部与数值展示）
* **`FluidTabs.vue`**：流体物理悬停分段标签页（Ghost 悬停幽灵指示器与 Spring 激活胶囊）
* **`Dock.vue`**：苹果 macOS 风格放大鱼眼 Dock 栏（余弦物理函数计算近邻图标放大曲率）
* **`ImageCompare.vue`**：高帧率图像对比滑块（平滑水平拖拽视口裁切）
* **`AnimatedBeam.vue`**：SVG 动态发光流束拓扑连线（贝塞尔曲线粒子沿路径定向流动）
* **`HoverCard.vue`**：悬停视差微卡片与人员名片（带防闪烁延迟进入/离开、popover 弥散阴影、用户信息快照与关注快捷操作）
* **`BottomSheet.vue`**：移动端/桌面级阻尼抽屉底衬浮层（手势拖拽阻尼下滑、peek / half / full 三档位自动吸附与高斯模糊遮罩）
* **`MorphingDialog.vue`**：流体物理形变卡片展开模态框（对标 iOS App Store / macOS 原地平滑无缝展开至大模态卡片、高斯虚化遮罩淡入、逆向弹性收缩还原）
* **`GlowMenu.vue`**：苹果风拟态流体微光胶囊导航（双层漫反射扩散光晕，激活项 Spring 弹性胶囊过渡动画与环境发光）
* **`GaugeMeter.vue`**：全景半圆物理指针弧形度量表（180° 全景弧形渐变刻度，物理阻尼指针弹性摆动，超频示警与预设切换）
* **`AudioPlayer.vue`**：拟态流体微波波形音频播放器（36 根声波柱高亮流转、任意波形点击跳转 Seek、播放/暂停弹簧微动效与快进快退控制）
* **`SegmentedMeter.vue`**：多段式能耗与容量刻度计（分立式 24 段 LED 硬件感应、三段阈值警戒、脉冲高频压力测试模式与手调刻度）
* **`MagneticTabs.vue`**：动态流体磁吸药丸选项卡（欧拉弹性物理吸附滑块、悬停磁性预判吸附、状态徽标与多套视图联动切屏）
* **`ScrollProgressPill.vue`**：动态页面阅读进度药丸胶囊（环形 SVG 动态进度度量、当前章节流转微导航、回到顶部微触觉弹簧按钮）
* **`RadialMenu.vue`**：环形扇区径向轮盘微菜单（极坐标扇形发射微导航、5 环形动作按钮弹性展开与触觉脉冲聚焦）
* **`MacDockNavigation.vue`**：Mac 风格流体鱼眼缩放底栏（macOS 经典高斯模糊毛玻璃拟态底栏、高斯鱼眼邻近缩放插值、未读通知红点与弹性弹跳点击动效）
* **`TreeBreadcrumb.vue`**：树状层级多分支折叠面包屑（多分支树状目录多级联动面包屑导航、同级分支下拉切换与长路径折叠气泡展开）
* **`CapsuleTabBar.vue`**：浮动极光胶囊指示分段选项卡（极简自适应极光胶囊微交互选项卡、共享平滑高斯弹性位移衬底与角标动态计数）
* **`FluidDrawerModal.vue`**：流体惯性抽屉与平滑手势回弹模态（流体惯性多档位吸附抽屉模态框、支持手势拖拽下滑、顶部把手形变与高斯模糊遮罩）
* **`RadialClusterMenu.vue`**：环形簇状径向辐射微交互菜单（极坐标多层环形簇状辐射展开菜单、物理弹簧离心力轨迹展开、悬停高亮导向与微气泡交互）

### 6. 🌐 空间与 3D 纵深套件 (`space-3d`)
* **`Globe3D.vue`**：Canvas 交互式数字孪生旋转地球仪（基于三维正射投影，鼠标惯性拖拽旋转，大陆点阵疏密光斑、全球主要城市脉冲波纹坐标锚点与双向大圆飞线流光）
* **`Vortex.vue`**：引力涡旋时空曲率粒子背景（对标 Aceternity UI 黑洞涡旋，向心引力场与角速度衰减，鼠标实时位移扰动引力中心，流光拖尾）
* **`SparklesCore.vue`**：星芒晶体闪烁粒子矩阵（微型发光晶体升腾漂浮，明暗无级呼吸插值，自由调节粒子密度、色彩与尺寸）
* **`GravityCards.vue`**：重力与物理碰撞掉落卡片沙盒（原生欧拉数值积分微型物理引擎，自由落体加速度，刚体摩擦与反弹弹性恢复，支持抓取蓄力甩出）
* **`PerspectiveGrid.vue`**：无限延伸动态地平线 3D 透视网格隧道（CSS 3D Perspective + 旋转投影，流光网格沿 Z 轴无级向前推进，激光霞光消隐光晕）
* **`FluidCursor.vue`**：流体微粒光标跟随与粘性拖尾（移动速度感应动态扩散，自然发光与平滑衰减消融，水波涟漪质感）
* **`InteractiveParticles.vue`**：鼠标磁吸粒子星空背景（Canvas 2D 60fps 动态引力与临近发光连线）
* **`RetroGrid.vue`**：3D 复古赛博透视网格（透视倾斜平移网格，明暗线条自适应）
* **`DotPattern.vue`**：矢量科技波点底纹（纯 SVG Pattern，聚光灯局部漫射光晕）
* **`Meteors.vue`**：绚烂流星划过夜空动画（随机倾斜轨迹与微光尾迹）
* **`Ripple.vue`**：同心圆声波涟漪扩展（由内向外匀速扩散淡出扩散波）
* **`LampEffect.vue`**：极光破晓天灯空间光锥（双向对称锥形渐变与天花板科技聚光）
* **`FlickeringGrid.vue`**：科技方格微光闪烁矩阵（Canvas 动态随机透明度呼吸）
* **`OrbitLogos.vue`**：同心公转轨道阵列（多层嵌套圆形轨道匀速公转与图标保持水平）
* **`GravityWell.vue`**：时空曲率引力陷阱微网格（Canvas 2D 原生数学推导光标附近的非线性引力透镜弯曲与点击同心冲击波物理扰动）
* **`DotGrid.vue`**：透镜凸透光标波纹点阵（Canvas 2D 原生数学计算，当光标掠过点阵时产生光学凸透镜膨胀效果，点击产生同心光斑波纹扩散）
* **`Cube3D.vue`**：CSS 3D 机械魔方与多面视窗（纯 CSS 3D 硬件加速，鼠标拖拽 3D 惯性旋转与自动巡航，6 面多维硬件监控指标映射与快捷回正面定位）
* **`NoiseBackground.vue`**：程序化动态分形噪点极光背景（基于纯 SVG feTurbulence 分形噪点生成器，结合多层漂移彩色极光光斑，呈现电影级质感底纹）
* **`CircularCarousel.vue`**：3D 环形圆柱转盘无限轮播（CSS 3D 柱面透镜投影，支持手势平滑旋转，中央卡片自动高亮放大）
* **`ParticleMorph.vue`**：粒子几何星座插值形变（数百微粒在同心球环、三维金字塔、双螺旋与高维点阵之间平滑形变，支持空间排斥力场）
* **`ParallaxScroll.vue`**：多列视差画廊瀑布流（3 列差速错位物理视差，滚动内部视窗体验 1.0x / 1.4x / 0.8x 阶梯差速位移）
* **`WaterfallGrid.vue`**：动态交错瀑布流媒体网格（多列响应式错落画廊、悬停暗角微景深、标签分类切换与模态灯箱预览）
* **`LiquidBlob.vue`**：物理粘滞流体变形气泡（SVG Gooey 粘滞滤镜融合、空间形变弹性气泡、鼠标引力流体与粘滞度微调）
* **`InfiniteCanvas.vue`**：无限平移缩放节点画布（Figma 级无限漫游画布、鼠标拖映画布自由平移、滚轮无级缩放 40%~200%、右下角 Minimap HUD 视口框追踪）
* **`InteractiveGlobe.vue`**：交互式 3D 拓扑网络球体（纯 SVG 矢量 3D 正射投影网络球体、经纬网格旋转自旋、全球机房节点脉冲定位与 RTT 时延探测）
* **`VoxelGrid.vue`**：等轴测 3D 体素阶梯网格（2.5D 等轴测地形起伏网格、7x7 阶梯体素方块、鼠标水波扩散高度调制与色温渐变）
* **`Tunnel3D.vue`**：深邃三维时空隧道穿梭（深邃三维时空折跃穿梭视差隧道、同心多边形无限扩张、光速曲速超空间切换与鼠标全向视角偏转）
* **`BlackHoleSingularity.vue`**：时空奇点引力吸积盘 3D 空间（天体物理奇点引力透镜与吸积盘动态旋转空间、高引力光线弯曲与相对论多普勒频移着色）
* **`QuantumSuperposition.vue`**：量子叠加态布洛赫球面 3D 拓扑（量子计算量子比特 Qubit 态矢空间、交互式 Bloch 球面经纬网格与波函数坍缩）
* **`SolarSystemOrbits.vue`**：行星公转椭圆轨道 3D 动力学系统（开普勒行星运动椭圆轨道 3D 动力学模拟、多星体公转周期加速与悬停轨道聚焦）

### 7. 🎴 流光卡片与微光边框套件 (`borders-cards`)
* **`StatCard.vue`**：SaaS 核心 KPI 动态度量卡片（整合主标题、大字号平滑计数器、环比涨跌徽标与嵌入式 Mini Sparkline）
* **`ComparisonMatrix.vue`**：特性对比矩阵动态表格（推荐方案高亮浮起与多层发光阴影，整行悬停高亮追踪，弹性微动效对勾）
* **`GradientTracing.vue`**：神经突触电路脉冲寻迹流束发光卡片（科技芯片多支路导轨电路，脉冲流光束多向穿梭流动，悬停光束物理加速 ×2.5）
* **`CardHoverGlow.vue`**：多层环境光阻尼边界发光卡片（卡片表面精准聚光灯与背部同色彩环境漫射光晕非线性阻尼偏移）
* **`CodeWindow.vue`**：macOS 拟态开发者代码视窗（红黄绿原生按钮、多文件标签切换、行号流光追踪与一键复制代码展开反馈）
* **`FoldCard.vue`**：三维拟物折叠手册卡片（CSS 3D rotateX 物理纸质手风琴折页，折痕处漫射阴影与透视缩放）
* **`HolographicCard.vue`**：三维全息彩虹折射卡片（CSS 3D 透视动态倾角、全息七彩折射图层与高斯光斑实时漫射、金属光泽徽章质感）
* **`CardSpotlightBorder.vue`**：光标跟随动态聚光边框卡片（光标靠近时精准点亮外框流光边缘、卡片内衬漫射柔和光晕、深邃质感）
* **`GlassmorphismCard.vue`**：多层拟态磨砂毛玻璃叠层卡片（多层高斯模糊 backdrop-blur-2xl 穿透透镜、液态光斑漫射与高光边缘切线）
* **`GlowingCard.vue`**：流光渐变边框卡片（底层 360° 旋转弥散光斑，顶层 1px 细微发丝发光轮廓贴合容器）
* **`GlassCard.vue`**：物理磨砂亚克力玻璃卡片（16px 硬件加速环境背板虚化，180% 鲜明色彩透光，顶部物理倒角高光线）
* **`SpotlightCard.vue`**：光标跟随径向聚光灯卡片（表面与 1px 发丝边框同步高亮追踪光标相对坐标）
* **`TiltCard.vue`**：3D 视差倾斜悬浮卡片（CSS 3D 变换 rotateX/rotateY + 动态全息反光遮罩 + 子元素 translateZ 空间纵深）
* **`CardStack.vue`**：Tinder / iOS 风格层叠滑动堆叠卡片（手势划动与旋转丢弃阻尼，层级自适应缩放）
* **`NoiseCard.vue`**：胶片质感噪点卡片（纯 SVG feTurbulence 动态渲染分形噪点，0 外部图片依赖）
* **`BorderBeam.vue`**：平滑矢量跑马流光渐变边框（无缝贴合圆角容器，双向渐变光斑）
* **`BentoGrid.vue` & `BentoCard.vue`**：苹果风多维科技便当盒网格布局（局部 Spotlight 跟随光晕）
* **`CircuitBoardCard.vue`**：高精芯片印刷电路板流光卡片（高密度微电子集成电路印刷板卡片、动态流光导线脉冲、呼吸式芯片核心处理器 CPU 与多节点数据总线互联交互）
* **`CyberpunkGridCard.vue`**：赛博朋克霓虹网格切角卡片（赛博机能科技卡片、切角机甲装饰 chamfered clip-path、高频动态霓虹微光呼吸与数据角标）
* **`HologramBadgeCard.vue`**：全息激光防伪徽章与金属反光卡片（物理金属光泽全息防伪徽章卡片、光标视差动态折射彩虹光谱漫射与 VIP 身份认证）
* **`HolographicPrismBorder.vue`**：全息三棱镜色散发光边框卡片（动态全息三棱镜光学色散边框卡片、光标视差色散彩虹衍射条纹与微金属拉丝底衬）
* **`HologramGlitchCard.vue`**：全息故障扫描破损视差卡片（动态全息电磁破损流光卡片、带高频横向切片错位撕裂、RGB 双通道色散与光标视差全息反光）

### 8. ✨ 文字与动态排版套件 (`kinetic-typography`)
* **`TextGenerateEffect.vue`**：逐词平滑高斯解冻流式生成（文本逐字从高斯模糊与透明度中平滑聚焦解冻，如 AI 思维涌现，带错峰阶梯延迟）
* **`WordRotate.vue`**：核心关键词 3D 纵深翻转轮播（SaaS 营销页 Hero 标题利器，核心词沿 3D X 轴带弹性阻尼循环翻滚交替）
* **`FlipWords.vue`**：流体多词交替字母级翻牌动效（逐字字母级 3D 翻动进入退出，模拟机械翻牌屏质感，柔和弹性缩放与微模糊收拢）
* **`HyperText.vue`**：黑客帝国/赛博乱码解密乱序字符变换文字（高频随机字符在毫秒内闪烁迭代并逐字锁定为目标明文，鼠标悬停重新触发解密）
* **`GradualSpacing.vue`**：字间距弹性凝聚与扩散渐变文字（大片片头级字距聚合，文字从负字距与高斯模糊向标准排版优雅聚拢）
* **`TextRevealCard.vue`**：光标划过遮罩刮刮乐式文字破晓显影卡片（光标探照灯显影，圆形遮罩挖空表层暗色字迹并透光显影底层流光文字）
* **`AnimatedCounter.vue`**：平滑插值渐变计数器（基于 requestAnimationFrame 非线性指数衰减缓动，千分位与涨跌动态着色）
* **`ShinyText.vue`**：金属微光横向划过文字（纯 CSS 背景裁切高光移动）
* **`ShimmerButton.vue`**：360° 微光流转科技行动按钮（锥形旋转渐变高光与触感微缩放）
* **`Marquee.vue`**：无限平滑无缝跑马灯（双轨 Flex 无缝衔接，悬停平滑暂停）
* **`NumberTicker.vue`**：平滑毫秒数值翻滚计数器（基于平滑缓动函数的数字实时递增）
* **`NumberRoll.vue`**：机械立体滚轮数字翻转器（独立滚轮 0-9 物理柱面透镜旋转，上下内渐变遮罩阴影，支持货币前缀、千分位逗号与步进微调飞速翻滚）
* **`GlitchText.vue`**：RGB 多通道色散故障文字（纯 CSS 伪元素双通道错位分离、错位切片剪裁与悬停高频脉冲扰动）
* **`TypewriterScramble.vue`**：赛博乱码解密逐字打字机（未敲定前经历高频随机乱码字符解密跳动后锁定为明文，配合闪烁光标与短语循环）
* **`TextTicker.vue`**：大盘行情双轨滚动看板（双轨无缝平滑跑马灯、左右羽化遮罩、实时涨跌色彩徽标与悬停暂停）
* **`MatrixRain.vue`**：黑客帝国数字代码雨（量子字符流穿梭、Canvas 2D 高帧率渲染、鼠标引力扰动与多主题色系）
* **`DecryptedText.vue`**：情报特工文本悬停解密跳动（量子字符流逆向推演解码、45ms 逐位锁存为目标明文、鼠标悬停触发与多短语循环切换）
* **`WaveformText.vue`**：物理正弦波形起伏文字（字符按正弦方程谐波平滑垂直波动、振幅与频率滑块调节、鼠标触碰局部冲击波脉冲扰动）
* **`PerspectiveText.vue`**：三维空间透视折叠文本（立面双折角三维透视文字排版、CSS 3D perspective 跟随鼠标方位倾斜与立面阴影）
* **`GlitchScrambleText.vue`**：赛博故障闪烁电磁破损文字（赛博风格字符随机乱码矩阵解码过渡、RGB 色散通道红青偏色撕裂与高频 CRT 扫描线）
* **`MatrixCodeRainDrop.vue`**：字符水滴打散重组文字（动态字符流自顶向下凝聚水滴滴落并碰撞飞溅重组为目标标题、鼠标悬停斥力微扰）
* **`TypewriterCursorGlow.vue`**：高光呼吸光标流式打字文字（打字机平滑逐字打印过渡、伴随微发光动态光标呼吸跟随与打字音频节拍模拟）
* **`KineticScaleText.vue`**：字母物理微弹簧字重形变排版（可变字体 variable font 物理字重与字宽微弹簧形变交互、光标临近排斥/吸引）
* **`LiquidTextMorph.vue`**：液态水滴融化形变过渡排版（SVG Gooey 粘性滤镜流体文字熔融形变、多组单词字符像水滴熔融交汇并重组为新标题）

### 9. 🏛️ 复合场景营销 Blocks 与 Hero 模板套件 (`marketing-blocks`)
* **`HeroModern.vue`**：AI 原生现代官网首屏 Hero 模板（集成公告发光药丸、3D 关键词纵深轮播标题、代码片段快速复制胶囊、双行动按钮与全球顶级客户跑马灯徽标墙）
* **`FeatureBentoBlock.vue`**：苹果风多维便当盒特性矩阵（跨列大卡片搭载 1px 细微跑马渐变发光流线 BorderBeam，搭配 GPU 硬件加速、TypeScript 与双模自适应特性中卡）
* **`PricingSectionBlock.vue`**：SaaS 阶梯方案与弹性计费区块（集成按月/按年平滑分段滑动切换器、3 档阶梯卡片，最热门方案具备流光高亮浮起与专属推荐徽标，特性清单带打勾微动效）
* **`TestimonialMarqueeBlock.vue`**：双轨无缝滚动用户好评墙（双轨反向无缝跑马灯好评墙，评价卡片集成亚克力毛玻璃质感，包含用户头像、职位、Verified 真实蓝标以及 5 星评分 StarRating）
* **`CtaBannerBlock.vue`**：极光破晓科技行动号召横幅（结合顶部极光破晓光锥、星芒粒子闪烁 SparklesCore 与 360° 旋转发光边框 BorderBeam，集成长按蓄力确认按钮与文档直达按钮）
* **`FaqAccordionBlock.vue`**：交互折叠手风琴常见问题解答（现代 SaaS 官网高频必备模块，折叠项带平滑高度与透明度过渡，加号图标 45° 旋转为叉号，支持单项互斥或多项自由展开）

---

## 🛠️ 快速上手

### 1. 业务项目中安装基础依赖

将动效组件复制到你的 Vue 3 项目后，仅需安装轻量工具库：

```bash
npm install @vueuse/core clsx tailwind-merge
# 或者
pnpm add @vueuse/core clsx tailwind-merge
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

### 3. 直接复制代码即用

例如从 `src/components/ui/BorderBeam.vue` 复制单文件至你的项目，随后在页面中引入：

```vue
<script setup lang="ts">
import BorderBeam from '@/components/ui/BorderBeam.vue'
</script>

<template>
  <div class="relative h-64 w-80 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 flex flex-col items-center justify-center">
    <h3 class="text-xl font-bold">AI 计算卡片</h3>
    <BorderBeam :size="180" :duration="8" color-from="#38bdf8" color-to="#a855f7" />
  </div>
</template>
```

---

## 🏛️ Phase 2：全量 109 款场景业务 Blocks 组合矩阵（8 大业务套件 · 100% 满编收官 🎉）

Aura UI 现已全量交付 109 款业务级场景 Blocks，与 182 款原子动效组件遵循 Component First 原则深度组装，覆盖现代全栈 Web 开发全流程：

### 1. 🚀 首屏营销套件 (`marketing-hero` · 15 款全量)
* `HeroAiStudio.vue`：全息光环与浮动 AI 算力中枢卡片矩阵
* `HeroDashboardPreview.vue`：SaaS 控制台拟真浮层与发光边框视差
* `HeroTerminalDeveloper.vue`：开发者极客终端代码高亮与自动打字机流
* `HeroAuroraGradient.vue`：大型极光渐变背景与呼吸光晕
* `HeroParticleNebula.vue`：星云微粒星空粒子背景与全景交互
* `HeroVideoModal.vue`：视频演示悬浮弹窗与流光播放按键
* `HeroRetroGrid.vue`：复古 80s 赛博透视网格地平线
* `HeroSplitForm.vue`：左文右表单极速开户转化舱
* `HeroMinimalTypographic.vue`：瑞士极简排版与巨幅文字动效
* `Hero3dGlobe.vue`：全球化 3D 旋转交互地球与航线网络
* `HeroBentoInteractive.vue`：交互式 Bento 便当盒高亮网格群
* `HeroFintechCard.vue`：金融支付卡片双面悬停与清算流水
* `HeroMobileApp.vue`：移动端 App 双机悬浮透视展示
* `HeroWeb3Node.vue`：Web3 区块链验证节点网络与质押状态
* `HeroEnterpriseCloud.vue`：企业级混合云多集群指挥中枢

### 2. ⚡ 核心特性矩阵套件 (`marketing-features` · 18 款全量)
* `FeaturesBentoGrid.vue`：多尺寸自适应 Bento 特性网格
* `FeaturesTabbedMockup.vue`：标签页切换产品核心功能沙盒
* `FeaturesGlobalEdgeMap.vue`：全球边缘节点与 CDN 延迟探针
* `FeaturesModelComparison.vue`：多大模型能力横向胜率对比
* `FeaturesStickyStory.vue`：长滚动分步粘性故事线画廊
* `FeaturesSpotlightMatrix.vue`：光标跟随聚光灯高亮卡片组
* `FeaturesWorkflowCanvas.vue`：可视化自动化工作流节点拖拽
* `FeaturesMultimodalAudio.vue`：多模态语音交互与声波频谱
* `FeaturesTeamCollaboration.vue`：多光标实时协作与多人头衔
* `FeaturesDeveloperSdk.vue`：多语言 SDK 标签页代码切换
* `FeaturesSecurityShield.vue`：企业级安全加密与合规认证盾
* `FeaturesVectorSearch.vue`：高维向量语义检索与聚光拓扑
* `FeaturesAtomicPlayground.vue`：交互式原子组件微调沙盒
* `FeaturesResponsiveDevices.vue`：桌面/平板/移动端实时自适应
* `FeaturesStreamThroughput.vue`：零延迟 WebSocket 流式吞吐核心
* `FeaturesAgentSelfHeal.vue`：自愈型智能体闭环运行拓扑
* `FeaturesDualThemeShowcase.vue`：真·明暗双模实时拖拽对比舞台
* `FeaturesSlaReliability.vue`：99.999% 高可用可靠性承诺墙

### 3. 💳 定价策略矩阵套件 (`marketing-pricing` · 12 款全量)
* `PricingTieredCards.vue`：Starter/Pro/Enterprise 三阶梯方案卡
* `PricingBillingToggle.vue`：月付/年付平滑滑动折扣定价
* `PricingSliderCalculator.vue`：滑块式用户量动态计费计算器
* `PricingMatrixChecklist.vue`：全量特性打勾对比矩阵表格
* `PricingSingleLifetime.vue`：单卡终生授权与早鸟特惠
* `PricingCreditTokenTier.vue`：AI Token 预付积分档位换算
* `PricingTeamSeats.vue`：团队席位阶梯加购计数器
* `PricingDeveloperFreemium.vue`：开发者免费版与用量限制卡
* `PricingEnterpriseQuote.vue`：企业专属定制方案与私有部署询价
* `PricingCurrencySwitcher.vue`：多国货币自适应汇率切换
* `PricingGuaranteeBanner.vue`：30 天无理由退款信任背书
* `PricingAddonMatrix.vue`：增值服务与算力包模块加购

### 4. 🌟 客户评价与背书套件 (`marketing-testimonials` · 12 款全量)
* `TestimonialsMarqueeWall.vue`：双行双向无缝无限滚动评价墙
* `TestimonialsMasonryCards.vue`：瀑布流卡片用户证言排版
* `TestimonialsSingleSpotlight.vue`：单客户领袖沉浸式大卡聚光
* `TestimonialsVideoModalGrid.vue`：视频专访与客户对话缩略图
* `TestimonialsLogoMarquee.vue`：全球 500 强企业 Logo 跑马灯
* `TestimonialsG2Ratings.vue`：G2 / Product Hunt 权威徽章评分
* `TestimonialsTweetStream.vue`：社交媒体推文流式卡片聚合
* `TestimonialsCaseMetric.vue`：客户增长量化数据指标成果卡
* `TestimonialsMapPins.vue`：全球客户分布发光地理引线
* `TestimonialsInteractiveSlider.vue`：可拖拽客户故事滑动轮播
* `TestimonialsDeveloperStars.vue`：GitHub Star 增长与贡献者墙
* `TestimonialsFounderLetter.vue`：创始人手写信与亲笔签名展区

### 5. 🤖 AI 原生控制台与工作台 (`ai-consoles` · 16 款全量)
* `AiAgentWorkspace.vue`：多智能体编排与执行流工作台
* `AiPromptStudio.vue`：提示词多轮调优与超参数微调台
* `AiModelArena.vue`：双模型盲测匿名对决竞技场
* `AiRagKnowledgeExplorer.vue`：RAG 向量文档切片与知识检索
* `AiVoiceStudio.vue`：语音合成声音克隆与实时声波录制
* `AiDiffusionCanvas.vue`：图像扩散生成降噪渐进渲染台
* `AiContextInspector.vue`：大模型上下文 Token 窗口检查器
* `AiWeightsProbeStudio.vue`：神经网络权重分布与稀疏度热力
* `AiSpeculativeSpeedup.vue`：推测解码双模型协同加速监控台
* `AiMoeRouterMonitor.vue`：MoE 门控网络与专家负载均衡监控
* `AiReasoningTreeStudio.vue`：MCTS 树状思维链搜索与剪枝演练
* `AiSafetyGuardrails.vue`：AI 内容合规与越狱安全防御盾
* `AiCostSentinel.vue`：大模型 API Token 消耗与成本哨兵
* `AiSynapsePulseCenter.vue`：仿生神经突触脉冲拓扑放电中枢
* `AiQuantumBlochConsole.vue`：量子比特 Bloch 球态叠加态控制台
* `AiStreamSnifferStation.vue`：数据流嗅探与十六进制报文解码站

### 6. 📊 SaaS 仪表盘与管理后台 (`saas-dashboards` · 16 款全量)
* `DashboardExecutiveKpi.vue`：高管全局 KPI 仪表盘与 ARR 大盘
* `DashboardFinopsCloud.vue`：多云成本账单优化与 FinOps 分析
* `DashboardTrafficSentinel.vue`：边缘流量吞吐与全球延迟监控
* `DashboardRbacUsers.vue`：用户权限 RBAC 角色与访问审计
* `DashboardWebhooksEvents.vue`：事件总线 Webhook 发送重试队列
* `DashboardClusterHealth.vue`：Kubernetes 集群节点健康度监控
* `DashboardDatabaseQueries.vue`：数据库慢查询分析与锁竞争
* `DashboardServiceMesh.vue`：微服务网格调用链路拓扑图
* `DashboardCdnStorage.vue`：分布式文件对象存储与 CDN 缓存
* `DashboardTransactionsLedger.vue`：交易支付清算流水账本
* `DashboardUptimeStatus.vue`：公开服务可用性状态页与事故复盘
* `DashboardNotificationCenter.vue`：通知中心与多通道告警抽屉
* `DashboardCicdPipeline.vue`：持续集成 CI/CD 流水线发布状态
* `DashboardSecurityHeatmap.vue`：安全漏洞扫描与威胁风险热力图
* `DashboardWorkspaceSwitcher.vue`：多租户工作空间与组织穿梭
* `DashboardAuditTimeline.vue`：企业操作审计追溯时间轴

### 7. 🛡️ 引导与认证流程套件 (`auth-onboarding` · 10 款全量)
* `AuthWizardSteps.vue`：多步骤交互式引导配置向导
* `AuthSplitShowcase.vue`：左右分屏沉浸式登录注册舱
* `AuthTwoFactorCard.vue`：2FA 双重身份验证微键帽录入
* `AuthTeamInvite.vue`：团队成员协同批量邀请卡片
* `AuthPaymentEntry.vue`：拟真 3D 信用卡双面翻转收银台
* `AuthPasswordRecovery.vue`：找回密码与安全链接核验流程
* `AuthOrgProfile.vue`：企业组织架构与行业属性选择
* `AuthOauthProviders.vue`：第三方 OAuth 快捷登录胶囊组
* `AuthChecklistTracker.vue`：新用户上手任务打勾进度清单
* `AuthTourSpotlight.vue`：新功能交互式聚光引导漫游气泡

### 8. 📐 页脚导航与行动号召 (`footers-cta` · 10 款全量)
* `FooterAuroraCta.vue`：极光破晓流光大型行动号召横幅
* `FooterSplitNewsletter.vue`：分栏订阅资讯通讯行动条
* `FooterEnterpriseMega.vue`：企业级 4 列巨型超级页脚
* `FooterDeveloperCliCta.vue`：开发者终端命令极速起步 CTA
* `FooterCyberGrid.vue`：赛博科技网格与运行状态页脚
* `FooterMobileAccordion.vue`：移动端手风琴自适应折叠页脚
* `FooterAppDownloads.vue`：App Store 与 Google Play 下载号召栏
* `FooterCommunityDiscord.vue`：开源 Discord 与开发者社区集结令
* `FooterLegalBottombar.vue`：合规隐私政策与 Cookie 许可底衬
* `FooterGiantWordmark.vue`：超大巨幅全息品牌标识页脚

---

## 🚀 本地开发与部署指南

### 本地启动展示站

```bash
# 1. 安装依赖
pnpm install

# 2. 启动本地高保真开发服务器
pnpm dev
# 访问 http://localhost:3000
```

### 服务器一键部署

1. **执行静态打包**：
   ```bash
   pnpm build
   ```
   构建产物输出至 `dist` 目录。

2. **部署至云服务器**：
   将 `dist` 文件夹上传至云服务器（如 `/www/aura-ui/dist`）。

3. **Nginx 极速代理配置**：
   参考项目根目录下的 `nginx.conf`，将配置注入 `/etc/nginx/conf.d/aura-ui.conf` 并重启 Nginx：
   ```nginx
   server {
       listen 80;
       server_name your-domain.com; # 或服务器公网IP

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

## 📄 开源协议

本项目采用 [MIT License](LICENSE) 开源。欢迎自由使用于商业项目或个人作品集！
