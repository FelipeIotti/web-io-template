"use server";
import { cookies } from "next/headers";
import { AUTH_TOKEN_COOKIE } from "./config-cookies";

export async function cookiesAuthTokenSave(token: string) {
  const cookieStore = await cookies();
  cookieStore.set(AUTH_TOKEN_COOKIE, token);
}

export async function cookiesAuthTokenGet(): Promise<string | undefined> {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_TOKEN_COOKIE)?.value;

  return token;
}

export async function cookiesAuthTokenRemove() {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_TOKEN_COOKIE);
}
