import { motion } from 'framer-motion';
import { fadeUp } from '../../animations/variants';

/**
 * Wraps children in a scroll-triggered reveal animation.
 * Uses `whileInView` so it re-triggers gracefully without needing
 * manual IntersectionObserver wiring in every section.
 */
export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  variants = fadeUp,
  className = '',
  once = true,
  amount = 0.2,
}) {
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      custom={delay}
      variants={variants}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
