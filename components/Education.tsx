import { education } from "@/data/education";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const Education = () => {
  return (
    <section id="education" className="pt-10 mx-2">
      <Card
        id="education"
        className="h-max rounded-2xl border border-slate-200/60 bg-white/70 p-5 backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/40"
      >
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
            <div className="rounded-xl border border-slate-200/60 p-4 dark:border-slate-800/60  md:col-span-2">
              <h3 className="font-medium">Certificações</h3>
              <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
                <li>
                  Formação Desenvolvedor Full Stack —{" "}
                  <span className="font-medium">B7Web</span>
                  (HTML5 & CSS3, JavaScript, ReactJS, TypeScript, Node.js,
                  Bancos de Dados).
                </li>
                <li>
                  Certificações adicionais em Git/GitHub, Docker, Fundamentos de
                  Python, Python Orientado a Objetos e Desenvolvimento Web com
                  Django.
                </li>
                <li>
                  Emissão e verificação dos certificados diretamente pela
                  plataforma da B7Web.
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
