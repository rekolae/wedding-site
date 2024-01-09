import "server-only";
import { type NextRequest, NextResponse } from "next/server";
import { initPb } from "@/lib/pbHelpers";
import { Collections } from "@/types/pocketbase-types";
import { AuthModel } from "pocketbase";
import { RSVPResponse } from "@/types/pocketbase-types";
import { ExpandWithRespondents as Texpand } from "@/types/pb-types-extension";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const token: string = requestHeaders.get("token") || "";
  const model: AuthModel = JSON.parse(requestHeaders.get("model") || "") || {};

  const pb = initPb();
  pb.authStore.save(token, model);

  if (pb.authStore.isValid) {
    const record = await pb
      .collection(Collections.RSVP)
      .getFirstListItem<RSVPResponse<Texpand>>(
        `respondents.id?="${pb.authStore.model?.id}"`,
        {
          expand: "respondents",
          cache: "no-store"
        }
      );

    return NextResponse.json(record, { status: 200 });
  } else {
    return NextResponse.json(
      { code: 403, message: "Forbidden - YOU SHALL NOT PASS! 🧙🏻‍♂️" },
      { status: 403 }
    );
  }
}
