export type Project = {
  title: string;
  slug: string;
  location: string;
  propertyType: string;
  category: string;
  services: string[];
  challenge: string;
  solution: string;
  result: string;
  images: string[];
};

export const projects: Project[] = [
  {
    title: "Small Office Network & Rack Setup",
    slug: "small-office-network-rack-setup-toronto",
    location: "Toronto",
    propertyType: "Small Office",
    category: "Network & Infrastructure",
    services: ["Network Cabling", "Patch Panel Setup", "Rack Installation", "Wi-Fi Access Points"],
    challenge: "The office had frequent network drops, unorganized cabling, and no dedicated rack space for core infrastructure.",
    solution: "Designed a clean rack layout, re-terminated data runs, labeled all patch points, and deployed managed switching with segmented Wi-Fi coverage.",
    result: "Stable wired and wireless performance, easier maintenance, and a professional back-office infrastructure standard.",
    images: [],
  },
  {
    title: "Dental Office IT & Wi-Fi Setup",
    slug: "dental-office-it-wifi-setup-north-york",
    location: "North York",
    propertyType: "Dental Office",
    category: "Complete Office Setup",
    services: ["Workstation Setup", "Wi-Fi & Mesh Wi-Fi", "Printer / Scanner Support", "Microsoft 365 & Email"],
    challenge: "A growing clinic needed reliable connectivity for front desk, operatories, and cloud-based scheduling.",
    solution: "Deployed structured Wi-Fi zones, configured secured staff/guest networks, and completed workstation, printer, and email readiness.",
    result: "Improved appointment workflow, stronger wireless reliability, and smoother day-to-day operations for clinic staff.",
    images: [],
  },
  {
    title: "Residential Mesh Wi-Fi Upgrade",
    slug: "residential-mesh-wifi-upgrade-vaughan",
    location: "Vaughan",
    propertyType: "Residential Home",
    category: "Residential & Smart Home",
    services: ["Mesh Wi-Fi Installation", "Wi-Fi Dead Zone Troubleshooting", "Home Office Setup"],
    challenge: "The homeowner experienced dead zones across multiple floors and poor video-call performance.",
    solution: "Installed a tuned mesh Wi-Fi system, optimized access point placement, and separated bandwidth-heavy devices.",
    result: "Consistent whole-home coverage, better roaming, and stable remote work/video conferencing quality.",
    images: [],
  },
  {
    title: "CCTV Camera Installation",
    slug: "cctv-camera-installation-gta",
    location: "GTA",
    propertyType: "Commercial Property",
    category: "Security Systems",
    services: ["CCTV Camera Installation", "NVR / Remote Viewing Setup", "Cable Management"],
    challenge: "The property required wider surveillance coverage and cleaner remote visibility for management.",
    solution: "Installed multi-angle IP cameras, centralized recording, and secured remote viewing access for authorized users.",
    result: "Expanded monitoring coverage, easier incident review, and improved daily site visibility.",
    images: [],
  },
  {
    title: "Access Control Door Setup",
    slug: "access-control-door-setup-mississauga",
    location: "Mississauga",
    propertyType: "Professional Office",
    category: "Security Systems",
    services: ["Access Control", "Door Contacts", "Basic User Provisioning"],
    challenge: "Client needed controlled entry to restricted areas while maintaining simple team access management.",
    solution: "Implemented door controllers, credential-based access, and a documented user enrollment process.",
    result: "Better entry security, clear access policy enforcement, and reduced manual key-management overhead.",
    images: [],
  },
  {
    title: "Alarm Panel & Zone Testing",
    slug: "alarm-panel-zone-testing-toronto",
    location: "Toronto",
    propertyType: "Mixed-Use Property",
    category: "Security Systems",
    services: ["Intrusion Alarm Panels", "Zone Verification", "Motion Detector Testing"],
    challenge: "Existing alarm zones were inconsistently reporting and required validation before occupancy changes.",
    solution: "Audited panel programming, tested each zone end-to-end, and corrected labeling/reporting inconsistencies.",
    result: "Reliable alarm event reporting, clearer zone mapping, and improved readiness for ongoing monitoring.",
    images: [],
  },
];

export const recentProjects = projects.slice(0, 3);
