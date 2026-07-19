import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { areas, email, footerLinks, phone, requestQuoteHref } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  const cleanPhone = phone.replace(/[^+\d]/g, "");

  return (
    <footer className="relative overflow-hidden bg-[#050c16] text-white">
      <div className="pointer-events-none absolute inset-0 dot-field opacity-25" />
      <div className="container relative py-16 lg:py-20">
        <div className="mb-14 flex flex-col justify-between gap-7 border-b border-white/10 pb-12 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow !text-electric">Let&apos;s build it right</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.035em] sm:text-5xl">Ready for technology that simply works?</h2>
          </div>
          <a href={requestQuoteHref} className="btn-primary shrink-0">Start a conversation <ArrowUpRight size={18} /></a>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.9fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Integrated IT, network, security, VoIP and AI solutions for homes, clinics, offices and growing businesses across Toronto and the GTA.
            </p>
            <div className="mt-7 grid gap-3 text-sm">
              <a href={`tel:${cleanPhone}`} className="inline-flex items-center gap-3 text-slate-300 hover:text-white"><Phone size={16} className="text-electric" /> {phone}</a>
              <a href={`mailto:${email}`} className="inline-flex items-center gap-3 text-slate-300 hover:text-white"><Mail size={16} className="text-electric" /> {email}</a>
              <span className="inline-flex items-center gap-3 text-slate-300"><MapPin size={16} className="text-electric" /> Toronto & GTA</span>
            </div>
          </div>

          <div className="grid gap-9 sm:grid-cols-3">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-extrabold text-white">{group.title}</h3>
                <div className="mt-4 grid gap-3 text-sm text-slate-400">
                  {group.links.map((link) => <a href={link.href} key={link.label} className="transition hover:text-white">{link.label}</a>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-7 text-xs leading-6 text-slate-500">
          <p>Serving {areas.join(" • ")}</p>
          <div className="mt-3 flex flex-col justify-between gap-2 sm:flex-row">
            <p>© {new Date().getFullYear()} MJ Tech Hub. All rights reserved.</p>
            <p>Connected. Secure. Ready.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
