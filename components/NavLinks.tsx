import Link from "next/link";
import { navData } from "@/lib/navData";
import blurBackground from "@/lib/blurBackground";
import { usePathname } from "next/navigation";

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
              key={pageData[1]}
              className={`w-min transform p-1 px-2 transition duration-300 ${
                pageData[2] === pathname
                  ? "text-green-600 underline underline-offset-2 dark:text-purple-400"
                  : "text-white hover:translate-x-1 hover:text-green-300 dark:hover:text-cyan-400"
              }`}
            >
              <Link
                onClick={() => {
                  blurBackground(!open);
                  setOpen((open) => !open);
                }}
                href={pageData[2]}
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
