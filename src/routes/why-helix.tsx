import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/why-helix")({
  head: () => ({ meta: [
    { title: "Why Helix | Helix Logistics" },
    { name: "description", content: "Learn how Helix Logistics makes last-mile delivery reliable, efficient, scalable, and cost-effective." },
    { property: "og:title", content: "Why Choose Helix Logistics" },
    { property: "og:description", content: "Reliable and scalable last-mile delivery solutions for businesses across Trinidad and Tobago." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: WhyHelixPage,
});

function WhyHelixPage() {
  const services = ["Package collection and sorting", "Optimized route planning", "Same-day and scheduled deliveries", "Tracking and proof of delivery", "Returns management", "Customer communication"];
  return (
    <>
      <section className="bg-primary px-6 py-16 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">The Helix advantage</p>
          <h1 className="mt-5 max-w-[12ch] text-5xl font-extrabold leading-none md:text-7xl">Your delivery partner for growth.</h1>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[0.8fr_1.5fr] lg:py-24">
        <div>
          <h2 className="text-2xl font-extrabold text-primary">One team. Every final mile.</h2>
          <div className="mt-5 h-1 w-14 bg-accent" />
          <ul className="mt-9 space-y-4">
            {services.map((service) => <li key={service} className="flex gap-3 text-sm font-semibold text-primary"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />{service}</li>)}
          </ul>
        </div>
        <div className="border-l-4 border-accent pl-6 md:pl-10">
          <p className="text-lg leading-[1.9] text-muted-foreground">
            We provide a last-mile delivery service that is reliable, efficient, with scalable delivery solutions that help get your business&apos; products to customers quickly and cost-effectively. Services include package collection and sorting, optimized route planning, same-day and scheduled deliveries, tracking, proof of delivery, returns management, and customer communication. By outsourcing last-mile operations, you can reduce logistics&apos; costs, improve operational efficiency, scale delivery capacity as demand grows, and strengthen the customer experience—ultimately supporting increased sales, customer retention, and business growth. These operational gains will help your business handle more orders without proportionally increasing costs, improve customer satisfaction and retention, reduce failed deliveries and returns, and ultimately increase revenue and profitability.
          </p>
          <Button asChild variant="action" size="xl" className="mt-10"><Link to="/contact">Discuss your needs <ArrowRight /></Link></Button>
        </div>
      </section>
    </>
  );
}