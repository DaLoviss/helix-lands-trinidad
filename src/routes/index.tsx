import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Box, MapPin, Route as RouteIcon, ScanLine } from "lucide-react";

import courierImage from "@/assets/helix-courier.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Helix Logistics | Last-Mile Delivery in Trinidad & Tobago" },
      { name: "description", content: "Reliable last-mile delivery for groceries, Temu, Amazon, and business packages across Trinidad and Tobago." },
      { property: "og:title", content: "Helix Logistics | Last-Mile Delivery" },
      { property: "og:description", content: "Reliable delivery across Trinidad and Tobago, from groceries to Temu and Amazon packages." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-12 lg:py-24">
        <div className="content-reveal lg:col-span-7">
          <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">Trinidad &amp; Tobago delivery network</p>
          <h1 className="max-w-[11ch] text-5xl font-extrabold leading-[0.94] text-primary sm:text-6xl md:text-7xl lg:text-8xl">
            Last Mile.<br />First Priority.
          </h1>
          <p className="mt-7 max-w-[46ch] text-lg leading-relaxed text-muted-foreground md:text-xl">
            Helix Logistics delivers packages to communities across Trinidad and Tobago—from local groceries to your Temu and Amazon packages. Reliable, local, and ready to move.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild variant="action" size="xl">
              <a href="https://wa.me/18687344802" target="_blank" rel="noreferrer">WhatsApp booking <ArrowRight /></a>
            </Button>
            <Button asChild variant="route" size="xl">
              <Link to="/serviceable-areas">Serviceable Areas</Link>
            </Button>
          </div>
          <p className="mt-8 font-mono text-xs text-muted-foreground md:hidden">We go the distance so you don&apos;t have to</p>
        </div>

        <div className="image-reveal relative lg:col-span-5">
          <div className="absolute -left-3 top-6 z-10 bg-primary px-3 py-2 font-mono text-[9px] uppercase tracking-widest text-primary-foreground">
            Route ready · T&amp;T
          </div>
          <img
            src={courierImage}
            alt="Courier scanning a package beside a delivery van in Trinidad"
            width={800}
            height={1008}
            className="aspect-[4/5] w-full rounded-sm object-cover shadow-route"
          />
          <div className="absolute -bottom-3 -right-3 h-20 w-20 border-b-4 border-r-4 border-accent" aria-hidden="true" />
        </div>
      </section>

      <div className="route-divider relative my-4 border-b border-dashed border-primary/20">
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-background px-4 font-mono text-[9px] uppercase tracking-[0.16em] text-primary/50">
          Moving what matters
        </span>
      </div>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="mb-12 grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">Built for the final stretch</p>
            <h2 className="max-w-[15ch] text-4xl font-extrabold leading-tight text-primary md:text-5xl">Delivery that keeps your day moving.</h2>
          </div>
          <p className="max-w-[48ch] text-base leading-relaxed text-muted-foreground md:justify-self-end">
            Whether you are sending customer orders or receiving everyday essentials, our last-mile service connects packages with people across the islands.
          </p>
        </div>
        <div className="grid border border-border bg-border md:grid-cols-3 md:gap-px">
          {[
            { icon: Box, title: "Everyday packages", text: "Groceries, online orders, business parcels, and more." },
            { icon: RouteIcon, title: "Flexible routes", text: "Scheduled and same-day delivery options shaped around your needs." },
            { icon: ScanLine, title: "Handled with care", text: "Clear communication, tracking, and proof of delivery." },
          ].map(({ icon: Icon, title, text }) => (
            <article key={title} className="bg-card p-7 md:p-8">
              <Icon className="mb-7 size-6 text-accent" strokeWidth={1.8} aria-hidden="true" />
              <h3 className="text-lg font-bold text-primary">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary px-6 py-16 text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">Rates built around your route</p>
            <h2 className="mt-3 max-w-[22ch] text-3xl font-extrabold leading-tight">Tell us what you need delivered and how often.</h2>
          </div>
          <Button asChild variant="action" size="xl">
            <Link to="/contact">Contact us <MapPin /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
