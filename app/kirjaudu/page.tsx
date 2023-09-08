export default function Login() {
  return (
    <section id="login-section" className="section-primary">
      <h1 className="h1-header">Kirjautuminen</h1>
      <h2 className="mb-6 text-center text-2xl tracking-tighter">
        Work In Progress
      </h2>
      <div className="mx-auto mb-4 flex w-[300px] flex-col items-center justify-center">
        <div className="dark:bg-very-dark-blue w-full rounded-lg border border-gray-200 bg-white shadow-md dark:border-cyan-800 dark:shadow-cyan-900">
          <div className="space-y-4 px-6 py-4">
            <h1 className="text-center text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
              Kirjaudu sisään
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Käyttäjätunnus
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Käyttäjä"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Salasana
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  required={true}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-green-600 px-5 py-2.5 text-center text-sm font-medium text-white transition duration-200 hover:scale-105 hover:bg-green-700 dark:bg-cyan-400 dark:text-black dark:hover:bg-cyan-500"
              >
                Kirjaudu
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
