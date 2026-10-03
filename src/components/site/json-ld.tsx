import { site } from "@/lib/site";

// Structured data that search engines and AI tools read to understand
// who this site is about.
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.url}/#site`,
        url: `${site.url}/`,
        name: site.name,
      },
      {
        "@type": "Person",
        "@id": `${site.url}/#charles`,
        name: site.name,
        url: `${site.url}/`,
        image: `${site.url}/headshot.jpg`,
        email: site.email,
        worksFor: { "@id": `${site.url}/#berlin` },
        knowsAbout: [
          "Business development",
          "AI-native business systems",
          "Agentic AI implementation",
          "Custom software",
          "AI marketing",
          "Search engine optimization",
          "Answer engine optimization",
          "Generative engine optimization",
          "Tax resolution",
        ],
      },
      {
        "@type": "Organization",
        "@id": `${site.url}/#berlin`,
        name: "Berlin Technologies LLC",
        description: "AI consulting and business development.",
        founder: { "@id": `${site.url}/#charles` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
