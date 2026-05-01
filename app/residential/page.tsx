import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { QuoteForm } from "@/components/QuoteForm";
import { residentialScope } from "@/lib/site";

export const metadata: Metadata = {
  title: "Residential IT, Wi-Fi, CCTV & Smart Home Setup in Toronto & GTA | MJ Tech Hub",
  description: "Residential IT, Wi-Fi, mesh Wi-Fi, CCTV, smart doorbell, alarm, smart home and home office setup services in Toronto and the GTA.",
};

const homeTypes = ["Detached Homes", "Townhouses", "Condos", "Basements", "Home Offices", "Rental Properties"];

export default function ResidentialPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Residential Technology" title="Home Wi-Fi, Security, Smart Home and IT Setup" text="Reliable home technology services for Wi-Fi, smart devices, cameras, alarm systems, home offices and residential troubleshooting across Toronto and the GTA." />
      <section className="section bg-white">
        <div className="container grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div><p className="eyebrow">Home Technology</p><h2 className="h2 mt-3">Practical setup for modern homes and home offices.</h2><p className="lead mt-5">Improve coverage, security, device reliability and remote access with a clean installation approach.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">{residentialScope.map((item) => <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-bold text-slate-800"><span className="mr-2 text-brand">●</span>{item}</div>)}</div>
        </div>
      </section>
      <section className="bg-slate-50 px-5 py-14 lg:px-8"><div className="mx-auto max-w-7xl"><p className="mb-6 text-center text-xs font-black uppercase tracking-[0.24em] text-slate-500">Residential spaces supported</p><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">{homeTypes.map((item) => <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-center text-sm font-black text-slate-800 shadow-sm">{item}</div>)}</div></div></section>
      <QuoteForm />
    </PageShell>
  );
}
