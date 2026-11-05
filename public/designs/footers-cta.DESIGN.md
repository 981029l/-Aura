# Aura UI — Footers & Call to Action Banners DESIGN.md

> **Suite ID:** `footers-cta`  
> **Count:** 10 Production Blocks  
> **Category:** Aurora Dawn Gradients, Developer Terminal Pills, Mega Sitemap Footers, Legal Disclaimers  
> **Target Framework:** Vue 3.5+, Tailwind CSS, VueUse

---

## 1. Domain Aesthetic & Purpose
The closing impression of a digital product. It must offer clear next steps and enterprise trust indicators.
* Aurora dawn / celestial lamp CTA banners with high-contrast centered headings.
* Centered developer copy-capsule for instant project scaffolding.
* 4-to-5 column mega footers with newsletter subscriptions, uptime status, and theme/language switchers.

## 2. Palette & Tokens
* **CTA Banner**: `relative rounded-3xl bg-gradient-to-b from-blue-900/30 via-zinc-950 to-zinc-950 border border-blue-500/20 p-12 text-center`
* **Footer Base**: `border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/50 py-16 px-4`
* **Column Title**: `text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider`
* **Links**: `text-sm text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors`

## 3. Recommended AI Prompt Formula
```markdown
@footers-cta.DESIGN.md
Create a Vue 3 SFC component named "FooterEnterpriseMega.vue".
Requirements:
1. Top section: Aurora glow banner with primary 'Get Started' ShimmerButton.
2. Middle section: 5-column grid (Product, Solutions, Resources, Company, Legal).
3. Bottom bar: Live uptime indicator (99.99% Operational), copyright notice, and social icon row.
```
