# Aura UI — Hero Sections & Facade Showcases DESIGN.md

> **Suite ID:** `hero-sections`  
> **Count:** 16 Production Blocks  
> **Category:** High-Impact Viewports, 3D Retro Grids, Terminal Emulators, Animated Badges  
> **Target Framework:** Vue 3.5+, Tailwind CSS, VueUse

---

## 1. Domain Aesthetic & Purpose
Hero sections are the digital flagship of any modern web product. They must capture attention within 3 seconds without feeling noisy or slow.
* 16:10 aspect ratio or framed application mockups.
* RetroGrid perspective depth (`RetroGrid.vue`).
* Floating mascot / badges with micro-oscillations.
* Strong typographic hierarchy: H1 balanced display titles + subtle action pills.

## 2. Palette & Tokens
* **Hero Section Backing**: `relative overflow-hidden bg-white dark:bg-black`
* **Glow Gradients**: `from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent`
* **CTA Button**: `ShimmerButton` with rotating perimeter light or deep-contrast `bg-zinc-950 dark:bg-white text-white dark:text-zinc-950`

## 3. Recommended AI Prompt Formula
```markdown
@hero-sections.DESIGN.md
Create a Vue 3 SFC component named "HeroGradientBadge.vue".
Requirements:
1. Centered layout with RetroGrid perspective background.
2. Animated shiny top badge linking to a changelog.
3. High-impact H1 with text-wrap:balance.
4. Primary ShimmerButton and secondary copy-snippet terminal command box.
5. Mac-style 16:10 live interactive viewport underneath showing a preview.
```
