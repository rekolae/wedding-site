import "server-only";
import { type NextRequest, NextResponse } from "next/server";
import { initPb, refreshPbAuth } from "@/lib/pbHelpers";
import { AuthModel } from "pocketbase";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const token: string = requestHeaders.get("token") || "";
  const model: AuthModel = JSON.parse(requestHeaders.get("model") || "") || {};

  const pb = initPb();
  pb.authStore.save(token, model);
  let success = await refreshPbAuth();

  return NextResponse.json({ success: success }, { status: 200 });
}
