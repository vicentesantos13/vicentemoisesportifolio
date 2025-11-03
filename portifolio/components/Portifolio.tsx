"use client";

import { useState } from "react";

import { Header } from "./Header";
import { profile } from "@/data/profile";
import { Hero } from "./Hero";
import { Technologies } from "./Technologies";
import { Projects } from "./Projects";
import { Experiences } from "./Experiences";
import { Education } from "./Education";
import { Contact } from "./Contact";
import { FloatingWhatsAppButton } from "./FloatingWhatsAppButton";



export default function Page() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_100%_0%,rgba(16,185,129,0.08),transparent)] bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <div className="max-w-5xl mx-auto">
          <Header setTheme={setTheme} theme={theme} />

          <main className="">
            <Hero />
            <Projects />
            <Technologies />
            <Experiences />
            <Education />
            <Contact />

            <FloatingWhatsAppButton />

            <footer className="pb-6 text-center text-sm text-slate-500 pt-20">
              © {new Date().getFullYear()} {profile.name}
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
