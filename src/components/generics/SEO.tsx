import React from 'react';
import Head from 'next/head';
import useConfig from 'hooks/useConfig';

export default function SEO() {
  const { constants } = useConfig();

  return (
    <Head>
      <title>{constants.title}</title>
      <meta name="description" content={constants.description} />
      <meta property="og:title" content={constants.title} />
      <meta property="og:site_name" content={constants.title} />
      <meta property="og:description" content={constants.description} />
      <meta property="og:image" content={constants.avatar} />
      <meta property="og:url" content={constants.url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={constants.title} />
      <meta name="twitter:description" content={constants.description} />
      <meta name="twitter:image" content={constants.avatar} />
      <meta name="twitter:url" content={constants.url} />
      <meta name="twitter:site" content="@kevfarid_" />
      <meta name="twitter:creator" content="@kevfarid_" />
    </Head>
  );
}
