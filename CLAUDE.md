# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

This is a Next.js 15 personal brand website using the Pages Router pattern.

**Tech Stack:**
- Next.js 15.5 with Pages Router
- React 19
- TypeScript (strict mode)
- Tailwind CSS v4 (using `@tailwindcss/postcss` plugin)

**Project Structure:**
- `src/pages/` - Page components and API routes (file-based routing)
- `src/pages/api/` - API endpoints mapped to `/api/*`
- `src/styles/globals.css` - Global styles with Tailwind and CSS custom properties for theming
- `public/` - Static assets

**Path Aliases:**
- `@/*` maps to `./src/*` (configured in tsconfig.json)

**Styling:**
- Uses Tailwind CSS v4 with the `@theme inline` directive for custom properties
- Geist font family loaded via `next/font/google`
- Dark mode support via `prefers-color-scheme` media query
