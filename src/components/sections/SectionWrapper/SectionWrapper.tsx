import type { ReactNode } from 'react';
import styles from './SectionWrapper.module.scss';

export interface SectionWrapperProps {
  /** The content of the section */
  children: ReactNode;
  /** Optional ID for navigation */
  id?: string | undefined;
  /** Visual variant for background color */
  variant?: 'default' | 'muted' | 'primary' | undefined;
  /** Spacing density */
  density?: 'default' | 'hero' | undefined;
  /** Optional className for overrides */
  className?: string | undefined;
}

export const SectionWrapper = ({
  children,
  id,
  variant = 'default',
  density = 'default',
  className,
}: SectionWrapperProps) => {
  const densityClass =
    density === 'hero' ? styles.densityHero : styles.densityDefault;

  return (
    <section
      id={id}
      className={`${styles.root} ${styles[variant]} ${densityClass} ${className || ''}`.trim()}
    >
      <div className={styles.container}>{children}</div>
    </section>
  );
};
