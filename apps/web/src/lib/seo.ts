export type SeoMetadata = {
  title: string;
  description: string;
  keywords: string[];
  url: string;
  image?: string;
  type?: "website" | "software";
};

export function getSeoMetadata(config: SeoMetadata) {
  const {
    title,
    description,
    keywords,
    url,
    image = "https://js-devtools.sidme.dev/screenshot.png",
    type = "website",
  } = config;

  const baseUrl = "https://js-devtools.sidme.dev";
  const fullUrl = url.startsWith("http") ? url : `${baseUrl}${url}`;

  const meta: any[] = [
    { title: title },
    { name: "description", content: description },
    { name: "keywords", content: keywords.join(", ") },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: fullUrl },
    { property: "og:image", content: image },
    { property: "og:type", content: type === "software" ? "website" : type },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    { name: "robots", content: "index,follow" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type === "software" ? "SoftwareApplication" : "WebSite",
    name: title,
    description: description,
    url: fullUrl,
    applicationCategory: type === "software" ? "DeveloperApplication, MultimediaApplication" : undefined,
    operatingSystem: type === "software" ? "Any" : undefined,
    offers: type === "software" ? {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    } : undefined,
    author: {
      "@type": "Person",
      name: "Siddhartha Mishra",
      url: "https://sidme.vercel.app/",
    },
  };

  return {
    meta,
    links: [{ rel: "canonical", href: fullUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  };
}
