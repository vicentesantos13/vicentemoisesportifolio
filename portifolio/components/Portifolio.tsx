"use client";

import { useState } from "react";


import { Header } from "./Header";
import { profile } from "@/data/profile";
import { Hero } from "./Hero";
import { Technologies } from "./Technologies";
import { Projects } from "./Projects";
import { Experiences } from "./Experiences";

// ===== Dados =====








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
          <Projects />
          <Technologies />
          <Experiences />
            

            {/* Experiência */}
            {/* <Card id="experience" className="backdrop-blur">
               */}

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
