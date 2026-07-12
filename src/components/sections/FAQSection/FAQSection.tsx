'use client';

import { motion } from 'framer-motion';
import { FAQItem } from '@/components/composed/FAQItem';
import { SectionWrapper } from '@/components/sections/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { faq } from '@/data/faq';
import styles from './FAQSection.module.scss';

export const FAQSection = () => {
  return (
    <SectionWrapper id="faq" variant="muted">
      <div className={styles.layout}>
        <div className={styles.headerColumn}>
          <SectionHeading
            title="Frequently Asked Questions"
            eyebrow="Got Questions?"
            align="left"
            className={styles.heading}
          />
        </div>

        <div className={styles.faqColumn}>
          <motion.div
            className={styles.accordion}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            {faq.map((faqItem) => (
              <FAQItem key={faqItem.id} faq={faqItem} />
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};
