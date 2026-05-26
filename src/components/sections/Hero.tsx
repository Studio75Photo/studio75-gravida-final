import { useI18n, WHATSAPP } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import hero from "@/assets/hero-main.png";

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-ink">
      {/* Cinematic full-bleed image */}
      <img
        src={hero}
        alt="Studio75 — Maternidade"
        className="absolute inset-0 w-full h-full object-cover object-[60%_center] lg:object-center opacity-90"
        loading="eager"
        fetchPriority="high"
      />

      {/* Gradient overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/30 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-transparent" />
      <div className="absolute inset-0 gold-glow-top pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between max-w-[1300px] mx-auto px-6 lg:px-12 pt-32 lg:pt-40 pb-16">
        <Reveal className="max-w-2xl">
          <p className="font-display italic text-gold text-base lg:text-lg tracking-[0.2em] uppercase">
            — {t.hero.eyebrow}
          </p>
          <h1 className="font-display text-[48px] sm:text-[68px] lg:text-[104px] leading-[0.95] mt-8 text-cream text-balance">
            {t.hero.titleA}{" "}
            <em className="italic text-gold font-light block sm:inline">{t.hero.titleItalic}</em>{" "}
            {t.hero.titleB}
          </h1>
          <div className="gold-divider mt-10" />
          <p className="mt-8 text-[11px] tracking-[0.34em] uppercase text-cream/70">
            {t.hero.studio}
          </p>
        </Reveal>

        <div>
          <Reveal delay={0.15} className="max-w-2xl">
            <p className="font-display text-xl sm:text-2xl lg:text-3xl text-cream font-medium leading-snug">
              {t.hero.tagline}
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-3 border border-gold text-gold px-8 py-4 text-[11px] tracking-[0.28em] uppercase font-medium hover:bg-gold hover:text-ink transition-colors duration-300"
            >
              {t.hero.cta}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </Reveal>

          <Reveal delay={0.25} className="mt-16 lg:mt-0">
            <div className="grid grid-cols-3 gap-4 lg:gap-12 max-w-2xl border-t border-gold/30 pt-8">
              {t.hero.stats.map((s) => (
                <div key={s.l}>
                  <p className="font-display text-3xl lg:text-6xl text-gold leading-none">{s.v}</p>
                  <p className="text-[10px] lg:text-[11px] tracking-[0.24em] uppercase text-cream/70 mt-3 leading-tight">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
