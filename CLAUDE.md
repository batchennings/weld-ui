# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Weld UI is a React component library built on the [Weld UI design kit from Figma](https://www.figma.com/community/file/1437101040813682815). It's a comprehensive design system implementation using React, TypeScript, Tailwind CSS, and Storybook.

## Common Commands

### Development
```bash
pnpm dev              # Start Vite dev server on :8080
pnpm storybook        # Start Storybook on :6006
```

### Building
```bash
pnpm build            # Production build
pnpm build:dev        # Development build
pnpm preview          # Preview production build
```

### Code Quality
```bash
pnpm lint             # Run ESLint
```

### Storybook
```bash
pnpm build-storybook  # Build Storybook for production
```

## Architecture

### Component Organization

Components follow atomic design principles with a strict hierarchy:

- **`src/components/atoms/`**: Smallest, indivisible UI components (Button, InputText, Pill, Alert, Switch, Select, etc.)
- **`src/components/organisms/`**: Complex components composed of atoms (Table, NavigationBar, TableCell, Tabs)
- **`src/components/templates/`**: Page-level layout components (Page)

### Design System

The project uses a **token-based design system** with semantic naming through Tailwind CSS custom colors:

- Colors follow the pattern `{component}-{property}-color-{variant}` (e.g., `button-bg-color-filled`, `form-border-color-focus`)
- Custom font sizes: `4xl` (29px) down to `xs` (9px)
- Custom border radii: `sm` (3px) to `full` (128px)
- Full dark mode support with separate color tokens in `tailwind.config.ts`

### Component Patterns

All custom components use:
1. **Class Variance Authority (CVA)** for variant-based styling
2. **TypeScript** with explicit prop types
3. **Icon integration** via `IconProps` type from `@/types/icons`
4. **`cn()` utility** from `@/lib/utils` for className merging (clsx + tailwind-merge)

Example pattern from Button component:
```typescript
const componentVariants = cva("base-classes", {
  variants: { /* ... */ },
  compoundVariants: [ /* ... */ ],
  defaultVariants: { /* ... */ }
});

export type ComponentProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof componentVariants> & {
  // custom props
}
```

### Icons

- Custom icon set in `src/icons/` (200+ icons)
- Icons are React components following the `IconProps` interface
- Conversion script available at `src/icons/scripts/icon-conversion.py`
- Also uses `@primer/octicons-react` for additional icons

### Routing & State Management

- **Router**: React Router DOM v7 (see `src/App.tsx`)
- **Data Fetching**: TanStack Query (React Query) v5
- Routes defined in `src/App.tsx` with pages in `src/pages/`

### Path Aliases

Configured in both `vite.config.ts` and `components.json`:
```typescript
"@" → "./src"
"@/components" → "./src/components"
"@/lib" → "./src/lib"
"@/icons" → "./src/icons"
```

### Mock Data

Mock data lives in `src/mock/` for development and Storybook examples (e.g., `companies.ts`, `table.ts`, `select.ts`)

### Testing

- **Test Framework**: Vitest v3 with browser mode (Playwright/Chromium)
- **Storybook Integration**: Uses `@storybook/experimental-addon-test` for component testing
- Test setup in `.storybook/vitest.setup.ts`
- Workspace configuration in `vitest.workspace.ts`

## Important Considerations

### Styling Rules

1. **Never use arbitrary Tailwind values** when semantic tokens exist (use `bg-button-bg-color-filled` not `bg-blue-600`)
2. **Dark mode classes** are automatically handled via the `dark:` prefix and semantic color tokens
3. Components should use the `cn()` utility for conditional className merging

### Component Development

1. Always create a Storybook story alongside new components (stories live in the same directory as components, not in `src/stories/`)
2. Maintain the atomic design hierarchy when creating new components
3. Use CVA for all variant-based styling to ensure consistency

### TypeScript

- Strict mode enabled (`tsconfig.json`)
- All components must have explicit prop types
- Icon components follow the `IconProps` interface from `src/types/icons`

### Design Tokens

When adding new colors or design tokens, update both light and dark variants in `tailwind.config.ts`. Follow the existing semantic naming convention.
