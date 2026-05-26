import { useI18n, type Lang } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import photo from "@/assets/photographers-rafaela-dimas.jpg";

const copy: Record<Lang, { label: string; title: string; titleItalic: string; body: string; signature: string; role: string }> = {
  pt: {
    label: "Os fotógrafos",
    title: "Rafaela Paz",
    titleItalic: "& Dimas Jr.",
    body: "Casal, sócios e olhares cúmplices por detrás do Studio75. Há mais de quinze anos transformam a fotografia de gestantes numa experiência sensível, premiada internacionalmente e construída em torno de cada mulher.",
    signature: "Fundadores · Studio75 Photography",
    role: "Lisboa · Brasil",
  },
  en: {
    label: "The photographers",
    title: "Rafaela Paz",
    titleItalic: "& Dimas Jr.",
    body: "A couple, business partners and complicit eyes behind Studio75. For over fifteen years they have turned maternity photography into a sensitive, internationally awarded experience built around each woman.",
    signature: "Founders · Studio75 Photography",
    role: "Lisbon · Brazil",
  },
  es: {
    label: "Los fotógrafos",
    title: "Rafaela Paz",
    titleItalic: "& Dimas Jr.",
    body: "Pareja, socios y miradas cómplices detrás de Studio75. Desde hace más de quince años transforman la fotografía de embarazadas en una experiencia sensible, premiada internacionalmente y construida en torno a cada mujer.",
    signature: "Fundadores · Studio75 Photography",
    role: "Lisboa · Brasil",
  },
};

export function Photographers() {
  const { lang } = useI18n();
  const c = copy[lang];
  return (
    <section id="photographers" className="py-24 lg:py-36 px-6 lg:px-12 relative">
      <div className="absolute inset-0 gold-glow-bottom pointer-events-none" />
      <div className="relative max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-3 lg:-inset-4 border border-gold/40" />
            <img
              src={photo}
              alt="Rafaela Paz & Dimas Jr. — Studio75 Photography"
              className="relative w-full aspect-[4/5] object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow text-gold">{c.label}</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-cream mt-8 leading-[1.05]">
            {c.title}{" "}
            <em className="italic text-gold font-light">{c.titleItalic}</em>
          </h2>
          <div className="gold-divider mt-8" />
          <p className="mt-8 text-cream/75 leading-relaxed max-w-xl">{c.body}</p>
          <p className="mt-10 text-[11px] tracking-[0.3em] uppercase text-gold">{c.signature}</p>
          <p className="mt-2 text-[11px] tracking-[0.3em] uppercase text-muted-foreground">{c.role}</p>
        </Reveal>
      </div>
    </section>
  );
}
