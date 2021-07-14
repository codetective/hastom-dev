import React from 'react';
import Helmet from 'react-helmet';

export default function HelmetForSEO({ title, description, image }) {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={window.location} />
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      <meta property="og:url" content={window.url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content={description} />
    </Helmet>
  );
}
