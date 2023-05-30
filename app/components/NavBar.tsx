"use client";
import Link from "next/link";
import type { FC } from "react";
import navigationPages from "../constants/navigationPages";
import { usePathname } from "next/navigation";

const NavBar: FC = () => {
  const path = usePathname();
  return (
    <div
      className="flex justify-between mt-6 items-center sticky top-0 
    z-50 px-2 md:px-8 lg:px-16 xl:px-28">
      <div>Kenneth Olivas</div>
      <div className="hidden md:flex space-x-12 font-semibold text-neutral-400">
        {navigationPages.map((page) => (
          <Link
            key={page.name}
            href={page.href}
            className={`transition-all duration-200 ${
              path === page.href ? "text-pink-500 " : "hover:text-neutral-50"
            }`}>
            {page.name}
          </Link>
        ))}
      </div>
      <div>
        <button className="hidden md:inline bg-white text-black px-4 py-1.5 rounded-full font-semibold hover:bg-pink-600 hover:text-white transition-colors duration-300 ease-in ">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default NavBar;
