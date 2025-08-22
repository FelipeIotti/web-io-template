import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import { isAuthenticated } from "./shared/utils/auth";

const i18nMiddleware = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const intlResponse = i18nMiddleware(request);
  if (intlResponse) {
    if (intlResponse.status === 307 || intlResponse.status === 308) {
      return intlResponse;
    }
  }

  const session = await isAuthenticated();

  const isProtectedRoute = pathname.split("/")[2] === "main";
  const isPublicRoute = pathname.split("/")[2] === "auth";

  if (isProtectedRoute) {
    if (!session) {
      return NextResponse.redirect(new URL(`/auth/sign-in`, request.url));
    }
  } else {
    if (session && isPublicRoute) {
      return NextResponse.redirect(new URL(`/main/dashboard`, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/.well-known/:path*",
    "/(en|br|es)/:path*",
    "/((?!api|_next/static|_next/image|favicon.ico|icon.png|service-worker.js|sitemap.xml|robots.txt).*)",
  ],
};
