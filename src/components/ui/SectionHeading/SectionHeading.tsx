import type { ReactNode } from 'react';
import styles from './SectionHeading.module.scss';

export interface SectionHeadingProps {
  /** The main heading text */
  title: string;
  /** Optional smaller text above the main heading */
  eyebrow?: string | undefined;
  /** Optional descriptive text below the heading */
  description?: ReactNode | undefined;
  /** Alignment of the text content */
  align?: 'left' | 'center' | undefined;
  /** Optional className for overrides */
  className?: string | undefined;
}

export const SectionHeading = ({
  title,
  eyebrow,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) => {
  return (
    <div
      className={`${styles.root} ${styles[align]} ${className || ''}`.trim()}
    >
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {description && <div className={styles.description}>{description}</div>}
    </div>
  );
};
