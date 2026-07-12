'use client';

import { motion } from 'framer-motion';
import { StatCounter } from '@/components/composed/StatCounter';
import { SectionWrapper } from '@/components/sections/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { content } from '@/data/content';
import styles from './AboutSection.module.scss';

export const AboutSection = () => {
  return (
    <SectionWrapper id="about">
      <div className={styles.grid}>
        <motion.div
          className={styles.imageColumn}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.imagePlaceholder}>
            <div className={styles.imageOverlay} />
            <div className={styles.badge}>Dr. Sonia</div>
          </div>
        </motion.div>

        <div className={styles.contentColumn}>
          <SectionHeading
            title={content.about.heading}
            eyebrow="About Us"
            align="left"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className={styles.text}>{content.about.content}</p>

            <div className={styles.stats}>
              <StatCounter value={10} suffix="+" label="Years Experience" />
              <StatCounter value={5000} suffix="+" label="Happy Patients" />
              <StatCounter value={15} suffix="+" label="Awards Won" />
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};
