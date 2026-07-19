import { createNavigation } from "next-intl/navigation";

import { routing } from "@/i18n/routing";

export const locales = routing.locales;
export const {
  Link,
  getPathname,
  redirect,
  usePathname,
  useRouter,
} = createNavigation(routing);
