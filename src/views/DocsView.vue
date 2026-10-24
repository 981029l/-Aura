<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ComponentPreview from '@/components/showcase/ComponentPreview.vue'

// 导入待预览的真实组件
import BorderBeam from '@/components/ui/BorderBeam.vue'
import BentoGrid from '@/components/ui/BentoGrid.vue'
import BentoCard from '@/components/ui/BentoCard.vue'
import InteractiveParticles from '@/components/ui/InteractiveParticles.vue'
import RetroGrid from '@/components/ui/RetroGrid.vue'
import DotPattern from '@/components/ui/DotPattern.vue'
import ShinyText from '@/components/ui/ShinyText.vue'
import ShimmerButton from '@/components/ui/ShimmerButton.vue'
import Marquee from '@/components/ui/Marquee.vue'
import Meteors from '@/components/ui/Meteors.vue'
import Ripple from '@/components/ui/Ripple.vue'
import NumberTicker from '@/components/ui/NumberTicker.vue'
import AnimatedBeam from '@/components/ui/AnimatedBeam.vue'
import LampEffect from '@/components/ui/LampEffect.vue'
import FlickeringGrid from '@/components/ui/FlickeringGrid.vue'
import Dock from '@/components/ui/Dock.vue'
import OrbitLogos from '@/components/ui/OrbitLogos.vue'
import ImageCompare from '@/components/ui/ImageCompare.vue'
import AgentStatus from '@/components/ui/AgentStatus.vue'
import TypewriterTerminal from '@/components/ui/TypewriterTerminal.vue'
import PromptInput from '@/components/ui/PromptInput.vue'
import ThoughtAccordion from '@/components/ui/ThoughtAccordion.vue'
import FluidTabs from '@/components/ui/FluidTabs.vue'
import HoldToConfirm from '@/components/ui/HoldToConfirm.vue'
import ConfirmMorph from '@/components/ui/ConfirmMorph.vue'
import IconMorph from '@/components/ui/IconMorph.vue'
import ActionButton from '@/components/ui/ActionButton.vue'
import SplitButton from '@/components/ui/SplitButton.vue'
import Reactions from '@/components/ui/Reactions.vue'
import ScrubInput from '@/components/ui/ScrubInput.vue'
import PasswordStrength from '@/components/ui/PasswordStrength.vue'
import MoneyInput from '@/components/ui/MoneyInput.vue'
import PhoneInput from '@/components/ui/PhoneInput.vue'
import TagInput from '@/components/ui/TagInput.vue'
import MentionInput from '@/components/ui/MentionInput.vue'
import SegmentedControl from '@/components/ui/SegmentedControl.vue'
import BreadcrumbTrail from '@/components/ui/BreadcrumbTrail.vue'
import FloatingActionMenu from '@/components/ui/FloatingActionMenu.vue'
import NavbarHover from '@/components/ui/NavbarHover.vue'
import PaginationSlider from '@/components/ui/PaginationSlider.vue'
import CircularProgressNav from '@/components/ui/CircularProgressNav.vue'
import GlowingCard from '@/components/ui/GlowingCard.vue'
import GlassCard from '@/components/ui/GlassCard.vue'
import SpotlightCard from '@/components/ui/SpotlightCard.vue'
import TiltCard from '@/components/ui/TiltCard.vue'
import CardStack, { type CardStackItem }

 from '@/components/ui/CardStack.vue'
import NoiseCard from '@/components/ui/NoiseCard.vue'
import Sparkline from '@/components/ui/Sparkline.vue'
import AnimatedCounter from '@/components/ui/AnimatedCounter.vue'
import RadialGauge from '@/components/ui/RadialGauge.vue'
import ProgressSteps from '@/components/ui/ProgressSteps.vue'
import ComparisonMatrix, { type PlanTier, type FeatureItem }

 from '@/components/ui/ComparisonMatrix.vue'
import StatCard from '@/components/ui/StatCard.vue'
import CommandDialog from '@/components/ui/CommandDialog.vue'
import SlideOverDrawer from '@/components/ui/SlideOverDrawer.vue'
import FloatingPopover from '@/components/ui/FloatingPopover.vue'
import ContextMenu, { type ContextMenuItem }

 from '@/components/ui/ContextMenu.vue'
import ToastNotification, { type ToastItem }

 from '@/components/ui/ToastNotification.vue'
import DropdownMenu, { type DropdownItem }

 from '@/components/ui/DropdownMenu.vue'
import Globe3D from '@/components/ui/Globe3D.vue'
import Vortex from '@/components/ui/Vortex.vue'
import SparklesCore from '@/components/ui/SparklesCore.vue'
import GravityCards from '@/components/ui/GravityCards.vue'
import PerspectiveGrid from '@/components/ui/PerspectiveGrid.vue'
import FluidCursor from '@/components/ui/FluidCursor.vue'
import TextGenerateEffect from '@/components/ui/TextGenerateEffect.vue'
import WordRotate from '@/components/ui/WordRotate.vue'
import FlipWords from '@/components/ui/FlipWords.vue'
import HyperText from '@/components/ui/HyperText.vue'
import GradualSpacing from '@/components/ui/GradualSpacing.vue'
import TextRevealCard from '@/components/ui/TextRevealCard.vue'
import MagneticButton from '@/components/ui/MagneticButton.vue'
import ElasticSlider from '@/components/ui/ElasticSlider.vue'
import CopySnippet from '@/components/ui/CopySnippet.vue'
import KeyboardBadge from '@/components/ui/KeyboardBadge.vue'
import ColorPickerMorph from '@/components/ui/ColorPickerMorph.vue'
import StarRating from '@/components/ui/StarRating.vue'
import HeroModern from '@/components/ui/HeroModern.vue'
import FeatureBentoBlock from '@/components/ui/FeatureBentoBlock.vue'
import PricingSectionBlock from '@/components/ui/PricingSectionBlock.vue'
import TestimonialMarqueeBlock from '@/components/ui/TestimonialMarqueeBlock.vue'
import CtaBannerBlock from '@/components/ui/CtaBannerBlock.vue'
import FaqAccordionBlock from '@/components/ui/FaqAccordionBlock.vue'
import ToolCall from '@/components/ui/ToolCall.vue'
import AgentPlan from '@/components/ui/AgentPlan.vue'
import ContextWindow from '@/components/ui/ContextWindow.vue'
import VectorSearch from '@/components/ui/VectorSearch.vue'
import ReasoningTree from '@/components/ui/ReasoningTree.vue'
import DataFlow from '@/components/ui/DataFlow.vue'
import AgentTimeline from '@/components/ui/AgentTimeline.vue'
import MixtureOfExperts from '@/components/ui/MixtureOfExperts.vue'
import SpeculativeDecoding from '@/components/ui/SpeculativeDecoding.vue'
import PromptCache from '@/components/ui/PromptCache.vue'
import MultiRegionFailover from '@/components/ui/MultiRegionFailover.vue'
import PaymentFlow from '@/components/ui/PaymentFlow.vue'
import ExpandingButtonGroup from '@/components/ui/ExpandingButtonGroup.vue'
import FloatingButtonGroup from '@/components/ui/FloatingButtonGroup.vue'
import InlineEdit from '@/components/ui/InlineEdit.vue'
import ShortcutRecorder from '@/components/ui/ShortcutRecorder.vue'
import ExpandingSearch from '@/components/ui/ExpandingSearch.vue'
import AgentLoop from '@/components/ui/AgentLoop.vue'
import GravityWell from '@/components/ui/GravityWell.vue'
import DotGrid from '@/components/ui/DotGrid.vue'
import FileDropzone from '@/components/ui/FileDropzone.vue'
import SwipeActions from '@/components/ui/SwipeActions.vue'
import HoverCard from '@/components/ui/HoverCard.vue'
import BottomSheet from '@/components/ui/BottomSheet.vue'
import AudioVisualizer from '@/components/ui/AudioVisualizer.vue'
import KnowledgeGraph from '@/components/ui/KnowledgeGraph.vue'
import ImageGenerationProgress from '@/components/ui/ImageGenerationProgress.vue'
import MorphingDialog from '@/components/ui/MorphingDialog.vue'
import GradientTracing from '@/components/ui/GradientTracing.vue'
import NumberRoll from '@/components/ui/NumberRoll.vue'
import Cube3D from '@/components/ui/Cube3D.vue'
import GlowMenu from '@/components/ui/GlowMenu.vue'
import ElasticSwitch from '@/components/ui/ElasticSwitch.vue'
import NoiseBackground from '@/components/ui/NoiseBackground.vue'
import CardHoverGlow from '@/components/ui/CardHoverGlow.vue'
import GlitchText from '@/components/ui/GlitchText.vue'
import MagneticBadge from '@/components/ui/MagneticBadge.vue'
import CodeWindow from '@/components/ui/CodeWindow.vue'
import CircularCarousel from '@/components/ui/CircularCarousel.vue'
import TypewriterScramble from '@/components/ui/TypewriterScramble.vue'
import GaugeMeter from '@/components/ui/GaugeMeter.vue'
import ParticleMorph from '@/components/ui/ParticleMorph.vue'
import RadarChart from '@/components/ui/RadarChart.vue'
import AudioPlayer from '@/components/ui/AudioPlayer.vue'
import ParallaxScroll from '@/components/ui/ParallaxScroll.vue'
import FoldCard from '@/components/ui/FoldCard.vue'
import GradientButton from '@/components/ui/GradientButton.vue'
import TextTicker from '@/components/ui/TextTicker.vue'
import VoiceWaveform from '@/components/ui/VoiceWaveform.vue'
import WaterfallGrid from '@/components/ui/WaterfallGrid.vue'
import LiquidBlob from '@/components/ui/LiquidBlob.vue'
import MatrixRain from '@/components/ui/MatrixRain.vue'
import SegmentedMeter from '@/components/ui/SegmentedMeter.vue'
import InteractiveCanvas from '@/components/ui/InteractiveCanvas.vue'
import PromptPlayground from '@/components/ui/PromptPlayground.vue'
import MagneticTabs from '@/components/ui/MagneticTabs.vue'
import HolographicCard from '@/components/ui/HolographicCard.vue'
import DecryptedText from '@/components/ui/DecryptedText.vue'
import InfiniteCanvas from '@/components/ui/InfiniteCanvas.vue'
import ToggleSwitchMorph from '@/components/ui/ToggleSwitchMorph.vue'
import EmbeddingVisualizer from '@/components/ui/EmbeddingVisualizer.vue'
import ScrollProgressPill from '@/components/ui/ScrollProgressPill.vue'
import CardSpotlightBorder from '@/components/ui/CardSpotlightBorder.vue'
import WaveformText from '@/components/ui/WaveformText.vue'
import InteractiveGlobe from '@/components/ui/InteractiveGlobe.vue'
import ElasticPullToRefresh from '@/components/ui/ElasticPullToRefresh.vue'
import AttentionHeatmap from '@/components/ui/AttentionHeatmap.vue'
import RadialMenu from '@/components/ui/RadialMenu.vue'
import GlassmorphismCard from '@/components/ui/GlassmorphismCard.vue'
import PerspectiveText from '@/components/ui/PerspectiveText.vue'
import VoxelGrid from '@/components/ui/VoxelGrid.vue'
import HoldToProgress from '@/components/ui/HoldToProgress.vue'
import ModelBenchmarkMatrix from '@/components/ui/ModelBenchmarkMatrix.vue'
import MacDockNavigation from '@/components/ui/MacDockNavigation.vue'
import CircuitBoardCard from '@/components/ui/CircuitBoardCard.vue'
import GlitchScrambleText from '@/components/ui/GlitchScrambleText.vue'
import Tunnel3D from '@/components/ui/Tunnel3D.vue'
import SliderTooltipHaptic from '@/components/ui/SliderTooltipHaptic.vue'
import PromptDiffViewer from '@/components/ui/PromptDiffViewer.vue'
import TreeBreadcrumb from '@/components/ui/TreeBreadcrumb.vue'
import CyberpunkGridCard from '@/components/ui/CyberpunkGridCard.vue'
import MatrixCodeRainDrop from '@/components/ui/MatrixCodeRainDrop.vue'
import BlackHoleSingularity from '@/components/ui/BlackHoleSingularity.vue'
import NumberWheelStepper from '@/components/ui/NumberWheelStepper.vue'
import DataStreamProbe from '@/components/ui/DataStreamProbe.vue'
import CapsuleTabBar from '@/components/ui/CapsuleTabBar.vue'
import HologramBadgeCard from '@/components/ui/HologramBadgeCard.vue'
import TypewriterCursorGlow from '@/components/ui/TypewriterCursorGlow.vue'
import QuantumSuperposition from '@/components/ui/QuantumSuperposition.vue'
import SwipeToDismissPill from '@/components/ui/SwipeToDismissPill.vue'
import NeuralWeightsMatrix from '@/components/ui/NeuralWeightsMatrix.vue'
import FluidDrawerModal from '@/components/ui/FluidDrawerModal.vue'
import HolographicPrismBorder from '@/components/ui/HolographicPrismBorder.vue'
import KineticScaleText from '@/components/ui/KineticScaleText.vue'
import SolarSystemOrbits from '@/components/ui/SolarSystemOrbits.vue'
import PhysicsBalanceScale from '@/components/ui/PhysicsBalanceScale.vue'
import SynapticSignalGraph from '@/components/ui/SynapticSignalGraph.vue'
import RadialClusterMenu from '@/components/ui/RadialClusterMenu.vue'
import HologramGlitchCard from '@/components/ui/HologramGlitchCard.vue'
import LiquidTextMorph from '@/components/ui/LiquidTextMorph.vue'
import SplitFlapDisplay from '@/components/ui/SplitFlapDisplay.vue'
import EyeTracking from '@/components/ui/EyeTracking.vue'
import MagnetLines from '@/components/ui/MagnetLines.vue'
import DitherGradient from '@/components/ui/DitherGradient.vue'
import FlightStatusCard from '@/components/ui/FlightStatusCard.vue'
import AsciiEffect from '@/components/ui/AsciiEffect.vue'
import TextRepel from '@/components/ui/TextRepel.vue'
import LetterCascade from '@/components/ui/LetterCascade.vue'
import PixelImageTrail from '@/components/ui/PixelImageTrail.vue'
import DitheredLogo from '@/components/ui/DitheredLogo.vue'
import LiquidChrome from '@/components/ui/LiquidChrome.vue'
import SilkAurora from '@/components/ui/SilkAurora.vue'
import SpectralRibbon from '@/components/ui/SpectralRibbon.vue'
import ClosingPlasma from '@/components/ui/ClosingPlasma.vue'
import AuroraFlow from '@/components/ui/AuroraFlow.vue'
import PrismGradient from '@/components/ui/PrismGradient.vue'
import GrainGradient from '@/components/ui/GrainGradient.vue'
import AnimatedGradient from '@/components/ui/AnimatedGradient.vue'
import WebGLLiquid from '@/components/ui/WebGLLiquid.vue'
import FisheyeInfiniteGrid from '@/components/ui/FisheyeInfiniteGrid.vue'
import PixelCanvas from '@/components/ui/PixelCanvas.vue'
import CursorDrivenParticleTypography from '@/components/ui/CursorDrivenParticleTypography.vue'
import CaseStudyFlipStack from '@/components/ui/CaseStudyFlipStack.vue'
import Spiral3dSlider from '@/components/ui/Spiral3dSlider.vue'
import ScrollChoreography from '@/components/ui/ScrollChoreography.vue'
import ScrollSplitCard from '@/components/ui/ScrollSplitCard.vue'
import ScrollTiltedGrid from '@/components/ui/ScrollTiltedGrid.vue'
import InfiniteImageField from '@/components/ui/InfiniteImageField.vue'
import LiquidGlassCarousel from '@/components/ui/LiquidGlassCarousel.vue'
import WheelCarousel from '@/components/ui/WheelCarousel.vue'
import StickyScrollCards from '@/components/ui/StickyScrollCards.vue'
import LayeredStack from '@/components/ui/LayeredStack.vue'
import LensClock from '@/components/ui/LensClock.vue'
import HeroGeometric from '@/components/ui/HeroGeometric.vue'
import MusicPlayer from '@/components/ui/MusicPlayer.vue'
import NewsletterBookshelf from '@/components/ui/NewsletterBookshelf.vue'
import MacKeyboard from '@/components/ui/MacKeyboard.vue'
import GithubCalendar from '@/components/ui/GithubCalendar.vue'
import Signature from '@/components/ui/Signature.vue'
import FlippingWordSwap from '@/components/ui/FlippingWordSwap.vue'
import AnnotatedText from '@/components/ui/AnnotatedText.vue'
import KineticTextReveal from '@/components/ui/KineticTextReveal.vue'
import CollectionSurfer from '@/components/ui/CollectionSurfer.vue'
import ImageTrail from '@/components/ui/ImageTrail.vue'
import ScrollBasedVelocity from '@/components/ui/ScrollBasedVelocity.vue'
import HoverTransition from '@/components/ui/HoverTransition.vue'
import DitherPrismHero from '@/components/ui/DitherPrismHero.vue'
import OrbitCardStack from '@/components/ui/OrbitCardStack.vue'
import ImageRippleEffect from '@/components/ui/ImageRippleEffect.vue'
import RippleTransition from '@/components/ui/RippleTransition.vue'

import {
  COMPONENTS_DATA,
  COMPONENT_CATEGORIES,
  getLastVisitedDocId,
  saveLastVisitedDocId,
}

 from '@/data/components'

import {
  Cpu,
  Zap,
  ArrowRight,
  Sparkles,
  Terminal,
  Mic,
  User,
  Database,
  Activity,
  Home,
  Compass,
  Folder,
  Settings,
  Bell,
  Globe,
  Bot,
  Layers,
  Code2,
  Pin,
  Bookmark,
  CloudUpload,
  Rocket,
  Sliders,
  Film,
  Search,
  X,
  ChevronDown,
}

 from 'lucide-vue-next'
import { ref, watch }

 from 'vue'

const beamContainerRef = ref<HTMLDivElement | null>(null)
const beamUserRef = ref<HTMLDivElement | null>(null)
const beamAiRef = ref<HTMLDivElement | null>(null)
const beamDbRef = ref<HTMLDivElement | null>(null)

const route = useRoute()
const mobileSidebarOpen = ref(false)

const currentId = computed(() => {
  return (route.params.id as string) || getLastVisitedDocId()
}

)

watch(
  () => currentId.value,
  (id) => {
    mobileSidebarOpen.value = false
    if (id) {
      saveLastVisitedDocId(id)
    }


  }

,
  { immediate: true }


)

const currentComponent = computed(() => {
  return (
    COMPONENTS_DATA.find((c) => c.id === currentId.value) ||
    COMPONENTS_DATA[0]
  )
}

)

const currentCategory = computed(() => {
  return COMPONENT_CATEGORIES.find((c) => c.id === currentComponent.value?.category)
}

)



function getCategoryIcon(catId: string) {
  switch (catId) {
    case 'Cards':
      return Layers
    case 'Button':
      return Zap
    case 'Navigation':
      return Compass
    case 'Interactive':
      return Sliders
    case 'AI':
      return Bot
    case 'Effect':
      return Globe
    case 'Text':
      return Sparkles
    case 'Form':
      return Sliders
    case 'Background':
      return Film
    case 'Layout':
      return Layers
    default:
      return Sparkles
  }}



// 侧边栏快速搜索关键词
const searchQuery = ref('')

// 侧边栏大类折叠状态管理
const collapsedCategories = ref<Record<string, boolean>>({}

)

function toggleCategory(catId: string) {
  collapsedCategories.value[catId] = !collapsedCategories.value[catId]
}



// 搜索时不折叠（直接展示匹配项）；无搜索时遵循折叠偏好
const isCategoryCollapsed = (catId: string) => {
  if (searchQuery.value.trim()) return false
  return !!collapsedCategories.value[catId]
}



const areAllCollapsed = computed(() => {
  return COMPONENT_CATEGORIES.every((cat) => collapsedCategories.value[cat.id])
}

)

function toggleAllCategories() {
  if (areAllCollapsed.value) {
    // 全部展开
    collapsedCategories.value = {}


  }

 else {
    // 全部折叠（仅保留当前组件所在分类展开）
    const map: Record<string, boolean> = {}


    for (const cat of COMPONENT_CATEGORIES) {
      if (cat.id !== currentComponent.value?.category) {
        map[cat.id] = true
      }


    }


    collapsedCategories.value = map
  }}



// 统计匹配组件总数
const totalMatchingComponents = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  if (!query) return COMPONENTS_DATA.length
  return COMPONENTS_DATA.filter((c) => {
    return (
      c.name.toLowerCase().includes(query) ||
      c.title.toLowerCase().includes(query) ||
      c.id.toLowerCase().includes(query) ||
      c.description.toLowerCase().includes(query) ||
      c.category.toLowerCase().includes(query)
    )
  }

).length
}

)

// 切换路由组件时，自动展开当前组件所属的大类
watch(
  () => currentComponent.value?.category,
  (newCat) => {
    if (newCat && collapsedCategories.value[newCat]) {
      collapsedCategories.value[newCat] = false
    }


  }

,
  { immediate: true }


)

// 按 A-Z 严格字母升序预处理每个大类下的组件列表
const categoryComponentsMap = computed(() => {
  const map: Record<string, typeof COMPONENTS_DATA> = {}


  for (const cat of COMPONENT_CATEGORIES) {
    map[cat.id] = COMPONENTS_DATA
      .filter((c) => c.category === cat.id)
      .sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }

))
  }


  return map
}

)

// 获取经过当前搜索过滤的分类组件列表
function getCategoryComponents(catId: string) {
  const allInCat = categoryComponentsMap.value[catId] || []
  const query = searchQuery.value.trim().toLowerCase()
  if (!query) return allInCat
  return allInCat.filter((c) => {
    return (
      c.name.toLowerCase().includes(query) ||
      c.title.toLowerCase().includes(query) ||
      c.id.toLowerCase().includes(query) ||
      c.description.toLowerCase().includes(query) ||
      c.category.toLowerCase().includes(query)
    )
  }

)
}





const marqueeLogos = ['OpenAI', 'Anthropic', 'Google', 'NVIDIA', 'DeepSeek', 'Vercel']

const dockNavItems = [
  { id: 'home', label: '首页', icon: Home }

,
  { id: 'explore', label: '模型广场', icon: Compass }

,
  { id: 'agent', label: 'AI 智能体', icon: Sparkles }

,
  { id: 'files', label: '知识库', icon: Folder }

,
  { id: 'notice', label: '消息通知', icon: Bell }

,
  { id: 'settings', label: '偏好设置', icon: Settings }

,
]

const agentCurrentStatus = ref<'thinking' | 'running' | 'tool_call' | 'success' | 'error'>('thinking')
const agentStatusDesc = {
  thinking: '正在分析需求，规划执行步骤...',
  running: '正在生成组件代码...',
  tool_call: '调用 vue-tsc 对组件进行类型检查...',
  success: '组件代码生成完成，类型检查已通过。',
  error: '执行出错，正在自动重试...',
}



// PromptInput 交互状态
const demoPromptText = ref('')
const demoPromptLoading = ref(false)
const demoSelectedModel = ref('deepseek-r1')
function handlePromptDemoSubmit(_val: string) {
  demoPromptLoading.value = true
  setTimeout(() => {
    demoPromptLoading.value = false
    demoPromptText.value = ''
  }

, 2200)
}



// FluidTabs 交互状态
const demoActiveTab = ref('preview')
const demoFluidTabs = [
  { id: 'preview', label: '预览', icon: Sparkles }

,
  { id: 'code', label: '源码', icon: Code2, badge: 'SFC' }

,
  { id: 'api', label: 'API 文档', icon: Terminal }

,
  { id: 'suites', label: '主题套件', icon: Layers, badge: '7 个' }

,
]

// 触觉与原子操作 Demo 状态
const demoHoldLogs = ref<string[]>([])
function handleHoldConfirm() {
  demoHoldLogs.value.unshift(`[${new Date().toLocaleTimeString()}] 长按确认完成，操作已执行`)
  if (demoHoldLogs.value.length > 3) demoHoldLogs.value.pop()
}



const demoConfirmMorphLogs = ref<string[]>([])
function handleMorphConfirm() {
  demoConfirmMorphLogs.value.unshift(`[${new Date().toLocaleTimeString()}] 已确认，缓存已清空`)
  if (demoConfirmMorphLogs.value.length > 3) demoConfirmMorphLogs.value.pop()
}



const demoIconMenu = ref(false)
const demoIconPlay = ref(false)
const demoIconPlus = ref(false)

const demoActionPinned = ref(true)
const demoActionBookmarked = ref(false)
const demoActionSparkleCount = ref(42)

interface SplitMenuItem {
  id: string | number
  label: string
  icon?: any
  description?: string
  onClick?: () => void
}



const demoSplitLog = ref('暂无操作')
function handleSplitPrimary(item: SplitMenuItem | null) {
  demoSplitLog.value = `[${new Date().toLocaleTimeString()}] 执行主操作：${item ? item.label : '默认操作'}`
}


function handleSplitSelect(item: SplitMenuItem | null) {
  demoSplitLog.value = `[${new Date().toLocaleTimeString()}] 主按钮已切换为：${item ? item.label : '默认操作'}`
}



// 表单与高阶输入 Demo 状态
const demoScrubWidth = ref(480)
const demoScrubRadius = ref(16)
const demoScrubOpacity = ref(85)

const demoPassword = ref('Aura$2026')

const demoMoneyAmount = ref(6800)
const demoMoneyCurrency = ref('CNY')

const demoPhoneNumber = ref('13800138000')
const demoPhoneCountry = ref('CN')

const demoTags = ref(['Vue 3.5', 'TailwindCSS', 'Motion UI', 'TypeScript'])

const demoMentionText = ref('嗨 @Aura Assistant ，帮我检查一下新版首页的文案')

// 高阶导航与控制 Demo 状态
const demoSegmentedValue = ref('preview')
const demoSegmentedOptions = [
  { id: 'preview', label: '预览', icon: Sparkles }

,
  { id: 'code', label: '源码', icon: Code2, badge: 'Vue' }

,
  { id: 'docs', label: 'API 文档', icon: Terminal }

,
  { id: 'disabled', label: '不可用', disabled: true }

,
]

const DEMO_CRUMBS_FULL = [
  { label: '控制台' }

,
  { label: '上海地域' }

,
  { label: '生产集群' }

,
  { label: '命名空间 default' }

,
  { label: '订单服务' }

,
]
const demoCrumbs = ref(DEMO_CRUMBS_FULL.slice())
// 点击上级：截断到该层级；点击首页图标（index = -1）：清空到首页
function navigateCrumb(index: number) {
  demoCrumbs.value = DEMO_CRUMBS_FULL.slice(0, index + 1)
}


function drillDownCrumb() {
  demoCrumbs.value = DEMO_CRUMBS_FULL.slice(0, demoCrumbs.value.length + 1)
}


function resetCrumbs() {
  demoCrumbs.value = DEMO_CRUMBS_FULL.slice()
}



const demoFABLogs = ref('暂无操作')
const demoFABActions = [
  { id: 'bot', label: '问 AI 助手', icon: Bot, color: 'bg-purple-600', onClick: () => { demoFABLogs.value = '已打开 AI 助手' }

 }

,
  { id: 'sparkles', label: '生成摘要', icon: Sparkles, color: 'bg-blue-600', onClick: () => { demoFABLogs.value = '已生成摘要' }

 }

,
  { id: 'rocket', label: '发布', icon: Rocket, color: 'bg-emerald-600', onClick: () => { demoFABLogs.value = '已发布' }

 }

,
]

const demoNavHoverMenu = [
  {
    id: 'solutions',
    label: '解决方案',
    children: [
      { title: 'AI 客服', desc: '自动回答常见问题，复杂问题转给人工', icon: Bot, badge: '新' }

,
      { title: '数据分析', desc: '可视化报表与实时指标看板', icon: Globe }

,
      { title: '营销自动化', desc: '按用户行为自动发送邮件和通知', icon: Layers }

,
    ],
  }

,
  {
    id: 'developers',
    label: '开发者',
    children: [
      { title: 'API 文档', desc: '接口说明、鉴权方式与示例代码', icon: Code2 }

,
      { title: 'SDK', desc: '提供 JavaScript、Python 和 Go 版本', icon: Terminal }

,
    ],
  }

,
]
const demoNavHoverSelected = ref('未选择')

const demoPage = ref(3)

const demoCircularProgress = ref(72)
function handleCircularClick() {
  demoCircularProgress.value = (demoCircularProgress.value + 15) % 105
}



// 质感卡片与多维表面 Demo 状态
const demoCardStackItems: CardStackItem[] = [
  { id: 1, title: '如何设计空状态', description: '列表为空或没有搜索结果时，告诉用户下一步可以做什么。', tag: 'Design', author: 'Aura Team' }

,
  { id: 2, title: '表单什么时候校验', description: '在输入框失去焦点时校验，比每按一个键就提示更友好。', tag: 'UX', author: 'Aura Team' }

,
  { id: 3, title: '动画时长怎么定', description: '小元素用 150–200ms，大面积的过渡用 300ms 左右比较自然。', tag: 'Motion', author: 'Aura Team' }

,
  { id: 4, title: '深色模式怎么配色', description: '背景不用纯黑、文字不用纯白，适当降低对比度看起来更舒服。', tag: 'Color', author: 'Aura Team' }

,
]
const demoCardStackSwipeLog = ref('暂无记录')
function handleCardSwipe(item: CardStackItem, direction: 'left' | 'right') {
  demoCardStackSwipeLog.value = `已向 ${direction === 'left' ? '← 左' : '右 →'}

 划走：${item.title}`
}



// 数据图表与动态度量 Demo 状态
const demoSparklineData = ref([14, 22, 18, 32, 28, 45, 40, 58, 62, 70, 68, 88])

const demoCounterValue = ref(128450)
function handleAddCounter(amount: number) {
  demoCounterValue.value = Math.max(0, demoCounterValue.value + amount)
}



const demoGaugeValue = ref(68)

const demoCurrentStep = ref(2)
const demoStepList = [
  { title: '安装依赖', description: 'pnpm install' }

,
  { title: '运行测试', description: '单元测试与类型检查' }

,
  { title: '构建', description: '生成生产环境代码' }

,
  { title: '部署', description: '发布到服务器' }

,
]

const demoMatrixPlans: PlanTier[] = [
  { id: 'free', name: '免费版', price: '¥0', ctaText: '免费使用' }

,
  { id: 'pro', name: '专业版', price: '¥99', period: '月', popular: true, badge: '推荐', ctaText: '开始试用' }

,
  { id: 'team', name: '团队版', price: '¥299', period: '月', ctaText: '联系销售' }

,
]
const demoMatrixFeatures: FeatureItem[] = [
  { name: '项目数量', values: { free: '3 个', pro: '不限', team: '不限' }

 }

,
  { name: '团队协作', values: { free: false, pro: true, team: true }

 }

,
  { name: '自定义域名', values: { free: false, pro: true, team: true }

 }

,
  { name: '技术支持', values: { free: false, pro: '邮件支持', team: '专属客户经理' }

 }

,
]
const demoMatrixSelected = ref('pro')

const demoStatTrend = [28, 36, 32, 48, 44, 62, 70, 89]

// Step 1.6 浮层与弹窗套件状态
const demoCmdOpen = ref(false)
const demoDrawerOpen = ref(false)
const demoDrawerSide = ref<'right' | 'left'>('right')

const demoContextMenuItems: ContextMenuItem[] = [
  { id: 'cut', label: '剪切', shortcut: '⌘X', icon: '✂️' }

,
  { id: 'copy', label: '复制', shortcut: '⌘C', icon: '📋' }

,
  { id: 'paste', label: '粘贴', shortcut: '⌘V', icon: '📌' }

,
  { id: 'sep1', type: 'separator' }

,
  { id: 'share', label: '分享链接', shortcut: '⌘S', icon: '🔗' }

,
  { id: 'sep2', type: 'separator' }

,
  { id: 'delete', label: '删除', shortcut: '⌫', icon: '🗑️', destructive: true }

,
]

const demoToasts = ref<ToastItem[]>([
  {
    id: 'init-toast',
    type: 'success',
    title: '欢迎回来',
    description: '你有 3 条未读消息。',
    duration: 4000
  }])

function triggerDocsToast(type: 'success' | 'error' | 'warning' | 'info') {
  const titles = {
    success: '保存成功',
    error: '上传失败',
    warning: '存储空间不足',
    info: '有新版本可用'
  }


  const descs = {
    success: '你的修改已保存。',
    error: '请检查网络连接或稍后重试。',
    warning: '已使用 90% 的存储空间，建议清理旧文件。',
    info: '刷新页面即可使用新版本。'
  }


  demoToasts.value.push({
    id: String(Date.now()),
    type,
    title: titles[type],
    description: descs[type],
    duration: 3500
  }

)
}



function handleCloseToast(id: string) {
  demoToasts.value = demoToasts.value.filter(t => t.id !== id)
}



const demoDropdownLastAction = ref('暂无选择')

// Step 1.9 交互微积木状态
const demoSliderVal = ref(65)
const demoPickerColor = ref('#3b82f6')
const demoStarVal = ref(4)
function handleDropdownSelect(item: DropdownItem) {
  demoDropdownLastAction.value = `选中: ${item.label}

 (${item.id}

)`
}


</script>

<template>
  <div class="mx-auto max-w-7xl px-4 py-6 sm:py-8 sm:px-6 lg:px-8">
    <!-- 移动端专属：组件分类目录快捷选择栏 -->
    <div class="md:hidden mb-4">
      <button
        type="button"
        @click="mobileSidebarOpen = !mobileSidebarOpen"
        class="w-full flex items-center justify-between p-3.5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 shadow-sm backdrop-blur-md transition-all active:scale-[0.99]"
      >
        <div class="flex items-center gap-2.5 min-w-0">
          <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
            <Layers class="h-4 w-4" />
          </div>
          <div class="flex flex-col text-left min-w-0">
            <span class="text-xs font-bold text-zinc-900 dark:text-zinc-100 truncate">
              {{ currentComponent.name }}


            </span>
            <span class="text-[10px] text-zinc-400 font-mono truncate">
              {{ currentCategory?.name }}

 · {{ currentComponent.category }}


            </span>
          </div>
        </div>
        <div class="flex items-center gap-1.5 shrink-0 text-xs font-semibold text-blue-600 dark:text-blue-400 pl-2">
          <span>{{ mobileSidebarOpen ? '收起目录' : `选择组件 (${COMPONENTS_DATA.length}

)` }}

</span>
          <ChevronDown class="h-3.5 w-3.5 transition-transform duration-200" :class="{ 'rotate-180': mobileSidebarOpen }

" />
        </div>
      </button>
    </div>

    <div class="flex flex-col md:flex-row gap-8">
      <!-- ================= 左侧组件导航侧边栏（移动端折叠，桌面端固定） ================= -->
      <aside
        :class="[
          'shrink-0 transition-all',
          mobileSidebarOpen ? 'block w-full' : 'hidden md:block md:w-72',
        ]"
      >
        <div class="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto overflow-x-hidden scrollbar-thin rounded-2xl border border-zinc-200/80 bg-white/70 p-4 shadow-sm backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/70">
          <!-- 侧边栏顶部快速检索输入框 -->
          <div class="mb-3 px-1">
            <div class="relative flex items-center">
              <Search class="absolute left-2.5 w-3.5 h-3.5 text-zinc-400 pointer-events-none" />
              <input
                v-model="searchQuery"
                type="text"
                placeholder="搜索组件（支持中英文）..."
                class="w-full pl-8 pr-7 py-1.5 text-xs bg-zinc-100/80 dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800 rounded-xl focus:outline-none focus:border-blue-500/50 dark:focus:border-blue-500/50 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 transition-colors"
              />
              <button
                v-if="searchQuery"
                type="button"
                @click="searchQuery = ''"
                class="absolute right-2 p-0.5 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors cursor-pointer"
                title="清空搜索"
              >
                <X class="w-3 h-3" />
              </button>
            </div>
          </div>

          <div class="mb-3 flex items-center justify-between pb-3 border-b border-zinc-200/60 dark:border-zinc-800/60 px-1">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                {{ searchQuery.trim() ? '搜索结果' : '组件分类' }}


              </span>
              <span class="rounded-full bg-blue-500/10 px-2 py-0.5 text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 border border-blue-500/20">
                {{ totalMatchingComponents }}


              </span>
            </div>
            <!-- 全部折叠/展开快捷按钮 -->
            <button
              v-if="!searchQuery.trim()"
              type="button"
              @click="toggleAllCategories"
              class="text-xs font-medium text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer select-none focus:outline-none"
            >
              {{ areAllCollapsed ? '全部展开' : '收起其他' }}


            </button>
            <button
              v-else
              type="button"
              @click="searchQuery = ''"
              class="text-xs font-medium text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer select-none focus:outline-none"
            >
              清空搜索
            </button>
          </div>

          <!-- 按 10 大标准组件分类分组展示 (上下两行中英双语工整排版，彻底消除文字断词折行) -->
          <div class="space-y-2">
            <!-- 搜索无结果时的空状态 -->
            <div
              v-if="totalMatchingComponents === 0"
              class="py-10 px-2 text-center text-xs text-zinc-400 dark:text-zinc-500"
            >
              <div class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-900 mb-2 text-zinc-400">
                <Search class="h-4 w-4" />
              </div>
              <p class="font-medium text-zinc-700 dark:text-zinc-300">未找到 “{{ searchQuery }}

” 相关的组件</p>
              <p class="mt-1 text-[11px] text-zinc-400">试试搜索英文名称或如 “Button”、“3D” 等关键字</p>
              <button
                type="button"
                @click="searchQuery = ''"
                class="mt-3 inline-flex items-center gap-1 rounded-lg bg-zinc-100 dark:bg-zinc-900 px-3 py-1 text-xs text-blue-600 dark:text-blue-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                <X class="h-3 w-3" />
                <span>清除搜索</span>
              </button>
            </div>

            <template v-for="cat in COMPONENT_CATEGORIES" :key="cat.id">
              <div
                v-if="getCategoryComponents(cat.id).length > 0"
                class="space-y-1"
              >
                <!-- 分类可点击折叠头部 -->
                <button
                  type="button"
                  @click="toggleCategory(cat.id)"
                  class="w-full flex items-center justify-between px-2.5 py-2 rounded-xl hover:bg-zinc-100/80 dark:hover:bg-zinc-900/80 transition-colors cursor-pointer group select-none focus:outline-none focus:ring-0 active:bg-zinc-100 dark:active:bg-zinc-800"
                >
                  <!-- 左侧图标与上下工整双语标题 -->
                  <div class="flex items-center gap-2.5 min-w-0">
                    <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-900 text-blue-600 dark:text-blue-400 border border-zinc-200/60 dark:border-zinc-800/80 group-hover:scale-105 transition-transform">
                      <component :is="getCategoryIcon(cat.id)" class="h-3.5 w-3.5" />
                    </div>
                    <div class="flex flex-col text-left min-w-0">
                      <span class="text-xs font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate leading-tight">
                        {{ cat.name }}


                      </span>
                      <span class="text-[9.5px] font-mono tracking-wider text-zinc-400 dark:text-zinc-500 uppercase truncate leading-tight mt-0.5">
                        {{ cat.englishName }}


                      </span>
                    </div>
                  </div>

                  <!-- 右侧数量徽章与展开箭头 -->
                  <div class="flex items-center gap-2 shrink-0 ml-2">
                    <span class="rounded-full bg-zinc-100 dark:bg-zinc-900 px-2 py-0.5 text-[10px] font-mono font-medium text-zinc-500 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-800">
                      {{ getCategoryComponents(cat.id).length }}


                    </span>
                    <ChevronDown
                      class="h-3.5 w-3.5 text-zinc-400 transition-transform duration-200 group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
                      :class="{ '-rotate-90': isCategoryCollapsed(cat.id) }

"
                    />
                  </div>
                </button>

                <!-- 分类内组件链接 (可收起/折叠) -->
                <nav v-show="!isCategoryCollapsed(cat.id)" class="space-y-0.5 pl-3 border-l border-zinc-200/60 dark:border-zinc-800/60 ml-3 transition-all">
                  <router-link
                    v-for="comp in getCategoryComponents(cat.id)"
                    :key="comp.id"
                    :to="`/docs/${comp.id}`"
                    :class="[
                      'flex flex-col rounded-xl px-2.5 py-1.5 text-xs font-medium transition-colors',
                      currentId === comp.id
                        ? 'bg-blue-600 text-white font-semibold shadow-sm'
                        : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100',
                    ]"
                  >
                    <div class="flex items-center justify-between w-full">
                      <span class="truncate">{{ comp.name }}

</span>
                      <span
                        v-if="currentId === comp.id"
                        class="h-1.5 w-1.5 rounded-full bg-white shrink-0 shadow-sm"
                      />
                    </div>
                    <span
                      v-if="searchQuery.trim()"
                      class="text-[10.5px] truncate font-normal mt-0.5"
                      :class="currentId === comp.id ? 'text-blue-100' : 'text-zinc-400 dark:text-zinc-500'"
                    >
                      {{ comp.title }}


                    </span>
                  </router-link>
                </nav>
              </div>
            </template>
          </div>

          <!-- 快速安装提示卡片 -->
          <div class="mt-6 border-t border-zinc-200 dark:border-zinc-800 pt-4 px-2">
            <div class="flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100">
              <Terminal class="h-3.5 w-3.5 text-blue-500" />
              <span>安装依赖</span>
            </div>
            <p class="mt-1 text-[11px] text-zinc-400">组件需要以下工具库：</p>
            <div class="mt-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 p-2 font-mono text-[10px] text-zinc-600 dark:text-zinc-300 break-all select-all">
              npm i @vueuse/core clsx tailwind-merge
            </div>
          </div>
        </div>
      </aside>

      <!-- ================= 右侧主视窗 ================= -->
      <main class="min-w-0 flex-1">
        <ComponentPreview
          :size="currentComponent.previewSize"
          :name="currentComponent.name"
          :title="currentComponent.title"
          :description="currentComponent.description"
          :component-code="currentComponent.componentCode"
          :usage-code="currentComponent.usageCode"
          :component-filename="currentComponent.componentFilename"
          :props-list="currentComponent.propsList"
        >
          <template #default="{ isDark }

">
            <!-- 1. Border Beam 预览 -->
            <div
              v-if="currentComponent.id === 'border-beam'"
              :class="[
                'relative flex h-64 w-80 flex-col items-center justify-center rounded-2xl border p-6 shadow-md transition-colors duration-200',
                isDark
                  ? 'border-zinc-800 bg-zinc-900 text-zinc-100 shadow-black/40'
                  : 'border-zinc-200 bg-white text-zinc-900 shadow-zinc-200/50',
              ]"
            >
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 text-white mb-3 shadow-md shadow-blue-500/20">
                <Sparkles class="h-6 w-6" />
              </div>
              <h4 :class="['text-lg font-bold', isDark ? 'text-white' : 'text-zinc-900']">
                Border Beam Demo
              </h4>
              <p :class="['mt-1 text-center text-xs', isDark ? 'text-zinc-400' : 'text-zinc-500']">
                光沿圆角边框循环流动
              </p>
              <BorderBeam :size="180" :duration="8" color-from="#38bdf8" color-to="#a855f7" />
            </div>

            <!-- 2. Bento Grid 预览 -->
            <div
              v-else-if="currentComponent.id === 'bento-grid'"
              class="w-full max-w-2xl"
            >
              <BentoGrid class="auto-rows-[16rem]">
                <BentoCard
                  name="智能搜索"
                  description="用自然语言搜索全部文档"
                  cta="了解详情"
                  href="#"
                  :class="isDark ? 'border-zinc-800 bg-zinc-900/90 text-zinc-100' : 'border-zinc-200 bg-white text-zinc-900'"
                >
                  <template #icon><Cpu class="h-5 w-5 text-blue-500" /></template>
                </BentoCard>

                <BentoCard
                  name="全球加速"
                  description="就近接入节点，降低访问延迟"
                  class="md:col-span-2"
                  cta="查看分布"
                  href="#"
                  :class="isDark ? 'border-zinc-800 bg-zinc-900/90 text-zinc-100' : 'border-zinc-200 bg-white text-zinc-900'"
                >
                  <template #icon><Zap class="h-5 w-5 text-amber-500" /></template>
                </BentoCard>
              </BentoGrid>
            </div>

            <!-- 3. Interactive Particles 预览 -->
            <div
              v-else-if="currentComponent.id === 'interactive-particles'"
              :class="[
                'relative h-[360px] w-full rounded-2xl border overflow-hidden transition-colors duration-200',
                isDark ? 'border-zinc-800 bg-zinc-950 text-white' : 'border-zinc-200 bg-white text-zinc-900',
              ]"
            >
              <InteractiveParticles :quantity="60" :mouse-radius="120" :connect-lines="true" :color="isDark ? '255, 255, 255' : '59, 130, 246'">
                <div class="flex h-full flex-col items-center justify-center p-6 text-center">
                  <h3 :class="['text-2xl font-bold tracking-tight', isDark ? 'text-white' : 'text-zinc-900']">
                    移动鼠标，粒子会被推开
                  </h3>
                  <p :class="['mt-2 text-xs', isDark ? 'text-zinc-400' : 'text-zinc-500']">
                    Canvas 绘制，鼠标附近的粒子被推开，相邻粒子自动连线
                  </p>
                </div>
              </InteractiveParticles>
            </div>

            <!-- 4. Retro Grid 预览 -->
            <div
              v-else-if="currentComponent.id === 'retro-grid'"
              :class="[
                'relative flex h-[360px] w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200',
                isDark ? 'border-zinc-800 bg-black text-white' : 'border-zinc-200 bg-white text-zinc-900',
              ]"
            >
              <span :class="['z-10 text-4xl font-extrabold tracking-tighter', isDark ? 'text-white' : 'text-zinc-900']">
                Retro Synthwave Grid
              </span>
              <RetroGrid :angle="65" :dark-line-color="'#334155'" :light-line-color="'#cbd5e1'" />
            </div>

            <!-- 5. Dot Pattern 预览 -->
            <div
              v-else-if="currentComponent.id === 'dot-pattern'"
              :class="[
                'relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-2xl border p-8 transition-colors duration-200',
                isDark ? 'border-zinc-800 bg-black text-white' : 'border-zinc-200 bg-white text-zinc-900',
              ]"
            >
              <p :class="['z-10 text-xl font-bold', isDark ? 'text-white' : 'text-zinc-900']">
                SVG 点阵背景（开启光晕）
              </p>
              <DotPattern :width="18" :height="18" :cr="1.2" :glow="true" />
            </div>

            <!-- 6. Shiny Text 预览 -->
            <div
              v-else-if="currentComponent.id === 'shiny-text'"
              class="flex flex-col items-center gap-6 py-8"
            >
              <!-- 场景 1：科技 Badge 徽章 -->
              <div :class="['rounded-full border px-5 py-2 text-xs font-medium shadow-sm transition-colors', isDark ? 'border-zinc-800 bg-zinc-900/90 text-zinc-300' : 'border-zinc-200 bg-zinc-100 text-zinc-700']">
                ✨ <ShinyText text="Aura UI 1.0 正式发布" :duration="2.5" />
              </div>

              <!-- 场景 2：Hero 核心大标题（纯净耀白流光，持续流淌无停顿） -->
              <div class="text-center">
                <ShinyText
                  text="Next-Gen AI Intelligence"
                  class="text-4xl sm:text-5xl font-black tracking-tight"
                  :duration="2.5"
                />
                <p :class="['mt-2 text-xs sm:text-sm', isDark ? 'text-zinc-500' : 'text-zinc-400']">
                  高光循环扫过文字，浅色和深色背景下都清晰可见
                </p>
              </div>

              <!-- 场景 3：赛博霓虹蓝紫流光 -->
              <div class="text-center mt-2">
                <ShinyText
                  text="Cyberpunk Motion Primitives"
                  variant="cyber"
                  class="text-3xl sm:text-4xl font-extrabold tracking-tight"
                  :duration="3"
                />
                <p :class="['mt-1 text-xs', isDark ? 'text-zinc-500' : 'text-zinc-400']">
                  按钮外圈的光持续旋转
                </p>
              </div>
            </div>

            <!-- 7. Shimmer Button 预览 -->
            <div
              v-else-if="currentComponent.id === 'shimmer-button'"
              class="flex flex-wrap items-center justify-center gap-4 py-8"
            >
              <ShimmerButton shimmer-color="#38bdf8">
                <span>开始免费试用</span>
                <ArrowRight class="h-4 w-4" />
              </ShimmerButton>
              <ShimmerButton shimmer-color="#ec4899" shimmer-duration="3.5s">
                <span>Pink Shimmer</span>
              </ShimmerButton>
            </div>

            <!-- 8. Marquee 预览 -->
            <div
              v-else-if="currentComponent.id === 'marquee'"
              :class="[
                'relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl border py-6 transition-colors duration-200',
                isDark ? 'border-zinc-800 bg-black/60' : 'border-zinc-200 bg-zinc-50/80',
              ]"
            >
              <Marquee :duration="20" :pause-on-hover="true">
                <div
                  v-for="logo in marqueeLogos"
                  :key="logo"
                  :class="[
                    'flex h-12 items-center justify-center rounded-xl border px-6 font-bold text-xs shadow-sm transition-colors duration-200',
                    isDark ? 'border-zinc-800 bg-zinc-900 text-zinc-200' : 'border-zinc-200 bg-white text-zinc-800',
                  ]"
                >
                  {{ logo }}


                </div>
              </Marquee>
              <div :class="['pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r', isDark ? 'from-black to-transparent' : 'from-zinc-50 to-transparent']" />
              <div :class="['pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l', isDark ? 'from-black to-transparent' : 'from-zinc-50 to-transparent']" />
            </div>

            <!-- 9. Meteors 预览 -->
            <div
              v-else-if="currentComponent.id === 'meteors'"
              :class="[
                'relative flex h-80 w-full max-w-lg flex-col justify-between overflow-hidden rounded-2xl border p-8 shadow-2xl transition-colors duration-200',
                isDark ? 'border-zinc-800 bg-zinc-950 text-white' : 'border-zinc-200 bg-slate-900 text-white',
              ]"
            >
              <Meteors :number="30" />
              <div class="relative z-10 flex items-center justify-between">
                <span class="rounded-full bg-sky-500/10 px-3 py-1 font-mono text-xs font-semibold text-sky-400 border border-sky-500/20">
                  Meteor Shower
                </span>
                <Sparkles class="h-5 w-5 text-sky-400" />
              </div>
              <div class="relative z-10 space-y-2">
                <h3 class="text-3xl font-black tracking-tight text-white">
                  流星雨
                </h3>
                <p class="text-xs text-zinc-400 leading-relaxed">
                  流星带渐变尾迹，以随机间隔斜向划过，适合深色卡片和首屏背景。
                </p>
              </div>
            </div>

            <!-- 10. Ripple 预览 -->
            <div
              v-else-if="currentComponent.id === 'ripple'"
              :class="[
                'relative flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200',
                isDark ? 'border-zinc-800 bg-zinc-950 text-white' : 'border-zinc-200 bg-white text-zinc-900',
              ]"
            >
              <Ripple :main-circle-size="160" :num-circles="7" />
              <div class="relative z-10 flex flex-col items-center gap-3">
                <div class="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-500/30">
                  <Mic class="h-7 w-7" />
                </div>
                <div class="rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-xs font-mono text-zinc-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-300">
                  正在聆听...
                </div>
              </div>
            </div>

            <!-- 11. Number Ticker 预览 -->
            <div
              v-else-if="currentComponent.id === 'number-ticker'"
              class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 w-full max-w-3xl py-6"
            >
              <div :class="['rounded-2xl border px-3 sm:px-4 py-6 text-center shadow-sm transition-colors flex flex-col items-center justify-center', isDark ? 'border-zinc-800 bg-zinc-900/90' : 'border-zinc-200 bg-white']">
                <div class="inline-flex items-baseline justify-center text-sky-500 dark:text-sky-400">
                  <span class="text-xl sm:text-2xl xl:text-3xl font-black tracking-tight"><NumberTicker :value="99.99" :decimal-places="2" /></span>
                  <span class="text-sm sm:text-base font-bold ml-0.5">%</span>
                </div>
                <p class="mt-2 text-xs font-medium text-zinc-500">服务可用率</p>
              </div>
              <div :class="['rounded-2xl border px-3 sm:px-4 py-6 text-center shadow-sm transition-colors flex flex-col items-center justify-center', isDark ? 'border-zinc-800 bg-zinc-900/90' : 'border-zinc-200 bg-white']">
                <div class="inline-flex items-baseline justify-center text-indigo-500 dark:text-indigo-400">
                  <span class="text-xl sm:text-2xl xl:text-3xl font-black tracking-tight"><NumberTicker :value="10000000" /></span>
                  <span class="text-sm sm:text-base font-bold ml-0.5">+</span>
                </div>
                <p class="mt-2 text-xs font-medium text-zinc-500">今日调用次数</p>
              </div>
              <div :class="['rounded-2xl border px-3 sm:px-4 py-6 text-center shadow-sm transition-colors flex flex-col items-center justify-center', isDark ? 'border-zinc-800 bg-zinc-900/90' : 'border-zinc-200 bg-white']">
                <div class="inline-flex items-baseline justify-center text-emerald-500 dark:text-emerald-400">
                  <span class="text-xl sm:text-2xl xl:text-3xl font-black tracking-tight"><NumberTicker :value="12" /></span>
                  <span class="text-sm sm:text-base font-bold ml-0.5">ms</span>
                </div>
                <p class="mt-2 text-xs font-medium text-zinc-500">平均响应时间</p>
              </div>
            </div>

            <!-- 12. Animated Beam 预览 -->
            <div
              v-else-if="currentComponent.id === 'animated-beam'"
              :class="[
                'relative flex h-72 w-full max-w-xl items-center justify-between px-12 rounded-2xl border transition-colors duration-200',
                isDark ? 'border-zinc-800 bg-zinc-950' : 'border-zinc-200 bg-zinc-50',
              ]"
              ref="beamContainerRef"
            >
              <div ref="beamUserRef" :class="['z-10 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-md', isDark ? 'border-zinc-700 bg-zinc-900 text-white' : 'border-zinc-200 bg-white text-zinc-800']">
                <User class="h-6 w-6 text-blue-500" />
              </div>
              <div ref="beamAiRef" class="z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-500/40">
                <Sparkles class="h-8 w-8" />
              </div>
              <div ref="beamDbRef" :class="['z-10 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-md', isDark ? 'border-zinc-700 bg-zinc-900 text-white' : 'border-zinc-200 bg-white text-zinc-800']">
                <Database class="h-6 w-6 text-indigo-500" />
              </div>

              <AnimatedBeam :container-ref="beamContainerRef" :from-ref="beamUserRef" :to-ref="beamAiRef" :duration="2.4" />
              <AnimatedBeam :container-ref="beamContainerRef" :from-ref="beamAiRef" :to-ref="beamDbRef" :duration="2.4" :delay="0.6" />
            </div>

            <!-- 13. Lamp Effect 预览 -->
            <div
              v-else-if="currentComponent.id === 'lamp-effect'"
              class="w-full"
            >
              <LampEffect class="min-h-[420px]">
                <h2 class="bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-center text-3xl sm:text-5xl font-black tracking-tight text-transparent">
                  Next-Gen AI Platform
                </h2>
                <p class="mt-3 max-w-md text-xs sm:text-sm text-slate-400">
                  两束对称的光从顶部照下，适合首屏标题或产品发布区域。
                </p>
              </LampEffect>
            </div>

            <!-- 14. Flickering Grid 预览 -->
            <div
              v-else-if="currentComponent.id === 'flickering-grid'" class="relative flex h-80 w-full items-center justify-center overflow-hidden"
            >
              <FlickeringGrid :square-size="4" :grid-gap="5" :flicker-chance="0.4" :max-opacity="0.35" class="absolute inset-0" />
              <div class="relative z-10 text-center">
                <div class="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-600 shadow-sm backdrop-blur-md dark:border-blue-900 dark:bg-zinc-900/80 dark:text-blue-400 mb-3">
                  <Activity class="h-3.5 w-3.5" />
                  <span>Canvas 网格</span>
                </div>
                <h3 :class="['text-3xl font-black tracking-tight', isDark ? 'text-white' : 'text-zinc-900']">
                  闪烁网格
                </h3>
                <p :class="['mt-2 text-xs font-mono', isDark ? 'text-zinc-400' : 'text-zinc-500']">
                  每个小方格随机明暗闪烁
                </p>
              </div>
            </div>

            <!-- 15. Dock 预览 -->
            <div
              v-else-if="currentComponent.id === 'dock'" class="relative flex h-80 w-full items-end justify-center"
            >
              <div class="absolute top-8 text-center">
                <span class="text-xs font-mono text-zinc-400">在图标栏上移动鼠标，附近的图标会放大并显示名称</span>
              </div>
              <Dock :items="dockNavItems" :icon-size="44" :icon-magnification="68" :icon-distance="130" />
            </div>

            <!-- 16. Orbit Logos 预览 -->
            <div
              v-else-if="currentComponent.id === 'orbit-logos'" class="relative flex h-96 w-full items-center justify-center overflow-hidden"
            >
              <!-- 中心核 -->
              <div class="z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-xl shadow-blue-500/30 text-white">
                <Sparkles class="h-8 w-8" />
              </div>

              <!-- 内圈轨道 (两个对称公转节点) -->
              <OrbitLogos :radius="75" :duration="16">
                <div class="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-sky-500">
                  <Cpu class="h-[1.125rem] w-[1.125rem]" />
                </div>
              </OrbitLogos>

              <OrbitLogos :radius="75" :duration="16" :delay="8">
                <div class="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-emerald-500">
                  <Zap class="h-[1.125rem] w-[1.125rem]" />
                </div>
              </OrbitLogos>

              <!-- 外圈轨道 (两个逆向公转节点) -->
              <OrbitLogos :radius="135" :duration="24" :reverse="true">
                <div class="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-indigo-500">
                  <Globe class="h-5 w-5" />
                </div>
              </OrbitLogos>

              <OrbitLogos :radius="135" :duration="24" :delay="12" :reverse="true">
                <div class="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-amber-500">
                  <Database class="h-5 w-5" />
                </div>
              </OrbitLogos>
            </div>

            <!-- 17. Image Compare 预览 -->
            <div
              v-else-if="currentComponent.id === 'image-compare'" class="w-full flex flex-col items-center justify-center">
              <div class="w-full max-w-xl h-72">
                <ImageCompare
                  before-image="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=900&auto=format&fit=crop&q=70&sat=-100"
                  after-image="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=900&auto=format&fit=crop&q=90"
                  before-label="修复前"
                  after-label="修复后"
                  :initial-position="50"
                  class="h-full w-full shadow-2xl"
                />
              </div>
              <p class="mt-3 text-xs font-mono text-zinc-400">
                左右拖动中间的手柄对比两张图片
              </p>
            </div>

            <!-- 18. Agent Status 预览 -->
            <div
              v-else-if="currentComponent.id === 'agent-status'" class="w-full flex flex-col items-center justify-center">
              <!-- 交互式状态切换条 -->
              <div class="flex flex-wrap items-center justify-center gap-1.5 rounded-xl border border-zinc-200/80 bg-white/80 p-1 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80 shadow-sm">
                <button
                  v-for="st in (['thinking', 'running', 'tool_call', 'success', 'error'] as const)"
                  :key="st"
                  @click="agentCurrentStatus = st"
                  :class="[
                    'rounded-lg px-3 py-1.5 text-xs font-semibold transition-all capitalize',
                    agentCurrentStatus === st
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100',
                  ]"
                >
                  {{ st }}


                </button>
              </div>

              <AgentStatus
                :status="agentCurrentStatus"
                agent-name="DeepSeek R1 / Aura Reasoning"
                :current-task="agentStatusDesc[agentCurrentStatus]"
              />

              <p class="text-xs font-mono text-zinc-400">
                点击上方按钮切换状态，点击卡片可展开执行步骤
              </p>
            </div>

            <!-- 19. Typewriter Terminal 预览 -->
            <div
              v-else-if="currentComponent.id === 'typewriter-terminal'" class="w-full flex flex-col items-center justify-center">
              <div class="w-full max-w-xl">
                <TypewriterTerminal
                  :typing-speed="32"
                  :loop="true"
                />
              </div>
            </div>

            <!-- 20. Prompt Input 预览 -->
            <div
              v-else-if="currentComponent.id === 'prompt-input'" class="w-full flex flex-col items-center justify-center">
              <div class="w-full max-w-xl">
                <PromptInput
                  v-model="demoPromptText"
                  :loading="demoPromptLoading"
                  v-model:selected-model="demoSelectedModel"
                  placeholder="有什么可以帮你？"
                  @submit="handlePromptDemoSubmit"
                  @stop="demoPromptLoading = false"
                />
              </div>
              <p class="text-xs font-mono text-zinc-400">
                按 Enter 发送，Shift + Enter 换行，发送后会模拟生成中的状态
              </p>
            </div>

            <!-- 21. Thought Accordion 预览 -->
            <div
              v-else-if="currentComponent.id === 'thought-accordion'" class="w-full flex flex-col items-center justify-center">
              <div class="w-full max-w-xl">
                <ThoughtAccordion
                  duration="思考用时 8.2 秒"
                  status="complete"
                  :default-open="true"
                />
              </div>
              <p class="text-xs font-mono text-zinc-400">
                点击标题栏展开或收起思考过程，可以复制全部内容
              </p>
            </div>

            <!-- 22. Fluid Tabs 预览 -->
            <div
              v-else-if="currentComponent.id === 'fluid-tabs'" class="w-full flex flex-col items-center justify-center">
              <FluidTabs
                v-model="demoActiveTab"
                :tabs="demoFluidTabs"
              />

              <div class="w-full max-w-md rounded-xl border border-zinc-200/80 bg-white/70 p-4 text-center dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-sm backdrop-blur-md">
                <div class="text-xs font-mono text-zinc-500 dark:text-zinc-400">当前标签：</div>
                <div class="mt-1 text-sm font-bold text-blue-600 dark:text-blue-400 font-mono">
                  {{ demoActiveTab }}


                </div>
              </div>

              <p class="text-xs font-mono text-zinc-400">
                鼠标经过的标签有淡色背景跟随，点击后选中背景滑过去
              </p>
            </div>

            <!-- 23. Hold To Confirm 预览 -->
            <div
              v-else-if="currentComponent.id === 'hold-to-confirm'" class="w-full flex flex-col items-center justify-center">
              <div class="flex flex-wrap items-center justify-center gap-4">
                <HoldToConfirm
                  variant="danger"
                  label="长按删除项目"
                  holdingLabel="继续按住..."
                  confirmedLabel="项目已删除"
                  :duration="1200"
                  @confirm="handleHoldConfirm"
                />

                <HoldToConfirm
                  variant="warning"
                  label="长按重置 API 密钥"
                  holdingLabel="按住 1 秒重置..."
                  confirmedLabel="密钥已重置"
                  :duration="1000"
                  @confirm="handleHoldConfirm"
                />

                <HoldToConfirm
                  variant="primary"
                  label="长按退出所有设备"
                  holdingLabel="继续按住..."
                  confirmedLabel="已退出所有设备"
                  :duration="800"
                  @confirm="handleHoldConfirm"
                />
              </div>

              <!-- 实时操作执行日志 -->
              <div class="w-full max-w-lg rounded-xl border border-zinc-200/80 bg-white/70 p-3.5 dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-sm backdrop-blur-md">
                <div class="text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1.5">
                  操作记录
                </div>
                <div v-if="demoHoldLogs.length === 0" class="text-xs text-zinc-400 italic">
                  按住按钮直到进度填满才会执行，中途松手即取消
                </div>
                <div v-else class="space-y-1">
                  <div
                    v-for="(log, idx) in demoHoldLogs"
                    :key="idx"
                    class="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold"
                  >
                    {{ log }}


                  </div>
                </div>
              </div>

              <p class="text-xs font-mono text-zinc-400">
                按住时进度逐渐填满，松手后平滑回退，完成后自动复位
              </p>
            </div>

            <!-- 24. Confirm Morph 预览 -->
            <div
              v-else-if="currentComponent.id === 'confirm-morph'" class="w-full flex flex-col items-center justify-center">
              <div class="flex flex-wrap items-center justify-center gap-4">
                <ConfirmMorph
                  label="清空缓存"
                  confirm-text="确认清空"
                  cancel-text="取消"
                  variant="danger"
                  @confirm="handleMorphConfirm"
                />

                <ConfirmMorph
                  label="回滚至昨日版本"
                  confirm-text="确认回滚"
                  cancel-text="再想想"
                  variant="warning"
                  @confirm="handleMorphConfirm"
                />

                <ConfirmMorph
                  label="切换主从节点"
                  confirm-text="立即切换"
                  cancel-text="取消"
                  variant="primary"
                  @confirm="handleMorphConfirm"
                />
              </div>

              <!-- 实时回执记录 -->
              <div class="w-full max-w-lg rounded-xl border border-zinc-200/80 bg-white/70 p-3.5 dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-sm backdrop-blur-md">
                <div class="text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1.5">
                  操作记录
                </div>
                <div v-if="demoConfirmMorphLogs.length === 0" class="text-xs text-zinc-400 italic">
                  点击按钮后原地展开「确认」和「取消」，不需要弹出对话框
                </div>
                <div v-else class="space-y-1">
                  <div
                    v-for="(log, idx) in demoConfirmMorphLogs"
                    :key="idx"
                    class="text-xs font-mono text-rose-600 dark:text-rose-400 font-semibold"
                  >
                    {{ log }}


                  </div>
                </div>
              </div>

              <p class="text-xs font-mono text-zinc-400">
                在按钮原来的位置完成二次确认，避免误操作
              </p>
            </div>

            <!-- 25. Icon Morph 预览 -->
            <div
              v-else-if="currentComponent.id === 'icon-morph'" class="w-full flex flex-col items-center justify-center">
              <div class="flex flex-wrap items-center justify-center gap-8">
                <!-- 汉堡 ↔ 叉号 -->
                <div class="flex flex-col items-center gap-2">
                  <div class="rounded-2xl border border-zinc-200/80 bg-white/80 p-3 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/80">
                    <IconMorph v-model="demoIconMenu" mode="menu-close" :size="28" />
                  </div>
                  <span class="text-xs font-mono text-zinc-500 font-bold">
                    Menu ↔ Close: {{ demoIconMenu ? '关闭' : '展开' }}


                  </span>
                </div>

                <!-- 播放 ↔ 暂停 -->
                <div class="flex flex-col items-center gap-2">
                  <div class="rounded-2xl border border-zinc-200/80 bg-white/80 p-3 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/80">
                    <IconMorph v-model="demoIconPlay" mode="play-pause" :size="28" />
                  </div>
                  <span class="text-xs font-mono text-zinc-500 font-bold">
                    Play ↔ Pause: {{ demoIconPlay ? '播放中' : '暂停中' }}


                  </span>
                </div>

                <!-- 加号 ↔ 减号 -->
                <div class="flex flex-col items-center gap-2">
                  <div class="rounded-2xl border border-zinc-200/80 bg-white/80 p-3 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/80">
                    <IconMorph v-model="demoIconPlus" mode="plus-minus" :size="28" />
                  </div>
                  <span class="text-xs font-mono text-zinc-500 font-bold">
                    Plus ↔ Minus: {{ demoIconPlus ? '已展开' : '折叠' }}


                  </span>
                </div>
              </div>

              <p class="text-xs font-mono text-zinc-400">
                点击图标在两种状态之间平滑切换
              </p>
            </div>

            <!-- 26. Action Button 预览 -->
            <div
              v-else-if="currentComponent.id === 'action-button'" class="w-full flex flex-col items-center justify-center">
              <div class="flex flex-wrap items-center justify-center gap-3">
                <ActionButton
                  :icon="Pin"
                  :active="demoActionPinned"
                  tooltip="置顶"
                  @click="demoActionPinned = !demoActionPinned"
                />

                <ActionButton
                  label="AI 生成"
                  :icon="Sparkles"
                  badge="AI"
                  tooltip="用 AI 生成内容"
                  @click="demoActionSparkleCount++"
                />

                <ActionButton
                  :icon="Bookmark"
                  :active="demoActionBookmarked"
                  tooltip="收藏"
                  @click="demoActionBookmarked = !demoActionBookmarked"
                />

                <ActionButton
                  label="大号按钮"
                  size="lg"
                  :icon="CloudUpload"
                  tooltip="上传文件"
                />

                <ActionButton
                  label="禁用按钮"
                  size="sm"
                  :disabled="true"
                  tooltip="没有操作权限"
                />
              </div>

              <div class="rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2.5 text-xs font-mono text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300">
                AI 生成次数：<span class="font-bold text-blue-600 dark:text-blue-400">{{ demoActionSparkleCount }}

</span> 次
              </div>

              <p class="text-xs font-mono text-zinc-400">
                按下时按钮缩小，支持悬停提示、角标和选中状态
              </p>
            </div>

            <!-- 27. Split Button 预览 -->
            <div
              v-else-if="currentComponent.id === 'split-button'" class="w-full flex flex-col items-center justify-center">
              <div class="flex flex-wrap items-center justify-center gap-6">
                <!-- 极客蓝主色调分体按钮 -->
                <SplitButton
                  label="发布到生产环境"
                  :icon="Rocket"
                  variant="primary"
                  @primary-click="handleSplitPrimary"
                  @select="handleSplitSelect"
                />

                <!-- 次级中性灰分体按钮 -->
                <SplitButton
                  label="导出"
                  :icon="CloudUpload"
                  variant="secondary"
                  :items="[
                    { id: 'zip', label: '下载 ZIP', description: '打包下载全部文件' }

,
                    { id: 'git', label: '创建 Pull Request', description: '新建分支并提交审查' }

,
                    { id: 'npm', label: '发布到 npm', description: '发布到私有 npm 仓库' }

,
                  ]"
                  @primary-click="handleSplitPrimary"
                  @select="handleSplitSelect"
                />
              </div>

              <!-- 状态通知卡片 -->
              <div class="w-full max-w-md rounded-xl border border-zinc-200/80 bg-white/70 p-3.5 text-center dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-sm backdrop-blur-md">
                <div class="text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1">
                  操作记录
                </div>
                <div class="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">
                  {{ demoSplitLog }}


                </div>
              </div>

              <p class="text-xs font-mono text-zinc-400">
                点击左侧执行当前操作，点击右侧箭头切换其他操作
              </p>
            </div>

            <!-- 28. Reactions 预览 -->
            <div
              v-else-if="currentComponent.id === 'reactions'" class="w-full flex flex-col items-center justify-center">
              <div class="rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/80">
                <Reactions />
              </div>

              <div class="rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/80">
                <div class="text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-3">
                  自定义表情：
                </div>
                <Reactions
                  :items="[
                    { id: 'vue', emoji: '💚', count: 1024, active: true }

,
                    { id: 'speed', emoji: '⚡', count: 512, active: false }

,
                    { id: 'magic', emoji: '✨', count: 888, active: true }

,
                    { id: '100', emoji: '💯', count: 99, active: false }

,
                  ]"
                />
              </div>

              <p class="text-xs font-mono text-zinc-400">
                点击表情会弹跳并更新计数，也可以添加新的表情
              </p>
            </div>

            <!-- 29. Scrub Input 预览 -->
            <div
              v-else-if="currentComponent.id === 'scrub-input'" class="w-full flex flex-col items-center justify-center">
              <div class="flex flex-wrap items-center justify-center gap-4">
                <ScrubInput
                  v-model="demoScrubWidth"
                  label="宽度"
                  :min="120"
                  :max="640"
                  suffix="px"
                />

                <ScrubInput
                  v-model="demoScrubRadius"
                  label="圆角"
                  :min="0"
                  :max="48"
                  suffix="px"
                />

                <ScrubInput
                  v-model="demoScrubOpacity"
                  label="不透明度"
                  :min="10"
                  :max="100"
                  suffix="%"
                />
              </div>

              <!-- 实时响应式画布预览卡片 -->
              <div class="flex items-center justify-center p-4">
                <div
                  class="flex h-24 items-center justify-center bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-mono text-xs font-bold shadow-lg transition-all duration-75"
                  :style="{
                    width: `${demoScrubWidth / 2}

px`,
                    borderRadius: `${demoScrubRadius}

px`,
                    opacity: demoScrubOpacity / 100,
                  }

"
                >
                  预览尺寸：{{ Math.round(demoScrubWidth / 2) }}

 × 96px
                </div>
              </div>

              <p class="text-xs font-mono text-zinc-400">
                按住标签左右拖动调整数值（Shift 加速，Alt 微调），双击数值可直接输入
              </p>
            </div>

            <!-- 30. Password Strength 预览 -->
            <div
              v-else-if="currentComponent.id === 'password-strength'" class="w-full flex flex-col items-center justify-center">
              <div class="w-full max-w-sm">
                <PasswordStrength v-model="demoPassword" />
              </div>

              <p class="text-xs font-mono text-zinc-400">
                实时检查长度、大小写、数字和特殊字符，点击眼睛图标可显示密码
              </p>
            </div>

            <!-- 31. Money Input 预览 -->
            <div
              v-else-if="currentComponent.id === 'money-input'" class="w-full flex flex-col items-center justify-center">
              <div class="w-full max-w-md">
                <MoneyInput
                  v-model="demoMoneyAmount"
                  v-model:currency="demoMoneyCurrency"
                />
              </div>

              <div class="rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300">
                绑定的值：<span class="font-bold text-blue-600 dark:text-blue-400">{{ demoMoneyCurrency }}

 {{ demoMoneyAmount }}

</span>
              </div>

              <p class="text-xs font-mono text-zinc-400">
                金额较长时字号自动缩小，自动添加千分位，可点击下方金额快速填入
              </p>
            </div>

            <!-- 32. Phone Input 预览 -->
            <div
              v-else-if="currentComponent.id === 'phone-input'" class="w-full flex flex-col items-center justify-center">
              <div class="w-full max-w-sm">
                <PhoneInput
                  v-model="demoPhoneNumber"
                  v-model:country-code="demoPhoneCountry"
                />
              </div>

              <div class="rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300">
                地区：<span class="font-bold text-blue-600 dark:text-blue-400">{{ demoPhoneCountry }}

</span> · 号码：<span class="font-bold text-zinc-900 dark:text-white">{{ demoPhoneNumber || '(未输入)' }}

</span>
              </div>

              <p class="text-xs font-mono text-zinc-400">
                按所选国家的格式自动分段，号码位数正确时显示对勾
              </p>
            </div>

            <!-- 33. Tag Input 预览 -->
            <div
              v-else-if="currentComponent.id === 'tag-input'" class="w-full flex flex-col items-center justify-center">
              <div class="w-full max-w-md">
                <TagInput
                  v-model="demoTags"
                  :max-tags="8"
                />
              </div>

              <div class="rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300">
                当前标签：<span class="font-bold text-blue-600 dark:text-blue-400">{{ JSON.stringify(demoTags) }}

</span>
              </div>

              <p class="text-xs font-mono text-zinc-400">
                按回车或逗号添加标签，按退格键删除最后一个，最多可添加的数量有上限
              </p>
            </div>

            <!-- 34. Mention Input 预览 -->
            <div
              v-else-if="currentComponent.id === 'mention-input'" class="w-full flex flex-col items-center justify-center">
              <div class="w-full max-w-lg">
                <MentionInput v-model="demoMentionText" />
              </div>

              <p class="text-xs font-mono text-zinc-400">
                输入 @ 弹出成员列表，用方向键选择，按 Enter 或 Tab 插入
              </p>
            </div>

            <!-- 35. Segmented Control 预览 -->
            <div
              v-else-if="currentComponent.id === 'segmented-control'" class="w-full flex flex-col items-center justify-center">
              <div class="flex flex-col items-center gap-4">
                <SegmentedControl
                  v-model="demoSegmentedValue"
                  :options="demoSegmentedOptions"
                  size="md"
                />

                <SegmentedControl
                  v-model="demoSegmentedValue"
                  :options="[
                    { id: 'preview', label: '天' }

,
                    { id: 'code', label: '周' }

,
                    { id: 'docs', label: '月' }

,
                  ]"
                  size="sm"
                />
              </div>

              <div class="rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300">
                当前选择：<span class="font-bold text-blue-600 dark:text-blue-400">{{ demoSegmentedValue }}

</span>
              </div>

              <p class="text-xs font-mono text-zinc-400">
                选中背景平滑滑动到当前项，也可以用方向键切换
              </p>
            </div>

            <!-- 36. Breadcrumb Trail 预览 -->
            <div
              v-else-if="currentComponent.id === 'breadcrumb-trail'" class="w-full flex flex-col items-center justify-center">
              <div class="w-full max-w-xl rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/80">
                <div class="text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-4">
                  折叠模式（最多显示 3 项，其余收进省略号）：
                </div>
                <BreadcrumbTrail
                  :items="demoCrumbs"
                  :max-items="3"
                  @select="(_item, index) => navigateCrumb(index)"
                />
              </div>

              <div class="w-full max-w-xl rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/80">
                <div class="text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-4">
                  全展开模式：
                </div>
                <BreadcrumbTrail
                  :items="demoCrumbs"
                  :max-items="10"
                  @select="(_item, index) => navigateCrumb(index)"
                />
              </div>

              <div class="flex flex-wrap items-center justify-center gap-3">
                <div class="rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-1.5 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300">
                  当前位置：<span class="font-bold text-blue-600 dark:text-blue-400">{{ demoCrumbs.length ? demoCrumbs[demoCrumbs.length - 1].label : '首页' }}

</span>
                </div>
                <button
                  type="button"
                  :disabled="demoCrumbs.length >= DEMO_CRUMBS_FULL.length"
                  @click="drillDownCrumb"
                  class="rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  进入下一级
                </button>
                <button
                  type="button"
                  @click="resetCrumbs"
                  class="rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  恢复完整路径
                </button>
              </div>

              <p class="text-xs font-mono text-zinc-400">
                点击任一上级可返回该层；层级较多时中间部分折叠，点击省略号展开
              </p>
            </div>

            <!-- 37. Floating Action Menu 预览 -->
            <div
              v-else-if="currentComponent.id === 'floating-action-menu'" class="relative flex flex-col items-center justify-start w-full min-h-[380px]"
            >
              <!-- 标题与说明集中在顶部，右下角整块留给 FAB 的四分之一圆弧展开 -->
              <div class="self-start text-left space-y-2">
                <div class="text-sm font-bold text-zinc-800 dark:text-zinc-100">
                  点击右下角的按钮，子按钮从左侧沿弧线绕到上方弹出
                </div>
                <div class="text-xs font-mono text-blue-600 dark:text-blue-400">
                  最近操作：{{ demoFABLogs }}


                </div>
                <p class="text-xs font-mono text-zinc-400">
                  加号旋转变成关闭，子按钮依次弹出，悬停时在左侧显示名称
                </p>
              </div>

              <!-- 模拟悬浮 FAB 区域（容器右下角） -->
              <div class="absolute bottom-8 right-8 z-20">
                <FloatingActionMenu :actions="demoFABActions" corner="bottom-right" />
              </div>
            </div>

            <!-- 38. Navbar Hover 预览 -->
            <div
              v-else-if="currentComponent.id === 'navbar-hover'" class="w-full flex flex-col items-center justify-center">
              <div class="w-full flex justify-center">
                <NavbarHover
                  :items="demoNavHoverMenu"
                  @select="(item) => demoNavHoverSelected = item.title"
                />
              </div>

              <div class="rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300">
                选中的子菜单：<span class="font-bold text-blue-600 dark:text-blue-400">{{ demoNavHoverSelected }}

</span>
              </div>

              <p class="text-xs font-mono text-zinc-400">
                在导航项之间移动鼠标，下拉面板和小箭头会平滑跟随
              </p>
            </div>

            <!-- 39. Pagination Slider 预览 -->
            <div
              v-else-if="currentComponent.id === 'pagination-slider'" class="w-full flex flex-col items-center justify-center">
              <div class="w-full max-w-md rounded-2xl border border-zinc-200/80 bg-white/80 p-6 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/80 flex flex-col items-center gap-4">
                <PaginationSlider
                  v-model="demoPage"
                  :total-pages="20"
                  :show-slider="true"
                />
              </div>

              <div class="rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300">
                当前页：第<span class="font-bold text-blue-600 dark:text-blue-400">{{ demoPage }}

</span> 页 / 共 20 页
              </div>

              <p class="text-xs font-mono text-zinc-400">
                页码按钮下方有一条滑块，页数很多时可以拖动快速跳页
              </p>
            </div>

            <!-- 40. Circular Progress Nav 预览 -->
            <div
              v-else-if="currentComponent.id === 'circular-progress-nav'" class="w-full flex flex-col items-center justify-center">
              <div class="flex items-center gap-8">
                <CircularProgressNav
                  :progress="demoCircularProgress"
                  :size="64"
                  :stroke-width="5"
                  @click="handleCircularClick"
                />

                <CircularProgressNav
                  :progress="100"
                  :size="52"
                  :stroke-width="4"
                  tooltip="已完成"
                />

                <CircularProgressNav
                  :progress="35"
                  :size="48"
                  :stroke-width="3.5"
                  tooltip="已完成 35%"
                />
              </div>

              <div class="flex items-center gap-3">
                <button
                  type="button"
                  @click="demoCircularProgress = Math.max(0, demoCircularProgress - 10)"
                  class="rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors"
                >
                  -10%
                </button>
                <div class="rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-1.5 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300">
                  当前进度：<span class="font-bold text-blue-600 dark:text-blue-400">{{ demoCircularProgress }}

%</span>
                </div>
                <button
                  type="button"
                  @click="demoCircularProgress = Math.min(100, demoCircularProgress + 10)"
                  class="rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors"
                >
                  +10%
                </button>
              </div>

              <p class="text-xs font-mono text-zinc-400">
                圆环显示当前进度，中间可以放图标，点击有按压反馈
              </p>
            </div>

            <!-- 41. Glowing Card 预览 -->
            <div
              v-else-if="currentComponent.id === 'glowing-card'" class="w-full flex flex-col items-center justify-center">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                <!-- 常驻旋转流光卡片 -->
                <GlowingCard :duration="4" :blur="20" class="w-full">
                  <div class="flex items-start gap-3.5">
                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      <Sparkles class="h-5 w-5" />
                    </div>
                    <div>
                      <h4 class="font-bold text-zinc-900 dark:text-white">一直发光</h4>
                      <p class="mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        卡片背后的光晕持续旋转，透过细边框形成发光轮廓。
                      </p>
                    </div>
                  </div>
                </GlowingCard>

                <!-- 悬停激活流光卡片 -->
                <GlowingCard
                  :duration="3"
                  :blur="24"
                  :hover-only="true"
                  glow-color="conic-gradient(from 0deg, #ec4899, #8b5cf6, #3b82f6, #ec4899)"
                  class="w-full"
                >
                  <div class="flex items-start gap-3.5">
                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                      <Rocket class="h-5 w-5" />
                    </div>
                    <div>
                      <h4 class="font-bold text-zinc-900 dark:text-white">悬停时发光</h4>
                      <p class="mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        鼠标移入时才显示发光边框，移出后淡出。
                      </p>
                    </div>
                  </div>
                </GlowingCard>
              </div>

              <p class="text-xs font-mono text-zinc-400">
                底层是模糊的旋转光晕，上层用细边框裁出发光轮廓
              </p>
            </div>

            <!-- 42. Glass Card 预览 -->
            <div
              v-else-if="currentComponent.id === 'glass-card'" class="relative flex flex-col items-center justify-center w-full min-h-[360px]"
            >
              <!-- 背后动态彩色氛围球（用于检验磨砂亚克力真实透射与折射效果） -->
              <div class="absolute -top-10 -left-10 h-48 w-48 rounded-full bg-blue-500/30 blur-2xl pointer-events-none" />
              <div class="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-purple-500/30 blur-2xl pointer-events-none" />
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-64 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl relative z-10">
                <GlassCard :blur="16" :saturation="180" class="w-full">
                  <div class="flex items-start gap-3.5">
                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/40 text-blue-600 dark:bg-white/10 dark:text-blue-400 shadow-sm">
                      <Layers class="h-5 w-5" />
                    </div>
                    <div>
                      <h4 class="font-bold text-zinc-900 dark:text-white">磨砂玻璃</h4>
                      <p class="mt-1 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        背景模糊 16px、饱和度提高到 180%，顶部有一条细高光线。
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard :blur="24" :saturation="200" class="w-full">
                  <div class="flex items-start gap-3.5">
                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/40 text-purple-600 dark:bg-white/10 dark:text-purple-400 shadow-sm">
                      <Cpu class="h-5 w-5" />
                    </div>
                    <div>
                      <h4 class="font-bold text-zinc-900 dark:text-white">悬停浮起</h4>
                      <p class="mt-1 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        鼠标悬停时卡片轻微上浮，阴影变大。
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>

              <p class="text-xs font-mono text-zinc-400 relative z-10">
                背景模糊加饱和度增强，叠加顶部高光线
              </p>
            </div>

            <!-- 43. Spotlight Card 预览 -->
            <div
              v-else-if="currentComponent.id === 'spotlight-card'" class="w-full flex flex-col items-center justify-center">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                <SpotlightCard
                  :spotlight-radius="280"
                  spotlight-color="rgba(59, 130, 246, 0.18)"
                  class="w-full"
                >
                  <div class="flex items-start gap-3.5">
                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      <Zap class="h-5 w-5" />
                    </div>
                    <div>
                      <h4 class="font-bold text-zinc-900 dark:text-white">蓝色聚光灯</h4>
                      <p class="mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        鼠标在卡片上移动时，光会照亮光标附近的卡片表面和边框。
                      </p>
                    </div>
                  </div>
                </SpotlightCard>

                <SpotlightCard
                  :spotlight-radius="280"
                  spotlight-color="rgba(168, 85, 247, 0.18)"
                  class="w-full"
                >
                  <div class="flex items-start gap-3.5">
                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                      <Compass class="h-5 w-5" />
                    </div>
                    <div>
                      <h4 class="font-bold text-zinc-900 dark:text-white">紫色聚光灯</h4>
                      <p class="mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        边框和表面一起被照亮，移出卡片后光晕慢慢消失。
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </div>

              <p class="text-xs font-mono text-zinc-400">
                在两张卡片上移动鼠标查看效果
              </p>
            </div>

            <!-- 44. Tilt Card 预览 -->
            <div
              v-else-if="currentComponent.id === 'tilt-card'" class="w-full flex flex-col items-center justify-center">
              <div class="w-full max-w-sm flex justify-center">
                <TiltCard :max-tilt="16" :perspective="1000" :glare="true" class="w-full">
                  <div class="flex flex-col items-center text-center p-2 [transform-style:preserve-3d]">
                    <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 [transform:translateZ(40px)]">
                      <Compass class="h-7 w-7" />
                    </div>
                    <h4 class="mt-4 text-base font-bold text-zinc-900 dark:text-white [transform:translateZ(30px)]">
                      3D 倾斜卡片
                    </h4>
                    <p class="mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed [transform:translateZ(20px)]">
                      卡片随鼠标位置倾斜，表面有一层反光，图标带有前后层次感。
                    </p>
                    <div class="mt-4 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 [transform:translateZ(25px)]">
                      把鼠标移到卡片上并移动
                    </div>
                  </div>
                </TiltCard>
              </div>

              <p class="text-xs font-mono text-zinc-400">
                用 CSS 3D 旋转实现倾斜，内部元素可以设置不同的纵深
              </p>
            </div>

            <!-- 45. Card Stack 预览 -->
            <div
              v-else-if="currentComponent.id === 'card-stack'" class="w-full flex flex-col items-center justify-center">
              <CardStack
                :items="demoCardStackItems"
                :max-visible="3"
                @swipe="handleCardSwipe"
              />

              <div class="rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300">
                划卡记录：<span class="font-bold text-blue-600 dark:text-blue-400">{{ demoCardStackSwipeLog }}

</span>
              </div>

              <p class="text-xs font-mono text-zinc-400">
                按住最上面的卡片左右拖动即可划走，也可以用下方的按钮翻页
              </p>
            </div>

            <!-- 46. Noise Card 预览 -->
            <div
              v-else-if="currentComponent.id === 'noise-card'" class="w-full flex flex-col items-center justify-center">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                <!-- 科技蓝紫噪点卡片 -->
                <NoiseCard
                  gradient="linear-gradient(135deg, rgba(59, 130, 246, 0.16), rgba(147, 51, 234, 0.16))"
                  :grain-opacity="0.14"
                  :animated="true"
                  class="w-full"
                >
                  <div class="flex items-start gap-3.5">
                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      <Film class="h-5 w-5" />
                    </div>
                    <div>
                      <h4 class="font-bold text-zinc-900 dark:text-white">胶片颗粒</h4>
                      <p class="mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        用 SVG 滤镜生成细小的颗粒，让深色表面更有质感。
                      </p>
                    </div>
                  </div>
                </NoiseCard>

                <!-- 破晓极光噪点卡片 -->
                <NoiseCard
                  gradient="linear-gradient(135deg, rgba(16, 185, 129, 0.16), rgba(245, 158, 11, 0.16))"
                  :grain-opacity="0.16"
                  :animated="true"
                  class="w-full"
                >
                  <div class="flex items-start gap-3.5">
                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <Sparkles class="h-5 w-5" />
                    </div>
                    <div>
                      <h4 class="font-bold text-zinc-900 dark:text-white">渐变加颗粒</h4>
                      <p class="mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        绿色到橙色的渐变背景上叠加颗粒。
                      </p>
                    </div>
                  </div>
                </NoiseCard>
              </div>

              <p class="text-xs font-mono text-zinc-400">
                噪点由 SVG 滤镜生成，不需要图片资源
              </p>
            </div>

            <!-- 47. Sparkline 预览 -->
            <div
              v-else-if="currentComponent.id === 'sparkline'" class="w-full flex flex-col items-center justify-center">
              <div class="flex flex-wrap items-center justify-center gap-8">
                <!-- 极客蓝趋势图 -->
                <div class="rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/80 flex flex-col items-start gap-3">
                  <div class="flex items-center justify-between w-full">
                    <span class="text-xs font-bold text-zinc-500">API 请求量</span>
                    <span class="text-xs font-mono font-bold text-blue-500">+38.2%</span>
                  </div>
                  <Sparkline
                    :data="demoSparklineData"
                    :width="280"
                    :height="80"
                    color="#3b82f6"
                    :fill="true"
                    :format-value="(v) => `${v}

 k/s`"
                  />
                </div>

                <!-- 极光绿趋势图 -->
                <div class="rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/80 flex flex-col items-start gap-3">
                  <div class="flex items-center justify-between w-full">
                    <span class="text-xs font-bold text-zinc-500">缓存命中率</span>
                    <span class="text-xs font-mono font-bold text-emerald-500">99.4%</span>
                  </div>
                  <Sparkline
                    :data="[88, 91, 89, 94, 92, 96, 95, 98, 97, 99]"
                    :width="280"
                    :height="80"
                    color="#10b981"
                    :fill="true"
                    :format-value="(v) => `${v}

%`"
                  />
                </div>
              </div>

              <p class="text-xs font-mono text-zinc-400">
                把鼠标移到图表上，会显示辅助线和该点的数值
              </p>
            </div>

            <!-- 48. Animated Counter 预览 -->
            <div
              v-else-if="currentComponent.id === 'animated-counter'" class="w-full flex flex-col items-center justify-center">
              <div class="flex flex-col items-center gap-3">
                <span class="text-xs font-mono text-zinc-400 font-bold uppercase tracking-wider">
                  月度经常性收入 (MRR)
                </span>
                <div class="text-4xl sm:text-5xl font-black">
                  <AnimatedCounter
                    :value="demoCounterValue"
                    prefix="¥"
                    :decimals="0"
                    :duration="1200"
                    :trend-color="true"
                  />
                </div>
              </div>

              <!-- 快捷步进按钮组 -->
              <div class="flex items-center gap-3">
                <button
                  type="button"
                  @click="handleAddCounter(-15000)"
                  class="rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-mono font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  -15,000
                </button>
                <button
                  type="button"
                  @click="handleAddCounter(-2500)"
                  class="rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-mono font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  -2,500
                </button>
                <button
                  type="button"
                  @click="handleAddCounter(5000)"
                  class="rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-mono font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  +5,000
                </button>
                <button
                  type="button"
                  @click="handleAddCounter(32800)"
                  class="rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-mono font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  +32,800
                </button>
              </div>

              <p class="text-xs font-mono text-zinc-400">
                数值变化时平滑过渡，上涨显示绿色、下跌显示红色，并自动添加千分位
              </p>
            </div>

            <!-- 49. Radial Gauge 预览 -->
            <div
              v-else-if="currentComponent.id === 'radial-gauge'" class="w-full flex flex-col items-center justify-center">
              <div class="flex flex-wrap items-center justify-center gap-10">
                <RadialGauge
                  v-model:value="demoGaugeValue"
                  label="CPU 使用率"
                  unit="%"
                  :size="180"
                  :thresholds="true"
                  draggable
                />

                <RadialGauge
                  :value="94"
                  label="磁盘使用率"
                  unit="%"
                  :size="150"
                  :thresholds="true"
                />

                <RadialGauge
                  :value="38"
                  label="内存使用率"
                  unit="%"
                  :size="150"
                  :thresholds="true"
                />
              </div>

              <div class="flex items-center gap-3">
                <button
                  type="button"
                  @click="demoGaugeValue = Math.max(0, demoGaugeValue - 15)"
                  class="rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  -15%
                </button>
                <div class="rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-1.5 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300">
                  CPU 使用率：<span class="font-bold text-blue-600 dark:text-blue-400">{{ demoGaugeValue }}

%</span>
                </div>
                <button
                  type="button"
                  @click="demoGaugeValue = Math.min(100, demoGaugeValue + 15)"
                  class="rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  +15%
                </button>
              </div>

              <p class="text-xs font-mono text-zinc-400">
                拖动第一个仪表盘的末端圆点或点击轨道可以调节数值，超过 75% 变黄、超过 90% 变红
              </p>
            </div>

            <!-- 50. Progress Steps 预览 -->
            <div
              v-else-if="currentComponent.id === 'progress-steps'" class="w-full flex flex-col items-center justify-center">
              <div class="w-full max-w-2xl rounded-2xl border border-zinc-200/80 bg-white/80 p-8 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/80">
                <ProgressSteps
                  v-model:current-step="demoCurrentStep"
                  :steps="demoStepList"
                />
              </div>

              <div class="flex items-center gap-3">
                <button
                  type="button"
                  :disabled="demoCurrentStep <= 1"
                  @click="demoCurrentStep = Math.max(1, demoCurrentStep - 1)"
                  class="rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium hover:bg-zinc-100 disabled:opacity-40 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  上一步
                </button>
                <div class="rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-1.5 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300">
                  当前步骤：<span class="font-bold text-blue-600 dark:text-blue-400">第 {{ demoCurrentStep }}

 步（{{ demoStepList[demoCurrentStep - 1]?.title }}

）</span>
                </div>
                <button
                  type="button"
                  :disabled="demoCurrentStep >= demoStepList.length"
                  @click="demoCurrentStep = Math.min(demoStepList.length, demoCurrentStep + 1)"
                  class="rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium hover:bg-zinc-100 disabled:opacity-40 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  下一步
                </button>
              </div>

              <p class="text-xs font-mono text-zinc-400">
                已完成的步骤显示对勾，当前步骤带呼吸光圈，连线随进度填充
              </p>
            </div>

            <!-- 51. Comparison Matrix 预览 -->
            <div
              v-else-if="currentComponent.id === 'comparison-matrix'" class="w-full flex flex-col items-center justify-center">
              <div class="w-full max-w-3xl rounded-2xl border border-zinc-200/80 bg-white/80 p-6 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/80">
                <ComparisonMatrix
                  v-model="demoMatrixSelected"
                  :plans="demoMatrixPlans"
                  :features="demoMatrixFeatures"
                />
              </div>

              <div class="rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300">
                当前选择：<span class="font-bold text-blue-600 dark:text-blue-400">{{ demoMatrixPlans.find((p) => p.id === demoMatrixSelected)?.name }}

</span>
              </div>

              <p class="text-xs font-mono text-zinc-400">
                点击卡片选择方案；表格中用对勾、减号或文字表示各功能的支持情况
              </p>
            </div>

            <!-- 52. Stat Card 预览 -->
            <div
              v-else-if="currentComponent.id === 'stat-card'" class="w-full flex flex-col items-center justify-center">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                <!-- 核心 TPS 度量卡片 -->
                <StatCard
                  title="每秒请求数"
                  :value="89240"
                  suffix=" TPS"
                  :change="18.5"
                  change-period="较昨日"
                  :trend-data="demoStatTrend"
                  :icon="Activity"
                  color="#3b82f6"
                  class="w-full"
                />

                <!-- 活跃会话数度量卡片 -->
                <StatCard
                  title="在线用户"
                  :value="14380"
                  suffix=" 人"
                  :change="-2.4"
                  change-period="较上周"
                  :trend-data="[65, 58, 62, 54, 49, 52, 48, 44]"
                  :icon="Bot"
                  color="#ec4899"
                  class="w-full"
                />
              </div>

              <p class="text-xs font-mono text-zinc-400">
                包含标题、滚动数字、涨跌标签和迷你趋势图
              </p>
            </div>

            <!-- 53. Command Dialog 快捷命令浮层 -->
            <div
              v-else-if="currentComponent.id === 'command-dialog'" class="w-full flex flex-col items-center justify-center">

              <button
                type="button"
                @click="demoCmdOpen = true"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>打开命令面板</span>
                <span class="px-1.5 py-0.5 rounded bg-white/20 dark:bg-zinc-900/10 font-mono text-xs">⌘K</span>
              </button>

              <CommandDialog v-model="demoCmdOpen" />
            </div>

            <!-- 54. Slide Over Drawer 侧滑抽屉 -->
            <div
              v-else-if="currentComponent.id === 'slide-over-drawer'" class="w-full flex flex-col items-center justify-center">

              <div class="flex items-center gap-3">
                <button
                  type="button"
                  @click="demoDrawerSide = 'right'; demoDrawerOpen = true"
                  class="px-4 py-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium text-xs shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  从右侧打开
                </button>
                <button
                  type="button"
                  @click="demoDrawerSide = 'left'; demoDrawerOpen = true"
                  class="px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200 font-medium text-xs hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all cursor-pointer"
                >
                  从左侧打开
                </button>
              </div>

              <SlideOverDrawer
                v-model="demoDrawerOpen"
                :side="demoDrawerSide"
                title="偏好设置"
                description="修改后点击保存生效"
              >
                <div class="space-y-4 text-xs text-zinc-600 dark:text-zinc-300">
                  <div class="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200/50 dark:border-zinc-700/50">
                    <p class="font-semibold text-zinc-900 dark:text-white mb-1">邮件通知</p>
                    <p class="text-zinc-500">有新评论或 @ 提及时发送邮件提醒。</p>
                  </div>
                  <div class="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200/50 dark:border-zinc-700/50">
                    <p class="font-semibold text-zinc-900 dark:text-white mb-1">自动保存</p>
                    <p class="text-zinc-500">编辑内容每隔 30 秒自动保存一次。</p>
                  </div>
                </div>

                <template #footer="{ close }

">
                  <div class="flex items-center justify-end gap-2 w-full">
                    <button
                      type="button"
                      @click="close"
                      class="px-3.5 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                    >
                      取消
                    </button>
                    <button
                      type="button"
                      @click="close"
                      class="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs text-white font-medium shadow-md shadow-blue-500/20 transition-colors cursor-pointer"
                    >
                      保存设置
                    </button>
                  </div>
                </template>
              </SlideOverDrawer>
            </div>

            <!-- 55. Floating Popover 微动气泡浮层 -->
            <div
              v-else-if="currentComponent.id === 'floating-popover'" class="w-full flex flex-col items-center justify-center">

              <div class="flex flex-wrap items-center justify-center gap-6">
                <!-- 下方弹出气泡 -->
                <FloatingPopover placement="bottom" width="w-80">
                  <template #trigger>
                    <button class="px-4 py-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs font-medium shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
                      向下弹出 ▾
                    </button>
                  </template>
                  <div class="space-y-2">
                    <div class="flex items-center gap-2">
                      <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <h4 class="text-xs font-bold text-zinc-900 dark:text-white">服务运行正常</h4>
                    </div>
                    <p class="text-[11px] text-zinc-500 leading-relaxed">
                      当前延迟 14ms。点击浮层外部即可关闭。
                    </p>
                  </div>
                </FloatingPopover>

                <!-- 上方弹出气泡 -->
                <FloatingPopover placement="top" width="w-72">
                  <template #trigger>
                    <button class="px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200 text-xs font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all cursor-pointer">
                      向上弹出 ▴
                    </button>
                  </template>
                  <div class="space-y-1.5">
                    <h4 class="text-xs font-bold text-zinc-900 dark:text-white">提示</h4>
                    <p class="text-[11px] text-zinc-500">
                      浮层可以从上、下、左、右四个方向弹出。
                    </p>
                  </div>
                </FloatingPopover>
              </div>
            </div>

            <!-- 56. Context Menu 上下文菜单 -->
            <div
              v-else-if="currentComponent.id === 'context-menu'" class="w-full flex flex-col items-center justify-center">

              <div class="w-full max-w-lg">
                <ContextMenu :items="demoContextMenuItems">
                  <div
                    class="h-52 w-full flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-300 dark:border-zinc-700 bg-white/50 dark:bg-zinc-900/50 p-6 text-center select-none cursor-context-menu hover:border-emerald-500/50 transition-colors"
                  >
                    <div class="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-lg mb-3">
                      🖱️
                    </div>
                    <span class="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                      在虚线框内点击鼠标右键
                    </span>
                    <span class="text-xs text-zinc-400 mt-1 font-mono">
                      菜单靠近屏幕边缘时会自动调整位置
                    </span>
                  </div>
                </ContextMenu>
              </div>
            </div>

            <!-- 57. Toast Notification 消息吐司 -->
            <div
              v-else-if="currentComponent.id === 'toast-notification'" class="w-full flex flex-col items-center justify-center">

              <!-- 触发按钮组 -->
              <div class="flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  @click="triggerDocsToast('success')"
                  class="px-4 py-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-semibold hover:bg-emerald-500/20 active:scale-95 transition-all cursor-pointer"
                >
                  ✓ 成功提示
                </button>
                <button
                  type="button"
                  @click="triggerDocsToast('error')"
                  class="px-4 py-2 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 text-xs font-semibold hover:bg-rose-500/20 active:scale-95 transition-all cursor-pointer"
                >
                  ✕ 错误提示
                </button>
                <button
                  type="button"
                  @click="triggerDocsToast('warning')"
                  class="px-4 py-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-xs font-semibold hover:bg-amber-500/20 active:scale-95 transition-all cursor-pointer"
                >
                  ⚠ 警告提示
                </button>
                <button
                  type="button"
                  @click="triggerDocsToast('info')"
                  class="px-4 py-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-xs font-semibold hover:bg-blue-500/20 active:scale-95 transition-all cursor-pointer"
                >
                  ℹ 信息提示
                </button>
              </div>

              <p class="text-xs font-mono text-zinc-400">
                消息会出现在右下角并依次堆叠，可以点击关闭，悬停时暂停倒计时
              </p>

              <!-- 吐司容器渲染 -->
              <ToastNotification
                :toasts="demoToasts"
                position="bottom-right"
                @close="handleCloseToast"
              />
            </div>

            <!-- 58. Dropdown Menu 下拉菜单 -->
            <div
              v-else-if="currentComponent.id === 'dropdown-menu'" class="w-full flex flex-col items-center justify-center">

              <div class="flex items-center gap-6">
                <!-- 左对齐默认下拉 -->
                <DropdownMenu
                  trigger-text="项目操作"
                  align="left"
                  width="w-60"
                  @select="handleDropdownSelect"
                />

                <!-- 右对齐下拉 -->
                <DropdownMenu
                  trigger-text="视图设置"
                  align="right"
                  width="w-56"
                  @select="handleDropdownSelect"
                />
              </div>

              <!-- 选中的动态反馈标签 -->
              <div class="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-700/60 text-xs font-mono text-zinc-600 dark:text-zinc-300">
                最近选择：{{ demoDropdownLastAction }}


              </div>
            </div>

            <!-- 59. Globe 3D 数字孪生地球仪 -->
            <div
              v-else-if="currentComponent.id === 'globe-3d'" class="w-full flex flex-col items-center justify-center">

              <Globe3D :size="380" />
            </div>

            <!-- 60. Vortex 引力涡旋粒子背景 -->
            <div
              v-else-if="currentComponent.id === 'vortex'" class="w-full flex flex-col items-center justify-center">
              <div class="h-80 w-full overflow-hidden rounded-2xl border border-zinc-800 shadow-xl">
                <Vortex :particle-count="260" :base-speed="0.16" class="flex h-full flex-col items-center justify-center p-6 text-center">
                  <h2 class="text-3xl font-black text-white tracking-wider drop-shadow-md">
                    粒子涡旋
                  </h2>
                  <p class="mt-2 text-xs font-mono text-zinc-300 max-w-sm">
                    粒子围绕中心旋转并带拖尾
                  </p>
                </Vortex>
              </div>
            </div>

            <!-- 61. Sparkles Core 星芒晶体粒子矩阵 -->
            <div
              v-else-if="currentComponent.id === 'sparkles-core'" class="w-full flex flex-col items-center justify-center">
              <div class="relative h-72 w-full flex flex-col items-center justify-center bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 shadow-xl">
                <SparklesCore
                  :particle-density="160"
                  particle-color="#38bdf8"
                  :min-size="0.6"
                  :max-size="2"
                  :speed="1.2"
                  class="absolute inset-0"
                />
                <div class="relative z-10 text-center space-y-2 pointer-events-none">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    AURA SPARKLES
                  </span>
                  <h2 class="text-3xl sm:text-4xl font-black text-white tracking-widest">
                    星点粒子
                  </h2>
                  <p class="text-xs font-mono text-zinc-400">
                    细小光点随机漂浮、明暗闪烁
                  </p>
                </div>
              </div>
            </div>

            <!-- 62. Gravity Cards 重力物理碰撞卡片 -->
            <div
              v-else-if="currentComponent.id === 'gravity-cards'" class="w-full flex flex-col items-center justify-center">

              <div class="w-full max-w-2xl">
                <GravityCards class="h-80" />
              </div>
            </div>

            <!-- 63. Perspective Grid 3D 透视网格地平线 -->
            <div
              v-else-if="currentComponent.id === 'perspective-grid'" class="w-full flex flex-col items-center justify-center">
              <div class="w-full overflow-hidden rounded-2xl border border-zinc-800 shadow-xl">
                <PerspectiveGrid :speed="14" class="h-80">
                  <div class="space-y-3">
                    <h2 class="text-3xl sm:text-4xl font-black text-white tracking-widest drop-shadow-lg">
                      CYBER HORIZON 3D
                    </h2>
                    <p class="text-xs font-mono text-cyan-300 max-w-md mx-auto">
                      带透视的网格持续向前推进，远处地平线带渐隐光晕
                    </p>
                  </div>
                </PerspectiveGrid>
              </div>
            </div>

            <!-- 64. Fluid Cursor 流体微粒光标跟随 -->
            <div
              v-else-if="currentComponent.id === 'fluid-cursor'" class="w-full flex flex-col items-center justify-center">

              <div class="h-72 w-full max-w-xl rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800/80 shadow-xl">
                <FluidCursor class="flex h-full items-center justify-center p-6 text-center">
                  <div class="space-y-2 pointer-events-none select-none">
                    <div class="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mx-auto text-blue-400">
                      ✦
                    </div>
                    <h4 class="text-lg font-bold text-white">在这里移动鼠标</h4>
                    <p class="text-xs text-zinc-400 font-mono">移动越快，拖尾越长</p>
                  </div>
                </FluidCursor>
              </div>
            </div>

            <!-- 65. Text Generate Effect 逐词高斯解冻生成 -->
            <div
              v-else-if="currentComponent.id === 'text-generate-effect'" class="w-full flex flex-col items-center justify-center">

              <div class="max-w-xl text-center p-6 rounded-2xl border border-zinc-200/80 bg-white/80 dark:border-zinc-800/80 dark:bg-zinc-900/80 shadow-sm">
                <TextGenerateEffect
                  words="Aura UI 是一套 Vue 3 动效组件库，每个组件都是独立的 .vue 文件，复制到项目里就能使用。"
                  :duration="0.5"
                  :delay="0.05"
                  class="text-xl sm:text-2xl font-bold"
                />
              </div>
            </div>

            <!-- 66. Word Rotate 核心词 3D 纵深翻转轮播 -->
            <div
              v-else-if="currentComponent.id === 'word-rotate'" class="w-full flex flex-col items-center justify-center">

              <div class="text-2xl sm:text-4xl font-black text-zinc-900 dark:text-white flex flex-wrap items-center justify-center gap-3">
                <span>让你的产品</span>
                <WordRotate
                  :words="['更流畅', '更好看', '更好用', '更有趣']"
                  :duration="2200"
                />
              </div>
            </div>

            <!-- 67. Flip Words 流体多词交替字母级翻牌 -->
            <div
              v-else-if="currentComponent.id === 'flip-words'" class="w-full flex flex-col items-center justify-center">

              <div class="text-2xl sm:text-3xl font-extrabold text-zinc-800 dark:text-zinc-200 flex items-center justify-center gap-2">
                <span>做出</span>
                <FlipWords
                  :words="['流畅', '好看', '直观', '有趣']"
                  :duration="2600"
                  class="text-emerald-500 dark:text-emerald-400"
                />
                <span>的交互动效</span>
              </div>
            </div>

            <!-- 68. Hyper Text 赛博乱码解密变换文字 -->
            <div
              v-else-if="currentComponent.id === 'hyper-text'" class="w-full flex flex-col items-center justify-center">

              <div class="flex flex-col items-center gap-4">
                <div class="p-6 rounded-2xl bg-zinc-900 dark:bg-black border border-zinc-800 shadow-xl">
                  <HyperText
                    text="AURA_PROTOCOL_INITIALIZED"
                    :duration="700"
                    class="text-2xl sm:text-3xl font-mono text-emerald-400 tracking-widest"
                  />
                </div>
                <span class="text-xs text-zinc-400 font-mono">（鼠标悬停在文字上可重新播放）</span>
              </div>
            </div>

            <!-- 69. Gradual Spacing 字间距弹性凝聚与扩散渐变 -->
            <div
              v-else-if="currentComponent.id === 'gradual-spacing'" class="w-full flex flex-col items-center justify-center">

              <div class="py-6">
                <GradualSpacing
                  text="AURA MOTION SYSTEM"
                  :duration="0.5"
                  :delay-multiple="0.04"
                  class="text-2xl sm:text-4xl font-black tracking-widest text-zinc-900 dark:text-white"
                />
              </div>
            </div>

            <!-- 70. Text Reveal Card 光标探照灯显影卡片 -->
            <div
              v-else-if="currentComponent.id === 'text-reveal-card'" class="w-full flex flex-col items-center justify-center">

              <TextRevealCard
                text="把鼠标移到这里"
                reveal-text="Aura UI · Vue 3 动效组件库"
              />
            </div>

            <!-- 71. Magnetic Button 磁吸悬浮按钮 -->
            <div
              v-else-if="currentComponent.id === 'magnetic-button'" class="w-full flex flex-col items-center justify-center">

              <div class="p-12">
                <MagneticButton :strength="0.38" :distance="90">
                  <span>浏览组件</span>
                  <span class="text-xs">↗</span>
                </MagneticButton>
              </div>
            </div>

            <!-- 72. Elastic Slider 果冻弹性滑动条 -->
            <div
              v-else-if="currentComponent.id === 'elastic-slider'" class="w-full flex flex-col items-center justify-center">

              <div class="w-full max-w-sm flex flex-col items-center gap-4">
                <ElasticSlider v-model="demoSliderVal" :min="0" :max="100" />
                <span class="text-xs font-mono text-zinc-400">当前值：{{ demoSliderVal }}

%</span>
              </div>
            </div>

            <!-- 73. Copy Snippet 极速复制终端代码胶囊 -->
            <div
              v-else-if="currentComponent.id === 'copy-snippet'" class="w-full flex flex-col items-center justify-center">

              <div class="flex flex-col items-center gap-4">
                <CopySnippet code="import { cn }

 from '@/lib/utils'" />
                <CopySnippet code="import CopySnippet from '@/components/ui/CopySnippet.vue'" />
              </div>
            </div>

            <!-- 74. Keyboard Badge 拟物机械键盘键帽 -->
            <div
              v-else-if="currentComponent.id === 'keyboard-badge'" class="w-full flex flex-col items-center justify-center">

              <div class="flex items-center gap-4">
                <div class="flex items-center gap-2">
                  <KeyboardBadge key-name="⌘" size="lg" />
                  <KeyboardBadge key-name="K" shortcut-key="k" size="lg" />
                </div>
                <div class="flex items-center gap-1.5">
                  <KeyboardBadge key-name="Shift" size="md" />
                  <KeyboardBadge key-name="Ctrl" size="md" />
                  <KeyboardBadge key-name="C" size="md" />
                </div>
                <KeyboardBadge key-name="ESC" size="sm" />
              </div>
            </div>

            <!-- 75. Color Picker Morph 调色板流体拾色器 -->
            <div
              v-else-if="currentComponent.id === 'color-picker-morph'" class="w-full flex flex-col items-center justify-center">

              <ColorPickerMorph v-model="demoPickerColor" />
            </div>

            <!-- 76. Star Rating 高精度流体星星评分打分器 -->
            <div
              v-else-if="currentComponent.id === 'star-rating'" class="w-full flex flex-col items-center justify-center">

              <div class="flex flex-col items-center gap-3">
                <StarRating v-model="demoStarVal" :max-stars="5" />
                <span class="text-xs font-mono text-zinc-400">鼠标悬停预览，点击选定评分</span>
              </div>
            </div>

            <!-- 77. Hero Modern Block 现代官网首屏 Hero 模板 -->
            <div
              v-else-if="currentComponent.id === 'hero-modern'" class="w-full overflow-hidden"
            >
              <HeroModern />
            </div>

            <!-- 78. Feature Bento Block 苹果风多维便当盒特性矩阵 -->
            <div
              v-else-if="currentComponent.id === 'feature-bento-block'" class="w-full overflow-hidden"
            >
              <FeatureBentoBlock />
            </div>

            <!-- 79. Pricing Section Block SaaS 阶梯方案与弹性计费区块 -->
            <div
              v-else-if="currentComponent.id === 'pricing-section-block'" class="w-full overflow-hidden"
            >
              <PricingSectionBlock />
            </div>

            <!-- 80. Testimonial Marquee Block 双轨无缝滚动用户好评墙 -->
            <div
              v-else-if="currentComponent.id === 'testimonial-marquee-block'" class="w-full overflow-hidden"
            >
              <TestimonialMarqueeBlock />
            </div>

            <!-- 81. CTA Banner Block 极光破晓科技行动号召横幅 -->
            <div
              v-else-if="currentComponent.id === 'cta-banner-block'" class="w-full overflow-hidden"
            >
              <CtaBannerBlock />
            </div>

            <!-- 82. FAQ Accordion Block 交互折叠手风琴常见问题解答 -->
            <div
              v-else-if="currentComponent.id === 'faq-accordion-block'" class="w-full overflow-hidden"
            >
              <FaqAccordionBlock />
            </div>

            <!-- 83. Tool Call 智能体工具调用全状态交互卡片 -->
            <div
              v-else-if="currentComponent.id === 'tool-call'" class="w-full flex flex-col items-center justify-center">

              <ToolCall />
            </div>

            <!-- 84. Agent Plan 智能体动态多步执行规划清单 -->
            <div
              v-else-if="currentComponent.id === 'agent-plan'" class="w-full flex flex-col items-center justify-center">

              <AgentPlan />
            </div>

            <!-- 85. Context Window 大模型上下文窗口分布矩阵 -->
            <div
              v-else-if="currentComponent.id === 'context-window'" class="w-full flex flex-col items-center justify-center">

              <ContextWindow />
            </div>

            <!-- 86. Vector Search 高维向量空间嵌入检索与 Top-K 语义拓扑 -->
            <div
              v-else-if="currentComponent.id === 'vector-search'" class="w-full flex flex-col items-center justify-center">

              <VectorSearch />
            </div>

            <!-- 87. Reasoning Tree 树状思维链搜索与蒙特卡洛剪枝 -->
            <div
              v-else-if="currentComponent.id === 'reasoning-tree'" class="w-full flex flex-col items-center justify-center">

              <ReasoningTree />
            </div>

            <!-- 88. Data Flow 多源流式数据管道与实时吞吐核心 -->
            <div
              v-else-if="currentComponent.id === 'data-flow'" class="w-full flex flex-col items-center justify-center">

              <DataFlow />
            </div>

            <!-- 89. Agent Timeline 多智能体协同运行甘特图与事件溯源 -->
            <div
              v-else-if="currentComponent.id === 'agent-timeline'" class="w-full flex flex-col items-center justify-center">

              <AgentTimeline />
            </div>

            <!-- 90. Mixture of Experts MoE 混合专家模型动态路由与门控网络 -->
            <div
              v-else-if="currentComponent.id === 'mixture-of-experts'" class="w-full flex flex-col items-center justify-center">

              <MixtureOfExperts />
            </div>

            <!-- 91. Speculative Decoding 推测解码双模型协同加速 -->
            <div
              v-else-if="currentComponent.id === 'speculative-decoding'" class="w-full flex flex-col items-center justify-center">

              <SpeculativeDecoding />
            </div>

            <!-- 92. Prompt Cache 提示词前缀缓存命中与成本节省动态计量 -->
            <div
              v-else-if="currentComponent.id === 'prompt-cache'" class="w-full flex flex-col items-center justify-center">

              <PromptCache />
            </div>

            <!-- 93. Multi-Region Failover 多地域容灾与高可用智能流量调度 -->
            <div
              v-else-if="currentComponent.id === 'multi-region-failover'" class="w-full flex flex-col items-center justify-center">

              <MultiRegionFailover />
            </div>

            <!-- 94. Payment Flow 金融级卡片支付清算全链路流转 -->
            <div
              v-else-if="currentComponent.id === 'payment-flow'" class="w-full flex flex-col items-center justify-center">

              <PaymentFlow />
            </div>

            <!-- 95. Expanding Button Group 视差自适应胶囊膨胀按钮组 -->
            <div
              v-else-if="currentComponent.id === 'expanding-button-group'" class="w-full flex flex-col items-center justify-center">

              <ExpandingButtonGroup />
            </div>

            <!-- 96. Floating Button Group 流体弹簧平滑高亮浮动托盘按钮组 -->
            <div
              v-else-if="currentComponent.id === 'floating-button-group'" class="w-full flex flex-col items-center justify-center">

              <FloatingButtonGroup />
            </div>

            <!-- 97. Inline Edit 就地平滑无缝重命名微交互输入 -->
            <div
              v-else-if="currentComponent.id === 'inline-edit'" class="w-full flex flex-col items-center justify-center">

              <InlineEdit />
            </div>

            <!-- 98. Shortcut Recorder 快捷键热键录制器与冲突告警微键帽 -->
            <div
              v-else-if="currentComponent.id === 'shortcut-recorder'" class="w-full flex flex-col items-center justify-center">

              <ShortcutRecorder />
            </div>

            <!-- 99. Expanding Search 极简搜索图标流体膨胀输入框 -->
            <div
              v-else-if="currentComponent.id === 'expanding-search'" class="w-full flex flex-col items-center justify-center">

              <ExpandingSearch />
            </div>

            <!-- 100. Agent Loop 智能体感知-行动-验证自愈闭环 -->
            <div
              v-else-if="currentComponent.id === 'agent-loop'" class="w-full flex flex-col items-center justify-center">

              <AgentLoop />
            </div>

            <!-- 101. Gravity Well 时空曲率引力陷阱网格 -->
            <div
              v-else-if="currentComponent.id === 'gravity-well'" class="w-full flex flex-col items-center justify-center">

              <GravityWell />
            </div>

            <!-- 102. Dot Grid 透镜凸透光标波纹点阵 -->
            <div
              v-else-if="currentComponent.id === 'dot-grid'" class="w-full flex flex-col items-center justify-center">

              <DotGrid />
            </div>

            <!-- 103. File Dropzone 弹性拖拽投掷文件上传舱 -->
            <div
              v-else-if="currentComponent.id === 'file-dropzone'" class="w-full flex flex-col items-center justify-center">

              <FileDropzone />
            </div>

            <!-- 104. Swipe Actions 物理跟手滑动行操作 -->
            <div
              v-else-if="currentComponent.id === 'swipe-actions'" class="w-full flex flex-col items-center justify-center">

              <SwipeActions />
            </div>

            <!-- 105. Hover Card 悬停视差微卡片 -->
            <div
              v-else-if="currentComponent.id === 'hover-card'" class="w-full flex flex-col items-center justify-center">

              <div class="py-8">
                <HoverCard />
              </div>
            </div>

            <!-- 106. Bottom Sheet 物理阻尼抽屉底衬浮层 -->
            <div
              v-else-if="currentComponent.id === 'bottom-sheet'" class="w-full flex flex-col items-center justify-center">

              <BottomSheet />
            </div>

            <!-- 107. Audio Visualizer AI 多模态音频频谱可视化仪 -->
            <div
              v-else-if="currentComponent.id === 'audio-visualizer'" class="w-full flex flex-col items-center justify-center">

              <AudioVisualizer />
            </div>

            <!-- 108. Knowledge Graph AI 记忆拓扑与动态知识图谱 -->
            <div
              v-else-if="currentComponent.id === 'knowledge-graph'" class="w-full flex flex-col items-center justify-center">

              <KnowledgeGraph />
            </div>

            <!-- 109. Image Generation Progress 扩散模型去噪渲染加载舱 -->
            <div
              v-else-if="currentComponent.id === 'image-generation-progress'" class="w-full flex flex-col items-center justify-center">

              <ImageGenerationProgress />
            </div>

            <!-- 110. Morphing Dialog 流体物理形变展开模态框 -->
            <div
              v-else-if="currentComponent.id === 'morphing-dialog'" class="w-full flex flex-col items-center justify-center">

              <MorphingDialog />
            </div>

            <!-- 111. Gradient Tracing 神经突触电路脉冲寻迹流束卡片 -->
            <div
              v-else-if="currentComponent.id === 'gradient-tracing'" class="w-full flex flex-col items-center justify-center">

              <GradientTracing />
            </div>

            <!-- 112. Number Roll 机械立体滚轮数字翻转器 -->
            <div
              v-else-if="currentComponent.id === 'number-roll'" class="w-full flex flex-col items-center justify-center">

              <NumberRoll />
            </div>

            <!-- 113. Cube 3D 机械魔方与多面视窗 -->
            <div
              v-else-if="currentComponent.id === 'cube-3d'" class="w-full flex flex-col items-center justify-center">

              <Cube3D />
            </div>

            <!-- 114. Glow Menu 苹果风拟态流体微光胶囊导航 -->
            <div
              v-else-if="currentComponent.id === 'glow-menu'" class="w-full flex flex-col items-center justify-center">

              <div class="py-8">
                <GlowMenu />
              </div>
            </div>

            <!-- 115. Elastic Switch 果冻阻尼物理弹性形变开关 -->
            <div
              v-else-if="currentComponent.id === 'elastic-switch'" class="w-full flex flex-col items-center justify-center">

              <ElasticSwitch />
            </div>

            <!-- 116. Noise Background 程序化动态分形噪点极光背景 -->
            <div
              v-else-if="currentComponent.id === 'noise-background'" class="w-full flex flex-col items-center justify-center">

              <NoiseBackground />
            </div>

            <!-- 117. Card Hover Glow 多层环境光阻尼边界发光卡片 -->
            <div
              v-else-if="currentComponent.id === 'card-hover-glow'" class="w-full flex flex-col items-center justify-center">

              <CardHoverGlow />
            </div>

            <!-- 118. Glitch Text RGB 多通道色散故障文字 -->
            <div
              v-else-if="currentComponent.id === 'glitch-text'" class="w-full flex flex-col items-center justify-center">

              <GlitchText />
            </div>

            <!-- 119. Magnetic Badge 视差磁吸物理感应标签群 -->
            <div
              v-else-if="currentComponent.id === 'magnetic-badge'" class="w-full flex flex-col items-center justify-center">

              <MagneticBadge />
            </div>

            <!-- 120. Code Window macOS 拟态代码视窗 -->
            <div
              v-else-if="currentComponent.id === 'code-window'" class="w-full flex flex-col items-center justify-center">

              <CodeWindow />
            </div>

            <!-- 121. Circular Carousel 3D 环形圆柱转盘无限轮播 -->
            <div
              v-else-if="currentComponent.id === 'circular-carousel'" class="w-full flex flex-col items-center justify-center">

              <CircularCarousel />
            </div>

            <!-- 122. Typewriter Scramble 赛博乱码解密逐字打字机 -->
            <div
              v-else-if="currentComponent.id === 'typewriter-scramble'" class="w-full flex flex-col items-center justify-center">

              <TypewriterScramble />
            </div>

            <!-- 123. Gauge Meter 全景半圆物理指针弧形度量表 -->
            <div
              v-else-if="currentComponent.id === 'gauge-meter'" class="w-full flex flex-col items-center justify-center">

              <GaugeMeter />
            </div>

            <!-- 124. Particle Morph 粒子几何星座插值形变 -->
            <div
              v-else-if="currentComponent.id === 'particle-morph'" class="w-full flex flex-col items-center justify-center">

              <ParticleMorph />
            </div>

            <!-- 125. Radar Chart 大模型认知能力评测雷达 -->
            <div
              v-else-if="currentComponent.id === 'radar-chart'" class="w-full flex flex-col items-center justify-center">

              <RadarChart />
            </div>

            <!-- 126. Audio Player 拟态流体微波音频播放器 -->
            <div
              v-else-if="currentComponent.id === 'audio-player'" class="w-full flex flex-col items-center justify-center">

              <AudioPlayer />
            </div>

            <!-- 127. Parallax Scroll 多列视差画廊瀑布流 -->
            <div
              v-else-if="currentComponent.id === 'parallax-scroll'" class="w-full flex flex-col items-center justify-center">

              <ParallaxScroll />
            </div>

            <!-- 128. Fold Card 三维拟物折叠手册卡片 -->
            <div
              v-else-if="currentComponent.id === 'fold-card'" class="w-full flex flex-col items-center justify-center">

              <FoldCard />
            </div>

            <!-- 129. Gradient Button 动态多色流体极光行动按钮 -->
            <div
              v-else-if="currentComponent.id === 'gradient-button'" class="w-full flex flex-col items-center justify-center">

              <GradientButton />
            </div>

            <!-- 130. Text Ticker 大盘行情双轨滚动看板 -->
            <div
              v-else-if="currentComponent.id === 'text-ticker'" class="w-full flex flex-col items-center justify-center">

              <TextTicker />
            </div>

            <!-- 131. Voice Waveform AI 实时语音流式交互仪 -->
            <div
              v-else-if="currentComponent.id === 'voice-waveform'" class="w-full flex flex-col items-center justify-center">

              <VoiceWaveform />
            </div>

            <!-- 132. Waterfall Grid 动态交错瀑布流媒体网格 -->
            <div
              v-else-if="currentComponent.id === 'waterfall-grid'" class="w-full flex flex-col items-center justify-center">

              <WaterfallGrid />
            </div>

            <!-- 133. Liquid Blob 物理粘滞流体变形气泡 -->
            <div
              v-else-if="currentComponent.id === 'liquid-blob'" class="w-full flex flex-col items-center justify-center">

              <LiquidBlob />
            </div>

            <!-- 134. Matrix Rain 黑客帝国数字代码雨 -->
            <div
              v-else-if="currentComponent.id === 'matrix-rain'" class="w-full flex flex-col items-center justify-center">

              <MatrixRain />
            </div>

            <!-- 135. Segmented Meter 多段式能耗与容量刻度计 -->
            <div
              v-else-if="currentComponent.id === 'segmented-meter'" class="w-full flex flex-col items-center justify-center">

              <SegmentedMeter />
            </div>

            <!-- 136. Interactive Canvas 触觉手绘草图签名画布 -->
            <div
              v-else-if="currentComponent.id === 'interactive-canvas'" class="w-full flex flex-col items-center justify-center">

              <InteractiveCanvas />
            </div>

            <!-- 137. Prompt Playground 提示词调试交互演练场 -->
            <div
              v-else-if="currentComponent.id === 'prompt-playground'" class="w-full flex flex-col items-center justify-center">

              <PromptPlayground />
            </div>

            <!-- 138. Magnetic Tabs 动态流体磁吸药丸选项卡 -->
            <div
              v-else-if="currentComponent.id === 'magnetic-tabs'" class="w-full flex flex-col items-center justify-center">

              <MagneticTabs />
            </div>

            <!-- 139. Holographic Card 三维全息彩虹折射卡片 -->
            <div
              v-else-if="currentComponent.id === 'holographic-card'" class="w-full flex flex-col items-center justify-center">

              <HolographicCard />
            </div>

            <!-- 140. Decrypted Text 情报特工文本悬停解密跳动 -->
            <div
              v-else-if="currentComponent.id === 'decrypted-text'" class="w-full flex flex-col items-center justify-center">

              <DecryptedText />
            </div>

            <!-- 141. Infinite Canvas 无限平移缩放节点画布 -->
            <div
              v-else-if="currentComponent.id === 'infinite-canvas'" class="w-full flex flex-col items-center justify-center">

              <InfiniteCanvas />
            </div>

            <!-- 142. Toggle Switch Morph 拟态流体微触觉形态开关 -->
            <div
              v-else-if="currentComponent.id === 'toggle-switch-morph'" class="w-full flex flex-col items-center justify-center">

              <ToggleSwitchMorph />
            </div>

            <!-- 143. Embedding Visualizer 高维向量嵌入降维投影仪 -->
            <div
              v-else-if="currentComponent.id === 'embedding-visualizer'" class="w-full flex flex-col items-center justify-center">

              <EmbeddingVisualizer />
            </div>

            <!-- 144. Scroll Progress Pill 动态页面阅读进度药丸胶囊 -->
            <div
              v-else-if="currentComponent.id === 'scroll-progress-pill'" class="w-full flex flex-col items-center justify-center">

              <ScrollProgressPill />
            </div>

            <!-- 145. Card Spotlight Border 光标跟随动态聚光边框卡片 -->
            <div
              v-else-if="currentComponent.id === 'card-spotlight-border'" class="w-full flex flex-col items-center justify-center">

              <CardSpotlightBorder />
            </div>

            <!-- 146. Waveform Text 物理正弦波形起伏文字 -->
            <div
              v-else-if="currentComponent.id === 'waveform-text'" class="w-full flex flex-col items-center justify-center">

              <WaveformText />
            </div>

            <!-- 147. Interactive Globe 交互式 3D 拓扑网络球体 -->
            <div
              v-else-if="currentComponent.id === 'interactive-globe'" class="w-full flex flex-col items-center justify-center">

              <InteractiveGlobe />
            </div>

            <!-- 148. Elastic Pull To Refresh 物理弹性下拉阻尼刷新舱 -->
            <div
              v-else-if="currentComponent.id === 'elastic-pull-to-refresh'" class="w-full flex flex-col items-center justify-center">

              <ElasticPullToRefresh />
            </div>

            <!-- 149. Attention Heatmap 多头自注意力交互热力图 -->
            <div
              v-else-if="currentComponent.id === 'attention-heatmap'" class="w-full flex flex-col items-center justify-center">

              <AttentionHeatmap />
            </div>

            <!-- 150. Radial Menu 环形扇区径向轮盘微菜单 -->
            <div
              v-else-if="currentComponent.id === 'radial-menu'" class="w-full flex flex-col items-center justify-center">

              <RadialMenu />
            </div>

            <!-- 151. Glassmorphism Card 多层拟态磨砂毛玻璃叠层卡片 -->
            <div
              v-else-if="currentComponent.id === 'glassmorphism-card'" class="w-full flex flex-col items-center justify-center">

              <GlassmorphismCard />
            </div>

            <!-- 152. Perspective Text 三维空间透视折叠文本 -->
            <div
              v-else-if="currentComponent.id === 'perspective-text'" class="w-full flex flex-col items-center justify-center">

              <PerspectiveText />
            </div>

            <!-- 153. Voxel Grid 等轴测 3D 体素阶梯网格 -->
            <div
              v-else-if="currentComponent.id === 'voxel-grid'" class="w-full flex flex-col items-center justify-center">

              <VoxelGrid />
            </div>

            <!-- 154. Hold To Progress 长按触觉阶段性蓄力按钮 -->
            <div
              v-else-if="currentComponent.id === 'hold-to-progress'" class="w-full flex flex-col items-center justify-center">

              <HoldToProgress />
            </div>

            <!-- 155. Model Benchmark Matrix -->
            <div
              v-else-if="currentComponent.id === 'model-benchmark-matrix'" class="w-full flex flex-col items-center justify-center">

              <ModelBenchmarkMatrix />
            </div>

            <!-- 156. Mac Dock Navigation -->
            <div
              v-else-if="currentComponent.id === 'mac-dock-navigation'" class="w-full flex flex-col items-center justify-center">

              <MacDockNavigation />
            </div>

            <!-- 157. Circuit Board Card -->
            <div
              v-else-if="currentComponent.id === 'circuit-board-card'" class="w-full flex flex-col items-center justify-center">

              <CircuitBoardCard />
            </div>

            <!-- 158. Glitch Scramble Text -->
            <div
              v-else-if="currentComponent.id === 'glitch-scramble-text'" class="w-full flex flex-col items-center justify-center">

              <GlitchScrambleText />
            </div>

            <!-- 159. 3D Warp Tunnel -->
            <div
              v-else-if="currentComponent.id === 'tunnel-3d'" class="w-full flex flex-col items-center justify-center">

              <Tunnel3D />
            </div>

            <!-- 160. Haptic Tooltip Slider -->
            <div
              v-else-if="currentComponent.id === 'slider-tooltip-haptic'" class="w-full flex flex-col items-center justify-center">

              <SliderTooltipHaptic />
            </div>

            <!-- 161. Prompt Diff Viewer -->
            <div
              v-else-if="currentComponent.id === 'prompt-diff-viewer'" class="w-full flex flex-col items-center justify-center">

              <PromptDiffViewer />
            </div>

            <!-- 162. Tree Breadcrumb -->
            <div
              v-else-if="currentComponent.id === 'tree-breadcrumb'" class="w-full flex flex-col items-center justify-center">

              <TreeBreadcrumb />
            </div>

            <!-- 163. Cyberpunk Grid Card -->
            <div
              v-else-if="currentComponent.id === 'cyberpunk-grid-card'" class="w-full flex flex-col items-center justify-center">

              <CyberpunkGridCard />
            </div>

            <!-- 164. Matrix Code Rain Drop -->
            <div
              v-else-if="currentComponent.id === 'matrix-code-rain-drop'" class="w-full flex flex-col items-center justify-center">

              <MatrixCodeRainDrop />
            </div>

            <!-- 165. Black Hole Singularity -->
            <div
              v-else-if="currentComponent.id === 'black-hole-singularity'" class="w-full flex flex-col items-center justify-center">

              <BlackHoleSingularity />
            </div>

            <!-- 166. Number Wheel Stepper -->
            <div
              v-else-if="currentComponent.id === 'number-wheel-stepper'" class="w-full flex flex-col items-center justify-center">

              <NumberWheelStepper />
            </div>

            <!-- 167. Data Stream Probe -->
            <div
              v-else-if="currentComponent.id === 'data-stream-probe'" class="w-full flex flex-col items-center justify-center">

              <DataStreamProbe />
            </div>

            <!-- 168. Capsule Tab Bar -->
            <div
              v-else-if="currentComponent.id === 'capsule-tab-bar'" class="w-full flex flex-col items-center justify-center">

              <CapsuleTabBar />
            </div>

            <!-- 169. Hologram Badge Card -->
            <div
              v-else-if="currentComponent.id === 'hologram-badge-card'" class="w-full flex flex-col items-center justify-center">

              <HologramBadgeCard />
            </div>

            <!-- 170. Typewriter Cursor Glow -->
            <div
              v-else-if="currentComponent.id === 'typewriter-cursor-glow'" class="w-full flex flex-col items-center justify-center">

              <TypewriterCursorGlow />
            </div>

            <!-- 171. Quantum Superposition -->
            <div
              v-else-if="currentComponent.id === 'quantum-superposition'" class="w-full flex flex-col items-center justify-center">

              <QuantumSuperposition />
            </div>

            <!-- 172. Swipe To Dismiss Pill -->
            <div
              v-else-if="currentComponent.id === 'swipe-to-dismiss-pill'" class="w-full flex flex-col items-center justify-center">

              <SwipeToDismissPill />
            </div>

            <!-- 173. Neural Weights Matrix -->
            <div
              v-else-if="currentComponent.id === 'neural-weights-matrix'" class="w-full flex flex-col items-center justify-center">

              <NeuralWeightsMatrix />
            </div>

            <!-- 174. Fluid Drawer Modal -->
            <div
              v-else-if="currentComponent.id === 'fluid-drawer-modal'" class="w-full flex flex-col items-center justify-center">

              <FluidDrawerModal />
            </div>

            <!-- 175. Holographic Prism Border -->
            <div
              v-else-if="currentComponent.id === 'holographic-prism-border'" class="w-full flex flex-col items-center justify-center">

              <HolographicPrismBorder />
            </div>

            <!-- 176. Kinetic Scale Text -->
            <div
              v-else-if="currentComponent.id === 'kinetic-scale-text'" class="w-full flex flex-col items-center justify-center">

              <KineticScaleText />
            </div>

            <!-- 177. Solar System Orbits -->
            <div
              v-else-if="currentComponent.id === 'solar-system-orbits'" class="w-full flex flex-col items-center justify-center">

              <SolarSystemOrbits />
            </div>

            <!-- 178. Physics Balance Scale -->
            <div
              v-else-if="currentComponent.id === 'physics-balance-scale'" class="w-full flex flex-col items-center justify-center">

              <PhysicsBalanceScale />
            </div>

            <!-- 179. Synaptic Signal Graph -->
            <div
              v-else-if="currentComponent.id === 'synaptic-signal-graph'" class="w-full flex flex-col items-center justify-center">

              <SynapticSignalGraph />
            </div>

            <!-- 180. Radial Cluster Menu -->
            <div
              v-else-if="currentComponent.id === 'radial-cluster-menu'" class="w-full flex flex-col items-center justify-center">

              <RadialClusterMenu />
            </div>

            <!-- 181. Hologram Glitch Card -->
            <div
              v-else-if="currentComponent.id === 'hologram-glitch-card'" class="w-full flex flex-col items-center justify-center">

              <HologramGlitchCard />
            </div>

            <!-- 182. Liquid Text Morph -->
            <div
              v-else-if="currentComponent.id === 'liquid-text-morph'" class="w-full flex flex-col items-center justify-center">

              <LiquidTextMorph />
            </div>
            <!-- 机械翻牌显示器 (Split-Flap Display) -->
            <div
              v-else-if="currentComponent.id === 'split-flap-display'" class="w-full flex flex-col items-center justify-center">

              <SplitFlapDisplay />
            </div>

            <!-- 仿生视线眼球注视追踪 (Eye Tracking) -->
            <div
              v-else-if="currentComponent.id === 'eye-tracking'" class="w-full flex flex-col items-center justify-center">

              <EyeTracking />
            </div>

            <!-- 磁力线场感应阵列 (Magnet Lines) -->
            <div
              v-else-if="currentComponent.id === 'magnet-lines'" class="w-full flex flex-col items-center justify-center">

              <MagnetLines />
            </div>

            <!-- 复古抖动网格渐变背景 (Dither Gradient) -->
            <div
              v-else-if="currentComponent.id === 'dither-gradient'" class="w-full flex flex-col items-center justify-center">

              <DitherGradient />
            </div>

            <!-- 航空飞行状态仪表卡片 (Flight Status Card) -->
            <div
              v-else-if="currentComponent.id === 'flight-status-card'" class="w-full flex flex-col items-center justify-center">

              <FlightStatusCard />
            </div>

            <!-- ASCII 字符点阵视觉滤镜 (ASCII Effect) -->
            <div
              v-else-if="currentComponent.id === 'ascii-effect'" class="w-full flex flex-col items-center justify-center">

              <AsciiEffect />
            </div>

            <!-- 文字粒子磁场排斥力场 (Text Repel) -->
            <div
              v-else-if="currentComponent.id === 'text-repel'" class="w-full flex flex-col items-center justify-center">

              <TextRepel />
            </div>

            <!-- 字母瀑布阶梯式级联跌落 (Letter Cascade) -->
            <div
              v-else-if="currentComponent.id === 'letter-cascade'" class="w-full flex flex-col items-center justify-center">

              <LetterCascade />
            </div>

            <!-- 马赛克像素图像残影尾迹 (Pixel Image Trail) -->
            <div
              v-else-if="currentComponent.id === 'pixel-image-trail'" class="w-full flex flex-col items-center justify-center">

              <PixelImageTrail />
            </div>

            <!-- 抖动点阵防伪标志徽章 (Dithered Logo) -->
            <div
              v-else-if="currentComponent.id === 'dithered-logo'" class="w-full flex flex-col items-center justify-center">

              <DitheredLogo />
            </div>

            <!-- 液态高光金属水银流动 (Liquid Chrome) -->
            <div
              v-else-if="currentComponent.id === 'liquid-chrome'" class="w-full flex flex-col items-center justify-center">

              <LiquidChrome />
            </div>

            <!-- 丝绸极光轻纱流动背景 (Silk Aurora) -->
            <div
              v-else-if="currentComponent.id === 'silk-aurora'" class="w-full flex flex-col items-center justify-center">

              <SilkAurora />
            </div>

            <!-- 光谱色散三维飘带 (Spectral Ribbon) -->
            <div
              v-else-if="currentComponent.id === 'spectral-ribbon'" class="w-full flex flex-col items-center justify-center">

              <SpectralRibbon />
            </div>

            <!-- 电弧等离子体聚焦收缩 (Closing Plasma) -->
            <div
              v-else-if="currentComponent.id === 'closing-plasma'" class="w-full flex flex-col items-center justify-center">

              <ClosingPlasma />
            </div>

            <!-- 极光极夜离子流光场 (Aurora Flow) -->
            <div
              v-else-if="currentComponent.id === 'aurora-flow'" class="w-full flex flex-col items-center justify-center">

              <AuroraFlow />
            </div>

            <!-- 多面棱镜分光网格渐变 (Prism Gradient) -->
            <div
              v-else-if="currentComponent.id === 'prism-gradient'" class="w-full flex flex-col items-center justify-center">

              <PrismGradient />
            </div>

            <!-- 胶片颗粒噪波有机流体渐变 (Grain Gradient) -->
            <div
              v-else-if="currentComponent.id === 'grain-gradient'" class="w-full flex flex-col items-center justify-center">

              <GrainGradient />
            </div>

            <!-- 环形高斯弥散动态渐变 (Animated Gradient) -->
            <div
              v-else-if="currentComponent.id === 'animated-gradient'" class="w-full flex flex-col items-center justify-center">

              <AnimatedGradient />
            </div>

            <!-- WebGL 交互式流体波纹 (WebGL Liquid) -->
            <div
              v-else-if="currentComponent.id === 'webgl-liquid'" class="w-full flex flex-col items-center justify-center">

              <WebGLLiquid />
            </div>

            <!-- 鱼眼广角无限透视网格 (Fisheye Infinite Grid) -->
            <div
              v-else-if="currentComponent.id === 'fisheye-infinite-grid'" class="w-full flex flex-col items-center justify-center">

              <FisheyeInfiniteGrid class="w-full max-w-4xl" />
            </div>

            <!-- 像素点阵手势交互画布 (Pixel Canvas) -->
            <div
              v-else-if="currentComponent.id === 'pixel-canvas'" class="w-full flex flex-col items-center justify-center">

              <PixelCanvas />
            </div>

            <!-- 光标驱动粒子三维文字 (Cursor-Driven Particle Typography) -->
            <div
              v-else-if="currentComponent.id === 'cursor-driven-particle-typography'" class="w-full flex flex-col items-center justify-center">

              <CursorDrivenParticleTypography />
            </div>

            <!-- 案例翻转层叠卡片栈 (Case Study Flip Stack) -->
            <div
              v-else-if="currentComponent.id === 'case-study-flip-stack'" class="w-full flex flex-col items-center justify-center">

              <CaseStudyFlipStack />
            </div>

            <!-- 三维双螺旋环绕轮播滑动 (Spiral 3D Slider) -->
            <div
              v-else-if="currentComponent.id === 'spiral-3d-slider'" class="w-full flex flex-col items-center justify-center">

              <Spiral3dSlider />
            </div>

            <!-- 滚动时序编排分步演进 (Scroll Choreography) -->
            <div
              v-else-if="currentComponent.id === 'scroll-choreography'" class="w-full flex flex-col items-center justify-center">

              <ScrollChoreography />
            </div>

            <!-- 滚动裂变张开展示卡片 (Scroll Split Card) -->
            <div
              v-else-if="currentComponent.id === 'scroll-split-card'" class="w-full flex flex-col items-center justify-center">

              <ScrollSplitCard />
            </div>

            <!-- 倾斜轴线滚动平移画廊 (Scroll Tilted Grid) -->
            <div
              v-else-if="currentComponent.id === 'scroll-tilted-grid'" class="w-full flex flex-col items-center justify-center">

              <ScrollTiltedGrid />
            </div>

            <!-- 无限画幅全景图片星云场 (Infinite Image Field) -->
            <div
              v-else-if="currentComponent.id === 'infinite-image-field'" class="w-full flex flex-col items-center justify-center">

              <InfiniteImageField />
            </div>

            <!-- 液态毛玻璃折射轮播视窗 (Liquid Glass Carousel) -->
            <div
              v-else-if="currentComponent.id === 'liquid-glass-carousel'" class="w-full flex flex-col items-center justify-center">

              <LiquidGlassCarousel />
            </div>

            <!-- 三维滚轮立体转盘轮播 (Wheel Carousel) -->
            <div
              v-else-if="currentComponent.id === 'wheel-carousel'" class="w-full flex flex-col items-center justify-center">

              <WheelCarousel />
            </div>

            <!-- 粘性滚动层叠堆栈看板 (Sticky Scroll Cards) -->
            <div
              v-else-if="currentComponent.id === 'sticky-scroll-cards'" class="w-full flex flex-col items-center justify-center">

              <StickyScrollCards />
            </div>

            <!-- 分层悬浮物理卡片堆 (Layered Stack) -->
            <div
              v-else-if="currentComponent.id === 'layered-stack'" class="w-full flex flex-col items-center justify-center">

              <LayeredStack />
            </div>

            <!-- 透镜折射极简机械时钟 (Lens Clock) -->
            <div
              v-else-if="currentComponent.id === 'lens-clock'" class="w-full flex flex-col items-center justify-center">

              <LensClock />
            </div>

            <!-- 多边形立体几何浮动首屏 (Hero Geometric) -->
            <div
              v-else-if="currentComponent.id === 'hero-geometric'" class="w-full flex flex-col items-center justify-center">

              <HeroGeometric />
            </div>

            <!-- 拟物黑胶唱片律动音乐播放器 (Music Player) -->
            <div
              v-else-if="currentComponent.id === 'music-player'" class="w-full flex flex-col items-center justify-center">

              <MusicPlayer />
            </div>

            <!-- 拟物书架期刊阅读订阅框 (Newsletter Bookshelf) -->
            <div
              v-else-if="currentComponent.id === 'newsletter-bookshelf'" class="w-full flex flex-col items-center justify-center">

              <NewsletterBookshelf />
            </div>

            <!-- 拟物 Mac 键盘机械按键交互 (Mac Keyboard) -->
            <div
              v-else-if="currentComponent.id === 'mac-keyboard'" class="w-full flex flex-col items-center justify-center">

              <MacKeyboard />
            </div>

            <!-- 代码贡献热力图日历 (GitHub Calendar) -->
            <div
              v-else-if="currentComponent.id === 'github-calendar'" class="w-full flex flex-col items-center justify-center">

              <GithubCalendar />
            </div>

            <!-- 手写签名毛笔笔迹绘制板 (Signature) -->
            <div
              v-else-if="currentComponent.id === 'signature'" class="w-full flex flex-col items-center justify-center">

              <Signature />
            </div>

            <!-- 三维词组翻转轮换排版 (Flipping Word Swap) -->
            <div
              v-else-if="currentComponent.id === 'flipping-word-swap'" class="w-full flex flex-col items-center justify-center">

              <FlippingWordSwap />
            </div>

            <!-- 荧光马克笔笔触批注强调 (Annotated Text) -->
            <div
              v-else-if="currentComponent.id === 'annotated-text'" class="w-full flex flex-col items-center justify-center">

              <AnnotatedText />
            </div>

            <!-- 动力学字距拉伸淡入揭示 (Kinetic Text Reveal) -->
            <div
              v-else-if="currentComponent.id === 'kinetic-text-reveal'" class="w-full flex flex-col items-center justify-center">

              <KineticTextReveal />
            </div>

            <!-- 多集合图库平滑冲浪导航器 (Collection Surfer) -->
            <div
              v-else-if="currentComponent.id === 'collection-surfer'" class="w-full flex flex-col items-center justify-center">

              <CollectionSurfer />
            </div>

            <!-- 鼠标轨迹多图浮现拖尾 (Image Trail) -->
            <div
              v-else-if="currentComponent.id === 'image-trail'" class="w-full flex flex-col items-center justify-center">

              <ImageTrail />
            </div>

            <!-- 滚动速度自适应跑马灯 (Scroll-Based Velocity) -->
            <div
              v-else-if="currentComponent.id === 'scroll-based-velocity'" class="w-full flex flex-col items-center justify-center">

              <ScrollBasedVelocity />
            </div>

            <!-- 智能跟随磁性悬停指示器 (Hover Transition) -->
            <div
              v-else-if="currentComponent.id === 'hover-transition'" class="w-full flex flex-col items-center justify-center">

              <HoverTransition />
            </div>

            <!-- 全息棱镜抖动首屏展示 (Dither Prism Hero) -->
            <div
              v-else-if="currentComponent.id === 'dither-prism-hero'" class="w-full flex flex-col items-center justify-center">

              <DitherPrismHero />
            </div>

            <!-- 团队名片轨道扇形堆叠 (Orbit Card Stack) -->
            <div
              v-else-if="currentComponent.id === 'orbit-card-stack'" class="w-full flex flex-col items-center justify-center">

              <OrbitCardStack />
            </div>

            <!-- 光标图片流体水波刷 (Image Ripple Effect) -->
            <div
              v-else-if="currentComponent.id === 'image-ripple-effect'" class="w-full flex flex-col items-center justify-center">

              <ImageRippleEffect />
            </div>

            <!-- 全景相册流体水波切场 (Ripple Transition) -->
            <div
              v-else-if="currentComponent.id === 'ripple-transition'" class="w-full flex flex-col items-center justify-center">

              <RippleTransition />
            </div>
          </template>
        </ComponentPreview>
      </main>
    </div>
  </div>
</template>
