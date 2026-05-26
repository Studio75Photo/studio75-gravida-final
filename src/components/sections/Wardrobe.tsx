import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

export function Wardrobe() {
  const { t } = useI18n();
  return (
    <section id="wardrobe" className="py-24 lg:py-36 px-6 lg:px-12 relative">
      <div className="absolute inset-2 gold-glow-bottom pointer-events-none" />
      <div className="relative max-w-[1200px] mx-auto text-center">
        <Reveal>
          <span className="eyebrow text-gold">{t.wardrobe.label}</span>
          <h2 className="font-display text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.05] mt-6 text-cream italic text-balance">
            {t.wardrobe.title}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-8 text-cream/70 leading-relaxed max-w-2xl mx-auto">
            {t.wardrobe.body}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
            {t.wardrobe.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center justify-center border border-gold/30 rounded-full px-5 py-2.5 text-sm text-gold font-display tracking-wide hover:bg-gold/10 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
