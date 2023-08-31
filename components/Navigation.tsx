"use client";

import { useState } from "react";
import MenuIcon from "./MenuIcon";
import NavMenu from "./NavMenu";
import blurBackground from "@/lib/blurBackground";

export default function Navigation() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <section className="mx-auto max-w-3xl border border-dotted border-red-500">
      <div className=" dark:bg-very-dark-blue m-2 flex max-w-3xl flex-col rounded bg-white p-1">
        <div
          id="nav-header"
          className="m-1 flex transform blur-none transition duration-500"
        >
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
          <p className="mx-auto">Some logo here?</p>
        </div>
        <NavMenu open={navOpen} setOpen={setNavOpen} />
      </div>
    </section>
  );
}
