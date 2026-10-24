<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Orbit, Compass, Gauge, Play, Pause, RotateCcw, Sparkles } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

interface Props {
  class?: string
}

const props = defineProps<Props>()

interface PlanetConfig {
  id: string
  nameCn: string
  nameEn: string
  semiMajor: number // 画面基准半长轴 px
  eccentricity: number // 椭圆离心率 e
  inclination: number // 轨道倾角
  period: number // 基准周期 (秒)
  size: number // 球体半径 px
  colorCore: string
  colorLight: string
  colorDark: string
  colorTrail: string
  au: number // 天文单位 AU
  baseSpeedKms: number // 平均公转速度 km/s
  periodDays: string // 公转周期展示文案
  hasMoon?: boolean
  hasRings?: boolean
  initialAngle: number
}

const planets: PlanetConfig[] = [
  {
    id: 'mercury',
    nameCn: '水星',
    nameEn: 'MERCURY',
    semiMajor: 46,
    eccentricity: 0.205,
    inclination: 0.09,
    period: 4.2,
    size: 4.2,
    colorCore: '#cbd5e1',
    colorLight: '#f8fafc',
    colorDark: '#475569',
    colorTrail: '#94a3b8',
    au: 0.39,
    baseSpeedKms: 47.87,
    periodDays: '87.97 地球日',
    initialAngle: 0.8,
  },
  {
    id: 'venus',
    nameCn: '金星',
    nameEn: 'VENUS',
    semiMajor: 72,
    eccentricity: 0.007,
    inclination: 0.05,
    period: 7.4,
    size: 5.8,
    colorCore: '#fbbf24',
    colorLight: '#fef3c7',
    colorDark: '#b45309',
    colorTrail: '#f59e0b',
    au: 0.72,
    baseSpeedKms: 35.02,
    periodDays: '224.7 地球日',
    initialAngle: 2.3,
  },
  {
    id: 'earth',
    nameCn: '地球',
    nameEn: 'EARTH',
    semiMajor: 104,
    eccentricity: 0.017,
    inclination: 0.0,
    period: 11.5,
    size: 6.5,
    colorCore: '#38bdf8',
    colorLight: '#e0f2fe',
    colorDark: '#0369a1',
    colorTrail: '#06b6d4',
    au: 1.0,
    baseSpeedKms: 29.78,
    periodDays: '365.25 地球日',
    hasMoon: true,
    initialAngle: 4.1,
  },
  {
    id: 'mars',
    nameCn: '火星',
    nameEn: 'MARS',
    semiMajor: 136,
    eccentricity: 0.093,
    inclination: 0.04,
    period: 17.8,
    size: 5.2,
    colorCore: '#f43f5e',
    colorLight: '#ffe4e6',
    colorDark: '#9f1239',
    colorTrail: '#fb7185',
    au: 1.52,
    baseSpeedKms: 24.07,
    periodDays: '686.98 地球日',
    initialAngle: 5.4,
  },
  {
    id: 'jupiter',
    nameCn: '木星',
    nameEn: 'JUPITER',
    semiMajor: 184,
    eccentricity: 0.048,
    inclination: 0.03,
    period: 29.5,
    size: 10.5,
    colorCore: '#fb923c',
    colorLight: '#ffedd5',
    colorDark: '#9a3412',
    colorTrail: '#fdba74',
    au: 5.2,
    baseSpeedKms: 13.07,
    periodDays: '11.86 地球年',
    initialAngle: 1.4,
  },
  {
    id: 'saturn',
    nameCn: '土星',
    nameEn: 'SATURN',
    semiMajor: 232,
    eccentricity: 0.054,
    inclination: 0.06,
    period: 44.0,
    size: 8.8,
    colorCore: '#eab308',
    colorLight: '#fef9c3',
    colorDark: '#854d0e',
    colorTrail: '#fde047',
    au: 9.58,
    baseSpeedKms: 9.68,
    periodDays: '29.45 地球年',
    hasRings: true,
    initialAngle: 3.6,
  },
]

const canvasRef = ref<HTMLCanvasElement | null>(null)
const isPlaying = ref(true)
const timeSpeed = ref<'1x' | '5x' | '20x'>('1x')
const focusedPlanetId = ref<string | null>('earth')

// 实时计算的聚焦行星遥测数据
const liveDistanceAu = ref('1.000')
const liveVelocityKms = ref('29.78')

const activePlanet = computed(() =>
  planets.find((p) => p.id === focusedPlanetId.value) || null
)

// 3D 视角状态（支持鼠标自由拖拽俯仰与偏航）
let camPitch = 0.62 // 俯仰角
let camYaw = -0.35 // 偏航角
let targetPitch: number | null = null
let targetYaw: number | null = null

let isDragging = false
let pointerDownX = 0
let pointerDownY = 0
let lastX = 0
let lastY = 0
let dragMoved = false

// 连续仿真时钟（防止暂停或切换倍速跳帧）
let simTime = 0
let lastFrameTime = 0
let animId = 0

// 保存最近一帧行星屏幕坐标用于点击拾取
interface ScreenPlanetHit {
  id: string
  x: number
  y: number
  r: number
}
let screenPlanetHits: ScreenPlanetHit[] = []

// 背景星野粒子与小行星带
interface StarParticle {
  x: number
  y: number
  size: number
  alpha: number
  twinkleSpeed: number
  phase: number
}

interface AsteroidParticle {
  semiMajor: number
  angle: number
  speed: number
  yOffset: number
  size: number
  alpha: number
}

const stars: StarParticle[] = []
const asteroids: AsteroidParticle[] = []

function initParticles() {
  stars.length = 0
  for (let i = 0; i < 110; i++) {
    stars.push({
      x: Math.random(),
      y: Math.random(),
      size: 0.5 + Math.random() * 1.3,
      alpha: 0.25 + Math.random() * 0.65,
      twinkleSpeed: 1 + Math.random() * 2.5,
      phase: Math.random() * Math.PI * 2,
    })
  }

  asteroids.length = 0
  for (let i = 0; i < 150; i++) {
    const r = 154 + Math.random() * 16
    asteroids.push({
      semiMajor: r,
      angle: Math.random() * Math.PI * 2,
      speed: (0.28 + Math.random() * 0.08) * (160 / r),
      yOffset: (Math.random() - 0.5) * 5,
      size: 0.7 + Math.random() * 1.1,
      alpha: 0.22 + Math.random() * 0.45,
    })
  }
}

// 计算行星在给定真近点角 theta 下的三维轨道坐标
function getOrbitPoint3D(p: PlanetConfig, theta: number): [number, number, number] {
  const a = p.semiMajor
  const e = p.eccentricity
  // 开普勒椭圆极坐标方程 r(theta) = a(1 - e^2) / (1 + e cos(theta))
  const r = (a * (1 - e * e)) / (1 + e * Math.cos(theta))
  const ox = r * Math.cos(theta)
  const oz = r * Math.sin(theta)
  // 轨道倾角绕 X 轴微倾
  const oy = oz * Math.sin(p.inclination)
  const ozTilted = oz * Math.cos(p.inclination)
  return [ox, oy, ozTilted]
}

// 3D 相机旋转与透视投影（适配 Canvas +Y 向下，保证上下拖拽跟手）
function project3D(
  vx: number,
  vy: number,
  vz: number,
  cx: number,
  cy: number,
  scale: number
) {
  const cosY = Math.cos(camYaw)
  const sinY = Math.sin(camYaw)
  const x1 = vx * cosY + vz * sinY
  const z1 = -vx * sinY + vz * cosY

  const cosX = Math.cos(camPitch)
  const sinX = Math.sin(camPitch)
  const y2 = vy * cosX + z1 * sinX
  const z2 = -vy * sinX + z1 * cosX

  const fov = 680
  const persp = fov / Math.max(220, fov - z2 * scale)
  return {
    x: cx + x1 * scale * persp,
    y: cy + y2 * scale * persp,
    z: z2 * scale,
    persp,
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

function resetCamera() {
  targetPitch = 0.62
  targetYaw = -0.35
}

function selectPlanet(id: string | null) {
  focusedPlanetId.value = focusedPlanetId.value === id ? null : id
}

function render(nowMs: number) {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  if (!lastFrameTime) lastFrameTime = nowMs
  const dt = Math.min(0.05, (nowMs - lastFrameTime) / 1000)
  lastFrameTime = nowMs

  const speedMult =
    timeSpeed.value === '20x' ? 9.5 : timeSpeed.value === '5x' ? 3.2 : 1.0
  if (isPlaying.value) {
    simTime += dt * speedMult
  }

  if (!isDragging && targetPitch !== null && targetYaw !== null) {
    camPitch += (targetPitch - camPitch) * 0.1
    camYaw += (targetYaw - camYaw) * 0.1
    if (
      Math.abs(targetPitch - camPitch) < 0.002 &&
      Math.abs(targetYaw - camYaw) < 0.002
    ) {
      targetPitch = null
      targetYaw = null
    }
  }

  const dpr = window.devicePixelRatio || 1
  const width = canvas.width / dpr
  const height = canvas.height / dpr
  const cx = width / 2
  const cy = height / 2 - 6
  const sceneScale = Math.min(width / 540, height / 340, 1.08)

  ctx.clearRect(0, 0, width, height)

  // 1. 绘制深空星云与闪烁背景恒星
  const nebula = ctx.createRadialGradient(cx, cy, 8, cx, cy, width * 0.62)
  nebula.addColorStop(0, 'rgba(245, 158, 11, 0.12)')
  nebula.addColorStop(0.28, 'rgba(56, 189, 248, 0.05)')
  nebula.addColorStop(0.65, 'rgba(15, 23, 42, 0.4)')
  nebula.addColorStop(1, 'rgba(2, 6, 23, 0)')
  ctx.fillStyle = nebula
  ctx.fillRect(0, 0, width, height)

  const realSec = nowMs * 0.001
  stars.forEach((st) => {
    const twinkle = 0.55 + 0.45 * Math.sin(realSec * st.twinkleSpeed + st.phase)
    ctx.fillStyle = `rgba(226, 232, 240, ${st.alpha * twinkle})`
    ctx.beginPath()
    ctx.arc(st.x * width, st.y * height, st.size, 0, Math.PI * 2)
    ctx.fill()
  })

  // 2. 绘制黄道面极坐标参考十字测距环
  ctx.save()
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.07)'
  ctx.lineWidth = 1
  ;[-1, 1].forEach((dir) => {
    const pStart = project3D(dir * 28, 0, 0, cx, cy, sceneScale)
    const pEnd = project3D(dir * 255, 0, 0, cx, cy, sceneScale)
    ctx.beginPath()
    ctx.moveTo(pStart.x, pStart.y)
    ctx.lineTo(pEnd.x, pEnd.y)
    ctx.stroke()

    const pStartZ = project3D(0, 0, dir * 28, cx, cy, sceneScale)
    const pEndZ = project3D(0, 0, dir * 255, cx, cy, sceneScale)
    ctx.beginPath()
    ctx.moveTo(pStartZ.x, pStartZ.y)
    ctx.lineTo(pEndZ.x, pEndZ.y)
    ctx.stroke()
  })
  ctx.restore()

  // 3. 绘制所有行星的 3D 椭圆轨道线
  planets.forEach((p) => {
    const isFocused = focusedPlanetId.value === p.id
    const steps = 96
    ctx.save()
    ctx.beginPath()
    for (let i = 0; i <= steps; i++) {
      const ang = (i / steps) * Math.PI * 2
      const [ox, oy, oz] = getOrbitPoint3D(p, ang)
      const proj = project3D(ox, oy, oz, cx, cy, sceneScale)
      if (i === 0) ctx.moveTo(proj.x, proj.y)
      else ctx.lineTo(proj.x, proj.y)
    }
    ctx.strokeStyle = isFocused
      ? p.colorCore
      : 'rgba(99, 102, 241, 0.24)'
    ctx.globalAlpha = isFocused ? 0.65 : 0.75
    ctx.lineWidth = isFocused ? 1.5 : 1
    ctx.stroke()
    ctx.restore()
  })

  // 4. 绘制火星与木星之间的小行星带粒子
  ctx.save()
  asteroids.forEach((ast) => {
    const ang = ast.angle + simTime * ast.speed
    const ax = ast.semiMajor * Math.cos(ang)
    const az = ast.semiMajor * Math.sin(ang)
    const proj = project3D(ax, ast.yOffset, az, cx, cy, sceneScale)
    const depthAlpha = Math.max(0.15, Math.min(1, (proj.z + 240) / 480))
    ctx.fillStyle = `rgba(148, 163, 184, ${ast.alpha * depthAlpha})`
    ctx.beginPath()
    ctx.arc(proj.x, proj.y, ast.size * proj.persp, 0, Math.PI * 2)
    ctx.fill()
  })
  ctx.restore()

  // 5. 收集 3D 可渲染实体（太阳 + 行星 + 月球），按 Z 轴深度从远到近排序绘制，保证真实遮挡关系
  interface RenderEntity {
    z: number
    draw: () => void
  }
  const entities: RenderEntity[] = []
  const nextHits: ScreenPlanetHit[] = []

  // 太阳实体 (位于原点 0,0,0)
  const sunProj = project3D(0, 0, 0, cx, cy, sceneScale)
  entities.push({
    z: sunProj.z,
    draw: () => {
      const sunR = 19 * sceneScale * sunProj.persp
      ctx.save()
      // 外层日冕辉光
      const pulse = 1 + 0.05 * Math.sin(realSec * 3.2)
      const corona = ctx.createRadialGradient(
        sunProj.x,
        sunProj.y,
        sunR * 0.2,
        sunProj.x,
        sunProj.y,
        sunR * 3.4 * pulse
      )
      corona.addColorStop(0, 'rgba(255, 255, 255, 0.95)')
      corona.addColorStop(0.25, 'rgba(251, 191, 36, 0.85)')
      corona.addColorStop(0.55, 'rgba(245, 158, 11, 0.28)')
      corona.addColorStop(1, 'rgba(245, 158, 11, 0)')
      ctx.fillStyle = corona
      ctx.beginPath()
      ctx.arc(sunProj.x, sunProj.y, sunR * 3.4 * pulse, 0, Math.PI * 2)
      ctx.fill()

      // 太阳球体真 3D 球面渐变（永远保持正圆球体，不被压扁）
      const sunSphere = ctx.createRadialGradient(
        sunProj.x - sunR * 0.28,
        sunProj.y - sunR * 0.28,
        sunR * 0.1,
        sunProj.x,
        sunProj.y,
        sunR
      )
      sunSphere.addColorStop(0, '#ffffff')
      sunSphere.addColorStop(0.45, '#fde047')
      sunSphere.addColorStop(0.82, '#f59e0b')
      sunSphere.addColorStop(1, '#d97706')
      ctx.fillStyle = sunSphere
      ctx.beginPath()
      ctx.arc(sunProj.x, sunProj.y, sunR, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    },
  })

  // 各大行星实体与流光尾迹
  planets.forEach((p) => {
    const meanAnomaly = p.initialAngle + (simTime * Math.PI * 2) / p.period
    // 开普勒方程一阶近似真近点角（体现近日点加速、远日点减速）
    const theta =
      meanAnomaly + 2 * p.eccentricity * Math.sin(meanAnomaly)
    const [ox, oy, oz] = getOrbitPoint3D(p, theta)
    const proj = project3D(ox, oy, oz, cx, cy, sceneScale)
    const isFocused = focusedPlanetId.value === p.id

    // 更新选中行星的实时开普勒遥测数值
    if (isFocused) {
      const rFactor =
        (1 - p.eccentricity * p.eccentricity) /
        (1 + p.eccentricity * Math.cos(theta))
      liveDistanceAu.value = (p.au * rFactor).toFixed(3)
      // 活力公式 v ~ sqrt(2/r - 1/a)
      const vFactor = Math.sqrt(Math.max(0.2, 2 / rFactor - 1))
      liveVelocityKms.value = (p.baseSpeedKms * vFactor).toFixed(2)
    }

    // 先绘制行星运动弧线尾迹
    const trailSegments = 28
    const trailSpan = 0.72
    ctx.save()
    for (let s = 0; s < trailSegments; s++) {
      const t1 = theta - (s / trailSegments) * trailSpan
      const t2 = theta - ((s + 1) / trailSegments) * trailSpan
      const [tx1, ty1, tz1] = getOrbitPoint3D(p, t1)
      const [tx2, ty2, tz2] = getOrbitPoint3D(p, t2)
      const tp1 = project3D(tx1, ty1, tz1, cx, cy, sceneScale)
      const tp2 = project3D(tx2, ty2, tz2, cx, cy, sceneScale)
      const ratio = 1 - s / trailSegments
      ctx.beginPath()
      ctx.moveTo(tp1.x, tp1.y)
      ctx.lineTo(tp2.x, tp2.y)
      ctx.strokeStyle = p.colorTrail
      ctx.globalAlpha = ratio * (isFocused ? 0.9 : 0.55)
      ctx.lineWidth = Math.max(0.8, p.size * 0.36 * ratio * tp1.persp)
      ctx.stroke()
    }
    ctx.restore()

    const drawRadius = Math.max(3.5, p.size * sceneScale * proj.persp)
    nextHits.push({
      id: p.id,
      x: proj.x,
      y: proj.y,
      r: Math.max(14, drawRadius + 8),
    })

    entities.push({
      z: proj.z,
      draw: () => {
        ctx.save()

        // 若是土星，先绘制后半圈 3D 光环
        if (p.hasRings) {
          drawSaturnRingHalf(ctx, ox, oy, oz, drawRadius, cx, cy, sceneScale, true)
        }

        // 行星大气辉光
        const glow = ctx.createRadialGradient(
          proj.x,
          proj.y,
          drawRadius * 0.2,
          proj.x,
          proj.y,
          drawRadius * (isFocused ? 2.8 : 2.1)
        )
        glow.addColorStop(0, p.colorCore)
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)')
        ctx.fillStyle = glow
        ctx.globalAlpha = isFocused ? 0.55 : 0.32
        ctx.beginPath()
        ctx.arc(
          proj.x,
          proj.y,
          drawRadius * (isFocused ? 2.8 : 2.1),
          0,
          Math.PI * 2
        )
        ctx.fill()
        ctx.globalAlpha = 1

        // 计算朝向中心太阳的受光方向（真实日照昼夜半球光影）
        const dirToSunX = sunProj.x - proj.x
        const dirToSunY = sunProj.y - proj.y
        const distToSun = Math.hypot(dirToSunX, dirToSunY) || 1
        const lightOffsetX = (dirToSunX / distToSun) * drawRadius * 0.42
        const lightOffsetY = (dirToSunY / distToSun) * drawRadius * 0.42

        const sphereGrad = ctx.createRadialGradient(
          proj.x + lightOffsetX,
          proj.y + lightOffsetY,
          drawRadius * 0.12,
          proj.x,
          proj.y,
          drawRadius
        )
        sphereGrad.addColorStop(0, p.colorLight)
        sphereGrad.addColorStop(0.55, p.colorCore)
        sphereGrad.addColorStop(1, p.colorDark)

        ctx.fillStyle = sphereGrad
        ctx.beginPath()
        ctx.arc(proj.x, proj.y, drawRadius, 0, Math.PI * 2)
        ctx.fill()

        // 若是土星，再绘制前半圈 3D 光环遮挡球体前侧
        if (p.hasRings) {
          drawSaturnRingHalf(ctx, ox, oy, oz, drawRadius, cx, cy, sceneScale, false)
        }

        // 选中聚焦态：绘制精密锁定框与全中文天体标签
        if (isFocused) {
          const ringR = drawRadius + 6 + Math.sin(realSec * 5) * 1.2
          ctx.strokeStyle = '#22d3ee'
          ctx.lineWidth = 1.3
          ctx.setLineDash([4, 3])
          ctx.beginPath()
          ctx.arc(proj.x, proj.y, ringR, 0, Math.PI * 2)
          ctx.stroke()
          ctx.setLineDash([])

          const labelText = `${p.nameCn} · ${liveDistanceAu.value} AU`
          ctx.font =
            '600 11px -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif'
          const tw = ctx.measureText(labelText).width
          const boxW = tw + 14
          const boxH = 20
          const boxX = Math.min(
            width - boxW - 8,
            Math.max(8, proj.x + ringR + 6)
          )
          const boxY = Math.min(
            height - boxH - 8,
            Math.max(8, proj.y - boxH / 2)
          )

          ctx.fillStyle = 'rgba(9, 14, 28, 0.88)'
          drawRoundedRect(ctx, boxX, boxY, boxW, boxH, 6)
          ctx.fill()
          ctx.strokeStyle = 'rgba(34, 211, 238, 0.5)'
          ctx.lineWidth = 1
          ctx.stroke()

          ctx.fillStyle = '#f8fafc'
          ctx.textBaseline = 'middle'
          ctx.fillText(labelText, boxX + 7, boxY + boxH / 2 + 0.5)
        }

        ctx.restore()
      },
    })

    // 若是地球，附带真实绕地旋转的月球子系统
    if (p.hasMoon) {
      const moonAngle = simTime * 4.8
      const moonDist = 14
      const mx = ox + moonDist * Math.cos(moonAngle)
      const mz = oz + moonDist * Math.sin(moonAngle)
      const my = oy + moonDist * 0.18 * Math.sin(moonAngle)
      const moonProj = project3D(mx, my, mz, cx, cy, sceneScale)

      entities.push({
        z: moonProj.z,
        draw: () => {
          ctx.save()
          // 月球微光轨道圈
          ctx.strokeStyle = 'rgba(148, 163, 184, 0.28)'
          ctx.lineWidth = 0.7
          ctx.beginPath()
          for (let m = 0; m <= 24; m++) {
            const ma = (m / 24) * Math.PI * 2
            const mp = project3D(
              ox + moonDist * Math.cos(ma),
              oy + moonDist * 0.18 * Math.sin(ma),
              oz + moonDist * Math.sin(ma),
              cx,
              cy,
              sceneScale
            )
            if (m === 0) ctx.moveTo(mp.x, mp.y)
            else ctx.lineTo(mp.x, mp.y)
          }
          ctx.stroke()

          const mr = Math.max(1.8, 2.1 * sceneScale * moonProj.persp)
          ctx.fillStyle = '#e2e8f0'
          ctx.beginPath()
          ctx.arc(moonProj.x, moonProj.y, mr, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        },
      })
    }
  })

  screenPlanetHits = nextHits

  // 按 Z 从远到近（画家算法）依次绘制，确保行星绕到太阳后方时被遮挡、绕到前方时凌日
  entities.sort((a, b) => a.z - b.z)
  entities.forEach((ent) => ent.draw())

  animId = requestAnimationFrame(render)
}

function drawSaturnRingHalf(
  ctx: CanvasRenderingContext2D,
  ox: number,
  oy: number,
  oz: number,
  planetRadius: number,
  cx: number,
  cy: number,
  sceneScale: number,
  isBackHalf: boolean
) {
  const innerR = planetRadius * 1.45
  const outerR = planetRadius * 2.25
  const steps = 32
  const startIdx = isBackHalf ? steps : 0
  const endIdx = isBackHalf ? steps * 2 : steps

  ctx.save()
  for (let band = 0; band < 2; band++) {
    const r = band === 0 ? innerR : outerR * 0.88
    ctx.beginPath()
    let started = false
    for (let i = startIdx; i <= endIdx; i++) {
      const ang = (i / (steps * 2)) * Math.PI * 2
      const rx = ox + (r / sceneScale) * Math.cos(ang)
      const rz = oz + (r / sceneScale) * Math.sin(ang)
      const ry = oy + (r / sceneScale) * 0.25 * Math.sin(ang)
      const rp = project3D(rx, ry, rz, cx, cy, sceneScale)
      if (!started) {
        ctx.moveTo(rp.x, rp.y)
        started = true
      } else {
        ctx.lineTo(rp.x, rp.y)
      }
    }
    ctx.strokeStyle =
      band === 0 ? 'rgba(253, 224, 71, 0.72)' : 'rgba(250, 204, 21, 0.42)'
    ctx.lineWidth = band === 0 ? 2.4 : 1.6
    ctx.stroke()
  }
  ctx.restore()
}

function handlePointerDown(e: PointerEvent) {
  isDragging = true
  dragMoved = false
  targetPitch = null
  targetYaw = null
  pointerDownX = e.clientX
  pointerDownY = e.clientY
  lastX = e.clientX
  lastY = e.clientY
  ;(e.currentTarget as HTMLElement)?.setPointerCapture(e.pointerId)
}

function handlePointerMove(e: PointerEvent) {
  if (!isDragging) return
  const dx = e.clientX - lastX
  const dy = e.clientY - lastY
  if (
    Math.hypot(e.clientX - pointerDownX, e.clientY - pointerDownY) > 4
  ) {
    dragMoved = true
  }
  lastX = e.clientX
  lastY = e.clientY

  camYaw += dx * 0.0065
  camPitch = Math.max(0.12, Math.min(1.38, camPitch + dy * 0.0065))
}

function handlePointerUp(e: PointerEvent) {
  if (!isDragging) return
  isDragging = false
  try {
    ;(e.currentTarget as HTMLElement)?.releasePointerCapture(e.pointerId)
  } catch {
    // ignore
  }

  // 若为轻点而非拖拽，检测是否点中某颗行星
  if (!dragMoved && canvasRef.value) {
    const rect = canvasRef.value.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const clickY = e.clientY - rect.top
    for (const hit of screenPlanetHits) {
      if (Math.hypot(clickX - hit.x, clickY - hit.y) <= hit.r) {
        focusedPlanetId.value = hit.id
        break
      }
    }
  }
}

function resizeCanvas() {
  const canvas = canvasRef.value
  if (!canvas) return
  const dpr = window.devicePixelRatio || 1
  const rect = canvas.getBoundingClientRect()
  const w = rect.width || 620
  const h = rect.height || 360
  canvas.width = w * dpr
  canvas.height = h * dpr
  const ctx = canvas.getContext('2d')
  if (ctx) {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }
}

onMounted(() => {
  initParticles()
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
  <div
    :class="
      cn(
        'relative w-full max-w-3xl mx-auto rounded-3xl p-5 sm:p-6 overflow-hidden border border-slate-800/80 bg-[#050814] shadow-xl font-sans text-slate-100 select-none space-y-4',
        props.class
      )
    "
  >
    <!-- 顶部天文控制台栏 -->
    <div
      class="relative z-20 flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b border-indigo-500/20"
    >
      <div class="flex items-center gap-2.5">
        <div
          class="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-400"
        >
          <Orbit class="w-4 h-4" />
        </div>
        <div>
          <div class="flex items-center gap-2">
            <h3 class="text-xs font-semibold tracking-tight text-white">
              太阳系轨道
            </h3>
            <span
              class="inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-medium text-amber-300 border border-amber-500/25"
            >
              <Sparkles class="h-2.5 w-2.5" />
              3D 视图
            </span>
          </div>
          <p class="text-[11px] text-slate-400">
            拖动旋转视角 · 点击行星查看详情
          </p>
        </div>
      </div>

      <!-- 倍速切换与播放/重置控制 -->
      <div class="flex items-center gap-2">
        <div
          class="inline-flex rounded-xl bg-slate-900/90 p-0.5 border border-indigo-500/25 text-xs"
        >
          <button
            v-for="s in ['1x', '5x', '20x'] as const"
            :key="s"
            type="button"
            @click="timeSpeed = s"
            class="px-2.5 py-1 rounded-lg font-mono font-semibold transition-all cursor-pointer"
            :class="
              timeSpeed === s
                ? 'bg-cyan-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            "
          >
            {{ s }}
          </button>
        </div>

        <button
          type="button"
          @click="isPlaying = !isPlaying"
          :title="isPlaying ? '暂停' : '继续'"
          class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-indigo-500/25 bg-slate-900/90 text-xs font-medium text-slate-200 hover:text-white hover:border-cyan-500/40 transition-colors cursor-pointer"
        >
          <Pause v-if="isPlaying" class="w-3.5 h-3.5 text-amber-400" />
          <Play v-else class="w-3.5 h-3.5 text-cyan-400" />
          <span>{{ isPlaying ? '运行中' : '已暂停' }}</span>
        </button>

        <button
          type="button"
          @click="resetCamera"
          title="重置视角"
          class="p-1.5 rounded-xl border border-indigo-500/25 bg-slate-900/90 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors cursor-pointer"
        >
          <RotateCcw class="w-3.5 h-3.5" />
        </button>
      </div>
    </div>

    <!-- 3D 太阳系交互视窗 -->
    <div
      class="relative z-10 h-[360px] rounded-2xl overflow-hidden border border-indigo-500/20 bg-[#030611]"
    >
      <canvas
        ref="canvasRef"
        class="w-full h-full cursor-grab active:cursor-grabbing touch-none block"
        @pointerdown="handlePointerDown"
        @pointermove="handlePointerMove"
        @pointerup="handlePointerUp"
        @pointercancel="handlePointerUp"
      />

      <!-- 左下角实时开普勒轨道遥测面板 -->
      <div
        class="pointer-events-none absolute bottom-3 left-3 right-3 sm:right-auto sm:min-w-[290px] bg-slate-950/85 backdrop-blur-md p-3 rounded-xl border border-indigo-500/25 space-y-2"
      >
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-1.5 text-xs font-semibold text-cyan-400">
            <Compass class="w-3.5 h-3.5 shrink-0" />
            <span>
              {{
                activePlanet
                  ? `${activePlanet.nameCn} (${activePlanet.nameEn})`
                  : '太阳系全景'
              }}
            </span>
          </div>
          <span
            class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
          >
            {{ activePlanet ? `e = ${activePlanet.eccentricity}` : 'G = 6.674×10⁻¹¹' }}
          </span>
        </div>

        <div
          v-if="activePlanet"
          class="grid grid-cols-3 gap-2 pt-1 border-t border-slate-800/80 text-[11px]"
        >
          <div>
            <div class="text-slate-400 text-[10px]">与太阳距离</div>
            <div class="font-mono font-semibold text-white">
              {{ liveDistanceAu }} <span class="text-[10px] text-slate-400">AU</span>
            </div>
          </div>
          <div>
            <div class="text-slate-400 text-[10px]">公转速度</div>
            <div class="font-mono font-semibold text-emerald-400">
              {{ liveVelocityKms }} <span class="text-[10px] text-slate-400">km/s</span>
            </div>
          </div>
          <div>
            <div class="text-slate-400 text-[10px]">公转周期</div>
            <div class="font-mono font-semibold text-amber-300">
              {{ activePlanet.periodDays }}
            </div>
          </div>
        </div>
        <div v-else class="text-[11px] text-slate-400">
          包含 6 颗行星的轨道、月球、土星环，以及火星和木星之间的小行星带
        </div>
      </div>
    </div>

    <!-- 底部行星追踪器切换栏 -->
    <div
      class="relative z-20 flex flex-wrap items-center justify-between gap-2.5 pt-1 text-xs"
    >
      <div class="flex items-center gap-1.5 text-slate-400">
        <Gauge class="w-3.5 h-3.5 text-cyan-400" />
        <span class="font-medium">选择行星：</span>
      </div>

      <div class="flex flex-wrap items-center gap-1.5">
        <button
          type="button"
          @click="focusedPlanetId = null"
          class="px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer border"
          :class="
            focusedPlanetId === null
              ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
              : 'bg-slate-900/90 text-slate-400 border-slate-800 hover:text-slate-200'
          "
        >
          全景
        </button>
        <button
          v-for="p in planets"
          :key="p.id"
          type="button"
          @click="selectPlanet(p.id)"
          class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer border"
          :class="
            focusedPlanetId === p.id
              ? 'bg-cyan-500 text-slate-950 font-semibold border-cyan-400 shadow-sm'
              : 'bg-slate-900/90 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
          "
        >
          <span
            class="w-2 h-2 rounded-full shrink-0"
            :style="{ backgroundColor: p.colorCore }"
          />
          <span>{{ p.nameCn }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
