import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://banana-iusv.vercel.app";
  const contentSrc = `${siteUrl}/img/contents-01.png?v=2`;
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="과제" />
        <meta property="og:image" content={contentSrc} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={contentSrc} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
