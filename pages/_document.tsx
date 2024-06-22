import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const meta = {
    title: 'Rushabh Shroff\'s Website',
    description: 'Software Developer and Customer Engineer',
    image: 'https://rushabhshroff.github.io/logo.png'
  }
  return (
    <Html lang="en">
      <Head >
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
