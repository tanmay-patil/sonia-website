# Codex Rules for Sonia Dental

This project is built 100% by AI agents and optimized for strict verifiability.

## Single Source of Truth
Read `CONVENTIONS.md` in the root directory for all architectural rules, coding standards, and compliance checks.
Read `COMPONENT_TEMPLATE.md` in the root directory to see the exact boilerplate required for every new component.

## Architecture Summary
- **Framework**: Next.js 15 (App Router, TS)
- **Styling**: SCSS Modules + CSS Custom Properties (Light/Dark themes). 
- **Tooling**: Biome (Linting + Formatting), strict TS.
- **Pattern**: Atomic Design (`ui/`, `composed/`, `sections/`). All text from `src/data/content.ts`.

## Agent Workflow
1. **Setup**: Run `pnpm install` and `pnpm dev` to preview.
2. **Path Aliases**: Always use `@/...` for absolute imports.
3. **SCSS Imports**: Always use `@use 'variables' as *;` and `@use 'mixins' as *;` (resolved via includePaths). Never use `@import` or relative paths.
4. **Validation**: AFTER ANY CODE CHANGE, you MUST run `pnpm verify`. This command runs the build, Biome linter/formatter, and convention checks. 
5. **Done Criteria**: You are done when `pnpm verify` exits with code 0.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
