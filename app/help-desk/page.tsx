import type { Metadata } from "next";
import { Clock, Headphones, Wrench } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Remote & On-Site IT Help Desk Support | MJ Tech Hub",
  description: "Fast remote and on-site IT help desk support for homes, offices, clinics, dental offices and small businesses across Toronto and the GTA.",
};

const supportOptions = [
  { title: "Remote Help Desk", icon: Headphones, text: "Fast support for email, Microsoft 365, printers, Wi-Fi, software, user access and common workstation issues." },
  { title: "On-Site IT Support", icon: Wrench, text: "Hands-on service for network hardware, cabling, Wi-Fi access points, cameras, VoIP phones and office devices." },
  { title: "Quick Response Support", icon: Clock, text: "Priority support for businesses when technology issues affect daily operations." },
];

const supportScope = ["Computer and workstation troubleshooting", "Microsoft 365 and email support", "Printer and scanner setup", "Wi-Fi and network troubleshooting", "VoIP phone support", "CCTV remote viewing support", "New user and device setup", "Home office support", "Clinic and dental office support"];

export default function HelpDeskPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Remote & On-Site Help Desk" title="Fast IT Support When You Need Help Now" text="Remote support when possible. On-site service when needed. Practical troubleshooting for homes, offices, clinics, dental offices and small businesses across Toronto and the GTA." />
      <section className="section bg-white">
        <div className="container">
          <div className="mb-12 max-w-3xl"><p className="eyebrow">Support Options</p><h2 className="h2 mt-3">Choose the right support path for the issue.</h2><p className="lead mt-5">Some issues can be fixed remotely. Others need hands-on service. We support both.</p></div>
          <div className="grid gap-5 lg:grid-cols-3">
            {supportOptions.map((item) => { const Icon = item.icon; return <div key={item.title} className="card-static"><Icon className="mb-5 text-brand" size={32} /><h3 className="h3">{item.title}</h3><p className="mt-4 body-copy">{item.text}</p></div>; })}
          </div>
        </div>
      </section>
      <section className="section bg-slate-50">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div><p className="eyebrow">What We Support</p><h2 className="h2 mt-3">Clear help desk coverage for real business issues.</h2><p className="lead mt-5">A focused support scope keeps requests organized and easier to quote or schedule.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">{supportScope.map((item) => <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-bold text-slate-800">✓ {item}</div>)}</div>
        </div>
      </section>
      <QuoteForm />
    </PageShell>
  );
}
