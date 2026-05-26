import { useI18n, type Lang } from "@/lib/i18n";

const opts: { code: Lang; flag: string; label: string }[] = [
  { code: "pt", flag: "🇵🇹", label: "PT" },
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "es", flag: "🇪🇸", label: "ES" },
];

export function LangSwitcher() {
  const { lang, setLang } = useI18n();
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border/80 bg-ink/60 backdrop-blur p-1">
      {opts.map((o) => {
        const active = lang === o.code;
        return (
          <button
            key={o.code}
            onClick={() => setLang(o.code)}
            aria-label={`Switch to ${o.label}`}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase transition-colors ${
              active ? "bg-gold text-ink" : "text-cream/70 hover:text-cream"
            }`}
          >
            <span className="text-sm leading-none">{o.flag}</span>
            <span>{o.label}</span>
          </button>
        );
      })}
    </div>
  );
}
