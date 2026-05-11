import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Re-export navigation primitives that respect routing config.
// When `localePrefix` switches from "never" to "as-needed" / "always",
// these helpers automatically start producing locale-aware URLs.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
