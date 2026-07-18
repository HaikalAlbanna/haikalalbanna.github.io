import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "id" | "en";

const dict = {
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      experience: "Karier",
      contact: "Kontak",
      cta: "Hubungi Saya",
    },
    hero: {
      badge: "Tersedia untuk proyek baru",
      role: "Full-Stack Developer & Data Analyst",
      name: "Haikal Tirta Albanna",
      desc: "Selamat datang di portofolio pribadi saya! Saya merupakan seorang Full-Stack Developer dan Data Analyst yang memiliki ketertarikan dalam mengembangkan solusi digital yang fungsional dan inovatif. Melalui portofolio ini, Anda dapat melihat berbagai proyek yang telah saya kerjakan, mulai dari website, landing page, hingga aplikasi berbasis web dengan pengembangan frontend maupun backend. Setiap proyek dirancang dengan mengutamakan kualitas, tampilan yang responsif, serta pengalaman pengguna yang optimal untuk memberikan solusi yang efektif dan bernilai.",
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
      title: "Mengubah ide menjadi aplikasi yang bermanfaat.",
      p1: "Saya adalah lulusan S1 Teknik Informatika Universitas Bina Darma dengan IPK 3,83 dan konsentrasi Analisis Data. Memiliki minat yang kuat di bidang Full-Stack Development, saya berpengalaman dalam mengembangkan aplikasi web pada sisi frontend dan backend, mengelola basis data, serta menganalisis kebutuhan sistem untuk menghasilkan solusi digital yang efektif, responsif, dan sesuai dengan kebutuhan pengguna.",
      p2: "Selama mengikuti Program MSIB di LLDIKTI Wilayah II dan Program Magang Hub Kementerian Ketenagakerjaan di Balai Pemasyarakatan Kelas II OKU Induk, saya terlibat dalam pengembangan sistem informasi dan implementasi berbagai solusi berbasis web. Pengalaman tersebut membentuk kemampuan saya untuk bekerja secara kolaboratif, beradaptasi dengan cepat, serta menyelesaikan permasalahan secara sistematis. Saya terus mengembangkan keterampilan dan mengikuti perkembangan teknologi agar dapat memberikan kontribusi terbaik dalam setiap proyek yang saya kerjakan.",
    },
    skills: {
      eyebrow: "Keahlian",
      title: "Perangkat & disiplin yang saya kuasai.",
      categories: [
        {
          name: "Web Development",
          items: [
            { label: "HTML", color: "#E34F26" },
            { label: "CSS", color: "#1572B6" },
            { label: "JavaScript", color: "#F7DF1E" },
            { label: "TypeScript", color: "#3178C6" },
            { label: "React", color: "#61DAFB" },
            { label: "PHP", color: "#777BB4" },
            { label: "Laravel", color: "#FF2D20" },
            { label: "Tailwind", color: "#38B2AC" },
            { label: "Blade", color: "#1C1C1C" },
            { label: "Bootstrap", color: "#7952B3" },
            { label: "MySQL", color: "#4479A1" },
            { label: "MariaDB", color: "#003545" },
          ],
        },
        {
          name: "Office",
          items: [
            { label: "Word", color: "#2B579A" },
            { label: "Excel", color: "#217346" },
            { label: "PowerPoint", color: "#D24726" },
          ],
        },
        {
          name: "Design",
          items: [
            { label: "Figma", color: "#F24E1E" },
            { label: "Canva", color: "#00C4CC" },
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Proyek Pilihan",
      title: "Karya terbaru dari beberapa waktu terakhir.",
      cta: "Lihat detail",
      items: [
        {
          cat: "Web",
          title: "Landing Page BAPAS",
          desc: "Platform website instansi yang dirancang sebagai media informasi publik, menampilkan berita terbaru, profil BAPAS, layanan, dan informasi penting lainnya. Dilengkapi dashboard admin untuk pengelolaan konten dan pengguna secara terpusat.",
          tech: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
          repo: "https://github.com/HaikalAlbanna/Landingpage-BAPAS",
        },
        {
          cat: "Web",
          title: "Buku Agenda Surat",
          desc: "Platform digital untuk pengelolaan administrasi persuratan yang memungkinkan pencatatan, pengarsipan, dan pelacakan surat secara efisien. Dilengkapi dengan penomoran surat otomatis, unggah dokumen, pencarian data, dashboard admin, serta fitur ekspor laporan untuk mendukung proses administrasi yang lebih cepat dan akurat.",
          tech: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
          repo: "https://github.com/HaikalAlbanna/buku-agenda",
        },
        {
          cat: "E-commerce",
          title: "Kioswara",
          desc: "Platform e-commerce untuk brand lokal dengan editor storefront tanpa kode.",
          tech: ["Remix", "Stripe", "Sanity"],
        },
        {
          cat: "Fintech",
          title: "Cascade Insights",
          desc: "Alat visualisasi arus kas untuk UKM dengan integrasi bank dan laporan otomatis.",
          tech: ["Vue", "D3.js", "Node"],
        },
      ],
    },
    exp: {
      eyebrow: "Pengalaman",
      title: "Perjalanan karier yang membentuk saya.",
      items: [
        {
          period: "Desember 2025 — Juni 2026",
          role: "Pengelola Fasilitas Umum",
          company: "BAPAS Kelas II OKU Induk",
          desc: "Mengembangkan aplikasi web berbasis React, melakukan analisis kebutuhan sistem, perancangan database, desain antarmuka, serta implementasi fitur untuk mendukung digitalisasi layanan Registrasi dan administrasi.",
        },
        {
          period: "September 2024 — Desember 2024",
          role: "Kelompok Komputasi Awan",
          company: "Bangkit Academy led by Google, GoTo, & Traveloka",
          desc: "Mempelajari cloud computing menggunakan Google Cloud Platform (GCP), membangun REST API, mengelola database, menerapkan deployment aplikasi, serta berkolaborasi dalam pengembangan proyek capstone berbasis cloud.",
        },
        {
          period: "Februari 2024 — Juni 2024",
          role: "Pengembangan Sistem Informasi",
          company: "LLDIKTI Wilayah II",
          desc: "Mengembangkan aplikasi web berbasis Laravel, melakukan analisis kebutuhan sistem, dan perancangan database.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Testimoni",
      title: "Apa kata mereka yang pernah bekerja bersama.",
      items: [
        {
          quote:
            "Haikal menggabungkan sensitivitas desain dan disiplin engineering dengan sangat baik. Hasilnya rapi dan cepat.",
          name: "Maya Larasati",
          role: "Product Lead, Meridian",
        },
        {
          quote:
            "Komunikasi jelas, eksekusi tepat waktu, dan detail visual yang jarang saya temui pada developer.",
          name: "Reza Aditama",
          role: "Founder, Kioswara",
        },
        {
          quote: "Bekerja dengan Haikal membuat proses handoff desain ke development terasa mulus.",
          name: "Sinta Prameswari",
          role: "Design Lead, Halo Digital",
        },
      ],
    },
    contact: {
      eyebrow: "Kontak",
      title: "Mari Bangun Solusi Digital Bersama.",
      desc: "Saya terbuka untuk peluang kerja, kolaborasi, maupun proyek pengembangan website dan aplikasi. Jangan ragu untuk menghubungi saya, saya akan berusaha merespons secepat mungkin.",
      name: "Nama",
      email: "Email",
      message: "Pesan",
      send: "Kirim Pesan",
      sent: "Terkirim — terima kasih!",
    },
    footer: "Dibuat dengan teliti oleh Haikal Tirta Albanna.",
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Work",
      experience: "Career",
      contact: "Contact",
      cta: "Get in touch",
    },
    hero: {
      badge: "Available for new projects",
      role: "Full-Stack Developer & Data Analyst",
      name: "Haikal Tirta Albanna",
      desc: "Welcome to my personal portfolio! I'm a full-stack developer and data analyst with a passion for developing functional and innovative digital solutions. This portfolio showcases the various projects I've worked on, from websites and landing pages to web-based applications, with both front-end and back-end development. Each project is designed with quality, responsiveness, and an optimal user experience in mind, delivering effective and valuable solutions.",
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
      title: "Turning ideas into useful applications.",
      p1: "I graduated with a Bachelor's degree in Informatics Engineering from Bina Darma University with a GPA of 3.83, majoring in Data Analysis. With a strong interest in Full-Stack Development, I have experience developing front-end and back-end web applications, managing databases, and analyzing system requirements to produce effective, responsive, and user-friendly digital solutions.",
      p2: "During my MSIB Program at LLDIKTI Region II and the Ministry of Manpower's Hub Internship Program at the Class II OKU Induk Correctional Center, I was involved in information systems development and the implementation of various web-based solutions. These experiences have shaped my ability to work collaboratively, adapt quickly, and solve problems systematically. I continue to develop my skills and stay abreast of technological developments to ensure I can make the best possible contribution to every project I undertake.",
      tags: ["TypeScript", "React", "Next.js", "Node.js", "UI Systems", "Motion"],
    },
    skills: {
      eyebrow: "Skills",
      title: "Tools & disciplines I work with.",
      categories: [
        {
          name: "Web Development",
          items: [
            { label: "HTML", color: "#E34F26" },
            { label: "CSS", color: "#1572B6" },
            { label: "JavaScript", color: "#F7DF1E" },
            { label: "TypeScript", color: "#3178C6" },
            { label: "React", color: "#61DAFB" },
            { label: "PHP", color: "#777BB4" },
            { label: "Laravel", color: "#FF2D20" },
            { label: "Tailwind", color: "#38B2AC" },
            { label: "Blade", color: "#1C1C1C" },
            { label: "Bootstrap", color: "#7952B3" },
            { label: "MySQL", color: "#4479A1" },
            { label: "MariaDB", color: "#003545" },
          ],
        },
        {
          name: "Office",
          items: [
            { label: "Word", color: "#2B579A" },
            { label: "Excel", color: "#217346" },
            { label: "PowerPoint", color: "#D24726" },
          ],
        },
        {
          name: "Design",
          items: [
            { label: "Figma", color: "#F24E1E" },
            { label: "Canva", color: "#00C4CC" },
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Selected Work",
      title: "Recent projects from the last while.",
      cta: "View details",
      items: [
        {
          cat: "Web",
          title: "Landing Page BAPAS",
          desc: "A public-facing institutional website designed to surface latest news, BAPAS profile, services, and key information. Includes an admin dashboard for centralized content and user management.",
          tech: ["React", "JavaScript", "Tailwind"],
          repo: "https://github.com/HaikalAlbanna/Landingpage-BAPAS",
        },
        {
          cat: "Web",
          title: "Buku Agenda Surat",
          desc: "A digital platform for managing correspondence administration that enables efficient recording, archiving, and tracking of letters. Features include automatic letter numbering, document uploads, data search, an admin dashboard, and report export to support faster and more accurate administrative processes.",
          tech: ["React", "Laravel", "MySQL", "Tailwind"],
          repo: "https://github.com/HaikalAlbanna/buku-agenda",
        },
        {
          cat: "E-commerce",
          title: "Kioswara",
          desc: "E-commerce platform for local brands with a no-code storefront editor.",
          tech: ["Remix", "Stripe", "Sanity"],
        },
        {
          cat: "Fintech",
          title: "Cascade Insights",
          desc: "Cash-flow visualization tool for SMEs with bank integrations and automated reports.",
          tech: ["Vue", "D3.js", "Node"],
        },
      ],
    },
    exp: {
      eyebrow: "Experience",
      title: "The career path that shaped me.",
      items: [
        {
          period: "December 2025 — June 2026",
          role: "Public Facilities Manager",
          company: "BAPAS Class II OKU Induk",
          desc: "Developing React-based web applications, conducting system requirements analysis, designing databases, designing interfaces, and implementing features to support the digitalization of registration and administration services.",
        },
        {
          period: "September 2024 — December 2024",
          role: "Cloud Computing Group",
          company: "Bangkit Academy led by Google, GoTo, & Traveloka",
          desc: "Learning cloud computing using Google Cloud Platform (GCP), building REST APIs, managing databases, implementing application deployments, and collaborating on the development of cloud-based capstone projects.",
        },
        {
          period: "February 2024 — June 2024",
          role: "Information Systems Development",
          company: "LLDIKTI Region II",
          desc: "Developing Laravel-based web applications, conducting system requirements analysis, and database design.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "What collaborators say.",
      items: [
        {
          quote:
            "Haikal combines design sensitivity and engineering discipline beautifully. The output is crisp and fast.",
          name: "Maya Larasati",
          role: "Product Lead, Meridian",
        },
        {
          quote:
            "Clear communication, on-time execution, and a level of visual detail I rarely see in a developer.",
          name: "Reza Aditama",
          role: "Founder, Kioswara",
        },
        {
          quote: "Working with Haikal makes the design-to-development handoff feel seamless.",
          name: "Sinta Prameswari",
          role: "Design Lead, Halo Digital",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's Build Digital Solutions Together.",
      desc: "I'm open to job opportunities, collaborations, and website or app development projects. Feel free to reach out — I'll do my best to respond as quickly as possible.",
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