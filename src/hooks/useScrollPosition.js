import { useEffect, useState } from 'react';

/**
 * Tracks vertical scroll position and returns whether the page
 * has scrolled past a given threshold. Used to toggle the navbar's
 * glass background once the user leaves the hero section.
 */
export function useScrollPosition(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
