# Aura UI — Feature Sections & Bento Grids DESIGN.md

> **Suite ID:** `feature-sections`  
> **Count:** 16 Production Blocks  
> **Category:** Bento Grids, Interactive Product Tours, Sticky Scroll Timelines, Developer Pitch  
> **Target Framework:** Vue 3.5+, Tailwind CSS, VueUse

---

## 1. Domain Aesthetic & Purpose
Feature showcases must convey product power through structured storytelling rather than text walls.
* Bento Grid layouts (asymmetric 4-column or 3-column cells).
* Spotlight cursor tracking and interactive micro-demos embedded directly into cards.
* Sticky scroll progress navigation for step-by-step product narratives.

## 2. Palette & Tokens
* **Bento Card Base**: `rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900 overflow-hidden`
* **Card Glow**: `pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity`
* **Feature Micro-Tags**: `font-mono text-[10px] uppercase tracking-wider text-blue-600 dark:text-blue-400`

## 3. Recommended AI Prompt Formula
```markdown
@feature-sections.DESIGN.md
Create a Vue 3 SFC component named "FeaturesBentoGrid.vue".
Requirements:
1. Bento layout containing 4 asymmetrical cards (one 2-column hero card, two 1-column cards, one full-width banner).
2. Live interactive elements inside each card (e.g. mini chart, copy snippet, glowing icon).
3. Smooth hover border highlights and cursor light tracking.
```
