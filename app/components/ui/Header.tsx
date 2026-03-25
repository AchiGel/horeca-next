"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { MdLightMode, MdNightlight } from "react-icons/md";
import logo from "@/public/Horeca_logo.png";
import Navigation from "./Navigation";

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const dark = resolvedTheme === "dark";

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-slate-600 px-4 sm:px-16 h-16 shadow shadow-black dark:shadow-white z-50">
      <div className="max-w-360 mx-auto w-full flex justify-between items-center h-full">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              className="w-12 h-12"
              src={logo}
              alt="Horeca Georgia Logo"
              width={48}
              height={48}
              loading="eager"
            />
            <span className="text-2xl hidden md:block">Horeca Georgia</span>
          </div>
        </Link>
        <div className="flex gap-4">
          <Navigation />
          <button
            onClick={() => setTheme(dark ? "light" : "dark")}
            className="cursor-pointer text-3xl"
            aria-label="Toggle Theme"
          >
            {dark ? <MdLightMode /> : <MdNightlight />}
          </button>
        </div>
      </div>
    </header>
  );
}
