import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { z } from "zod";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Us | Helix Logistics" },
    { name: "description", content: "Contact Helix Logistics for delivery rates tailored to your needs and package volumes." },
    { property: "og:title", content: "Contact Helix Logistics" },
    { property: "og:description", content: "Request tailored delivery rates or message Helix Logistics on WhatsApp." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  company: z.string().trim().max(120),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  phone: z.string().trim().min(7, "Please enter a valid phone number.").max(30).regex(/^[+()\d\s-]+$/, "Please enter a valid phone number."),
  request: z.string().trim().min(10, "Please tell us a little more about your request.").max(1500),
});

type ContactFields = z.infer<typeof contactSchema>;
type FieldErrors = Partial<Record<keyof ContactFields, string>>;

const fields: Array<{ name: keyof ContactFields; label: string; type?: string; placeholder: string }> = [
  { name: "name", label: "Name", placeholder: "Your full name" },
  { name: "company", label: "Company / Organization", placeholder: "Optional" },
  { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
  { name: "phone", label: "Phone", type: "tel", placeholder: "868-000-0000" },
];

function ContactPage() {
  const [errors, setErrors] = useState<FieldErrors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const values = Object.fromEntries(form.entries());
    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const nextErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0];
        if (typeof field === "string" && !(field in nextErrors)) nextErrors[field as keyof ContactFields] = issue.message;
      }
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    const { name, company, email, phone, request } = result.data;
    const subject = encodeURIComponent(`Delivery request from ${name}${company ? ` — ${company}` : ""}`);
    const body = encodeURIComponent(`Name: ${name}\nCompany / Organization: ${company || "Not provided"}\nEmail: ${email}\nPhone: ${phone}\n\nRequest:\n${request}`);
    window.location.href = `mailto:courierttservices@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className="mx-auto grid max-w-6xl gap-14 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-24">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Let&apos;s map your route</p>
        <h1 className="mt-5 max-w-[10ch] text-5xl font-extrabold leading-none text-primary md:text-7xl">Get a delivery quote.</h1>
        <p className="mt-7 max-w-[38ch] text-base leading-relaxed text-muted-foreground">Contact us for rates. Pricing is based on your delivery needs and package volumes.</p>
        <div className="mt-10 space-y-5">
          <a href="https://wa.me/18687344802" target="_blank" rel="noreferrer" className="group flex items-center gap-4 border-b border-border pb-5">
            <span className="grid size-11 place-items-center bg-accent/10 text-accent"><MessageCircle className="size-5" /></span>
            <span><span className="block font-mono text-[9px] uppercase tracking-widest text-muted-foreground">WhatsApp</span><span className="mt-1 block font-bold text-primary group-hover:text-accent">868-734-4802</span></span>
          </a>
          <a href="mailto:courierttservices@gmail.com" className="group flex items-center gap-4 border-b border-border pb-5">
            <span className="grid size-11 place-items-center bg-primary/10 text-primary"><Mail className="size-5" /></span>
            <span className="min-w-0"><span className="block font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Email</span><span className="mt-1 block break-all font-bold text-primary group-hover:text-accent">courierttservices@gmail.com</span></span>
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate className="border-t-4 border-accent bg-card p-6 shadow-route sm:p-9">
        <div className="grid gap-5 sm:grid-cols-2">
          {fields.map((field) => (
            <label key={field.name} className="block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-primary">{field.label}</span>
              <input name={field.name} type={field.type ?? "text"} placeholder={field.placeholder} aria-invalid={Boolean(errors[field.name])} aria-describedby={`${field.name}-error`} className="h-12 w-full rounded-none border border-input bg-background px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/15" />
              <span id={`${field.name}-error`} className="mt-1.5 block min-h-4 text-xs text-destructive">{errors[field.name]}</span>
            </label>
          ))}
        </div>
        <label className="mt-2 block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-primary">Share your request</span>
          <textarea name="request" rows={6} placeholder="Tell us about the pickup, destination, timing, and expected volume." aria-invalid={Boolean(errors.request)} aria-describedby="request-error" className="w-full resize-y rounded-none border border-input bg-background p-4 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/15" />
          <span id="request-error" className="mt-1.5 block min-h-4 text-xs text-destructive">{errors.request}</span>
        </label>
        <Button type="submit" variant="action" size="xl" className="mt-3 w-full">Prepare email request <Send /></Button>
        <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">This opens your email app with your request ready to send.</p>
      </form>
    </section>
  );
}