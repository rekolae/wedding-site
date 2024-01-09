import { programmeData } from "@/lib/programmeData";
import { Key } from "react";

export default function Programme() {
  return (
    <>
      <section id="programme-section" className="section-primary">
        <h1 className="h1-header text-3xl font-normal">Ohjelma</h1>
        <p className="p-text">Ohjelman aikataulu tarkentuu myöhemmin.</p>
        <div className="mx-auto mb-4 text-center text-lg font-normal">
          <p>Juhla alkaa klo 15.30</p>
          <p>Alkumalja</p>
          <p>Ruokailu</p>
          <p>Puheita</p>
          <p>Kahvia ja kakkua</p>
          <p>Ensimmäinen tanssi</p>
          <p>Musiikkia, tanssia ja pelejä</p>
          <p>Iltapala</p>
        </div>
        {/*
          <div className="">
          <div className="mx-auto min-w-fit max-w-sm">
            <table className="mb-2 w-full border-collapse border border-slate-400 bg-white text-sm shadow-sm dark:border-slate-500 dark:bg-slate-800">
              <thead className="bg-slate-50 dark:bg-slate-700">
                <tr key={"table-header"} className="">
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
                    <tr key={data[0] as Key}>
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
        </div>
              */}
      </section>
    </>
  );
}
