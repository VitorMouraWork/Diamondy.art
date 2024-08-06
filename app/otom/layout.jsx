import '@/styles/otom.css'
import Head from 'next/head';
import OtomHeader from './otom components/OtomHeader';

export const metadata = {
  title: 'OTOM',
  description: 'OTOM website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <OtomHeader/>
        {children}
      </body>
    </html>
  )
}
