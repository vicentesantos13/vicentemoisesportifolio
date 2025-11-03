import { techs } from "@/data/technologies";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { TechIcon } from "./TechIcon";

export const Technologies = () => {
  return (
    <Card
      id="stack"
      className=" h-max rounded-2xl border border-slate-200/60 bg-white/70 p-5 backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/40 mt-10 mx-2"
    >
      <CardHeader>
        <CardTitle>Tecnologias usadas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex animate-[marquee_5s_linear_infinite] md:animate-[marquee_25s_linear_infinite] gap-3 will-change-transform">
            {techs.concat(techs).map((t, i) => (
              <Badge
                key={`${t}-${i}`}
                variant="outline"
                className="px-3 py-1 text-sm"
              >
                <TechIcon name={t} className="h-4 w-4" />
                {t}
              </Badge>
            ))}
          </div>
        </div>
        <style jsx>{`
          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </CardContent>
    </Card>
  );
};
