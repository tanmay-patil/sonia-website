import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Icon, type IconProps } from '@/components/ui/Icon';
import styles from './Button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The content to display inside the button */
  children: ReactNode;
  /** Visual variant of the button */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | undefined;
  /** Size of the button */
  size?: 'sm' | 'md' | 'lg' | undefined;
  /** Optional icon to display before the text */
  iconLeft?: IconProps['name'] | undefined;
  /** Optional icon to display after the text */
  iconRight?: IconProps['name'] | undefined;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${styles.root} ${styles[variant]} ${styles[size]} ${className || ''}`.trim()}
      {...props}
    >
      {iconLeft && (
        <Icon
          name={iconLeft}
          size={size === 'lg' ? 'md' : 'sm'}
          className={styles.icon}
        />
      )}
      <span className={styles.text}>{children}</span>
      {iconRight && (
        <Icon
          name={iconRight}
          size={size === 'lg' ? 'md' : 'sm'}
          className={styles.icon}
        />
      )}
    </button>
  );
};
