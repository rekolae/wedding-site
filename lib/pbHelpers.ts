import PocketBase from "pocketbase";

export async function refreshPbAuth(): Promise<boolean> {
  const pb = new PocketBase(process.env.POCKETBASE_URL!);

  try {
    // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
    pb.authStore.isValid && (await pb.collection("users").authRefresh());
  } catch (e) {
    console.error(e);
    return false;
  }

  return true;
}

export function initPb(): PocketBase {
  const pb = new PocketBase(process.env.POCKETBASE_URL!);
  return pb;
}
