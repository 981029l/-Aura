<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import {
  Globe,
  Activity,
  Play,
  Pause,
  Server,
  Zap,
  Radio,
} from 'lucide-vue-next'

export interface DatacenterNode {
  id: string
  code: string
  name: string
  lat: number
  lng: number
  ping: number
  load: number
  traffic: string
  color: string
}

export interface TopologyLink {
  from: string
  to: string
  color: string
}

export interface InteractiveGlobeProps {
  title?: string
  subtitle?: string
  class?: string
}

const props = withDefaults(defineProps<InteractiveGlobeProps>(), {
  title: '网络地球',
  subtitle: '标出各地数据中心，点击节点查看延迟和负载',
})

const datacenters = ref<DatacenterNode[]>([
  { id: 'sha', code: 'SHA-02', name: '上海', lat: 31.23, lng: 121.47, ping: 8, load: 64, traffic: '124 Gbps', color: '#10b981' },
  { id: 'tyo', code: 'TYO-01', name: '东京', lat: 35.68, lng: 139.65, ping: 15, load: 72, traffic: '98 Gbps', color: '#06b6d4' },
  { id: 'sin', code: 'SIN-03', name: '新加坡', lat: 1.35, lng: 103.82, ping: 22, load: 58, traffic: '86 Gbps', color: '#3b82f6' },
  { id: 'fra', code: 'FRA-01', name: '法兰克福', lat: 50.11, lng: 8.68, ping: 34, load: 69, traffic: '112 Gbps', color: '#8b5cf6' },
  { id: 'sfo', code: 'SFO-01', name: '旧金山', lat: 37.77, lng: -122.42, ping: 18, load: 77, traffic: '145 Gbps', color: '#ec4899' },
  { id: 'jfk', code: 'JFK-04', name: '纽约', lat: 40.71, lng: -74.01, ping: 26, load: 61, traffic: '92 Gbps', color: '#f59e0b' },
  { id: 'lon', code: 'LON-02', name: '伦敦', lat: 51.51, lng: -0.13, ping: 31, load: 53, traffic: '74 Gbps', color: '#38bdf8' },
  { id: 'syd', code: 'SYD-01', name: '悉尼', lat: -33.87, lng: 151.21, ping: 41, load: 46, traffic: '51 Gbps', color: '#10b981' },
])

const topologyLinks: TopologyLink[] = [
  { from: 'sha', to: 'tyo', color: '#06b6d4' },
  { from: 'sha', to: 'sin', color: '#10b981' },
  { from: 'sha', to: 'sfo', color: '#3b82f6' },
  { from: 'sha', to: 'fra', color: '#8b5cf6' },
  { from: 'tyo', to: 'sfo', color: '#ec4899' },
  { from: 'sin', to: 'fra', color: '#06b6d4' },
  { from: 'sin', to: 'syd', color: '#10b981' },
  { from: 'fra', to: 'lon', color: '#38bdf8' },
  { from: 'lon', to: 'jfk', color: '#f59e0b' },
  { from: 'sfo', to: 'jfk', color: '#ec4899' },
  { from: 'tyo', to: 'sin', color: '#3b82f6' },
]

const canvasRef = ref<HTMLCanvasElement | null>(null)
const isAutoRotating = ref(true)
const selectedNodeId = ref<string>('sha')
const hoveredNodeId = ref<string | null>(null)
const rotationDeg = ref(215)

const activeNode = computed(() => {
  const id = hoveredNodeId.value || selectedNodeId.value
  return datacenters.value.find((d) => d.id === id) || datacenters.value[0]
})

let animId: number | null = null
let rotX = 0.26
let rotY = -2.05
let targetRotX: number | null = null
let targetRotY: number | null = null
let velX = 0
let velY = 0.004
let isDragging = false
let lastX = 0
let lastY = 0

// ================= 测地线多面体三角形拓扑网格生成 =================
type Vec3 = [number, number, number]
const meshVertices: Vec3[] = []
const meshEdges: [number, number][] = []

function normalizeVec3(v: Vec3): Vec3 {
  const len = Math.hypot(v[0], v[1], v[2]) || 1
  return [v[0] / len, v[1] / len, v[2] / len]
}

function buildGeodesicMesh() {
  meshVertices.length = 0
  meshEdges.length = 0

  const t = (1 + Math.sqrt(5)) / 2
  const baseVerts: Vec3[] = ([
    [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
    [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
    [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1],
  ] as Vec3[]).map(normalizeVec3)

  let faces: [number, number, number][] = [
    [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
    [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
    [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
    [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1],
  ]

  const verts = [...baseVerts]
  const midCache = new Map<string, number>()

  function getMidpoint(i1: number, i2: number): number {
    const key = i1 < i2 ? `${i1}_${i2}` : `${i2}_${i1}`
    const cached = midCache.get(key)
    if (cached !== undefined) return cached
    const v1 = verts[i1]
    const v2 = verts[i2]
    const mid = normalizeVec3([
      (v1[0] + v2[0]) / 2,
      (v1[1] + v2[1]) / 2,
      (v1[2] + v2[2]) / 2,
    ])
    const idx = verts.length
    verts.push(mid)
    midCache.set(key, idx)
    return idx
  }

  // 2 阶细分生成 162 顶点、480 条三角形测地线棱边
  for (let step = 0; step < 2; step++) {
    const nextFaces: [number, number, number][] = []
    for (const [a, b, c] of faces) {
      const ab = getMidpoint(a, b)
      const bc = getMidpoint(b, c)
      const ca = getMidpoint(c, a)
      nextFaces.push([a, ab, ca], [b, bc, ab], [c, ca, bc], [ab, bc, ca])
    }
    faces = nextFaces
  }

  meshVertices.push(...verts)
  const edgeSet = new Set<string>()
  for (const [a, b, c] of faces) {
    const pairs: [number, number][] = [
      [a, b],
      [b, c],
      [c, a],
    ]
    for (const [u, v] of pairs) {
      const k = u < v ? `${u}_${v}` : `${v}_${u}`
      if (!edgeSet.has(k)) {
        edgeSet.add(k)
        meshEdges.push([u, v])
      }
    }
  }
}

function latLngToVec3(lat: number, lng: number): Vec3 {
  const phi = (lat * Math.PI) / 180
  const theta = ((lng + 180) * Math.PI) / 180
  return [
    Math.cos(phi) * Math.sin(theta),
    -Math.sin(phi),
    Math.cos(phi) * Math.cos(theta),
  ]
}

function rotatePoint(v: Vec3, radius: number) {
  const cosY = Math.cos(rotY)
  const sinY = Math.sin(rotY)
  const x1 = v[0] * cosY + v[2] * sinY
  const z1 = -v[0] * sinY + v[2] * cosY

  const cosX = Math.cos(rotX)
  const sinX = Math.sin(rotX)
  const y2 = v[1] * cosX + z1 * sinX
  const z2 = -v[1] * sinX + z1 * cosX

  return {
    x: x1 * radius,
    y: y2 * radius,
    z: z2 * radius,
  }
}

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

function focusDatacenter(dc: DatacenterNode) {
  selectedNodeId.value = dc.id
  isAutoRotating.value = false
  velX = 0
  velY = 0
  const theta = ((dc.lng + 180) * Math.PI) / 180
  targetRotY = -theta
  targetRotX = Math.max(-0.55, Math.min(0.55, (dc.lat * Math.PI) / 180 * 0.65))
}

function handleSliderInput(e: Event) {
  const val = Number((e.target as HTMLInputElement).value)
  rotationDeg.value = val
  isAutoRotating.value = false
  targetRotX = null
  targetRotY = null
  rotY = ((val - 180) * Math.PI) / 180
}

function toggleSpin() {
  isAutoRotating.value = !isAutoRotating.value
  if (isAutoRotating.value) {
    targetRotX = null
    targetRotY = null
    velY = 0.004
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
  const radius = Math.min(width, height) * 0.37

  ctx.clearRect(0, 0, width, height)

  if (!isDragging) {
    if (targetRotX !== null && targetRotY !== null) {
      // 最短角度差插值
      let diffY = targetRotY - rotY
      while (diffY > Math.PI) diffY -= Math.PI * 2
      while (diffY < -Math.PI) diffY += Math.PI * 2
      rotY += diffY * 0.09
      rotX += (targetRotX - rotX) * 0.09
      if (Math.abs(diffY) < 0.003 && Math.abs(targetRotX - rotX) < 0.003) {
        targetRotX = null
        targetRotY = null
      }
    } else if (isAutoRotating.value) {
      rotY += velY
      rotX += velX
      velX *= 0.94
      velY += (0.004 - velY) * 0.05
    } else {
      rotY += velY
      rotX += velX
      velX *= 0.92
      velY *= 0.92
    }
  }

  rotX = Math.max(-0.68, Math.min(0.68, rotX))
  rotationDeg.value = Math.round(((((rotY * 180) / Math.PI) % 360) + 360) % 360)

  const now = performance.now() * 0.001
  const activeId = hoveredNodeId.value || selectedNodeId.value

  // 1. 赛博全息深空核心光晕
  const coreGlow = ctx.createRadialGradient(cx, cy, radius * 0.1, cx, cy, radius * 1.28)
  coreGlow.addColorStop(0, 'rgba(15, 23, 42, 0.95)')
  coreGlow.addColorStop(0.65, 'rgba(8, 47, 73, 0.45)')
  coreGlow.addColorStop(0.85, 'rgba(56, 189, 248, 0.14)')
  coreGlow.addColorStop(1, 'rgba(0, 0, 0, 0)')
  ctx.fillStyle = coreGlow
  ctx.beginPath()
  ctx.arc(cx, cy, radius * 1.28, 0, Math.PI * 2)
  ctx.fill()

  // 2. 外围全息赤道/极轨遥测环
  ctx.save()
  ctx.translate(cx, cy)
  ctx.rotate(-0.28)
  ctx.beginPath()
  ctx.ellipse(0, 0, radius * 1.18, radius * 0.34, 0, 0, Math.PI * 2)
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.22)'
  ctx.lineWidth = 1
  ctx.setLineDash([4, 6])
  ctx.stroke()
  ctx.setLineDash([])
  ctx.restore()

  // 3. 投影所有测地线多面体顶点
  const projVerts = meshVertices.map((v) => rotatePoint(v, radius))

  // 3.1 绘制背面测地线三角形网格
  ctx.beginPath()
  for (let i = 0; i < meshEdges.length; i++) {
    const [u, v] = meshEdges[i]
    const p1 = projVerts[u]
    const p2 = projVerts[v]
    if (p1.z <= 0 || p2.z <= 0) {
      ctx.moveTo(cx + p1.x, cy + p1.y)
      ctx.lineTo(cx + p2.x, cy + p2.y)
    }
  }
  ctx.strokeStyle = 'rgba(30, 58, 138, 0.26)'
  ctx.lineWidth = 0.7
  ctx.stroke()

  // 3.2 绘制正面测地线三角形网格
  for (let i = 0; i < meshEdges.length; i++) {
    const [u, v] = meshEdges[i]
    const p1 = projVerts[u]
    const p2 = projVerts[v]
    if (p1.z > 0 && p2.z > 0) {
      const avgZ = (p1.z + p2.z) / (2 * radius)
      ctx.beginPath()
      ctx.moveTo(cx + p1.x, cy + p1.y)
      ctx.lineTo(cx + p2.x, cy + p2.y)
      ctx.strokeStyle = `rgba(56, 189, 248, ${0.12 + avgZ * 0.35})`
      ctx.lineWidth = 0.75 + avgZ * 0.45
      ctx.stroke()
    }
  }

  // 3.3 绘制测地线网格顶点微光星芒
  for (let i = 0; i < projVerts.length; i++) {
    const p = projVerts[i]
    if (p.z > 0) {
      const ratio = p.z / radius
      ctx.fillStyle = `rgba(125, 211, 252, ${0.25 + ratio * 0.55})`
      ctx.beginPath()
      ctx.arc(cx + p.x, cy + p.y, 1 + ratio * 0.8, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  // 外圈全息菲涅尔包边环
  ctx.beginPath()
  ctx.arc(cx, cy, radius, 0, Math.PI * 2)
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.42)'
  ctx.lineWidth = 1.2
  ctx.stroke()

  // 4. 绘制全球机房节点间 3D 拓扑弧线与高频穿梭数据包
  const dcMap = new Map<string, DatacenterNode>()
  datacenters.value.forEach((d) => dcMap.set(d.id, d))

  topologyLinks.forEach((link, linkIdx) => {
    const dcFrom = dcMap.get(link.from)
    const dcTo = dcMap.get(link.to)
    if (!dcFrom || !dcTo) return

    const v1 = latLngToVec3(dcFrom.lat, dcFrom.lng)
    const v2 = latLngToVec3(dcTo.lat, dcTo.lng)
    const isHighlighted = link.from === activeId || link.to === activeId

    const segments = 36
    const pts: { x: number; y: number; z: number; visible: boolean }[] = []

    for (let s = 0; s <= segments; s++) {
      const t = s / segments
      const ix = v1[0] * (1 - t) + v2[0] * t
      const iy = v1[1] * (1 - t) + v2[1] * t
      const iz = v1[2] * (1 - t) + v2[2] * t
      const norm = normalizeVec3([ix, iy, iz])
      // 拱起高度
      const elev = 1 + Math.sin(t * Math.PI) * 0.22
      const rp = rotatePoint(
        [norm[0] * elev, norm[1] * elev, norm[2] * elev],
        radius
      )
      const screenR = Math.hypot(rp.x, rp.y)
      const occluded = rp.z < 0 && screenR < radius * 0.96
      pts.push({
        x: cx + rp.x,
        y: cy + rp.y,
        z: rp.z,
        visible: !occluded,
      })
    }

    // 4.1 拓扑导轨底线
    ctx.save()
    ctx.beginPath()
    let started = false
    for (let s = 0; s <= segments; s++) {
      if (pts[s].visible) {
        if (!started) {
          ctx.moveTo(pts[s].x, pts[s].y)
          started = true
        } else {
          ctx.lineTo(pts[s].x, pts[s].y)
        }
      } else {
        started = false
      }
    }
    ctx.strokeStyle = link.color
    ctx.globalAlpha = isHighlighted ? 0.65 : 0.24
    ctx.lineWidth = isHighlighted ? 1.6 : 1
    ctx.stroke()

    // 4.2 双向高频数据包流光
    const speed = isHighlighted ? 0.72 : 0.45
    const headT = (now * speed + linkIdx * 0.31) % 1
    const trailLen = 0.24
    const headIdx = Math.floor(headT * segments)
    const tailIdx = Math.max(0, Math.floor((headT - trailLen) * segments))

    for (let s = tailIdx; s < headIdx; s++) {
      const pA = pts[s]
      const pB = pts[s + 1]
      if (pA && pB && pA.visible && pB.visible) {
        const ratio = (s - tailIdx) / Math.max(1, headIdx - tailIdx)
        ctx.beginPath()
        ctx.moveTo(pA.x, pA.y)
        ctx.lineTo(pB.x, pB.y)
        ctx.strokeStyle = link.color
        ctx.globalAlpha = ratio * (isHighlighted ? 1 : 0.8)
        ctx.lineWidth = 1.2 + ratio * (isHighlighted ? 2.2 : 1.4)
        ctx.stroke()
      }
    }

    const headPt = pts[headIdx]
    if (headPt && headPt.visible) {
      ctx.globalAlpha = 1
      ctx.fillStyle = '#ffffff'
      ctx.shadowColor = link.color
      ctx.shadowBlur = 10
      ctx.beginPath()
      ctx.arc(headPt.x, headPt.y, isHighlighted ? 2.8 : 2.1, 0, Math.PI * 2)
      ctx.fill()
      ctx.shadowBlur = 0
    }
    ctx.restore()
  })

  // 5. 绘制机房核心节点与全息胶囊铭牌
  datacenters.value.forEach((dc, idx) => {
    const v = latLngToVec3(dc.lat, dc.lng)
    const p = rotatePoint(v, radius)
    if (p.z > -radius * 0.05) {
      const px = cx + p.x
      const py = cy + p.y
      const isFocused = dc.id === activeId
      const depthAlpha = Math.max(0.25, Math.min(1, (p.z + radius * 0.2) / radius))

      ctx.save()
      // 雷达脉冲扩散环
      const pulseT = (now * (isFocused ? 1.8 : 1.1) + idx * 0.2) % 1
      ctx.globalAlpha = (1 - pulseT) * (isFocused ? 0.9 : 0.55) * depthAlpha
      ctx.strokeStyle = dc.color
      ctx.lineWidth = isFocused ? 2 : 1.3
      ctx.beginPath()
      ctx.arc(px, py, 4 + pulseT * (isFocused ? 14 : 9), 0, Math.PI * 2)
      ctx.stroke()

      // 选中态外围锁定准星环
      if (isFocused) {
        ctx.globalAlpha = 0.85 * depthAlpha
        ctx.strokeStyle = '#ffffff'
        ctx.lineWidth = 1.2
        ctx.beginPath()
        ctx.arc(px, py, 7.5, 0, Math.PI * 2)
        ctx.stroke()
      }

      // 节点发光中心
      ctx.globalAlpha = depthAlpha
      ctx.fillStyle = dc.color
      ctx.shadowColor = dc.color
      ctx.shadowBlur = isFocused ? 12 : 6
      ctx.beginPath()
      ctx.arc(px, py, isFocused ? 4.2 : 3.2, 0, Math.PI * 2)
      ctx.fill()
      ctx.shadowBlur = 0

      // 节点全息胶囊标签
      if (p.z > radius * 0.12 || isFocused) {
        const labelText = `${dc.name} · ${dc.ping}ms`
        ctx.font = '600 10px -apple-system, BlinkMacSystemFont, "JetBrains Mono", monospace'
        const tw = ctx.measureText(labelText).width
        const boxW = tw + 12
        const boxH = 18
        const boxX = px + 9
        const boxY = py - boxH / 2

        ctx.globalAlpha = depthAlpha * (isFocused ? 0.98 : 0.86)
        ctx.fillStyle = isFocused ? 'rgba(15, 23, 42, 0.95)' : 'rgba(9, 13, 22, 0.82)'
        drawRoundedRect(ctx, boxX, boxY, boxW, boxH, 5)
        ctx.fill()

        ctx.strokeStyle = isFocused ? dc.color : 'rgba(56, 189, 248, 0.28)'
        ctx.lineWidth = isFocused ? 1.2 : 0.8
        ctx.stroke()

        ctx.fillStyle = isFocused ? '#ffffff' : '#bae6fd'
        ctx.textBaseline = 'middle'
        ctx.fillText(labelText, boxX + 6, py + 0.5)
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
  lastX = e.clientX
  lastY = e.clientY
  velX = 0
  velY = 0
  ;(e.currentTarget as HTMLElement)?.setPointerCapture(e.pointerId)
}

function handlePointerMove(e: PointerEvent) {
  if (!isDragging) return
  const dx = e.clientX - lastX
  const dy = e.clientY - lastY
  lastX = e.clientX
  lastY = e.clientY
  velY = dx * 0.006
  velX = dy * 0.006
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

function resizeCanvas() {
  const canvas = canvasRef.value
  if (!canvas) return
  const dpr = window.devicePixelRatio || 1
  const rect = canvas.getBoundingClientRect()
  const w = rect.width || 320
  const h = rect.height || 300
  canvas.width = w * dpr
  canvas.height = h * dpr
  const ctx = canvas.getContext('2d')
  if (ctx) {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }
}

onMounted(() => {
  buildGeodesicMesh()
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)
  animId = requestAnimationFrame(render)
})

onUnmounted(() => {
  if (animId) cancelAnimationFrame(animId)
  window.removeEventListener('resize', resizeCanvas)
})
</script>

<template>
  <div :class="cn('w-full max-w-3xl rounded-3xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/95 font-sans select-none space-y-5', props.class)">
    <!-- 顶部看板栏 -->
    <div class="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
      <div class="flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
          <Globe class="h-5 w-5" />
        </div>
        <div>
          <h4 class="font-bold text-sm text-zinc-900 dark:text-white flex items-center gap-2">
            <span>{{ props.title }}</span>
            <span class="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              ANYCAST MESH
            </span>
          </h4>
          <p class="text-xs text-zinc-400 font-mono mt-0.5">
            {{ props.subtitle }}
          </p>
        </div>
      </div>

      <button
        type="button"
        @click="toggleSpin"
        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
      >
        <Pause v-if="isAutoRotating" class="h-3.5 w-3.5 text-cyan-500" />
        <Play v-else class="h-3.5 w-3.5 text-emerald-500" />
        <span>{{ isAutoRotating ? '暂停旋转' : '继续旋转' }}</span>
      </button>
    </div>

    <!-- 主体双栏：左侧 3D 测地线全息拓扑球 + 右侧实时机房状态列表 -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
      <!-- 左侧：3D 赛博全息拓扑网格球视窗 -->
      <div
        class="md:col-span-7 relative h-[320px] rounded-2xl border border-slate-800/90 bg-slate-950 flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing touch-none"
        @pointerdown="handlePointerDown"
        @pointermove="handlePointerMove"
        @pointerup="handlePointerUp"
        @pointercancel="handlePointerUp"
      >
        <!-- 全息背景微网格与径向深空光场 -->
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.16)_0%,rgba(15,23,42,0)_70%)] pointer-events-none" />

        <!-- 左上角实时吞吐遥测角标 -->
        <div class="absolute top-3 left-3 z-10 flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-900/85 border border-slate-800 text-[11px] font-mono text-slate-300 pointer-events-none">
          <Radio class="h-3 w-3 text-cyan-400 animate-pulse" />
          <span>MESH: <strong class="text-white">480 EDGES</strong></span>
        </div>

        <!-- 3D 全息拓扑 Canvas -->
        <canvas
          ref="canvasRef"
          class="w-full h-full block pointer-events-none"
        />

        <!-- 左下角当前锁定节点详情 HUD -->
        <div
          v-if="activeNode"
          class="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800/90 backdrop-blur-md text-xs font-mono text-white pointer-events-none"
        >
          <div class="flex items-center gap-2 min-w-0">
            <Activity class="h-3.5 w-3.5 shrink-0 text-cyan-400" />
            <span class="font-bold truncate">{{ activeNode.name }} ({{ activeNode.code }})</span>
          </div>
          <div class="flex items-center gap-3 shrink-0 text-[11px]">
            <span class="text-slate-400">流量：<strong class="text-cyan-300">{{ activeNode.traffic }}</strong></span>
            <span class="text-emerald-400 font-bold">{{ activeNode.ping }}ms</span>
          </div>
        </div>
      </div>

      <!-- 右侧：全球机房实时遥测列表 (点击旋转定位并高亮拓扑链路) -->
      <div class="md:col-span-5 flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-3 dark:border-zinc-800/80 dark:bg-zinc-900/50">
        <div class="flex items-center justify-between px-1 pb-2 border-b border-zinc-200/60 dark:border-zinc-800/60">
          <div class="flex items-center gap-1.5 text-xs font-bold text-zinc-800 dark:text-zinc-200">
            <Server class="h-3.5 w-3.5 text-cyan-500" />
            <span>数据中心</span>
          </div>
          <span class="text-[10px] font-mono text-zinc-400">点击定位节点</span>
        </div>

        <div class="my-1.5 space-y-1 max-h-[236px] overflow-y-auto pr-0.5 scrollbar-thin">
          <button
            v-for="dc in datacenters"
            :key="dc.id"
            type="button"
            @click="focusDatacenter(dc)"
            @mouseenter="hoveredNodeId = dc.id"
            @mouseleave="hoveredNodeId = null"
            :class="[
              'w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-left transition-all cursor-pointer border',
              (hoveredNodeId || selectedNodeId) === dc.id
                ? 'bg-white dark:bg-zinc-800 border-cyan-500/40 shadow-sm'
                : 'border-transparent hover:bg-white/70 dark:hover:bg-zinc-800/50',
            ]"
          >
            <div class="flex items-center gap-2 min-w-0">
              <span
                class="h-2 w-2 rounded-full shrink-0"
                :style="{ backgroundColor: dc.color }"
              />
              <div class="min-w-0">
                <div class="text-xs font-bold text-zinc-900 dark:text-white truncate">
                  {{ dc.name }}
                </div>
                <div class="text-[10px] font-mono text-zinc-400">
                  {{ dc.code }} · 负载 {{ dc.load }}%
                </div>
              </div>
            </div>

            <div class="text-right shrink-0">
              <span class="inline-flex items-center px-1.5 py-0.5 rounded-md text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                {{ dc.ping }}ms
              </span>
              <div class="text-[9px] font-mono text-zinc-400 mt-0.5">
                {{ dc.traffic }}
              </div>
            </div>
          </button>
        </div>

        <div class="pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-400 px-1">
          <span class="flex items-center gap-1">
            <Zap class="h-3 w-3 text-amber-500" />
            <span>丢包率：<strong class="text-emerald-600 dark:text-emerald-400">0.00%</strong></span>
          </span>
          <span>11 条骨干线路</span>
        </div>
      </div>
    </div>

    <!-- 底部自旋角度滑轨与操控提示 -->
    <div class="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-500 pt-1">
      <div class="flex items-center gap-2.5">
        <span>当前经度：</span>
        <input
          :value="rotationDeg"
          @input="handleSliderInput"
          type="range"
          min="0"
          max="360"
          class="w-36 h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
        />
        <span class="font-bold text-zinc-800 dark:text-zinc-200 w-10">{{ rotationDeg }}°</span>
      </div>

      <div class="text-[11px] text-zinc-400">
        按住地球拖动旋转 · 点击右侧的数据中心会转到对应位置
      </div>
    </div>
  </div>
</template>
