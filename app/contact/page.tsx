import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { QuoteForm } from "@/components/QuoteForm";
import { addressLine1, addressLine2, email, phone } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Quote | MJ Tech Hub Toronto & GTA",
  description:
    "Request a quote for IT support, help desk, network setup, CCTV, alarm systems, access control, VoIP, smart home and office setup services.",
};

export default function ContactPage() {
  const cleanPhone = phone.replace(/[^+\d]/g, "");

  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Request a Quote or Get Technical Support"
        text="Tell us what you need help with. Use the form below for remote support, on-site service, complete office setup, residential technology, CCTV, alarm, access control, Wi-Fi, VoIP or smart home work."
      />

      <section className="section bg-white">
        <div className="container grid gap-5 md:grid-cols-3">
          <a href={`tel:${cleanPhone}`} className="card-static">
            <Phone className="mb-4 text-brand" />
            <p className="text-sm font-black uppercase tracking-[0.15em] text-slate-500">Phone</p>
            <p className="mt-2 text-xl font-black text-slate-950">{phone}</p>
            <p className="mt-2 text-sm text-slate-600">Call or text for quick support and scheduling.</p>
          </a>
          <a href={`mailto:${email}`} className="card-static">
            <Mail className="mb-4 text-brand" />
            <p className="text-sm font-black uppercase tracking-[0.15em] text-slate-500">Email</p>
            <p className="mt-2 text-xl font-black text-slate-950">{email}</p>
            <p className="mt-2 text-sm text-slate-600">Send scope details, photos and quote requests.</p>
          </a>
          <div className="card-static">
            <MapPin className="mb-4 text-brand" />
            <p className="text-sm font-black uppercase tracking-[0.15em] text-slate-500">Address / Service Area</p>
            <p className="mt-2 text-xl font-black text-slate-950">{addressLine1}</p>
            <p className="mt-2 text-sm text-slate-600">{addressLine2}</p>
          </div>
        </div>
      </section>

      <QuoteForm />
    </PageShell>
  );
}
