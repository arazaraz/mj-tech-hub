import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Book a Site Visit | MJ Tech Hub Toronto & GTA",
  description: "Book a site visit for office setup, network cabling, CCTV, alarm, access control, VoIP, residential Wi-Fi and smart home services.",
};

const visitReasons = ["New office setup", "Network cabling review", "Wi-Fi coverage issue", "CCTV or alarm installation", "Access control planning", "Residential technology setup"];

export default function BookMeetingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Book a Site Visit"
        title="Schedule a Review for Your Office or Home Project"
        text="A site visit helps confirm wiring paths, device locations, network requirements, security needs, access points, cameras and project scope before quoting."
      />
      <section className="section bg-white">
        <div className="container">
          <div className="mb-12 max-w-3xl"><p className="eyebrow">Site Visit Reasons</p><h2 className="h2 mt-3">Use this request for planning and project review.</h2></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{visitReasons.map((item) => <div key={item} className="card-static text-center font-black text-slate-900">{item}</div>)}</div>
        </div>
      </section>
      <QuoteForm />
    </PageShell>
  );
}
