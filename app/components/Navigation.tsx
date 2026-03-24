"use client";

import { useEffect, useState } from "react";
import BurgerMenu from "./BurgerMenu";
import NavigationLink from "./NavigationLink";
import { links } from "../constants/links";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }

    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <nav className="relative p-4">
      <BurgerMenu isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />

      {isOpen && (
        <div className="lg:hidden top-16 z-10 fixed inset-0 bg-black/50">
          <ul className="top-0 left-0 z-20 absolute flex flex-col items-center gap-6 bg-white dark:bg-gray-900 shadow-md py-6 w-full font-medium text-gray-700 dark:text-white text-lg">
            {links.map((link) => (
              <li key={link.path}>
                <NavigationLink link={link} setIsOpen={setIsOpen} />
              </li>
            ))}
          </ul>
        </div>
      )}

      <ul className="hidden lg:flex justify-center gap-6 font-medium text-gray-700 dark:text-white text-lg">
        {links.map((link) => (
          <li key={link.path}>
            <NavigationLink link={link} setIsOpen={setIsOpen} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
