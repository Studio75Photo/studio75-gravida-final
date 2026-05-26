import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

export function ReassuranceQuote() {
  const { t } = useI18n();
  return (
    <section className="py-16 lg:py-24 px-6 lg:px-12">
      <div className="max-w-[900px] mx-auto text-center">
        <Reveal>
          <p className="font-display italic text-2xl sm:text-3xl lg:text-[40px] text-cream leading-relaxed text-balance">
            "{t.reassurance}"
          </p>
          <div className="gold-divider mx-auto mt-10" />
        </Reveal>
      </div>
    </section>
  );
}
