import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const siteUrl = "https://omarphysiotherapy.co.za";
const defaultImage = `${siteUrl}/images/reception-shuayb-1.webp`;
const distDir = path.resolve("dist");

const pages = [
  {
    path: "/",
    title:
      "Shuayb Omar Physiotherapy | Physiotherapist Cape Town & Rondebosch",
    description:
      "Evidence-based physiotherapy in Rondebosch, Cape Town. Sports massage, dry needling, cupping therapy, injury rehabilitation and home visits at medical aid rates.",
  },
  {
    path: "/about-us",
    title: "About Shuayb Omar | Physiotherapist in Rondebosch, Cape Town",
    description:
      "Meet Shuayb Omar, a UCT-qualified physiotherapist offering patient-first physiotherapy, rehabilitation and pain management in Rondebosch, Cape Town.",
  },
  {
    path: "/testimonials",
    title: "Patient Google Reviews | Shuayb Omar Physiotherapy Cape Town",
    description:
      "Read patient Google reviews for Shuayb Omar Physiotherapy, rated 4.9 stars for physiotherapy care in Rondebosch, Cape Town.",
  },
  {
    path: "/contact-us",
    title: "Contact Shuayb Omar Physiotherapy | Book in Rondebosch",
    description:
      "Contact Shuayb Omar Physiotherapy to book a physiotherapy appointment at Room 305, Summit House, Rondebosch Medical Center in Cape Town.",
  },
];

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function canonicalFor(pagePath) {
  return `${siteUrl}${pagePath === "/" ? "/" : pagePath}`;
}

function replaceTag(html, selector, replacement) {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`<[^>]+${escapedSelector}[^>]*>`, "i");

  return html.replace(pattern, replacement);
}

function withPageMetadata(html, page) {
  const canonical = canonicalFor(page.path);
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);

  let nextHtml = html
    .replace(/<title>.*?<\/title>/i, `<title>${title}</title>`)
    .replace(
      /<script type="application\/ld\+json" data-page-schema>[\s\S]*?<\/script>\s*/i,
      "",
    );

  nextHtml = replaceTag(
    nextHtml,
    'name="description"',
    `<meta name="description" content="${description}" />`,
  );
  nextHtml = replaceTag(
    nextHtml,
    'rel="canonical"',
    `<link rel="canonical" href="${canonical}" />`,
  );
  nextHtml = replaceTag(
    nextHtml,
    'property="og:title"',
    `<meta property="og:title" content="${title}" />`,
  );
  nextHtml = replaceTag(
    nextHtml,
    'property="og:description"',
    `<meta property="og:description" content="${description}" />`,
  );
  nextHtml = replaceTag(
    nextHtml,
    'property="og:url"',
    `<meta property="og:url" content="${canonical}" />`,
  );
  nextHtml = replaceTag(
    nextHtml,
    'property="og:image"',
    `<meta property="og:image" content="${defaultImage}" />`,
  );
  nextHtml = replaceTag(
    nextHtml,
    'name="twitter:title"',
    `<meta name="twitter:title" content="${title}" />`,
  );
  nextHtml = replaceTag(
    nextHtml,
    'name="twitter:description"',
    `<meta name="twitter:description" content="${description}" />`,
  );
  nextHtml = replaceTag(
    nextHtml,
    'name="twitter:image"',
    `<meta name="twitter:image" content="${defaultImage}" />`,
  );

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: page.title,
    description: page.description,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Shuayb Omar Physiotherapy",
      url: `${siteUrl}/`,
    },
    about: {
      "@id": `${siteUrl}/#business`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: defaultImage,
    },
  };

  return nextHtml.replace(
    "</head>",
    `\n    <script type="application/ld+json" data-page-schema>${JSON.stringify(pageSchema)}</script>\n  </head>`,
  );
}

const template = await readFile(path.join(distDir, "index.html"), "utf8");

await Promise.all(
  pages.map(async (page) => {
    const outputHtml = withPageMetadata(template, page);
    const outputDir =
      page.path === "/" ? distDir : path.join(distDir, page.path.slice(1));

    await mkdir(outputDir, { recursive: true });
    await writeFile(path.join(outputDir, "index.html"), outputHtml);
  }),
);

console.log(`Generated ${pages.length} SEO page entries.`);
