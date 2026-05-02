import {
  Building2,
  Camera,
  Headphones,
  Home,
  LockKeyhole,
  MonitorCog,
  Network,
  PhoneCall,
  Router,
  Server,
  ShieldCheck,
  Stethoscope,
  Wrench,
} from "lucide-react";

export const phone = process.env.NEXT_PUBLIC_PHONE || "+1 (647) 000-0000";
export const email = process.env.NEXT_PUBLIC_EMAIL || "info@mjtechhub.ca";
export const addressLine1 = process.env.NEXT_PUBLIC_ADDRESS_LINE1 || "Toronto, ON";
export const addressLine2 = process.env.NEXT_PUBLIC_ADDRESS_LINE2 || "Serving Toronto & GTA • By Appointment";
export const requestQuoteHref = "/contact#quote-form";

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/#industries" },
  { label: "Projects", href: "/projects" },
  { label: "Service Areas", href: "/#service-areas" },
  { label: "Resources", href: "/#faq" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

export const megaMenu = [
  {
    title: "Managed IT & Help Desk",
    icon: Headphones,
    links: [
      "Remote IT Support",
      "On-Site IT Support",
      "Microsoft 365 & Email",
      "Workstation Setup",
      "Printer / Scanner Support",
      "Employee Onboarding / Offboarding",
      "Backup Readiness",
    ],
  },
  {
    title: "Network & Infrastructure",
    icon: Server,
    links: [
      "Network Cabling",
      "Cable Termination",
      "Patch Panel Setup",
      "Rack Installation",
      "Wi-Fi & Mesh Wi-Fi",
      "Switch / Router / Firewall Setup",
      "Office Relocation Support",
    ],
  },
  {
    title: "Security Systems",
    icon: ShieldCheck,
    links: [
      "CCTV Camera Installation",
      "Intrusion Alarm Systems",
      "Access Control",
      "Door Contacts / Motion Sensors",
      "Remote Viewing Setup",
    ],
  },
  {
    title: "VoIP & Smart Technology",
    icon: Router,
    links: ["VoIP Phone Systems", "Smart Home Automation", "Residential Technology Setup"],
  },
];

export const serviceCategories = [
  {
    title: "Managed IT & Help Desk",
    href: "/help-desk",
    icon: Headphones,
    desc: "Remote and on-site support for users, devices, email, Microsoft 365, printers, Wi-Fi, VoIP and day-to-day technology issues.",
  },
  {
    title: "Network & Infrastructure",
    href: "/services",
    icon: Network,
    desc: "Low-voltage cabling, termination, patch panels, rack setup, Wi-Fi, switching, routing, firewall readiness and clean cable management.",
  },
  {
    title: "Security Systems",
    href: "/services",
    icon: ShieldCheck,
    desc: "CCTV, intrusion alarm panels, door contacts, motion detectors, access control and remote viewing support.",
  },
  {
    title: "VoIP & Communications",
    href: "/services",
    icon: PhoneCall,
    desc: "VoIP phones, desk phone setup, call-flow basics and communications troubleshooting for small offices and professional spaces.",
  },
  {
    title: "Residential & Smart Home",
    href: "/residential",
    icon: Home,
    desc: "Mesh Wi-Fi, home networking, smart cameras, smart doorbells, alarms, smart locks, lighting and home office support.",
  },
  {
    title: "Complete Office Setup",
    href: "/office-setup",
    icon: Building2,
    desc: "Full office technology deployment from planning and wiring to installation, configuration, testing and handover.",
  },
];

export const serviceGroups = [
  {
    title: "IT Support & Help Desk",
    summary: "Fast support for everyday technology issues, remotely or on-site.",
    items: [
      "Remote Help Desk",
      "On-Site IT Support",
      "Computer / Workstation Support",
      "Microsoft 365 & Email Support",
      "Printer / Scanner Support",
      "User Setup and Basic Backup Readiness",
    ],
  },
  {
    title: "Network & Infrastructure",
    summary: "Clean, reliable network foundations for homes and business spaces.",
    items: [
      "Network Cabling",
      "Cable Termination",
      "Patch Panel Setup",
      "Network Rack Installation",
      "Cable Management",
      "Switch / Router / Firewall Setup",
      "Wi-Fi & Mesh Wi-Fi",
    ],
  },
  {
    title: "Security Systems",
    summary: "Integrated security systems for visibility, access and intrusion protection.",
    items: [
      "CCTV Camera Installation",
      "NVR / Remote Viewing Setup",
      "Intrusion Alarm Panels",
      "Door Contacts",
      "Motion Detectors",
      "Access Control",
      "Troubleshooting Existing Systems",
    ],
  },
  {
    title: "VoIP & Smart Technology",
    summary: "Connected communication and smart technology for offices and homes.",
    items: [
      "VoIP Phone Systems",
      "Desk Phone Setup",
      "Smart Home Automation",
      "Smart Doorbells",
      "Smart Locks / Lighting",
      "Residential Technology Setup",
    ],
  },
];

export const allServices = serviceGroups.flatMap((group) => group.items);

export const officeScope = [
  "Site review and planning",
  "Low-voltage wiring",
  "Data cable runs",
  "Cable termination",
  "Patch panel setup",
  "Rack installation",
  "Cable management",
  "Switch / router / firewall setup",
  "Wi-Fi access points",
  "CCTV camera installation",
  "Intrusion alarm setup",
  "Access control setup",
  "VoIP phone setup",
  "Printers / scanners",
  "Final testing",
  "Handover and support",
];

export const residentialScope = [
  "Home network setup",
  "Mesh Wi-Fi installation",
  "Wi-Fi dead zone troubleshooting",
  "Home office setup",
  "Security camera installation",
  "Smart doorbell setup",
  "Alarm system installation",
  "Smart lock setup",
  "Smart lighting setup",
  "TV / data wiring",
  "Device setup",
  "Remote camera viewing",
];

export const industries = [
  { title: "Homes & Condos", icon: Home },
  { title: "Home Offices", icon: MonitorCog },
  { title: "Small Offices", icon: Building2 },
  { title: "Clinics", icon: Stethoscope },
  { title: "Dental Offices", icon: ShieldCheck },
  { title: "Retail Stores", icon: Camera },
  { title: "Warehouses", icon: Network },
  { title: "Small Businesses", icon: Wrench },
];

export const processSteps = [
  { title: "Assess", text: "Review the site, issue or project scope before quoting." },
  { title: "Plan", text: "Confirm equipment, wiring paths, service needs and timeline." },
  { title: "Install", text: "Complete wiring, termination, hardware setup and configuration." },
  { title: "Test", text: "Verify network, devices, cameras, alarm zones, access and VoIP." },
  { title: "Handover", text: "Provide a clear walkthrough and support next steps." },
];

export const areas = [
  "Toronto",
  "North York",
  "Scarborough",
  "Etobicoke",
  "Vaughan",
  "Markham",
  "Richmond Hill",
  "Mississauga",
  "Brampton",
  "GTA",
];

export const vendorPills = [
  "Microsoft 365",
  "Cisco",
  "Meraki",
  "Ubiquiti",
  "Fortinet",
  "DSC",
  "Honeywell",
  "Hikvision",
  "Axis",
  "Dell",
  "HP",
  "Lenovo",
];

export const testimonials = [
  {
    quote: "Clean wiring, organized rack work and a professional office technology setup from start to finish.",
    name: "Office Setup Client",
    type: "Toronto & GTA",
  },
  {
    quote: "Quick remote support for everyday IT issues, with on-site help available when hands-on service is needed.",
    name: "Business Support Client",
    type: "Help Desk Support",
  },
  {
    quote: "Reliable Wi-Fi, camera and network support with practical recommendations and clear testing before handover.",
    name: "Residential Client",
    type: "Home Technology",
  },
];

export const faq = [
  {
    q: "Do you provide remote and on-site IT support?",
    a: "Yes. Remote support is used when the issue can be resolved online. On-site service is available when hands-on troubleshooting, cabling, hardware or installation work is required.",
  },
  {
    q: "Can you set up a complete office from scratch?",
    a: "Yes. MJ Tech Hub can handle planning, wiring, termination, rack setup, Wi-Fi, CCTV, intrusion alarm, access control, VoIP, final testing and handover.",
  },
  {
    q: "Do you work with homes and residential clients?",
    a: "Yes. We support homes, condos and home offices with Wi-Fi, mesh Wi-Fi, cameras, smart doorbells, alarm systems, smart devices and home network improvements.",
  },
  {
    q: "Do you support clinics and dental offices?",
    a: "Yes. We provide IT, network, Wi-Fi, security camera, access control and VoIP support for clinics, dental offices and other professional spaces.",
  },
  {
    q: "Which areas do you serve?",
    a: "We serve Toronto, North York, Scarborough, Etobicoke, Vaughan, Markham, Richmond Hill, Mississauga, Brampton and nearby GTA areas.",
  },
  {
    q: "Can you troubleshoot existing systems?",
    a: "Yes. We can troubleshoot existing IT, Wi-Fi, network, CCTV, alarm, access control, VoIP and smart technology issues.",
  },
];

export const propertyTypes = [
  "Home / Condo",
  "Office",
  "Clinic",
  "Dental Office",
  "Retail",
  "Warehouse",
  "Other",
];

export const serviceNeededOptions = [
  "Remote Help Desk",
  "On-Site IT Support",
  "Quick Response Support",
  "Complete Office Setup",
  "Residential Technology Setup",
  "Network Cabling / Rack Setup",
  "Wi-Fi / Mesh Wi-Fi",
  "CCTV Installation",
  "Intrusion Alarm",
  "Access Control",
  "VoIP",
  "Smart Home",
  "Other",
];

export const urgencyOptions = ["ASAP", "This Week", "This Month", "Planning Stage"];
export const preferredContactOptions = ["Phone Call", "Email", "Text Message"];


export const contactHighlights = [
  {
    title: "Call or Text",
    value: phone,
    href: `tel:${phone.replace(/[^+\d]/g, "")}`,
    note: "Use for quick support questions and service requests.",
  },
  {
    title: "Email",
    value: email,
    href: `mailto:${email}`,
    note: "Best for quotes, project details and attachments.",
  },
  {
    title: "Service Address",
    value: `${addressLine1} • ${addressLine2}`,
    href: "/contact#quote-form",
    note: "Serving residential and business clients across the GTA.",
  },
];
