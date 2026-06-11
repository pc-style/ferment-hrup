# AGENTS.md — ferment-hrup

Astro + TypeScript marketing site for HRup, Ferment Kolektiv’s Polish HR services offer for the cultural sector.

## Commands

- Install: `bun install`
- Dev: `bun dev`
- Lint: `bun run lint`
- Build/typecheck: `bun run build`
- Preview: `bun run preview`

No test framework is configured. Do not run a dev server unless asked.

## Working style

- Keep changes small, direct, and reversible.
- Prefer existing Astro components, Tailwind utilities, theme tokens, and route patterns.
- Keep copy in Polish unless the surrounding file is clearly developer-facing English.
- For UI work, load `brand-guidelines` and `frontend-design`; preserve the dark Ferment look with pink accent `#E00371`.
- For planning, keep plans concise and list only unresolved questions that block implementation.

## Notes

This file should stay short and useful on every task. Add detailed, task-specific guidance to separate docs only when it is actually needed.
