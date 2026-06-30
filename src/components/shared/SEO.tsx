import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SITE, canonicalUrlFor, absoluteUrl } from '@/config/site';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  /** Sobrescreve o caminho canonico (ex.: "/orcamento"). Por padrao usa a rota atual. */
  canonicalPath?: string;
  noIndex?: boolean;
}

export function SEO({
  title,
  description,
  keywords = [],
  ogImage = SITE.ogImage,
  ogType = 'website',
  canonicalPath,
  noIndex = false
}: SEOProps) {
  const { pathname } = useLocation();
  const siteName = `${SITE.name} | ${SITE.city}-${SITE.state}`;
  const fullTitle = `${title} | ${siteName}`;

  const canonicalUrl = canonicalPath
    ? `${SITE.url}${canonicalPath}`
    : canonicalUrlFor(pathname);
  const ogImageUrl = absoluteUrl(ogImage);

  const defaultKeywords = [
    'engenheiro civil Cáceres',
    'engenheiro civil Cáceres MT',
    'engenharia civil Cáceres',
    'engenharia civil em Cáceres MT',
    'engenheiro civil Mato Grosso',
    'engenheiro civil perto de mim Cáceres',
    'regularização de imóveis Cáceres',
    'desdobro de lote Cáceres',
    'usucapião Cáceres',
    'AVCB Cáceres',
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
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Additional SEO */}
      <meta name="author" content={SITE.legalName} />
      <meta name="geo.region" content={SITE.region} />
      <meta name="geo.placename" content={SITE.city} />
      <html lang="pt-BR" />
    </Helmet>
  );
}
