"use client";

import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Menu, Moon, Sun } from "lucide-react";
import { profile } from "@/data/profile";
import { NavLinks } from "./NavLinks";

type Theme = "dark" | "light";
type Props = {
  setTheme: Dispatch<SetStateAction<Theme>>;
  theme: Theme;
};

export const Header = ({ setTheme, theme }: Props) => {
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <header className="pt-2 mx-2">
      <div className="h-max rounded-2xl border border-slate-200/60 bg-white/70 p-5 backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/40">
        <div className="flex items-center justify-between gap-3">
          {/* Marca / nome */}
          <div>
            <h1 className="text-2xl font-bold leading-tight text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-sky-500 to-indigo-500">
              {profile.name}
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {profile.role}
            </p>
          </div>

          {/* Desktop: nav + toggle */}
          <div className="hidden md:flex items-center gap-3">
            <NavLinks theme={theme} />
            <Separator orientation="vertical" className="mx-1 h-6" />
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              aria-label="Alterar tema"
              className="cursor-pointer"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          {/* Mobile: hambúrguer */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" aria-label="Abrir menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className={`w-80 ${
                  theme === "dark"
                    ? "border-slate-800/6 bg-slate-900/90"
                    : "bg-white/70"
                }  p-5`}
              >
                <SheetHeader>
                  <SheetTitle className="text-2xl font-bold leading-tight text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-sky-500 to-indigo-500">
                    {profile.name}
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      {profile.role}
                    </div>
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-4 space-y-4">
                  <NavLinks theme={theme} />
                  <Separator
                    className={`${theme === "dark" ? "" : "bg-black/40"}`}
                  />
                  <Button
                    variant="outline"
                    className={`w-full ${
                      theme === "dark"
                        ? "bg-transparent text-white border"
                        : "text-black"
                    } `}
                    onClick={toggleTheme}
                    aria-label="Alterar tema"
                  >
                    {theme === "dark" ? (
                      <>
                        <Sun className="mr-2 h-4 w-4" /> Modo claro
                      </>
                    ) : (
                      <>
                        <Moon className="mr-2 h-4 w-4" /> Modo escuro
                      </>
                    )}
                  </Button>
                  <Separator
                    className={`${theme === "dark" ? "" : "bg-black/40"}`}
                  />
                  <div className="text-xs text-slate-500">
                    <div>Contato rápido</div>
                    <div className="mt-2 flex gap-2">
                      <Button asChild size="sm" variant="secondary">
                        <Link href={`mailto:${profile.email}`}>E-mail</Link>
                      </Button>
                      <Button asChild size="sm" variant="outline">
                        <Link
                          href={profile.linkedin}
                          target="_blank"
                          rel="noreferrer"
                        >
                          LinkedIn
                        </Link>
                      </Button>
                      <Button asChild size="sm" variant="outline">
                        <Link
                          href={profile.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
