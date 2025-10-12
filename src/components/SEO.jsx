import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Riyadh Appliance Repair Services",
  description = "Professional appliance repair services in Riyadh",
  keywords = "appliance repair, Riyadh repair services",
  canonical = "https://riyadhrepairingservice.com/",
  ogImage = "https://riyadhrepairingservice.com/assets/images/footer_logo.png",
  ogType = "website",
  ogTitle,
  ogDescription,
  langAlternates = [],
  schema = null
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Language Alternatives */}
      {langAlternates.map((alt, index) => (
        <link key={index} rel="alternate" hrefLang={alt.lang} href={alt.url} />
      ))}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="ar_SA" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@riyadhrepairs" />
      
      {/* Additional Meta */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Riyadh Appliance Services" />
      
      {/* Custom Schema Markup */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;