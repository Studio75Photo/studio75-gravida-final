import { useI18n } from "@/lib/i18n";

export function UrgencyBar() {
  const { t } = useI18n();
  return (
    <div className="bg-gold text-ink">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-3.5 flex items-center justify-center gap-3 text-center">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
        <p className="text-[11px] sm:text-xs tracking-[0.18em] uppercase font-medium">
          {t.urgency}
        </p>
      </div>
    </div>
  );
}
