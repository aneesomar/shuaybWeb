const SITE_URL = "https://omarphysiotherapy.co.za";
const DEFAULT_IMAGE = `${SITE_URL}/images/reception-shuayb-1.webp`;

type SeoConfig = {
  title: string;
  description: string;
  path: string;
};

export const pageSeo: Record<string, SeoConfig> = {
  "/": {
    title: "Shuayb Omar Physiotherapy | Physiotherapist Cape Town & Rondebosch",
    description:
      "Evidence-based physiotherapy in Rondebosch, Cape Town. Sports massage, dry needling, cupping therapy, injury rehabilitation and home visits at medical aid rates.",
    path: "/",
  },
  "/about-us": {
    title: "About Us | Shuayb Omar Physiotherapy Cape Town",
    description:
      "Meet Shuayb Omar, a UCT-qualified physiotherapist offering patient-first physiotherapy, rehabilitation and pain management in Rondebosch, Cape Town.",
    path: "/about-us",
  },
  "/testimonials": {
    title: "Google Reviews | Shuayb Omar Physiotherapy",
    description:
      "Read patient Google reviews for Shuayb Omar Physiotherapy (Pty) Ltd, rated 4.9 stars for physiotherapy care in Cape Town.",
    path: "/testimonials",
  },
  "/contact-us": {
    title: "Contact Us | Book a Physiotherapy Appointment in Rondebosch",
    description:
      "Contact Shuayb Omar Physiotherapy to book a physiotherapy appointment at Room 305, Summit House, Rondebosch Medical Center in Cape Town.",
    path: "/contact-us",
  },
};

function setMeta(selector: string, attribute: "content" | "href", value: string) {
  const element = document.head.querySelector(selector);

  if (element) {
    element.setAttribute(attribute, value);
  }
}

export function applySeo(path: string) {
  const seo = pageSeo[path] ?? pageSeo["/"];
  const canonicalUrl = `${SITE_URL}${seo.path === "/" ? "/" : seo.path}`;

  document.title = seo.title;

  setMeta('meta[name="description"]', "content", seo.description);
  setMeta('link[rel="canonical"]', "href", canonicalUrl);
  setMeta('meta[property="og:title"]', "content", seo.title);
  setMeta('meta[property="og:description"]', "content", seo.description);
  setMeta('meta[property="og:url"]', "content", canonicalUrl);
  setMeta('meta[property="og:image"]', "content", DEFAULT_IMAGE);
  setMeta('meta[name="twitter:title"]', "content", seo.title);
  setMeta('meta[name="twitter:description"]', "content", seo.description);
  setMeta('meta[name="twitter:image"]', "content", DEFAULT_IMAGE);
}
