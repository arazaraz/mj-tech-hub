import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Service Pricing | MJ Tech Hub Toronto & GTA",
  description: "Request pricing for remote support, on-site IT support, network cabling, CCTV, alarm, access control, VoIP and complete office setup services.",
};

const pricingTypes = ["Remote Help Desk", "On-Site Troubleshooting", "Complete Office Setup", "Residential Wi-Fi / Smart Home", "CCTV / Alarm / Access Control", "Network Cabling / Rack Setup"];

export default function ServicePricingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Service Pricing"
        title="Request Clear Pricing for Your Service or Project"
        text="Pricing depends on the property type, urgency, scope, equipment, wiring requirements and whether the work is remote or on-site. Send the details and we will review the request."
      />
      <section className="section bg-white">
        <div className="container">
          <div className="mb-12 max-w-3xl"><p className="eyebrow">Pricing Categories</p><h2 className="h2 mt-3">Tell us what type of work you need priced.</h2></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{pricingTypes.map((item) => <div key={item} className="card-static text-center font-black text-slate-900">{item}</div>)}</div>
        </div>
      </section>
      <QuoteForm />
    </PageShell>
  );
}
