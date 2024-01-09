import GithubIcon from "./GithubIcon";

export default function Footer() {
  // <section className="sticky top-0 z-10 mx-auto max-w-3xl">
  return (
    <section className="mx-auto my-2 h-16 max-w-3xl">
      <div
        id="footer"
        className=" mx-2 my-1 flex max-w-3xl transform flex-col rounded bg-white p-1  blur-none transition duration-500 dark:bg-very-dark-blue"
      >
        <footer>
          <GithubIcon />
          <div className="">
            <p className="">Blah blah checkout my github</p>
          </div>
        </footer>
      </div>
    </section>
  );
}
