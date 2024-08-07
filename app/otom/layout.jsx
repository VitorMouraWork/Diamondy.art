import './otom.css'
import Head from 'next/head';
import OtomHeader from './otom components/OtomHeader';
import Darkmode from './otom components/darkmode';
import Provider from './otom components/Provider';

export const metadata = {
  title: 'OTOM',
  description: 'OTOM website',
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
