import Image from "next/image";

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-3" aria-label="MJ Tech Hub home">
      <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <Image
          src="/images/mj-tech-hub-logo.png"
          alt="MJ Tech Hub logo"
          fill
          sizes="56px"
          className="object-cover"
          priority
        />
      </div>
      <div>
        <div className="text-xl font-black tracking-tight text-slate-950 md:text-2xl">MJ Tech Hub</div>
        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500 md:text-xs">
          IT • Network • Security
        </div>
      </div>
    </a>
  );
}
