'use client';

import { createElement } from 'react';
import { FOG_TEXT_DEFAULTS, getDensityLevel, getGlowLevel } from './constants';
import styles from './FogText.module.scss';
import { FogTextLine } from './FogTextLine';
import { getGlobalCharacterOffset, resolveFogTextLines } from './fogTextMotion';
import type { FogTextProps } from './types';
import { useFogTextInView, usePrefersReducedMotion } from './useFogTextInView';

export const FogText = ({
  text,
  lines,
  as = FOG_TEXT_DEFAULTS.as,
  direction = FOG_TEXT_DEFAULTS.direction,
  align = FOG_TEXT_DEFAULTS.align,
  duration = FOG_TEXT_DEFAULTS.duration,
  stagger = FOG_TEXT_DEFAULTS.stagger,
  lineStagger = FOG_TEXT_DEFAULTS.lineStagger,
  startDelay = FOG_TEXT_DEFAULTS.startDelay,
  fogDensity = FOG_TEXT_DEFAULTS.fogDensity,
  glowIntensity = FOG_TEXT_DEFAULTS.glowIntensity,
  directionOffset = FOG_TEXT_DEFAULTS.directionOffset,
  replay = FOG_TEXT_DEFAULTS.replay,
  className,
  lineClassName,
}: FogTextProps) => {
  const resolvedLines = resolveFogTextLines(text, lines);
  const { rootRef, playCount, shouldAnimate } = useFogTextInView(replay);
  const prefersReducedMotion = usePrefersReducedMotion();
  const animate = shouldAnimate && !prefersReducedMotion;
  const alignClass = styles[align];

  if (resolvedLines.length === 0) {
    return null;
  }

  const content = (
    <span className={styles.lines} key={playCount}>
      {resolvedLines.map((lineData, lineIndex) => (
        <FogTextLine
          key={`${playCount}-${lineData.key}`}
          line={lineData.text}
          lineIndex={lineIndex}
          globalCharOffset={getGlobalCharacterOffset(lineIndex, resolvedLines)}
          direction={direction}
          directionOffset={directionOffset}
          duration={duration}
          stagger={stagger}
          lineStagger={lineStagger}
          startDelay={startDelay}
          fogDensity={fogDensity}
          glowIntensity={glowIntensity}
          animate={animate}
          playCount={playCount}
          lineClassName={lineClassName}
        />
      ))}
    </span>
  );

  return createElement(
    as,
    {
      ref: rootRef,
      className: `${styles.root} ${alignClass} ${className || ''}`.trim(),
      'data-glow': getGlowLevel(glowIntensity),
      'data-density': getDensityLevel(fogDensity),
    },
    content,
  );
};
