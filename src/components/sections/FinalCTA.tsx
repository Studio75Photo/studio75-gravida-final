import { useI18n, WHATSAPP } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

export function FinalCTA() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden py-28 lg:py-44 px-6 lg:px-12">
      <div className="absolute inset-0 gold-glow-bottom pointer-events-none" />
      <div className="relative max-w-[1100px] mx-auto text-center">
        <Reveal>
          <p className="font-display italic text-gold text-lg">— {t.finalCta.eyebrow}</p>
          <h2 className="font-display text-[40px] sm:text-[60px] lg:text-[88px] leading-[1.02] mt-6 text-cream text-balance">
            {t.finalCta.title}{" "}
            <em className="italic text-gold font-light">{t.finalCta.titleItalic}</em>
          </h2>
          <p className="mt-8 text-cream/75 leading-relaxed max-w-xl mx-auto">{t.finalCta.body}</p>

          <div className="mt-12 flex justify-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-3 bg-gold text-ink px-10 py-5 text-[12px] tracking-[0.3em] uppercase hover:bg-cream transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.4-.5.1-.2.1-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 1.7.7 2.4.8 3.3.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.7.5 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3.1 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
              </svg>
              {t.finalCta.button}
            </a>
          </div>

          <p className="mt-12 text-xs sm:text-sm tracking-[0.18em] uppercase text-muted-foreground">
            {t.finalCta.contact}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border py-8 px-6">
      <p className="text-center text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
        {t.footer}
      </p>
    </footer>
  );
}
