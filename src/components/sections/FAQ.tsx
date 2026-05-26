import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

export function FAQ() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 lg:py-36 px-6 lg:px-12">
      <div className="max-w-[1000px] mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow text-gold">{t.faq.label}</span>
          <h2 className="font-display text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.05] mt-6 text-cream italic text-balance">
            {t.faq.title}
          </h2>
        </Reveal>

        <div className="mt-14 border-t border-border">
          {t.faq.items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={`${i}-${f.q}`} className="border-b border-border">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                >
                  <span className="flex items-baseline gap-5">
                    <span className="font-display text-gold text-base w-6 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-lg lg:text-2xl text-cream group-hover:text-gold transition-colors">
                      {f.q}
                    </span>
                  </span>
                  <span
                    className={`text-2xl text-gold transition-transform duration-500 flex-shrink-0 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pl-11 pr-8 pb-7 text-cream/70 leading-relaxed max-w-2xl">
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
