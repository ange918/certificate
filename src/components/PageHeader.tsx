import { Reveal } from "./Reveal";

type PageHeaderProps = {
  kicker: string;
  title: string;
  lede: string;
};

export function PageHeader({ kicker, title, lede }: PageHeaderProps) {
  return (
    <header className="border-b border-line px-4 py-10 md:px-10 md:py-16">
      <Reveal>
        <p className="text-[14px] font-semibold uppercase tracking-[0.18em] text-palm-ink">
          {kicker}
        </p>
        <h1 className="mt-4 max-w-[14ch] font-display text-[clamp(2.75rem,8vw,6.25rem)] leading-[0.9] tracking-[-0.035em] text-deep text-balance">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted">{lede}</p>
      </Reveal>
    </header>
  );
}
