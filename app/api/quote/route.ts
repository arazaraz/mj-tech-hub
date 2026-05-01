import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const quoteSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  phone: z.string().min(7, "Phone number is required"),
  email: z.string().email("Valid email is required"),
  city: z.string().min(2, "City or area is required"),
  propertyType: z.string().min(2, "Property type is required"),
  serviceNeeded: z.string().min(2, "Service needed is required"),
  urgency: z.string().optional(),
  preferredContact: z.string().optional(),
  message: z.string().min(10, "Please provide more details"),
});

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (char) => {
    const map: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };

    return map[char] || char;
  });
}

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = quoteSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the form and try again.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    const smtpHost = getRequiredEnv("SMTP_HOST");
    const smtpPort = Number(getRequiredEnv("SMTP_PORT"));
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const smtpUser = getRequiredEnv("SMTP_USER");
    const smtpPass = getRequiredEnv("SMTP_PASS");

    const quoteEmailTo = getRequiredEnv("QUOTE_EMAIL_TO");
    const quoteEmailFrom =
      process.env.QUOTE_EMAIL_FROM || `MJ Tech Hub <${smtpUser}>`;

    const safe = {
      fullName: escapeHtml(data.fullName),
      phone: escapeHtml(data.phone),
      email: escapeHtml(data.email),
      city: escapeHtml(data.city),
      propertyType: escapeHtml(data.propertyType),
      serviceNeeded: escapeHtml(data.serviceNeeded),
      urgency: escapeHtml(data.urgency || "Not specified"),
      preferredContact: escapeHtml(data.preferredContact || "Not specified"),
      message: escapeHtml(data.message),
    };

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
        <p>${safe.message.replace(/\n/g, "<br />")}</p>
      </div>
    `;

    const text = `
New Quote Request - MJ Tech Hub

Full Name: ${data.fullName}
Phone: ${data.phone}
Email: ${data.email}
City / Area: ${data.city}
Property Type: ${data.propertyType}
Service Needed: ${data.serviceNeeded}
Urgency: ${data.urgency || "Not specified"}
Preferred Contact: ${data.preferredContact || "Not specified"}

Project Details / Issue Description:
${data.message}
    `;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: quoteEmailFrom,
      to: quoteEmailTo,
      replyTo: data.email,
      subject: `New Quote Request: ${data.serviceNeeded} - ${data.city}`,
      html,
      text,
    });

    return NextResponse.json({
      success: true,
      message: "Your request has been submitted successfully.",
    });
  } catch (error) {
    console.error("Quote form error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "The request could not be submitted. Please call or email us directly.",
      },
      { status: 500 }
    );
  }
}
