"use server";

import { AuthModel } from "pocketbase";
import { initPb } from "@/lib/pbHelpers";

type LoginFormState = {
  message: string | null;
  //count: number;
  //error: boolean | null;
  token: string | null;
  model: AuthModel | null;
};

export async function updateRSVP(
  prevState: LoginFormState,
  formData: FormData
) {
  const RSVPId = formData.get("RSVP-ID")?.toString() || "";
  const foodRestrictions = formData.get("food-limitations")?.toString() || "";
  const extraInfo = formData.get("extra-info")?.toString() || "";
  //console.log(RSVPId, extraInfo);
  //console.dir(formData);

  const pb = initPb();

  const data = {
    attending: formData.has("arriving"),
    avec: formData.has("avec"),
    food_restrictions: foodRestrictions,
    extra_info: extraInfo
  };

  let record = null;

  try {
    record = await pb.collection("RSVP").update(RSVPId, data);
  } catch (err) {
    console.log("FUCK");
    console.log(err);
    return {
      ...prevState,
      message: "Fuck"
    };
  }

  //console.dir(record);

  // Atrificial  delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    ...prevState,
    message: "Data received!"
  };
}
