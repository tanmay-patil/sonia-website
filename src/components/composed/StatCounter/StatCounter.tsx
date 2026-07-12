'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styles from './StatCounter.module.scss';

export interface StatCounterProps {
  /** The numerical value to count up to */
  value: number;
  /** Optional prefix (e.g., "$", "+") */
  prefix?: string | undefined;
  /** Optional suffix (e.g., "k", "+", "%") */
  suffix?: string | undefined;
  /** Label describing the stat */
  label: string;
  /** Optional className for overrides */
  className?: string | undefined;
}

export const StatCounter = ({
  value,
  prefix = '',
  suffix = '',
  label,
  className,
}: StatCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const controls = useAnimation();

  useEffect(() => {
    if (!isInView) return;

    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    });

    // Simple counter animation
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className={`${styles.root} ${className || ''}`.trim()}
    >
      <div className={styles.number}>
        {prefix}
        {count}
        {suffix}
      </div>
      <div className={styles.label}>{label}</div>
    </motion.div>
  );
};
