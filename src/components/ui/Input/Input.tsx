import { forwardRef, type InputHTMLAttributes } from 'react';
import { Icon, type IconProps } from '@/components/ui/Icon';
import styles from './Input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Label for the input */
  label: string;
  /** Error message to display */
  error?: string | undefined;
  /** Optional icon to display inside the input */
  icon?: IconProps['name'] | undefined;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className, id, ...props }, ref) => {
    // Generate a unique ID if none provided
    const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;
    const errorId = `${inputId}-error`;

    return (
      <div className={`${styles.root} ${className || ''}`.trim()}>
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>

        <div className={styles.wrapper}>
          {icon && (
            <span className={styles.iconWrapper}>
              <Icon name={icon} size="sm" className={styles.icon} />
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            className={`${styles.input} ${icon ? styles.withIcon : ''} ${error ? styles.hasError : ''}`.trim()}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            {...props}
          />
        </div>

        {error && (
          <span id={errorId} className={styles.errorText} role="alert">
            {error}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
