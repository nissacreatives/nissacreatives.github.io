# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Portfolio owner

This site is the portfolio of **Nissa Abayan — Graphics Designer & 3D Modeler** (nissacreatives@gmail.com). 8+ years across print and digital for clients including Gloria Chou PR, Keenya Kelly, Felicific (Soeos / 52USA / Heivy), SGS Asia Pacific (LEGO), Dentsu Jayme Syfu (Jollibee), Enzored, Print & Mount (Nestlé, Pepsi, Fujifilm, etc.). Based in San Jose Del Monte, Bulacan, Philippines; open to freelance and contract projects.

The repo was originally built as Gian Lorenzo Abaño's developer portfolio and was re-skinned for Nissa; expect old commits/history to reference that lineage.

## Commands

- `npm run dev` — start Nuxt dev server at http://localhost:3000
- `npm run generate` — produce static site to `.output/public` (this is the real build target; the site is SPA-only, see below)
- `npm run preview` — preview the built output locally
- `npm run deploy` — runs `generate` then publishes `.output/public` to GitHub Pages via `gh-pages` (`--dotfiles` preserves `.nojekyll`-style files)
- `npm install` — auto-triggers `nuxt prepare` via `postinstall`

There is no test runner, linter, or typecheck script configured.

A Docker dev setup also exists: `docker compose up --build` runs the Nuxt dev server in a container with hot-reload; the host port is defined in `docker-compose.yml` (currently `8080:3000`, so the site is reachable at http://localhost:8080 when running via Docker).

## Architecture

Single-page portfolio site built on **Nuxt 3 with SSR disabled** (`ssr: false` in `nuxt.config.ts`). All rendering happens client-side; `npm run generate` emits a static SPA shell suitable for GitHub Pages hosting.

### Content is data-driven from `app.config.ts`

The entire portfolio — hero copy, capabilities, work case studies, experience timeline, education, contact info — lives in `app.config.ts` and is consumed by components via `useAppConfig()`. **To change portfolio content, edit `app.config.ts`, not the components.** Experience entries use raw HTML strings in `description` fields rendered with `v-html` and styled by the `.prose-editorial` class in `assets/css/tailwind.css`.

Each work item in `work_section.myWorks` has a `palette` key (`rose` / `rose-dark` / `avocado` / `avocado-dark` / `schist` / `domino`) that maps to a gradient in `components/WorkSection.vue`. Unknown values fall back to `rose`.

### Page structure

- `app.vue` is a minimal shell that only mounts `<NuxtPage />`.
- Routing is nested: `pages/index.vue` → `pages/index/index.vue` (the nested file is the actual landing page that composes all section components).
- Section order on the landing page: `HeroSection` → `WorkSection` → `ExperienceSection` → `SkillsSection` → `EducationSection` → `TheFooter`. Work sits immediately after the hero because visual work is the most important thing for a designer.
- In-page anchors used by `TheNav.vue`: `#top`, `#work`, `#experience`, `#capabilities` (the SkillsSection id), `#contact` (on the footer). `#education` is reachable by scroll but is not in the nav, by design — the nav is intentionally short.

### Styling system

Editorial, warm, light-mode palette inspired by the Secret Shelfie brand system:

- `cream` (body background — `#F5EFE6` with `light`/`dark` variants)
- `domino` (primary text / buttons — dark warm brown `#3B2F2A`)
- `rose` / `rose-dark` (accent — Dusky Rose `#C99AA6` / `#A47786`)
- `avocado` / `avocado-dark` (secondary accent — Avocado Drab `#7A8A5E` / `#5C6B44`)
- `schist` (warm neutral gray `#A8A49C`)
- `ink` / `ink-dim` / `ink-faint` (body copy tones)

Typography: **Playfair Display** (serif, `font-display`) for headings and editorial italic flourishes, **Poppins** (sans, `font-sans`) for everything else. Loaded from Google Fonts in `nuxt.config.ts`.

Reusable component classes in `assets/css/tailwind.css` (`@layer components`) — prefer these over ad-hoc utility soup:

- `.editorial-border` — the card wrapper (replaces the old `.gradient-border` + `GradientBorder.vue` component, which have been removed)
- `.mono-label` — uppercase, wide-tracked rose-dark label used above section titles and as small captions
- `.btn-primary` / `.btn-ghost` — domino-filled / cream-outlined pill buttons
- `.tag` — small rose pill for project tags
- `.placeholder-tile` — base for image placeholders; adds a subtle grid overlay via `::after`. Consumers layer a Tailwind gradient on top (`bg-gradient-to-br from-rose/40 via-... to-cream-dark`) and put content inside with `relative z-10` so it paints above the grid overlay.
- `.prose-editorial` — rich-text styling for `v-html` experience descriptions (replaces the old `.prose-dev`)
- `.reveal` / `.is-visible` — pairs with the dormant `useReveal` composable for scroll-in animation

Animations defined in `tailwind.config.js`: `blob-float` (slow organic translation for the hero decorative blobs), `fade-in` (hero entrance).

### Placeholders instead of assets

The image assets for Nissa's portrait, company logos, and project thumbnails have not been shipped yet. Components intentionally fall back to stylized placeholder tiles:

- **`WorkSection`** — when `item.img` is empty, the tile shows the project title in display-serif italic with the client below.
- **`ExperienceSection`** / **`EducationSection`** — when `item.img` is empty, the logo square shows the first two initials of the organization name in display serif.
- **`SkillsSection`** — when `skill.img` is empty, the icon square shows the first letter of the capability title.
- **`HeroSection`** — portrait is a placeholder tile with the initials `NA` and a small "Portrait placeholder" caption. The featured-work trio below it is also placeholder tiles with labels Brand / Web / Packaging.

When real assets arrive, drop them under `public/images/` and set the corresponding `img` field in `app.config.ts`. The placeholder branches will stop rendering automatically.

### Deployment target

Deployment is GitHub Pages via the `deploy` script. `nuxt.config.ts` sets `app.baseURL = ''`; if deploying under a subpath (e.g. `user.github.io/repo/`), this must change.
