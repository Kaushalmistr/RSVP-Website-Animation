---
name: design-system-rushikesh-prajakta-wedding-invitation-19-july-20
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.
---

<!-- TYPEUI_SH_MANAGED_START -->

# Rushikesh & Prajakta — Wedding Invitation · 19 July 2026

## Mission
Deliver implementation-ready design-system guidance for Rushikesh & Prajakta — Wedding Invitation · 19 July 2026 that can be applied consistently across content site interfaces.

## Brand
- Product/brand: Rushikesh & Prajakta — Wedding Invitation · 19 July 2026
- URL: https://rushikesh-prajakta.invitationmedia.in/
- Audience: readers and knowledge seekers
- Product surface: content site

## Style Foundations
- Visual style: structured, accessible, implementation-first
- Main font style: `font.family.primary=Cormorant Garamond`, `font.family.stack=Cormorant Garamond, serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=24px`
- Typography scale: `font.size.xs=12px`, `font.size.sm=14px`, `font.size.md=16px`, `font.size.lg=18px`, `font.size.xl=20px`, `font.size.2xl=36px`, `font.size.3xl=48px`, `font.size.4xl=60px`
- Color palette: `color.text.primary=#3c2c20`, `color.text.secondary=#931f36`, `color.text.tertiary=#f8fafc`, `color.text.inverse=#f9f6f1`, `color.surface.base=#000000`, `color.surface.muted=#f9f4ec`, `color.surface.strong=#dfead7`, `color.border.default=#dbcfbd`, `color.border.muted=#e6c799`
- Spacing scale: `space.1=4px`, `space.2=8px`, `space.3=12px`, `space.4=16px`, `space.5=20px`, `space.6=24px`, `space.7=32px`, `space.8=48px`
- Radius/shadow/motion tokens: `radius.xs=16px`, `radius.sm=9999px` | `shadow.1=rgba(60, 44, 32, 0.15) 0px 8px 30px -10px`, `shadow.2=rgba(61, 80, 48, 0.25) 0px 20px 60px -20px`, `shadow.3=rgba(178, 127, 52, 0.4) 0px 10px 40px -10px` | `motion.duration.instant=150ms`, `motion.duration.fast=500ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
concise, confident, implementation-focused

## Rules: Do
- Use semantic tokens, not raw hex values in component guidance.
- Every component must define required states: default, hover, focus-visible, active, disabled, loading, error.
- Responsive behavior and edge-case handling should be specified for every component family.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and tokens.
3. Define component anatomy, variants, and interactions.
4. Add accessibility acceptance criteria.
5. Add anti-patterns and migration notes.
6. End with QA checklist.

## Required Output Structure
- Context and goals
- Design tokens and foundations
- Component-level rules (anatomy, variants, states, responsive behavior)
- Accessibility requirements and testable acceptance criteria
- Content and tone standards with examples
- Anti-patterns and prohibited implementations
- QA checklist

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Prefer system consistency over local visual exceptions.

<!-- TYPEUI_SH_MANAGED_END -->
