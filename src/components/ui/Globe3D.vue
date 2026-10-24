<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { cn } from '@/lib/utils'
import { Globe2, Compass, Play, Pause } from 'lucide-vue-next'

export interface GlobeMarker {
  lat: number
  lng: number
  label?: string
  color?: string
}

export interface GlobeArc {
  from: [number, number] // [lat, lng]
  to: [number, number]
  color?: string
}

export interface Globe3DProps {
  size?: number
  markers?: GlobeMarker[]
  arcs?: GlobeArc[]
  speed?: number
  class?: string
}

const props = withDefaults(defineProps<Globe3DProps>(), {
  size: 400,
  speed: 0.0035,
  markers: () => [
    { lat: 39.9042, lng: 116.4074, label: '北京', color: '#10b981' },
    { lat: 31.2304, lng: 121.4737, label: '上海', color: '#3b82f6' },
    { lat: 35.6762, lng: 139.6503, label: '东京', color: '#8b5cf6' },
    { lat: 1.3521, lng: 103.8198, label: '新加坡', color: '#06b6d4' },
    { lat: -33.8688, lng: 151.2093, label: '悉尼', color: '#f43f5e' },
    { lat: 51.5074, lng: -0.1278, label: '伦敦', color: '#f59e0b' },
    { lat: 50.1109, lng: 8.6821, label: '法兰克福', color: '#10b981' },
    { lat: 37.7749, lng: -122.4194, label: '旧金山', color: '#3b82f6' },
    { lat: 40.7128, lng: -74.006, label: '纽约', color: '#ec4899' },
  ],
  arcs: () => [
    { from: [39.9042, 116.4074], to: [37.7749, -122.4194], color: '#3b82f6' },
    { from: [31.2304, 121.4737], to: [51.5074, -0.1278], color: '#10b981' },
    { from: [35.6762, 139.6503], to: [1.3521, 103.8198], color: '#8b5cf6' },
    { from: [1.3521, 103.8198], to: [-33.8688, 151.2093], color: '#06b6d4' },
    { from: [51.5074, -0.1278], to: [40.7128, -74.006], color: '#f59e0b' },
    { from: [31.2304, 121.4737], to: [35.6762, 139.6503], color: '#ec4899' },
    { from: [50.1109, 8.6821], to: [39.9042, 116.4074], color: '#10b981' },
  ],
})

const canvasRef = ref<HTMLCanvasElement | null>(null)
const isAutoRotating = ref(true)
const activeRegion = ref<string>('auto')

let animId: number | null = null

// 旋转角度与惯性阻尼（初始聚焦东亚/亚太视角）
let rotX = 0.28 // 俯仰角
let rotY = -2.05 // 偏航角
let targetRotX: number | null = null
let targetRotY: number | null = null
let velX = 0
let velY = props.speed
let isDragging = false
let lastMouseX = 0
let lastMouseY = 0

// 全球主要大陆与岛屿高精度多边形轮廓 [lng, lat][]
const CONTINENT_POLYGONS: [number, number][][] = [
  // 欧亚大陆主体
  [
    [-9, 36], [-9, 43], [-2, 43], [-5, 48], [3, 51], [10, 54], [8, 58],
    [5, 62], [18, 70], [30, 71], [42, 68], [60, 70], [75, 73], [105, 77],
    [140, 73], [178, 66], [160, 58], [142, 53], [135, 44], [129, 35],
    [122, 40], [118, 38], [122, 31], [121, 24], [108, 21], [109, 12],
    [103, 2], [98, 8], [96, 16], [88, 22], [80, 15], [77, 8], [72, 21],
    [67, 25], [56, 26], [59, 21], [44, 12], [35, 30], [36, 37], [27, 38],
    [28, 41], [23, 37], [15, 38], [12, 44], [5, 43], [3, 37], [-5, 36],
  ],
  // 非洲大陆
  [
    [-17, 15], [-17, 21], [-13, 28], [-6, 36], [10, 37], [11, 33],
    [25, 32], [33, 30], [43, 12], [51, 12], [41, -1], [40, -11],
    [35, -18], [33, -26], [28, -33], [18, -35], [14, -22], [12, -6],
    [9, 4], [2, 6], [-8, 4], [-17, 15],
  ],
  // 北美洲
  [
    [-168, 66], [-162, 58], [-150, 60], [-135, 57], [-125, 48], [-124, 38],
    [-117, 32], [-105, 20], [-88, 15], [-83, 9], [-78, 8], [-82, 18],
    [-90, 21], [-97, 22], [-97, 28], [-83, 30], [-81, 25], [-75, 35],
    [-67, 45], [-53, 47], [-60, 55], [-65, 62], [-80, 63], [-95, 72],
    [-125, 72], [-145, 70], [-168, 66],
  ],
  // 南美洲
  [
    [-78, 9], [-72, 12], [-61, 10], [-50, 1], [-35, -5], [-38, -15],
    [-40, -22], [-48, -28], [-54, -34], [-62, -40], [-67, -50], [-70, -55],
    [-75, -50], [-72, -35], [-70, -18], [-77, -11], [-81, -4], [-78, 9],
  ],
  // 澳大利亚
  [
    [114, -22], [122, -17], [131, -12], [136, -12], [136, -15], [142, -11],
    [150, -22], [153, -28], [150, -37], [139, -36], [131, -32], [115, -34],
    [114, -22],
  ],
  // 格陵兰岛
  [
    [-52, 60], [-42, 60], [-20, 70], [-20, 81], [-55, 82], [-70, 76], [-52, 60],
  ],
  // 英国与爱尔兰 (UK & Ireland)
  [
    [-6, 50], [2, 51], [-1, 58], [-6, 58], [-10, 52], [-6, 50],
  ],
  // 日本列岛
  [
    [130, 31], [136, 34], [141, 36], [145, 43], [140, 42], [136, 36], [130, 31],
  ],
  // 印度尼西亚与菲律宾群岛
  [
    [95, 5], [105, -6], [120, -8], [120, 0], [115, 4], [102, 2], [95, 5],
  ],
  [
    [120, 18], [126, 7], [122, 6], [119, 13], [120, 18],
  ],
  // 马达加斯加
  [
    [44, -25], [47, -25], [50, -15], [47, -14], [44, -25],
  ],
  // 新西兰
  [
    [167, -46], [174, -41], [178, -37], [174, -36], [167, -46],
  ],
]

// 射线法判断经纬度点是否位于大陆多边形内
function isPointInPolygon(lng: number, lat: number, polygon: [number, number][]): boolean {
  let inside = false
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i][0]
    const yi = polygon[i][1]
    const xj = polygon[j][0]
    const yj = polygon[j][1]

    const intersect =
      yi > lat !== yj > lat && lng < ((xj - xi) * (lat - yi)) / (yj - yi + 1e-10) + xi
    if (intersect) inside = !inside
  }
  return inside
}

function isLand(lat: number, lng: number): boolean {
  for (let i = 0; i < CONTINENT_POLYGONS.length; i++) {
    if (isPointInPolygon(lng, lat, CONTINENT_POLYGONS[i])) {
      return true
    }
  }
  return false
}

interface SpherePoint {
  lat: number
  lng: number
  isLand: boolean
}

const spherePoints: SpherePoint[] = []

// 黄金螺旋斐波那契球面均匀点阵采样
function initSpherePoints() {
  spherePoints.length = 0
  const totalSamples = 4200
  const goldenRatio = (1 + Math.sqrt(5)) / 2

  for (let i = 0; i < totalSamples; i++) {
    const y = 1 - (i / (totalSamples - 1)) * 2 // 1 -> -1
    const lat = (Math.asin(y) * 180) / Math.PI
    const theta = (2 * Math.PI * i) / goldenRatio
    const lng = ((((theta * 180) / Math.PI) % 360) + 540) % 360 - 180

    const land = isLand(lat, lng)
    // 大陆点全量保留；海洋仅保留极少量稀疏坐标网格点增加球体纵深感
    if (land || i % 16 === 0) {
      spherePoints.push({ lat, lng, isLand: land })
    }
  }
}

// 经纬度转单位球三维向量
function latLngToVec3(lat: number, lng: number): [number, number, number] {
  const phi = (lat * Math.PI) / 180
  const theta = ((lng + 180) * Math.PI) / 180
  return [
    Math.cos(phi) * Math.sin(theta),
    -Math.sin(phi),
    Math.cos(phi) * Math.cos(theta),
  ]
}

// 三维空间点应用当前地球旋转角 (rotY, rotX)
function rotateVec3(vx: number, vy: number, vz: number, radius: number) {
  // 绕 Y 轴旋转 (经度偏航)
  const cosY = Math.cos(rotY)
  const sinY = Math.sin(rotY)
  const x1 = vx * cosY + vz * sinY
  const z1 = -vx * sinY + vz * cosY

  // 绕 X 轴旋转 (纬度俯仰，适配 Canvas +Y 向下坐标系，保证上下拖拽方向跟手)
  const cosX = Math.cos(rotX)
  const sinX = Math.sin(rotX)
  const y2 = vy * cosX + z1 * sinX
  const z2 = -vy * sinX + z1 * cosX

  return {
    x: x1 * radius,
    y: y2 * radius,
    z: z2 * radius,
    visible: z2 > -0.05,
  }
}

function project(lat: number, lng: number, radius: number) {
  const [vx, vy, vz] = latLngToVec3(lat, lng)
  return rotateVec3(vx, vy, vz, radius)
}

// 绘制圆角胶囊背景辅助函数
function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.quadraticCurveTo(x + w, y, x + w, y + r)
  ctx.lineTo(x + w, y + h - r)
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
  ctx.lineTo(x + r, y + h)
  ctx.quadraticCurveTo(x, y + h, x, y + h - r)
  ctx.lineTo(x, y + r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.closePath()
}

function focusRegion(region: 'asia' | 'europe' | 'americas' | 'auto') {
  activeRegion.value = region
  if (region === 'auto') {
    isAutoRotating.value = true
    targetRotX = null
    targetRotY = null
    velY = props.speed
  } else {
    isAutoRotating.value = false
    velX = 0
    velY = 0
    if (region === 'asia') {
      targetRotX = 0.25
      targetRotY = -2.02
    } else if (region === 'europe') {
      targetRotX = 0.42
      targetRotY = -0.15
    } else if (region === 'americas') {
      targetRotX = 0.28
      targetRotY = 1.65
    }
  }
}

function toggleAutoRotate() {
  isAutoRotating.value = !isAutoRotating.value
  if (isAutoRotating.value) {
    activeRegion.value = 'auto'
    targetRotX = null
    targetRotY = null
    velY = props.speed
  }
}

function render() {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const dpr = window.devicePixelRatio || 1
  const width = canvas.width / dpr
  const height = canvas.height / dpr
  const cx = width / 2
  const cy = height / 2
  const radius = width * 0.38

  ctx.clearRect(0, 0, width, height)

  // 旋转物理与目标视角平滑阻尼
  if (!isDragging) {
    if (targetRotX !== null && targetRotY !== null) {
      rotX += (targetRotX - rotX) * 0.08
      rotY += (targetRotY - rotY) * 0.08
    } else if (isAutoRotating.value) {
      rotY += velY
      rotX += velX
      velX *= 0.94
      if (Math.abs(velY) < Math.abs(props.speed)) {
        velY += (props.speed - velY) * 0.06
      } else {
        velY *= 0.97
      }
    } else {
      rotY += velY
      rotX += velX
      velX *= 0.92
      velY *= 0.92
    }
  }

  rotX = Math.max(-0.7, Math.min(0.7, rotX))

  // 准确检测当前视窗亮/暗模式（兼容外层局部 .dark 容器）
  const isDark = Boolean(
    canvas.closest('.dark') || document.documentElement.classList.contains('dark')
  )

  // 1. 纯净天体大气晕光
  const haloGrad = ctx.createRadialGradient(cx, cy, radius * 0.88, cx, cy, radius * 1.24)
  if (isDark) {
    haloGrad.addColorStop(0, 'rgba(56, 189, 248, 0.22)')
    haloGrad.addColorStop(0.45, 'rgba(59, 130, 246, 0.08)')
    haloGrad.addColorStop(1, 'rgba(0, 0, 0, 0)')
  } else {
    haloGrad.addColorStop(0, 'rgba(59, 130, 246, 0.12)')
    haloGrad.addColorStop(0.5, 'rgba(99, 102, 241, 0.04)')
    haloGrad.addColorStop(1, 'rgba(255, 255, 255, 0)')
  }
  ctx.fillStyle = haloGrad
  ctx.beginPath()
  ctx.arc(cx, cy, radius * 1.24, 0, Math.PI * 2)
  ctx.fill()

  // 2. 地球三维球体光影材质 (COBE / Stripe 风格高光与菲涅尔内边缘阴影)
  const globeGrad = ctx.createRadialGradient(
    cx - radius * 0.32,
    cy - radius * 0.32,
    radius * 0.06,
    cx,
    cy,
    radius
  )
  if (isDark) {
    globeGrad.addColorStop(0, '#1e293b')
    globeGrad.addColorStop(0.55, '#0f172a')
    globeGrad.addColorStop(0.88, '#090d16')
    globeGrad.addColorStop(1, '#020617')
  } else {
    globeGrad.addColorStop(0, '#ffffff')
    globeGrad.addColorStop(0.6, '#f8fafc')
    globeGrad.addColorStop(0.88, '#eef2f6')
    globeGrad.addColorStop(1, '#e2e8f0')
  }

  ctx.beginPath()
  ctx.arc(cx, cy, radius, 0, Math.PI * 2)
  ctx.fillStyle = globeGrad
  ctx.fill()

  // 3. 球面剪裁区：绘制经纬网格与高精度世界大陆点阵
  ctx.save()
  ctx.beginPath()
  ctx.arc(cx, cy, radius, 0, Math.PI * 2)
  ctx.clip()

  // 3.1 细腻经纬线网
  ctx.strokeStyle = isDark ? 'rgba(148, 163, 184, 0.07)' : 'rgba(100, 116, 139, 0.07)'
  ctx.lineWidth = 0.8
  for (let lat = -60; lat <= 60; lat += 30) {
    ctx.beginPath()
    let first = true
    for (let lng = -180; lng <= 180; lng += 8) {
      const p = project(lat, lng, radius)
      if (p.z > 0) {
        if (first) {
          ctx.moveTo(cx + p.x, cy + p.y)
          first = false
        } else {
          ctx.lineTo(cx + p.x, cy + p.y)
        }
      } else {
        first = true
      }
    }
    ctx.stroke()
  }
  for (let lng = -180; lng < 180; lng += 30) {
    ctx.beginPath()
    let first = true
    for (let lat = -75; lat <= 75; lat += 8) {
      const p = project(lat, lng, radius)
      if (p.z > 0) {
        if (first) {
          ctx.moveTo(cx + p.x, cy + p.y)
          first = false
        } else {
          ctx.lineTo(cx + p.x, cy + p.y)
        }
      } else {
        first = true
      }
    }
    ctx.stroke()
  }

  // 3.2 高密度斐波那契大陆点阵与海洋坐标点
  for (let i = 0; i < spherePoints.length; i++) {
    const pt = spherePoints[i]
    const p = project(pt.lat, pt.lng, radius)
    if (p.z > 0) {
      const depthRatio = p.z / radius // 0 (边缘) -> 1 (正中心)
      const px = cx + p.x
      const py = cy + p.y

      if (pt.isLand) {
        // 大陆点阵：随球面法向平滑衰减透明度与半径，呈现真实立体球面感
        const alpha = Math.pow(depthRatio, 0.65) * 0.88
        const dotRadius = 1.05 + depthRatio * 0.55
        ctx.fillStyle = isDark
          ? `rgba(186, 230, 253, ${alpha})`
          : `rgba(30, 58, 138, ${alpha * 0.78})`
        ctx.beginPath()
        ctx.arc(px, py, dotRadius, 0, Math.PI * 2)
        ctx.fill()
      } else {
        // 稀疏海洋背景微点
        const alpha = depthRatio * 0.16
        ctx.fillStyle = isDark
          ? `rgba(148, 163, 184, ${alpha})`
          : `rgba(100, 116, 139, ${alpha})`
        ctx.beginPath()
        ctx.arc(px, py, 0.8, 0, Math.PI * 2)
        ctx.fill()
      }
    }
  }

  // 球体内边缘菲涅尔立体光环
  const rimGrad = ctx.createRadialGradient(cx, cy, radius * 0.78, cx, cy, radius)
  if (isDark) {
    rimGrad.addColorStop(0, 'rgba(0, 0, 0, 0)')
    rimGrad.addColorStop(1, 'rgba(56, 189, 248, 0.22)')
  } else {
    rimGrad.addColorStop(0, 'rgba(255, 255, 255, 0)')
    rimGrad.addColorStop(1, 'rgba(148, 163, 184, 0.22)')
  }
  ctx.fillStyle = rimGrad
  ctx.beginPath()
  ctx.arc(cx, cy, radius, 0, Math.PI * 2)
  ctx.fill()

  ctx.restore()

  // 球体外轮廓精修细边
  ctx.beginPath()
  ctx.arc(cx, cy, radius, 0, Math.PI * 2)
  ctx.strokeStyle = isDark ? 'rgba(125, 211, 252, 0.28)' : 'rgba(148, 163, 184, 0.45)'
  ctx.lineWidth = 1.2
  ctx.stroke()

  // 4. 真实三维球面拱起大圆航线与彗星流光
  const now = performance.now() * 0.001
  props.arcs.forEach((arc, arcIdx) => {
    const v1 = latLngToVec3(arc.from[0], arc.from[1])
    const v2 = latLngToVec3(arc.to[0], arc.to[1])

    // 根据跨度计算弧线拱起高度
    const chordDist = Math.hypot(v2[0] - v1[0], v2[1] - v1[1], v2[2] - v1[2])
    const maxAltitude = Math.min(0.32, Math.max(0.12, chordDist * 0.2))

    const segments = 44
    const arcPoints: { x: number; y: number; z: number; visible: boolean }[] = []

    for (let s = 0; s <= segments; s++) {
      const t = s / segments
      // 线性插值并归一化到单位球面
      const ix = v1[0] * (1 - t) + v2[0] * t
      const iy = v1[1] * (1 - t) + v2[1] * t
      const iz = v1[2] * (1 - t) + v2[2] * t
      const len = Math.hypot(ix, iy, iz) || 1
      const nx = ix / len
      const ny = iy / len
      const nz = iz / len

      // 沿球面法向拱起高度 (正弦曲线平滑抬升)
      const elev = 1 + Math.sin(t * Math.PI) * maxAltitude
      const rotPt = rotateVec3(nx * elev, ny * elev, nz * elev, radius)

      // 判断是否被地球本体遮挡：若在背面 (z < 0) 且投影半径小于地球半径则被遮挡
      const screenR = Math.hypot(rotPt.x, rotPt.y)
      const isOccluded = rotPt.z < 0 && screenR < radius * 0.98
      arcPoints.push({
        x: cx + rotPt.x,
        y: cy + rotPt.y,
        z: rotPt.z,
        visible: !isOccluded,
      })
    }

    const col = arc.color || '#3b82f6'

    // 4.1 绘制航线半透明基础导轨
    ctx.save()
    ctx.strokeStyle = col
    ctx.globalAlpha = isDark ? 0.32 : 0.26
    ctx.lineWidth = 1.25
    ctx.beginPath()
    let drawing = false
    for (let s = 0; s <= segments; s++) {
      const pt = arcPoints[s]
      if (pt.visible) {
        if (!drawing) {
          ctx.moveTo(pt.x, pt.y)
          drawing = true
        } else {
          ctx.lineTo(pt.x, pt.y)
        }
      } else {
        drawing = false
      }
    }
    ctx.stroke()

    // 4.2 绘制彗星拖尾脉冲流光
    const speedFactor = 0.42 + (arcIdx % 3) * 0.08
    const headT = (now * speedFactor + arcIdx * 0.27) % 1
    const trailLength = 0.22
    const headIdx = Math.floor(headT * segments)
    const tailIdx = Math.max(0, Math.floor((headT - trailLength) * segments))

    for (let s = tailIdx; s < headIdx; s++) {
      const pA = arcPoints[s]
      const pB = arcPoints[s + 1]
      if (pA && pB && pA.visible && pB.visible) {
        const progressInTrail = (s - tailIdx) / Math.max(1, headIdx - tailIdx)
        ctx.beginPath()
        ctx.moveTo(pA.x, pA.y)
        ctx.lineTo(pB.x, pB.y)
        ctx.strokeStyle = col
        ctx.globalAlpha = Math.pow(progressInTrail, 1.5) * 0.95
        ctx.lineWidth = 1.2 + progressInTrail * 1.6
        ctx.stroke()
      }
    }

    // 彗星头部发光粒子
    const headPt = arcPoints[headIdx]
    if (headPt && headPt.visible) {
      ctx.globalAlpha = 1
      ctx.fillStyle = '#ffffff'
      ctx.shadowColor = col
      ctx.shadowBlur = 8
      ctx.beginPath()
      ctx.arc(headPt.x, headPt.y, 2.4, 0, Math.PI * 2)
      ctx.fill()
      ctx.shadowBlur = 0
    }
    ctx.restore()
  })

  // 5. 绘制核心城市脉冲信标与悬浮磨砂胶囊标签 (Markers & Pill Labels)
  props.markers.forEach((marker, idx) => {
    const p = project(marker.lat, marker.lng, radius)
    if (p.z > radius * 0.08) {
      const px = cx + p.x
      const py = cy + p.y
      const col = marker.color || '#10b981'
      const depthAlpha = Math.min(1, (p.z / radius) * 1.3)

      ctx.save()
      // 错峰扩散波纹圈
      const pulseT = (now * 1.2 + idx * 0.23) % 1
      ctx.globalAlpha = (1 - pulseT) * 0.65 * depthAlpha
      ctx.strokeStyle = col
      ctx.lineWidth = 1.4
      ctx.beginPath()
      ctx.arc(px, py, 3.5 + pulseT * 9, 0, Math.PI * 2)
      ctx.stroke()

      // 信标外白环 + 核心圆点
      ctx.globalAlpha = depthAlpha
      ctx.fillStyle = isDark ? '#0f172a' : '#ffffff'
      ctx.beginPath()
      ctx.arc(px, py, 4.2, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = col
      ctx.beginPath()
      ctx.arc(px, py, 2.8, 0, Math.PI * 2)
      ctx.fill()

      // 城市名称精致胶囊标签 (正面正对视线清晰区域展示，窄屏提高阈值避免拥挤扎堆)
      const labelZThreshold = (width < 340 ? 0.45 : 0.3) * radius
      if (marker.label && p.z > labelZThreshold) {
        ctx.font = '600 10.5px -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif'
        const textWidth = ctx.measureText(marker.label).width
        const padX = 6
        const boxW = textWidth + padX * 2
        const boxH = 18
        const boxX = px + 7
        const boxY = py - boxH / 2

        ctx.globalAlpha = depthAlpha * 0.92
        ctx.fillStyle = isDark ? 'rgba(15, 23, 42, 0.82)' : 'rgba(255, 255, 255, 0.88)'
        drawRoundedRect(ctx, boxX, boxY, boxW, boxH, 6)
        ctx.fill()

        ctx.strokeStyle = isDark ? 'rgba(148, 163, 184, 0.22)' : 'rgba(203, 213, 225, 0.7)'
        ctx.lineWidth = 0.8
        ctx.stroke()

        ctx.fillStyle = isDark ? '#f8fafc' : '#0f172a'
        ctx.textBaseline = 'middle'
        ctx.fillText(marker.label, boxX + padX, py + 0.5)
      }
      ctx.restore()
    }
  })

  animId = requestAnimationFrame(render)
}

function handlePointerDown(e: PointerEvent) {
  isDragging = true
  targetRotX = null
  targetRotY = null
  lastMouseX = e.clientX
  lastMouseY = e.clientY
  velX = 0
  velY = 0
  ;(e.currentTarget as HTMLElement)?.setPointerCapture(e.pointerId)
}

function handlePointerMove(e: PointerEvent) {
  if (!isDragging) return
  const dx = e.clientX - lastMouseX
  const dy = e.clientY - lastMouseY
  lastMouseX = e.clientX
  lastMouseY = e.clientY

  velY = dx * 0.0055
  velX = dy * 0.0055
  rotY += velY
  rotX += velX
}

function handlePointerUp(e: PointerEvent) {
  if (!isDragging) return
  isDragging = false
  try {
    ;(e.currentTarget as HTMLElement)?.releasePointerCapture(e.pointerId)
  } catch {
    // ignore
  }
}

const currentSize = ref(props.size)

function resizeCanvas() {
  const canvas = canvasRef.value
  if (!canvas) return
  const dpr = window.devicePixelRatio || 1
  let size = props.size
  if (typeof window !== 'undefined') {
    const screenW = window.innerWidth
    if (screenW < 640) {
      size = Math.min(props.size, Math.max(220, screenW - 64))
    }
  }
  currentSize.value = size
  canvas.width = size * dpr
  canvas.height = size * dpr
  const ctx = canvas.getContext('2d')
  if (ctx) {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }
}

onMounted(() => {
  initSpherePoints()
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)
  animId = requestAnimationFrame(render)
})

onUnmounted(() => {
  if (animId) cancelAnimationFrame(animId)
  window.removeEventListener('resize', resizeCanvas)
})

watch(() => props.size, resizeCanvas)
</script>

<template>
  <div :class="cn('flex flex-col items-center justify-center select-none font-sans gap-4 max-w-full overflow-hidden', props.class)">
    <!-- 3D 地球交互舞台 -->
    <div
      class="relative inline-flex items-center justify-center cursor-grab active:cursor-grabbing touch-none max-w-full"
      :style="{ width: `${currentSize}px`, height: `${currentSize}px`, maxWidth: '100%' }"
      @pointerdown="handlePointerDown"
      @pointermove="handlePointerMove"
      @pointerup="handlePointerUp"
      @pointercancel="handlePointerUp"
    >
      <canvas
        ref="canvasRef"
        :style="{ width: `${currentSize}px`, height: `${currentSize}px`, maxWidth: '100%', maxHeight: '100%' }"
        class="block pointer-events-none max-w-full aspect-square"
      />
    </div>

    <!-- 底部全球节点视角快速切换胶囊栏 -->
    <div class="inline-flex flex-wrap items-center justify-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-2xl border border-zinc-200/80 bg-white/85 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/85 text-[11px] sm:text-xs max-w-full">
      <button
        type="button"
        @click="toggleAutoRotate"
        :class="[
          'inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl font-medium transition-all cursor-pointer',
          isAutoRotating
            ? 'bg-blue-600 text-white font-semibold'
            : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800',
        ]"
      >
        <Pause v-if="isAutoRotating" class="h-3 w-3 sm:h-3.5 sm:w-3.5" />
        <Play v-else class="h-3 w-3 sm:h-3.5 sm:w-3.5" />
        <span>{{ isAutoRotating ? '旋转中' : '已暂停' }}</span>
      </button>

      <div class="h-3.5 w-px bg-zinc-200 dark:bg-zinc-800 mx-0.5" />

      <button
        v-for="item in [
          { id: 'asia', label: '亚太' },
          { id: 'europe', label: '欧洲' },
          { id: 'americas', label: '北美' },
        ]"
        :key="item.id"
        type="button"
        @click="focusRegion(item.id as 'asia' | 'europe' | 'americas')"
        :class="[
          'inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl font-medium transition-all cursor-pointer',
          activeRegion === item.id && !isAutoRotating
            ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-semibold'
            : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800',
        ]"
      >
        <Compass v-if="activeRegion === item.id && !isAutoRotating" class="h-3 w-3 sm:h-3.5 sm:w-3.5" />
        <Globe2 v-else class="h-3 w-3 sm:h-3.5 sm:w-3.5 opacity-60" />
        <span>{{ item.label }}</span>
      </button>
    </div>
  </div>
</template>
