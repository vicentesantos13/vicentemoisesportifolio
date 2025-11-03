import { profile } from "@/data/profile";
import Image from "next/image";
import ScrollToBtn from "./Scroll-btn";

export const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center mt-8 md:mt-20 px-3">
      <div
        className="relative size-72  md:size-96 rounded-full
                p-[5px]                      /* espessura da borda */
                bg-linear-to-r from-emerald-500 via-sky-500 to-indigo-500"
      >
        <div
          className="relative h-full w-full rounded-full overflow-hidden 
                  bg-white dark:bg-slate-950"
        >
          <Image
            src="/assets/perfilphoto.jpeg"
            alt="Perfil"
            fill
            className="object-cover object-[50%_15%]"
          />
        </div>
      </div>
      <div className="mt-5 w-full md:w-fit flex flex-col items-center md:items-end">
        <h2 className="text-3xl text-center font-bold tracking-tight w-full md:w-fit">
          Olá, eu sou{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-sky-500 to-indigo-500">
            {profile.name}
          </span>
        </h2>
        <p className="mt-2 max-w-80 md:max-w-md text-slate-600 dark:text-slate-300 text-center md:text-right">
          {profile.tagline}
        </p>
        <ScrollToBtn
          text="Entre em contato"
          id="contact"
          className="px-5 py-2 rounded mt-3 md:w-auto bg-linear-to-r from-emerald-500 via-sky-500 to-indigo-500 font-semibold text-white hover:shadow-xl cursor-pointer"
        />
      </div>
    </div>
  );
};
