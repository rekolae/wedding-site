import "server-only";
import { type NextRequest, NextResponse } from "next/server";
import { initPb } from "@/lib/pbHelpers";
import { Collections } from "@/types/pocketbase-types";
import { getTokenPayload } from "pocketbase";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const token: string = requestHeaders.get("token") || "";

  //console.dir(requestHeaders);
  const pb = initPb();

  if (getTokenPayload(token).type === "admin") {
    //console.log("ADMIN!!");
    const records = await pb.collection(Collections.RSVP).getFullList({
      sort: "-updated",
      expand: "respondents",
      cache: "no-store"
    });

    //console.dir(records);

    return NextResponse.json(records, { status: 200 });
  } else {
    return NextResponse.json(
      { code: 403, message: "Forbidden - YOU SHALL NOT PASS!" },
      { status: 403 }
    );
  }
}
