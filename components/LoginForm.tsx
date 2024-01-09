"use client";

import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import { loginUser } from "@/actions/loginUser";
import { RecordAuthResponse, RecordModel, AdminAuthResponse } from "pocketbase";
import { initPb } from "@/lib/pbHelpers";
import { useRouter } from "next/navigation";

type FormResponse = {
  message: string | null;
  count: number;
  error: boolean | null;
  authdata: RecordAuthResponse<RecordModel> | AdminAuthResponse | null;
};

const initialState: FormResponse = {
  message: null,
  count: 0,
  error: null,
  authdata: null
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-lg bg-green-600 px-5 py-2.5 text-center text-sm font-medium text-white transition duration-200 enabled:hover:scale-105 enabled:hover:bg-green-700 disabled:bg-cyan-800 dark:bg-cyan-400 dark:text-black enabled:dark:hover:bg-cyan-500"
    >
      {pending ? "Kirjaudutaan..." : "Kirjaudu"}
    </button>
  );
}

export function LoginForm() {
  const [state, formAction] = useFormState(loginUser, initialState);
  const router = useRouter();
  let pb = initPb();

  if (state?.error !== null && !state?.error) {
    pb.authStore.save(state.authdata!.token, state.authdata!.record);

    // Redirect after 1 second
    setTimeout(() => router.push("/"), 1000);
  }

  return (
    <div className="mx-auto mb-4 flex w-[300px] flex-col items-center justify-center">
      <div className="w-full rounded-lg border border-gray-200 bg-white shadow-md dark:border-cyan-800 dark:bg-very-dark-blue dark:shadow-cyan-900">
        <div className="space-y-4 px-6 py-4">
          <h1 className="text-center text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
            Kirjaudu sisään
          </h1>
          <div
            id="status-message"
            className={`overflow-hidden rounded-lg transition-[height] duration-200 ${
              state?.message == null ? "h-0" : state.count > 4 ? "h-12" : "h-6"
            } ${
              state?.error != null && state?.error
                ? "bg-red-600"
                : "bg-green-700"
            }`}
          >
            <h3 className="text-center">{state?.message}</h3>
          </div>
          <form className="space-y-4 md:space-y-6" action={formAction}>
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
            <SubmitButton />
          </form>
        </div>
      </div>
    </div>
  );
}
