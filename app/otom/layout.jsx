import './otom.css'
import Head from 'next/head';
import OtomHeader from './otom components/OtomHeader';
import Darkmode from './otom components/darkmode';
import Provider from './otom components/Provider';

export const metadata = {
  title: 'Over the Object Madness',
  description: 'o site oficial de OTOM!',
  url: 'https://diamondy.art.br',
    siteName: 'Over the Object Madness',
    images: [
      {
        url: 'https://diamondy.art.br/og.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://diamondy.art.br/og.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'otom',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider>
      <body className='lightgrid bg:white dark:bg-[#0C1222] h-full'>
          <Darkmode/>
            <OtomHeader/>
            {children}
      </body>
      </Provider>
    </html>
  )
}
