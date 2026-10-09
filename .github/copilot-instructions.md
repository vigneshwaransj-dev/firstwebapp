# Copilot instructions

## Project
- This repository is a Next.js App Router application using TypeScript, React, Tailwind CSS v4, and shadcn/ui-style components.
- Follow the installed Next.js documentation in `node_modules/next/dist/docs/` when using framework APIs; do not rely on older Next.js conventions.
- Keep route pages as Server Components by default. Add a focused Client Component only when state, browser APIs, or event handlers are needed.

## Design direction
- Build a calm, premium medical-travel experience: clear information hierarchy, generous whitespace, navy text, bright accessible blue actions, white cards, and pale-blue section backgrounds.
- Keep layouts responsive from small mobile screens upward. Use mobile-first Tailwind utilities, touch-friendly controls, and avoid horizontal overflow.
- Use semantic landmarks, descriptive headings, visible keyboard focus, accessible names, and reduced-motion support.
- Use rounded, pill-shaped primary actions and subtle surfaces rather than heavy gradients or dense decoration.
- Use `next/image` for images. Add any remote image host to `images.remotePatterns` in `next.config.ts`; provide meaningful alt text and responsive `sizes`.

## Components and styling
- Prefer Tailwind CSS v4 utilities for component styling; global CSS belongs in `src/app/globals.css` only for tokens, base rules, and reusable patterns.
- Reuse the shadcn-style primitives in `src/components/ui/` and the `cn` helper from `src/lib/utils.ts`. Compose navigation from the Radix-backed Navigation Menu primitives.
- Keep component APIs typed and small. Do not add dependencies when existing primitives can meet the need.

## Content and behavior
- Keep navigation links pointed at real routes or section IDs. Ensure any new in-page navigation target exists.
- Do not invent medical claims, treatment guarantees, contact details, or backend behavior. Connect forms to an approved endpoint before presenting them as delivered or persisted.
- Keep patient stories and health information privacy-conscious; do not add identifying information without an explicit source.

## Verification
- Run `npm run lint` and `npm run build` for UI changes when practical.
- Preserve user changes and avoid unrelated edits.
