# Aura UI — Auth & Onboarding Flow DESIGN.md

> **Suite ID:** `auth-onboarding`  
> **Count:** 10 Production Blocks  
> **Category:** Multi-step Wizard, Split Screen Auth, 2FA Verification, Team Invite, Org Profile  
> **Target Framework:** Vue 3.5+, Tailwind CSS, VueUse

---

## 1. Domain Aesthetic & Purpose
Authentication and onboarding dictate day-1 conversion. The design must minimize cognitive overload while maintaining trust and security feel.
* Split-screen branding (curated customer quote/motion canvas on left, streamlined form on right).
* Step progress trackers with animated connector bars.
* Single-digit 2FA auto-focus inputs with numeric keyboard support.

## 2. Palette & Tokens
* **Modal / Card Frame**: `max-w-md w-full mx-auto p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl`
* **Input Fields**: `h-11 px-4 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-800/50 focus:border-blue-500`
* **Step Indicator**: Active `bg-blue-600 text-white`, Completed `bg-emerald-500 text-white`, Pending `bg-zinc-200 text-zinc-500`

## 3. Recommended AI Prompt Formula
```markdown
@auth-onboarding.DESIGN.md
Create a Vue 3 SFC component named "AuthWizardSteps.vue".
Requirements:
1. 4-step interactive onboarding questionnaire with animated forward/backward transitions.
2. Step indicator with numbered nodes and connecting progress bar.
3. Form validation state and final completion screen with animated confetti effect.
```
