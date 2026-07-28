import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";

import { routing } from "@/i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname !== "/" && pathname.endsWith("/")) {
    const url = new URL(request.url);
    url.pathname = pathname.slice(0, -1);

    return Response.redirect(url, 308);
  }

  return intlMiddleware(request);
}

export const config = {
  // Skip internal paths, tours, the default-locale rewrite target, and static files
  matcher: [
    "/((?!api|_next|_vercel|vi(?:/|$)|MaiHouseSaigon(?:/|$)|OakwoodResidence(?:/|$)|HongHome(?:/|$)|Richlane(?:/|$)|.*\\..*).*)",
  ],
};
