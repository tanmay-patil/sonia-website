export type FogTextDirection = 'none' | 'top' | 'bottom' | 'left' | 'right';

export type FogTextAlign = 'left' | 'center' | 'right';

export type FogTextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';

export interface FogTextProps {
  /** Single string — use `\\n` for manual line breaks */
  text?: string | undefined;
  /** Explicit lines (takes precedence over splitting `text`) */
  lines?: string[] | undefined;
  /** Semantic wrapper element */
  as?: FogTextElement | undefined;
  /** Per-character reveal direction */
  direction?: FogTextDirection | undefined;
  /** Text alignment */
  align?: FogTextAlign | undefined;
  /** Per-character animation duration (seconds) */
  duration?: number | undefined;
  /** Delay between each character (seconds) */
  stagger?: number | undefined;
  /** Extra delay before each new line starts (seconds) */
  lineStagger?: number | undefined;
  /** Delay before the animation begins (seconds) */
  startDelay?: number | undefined;
  /** Starting blur amount (pixels) */
  fogDensity?: number | undefined;
  /** Fog glow strength (0–1) */
  glowIntensity?: number | undefined;
  /** Directional offset distance (pixels) */
  directionOffset?: number | undefined;
  /** Replay when scrolling back into view */
  replay?: boolean | undefined;
  /** Wrapper className */
  className?: string | undefined;
  /** Optional className applied to each line */
  lineClassName?: string | undefined;
}

export interface FogCharacterProps {
  character: string;
  direction: FogTextDirection;
  directionOffset: number;
  duration: number;
  delay: number;
  fogDensity: number;
  glowIntensity: number;
  animate: boolean;
}

export interface FogTextLineProps {
  line: string;
  lineIndex: number;
  globalCharOffset: number;
  direction: FogTextDirection;
  directionOffset: number;
  duration: number;
  stagger: number;
  lineStagger: number;
  startDelay: number;
  fogDensity: number;
  glowIntensity: number;
  animate: boolean;
  playCount: number;
  lineClassName?: string | undefined;
}
