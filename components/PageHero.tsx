import { ArrowRight, CheckCircle2 } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 tech-grid opacity-60" />
      <div className="absolute -right-40 -top-56 h-[520px] w-[520px] rounded-full bg-blue-600/25 blur-[130px]" />
      <div className="absolute -left-32 bottom-0 h-[260px] w-[260px] rounded-full bg-orange-500/10 blur-[100px]" />
      <div className="container relative py-20 lg:py-28">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/15 bg-blue-400/[.08] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.2em] text-blue-100">
            <span className="h-1.5 w-1.5 rounded-full bg-electric" /> {eyebrow}
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.04] tracking-[-0.04em] sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">{text}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="/contact#quote-form" className="btn-primary">Discuss your project <ArrowRight size={17} /></a>
            <a href="tel:+13439897468" className="btn-light">Call +1 (343) 989-7468</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold text-slate-400">
            {["Toronto & GTA", "Remote + on-site", "Residential + business"].map((item) => <span key={item} className="inline-flex items-center gap-2"><CheckCircle2 size={14} className="text-electric" />{item}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
