'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NavLink } from '@/components/composed/NavLink';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { content } from '@/data/content';
import styles from './Header.module.scss';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`${styles.root} ${isScrolled ? styles.scrolled : ''}`.trim()}
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>{content.global.clinicName}</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} exact={link.href === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <Button className={styles.bookButton}>Book Now</Button>
          <button
            type="button"
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size="md" />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav} aria-label="Mobile">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                exact={link.href === '/'}
                className={styles.mobileNavLink}
              >
                {link.label}
              </NavLink>
            ))}
            <Button className={styles.mobileBook}>
              {content.hero.primaryCta}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
