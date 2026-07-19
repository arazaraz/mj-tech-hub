import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MJ Tech Hub | IT, Network, Security, VoIP & AI Solutions",
    template: "%s | MJ Tech Hub",
  },
  description:
    "Professional IT support, network infrastructure, security systems, VoIP and AI receptionist solutions for homes and businesses across Toronto and the GTA.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mjtechhub.ca"),
  keywords: ["IT support Toronto", "network cabling GTA", "CCTV installation", "VoIP Toronto", "AI receptionist", "access control", "business Wi-Fi"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "MJ Tech Hub | Connected. Secure. Ready.",
    description: "IT, network, security, VoIP and AI solutions engineered for homes and businesses across Toronto and the GTA.",
    url: "/",
    siteName: "MJ Tech Hub",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "MJ Tech Hub",
    url: "https://mjtechhub.ca",
    email: "info@mjtechhub.ca",
    telephone: "+1-343-989-7468",
    areaServed: ["Toronto", "North York", "Vaughan", "Markham", "Richmond Hill", "Mississauga", "Brampton", "GTA"],
    serviceType: ["IT Support", "Network Infrastructure", "CCTV", "Access Control", "VoIP", "AI Receptionist"],
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
