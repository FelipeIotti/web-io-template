"use server";
import { cookies } from "next/headers";
import { UserDTO } from "../dtos/users/user-DTO";
import { USER_COOKIE } from "./config-cookies";

export async function cookiesUserSave(user: UserDTO) {
  const cookieStore = await cookies();
  cookieStore.set(USER_COOKIE, JSON.stringify(user));
}

export async function cookiesUserGet(): Promise<UserDTO | undefined> {
  const cookieStore = await cookies();
  const user = cookieStore.get(USER_COOKIE)?.value;
  return user ? JSON.parse(user) : ({} as UserDTO);
}

export async function cookiesUserRemove() {
  const cookieStore = await cookies();
  cookieStore.delete(USER_COOKIE);
}
