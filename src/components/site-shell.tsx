import { Link } from "@tanstack/react-router";
import { Mail, MapPinned, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";

import logoAsset from "@/assets/helix-logistics-logo.png.asset.json";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/why-helix", label: "Why Helix" },
  { to: "/serviceable-areas", label: "Serviceable Areas" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[60] -translate-y-24 bg-primary px-4 py-2 text-sm font-bold text-primary-foreground focus:translate-y-0"
      >
        Skip to content
      </a>

      <div className="slogan-sticker fixed right-3 top-3 z-50 hidden rotate-2 bg-accent px-3 py-2 font-mono text-[10px] font-medium text-accent-foreground shadow-sm md:block">
        We go the distance so you don&apos;t have to
      </div>

      <header className="border-b border-border bg-card px-5 py-7 md:py-9">
        <div className="mx-auto flex max-w-6xl flex-col items-center">
          <Link to="/" aria-label="Helix Logistics home" className="logo-reveal block w-44 md:w-52">
            <img
              src={logoAsset.url}
              alt="Helix Logistics"
              width={768}
              height={768}
              className="aspect-square w-full object-contain"
            />
          </Link>
          <p className="mt-1 font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Last-mile delivery · Trinidad &amp; Tobago
          </p>
          <nav aria-label="Main navigation" className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-3 md:gap-x-9">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="border-b-2 border-transparent pb-1 text-[11px] font-bold uppercase tracking-widest text-primary/70 transition-colors hover:border-accent hover:text-primary"
                activeProps={{ className: "border-accent text-primary" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main id="main-content">{children}</main>

      <footer className="border-t border-border bg-card px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-7 text-center md:flex-row md:text-left">
          <Link to="/" aria-label="Helix Logistics home" className="block w-28">
            <img src={logoAsset.url} alt="" width={768} height={768} loading="lazy" className="aspect-square w-full object-contain" />
          </Link>
          <div>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              © 2026 Helix Logistics · Trinidad &amp; Tobago
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-4 text-xs font-bold text-primary md:justify-end">
              <a href="mailto:courierttservices@gmail.com" className="inline-flex items-center gap-1.5 hover:text-accent">
                <Mail className="size-3.5" aria-hidden="true" /> Email
              </a>
              <a href="https://wa.me/18687344802" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-accent">
                <MessageCircle className="size-3.5" aria-hidden="true" /> WhatsApp
              </a>
              <Link to="/serviceable-areas" className="inline-flex items-center gap-1.5 hover:text-accent">
                <MapPinned className="size-3.5" aria-hidden="true" /> Coverage
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}