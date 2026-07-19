"use client";

import { ArrowUpRight, ChevronDown, MapPin, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { megaMenu, nav, phone, requestQuoteHref } from "@/lib/site";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const cleanPhone = phone.replace(/[^+\d]/g, "");

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 text-white shadow-[0_1px_0_rgba(255,255,255,.04)] backdrop-blur-xl">
      <div className="border-b border-white/[.07] bg-white/[.025]">
        <div className="container flex min-h-9 items-center justify-between gap-4 py-2 text-[11px] font-bold tracking-wide text-slate-400">
          <div className="inline-flex items-center gap-2">
            <span className="status-pulse h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Remote & on-site service available
          </div>
          <div className="hidden items-center gap-5 sm:flex">
            <span className="inline-flex items-center gap-1.5"><MapPin size={12} /> Toronto & GTA</span>
            <a href={`tel:${cleanPhone}`} className="inline-flex items-center gap-1.5 text-white hover:text-electric">
              <Phone size={12} /> {phone}
            </a>
          </div>
        </div>
      </div>

      <div className="container flex h-[74px] items-center justify-between gap-6">
        <Logo tone="light" />

        <nav className="hidden items-center gap-6 text-[13px] font-bold text-slate-300 xl:flex" aria-label="Primary navigation">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <a href="/services" className="flex items-center gap-1 py-7 transition hover:text-white">
              Solutions <ChevronDown size={15} />
            </a>
            {servicesOpen ? (
              <div className="absolute left-1/2 top-full w-[880px] -translate-x-1/2 pt-3">
                <div className="grid grid-cols-2 gap-2 rounded-[1.75rem] border border-white/10 bg-[#0c192b] p-3 shadow-panel xl:grid-cols-4">
                  {megaMenu.map((group) => {
                    const Icon = group.icon;
                    return (
                      <a key={group.title} href={group.href} className="group rounded-2xl border border-transparent p-4 transition hover:border-blue-400/20 hover:bg-white/[.05]">
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-electric ring-1 ring-blue-400/15">
                          <Icon size={19} />
                        </div>
                        <p className="font-extrabold text-white">{group.title}</p>
                        <p className="mt-2 text-xs font-medium leading-5 text-slate-400">{group.summary}</p>
                        <span className="mt-4 inline-flex items-center gap-1 text-[11px] font-extrabold text-electric">Explore <ArrowUpRight size={12} /></span>
                      </a>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>

          {nav.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a href="/remote-support" className="px-2 py-3 text-xs font-extrabold text-slate-300 transition hover:text-white">
            Get Support
          </a>
          <a href={requestQuoteHref} className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-xs font-extrabold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-600">
            Request a Quote <ArrowUpRight size={14} />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-white/15 bg-white/[.05] p-2.5 text-white xl:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#091525] px-5 py-5 xl:hidden">
          <nav className="mx-auto grid max-w-3xl gap-1" aria-label="Mobile navigation">
            <a href="/services" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 font-extrabold hover:bg-white/[.05]">All Solutions</a>
            {[...nav, { label: "Remote Support", href: "/remote-support" }, { label: "Book a Site Visit", href: "/book-meeting" }].map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 font-bold text-slate-300 hover:bg-white/[.05] hover:text-white">
                {item.label}
              </a>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <a href={`tel:${cleanPhone}`} className="rounded-full border border-white/15 px-4 py-3 text-center text-sm font-extrabold">Call Now</a>
              <a href={requestQuoteHref} className="rounded-full bg-brand px-4 py-3 text-center text-sm font-extrabold">Request Quote</a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
