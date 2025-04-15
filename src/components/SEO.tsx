import { Helmet } from 'react-helmet-async';
import { organizationSchemaString, defaultSEO } from '../lib/seoData';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

/**
 * SEO component for dynamic meta tags management
 */
const SEO = ({
  title,
  description = defaultSEO.defaultDescription,
  keywords,
  ogImage = "/images/FAM_Logo_Fortitude.png",
  canonical,
}: SEOProps) => {
  const fullTitle = `${title} | ${defaultSEO.siteName}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={defaultSEO.siteName} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Canonical URL to prevent duplicate content issues */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Structured Data for NonProfit Organization */}
      <script type="application/ld+json">{organizationSchemaString}</script>
    </Helmet>
  );
};

export default SEO;
