'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import type { FAQ } from '@/types';
import styles from './FAQItem.module.scss';

export interface FAQItemProps {
  /** The FAQ data object */
  faq: FAQ;
  /** Optional className for overrides */
  className?: string | undefined;
}

export const FAQItem = ({ faq, className }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = `faq-content-${faq.id}`;

  return (
    <div
      className={`${styles.root} ${isOpen ? styles.open : ''} ${className || ''}`.trim()}
    >
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className={styles.question}>{faq.question}</span>
        <Icon name="ChevronDown" size="sm" className={styles.icon} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={contentId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={styles.contentWrapper}
          >
            <div className={styles.answer}>{faq.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
