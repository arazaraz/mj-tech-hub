import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { QuoteForm } from "@/components/QuoteForm";
import { officeScope, processSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Complete Office IT, Network & Security Setup in Toronto & GTA | MJ Tech Hub",
  description: "End-to-end office setup including wiring, termination, rack setup, Wi-Fi, CCTV, alarm systems, access control, VoIP and final testing.",
};

const environments = ["Small Offices", "Clinics", "Dental Offices", "Retail Spaces", "Warehouses", "Office Renovations", "New Build-Outs", "Professional Offices"];

export default function OfficeSetupPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Complete Office Setup" title="From Empty Space to Fully Operational Office" text="End-to-end technology deployment for offices, clinics, dental offices and small businesses — from planning and wiring to installation, configuration, testing and handover." />
      <section className="section bg-white">
        <div className="container grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div><p className="eyebrow">Project Scope</p><h2 className="h2 mt-3">Everything needed for a clean office technology setup.</h2><p className="lead mt-5">Designed for customers who need one organized provider for network, IT, Wi-Fi, security and communications setup.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">{officeScope.map((item) => <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-bold text-slate-800"><span className="mr-2 text-brand">●</span>{item}</div>)}</div>
        </div>
      </section>
      <section className="section bg-slate-50">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div className="card-static"><h2 className="h3">Ideal for</h2><div className="mt-6 grid gap-3 sm:grid-cols-2">{environments.map((item) => <div key={item} className="rounded-xl bg-slate-50 p-4 text-sm font-bold text-slate-700">{item}</div>)}</div></div>
          <div className="card-static"><h2 className="h3">Process</h2><div className="mt-6 grid gap-4">{processSteps.map((step, index) => <div key={step.title} className="flex gap-4"><div className="font-black text-brand">{index + 1}</div><div><p className="font-black text-slate-950">{step.title}</p><p className="text-sm leading-6 text-slate-600">{step.text}</p></div></div>)}</div></div>
        </div>
      </section>
      <QuoteForm />
    </PageShell>
  );
}
