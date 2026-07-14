'use client';

import { useTheme } from '@/components/providers/ThemeProvider';
import { Icon } from '@/components/ui/Icon';
import { content } from '@/data/content';
import styles from './ThemeToggle.module.scss';

export interface ThemeToggleProps {
  className?: string | undefined;
}

export const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className={`${styles.root} ${className || ''}`.trim()}
      onClick={toggleTheme}
      aria-label={
        isDark
          ? content.global.themeToggle.lightLabel
          : content.global.themeToggle.darkLabel
      }
      aria-pressed={isDark}
    >
      <Icon name={isDark ? 'Sun' : 'Moon'} size="sm" aria-hidden="true" />
    </button>
  );
};
