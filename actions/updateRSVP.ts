"use server";

import { AuthModel } from "pocketbase";
import { initPb } from "@/lib/pbHelpers";

type LoginFormState = {
  message: string | null;
  error: boolean | null;
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
  const pb = initPb();

  const data = {
    attending: formData.has("arriving"),
    avec: formData.has("avec"),
    food_restrictions: foodRestrictions,
    extra_info: extraInfo
  };

  pb.authStore.save(prevState.token || "", prevState.model);
  let record = null;

  try {
    record = await pb.collection("RSVP").update(RSVPId, data);
  } catch (err) {
    console.log("FUCK");
    console.log(err);
    return {
      ...prevState,
      error: true,
      message: "Päivitys epäonnistui"
    };
  }

  //console.dir(record);

  // Atrificial  delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    ...prevState,
    error: false,
    message: "RSVP päivitetty!"
  };
}
