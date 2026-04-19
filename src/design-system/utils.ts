/**
 * Design System Utilities
 * Helper functions for common patterns
 */

import { MouseEvent } from 'react';

// Mouse tracking for glow effects
export function trackMousePosition(e: MouseEvent<HTMLDivElement>) {
  const { currentTarget, clientX, clientY } = e;
  const { left, top } = currentTarget.getBoundingClientRect();
  const x = clientX - left;
  const y = clientY - top;
  currentTarget.style.setProperty('--mouse-x', `${x}px`);
  currentTarget.style.setProperty('--mouse-y', `${y}px`);
}

// Create motion variants for animations
export function createFadeInVariant(delay: number = 0, duration: number = 0.6) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration, delay },
  };
}

// Create stagger container variant
export function createStaggerContainer(
  staggerDelay: number = 0.1,
  delayChildren: number = 0.2
) {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delayChildren,
      },
    },
  };
}

// Create stagger item variant
export function createStaggerItem(duration: number = 0.8) {
  return {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
}

// Conditional class helper
export function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
