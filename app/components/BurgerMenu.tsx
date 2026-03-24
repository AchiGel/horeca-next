"use client";

import { FiMenu, FiX } from "react-icons/fi";
import { BurgerMenuProps } from "../types/types";

export default function BurgerMenu({ isOpen, toggle }: BurgerMenuProps) {
  return (
    <button
      className="lg:hidden text-2xl"
      onClick={toggle}
      aria-label="Toggle navigation menu"
    >
      {isOpen ? <FiX /> : <FiMenu />}
    </button>
  );
}
