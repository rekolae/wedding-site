import ToggleButton from "./ToggleButton";

export default function RSVPCard() {
  return (
    <div className="dark:bg-very-dark-blue mx-auto mb-4 w-[350px] rounded-lg border border-gray-200 bg-white shadow-md dark:border-cyan-800 dark:shadow-cyan-900">
      <h1 className="mt-4 text-center text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
        RSVP
      </h1>
      <h2 className="my-1 text-center text-lg font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
        Person1 & Person 2
      </h2>
      <div className="px-6 py-4">
        <form className="flex flex-col">
          <div className="mb-4 space-y-1">
            <ToggleButton text="Tulossa" id="arriving" />
            <ToggleButton text="Avec" id="avec" />
          </div>
          <div className="mb-4">
            <label
              htmlFor="food-limitations"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Ruokarajoitteet
            </label>
            <input
              type="text"
              name="food-limitations"
              id="food-limitations"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Laktoosi-intoleranssi, gluteeniton etc"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="extra-info"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Lisätietoa
            </label>
            <input
              type="text"
              name="extra-info"
              id="extra-info"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Vain toinen pääsee, avecin nimi etc"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-green-600 px-5 py-2 text-center text-sm font-medium text-white transition duration-200 hover:bg-green-700 dark:bg-cyan-400 dark:text-black dark:hover:bg-cyan-500"
          >
            Tallenna
          </button>
        </form>
      </div>
    </div>
  );
}
