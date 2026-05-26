import { useI18n, WHATSAPP } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

export function Packages() {
  const { t } = useI18n();
  const [featured, vip, p15, p10] = t.packages.items;

  return (
    <section id="packages" className="py-24 lg:py-36 px-6 lg:px-12 bg-ink">
      <div className="max-w-[1300px] mx-auto">
        <Reveal className="text-center">
          <div className="inline-flex items-center gap-4">
            <span className="h-px w-8 bg-gold" />
            <span className="eyebrow text-gold">{t.packages.label}</span>
            <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-display text-[36px] sm:text-[48px] lg:text-[68px] leading-[1.05] mt-8 text-cream text-balance">
            {t.packages.title}{" "}
            <em className="italic text-gold font-light">{t.packages.titleItalic}</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-6 lg:gap-8">
          <Reveal>
            <Card pkg={featured} popular={t.packages.mostPopular} book={t.packages.book} variant="featured" />
          </Reveal>
          <Reveal delay={0.08}>
            <Card pkg={vip} book={t.packages.book} variant="vip" />
          </Reveal>
          <Reveal delay={0.12}>
            <Card pkg={p15} book={t.packages.book} variant="small" />
          </Reveal>
          <Reveal delay={0.16}>
            <Card pkg={p10} book={t.packages.book} variant="small" />
          </Reveal>
        </div>

        {/* Comparison table */}
        <Reveal className="mt-24 lg:mt-32">
          <h3 className="font-display text-2xl lg:text-4xl text-cream text-center italic">
            {t.packages.compare.title}
          </h3>
          <div className="mt-10 overflow-x-auto -mx-6 lg:mx-0 px-6 lg:px-0">
            <table className="min-w-[640px] w-full text-sm">
              <thead>
                <tr className="border-y border-gold/40">
                  {t.packages.compare.cols.map((c, i) => (
                    <th
                      key={c}
                      className={`py-4 px-4 text-[10px] tracking-[0.22em] uppercase text-gold font-medium ${
                        i === 0 ? "text-left" : "text-center"
                      }`}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.packages.compare.rows.map((row, ri) => {
                  const isFeatured = String(row[0]).includes("★");
                  return (
                    <tr
                      key={ri}
                      className={`border-b border-border ${isFeatured ? "bg-card/60" : ""}`}
                    >
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className={`py-4 px-4 ${
                            ci === 0
                              ? `text-left font-display text-base ${isFeatured ? "text-gold" : "text-cream"}`
                              : ci === row.length - 1
                              ? "text-center font-display text-lg text-gold"
                              : "text-center text-cream/80"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center text-[11px] tracking-[0.3em] uppercase border border-gold/70 text-gold px-8 py-4 hover:bg-gold hover:text-ink transition-colors"
            >
              {t.packages.book}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

type PkgItem = { name: string; price: string; includes: string[] };

function Card({
  pkg,
  popular,
  book,
  variant,
}: {
  pkg: PkgItem;
  popular?: string;
  book: string;
  variant: "featured" | "vip" | "small";
}) {
  const isFeatured = variant === "featured";
  const isVip = variant === "vip";

  return (
    <article
      className={`relative h-full flex flex-col border ${
        isFeatured ? "border-gold bg-card" : isVip ? "border-border bg-card" : "border-border bg-ink"
      }`}
    >
      {isFeatured && popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-ink text-[10px] tracking-[0.3em] uppercase px-4 py-1.5 font-medium">
          {popular}
        </span>
      )}

      <div className={`px-8 py-7 border-b ${isFeatured ? "bg-ink border-gold/40" : "border-border"}`}>
        <p className="text-[10px] tracking-[0.3em] uppercase text-gold">
          {isVip ? "VIP" : isFeatured ? "★" : "Pack"}
        </p>
        <h3 className="font-display text-2xl lg:text-3xl text-cream mt-2">{pkg.name}</h3>
        <p className="font-display text-5xl lg:text-6xl text-gold mt-4">{pkg.price}</p>
      </div>

      <ul className="px-8 py-7 space-y-3 flex-1">
        {pkg.includes.map((it) => (
          <li key={it} className="flex gap-3 text-sm text-cream/80 leading-relaxed">
            <span className="text-gold mt-[7px] flex-shrink-0 text-[8px]">◆</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>

      <div className="px-8 pb-8">
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener"
          className={`block w-full text-center py-4 text-[11px] tracking-[0.3em] uppercase transition-colors ${
            isFeatured
              ? "bg-gold text-ink hover:bg-cream"
              : "border border-gold/70 text-gold hover:bg-gold hover:text-ink"
          }`}
        >
          {book}
        </a>
      </div>
    </article>
  );
}
