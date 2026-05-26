import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Lang = "pt" | "en" | "es";

type Album = { name: string; price: string };
type Pkg = { name: string; price: string; featured?: boolean; vip?: boolean; includes: string[] };

type Dict = {
  months: string[];
  stickyUrgency: { template: string };
  floatingCta: string;
  nav: { reserve: string };
  hero: {
    eyebrow: string;
    titleA: string;
    titleItalic: string;
    titleB: string;
    studio: string;
    tagline: string;
    cta: string;
    stats: { v: string; l: string }[];
  };
  urgency: string;
  why: {
    label: string;
    pull: string;
    body: string;
    steps: { title: string; desc: string }[];
  };
  inspire: {
    label: string;
    title: string;
    titleItalic: string;
    body: string;
  };
  packages: {
    label: string;
    title: string;
    titleItalic: string;
    mostPopular: string;
    book: string;
    items: Pkg[];
    compare: { title: string; cols: string[]; rows: (string | number)[][] };
  };
  albums: {
    label: string;
    title: string;
    body: string;
    items: Album[];
  };
  testimonials: {
    label: string;
    title: string;
    caption: string;
    reviews: { quote: string; name: string; place: string }[];
  };
  faq: {
    label: string;
    title: string;
    items: { q: string; a: string }[];
  };
  wardrobe: { label: string; title: string; body: string; tags: string[] };
  reassurance: string;
  finalCta: {
    eyebrow: string;
    title: string;
    titleItalic: string;
    body: string;
    button: string;
    limited: string;
    contact: string;
  };
  footer: string;
};

const compareCols = {
  pt: ["Pacote", "Editadas", "Brutas", "Looks/Outfits", "Makeup", "Álbum", "Preço"],
  en: ["Package", "Edited", "Raw", "Outfits", "Makeup", "Album", "Price"],
  es: ["Pack", "Editadas", "Brutas", "Vestidos", "Makeup", "Álbum", "Precio"],
};

const compareRows: Record<Lang, (string | number)[][]> = {
  pt: [
    ["VIP 50 (Premium)", 50, "Todas", 6, "Sim", "Sim", "1.700€"],
    ["★ Especial 25 + 100", 25, 100, 4, "Sim", "—", "490€"],
    ["Pack 15", 15, "—", 3, "Sim", "—", "390€"],
    ["Pack 10", 10, "—", 2, "Sim", "—", "290€"],
  ],
  en: [
    ["VIP 50 (Premium)", 50, "All", 6, "Yes", "Yes", "€1,700"],
    ["★ Special 25 + 100", 25, 100, 4, "Yes", "—", "€490"],
    ["Pack 15", 15, "—", 3, "Yes", "—", "€390"],
    ["Pack 10", 10, "—", 2, "Yes", "—", "€290"],
  ],
  es: [
    ["VIP 50 (Premium)", 50, "Todas", 6, "Sí", "Sí", "1.700€"],
    ["★ Especial 25 + 100", 25, 100, 4, "Sí", "—", "490€"],
    ["Pack 15", 15, "—", 3, "Sí", "—", "390€"],
    ["Pack 10", 10, "—", 2, "Sí", "—", "290€"],
  ],
};

const dicts: Record<Lang, Dict> = {
  pt: {
    months: ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],
    stickyUrgency: { template: "Apenas {n} vagas disponíveis em {month} · Reserve já · Pacotes desde 290€" },
    floatingCta: "Reservar",
    nav: { reserve: "Reservar" },
    hero: {
      eyebrow: "Sessão Grávida",
      titleA: "A sua",
      titleItalic: "experiência",
      titleB: "fotográfica",
      studio: "Studio75 Photography · Lisboa",
      tagline: "Você só precisa de aparecer. Nós fazemos o resto.",
      cta: "Reservar agora",
      stats: [
        { v: "+30", l: "Prémios int." },
        { v: "Top 20", l: "Mundo" },
        { v: "+5000", l: "Famílias" },
      ],
    },
    urgency: "Agenda limitada · Reserve já a sua data com sinal de 50€ · Pacotes desde 290€",
    why: {
      label: "Porquê Studio75",
      pull: "Mais do que fotografias — um ritual de beleza, força e memória.",
      body: "Fundado no Brasil em 2007 e em Lisboa desde 2018, o Studio75 é um atelier premiado internacionalmente, especializado em fotografia de gestantes. Eleitos entre os 20 melhores fotógrafos de retrato do mundo pela Inspiration Photographers, criamos imagens que emocionam por gerações.",
      steps: [
        { title: "Chegada & Acolhimento", desc: "Recebida com calma, sem pressa, num espaço pensado para si." },
        { title: "Maquilhagem & Cabelo", desc: "Equipa profissional dedicada exclusivamente a si." },
        { title: "Escolha do Look", desc: "Mais de 200 looks exclusivos. O maior acervo de Portugal." },
        { title: "Direção Artística", desc: "Nunca ficará sem saber o que fazer. Guiamos cada pose, cada respiração." },
        { title: "As suas fotos", desc: "Imagens que vão emocionar por gerações." },
      ],
    },
    inspire: {
      label: "Deixe-se inspirar",
      title: "A sua sessão pode ter",
      titleItalic: "a sua cara.",
      body: "A nossa missão é guiá-la nesse processo — com sensibilidade, olhar editorial e total dedicação ao seu momento.",
    },
    packages: {
      label: "Investimento",
      title: "Escolha o capítulo",
      titleItalic: "do seu momento.",
      mostPopular: "Mais Escolhido",
      book: "Reservar este pacote",
      items: [
        {
          name: "Pack Especial 25 + 100",
          price: "490€",
          featured: true,
          includes: [
            "Sessão em estúdio",
            "Makeup + Hair Design",
            "4 looks/outfits à escolha",
            "25 fotos editadas em alta resolução",
            "+100 fotos sem edição",
            "Galeria privada online",
          ],
        },
        {
          name: "Pack VIP 50 — Premium",
          price: "1.700€",
          vip: true,
          includes: [
            "Consultoria por videoconferência",
            "Dia exclusivo no atelier · 6 outfits",
            "Pausa com snacks & mimos",
            "Makeup & Hair Design completo",
            "50 fotos editadas + todas as brutas",
            "Álbum premium 30x30 em camurça / linho / couro",
            "Shortfilm Making Of",
            "Pendrive com todas as fotos",
          ],
        },
        {
          name: "Pack 15",
          price: "390€",
          includes: ["3 looks/outfits", "Makeup profissional", "15 fotos editadas em alta resolução"],
        },
        {
          name: "Pack 10",
          price: "290€",
          includes: ["2 looks/outfits", "Makeup profissional", "10 fotos editadas em alta resolução"],
        },
      ],
      compare: { title: "Encontre o pacote ideal para si", cols: compareCols.pt, rows: compareRows.pt },
    },
    albums: {
      label: "Álbuns extra",
      title: "Toque, sinta e reviva em acabamento premium.",
      body: "Os seus retratos merecem um objeto à altura. Álbuns artesanais com revestimentos nobres e estojo dedicado.",
      items: [
        { name: "Basic 20×20 — capa fotográfica", price: "190€" },
        { name: "Basic 30×30 — capa fotográfica", price: "330€" },
        { name: "20×20 linho ou camurça + estojo", price: "520€" },
        { name: "30×30 linho ou camurça + estojo", price: "690€" },
      ],
    },
    testimonials: {
      label: "Mamãs Studio75",
      title: "Cartas de amor das nossas clientes.",
      caption: "+50 avaliações de 5 estrelas no Google",
      reviews: [
        {
          quote: "As fotos estão algo assim como de outro mundo. Brutal! Completamente magníficas, deslumbrantes e apaixonantes.",
          name: "Silvia Carina",
          place: "United Kingdom",
        },
        {
          quote: "Vocês querem mesmo me fazer chorar?! Só tenho a dizer: obrigada. As fotos estão mais do que eu imaginei, mais do que tudo.",
          name: "Elyani Tchissola",
          place: "Lisboa",
        },
      ],
    },
    faq: {
      label: "Perguntas frequentes",
      title: "Tudo o que precisa de saber.",
      items: [
        { q: "Qual a melhor altura para a sessão?", a: "Entre a 27ª e a 33ª semana de gestação — quando a barriga está bonita e ainda se sente confortável." },
        { q: "Preciso de levar roupa?", a: "Não. Temos mais de 200 looks/outfits exclusivos pensados para gestantes." },
        { q: "Posso levar a minha família?", a: "Claro. Companheiro(a) e filhos são muito bem-vindos nas imagens." },
        { q: "Em quanto tempo recebo as fotos?", a: "Em 3 dias úteis tem a galeria digital para escolha. As fotos editadas são entregues em até 15 dias úteis." },
        { q: "Como reservo a minha data?", a: "Com sinal de 50€. O restante é pago no dia da sessão." },
      ],
    },
    wardrobe: {
      label: "Vestuário exclusivo",
      title: "O maior acervo de looks para grávidas em Portugal",
      body: "Mais de 200 looks cuidadosamente selecionados — vestidos fluidos, bodysuits, tecidos, acessórios e composições completas para todos os estilos. Clássico, editorial, boho, nude, colorido. Aqui encontra o look que sempre imaginou.",
      tags: ["Clássico", "Editorial", "Boho", "Nude", "Dramático", "Colorido", "Minimalista", "Sensual", "Familiar"],
    },
    reassurance: "Muitas das nossas clientes nunca fizeram uma sessão fotográfica. E foram as que mais se surpreenderam.",
    finalCta: {
      eyebrow: "Agora é a sua vez",
      title: "Pronta para viver",
      titleItalic: "este momento?",
      body: "Mais de 5 mil famílias atendidas em Lisboa com carinho e excelência. Estamos prontos para a receber.",
      button: "Reservar por WhatsApp",
      limited: "Vagas limitadas",
      contact: "Tel: +351 910 247 389 · www.studio75.pt · Lisboa",
    },
    footer: "Studio75 Photography · Fotografia com Propósito",
  },

  en: {
    months: ["January","February","March","April","May","June","July","August","September","October","November","December"],
    stickyUrgency: { template: "Only {n} spots available in {month} · Book now · Packages from €290" },
    floatingCta: "Book now",
    nav: { reserve: "Book" },
    hero: {
      eyebrow: "Maternity Session",
      titleA: "Your",
      titleItalic: "photography",
      titleB: "experience",
      studio: "Studio75 Photography · Lisbon",
      tagline: "Just show up. We handle everything.",
      cta: "Book now",
      stats: [
        { v: "+30", l: "Int. Awards" },
        { v: "Top 20", l: "Worldwide" },
        { v: "+5000", l: "Families" },
      ],
    },
    urgency: "Limited availability · Secure your date with a €50 deposit · Packages from €290",
    why: {
      label: "Why Studio75",
      pull: "More than photographs — a ritual of beauty, strength and memory.",
      body: "Founded in Brazil in 2007 and based in Lisbon since 2018, Studio75 is an internationally awarded atelier specialised in maternity photography. Voted among the Top 20 portrait photographers worldwide by Inspiration Photographers, we craft images that move generations.",
      steps: [
        { title: "Arrival & Welcome", desc: "Received with calm, without rush, in a space designed for you." },
        { title: "Makeup & Hair", desc: "A professional team dedicated exclusively to you." },
        { title: "Choose Your Look", desc: "Over 200 exclusive looks. The largest collection in Portugal." },
        { title: "Artistic Direction", desc: "You'll never be lost. We guide every pose, every breath." },
        { title: "Your Photos", desc: "Images that will move generations." },
      ],
    },
    inspire: {
      label: "Get inspired",
      title: "Your session can look",
      titleItalic: "exactly like you.",
      body: "Our mission is to guide you through it — with sensitivity, an editorial eye and full dedication to your moment.",
    },
    packages: {
      label: "Investment",
      title: "Choose the chapter",
      titleItalic: "of your moment.",
      mostPopular: "Most Popular",
      book: "Book this package",
      items: [
        {
          name: "Pack Special 25 + 100",
          price: "€490",
          featured: true,
          includes: [
            "Studio session",
            "Makeup + Hair Design",
            "4 outfits of your choice",
            "25 edited high-resolution photos",
            "+100 unedited photos",
            "Private online gallery",
          ],
        },
        {
          name: "Pack VIP 50 — Premium",
          price: "€1,700",
          vip: true,
          includes: [
            "Video consultation",
            "Exclusive day at the atelier · 6 outfits",
            "Snack & treat break",
            "Full Makeup & Hair Design",
            "50 edited photos + all RAW files",
            "Premium 30x30 album in suede / linen / leather",
            "Making Of shortfilm",
            "USB drive with all photos",
          ],
        },
        {
          name: "Pack 15",
          price: "€390",
          includes: ["3 outfits", "Professional makeup", "15 edited high-resolution photos"],
        },
        {
          name: "Pack 10",
          price: "€290",
          includes: ["2 outfits", "Professional makeup", "10 edited high-resolution photos"],
        },
      ],
      compare: { title: "Find the right package for you", cols: compareCols.en, rows: compareRows.en },
    },
    albums: {
      label: "Extra Albums",
      title: "Touch, feel and relive in premium finishing.",
      body: "Your portraits deserve an object worthy of them. Handcrafted albums with noble coverings and dedicated case.",
      items: [
        { name: "Basic 20×20 — photo cover", price: "€190" },
        { name: "Basic 30×30 — photo cover", price: "€330" },
        { name: "20×20 linen or suede + case", price: "€520" },
        { name: "30×30 linen or suede + case", price: "€690" },
      ],
    },
    testimonials: {
      label: "Studio75 Mums",
      title: "Love letters from our clients.",
      caption: "+50 five-star reviews on Google",
      reviews: [
        {
          quote: "The photos are something out of this world. Stunning! Completely magnificent, breathtaking and captivating.",
          name: "Silvia Carina",
          place: "United Kingdom",
        },
        {
          quote: "Are you really trying to make me cry?! All I can say is thank you. The photos are more than I imagined, more than everything.",
          name: "Elyani Tchissola",
          place: "Lisbon",
        },
      ],
    },
    faq: {
      label: "Frequently Asked Questions",
      title: "Everything you need to know.",
      items: [
        { q: "What is the best time for the session?", a: "Between week 27 and 33 of pregnancy — when the belly is beautiful and you still feel comfortable." },
        { q: "Do I need to bring clothes?", a: "No. We have over 200 exclusive gowns designed for pregnant women." },
        { q: "Can I bring my family?", a: "Of course. Partners and children are very welcome in the images." },
        { q: "How long until I receive the photos?", a: "Within 3 working days you'll have the digital gallery to choose from. Edited photos are delivered within 15 working days." },
        { q: "How do I book my date?", a: "With a €50 deposit. The remaining amount is paid on the session day." },
      ],
    },
    wardrobe: {
      label: "Exclusive Wardrobe",
      title: "The largest maternity wardrobe collection in Portugal",
      body: "Over 200 carefully selected looks — flowing dresses, bodysuits, fabrics, accessories and complete compositions for every style. Classic, editorial, boho, nude, colourful. Here you'll find the look you always imagined.",
      tags: ["Classic", "Editorial", "Boho", "Nude", "Dramatic", "Colourful", "Minimalist", "Sensual", "Family"],
    },
    reassurance: "Many of our clients had never done a photo shoot before. They were the ones who surprised themselves the most.",
    finalCta: {
      eyebrow: "Now it's your turn",
      title: "Ready to live",
      titleItalic: "this moment?",
      body: "Over 5,000 families served in Lisbon with care and excellence. We are ready to welcome you.",
      button: "Book via WhatsApp",
      limited: "Limited spots",
      contact: "Tel: +351 910 247 389 · www.studio75.pt · Lisbon",
    },
    footer: "Studio75 Photography · Photography with Purpose",
  },

  es: {
    months: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
    stickyUrgency: { template: "Solo {n} plazas disponibles en {month} · Reserva ya · Paquetes desde 290€" },
    floatingCta: "Reservar",
    nav: { reserve: "Reservar" },
    hero: {
      eyebrow: "Sesión de Embarazo",
      titleA: "Tu",
      titleItalic: "experiencia",
      titleB: "fotográfica",
      studio: "Studio75 Photography · Lisboa",
      tagline: "Solo aparece. Nosotros nos encargamos de todo.",
      cta: "Reservar ahora",
      stats: [
        { v: "+30", l: "Premios int." },
        { v: "Top 20", l: "Mundo" },
        { v: "+5000", l: "Familias" },
      ],
    },
    urgency: "Agenda limitada · Reserva tu fecha con una señal de 50€ · Paquetes desde 290€",
    why: {
      label: "Por qué Studio75",
      pull: "Más que fotografías — un ritual de belleza, fuerza y memoria.",
      body: "Fundado en Brasil en 2007 y en Lisboa desde 2018, Studio75 es un atelier premiado internacionalmente, especializado en fotografía de embarazadas. Elegidos entre los 20 mejores fotógrafos de retrato del mundo por Inspiration Photographers, creamos imágenes que emocionan por generaciones.",
      steps: [
        { title: "Llegada & Acogida", desc: "Recibida con calma, sin prisa, en un espacio pensado para ti." },
        { title: "Maquillaje & Pelo", desc: "Equipo profesional dedicado exclusivamente a ti." },
        { title: "Elección del Look", desc: "Más de 200 looks exclusivos. El mayor acervo de Portugal." },
        { title: "Dirección Artística", desc: "Nunca te quedarás sin saber qué hacer. Guíamos cada pose, cada respiración." },
        { title: "Tus fotos", desc: "Imágenes que emocionarán por generaciones." },
      ],
    },
    inspire: {
      label: "Déjate inspirar",
      title: "Tu sesión puede tener",
      titleItalic: "tu propia cara.",
      body: "Nuestra misión es guiarte en ese proceso — con sensibilidad, mirada editorial y total dedicación a tu momento.",
    },
    packages: {
      label: "Inversión",
      title: "Elige el capítulo",
      titleItalic: "de tu momento.",
      mostPopular: "Más Elegido",
      book: "Reservar este pack",
      items: [
        {
          name: "Pack Especial 25 + 100",
          price: "490€",
          featured: true,
          includes: [
            "Sesión en estudio",
            "Makeup + Hair Design",
            "4 vestidos a elegir",
            "25 fotos editadas en alta resolución",
            "+100 fotos sin edición",
            "Galería privada online",
          ],
        },
        {
          name: "Pack VIP 50 — Premium",
          price: "1.700€",
          vip: true,
          includes: [
            "Consultoría por videoconferencia",
            "Día exclusivo en el atelier · 6 outfits",
            "Pausa con snacks & mimos",
            "Makeup & Hair Design completo",
            "50 fotos editadas + todas las brutas",
            "Álbum premium 30x30 en ante / lino / cuero",
            "Shortfilm Making Of",
            "Pendrive con todas las fotos",
          ],
        },
        {
          name: "Pack 15",
          price: "390€",
          includes: ["3 vestidos", "Maquillaje profesional", "15 fotos editadas en alta resolución"],
        },
        {
          name: "Pack 10",
          price: "290€",
          includes: ["2 vestidos", "Maquillaje profesional", "10 fotos editadas en alta resolución"],
        },
      ],
      compare: { title: "Encuentra el pack ideal para ti", cols: compareCols.es, rows: compareRows.es },
    },
    albums: {
      label: "Álbumes extra",
      title: "Toca, siente y revive en acabado premium.",
      body: "Tus retratos merecen un objeto a su altura. Álbumes artesanales con revestimientos nobles y estuche dedicado.",
      items: [
        { name: "Basic 20×20 — tapa fotográfica", price: "190€" },
        { name: "Basic 30×30 — tapa fotográfica", price: "330€" },
        { name: "20×20 lino o ante + estuche", price: "520€" },
        { name: "30×30 lino o ante + estuche", price: "690€" },
      ],
    },
    testimonials: {
      label: "Mamás Studio75",
      title: "Cartas de amor de nuestras clientas.",
      caption: "+50 opiniones de 5 estrellas en Google",
      reviews: [
        {
          quote: "Las fotos son algo de otro mundo. ¡Brutal! Completamente magníficas, deslumbrantes y apasionantes.",
          name: "Silvia Carina",
          place: "Reino Unido",
        },
        {
          quote: "¿De verdad queréis hacerme llorar?! Solo puedo decir: gracias. Las fotos son más de lo que imaginé, más que todo.",
          name: "Elyani Tchissola",
          place: "Lisboa",
        },
      ],
    },
    faq: {
      label: "Preguntas Frecuentes",
      title: "Todo lo que necesitas saber.",
      items: [
        { q: "¿Cuál es la mejor época para la sesión?", a: "Entre la semana 27 y 33 del embarazo — cuando la barriga está bonita y aún te sientes cómoda." },
        { q: "¿Necesito llevar ropa?", a: "No. Tenemos más de 200 vestidos exclusivos diseñados para embarazadas." },
        { q: "¿Puedo llevar a mi familia?", a: "Por supuesto. Pareja e hijos son muy bienvenidos en las imágenes." },
        { q: "¿En cuánto tiempo recibo las fotos?", a: "En 3 días hábiles tendrás la galería digital para elegir. Las fotos editadas se entregan en hasta 15 días hábiles." },
        { q: "¿Cómo reservo mi fecha?", a: "Con una señal de 50€. El resto se paga el día de la sesión." },
      ],
    },
    wardrobe: {
      label: "Vestuario exclusivo",
      title: "El mayor acervo de looks para embarazadas en Portugal",
      body: "Más de 200 looks cuidadosamente seleccionados — vestidos fluidos, bodysuits, tejidos, accesorios y composiciones completas para todos los estilos. Clásico, editorial, boho, nude, colorido. Aquí encontrarás el look que siempre imaginaste.",
      tags: ["Clásico", "Editorial", "Boho", "Nude", "Dramático", "Colorido", "Minimalista", "Sensual", "Familiar"],
    },
    reassurance: "Muchas de nuestras clientas nunca habían hecho una sesión fotográfica. Y fueron las que más se sorprendieron.",
    finalCta: {
      eyebrow: "Ahora es tu turno",
      title: "¿Lista para vivir",
      titleItalic: "este momento?",
      body: "Más de 5 mil familias atendidas en Lisboa con cariño y excelencia. Estamos listos para recibirte.",
      button: "Reservar por WhatsApp",
      limited: "Plazas limitadas",
      contact: "Tel: +351 910 247 389 · www.studio75.pt · Lisboa",
    },
    footer: "Studio75 Photography · Fotografía con Propósito",
  },
};

const I18nCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({
  lang: "pt",
  setLang: () => {},
  t: dicts.pt,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  useEffect(() => {
    try {
      const saved = localStorage.getItem("s75-lang") as Lang | null;
      if (saved && dicts[saved]) setLang(saved);
    } catch {}
  }, []);
  useEffect(() => {
    try { localStorage.setItem("s75-lang", lang); } catch {}
    document.documentElement.lang = lang;
  }, [lang]);
  return <I18nCtx.Provider value={{ lang, setLang, t: dicts[lang] }}>{children}</I18nCtx.Provider>;
}

export const useI18n = () => useContext(I18nCtx);
export const WHATSAPP = "https://wa.me/351910247389";
