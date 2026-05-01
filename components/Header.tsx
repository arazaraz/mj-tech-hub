"use client";

import { ChevronDown, MapPin, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { addressLine1, megaMenu, nav, phone, requestQuoteHref } from "@/lib/site";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const cleanPhone = phone.replace(/[^+\d]/g, "");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="hidden border-b border-slate-200 bg-slate-950 text-sm font-bold text-white lg:block">
        <div className="container flex h-11 items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-slate-300">
            <a href="/contact" className="hover:text-white">Client Support</a>
            <a href="/remote-support" className="hover:text-white">Remote Support</a>
            <a href={`tel:${cleanPhone}`} className="inline-flex items-center gap-2 hover:text-white"><Phone size={14} /> {phone}</a>
          </div>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2 text-slate-400"><MapPin size={14} /> {addressLine1}</span>
            <a href="/service-pricing" className="text-slate-300 hover:text-white">Service Pricing</a>
            <a href="/book-meeting" className="rounded-full bg-brand px-4 py-1.5 text-white hover:bg-orange-600">Book a Site Visit</a>
          </div>
        </div>
      </div>

      <div className="container flex h-20 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-7 text-sm font-black text-slate-700 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <a href="/services" className="flex items-center gap-1 transition hover:text-brand">
              Services <ChevronDown size={16} />
            </a>
            {servicesOpen ? (
              <div className="absolute left-1/2 top-full w-[900px] -translate-x-1/2 pt-5">
                <div className="grid grid-cols-4 gap-4 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-900/10">
                  {megaMenu.map((group) => {
                    const Icon = group.icon;
                    return (
                      <div key={group.title} className="rounded-2xl bg-slate-50 p-4">
                        <div className="mb-3 flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-brand">
                            <Icon size={20} />
                          </div>
                          <p className="text-sm font-black text-slate-950">{group.title}</p>
                        </div>
                        <div className="grid gap-2 text-xs font-bold text-slate-600">
                          {group.links.map((link) => (
                            <a key={link} href="/services" className="hover:text-brand">
                              {link}
                            </a>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>

          {nav.filter((item) => item.label !== "Services").map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-brand">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${cleanPhone}`}
            className="rounded-full border border-slate-300 px-5 py-3 text-sm font-black text-slate-900 transition hover:border-slate-950"
          >
            Call Now
          </a>
          <a href={requestQuoteHref} className="rounded-full bg-brand px-5 py-3 text-sm font-black text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600">
            Request Quote
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="rounded-xl border border-slate-200 p-2 lg:hidden" aria-label="Toggle navigation menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-5 py-5 lg:hidden">
          <div className="grid gap-4">
            {[
              ...nav,
              { label: "Remote Support", href: "/remote-support" },
              { label: "Service Pricing", href: "/service-pricing" },
              { label: "Book a Site Visit", href: "/book-meeting" },
            ].map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="font-black text-slate-800">
                {item.label}
              </a>
            ))}
            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
              <p className="font-black text-slate-900">Serving Area</p>
              <p className="mt-1">{addressLine1}</p>
            </div>
            <a href={`tel:${cleanPhone}`} className="rounded-full border border-slate-300 px-5 py-3 text-center font-black text-slate-900">
              Call {phone}
            </a>
            <a href={requestQuoteHref} className="rounded-full bg-brand px-5 py-3 text-center font-black text-white">
              Request Quote
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
