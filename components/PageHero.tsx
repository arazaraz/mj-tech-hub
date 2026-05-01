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
    <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1d4ed866,transparent_36%),radial-gradient(circle_at_bottom_left,#f9731638,transparent_30%)]" />
      <div className="relative mx-auto max-w-5xl">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-orange-300">{eyebrow}</p>
        <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{text}</p>
      </div>
    </section>
  );
}
