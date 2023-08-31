export default function Programme() {
  return (
    <section id="programme-section" className="section-primary">
      <h1 className="h1-header">Ohjelma</h1>
      <h2 className="mb-6 text-center text-2xl tracking-tighter">
        Work In Progress
      </h2>
      <div className="px-2">
        <table className="w-full border-collapse border border-slate-400 bg-white text-sm shadow-sm dark:border-slate-500 dark:bg-slate-800">
          <thead className="bg-slate-50 dark:bg-slate-700">
            <tr>
              <th className="w-1/2 border border-slate-300 p-4 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200">
                State
              </th>
              <th className="w-1/2 border border-slate-300 p-4 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200">
                City
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 p-4 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                Indiana
              </td>
              <td className="border border-slate-300 p-4 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                Indianapolis
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 p-4 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                Ohio
              </td>
              <td className="border border-slate-300 p-4 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                Columbus
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 p-4 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                Michigan
              </td>
              <td className="border border-slate-300 p-4 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                Detroit
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
