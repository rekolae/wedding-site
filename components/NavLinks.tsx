import Link from "next/link";
import { navData } from "@/lib/navData";
import blurBackground from "@/lib/blurBackground";
import { usePathname } from "next/navigation";
import { Key } from "react";
import { Url } from "next/dist/shared/lib/router/router";
import { initPb } from "@/lib/pbHelpers";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NavLinks({
  open,
  setOpen
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isAdmin, setAdmin] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const pb = initPb();
    setAdmin(pb.authStore.isAdmin);
    setAuthenticated(pb.authStore.isValid);
  }, [open]);

  return (
    <div>
      <ul>
        {navData.map((pageData) => {
          /* pageData[3] is null, true or false
           * null  -> Render the link always
           * true  -> Render when authenticated
           * false -> Render when not authenticated
           */
          if (
            pageData[3] === null ||
            (pageData[3] && isAuthenticated) ||
            (!pageData[3] && !isAuthenticated)
          ) {
            return (
              <li
                key={pageData[1] as Key}
                className={`w-min transform p-1 px-2 transition duration-300 ${
                  pageData[2] === pathname
                    ? "text-black underline underline-offset-2 dark:text-purple-400"
                    : "text-white hover:translate-x-1 hover:text-black dark:hover:text-cyan-400"
                }`}
              >
                <Link
                  onClick={() => {
                    blurBackground(!open);
                    setOpen((open) => !open);
                  }}
                  href={pageData[2] as Url}
                >
                  {pageData[0] as String}
                </Link>
              </li>
            );
          }
        })}
        {isAdmin && isAuthenticated ? (
          <li
            key="admin"
            className={`w-min transform p-1 px-2 transition duration-300 ${
              "/admin" === pathname
                ? "text-black underline underline-offset-2 dark:text-purple-400"
                : "text-white hover:translate-x-1 hover:text-teal-400 dark:hover:text-cyan-400"
            }`}
          >
            <Link
              onClick={() => {
                blurBackground(!open);
                setOpen((open) => !open);
              }}
              href={"/admin"}
            >
              Dashboard
            </Link>
          </li>
        ) : null}
        {!isAuthenticated ? null : (
          <li
            key="logout"
            className={
              "w-min transform p-1 px-2 text-white transition duration-300 hover:translate-x-1 hover:text-teal-400 dark:hover:text-cyan-400"
            }
          >
            <button
              className="w-44 text-left"
              onClick={() => {
                blurBackground(!open);
                setOpen((open) => !open);
                initPb().authStore.clear();
                router.push("/kiitos");
              }}
            >
              Kirjaudu ulos
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}
