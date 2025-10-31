"use client";

import { useState } from "react";

// shadcn/ui

import { Header } from "./Header";
import { profile } from "@/data/profile";
import { Hero } from "./Hero";
import { Technologies } from "./Technologies";

// ===== Dados =====


const projects = [
  {
    title: "Contaí — Gestão Financeira (Fullstack)",
    description:
      "App de finanças com lançamentos, categorias e visão de saldo. Fullstack com autenticação e UI limpa.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Server Actions", "Shadcn"],
    link: "https://contai-w9zq.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "B7Shop — E-commerce demo",
    description:
      "Catálogo, carrinho e fluxo básico de compra. Foco em arquitetura de componentes e estado.",
    tags: ["React", "Next.js"],
    link: "#",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "B7Tasks — To-do/CRUD",
    description: "CRUD acessível e testável, com filtros e persistência.",
    tags: ["React", "Next.js"],
    link: "#",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1400&auto=format&fit=crop",
  },
];



const experience = [
  {
    title: "Engenheiro de Software — B7Web",
    period: "Mai 2023 – Presente • Brasil",
    bullets: [
      "Plataforma de estudos com gamificação, comentários e APIs com IA.",
      "Stack: React, Next.js, Node.js.",
    ],
  },
  {
    title: "Desenvolvedor Full Stack — Freelancer",
    period: "Fev 2025 – Mar 2025 • Brasil",
    bullets: [
      "Vida VIP Locações: e-commerce de reservas com admin.",
      "Stack: Next.js, Prisma, PostgreSQL, Server Actions (VPS).",
    ],
  },
  {
    title: "Estagiário — WEG (Edge Devices & Conectividade)",
    period: "Mar 2022 – Ago 2022 • Brasil",
    bullets: ["Apoio em firmware (C/C++), hardware e validação de produto."],
  },
];

const education = [
  {
    title: "Seu Curso — Sua Instituição",
    period: "Período",
    details: "Destaque rápido (TCC, projetos, monitoria).",
  },
];

// ===== UI =====
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
      {children}
    </h2>
  );
}

export default function Page() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
//   const prefersReduced = useReducedMotion();

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_100%_0%,rgba(16,185,129,0.08),transparent)] bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <div className="max-w-5xl mx-auto">
          <Header setTheme={setTheme} theme={theme}/>

          {/* Coluna de conteúdo */}
          <main className="">
          <Hero />
          <Technologies />
            

            {/* Projetos */}
            {/* <section id="projects" className="space-y-4">
              <SectionTitle>Projetos em destaque</SectionTitle>
              {projects.map((p) => (
                <Link
                  key={p.title}
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <Card className="hover:shadow-xl transition backdrop-blur">
                    <CardContent className="p-4">
                      <div className="grid gap-4 md:grid-cols-[1fr_280px]">
                        <div>
                          <h3 className="text-lg font-semibold">{p.title}</h3>
                          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                            {p.description}
                          </p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {p.tags.map((t) => (
                              <Badge key={t} variant="outline">
                                {t}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-xl border border-slate-200/60 dark:border-slate-800/60">
                          <Image
                            src={p.image}
                            alt={p.title}
                            width={560}
                            height={176}
                            className="h-44 w-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0 grayscale"
                            unoptimized
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </section> */}

            {/* Experiência */}
            {/* <Card id="experience" className="backdrop-blur">
              <CardHeader>
                <CardTitle>Experiência</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  {experience.map((e) => (
                    <li
                      key={e.title}
                      className="rounded-xl border border-slate-200/60 p-4 dark:border-slate-800/60"
                    >
                      <h3 className="font-medium">{e.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {e.period}
                      </p>
                      <ul className="mt-2 list-disc pl-5 text-sm">
                        {e.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card> */}

            {/* Educação & Certificações */}
            {/* <Card id="education" className="backdrop-blur">
              <CardHeader>
                <CardTitle>Educação & Certificações</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {education.map((ed) => (
                    <div
                      key={ed.title}
                      className="rounded-xl border border-slate-200/60 p-4 dark:border-slate-800/60"
                    >
                      <h3 className="font-medium">{ed.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {ed.period}
                      </p>
                      <p className="mt-1 text-sm">{ed.details}</p>
                    </div>
                  ))}
                  <div className="rounded-xl border border-slate-200/60 p-4 dark:border-slate-800/60">
                    <h3 className="font-medium">Certificações</h3>
                    <ul className="mt-2 list-disc pl-5 text-sm">
                      <li>Nome da certificação — Órgão (Ano)</li>
                      <li>Outra certificação relevante — Emissor (Ano)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card> */}

            {/* Contato */}
            {/* <Card id="contact" className="text-center backdrop-blur">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold">Vamos conversar?</h2>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  Aberto a oportunidades e freelas.
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                  <Button asChild>
                    <Link href={`mailto:${profile.email}`}>E-mail</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={profile.linkedin} target="_blank" rel="noreferrer">
                      LinkedIn
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={profile.github} target="_blank" rel="noreferrer">
                      GitHub
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card> */}

            <footer className="pb-6 text-center text-sm text-slate-500">
              © {new Date().getFullYear()} {profile.name}
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
