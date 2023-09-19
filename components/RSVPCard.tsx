import ToggleButton from "./ToggleButton";
import PocketBase from "pocketbase";
import { Collections, RSVPResponse } from "@/types/pocketbase-types";
import { ExpandWithRespondents as Texpand } from "@/types/pb-types-extension";

async function getRSVPData() {
  // For testing, no need to hammer the database unneccessarily
  if (true) {
    const return_val: RSVPResponse<Texpand> = {
      attending: true,
      avec: true,
      collectionId: "s3m8e7mavogb8yv",
      collectionName: Collections.RSVP,
      created: "2023-09-08 21:32:25.705Z",
      expand: {
        respondents: [
          {
            Partner: "bx0d4drv8yx5kvl",
            collectionId: "_pb_users_auth_",
            collectionName: Collections.Users,
            created: "2023-09-08 21:29:27.096Z",
            email: "",
            emailVisibility: false,
            id: "5fj7a3r9ot9rkp5",
            name: "Test couple #1",
            updated: "2023-09-11 16:41:35.981Z",
            username: "TestCouple1",
            verified: true
          },
          {
            Partner: "5fj7a3r9ot9rkp5",
            collectionId: "_pb_users_auth_",
            collectionName: Collections.Users,
            created: "2023-09-08 21:29:15.759Z",
            email: "",
            emailVisibility: false,
            id: "bx0d4drv8yx5kvl",
            name: "Test couple #2",
            updated: "2023-09-08 21:29:32.606Z",
            username: "TestCouple2",
            verified: true
          }
        ]
      },
      extra_info: "plz work",
      food_restrictions: "Bork",
      id: "wan2nz4cbm3pgwv",
      respondents: ["5fj7a3r9ot9rkp5", "bx0d4drv8yx5kvl"],
      updated: "2023-09-12 21:12:26.712Z"
    };

    // Artificial delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return return_val;
  } else {
    const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL!);

    let authData;

    try {
      authData = await pb
        .collection("users")
        .authWithPassword("TestSingle", "TestSingle");
      //.authWithPassword("TestCouple1", "TestCouple1", { cache: "no-cache" });
    } catch (err) {
      console.log(err);
      return null;
    }

    if (!pb.authStore.isValid) {
      console.log("Auth failed!");
      return null;
    }

    const record = await pb
      .collection(Collections.RSVP)
      .getFirstListItem<RSVPResponse<Texpand>>(
        `respondents.id?="${authData.record.id}"`,
        {
          expand: "respondents",
          cache: "no-store"
        }
      );

    console.dir(record, { depth: null });

    // Artificial delay for suspense testing and visualizing
    //await new Promise((resolve) => setTimeout(resolve, 1000));

    return record;
  }
}

export default async function RSVPCard() {
  const data: RSVPResponse<Texpand> | null = await getRSVPData();

  if (!data) {
    return (
      <div className="mx-auto mb-4 w-[350px] rounded-lg border border-gray-200 bg-white shadow-xl dark:border-cyan-800 dark:bg-very-dark-blue dark:shadow-cyan-900">
        <h1 className="my-4 text-center text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
          Something went wrong ☹️
        </h1>
        <h2 className="mb-4 text-center text-lg font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
          Try logging in again
        </h2>
      </div>
    );
  }

  return (
    <div className="mx-auto mb-4 w-[350px] rounded-lg border border-gray-200 bg-white shadow-xl dark:border-cyan-800 dark:bg-very-dark-blue dark:shadow-cyan-900">
      <h1 className="mt-4 text-center text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
        RSVP
      </h1>
      <h2 className="my-1 text-center text-lg font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
        {data.expand?.respondents.length == 2
          ? `${data.expand?.respondents.at(0)
              ?.name} & ${data.expand?.respondents.at(1)?.name}`
          : `${data.expand?.respondents.at(0)?.name}`}
      </h2>
      <div className="px-6 py-4">
        <form className="flex flex-col">
          <div className="mb-4 space-y-1">
            <ToggleButton
              text="Tulossa"
              id="arriving"
              checked={data.attending}
            />
            <ToggleButton text="Avec" id="avec" checked={data.avec} />
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
                data.food_restrictions ? data.food_restrictions : ""
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
              defaultValue={data.extra_info ? data.extra_info : ""}
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
