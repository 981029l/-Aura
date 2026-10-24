<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'
import ToggleSwitchMorph from '@/components/ui/ToggleSwitchMorph.vue'
</script>

<template>
  <div class="relative w-full overflow-hidden bg-white py-16 sm:py-24 dark:bg-zinc-950 transition-colors">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- 头部说明 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-xs font-semibold mb-4">
          <Sun class="w-3.5 h-3.5 text-amber-500" />
          <span>极简白昼 · 深邃暗夜</span>
          <Moon class="w-3.5 h-3.5 text-blue-400" />
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          深浅双模原生适配
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-zinc-800 to-blue-500 dark:from-amber-400 dark:via-zinc-200 dark:to-blue-400">
            光学级对比度平滑过渡
          </span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          严格遵循 WCAG AAA 无障碍色阶规范。无论是晨光清澈的清爽白昼，还是静谧专注的深空黑夜，全量动效组件均一键自适应。
        </p>
      </div>

      <!-- 双模对比展示台 -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
        <!-- 左侧：明亮模式微型舞台 -->
        <div class="lg:col-span-6 p-6 rounded-3xl border border-zinc-200 bg-zinc-50 text-zinc-900 shadow-xl text-left space-y-4">
          <div class="flex items-center justify-between text-xs font-mono font-bold text-zinc-500">
            <span class="flex items-center gap-1.5 text-amber-600">
              <Sun class="w-4 h-4" />
              CLEAN LIGHT MODE
            </span>
            <span>WCAG AAA 7:1</span>
          </div>
          <h3 class="text-xl font-black text-zinc-900">日光通透 · 清爽秩序</h3>
          <p class="text-xs text-zinc-600 leading-relaxed">
            极简的高对比度黑字与微阴影，适合长时间白天办公与数据报表密集审查。
          </p>
          <div class="p-3 rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center justify-between text-xs">
            <span class="font-medium">主色调色盘: Zinc 50 ~ 900</span>
            <span class="px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-bold text-[10px]">AURA LIGHT</span>
          </div>
        </div>

        <!-- 右侧：深色模式微型舞台 -->
        <div class="lg:col-span-6 p-6 rounded-3xl border border-zinc-800 bg-black text-zinc-100 shadow-2xl text-left space-y-4">
          <div class="flex items-center justify-between text-xs font-mono font-bold text-zinc-400">
            <span class="flex items-center gap-1.5 text-blue-400">
              <Moon class="w-4 h-4" />
              DEEP DARK MODE
            </span>
            <span>OLED 纯黑 0.00 NIT</span>
          </div>
          <h3 class="text-xl font-black text-white">暗夜深邃 · 沉浸专注</h3>
          <p class="text-xs text-zinc-400 leading-relaxed">
            微金属光晕与亚像素发光描边，专为极客开发者与夜间高强度编码打造。
          </p>
          <div class="p-3 rounded-xl bg-zinc-900 border border-zinc-800 shadow-sm flex items-center justify-between text-xs">
            <span class="font-medium text-zinc-300">主色调色盘: True Black & Cyan</span>
            <span class="px-2 py-0.5 rounded bg-blue-950 text-blue-300 font-bold text-[10px]">AURA DARK</span>
          </div>
        </div>
      </div>

      <!-- 拟态流体微触觉形态开关：集成 ToggleSwitchMorph 原子组件 -->
      <div class="mt-12 w-full flex justify-center">
        <ToggleSwitchMorph
          title="原生拟态日夜双态物理微形变开关"
          subtitle="水滴流动形变与触觉微震动"
          class="shadow-xl"
        />
      </div>
    </div>
  </div>
</template>
