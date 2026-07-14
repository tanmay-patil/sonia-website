'use client';

import { SectionWrapper } from '@/components/sections/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { content } from '@/data/content';
import styles from './HeroSection.module.scss';

export const HeroSection = () => {
  return (
    <SectionWrapper id="home" density="hero" className={styles.root}>
      <div className={styles.content}>
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
      </div>
    </SectionWrapper>
  );
};
