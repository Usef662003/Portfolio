import Reveal from './Reveal';

/**
 * Consistent section heading: eyebrow label + title (with optional
 * gradient-highlighted word) + optional supporting description.
 *
 * @param {string} eyebrow - small uppercase label above the title
 * @param {string} title - main heading text
 * @param {string} highlight - substring of `title` to render with gradient
 * @param {string} description - optional supporting copy
 * @param {'left'|'center'} align
 */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
}) {
  const renderTitle = () => {
    if (!highlight || !title.includes(highlight)) return title;
    const [before, after] = title.split(highlight);
    return (
      <>
        {before}
        <span className="text-gradient">{highlight}</span>
        {after}
      </>
    );
  };

  return (
    <div
      className={`mb-16 flex flex-col gap-4 ${
        align === 'center' ? 'items-center text-center' : 'items-start text-left'
      }`}
    >
      <Reveal>
        <span className="eyebrow">
          <span className="h-px w-8 bg-gradient-primary" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-3xl font-bold leading-tight text-text sm:text-4xl lg:text-5xl">
          {renderTitle()}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={`max-w-2xl text-base text-text-muted sm:text-lg ${
              align === 'center' ? 'mx-auto' : ''
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
