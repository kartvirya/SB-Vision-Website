import { useEffect } from "react";
import { useLocation } from "wouter";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
}

const defaultSEO = {
  title: "SB Vision - Latest Phones & Premium Accessories in Kathmandu, Nepal",
  description: "Suraj Electronics Nepal - Your trusted destination for latest smartphones and premium phone accessories in Khahare Khola, Kathmandu. Genuine products, best prices, expert service. Call us at 9841759119 or visit our store.",
  keywords: "phones Nepal, mobile phones Kathmandu, phone accessories Kathmandu, smartphone store Nepal, iPhone cases Nepal, phone cases Kathmandu, screen protectors Nepal, phone chargers Kathmandu, Suraj Electronics Nepal, SB Vision, mobile accessories Kathmandu, latest phones Nepal, phone store Khahare Khola",
  image: "/logo.png",
  type: "website",
};

export function SEO({ title, description, keywords, image, type }: SEOProps) {
  const [location] = useLocation();
  const siteUrl = typeof window !== "undefined" ? window.location.origin : "";
  const currentUrl = `${siteUrl}${location}`;

  const seo = {
    title: title || defaultSEO.title,
    description: description || defaultSEO.description,
    keywords: keywords || defaultSEO.keywords,
    image: image || defaultSEO.image,
    type: type || defaultSEO.type,
  };

  useEffect(() => {
    // Update document title
    document.title = seo.title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = "name") => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Basic SEO meta tags
    updateMetaTag("description", seo.description);
    updateMetaTag("keywords", seo.keywords);
    updateMetaTag("author", "SB Vision - Suraj Electronics Nepal");
    updateMetaTag("robots", "index, follow");
    updateMetaTag("googlebot", "index, follow");
    updateMetaTag("language", "English");
    updateMetaTag("geo.region", "NP-BA");
    updateMetaTag("geo.placename", "Kathmandu");
    updateMetaTag("geo.position", "27.7172;85.3240");
    updateMetaTag("ICBM", "27.7172, 85.3240");

    // Open Graph meta tags
    updateMetaTag("og:title", seo.title, "property");
    updateMetaTag("og:description", seo.description, "property");
    updateMetaTag("og:image", `${siteUrl}${seo.image}`, "property");
    updateMetaTag("og:url", currentUrl, "property");
    updateMetaTag("og:type", seo.type, "property");
    updateMetaTag("og:site_name", "SB Vision", "property");
    updateMetaTag("og:locale", "en_US", "property");

    // Twitter Card meta tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", seo.title);
    updateMetaTag("twitter:description", seo.description);
    updateMetaTag("twitter:image", `${siteUrl}${seo.image}`);

    // Business/Contact meta tags
    updateMetaTag("contact:phone_number", "+977-9841759119");
    updateMetaTag("contact:phone_number", "+977-01-4535346");
    updateMetaTag("contact:locality", "Khahare Khola");
    updateMetaTag("contact:region", "Kathmandu");
    updateMetaTag("contact:postal_code", "44600");
    updateMetaTag("contact:country_name", "Nepal");

    // Canonical URL
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", currentUrl);

    // Add structured data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "SB Vision - Suraj Electronics Nepal",
      "image": `${siteUrl}/logo.png`,
      "@id": siteUrl,
      "url": siteUrl,
      "telephone": ["+977-9841759119", "+977-01-4535346"],
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Khahare Khola",
        "addressLocality": "Kathmandu",
        "postalCode": "44600",
        "addressCountry": "NP"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 27.7172,
        "longitude": 85.3240
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://www.facebook.com/SurajElectronicsNepal",
        "https://www.instagram.com/reel/DSZuqPaj5XU/"
      ],
      "description": seo.description,
      "areaServed": {
        "@type": "City",
        "name": "Kathmandu"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Mobile Phones and Accessories",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Latest Smartphones"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Phone Cases"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Screen Protectors"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Phone Chargers and Cables"
            }
          }
        ]
      }
    };

    // Remove existing structured data script if any
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add structured data script
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }, [location, seo.title, seo.description, seo.keywords, seo.image, seo.type, currentUrl, siteUrl]);

  return null;
}

