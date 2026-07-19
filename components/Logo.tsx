type LogoProps = {
  compact?: boolean;
  tone?: "dark" | "light";
};

export function Logo({ compact = false, tone = "dark" }: LogoProps) {
  const light = tone === "light";

  return (
    <a href="/" className="group inline-flex items-center gap-3" aria-label="MJ Tech Hub home">
      <svg
        viewBox="0 0 56 56"
        aria-hidden="true"
        className={`${compact ? "h-10 w-10" : "h-11 w-11"} shrink-0 transition duration-300 group-hover:rotate-3 group-hover:scale-105`}
      >
        <defs>
          <linearGradient id="mj-mark" x1="8" y1="5" x2="49" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4EA1FF" />
            <stop offset=".55" stopColor="#1A66FF" />
            <stop offset="1" stopColor="#0D42C9" />
          </linearGradient>
        </defs>
        <rect width="56" height="56" rx="17" fill={light ? "rgba(255,255,255,.08)" : "#EEF5FF"} />
        <path d="M13 31.5V17.8h5.2l5.8 8.5 5.8-8.5H35v18.8h-5.1V25.7L24 34.2l-5.9-8.5v5.8H13Z" fill="url(#mj-mark)" />
        <path d="M35.2 17.8h7.1v12.8c0 6.3-3.4 9.6-9.4 9.6-1.8 0-3.5-.3-4.9-.9l1.6-4.8c.9.4 1.8.6 2.7.6 2 0 3.2-1.2 3.2-4.1V22.8h-.3v-5Z" fill="#FF6B2C" />
        <circle cx="43.5" cy="12.5" r="2.5" fill="#4EA1FF" />
        <path d="M41.7 14.2 38.2 18" stroke="#4EA1FF" strokeWidth="2" strokeLinecap="round" />
      </svg>

      <span className="leading-none">
        <span className={`block text-lg font-extrabold tracking-[-0.035em] sm:text-xl ${light ? "text-white" : "text-ink"}`}>
          MJ <span className="text-electric">Tech</span> Hub
        </span>
        {!compact ? (
          <span className={`mt-1 block text-[9px] font-bold uppercase tracking-[0.2em] ${light ? "text-slate-400" : "text-slate-500"}`}>
            Integrated technology solutions
          </span>
        ) : null}
      </span>
    </a>
  );
}
