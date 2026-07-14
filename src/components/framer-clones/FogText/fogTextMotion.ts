import type { FogTextDirection } from './types';

export interface FogTextLineData {
  key: string;
  text: string;
}

export function resolveFogTextLines(
  text?: string,
  lines?: string[],
): FogTextLineData[] {
  const source =
    lines && lines.length > 0 ? lines : text ? text.split('\n') : [];

  return source.map((lineText, index) => ({
    key: createLineKey(lineText, index),
    text: lineText,
  }));
}

function createLineKey(lineText: string, index: number): string {
  return `${index}-${lineText.length}-${lineText}`;
}

export function splitFogCharacters(value: string): string[] {
  return [...value];
}

export function getGlobalCharacterOffset(
  lineIndex: number,
  resolvedLines: FogTextLineData[],
): number {
  let offset = 0;

  for (let index = 0; index < lineIndex; index += 1) {
    offset += splitFogCharacters(resolvedLines[index]?.text ?? '').length;
  }

  return offset;
}

export function getDirectionOffset(
  direction: FogTextDirection,
  distance: number,
): { x: number; y: number } {
  switch (direction) {
    case 'top':
      return { x: 0, y: -distance };
    case 'bottom':
      return { x: 0, y: distance };
    case 'left':
      return { x: -distance, y: 0 };
    case 'right':
      return { x: distance, y: 0 };
    default:
      return { x: 0, y: 0 };
  }
}

export function getCharacterDelay(options: {
  globalIndex: number;
  lineIndex: number;
  stagger: number;
  lineStagger: number;
  startDelay: number;
}): number {
  const { globalIndex, lineIndex, stagger, lineStagger, startDelay } = options;
  return startDelay + globalIndex * stagger + lineIndex * lineStagger;
}
