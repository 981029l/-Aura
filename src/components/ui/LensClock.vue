<template>
  <div
    ref="containerRef"
    class="relative w-full max-w-[340px] aspect-square rounded-[36px] p-4 select-none overflow-hidden group cursor-crosshair focus:outline-none"
    :class="className"
    tabindex="0"
    :style="{
      background: 'linear-gradient(145deg, #1c1c1e 0%, #0d0d0f 100%)',
      boxShadow: '0 30px 70px -10px rgba(0,0,0,0.85), inset 0 1px 1px rgba(255,255,255,0.15), inset 0 -2px 4px rgba(0,0,0,0.9)',
      border: '1px solid rgba(255,255,255,0.09)',
    }"
    @pointermove="handlePointerMove"
    @pointerleave="handlePointerLeave"
    @pointerdown="handlePointerDown"
  >
    <svg viewBox="0 0 100 100" class="w-full h-full overflow-visible">
      <defs>
        <!-- Lens Drop Shadow onto dial -->
        <filter id="lens-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="1.2" stdDeviation="1.5" flood-color="#000000" flood-opacity="0.6" />
        </filter>

        <!-- Lens Magnifier Clip Path -->
        <clipPath :id="`lens-clip-${instanceId}`">
          <circle :cx="lensX" :cy="lensY" :r="lensRadius" />
        </clipPath>

        <!-- Bezel Metallic Radial Gradient -->
        <radialGradient id="bezel-metallic" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#3f3f46" />
          <stop offset="60%" stop-color="#27272a" />
          <stop offset="100%" stop-color="#18181b" />
        </radialGradient>

        <!-- Dial Face Carbon Radial Gradient -->
        <radialGradient id="dial-bg" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stop-color="#242428" />
          <stop offset="70%" stop-color="#141416" />
          <stop offset="100%" stop-color="#0b0b0d" />
        </radialGradient>

        <!-- Convex Lens Glass Glare -->
        <radialGradient :id="`lens-glare-${instanceId}`" :cx="lensX - 4" :cy="lensY - 5" :r="lensRadius * 1.1" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.32" />
          <stop offset="45%" stop-color="#ffffff" stop-opacity="0.08" />
          <stop offset="75%" stop-color="#38bdf8" stop-opacity="0.04" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0.22" />
        </radialGradient>

        <!-- Base Clock Face (Reusable for standard dial and magnified lens view) -->
        <g :id="`clock-face-${instanceId}`">
          <!-- Dial Center Background -->
          <circle cx="50" cy="50" r="45" fill="url(#dial-bg)" />

          <!-- Concentric Precision Sub-Rings -->
          <circle cx="50" cy="50" r="44" fill="none" stroke="#27272a" stroke-width="0.3" />
          <circle cx="50" cy="50" r="37" fill="none" stroke="#27272a" stroke-width="0.25" stroke-dasharray="0.5 1.5" />
          <circle cx="50" cy="50" r="23" fill="none" stroke="#27272a" stroke-width="0.2" />

          <!-- Radial Spokes Crosshairs -->
          <line x1="50" y1="6" x2="50" y2="94" stroke="#27272a" stroke-width="0.25" stroke-dasharray="1 2" />
          <line x1="6" y1="50" x2="94" y2="50" stroke="#27272a" stroke-width="0.25" stroke-dasharray="1 2" />

          <!-- Brand / Precision Chronometer Label -->
          <text
            x="50"
            y="39"
            text-anchor="middle"
            dominant-baseline="central"
            fill="#71717a"
            font-size="2"
            font-family="system-ui, -apple-system, sans-serif"
            font-weight="600"
            letter-spacing="0.1em"
          >
            AURA CHRONO
          </text>
          <text
            x="50"
            y="61.5"
            text-anchor="middle"
            dominant-baseline="central"
            fill="#52525b"
            font-size="1.6"
            font-family="system-ui, -apple-system, sans-serif"
            font-weight="500"
            letter-spacing="0.08em"
          >
            LENS DISPERSION
          </text>

          <!-- Minute & Hour Ticks (100% Centered and Calibrated) -->
          <g v-for="t in ticks" :key="t.i">
            <!-- Minute Ticks -->
            <line
              v-if="!t.isHour"
              :x1="50 + t.sin * 42.5"
              :y1="50 + t.cos * 42.5"
              :x2="50 + t.sin * 44"
              :y2="50 + t.cos * 44"
              stroke="#52525b"
              stroke-width="0.35"
              stroke-linecap="round"
            />
            <!-- Major Hour Marks -->
            <line
              v-else
              :x1="50 + t.sin * 39.5"
              :y1="50 + t.cos * 39.5"
              :x2="50 + t.sin * 44"
              :y2="50 + t.cos * 44"
              stroke="#f4f4f5"
              stroke-width="0.85"
              stroke-linecap="round"
            />
            <!-- Hour Luminous Pips -->
            <circle
              v-if="t.isHour"
              :cx="50 + t.sin * 37"
              :cy="50 + t.cos * 37"
              r="0.65"
              fill="#a1a1aa"
            />
          </g>

          <!-- Hour Numerals (Modern Geometric Sans, Perfectly Centered) -->
          <g v-for="h in 12" :key="h">
            <text
              :x="50 + Math.sin((h * 30 * Math.PI) / 180) * 30.5"
              :y="50 - Math.cos((h * 30 * Math.PI) / 180) * 30.5"
              text-anchor="middle"
              dominant-baseline="central"
              fill="#e4e4e7"
              font-size="4"
              font-family="system-ui, -apple-system, sans-serif"
              font-weight="700"
            >
              {{ h }}
            </text>
          </g>

          <!-- Hour Hand (Mechanical Sword Hand with Luminous Pip) -->
          <g :transform="`rotate(${hourAngle} 50 50)`">
            <rect x="48.7" y="24" width="2.6" height="28" rx="1.3" fill="#e4e4e7" />
            <line x1="50" y1="26" x2="50" y2="46" stroke="#71717a" stroke-width="0.4" />
            <circle cx="50" cy="29" r="0.75" fill="#ff9f0a" />
          </g>

          <!-- Minute Hand (Tapered Lance Hand) -->
          <g :transform="`rotate(${minuteAngle} 50 50)`">
            <rect x="49.1" y="11" width="1.8" height="42" rx="0.9" fill="#f4f4f5" />
            <line x1="50" y1="13" x2="50" y2="45" stroke="#a1a1aa" stroke-width="0.35" />
            <circle cx="50" cy="16" r="0.65" fill="#38bdf8" />
          </g>

          <!-- Second Hand (Vibrant Orange Needle with Counterweight) -->
          <g :transform="`rotate(${secondAngle} 50 50)`">
            <line x1="50" y1="59" x2="50" y2="8" stroke="#ff9f0a" stroke-width="0.45" stroke-linecap="round" />
            <circle cx="50" cy="50" r="1.6" fill="#ff9f0a" />
            <circle cx="50" cy="50" r="0.6" fill="#09090b" />
            <!-- Counterbalance Ring -->
            <circle cx="50" cy="57" r="1.1" fill="none" stroke="#ff9f0a" stroke-width="0.4" />
            <circle cx="50" cy="18" r="1" fill="#ff9f0a" />
          </g>

          <!-- Center Pivot Cap -->
          <circle cx="50" cy="50" r="2.2" fill="#27272a" stroke="#3f3f46" stroke-width="0.4" />
          <circle cx="50" cy="50" r="0.8" fill="#52525b" />
        </g>
      </defs>

      <!-- Outer Bezel Ring (Concentric) -->
      <circle cx="50" cy="50" r="47.5" fill="none" stroke="url(#bezel-metallic)" stroke-width="1.8" />
      <circle cx="50" cy="50" r="46.2" fill="none" stroke="#3f3f46" stroke-width="0.4" />
      <circle cx="50" cy="50" r="45.2" fill="none" stroke="#18181b" stroke-width="0.3" />

      <!-- 1. Base Layer Clock Dial -->
      <use :href="`#clock-face-${instanceId}`" />

      <!-- 2. Optical Convex Lens Layer (Magnified Detail View) -->
      <g :clip-path="`url(#lens-clip-${instanceId})`">
        <!-- 1.38x Magnified View Centered At (lensX, lensY) -->
        <g :transform="`translate(${lensX} ${lensY}) scale(1.38) translate(${-lensX} ${-lensY})`">
          <use :href="`#clock-face-${instanceId}`" />
        </g>

        <!-- Lens Convex Glare & Edge Darkening -->
        <circle
          :cx="lensX"
          :cy="lensY"
          :r="lensRadius"
          :fill="`url(#lens-glare-${instanceId})`"
          pointer-events-none
        />

        <!-- Chromatic Dispersion Edge Accent -->
        <circle
          :cx="lensX"
          :cy="lensY"
          :r="lensRadius - 0.4"
          fill="none"
          stroke="rgba(56, 189, 248, 0.28)"
          stroke-width="0.8"
          pointer-events-none
        />
      </g>

      <!-- 3. Physical Lens Rim & Specular Ring -->
      <!-- Drop shadow under lens -->
      <circle
        :cx="lensX"
        :cy="lensY"
        :r="lensRadius"
        fill="none"
        stroke="rgba(0,0,0,0.5)"
        stroke-width="0.8"
        filter="url(#lens-shadow)"
        pointer-events-none
      />
      <!-- Outer glass bevel ring -->
      <circle
        :cx="lensX"
        :cy="lensY"
        :r="lensRadius"
        fill="none"
        stroke="rgba(255,255,255,0.4)"
        stroke-width="0.7"
        pointer-events-none
      />
      <circle
        :cx="lensX"
        :cy="lensY"
        :r="lensRadius - 0.7"
        fill="none"
        stroke="rgba(255,255,255,0.15)"
        stroke-width="0.4"
        pointer-events-none
      />

      <!-- Glass Vignette & Top Reflection Curve -->
      <path
        d="M 16,24 Q 50,14 84,24"
        fill="none"
        stroke="rgba(255,255,255,0.08)"
        stroke-width="1.2"
        stroke-linecap="round"
        pointer-events-none
      />
    </svg>

    <!-- Operational State / Hint Pill -->
    <div
      class="absolute bottom-2.5 inset-x-0 flex justify-center pointer-events-none transition-opacity duration-300"
      :class="isHovered ? 'opacity-90' : 'opacity-60 group-hover:opacity-100'"
    >
      <span class="px-2.5 py-0.5 rounded-full bg-black/60 border border-white/10 text-[9px] font-mono text-zinc-400 backdrop-blur-md">
        {{ isHovered ? '✦ 放大中' : '✦ 移动鼠标，放大镜会跟随' }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface Props {
  className?: string
  lensRadius?: number
}

const props = withDefaults(defineProps<Props>(), {
  className: '',
  lensRadius: 15,
})

const instanceId = Math.random().toString(36).slice(2, 8)
const containerRef = ref<HTMLDivElement | null>(null)
const isHovered = ref(false)

const hourAngle = ref(0)
const minuteAngle = ref(0)
const secondAngle = ref(0)

// Lens physics coordinates
const lensX = ref(50)
const lensY = ref(35)
const targetLensX = ref(50)
const targetLensY = ref(35)

const ticks = computed(() => {
  return Array.from({ length: 60 }, (_, i) => {
    const deg = i * 6
    const rad = (deg * Math.PI) / 180
    return {
      i,
      sin: Math.sin(rad),
      cos: -Math.cos(rad),
      isHour: i % 5 === 0,
    }
  })
})

function handlePointerMove(e: PointerEvent) {
  if (!containerRef.value) return
  isHovered.value = true
  const rect = containerRef.value.getBoundingClientRect()
  const normX = ((e.clientX - rect.left) / rect.width) * 100
  const normY = ((e.clientY - rect.top) / rect.height) * 100

  // Constrain lens within clock dial radius
  const dx = normX - 50
  const dy = normY - 50
  const dist = Math.sqrt(dx * dx + dy * dy)
  const maxRadius = 45 - props.lensRadius

  if (dist > maxRadius) {
    const angle = Math.atan2(dy, dx)
    targetLensX.value = 50 + Math.cos(angle) * maxRadius
    targetLensY.value = 50 + Math.sin(angle) * maxRadius
  } else {
    targetLensX.value = normX
    targetLensY.value = normY
  }
}

function handlePointerDown(e: PointerEvent) {
  handlePointerMove(e)
}

function handlePointerLeave() {
  isHovered.value = false
}

let timer = 0

function updateTime() {
  const now = new Date()
  const ms = now.getMilliseconds()
  const s = now.getSeconds() + ms / 1000
  const m = now.getMinutes() + s / 60
  const h = (now.getHours() % 12) + m / 60

  hourAngle.value = h * 30
  minuteAngle.value = m * 6
  secondAngle.value = s * 6

  // If not hovered, the lens slowly and elegantly hovers near the hour hand / minute hand intersection
  if (!isHovered.value) {
    const minuteRad = ((minuteAngle.value - 90) * Math.PI) / 180
    const idleRadius = 22
    targetLensX.value = 50 + Math.cos(minuteRad) * idleRadius
    targetLensY.value = 50 + Math.sin(minuteRad) * idleRadius
  }

  // Smooth damping interpolation (Lerp 0.1)
  lensX.value += (targetLensX.value - lensX.value) * 0.1
  lensY.value += (targetLensY.value - lensY.value) * 0.1

  timer = requestAnimationFrame(updateTime)
}

onMounted(() => {
  timer = requestAnimationFrame(updateTime)
})

onUnmounted(() => {
  cancelAnimationFrame(timer)
})
</script>
