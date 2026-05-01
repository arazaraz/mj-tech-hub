import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const quoteSchema = z.object({
  fullName: z.string().min(2),
  phone: z.string().min(7),
  email: z.string().email(),
  city: z.string().min(2),
  propertyType: z.string().min(2),
  serviceNeeded: z.string().min(2),
  urgency: z.string().optional(),
  preferredContact: z.string().optional(),
  message: z.string().min(10),
});

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char] || char));
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = quoteSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: "Please check the form and try again.", errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    if (!resend) {
      return NextResponse.json({ success: false, message: "Email service is not configured yet." }, { status: 500 });
    }

    const data = parsed.data;
    const safe = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, escapeHtml(String(value || "Not specified"))])
    );

    const html = `
      <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
        <h2 style="color:#f97316;">New Quote Request - MJ Tech Hub</h2>
        <p><strong>Full Name:</strong> ${safe.fullName}</p>
        <p><strong>Phone:</strong> ${safe.phone}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>City / Area:</strong> ${safe.city}</p>
        <p><strong>Property Type:</strong> ${safe.propertyType}</p>
        <p><strong>Service Needed:</strong> ${safe.serviceNeeded}</p>
        <p><strong>Urgency:</strong> ${safe.urgency}</p>
        <p><strong>Preferred Contact:</strong> ${safe.preferredContact}</p>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0;" />
        <h3>Project Details / Issue Description</h3>
        <p>${String(safe.message).replace(/\n/g, "<br />")}</p>
      </div>
    `;

    const result = await resend.emails.send({
      from: process.env.QUOTE_EMAIL_FROM || "MJ Tech Hub <onboarding@resend.dev>",
      to: process.env.QUOTE_EMAIL_TO || "your-email@example.com",
      replyTo: data.email,
      subject: `New Quote Request: ${data.serviceNeeded} - ${data.city}`,
      html,
    });

    if (result.error) {
      return NextResponse.json({ success: false, message: "Email could not be sent. Please try again later." }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Your request has been submitted successfully." });
  } catch {
    return NextResponse.json({ success: false, message: "Something went wrong. Please try again." }, { status: 500 });
  }
}
