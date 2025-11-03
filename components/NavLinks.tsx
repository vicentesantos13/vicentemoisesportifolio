import ScrollToBtn from "./Scroll-btn";

type Props = {
  theme: "dark" | "light";
};
export const NavLinks = ({ theme }: Props) => (
  <nav className="flex flex-col gap-4 md:flex-row md:items-center md:gap-3 text-sm">
    <ScrollToBtn
      text="Projetos"
      className={` ${
        theme === "dark" ? "text-white" : "text-black"
      } opacity-90 hover:opacity-100 text-left cursor-pointer`}
      id="projects"
    />
    <ScrollToBtn
      text="Experiência"
      className={` ${
        theme === "dark" ? "text-white" : "text-black"
      } opacity-90 hover:opacity-100 text-left cursor-pointer`}
      id="experience"
    />
    <ScrollToBtn
      text="Educação"
      className={` ${
        theme === "dark" ? "text-white" : "text-black"
      } opacity-90 hover:opacity-100 text-left cursor-pointer`}
      id="education"
    />
    <ScrollToBtn
      text="Tecnologias"
      className={` ${
        theme === "dark" ? "text-white" : "text-black"
      } opacity-90 hover:opacity-100 text-left cursor-pointer`}
      id="stack"
    />
    <ScrollToBtn
      text="Contato"
      className={` ${
        theme === "dark" ? "text-white" : "text-black"
      } opacity-90 hover:opacity-100 text-left cursor-pointer`}
      id="contact"
    />
  </nav>
);
