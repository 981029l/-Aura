<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import { Scale, RotateCcw, Check, Plus, Minus, AlertCircle } from 'lucide-vue-next'

interface Props {
  initialLeft?: number
  initialRight?: number
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  initialLeft: 60,
  initialRight: 60,
})

const leftWeight = ref(props.initialLeft)
const rightWeight = ref(props.initialRight)

// 物理二阶弹簧阻尼摆动系统
let currentAngle = 0 // 当前瞬时倾角 (度)
let angularVelocity = 0 // 角速度
let targetAngle = 0 // 静态力矩目标角
let animFrameId = 0
let lastTimestamp = 0

// 响应式显示的当前插值倾角
const displayAngle = ref(0)

// 计算静态目标平衡倾角 (-18° ~ 18°)
const computeTargetAngle = (diff: number) => {
  if (diff === 0) return 0
  // 非线性力矩倾角映射
  const sign = Math.sign(diff)
  const absDiff = Math.abs(diff)
  const angle = Math.min(18, Math.pow(absDiff, 0.65) * 1.5)
  return sign * angle
}

const isBalanced = computed(() => leftWeight.value === rightWeight.value)
const weightDiff = computed(() => rightWeight.value - leftWeight.value)

// 力矩差值 (N·m，设半臂长 0.12m，重力 g=9.8)
const torqueDiffNm = computed(() => {
  return ((Math.abs(weightDiff.value) / 1000) * 9.8 * 0.12).toFixed(3)
})

// 物理主循环 (阻尼简谐振荡)
function physicsLoop(timestamp: number) {
  if (!lastTimestamp) lastTimestamp = timestamp
  const dt = Math.min(0.04, (timestamp - lastTimestamp) / 1000)
  lastTimestamp = timestamp

  // 弹簧刚度 k 与阻尼 c
  const k = 42.0 // 恢复力刚度
  const c = 3.6 // 阻尼系数
  const force = -k * (currentAngle - targetAngle)
  const damping = -c * angularVelocity

  const acceleration = force + damping
  angularVelocity += acceleration * dt
  currentAngle += angularVelocity * dt

  displayAngle.value = Number(currentAngle.toFixed(2))

  // 当摆幅极其微小时进入休眠
  if (
    Math.abs(currentAngle - targetAngle) > 0.02 ||
    Math.abs(angularVelocity) > 0.05
  ) {
    animFrameId = requestAnimationFrame(physicsLoop)
  } else {
    currentAngle = targetAngle
    angularVelocity = 0
    displayAngle.value = targetAngle
    animFrameId = 0
  }
}

function wakePhysics() {
  targetAngle = computeTargetAngle(weightDiff.value)
  if (!animFrameId) {
    lastTimestamp = performance.now()
    animFrameId = requestAnimationFrame(physicsLoop)
  }
}

watch(weightDiff, () => {
  // 施加微弱冲击脉冲，让天平产生逼真的物理晃动
  angularVelocity += (Math.random() - 0.5) * 4
  wakePhysics()
})

const adjustLeft = (delta: number) => {
  leftWeight.value = Math.max(0, leftWeight.value + delta)
}

const adjustRight = (delta: number) => {
  rightWeight.value = Math.max(0, rightWeight.value + delta)
}

const reset = () => {
  leftWeight.value = 50
  rightWeight.value = 50
}

// 分解砝码堆叠逻辑 (根据总克数拆为 50g, 20g, 10g 实体砝码)
function getWeightsStack(totalG: number) {
  const stack: { id: string; size: 'lg' | 'md' | 'sm'; weight: number; color: string }[] = []
  let rem = totalG
  let idx = 0

  while (rem >= 50 && stack.length < 5) {
    stack.push({ id: `50-${idx++}`, size: 'lg', weight: 50, color: 'from-amber-300 via-yellow-500 to-amber-700' })
    rem -= 50
  }
  while (rem >= 20 && stack.length < 6) {
    stack.push({ id: `20-${idx++}`, size: 'md', weight: 20, color: 'from-yellow-200 via-amber-400 to-amber-600' })
    rem -= 20
  }
  while (rem >= 10 && stack.length < 7) {
    stack.push({ id: `10-${idx++}`, size: 'sm', weight: 10, color: 'from-amber-200 via-yellow-400 to-yellow-600' })
    rem -= 10
  }
  if (rem > 0 && stack.length < 8) {
    stack.push({ id: `rest-${idx++}`, size: 'sm', weight: rem, color: 'from-yellow-100 via-amber-300 to-amber-500' })
  }
  return stack
}

const leftStack = computed(() => getWeightsStack(leftWeight.value))
const rightStack = computed(() => getWeightsStack(rightWeight.value))

onMounted(() => {
  targetAngle = computeTargetAngle(weightDiff.value)
  currentAngle = targetAngle
  displayAngle.value = targetAngle
})

onUnmounted(() => {
  if (animFrameId) cancelAnimationFrame(animFrameId)
})
</script>

<template>
  <div
    :class="
      cn(
        'relative w-full max-w-xl mx-auto rounded-3xl p-6 sm:p-7 overflow-hidden transition-all duration-300 border border-amber-500/20 bg-gradient-to-b from-slate-900 via-[#0d1322] to-slate-950 text-slate-100 shadow-2xl font-sans select-none space-y-5',
        props.class
      )
    "
  >
    <!-- 背景精密仪器网格 -->
    <div
      class="absolute inset-0 opacity-[0.03] pointer-events-none"
      style="
        background-image: radial-gradient(#f59e0b 1.2px, transparent 1.2px);
        background-size: 16px 16px;
      "
    />

    <!-- 顶部标题与重置工具栏 -->
    <div
      class="relative z-10 flex items-center justify-between pb-3.5 border-b border-amber-500/20 text-xs"
    >
      <div class="flex items-center gap-2.5">
        <div
          class="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 shadow-sm"
        >
          <Scale class="w-4 h-4" />
        </div>
        <div>
          <div class="flex items-center gap-2">
            <h3 class="font-bold text-sm text-slate-100 tracking-tight">
              天平
            </h3>
            <span
              class="px-1.5 py-0.5 rounded text-[10px] font-mono bg-amber-500/15 text-amber-300 border border-amber-500/30"
            >
              阻尼摆动
            </span>
          </div>
          <p class="text-[11px] text-slate-400 mt-0.5">
            给左右两边增减砝码，横梁会按重量差倾斜
          </p>
        </div>
      </div>

      <button
        type="button"
        @click="reset"
        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-amber-500/30 bg-amber-500/10 text-xs font-mono font-medium text-amber-300 hover:bg-amber-500/20 hover:text-white transition-all cursor-pointer shadow-sm"
      >
        <RotateCcw class="w-3.5 h-3.5" />
        <span>重置</span>
      </button>
    </div>

    <!-- 精密天平机械舞台 (SVG + CSS 3D 悬挂物理架构) -->
    <div
      class="relative z-10 h-[260px] rounded-2xl border border-amber-500/20 bg-slate-950/80 p-4 flex flex-col items-center justify-center overflow-hidden shadow-inner"
    >
      <!-- 顶部零位微弧度刻度盘 (Precision Center Pointer & Dial) -->
      <div class="absolute top-4 flex flex-col items-center pointer-events-none z-10">
        <div class="relative w-40 h-10 flex items-center justify-center">
          <!-- 刻度线与基准线 -->
          <svg class="w-full h-full overflow-visible" viewBox="-80 0 160 36">
            <!-- 刻度底弧 -->
            <path
              d="M -70 8 Q 0 20 70 8"
              fill="none"
              stroke="rgba(245, 158, 11, 0.25)"
              stroke-width="1"
            />
            <!-- 刻度钉 -->
            <line
              v-for="deg in [-15, -10, -5, 0, 5, 10, 15]"
              :key="deg"
              :x1="deg * 4.4"
              :y1="12"
              :x2="deg * 4.4"
              :y2="deg === 0 ? 3 : 7"
              :stroke="deg === 0 ? '#34d399' : 'rgba(251, 191, 36, 0.55)'"
              :stroke-width="deg === 0 ? 2 : 1"
            />
            <!-- 零位基准点提示 -->
            <circle cx="0" cy="3" r="2" fill="#34d399" />
          </svg>
        </div>
        <span
          class="text-[10px] font-mono -mt-1 tracking-wider"
          :class="isBalanced ? 'text-emerald-400 font-bold' : 'text-amber-400/80'"
        >
          {{ isBalanced ? '0° 平衡' : `${displayAngle > 0 ? '+' : ''}${displayAngle}° 偏转` }}
        </span>
      </div>

      <!-- 中心立柱与宝石刀口支座 -->
      <div class="absolute bottom-6 flex flex-col items-center pointer-events-none z-10">
        <!-- 支点刀口轴承 -->
        <div class="w-6 h-6 rotate-45 border-2 border-amber-400 bg-amber-500/20 -mb-3 shadow-md" />
        <!-- 黄铜精工立柱身 -->
        <div
          class="w-4 h-24 rounded-t-sm bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-700 shadow-lg border-x border-amber-300/40"
        />
        <!-- 雕花阶梯沉金底座 -->
        <div
          class="w-36 h-3 rounded-t-md bg-gradient-to-r from-amber-700 via-amber-400 to-amber-800 shadow-md border-t border-amber-200/50"
        />
        <div
          class="w-44 h-2.5 rounded-full bg-slate-900 border border-amber-500/40 shadow-xl"
        />
      </div>

      <!-- 旋转双臂杠杆横梁 -->
      <div
        class="relative w-[340px] sm:w-[380px] h-6 flex items-center justify-between z-20 pointer-events-none"
        :style="{
          transform: `rotate(${displayAngle}deg)`,
          transformOrigin: '50% 50%',
        }"
      >
        <!-- 精密黄铜雕花横梁体 -->
        <div
          class="absolute inset-x-2 top-1.5 h-3 rounded-full bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-700 border border-yellow-200/60 shadow-md flex items-center justify-between px-6"
        >
          <!-- 横梁上的等距微刻度线 -->
          <div
            v-for="tick in 12"
            :key="tick"
            class="w-[1px] h-2 bg-amber-900/60"
          />
        </div>

        <!-- 横梁中心轴套与向上延伸的微调精细指针 -->
        <div class="absolute left-1/2 -translate-x-1/2 -top-12 flex flex-col items-center">
          <!-- 纤细指针 (随横梁一起偏转角度，指向顶部刻度盘) -->
          <div
            class="w-[1.5px] h-12 bg-gradient-to-t from-amber-400 to-emerald-400 shadow-[0_0_6px_#34d399]"
          />
          <div
            class="w-5 h-5 rounded-full border-2 border-amber-200 bg-gradient-to-tr from-amber-500 to-yellow-300 shadow-md -mt-1 flex items-center justify-center"
          >
            <div class="w-1.5 h-1.5 rounded-full bg-slate-950" />
          </div>
        </div>

        <!-- 左侧悬挂臂环与托盘 (重力垂直下垂，抵消横梁倾角) -->
        <div
          class="relative -ml-1 flex flex-col items-center"
          :style="{
            transform: `rotate(${-displayAngle}deg)`,
            transformOrigin: '50% 0',
          }"
        >
          <!-- 顶部吊环 -->
          <div class="w-3 h-3 rounded-full border border-amber-300/80 -mb-0.5" />
          <!-- 三角形悬链线吊索 -->
          <svg class="w-24 h-16 overflow-visible" viewBox="0 0 96 64">
            <line x1="48" y1="0" x2="6" y2="60" stroke="#f59e0b" stroke-width="1.2" />
            <line x1="48" y1="0" x2="90" y2="60" stroke="#f59e0b" stroke-width="1.2" />
            <line x1="48" y1="0" x2="48" y2="60" stroke="rgba(245, 158, 11, 0.45)" stroke-width="0.8" stroke-dasharray="2 2" />
          </svg>

          <!-- 真实堆叠黄铜砝码区 -->
          <div class="relative -mt-14 mb-1 h-12 flex flex-col-reverse items-center justify-start gap-0.5 z-30">
            <div
              v-for="w in leftStack"
              :key="w.id"
              class="rounded-sm border border-yellow-100/60 shadow-sm flex items-center justify-center font-mono font-bold text-slate-950 transition-all duration-300 animate-weight-drop"
              :class="[
                'bg-gradient-to-r ' + w.color,
                w.size === 'lg' ? 'w-12 h-3.5 text-[8.5px]' : w.size === 'md' ? 'w-9 h-3 text-[7.5px]' : 'w-7 h-2.5 text-[7px]',
              ]"
            >
              {{ w.weight }}g
            </div>
          </div>

          <!-- 左侧金属深弧托盘 -->
          <div
            class="relative w-24 h-5 rounded-b-[24px] border-t-2 border-yellow-200 bg-gradient-to-b from-amber-500 via-amber-600 to-amber-800 shadow-lg flex items-center justify-center text-[11px] font-mono font-bold text-white z-20"
          >
            <span>{{ leftWeight }}g</span>
          </div>
        </div>

        <!-- 右侧悬挂臂环与托盘 (重力垂直下垂，抵消横梁倾角) -->
        <div
          class="relative -mr-1 flex flex-col items-center"
          :style="{
            transform: `rotate(${-displayAngle}deg)`,
            transformOrigin: '50% 0',
          }"
        >
          <!-- 顶部吊环 -->
          <div class="w-3 h-3 rounded-full border border-amber-300/80 -mb-0.5" />
          <!-- 三角形悬链线吊索 -->
          <svg class="w-24 h-16 overflow-visible" viewBox="0 0 96 64">
            <line x1="48" y1="0" x2="6" y2="60" stroke="#f59e0b" stroke-width="1.2" />
            <line x1="48" y1="0" x2="90" y2="60" stroke="#f59e0b" stroke-width="1.2" />
            <line x1="48" y1="0" x2="48" y2="60" stroke="rgba(245, 158, 11, 0.45)" stroke-width="0.8" stroke-dasharray="2 2" />
          </svg>

          <!-- 真实堆叠黄铜砝码区 -->
          <div class="relative -mt-14 mb-1 h-12 flex flex-col-reverse items-center justify-start gap-0.5 z-30">
            <div
              v-for="w in rightStack"
              :key="w.id"
              class="rounded-sm border border-yellow-100/60 shadow-sm flex items-center justify-center font-mono font-bold text-slate-950 transition-all duration-300 animate-weight-drop"
              :class="[
                'bg-gradient-to-r ' + w.color,
                w.size === 'lg' ? 'w-12 h-3.5 text-[8.5px]' : w.size === 'md' ? 'w-9 h-3 text-[7.5px]' : 'w-7 h-2.5 text-[7px]',
              ]"
            >
              {{ w.weight }}g
            </div>
          </div>

          <!-- 右侧金属深弧托盘 -->
          <div
            class="relative w-24 h-5 rounded-b-[24px] border-t-2 border-yellow-200 bg-gradient-to-b from-amber-500 via-amber-600 to-amber-800 shadow-lg flex items-center justify-center text-[11px] font-mono font-bold text-white z-20"
          >
            <span>{{ rightWeight }}g</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 左右配重精密微调控制面板 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
      <!-- 左盘配重调控 -->
      <div
        class="p-3 rounded-2xl border border-slate-800 bg-slate-950/70 flex items-center justify-between gap-2 shadow-sm"
      >
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div>
            <div class="text-[10px] text-slate-400 font-mono uppercase">LEFT PAN</div>
            <div class="text-sm font-mono font-bold text-white">{{ leftWeight }}g</div>
          </div>
        </div>

        <div class="flex items-center gap-1.5">
          <button
            type="button"
            @click="adjustLeft(-50)"
            title="移除 50g 大砝码"
            class="px-2 py-1 rounded-lg border border-slate-800 bg-slate-900 text-xs font-mono text-slate-300 hover:text-white hover:border-amber-500/40 active:scale-95 transition-all cursor-pointer"
          >
            -50
          </button>
          <button
            type="button"
            @click="adjustLeft(-10)"
            title="移除 10g 砝码"
            class="p-1.5 rounded-lg border border-slate-800 bg-slate-900 text-xs font-mono text-slate-300 hover:text-white hover:border-amber-500/40 active:scale-95 transition-all cursor-pointer"
          >
            <Minus class="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            @click="adjustLeft(10)"
            title="添加 10g 砝码"
            class="p-1.5 rounded-lg border border-slate-800 bg-slate-900 text-xs font-mono text-slate-300 hover:text-white hover:border-amber-500/40 active:scale-95 transition-all cursor-pointer"
          >
            <Plus class="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            @click="adjustLeft(50)"
            title="添加 50g 大砝码"
            class="px-2 py-1 rounded-lg border border-amber-500/30 bg-amber-500/10 text-xs font-mono font-bold text-amber-300 hover:bg-amber-500/20 active:scale-95 transition-all cursor-pointer"
          >
            +50
          </button>
        </div>
      </div>

      <!-- 右盘配重调控 -->
      <div
        class="p-3 rounded-2xl border border-slate-800 bg-slate-950/70 flex items-center justify-between gap-2 shadow-sm"
      >
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div>
            <div class="text-[10px] text-slate-400 font-mono uppercase">RIGHT PAN</div>
            <div class="text-sm font-mono font-bold text-white">{{ rightWeight }}g</div>
          </div>
        </div>

        <div class="flex items-center gap-1.5">
          <button
            type="button"
            @click="adjustRight(-50)"
            title="移除 50g 大砝码"
            class="px-2 py-1 rounded-lg border border-slate-800 bg-slate-900 text-xs font-mono text-slate-300 hover:text-white hover:border-amber-500/40 active:scale-95 transition-all cursor-pointer"
          >
            -50
          </button>
          <button
            type="button"
            @click="adjustRight(-10)"
            title="移除 10g 砝码"
            class="p-1.5 rounded-lg border border-slate-800 bg-slate-900 text-xs font-mono text-slate-300 hover:text-white hover:border-amber-500/40 active:scale-95 transition-all cursor-pointer"
          >
            <Minus class="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            @click="adjustRight(10)"
            title="添加 10g 砝码"
            class="p-1.5 rounded-lg border border-slate-800 bg-slate-900 text-xs font-mono text-slate-300 hover:text-white hover:border-amber-500/40 active:scale-95 transition-all cursor-pointer"
          >
            <Plus class="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            @click="adjustRight(50)"
            title="添加 50g 大砝码"
            class="px-2 py-1 rounded-lg border border-amber-500/30 bg-amber-500/10 text-xs font-mono font-bold text-amber-300 hover:bg-amber-500/20 active:scale-95 transition-all cursor-pointer"
          >
            +50
          </button>
        </div>
      </div>
    </div>

    <!-- 底部物理力矩平衡判定徽章看板 -->
    <div class="flex items-center justify-center pt-1">
      <div
        class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold transition-all shadow-sm"
        :class="
          isBalanced
            ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/40 shadow-emerald-500/10'
            : 'bg-amber-500/15 text-amber-300 border border-amber-500/40 shadow-amber-500/10'
        "
      >
        <Check v-if="isBalanced" class="w-4 h-4 text-emerald-400 stroke-[2.5]" />
        <AlertCircle v-else class="w-4 h-4 text-amber-400" />
        <span>
          {{
            isBalanced
              ? '两边重量相等，天平平衡'
              : `两边相差 ${Math.abs(weightDiff)}g（力矩差 ${torqueDiffNm} N·m）`
          }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes weightDrop {
  0% {
    opacity: 0;
    transform: translateY(-8px) scale(0.9);
  }
  70% {
    transform: translateY(1px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-weight-drop {
  animation: weightDrop 0.25s cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards;
}
</style>
