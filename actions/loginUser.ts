"use server";

import { RecordAuthResponse, RecordModel, AdminAuthResponse } from "pocketbase";
import { initPb } from "@/lib/pbHelpers";

type FormState = {
  message: string | null;
  count: number;
  error: boolean | null;
  authdata: RecordAuthResponse<RecordModel> | AdminAuthResponse | null;
};

export async function loginUser(prevState: FormState, formData: FormData) {
  const user = formData.get("username")?.toString() || "";
  const pw = formData.get("password")?.toString() || "";

  const pb = initPb();

  let authData = null;

  try {
    if (user.endsWith("wedding-backend.app")) {
      authData = await pb.admins.authWithPassword(user, pw, {
        cache: "no-cache"
      });
    } else {
      authData = await pb
        .collection("users")
        .authWithPassword(user, pw, { cache: "no-cache" });
    }
  } catch (err) {
    console.error(`\n${"#".repeat(120)}\n${err}\n${"#".repeat(120)}\n`);
  }

  // Artificial delay
  await new Promise((resolve) => setTimeout(resolve, 250));

  if (!authData) {
    let msg;

    if (prevState.count > 3) {
      msg = "Kirjautuminen epäonnistui, ota yhteyttä Emiliin!";
    } else {
      msg = "Kirjautuminen epäonnistui!";
    }

    const result: FormState = {
      message: msg,
      count: prevState.count + 1,
      error: true,
      authdata: authData
    };

    return result;
  } else {
    const result: FormState = {
      message: "Kirjautuminen onnistui!",
      count: 0,
      error: false,
      authdata: authData
    };

    return result;
  }
}
