import '../styles/globals.css'
import Header from '/components/Header';
import Head from 'next/head';
import Mobile from '/components/Mobile';

export const metadata = {
  title: 'Diamondy.art',
  description: 'A Developers website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body><Header/><Mobile/>{children}</body>
    </html>
  )
}
