"use client";

import { useState } from "react";
import {
  addressLine1,
  addressLine2,
  email,
  preferredContactOptions,
  propertyTypes,
  serviceNeededOptions,
  urgencyOptions,
  phone,
} from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

function Field({
  label,
  children,
  help,
}: {
  label: string;
  children: React.ReactNode;
  help?: string;
}) {
  return (
    <label className="block">
      <span className="label">{label}</span>
      {children}
      {help ? <span className="help-text">{help}</span> : null}
    </label>
  );
}

function SelectField({
  name,
  label,
  options,
  required = false,
}: {
  name: string;
  label: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <Field label={label}>
      <select name={name} className="input" defaultValue="" required={required}>
        <option value="" disabled>
          Select {label.toLowerCase()}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
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
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

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
      setNotice("Your request was submitted successfully. We will review the details and follow up shortly.");
      form.reset();
    } catch {
      setStatus("error");
      setNotice("The form could not be submitted. Please try again or contact us directly.");
    }
  }

  return (
    <section id="quote-form" className="bg-slate-950 px-5 py-16 text-white lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-orange-300">
            Request Quote
          </p>
          <h2 className="text-3xl font-black tracking-tight md:text-5xl">
            Tell us what you need. We will respond with the right next step.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Use this form for remote help desk, on-site support, service pricing, complete office setup,
            residential technology, CCTV, alarm systems, access control, Wi-Fi, VoIP and smart home work.
          </p>

          <div className="mt-8 grid gap-4">
            <div className="rounded-2xl bg-white/10 p-6">
              <p className="font-black">Call or text</p>
              <a href={`tel:${cleanPhone}`} className="mt-2 block text-lg font-black text-white hover:text-orange-300">
                {phone}
              </a>
              <p className="mt-2 text-slate-300">Best for urgent support or quick scheduling.</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-6">
              <p className="font-black">Email</p>
              <a href={`mailto:${email}`} className="mt-2 block text-lg font-black text-white hover:text-orange-300">
                {email}
              </a>
              <p className="mt-2 text-slate-300">Best for quotes, site details, photos and scope information.</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-6">
              <p className="font-black">Service Area</p>
              <p className="mt-2 text-lg font-black text-white">{addressLine1}</p>
              <p className="mt-1 text-slate-300">{addressLine2}</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-6 text-slate-950 shadow-2xl lg:p-8">
          <div className="mb-6 border-b border-slate-200 pb-5">
            <h3 className="text-2xl font-black text-slate-950">Request Quote Form</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Complete the required fields so we can quote or schedule your request accurately.
            </p>
          </div>

          <div className="grid gap-6">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-slate-500">Contact Details</p>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Full name *">
                  <input name="fullName" className="input" placeholder="Your full name" autoComplete="name" required />
                </Field>
                <Field label="Phone number *" help="Use the best number for call or text follow-up.">
                  <input name="phone" className="input" placeholder="(647) 000-0000" autoComplete="tel" required />
                </Field>
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <Field label="Email address *">
                  <input name="email" type="email" className="input" placeholder="you@example.com" autoComplete="email" required />
                </Field>
                <Field label="City / area *" help="Example: Toronto, North York, Vaughan or Mississauga.">
                  <input name="city" className="input" placeholder="Toronto" required />
                </Field>
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-slate-500">Project Details</p>
              <div className="grid gap-5 md:grid-cols-2">
                <SelectField name="propertyType" label="Property type *" options={propertyTypes} required />
                <SelectField name="serviceNeeded" label="Service needed *" options={serviceNeededOptions} required />
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <SelectField name="urgency" label="Project urgency" options={urgencyOptions} />
                <SelectField name="preferredContact" label="Preferred contact method" options={preferredContactOptions} />
              </div>
            </div>

            <Field
              label="Project details or issue description *"
              help="Include the problem, number of cameras or data drops, rooms, devices, preferred time, or any existing equipment already on site."
            >
              <textarea
                name="message"
                className="input min-h-40 resize-y"
                placeholder="Describe the work you need, the issue you are having, or the project scope..."
                required
              />
            </Field>

            <button
              disabled={status === "loading"}
              className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
              type="submit"
            >
              {status === "loading" ? "Submitting Request..." : "Request Quote"}
            </button>

            {notice ? (
              <div
                className={`rounded-xl p-4 text-sm font-black ${
                  status === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                }`}
              >
                {notice}
              </div>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
