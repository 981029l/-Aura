# Aura UI — Universal DESIGN.md for AI Coding Agents

> **File:** `DESIGN.md` (or `.cursorrules` / `.claude/design.md`)  
> **Target Framework:** Vue 3.5+, TypeScript, Tailwind CSS v3/v4, VueUse  
> **Inspiration & Aesthetic:** Linear, Supahero, Vercel, Stripe, Raycast  
> **Source Registry:** https://auraui.lvky.cn

---

## 1. System Persona & Aesthetic Philosophy

When generating frontend UI or landing page components for this project, you are an **Elite Vue 3 Interface Designer & Motion Engineer**.

* **No Generic "AI Templates"**: Avoid centered purple-gradient blobs, boring Bootstrap-like cards, and low-contrast grey-on-grey text.
* **Precision Over Fluff**: Interfaces must feel sharp, tactile, engineered, and intentional. Every pixel, border, and transition has a purpose.
* **Native Vue 3 SFC**: Everything is a self-contained Single File Component (`.vue`) utilizing `<script setup lang="ts">`. Never use legacy Options API.
* **Copy-Paste Zero Dependency**: Rely exclusively on standard Tailwind CSS, `@vueuse/core`, `clsx`, `tailwind-merge`, and `lucide-vue-next`. Do not invent uninstalled npm packages.

---

## 2. Design Tokens

### A. Color Palette (Dual-Theme Standard)

| Token Role | Light Mode | Dark Mode (Primary) | Usage Notes |
| :--- | :--- | :--- | :--- |
| **Canvas / Background** | `bg-zinc-50` / `bg-white` | `bg-zinc-950` / `bg-black` | Never pitch black for nested cards |
| **Card Surface** | `bg-white/90` | `bg-zinc-900/90` | Semi-transparent with backdrop blur |
| **Elevated Surface** | `bg-zinc-100` | `bg-zinc-800/80` | Popovers, active pills, badges |
| **Border (Subtle)** | `border-zinc-200/80` | `border-zinc-800/80` | Standard card and container borders |
| **Border (Highlight)**| `border-blue-500/50` | `border-blue-400/50` | Hover states, focused inputs |
| **Text Primary** | `text-zinc-950` | `text-zinc-50` | Headings, bold stat values |
| **Text Secondary** | `text-zinc-600` | `text-zinc-400` | Paragraphs, descriptions |
| **Text Muted / Mono** | `text-zinc-400` | `text-zinc-500` | Timestamps, tags, code prefixes |

#### Accent Colors (Semantic & Intentional)
* **Electric Blue** (`#2563eb`, `blue-600`): Primary call-to-actions, links, active tab indicator.
* **Neon Emerald** (`#10b981`, `emerald-500`): Live status dots, successful runs, AI stream indicators.
* **Cyber Violet** (`#8b5cf6`, `purple-500`): AI reasoning tokens, prompt engineering tags.
* **Warm Amber** (`#f59e0b`, `amber-500`): Warnings, quota limits, premium features.

### B. Typography Scales

* **Display Headings**: `text-4xl sm:text-6xl font-black tracking-tight leading-[1.12] [text-wrap:balance]`
* **Section Titles**: `text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50`
* **Card Titles**: `text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100`
* **Body**: `text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400`
* **Telemetry & Code**: `font-mono text-xs sm:text-sm tracking-tight` (use JetBrains Mono / Fira Code)

### C. Container & Border Radius Rules

* **Page Hero Containers**: `rounded-3xl` (24px)
* **Feature Cards / Bento Grid**: `rounded-2xl` (16px)
* **Buttons / Inputs / Pills**: `rounded-xl` (12px)
* **Badges / Micro Tags**: `rounded-md` (6px) or `rounded-full` (pills)

---

## 3. Motion & Micro-Animation Rules

1. **Active Spring Transitions**:
   * All interactive elements must have `transition-all duration-200 ease-out`.
   * Buttons must have `active:scale-95` tactile click feedback.
   * Cards must have `hover:scale-[1.01]` or `hover:-translate-y-1` subtle lifts.
2. **Glowing Borders (BorderBeam)**:
   * Key conversion cards or AI consoles should feature an animated border beam running along the perimeter to convey real-time vitality.
3. **Pulsing Status Dots**:
   * Any live AI status or WebSocket connection must use:
     ```html
     <span class="relative flex h-2 w-2">
       <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
       <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
     </span>
     ```
4. **Smooth Loading Skeleton**:
   * Before async data loads, pulse with `animate-pulse bg-zinc-200 dark:bg-zinc-800/60 rounded-xl`.

---

## 4. Component Construction Rules for AI Agents

When writing a Vue 3 component for this project, you must adhere strictly to:

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'
import { ArrowRight, Sparkles } from 'lucide-vue-next'

// 1. Strict Typed Props with Defaults
interface Props {
  title?: string
  active?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Default Title',
  active: false,
})

// 2. Strict Emits
const emit = defineEmits<{
  (e: 'action', id: string): void
}>()
</script>

<template>
  <div class="relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/90 p-6 shadow-md transition-all duration-300 hover:border-blue-500/40 hover:shadow-xl dark:border-zinc-800/80 dark:bg-zinc-900/90">
    <!-- Component Body -->
  </div>
</template>
```

---

## 5. Explicit "Do's and Don'ts"

### ❌ DO NOT:
* **DO NOT** use inline CSS styles (`style="..."`) when Tailwind utility classes suffice.
* **DO NOT** use unescaped arbitrary HTML characters that break Vue compilation.
* **DO NOT** hardcode fixed dimensions like `width: 800px; height: 600px;` that break mobile screens. Always use responsive classes (`w-full max-w-4xl`).
* **DO NOT** use pure black `#000000` text on pure white `#ffffff` without intermediate tonal relief. Use `zinc-900` or `zinc-950`.
* **DO NOT** import Framer Motion or React hooks! This is a pure Vue 3 project using VueUse and CSS animations.

###  ALWAYS DO:
* **ALWAYS** support dark mode using the `dark:` variant on every color utility.
* **ALWAYS** ensure touch targets are at least 44x44px (`min-h-[44px]` or `p-2.5`) on clickable buttons.
* **ALWAYS** provide graceful text truncation (`truncate`, `line-clamp-2`) for user-generated or dynamic strings.
* **ALWAYS** add `aria-label` or semantic tags (`<button type="button">`, `<nav>`, `<aside>`) for accessibility.

---

## 6. How to instruct your AI Agent with this file

* **In Cursor**: In `.cursorrules` or mention `@DESIGN.md` in chat:
  > *"@DESIGN.md Build an AI model evaluation arena block in Vue 3 that lets users compare responses from two LLMs side-by-side with latency and token counters."*
* **In Claude Code / Antigravity**:
  > *"Read DESIGN.md in the project root. Build a SaaS pricing comparison table matching the exact tokens, typography, and motion rules."*
