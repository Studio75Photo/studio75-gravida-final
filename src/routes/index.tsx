import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Nav } from "@/components/Nav";
import { StickyUrgency } from "@/components/StickyUrgency";
import { Hero } from "@/components/sections/Hero";
import { Why } from "@/components/sections/Why";
import { Photographers } from "@/components/sections/Photographers";
import { Wardrobe } from "@/components/sections/Wardrobe";
import { Inspire } from "@/components/sections/Inspire";
import { Packages } from "@/components/sections/Packages";
import { Albums } from "@/components/sections/Albums";
import { Testimonials } from "@/components/sections/Testimonials";
import { ReassuranceQuote } from "@/components/sections/ReassuranceQuote";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA, Footer } from "@/components/sections/FinalCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Studio75 — Fotografia de Gestantes em Lisboa | Experiência Premium" },
      {
        name: "description",
        content:
          "Studio75 — fotografia premiada de gestantes em Lisboa. Pacotes desde 290€. Reserve a sua sessão com sinal de 50€.",
      },
      { property: "og:title", content: "Studio75 — Fotografia de Gestantes em Lisboa" },
      { property: "og:description", content: "Uma experiência fotográfica luxuosa para a sua gravidez." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <I18nProvider>
      <div className="bg-ink text-foreground min-h-screen">
        <StickyUrgency />
        <Nav />
        <main>
          <Hero />
          <Why />
          <Photographers />
          <Wardrobe />
          <Inspire />
          <Packages />
          <Albums />
          <Testimonials />
          <ReassuranceQuote />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </I18nProvider>
  );
}
