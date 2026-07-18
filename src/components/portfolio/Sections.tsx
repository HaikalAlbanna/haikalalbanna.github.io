import { ArrowRight, Download, ExternalLink, Github, Instagram, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import profileImg from "@/assets/profile.jpg";
import heroAbstract from "@/assets/hero-abstract.png";
import p1 from "@/assets/project1.png";
import p2 from "@/assets/project2.png";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import htmlIcon from "@/assets/icon/html.png";
import cssIcon from "@/assets/icon/css.png";
import jsIcon from "@/assets/icon/file_type_js_official_icon_130509j.png";
import tsIcon from "@/assets/icon/typescript.png";
import reactIcon from "@/assets/icon/react.png";
import phpIcon from "@/assets/icon/php.png";
import laravelIcon from "@/assets/icon/laravel.png";
import tailwindIcon from "@/assets/icon/tailwind.png";
import bladeIcon from "@/assets/icon/blade.png";
import bootstrapIcon from "@/assets/icon/bootstrap.png";
import mysqlIcon from "@/assets/icon/mysql.png";
import mariadbIcon from "@/assets/icon/mariadb.png";
import wordIcon from "@/assets/icon/word.png";
import excelIcon from "@/assets/icon/excel.png";
import pptIcon from "@/assets/icon/powerpoint.png";
import figmaIcon from "@/assets/icon/figma.png";
import canvaIcon from "@/assets/icon/canva.png";

const projectImages = [p1, p2, p3, p4];

const skillIconMap: Record<string, string> = {
  HTML: htmlIcon,
  CSS: cssIcon,
  JavaScript: jsIcon,
  TypeScript: tsIcon,
  React: reactIcon,
  PHP: phpIcon,
  Laravel: laravelIcon,
  Tailwind: tailwindIcon,
  Blade: bladeIcon,
  Bootstrap: bootstrapIcon,
  MySQL: mysqlIcon,
  MariaDB: mariadbIcon,
  Word: wordIcon,
  Excel: excelIcon,
  PowerPoint: pptIcon,
  Figma: figmaIcon,
  Canva: canvaIcon,
};

function SkillPlaceholder({ label }: { label: string }) {
  const icon = skillIconMap[label] ?? htmlIcon;

  return (
    <div className="group flex w-28 flex-col items-center gap-3 rounded-[10px] border border-border bg-background p-3 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
      <div className="flex h-16 w-16 items-center justify-center rounded-[14px] border border-border bg-card p-2">
        <img src={icon} alt={`${label} icon`} className="h-full w-full object-contain" />
      </div>
      <span className="text-sm font-semibold text-foreground">{label}</span>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_2px_var(--primary)]" />
      {children}
    </div>
  );
}

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="ambient-bg absolute inset-0 -z-10" />
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
                </span>
                {t.hero.badge}
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
                {t.hero.name}
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-4 text-lg font-medium text-muted-foreground">{t.hero.role}</p>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">{t.hero.desc}</p>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-[1.02] glow-primary"
                >
                  {t.hero.viewProjects}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="/CV - Haikal Tirta Albanna 2026.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  <Download className="h-4 w-4" />
                  {t.hero.downloadCV}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="relative mx-auto w-full max-w-md">
              <div
                className="absolute -inset-6 -z-10 rounded-[3rem] opacity-70 blur-3xl"
                style={{ background: "conic-gradient(from 210deg, var(--primary), var(--accent-cyan), var(--primary))" }}
              />
              <img
                src={heroAbstract}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -top-16 -right-14 w-64 opacity-70 mix-blend-screen animate-float-slow"
                width={512}
                height={512}
                loading="lazy"
              />
              <div className="relative glass-panel overflow-hidden rounded-[2rem] p-3">
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src={profileImg}
                    alt={t.hero.name}
                    width={912}
                    height={1104}
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/70 via-transparent" />
                </div>
                <div className="mt-3 flex items-center justify-between px-2 pb-1 text-xs">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    Palembang, ID
                  </div>
                  <div className="flex items-center gap-1.5 font-semibold text-accent-cyan">
                    Open to work
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <Eyebrow>{t.about.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {t.about.title}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  const { t } = useI18n();
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <Eyebrow>{t.skills.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {t.skills.title}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-[1.8fr_1fr]">
          <Reveal key={t.skills.categories[0].name} delay={0}>
            <div className="rounded-3xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold">{t.skills.categories[0].name}</h3>
              <div className="mt-6 grid grid-cols-4 gap-2 justify-items-center">
                {t.skills.categories[0].items.map((item) => (
                  <SkillPlaceholder key={item.label} label={item.label} />
                ))}
              </div>
            </div>
          </Reveal>
          <div className="grid gap-4">
            {t.skills.categories.slice(1).map((category, i) => (
              <Reveal key={category.name} delay={(i + 1) * 80}>
                <div className="mx-auto w-full max-w-md rounded-3xl border border-border bg-card p-6">
                  <h3 className="font-display text-lg font-semibold">{category.name}</h3>
                  <div className={`mt-6 grid ${category.items.length === 3 ? "grid-cols-3" : "grid-cols-2"} gap-3 justify-items-center`}>
                    {category.items.map((item) => (
                      <SkillPlaceholder key={item.label} label={item.label} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const { t } = useI18n();
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api) return;

    const updateActive = () => {
      try {
        const idx = typeof api.selectedScrollSnap === "function" ? api.selectedScrollSnap() : api.selectedScrollSnap;
        setActive(typeof idx === "number" ? idx : 0);
      } catch {
        setActive(0);
      }
    };

    updateActive();
    api.on("reInit", updateActive);
    api.on("select", updateActive);

    // ensure embla recalculates
    api.reInit();

    return () => {
      api?.off("select", updateActive);
      api?.off("reInit", updateActive);
    };
  }, [api]);

  // autoplay
  useEffect(() => {
    if (!api) return;
    if (isPaused) return;

    const id = setInterval(() => {
      if (!api) return;
      api.scrollNext();
    }, 4000);

    return () => clearInterval(id);
  }, [api, isPaused]);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <Eyebrow>{t.projects.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {t.projects.title}
          </h2>
        </Reveal>
        <div className="mt-12 relative">
          {/* show only first 2 projects */}
          <Carousel
            setApi={setApi}
              className="overflow-hidden rounded-2xl border border-border bg-card p-3"
              opts={{ align: "start", containScroll: "trimSnaps" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <CarouselPrevious className="bg-background/70 text-foreground shadow-md left-4" />
            <CarouselContent className="flex items-stretch">
              {t.projects.items.slice(0, 2).map((p, i) => (
                <CarouselItem
                  key={p.title}
                  className={`shrink-0 w-full px-2 transition-transform duration-300 ${
                    i === active ? "scale-100 z-10" : "scale-95 opacity-90"
                  }`}
                >
                  <article className="relative overflow-visible">
                    {/* stacked shadow layers behind card */}
                    <div className="absolute -inset-x-6 -inset-y-6 -z-20 flex items-center justify-center">
                      <div className="hidden md:block h-85 w-160 rounded-2xl bg-linear-to-br from-black/20 to-black/10 transform translate-x-6 translate-y-4 shadow-2xl opacity-40" />
                      <div className="hidden md:block h-85 w-160 rounded-2xl bg-linear-to-br from-black/10 to-black/5 transform translate-x-3 translate-y-2 shadow-lg opacity-30" />
                    </div>

                    <div className="glass-panel relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-xl">
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_640px]">
                        <div>
                          <h3 className="font-display text-2xl font-bold text-foreground">{p.title}</h3>
                          <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-xl">{p.desc}</p>

                          <h4 className="mt-6 text-sm font-semibold text-foreground">Technologies</h4>
                          <div className="mt-4 flex flex-wrap items-center gap-3">
                            {p.tech.map((tech) => (
                              <img key={tech} src={skillIconMap[tech] ?? htmlIcon} alt={tech} className="h-8 w-8 object-contain" />
                            ))}
                          </div>

                          <div className="mt-8 flex flex-wrap gap-3">
                            <a
                              href={p.repo ?? "#"}
                              target={p.repo ? "_blank" : undefined}
                              rel={p.repo ? "noreferrer" : undefined}
                              className="inline-flex items-center gap-3 rounded-full border border-border bg-secondary/40 px-5 py-3 text-sm font-semibold hover:bg-secondary"
                            >
                              <Github className="h-4 w-4" />
                              Github Repository
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center justify-center">
                          <div className="relative rounded-xl bg-white p-0 shadow-lg w-full md:w-160">
                            <div className="overflow-hidden rounded-lg">
                              <img src={projectImages[i]} alt={p.title} className="w-full h-55 md:h-105 object-cover rounded-lg" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="bg-background/70 text-foreground shadow-md right-4" />
          </Carousel>
          <div className="mt-4 flex justify-center gap-2">
            {t.projects.items.slice(0, 2).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  index === active ? "bg-primary scale-110" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  const { t } = useI18n();
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <Eyebrow>{t.exp.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {t.exp.title}
          </h2>
        </Reveal>
        <div className="relative mt-14 max-w-3xl">
          <div className="absolute left-2 top-2 bottom-2 w-px bg-linear-to-b from-primary via-border to-transparent md:left-1/2" />
          <ol className="space-y-8">
            {t.exp.items.map((item, i) => (
              <Reveal key={item.role + item.period} delay={i * 80}>
                <li className="relative pl-10 md:grid md:grid-cols-2 md:gap-10 md:pl-0">
                  <span className="absolute left-0 top-2 grid h-4 w-4 place-items-center rounded-full bg-background ring-4 ring-primary/30 md:left-[calc(50%-8px)]">
                    <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_2px_var(--primary)]" />
                  </span>
                  <div className={`md:text-right md:pr-10 ${i % 2 === 1 ? "md:order-2 md:text-left md:pr-0 md:pl-10" : ""}`}>
                    <div className="text-xs font-semibold uppercase tracking-widest text-accent-cyan">
                      {item.period}
                    </div>
                    <h3 className="mt-1 font-display text-lg font-semibold">{item.role}</h3>
                    <div className="text-sm text-muted-foreground">{item.company}</div>
                  </div>
                  <div className={`mt-2 md:mt-0 ${i % 2 === 1 ? "md:order-1 md:text-right md:pr-10" : "md:pl-10"}`}>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const { t } = useI18n();
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <Eyebrow>{t.testimonials.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {t.testimonials.title}
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.testimonials.items.map((q, i) => (
            <Reveal key={q.name} delay={i * 80}>
              <figure className="glass-panel h-full rounded-2xl p-6">
                <div className="font-display text-4xl leading-none text-primary">&ldquo;</div>
                <blockquote className="mt-2 text-sm leading-relaxed text-foreground">{q.quote}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-linear-to-br from-primary to-accent-cyan font-display text-sm font-bold text-primary-foreground">
                    {q.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{q.name}</div>
                    <div className="text-xs text-muted-foreground">{q.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="glass-panel relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16">
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--accent-cyan), transparent 70%)" }}
          />
          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr]">
            <Reveal>
              <Eyebrow>{t.contact.eyebrow}</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                {t.contact.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {t.contact.desc}
              </p>
              <div className="mt-8 space-y-3">
                <a
                  href="mailto:haikalalbanna2313@gmail.com"
                  className="flex items-center gap-3 text-sm font-medium hover:text-primary"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-secondary/40">
                    <Mail className="h-4 w-4" />
                  </span>
                  haikalalbanna2313@gmail.com
                </a>
                <div className="flex items-center gap-2 pt-2">
                  {[
                    { icon: Github, href: "https://github.com/HaikalAlbanna", label: "GitHub" },
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/in/haikal-tirta-albanna-546575192/",
                      label: "LinkedIn",
                    },
                    {
                      icon: Instagram,
                      href: "https://www.instagram.com/haikalalbanna23?igsh=NngwZG1sbnFhZDFx",
                      label: "Instagram",
                    },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-secondary/40 transition-all hover:border-primary hover:text-primary"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const subject = encodeURIComponent("Portofolio Contact from " + contactName);
                  const body = encodeURIComponent(
                    `Name: ${contactName}\nEmail: ${contactEmail}\n\nMessage:\n${contactMessage}`
                  );
                  const mailtoUrl = `mailto:haikalalbanna2313@gmail.com?subject=${subject}&body=${body}`;
                  const opened = window.open(mailtoUrl, "_blank");
                  if (!opened) {
                    window.location.href = mailtoUrl;
                  }
                  setContactName("");
                  setContactEmail("");
                  setContactMessage("");
                  setSent(true);
                  setTimeout(() => setSent(false), 2600);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {t.contact.name}
                    </span>
                    <input
                      required
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {t.contact.email}
                    </span>
                    <input
                      required
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t.contact.message}
                  </span>
                  <textarea
                    required
                    rows={5}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </label>
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-[1.01] glow-primary sm:w-auto"
                >
                  {sent ? t.contact.sent : t.contact.send}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <div className="text-sm text-muted-foreground">© 2026 Haikal Albanna</div>
      </div>
    </footer>
  );
}