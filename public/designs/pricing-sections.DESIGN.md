# Aura UI — Pricing Sections & Monetization Matrices DESIGN.md

> **Suite ID:** `pricing-sections`  
> **Count:** 12 Production Blocks  
> **Category:** Tiered Plans, Annual/Monthly Toggles, Lifetime Single Deals, Quota Sliders  
> **Target Framework:** Vue 3.5+, Tailwind CSS, VueUse

---

## 1. Domain Aesthetic & Purpose
High-conversion pricing matrices must balance trust, clarity, and visual incentive.
* Annual billing discount badges with spring scale transitions (`Save 20%`).
* Highlighted "Most Popular / Recommended" tier with BorderBeam glow and distinct elevation.
* Feature checklist with crisp emerald checkmarks and strikethrough unavailable options.

## 2. Palette & Tokens
* **Standard Tier Card**: `bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800`
* **Featured Tier Card**: `bg-gradient-to-b from-blue-500/10 via-zinc-900 to-zinc-900 border-2 border-blue-500 shadow-2xl`
* **Price Numbers**: `font-black text-4xl sm:text-5xl tracking-tight`
* **Toggle Pill**: `bg-zinc-100 dark:bg-zinc-800 p-1 rounded-full`

## 3. Recommended AI Prompt Formula
```markdown
@pricing-sections.DESIGN.md
Create a Vue 3 SFC component named "PricingBillingToggle.vue".
Requirements:
1. 3-tier card layout: Starter, Professional (Featured), and Enterprise.
2. Monthly/Annual toggle state that dynamically recalculates prices and highlights the annual savings badge.
3. Feature bullet points with Lucide Check icons.
4. One-click checkout CTA with active scale feedback.
```
