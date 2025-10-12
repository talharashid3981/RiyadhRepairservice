import { Helmet } from 'react-helmet-async';

const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Riyadh Repairing Service",
    "image": "https://www.riyadhrepairingservice.com/logo.jpg",
    "description": "Professional appliance repair service in Riyadh",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Riyadh",
      "addressRegion": "Riyadh",
      "postalCode": "12345",
      "addressCountry": "SA"
    },
    "telephone": "+966-59-8001-569",
    "url": "https://www.riyadhrepairingservice.com",
    "priceRange": "$$",
    "areaServed": "Riyadh"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;