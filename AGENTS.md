# RealView Media - AI Development Rules

## Project

This is the official RealView Media website built with:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- next-intl

## Goal

Keep the website premium, modern, fast, SEO-friendly, and fully responsive.

## Rules

- Never redesign the UI unless explicitly requested.
- Preserve all animations.
- Preserve spacing and layout.
- Preserve brand colors.
- Preserve typography.
- Never remove components unless instructed.
- Do not create duplicate files.
- Prefer editing existing components.

## Performance

Always prioritize performance.

- Use Server Components whenever possible.
- Use dynamic imports only when beneficial.
- Avoid unnecessary client components.
- Avoid unnecessary state.
- Avoid unnecessary re-renders.
- Keep bundle size small.

## Internationalization

Languages:

- English
- Vietnamese

Translations live in:

messages/en.json

messages/vi.json

Never hardcode visible text.

Always use translation keys.

## Code Style

- Clean TypeScript
- Reusable components
- No dead code
- No duplicated logic
- Keep files organized

## Before making changes

Always:

1. Analyze the existing implementation.
2. Explain your plan.
3. Wait for approval before modifying code.

## After changes

Always summarize:

- Files modified
- Why they changed
- Performance impact
- SEO impact
- Anything that requires testing