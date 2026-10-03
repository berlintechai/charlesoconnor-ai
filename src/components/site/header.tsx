import { nav, site } from "@/lib/site";

export function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-6">
      <a
        href="#top"
        className="font-mono text-sm font-medium tracking-[0.02em] outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        charlesoconnor<span className="text-primary">.ai</span>
        <span className="sr-only"> {site.name} home</span>
      </a>
      <nav aria-label="Page sections" className="flex gap-5 text-[0.9375rem]">
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
