<template>
  <div
    ref="containerRef"
    class="relative w-full h-full min-h-[350px] overflow-hidden rounded-2xl bg-black text-white select-none cursor-crosshair group"
    :class="className"
    @pointermove="handlePointerMove"
    @pointerleave="handlePointerLeave"
    @pointerdown="handlePointerDown"
  >
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full block pointer-events-none" />
    <div class="relative z-10 w-full h-full flex flex-col justify-between p-6 pointer-events-none">
      <slot>
        <div class="flex items-center justify-between text-xs font-mono tracking-wider text-white/60">
          <span class="inline-flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            CAUCHY SPECTRAL DISPERSION
          </span>
          <span
            class="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white/80 border border-white/10 text-[11px] transition-all duration-300"
            :class="isHovered ? 'bg-cyan-500/20 text-cyan-200 border-cyan-500/40' : ''"
          >
            {{ isHovered ? '✦ 跟随鼠标中' : '✦ 移动鼠标，光带会跟着流动' }}
          </span>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  speed?: number
  intensity?: number
  thickness?: number
  grain?: number
  mouseInfluence?: number
  interactive?: boolean
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  speed: 1,
  intensity: 1,
  thickness: 1,
  grain: 0.45,
  mouseInfluence: 1,
  interactive: true,
  className: '',
})

const containerRef = ref<HTMLDivElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
const isHovered = ref(false)

const mouse = ref<[number, number]>([0.5, 0.5])
const targetMouse = ref<[number, number]>([0.5, 0.5])

function handlePointerMove(e: PointerEvent) {
  if (!props.interactive || !containerRef.value) return
  isHovered.value = true
  const rect = containerRef.value.getBoundingClientRect()
  targetMouse.value = [
    (e.clientX - rect.left) / Math.max(rect.width, 1),
    1.0 - (e.clientY - rect.top) / Math.max(rect.height, 1),
  ]
}

function handlePointerDown(e: PointerEvent) {
  handlePointerMove(e)
}

function handlePointerLeave() {
  isHovered.value = false
  targetMouse.value = [0.5, 0.5]
}

let gl: WebGLRenderingContext | null = null
let frameId = 0
let resizeObserver: ResizeObserver | null = null

const vertex = `attribute vec2 a_position;
void main() { gl_Position = vec4(a_position, 0., 1.); }`

const fragment = `precision highp float;
uniform vec2 u_resolution;
uniform float u_time, u_intensity, u_thickness, u_grain;
uniform vec2 u_mouse;
uniform float u_mouseInfluence;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 m = mat2(0.8, 0.6, -0.6, 0.8);
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p = m * p * 2.02;
    a *= 0.5;
  }
  return v;
}

vec2 ribbonPoint(float s, float time, vec2 mouseP, float mouseInf) {
  float sway = sin(time * 0.42 + s * 2.1) * 0.055;
  float lift = cos(time * 0.31 - s * 1.5) * 0.04;
  float x = mix(-1.2, 0.95, s) + sway * (0.55 + s * 0.5);
  float y = mix(-0.72, -0.55, s)
    + sin(s * 2.85 + 0.35) * 0.92
    + cos(s * 1.15) * 0.12
    - pow(max(s - 0.55, 0.0), 2.0) * 1.15
    + lift;
  vec2 basePt = vec2(x, y);

  // 弹性引力场：两端固定平滑，飘带主体向鼠标位置形成弧形牵引
  float arch = sin(s * 3.14159265);
  vec2 diff = mouseP - basePt;
  float dist = length(diff);
  float pull = exp(-dist * 1.5) * arch * 0.68 * mouseInf;
  vec2 mousePull = (mouseP - vec2(mix(-0.25, 0.25, s), 0.0)) * 0.38 * arch * mouseInf;

  // 动态引力驻波，随着光标引导激发出波动
  float dynamicWave = sin(s * 8.0 - time * 2.2 + mouseP.x * 2.5 + mouseP.y * 1.8) * 0.04 * arch * mouseInf;

  return basePt + mousePull + pull * diff + vec2(-dynamicWave * 0.6, dynamicWave);
}

vec3 prism(float across, float along, float mouseDist) {
  float mouseShift = exp(-mouseDist * 2.8) * 0.22;
  float h = clamp(0.5 + across * 0.52 + along * 0.18 + mouseShift, 0.0, 1.0);
  vec3 warm = vec3(1.0, 0.72, 0.28);
  vec3 lime = vec3(0.55, 1.0, 0.35);
  vec3 cyan = vec3(0.2, 0.85, 1.0);
  vec3 blue = vec3(0.25, 0.4, 1.0);
  vec3 mag = vec3(0.85, 0.25, 1.0);
  vec3 c = mix(warm, lime, smoothstep(0.0, 0.28, h));
  c = mix(c, cyan, smoothstep(0.22, 0.48, h));
  c = mix(c, blue, smoothstep(0.42, 0.68, h));
  c = mix(c, mag, smoothstep(0.62, 0.95, h));
  c = mix(c, mag, smoothstep(0.2, 0.9, across) * 0.35);
  return c;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float aspect = u_resolution.x / max(u_resolution.y, 1.0);
  vec2 p = (uv - 0.5) * vec2(aspect, 1.0);
  float portrait = smoothstep(1.35, 0.85, aspect);
  p *= mix(1.0, 1.32, portrait);

  vec2 mouseP = (u_mouse - 0.5) * vec2(aspect, 1.0) * mix(1.0, 1.32, portrait);
  float dMouse = length(p - mouseP);

  float time = u_time;
  float warp = fbm(p * 1.2 + vec2(time * 0.1, -time * 0.07));
  p += (warp - 0.5) * 0.14;

  // 光标周围微折射透镜畸变
  vec2 mouseLens = normalize(p - mouseP + vec2(1e-5)) * exp(-dMouse * 3.5) * 0.06 * u_mouseInfluence;
  p -= mouseLens;

  float minDist = 1e5;
  float closestT = 0.0;
  float side = 0.0;
  vec2 prev = ribbonPoint(0.0, time, mouseP, u_mouseInfluence);

  for (int i = 1; i <= 56; i++) {
    float s = float(i) / 56.0;
    vec2 cur = ribbonPoint(s, time, mouseP, u_mouseInfluence);
    vec2 pa = p - prev;
    vec2 ba = cur - prev;
    float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-5), 0.0, 1.0);
    vec2 closest = prev + ba * h;
    float d = length(p - closest);
    if (d < minDist) {
      minDist = d;
      closestT = mix(s - 1.0 / 56.0, s, h);
      side = pa.x * ba.y - pa.y * ba.x;
    }
    prev = cur;
  }

  float thick = 0.055 * u_thickness;
  float across = clamp((minDist * sign(side)) / (thick * 2.8), -1.2, 1.2);

  float core = exp(-pow(minDist / (thick * 0.7), 2.0));
  float body = exp(-pow(minDist / (thick * 1.8), 2.0));
  float bloom = exp(-pow(minDist / (thick * 4.2), 2.0));
  float haze = exp(-pow(minDist / (thick * 7.5), 2.0));

  vec3 spectral = prism(across, closestT, dMouse);
  spectral = mix(vec3(0.95, 0.9, 0.82), spectral, smoothstep(0.0, 0.55, abs(across)));

  float hot = exp(-closestT * 4.5) * pow(core, 0.85);

  vec3 col = spectral * (body * 0.55 + bloom * 0.85 + haze * 0.4);
  col += spectral * core * 0.35;
  col += vec3(1.0, 0.96, 0.88) * hot * 1.1;

  // 光标相交高能色散辉光
  float mouseFlare = exp(-dMouse * 3.0) * exp(-minDist * 7.0) * 1.4 * u_mouseInfluence;
  vec3 flareCol = mix(vec3(0.35, 0.85, 1.0), vec3(1.0, 0.45, 0.9), sin(time * 2.0 + closestT * 6.28) * 0.5 + 0.5);
  col += flareCol * mouseFlare;

  col *= u_intensity * 1.15;

  float mask = clamp(body * 0.7 + bloom + haze * 0.55 + hot + mouseFlare * 0.5, 0.0, 1.6);
  col *= mask;

  float grain = (hash(gl_FragCoord.xy + time * 40.0) - 0.5) * 0.06 * u_grain;
  col += grain * mask;

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`

function initRibbonShader() {
  const canvas = canvasRef.value
  if (!canvas) return

  gl = canvas.getContext('webgl', { alpha: false, depth: false })
  if (!gl) return

  const vs = gl.createShader(gl.VERTEX_SHADER)!
  gl.shaderSource(vs, vertex)
  gl.compileShader(vs)

  const fs = gl.createShader(gl.FRAGMENT_SHADER)!
  gl.shaderSource(fs, fragment)
  gl.compileShader(fs)

  const prog = gl.createProgram()!
  gl.attachShader(prog, vs)
  gl.attachShader(prog, fs)
  gl.linkProgram(prog)
  gl.useProgram(prog)

  const buf = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buf)
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
    gl.STATIC_DRAW
  )

  const pos = gl.getAttribLocation(prog, 'a_position')
  gl.enableVertexAttribArray(pos)
  gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0)

  const uRes = gl.getUniformLocation(prog, 'u_resolution')
  const uTime = gl.getUniformLocation(prog, 'u_time')
  const uInt = gl.getUniformLocation(prog, 'u_intensity')
  const uThick = gl.getUniformLocation(prog, 'u_thickness')
  const uGrain = gl.getUniformLocation(prog, 'u_grain')
  const uMouse = gl.getUniformLocation(prog, 'u_mouse')
  const uMouseInf = gl.getUniformLocation(prog, 'u_mouseInfluence')

  const resize = () => {
    if (!canvas || !gl) return
    const rect = canvas.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.floor(rect.width * dpr)
    canvas.height = Math.floor(rect.height * dpr)
    gl.viewport(0, 0, canvas.width, canvas.height)
    gl.uniform2f(uRes, canvas.width, canvas.height)
  }

  resize()
  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(canvas)

  const startTime = performance.now()

  const render = (now: number) => {
    if (!gl) return

    // 鼠标平滑阻尼插值 (0.08)
    mouse.value[0] += (targetMouse.value[0] - mouse.value[0]) * 0.08
    mouse.value[1] += (targetMouse.value[1] - mouse.value[1]) * 0.08

    const elapsed = (now - startTime) * 0.001 * props.speed
    gl.uniform1f(uTime, elapsed)
    gl.uniform1f(uInt, props.intensity)
    gl.uniform1f(uThick, props.thickness)
    gl.uniform1f(uGrain, props.grain)
    gl.uniform2f(uMouse, mouse.value[0], mouse.value[1])
    gl.uniform1f(uMouseInf, props.interactive ? props.mouseInfluence : 0.0)

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    frameId = requestAnimationFrame(render)
  }

  frameId = requestAnimationFrame(render)
}

onMounted(() => {
  initRibbonShader()
})

onUnmounted(() => {
  cancelAnimationFrame(frameId)
  if (resizeObserver) resizeObserver.disconnect()
})
</script>
