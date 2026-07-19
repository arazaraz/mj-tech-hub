import type { Metadata } from "next";
import { ArrowRight, Bot, CalendarCheck, CheckCircle2, MessagesSquare, PhoneCall, Workflow } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "AI Receptionist for Clinics & Businesses in Toronto",
  description: "AI phone receptionist, missed-call and appointment automation for clinics, dental offices and appointment-based businesses in Toronto and the GTA.",
};

const capabilities = [
  { icon: PhoneCall, title: "Answer calls", text: "Provide consistent first-line coverage when staff are busy, after hours or helping someone in person." },
  { icon: MessagesSquare, title: "Handle common questions", text: "Share approved information, identify caller intent and collect the details your team needs." },
  { icon: CalendarCheck, title: "Support appointments", text: "Connect booking, confirmation and follow-up steps where supported by the selected systems." },
  { icon: Workflow, title: "Route and follow up", text: "Transfer priority calls, send notifications and create structured missed-call workflows." },
];

export default function AIReceptionistPage() {
  return (
    <PageShell>
      <PageHero eyebrow="AI-powered customer communications" title="A responsive front desk, even when your team is busy." text="AI receptionist and phone automation designed for clinics, dental offices and appointment-based businesses that cannot afford to miss important calls." />
      <section className="section bg-white">
        <div className="container grid gap-14 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
          <div><p className="eyebrow">Why it matters</p><h2 className="h2 mt-4">Reduce missed calls without adding more pressure to the front desk.</h2><p className="lead mt-6">A carefully designed AI call workflow supports your staff—it does not replace clinical judgment or make promises outside your approved process.</p><a href="/contact#quote-form" className="btn-dark mt-8">Discuss your workflow <ArrowRight size={17} /></a></div>
          <div className="grid gap-4 sm:grid-cols-2">{capabilities.map((item) => { const Icon = item.icon; return <article key={item.title} className="card-static"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><Icon size={20} /></div><h3 className="mt-5 text-lg font-extrabold text-ink">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p></article>; })}</div>
        </div>
      </section>
      <section className="section bg-[#081426] text-white"><div className="container"><div className="mx-auto max-w-3xl text-center"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-electric"><Bot size={26} /></div><p className="eyebrow mt-6 !text-electric">A controlled implementation</p><h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">Built around your approved information and escalation rules.</h2><p className="mt-5 text-lg leading-8 text-slate-300">Every deployment begins with the real call types, business hours, appointment process, privacy expectations and situations that must reach a person.</p></div><div className="mt-12 grid gap-3 md:grid-cols-4">{["Discover call types", "Define approved answers", "Connect workflows", "Test & improve"].map((item, index) => <div key={item} className="rounded-2xl border border-white/10 bg-white/[.05] p-5"><span className="text-xs font-extrabold text-electric">0{index + 1}</span><p className="mt-5 font-extrabold">{item}</p></div>)}</div></div></section>
      <section className="section bg-mist"><div className="container grid gap-12 lg:grid-cols-2 lg:items-center"><div><p className="eyebrow">Best-fit environments</p><h2 className="h2 mt-4">Made for teams where every call matters.</h2><p className="lead mt-5">Particularly useful for high-call-volume, appointment-based and front-desk-driven businesses.</p></div><div className="grid gap-3 sm:grid-cols-2">{["Dental offices", "Medical and wellness clinics", "Home-service companies", "Professional offices", "Property services", "Appointment-based businesses"].map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4 text-sm font-bold text-slate-700 shadow-sm"><CheckCircle2 size={17} className="text-blue-600" />{item}</div>)}</div></div></section>
      <QuoteForm />
    </PageShell>
  );
}
