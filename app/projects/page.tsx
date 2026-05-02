import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects & Portfolio",
  description:
    "Review recent MJ Tech Hub project case studies across Toronto and the GTA, including network infrastructure, office IT, security systems, and residential Wi-Fi upgrades.",
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1d4ed866,transparent_38%),radial-gradient(circle_at_bottom_left,#f9731638,transparent_30%)]" />
        <div className="relative container">
          <p className="eyebrow !text-orange-300">Projects / Portfolio</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">Recent IT, Network & Security Work</h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Professional case-study style snapshots of real project categories delivered by MJ Tech Hub across Toronto and the GTA.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.slug} className="card-static overflow-hidden">
              <div className="rounded-2xl bg-[linear-gradient(140deg,#0f172a,#2563eb_55%,#f97316)] p-6 text-white">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-200">{project.category}</p>
                <h2 className="mt-2 text-2xl font-black leading-tight">{project.title}</h2>
                <p className="mt-3 inline-flex items-center gap-2 text-sm text-blue-100"><MapPin size={15} /> {project.location} • {project.propertyType}</p>
              </div>

              <div className="mt-6 grid gap-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Challenge</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{project.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Solution</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{project.solution}</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Result</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{project.result}</p>
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Services Included</p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {project.services.map((service) => (
                      <div key={service} className="flex items-start gap-2 text-sm font-bold text-slate-700">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="container mt-12">
          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8 text-center">
            <h3 className="text-2xl font-black text-slate-950">Planning a new project?</h3>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">Get a clear scope, realistic timeline, and practical recommendations for your home or business technology requirements.</p>
            <a href="/contact#quote-form" className="btn-primary mt-6">Request a Project Quote <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
