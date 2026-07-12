import { Icon } from '@/components/ui/Icon';
import type { Testimonial } from '@/types';
import styles from './TestimonialCard.module.scss';

export interface TestimonialCardProps {
  /** The testimonial data object */
  testimonial: Testimonial;
  /** Optional className for overrides */
  className?: string | undefined;
}

export const TestimonialCard = ({
  testimonial,
  className,
}: TestimonialCardProps) => {
  return (
    <div className={`${styles.root} ${className || ''}`.trim()}>
      <div className={styles.stars}>
        {[...Array(5)].map((_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: Static array mapping for stars
          <Icon key={i} name="Star" size="sm" className={styles.star} />
        ))}
      </div>
      <blockquote className={styles.quote}>"{testimonial.quote}"</blockquote>
      <div className={styles.author}>
        <div className={styles.avatar}>{testimonial.name.charAt(0)}</div>
        <div className={styles.authorInfo}>
          <div className={styles.name}>{testimonial.name}</div>
          <div className={styles.role}>{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
};
