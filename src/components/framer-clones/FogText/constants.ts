import type { FogTextDirection } from './types';

export const FOG_TEXT_DEFAULTS = {
  direction: 'bottom' as FogTextDirection,
  align: 'center' as const,
  duration: 0.85,
  stagger: 0.045,
  lineStagger: 0.12,
  startDelay: 0.15,
  fogDensity: 18,
  glowIntensity: 0.75,
  directionOffset: 28,
  replay: false,
  as: 'span' as const,
};

export function getGlowLevel(value: number): 'low' | 'medium' | 'high' {
  if (value >= 0.85) {
    return 'high';
  }
  if (value >= 0.55) {
    return 'medium';
  }
  return 'low';
}

export function getDensityLevel(value: number): 'light' | 'medium' | 'heavy' {
  if (value >= 20) {
    return 'heavy';
  }
  if (value >= 14) {
    return 'medium';
  }
  return 'light';
}
