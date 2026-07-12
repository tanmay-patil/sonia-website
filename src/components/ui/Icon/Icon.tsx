import { icons, type LucideProps } from 'lucide-react';
import styles from './Icon.module.scss';

export interface IconProps extends Omit<LucideProps, 'color' | 'size'> {
  /** The name of the icon from lucide-react */
  name: keyof typeof icons;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg' | 'xl' | undefined;
  /** Optional className for overrides */
  className?: string | undefined;
}

export const Icon = ({ name, size = 'md', className, ...props }: IconProps) => {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    console.warn(`Icon ${name} not found in lucide-react`);
    return null;
  }

  return (
    <LucideIcon
      className={`${styles.root} ${styles[size]} ${className || ''}`.trim()}
      {...props}
    />
  );
};
