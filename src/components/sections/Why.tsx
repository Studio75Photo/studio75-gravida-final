import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

const stepIcons = [
  // arrival / home
  <svg key="s1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>,
  // makeup / sparkle
  <svg key="s2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v1m0 16v1m-9-9h1m16 0h1m-2.6-6.4l.7.7M5.9 5.9l.7.7m0 11.4l-.7.7m12.8-.7l-.7.7"/><circle cx="12" cy="12" r="3"/></svg>,
  // dress / hanger
  <svg key="s3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 5v14M6 9l6-4 6 4"/><path d="M4 21h16"/></svg>,
  // direction / eye
  <svg key="s4" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>,
  // photos / frame
  <svg key="s5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>,
];

export function Why() {
  const { t } = useI18n();
  return (
    <section id="why" className="py-24 lg:py-36 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <Reveal className="flex items-center gap-4">
          <span className="h-px w-10 bg-gold" />
          <span className="eyebrow text-gold">{t.why.label}</span>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="font-display italic text-2xl sm:text-3xl lg:text-5xl text-cream leading-[1.2] mt-10 max-w-3xl text-balance">
            "{t.why.pull}"
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-10 text-cream/70 leading-relaxed max-w-2xl">{t.why.body}</p>
        </Reveal>

        {/* 5-step timeline */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
          {t.why.steps.map((step, i) => (
            <Reveal key={step.title} delay={0.08 * i} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full border border-gold/40 bg-ink flex items-center justify-center text-gold">
                  {stepIcons[i]}
                </div>
                <div className="mt-6">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-gold/70">
                    {i + 1} / 5
                  </span>
                  <h3 className="font-display text-xl lg:text-[22px] text-cream mt-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-[220px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
