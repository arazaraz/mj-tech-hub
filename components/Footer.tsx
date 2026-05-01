import { addressLine1, addressLine2, areas, email, megaMenu, phone, requestQuoteHref } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  const cleanPhone = phone.replace(/[^+\d]/g, "");

  return (
    <footer className="bg-slate-950 text-white">
      <div className="container py-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1.95fr]">
          <div>
            <div className="inline-block rounded-2xl bg-white p-3"><Logo /></div>
            <p className="mt-5 max-w-md leading-7 text-slate-300">
              Complete IT, Network, Security & Help Desk solutions for homes, offices, clinics,
              dental offices and small businesses across Toronto and the GTA.
            </p>

            <div className="mt-6 grid gap-3 text-sm text-slate-300">
              <a href={`tel:${cleanPhone}`} className="font-black text-white hover:text-orange-300">{phone}</a>
              <a href={`mailto:${email}`} className="hover:text-orange-300">{email}</a>
              <div>
                <p className="font-black text-white">{addressLine1}</p>
                <p>{addressLine2}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`tel:${cleanPhone}`} className="rounded-full bg-brand px-6 py-3 font-black text-white">Call Now</a>
              <a href={requestQuoteHref} className="rounded-full border border-white/20 px-6 py-3 font-black text-white hover:bg-white hover:text-slate-950">
                Request Quote
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {megaMenu.map((group) => (
              <div key={group.title}>
                <h3 className="font-black text-white">{group.title}</h3>
                <div className="mt-4 grid gap-2 text-sm text-slate-400">
                  {group.links.slice(0, 6).map((link) => (
                    <a href="/services" key={link} className="hover:text-white">{link}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-sm font-bold text-slate-400">Service areas: {areas.join(" • ")}</p>
          <p className="mt-4 text-sm text-slate-500">© {new Date().getFullYear()} MJ Tech Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
