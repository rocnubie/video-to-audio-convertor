import Link from "next/link";
import { LogoMark } from "@/components/icons/Logo";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { NAV, SITE } from "@/lib/seo/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight text-foreground"
        >
          <LogoMark className="h-7 w-7" />
          <span className="hidden sm:inline">{SITE.name}</span>
          <span className="sm:hidden">V2A</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <LanguageSwitcher />
          <Link
            href={SITE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground"
          >
            <GithubIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
