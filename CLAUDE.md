# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Educational course platform for SENA (Colombia) — "Automatización y monitoreo de sistemas productivos agropecuarios". Built with Vue 2 + Vue CLI. Content pages are rendered via the `legored` plugin which provides reusable educational UI components.

## Commands

- `npm run serve` — Start dev server
- `npm run build` — Production build (outputs to `dist/`)
- `npm run lint` — ESLint + Prettier check/fix

No test framework is configured.

## Architecture

**Stack:** Vue 2.7 · Vue Router 3 · Vuex 3 · Bootstrap 5 · SASS (indented syntax) · Pug templates · legored plugin

### Entry & Wiring

- `src/main.js` — Creates Vue instance, registers router, store, and legored plugin
- `src/vue.js` — Global setup: AOS animations, Bootstrap/Popper imports, Font Awesome, global directive `v-child`
- `src/App.vue` — Root layout with sidebar navigation and `<router-view>`

### Routing (`src/js/router.js`)

Top-level routes: `/` (inicio), `/introduccion`, `/actividad`, `/glosario`, `/complementario`, `/referencias`, `/sintesis`, `/creditos`. The `/curso` route has 6 nested children (`/curso/tema1` through `/curso/tema6`). Custom scroll behavior handles hash-based in-page navigation with a 100px offset.

### State (`src/js/store.js`)

Minimal Vuex store: `loading` counter and `menuOpen` boolean for sidebar toggle.

### Menu & Config (`src/js/json.js`)

Centralized menu structure and course metadata. Defines main menu items (with optional `subMenu` arrays using hash anchors for in-page sections), secondary menu items, and global course info. Accessed at runtime via `this.$config` (provided by legored).

### Pages (`src/pages/`)

Each page is a single-file Vue component using Pug templates. Tema pages (Tema1–Tema6) are content-heavy (800–960+ lines) and use legored components for layout: `BannerPrincipal`, `BannerInterno`, `Separador`, `TasbA`, `TabsC`, `AccordionRED`, `TimeLineRED`, `CarouselRED`, etc. (full list in CHANGELOG.md).

### Styling (`src/css/`)

- `_variables.sass` — Design tokens (colors, fonts, breakpoints); auto-prepended to every SASS file via `vue.config.js`
- `_styles.sass` — Master import file
- `_custom.sass` — Project-specific overrides
- `basicos/`, `boostrap/`, `plugins/`, `reset/` — Layered SASS partials

Primary palette: `#3C6D9D` (primary), `#01B9D1` (secondary), `#78B62E` (accent), `#FDB52B` (buttons). Font: Roboto.

### Assets

- `src/assets/curso/temas/` — Topic images (referenced by number in Pug templates)
- `src/assets/curso/portada/` — Banner images
- `public/downloads/` — PDFs and ZIP for student downloads
- `public/actividades/` — Interactive activity HTML files

## Code Style

Enforced via ESLint + Prettier: no semicolons, single quotes, trailing commas, 2-space indentation. `v-html` is allowed (`vue/no-v-html: off`). Format-on-save configured in `.vscode/settings.json`.

## Deployment

GitHub Actions workflow (`.github/workflows/build.yml`) — manually triggered, builds with Node 14.19.0, pushes `dist/` to `gh-pages` branch via `git subtree split`.
