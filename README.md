# Prasannam Tiwari — Portfolio (Next.js)

A Next.js 14 (App Router) + TypeScript rebuild of the original static HTML portfolio, with all
content and animations preserved and extended using [Framer Motion](https://www.framer.com/motion/).

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

## What changed vs. the original HTML

**Preserved exactly:**
- All copy — job history, project descriptions, stack notes, education, contact info
- All original CSS-driven animations (blip, shimmer, radar pulse, mini SVG diagrams per project,
  skeleton loading shimmer, signature underline draw-in)
- The live GitHub API verification panel (fetches `api.github.com` client-side, same as before)
- The interactive stack explorer (click a technology, see the architectural note)
- The blueprint background grid, vignette, drifting orbs, cursor spotlight

**New / upgraded:**
- Converted to a proper component-based Next.js architecture (`components/`, `lib/data.ts`)
- Scroll reveals now run through Framer Motion (`Reveal`, `Stagger`) instead of a manual
  `IntersectionObserver`, with `prefers-reduced-motion` still respected
- Staggered entrance animations for bullet lists, tags, and stack blocks
- 3D tilt-on-hover for project cards, now spring-physics-based (`ProjectCard.tsx`)
- Magnetic CTA buttons that nudge toward the cursor (`MagneticButton.tsx`)
- Animated shared-element glow on the side dot-nav as you scroll between sections (`layoutId`)
- Parallax background orbs and a spring-smoothed cursor glow tied to scroll position
- Animated count-up numbers on the live GitHub stats (`AnimatedNumber.tsx`)
- **New "Technical specs" panel** on every project card — an expandable, animated breakdown
  of each build's architecture, concurrency model, and reliability details, pulled from the
  existing project facts and reformatted as a spec sheet (see `lib/data.ts` → `spec` field)

## Project structure

```
app/
  layout.tsx        — fonts, metadata, persistent chrome (scroll progress, nav, background)
  page.tsx           — assembles all sections
  globals.css        — full stylesheet, ported from the original <style> block
components/
  Hero.tsx, HeroDiagram.tsx, Experience.tsx, Projects.tsx, ProjectCard.tsx,
  LowLevel.tsx, Stack.tsx, Education.tsx, Verify.tsx, VerifyCard.tsx, Footer.tsx
  BackgroundFX.tsx, ScrollProgress.tsx, DotNav.tsx, FloatContact.tsx
  Reveal.tsx, Stagger.tsx, MagneticButton.tsx, AnimatedNumber.tsx, RichText.tsx
  viz/               — one SVG mini-diagram component per project
lib/
  data.ts            — all site content (jobs, projects, stack, education, repos, socials)
```

To update any content (a new job, a new project, a stack entry), edit `lib/data.ts` — nothing
else needs to change.

## Notes

- No Tailwind — styling is the original hand-written CSS, ported as-is into `globals.css`.
- This was built and hand-reviewed without running `npm install` (sandboxed, no registry
  access), so run `npm run build` locally once after installing to catch anything environment-
  specific.
