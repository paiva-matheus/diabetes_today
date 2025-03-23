"use client";

import { DarkThemeToggle } from "flowbite-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const selectedPathClass =
    "bg-blue-700 md:text-blue-700 md:dark:text-blue-500 md:bg-transparent";

  const handleClick = (pathname: string) => {
    router.push(pathname);
  };

  const [toogleMenu, setToogleMenu] = useState(false);

  return (
    <nav className="w-full border-gray-200 bg-blue-100 dark:bg-gray-900">
      <div className="mx-auto flex max-w-xl flex-wrap items-center justify-between gap-4 p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/logo.png"
            className="mr-1 h-6 sm:h-9"
            alt="Logo"
            width={36}
            height={16}
          />
          <span className="mr-4 block self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Diabetes
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex size-10 items-center  justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => {
            console.log(toogleMenu);
            setToogleMenu(!toogleMenu);
          }}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="size-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`w-full md:block md:w-auto ${toogleMenu ? "block md:block" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="mt-4 flex flex-col items-center rounded-lg border p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-blue-100 md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse">
            <button
              className={`block rounded-sm px-3 py-2 font-bold text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500 ${pathname === "/" && selectedPathClass}`}
              onClick={() => handleClick("/")}
            >
              Início
            </button>
            <button
              className={`block rounded-sm px-3 py-2 font-bold text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500 ${pathname === "/conteudos" && selectedPathClass}`}
              onClick={() => handleClick("/conteudos")}
            >
              Conteúdos
            </button>
            <button
              className={`block rounded-sm px-3 py-2 font-bold text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500 ${pathname === "/tratamentos" && selectedPathClass}`}
              onClick={() => handleClick("/tratamentos")}
            >
              Tratamentos
            </button>
            <DarkThemeToggle />
          </ul>
        </div>
      </div>
    </nav>
  );
}
