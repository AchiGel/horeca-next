"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinksType } from "../types/types";

export default function NavigationLink({
  link,
  setIsOpen,
}: {
  link: LinksType;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={link.path}
      className={`hover:text-blue-600 transition-colors ${
        pathname === link.path
          ? "text-blue-600 dark:text-black font-semibold"
          : ""
      }`}
      onClick={() => setIsOpen(false)}
    >
      {link.name}
    </Link>
  );
}
