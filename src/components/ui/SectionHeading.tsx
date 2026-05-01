interface SectionHeadingProps {
  overline?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  overline,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-20 md:mb-28">
      {overline && (
        <p className="text-accent text-xs font-medium tracking-[0.25em] uppercase mb-6">
          {overline}
        </p>
      )}
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1D1D1F] tracking-tight leading-none">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-lg text-text-secondary font-light max-w-xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
