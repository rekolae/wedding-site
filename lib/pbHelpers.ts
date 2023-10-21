import PocketBase from "pocketbase";

export function initPb() {
  return new PocketBase(process.env.POCKETBASE_URL!);
}
