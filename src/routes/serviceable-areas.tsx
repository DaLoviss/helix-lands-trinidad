import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/serviceable-areas")({
  head: () => ({ meta: [
    { title: "Serviceable Areas | Helix Logistics" },
    { name: "description", content: "View Helix Logistics delivery coverage across South, Central, East and West Trinidad, plus all of Tobago." },
    { property: "og:title", content: "Helix Logistics Serviceable Areas" },
    { property: "og:description", content: "Explore our current delivery coverage throughout Trinidad and Tobago." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ServiceableAreasPage,
});

const regions = [
  { name: "South", areas: ["Claxton Bay → Pointe-a-Pierre → Marabella, Vistabella and environs", "San Fernando City, Mon Repos, Pleasantville, Cocoyea", "Manahambre → Princes Town", "Gulf View → La Romain", "Point Fortin, Fyzabad, Siparia, Palo Seco, Cedros", "Penal, Debe, Erin, Santa Flora", "Gasparillo, Williamsville"] },
  { name: "Central", areas: ["Caroni, Piarco, St. Helena, Las Lomas", "Cunupia", "Chaguanas", "Freeport", "Couva"] },
  { name: "East / West", areas: ["Belmont, Morvant, Laventille and all hotspot areas in between", "Maracas–St. Joseph", "St. Augustine, Curepe", "Tunapuna to Arouca", "Sangre Grande to Toco", "Rio Claro / Mayaro / Biche"] },
  { name: "Tobago", areas: ["All of Tobago"] },
];

function ServiceableAreasPage() {
  return (
    <>
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Coverage network</p>
          <div className="mt-5 grid gap-7 md:grid-cols-2 md:items-end">
            <h1 className="max-w-[12ch] text-5xl font-extrabold leading-none text-primary md:text-7xl">Routes across both islands.</h1>
            <p className="max-w-[42ch] text-base leading-relaxed text-muted-foreground md:justify-self-end">Our service network covers key communities across Trinidad and all of Tobago. Contact us for rates based on your needs and delivery volumes.</p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid border border-border bg-border md:grid-cols-2 md:gap-px">
          {regions.map((region, index) => (
            <article key={region.name} className={index === 3 ? "bg-primary p-7 text-primary-foreground md:p-10" : "bg-card p-7 md:p-10"}>
              <div className="flex items-center gap-3"><MapPin className="size-5 text-accent" aria-hidden="true" /><h2 className="text-sm font-extrabold uppercase tracking-widest">{region.name}</h2></div>
              <ul className="mt-7 space-y-4">
                {region.areas.map((area) => <li key={area} className={index === 3 ? "border-l border-primary-foreground/25 pl-4 text-sm leading-relaxed" : "border-l border-border pl-4 text-sm leading-relaxed text-muted-foreground"}>{area}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-dashed border-primary/25 pt-8 md:flex-row md:items-center">
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">Not sure whether your pickup or destination is covered? Send us the locations and expected volume for confirmation.</p>
          <Button asChild variant="action" size="xl"><Link to="/contact">Ask about your route <ArrowRight /></Link></Button>
        </div>
      </section>
    </>
  );
}