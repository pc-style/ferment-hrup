# AGENTS.md — ferment-hrup

## Commands
- **Dev**: `bun dev`
- **Build**: `tsc -b && bun run build`
- **Lint**: `bun run lint`
- **Typecheck**: `tsc -b`
- No test framework configured.

## Architecture
Vite + React 19 + TypeScript SPA with Tailwind CSS v4 and react-router v7. Polish-language HR services site for Ferment Kolektiv.
- `src/pages/` — Page components (HomePage, AboutPage, ServicesPage, PackagesPage, HowWeWorkPage, FaqPage, ContactPage)
- `src/components/` — Shared components (Navbar, Footer)
- `src/layouts/` — RootLayout with Outlet for nested routing
- `src/App.tsx` — Router config using `createBrowserRouter`
- Routes use Polish slugs: `/o-nas`, `/uslugi`, `/pakiety`, `/jak-dzialamy`, `/faq`, `/kontakt`

## Code Style
- Strict TypeScript (`strict: true`, `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax`)
- ESM only (`"type": "module"`), React JSX transform, functional components with default exports
- Tailwind v4 via `@tailwindcss/vite` plugin, Motion (framer-motion) for animations
- ESLint with typescript-eslint, react-hooks, and react-refresh plugins

## Brand & Design
- Load `brand-guidelines` skill for Ferment Kolektiv colors/typography (see `.agents/skills/brand-guidelines/SKILL.md`)
- Brand: Poppins font, dark theme (#000/#101010), pink accent (#E00371), white text, "dla CATEGORY" pattern
- Load `frontend-design` skill for UI work (see `.agents/skills/frontend-design/SKILL.md`) — avoid generic AI aesthetics

## Security
Run `aikido_full_scan` on all generated/modified code. Fix issues and rescan until zero findings (see `.agent/rules/aikido_rules.md`).
