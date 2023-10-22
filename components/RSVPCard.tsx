"use client";

import ToggleButton from "./ToggleButton";
import PocketBase from "pocketbase";
import { Collections, RSVPResponse } from "@/types/pocketbase-types";
import { ExpandWithRespondents as Texpand } from "@/types/pb-types-extension";
import { useEffect, useState } from "react";
import RSVPSkeleton from "./RSVPSkeleton";
//@ts-ignore
import { experimental_useFormState as useFormState } from "react-dom";
//@ts-ignore
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { updateRSVP } from "@/actions/updateRSVP";
import { initPb } from "@/lib/pbHelpers";
import { AuthModel } from "pocketbase";

type LoginFormState = {
  message: string | null;
  error: boolean | null;
  token: string | null;
  model: AuthModel | null;
};

const initialState: LoginFormState = {
  message: null,
  error: null,
  token: initPb().authStore.token,
  model: initPb().authStore.model
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-lg bg-green-600 px-5 py-2.5 text-center text-sm font-medium text-white transition duration-200 enabled:hover:scale-105 enabled:hover:bg-green-700 disabled:bg-green-800 dark:bg-cyan-400 dark:text-black enabled:dark:hover:bg-cyan-500 dark:disabled:bg-cyan-800"
    >
      {pending ? "Tallennetaan..." : "Tallenna"}
    </button>
  );
}

export default function RSVPCard() {
  //const data: RSVPResponse<Texpand> | null = await getRSVPData();
  const [data, setData] = useState<RSVPResponse<Texpand> | null>(null);
  const [state, formAction] = useFormState(updateRSVP, initialState);
  const [showMsg, setShowMsg] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function getRSVPData() {
      const pb = initPb();

      if (!pb.authStore.isValid) {
        //console.log("Auth failed!");
        return null;
      } else {
        //console.log("AUTHENTICATED AS " + pb.authStore.model?.name);
      }

      let response = await fetch("/api/rsvp/getOne", {
        cache: "no-store",
        headers: {
          token: pb.authStore.token,
          model: JSON.stringify(pb.authStore.model)
        }
      });

      const record = await response.json();

      //console.dir(record);

      // Artificial delay for loading skeleton testing and visualizing
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setData(record);
      setLoading(false);
      //return record;
    }

    getRSVPData().catch(console.error);
  }, []);

  useEffect(() => {
    if (!state.message) {
      setShowMsg(false);
      return;
    }
    // Display the message and hide after 5 secs
    setShowMsg(true);
    const timer = setTimeout(() => {
      setShowMsg(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [state]);

  if (isLoading) {
    return <RSVPSkeleton />;
  } else {
    return (
      <div className="mx-auto mb-4 w-[350px] rounded-lg border border-gray-200 bg-white shadow-xl dark:border-cyan-800 dark:bg-very-dark-blue dark:shadow-cyan-900">
        <h1 className="mt-4 text-center text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
          RSVP
        </h1>
        <h2 className="my-1 text-center text-lg font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
          {data?.expand?.respondents.length == 2
            ? `${data.expand?.respondents.at(0)
                ?.name} & ${data.expand?.respondents.at(1)?.name}`
            : `${data?.expand?.respondents.at(0)?.name}`}
        </h2>
        <div className="px-6 py-4">
          <div
            id="status-message-update"
            className={`mb-4 overflow-hidden rounded-lg text-white transition-[height] duration-200 dark:text-black ${
              showMsg ? "h-6" : "h-0"
            } ${
              state?.error != null && state?.error
                ? "bg-red-600"
                : "bg-green-600"
            }`}
          >
            <h3 className="text-center">{state?.message}</h3>
          </div>
          <form className="flex flex-col" action={formAction}>
            <input type="hidden" id="RSVP-ID" name="RSVP-ID" value={data?.id} />
            <div className="mb-4 space-y-1">
              <ToggleButton
                text="Tulossa"
                id="arriving"
                checked={data?.attending || false}
              />
              {data?.respondents.length == 1 ? (
                <ToggleButton text="Avec" id="avec" checked={data.avec} />
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
                placeholder="Laktoositon, gluteeniton jne."
                defaultValue={
                  data?.food_restrictions ? data?.food_restrictions : ""
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
                placeholder="Vain toinen pääsee, avecin nimi jne."
                defaultValue={data?.extra_info ? data?.extra_info : ""}
              />
            </div>
            <SubmitButton />
          </form>
        </div>
      </div>
    );
  }
}
