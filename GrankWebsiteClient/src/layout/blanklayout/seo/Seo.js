import React from "react";
import { Helmet } from "react-helmet-async";
const Seo = ({
  title,
  description,
  name,
  type,
  yahooseeker,
  msnbot,
  googlebot,
  searchengines,
  keywords,
  canonical,
}) => {
  return (
    <>
      <Helmet>
        {/* Standard metadata tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {/* End standard metadata tags */}
        {/* Facebook tags */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="YahooSeeker" content={yahooseeker} />
        <meta name="msnbot" content={msnbot} />
        <meta name="googlebot" content={googlebot} />
        <meta name="search engines" content={searchengines} />
        {/* Canonical link tag */}
        {canonical && <link rel="canonical" href={canonical} />}

        {/* End Facebook tags */}
      </Helmet>
    </>
  );
};

export default Seo;

{
  /* Twitter tags */
}
{
  /* <meta name="twitter:creator" content={name} />
        <meta name="twitter:card" content={type} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} /> */
}
{
  /* End Twitter tags */
}
