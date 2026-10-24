<template>
  <div class="relative w-full h-full min-h-[300px] overflow-hidden rounded-2xl" :class="className">
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full block" />
    <div class="relative z-10 w-full h-full">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  className?: string
  colorFrom?: string
  colorTo?: string
  colorMid?: string
  intensity?: number
  speed?: number
  angle?: number
}

const props = withDefaults(defineProps<Props>(), {
  className: '',
  colorFrom: '#4f46e5',
  colorTo: '#ec4899',
  colorMid: '#a855f7',
  intensity: 0.16,
  speed: 2.5,
  angle: 45,
})

const canvasRef = ref<HTMLCanvasElement | null>(null)
let rafId = 0
let resizeObserver: ResizeObserver | null = null

const bayerMatrix = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
]

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return { r: 79, g: 70, b: 229 }
  return {
    r: parseInt(result[1]!, 16),
    g: parseInt(result[2]!, 16),
    b: parseInt(result[3]!, 16),
  }
}

function smoothstep(t: number) {
  return t * t * (3 - 2 * t)
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  // Downsample internal buffer slightly for performance and retro pixel dither fidelity
  const scale = 0.5

  const updateSize = () => {
    const rect = canvas.getBoundingClientRect()
    canvas.width = Math.max(10, Math.floor(rect.width * scale))
    canvas.height = Math.max(10, Math.floor(rect.height * scale))
  }

  updateSize()
  resizeObserver = new ResizeObserver(updateSize)
  resizeObserver.observe(canvas)

  let time = 0

  const animate = () => {
    const width = canvas.width
    const height = canvas.height
    if (width === 0 || height === 0) {
      rafId = requestAnimationFrame(animate)
      return
    }

    const imageData = ctx.createImageData(width, height)
    const data = imageData.data

    const from = hexToRgb(props.colorFrom)
    const mid = hexToRgb(props.colorMid)
    const to = hexToRgb(props.colorTo)
    const rad = (props.angle * Math.PI) / 180

    time += 1
    const tOffset = Math.sin(time * props.speed * 0.005) * 0.12

    for (let y = 0; y < height; y++) {
      const yRow = y * width * 4
      const bayerRow = bayerMatrix[y % 4]!
      const normalizedY = y / height

      for (let x = 0; x < width; x++) {
        const normalizedX = x / width
        const gradientPos =
          (normalizedX * Math.cos(rad) + normalizedY * Math.sin(rad)) * 0.8 + 0.1 + tOffset

        const clampedPos = Math.max(0, Math.min(1, gradientPos))

        let r: number, g: number, b: number
        if (clampedPos < 0.5) {
          const t = smoothstep(clampedPos * 2)
          r = from.r + (mid.r - from.r) * t
          g = from.g + (mid.g - from.g) * t
          b = from.b + (mid.b - from.b) * t
        } else {
          const t = smoothstep((clampedPos - 0.5) * 2)
          r = mid.r + (to.r - mid.r) * t
          g = mid.g + (to.g - mid.g) * t
          b = mid.b + (to.b - mid.b) * t
        }

        const threshold = (bayerRow[x % 4]! / 16 - 0.5) * props.intensity * 180

        const idx = yRow + x * 4
        data[idx] = Math.max(0, Math.min(255, r + threshold))
        data[idx + 1] = Math.max(0, Math.min(255, g + threshold))
        data[idx + 2] = Math.max(0, Math.min(255, b + threshold))
        data[idx + 3] = 255
      }
    }

    ctx.putImageData(imageData, 0, 0)
    rafId = requestAnimationFrame(animate)
  }

  rafId = requestAnimationFrame(animate)
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
  if (resizeObserver) resizeObserver.disconnect()
})
</script>
