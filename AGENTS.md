<!-- BEGIN:nextjs-agent-rules -->

# Next.js 16 Agent Rules

This project uses Next.js 16.2.4 (canary). This version has breaking changes — APIs, conventions, and file structure may differ from your training data.

<!-- END:nextjs-agent-rules -->

## Dev Commands

```bash
npm run dev    # Start dev server
npm run build  # Production build (includes typecheck)
npm run lint   # ESLint only
```

**Note:** No separate typecheck script — `npm run build` runs TypeScript checking.

## Project Structure

- `app/` — Next.js App Router pages and layouts
- `features/` — Domain code (`features/cards/`, `features/listings/`)
- `shared/` — Shared utilities and routes
- No tests configured yet

## Tech Stack

- Next.js 16.2.4 (canary)
- React 19.2.4
- Tailwind CSS 4
- ESLint 9

## Verification Order

Run `npm run lint` before `npm run build` to catch issues early.

## Skills

- `.agents/skills/git-commit/` — Conventional commit message helper
- `.agents/skills/vercel-react-best-practices/` — React/Next.js performance optimization
