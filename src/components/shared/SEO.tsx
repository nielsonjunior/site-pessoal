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
  const siteName = 'Engenharia Civil Projetos';
  const fullTitle = `${title} | ${siteName}`;
  
  const defaultKeywords = [
    'engenheiro civil',
    'projetos de engenharia',
    'regularização de imóveis',
    'ART',
    'laudos técnicos',
    'reformas',
    'São Paulo',
    'Grande SP'
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
      <meta name="author" content="Engenharia Civil Projetos" />
      <meta name="geo.region" content="BR-SP" />
      <meta name="geo.placename" content="São Paulo" />
      <html lang="pt-BR" />
    </Helmet>
  );
}
