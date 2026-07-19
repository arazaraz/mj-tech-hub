import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Headphones, PhoneCall, Route, Settings2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Business VoIP Phone Systems in Toronto & GTA",
  description: "VoIP consulting, phone system setup, call routing, desk phones and communications support for clinics, dental offices and GTA businesses.",
};

const capabilities = [
  { icon: PhoneCall, title: "Business phone setup", text: "Extensions, desk phones, mobile users and core calling features configured around your team." },
  { icon: Route, title: "Call-flow design", text: "Menus, departments, queues, business hours, voicemail and overflow routing planned clearly." },
  { icon: Headphones, title: "User readiness", text: "Device provisioning, testing and practical handover for front-desk and office users." },
  { icon: Settings2, title: "Troubleshooting", text: "Support for audio quality, registration, routing, network readiness and configuration issues." },
];

export default function VoipPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Business communications" title="A phone system designed around how your team actually works." text="VoIP consulting, implementation and support for offices, clinics, dental practices and growing businesses across Toronto and the GTA." />
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl"><p className="eyebrow">VoIP done properly</p><h2 className="h2 mt-4">Clear calls. Smarter routing. Easier management.</h2><p className="lead mt-5">The right solution connects the phone platform, network and daily workflow—not just the handsets on each desk.</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">{capabilities.map((item) => { const Icon = item.icon; return <article key={item.title} className="card-static"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-electric"><Icon size={22} /></div><h3 className="h3 mt-6">{item.title}</h3><p className="body-copy mt-3">{item.text}</p></article>; })}</div>
        </div>
      </section>
      <section className="section bg-mist"><div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Typical scope</p><h2 className="h2 mt-4">From first call to final test.</h2></div><div className="grid gap-3 sm:grid-cols-2">{["Requirements review", "Number and extension planning", "Auto-attendant and queues", "Business-hours routing", "Desk-phone provisioning", "Voicemail and email alerts", "Network and QoS review", "Testing and user handover"].map((item) => <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 text-sm font-bold text-slate-700 shadow-sm"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-blue-600" />{item}</div>)}</div></div></section>
      <section className="bg-ink py-14 text-white"><div className="container flex flex-col justify-between gap-6 md:flex-row md:items-center"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-electric">Ready for the next step?</p><h2 className="mt-2 text-2xl font-extrabold">Add AI call handling and appointment workflows.</h2></div><a href="/ai-receptionist" className="btn-primary shrink-0">Explore AI Receptionist <ArrowRight size={17} /></a></div></section>
      <QuoteForm />
    </PageShell>
  );
}
