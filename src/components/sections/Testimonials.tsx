import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}


export function Testimonials() {
  const { t } = useI18n();
  return (
    <section className="py-24 lg:py-36 px-6 lg:px-12 bg-ink">
      <div className="max-w-[1200px] mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow text-gold">{t.testimonials.label}</span>
          <h2 className="font-display text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.05] mt-6 text-cream text-balance">
            {t.testimonials.title}
          </h2>
          <p className="mt-5 text-gold tracking-widest">★★★★★</p>
          <p className="mt-2 text-xs tracking-[0.2em] uppercase text-muted-foreground">{t.testimonials.caption}</p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-6 lg:gap-8">
          {t.testimonials.reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
              <article className="relative bg-card border-l-2 border-gold p-8 lg:p-10 h-full">
                <p className="text-gold text-sm tracking-widest">★★★★★</p>
                <p className="font-display italic text-xl lg:text-2xl text-cream mt-6 leading-snug">
                  "{r.quote}"
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div
                    aria-hidden
                    className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center bg-ink border border-gold/50 font-display text-gold text-lg tracking-wider"
                  >
                    {initials(r.name)}
                  </div>
                  <div>
                    <p className="text-sm text-cream tracking-wide">{r.name}</p>
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">{r.place}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
