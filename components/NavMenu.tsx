import NavLinks from "./NavLinks";
import blurBackground from "@/lib/blurBackground";

export default function NavMenu({
  open,
  setOpen
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <div
        className={`dark:bg-dark-blue fixed left-0 top-0 z-10 h-full
        transform rounded-r-lg border-2 border-black bg-emerald-900 text-3xl
        transition duration-500 dark:border-cyan-950 ${
          open ? "translate-x-0" : "-translate-x-64"
        }
        `}
      >
        <nav>
          <div className="flex h-full w-full justify-end">
            <button
              className="float-right transform px-2 pb-2 text-slate-300 transition duration-300 hover:text-red-600"
              onClick={() => {
                setOpen((open) => !open);
                blurBackground(!open);
              }}
            >
              <div className="text-right text-5xl">⨯</div>
            </button>
          </div>
          <NavLinks setOpen={setOpen} open={open} />
        </nav>
      </div>
    </>
  );
}
