const e=`<script setup lang="ts">
import { ref } from 'vue'
import { Play, X, Video } from 'lucide-vue-next'

interface VideoTestimonial {
  id: string
  client: string
  person: string
  role: string
  duration: string
  headline: string
  gradient: string
}

const videos: VideoTestimonial[] = [
  {
    id: 'v1',
    client: 'Linear Ecosystem',
    person: 'Karri Saarinen',
    role: 'Co-founder & Designer',
    duration: '02:15',
    headline: '如何以纯粹的动效建立极客产品的品牌心智',
    gradient: 'from-blue-900 via-indigo-950 to-black',
  },
  {
    id: 'v2',
    client: 'Supabase Data',
    person: 'Paul Copplestone',
    role: 'CEO & Co-founder',
    duration: '01:48',
    headline: '从 0 到 1 打造高吞吐实时控制台的前端秘诀',
    gradient: 'from-emerald-950 via-teal-950 to-black',
  },
  {
    id: 'v3',
    client: 'Resend Email',
    person: 'Zeno Rocha',
    role: 'Founder & CEO',
    duration: '03:04',
    headline: '极简无衬线排版与微交互如何驱动自传播',
    gradient: 'from-purple-950 via-zinc-950 to-black',
  },
]

const activeVideo = ref<VideoTestimonial | null>(null)

function openModal(v: VideoTestimonial) {
  activeVideo.value = v
}

function closeModal() {
  activeVideo.value = null
}
<\/script>

<template>
  <div class="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-24 dark:bg-black transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
          <Video class="w-3.5 h-3.5" />
          <span>真实客户专访 · 4K 视频案例</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          独家实操专访
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            聆听创始团队的技术选型思考
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          点击任意视频卡片，即可观看来自硅谷知名创始团队的深入访谈与架构剖析。
        </p>
      </div>

      <!-- 视频三列卡片网格 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
        <div
          v-for="v in videos"
          :key="v.id"
          @click="openModal(v)"
          class="group relative rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
        >
          <!-- 视频封面卡 -->
          <div :class="['relative aspect-video w-full bg-gradient-to-tr p-4 flex items-center justify-center overflow-hidden', v.gradient]">
            <!-- 播放圆形按键 -->
            <div class="w-14 h-14 rounded-full bg-white/20 border border-white/30 backdrop-blur-md text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300">
              <Play class="w-6 h-6 ml-0.5 fill-white" />
            </div>

            <!-- 时长标签 -->
            <div class="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/60 text-white text-[10px] font-mono backdrop-blur-sm">
              {{ v.duration }}
            </div>
          </div>

          <!-- 卡片文案信息 -->
          <div class="p-6">
            <span class="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              {{ v.client }}
            </span>
            <h3 class="text-sm font-bold text-zinc-900 dark:text-white mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {{ v.headline }}
            </h3>
            <div class="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500">
              <span class="font-semibold text-zinc-800 dark:text-zinc-200">{{ v.person }}</span>
              <span>{{ v.role }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 视频播放模态弹窗 -->
      <Teleport to="body">
        <div
          v-if="activeVideo"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
          @click.self="closeModal"
        >
          <div class="relative w-full max-w-4xl rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden text-left">
            <div class="flex items-center justify-between px-4 py-3 border-b border-zinc-800 text-zinc-300">
              <span class="text-xs font-mono font-bold">{{ activeVideo.client }} · 独家视频访谈</span>
              <button @click="closeModal" class="p-1 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white">
                <X class="w-5 h-5" />
              </button>
            </div>
            <div class="aspect-video w-full bg-black flex flex-col items-center justify-center p-8 text-center">
              <div class="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center mb-4">
                <Play class="w-8 h-8 ml-1 fill-blue-400" />
              </div>
              <h3 class="text-lg font-bold text-white">{{ activeVideo.headline }}</h3>
              <p class="text-xs text-zinc-400 mt-2">{{ activeVideo.person }} · {{ activeVideo.role }}</p>
            </div>
          </div>
        </div>
      </Teleport>
    </div>
  </div>
</template>
`;export{e as default};
