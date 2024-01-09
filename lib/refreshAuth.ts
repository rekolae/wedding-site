import { useState } from "react";
import { initPb } from "./pbHelpers";

export default function refreshAuth(
  setAuthInvalidation: React.Dispatch<React.SetStateAction<boolean>>,
  wasAuthenticated: boolean
) {
  const pb = initPb();
  console.log("was auth: " + wasAuthenticated);

  if (wasAuthenticated && !pb.authStore.isValid) {
    console.log("  - Authstore invalid & refresh!");
    setAuthInvalidation(true);
    pb.authStore.clear();
    return;
  } else if (!wasAuthenticated && !pb.authStore.isValid) {
    console.log("  - Authstore invalid!");
    pb.authStore.clear();
    return;
  }

  fetch("/api/authRefresh", {
    cache: "no-store",
    headers: {
      token: pb.authStore.token,
      model: JSON.stringify(pb.authStore.model)
    }
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //console.log("  - Insinde then: " + data.success);
      if (!data.success) {
        console.log("  - Clearing auth data!");
        pb.authStore.clear();
        setAuthInvalidation(true);
        //router.refresh();
      }
    })
    .catch((e) => {
      console.error(e);
    });
}
