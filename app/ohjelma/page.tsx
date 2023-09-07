import { programmeData } from "@/lib/programmeData";

export default function Programme() {
  return (
    <section id="programme-section" className="section-primary">
      <h1 className="h1-header">Ohjelma</h1>
      <h2 className="mb-6 text-center text-2xl tracking-tighter">
        Work In Progress
      </h2>
      <div className="px-2">
        <table className="w-full mb-2 border-collapse border border-slate-400 bg-white text-sm shadow-sm dark:border-slate-500 dark:bg-slate-800">
          <thead className="bg-slate-50 dark:bg-slate-700">
            <tr>
              {programmeData[0].map((data) => {
                return (
                  <>
                  <th className="w-1/2 border border-slate-300 p-4 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200">
                    {data[0]}
                  </th>
                  <th className="w-1/2 border border-slate-300 p-4 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200">
                    {data[1]}
                </th>
                </>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {programmeData[1].map((data) => {
              return (
                <tr>
                  <td className="border border-slate-300 p-4 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                    {data[0]}
                  </td>
                  <td className="border border-slate-300 p-4 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                    {data[1]}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
