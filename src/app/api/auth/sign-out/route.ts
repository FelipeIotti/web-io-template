import {
  AUTH_TOKEN_COOKIE,
  USER_COOKIE,
} from "@/shared/cookies/config-cookies";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const cookiesStore = await cookies();

  cookiesStore.delete(AUTH_TOKEN_COOKIE);
  cookiesStore.delete(USER_COOKIE);
  console.log({
    next_url: request.nextUrl,
    url: request.url,
    request,
  });
  return NextResponse.redirect(request.url);
}
