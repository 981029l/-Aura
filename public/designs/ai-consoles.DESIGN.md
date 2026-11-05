# Aura UI — AI Consoles & Agent Workspaces DESIGN.md

> **Suite ID:** `ai-consoles`  
> **Count:** 16 Production Blocks  
> **Category:** Multi-Agent Orchestration, LLM Arena, RAG Chunk Inspector, Prompt Engineering  
> **Target Framework:** Vue 3.5+, Tailwind CSS, VueUse

---

## 1. Domain Aesthetic & Purpose
This design system governs high-density, mission-critical AI applications. The visual tone must feel like a NASA flight console mixed with cyberpunk precision:
* Deep charcoal & obsidian background (`bg-zinc-950`).
* Real-time telemetry in monospaced typography (`font-mono text-xs`).
* Status indicators using live green/emerald pulses (`bg-emerald-400 animate-pulse`).
* Glassmorphic command palettes and token usage bars.

## 2. Palette & Tokens
* **Workspace Canvas**: `bg-zinc-950 dark:bg-black`
* **Agent Cards**: `bg-zinc-900/90 border border-zinc-800/80`
* **Prompt Inputs**: `bg-zinc-950/80 border border-zinc-700/80 focus:border-blue-500`
* **Token Metrics**: Violet (`text-purple-400 bg-purple-500/10`), Emerald (`text-emerald-400 bg-emerald-500/10`)
* **Thinking/Reasoning State**: Frosted accordion with glowing left accent bar (`border-l-2 border-purple-500`)

## 3. Recommended AI Prompt Formula
```markdown
@ai-consoles.DESIGN.md
Create a Vue 3 SFC component named "AiPromptStudio.vue".
Requirements:
1. Two-column split layout: Left side prompt editor with system prompt and user template; right side live stream generation preview.
2. Metrics bar showing latency (ms), token/sec, and temperature slider.
3. Dark mode by default with glowing emerald badge indicating model status (e.g., 'gpt-4o · Active').
4. Fully interactive with typed reactive states.
```
