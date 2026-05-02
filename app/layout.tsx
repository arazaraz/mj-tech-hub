import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MJ Tech Hub | IT, Network, Security & Help Desk in Toronto & GTA",
    template: "%s | MJ Tech Hub",
  },
  description:
    "Complete IT support, remote and on-site help desk, network cabling, rack setup, Wi-Fi, CCTV, intrusion alarm, access control, VoIP and smart home services in Toronto and the GTA.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mjtechhub.ca"),
  keywords: ["IT support Toronto", "network cabling GTA", "CCTV installation", "access control", "help desk services"],
  openGraph: {
    title: "MJ Tech Hub | IT, Network, Security & Help Desk in Toronto & GTA",
    description: "Professional IT support, network infrastructure, security systems, and office technology setup across Toronto and the GTA.",
    url: "/",
    siteName: "MJ Tech Hub",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
