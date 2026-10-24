<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'
import {
  Award,
  ShieldCheck,
  Sparkles,
  QrCode,
  CheckCircle2,
  Lock,
} from 'lucide-vue-next'

interface Props {
  memberId?: string
  tierName?: string
  issueDate?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  memberId: 'AURA-8820-VIP',
  tierName: '黑金会员卡',
  issueDate: '2025.10',
})

type FoilScheme = 'prism' | 'gold' | 'cyber'

const cardRef = ref<HTMLElement | null>(null)
const mouseX = ref(50)
const mouseY = ref(50)
const rotateX = ref(0)
const rotateY = ref(0)
const isHovered = ref(false)
const isVerifying = ref(false)
const foilScheme = ref<FoilScheme>('prism')

const foilSchemes: { id: FoilScheme; label: string; desc: string }[] = [
  { id: 'prism', label: '全息', desc: '彩虹色全息反光' },
  { id: 'gold', label: '黑金', desc: '黑色拉丝金属质感' },
  { id: 'cyber', label: '极光', desc: '青紫色渐变反光' },
]

// 鼠标悬停视差计算
const handleMouseMove = (e: MouseEvent) => {
  const card = cardRef.value
  if (!card) return
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const px = (x / rect.width) * 100
  const py = (y / rect.height) * 100
  mouseX.value = px
  mouseY.value = py

  // 倾斜范围限制在 [-14deg, 14deg]
  rotateY.value = ((px - 50) / 50) * 12
  rotateX.value = -((py - 50) / 50) * 12
}

const handleMouseEnter = () => {
  isHovered.value = true
}

const handleMouseLeave = () => {
  isHovered.value = false
  mouseX.value = 50
  mouseY.value = 50
  rotateX.value = 0
  rotateY.value = 0
}

const triggerVerification = () => {
  if (isVerifying.value) return
  isVerifying.value = true
  setTimeout(() => {
    isVerifying.value = false
  }, 1800)
}

// 动态全息折射光谱样式
const holographicStyle = computed(() => {
  const x = mouseX.value
  const y = mouseY.value

  if (foilScheme.value === 'gold') {
    return {
      background: `
        radial-gradient(circle at ${x}% ${y}%, rgba(254, 240, 138, 0.75) 0%, rgba(234, 179, 8, 0.45) 25%, rgba(161, 98, 7, 0.2) 50%, transparent 75%),
        linear-gradient(${x * 3.6}deg, rgba(250, 204, 21, 0.15) 0%, transparent 40%, rgba(254, 240, 138, 0.3) 60%, transparent 100%)
      `,
    }
  }

  if (foilScheme.value === 'cyber') {
    return {
      background: `
        radial-gradient(circle at ${x}% ${y}%, rgba(56, 189, 248, 0.75) 0%, rgba(129, 140, 248, 0.5) 30%, rgba(236, 72, 153, 0.3) 60%, transparent 80%),
        linear-gradient(${x * 3.6}deg, rgba(6, 182, 212, 0.25) 0%, transparent 45%, rgba(168, 85, 247, 0.3) 70%, transparent 100%)
      `,
    }
  }

  // 经典全息彩虹光谱
  return {
    background: `
      radial-gradient(circle at ${x}% ${y}%, rgba(255, 255, 255, 0.85) 0%, rgba(244, 63, 94, 0.55) 20%, rgba(234, 179, 8, 0.45) 40%, rgba(59, 130, 246, 0.45) 60%, rgba(168, 85, 247, 0.35) 80%, transparent 95%),
      linear-gradient(${x * 3.6}deg, rgba(244, 63, 94, 0.2) 0%, rgba(234, 179, 8, 0.2) 25%, rgba(16, 185, 129, 0.2) 50%, rgba(59, 130, 246, 0.2) 75%, rgba(168, 85, 247, 0.2) 100%)
    `,
  }
})
</script>

<template>
  <div
    :class="
      cn(
        'relative w-full max-w-lg mx-auto p-4 sm:p-6 font-sans select-none flex flex-col items-center gap-6',
        props.class
      )
    "
  >
    <!-- 3D 舞台容器 -->
    <div
      class="w-full max-w-md"
      style="perspective: 1100px;"
    >
      <!-- 可 3D 自由倾斜的高奢防伪卡体 -->
      <div
        ref="cardRef"
        @mousemove="handleMouseMove"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        @click="triggerVerification"
        class="relative w-full rounded-[28px] p-6 sm:p-7 overflow-hidden cursor-pointer transition-transform duration-200 ease-out border shadow-2xl"
        :class="
          foilScheme === 'gold'
            ? 'border-amber-400/35 bg-gradient-to-br from-zinc-900 via-neutral-950 to-zinc-950 text-white shadow-amber-500/10'
            : foilScheme === 'cyber'
              ? 'border-cyan-400/35 bg-gradient-to-br from-slate-950 via-[#070e24] to-zinc-950 text-white shadow-cyan-500/10'
              : 'border-indigo-400/35 bg-gradient-to-br from-slate-950 via-[#0b0c1e] to-zinc-950 text-white shadow-indigo-500/15'
        "
        :style="{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
          transformStyle: 'preserve-3d',
        }"
      >
        <!-- 1. 全息激光衍射彩虹折射层 -->
        <div
          class="absolute inset-0 pointer-events-none transition-opacity duration-300 mix-blend-color-dodge z-10"
          :class="isHovered ? 'opacity-90' : 'opacity-40'"
          :style="holographicStyle"
        />

        <!-- 2. 镜面反光耀斑 -->
        <div
          class="absolute inset-0 pointer-events-none mix-blend-overlay z-20 transition-opacity duration-200"
          :style="{
            background: `radial-gradient(circle 280px at ${mouseX}% ${mouseY}%, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0) 70%)`,
            opacity: isHovered ? 0.85 : 0.25,
          }"
        />

        <!-- 3. 防伪激光断续微缩线条与微孔水印底纹 -->
        <div
          class="absolute inset-0 pointer-events-none opacity-15 mix-blend-screen"
          style="
            background-image: repeating-linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.45) 0px,
              rgba(255, 255, 255, 0.45) 1px,
              transparent 1px,
              transparent 7px
            );
          "
        />

        <!-- 4. 激光安全防伪微印文字轨道 -->
        <div
          class="absolute -top-3 -right-12 rotate-45 pointer-events-none opacity-20 text-[7px] font-mono tracking-widest text-white whitespace-nowrap"
        >
          AUTHENTIC SECURE VERIFIED AURA PROTOCOL · 0x8820 · HOLO SEAL ·
        </div>

        <!-- 5. 激光防伪校验动态扫描光幕 (点击卡片触发) -->
        <div
          v-if="isVerifying"
          class="absolute inset-0 pointer-events-none z-30 overflow-hidden"
        >
          <div
            class="w-full h-24 bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent animate-laser-scan shadow-[0_0_20px_#22d3ee]"
          />
        </div>

        <!-- 卡片前景图层 (使用 translateZ 分离深度，营造浮雕悬浮感) -->
        <div
          class="relative z-30 flex flex-col justify-between h-full space-y-5"
          style="transform: translateZ(28px);"
        >
          <!-- 顶部认证签发栏 -->
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              <div
                class="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-lg border"
                :class="
                  foilScheme === 'gold'
                    ? 'bg-gradient-to-tr from-amber-500 to-yellow-300 border-amber-300/60 shadow-amber-500/30'
                    : foilScheme === 'cyber'
                      ? 'bg-gradient-to-tr from-cyan-500 to-blue-500 border-cyan-300/60 shadow-cyan-500/30'
                      : 'bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 border-purple-300/60 shadow-purple-500/30'
                "
              >
                <Award class="w-4 h-4" />
              </div>
              <div>
                <span
                  class="text-[9.5px] font-mono tracking-widest text-slate-400 uppercase flex items-center gap-1"
                >
                  <Lock class="w-2.5 h-2.5 text-cyan-400" />
                  会员认证
                </span>
                <h4 class="text-xs font-bold tracking-wider text-slate-100">
                  Aura 会员
                </h4>
              </div>
            </div>

            <!-- 动态校验状态徽章 -->
            <div
              class="flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-full border transition-all"
              :class="
                isVerifying
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 animate-pulse'
                  : 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
              "
            >
              <ShieldCheck class="w-3.5 h-3.5 text-emerald-400" />
              <span>{{ isVerifying ? '验证中...' : '已验证' }}</span>
            </div>
          </div>

          <!-- 中央 3D 浮雕激光防伪徽章 -->
          <div
            class="relative my-2 p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex flex-col items-center justify-center text-center overflow-hidden"
            style="transform: translateZ(36px);"
          >
            <!-- 徽章后方同心圆防伪干涉环 -->
            <div
              class="absolute w-44 h-44 rounded-full border border-dashed border-white/15 pointer-events-none animate-spin-slow"
            />
            <div
              class="absolute w-32 h-32 rounded-full border border-white/10 pointer-events-none"
            />

            <!-- 核心金属浮雕印鉴 -->
            <div
              class="relative w-16 h-16 rounded-full flex items-center justify-center shadow-xl border-2 transition-transform duration-500"
              :class="
                foilScheme === 'gold'
                  ? 'border-amber-400/80 bg-gradient-to-b from-amber-400/30 to-amber-950/60 shadow-amber-500/25'
                  : foilScheme === 'cyber'
                    ? 'border-cyan-400/80 bg-gradient-to-b from-cyan-400/30 to-blue-950/60 shadow-cyan-500/25'
                    : 'border-purple-400/80 bg-gradient-to-b from-purple-400/30 to-slate-950/60 shadow-purple-500/25'
              "
              :style="{
                transform: `scale(${isHovered ? 1.08 : 1})`,
              }"
            >
              <Sparkles
                class="w-8 h-8 transition-all duration-300"
                :class="
                  foilScheme === 'gold'
                    ? 'text-amber-300 drop-shadow-[0_0_8px_#f59e0b]'
                    : foilScheme === 'cyber'
                      ? 'text-cyan-300 drop-shadow-[0_0_8px_#06b6d4]'
                      : 'text-purple-300 drop-shadow-[0_0_8px_#a855f7]'
                "
              />
            </div>

            <!-- 会员等阶名称 (带有光变油墨渐变) -->
            <h3
              class="mt-3.5 text-base sm:text-lg font-black tracking-wider uppercase bg-clip-text text-transparent transition-all"
              :class="
                foilScheme === 'gold'
                  ? 'bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-500'
                  : foilScheme === 'cyber'
                    ? 'bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400'
                    : 'bg-gradient-to-r from-rose-300 via-purple-300 to-cyan-300'
              "
            >
              {{ props.tierName }}
            </h3>

            <!-- 成员防伪唯一编码 -->
            <div
              class="mt-1.5 text-xs font-mono text-slate-300 flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full border border-white/10"
            >
              <CheckCircle2 class="w-3.5 h-3.5 text-cyan-400" />
              <span>编号: {{ props.memberId }}</span>
            </div>
          </div>

          <!-- 底部溯源签发日期与二维码微缩标识 -->
          <div
            class="flex items-center justify-between pt-3 border-t border-white/10 text-[11px] font-mono text-slate-400"
          >
            <div class="flex items-center gap-2">
              <QrCode class="w-4 h-4 text-slate-400/80" />
              <span>发卡日期：{{ props.issueDate }}</span>
            </div>
            <div
              class="flex items-center gap-1 font-semibold uppercase tracking-wider"
              :class="
                foilScheme === 'gold'
                  ? 'text-amber-400'
                  : foilScheme === 'cyber'
                    ? 'text-cyan-400'
                    : 'text-purple-400'
              "
            >
              <span>全息标识</span>
              <span class="w-1.5 h-1.5 rounded-full bg-current animate-ping" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部全息防伪箔材切换器 -->
    <div
      class="flex flex-wrap items-center justify-center gap-2 text-xs font-mono"
    >
      <span class="text-slate-500 dark:text-slate-400 text-xs">卡面样式：</span>
      <button
        v-for="s in foilSchemes"
        :key="s.id"
        type="button"
        @click="foilScheme = s.id"
        class="px-3 py-1.5 rounded-xl border text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 shadow-sm"
        :class="
          foilScheme === s.id
            ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-700 dark:border-white font-bold'
            : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-400'
        "
      >
        <span>{{ s.label }}</span>
        <span class="text-[10px] opacity-70">({{ s.desc }})</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
@keyframes laserScan {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(400%);
  }
}

@keyframes spinSlow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-laser-scan {
  animation: laserScan 1.6s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spinSlow 24s linear infinite;
}
</style>
