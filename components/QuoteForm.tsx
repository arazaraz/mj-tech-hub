"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import {
  email,
  preferredContactOptions,
  propertyTypes,
  serviceNeededOptions,
  urgencyOptions,
  phone,
} from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

function Field({ label, children, help }: { label: string; children: React.ReactNode; help?: string }) {
  return (
    <label className="block">
      <span className="label">{label}</span>
      {children}
      {help ? <span className="help-text">{help}</span> : null}
    </label>
  );
}

function SelectField({ name, label, options, required = false }: { name: string; label: string; options: string[]; required?: boolean }) {
  return (
    <Field label={label}>
      <select name={name} className="input" defaultValue="" required={required}>
        <option value="" disabled>Select {label.toLowerCase()}</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </Field>
  );
}

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [notice, setNotice] = useState("");
  const cleanPhone = phone.replace(/[^+\d]/g, "");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setNotice("");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) {
        setStatus("error");
        setNotice(result.message || "Please review the form and try again.");
        return;
      }
      setStatus("success");
      setNotice("Your request was submitted. We will review the details and follow up shortly.");
      form.reset();
    } catch {
      setStatus("error");
      setNotice("The form could not be submitted. Please call or email us directly.");
    }
  }

  return (
    <section id="quote-form" className="relative overflow-hidden bg-navy py-20 text-white lg:py-28">
      <div className="absolute inset-0 tech-grid opacity-45" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[130px]" />
      <div className="container relative grid gap-12 lg:grid-cols-[.84fr_1.16fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <p className="eyebrow !text-electric">Start a conversation</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.06] tracking-[-0.04em] sm:text-5xl">Tell us what you need. We&apos;ll map the right next step.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">Share the issue, project scope or result you&apos;re looking for. We&apos;ll use the details to recommend remote support, an on-site visit or a project consultation.</p>

          <div className="mt-8 grid gap-3">
            <a href={`tel:${cleanPhone}`} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.05] p-4 transition hover:bg-white/[.08]">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-electric"><Phone size={18} /></span>
              <span><span className="block text-[10px] font-bold uppercase tracking-[.17em] text-slate-500">Call or text</span><span className="mt-1 block font-extrabold">{phone}</span></span>
              <ArrowRight size={17} className="ml-auto text-slate-500 transition group-hover:translate-x-1 group-hover:text-white" />
            </a>
            <a href={`mailto:${email}`} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.05] p-4 transition hover:bg-white/[.08]">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-electric"><Mail size={18} /></span>
              <span><span className="block text-[10px] font-bold uppercase tracking-[.17em] text-slate-500">Email</span><span className="mt-1 block font-extrabold">{email}</span></span>
              <ArrowRight size={17} className="ml-auto text-slate-500 transition group-hover:translate-x-1 group-hover:text-white" />
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.05] p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-electric"><MapPin size={18} /></span>
              <span><span className="block text-[10px] font-bold uppercase tracking-[.17em] text-slate-500">Service area</span><span className="mt-1 block font-extrabold">Toronto & GTA</span></span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white p-6 text-ink shadow-panel sm:p-8 lg:p-10">
          <div className="mb-8 flex items-start gap-4 border-b border-slate-200 pb-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"><CheckCircle2 size={21} /></div>
            <div><h3 className="text-2xl font-extrabold tracking-tight">Project & support request</h3><p className="mt-2 text-sm leading-6 text-slate-500">Required fields help us route your request correctly.</p></div>
          </div>

          <div className="grid gap-7">
            <div>
              <p className="mb-4 text-[10px] font-extrabold uppercase tracking-[.2em] text-blue-600">01 · Contact details</p>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Full name *"><input name="fullName" className="input" placeholder="Your full name" autoComplete="name" required /></Field>
                <Field label="Phone number *"><input name="phone" className="input" placeholder="(647) 000-0000" autoComplete="tel" required /></Field>
                <Field label="Email address *"><input name="email" type="email" className="input" placeholder="you@example.com" autoComplete="email" required /></Field>
                <Field label="City / area *"><input name="city" className="input" placeholder="Toronto" required /></Field>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-7">
              <p className="mb-4 text-[10px] font-extrabold uppercase tracking-[.2em] text-blue-600">02 · Request details</p>
              <div className="grid gap-5 md:grid-cols-2">
                <SelectField name="propertyType" label="Property type *" options={propertyTypes} required />
                <SelectField name="serviceNeeded" label="Service needed *" options={serviceNeededOptions} required />
                <SelectField name="urgency" label="Project urgency" options={urgencyOptions} />
                <SelectField name="preferredContact" label="Preferred contact" options={preferredContactOptions} />
              </div>
            </div>

            <Field label="Project details or issue description *" help="Include the issue, number of devices or locations, existing equipment and preferred timing.">
              <textarea name="message" className="input min-h-40 resize-y" placeholder="Tell us what is happening or what you would like to build..." required />
            </Field>

            <button disabled={status === "loading"} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70" type="submit">
              {status === "loading" ? "Submitting request..." : <>Send request <ArrowRight size={17} /></>}
            </button>

            {notice ? <div className={`rounded-xl p-4 text-sm font-bold ${status === "success" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>{notice}</div> : null}
            <p className="text-center text-[11px] leading-5 text-slate-400">By submitting, you agree that MJ Tech Hub may contact you about this request.</p>
          </div>
        </form>
      </div>
    </section>
  );
}
