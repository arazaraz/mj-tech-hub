import Image from "next/image";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <a href="/" className="group flex items-center gap-3" aria-label="MJ Tech Hub home">
      <div className={`relative overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-md ring-2 ring-blue-100 transition group-hover:ring-orange-200 ${compact ? "h-12 w-12" : "h-14 w-14"}`}>
        <Image
          src="/images/mj-tech-hub-logo.png"
          alt="MJ Tech Hub logo"
          fill
          sizes={compact ? "48px" : "56px"}
          className="object-cover"
          priority
        />
      </div>
      <div>
        <div className="text-xl font-black tracking-tight text-slate-950 md:text-2xl">MJ Tech Hub</div>
        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-blue-700 md:text-xs">
          IT • Network • Security
        </div>
      </div>
    </a>
  );
}
