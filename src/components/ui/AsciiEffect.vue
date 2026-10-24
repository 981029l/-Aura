<template>
  <div
    ref="containerRef"
    class="relative w-full h-full min-h-[350px] overflow-hidden select-none"
    :class="className"
    @pointermove="trackPointer"
    @pointerleave="resetPointer"
  >
    <canvas ref="canvasRef" role="img" :aria-label="alt" class="block w-full h-full" />
  </div>
</template>

<script lang="ts">


export const DEFAULT_IMAGE_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect width="400" height="400" fill="%2309090b"/><circle cx="200" cy="200" r="140" fill="none" stroke="%2338bdf8" stroke-width="8"/><circle cx="200" cy="200" r="90" fill="%236366f1"/><polygon points="200,80 230,160 315,160 245,210 270,290 200,240 130,290 155,210 85,160 170,160" fill="%23e0e7ff"/></svg>`
</script>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

interface Props {
  imageSrc?: string
  alt?: string
  variant?: 'image' | 'flow' | 'glitch'
  chars?: string
  fontSize?: number
  fontFamily?: string
  fontWeight?: number | string
  lineHeight?: number
  characterSpacing?: number
  brightnessBoost?: number
  contrast?: number
  threshold?: number
  posterize?: number
  dither?: 'none' | 'floyd-steinberg' | 'bayer'
  ditherStrength?: number
  flowSpeed?: number
  flowDirection?: number
  flowStrength?: number
  flowFrequency?: number
  mouseRadius?: number
  mouseStrength?: number
  mouseWaveSpeed?: number
  scale?: number
  fit?: 'cover' | 'contain' | 'stretch'
  colors?: string[]
  colorMode?: 'gradient' | 'source'
  backgroundColor?: string
  invert?: boolean
  glitchIntensity?: number
  glitchFrequency?: number
  revealDuration?: number
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  imageSrc: DEFAULT_IMAGE_SVG,
  alt: 'ASCII rendering',
  variant: 'flow',
  chars: ' .:-=+*#%@',
  fontSize: 10,
  fontFamily: 'monospace',
  fontWeight: 600,
  lineHeight: 1,
  characterSpacing: 1,
  brightnessBoost: 2.2,
  contrast: 1.1,
  threshold: 0.05,
  posterize: 32,
  dither: 'floyd-steinberg',
  ditherStrength: 0.8,
  flowSpeed: 0.22,
  flowDirection: 0,
  flowStrength: 12,
  flowFrequency: 0.018,
  mouseRadius: 150,
  mouseStrength: 22,
  mouseWaveSpeed: 1.2,
  scale: 1.1,
  fit: 'cover',
  colors: () => ['#e2e8f0', '#67e8f9', '#818cf8'],
  colorMode: 'gradient',
  backgroundColor: '#09090b',
  invert: false,
  glitchIntensity: 0.65,
  glitchFrequency: 1.4,
  revealDuration: 1200,
  className: '',
})

const containerRef = ref<HTMLDivElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
const pointer = ref({ x: 0, y: 0, targetX: 0, targetY: 0, active: false })

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value))
}

function parseHex(color: string) {
  const match = /^#([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(color)
  return match
    ? [Number.parseInt(match[1]!, 16), Number.parseInt(match[2]!, 16), Number.parseInt(match[3]!, 16)]
    : null
}

function gradientColor(colors: string[], amount: number) {
  if (colors.length < 2) return colors[0] ?? '#ffffff'
  const position = clamp(amount) * (colors.length - 1)
  const index = Math.min(Math.floor(position), colors.length - 2)
  const mix = position - index
  const from = parseHex(colors[index]!)
  const to = parseHex(colors[index + 1]!)
  if (!from || !to) return colors[Math.round(position)] ?? colors[0]!
  return `rgb(${from.map((channel, i) => Math.round(channel + (to[i]! - channel) * mix)).join(', ')})`
}

let frame = 0
let resizeObserver: ResizeObserver | null = null

function trackPointer(event: MouseEvent) {
  if (!containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  if (!pointer.value.active) {
    pointer.value.x = x
    pointer.value.y = y
  }
  pointer.value.active = true
  pointer.value.targetX = x
  pointer.value.targetY = y
}

function resetPointer() {
  pointer.value.active = false
}

function initAscii() {
  cancelAnimationFrame(frame)
  const container = containerRef.value
  const canvas = canvasRef.value
  if (!container || !canvas || props.chars.length === 0) return

  const context = canvas.getContext('2d')
  const sampleCanvas = document.createElement('canvas')
  const sampleContext = sampleCanvas.getContext('2d', { willReadFrequently: true })
  if (!context || !sampleContext) return

  const image = new Image()
  image.crossOrigin = 'anonymous'

  let width = 0
  let height = 0
  let startedAt = 0
  let nextGlitchAt = 0
  let glitchUntil = 0
  let glitchBands = new Map<number, number>()
  let loaded = false

  const resize = () => {
    const rect = container.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    width = Math.max(1, rect.width)
    height = Math.max(1, rect.height)
    canvas.width = Math.round(width * dpr)
    canvas.height = Math.round(height * dpr)
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    context.setTransform(dpr, 0, 0, dpr, 0, 0)
    if (loaded) draw(performance.now())
  }

  const updateGlitch = (now: number, rows: number) => {
    if (props.variant !== 'glitch' || props.glitchFrequency <= 0 || now < nextGlitchAt) return

    glitchBands = new Map()
    const bandCount = Math.max(1, Math.round(clamp(props.glitchIntensity) * 4))
    for (let band = 0; band < bandCount; band++) {
      const start = Math.floor(Math.random() * rows)
      const size = 1 + Math.floor(Math.random() * 3)
      const offset = (Math.random() - 0.5) * props.fontSize * 12 * clamp(props.glitchIntensity)
      for (let row = start; row < Math.min(rows, start + size); row++) glitchBands.set(row, offset)
    }
    glitchUntil = now + 70 + 90 * clamp(props.glitchIntensity)
    nextGlitchAt = now + 1000 / props.glitchFrequency
  }

  const draw = (now: number) => {
    if (!loaded || width === 0 || height === 0) return

    pointer.value.x += (pointer.value.targetX - pointer.value.x) * 0.08
    pointer.value.y += (pointer.value.targetY - pointer.value.y) * 0.08

    const cellHeight = Math.max(4, props.fontSize * Math.max(0.5, props.lineHeight))
    context.font = `${props.fontWeight} ${props.fontSize}px ${props.fontFamily}`
    const cellWidth = Math.max(2, context.measureText('M').width * Math.max(0.5, props.characterSpacing))
    const columns = Math.ceil(width / cellWidth) + 2
    const rows = Math.ceil(height / cellHeight) + 2
    const radians = (props.flowDirection * Math.PI) / 180
    const directionX = Math.cos(radians)
    const directionY = Math.sin(radians)
    sampleCanvas.width = columns
    sampleCanvas.height = rows

    const imageScale =
      props.fit === 'stretch'
        ? 1
        : (props.fit === 'contain'
            ? Math.min(width / (image.naturalWidth || 400), height / (image.naturalHeight || 400))
            : Math.max(width / (image.naturalWidth || 400), height / (image.naturalHeight || 400))) *
          Math.max(0.1, props.scale)

    const drawWidth =
      props.fit === 'stretch' ? columns : ((image.naturalWidth || 400) * imageScale) / cellWidth
    const drawHeight =
      props.fit === 'stretch' ? rows : ((image.naturalHeight || 400) * imageScale) / cellHeight

    sampleContext.clearRect(0, 0, columns, rows)
    sampleContext.drawImage(
      image,
      (columns - drawWidth) / 2,
      (rows - drawHeight) / 2,
      drawWidth,
      drawHeight
    )

    const pixels = sampleContext.getImageData(0, 0, columns, rows).data
    const steps = Math.max(2, Math.round(props.posterize))
    const luminanceField = new Float32Array(columns * rows)
    for (let index = 0; index < luminanceField.length; index++) {
      const pixel = index * 4
      const alpha = (pixels[pixel + 3] ?? 255) / 255
      let luminance =
        ((pixels[pixel] ?? 0) * 0.2126 + (pixels[pixel + 1] ?? 0) * 0.7152 + (pixels[pixel + 2] ?? 0) * 0.0722) / 255
      luminance = clamp((luminance - 0.5) * Math.max(0, props.contrast) + 0.5)
      luminance = clamp(luminance * props.brightnessBoost * alpha)
      luminanceField[index] = luminance <= props.threshold ? 0 : (luminance - props.threshold) / Math.max(0.001, 1 - props.threshold)
    }

    if (props.dither === 'floyd-steinberg') {
      for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
          const index = row * columns + column
          const oldValue = clamp(luminanceField[index]!)
          const quantized = Math.round(oldValue * (steps - 1)) / (steps - 1)
          const value = oldValue + (quantized - oldValue) * clamp(props.ditherStrength)
          const error = oldValue - value
          luminanceField[index] = value
          if (column + 1 < columns) luminanceField[index + 1]! += (error * 7) / 16
          if (row + 1 < rows) {
            if (column > 0) luminanceField[index + columns - 1]! += (error * 3) / 16
            luminanceField[index + columns]! += (error * 5) / 16
            if (column + 1 < columns) luminanceField[index + columns + 1]! += error / 16
          }
        }
      }
    } else if (props.dither === 'bayer') {
      const matrix = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5]
      for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
          const index = row * columns + column
          const offset = ((matrix[(row % 4) * 4 + (column % 4)]! / 16 - 0.5) * clamp(props.ditherStrength)) / 4
          luminanceField[index] = clamp(luminanceField[index]! + offset)
        }
      }
    }

    const reveal =
      props.variant === 'glitch' && props.revealDuration > 0
        ? clamp((now - startedAt) / props.revealDuration)
        : 1

    updateGlitch(now, rows)
    if (now > glitchUntil) glitchBands.clear()

    context.fillStyle = props.backgroundColor
    context.fillRect(0, 0, width, height)
    context.textBaseline = 'top'

    for (let row = 0; row < rows; row++) {
      const rowOffset = glitchBands.get(row) ?? 0
      for (let column = 0; column < columns; column++) {
        const dx = column / Math.max(1, columns - 1) - 0.5
        const dy = row / Math.max(1, rows - 1) - 0.5
        if (Math.hypot(dx, dy) > reveal * 0.72) continue

        let sourceColumn = column
        let sourceRow = row
        let mouseInfluence = 0
        if (props.variant === 'flow') {
          const x = column * cellWidth
          const y = row * cellHeight
          const phase = (x * directionX + y * directionY) * props.flowFrequency + now * props.flowSpeed * Math.PI * 0.002
          const crossPhase = (-x * directionY + y * directionX) * props.flowFrequency * 0.65
          const drift = (Math.sin(phase) + Math.sin(phase * 0.61 + crossPhase) * 0.45) * props.flowStrength
          let mouseDisplacement = 0

          if (pointer.value.active && props.mouseRadius > 0) {
            const mouseX = x - pointer.value.x
            const mouseY = y - pointer.value.y
            const distance = Math.hypot(mouseX, mouseY)
            mouseInfluence = clamp(1 - distance / props.mouseRadius)
            if (distance > 0 && mouseInfluence > 0) {
              const ripple = Math.sin(distance * 0.055 - now * props.mouseWaveSpeed * Math.PI * 0.002)
              mouseDisplacement = mouseInfluence ** 2 * props.mouseStrength * ripple
              sourceColumn -= ((mouseX / distance) * mouseDisplacement) / cellWidth
              sourceRow -= ((mouseY / distance) * mouseDisplacement) / cellHeight
            }
          }

          sourceColumn -= (directionX * drift) / cellWidth
          sourceRow -= (directionY * drift) / cellHeight
        }

        const sampledColumn = Math.round(clamp(sourceColumn, 0, columns - 1))
        const sampledRow = Math.round(clamp(sourceRow, 0, rows - 1))
        const sampleIndex = sampledRow * columns + sampledColumn
        const pixel = sampleIndex * 4
        let luminance = clamp((luminanceField[sampleIndex] ?? 0) + mouseInfluence * 0.08)
        if (props.invert) luminance = 1 - luminance

        const character = props.chars[Math.min(props.chars.length - 1, Math.floor(luminance * (props.chars.length - 1)))]
        if (!character?.trim()) continue

        context.fillStyle =
          props.colorMode === 'source'
            ? `rgb(${pixels[pixel]}, ${pixels[pixel + 1]}, ${pixels[pixel + 2]})`
            : gradientColor(props.colors, luminance)
        context.fillText(character, column * cellWidth - cellWidth + rowOffset, row * cellHeight - cellHeight)
      }
    }
  }

  const animate = (now: number) => {
    draw(now)
    if (props.variant !== 'image') frame = requestAnimationFrame(animate)
  }

  const start = () => {
    if (loaded) return
    loaded = true
    startedAt = performance.now()
    resize()
    if (props.variant !== 'image') frame = requestAnimationFrame(animate)
  }

  image.onload = start
  image.src = props.imageSrc
  if (image.complete) start()

  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(container)
}

watch(() => [props.variant, props.imageSrc, props.chars, props.colors], initAscii)

onMounted(() => {
  initAscii()
})

onUnmounted(() => {
  cancelAnimationFrame(frame)
  if (resizeObserver) resizeObserver.disconnect()
})
</script>
