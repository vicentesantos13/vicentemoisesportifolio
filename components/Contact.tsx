import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { profile } from "@/data/profile";
import { MdEmail } from "react-icons/md";
import { LiaLinkedin, LiaGithub, LiaWhatsapp } from "react-icons/lia";

export const Contact = () => {
  return (
    <section id="contact" className="pt-10 mx-2">
      <Card
        id="contact"
        className="text-center h-max rounded-2xl border border-slate-200/60 bg-white/70 p-5 backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/40"
      >
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold">Vamos conversar?</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Aberto a oportunidades e freelas.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Button variant={"outline"} asChild>
              <Link href={`mailto:${profile.email}`}>
                <MdEmail />
                E-mail
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={profile.linkedin} target="_blank" rel="noreferrer">
                <LiaLinkedin />
                LinkedIn
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={profile.github} target="_blank" rel="noreferrer">
                <LiaGithub /> GitHub
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={profile.wpp} target="_blank" rel="noreferrer">
                <LiaWhatsapp /> WhatsApp
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
