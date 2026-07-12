import { useEffect, useState } from 'react';

/**
 * Returns normalized mouse position (-1 to 1 on each axis) relative to
 * the viewport center, used to drive subtle parallax movement on
 * floating decorative shapes. Disabled automatically on touch devices
 * and when the user prefers reduced motion.
 */
export function useMouseParallax() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;

    if (prefersReducedMotion || isTouch) return undefined;

    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setPos({ x, y });
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return pos;
}
