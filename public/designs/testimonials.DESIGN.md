# Aura UI — Testimonials & Social Proof Walls DESIGN.md

> **Suite ID:** `testimonials`  
> **Count:** 12 Production Blocks  
> **Category:** Infinite Marquees, Founder Letters, Video Modal Grids, Twitter Wall  
> **Target Framework:** Vue 3.5+, Tailwind CSS, VueUse

---

## 1. Domain Aesthetic & Purpose
Social proof must feel genuine and dynamic rather than static placeholder cards.
* Two-row infinite seamless marquee (`Marquee.vue`) scrolling at variable speeds with hover pause.
* Founder letter format with serif quote marks, warm frosted backdrops, and signature avatars.
* Video thumbnail cards with frosted play buttons and modal popups.

## 2. Palette & Tokens
* **Quote Cards**: `p-6 rounded-2xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-sm shadow-sm`
* **Verified Badge**: `w-4 h-4 text-blue-500 shrink-0`
* **Rating Stars**: Amber (`text-amber-400 fill-amber-400`)

## 3. Recommended AI Prompt Formula
```markdown
@testimonials.DESIGN.md
Create a Vue 3 SFC component named "TestimonialsMarqueeWall.vue".
Requirements:
1. Two-row continuous horizontal marquee displaying customer review cards.
2. Row 1 scrolls left, Row 2 scrolls right in reverse.
3. Cards feature user avatar, name, handle, verified badge, and 5-star rating.
4. Hovering any card pauses animation smoothly.
```
