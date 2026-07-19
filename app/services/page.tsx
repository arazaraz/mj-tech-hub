import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { QuoteForm } from "@/components/QuoteForm";
import { megaMenu, serviceGroups, vendorPills } from "@/lib/site";

export const metadata: Metadata = {
  title: "IT, Network, Security, VoIP & AI Services",
  description: "Complete IT, network, CCTV, alarm, access control, VoIP, AI receptionist, Wi-Fi and smart technology services in Toronto and the GTA.",
};

export default function ServicesPage() {
  const ids = ["support", "network", "security", "voice-ai"];

  return (
    <PageShell>
      <PageHero eyebrow="Integrated solutions" title="Every technology layer, designed to work together." text="From the cable behind the wall to the workflow answering your next customer call, MJ Tech Hub brings your essential systems into one clear service plan." />

      <section className="border-b border-slate-200 bg-white py-10">
        <div className="container grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {megaMenu.map((item) => {
            const Icon = item.icon;
            return <a key={item.title} href={item.href} className="group flex items-center gap-3 rounded-2xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-mist"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-electric"><Icon size={18} /></span><span className="text-sm font-extrabold text-ink">{item.title}</span><ArrowRight size={14} className="ml-auto text-slate-400 transition group-hover:translate-x-1" /></a>;
          })}
        </div>
      </section>

      <section className="section bg-[#f7f9fc]">
        <div className="container">
          <div className="max-w-3xl"><p className="eyebrow">Service capabilities</p><h2 className="h2 mt-4">A clear scope for support, projects and ongoing improvements.</h2><p className="lead mt-5">Choose one service or combine several into a complete office, clinic, retail or residential deployment.</p></div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {serviceGroups.map((group, index) => (
              <article id={ids[index]} key={group.title} className="scroll-mt-32 rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
                <div className="flex items-start justify-between gap-5"><div><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-blue-600">Solution 0{index + 1}</p><h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">{group.title}</h2></div><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mist text-sm font-extrabold text-blue-600">0{index + 1}</span></div>
                <p className="mt-4 leading-7 text-slate-600">{group.summary}</p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {group.items.map((item) => <div key={item} className="flex items-start gap-2.5 text-sm font-semibold text-slate-700"><CheckCircle2 className="mt-0.5 shrink-0 text-blue-600" size={16} /><span>{item}</span></div>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container"><p className="text-center text-[10px] font-extrabold uppercase tracking-[.22em] text-slate-500">Platforms and systems commonly supported</p><div className="mt-7 flex flex-wrap justify-center gap-2">{vendorPills.map((vendor) => <span key={vendor} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-bold text-slate-600">{vendor}</span>)}</div></div>
      </section>

      <QuoteForm />
    </PageShell>
  );
}
