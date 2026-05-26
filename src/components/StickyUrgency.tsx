import { useI18n } from "@/lib/i18n";

// Edit this single variable to change the spot count
const AVAILABLE_SPOTS = 3;

export function StickyUrgency() {
  const { t } = useI18n();
  const month = t.months[new Date().getMonth()];
  const text = t.stickyUrgency.template
    .replace("{n}", String(AVAILABLE_SPOTS))
    .replace("{month}", month);
  return (
    <div className="fixed top-0 inset-x-0 z-[60] bg-gold text-ink">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 h-9 flex items-center justify-center gap-2 text-center">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="flex-shrink-0">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
        <p className="text-[10px] sm:text-[11px] tracking-[0.18em] uppercase font-medium leading-none">
          {text}
        </p>
      </div>
    </div>
  );
}
