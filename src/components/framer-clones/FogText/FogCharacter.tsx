'use client';

import { motion } from 'framer-motion';
import styles from './FogText.module.scss';
import { getDirectionOffset } from './fogTextMotion';
import type { FogCharacterProps } from './types';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const FogCharacter = ({
  character,
  direction,
  directionOffset,
  duration,
  delay,
  fogDensity,
  glowIntensity,
  animate,
}: FogCharacterProps) => {
  const offset = getDirectionOffset(direction, directionOffset);
  const isSpace = character === ' ';

  if (isSpace) {
    return <span className={styles.space}>&nbsp;</span>;
  }

  const motionStart = {
    opacity: 0,
    filter: `blur(${fogDensity}px)`,
    x: offset.x,
    y: offset.y,
  };

  const fogEnd = {
    opacity: 0,
    filter: 'blur(0px)',
    x: 0,
    y: 0,
  };

  const fogStart = {
    opacity: Math.min(glowIntensity, 1),
    filter: `blur(${fogDensity}px)`,
    x: offset.x,
    y: offset.y,
  };

  const textEnd = {
    opacity: 1,
    filter: 'blur(0px)',
    x: 0,
    y: 0,
  };

  const transition = {
    duration,
    delay,
    ease: EASE,
  };

  if (!animate) {
    return (
      <span className={styles.charCell}>
        <span className={styles.textChar}>{character}</span>
      </span>
    );
  }

  return (
    <span className={styles.charCell}>
      <motion.span
        className={styles.fogChar}
        initial={fogStart}
        animate={fogEnd}
        transition={transition}
        aria-hidden="true"
      >
        {character}
      </motion.span>
      <motion.span
        className={styles.textChar}
        initial={motionStart}
        animate={textEnd}
        transition={transition}
      >
        {character}
      </motion.span>
    </span>
  );
};
