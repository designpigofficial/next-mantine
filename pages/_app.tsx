import { AppProps } from 'next/app';
import Head from 'next/head';
import MantineProvider from '@/providers/mantineProvider';
import { DefaultSeo } from 'next-seo';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <DefaultSeo 
        defaultTitle='Next-Mantine'
      />
      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}