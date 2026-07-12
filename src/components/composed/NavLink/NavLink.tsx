'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './NavLink.module.scss';

export interface NavLinkProps {
  /** The destination URL */
  href: string;
  /** The link text */
  children: React.ReactNode;
  /** Optional className for overrides */
  className?: string | undefined;
  /** Optional exact match requirement for active state */
  exact?: boolean | undefined;
}

export const NavLink = ({
  href,
  children,
  className,
  exact = false,
}: NavLinkProps) => {
  const pathname = usePathname();

  // Determine if the link is active
  const isActive = exact
    ? pathname === href
    : pathname.startsWith(href) && (href !== '/' || pathname === '/');

  return (
    <Link
      href={href}
      className={`${styles.root} ${isActive ? styles.active : ''} ${className || ''}`.trim()}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  );
};
