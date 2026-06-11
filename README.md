# HRup — Ferment Kolektiv

Astro + TypeScript marketing site for HRup, a Polish HR services offer for the cultural sector: cinemas, festivals, distributors, institutions, and creative teams.

## Tech stack

- Astro 6
- TypeScript
- Tailwind CSS v4 via `@tailwindcss/vite`
- Bun for scripts and dependency management

## Commands

```bash
bun install
bun dev
bun run lint
bun run build
bun run preview
```

`bun run build` runs `astro check` before `astro build`.

## Project structure

- `src/pages/` — Astro pages with Polish routes.
- `src/components/` — shared Astro components.
- `src/layouts/Base.astro` — document shell, metadata, navigation, footer, and shared client-side reveal behavior.
- `src/styles/global.css` — Tailwind import, theme tokens, and global utilities.
- `public/` — static assets.

## Agent guidance

This repo includes [`AGENTS.md`](./AGENTS.md) for coding-agent instructions.

The current guidance follows recent recommendations from Matt Pocock and Theo Browne: keep the file short, project-specific, and useful on every task; avoid stale file maps and broad generated rules; move detailed conventions into progressively disclosed docs only when they are needed.

Relevant references checked on 2026-06-11:

- Matt Pocock: “Bad AGENTS.md files can make your coding agent worse and cost you tokens” (X, 2026-01-18) and “A Complete Guide To AGENTS.md” on AI Hero.
- Matt Pocock: concise plan-mode additions for readable plans (X, 2026-01-13) and AI Hero article.
- Theo Browne: `AGENTS.md` as the emerging standard, with separate files for models that need different steering (X, 2026-06-05).
- Theo Browne: agents files should convey the author/project’s taste and priorities, not just codebase locations (X thread, 2026-05-26) plus his Lakebed `agent.md` gist.

Theo also posted a video on 2026-02-23 saying you should delete `CLAUDE.md`/`AGENTS.md` and referencing a study; that is older than the requested one-month window, so it is noted here but not used as the main basis for this repo’s guidance.
