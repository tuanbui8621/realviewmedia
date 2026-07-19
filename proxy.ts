import createMiddleware from "next-intl/middleware";

import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Skip internal paths, the default-locale rewrite target, and static files
  matcher: ["/((?!api|_next|_vercel|en(?:/|$)|.*\\..*).*)"],
};
