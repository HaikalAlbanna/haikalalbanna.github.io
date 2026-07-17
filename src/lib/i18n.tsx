import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "id" | "en";

const dict = {
  id: {
    nav: { home: "Beranda", about: "Tentang", skills: "Keahlian", projects: "Proyek", experience: "Karier", contact: "Kontak", cta: "Hubungi Saya" },
    hero: {
      badge: "Tersedia untuk proyek baru",
      role: "Full-Stack Developer & Data Analyst",
      name: "Haikal Tirta Albanna",
      desc: "Saya merancang dan membangun produk digital yang elegan, cepat, dan berorientasi pada pengalaman pengguna. Berbasis di Jakarta, bekerja dengan tim di seluruh dunia.",
      viewProjects: "Lihat Proyek",
      downloadCV: "Unduh CV",
      stats: [
        { k: "50+", v: "Proyek diluncurkan" },
        { k: "6+", v: "Tahun pengalaman" },
        { k: "20+", v: "Klien global" },
      ],
    },
    about: {
      eyebrow: "Tentang Saya",
      title: "Membangun produk digital yang bermakna.",
      p1: "Saya seorang full-stack developer dengan fokus pada web modern dan pengalaman antarmuka yang halus. Selama enam tahun terakhir saya membantu startup dan brand memvisualisasikan ide menjadi produk nyata—dari riset, desain, hingga peluncuran.",
      p2: "Fokus utama saya adalah menyederhanakan sesuatu yang rumit menjadi antarmuka yang intuitif, tanpa mengorbankan performa maupun estetika.",
      tags: ["TypeScript", "React", "Next.js", "Node.js", "UI Systems", "Motion"],
    },
    skills: {
      eyebrow: "Keahlian",
      title: "Perangkat & disiplin yang saya kuasai.",
      groups: [
        { name: "Frontend", items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
        { name: "Backend", items: ["Node.js", "PostgreSQL", "REST & GraphQL", "Serverless"] },
        { name: "Desain", items: ["Design Systems", "Figma", "Prototyping", "Motion Design"] },
        { name: "Lainnya", items: ["DevOps ringan", "Web Performance", "Aksesibilitas", "SEO teknis"] },
      ],
    },
    projects: {
      eyebrow: "Proyek Pilihan",
      title: "Karya terbaru dari beberapa waktu terakhir.",
      cta: "Lihat detail",
      items: [
        { cat: "SaaS", title: "Northwind Analytics", desc: "Dashboard analitik real-time untuk tim marketing dengan fokus pada kecepatan render dan aksesibilitas.", tech: ["Next.js", "tRPC", "Postgres"] },
        { cat: "Mobile", title: "Lumen Journal", desc: "Aplikasi journaling minimalis dengan mode gelap adaptif dan sinkronisasi offline-first.", tech: ["React Native", "SQLite", "Zustand"] },
        { cat: "E-commerce", title: "Kioswara", desc: "Platform e-commerce untuk brand lokal dengan editor storefront tanpa kode.", tech: ["Remix", "Stripe", "Sanity"] },
        { cat: "Fintech", title: "Cascade Insights", desc: "Alat visualisasi arus kas untuk UKM dengan integrasi bank dan laporan otomatis.", tech: ["Vue", "D3.js", "Node"] },
      ],
    },
    exp: {
      eyebrow: "Pengalaman",
      title: "Perjalanan karier yang membentuk saya.",
      items: [
        { period: "2023 — Sekarang", role: "Senior Product Engineer", company: "Meridian Studio", desc: "Memimpin pengembangan produk klien enterprise di sektor fintech dan edtech." },
        { period: "2021 — 2023", role: "Full-Stack Developer", company: "Halo Digital", desc: "Membangun sistem desain internal dan lima produk SaaS dari nol hingga rilis." },
        { period: "2019 — 2021", role: "Frontend Developer", company: "Kolektif Studio", desc: "Fokus pada website interaktif untuk klien brand & agensi kreatif." },
        { period: "2018 — 2019", role: "UI/UX Intern", company: "Rekan Lab", desc: "Riset dan prototyping produk untuk startup tahap awal." },
      ],
    },
    testimonials: {
      eyebrow: "Testimoni",
      title: "Apa kata mereka yang pernah bekerja bersama.",
      items: [
        { quote: "Haikal menggabungkan sensitivitas desain dan disiplin engineering dengan sangat baik. Hasilnya rapi dan cepat.", name: "Maya Larasati", role: "Product Lead, Meridian" },
        { quote: "Komunikasi jelas, eksekusi tepat waktu, dan detail visual yang jarang saya temui pada developer.", name: "Reza Aditama", role: "Founder, Kioswara" },
        { quote: "Bekerja dengan Haikal membuat proses handoff desain ke development terasa mulus.", name: "Sinta Prameswari", role: "Design Lead, Halo Digital" },
      ],
    },
    contact: {
      eyebrow: "Kontak",
      title: "Punya ide? Mari kita wujudkan.",
      desc: "Saya terbuka untuk kolaborasi jangka panjang maupun proyek singkat. Kirim pesan, biasanya saya balas dalam 24 jam.",
      name: "Nama",
      email: "Email",
      message: "Pesan",
      send: "Kirim Pesan",
      sent: "Terkirim — terima kasih!",
    },
    footer: "Dibuat dengan teliti oleh Haikal Tirta Albanna.",
  },
  en: {
    nav: { home: "Home", about: "About", skills: "Skills", projects: "Work", experience: "Career", contact: "Contact", cta: "Get in touch" },
    hero: {
      badge: "Available for new projects",
      role: "Full-Stack Developer & Data Analyst",
      name: "Haikal Tirta Albanna",
      desc: "I design and build elegant, high-performance digital products with a focus on user experience. Based in Jakarta, working with teams around the world.",
      viewProjects: "View Projects",
      downloadCV: "Download CV",
      stats: [
        { k: "50+", v: "Products shipped" },
        { k: "6+", v: "Years experience" },
        { k: "20+", v: "Global clients" },
      ],
    },
    about: {
      eyebrow: "About",
      title: "Building digital products that matter.",
      p1: "I'm a full-stack developer focused on the modern web and refined interface experiences. For the past six years I've helped startups and brands turn ideas into shipped products—from research and design to launch.",
      p2: "My core focus is simplifying the complex into intuitive interfaces, without ever compromising performance or craft.",
      tags: ["TypeScript", "React", "Next.js", "Node.js", "UI Systems", "Motion"],
    },
    skills: {
      eyebrow: "Skills",
      title: "Tools & disciplines I work with.",
      groups: [
        { name: "Frontend", items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
        { name: "Backend", items: ["Node.js", "PostgreSQL", "REST & GraphQL", "Serverless"] },
        { name: "Design", items: ["Design Systems", "Figma", "Prototyping", "Motion Design"] },
        { name: "Other", items: ["Lightweight DevOps", "Web Performance", "Accessibility", "Technical SEO"] },
      ],
    },
    projects: {
      eyebrow: "Selected Work",
      title: "Recent projects from the last while.",
      cta: "View details",
      items: [
        { cat: "SaaS", title: "Northwind Analytics", desc: "Real-time analytics dashboard for marketing teams focused on render speed and accessibility.", tech: ["Next.js", "tRPC", "Postgres"] },
        { cat: "Mobile", title: "Lumen Journal", desc: "A minimalist journaling app with adaptive dark mode and offline-first sync.", tech: ["React Native", "SQLite", "Zustand"] },
        { cat: "E-commerce", title: "Kioswara", desc: "E-commerce platform for local brands with a no-code storefront editor.", tech: ["Remix", "Stripe", "Sanity"] },
        { cat: "Fintech", title: "Cascade Insights", desc: "Cash-flow visualization tool for SMEs with bank integrations and automated reports.", tech: ["Vue", "D3.js", "Node"] },
      ],
    },
    exp: {
      eyebrow: "Experience",
      title: "The career path that shaped me.",
      items: [
        { period: "2023 — Present", role: "Senior Product Engineer", company: "Meridian Studio", desc: "Leading product engineering for enterprise clients in fintech and edtech." },
        { period: "2021 — 2023", role: "Full-Stack Developer", company: "Halo Digital", desc: "Built the internal design system and five SaaS products from zero to launch." },
        { period: "2019 — 2021", role: "Frontend Developer", company: "Kolektif Studio", desc: "Focused on interactive websites for brand and creative agency clients." },
        { period: "2018 — 2019", role: "UI/UX Intern", company: "Rekan Lab", desc: "Research and prototyping for early-stage startups." },
      ],
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "What collaborators say.",
      items: [
        { quote: "Haikal combines design sensitivity and engineering discipline beautifully. The output is crisp and fast.", name: "Maya Larasati", role: "Product Lead, Meridian" },
        { quote: "Clear communication, on-time execution, and a level of visual detail I rarely see in a developer.", name: "Reza Aditama", role: "Founder, Kioswara" },
        { quote: "Working with Haikal makes the design-to-development handoff feel seamless.", name: "Sinta Prameswari", role: "Design Lead, Halo Digital" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Have an idea? Let's build it.",
      desc: "I'm open to long-term collaborations and short-term projects alike. Drop me a note — I usually reply within 24 hours.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      sent: "Sent — thank you!",
    },
    footer: "Crafted with care by Haikal Tirta Albanna.",
  },
};

type Dict = (typeof dict)["id"];

const I18nContext = createContext<{ lang: Lang; t: Dict; toggle: () => void } | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("id");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (stored === "id" || stored === "en") setLang(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, t: dict[lang], toggle: () => setLang((l) => (l === "id" ? "en" : "id")) }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}