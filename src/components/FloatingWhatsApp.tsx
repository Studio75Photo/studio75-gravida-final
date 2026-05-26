import { useI18n, WHATSAPP } from "@/lib/i18n";

const WaIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.4-.5.1-.2.1-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 1.7.7 2.4.8 3.3.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.7.5 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3.1 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
  </svg>
);

export function FloatingWhatsApp() {
  const { t } = useI18n();
  return (
    <>
      {/* Desktop: floating round FAB */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="hidden md:block fixed bottom-6 right-6 z-50 group"
      >
        <span className="absolute inset-0 rounded-full bg-gold animate-ping opacity-25" />
        <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)] hover:scale-110 transition-transform">
          <WaIcon size={26} />
        </span>
      </a>

      {/* Mobile: full-width pill at bottom */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener"
        className="md:hidden fixed bottom-4 left-4 right-4 z-50 flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-full shadow-[0_10px_30px_-5px_rgba(0,0,0,0.6)] text-[12px] tracking-[0.28em] uppercase font-medium"
      >
        <WaIcon size={20} />
        {t.floatingCta}
      </a>
    </>
  );
}
