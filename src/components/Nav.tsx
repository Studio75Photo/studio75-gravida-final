import { useI18n, WHATSAPP } from "@/lib/i18n";
import { LangSwitcher } from "@/components/LangSwitcher";

export function Nav() {
  const { t } = useI18n();
  return (
    <header className="fixed top-9 inset-x-0 z-50 bg-ink/70 backdrop-blur-md border-b border-border/60">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12 h-16">
        <a href="#top" className="font-sans text-[11px] tracking-[0.32em] text-cream uppercase">
          Studio<span className="text-gold">75</span>
          <span className="text-muted-foreground ml-2 hidden sm:inline">Photography</span>
        </a>
        <div className="flex items-center gap-3">
          <LangSwitcher />
          <a
            href={WHATSAPP}
            target="_blank" rel="noopener"
            className="hidden md:inline-flex items-center text-[11px] tracking-[0.28em] uppercase border border-gold/70 text-gold px-5 py-2 hover:bg-gold hover:text-ink transition-colors"
          >
            {t.nav.reserve}
          </a>
        </div>
      </div>
    </header>
  );
}

export { WHATSAPP };
