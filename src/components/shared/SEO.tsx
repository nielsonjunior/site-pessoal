import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

export function SEO({
  title,
  description,
  keywords = [],
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  canonicalUrl,
  noIndex = false
}: SEOProps) {
  const siteName = 'Nielson Pinheiro - Engenheiro Civil | Cáceres-MT';
  const fullTitle = `${title} | ${siteName}`;

  const defaultKeywords = [
    'engenheiro civil Cáceres',
    'engenheiro civil Cáceres MT',
    'engenheiro civil Mato Grosso',
    'regularização de imóveis Cáceres',
    'ART Cáceres',
    'laudos técnicos Cáceres',
    'reformas Cáceres MT',
    'Nielson Pinheiro engenheiro',
    'CREA Cáceres'
  ];

  const allKeywords = [...defaultKeywords, ...keywords].join(', ');

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Additional SEO */}
      <meta name="author" content="Nielson Pinheiro de Castilho Junior" />
      <meta name="geo.region" content="BR-MT" />
      <meta name="geo.placename" content="Cáceres" />
      <html lang="pt-BR" />
    </Helmet>
  );
}
