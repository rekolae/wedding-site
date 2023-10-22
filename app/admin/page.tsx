"use client";

import { useState, useEffect } from "react";
import { initPb } from "@/lib/pbHelpers";
import LoadingCircle from "@/components/LoadingCircle";
import ToggleButton from "@/components/ToggleButton";
import { RSVPResponse } from "@/types/pocketbase-types";
import { type ExpandWithRespondents as Texpand } from "@/types/pb-types-extension";
import { getTokenPayload } from "pocketbase";

export default function Admin() {
  const [isAdmin, setAdmin] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const [records, setRecords] = useState<Array<RSVPResponse<Texpand>> | null>(
    null
  );

  useEffect(() => {
    if (!isLoaded) {
      const pb = initPb();
      setAdmin(pb.authStore.isAdmin);

      if (pb.authStore.isAdmin) {
        fetch("/api/rsvp/getAll", {
          cache: "no-store",
          headers: {
            token: pb.authStore.token
          }
        })
          .then((response) => response.json())
          .then((data) => setRecords(data));
      }
      setLoaded(true);
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return (
      <section id="admin-section" className="section-primary">
        <h1 className="h1-header text-3xl font-normal">Admin page</h1>
        <LoadingCircle />
      </section>
    );
  } else if (isAdmin) {
    return (
      <section id="admin-section" className="section-primary">
        <h1 className="h1-header text-3xl font-normal">Admin page</h1>
        <p className="p-text">Kutsujen RSVP tiedot</p>
        <div className="flex flex-col">
          {records?.map((record) => {
            return (
              <div
                key={record.id}
                className="mx-auto mb-4 w-[350px] rounded-lg border border-gray-200 bg-white shadow-xl dark:border-cyan-800 dark:bg-very-dark-blue dark:shadow-cyan-900"
              >
                <h2 className="mt-4 text-center text-lg font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                  {record.expand?.respondents.length == 2
                    ? `${record.expand?.respondents.at(0)
                        ?.name} & ${record.expand?.respondents.at(1)?.name}`
                    : `${record.expand?.respondents.at(0)?.name}`}
                </h2>
                <div className="px-6 py-4">
                  <div className="mb-4 space-y-1">
                    <ToggleButton
                      text="Tulossa"
                      id="arriving"
                      checked={record.attending || false}
                    />
                    {record.respondents.length == 1 ? (
                      <ToggleButton
                        text="Avec"
                        id="avec"
                        checked={record.avec || false}
                      />
                    ) : null}
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
                      defaultValue={
                        record.food_restrictions ? record.food_restrictions : ""
                      }
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
                      defaultValue={record.extra_info ? record.extra_info : ""}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return (
      <section id="admin-section" className="section-primary">
        <h1 className="h1-header">403 - ACCESS DENIED</h1>
        <h2 className="mb-6 text-center text-2xl tracking-tighter">
          YOU SHALL NOT PASS
        </h2>
      </section>
    );
  }
}
