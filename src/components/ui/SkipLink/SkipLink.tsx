import styles from './SkipLink.module.scss';

export interface SkipLinkProps {
  /** The ID of the main content element to skip to (default: main-content) */
  targetId?: string | undefined;
  /** The text to display (default: Skip to main content) */
  label?: string | undefined;
}

export const SkipLink = ({
  targetId = 'main-content',
  label = 'Skip to main content',
}: SkipLinkProps) => {
  return (
    <a href={`#${targetId}`} className={styles.root}>
      {label}
    </a>
  );
};
