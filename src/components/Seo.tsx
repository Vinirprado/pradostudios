import { Helmet } from "react-helmet-async";

const BASE_URL = "https://pradostudios.lovable.app";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  jsonLd?: Record<string, unknown>[];
}

const Seo = ({ title, description, path, jsonLd = [] }: SeoProps) => {
  const url = `${BASE_URL}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {jsonLd.map((d, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(d)}</script>
      ))}
    </Helmet>
  );
};

export const projectBreadcrumb = (name: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: `${BASE_URL}/` },
    { "@type": "ListItem", position: 2, name, item: `${BASE_URL}${path}` },
  ],
});

export const projectWork = (name: string, description: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: `${name} — Identidade Visual`,
  description,
  url: `${BASE_URL}${path}`,
  creator: { "@type": "Person", name: "Vinicius Ramos" },
});

export default Seo;
