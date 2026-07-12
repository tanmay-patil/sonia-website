import type { ReactNode } from 'react';
import styles from './Badge.module.scss';

export interface BadgeProps {
  /** Text or content inside the badge */
  children: ReactNode;
  /** Visual style variant */
  variant?: 'primary' | 'success' | 'outline' | undefined;
  /** Optional className for overrides */
  className?: string | undefined;
}

export const Badge = ({
  children,
  variant = 'primary',
  className,
}: BadgeProps) => {
  return (
    <span
      className={`${styles.root} ${styles[variant]} ${className || ''}`.trim()}
    >
      {children}
    </span>
  );
};
