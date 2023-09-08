import Link from "next/link";
import { navData } from "@/lib/navData";
import blurBackground from "@/lib/blurBackground";
import { usePathname } from "next/navigation";
import { Key } from "react";
import { Url } from "next/dist/shared/lib/router/router";

export default function NavLinks({
  open,
  setOpen
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const pathname = usePathname();
  return (
    <div>
      <ul>
        {navData.map((pageData) => {
          return (
            <li
              key={pageData[1] as Key}
              className={`w-min transform p-1 px-2 transition duration-300 ${
                pageData[2] === pathname
                  ? "text-black underline underline-offset-2 dark:text-purple-400"
                  : "text-white hover:translate-x-1 hover:text-teal-400 dark:hover:text-cyan-400"
              }`}
            >
              <Link
                onClick={() => {
                  blurBackground(!open);
                  setOpen((open) => !open);
                }}
                href={pageData[2] as Url}
              >
                {pageData[0]}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
