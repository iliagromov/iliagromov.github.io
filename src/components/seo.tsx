/**
 * Seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import { useSiteMetadata } from "../shared/useSiteMetadata";

interface ISEO {
  title: string;
  description?: string;
  pathname?: any;
  children?: any;
}

const SEO = ({ title, description, pathname, children }: ISEO) => {
  const {
    title: metaTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title || metaTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };

  const metaDescription = "8 лет разрабатываю с нуля сайты «под ключ» ";
  const defaultTitle = "Ilia Gromov Digital";

  return (
    <>
      <title>{`${title} | ${defaultTitle}`}</title>
      {seo.description ? (
        <meta
          name="description"
          content={`${seo.description} | ${defaultTitle}`}
        />
      ) : (
        <meta
          name="description"
          content={`${metaDescription} | ${defaultTitle}`}
        />
      )}
      <link rel="canonical" href={`https://i.gromov.digital/${pathname}`} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      {children}
    </>
  );
};

export default SEO;
