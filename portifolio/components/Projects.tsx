import { projects } from "@/data/projects";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";

export const Projects = () => {
  return (
    <section id="projects" className="space-y-4 mx-2 mt-10">
      <h2 className="text-center text-3xl font-semibold">
        Projetos em destaque
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <Link
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="group block h-full"
          >
            <Card className="hover:shadow-xl transition h-full rounded-2xl border border-slate-200/60 bg-white/70 p-5 backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/40">
              <CardContent className="p-4">
                <div className="grid gap-4 ">
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
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};
