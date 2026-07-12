# Component Boilerplate Template

> [!IMPORTANT]
> When creating a new component, agents MUST copy this boilerplate pattern mechanically. 
> Replace `ComponentName` with the actual PascalCase name of the component.

## 1. Component File (`ComponentName.tsx`)

```tsx
import type { ReactNode } from 'react';
import styles from './ComponentName.module.scss';

export interface ComponentNameProps {
  /** Description of what this prop does */
  title: string;
  /** Optional prop description */
  children?: ReactNode;
  /** Optional className for overrides */
  className?: string;
}

export const ComponentName = ({ title, children, className }: ComponentNameProps) => {
  return (
    <div className={`${styles.root} ${className || ''}`.trim()}>
      <h2 className={styles.title}>{title}</h2>
      {children && <div className={styles.content}>{children}</div>}
    </div>
  );
};
```

## 2. SCSS Module (`ComponentName.module.scss`)

```scss
@use 'variables' as *;
@use 'mixins' as *;

.root {
  display: flex;
  flex-direction: column;
  gap: $space-4;
  padding: $space-5;
  background-color: var(--color-surface);
  border-radius: $border-radius-md;
  box-shadow: var(--shadow-sm);
  
  @include tablet {
    padding: $space-6;
  }
}

.title {
  font-family: $font-family-heading;
  font-size: $font-size-xl;
  font-weight: $font-weight-bold;
  color: var(--color-text-primary);
}

.content {
  font-family: $font-family-body;
  font-size: $font-size-base;
  color: var(--color-text-secondary);
  line-height: $line-height-relaxed;
}
```

## 3. Barrel Export (`index.ts`)

```typescript
export * from './ComponentName';
```
