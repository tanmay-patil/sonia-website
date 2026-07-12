'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/sections/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { content } from '@/data/content';
import styles from './HeroSection.module.scss';

export const HeroSection = () => {
  return (
    <SectionWrapper id="home" className={styles.root}>
      <div className={styles.grid}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className={styles.headline}>{content.hero.headline}</h1>
          <p className={styles.subheadline}>{content.hero.subheadline}</p>
          <div className={styles.actions}>
            <Button size="lg" className={styles.button}>
              {content.hero.primaryCta}
            </Button>
            <Button variant="outline" size="lg" className={styles.button}>
              {content.hero.secondaryCta}
            </Button>
          </div>
        </motion.div>

        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <div className={styles.imagePlaceholder}>
            <div className={styles.imageOverlay} />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
