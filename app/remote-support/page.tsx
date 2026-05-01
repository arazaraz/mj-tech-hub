import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Remote IT Support in Toronto & GTA | MJ Tech Hub",
  description: "Remote IT support for email, Microsoft 365, printers, Wi-Fi, computers, software and business technology issues.",
};

const items = ["Microsoft 365 and email", "Computer troubleshooting", "Printer and scanner support", "Wi-Fi troubleshooting", "Remote access guidance", "VoIP and CCTV access support"];

export default function RemoteSupportPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Remote Support"
        title="Remote IT Support for Common Technology Issues"
        text="Quick remote help desk support for issues that can be diagnosed and resolved online before an on-site visit is required."
      />
      <section className="section bg-white">
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div><p className="eyebrow">Remote Coverage</p><h2 className="h2 mt-3">Fast support without waiting for a site visit.</h2><p className="lead mt-5">Remote support is best for software, user access, email, account, configuration and basic troubleshooting issues.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">{items.map((item) => <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-bold text-slate-800">✓ {item}</div>)}</div>
        </div>
      </section>
      <QuoteForm />
    </PageShell>
  );
}
