import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Twitter, ExternalLink, Sparkles } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import profileImg from "@/assets/profile.jpg";
import heroAbstract from "@/assets/hero-abstract.png";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const projectImages = [p1, p2, p3, p4];

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
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-cyan)] opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent-cyan)]" />
                </span>
                {t.hero.badge}
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
                {t.hero.name.split(" ")[0]}
                <br />
                <span className="text-gradient">{t.hero.name.split(" ")[1]}.</span>
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
                  href="#"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  <Download className="h-4 w-4" />
                  {t.hero.downloadCV}
                </a>
              </div>
            </Reveal>

            <Reveal delay={360}>
              <dl className="mt-12 grid grid-cols-3 gap-4 max-w-md">
                {t.hero.stats.map((s) => (
                  <div key={s.v} className="border-l-2 border-primary/60 pl-3">
                    <dt className="font-display text-2xl font-bold sm:text-3xl">{s.k}</dt>
                    <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
                  </div>
                ))}
              </dl>
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
                    alt="Arka Wijaya"
                    width={912}
                    height={1104}
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent" />
                </div>
                <div className="mt-3 flex items-center justify-between px-2 pb-1 text-xs">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    Jakarta, ID
                  </div>
                  <div className="flex items-center gap-1.5 font-semibold text-[var(--accent-cyan)]">
                    <Sparkles className="h-3.5 w-3.5" />
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
              <div className="flex flex-wrap gap-2 pt-2">
                {t.about.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
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
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.skills.groups.map((g, i) => (
            <Reveal key={g.name} delay={i * 80}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/20 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="font-display text-xs font-bold uppercase tracking-widest text-[var(--accent-cyan)]">
                  0{i + 1}
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold">{g.name}</h3>
                <ul className="mt-4 space-y-2">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const { t } = useI18n();
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <Eyebrow>{t.projects.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {t.projects.title}
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {t.projects.items.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={projectImages[i]}
                    alt={p.title}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
                    {p.cat}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                    <a
                      href="#"
                      aria-label={t.projects.cta}
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-secondary/40 transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((tech) => (
                      <span key={tech} className="rounded-md bg-secondary/60 px-2 py-1 text-xs font-medium text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
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
          <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-border to-transparent md:left-1/2" />
          <ol className="space-y-8">
            {t.exp.items.map((item, i) => (
              <Reveal key={item.role + item.period} delay={i * 80}>
                <li className="relative pl-10 md:grid md:grid-cols-2 md:gap-10 md:pl-0">
                  <span className="absolute left-0 top-2 grid h-4 w-4 place-items-center rounded-full bg-background ring-4 ring-primary/30 md:left-[calc(50%-8px)]">
                    <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_2px_var(--primary)]" />
                  </span>
                  <div className={`md:text-right md:pr-10 ${i % 2 === 1 ? "md:order-2 md:text-left md:pr-0 md:pl-10" : ""}`}>
                    <div className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-cyan)]">
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
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-[var(--accent-cyan)] font-display text-sm font-bold text-primary-foreground">
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
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t.contact.desc}</p>
              <div className="mt-8 space-y-3">
                <a href="mailto:hello@arka.dev" className="flex items-center gap-3 text-sm font-medium hover:text-primary">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-secondary/40">
                    <Mail className="h-4 w-4" />
                  </span>
                  hello@arka.dev
                </a>
                <div className="flex items-center gap-2 pt-2">
                  {[
                    { icon: Github, href: "#", label: "GitHub" },
                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                    { icon: Twitter, href: "#", label: "Twitter" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
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
                  setSent(true);
                  setTimeout(() => setSent(false), 2600);
                  (e.target as HTMLFormElement).reset();
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.contact.name}</span>
                    <input
                      required
                      type="text"
                      className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.contact.email}</span>
                    <input
                      required
                      type="email"
                      className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.contact.message}</span>
                  <textarea
                    required
                    rows={5}
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
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-gradient-to-br from-primary to-[var(--accent-cyan)] text-[10px] font-bold text-primary-foreground">
            A
          </span>
          {t.footer}
        </div>
        <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Arka Wijaya</div>
      </div>
    </footer>
  );
}