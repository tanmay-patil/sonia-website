import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import styles from './Footer.module.scss';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <Icon name="Smile" size="md" className={styles.logoIcon} />
              <span className={styles.logoText}>Sonia Dental</span>
            </Link>
            <p className={styles.description}>
              Providing premium, pain-free dentistry with a focus on your
              comfort and long-term oral health.
            </p>
            <div className={styles.socials}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className={styles.socialLink}
              >
                <Icon name="MessageCircle" size="sm" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className={styles.socialLink}
              >
                <Icon name="Camera" size="sm" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className={styles.socialLink}
              >
                <Icon name="Globe" size="sm" />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className={styles.linksCol}>
            <h4 className={styles.heading}>Quick Links</h4>
            <nav className={styles.nav}>
              <Link href="/services" className={styles.link}>
                Services
              </Link>
              <Link href="/about" className={styles.link}>
                About Us
              </Link>
              <Link href="/testimonials" className={styles.link}>
                Testimonials
              </Link>
              <Link href="/faq" className={styles.link}>
                FAQ
              </Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div className={styles.contactCol}>
            <h4 className={styles.heading}>Contact Us</h4>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <Icon name="MapPin" size="sm" className={styles.contactIcon} />
                <span>
                  123 Dental Way, Suite 100
                  <br />
                  San Francisco, CA 94107
                </span>
              </div>
              <div className={styles.contactItem}>
                <Icon name="Phone" size="sm" className={styles.contactIcon} />
                <span>(555) 123-4567</span>
              </div>
              <div className={styles.contactItem}>
                <Icon name="Mail" size="sm" className={styles.contactIcon} />
                <span>hello@soniadental.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Sonia Dental. All rights reserved.
          </p>
          <div className={styles.legal}>
            <Link href="/privacy" className={styles.legalLink}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={styles.legalLink}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
