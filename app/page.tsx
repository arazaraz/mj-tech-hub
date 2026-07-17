import type { Metadata } from "next";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  CloudCog,
  Headphones,
  Network,
  PhoneCall,
  RadioTower,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "AI, VoIP, Network & Automation Solutions | MJ Tech Hub",
  description:
    "MJ Tech Hub builds AI receptionists, business phone systems, network infrastructure and intelligent automation for clinics, offices and growing businesses across Toronto and the GTA.",
};

const services = [
  {
    icon: Bot,
    number: "01",
    title: "AI Receptionist & Voice Agents",
    text: "AI-powered phone agents that answer calls, qualify leads, handle FAQs, route callers and support appointment workflows around the clock.",
    href: "/contact",
  },
  {
    icon: PhoneCall,
    number: "02",
    title: "VoIP & Business Communications",
    text: "Cloud and on-premise VoIP systems, SIP trunks, extensions, call routing, auto attendants, recordings and mobile softphones.",
    href: "/services",
  },
  {
    icon: Network,
    number: "03",
    title: "Network & IT Infrastructure",
    text: "Reliable Wi-Fi, switching, firewalls, structured cabling, racks, servers, workstations and complete office technology deployment.",
    href: "/services",
  },
  {
    icon: Workflow,
    number: "04",
    title: "Business Automation",
    text: "n8n workflows that connect calls, forms, email, calendars, CRMs and internal tools to reduce repetitive work and missed opportunities.",
    href: "/contact",
  },
];

const useCases = [
  "Answer every incoming call",
  "Book and confirm appointments",
  "Route urgent calls correctly",
  "Send SMS and email follow-ups",
  "Create CRM records automatically",
  "Reduce front-desk workload",
];

const capabilities = [
  { icon: BrainCircuit, label: "Conversational AI" },
  { icon: RadioTower, label: "SIP & VoIP" },
  { icon: ServerCog, label: "Systems Integration" },
  { icon: CloudCog, label: "Cloud Automation" },
  { icon: ShieldCheck, label: "Secure Infrastructure" },
  { icon: Headphones, label: "Ongoing Support" },
];

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <SignalBar />
      <Services />
      <AIExperience />
      <Infrastructure />
      <Process />
      <FinalCTA />
      <QuoteForm />
    </PageShell>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#05070b] px-5 pb-20 pt-24 text-white lg:px-8 lg:pb-28 lg:pt-32">
      <div className="hero-grid absolute inset-0 opacity-40" />
      <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute -right-32 top-10 h-[34rem] w-[34rem] rounded-full bg-blue-700/20 blur-[150px]" />
      <div className="absolute bottom-0 left-1/2 h-56 w-[38rem] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-200 backdrop-blur">
            <Sparkles size={15} /> Intelligent Business Technology
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.055em] text-white md:text-7xl lg:text-[5.8rem]">
            AI that answers.
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Systems that perform.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            MJ Tech Hub designs and deploys AI receptionists, VoIP systems, network infrastructure and business automation for modern organizations.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="/book-meeting" className="neo-btn-primary">
              Book a Strategy Call <ArrowRight size={18} />
            </a>
            <a href="/contact" className="neo-btn-secondary">
              Build Your Solution
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl gap-4 border-t border-white/10 pt-7 sm:grid-cols-3">
            {[
              ["24/7", "AI call coverage"],
              ["One", "connected ecosystem"],
              ["GTA", "on-site deployment"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-2xl font-black text-white">{value}</p>
                <p className="mt-1 text-sm font-medium text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/20 via-blue-500/5 to-orange-400/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 shadow-2xl backdrop-blur-2xl">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">Live System</p>
                <p className="mt-1 text-sm font-bold text-slate-300">MJ Intelligent Operations</p>
              </div>
              <span className="flex items-center gap-2 text-xs font-bold text-emerald-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Online
              </span>
            </div>

            <div className="space-y-4">
              <DashboardRow icon={PhoneCall} title="Incoming call" text="New patient inquiry" status="Answered" />
              <DashboardRow icon={Bot} title="AI receptionist" text="Intent detected: appointment" status="Active" />
              <DashboardRow icon={Workflow} title="Automation" text="Calendar + CRM workflow" status="Running" />
              <DashboardRow icon={Network} title="Infrastructure" text="Voice and data network" status="Healthy" />
            </div>

            <div className="mt-5 rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.045] p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-black text-white">Workflow completed</p>
                <Zap size={18} className="text-cyan-300" />
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
              </div>
              <p className="mt-3 text-xs leading-5 text-slate-400">Call answered, appointment request captured and follow-up sent automatically.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardRow({ icon: Icon, title, text, status }: { icon: typeof Bot; title: string; text: string; status: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-300">
        <Icon size={21} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-black text-white">{title}</p>
        <p className="truncate text-sm text-slate-400">{text}</p>
      </div>
      <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-black text-emerald-300">{status}</span>
    </div>
  );
}

function SignalBar() {
  return (
    <section className="border-y border-slate-800 bg-[#090c12] px-5 py-5 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 md:justify-between">
        {capabilities.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-slate-400">
            <Icon size={17} className="text-cyan-300" /> {label}
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-[#f4f7fb] px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="neo-eyebrow">Core Capabilities</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 md:text-6xl">One partner. Four connected systems.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
            We connect communications, infrastructure and automation into one practical technology stack designed around how your business actually works.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {services.map(({ icon: Icon, number, title, text, href }) => (
            <a key={title} href={href} className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-2xl hover:shadow-slate-900/10 md:p-9">
              <div className="absolute right-6 top-5 text-6xl font-black tracking-[-0.08em] text-slate-100 transition group-hover:text-cyan-50">{number}</div>
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-cyan-300 transition group-hover:bg-cyan-400 group-hover:text-slate-950">
                  <Icon size={27} />
                </div>
                <h3 className="mt-7 max-w-md text-2xl font-black tracking-[-0.025em] text-slate-950 md:text-3xl">{title}</h3>
                <p className="mt-4 max-w-xl leading-7 text-slate-600">{text}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-black text-slate-950">
                  Explore solution <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function AIExperience() {
  return (
    <section className="relative overflow-hidden bg-[#070a10] px-5 py-20 text-white lg:px-8 lg:py-28">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-600/15 blur-[140px]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="neo-eyebrow text-cyan-300">AI Receptionist</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] md:text-6xl">Your front desk, upgraded.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Give every caller a fast, professional response. The AI agent follows your business rules, captures the right information and connects with the tools your team already uses.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {useCases.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.045] p-4 text-sm font-bold text-slate-200">
                <CheckCircle2 size={18} className="shrink-0 text-cyan-300" /> {item}
              </div>
            ))}
          </div>
          <a href="/book-meeting" className="neo-btn-primary mt-9">See What AI Can Handle <ArrowRight size={18} /></a>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl backdrop-blur-xl md:p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Call Simulation</p>
              <p className="mt-2 text-xl font-black">Dental Office AI Agent</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 text-slate-950"><PhoneCall size={22} /></div>
          </div>
          <div className="mt-7 space-y-4">
            <div className="mr-10 rounded-2xl rounded-tl-sm bg-white/10 p-4 text-sm leading-6 text-slate-300">Thank you for calling. How may I help you today?</div>
            <div className="ml-10 rounded-2xl rounded-tr-sm bg-cyan-400 p-4 text-sm font-bold leading-6 text-slate-950">I need to book a cleaning appointment next week.</div>
            <div className="mr-10 rounded-2xl rounded-tl-sm bg-white/10 p-4 text-sm leading-6 text-slate-300">Certainly. I can check availability and collect the details needed for your appointment.</div>
          </div>
          <div className="mt-7 grid grid-cols-3 gap-3">
            {["Intent", "Calendar", "Follow-up"].map((label, index) => (
              <div key={label} className="rounded-xl border border-white/10 bg-black/20 p-3 text-center">
                <p className="text-xs font-black text-white">{label}</p>
                <p className="mt-1 text-[10px] font-bold text-emerald-300">{index === 0 ? "Detected" : index === 1 ? "Connected" : "Ready"}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Infrastructure() {
  return (
    <section className="bg-white px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl md:p-10">
          <div className="hero-grid absolute inset-0 rounded-[2rem] opacity-20" />
          <div className="relative grid gap-4 sm:grid-cols-2">
            {[
              [Network, "Network Core", "Switching, Wi-Fi and firewalls"],
              [PhoneCall, "Voice", "VoIP, SIP and call routing"],
              [ServerCog, "Systems", "Servers, devices and cloud tools"],
              [ShieldCheck, "Security", "Reliable and protected deployment"],
            ].map(([Icon, title, text]) => {
              const CardIcon = Icon as typeof Network;
              return (
                <div key={String(title)} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
                  <CardIcon className="text-cyan-300" size={25} />
                  <p className="mt-5 font-black">{String(title)}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{String(text)}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <p className="neo-eyebrow">Built on Real Infrastructure</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-slate-950 md:text-6xl">AI works better when the foundation is solid.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            MJ Tech Hub brings hands-on IT and network experience into every AI and automation project. That means your solution is not only impressive in a demo—it is stable, supportable and ready for daily operations.
          </p>
          <div className="mt-8 space-y-4">
            {["Professional design and deployment", "Clean installation and documentation", "End-to-end testing before handover", "Remote and on-site support across Toronto and the GTA"].map((item) => (
              <div key={item} className="flex items-center gap-3 font-bold text-slate-800"><CheckCircle2 size={19} className="text-cyan-600" /> {item}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ["01", "Discover", "We map your calls, workflows, tools and infrastructure."],
    ["02", "Design", "We create the right AI, VoIP, network and automation architecture."],
    ["03", "Deploy", "We configure, integrate, install and test the complete solution."],
    ["04", "Improve", "We support the system and refine it using real operational feedback."],
  ];
  return (
    <section className="bg-[#eef3f8] px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="neo-eyebrow">How We Work</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.045em] text-slate-950 md:text-6xl">From idea to working system.</h2>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([number, title, text]) => (
            <div key={number} className="rounded-[1.7rem] border border-slate-200 bg-white p-6">
              <p className="text-sm font-black tracking-[0.18em] text-cyan-600">{number}</p>
              <h3 className="mt-8 text-2xl font-black text-slate-950">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-white px-5 py-20 lg:px-8 lg:py-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-slate-950 px-7 py-14 text-white shadow-2xl md:px-14 md:py-20">
        <div className="hero-grid absolute inset-0 opacity-20" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[110px]" />
        <div className="relative flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="neo-eyebrow text-cyan-300">MJ Tech Hub</p>
            <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.05em] md:text-6xl">Build a smarter way for your business to communicate and operate.</h2>
          </div>
          <a href="/book-meeting" className="neo-btn-primary shrink-0">Start the Conversation <ArrowRight size={18} /></a>
        </div>
      </div>
    </section>
  );
}
