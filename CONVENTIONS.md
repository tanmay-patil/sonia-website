# Sonia Dental — Codebase Conventions

> [!IMPORTANT]
> This document is the single source of truth for all AI agents and developers working on this project. 
> Do not deviate from these rules without explicit permission.

## 1. File Size & Decomposition
- **200-Line Limit**: No `.tsx`, `.ts`, or `.scss` file may exceed 200 lines. 
- **Solution**: Break large components down. Extract logic to custom hooks. Move sub-components to their own files within the same directory.

## 2. Linting & Type Safety
- **Zero Lint Suppressions**: Never use `eslint-disable`, `@ts-ignore`, `@ts-expect-error`, or `// @ts-nocheck`. You must fix the root cause of the error.
- **Strict TypeScript**: Use strict typing. Avoid `any`. Interfaces must define exact optional properties (`exactOptionalPropertyTypes` is enabled).

## 3. Styling & Theming
- **Mobile-First Responsiveness**: ALL components and styles MUST be designed mobile-first by default. Use `@include tablet`, `@include desktop`, and `@include wide` mixins for scaling up. 100% mobile responsiveness is mandatory for every atom, molecule, and organism.
- **SCSS Variables ONLY**: Every single value for color, spacing, typography, motion, and layout must use a variable in `.module.scss` files. 
  - *Incorrect*: `color: #1B6B5A;`, `padding: 16px;`
  - *Correct*: `color: var(--color-primary);`, `padding: $space-4;`
- **Theme Compliance**: Every component must work in both light and dark modes. Never use SCSS `$color-` variables for UI element colors; ALWAYS use CSS custom properties (`var(--color-*)`) because they react to the theme.
- **No Inline Styles**: `style={{}}` is strictly forbidden in React components unless used for dynamic values that cannot be computed at compile time (e.g. scroll interpolation values).
- **Import Pattern**: Always import partials using `@use 'variables' as *;` and `@use 'mixins' as *;`. Never use `@import` or relative paths like `../../styles/`.

## 4. Architecture (Atomic Design)
- **Atoms (`ui/`)**: Basic building blocks (Buttons, Inputs, Icons). No dependencies on other components (except other atoms).
- **Molecules (`composed/`)**: Combinations of atoms (ServiceCard, FAQItem).
- **Organisms (`sections/`)**: Complex sections composing molecules and atoms (Navbar, Hero, Footer).
- **Barrel Exports**: Every component directory MUST have an `index.ts` file exporting the component. Import via the directory path (e.g. `@/components/ui/Button`).

## 5. Content Centralization
- **No Hardcoded Strings**: All UI text (except for dynamic API data) lives in `src/data/content.ts` (or domain data files). Do not hardcode english text inside components.

## 6. Accessibility (WCAG 2.1 AA)
- **Semantic HTML**: Use correct elements (`<button>`, `<a>`, `<nav>`, `<section>`). Never attach `onClick` to a `<div>`.
- **Keyboard Navigation**: Interactive elements must be reachable via `Tab`.
- **Focus Rings**: Never use `outline: none` without providing a custom `:focus-visible` fallback. Use the `@include focus-ring;` mixin.
- **ARIA**: Provide `aria-label` for icon-only buttons, `aria-expanded` for toggles, and `aria-hidden="true"` for decorative elements.

## 7. Formatting & Tooling
- **Validation**: After making changes, always run `npm run verify` to ensure the project builds, lints correctly, and passes convention scripts.
- **Biome**: We use Biome for linting and formatting. Do not configure ESLint or Prettier.
