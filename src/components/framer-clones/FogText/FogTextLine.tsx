'use client';

import { FogCharacter } from './FogCharacter';
import styles from './FogText.module.scss';
import { getCharacterDelay, splitFogCharacters } from './fogTextMotion';
import type { FogTextLineProps } from './types';

export const FogTextLine = ({
  line,
  lineIndex,
  globalCharOffset,
  direction,
  directionOffset,
  duration,
  stagger,
  lineStagger,
  startDelay,
  fogDensity,
  glowIntensity,
  animate,
  playCount,
  lineClassName,
}: FogTextLineProps) => {
  const characters = splitFogCharacters(line);

  return (
    <span
      className={`${styles.line} ${lineClassName || ''}`.trim()}
      aria-hidden={line.length === 0 ? true : undefined}
    >
      {characters.map((character, characterIndex) => {
        const globalIndex = globalCharOffset + characterIndex;
        const delay = getCharacterDelay({
          globalIndex,
          lineIndex,
          stagger,
          lineStagger,
          startDelay,
        });

        return (
          <FogCharacter
            key={`${playCount}-${lineIndex}-${globalIndex}-${character}`}
            character={character}
            direction={direction}
            directionOffset={directionOffset}
            duration={duration}
            delay={delay}
            fogDensity={fogDensity}
            glowIntensity={glowIntensity}
            animate={animate}
          />
        );
      })}
    </span>
  );
};
