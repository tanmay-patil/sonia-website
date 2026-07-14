'use client';

import { FogText } from '@/components/framer-clones/FogText';
import { SectionWrapper } from '@/components/sections/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { content } from '@/data/content';
import styles from './HeroSection.module.scss';

export const HeroSection = () => {
  return (
    <SectionWrapper id="home" density="hero" className={styles.root}>
      <div className={styles.content}>
        <FogText
          as="h1"
          text={content.hero.headline}
          className={styles.headline}
          direction="bottom"
          align="center"
          fogDensity={20}
          glowIntensity={0.9}
          duration={0.9}
          stagger={0.05}
          startDelay={0.2}
        />
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
