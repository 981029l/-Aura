<template>
  <div
    class="w-full max-w-3xl mx-auto flex flex-col items-center select-none"
    :class="className"
  >
    <!-- Top Mode Switcher Tabs -->
    <div class="mb-5 flex items-center p-1 rounded-2xl bg-neutral-900/80 border border-white/10 backdrop-blur-md shadow-lg">
      <button
        type="button"
        class="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer"
        :class="activeTab === 'draw'
          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
          : 'text-neutral-400 hover:text-neutral-200 hover:bg-white/5'"
        @click="activeTab = 'draw'"
      >
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
        <span>✍️ 手写签名</span>
      </button>

      <button
        type="button"
        class="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer"
        :class="activeTab === 'generate'
          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
          : 'text-neutral-400 hover:text-neutral-200 hover:bg-white/5'"
        @click="handleSwitchToGenerate"
      >
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
        <span>✨ 输入名字生成</span>
      </button>
    </div>

    <!-- MAIN TAB 1: ✍️ 自由手写板 -->
    <div
      v-show="activeTab === 'draw'"
      class="w-full flex flex-col items-center"
    >
      <!-- Canvas Stage Card -->
      <div
        ref="canvasContainerRef"
        class="relative w-full aspect-[2/1] min-h-[260px] sm:min-h-[320px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-300"
        :class="canvasBgTheme === 'dark' ? 'bg-[#0b0c10]' : 'bg-[#fcfbf9]'"
        :style="canvasCardStyle"
      >
        <!-- Background Baseline / Contract Signature Guide -->
        <div class="pointer-events-none absolute inset-0 flex flex-col justify-between p-6 opacity-30 select-none">
          <div class="flex items-center justify-between text-[11px] font-mono" :class="canvasBgTheme === 'dark' ? 'text-neutral-500' : 'text-neutral-400'">
            <span>SIGNATURE PAD // 2048DPI HIGH-RES</span>
            <span>PRESS &amp; DRAW</span>
          </div>

          <div class="w-full flex flex-col gap-2">
            <div class="w-full border-b border-dashed" :class="canvasBgTheme === 'dark' ? 'border-white/10' : 'border-neutral-300'" />
            <div class="flex items-center justify-between text-[10px] font-mono tracking-wider" :class="canvasBgTheme === 'dark' ? 'text-neutral-600' : 'text-neutral-400'">
              <span>X ________________________________________________</span>
              <span>DATE: {{ currentDateStr }}</span>
            </div>
          </div>
        </div>

        <!-- Real Drawing Canvas -->
        <canvas
          ref="drawCanvasRef"
          class="absolute inset-0 w-full h-full touch-none"
          @pointerdown="handlePointerDown"
          @pointermove="handlePointerMove"
          @pointerup="handlePointerUp"
          @pointercancel="handlePointerUp"
          @pointerleave="handlePointerUp"
        />

        <!-- Empty Canvas Placeholder / Watermark Guide -->
        <div
          v-if="strokes.length === 0 && !isDrawing"
          class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300"
        >
          <div
            class="flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium backdrop-blur-md"
            :class="canvasBgTheme === 'dark' ? 'bg-neutral-900/60 border-white/10 text-neutral-400' : 'bg-white/80 border-neutral-200 text-neutral-500'"
          >
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>在这里用鼠标或手写笔签名</span>
          </div>
          <span class="mt-2 text-[11px] font-mono opacity-50" :class="canvasBgTheme === 'dark' ? 'text-neutral-500' : 'text-neutral-400'">
            笔画会根据书写速度自动调整粗细
          </span>
        </div>

        <!-- Replay Status Overlay -->
        <div
          v-if="isReplaying"
          class="pointer-events-none absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono backdrop-blur-md animate-pulse"
        >
          <span class="w-2 h-2 rounded-full bg-cyan-400" />
          <span>正在回放笔迹...</span>
        </div>
      </div>

      <!-- Freehand Tools & Action Ribbon -->
      <div class="mt-4 w-full flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-neutral-900/80 border border-white/10 backdrop-blur-md">
        <!-- Left: Tool & Thickness -->
        <div class="flex items-center gap-2 sm:gap-3 flex-wrap">
          <!-- Pen / Eraser Switch -->
          <div class="flex items-center p-0.5 rounded-xl bg-black/40 border border-white/5">
            <button
              type="button"
              class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer"
              :class="currentTool === 'pen' ? 'bg-white/15 text-white shadow-sm' : 'text-neutral-400 hover:text-white'"
              title="笔刷"
              @click="currentTool = 'pen'"
            >
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
              </svg>
              <span>笔刷</span>
            </button>
            <button
              type="button"
              class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer"
              :class="currentTool === 'eraser' ? 'bg-white/15 text-white shadow-sm' : 'text-neutral-400 hover:text-white'"
              title="橡皮擦"
              @click="currentTool = 'eraser'"
            >
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21" />
                <path d="M22 21H7" />
                <path d="m5 11 9 9" />
              </svg>
              <span>橡皮擦</span>
            </button>
          </div>

          <!-- Color Palette -->
          <div v-if="currentTool === 'pen'" class="flex items-center gap-1.5 pl-1 border-l border-white/10">
            <button
              v-for="c in colorOptions"
              :key="c.value"
              type="button"
              class="w-6 h-6 rounded-full transition-transform duration-150 cursor-pointer border flex items-center justify-center"
              :class="brushColor === c.value ? 'scale-110 ring-2 ring-white/50 border-white' : 'border-black/20 hover:scale-105'"
              :style="{ backgroundColor: c.value }"
              :title="c.label"
              @click="brushColor = c.value"
            >
              <span v-if="brushColor === c.value" class="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
            </button>
          </div>

          <!-- Pen Width Preset Pills -->
          <div class="flex items-center gap-1 pl-1 border-l border-white/10">
            <button
              v-for="w in widthOptions"
              :key="w.size"
              type="button"
              class="px-2 py-1 rounded-lg text-[11px] font-mono transition-colors cursor-pointer"
              :class="brushSize === w.size ? 'bg-white/15 text-cyan-300 font-bold' : 'text-neutral-400 hover:text-white'"
              @click="brushSize = w.size"
            >
              {{ w.label }}
            </button>
          </div>

          <!-- Background Paper Invert Toggle -->
          <button
            type="button"
            class="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer border border-white/5"
            :title="canvasBgTheme === 'dark' ? '切换为浅色背景' : '切换为深色背景'"
            @click="canvasBgTheme = canvasBgTheme === 'dark' ? 'light' : 'dark'"
          >
            <svg v-if="canvasBgTheme === 'dark'" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <svg v-else class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
        </div>

        <!-- Right: Actions (Undo, Replay, Clear, Export) -->
        <div class="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            class="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs text-neutral-300 hover:text-white hover:bg-white/5 border border-white/5 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
            :disabled="strokes.length === 0 || isReplaying"
            title="撤销上一笔"
            @click="handleUndo"
          >
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="1 4 1 10 7 10" />
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
            </svg>
            <span>撤销</span>
          </button>

          <button
            type="button"
            class="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs text-cyan-300 hover:text-cyan-200 hover:bg-cyan-500/10 border border-cyan-500/20 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
            :disabled="strokes.length === 0 || isReplaying"
            title="按书写顺序回放签名"
            @click="handleReplayStrokes"
          >
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            <span>回放</span>
          </button>

          <button
            type="button"
            class="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs text-rose-300 hover:text-rose-200 hover:bg-rose-500/10 border border-rose-500/20 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
            :disabled="strokes.length === 0 || isReplaying"
            title="清空画板"
            @click="handleClear"
          >
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
            <span>清屏</span>
          </button>

          <button
            type="button"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-md shadow-sky-500/25 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
            :disabled="strokes.length === 0 || isReplaying"
            title="导出透明背景的 PNG 图片"
            @click="handleExportPNG"
          >
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>导出 PNG</span>
          </button>
        </div>
      </div>
    </div>

    <!-- MAIN TAB 2: ✨ 文本书法动效生成 -->
    <div
      v-show="activeTab === 'generate'"
      class="w-full flex flex-col items-center"
    >
      <!-- Interactive Name Input & Quick Tag Cloud -->
      <div class="w-full mb-4 p-4 rounded-3xl bg-neutral-900/80 border border-white/10 backdrop-blur-md shadow-xl flex flex-col gap-3">
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <!-- Text Input -->
          <div class="relative flex-1">
            <input
              v-model="customInputText"
              type="text"
              maxlength="24"
              placeholder="输入中文或英文名字"
              class="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400 transition-all font-sans"
              @keydown.enter="triggerGenerateAnimation"
            >
            <svg class="absolute left-3 top-3 w-4 h-4 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
          </div>

          <!-- Action Replay / Trigger Button -->
          <button
            type="button"
            class="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            @click="triggerGenerateAnimation"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
            </svg>
            <span>生成签名</span>
          </button>
        </div>

        <!-- Quick Presets -->
        <div class="flex items-center gap-2 flex-wrap text-xs text-neutral-400">
          <span class="text-[11px] font-mono text-neutral-500">示例：</span>
          <button
            v-for="name in presetNames"
            :key="name"
            type="button"
            class="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/15 border border-white/5 text-neutral-300 hover:text-white transition-colors cursor-pointer text-xs"
            @click="selectPresetName(name)"
          >
            {{ name }}
          </button>
        </div>
      </div>

      <!-- Calligraphy Canvas Stage -->
      <div
        class="relative w-full aspect-[2/1] min-h-[260px] sm:min-h-[320px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#0b0c10] to-[#12141a] group cursor-pointer"
        :title="'点击重新播放'"
        @click="triggerGenerateAnimation"
      >
        <!-- Atmospheric Grid & Contract Signature Backdrop -->
        <div class="pointer-events-none absolute inset-0 opacity-20">
          <div class="w-full h-full bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div class="pointer-events-none absolute top-4 left-6 flex items-center gap-2 text-[10px] font-mono text-neutral-500">
          <span class="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>CALLIGRAPHIC SYNTHESIZER // {{ isChineseMode ? 'EAST ASIAN SCRIPT' : 'CURSIVE LATIN' }}</span>
        </div>

        <!-- Master Signature Drawing Area -->
        <div class="relative w-full max-w-xl h-40 flex items-center justify-center">
          <!-- 1. Dedicated English Masterpiece SVG (if text is Componentry or classic Latin) -->
          <svg
            v-if="isClassicLatin"
            :key="`classic-latin-${generateKey}`"
            :viewBox="`0 0 ${svgWidth} 100`"
            class="h-24 sm:h-28 w-auto overflow-visible select-none pointer-events-none"
          >
            <path
              v-for="(p, idx) in signaturePaths"
              :key="`${p}-${generateKey}`"
              :d="p"
              fill="none"
              :stroke="textInkColor"
              stroke-width="2.6"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="signature-path"
              :style="{
                animationDuration: `${animationDuration}s`,
                animationDelay: `${idx * 0.1}s`,
              }"
            />
          </svg>

          <!-- 2. Dynamic Universal Chinese/English Stroke Reveal Engine -->
          <div
            v-else
            :key="`dynamic-${generateKey}`"
            class="relative flex items-center justify-center"
          >
            <!-- Calligraphy Text Display -->
            <div
              class="text-4xl sm:text-6xl md:text-7xl tracking-wider select-none font-medium transition-all duration-300"
              :style="textDisplayStyle"
            >
              <span
                v-for="(char, cIdx) in displayTextChars"
                :key="`${cIdx}-${char}-${generateKey}`"
                class="inline-block transform will-change-transform char-write-anim"
                :style="{
                  animationDelay: `${cIdx * (animationDuration / Math.max(displayTextChars.length, 1))}s`,
                  animationDuration: `${Math.max(0.4, animationDuration * 0.6)}s`,
                }"
              >
                {{ char }}
              </span>
            </div>

            <!-- Flowing Ink Flourish Underline -->
            <svg
              class="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-6 overflow-visible pointer-events-none"
              viewBox="0 0 260 24"
            >
              <path
                d="M 10 12 Q 130 20 250 8"
                fill="none"
                :stroke="textInkColor"
                stroke-width="2"
                stroke-linecap="round"
                class="signature-path"
                :style="{
                  animationDelay: `${animationDuration * 0.85}s`,
                  animationDuration: '0.6s',
                }"
              />
            </svg>
          </div>

          <!-- Traditional Red Vermilion Artist Seal / Stamp -->
          <div
            class="absolute right-2 sm:right-6 bottom-2 w-9 h-9 sm:w-11 sm:h-11 rounded-md border-2 border-rose-600/80 bg-rose-950/40 backdrop-blur-sm flex items-center justify-center text-rose-500 font-bold select-none shadow-md shadow-rose-900/30 transform rotate-6 transition-all duration-700"
            :style="{
              opacity: isFinishedAnimation ? 0.95 : 0.2,
              transform: isFinishedAnimation ? 'rotate(6deg) scale(1)' : 'rotate(-12deg) scale(0.8)',
            }"
          >
            <div class="text-[9px] sm:text-[11px] leading-tight font-serif text-center">
              手迹<br>之印
            </div>
          </div>
        </div>

        <!-- Dynamic Date & Replay Badge at Bottom -->
        <div class="mt-8 flex items-center justify-between w-full max-w-lg px-4 border-t border-white/5 pt-3 text-[11px] font-mono text-neutral-500">
          <div class="flex items-center gap-2">
            <span>SIGNATURE TOKEN:</span>
            <span class="text-cyan-400 font-bold tracking-wider">#{{ generateKey.toString(16).toUpperCase() }}</span>
          </div>

          <div class="flex items-center gap-1.5 text-neutral-400 group-hover:text-cyan-300 transition-colors">
            <svg class="w-3.5 h-3.5 animate-spin" style="animation-duration: 4s;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
            </svg>
            <span>点击画面重新播放</span>
          </div>
        </div>
      </div>

      <!-- Text Animation Control Bar -->
      <div class="mt-4 w-full flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-neutral-900/80 border border-white/10 backdrop-blur-md">
        <!-- Ink Color Selector -->
        <div class="flex items-center gap-2">
          <span class="text-xs text-neutral-400 font-mono">颜色：</span>
          <div class="flex items-center gap-1.5">
            <button
              v-for="c in textInkOptions"
              :key="c.value"
              type="button"
              class="w-6 h-6 rounded-full transition-transform duration-150 cursor-pointer border flex items-center justify-center"
              :class="textInkColor === c.value ? 'scale-110 ring-2 ring-white/50 border-white' : 'border-black/20 hover:scale-105'"
              :style="{ backgroundColor: c.value }"
              :title="c.label"
              @click="textInkColor = c.value"
            >
              <span v-if="textInkColor === c.value" class="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
            </button>
          </div>
        </div>

        <!-- Duration Speed Select -->
        <div class="flex items-center gap-2">
          <span class="text-xs text-neutral-400 font-mono">书写速度：</span>
          <div class="flex items-center gap-1 p-0.5 rounded-xl bg-black/40 border border-white/5">
            <button
              v-for="s in speedOptions"
              :key="s.value"
              type="button"
              class="px-2 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer"
              :class="animationDuration === s.value ? 'bg-white/15 text-cyan-300 font-bold' : 'text-neutral-400 hover:text-white'"
              @click="animationDuration = s.value"
            >
              {{ s.label }}
            </button>
          </div>
        </div>

        <!-- Copy / Quick Apply -->
        <div class="flex items-center gap-2">
          <button
            type="button"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/5 border border-white/5 transition-colors cursor-pointer"
            @click="copySignatureText"
          >
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            <span>{{ isCopied ? '已复制' : '复制名字' }}</span>
          </button>

          <button
            type="button"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-cyan-300 hover:text-cyan-200 hover:bg-cyan-500/10 border border-cyan-500/20 transition-colors cursor-pointer"
            @click="triggerGenerateAnimation"
          >
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            <span>重播动画</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

interface Props {
  text?: string
  color?: string
  duration?: number
  delay?: number
  defaultTab?: 'draw' | 'generate'
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  text: 'Aura UI',
  color: '#38bdf8',
  duration: 1.4,
  delay: 0.1,
  defaultTab: 'draw',
  className: '',
})

// Tab State
const activeTab = ref<'draw' | 'generate'>(props.defaultTab)

// --- TAB 1: ✍️ 自由手写板状态与算法 ---
interface Point {
  x: number
  y: number
  time: number
  pressure: number
}

interface Stroke {
  points: Point[]
  color: string
  size: number
  tool: 'pen' | 'eraser'
}

const canvasContainerRef = ref<HTMLDivElement | null>(null)
const drawCanvasRef = ref<HTMLCanvasElement | null>(null)

const currentTool = ref<'pen' | 'eraser'>('pen')
const brushColor = ref(props.color || '#38bdf8')
const brushSize = ref(3.5)
const canvasBgTheme = ref<'dark' | 'light'>('dark')

const canvasCardStyle = computed(() => ({
  cursor: currentTool.value === 'eraser' ? 'crosshair' : 'crosshair',
}))

const strokes = ref<Stroke[]>([])
const currentStroke = ref<Stroke | null>(null)
const isDrawing = ref(false)
const isReplaying = ref(false)

const colorOptions = [
  { label: '青色', value: '#38bdf8' },
  { label: '蓝色', value: '#3b82f6' },
  { label: '白色', value: '#f8fafc' },
  { label: '红色', value: '#ef4444' },
  { label: '绿色', value: '#10b981' },
]

const widthOptions = [
  { label: '细', size: 2.2 },
  { label: '中', size: 3.8 },
  { label: '粗', size: 6.5 },
]

const currentDateStr = computed(() => {
  const d = new Date()
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
})

let dpr = 1
let resizeObserver: ResizeObserver | null = null

function initCanvasSize() {
  const canvas = drawCanvasRef.value
  const container = canvasContainerRef.value
  if (!canvas || !container) return

  dpr = window.devicePixelRatio || 1
  const rect = container.getBoundingClientRect()
  if (rect.width === 0 || rect.height === 0) return

  canvas.width = Math.floor(rect.width * dpr)
  canvas.height = Math.floor(rect.height * dpr)

  redrawAllStrokes()
}

function redrawAllStrokes() {
  const canvas = drawCanvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  for (const s of strokes.value) {
    drawSingleStroke(ctx, s)
  }
}

// Catmull-Rom & Quadratic Bezier Smoothing with Velocity-Adaptive Width
function drawSingleStroke(ctx: CanvasRenderingContext2D, stroke: Stroke) {
  if (stroke.points.length < 2) return

  ctx.save()
  if (stroke.tool === 'eraser') {
    ctx.globalCompositeOperation = 'destination-out'
    ctx.strokeStyle = 'rgba(0,0,0,1)'
  } else {
    ctx.globalCompositeOperation = 'source-over'
    // In light background, adapt light/white ink to deep black
    if (canvasBgTheme.value === 'light' && stroke.color === '#f8fafc') {
      ctx.strokeStyle = '#0f172a'
    } else {
      ctx.strokeStyle = stroke.color
    }
  }

  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'

  const pts = stroke.points
  for (let i = 1; i < pts.length; i++) {
    const p1 = pts[i - 1]!
    const p2 = pts[i]!

    // Calculate velocity for dynamic pressure simulation
    const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y)
    const timeDelta = Math.max(1, p2.time - p1.time)
    const velocity = dist / timeDelta

    // Velocity-based dynamic stroke thickness: fast = fine stroke, slow = rich ink
    const dynamicFactor = Math.max(0.4, Math.min(1.8, 1.4 - velocity * 0.35))
    const lineWidth = stroke.tool === 'eraser'
      ? stroke.size * 5 * dpr
      : stroke.size * dynamicFactor * dpr

    ctx.lineWidth = lineWidth

    ctx.beginPath()
    ctx.moveTo(p1.x * dpr, p1.y * dpr)

    if (i < pts.length - 1) {
      const p3 = pts[i + 1]!
      const midX = (p2.x + p3.x) / 2
      const midY = (p2.y + p3.y) / 2
      ctx.quadraticCurveTo(p2.x * dpr, p2.y * dpr, midX * dpr, midY * dpr)
    } else {
      ctx.lineTo(p2.x * dpr, p2.y * dpr)
    }

    ctx.stroke()
  }

  ctx.restore()
}

function handlePointerDown(e: PointerEvent) {
  if (isReplaying.value) return
  const canvas = drawCanvasRef.value
  if (!canvas) return

  canvas.setPointerCapture(e.pointerId)
  isDrawing.value = true

  const rect = canvas.getBoundingClientRect()
  const pt: Point = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
    time: performance.now(),
    pressure: e.pressure || 0.5,
  }

  currentStroke.value = {
    points: [pt],
    color: brushColor.value,
    size: brushSize.value,
    tool: currentTool.value,
  }
}

function handlePointerMove(e: PointerEvent) {
  if (!isDrawing.value || !currentStroke.value) return
  const canvas = drawCanvasRef.value
  if (!canvas) return

  const rect = canvas.getBoundingClientRect()
  const pt: Point = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
    time: performance.now(),
    pressure: e.pressure || 0.5,
  }

  currentStroke.value.points.push(pt)

  // Direct fast segment render
  const ctx = canvas.getContext('2d')
  if (ctx && currentStroke.value.points.length >= 2) {
    const pts = currentStroke.value.points
    const p1 = pts[pts.length - 2]!
    const p2 = pt

    ctx.save()
    if (currentStroke.value.tool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out'
      ctx.lineWidth = currentStroke.value.size * 5 * dpr
    } else {
      ctx.globalCompositeOperation = 'source-over'
      ctx.strokeStyle = (canvasBgTheme.value === 'light' && currentStroke.value.color === '#f8fafc')
        ? '#0f172a'
        : currentStroke.value.color
      const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y)
      const timeDelta = Math.max(1, p2.time - p1.time)
      const velocity = dist / timeDelta
      const dynamicFactor = Math.max(0.4, Math.min(1.8, 1.4 - velocity * 0.35))
      ctx.lineWidth = currentStroke.value.size * dynamicFactor * dpr
    }

    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.beginPath()
    ctx.moveTo(p1.x * dpr, p1.y * dpr)
    ctx.lineTo(p2.x * dpr, p2.y * dpr)
    ctx.stroke()
    ctx.restore()
  }
}

function handlePointerUp() {
  if (!isDrawing.value) return
  isDrawing.value = false

  if (currentStroke.value && currentStroke.value.points.length > 1) {
    strokes.value.push(currentStroke.value)
  }
  currentStroke.value = null
}

function handleUndo() {
  if (strokes.value.length === 0 || isReplaying.value) return
  strokes.value.pop()
  redrawAllStrokes()
}

function handleClear() {
  if (isReplaying.value) return
  strokes.value = []
  redrawAllStrokes()
}

// Replay user's strokes with natural temporal intervals
let replayRafId = 0
function handleReplayStrokes() {
  if (strokes.value.length === 0 || isReplaying.value) return
  isReplaying.value = true

  const savedStrokes = JSON.parse(JSON.stringify(strokes.value)) as Stroke[]
  const canvas = drawCanvasRef.value
  if (!canvas) {
    isReplaying.value = false
    return
  }
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    isReplaying.value = false
    return
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  let sIdx = 0
  let pIdx = 1

  function stepReplay() {
    if (sIdx >= savedStrokes.length) {
      isReplaying.value = false
      return
    }

    const s = savedStrokes[sIdx]!
    if (pIdx < s.points.length) {
      const sliceStroke: Stroke = {
        ...s,
        points: s.points.slice(0, pIdx + 1),
      }
      drawSingleStroke(ctx!, sliceStroke)
      pIdx += 2 // Speed up playback slightly for snappy satisfaction
      replayRafId = requestAnimationFrame(stepReplay)
    } else {
      sIdx++
      pIdx = 1
      replayRafId = requestAnimationFrame(stepReplay)
    }
  }

  replayRafId = requestAnimationFrame(stepReplay)
}

function handleExportPNG() {
  const canvas = drawCanvasRef.value
  if (!canvas || strokes.value.length === 0) return

  // Export clean transparent high-resolution PNG
  const link = document.createElement('a')
  link.download = `signature-${Date.now()}.png`
  link.href = canvas.toDataURL('image/png')
  link.click()
}

// --- TAB 2: ✨ 文本书法动效生成状态与算法 ---
const customInputText = ref(props.text || 'Aura UI')
const textInkColor = ref(props.color || '#38bdf8')
const animationDuration = ref(props.duration || 1.4)
const generateKey = ref(0)
const isFinishedAnimation = ref(false)
const isCopied = ref(false)

const presetNames = ['苏轼', '王羲之', 'Aura UI', 'Alex Morgan', '林徽因', '星辰大海']

const textInkOptions = [
  { label: '青色', value: '#38bdf8' },
  { label: '白色', value: '#f4f4f5' },
  { label: '红色', value: '#ef4444' },
  { label: '金色', value: '#f59e0b' },
  { label: '紫色', value: '#a855f7' },
]

const speedOptions = [
  { label: '0.8x 慢', value: 2.2 },
  { label: '1.0x 正常', value: 1.4 },
  { label: '1.5x 快', value: 0.9 },
]

const isChineseMode = computed(() => {
  return /[\u4e00-\u9fa5]/.test(customInputText.value)
})

const isClassicLatin = computed(() => {
  return customInputText.value.trim().toLowerCase() === 'aura ui' || customInputText.value.trim().toLowerCase() === 'aura'
})

const displayTextChars = computed(() => {
  return customInputText.value ? customInputText.value.split('') : ['手', '写', '签', '名']
})

const textDisplayStyle = computed(() => ({
  color: textInkColor.value,
  fontFamily: isChineseMode.value
    ? "'Kaiti', 'STKaiti', 'KaiTi_GB2312', 'Ma Shan Zheng', 'PingFang SC', cursive, serif"
    : "'Brush Script MT', 'Segoe Script', 'Caveat', cursive, sans-serif",
  letterSpacing: isChineseMode.value ? '0.18em' : '0.04em',
  textShadow: `0 0 20px ${textInkColor.value}40`,
  filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.4))',
}))

function selectPresetName(name: string) {
  customInputText.value = name
  triggerGenerateAnimation()
}

function triggerGenerateAnimation() {
  generateKey.value++
  isFinishedAnimation.value = false
  setTimeout(() => {
    isFinishedAnimation.value = true
  }, animationDuration.value * 1000 + 400)
}

function handleSwitchToGenerate() {
  activeTab.value = 'generate'
  triggerGenerateAnimation()
}

function copySignatureText() {
  navigator.clipboard.writeText(customInputText.value).then(() => {
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 2000)
  })
}

// Classic Cursive Latin Path flourishes for "Componentry"
const signaturePaths = [
  // Cursive C flourish
  'M 20 65 C 10 40, 25 15, 50 20 C 65 24, 60 50, 45 60 C 35 68, 50 70, 70 58',
  // o - m loop
  'M 70 58 C 75 50, 85 50, 88 56 C 92 64, 82 66, 78 60 C 82 52, 92 50, 100 58',
  // m - p loop
  'M 100 58 C 105 52, 112 52, 115 58 C 118 52, 125 52, 128 58 L 132 82 M 130 62 C 135 55, 145 55, 142 65 C 138 72, 130 68, 136 60',
  // o - n - e
  'M 142 62 C 148 55, 158 55, 162 62 C 168 55, 175 55, 178 62 C 182 55, 192 55, 195 62',
  // n - t - r - y
  'M 195 62 L 202 35 M 198 46 L 208 46 M 202 62 C 208 55, 215 55, 220 62 C 224 55, 230 55, 232 62 C 235 55, 242 55, 245 65 L 240 85 C 235 95, 225 90, 232 80',
  // Underline dynamic flourish
  'M 30 85 C 80 82, 160 84, 260 75 C 275 73, 250 88, 200 92',
]
const svgWidth = computed(() => 290)

onMounted(() => {
  nextTick(() => {
    initCanvasSize()
    if (canvasContainerRef.value) {
      resizeObserver = new ResizeObserver(() => {
        initCanvasSize()
      })
      resizeObserver.observe(canvasContainerRef.value)
    }
  })
})

onUnmounted(() => {
  if (resizeObserver) resizeObserver.disconnect()
  cancelAnimationFrame(replayRafId)
})
</script>

<style scoped>
@keyframes writeSignature {
  0% {
    stroke-dashoffset: 650;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

.signature-path {
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  animation-name: writeSignature;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes charWriteReveal {
  0% {
    opacity: 0;
    filter: blur(8px);
    transform: scale(0.7) translateY(12px) skewX(-10deg);
  }
  50% {
    opacity: 0.8;
    filter: blur(2px);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: scale(1) translateY(0) skewX(0);
  }
}

.char-write-anim {
  opacity: 0;
  animation-name: charWriteReveal;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
}
</style>
