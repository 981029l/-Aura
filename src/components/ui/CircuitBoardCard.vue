<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'
import {
  Zap,
  Activity,
  ShieldCheck,
  Flame,
  Radio,
} from 'lucide-vue-next'

interface Props {
  chipName?: string
  clockSpeed?: string
  coreCount?: number
  boardModel?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  chipName: 'QUANTUM-X1 OCTA',
  clockSpeed: '4.85 GHz',
  coreCount: 8,
  boardModel: 'PCB-REV-9042',
})

type OperatingMode = 'turbo' | 'eco' | 'diagnostics'

const isPowerOn = ref(true)
const activeMode = ref<OperatingMode>('turbo')
const selectedBusId = ref<string>('pcie5')

// 运行工况参数
const modeConfig = computed(() => {
  if (!isPowerOn.value) {
    return {
      clock: '0.00 GHz',
      load: 0,
      temp: 24,
      statusText: '待机',
      speedMult: 0,
    }
  }
  switch (activeMode.value) {
    case 'turbo':
      return {
        clock: props.clockSpeed,
        load: 92,
        temp: 58,
        statusText: '高性能模式',
        speedMult: 1.8,
      }
    case 'eco':
      return {
        clock: '2.40 GHz',
        load: 32,
        temp: 36,
        statusText: '节能模式',
        speedMult: 0.7,
      }
    case 'diagnostics':
      return {
        clock: '3.60 GHz',
        load: 65,
        temp: 45,
        statusText: '自检中',
        speedMult: 1.2,
      }
  }
})

// 四大核心总线数据与精准 PCB 拓扑连接定义
// 统一画板坐标系 viewBox 0 0 520 280
// 中央芯片位于中心 [260, 80]，引脚位于四周
interface BusModule {
  id: string
  name: string
  subtitle: string
  spec: string
  bandwidth: string
  latency: string
  color: string
  // PCB 导轨从总线模块引出，通过 45° 折角精准连入 CPU 引脚
  traceD: string
  sourcePin: [number, number]
  targetPin: [number, number]
  vias: [number, number][]
}

const busModules: BusModule[] = [
  {
    id: 'pcie5',
    name: 'BUS_PCIE5',
    subtitle: 'PCIe 5.0 x16 通道',
    spec: '32 GT/s',
    bandwidth: '63.0 GB/s',
    latency: '0.12 ns',
    color: '#06b6d4',
    // 左上总线模块 (x: 28, y: 170) -> 往上折向左侧 CPU 引脚 (x: 196, y: 70)
    traceD: 'M 100 170 L 100 120 L 140 80 L 196 80',
    sourcePin: [100, 170],
    targetPin: [196, 80],
    vias: [
      [100, 145],
      [140, 80],
    ],
  },
  {
    id: 'ddr5',
    name: 'DDR5_CH_A',
    subtitle: '四通道高频内存',
    spec: '6400 MT/s',
    bandwidth: '102.4 GB/s',
    latency: '0.08 ns',
    color: '#8b5cf6',
    // 右上总线模块 (x: 420, y: 170) -> 往上折向右侧 CPU 引脚 (x: 324, y: 80)
    traceD: 'M 420 170 L 420 120 L 380 80 L 324 80',
    sourcePin: [420, 170],
    targetPin: [324, 80],
    vias: [
      [420, 145],
      [380, 80],
    ],
  },
  {
    id: 'npu',
    name: 'NPU_TENSOR',
    subtitle: 'AI 加速单元',
    spec: '512 TOPS',
    bandwidth: '48.0 TB/s',
    latency: '0.04 ns',
    color: '#10b981',
    // 左下总线模块 (x: 100, y: 226) -> 向上接入 CPU 底部引脚 (x: 235, y: 124)
    traceD: 'M 130 226 L 160 196 L 220 196 L 235 180 L 235 124',
    sourcePin: [130, 226],
    targetPin: [235, 124],
    vias: [
      [160, 196],
      [220, 196],
    ],
  },
  {
    id: 'nvme',
    name: 'NVME_GEN5',
    subtitle: '直连固态控制器',
    spec: 'Direct IO',
    bandwidth: '14.2 GB/s',
    latency: '0.15 ns',
    color: '#f59e0b',
    // 右下总线模块 (x: 390, y: 226) -> 向上接入 CPU 底部引脚 (x: 285, y: 124)
    traceD: 'M 390 226 L 360 196 L 300 196 L 285 180 L 285 124',
    sourcePin: [390, 226],
    targetPin: [285, 124],
    vias: [
      [360, 196],
      [300, 196],
    ],
  },
]

const activeBusModule = computed(
  () => busModules.find((b) => b.id === selectedBusId.value) || busModules[0]
)

const togglePower = () => {
  isPowerOn.value = !isPowerOn.value
}
</script>

<template>
  <div
    :class="
      cn(
        'relative w-full max-w-2xl mx-auto rounded-3xl p-5 sm:p-7 overflow-hidden transition-all duration-300 border border-slate-200/90 dark:border-slate-800/80 bg-white/95 dark:bg-[#070b14] shadow-xl font-sans select-none space-y-4',
        props.class
      )
    "
  >
    <!-- PCB 沉金工艺网格底纹 -->
    <div
      class="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] pointer-events-none"
      style="
        background-image: radial-gradient(#38bdf8 1.2px, transparent 1.2px);
        background-size: 16px 16px;
      "
    />

    <!-- 顶部硬件看板栏 -->
    <div
      class="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200/80 dark:border-slate-800/80"
    >
      <div class="flex items-center gap-2.5">
        <span class="relative flex h-3 w-3">
          <span
            v-if="isPowerOn"
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"
          />
          <span
            :class="[
              'relative inline-flex rounded-full h-3 w-3 transition-colors',
              isPowerOn ? 'bg-cyan-500 shadow-[0_0_8px_#06b6d4]' : 'bg-slate-400',
            ]"
          />
        </span>
        <div>
          <div class="flex items-center gap-2">
            <h3
              class="text-xs font-mono tracking-wider font-bold uppercase text-slate-800 dark:text-cyan-300"
            >
              {{ props.boardModel }}
            </h3>
            <span
              class="px-1.5 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20"
            >
              多层电路板
            </span>
          </div>
          <p class="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">
            {{ isPowerOn ? `运行中 · ${modeConfig.statusText}` : '电路板待机中' }}
          </p>
        </div>
      </div>

      <!-- 电源总控开关 -->
      <div class="flex items-center gap-2">
        <button
          type="button"
          @click="togglePower"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer border shadow-sm"
          :class="
            isPowerOn
              ? 'border-cyan-500/40 bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 hover:bg-cyan-500/20'
              : 'border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
          "
        >
          <Zap
            class="w-3.5 h-3.5 transition-transform"
            :class="isPowerOn ? 'text-amber-500 scale-110' : 'text-slate-400'"
          />
          <span>{{ isPowerOn ? 'POWER: ON' : 'POWER: OFF' }}</span>
        </button>
      </div>
    </div>

    <!-- 沉浸式 PCB 芯片电路板主体拓扑区 (包含中央芯片、严密对齐的沉金导线与四大总线) -->
    <div
      class="relative z-10 rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-slate-50/70 dark:bg-[#040711] overflow-hidden p-3 sm:p-4"
    >
      <!-- PCB 丝印标记与参考刻度线 -->
      <div
        class="absolute top-2 left-3 text-[9px] font-mono text-slate-400/60 dark:text-slate-600 pointer-events-none select-none"
      >
        LAYER 04 // FR-4 TG170
      </div>
      <div
        class="absolute top-2 right-3 text-[9px] font-mono text-slate-400/60 dark:text-slate-600 pointer-events-none select-none"
      >
        DIFF_PAIR 90Ω IMPEDANCE
      </div>

      <!-- SVG 高精度 PCB 走线与光子脉冲层 -->
      <svg
        viewBox="0 0 520 280"
        class="w-full h-[240px] sm:h-[260px] block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="pcb-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <!-- 沉金导线金光渐变 -->
          <linearGradient id="gold-trace" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.85" />
            <stop offset="100%" stop-color="#fbbf24" stop-opacity="0.95" />
          </linearGradient>

          <!-- 脉冲流束渐变 -->
          <linearGradient id="pulse-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#06b6d4" stop-opacity="0" />
            <stop offset="50%" stop-color="#38bdf8" stop-opacity="1" />
            <stop offset="100%" stop-color="#ffffff" stop-opacity="0.9" />
          </linearGradient>

          <linearGradient id="pulse-violet" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0" />
            <stop offset="50%" stop-color="#a78bfa" stop-opacity="1" />
            <stop offset="100%" stop-color="#ffffff" stop-opacity="0.9" />
          </linearGradient>

          <linearGradient id="pulse-emerald" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0" />
            <stop offset="50%" stop-color="#34d399" stop-opacity="1" />
            <stop offset="100%" stop-color="#ffffff" stop-opacity="0.9" />
          </linearGradient>

          <linearGradient id="pulse-amber" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0" />
            <stop offset="50%" stop-color="#fbbf24" stop-opacity="1" />
            <stop offset="100%" stop-color="#ffffff" stop-opacity="0.9" />
          </linearGradient>
        </defs>

        <!-- 1. 背景沉金走线层 (底层铜箔导轨) -->
        <g stroke-linecap="round" stroke-linejoin="round">
          <!-- 装饰性辅助平行差分走线 -->
          <path
            d="M 85 160 L 85 110 L 130 65 L 196 65"
            fill="none"
            class="stroke-slate-300 dark:stroke-slate-800"
            stroke-width="1"
            stroke-dasharray="2 3"
          />
          <path
            d="M 435 160 L 435 110 L 390 65 L 324 65"
            fill="none"
            class="stroke-slate-300 dark:stroke-slate-800"
            stroke-width="1"
            stroke-dasharray="2 3"
          />

          <!-- 四大主要总线沉金走线 -->
          <path
            v-for="b in busModules"
            :key="'trace-' + b.id"
            :d="b.traceD"
            fill="none"
            :stroke="selectedBusId === b.id && isPowerOn ? b.color : 'url(#gold-trace)'"
            :stroke-width="selectedBusId === b.id ? 2.4 : 1.6"
            :opacity="isPowerOn ? (selectedBusId === b.id ? 1 : 0.45) : 0.2"
            class="transition-all duration-300"
          />
        </g>

        <!-- 2. 过孔焊盘 -->
        <g v-for="b in busModules" :key="'vias-' + b.id">
          <g v-for="(v, vi) in b.vias" :key="vi" :transform="`translate(${v[0]}, ${v[1]})`">
            <circle
              r="3.5"
              fill="#090d16"
              :stroke="selectedBusId === b.id && isPowerOn ? b.color : '#f59e0b'"
              stroke-width="1.2"
            />
            <circle r="1.4" fill="#64748b" />
          </g>
          <!-- 端点焊盘引脚 -->
          <circle
            :cx="b.sourcePin[0]"
            :cy="b.sourcePin[1]"
            r="4.2"
            fill="#0f172a"
            :stroke="selectedBusId === b.id && isPowerOn ? b.color : '#e2e8f0'"
            stroke-width="1.6"
          />
          <circle
            :cx="b.targetPin[0]"
            :cy="b.targetPin[1]"
            r="3.2"
            fill="#0f172a"
            :stroke="b.color"
            stroke-width="1.4"
          />
        </g>

        <!-- 3. 动态光子脉冲流束 (仅在通电时高速穿梭) -->
        <g v-if="isPowerOn" stroke-linecap="round" stroke-linejoin="round">
          <path
            v-for="(b, idx) in busModules"
            :key="'pulse-' + b.id"
            :d="b.traceD"
            fill="none"
            :stroke="
              b.id === 'pcie5'
                ? 'url(#pulse-cyan)'
                : b.id === 'ddr5'
                  ? 'url(#pulse-violet)'
                  : b.id === 'npu'
                    ? 'url(#pulse-emerald)'
                    : 'url(#pulse-amber)'
            "
            :stroke-width="selectedBusId === b.id ? 3.5 : 2.2"
            pathLength="100"
            stroke-dasharray="24 100"
            filter="url(#pcb-glow)"
            class="animate-pcb-pulse"
            :style="{
              animationDuration: `${(1.6 / (modeConfig.speedMult || 1)) * (selectedBusId === b.id ? 0.75 : 1)}s`,
              animationDelay: `${idx * 0.25}s`,
            }"
          />
        </g>

        <!-- 4. 中央芯片封装体 -->
        <g transform="translate(196, 25)">
          <!-- 芯片底部阴影与发光地环 -->
          <rect
            x="-4"
            y="-4"
            width="136"
            height="116"
            rx="18"
            fill="none"
            :stroke="isPowerOn ? '#38bdf8' : 'rgba(100, 116, 139, 0.3)'"
            :stroke-width="isPowerOn ? 1.5 : 1"
            :opacity="isPowerOn ? 0.45 : 0.2"
          />

          <!-- 芯片外围微贴片引脚 紧密排布在四边，与外部导轨严丝合缝 -->
          <!-- 左侧引脚 -->
          <line
            v-for="p in [20, 35, 55, 70, 85]"
            :key="'pl-' + p"
            x1="-6"
            :y1="p"
            x2="0"
            :y2="p"
            stroke="#94a3b8"
            stroke-width="2"
          />
          <!-- 右侧引脚 -->
          <line
            v-for="p in [20, 35, 55, 70, 85]"
            :key="'pr-' + p"
            x1="128"
            :y1="p"
            x2="134"
            :y2="p"
            stroke="#94a3b8"
            stroke-width="2"
          />
          <!-- 底部引脚 (精准对齐下方的 NPU 和 NVMe 总线入线) -->
          <line
            v-for="p in [24, 39, 54, 74, 89, 104]"
            :key="'pb-' + p"
            :x1="p"
            y1="108"
            :x2="p"
            y2="114"
            stroke="#94a3b8"
            stroke-width="2"
          />

          <!-- 芯片实体基板 -->
          <rect
            x="0"
            y="0"
            width="128"
            height="108"
            rx="14"
            fill="#0b1120"
            stroke="#38bdf8"
            :stroke-width="isPowerOn ? 1.8 : 1"
          />

          <!-- 芯片内嵌晶圆窗口 -->
          <rect
            x="14"
            y="12"
            width="100"
            height="84"
            rx="8"
            fill="#030712"
            stroke="rgba(56, 189, 248, 0.4)"
            stroke-width="1"
          />

          <!-- 芯片中央名称与核心规格 -->
          <g transform="translate(64, 42)">
            <circle
              r="15"
              :fill="isPowerOn ? 'rgba(6, 182, 212, 0.15)' : 'rgba(51, 65, 85, 0.2)'"
            />
            <path
              d="M -6 -6 L 6 -6 L 6 6 L -6 6 Z M -3 -3 L 3 -3 L 3 3 L -3 3 Z"
              :fill="isPowerOn ? '#38bdf8' : '#64748b'"
            />
            <text
              y="25"
              text-anchor="middle"
              fill="#f8fafc"
              font-family="monospace"
              font-size="8.5"
              font-weight="700"
              letter-spacing="0.5"
            >
              {{ props.chipName }}
            </text>
            <text
              y="37"
              text-anchor="middle"
              :fill="isPowerOn ? '#38bdf8' : '#64748b'"
              font-family="monospace"
              font-size="7.5"
            >
              {{ modeConfig.clock }} · {{ props.coreCount }} CORES
            </text>
          </g>
        </g>
      </svg>

      <!-- 四大核心总线模块交互卡片 -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-2">
        <button
          v-for="b in busModules"
          :key="b.id"
          type="button"
          @click="selectedBusId = b.id"
          class="p-2.5 rounded-xl border text-left transition-all duration-200 cursor-pointer relative overflow-hidden"
          :class="
            selectedBusId === b.id
              ? 'border-cyan-500 bg-cyan-500/10 shadow-sm'
              : 'border-slate-200/90 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700'
          "
        >
          <!-- 选中侧边高亮线 -->
          <div
            v-if="selectedBusId === b.id"
            class="absolute left-0 top-0 bottom-0 w-1"
            :style="{ backgroundColor: b.color }"
          />

          <div class="flex items-center justify-between">
            <span class="text-xs font-mono font-bold text-slate-800 dark:text-slate-200">
              {{ b.name }}
            </span>
            <span
              class="w-1.5 h-1.5 rounded-full"
              :style="{ backgroundColor: isPowerOn ? b.color : '#94a3b8' }"
              :class="{ 'animate-pulse': isPowerOn && selectedBusId === b.id }"
            />
          </div>
          <div class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
            {{ b.subtitle }}
          </div>
          <div
            class="flex items-center justify-between text-[10px] font-mono mt-2 pt-1 border-t border-slate-200/50 dark:border-slate-800/60"
          >
            <span class="text-slate-400">{{ b.spec }}</span>
            <span
              class="font-semibold"
              :style="{ color: isPowerOn ? b.color : 'inherit' }"
            >
              {{ b.bandwidth }}
            </span>
          </div>
        </button>
      </div>

      <!-- 当前选中总线的实时数据寻迹面板 -->
      <div
        class="mt-3 p-3 rounded-xl border border-slate-200/80 dark:border-slate-800/70 bg-white/80 dark:bg-slate-950/70 flex flex-wrap items-center justify-between gap-3 text-xs font-mono"
      >
        <div class="flex items-center gap-2">
          <Radio class="w-4 h-4 text-cyan-500 shrink-0" />
          <span class="text-slate-700 dark:text-slate-300 font-semibold">
            当前连接：
          </span>
          <span class="text-cyan-600 dark:text-cyan-400 font-bold">
            {{ activeBusModule.name }} ⇄ 核心芯片
          </span>
        </div>
        <div class="flex items-center gap-4 text-slate-500 dark:text-slate-400 text-[11px]">
          <div>
            通道带宽：<span class="text-slate-800 dark:text-slate-200 font-bold">{{ activeBusModule.bandwidth }}</span>
          </div>
          <div>
            传输延迟：<span class="text-emerald-500 font-bold">{{ activeBusModule.latency }}</span>
          </div>
          <div>
            总线协议：<span class="text-slate-800 dark:text-slate-200 font-bold">{{ activeBusModule.spec }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部工况模式切换与硬件实时传感器指标 -->
    <div
      class="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 pt-1 text-xs font-mono"
    >
      <!-- 工况模式选择胶囊 -->
      <div
        class="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-200/90 dark:border-slate-800"
      >
        <button
          v-for="mode in (['turbo', 'eco', 'diagnostics'] as const)"
          :key="mode"
          type="button"
          @click="activeMode = mode"
          class="px-3 py-1 rounded-lg uppercase font-semibold transition-all duration-200 cursor-pointer"
          :class="
            activeMode === mode
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          "
        >
          {{ mode }}
        </button>
      </div>

      <!-- 硬件遥测指示灯 -->
      <div class="flex items-center gap-4 text-slate-600 dark:text-slate-400">
        <div class="flex items-center gap-1.5">
          <Activity class="w-3.5 h-3.5 text-cyan-500" />
          <span>负载: {{ modeConfig.load }}%</span>
        </div>
        <div class="flex items-center gap-1.5">
          <Flame
            class="w-3.5 h-3.5"
            :class="modeConfig.temp > 50 ? 'text-rose-500' : 'text-amber-500'"
          />
          <span>温度: {{ modeConfig.temp }}°C</span>
        </div>
        <div class="flex items-center gap-1.5">
          <ShieldCheck class="w-3.5 h-3.5 text-emerald-500" />
          <span>PASS</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes pcbPulseFlow {
  0% {
    stroke-dashoffset: 124;
  }
  100% {
    stroke-dashoffset: -100;
  }
}

.animate-pcb-pulse {
  animation: pcbPulseFlow linear infinite;
}
</style>
