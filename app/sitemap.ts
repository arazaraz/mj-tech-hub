import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/help-desk", "/remote-support", "/office-setup", "/residential", "/voip", "/ai-receptionist", "/projects", "/service-pricing", "/book-meeting", "/contact"];
  return routes.map((route) => ({ url: `https://mjtechhub.ca${route}`, lastModified: new Date(), changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : .8 }));
}
