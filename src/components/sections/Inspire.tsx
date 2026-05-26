import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import p3 from "@/assets/photo-3.jpg";
import p4 from "@/assets/photo-4.jpg";
import p5 from "@/assets/photo-5.jpg";
import p6 from "@/assets/photo-6.jpg";
import p7 from "@/assets/photo-7.jpg";
import p9 from "@/assets/photo-9.jpg";
import p10 from "@/assets/photo-10.jpg";

export function Inspire() {
  const { t } = useI18n();
  return (
    <section className="py-24 lg:py-36 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="eyebrow text-gold">{t.inspire.label}</span>
          <h2 className="font-display text-[34px] sm:text-[48px] lg:text-[64px] leading-[1.05] mt-6 text-cream text-balance">
            {t.inspire.title}{" "}
            <em className="italic text-gold font-light">{t.inspire.titleItalic}</em>
          </h2>
          <p className="mt-6 text-cream/70 leading-relaxed max-w-xl mx-auto">{t.inspire.body}</p>
        </Reveal>

        {/* Editorial staggered grid */}
        <div className="mt-16 grid grid-cols-6 gap-3 md:gap-5">
          <Reveal className="col-span-3 md:col-span-2">
            <img src={p7} alt="" loading="lazy" className="w-full aspect-[3/4] object-cover" />
          </Reveal>
          <Reveal delay={0.05} className="col-span-3 md:col-span-2 md:mt-12">
            <img src={p4} alt="" loading="lazy" className="w-full aspect-[3/4] object-cover" />
          </Reveal>
          <Reveal delay={0.1} className="col-span-6 md:col-span-2">
            <img src={p10} alt="" loading="lazy" className="w-full aspect-[3/4] object-cover" />
          </Reveal>
          <Reveal delay={0.05} className="col-span-2 md:col-span-2 md:mt-8">
            <img src={p3} alt="" loading="lazy" className="w-full aspect-[3/4] object-cover" />
          </Reveal>
          <Reveal delay={0.1} className="col-span-2 md:col-span-2">
            <img src={p6} alt="" loading="lazy" className="w-full aspect-[3/4] object-cover" />
          </Reveal>
          <Reveal delay={0.15} className="col-span-2 md:col-span-2 md:mt-12">
            <img src={p5} alt="" loading="lazy" className="w-full aspect-[3/4] object-cover" />
          </Reveal>
          <Reveal delay={0.2} className="col-span-6">
            <img src={p9} alt="" loading="lazy" className="w-full aspect-[16/9] object-cover object-top" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
