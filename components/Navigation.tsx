"use client";

import { useState } from "react";
import MenuIcon from "./MenuIcon";
import NavMenu from "./NavMenu";
import blurBackground from "@/lib/blurBackground";

export default function Navigation() {
  const [navOpen, setNavOpen] = useState(false);

  // <section className="sticky top-0 z-10 mx-auto max-w-3xl">
  return (
    <section className="mx-auto mt-2 max-w-3xl">
      <div
        id="nav-header"
        className=" mx-2 my-1 flex max-w-3xl transform flex-col rounded bg-white p-1  blur-none transition duration-500 dark:bg-very-dark-blue"
      >
        <div className="m-1 flex">
          <div className="absolute bottom-0">
            <button
              type="button"
              className="transition duration-300 hover:scale-110"
              onClick={() => {
                setNavOpen((prev) => !prev);
                // State change doesn't register right away so negate it manually
                blurBackground(!navOpen);
              }}
            >
              <MenuIcon />
            </button>
          </div>
          <p className="mx-auto">A & E</p>
        </div>
      </div>
      <NavMenu open={navOpen} setOpen={setNavOpen} />
    </section>
  );
}
