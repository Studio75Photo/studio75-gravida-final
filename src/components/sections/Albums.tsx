import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import album from "@/assets/photo-9.jpg";

export function Albums() {
  const { t } = useI18n();
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-[1300px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-3 border border-gold/40" />
            <img src={album} alt="" loading="lazy" className="relative w-full aspect-[4/5] object-cover" />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7">
          <span className="eyebrow text-gold">{t.albums.label}</span>
          <h3 className="font-display text-[32px] lg:text-[52px] leading-[1.05] mt-6 text-cream italic text-balance">
            {t.albums.title}
          </h3>
          <p className="mt-6 text-cream/70 leading-relaxed max-w-md">{t.albums.body}</p>
          <ul className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-4">
            {t.albums.items.map((a) => (
              <li key={a.name} className="flex justify-between items-baseline border-b border-border pb-3">
                <span className="text-cream/80 text-sm pr-3">{a.name}</span>
                <span className="font-display text-xl text-gold flex-shrink-0">{a.price}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
