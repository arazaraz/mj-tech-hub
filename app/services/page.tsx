import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { QuoteForm } from "@/components/QuoteForm";
import { serviceGroups, vendorPills } from "@/lib/site";

export const metadata: Metadata = {
  title: "IT, Network, CCTV, Alarm, Access Control & VoIP Services | MJ Tech Hub",
  description: "Complete IT, network, CCTV, intrusion alarm, access control, VoIP, Wi-Fi, smart home and help desk services in Toronto and the GTA.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Services" title="IT, Network, Security and Smart Technology Services" text="A complete service structure for support, infrastructure, security systems, communications and residential technology across Toronto and the GTA." />
      <section className="section bg-white">
        <div className="container"><div className="grid gap-6 lg:grid-cols-2">{serviceGroups.map((group) => <div key={group.title} className="card-static"><h2 className="h3">{group.title}</h2><p className="mt-3 body-copy">{group.summary}</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{group.items.map((item) => <div key={item} className="text-sm font-bold text-slate-700"><span className="mr-2 text-brand">✓</span>{item}</div>)}</div></div>)}</div></div>
      </section>
      <section className="bg-slate-50 px-5 py-14 lg:px-8"><div className="mx-auto max-w-7xl"><p className="mb-6 text-center text-xs font-black uppercase tracking-[0.24em] text-slate-500">Technology platforms and systems commonly supported</p><div className="flex flex-wrap justify-center gap-3">{vendorPills.map((vendor) => <span key={vendor} className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700">{vendor}</span>)}</div></div></section>
      <QuoteForm />
    </PageShell>
  );
}
