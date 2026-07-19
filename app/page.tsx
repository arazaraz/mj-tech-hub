import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Bot,
  Building2,
  Cable,
  Camera,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Home,
  MapPin,
  Network,
  PhoneCall,
  Router,
  Server,
  ShieldCheck,
  Sparkles,
  Wifi,
  Workflow,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { QuoteForm } from "@/components/QuoteForm";
import { areas, faq, industries, processSteps, serviceCategories } from "@/lib/site";
import { recentProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "IT, Network, Security, VoIP & AI Solutions in Toronto",
  description:
    "MJ Tech Hub designs, installs and supports IT, networks, Wi-Fi, CCTV, access control, VoIP and AI receptionist solutions across Toronto and the GTA.",
};

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <ConfidenceStrip />
      <Solutions />
      <IntegratedApproach />
      <AIReceptionist />
      <Industries />
      <RecentWork />
      <Process />
      <About />
      <ServiceAreas />
      <FAQ />
      <QuoteForm />
    </PageShell>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 tech-grid opacity-70" />
      <div className="absolute -left-48 top-24 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[130px]" />
      <div className="absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-electric/15 blur-[130px]" />
      <div className="absolute bottom-0 right-1/4 h-[280px] w-[280px] rounded-full bg-orange-500/10 blur-[110px]" />

      <div className="container relative grid min-h-[720px] items-center gap-14 py-20 lg:grid-cols-[1.02fr_.98fr] lg:py-24">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-300/15 bg-blue-400/[.08] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.15em] text-blue-100 backdrop-blur">
            <span className="status-pulse h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Integrated technology partner · Toronto & GTA
          </div>

          <h1 className="h1 max-w-4xl">
            Technology that keeps your space <span className="bg-gradient-to-r from-electric via-blue-300 to-white bg-clip-text text-transparent">connected</span>, secure and ready.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            We design, install and support the systems your home or business depends on—from networks and Wi-Fi to security, VoIP and AI-powered customer communications.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="/contact#quote-form" className="btn-primary">
              Request a consultation <ArrowUpRight size={18} />
            </a>
            <a href="/services" className="btn-light">
              Explore our solutions <ArrowRight size={17} />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-7 text-xs font-bold text-slate-400">
            {[
              "Remote + on-site",
              "Residential + business",
              "Planning through handover",
            ].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 size={15} className="text-electric" /> {item}
              </span>
            ))}
          </div>
        </div>

        <SystemVisual />
      </div>
    </section>
  );
}

function SystemVisual() {
  const nodes = [
    { icon: Network, label: "Network", detail: "Connected", className: "left-5 top-8 sm:left-8" },
    { icon: ShieldCheck, label: "Security", detail: "Protected", className: "right-5 top-8 sm:right-8" },
    { icon: PhoneCall, label: "Voice", detail: "Available", className: "bottom-8 left-5 sm:left-8" },
    { icon: Bot, label: "AI Front Desk", detail: "Responsive", className: "bottom-8 right-5 sm:right-8" },
  ];

  return (
    <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
      <div className="absolute inset-10 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="relative aspect-[1/1.03] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.055] p-4 shadow-panel backdrop-blur-xl sm:p-6">
        <div className="absolute inset-0 dot-field opacity-35" />
        <div className="relative flex items-center justify-between border-b border-white/10 pb-4 text-[10px] font-bold uppercase tracking-[.17em] text-slate-400">
          <span>Integrated system overview</span>
          <span className="inline-flex items-center gap-2 text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Online</span>
        </div>

        <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/15 sm:h-56 sm:w-56" />
        <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/20 sm:h-40 sm:w-40" />
        <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[1.6rem] border border-blue-300/25 bg-[#0d213a] shadow-glow sm:h-28 sm:w-28">
          <Server className="text-electric" size={28} />
          <span className="mt-2 text-xs font-extrabold">MJ CORE</span>
          <span className="mt-1 text-[8px] font-bold uppercase tracking-widest text-emerald-300">All systems ready</span>
        </div>

        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 560 575" preserveAspectRatio="none" aria-hidden="true">
          <path d="M145 130 C210 150 215 220 255 250" fill="none" stroke="rgba(78,161,255,.32)" strokeWidth="1.5" strokeDasharray="5 6" />
          <path d="M415 130 C350 150 345 220 305 250" fill="none" stroke="rgba(78,161,255,.32)" strokeWidth="1.5" strokeDasharray="5 6" />
          <path d="M145 450 C210 430 215 360 255 330" fill="none" stroke="rgba(255,107,44,.28)" strokeWidth="1.5" strokeDasharray="5 6" />
          <path d="M415 450 C350 430 345 360 305 330" fill="none" stroke="rgba(78,161,255,.32)" strokeWidth="1.5" strokeDasharray="5 6" />
        </svg>

        {nodes.map((node) => {
          const Icon = node.icon;
          return (
            <div key={node.label} className={`absolute ${node.className} w-[116px] rounded-2xl border border-white/10 bg-[#0b1a2d]/90 p-3 shadow-lg backdrop-blur sm:w-[140px] sm:p-4`}>
              <div className="flex items-center justify-between">
                <Icon size={18} className="text-electric" />
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </div>
              <p className="mt-3 text-xs font-extrabold sm:text-sm">{node.label}</p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-slate-500 sm:text-[10px]">{node.detail}</p>
            </div>
          );
        })}
      </div>
      <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-full border border-white/10 bg-[#0b192b] px-5 py-3 text-[10px] font-extrabold uppercase tracking-[.14em] text-slate-300 shadow-xl">
        <Sparkles size={14} className="text-brand" /> One partner. Every layer.
      </div>
    </div>
  );
}

function ConfidenceStrip() {
  const items = [
    ["10+ years", "Hands-on field experience"],
    ["End-to-end", "Plan, install, configure, test"],
    ["One partner", "IT, network, security & voice"],
    ["GTA-wide", "Homes and business environments"],
  ];

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="container grid divide-y divide-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {items.map(([value, label]) => (
          <div key={value} className="px-1 py-7 sm:px-7 lg:py-8 first:pl-0 last:pr-0">
            <p className="text-xl font-extrabold tracking-tight text-ink">{value}</p>
            <p className="mt-1 text-xs font-semibold text-slate-500">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Solutions() {
  const accents = [
    "from-blue-500/10 to-cyan-400/5",
    "from-sky-500/10 to-blue-500/5",
    "from-indigo-500/10 to-blue-500/5",
    "from-orange-500/10 to-amber-400/5",
    "from-cyan-500/10 to-blue-500/5",
    "from-slate-500/10 to-blue-500/5",
  ];

  return (
    <section id="solutions" className="section bg-[#f7f9fc]">
      <div className="container">
        <SectionIntro
          eyebrow="What we build"
          title="One technology partner. Every critical system."
          text="Clear accountability across the full technology stack—so your network, security, communications and devices work together instead of becoming separate problems."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((service, index) => {
            const Icon = service.icon;
            return (
              <a key={service.title} href={service.href} className={`group relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-gradient-to-br ${accents[index]} bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-soft`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-electric shadow-lg shadow-blue-950/10">
                    <Icon size={23} />
                  </div>
                  <ArrowUpRight size={19} className="text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                </div>
                <h3 className="mt-7 text-xl font-extrabold tracking-[-0.025em] text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.desc}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IntegratedApproach() {
  const layers = [
    { icon: Cable, label: "Infrastructure", text: "Cabling, racks and clean foundations" },
    { icon: Wifi, label: "Connectivity", text: "Switching, routing and Wi-Fi coverage" },
    { icon: Camera, label: "Protection", text: "CCTV, alarm and access control" },
    { icon: Workflow, label: "Operations", text: "Voice, automation and user support" },
  ];

  return (
    <section className="section overflow-hidden bg-white">
      <div className="container grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
        <div>
          <p className="eyebrow">Built as one system</p>
          <h2 className="h2 mt-4">The details behind reliable technology.</h2>
          <p className="lead mt-6">A strong result starts below the surface. We connect the physical infrastructure, network, devices and workflows into one documented, tested solution.</p>
          <div className="mt-8 grid gap-3 text-sm font-bold text-slate-700 sm:grid-cols-2">
            {["Clear project scope", "Practical equipment selection", "Clean installation", "End-to-end testing"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2"><Check size={16} className="text-brand" />{item}</span>
            ))}
          </div>
          <a href="/office-setup" className="btn-dark mt-9">See our project approach <ArrowRight size={17} /></a>
        </div>

        <div className="relative rounded-[2rem] bg-ink p-5 shadow-panel sm:p-8">
          <div className="absolute inset-0 tech-grid opacity-40" />
          <div className="relative">
            <div className="mb-6 flex items-center justify-between text-xs font-bold uppercase tracking-[.16em] text-slate-500">
              <span>Technology stack</span><span className="text-emerald-300">Fully aligned</span>
            </div>
            <div className="grid gap-3">
              {layers.map((layer, index) => {
                const Icon = layer.icon;
                return (
                  <div key={layer.label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.055] p-4 backdrop-blur">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-electric"><Icon size={20} /></div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3"><p className="font-extrabold text-white">{layer.label}</p><span className="text-[10px] font-bold text-slate-500">0{index + 1}</span></div>
                      <p className="mt-1 text-xs leading-5 text-slate-400">{layer.text}</p>
                    </div>
                    <BadgeCheck size={18} className="shrink-0 text-emerald-400" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AIReceptionist() {
  const flow = [
    { icon: PhoneCall, title: "Answer", text: "Handles incoming calls naturally" },
    { icon: Bot, title: "Understand", text: "Identifies intent and captures details" },
    { icon: Workflow, title: "Take action", text: "Books, routes or follows up" },
  ];

  return (
    <section className="section relative overflow-hidden bg-[#081426] text-white">
      <div className="absolute -right-52 top-0 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[140px]" />
      <div className="container relative grid gap-14 lg:grid-cols-[1.04fr_.96fr] lg:items-center">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-300/15 bg-orange-400/[.08] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.18em] text-orange-200">
            <Sparkles size={13} /> Modern front-desk automation
          </div>
          <h2 className="text-4xl font-extrabold leading-[1.06] tracking-[-0.04em] sm:text-5xl">Never let an important call become a missed opportunity.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">AI receptionist and VoIP workflows can answer common questions, capture leads, route callers and support appointment booking—even when your team is busy.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/ai-receptionist" className="btn-primary">Explore AI Receptionist <ArrowUpRight size={18} /></a>
            <a href="/voip" className="btn-light">VoIP solutions</a>
          </div>
          <p className="mt-6 text-xs leading-5 text-slate-500">Designed for clinics, dental offices and appointment-based businesses. Final capabilities depend on the selected phone and scheduling systems.</p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[.05] p-5 shadow-panel backdrop-blur sm:p-7">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div><p className="text-xs font-extrabold uppercase tracking-[.18em] text-slate-500">Incoming call workflow</p><p className="mt-1 font-extrabold">Patient inquiry · 10:42 AM</p></div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300"><PhoneCall size={18} /></div>
          </div>
          <div className="mt-5 grid gap-3">
            {flow.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="relative flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0d1d32] p-4">
                  {index < flow.length - 1 ? <span className="absolute -bottom-4 left-[35px] z-10 h-4 w-px bg-blue-400/30" /> : null}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-electric"><Icon size={18} /></div>
                  <div><p className="text-sm font-extrabold">{item.title}</p><p className="mt-1 text-xs text-slate-400">{item.text}</p></div>
                  <CheckCircle2 size={16} className="ml-auto shrink-0 text-emerald-400" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="section bg-white">
      <div className="container">
        <SectionIntro eyebrow="Who we help" title="Solutions shaped around the space you operate." text="The priorities of a home, clinic and retail environment are different. We design around real users, workflows and property constraints." />
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div key={industry.title} className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:bg-mist">
                <Icon size={21} className="text-blue-600" />
                <p className="mt-4 text-sm font-extrabold text-ink">{industry.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RecentWork() {
  const icons = [Network, Building2, Home];
  return (
    <section className="section bg-[#f7f9fc]">
      <div className="container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionIntro eyebrow="Selected work" title="Real-world solutions, clearly delivered." text="Representative project scopes across business infrastructure, professional offices and residential technology." />
          <a href="/projects" className="btn-dark shrink-0">View project portfolio <ArrowRight size={17} /></a>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {recentProjects.map((project, index) => {
            const Icon = icons[index] || Router;
            return (
              <article key={project.slug} className="group overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <div className="relative min-h-48 overflow-hidden bg-ink p-6 text-white">
                  <div className="absolute inset-0 tech-grid opacity-60" />
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-500/25 blur-3xl" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-start justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-electric"><Icon size={21} /></div><ArrowUpRight size={18} className="text-slate-500 transition group-hover:text-white" /></div>
                    <div className="mt-10"><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-orange-300">{project.category}</p><h3 className="mt-2 text-xl font-extrabold leading-tight">{project.title}</h3></div>
                  </div>
                </div>
                <div className="p-6"><p className="inline-flex items-center gap-2 text-xs font-bold text-slate-500"><MapPin size={13} /> {project.location} · {project.propertyType}</p><p className="mt-4 text-sm leading-7 text-slate-600">{project.result}</p></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionIntro eyebrow="How we work" title="A clear path from issue to outcome." text="Every engagement follows a practical sequence, keeping the scope understandable and the final result testable." />
        <div className="mt-12 grid gap-3 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <div key={step.title} className="relative rounded-2xl border border-slate-200 bg-white p-5">
              <div className="mb-8 flex items-center justify-between"><span className="text-xs font-extrabold text-blue-600">0{index + 1}</span>{index < processSteps.length - 1 ? <ChevronRight size={16} className="hidden text-slate-300 md:block" /> : <CircleDot size={15} className="text-brand" />}</div>
              <h3 className="font-extrabold text-ink">{step.title}</h3><p className="mt-2 text-xs leading-6 text-slate-500">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section bg-mist">
      <div className="container grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow">Why MJ Tech Hub</p>
          <h2 className="h2 mt-4">Hands-on expertise. Straightforward advice.</h2>
        </div>
        <div>
          <p className="lead">We bring field experience across IT support, network infrastructure, low-voltage systems, security and VoIP. That broader view helps us find the actual cause of a problem and design cleaner long-term solutions.</p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {["Organized, clean workmanship", "Recommendations based on the real scope", "Communication before, during and after", "Testing before handover"].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 text-sm font-bold text-slate-700 shadow-sm"><BadgeCheck size={19} className="mt-0.5 shrink-0 text-blue-600" />{item}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceAreas() {
  return (
    <section id="service-areas" className="border-y border-slate-200 bg-white py-12">
      <div className="container flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div><p className="eyebrow">Local service</p><h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink">Serving Toronto and the GTA</h2></div>
        <div className="flex max-w-4xl flex-wrap gap-2">
          {areas.map((area) => <span key={area} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-600">{area}</span>)}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="section bg-[#f7f9fc]">
      <div className="container grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
        <div><p className="eyebrow">Good to know</p><h2 className="h2 mt-4">Frequently asked questions.</h2><p className="lead mt-5">A quick overview of how we support projects and service requests.</p></div>
        <div className="grid gap-3">
          {faq.map((item) => (
            <details key={item.q} className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-blue-200 open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold text-ink"><span>{item.q}</span><span className="text-xl font-light text-blue-600 transition group-open:rotate-45">+</span></summary>
              <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2 mt-4">{title}</h2>
      <p className="lead mt-5">{text}</p>
    </div>
  );
}
