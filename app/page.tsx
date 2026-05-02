import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock,
  MapPin,
  Star,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { QuoteForm } from "@/components/QuoteForm";
import {
  areas,
  faq,
  industries,
  officeScope,
  processSteps,
  residentialScope,
  serviceCategories,
  serviceGroups,
  testimonials,
  vendorPills,
} from "@/lib/site";
import { recentProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "IT, Network, Security & Help Desk Services",
  description: "MJ Tech Hub provides professional IT support, network infrastructure, CCTV, access control, alarm systems, and office technology setup services across Toronto and the GTA.",
};

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <TrustBar />
      <ServiceCategories />
      <ServiceDetailGrid />
      <RecentWork />
      <Reliability />
      <OfficeSetup />
      <Residential />
      <Industries />
      <Process />
      <ServiceAreas />
      <FAQ />
      <QuoteForm />
    </PageShell>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white lg:px-8 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1d4ed866,transparent_36%),radial-gradient(circle_at_bottom_left,#f9731638,transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black text-blue-100 backdrop-blur">
            <Clock size={16} className="text-orange-300" />
            Toronto & GTA • Remote Help Desk • On-Site Service
          </div>

          <h1 className="h1">Enhance Your IT, Network & Security Infrastructure</h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            Professional help desk, network cabling, office setup, CCTV, intrusion alarm,
            access control, VoIP and smart technology services for homes and businesses
            across Toronto and the GTA.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a href="/contact#quote-form" className="btn-primary">
              Request Quote <ArrowRight size={18} />
            </a>
            <a href="/book-meeting" className="btn-light">
              Book a Site Visit
            </a>
            <a href="/remote-support" className="btn-light">
              Get Remote Support
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {["Fast response", "Clean installation", "Final testing"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-black text-slate-300">
                <CheckCircle2 size={18} className="text-orange-300" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
          <div className="rounded-[1.5rem] bg-white p-7 text-slate-950">
            <p className="eyebrow">Complete Coverage</p>
            <h2 className="mt-3 text-3xl font-black leading-tight">
              One organized service partner for IT, network and security.
            </h2>
            <div className="mt-7 grid gap-4">
              {[
                ["Help Desk", "Remote and on-site support for everyday IT issues."],
                ["Office Setup", "Wiring, rack, Wi-Fi, devices and final handover."],
                ["Security", "CCTV, intrusion alarm and access control systems."],
                ["Residential", "Home Wi-Fi, smart devices, cameras and home office setup."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 text-brand" size={21} />
                    <div>
                      <p className="font-black text-slate-950">{title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="bg-white px-5 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Professional Service Approach</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
              Clear communication, organized work and reliable support.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="card-static">
                <div className="mb-4 flex gap-1 text-brand">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} fill="currentColor" size={15} />
                  ))}
                </div>
                <p className="text-sm leading-6 text-slate-700">“{t.quote}”</p>
                <p className="mt-4 text-sm font-black text-slate-950">{t.name}</p>
                <p className="text-xs font-bold text-slate-500">{t.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCategories() {
  return (
    <section id="services" className="section bg-slate-50">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <p className="eyebrow">Core Services</p>
          <h2 className="h2 mt-3">Everything your property needs to stay connected and secure.</h2>
          <p className="lead mt-5">
            A clear service structure for fast support, clean infrastructure, security systems,
            communications and full office or residential setup.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((s) => {
            const Icon = s.icon;
            return (
              <a key={s.title} href={s.href} className="card group">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-brand transition group-hover:bg-brand group-hover:text-white">
                  <Icon size={28} />
                </div>
                <h3 className="h3">{s.title}</h3>
                <p className="mt-4 body-copy">{s.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-brand">
                  Learn more <ArrowRight size={17} />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceDetailGrid() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <p className="eyebrow">Detailed Scope</p>
          <h2 className="h2 mt-3">Services are organized so nothing gets missed.</h2>
          <p className="lead mt-5">
            Each category is written clearly for customers and useful for quoting, site visits and project planning.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {serviceGroups.map((group) => (
            <div key={group.title} className="card-static">
              <h3 className="h3">{group.title}</h3>
              <p className="mt-3 body-copy">{group.summary}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {group.items.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-brand" size={17} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function RecentWork() {
  return (
    <section className="section bg-gradient-to-b from-slate-50 to-white">
      <div className="container">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow">Recent Work</p>
            <h2 className="h2 mt-3">Project delivery with clear outcomes.</h2>
            <p className="lead mt-5">
              Selected examples from our network, security and office deployment engagements across Toronto and the GTA.
            </p>
          </div>
          <a href="/projects" className="btn-dark">View All Projects <ArrowRight size={18} /></a>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {recentProjects.map((project) => (
            <article key={project.slug} className="card-static border-slate-200">
              <div className="mb-4 rounded-2xl bg-[linear-gradient(135deg,#0f172a,#1d4ed8_55%,#f97316)] p-5 text-white">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-200">{project.category}</p>
                <h3 className="mt-2 text-2xl font-black leading-tight">{project.title}</h3>
                <p className="mt-2 text-sm text-blue-100">{project.location} • {project.propertyType}</p>
              </div>
              <p className="text-sm leading-7 text-slate-600">{project.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reliability() {
  const items = [
    "Remote + on-site support",
    "Clean installation",
    "End-to-end delivery",
    "Final testing before handover",
    "Homes and businesses",
    "Toronto & GTA coverage",
  ];

  return (
    <section id="about" className="section bg-slate-950 text-white">
      <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-orange-300">
            Why MJ Tech Hub
          </p>
          <h2 className="text-3xl font-black tracking-tight md:text-5xl">
            Reliable. Organized. Fully Tested.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Technology services you can count on — from urgent help desk support to
            full project delivery from wiring to final handover.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item} className="rounded-2xl bg-white/10 p-5 font-black">
              <BadgeCheck className="mb-3 text-orange-300" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OfficeSetup() {
  return (
    <section className="section bg-white">
      <div className="container grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="eyebrow">Complete Office Setup</p>
          <h2 className="h2 mt-3">From empty space to fully operational office.</h2>
          <p className="lead mt-6">
            Complete technology deployment for offices, clinics, dental offices and small businesses —
            planned, installed, configured, tested and handed over cleanly.
          </p>
          <a href="/office-setup" className="btn-dark mt-8">
            Explore Office Setup <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {officeScope.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-bold text-slate-800">
              <span className="mr-2 text-brand">●</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Residential() {
  return (
    <section className="section bg-slate-50">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <p className="eyebrow">Residential Technology</p>
          <h2 className="h2 mt-3">Smart, secure and reliable technology for homes.</h2>
          <p className="lead mt-5">
            Home Wi-Fi, smart devices, cameras, alarms, home office setup and practical support
            for houses, condos and residential properties.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {residentialScope.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 text-center text-sm font-black text-slate-800 shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="section bg-white">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <p className="eyebrow">Industries We Serve</p>
          <h2 className="h2 mt-3">Built for homes and business environments.</h2>
          <p className="lead mt-5">
            Service coverage for residential properties, professional offices and small business spaces.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div key={industry.title} className="rounded-[1.5rem] bg-slate-950 p-6 text-white shadow-sm">
                <Icon className="mb-5 text-orange-300" size={28} />
                <p className="text-lg font-black">{industry.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section bg-slate-50">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <p className="eyebrow">Our Process</p>
          <h2 className="h2 mt-3">A clear workflow from request to handover.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <div key={step.title} className="card-static">
              <div className="mb-4 text-sm font-black text-brand">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-black text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceAreas() {
  return (
    <section id="service-areas" className="bg-white px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-slate-950 p-8 text-white lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand">
              <MapPin size={28} />
            </div>
            <h2 className="text-3xl font-black md:text-4xl">Toronto & GTA service coverage.</h2>
            <p className="mt-4 leading-8 text-slate-300">
              Remote support and on-site service for residential and business clients.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {areas.map((area) => (
              <div key={area} className="rounded-2xl bg-white/10 p-4 text-center text-sm font-black">
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="section bg-slate-50">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <p className="eyebrow">FAQ</p>
          <h2 className="h2 mt-3">Common questions.</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {faq.map((item) => (
            <div key={item.q} className="card-static">
              <h3 className="text-lg font-black text-slate-950">{item.q}</h3>
              <p className="mt-4 body-copy">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
