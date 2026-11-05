# Aura UI — SaaS Dashboards & FinOps Management DESIGN.md

> **Suite ID:** `saas-dashboards`  
> **Count:** 16 Production Blocks  
> **Category:** FinOps, KPI Metrics, RBAC Security, Service Mesh Topology, Audit Logs  
> **Target Framework:** Vue 3.5+, Tailwind CSS, VueUse

---

## 1. Domain Aesthetic & Purpose
This design system governs enterprise-grade SaaS analytics, billing control planes, and cloud observability dashboards.
* Clean, uncluttered information hierarchy with high data density.
* Micro sparklines, trend arrows (`text-emerald-500` for positive, `text-rose-500` for negative).
* Multi-tab filtering, role-based badge chips, and transaction ledgers.

## 2. Palette & Tokens
* **Dashboard Background**: `bg-zinc-50 dark:bg-zinc-950`
* **Card Surfaces**: `bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800/90`
* **Table Headers**: `bg-zinc-50 dark:bg-zinc-900/50 text-zinc-500 font-mono text-xs uppercase`
* **Active Status Badges**: `bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200/50`

## 3. Recommended AI Prompt Formula
```markdown
@saas-dashboards.DESIGN.md
Create a Vue 3 SFC component named "DashboardKpiMatrix.vue".
Requirements:
1. 4-card KPI grid: MRR, Active Subscribers, Cloud Cost (FinOps), and System Uptime (99.98%).
2. Each card has a sparkline micro-graph, % delta comparison vs last month, and hover lift.
3. Clean border-zinc-200 dark:border-zinc-800 with subtle shadow.
```
