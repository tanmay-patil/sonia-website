import { Icon, type IconProps } from '@/components/ui/Icon';
import styles from './ContactInfo.module.scss';

export interface ContactInfoProps {
  /** The icon to display */
  icon: IconProps['name'];
  /** The title of the contact method */
  title: string;
  /** The primary value (e.g., phone number, email address) */
  value: string;
  /** Optional secondary text or description */
  description?: string | undefined;
  /** Optional URL if the info should be a link */
  href?: string | undefined;
  /** Optional className for overrides */
  className?: string | undefined;
}

export const ContactInfo = ({
  icon,
  title,
  value,
  description,
  href,
  className,
}: ContactInfoProps) => {
  const content = (
    <>
      <div className={styles.iconWrapper}>
        <Icon name={icon} size="md" className={styles.icon} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.value}>{value}</div>
        {description && <div className={styles.description}>{description}</div>}
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${styles.root} ${styles.isLink} ${className || ''}`.trim()}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={`${styles.root} ${className || ''}`.trim()}>{content}</div>
  );
};
