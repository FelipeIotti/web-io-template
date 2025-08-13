import { AUTH_TOKEN_COOKIE } from "@/shared/cookies/config-cookies";
import { cookies } from "next/headers";

export async function isAuthenticated() {
  const cookieStore = await cookies();
  return !!cookieStore.get(AUTH_TOKEN_COOKIE)?.value;
}
