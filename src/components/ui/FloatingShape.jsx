/**
 * A single ambient blurred "blob" used to build layered atmospheric
 * backgrounds (hero, section transitions). Purely decorative — hidden
 * from assistive tech.
 */
export default function FloatingShape({
  className = '',
  size = 400,
  gradient = 'from-primary/30 to-secondary/20',
  animationClass = 'animate-float',
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full bg-gradient-to-br blur-3xl ${gradient} ${animationClass} ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
