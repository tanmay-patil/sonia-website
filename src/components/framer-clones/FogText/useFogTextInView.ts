'use client';

import { useEffect, useRef, useState } from 'react';

export function useFogTextInView(replay: boolean) {
  const rootRef = useRef<HTMLElement>(null);
  const [playCount, setPlayCount] = useState(0);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return;
        }

        if (entry.isIntersecting) {
          if (replay || !hasPlayedRef.current) {
            setPlayCount((current) => current + 1);
            hasPlayedRef.current = true;
          }
          return;
        }

        if (replay) {
          hasPlayedRef.current = false;
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [replay]);

  return {
    rootRef,
    playCount,
    shouldAnimate: playCount > 0,
  };
}

export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);
    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  return prefersReducedMotion;
}
