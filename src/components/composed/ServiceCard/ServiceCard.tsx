import type { icons } from 'lucide-react';
import { Icon } from '@/components/ui/Icon';
import type { Service } from '@/types';
import styles from './ServiceCard.module.scss';

export interface ServiceCardProps {
  /** The service data object */
  service: Service;
  /** Optional className for overrides */
  className?: string | undefined;
}

export const ServiceCard = ({ service, className }: ServiceCardProps) => {
  return (
    <div className={`${styles.root} ${className || ''}`.trim()}>
      <div className={styles.iconWrapper}>
        <Icon
          name={service.iconName as keyof typeof icons}
          size="lg"
          className={styles.icon}
        />
      </div>
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.description}>{service.description}</p>
      <a href={`/services#${service.id}`} className={styles.link}>
        Learn more <Icon name="ArrowRight" size="sm" />
      </a>
    </div>
  );
};
