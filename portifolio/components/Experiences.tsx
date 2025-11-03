import { experience } from "@/data/experience";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const Experiences = () => {
  return (
    <section className="pt-10 mx-2">
      <Card className="h-max rounded-2xl border border-slate-200/60 bg-white/70 p-5 backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/40">
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
      </Card>
    </section>
  );
};
